# Higiene del workspace

La raiz del proyecto debe permanecer limpia. Antes de crear un archivo, confirma que pertenece al codigo fuente, configuracion, documentacion del proyecto o `.agent/`.

## Rutas canonicas

| Tipo | Destino |
| --- | --- |
| Plan IA | `.agent/plans/<descripcion>-<6char>.md` |
| Memoria reutilizable | `.agent/memory/<YYYY-MM-DD>__<tema>.md` |
| Documentacion viva | `.agent/docs/<dominio>.md` |
| Regla del proyecto | `.agent/rules/<nombre>.md` |
| Skill local | `.agent/skills/<nombre>/SKILL.md` |
| Conocimiento acumulativo | `.agent/knowledge/` |
| Script interno recurrente | `.agent/scripts/<nombre>` |
| Script one-shot | No crear; ejecutar inline |
| Output temporal | TEMP del sistema o carpeta temporal gitignored, nunca raiz |

No mantener una carpeta de workflows como sistema vivo. Los procedimientos reutilizables pertenecen a `.agent/skills/`.

No borres ni reordenes artefactos publicados sin permiso. Si hay que conservar algo fuera del flujo normal, usa `archive/` solo tras explicar el motivo.
