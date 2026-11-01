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

## Presentación compartida

- `assets/site.css` y `assets/site.js` se aplican por `data-site` y `data-page`, sin build ni dependencias nuevas. Los estilos y controles de cada producto siguen siendo específicos de su marca.
- Conservar las identidades: RolemIAster cian `#00d2ff` y rosa `#ff0055`; SyncronIA magenta `#e040fb` y cian `#00e5ff`; EmulAItor verde `#39ff14` y ámbar `#ffb000`. No desaturarlas ni sustituirlas por una paleta común. El portal conserva su cielo de puntos en `assets/stars.svg` y sus nombres de marca.
- El helper añade navegación accesible e índice plegable; debe conservar nodos, IDs, traducciones, handlers y selección de plataforma. Sin JavaScript, los enlaces de las guías continúan visibles.
- Las páginas bilingües validan el idioma compartido antes de usarlo: una preferencia alemana, portuguesa o japonesa de EmulAItor no puede romperlas ni debe borrarse por visitarlas.
- Los parámetros `?v=` de CSS y JS son los primeros 12 hexadecimales de SHA-256 del texto UTF-8 con saltos LF. Tras editarlos, actualizar sus referencias en las páginas; `tests/test_web_presentation.py` comprueba las huellas.
- Excluir el chat, su CSP y sus modos nativos/feed, la plantilla de correo y la redirección TikTok. Pagos sólo carga CSS compartido: no incluir el helper ni modificar su redirección.
- La regresión `node --test tests/web-presentation.browser.cjs` reutiliza Playwright existente y Chrome instalado, con perfil temporal headless y un servidor limitado a localhost. Comprueba las 28 páginas a 360/1440 px, casos a 320/768 px, colores de marca, teclado, idiomas, índice y pago inactivo. No instala herramientas ni contacta con un checkout de pago. `WEB_QA_CAPTURES=0` permite verificar sin generar nuevas capturas.
