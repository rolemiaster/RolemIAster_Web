# Chat comunitario de EmulAItor: operación

> Estado vigente — 6 de octubre de 2026: módulo publicado, flag true, GitHub Pages built para `1cfc7783174970f581788540e48d9ae1c7e3e172`. Android está en QA/aceptación, sin distribución ni instalación física. Los estados 404/false/permiso pendiente del 5 de octubre son históricos. La activación para QA fue ordenada expresamente por el usuario.

## Diseño

La aplicación abre una página estática con el iframe de WidgetBot alojado por el proveedor. No se autoaloja WidgetBot, no se crea un backend propio ni se añaden dependencias. Cloudflare no participa en este módulo. La integración local no constituye publicación ni habilita el canal de Discord.

El interruptor es `community_chat_enabled` en `emulaitor/config.json`. Los booleanos válidos gobiernan el acceso: `false` lo apaga y `true` lo activa. Ausencia, cadenas, otros tipos, JSON inválido o fallo de consulta utilizan el respaldo activo solicitado por el usuario. Este respaldo permite intentar abrir el módulo; no convierte un fallo del proveedor en éxito. La aplicación y la página verifican el mismo archivo. No reutilizar ni cambiar `active_pasarela_ripto` o `trial_time_millis` para controlar el chat.

Página: `https://rolemiaster.com/emulaitor/community-chat.html`.
Servidor Discord: `1470216161223508123`.
Canal inicial: `1509161917430763601`.

## Publicación y activación

1. No cambiar el estado público por inferencia. La preparación inicial usó false; el estado vigente es true por autorización expresa para QA.
2. Resolver la invitación/permisos del bot con aprobación expresa del administrador. Revisar qué canales son visibles para participantes e invitados: fijar el canal inicial no oculta otros canales.
3. Verificar en el canal real entrada, alias de invitado si está permitido, OAuth Discord, envío/lectura, moderación y comportamiento de archivos. No dar por probado el proveedor a partir de fixtures locales.
4. Publicar los cuatro archivos `community-chat.html`, `community-chat.css`, `community-chat.mjs`, `community-chat-feed.mjs` y el JSON conservando la bandera apagada. La publicación web y una release Android requieren autorización independiente.
5. Para nuevas activaciones/distribuciones, respetar el alcance autorizado y verificar el proveedor. La activación actual para QA no constituye aprobación de una release Android.

La consulta se realiza al abrir/volver y cada 60 segundos visibles. La retirada remota no es instantánea: depende del refresco y de la propagación/caché del alojamiento. Al desactivar se retiran el acceso y el contenido. Si el proveedor falla pero el JSON sigue activo, la página del proveedor puede mostrar su error: no sustituirlo por una afirmación de funcionamiento.

## Aislamiento y límites

La actividad Android no está exportada. No hay códigos de máquina, credenciales de bot, puente JavaScript nativo, servicio autónomo de fondo, cámara, micrófono, selector de archivos ni descargas nativas. La sesión y los mensajes corresponden a WidgetBot/Discord; el módulo no borra cookies globales. No afirmar anonimato total, transferencia de todas las responsabilidades o gratuidad perpetua por no operar un backend propio.

El iframe es externo. Denegar archivos y permisos en Android no modifica las prestaciones ni las reglas del servidor de Discord ni permite controlar su UI desde la página estática.

Apagado, la barra inferior conserva su presentación original. Activo, admite desplazamiento horizontal en pantallas estrechas para mantener áreas táctiles de al menos 48 dp, en vez de comprimir siete controles. Sus acciones originales se conservan.

## Capa durante el juego

Tres estados por clic, sin redimensionado por arrastre:

1. Oculto: no se construye una vista ni se conecta con WidgetBot.
2. Compacto: lectura nativa de los últimos mensajes recibidos, fondo transparente y contorno fino del texto para mantener contraste. Dos filas si la altura es reducida o la fuente grande; hasta tres en los demás casos. Una línea por mensaje, con elipsis.
3. Completo: se libera el consumidor IPC compacto y se transfiere la misma WebView/iframe a la actividad del chat, en principal. El botón «Minimizar chat» vuelve a transferirla y regresa a la partida, revalidando recursos. No se crea otra cuenta ni una segunda sesión. El juego conserva su ciclo de vida y pausa normales.

El texto compacto no selecciona, no desplaza, no abre enlaces y no recibe gestos. Solo los iconos de 48 dp son interactivos, centrados arriba y respetando el recorte de pantalla. La separación respecto a los pads normales no garantiza que nunca coincidan con una distribución personalizada de controles; esa combinación requiere QA adicional.

La activación compacta no es automática. No se permite en dispositivos low-RAM, con `memoryClass <192`, menos de 256 MiB disponibles o señal `lowMemory`. El presupuesto se comprueba antes de construir la vista, también al volver del segundo plano, y mientras está conectada. Presión de memoria, fallo del renderer, error de creación/carga o timeout de lectura cierran el consumidor; no hay reconexión automática durante esa sesión. El chat completo sigue accesible. Ocultar, salir de primer plano, carga, banner o `false` remoto liberan recursos propios.

`CommunityChatSession` conserva una sola vista de chat en principal. El juego no construye WebView: un servicio bound, privado y no iniciado/foreground, `CommunityChatFeedService`, entrega snapshots de solo texto por IPC. Este servicio interno no es un servidor/hosting ni funciona sin consumidores. La retención entre presentaciones caduca a los tres segundos y elimina el contexto/callbacks de Activity. La autenticación Discord del chat completo puede abrir su diálogo propio. El consumidor compacto no acepta ventanas de autenticación ni permisos. La lectura de configuración está limitada a 16 KiB y la del snapshot nativo a 8 KiB; el búfer contiene como máximo tres mensajes, 180 caracteres de texto y 32 de autor, sin adjuntos.

## Contrato del proveedor y límites de comprobación

El adaptador valida origen `https://e.widgetbot.io`, ventana del iframe, ID aleatorio de instancia y canal lounge. Acepta nuevos mensajes, actualizaciones y borrados; descarta eventos de otros canales. No raspa el DOM del proveedor ni solicita APIs privadas.

La API pública es de eventos, no una consulta garantizada de tres mensajes históricos. La opción `emitLatestMessage` de la implementación oficial y su evento `latestMessage` se aceptan cuando el proveedor los emite. En la QA real de Chrome del 5 de octubre de 2026 se observaron `ready`, `signOut` y `alreadySignedIn`, pero no `latestMessage`: no dar por garantizado el historial inicial. Hasta recibir un mensaje válido, el compacto indica espera. Tampoco se ha publicado un mensaje de prueba desde la sesión invitada.

La selección de alias invitado y la presencia de la alternativa «Log in» Discord sí se comprobaron en el iframe real. No equivalen a certificar el envío, la identidad vista por amigos, OAuth completo en Android ni las salas privadas temporales. La UI completa del proveedor gratuito mantiene su propio menú de canales; las restricciones reales dependen de los permisos del bot. El aislamiento total del resto de canales sigue pendiente de comprobación.

Las pruebas locales del módulo no certifican el rendimiento en todos los teléfonos. Mantener pendientes las medidas de CPU/memoria con el proveedor real y una partida simultánea, así como dispositivos modestos y distribuciones personalizadas de pads. No publicar ni distribuir como QA completamente cerrada mientras existan esas limitaciones.

## Comprobación local

`node --test emulaitor/tests/*.test.mjs`

`node --check emulaitor/community-chat.mjs`

`node --check emulaitor/community-chat-feed.mjs`

`python -m json.tool emulaitor/config.json`

La QA con respuestas controladas debe ser temporal y no modificar el JSON canónico para forzar el proveedor. El detalle Android y los límites comprobados se mantienen en el plan del repositorio EmulAItor.

## Estado de integración Android y aceptación

La colisión histórica de directorio WebView entre principal y `:game` se corrigió: toda la sesión vive en principal y el juego recibe solo texto. Se reutiliza la misma instancia al maximizar/minimizar, sin suffix, copia de cookies, cambio de minSdk, backend propio ni dependencias nuevas. Los callbacks tardíos, cancelación, errores pasivos, memoria en retención y fallos de respuesta a Binders rechazados tienen pruebas de regresión. La matriz usa un anfitrión debug no exportado para evitar la política de orientación de Home.

El módulo sigue **sin aceptación para distribución**. El 5 de octubre de 2026 se observó en Google Chrome que el iframe de WidgetBot abre lounge con un invitado existente, pero `https://rolemiaster.com/emulaitor/community-chat.html` devuelve 404. Las fuentes siguen locales: no se ha publicado, activado el JSON ni realizado OAuth/envío real desde Android. Abrir el iframe en Chrome no certifica Android ni sus permisos de canales. La prueba con fuentes web reales y un iframe de eventos controlados tampoco certifica el proveedor externo.

El usuario dará el último visto bueno del layer durante el juego exclusivamente en su dispositivo físico. Está desconectado: preparar primero la prueba y detenerse antes de instalar para pedir conexión. La QA técnica previa no sustituye esa aceptación. Pads personalizados extremos, teclado, sistemas táctiles y rendimiento en teléfonos modestos siguen siendo límites explícitos. Resultados exactos, omisiones y recibos vigentes están en el plan Android.

## Estado técnico vigente de QA (5 de octubre de 2026)

La vista propia usa viewport responsive y bounds finitos al estar desacoplada; la maximización conserva escala 1 y no cambia los ajustes del popup OAuth. La captura inicial oscura se reprodujo y quedó contrastada como anterior al primer pintado: el test espera estado visual y píxeles visibles después, con fuentes web reales e iframe de fixture. No se cambió el producto por esa captura.

Última suite Android serial: 35 casos ejecutados y aprobados de 36 declarados; uno omitido por condición externa. JVM: 607 aprobados. Node: 21 aprobados. Una ejecución previa con build JVM concurrente falló en dos casos de retorno al compacto; los casos pasan aislados y en la suite serial con los mismos artefactos, pero no se ha demostrado que la carga sea su causa. Conservar el límite en vez de prometer estabilidad/rendimiento universales. El recibo actual Android es `C:\tmp\chat-sesion-unica-final\recibo-cierre-pintado.json`; resultados y omisiones completos, en `D:\PROGRAMACION\Emulaitor\.agent\plans\chat-comunitario-a7c105.md`.

La página pública volvió a devolver 404 en Google Chrome real. Las fuentes siguen sin publicar y el JSON local conserva false explícito. Hace falta aprobación expresa de publicación/activación para continuar una prueba real; no se ha concedido por inferencia. La aceptación física del layer y las comprobaciones reales de WidgetBot/Discord siguen abiertas. No se ha instalado en un teléfono físico ni publicado una release.


## Publicación autorizada — 6 de octubre de 2026

El usuario confirmó su orden previa de publicar y continuar. El módulo y su flag `true` se publicaron por allowlist de cinco archivos, commit `ddb2ad5db1a3ee1dbe9b3857a9b1a3cb8687e176` a `master`. GitHub Pages devuelve `built` para ese commit; Chrome real ya abre la página y lounge, con selección de alias invitado y alternativa Discord. El 404 y el permiso pendiente documentados arriba son estados históricos, no bloqueos actuales. No se publicaron README, scripts, `.agent/`, assets ajenos ni pruebas.

La activación permite QA de la nueva versión sin modificar otros ajustes ni añadir costes/infraestructura propios. Android sigue en rama secundaria y no se ha publicado una release. Integración y QA Smart TV obligatorias, además de móvil. La aceptación final del layer táctil corresponde al usuario en su smartphone; instalar solo después de pedir conexión en el punto acordado. Envío real, OAuth completo, permisos de canales y salas temporales no se dan por comprobados por la carga del iframe.


## Contrato y presentación actualizados — 6 de octubre de 2026

La cabecera nativa es una fila compacta (48dp móvil, 56dp TV), centrada, con información/normas bajo demanda. native=1 oculta la cabecera web duplicada; CSS y módulo se referencian mediante su huella para invalidar caché. El iframe no se recrea al cambiar entre presentaciones nativas de la misma sesión.

La identificación nativa de TV usa el comando login sobre el iframe existente, con origen exacto. El guard ready admite payload ausente conforme al contrato del SDK y true legado; rechaza otros valores y conserva validación de origen, ventana, instancia y tamaño. Se reprodujo el fallo de la prueba sin payload y pasaron después 25 pruebas Node. El formulario real de alias se abrió por Dpad/Center; no se enviaron datos ni se completó OAuth.

QA móvil: suite 35 aprobadas/cinco omisiones optativas de 40 declaradas; matriz de cuatro perfiles con muesca, ambos giros y fuente 1.5; proveedor real con formulario/IME; partida real con texto de fixture y continuidad de sesión; contraste y pasividad. TV: Home/alias/foco/retorno, layout/guards y partida real mostrando espera, maximización y retorno pasivo. Fuentes, APKs y capturas definitivas se detallan en `D:\PROGRAMACION\Emulaitor\.agent\plans\chat-comunitario-a7c105.md`.

No se certifica entrega real de mensajes por esas fixtures, login completo, aislamiento de los demás canales, salas temporales ni estabilidad universal. La aceptación final del layer durante la partida corresponde al usuario en su smartphone. Antes de instalar, debe conectar el dispositivo. No se ha publicado una release Android.

No se ha implementado en este módulo la creación/borrado automático de salas privadas temporales. Las opciones existentes de EmulAItor Hub pertenecen a otro flujo y no acreditan esa función del chat de Discord.
