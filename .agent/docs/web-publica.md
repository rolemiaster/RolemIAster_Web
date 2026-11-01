# Web publica

Este repositorio publica `rolemiaster.com` mediante GitHub Pages desde la rama `master`.

## Consumidores

| Proyecto | Uso de este repo |
| --- | --- |
| RolemIAster | Web principal, changelog, manuales y assets. |
| SyncronIA | Landing, privacidad y releases desktop bajo `syncronia/`. |
| EmulAItor | Politicas, reviews, configuracion web y `app-ads.txt`. |
| DEV_ControlPanelANX | Herramientas que escriben changelogs/manuales usando `web_repo_path`. |

## Rutas criticas

- `CNAME`: dominio publico.
- `app-ads.txt`: verificacion AdMob del dominio desarrollador.
- `syncronia/Release/latest.json`: manifiesto canonico de autoupdate desktop legacy.
- `rolemiaster/syncronia/Release/latest.json`: manifiesto legacy para clientes antiguos de SyncronIA.
- `emulaitor/config.json` y `emulaitor/reviews.json`: datos publicados consumidos por EmulAItor/herramientas.

## QA recomendado

1. Servir localmente con `python -m http.server 8000`.
2. Abrir `http://localhost:8000/` con Browser de Codex Desktop.
3. Revisar rutas relativas desde raiz y subdirectorios.
4. Validar JSON con `python -m json.tool <archivo>` si se toca configuracion o manifiestos.
5. No ejecutar `subir_web.bat` salvo orden explicita de publicar.
