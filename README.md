# RolemIAster_Web

Repositorio independiente de la web publica publicada en GitHub Pages para `rolemiaster.com`.

> [!IMPORTANT]
> Repository: `https://github.com/rolemiaster/RolemIAster_Web`  
> Local canonical path: `D:\PROGRAMACION\RolemIAster_Web`  
> GitHub Pages source: rama `master`

## Alcance

Este repo centraliza la web y artefactos publicos de varios proyectos:

| Ruta | Uso |
| --- | --- |
| `index.html` | Landing raiz multi-proyecto. |
| `rolemiaster/` | Web, changelog, manuales y assets de RolemIAster. |
| `syncronia/` | Landing, privacidad y releases desktop de SyncronIA. |
| `emulaitor/` | Politicas, reviews y configuracion web de EmulAItor. |
| `app-ads.txt` | Verificacion AdMob del dominio desarrollador. |

La antigua subcarpeta `Web` dentro del repositorio de RolemIAster no debe recrearse ni usarse.

## Trabajo local

1. Leer `AGENTS.md` antes de cambiar archivos.
2. Editar HTML/CSS/JS/JSON/assets en este repo.
3. Para revisar visualmente, servir localmente:

```bash
python -m http.server 8000
```

4. Abrir `http://localhost:8000/` y validar las rutas afectadas.

## Publicacion

La publicacion se hace por GitHub Pages al subir cambios a `master`.

`subir_web.bat` existe como publicador manual, pero puede ejecutar `git add`, `git commit` y `git push`; no usarlo sin orden explicita.

## Codex

La base operativa vive en `.agent/` y la configuracion local de complementos de Codex Desktop en `.codex/config.toml`.

Complementos activados para este repo:

- Browser, para QA visual de paginas estaticas locales.
- Creative Production, para trabajo puntual de assets y material visual publico.

No se activan complementos Android/Google Play aqui; esos pertenecen a los repositorios de aplicacion.

## Obsoleto

Apps Script ya no se usa. No ejecutar `clasp push` ni recuperar flujos `deploy.bat` antiguos.
