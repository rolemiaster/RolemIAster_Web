# Mejora integral con unslop

**Objetivo:** aplicar la dirección visual aprobada sin alterar contenido, URLs ni contratos públicos.
**Dirección:** lúdica, técnica y legible, conservando las paletas y tipografías de marca originales. Por aclaración expresa del usuario, mantener el cielo de puntos del portal y no homogeneizar los proyectos: RolemIAster cian/rosa, SyncronIA magenta/cian y EmulAItor verde/ámbar.
**Arquitectura:** HTML/CSS/JavaScript estáticos existentes; una hoja local compartida y mejora progresiva de la navegación, sin dependencias ni build.
**Base:** `03056ad`; rama `codex/unslop-web`, checkout original `D:/PROGRAMACION/RolemIAster_Web`. No crear worktrees secundarios. La orden posterior del usuario «Publícala» autoriza commit, integración en `master` y push al remoto canónico, con verificación del despliegue real.

## Contratos protegidos

- Mantener traducciones, metadatos SEO, atribución, URLs, IDs, selectores y orden de las secciones.
- Mantener los textos de privacidad, manuales, changelogs, manifiestos, configuración, anuncios y releases.
- No modificar módulos de pagos ni chat, CSP ni modos nativos/feed del chat.
- Excluir la plantilla de correo `rolemiaster/response_hannah.html` y la redirección `emulaitor/tiktok/index.html` de la interfaz compartida.
- No instalar paquetes, fuentes, navegadores ni servicios. Chrome existente, headless y perfil temporal.

## Ejecución

- [x] Añadir `tests/test_web_presentation.py` y `tests/web-presentation.browser.cjs`; observar fallos de las regresiones antes de editar producto.
- [x] Incorporar `assets/site.css` y `assets/site.js` en las 28 páginas de presentación. La hoja unifica ritmo, legibilidad, controles y adaptación móvil sin sustituir las paletas y tipografías de marca; el script conserva el DOM y acciones originales y añade menú accesible, teclado e índice plegable.
- [x] Aplicar las nueve pasadas: espaciado; color; iconos; texto de interfaz; tipografía; composición; detalles; recursos existentes; movimiento.
- [x] Conservar las estrellas como textura estática y retirar el motor de partículas del portal; conservar su selector de idioma. Ofrecer el vídeo de RolemIAster como contenido controlable, no como fondo en bucle. Conservar las reseñas en un desplazamiento manual sin duplicarlas.
- [x] Verificar todas las páginas en 360/1440 px y casos dirigidos a 320/768 px, teclado, idiomas, no-JavaScript, movimiento reducido y ausencia de carga permanente en pagos inactivos.
- [x] Ejecutar pruebas existentes de Python y Node, comprobar hashes/textos/rutas protegidos, sintaxis y diff; revisar localmente y sincronizar CodeGraph si procede.

## Comandos de verificación

- `python -X utf8 -B -m unittest discover -s tests -v`
- `node --test emulaitor/tests/*.test.mjs`
- `node --test tests/web-presentation.browser.cjs` (reutiliza Playwright y Chrome instalados)
- `git diff --check`; `git status --short --branch`; `git worktree list --porcelain`

## Reversibilidad

La base indicada permite aislar el diff de esta mejora; cualquier reversión se hará sólo por petición expresa, preservando el historial y el trabajo acumulado. Las capturas y los informes efímeros se guardan en un temporal propio, fuera del producto.

## Ajustes de contrato derivados de la verificación

- Validar el idioma compartido en las siete páginas bilingües: una preferencia `ja` de EmulAItor provocaba una excepción al buscar un botón inexistente. La prueba de navegador reprodujo el fallo antes del ajuste y verifica los siete destinos. Se conserva la preferencia almacenada.
- Las animaciones de entrada no deben dejar `opacity: 0` cuando se reduce el movimiento; verificar explícitamente la visibilidad del contenido de portada además de su geometría.
- Las pruebas de marca comprueban los colores originales y el cielo de puntos. Las fuentes, imágenes originales, enlaces de navegación y descarga, diccionarios de traducción y metadatos permanecen protegidos; los logos y el póster de RolemIAster usan recursos propios ya publicados para evitar depender de imágenes remotas.
- El vídeo incrustado final de RolemIAster conserva su ID y usa reproducción voluntaria con controles, sin autoplay ni bucle. Los colores de PC y Android también conservan su significado original.

## Cierre verificado

42 pruebas Python, 46 pruebas Node y 12 pruebas de navegador pasan. Las 28 páginas se comprueban a 360/1440 px y los casos dirigidos a 320/768 px. No hay desbordamientos ni errores JavaScript en la batería; se comprueban los colores originales, contenido visible con movimiento reducido y navegación entre idiomas. La comparación con la base conserva metadatos, enlaces, descargas, textos de privacidad y diccionarios de traducción. Chat, correo, redirección TikTok, datos publicados y lógica de pagos no cambian. No se verifica streaming externo ni se realizan pagos reales. Sin commit ni publicación de esta fase; un único checkout original en `codex/unslop-web`.
