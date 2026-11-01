#!/usr/bin/env python3
"""Rebuild Codex project skill links from canonical .agent/skills sources."""

from __future__ import annotations

import argparse
import os
import re
import stat
import subprocess
import sys
from pathlib import Path


MANAGED_MARKER = ".managed-by-setup-codex-skills"
MANAGED_MARKER_CONTENT = (
    "Generated locally by .agent/scripts/setup_codex_skills.py.\n"
)
GITIGNORE_NAME = ".gitignore"
GITIGNORE_CONTENT = "*\n!.gitignore\n!.managed-by-setup-codex-skills\n"
RESERVED_ENTRIES = {GITIGNORE_NAME, MANAGED_MARKER}
NAME_PATTERN = re.compile(r"^[a-z0-9-]{1,64}$")
TRUE_VALUES = {"true", '"true"', "'true'", "yes", '"yes"', "'yes'", "1"}
MAX_DESCRIPTION_CHARS = 180
MAX_BODY_WORDS = 600
MAX_TOTAL_METADATA_CHARS = 1400


class SkillConfigError(RuntimeError):
    pass


class RegistryCollisionError(RuntimeError):
    pass


class DiscoveredSkills(dict):
    def __init__(self):
        super().__init__()
        self.metadata_chars = 0


class SyncResult:
    def __init__(self):
        self.created = 0
        self.repaired = 0
        self.removed = 0
        self.unchanged = 0
        self.skill_count = 0
        self.metadata_chars = 0


class CheckResult:
    def __init__(self, issues=None, skill_count=0, metadata_chars=0):
        self.issues = list(issues or [])
        self.skill_count = skill_count
        self.metadata_chars = metadata_chars

    @property
    def ok(self):
        return not self.issues


def _repo_root_from_script():
    return Path(__file__).resolve().parents[2]


def _frontmatter(skill_file: Path):
    text = skill_file.read_text(encoding="utf-8-sig")
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        raise SkillConfigError(f"{skill_file}: falta frontmatter YAML")
    try:
        end = next(index for index in range(1, len(lines)) if lines[index].strip() == "---")
    except StopIteration as exc:
        raise SkillConfigError(f"{skill_file}: frontmatter sin cierre") from exc
    return lines[1:end], "\n".join(lines[end + 1 :])


def _parse_skill(skill_file: Path):
    lines, body = _frontmatter(skill_file)
    name = None
    description = None
    enabled = False
    in_metadata = False

    for raw_line in lines:
        stripped = raw_line.strip()
        indentation = len(raw_line) - len(raw_line.lstrip())

        if indentation == 0:
            in_metadata = stripped == "metadata:"
            if stripped.startswith("name:"):
                name = stripped.split(":", 1)[1].strip().strip('"').strip("'")
            elif stripped.startswith("description:"):
                description = stripped.split(":", 1)[1].strip().strip('"').strip("'")
            continue

        if in_metadata and stripped.startswith("codex-project-skill:"):
            value = stripped.split(":", 1)[1].strip().lower()
            enabled = value in TRUE_VALUES

    if not enabled:
        return None
    if not name or not NAME_PATTERN.fullmatch(name):
        raise SkillConfigError(
            f"{skill_file}: name inválido para skill Codex ({name!r})"
        )
    if not description:
        raise SkillConfigError(f"{skill_file}: falta description")
    if len(description) > MAX_DESCRIPTION_CHARS:
        raise SkillConfigError(
            f"{skill_file}: description usa {len(description)} caracteres; "
            f"máximo {MAX_DESCRIPTION_CHARS}"
        )
    body_words = len(body.split())
    if body_words > MAX_BODY_WORDS:
        raise SkillConfigError(
            f"{skill_file}: cuerpo usa {body_words} palabras; máximo {MAX_BODY_WORDS}"
        )
    return name, description


def discover_skills(root: Path):
    root = Path(root).resolve()
    skills_root = root / ".agent" / "skills"
    if not skills_root.is_dir():
        raise SkillConfigError(f"No existe {skills_root}")

    discovered = DiscoveredSkills()
    total_metadata_chars = 0
    for skill_dir in sorted(skills_root.iterdir(), key=lambda path: path.name):
        skill_file = skill_dir / "SKILL.md"
        if not skill_dir.is_dir() or not skill_file.is_file():
            continue
        parsed = _parse_skill(skill_file)
        if parsed is None:
            continue
        name, description = parsed
        if name in discovered:
            raise SkillConfigError(
                f"Nombre nativo duplicado {name!r}: "
                f"{discovered[name]} y {skill_dir}"
            )
        discovered[name] = skill_dir
        total_metadata_chars += len(name) + len(description)

    if total_metadata_chars > MAX_TOTAL_METADATA_CHARS:
        raise SkillConfigError(
            "Las skills Codex usan "
            f"{total_metadata_chars} caracteres de metadata; "
            f"presupuesto máximo {MAX_TOTAL_METADATA_CHARS}"
        )

    discovered.metadata_chars = total_metadata_chars
    return discovered


def _registry(root: Path):
    return Path(root).resolve() / ".agents" / "skills"


def _lexists(path: Path):
    return os.path.lexists(path)


def _is_reparse_directory(path: Path):
    try:
        info = path.lstat()
    except FileNotFoundError:
        return False
    attributes = getattr(info, "st_file_attributes", 0)
    return bool(attributes & getattr(stat, "FILE_ATTRIBUTE_REPARSE_POINT", 0))


def _is_link(path: Path):
    return path.is_symlink() or _is_reparse_directory(path)


def _resolved(path: Path):
    return Path(os.path.realpath(path))


def _same_target(link: Path, source: Path):
    return os.path.normcase(str(_resolved(link))) == os.path.normcase(
        str(source.resolve())
    )


def _remove_link(path: Path):
    if not _is_link(path):
        raise RegistryCollisionError(f"No se eliminará una ruta normal: {path}")
    try:
        path.unlink()
    except OSError:
        path.rmdir()


def _create_link(link: Path, source: Path):
    relative_target = os.path.relpath(source, link.parent)
    try:
        os.symlink(relative_target, link, target_is_directory=True)
        return "symlink"
    except OSError:
        if os.name != "nt":
            raise

    process = subprocess.run(
        ["cmd.exe", "/d", "/c", "mklink", "/J", str(link), str(source)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        check=False,
    )
    if process.returncode != 0:
        detail = (process.stdout + process.stderr).strip()
        raise OSError(f"No se pudo crear symlink ni junction para {link}: {detail}")
    return "junction"


def _registry_entries(registry: Path):
    if not registry.exists():
        return []
    return [
        path
        for path in registry.iterdir()
        if path.name not in RESERVED_ENTRIES
    ]


def _validate_registry_ownership(registry: Path):
    if not registry.exists():
        return
    marker = registry / MANAGED_MARKER
    if marker.exists():
        return
    collisions = [path for path in _registry_entries(registry) if not _is_link(path)]
    if collisions:
        joined = ", ".join(str(path) for path in collisions)
        raise RegistryCollisionError(
            "El registro no está marcado como gestionado y contiene rutas normales: "
            + joined
        )


def _write_control_file(path: Path, content: str):
    if _lexists(path) and not path.is_file():
        raise RegistryCollisionError(
            f"No se sobrescribirá la ruta de control no regular: {path}"
        )
    if not path.exists() or path.read_text(encoding="utf-8") != content:
        path.write_text(content, encoding="utf-8")


def sync_skills(root: Path):
    root = Path(root).resolve()
    discovered = discover_skills(root)
    registry = _registry(root)
    _validate_registry_ownership(registry)
    registry.mkdir(parents=True, exist_ok=True)
    _write_control_file(registry / GITIGNORE_NAME, GITIGNORE_CONTENT)
    _write_control_file(
        registry / MANAGED_MARKER,
        MANAGED_MARKER_CONTENT,
    )

    result = SyncResult()
    result.skill_count = len(discovered)
    result.metadata_chars = discovered.metadata_chars
    expected = set(discovered)

    for existing in _registry_entries(registry):
        if existing.name in expected:
            continue
        if not _is_link(existing):
            raise RegistryCollisionError(
                f"Ruta obsoleta no gestionable en el registro: {existing}"
            )
        _remove_link(existing)
        result.removed += 1

    for name, source in discovered.items():
        link = registry / name
        if not _lexists(link):
            _create_link(link, source)
            result.created += 1
            continue
        if not _is_link(link):
            raise RegistryCollisionError(
                f"No se sobrescribirá la ruta normal existente: {link}"
            )
        if _same_target(link, source):
            result.unchanged += 1
            continue
        _remove_link(link)
        _create_link(link, source)
        result.repaired += 1

    return result


def check_skills(root: Path):
    root = Path(root).resolve()
    discovered = discover_skills(root)
    registry = _registry(root)
    issues = []

    if not registry.is_dir():
        return CheckResult(
            [f"Falta el registro {registry}"],
            len(discovered),
            discovered.metadata_chars,
        )
    control_files = {
        GITIGNORE_NAME: GITIGNORE_CONTENT,
        MANAGED_MARKER: MANAGED_MARKER_CONTENT,
    }
    for name, expected_content in control_files.items():
        path = registry / name
        if not path.is_file():
            issues.append(f"Falta el archivo de control {name}")
        elif path.read_text(encoding="utf-8") != expected_content:
            issues.append(f"Contenido incorrecto en {name}")

    expected = set(discovered)
    for name, source in discovered.items():
        link = registry / name
        if not _lexists(link):
            issues.append(f"Falta {name}")
        elif not _is_link(link):
            issues.append(f"{name} no es un enlace")
        elif not _same_target(link, source):
            issues.append(f"{name} apunta a {_resolved(link)}, no a {source}")

    for existing in _registry_entries(registry):
        if existing.name not in expected:
            issues.append(f"Entrada obsoleta: {existing.name}")

    return CheckResult(issues, len(discovered), discovered.metadata_chars)


def _build_parser():
    parser = argparse.ArgumentParser(
        description="Reconstruye el registro local de skills nativas de Codex."
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=_repo_root_from_script(),
        help="Raíz del proyecto (por defecto, la detectada desde este script).",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Solo comprueba el registro; no modifica archivos.",
    )
    return parser


def main(argv=None):
    args = _build_parser().parse_args(argv)
    try:
        if args.check:
            result = check_skills(args.root)
            if result.ok:
                print(
                    "[OK] Registro Codex sincronizado. "
                    f"Presupuesto: {result.skill_count} skills, "
                    f"{result.metadata_chars}/{MAX_TOTAL_METADATA_CHARS} "
                    "caracteres de metadata."
                )
                return 0
            for issue in result.issues:
                print(f"[DRIFT] {issue}")
            return 1

        result = sync_skills(args.root)
        print(
            "[OK] Skills Codex: "
            f"{result.created} creadas, "
            f"{result.repaired} reparadas, "
            f"{result.removed} obsoletas retiradas, "
            f"{result.unchanged} sin cambios. "
            f"Presupuesto: {result.skill_count} skills, "
            f"{result.metadata_chars}/{MAX_TOTAL_METADATA_CHARS} "
            "caracteres de metadata."
        )
        return 0
    except (SkillConfigError, RegistryCollisionError, OSError) as exc:
        print(f"[ERROR] {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
