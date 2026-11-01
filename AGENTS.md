# AGENTS.md - RolemIAster_Web

Contrato vinculante para cualquier agente IA que opere en este repositorio. Idioma de trabajo: espanol castellano. Si una orden humana directa y este archivo entran en conflicto, prevalece la orden humana posterior y explicita.

## 1. Identidad del proyecto

RolemIAster_Web es el repositorio independiente de la web publica publicada en GitHub Pages para `rolemiaster.com`. Centraliza paginas, assets y artefactos web de RolemIAster, SyncronIA y EmulAItor.

Fuentes de verdad, en este orden:

1. `AGENTS.md` en la raiz.
2. `.agent/` para reglas, docs, memoria, planes y conocimiento vivo.
3. `README.md`, estructura real del repo y scripts existentes.
4. Los proyectos consumidores: `D:\PROGRAMACION\RolemIAster`, `D:\PROGRAMACION\SyncronIA`, `D:\PROGRAMACION\Emulaitor` y `D:\PROGRAMACION\DEV_ControlPanelANX`.
5. Confirmaciones explicitas del usuario.

Si algo no esta verificado en esas fuentes, no se asume.

## 2. Alcance publico

- Dominio: `rolemiaster.com`, definido por `CNAME`.
- Rama de publicacion: `master`.
- Hosting: GitHub Pages desde este repo.
- Ruta local canonica: `D:\PROGRAMACION\RolemIAster_Web`.
- Remoto canonico: `https://github.com/rolemiaster/RolemIAster_Web.git`.

No recrear ni usar la antigua subcarpeta `Web` dentro del repositorio de RolemIAster. Esa carpeta fue retirada al separar la web del repositorio principal.

## 3. Protocolo obligatorio

Todo cambio material sigue: `INSPECT -> PLAN -> IMPLEMENT -> VERIFY -> DOCUMENT`.

Antes de cambiar archivos:

1. Leer este `AGENTS.md`.
2. Abrir solo los docs/reglas de `.agent/` que apliquen.
3. Inspeccionar el HTML, JSON, assets o scripts afectados.
4. Verificar que el cambio no rompe las rutas consumidas por RolemIAster, SyncronIA, EmulAItor o DEV_ControlPanelANX.
5. No ejecutar scripts que hagan `git commit`, `git push` o publiquen cambios sin orden explicita.

## 4. Estructura principal

| Ruta | Uso |
| --- | --- |
| `index.html` | Landing raiz multi-proyecto. |
| `rolemiaster/` | Web, changelog, manuales y assets de RolemIAster. |
| `syncronia/` | Web publica, privacidad y releases desktop de SyncronIA. |
| `emulaitor/` | Web publica, politicas, reviews y configuracion de EmulAItor. |
| `changelog/` | Changelog/CSV legacy compartido por herramientas antiguas. |
| `.agent/` | Documentacion operativa y memoria del agente. |

## 5. Reglas criticas

- No cambiar URLs publicas, nombres de archivo publicados, manifiestos `latest.json`, politicas o `app-ads.txt` sin verificar el consumidor correspondiente.
- No borrar instaladores, releases, changelogs historicos, politicas ni assets publicados salvo instruccion explicita.
- No introducir dependencias de build si una edicion HTML/CSS/JS estatica basta.
- No hardcodear rutas locales en contenido publico. Las rutas locales solo pueden aparecer en documentacion operativa.
- Mantener `subir_web.bat` como publicador manual del repo web; no ejecutarlo sin permiso porque puede hacer commit/push.

## 6. Comandos canonicos

| Tarea | Comando |
| --- | --- |
| Estado Git | `git status --short --branch` |
| Buscar rutas legacy | `rg -n -i "RolemIAster[\\/]Web|D:[\\/]PROGRAMACION[\\/]RolemIAster[\\/]Web" --glob '!AGENTS.md' --glob '!README.md' .` |
| Validar Python local | `python -m py_compile convert_to_base64.py` |
| Validar JSON publicado | `python -m json.tool syncronia/Release/latest.json` |
| Servir web local | `python -m http.server 8000` |

Para cambios visuales, usar Browser en Codex Desktop contra `http://localhost:8000/` y revisar escritorio/movil cuando proceda.

## 7. `.agent/`

| Ruta | Uso |
| --- | --- |
| `.agent/docs/` | Documentacion viva por dominio. |
| `.agent/rules/` | Reglas vinculantes especificas del repo. |
| `.agent/plans/` | Planes activos o trazabilidad de trabajos estructurales. |
| `.agent/memory/` | Hallazgos reutilizables fechados. |
| `.agent/knowledge/` | Conocimiento acumulativo tipo LLM Wiki. |
| `.agent/scripts/` | Scripts internos recurrentes del agente. |
| `.agent/skills/` | Skills locales futuras, solo si son especificas del repo web. |

Versionar solo el esqueleto minimo `.agents/skills` generado por `setup_codex_skills`; no copiar skills genericas de la plantilla. No versionar `.codegraph/` cacheado.

## 8. Complementos Codex Desktop

La configuracion local vive en `.codex/config.toml`.

- Browser: habilitado para QA visual de paginas estaticas locales.
- Creative Production: habilitado para trabajo puntual de assets, moodboards o material visual publico.
- No se habilitan complementos Android/Google Play aqui; esos pertenecen a SyncronIA y EmulAItor, no al repo web.

## 9. Verificacion y cierre

No declarar exito sin evidencia fresca. Como minimo, para cambios operativos en este repo:

1. `git status --short --branch`.
2. Busqueda dirigida de rutas legacy si se tocan rutas/publicacion.
3. Validacion de sintaxis aplicable: HTML/JSON/Python o revision Browser para cambios visuales.
4. Informe de archivos tocados, comandos ejecutados y riesgos residuales.

No hacer commit ni push sin orden explicita.
