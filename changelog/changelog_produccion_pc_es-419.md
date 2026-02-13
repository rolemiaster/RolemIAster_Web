****************************************************************************************************
07/02/2026 20:26 - Combat Semantic Interpretation System - BETA_v054
****************************************************************************************************
🧪 NOW AVAILABLE:

⚠️ **IMPORTANT NOTICE:** THE GAME CAN MIGRATE THE OLD DATABASE TO THE NEW STRUCTURE THROUGH LAUNCHER OPTIONS. I DO NOT RECOMMEND THIS; EVEN IF YOUR OLD SAVE WORKS, MANY THINGS WILL BE BROKEN. MY RECOMMENDATION IS TO DELETE ALL PREVIOUS SAVES. IT IS NOT NECESSARY TO DELETE THE ENTIRE DATABASE EXCEPT IN EXTREME CASES.

Changes:

- 🌍 **World and Character Manager:** Now you have total freedom. Create your own Worlds with their own rules and setting, and within each one, create as many characters as you want. All characters in the same world share the same timeline and events, laying the foundation for future multiplayer mode.
- 🧠 **Contextual Memory (Super RAG):** The AI now has 'senses.' It takes into account where you are, who you are with, and what just happened. It's much more intuitive and coherent!
- 🌍 **Lore in the First Character:** Fixed! Now the manual description of the world reaches the AI directly during initial creation.
- ⚙️ **Improved World System:** Decoupled world names from technical rules.
- 📝 **Creation Clarity:** Improved internal instructions for character background generation.
- 🧠 **Free Text Combat:** Write actions like 'cast healing spell' or 'draw sword'. The AI understands intent and translates it to mechanics.
- 🎨 **New Epic Interface!** Completely remodeled with RPG-style menus, animated backgrounds, and neon edge immersion.
- 🎬 **AI Scene Director (IMPROVED):** Combat comes to life with environmental events and reactions.
- ⚔️ **Draw with Words:** Type 'draw sword' instead of clicking slots. Careful! Doing this in combat can result in failure or losing a turn.
- 📖 **Recognized Spells:** The AI knows your entire spellbook.
- 🌍 **Narrative in your Language:** Strictly respects selected language, avoiding mixed translations.
- 🛡️ **No More Lost Turns:** If the game doesn't understand, it asks for clarification. Your turn is NOT lost.
- 🎒 **Manual Inventory:** Drag-and-drop interface for moving items between slots.
- 🧪 **Fluid Potion Use:** Drag items onto portraits or use the right-click menu.
- 🩸 **Damage Correction:** Fixed health bar issues. You are no longer immortal.
- 👻 **Goodbye Ghost Items:** Automatically repairs items the AI 'forgets' to create.
- 🐛 **Critical NPC Fix:** Fixed tactical decision making for NPCs.
- 🎒 **Initial Inventory Fix:** Fixed starting equipment for new characters.
- 🎲 **Character Creation:** Fixed an exploit for infinite attribute points.
- 🖼️ **Fixed Portraits:** System finds correct images regardless of world name.
- 💍 **Smart Icons:** Objects and rings with precise icons.
- 🧪 **Improved Tooltips:** Full information on hover.
- 🎵 **Audio Improvements:** Combat music doesn't stop when pressing buttons.
- [I18N] **Implant Fix:** Added translations for slots and icons.
- [FIX][AUDIO] **Inconsistent Audio:** Sounds adapted to the setting.
- [FIX][I18N] **es.json Cleanup:** Filtered duplicates.
- ⚙️ **Smart Model Detection:** Reads GGUF models directly. Auto context manager.
- 📂 **Space Saving:** Moves models instead of copying.
- ⚖️ **Attribute Justice:** Fixed infinite points exploit.
- 📖 **Training Guide:** README updated with experience system.
- 📜 **Epic World Codex:** Deep history generation (religions, laws, geography).
- 🧙 **Coherent Stories:** Background integrated with world lore.
- ⚡ **Fluid Interface:** Background generation (no freezing).
- 🚀 **Instant Adventure Start:** Direct start after creation.
- 🎭 **Backgrounds with Pretext:** Urgent reason to start the adventure.
- 🧹 **Simplified Interface:** 'Start Story' button centralized.
- [FIX][UI] **Visual Duplication:** Fixed world name bug.
- [FEAT][UI] **Quick Load:** Single click to load/create.
- 🧠 **More Creative AI:** Technical variability injected to break repeat loops.

﻿
****************************************************************************************************
06/02/2026 02:32 - Soporte Vulkan (AMD/Intel) y Manejo Robusto de Errores - Beta_v053
****************************************************************************************************
- Novedades (ES):
  - ðŸš€ **Motor HÃ­brido Vulkan:** Â¡Soporte oficial para tarjetas grÃ¡ficas AMD e Intel! Ahora el juego incluye un motor Vulkan dedicado que se activa automÃ¡ticamente (o manualmente) para acelerar la IA en equipos no-NVIDIA.
  - âš™ï¸ **Control Total del Motor:** Hemos aÃ±adido la opciÃ³n "Forzar Vulkan" tanto en el Launcher como en la ConfiguraciÃ³n. Si tienes problemas con CUDA o quieres probar el rendimiento de Vulkan (que en muchas configuraciones va volando), tÃº tienes el mando.
  - ðŸš¦ **Estado del Sistema:** Ahora puedes ver exactamente quÃ© motor estÃ¡ rugiendo bajo el capÃ³ (ðŸŸ¢ VERDE para CUDA, ðŸ”´ ROJO para Vulkan) en el panel de estado.
  - ðŸ›¡ï¸ **SemÃ¡foro de IA:** Si la Inteligencia Artificial se "cansa" (supera su cuota) o se corta internet, el juego te avisarÃ¡ con una ventana clara y Ãºtil en lugar de dejarte esperando en silencio.
  - ðŸ”„ **Seguridad Anti-Bloqueo:** Si ocurre un error de conexiÃ³n, el juego ya no "rompe" la conversaciÃ³n. Tus opciones de diÃ¡logo reaparecerÃ¡n para que puedas reintentar sin perder progreso.
  - â˜ï¸ **Memoria de Nube:** El menÃº de configuraciÃ³n ahora recuerda correctamente tus preferencias de proveedores en la nube entre sesiones.

****************************************************************************************************
03/02/2026 20:23 - OptimizaciÃ³n de Memoria VRAM y Estabilidad de Carga - Beta_v052
****************************************************************************************************
- Novedades (ES):
  - ðŸ§  **Cerebro Optimizado:** Hemos corregido un fallo grave que hacÃ­a que la IA intentase "pensar dos veces" al mismo tiempo, duplicando el uso de memoria de la tarjeta grÃ¡fica y causando lentitud extrema o bloqueos. Â¡Tu VRAM te lo agradecerÃ¡!
  - ðŸ’¾ **Carga Segura:** Mejorada la estabilidad general al cargar partidas para asegurar que retomar tu aventura sea siempre una experiencia fluida.

****************************************************************************************************
02/02/2026 00:18 - Hotfix CrÃ­tico: Estabilidad, Multi-GPU y Mejoras de LocalizaciÃ³n - Beta_v051
****************************************************************************************************
- Novedades (ES):
  - ðŸš‘ **Arreglo CrÃ­tico:** Solucionado un problema que impedÃ­a en algunas circunstancias extraÃ±as iniciar el juego ("Fallo Total") debido a corrupciÃ³n en la base de datos que el Launcher no podÃ­a limpiar. Ahora la opciÃ³n "Borrar Base de Datos" es mucho mÃ¡s efectiva.
  - âš¡ **Mejora Hardware:** Corregido un fallo que hacÃ­a que el modo de "ConfiguraciÃ³n AutomÃ¡tica" ignorase la potencia de sistemas con mÃºltiples tarjetas grÃ¡ficas en algunas configuraciones con GPUs no idÃ©nticas.
  - ðŸ› ï¸ **Utilidad:** AÃ±adida una nueva opciÃ³n en el Launcher para abrir fÃ¡cilmente el registro (log) de la sesiÃ³n anterior y facilitar el soporte.
  - ðŸŒ **LocalizaciÃ³n:** Corregidos varios botones que aparecÃ­an en inglÃ©s (Yes/No) en el lanzador. Ahora respetan el idioma seleccionado.
  - ðŸ“– **Interfaz:** Mejorado el formato del texto de informaciÃ³n de versiones para que sea mÃ¡s legible.
  
  - **PrÃ³ximamente:** Siguiente punto en proceso de implementaciÃ³n: compatibilidad con GPU AMD, NVIDIA e Intel mediante Vulkan.

****************************************************************************************************
01/02/2026 23:44 - Multi-GPU, correcciÃ³n de manuales y estabilidad - v050
****************************************************************************************************
- Novedades:
  **Â¡Potencia Multi-GPU y arreglos crÃ­ticos!**
  * **ðŸš€ Soporte Multi-GPU:** Implementada la capacidad de dividir grandes modelos de IA entre varias tarjetas grÃ¡ficas. *Ahora puedes usar todo tu arsenal de hardware; Â¡Poder ilimitado!*
  * **ðŸ›¡ï¸ Estabilidad:** AÃ±adidas todas las bibliotecas DLL faltantes para evitar cierres inesperados. *He blindado el motor; si falla ahora, serÃ¡ debido a un fallo crÃ­tico en los datos.*
  * **ðŸ“– Manuales web dinÃ¡micos:**
  * **Selector real:** El menÃº de idiomas ahora comprueba quÃ© archivos existen realmente antes de mostrarlos. *Se acabaron las opciones fantasma que no hacÃ­an nada; magia de adivinaciÃ³n de nivel 5.*
  * **SoluciÃ³n Error 403:** Corregido el error de permisos que impedÃ­a ver el registro de cambios dentro del juego. *Le enseÃ±Ã© a la aplicaciÃ³n cÃ³mo pedir acceso correctamente (Â«Â¡Ãbrete, sÃ©samo!Â»).*
  * **ðŸŒ Idiomas:** RevisiÃ³n de textos y traducciones. *Modo polÃ­glota activado.*

****************************************************************************************************
28/01/2026 22:49 - EstabilizaciÃ³n y Mejoras de IA - Beta_v049
****************************************************************************************************
- Novedades:
  Hemos pulido la experiencia de juego con correcciones importantes y una nueva herramienta visual:

  * **Inventario Limpio y Confiable:** Se acabÃ³ encontrar "objetos fantasma" o Ã­tems con nombres extraÃ±os en tu mochila. Hemos implementado un sistema de validaciÃ³n narrativa que asegura que todo lo que recojas o compres exista realmente en el mundo del juego.
  * **DiÃ¡logos Fluidos:** Hemos reparado esos molestos botones que a veces aparecÃ­an como "Unknown" o no respondÃ­an. Ahora las opciones de diÃ¡logo con los NPCs siempre mostrarÃ¡n el texto correcto.
  * **GeneraciÃ³n de Personajes Robusta:** Crear tu hÃ©roe es ahora un proceso sÃ³lido. Hemos solucionado los conflictos que a veces dejaban la ficha incompleta o con estadÃ­sticas errÃ³neas al combinar biografÃ­a y stats.
  * **Nueva Barra de Estado de IA:** Â¡Ahora puedes ver el cerebro de la mÃ¡quina funcionando! Hemos aÃ±adido una barra en la parte superior que te muestra la velocidad de respuesta y el uso de memoria en tiempo real. AsÃ­ sabrÃ¡s siempre si la IA estÃ¡ "pensando" tu prÃ³xima aventura.

****************************************************************************************************
28/01/2026 03:50 - Fix CrÃ­tico CompilaciÃ³n - Beta_v048
****************************************************************************************************
- Novedades:
  Solucionado un error crÃ­tico que impedÃ­a iniciar el juego en instalaciones nuevas. Mejorada la estabilidad y la compatibilidad con diferentes equipos.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & RTX 50 Support - Beta_v047
****************************************************************************************************
- Novedades:

  > [!IMPORTANTE]
  > **POR MOTIVOS DE COMPATIBILIDAD, ES NECESARIO ELIMINAR LA DB PREVIA O DE LO CONTRARIO ES MUY PROBABLE QUE DÃ‰ ERRORES EN LA CONFIGURACIÃ“N IA**
  > **(SoluciÃ³n: Clic en el Ã­cono de engranaje âš™ï¸ del Launcher -> Borrar Base de Datos)**

  *Soporte CrÃ­tico para RTX Serie 50: Solucionado un error grave que provocaba el cierre inesperado al intentar generar personajes en las nuevas tarjetas grÃ¡ficas NVIDIA (RTX 5070, 5080, 5090).
  (Como no dispongo de una RTX de la serie 5000 no pude probar directamente si la soluciÃ³n es 100%, pero la teorÃ­a es que deberÃ­a estar solucionado. Â¡Espero sus cÃ¡nticos de victoria aquÃ­!)
  
  *ActualizaciÃ³n del Motor de IA: Hemos actualizado el cerebro local del juego para que sea compatible con la Ãºltima tecnologÃ­a de hardware, asegurando que todos puedan disfrutar de la experiencia sin conexiÃ³n, sin importar quÃ© tan moderno sea su equipo.
  
  *Nuevo Launcher: Actualizaciones y noticias en tiempo real desde la web oficial.


****************************************************************************************************
26/01/2026 06:49 - IntegraciÃ³n Web DocumentaciÃ³n - Beta_v045
****************************************************************************************************
- Novedades:
  *Ahora el Manual de Usuario y el Registro de Cambios se cargan directamente desde nuestra web oficial, garantizando que siempre tengas la informaciÃ³n mÃ¡s actualizada sin necesidad de descargar parches. Incluye modo offline inteligente.

  *Hemos reforzado la estabilidad del juego para que nunca se trabe al iniciar. AdemÃ¡s, los vendedores han vuelto de sus vacaciones en el limbo: ahora aparecen correctamente, tienen mercancÃ­a en los estantes y respetan la ambientaciÃ³n del mundo (nada de pociones mÃ¡gicas en el futuro).

  *Se arreglÃ³ el bug que no permitÃ­a modificar los parÃ¡metros de IA y la selecciÃ³n del modelo de IA, haciendo que algunos usuarios con VRAM limitada no pudiesen jugar.
  **En caso de necesitar modificar los parÃ¡metros de IA, recomiendo encarecidamente probar primero bajando el % de VRAM a 85%, reiniciar y probar; si esto sigue sin ser suficiente, recomiendo revisar que la VRAM de la GPU no estÃ© siendo usada por otros procesos que no sean del propio juego (reinicio de la PC si es necesario, cierre de aplicaciones que puedan ocupar VRAM). Si despuÃ©s de bajar la cantidad de VRAM incluso hasta el 70% sigue sin funcionar, no recomiendo seguir bajando porque el juego no podrÃ¡ gestionar los prompts que se envÃ­an a la IA, por lo que aunque se consiga evitar el desbordamiento de VRAM, el juego no podrÃ¡ funcionar porque no tiene con quÃ© hacerlo; en ese caso la Ãºnica opciÃ³n restante es bajar de modelo a uno inferior, volver a colocar los parÃ¡metros de IA en automÃ¡tico y reiniciar.

****************************************************************************************************
26/01/2026 04:00 - EstabilizaciÃ³n Core y DiagnÃ³stico Servicios - Beta_v044
****************************************************************************************************
- Novedades:
  EstabilizaciÃ³n Core y DiagnÃ³stico Servicios. Correcciones crÃ­ticas en generaciÃ³n de personajes, UI (MainWindow) y optimizaciÃ³n de bÃºsqueda semÃ¡ntica. Inicio de diagnÃ³stico profundo del modo servicios.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs y Estabilidad - Beta_v043
****************************************************************************************************
- Description:
  Parche correctivo enfocado en diagnÃ³stico y correcciÃ³n de bucle de UI.

- Changes:
  Arreglado bug visual del diÃ¡logo de reinicio
  Nuevo sistema de logs en %LOCALAPPDATA% para diagnÃ³stico
  Optimizaciones de rendimiento interno

****************************************************************************************************
24/01/2026 06:30 - Soporte BiografÃ­a Backend - Beta_v042
****************************************************************************************************
- Description:
  ExposiciÃ³n de datos de biografÃ­a para UI y ajustes de i18n.

<!-- source_hash: 5f218fc5 -->
