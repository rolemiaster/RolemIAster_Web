import importlib.util
import os
import tempfile
import unittest
from pathlib import Path
from unittest import mock


SCRIPT = Path(__file__).parents[1] / "setup_codex_skills.py"


def load_module():
    spec = importlib.util.spec_from_file_location("setup_codex_skills", SCRIPT)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def write_skill(
    root: Path,
    folder: str,
    name: str,
    enabled: bool = True,
    description: str = "Use when testing project skill registration.",
    body: str = "# Test skill",
):
    skill_dir = root / ".agent" / "skills" / folder
    skill_dir.mkdir(parents=True)
    marker = '  codex-project-skill: "true"\n' if enabled else ""
    (skill_dir / "SKILL.md").write_text(
        "---\n"
        f"name: {name}\n"
        f"description: {description}\n"
        + ("metadata:\n" + marker if marker else "")
        + f"---\n\n{body}\n",
        encoding="utf-8",
    )
    return skill_dir


class SetupCodexSkillsTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.module = load_module()

    def tearDown(self):
        self.temp.cleanup()

    def test_discovers_only_opted_in_skills(self):
        enabled = write_skill(self.root, "enabled", "project-enabled")
        write_skill(self.root, "disabled", "project-disabled", enabled=False)

        discovered = self.module.discover_skills(self.root)

        self.assertEqual(discovered, {"project-enabled": enabled})

    def test_apply_is_idempotent_and_uses_relative_links(self):
        source = write_skill(self.root, "one", "project-one")

        first = self.module.sync_skills(self.root)
        second = self.module.sync_skills(self.root)
        link = self.root / ".agents" / "skills" / "project-one"

        self.assertEqual(first.created, 1)
        self.assertEqual(second.unchanged, 1)
        self.assertEqual(link.resolve(), source.resolve())
        if link.is_symlink():
            self.assertFalse(os.path.isabs(os.readlink(link)))

    def test_repairs_wrong_managed_link(self):
        source = write_skill(self.root, "one", "project-one")
        registry = self.root / ".agents" / "skills"
        registry.mkdir(parents=True)
        wrong = self.root / "wrong"
        wrong.mkdir()
        (registry / self.module.MANAGED_MARKER).write_text("", encoding="utf-8")
        os.symlink(wrong, registry / "project-one", target_is_directory=True)

        result = self.module.sync_skills(self.root)

        self.assertEqual(result.repaired, 1)
        self.assertEqual((registry / "project-one").resolve(), source.resolve())

    def test_removes_only_stale_managed_links(self):
        write_skill(self.root, "one", "project-one")
        registry = self.root / ".agents" / "skills"
        registry.mkdir(parents=True)
        stale_target = self.root / "stale-target"
        stale_target.mkdir()
        (registry / self.module.MANAGED_MARKER).write_text("", encoding="utf-8")
        os.symlink(stale_target, registry / "project-stale", target_is_directory=True)

        result = self.module.sync_skills(self.root)

        self.assertEqual(result.removed, 1)
        self.assertFalse((registry / "project-stale").exists())
        self.assertTrue((registry / "project-one").exists())

    def test_refuses_to_overwrite_regular_directory(self):
        write_skill(self.root, "one", "project-one")
        collision = self.root / ".agents" / "skills" / "project-one"
        collision.mkdir(parents=True)

        with self.assertRaises(self.module.RegistryCollisionError):
            self.module.sync_skills(self.root)

    def test_rejects_duplicate_native_names(self):
        write_skill(self.root, "one", "project-same")
        write_skill(self.root, "two", "project-same")

        with self.assertRaises(self.module.SkillConfigError):
            self.module.discover_skills(self.root)

    def test_rejects_invalid_native_name(self):
        write_skill(self.root, "one", "Project_Invalid")

        with self.assertRaises(self.module.SkillConfigError):
            self.module.discover_skills(self.root)

    def test_rejects_oversized_description(self):
        write_skill(
            self.root,
            "one",
            "project-one",
            description="x" * (self.module.MAX_DESCRIPTION_CHARS + 1),
        )

        with self.assertRaises(self.module.SkillConfigError):
            self.module.discover_skills(self.root)

    def test_rejects_oversized_body(self):
        write_skill(
            self.root,
            "one",
            "project-one",
            body=" ".join(["word"] * (self.module.MAX_BODY_WORDS + 1)),
        )

        with self.assertRaises(self.module.SkillConfigError):
            self.module.discover_skills(self.root)

    def test_rejects_aggregate_metadata_over_budget(self):
        write_skill(self.root, "one", "project-one", description="first")
        write_skill(self.root, "two", "project-two", description="second")

        with (
            mock.patch.object(self.module, "MAX_TOTAL_METADATA_CHARS", 10),
            self.assertRaises(self.module.SkillConfigError),
        ):
            self.module.discover_skills(self.root)

    def test_check_reports_drift_without_modifying(self):
        write_skill(self.root, "one", "project-one")

        result = self.module.check_skills(self.root)

        self.assertFalse(result.ok)
        self.assertFalse((self.root / ".agents" / "skills" / "project-one").exists())

    def test_sync_creates_and_check_validates_registry_control_files(self):
        write_skill(self.root, "one", "project-one")

        self.module.sync_skills(self.root)
        registry = self.root / ".agents" / "skills"

        self.assertEqual(
            (registry / self.module.GITIGNORE_NAME).read_text(encoding="utf-8"),
            self.module.GITIGNORE_CONTENT,
        )
        self.assertEqual(
            (registry / self.module.MANAGED_MARKER).read_text(encoding="utf-8"),
            self.module.MANAGED_MARKER_CONTENT,
        )
        (registry / self.module.GITIGNORE_NAME).write_text(
            "incorrect\n", encoding="utf-8"
        )
        self.assertFalse(self.module.check_skills(self.root).ok)

    @unittest.skipUnless(os.name == "nt", "Fallback específico de Windows")
    def test_windows_falls_back_to_junction_when_symlink_is_denied(self):
        source = self.root / "source"
        source.mkdir()
        link = self.root / "registry" / "project-one"
        link.parent.mkdir()
        completed = mock.Mock(returncode=0, stdout="", stderr="")

        with (
            mock.patch.object(self.module.os, "symlink", side_effect=OSError),
            mock.patch.object(
                self.module.subprocess, "run", return_value=completed
            ) as run,
        ):
            mode = self.module._create_link(link, source)

        self.assertEqual(mode, "junction")
        command = run.call_args.args[0]
        self.assertEqual(command[:5], ["cmd.exe", "/d", "/c", "mklink", "/J"])
        self.assertEqual(command[5:], [str(link), str(source)])


if __name__ == "__main__":
    unittest.main()
