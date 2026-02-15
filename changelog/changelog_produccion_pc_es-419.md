****************************************************************************************************
15/02/2026 02:57 - Escritura Directa, Correcciones de Estabilidad y Detección d - Beta_v058
****************************************************************************************************
- What's New (ES-419):
  **Estabilidad:**
  - 🛠️ **Adiós a los Crashes de Configuración:** Se han corregido varios errores que ocurrían bajo ciertas condiciones y que impedían abrir o modificar la configuración de IA al cambiar de modelo o restablecer valores.
  - 🗃️ **Base de Datos Silenciosa:** El molesto aviso de "Base de Datos Incompatible" al iniciar el juego ya no aparecerá si tu base de datos está bien. Solo se mostrará cuando haya un cambio estructural real que requiera migración.
  
  **Experiencia de Juego:**
  - 🎯 **Control de Precisión en IA:** Ahora puedes escribir manualmente los valores de Contexto, Tokens, Temperatura o Capas de GPU directamente en un campo numérico junto al deslizador. ¡Ya no dependes solo de los "deslizadores"! Ambos controles están sincronizados: mueve el deslizador y el número se actualiza, o escribe el número y el deslizador se mueve.
  - ⌨️ **Escritura Directa:** ¡Ya no necesitas hacer clic en el cuadro de texto para escribir tu acción! Ahora puedes empezar a teclear directamente mientras estés en la pantalla de juego. Si interactúas con el inventario u otro panel y luego quieres escribir, simplemente empieza a teclear sin necesidad de seleccionar nada. El sistema redirige tus teclas automáticamente al campo de acción. No interfiere con menús, diálogos ni atajos del sistema.
  
  Algunos cambios menores más...

****************************************************************************************************
14/02/2026 21:48 - Sincronización de Contexto y Control de Respuesta de IA - Beta_v056
****************************************************************************************************
- What's New (ES-419):
  **Sistemas y Rendimiento:**
  - 🧠 **Control Total de Contexto:** Ahora puedes ajustar tanto la memoria de la IA (`n_ctx`) como la longitud de sus respuestas (`Max Tokens`) con deslizadores mucho más intuitivos.
  - ♾️ **Modo Ilimitado:** Desliza al mínimo para activar el modo "Ilimitado", permitiendo que modelos potentes como Gemini usen toda su capacidad sin restricciones.
  - ⚡ **Reinicio de Drivers:** Nueva opción en el lanzador para reiniciar los controladores de video antes de jugar (opcional, configurable desde el launcher). Ahora la pantalla parpadeará al iniciar; con esto nos aseguramos de que toda la VRAM esté disponible, purgándola de residuos.
  - 🛠️ **Configuración Robusta:** Corregidos errores visuales y fallos técnicos al guardar la configuración de tus proveedores de IA preferidos.
  - 🚀 **Mejor Detección de Errores:** El juego ahora es más inteligente para detectar cuándo una IA externa se queda sin espacio.
  
  **Mecánicas y Mundo:**
  - 🎒 **Inventario Garantizado:** Se acabó empezar una aventura y no ver tus objetos. El sistema SDIA ahora supervisa también la creación del personaje para que tu equipo siempre esté ahí.
  - 📜 **Lore Purificado:** Reparado un error que inyectaba fragmentos de "código" o texto extraño en la historia de tu mundo. Ahora el Códice será más limpio y legible.
  - ⚠️ **Guía de Compatibilidad:** Se incluyen avisos en la configuración para ayudarte a elegir modelos compatibles (Instruct/Chat).
  - ⚙️ **Implantes Confiables:** Corregida la definición de slots y la carga de reglas en la creación de personajes. Ahora todas tus cibermejoras usarán slots oficiales y se autoequiparán correctamente.
  - 🎓 **Límite de Aprendiz:** Ajustado el equilibrio inicial de habilidades. La IA genera un paquete de puntos a repartir automáticamente en las habilidades más importantes según el contexto de tu personaje. Tus héroes ahora empezarán como verdaderos novatos, progresando de forma más lógica.

****************************************************************************************************
14/02/2026 05:06 - Refuerzo de Integridad, Consciencia de Personajes y Optimización - Beta_v055
****************************************************************************************************
- What's New (ES-419):
  - 🧠 **Prioridad de IA a tu gusto:** Ahora puedes arrastrar y soltar tus conectores de IA para decidir cuál usar primero. Si una falla, el juego intentará automáticamente con la siguiente en tu lista de prioridades.
  - ⚙️ **Control de Precarga:** Se añadió una opción en el lanzador para decidir si quieres precargar el modelo de IA local o cargarlo solo cuando sea necesario (ahorro de recursos al iniciar).
  - 🛡️ **Borrado Seguro y Limpio:** Al eliminar un mundo, el sistema ahora se encarga de limpiar absolutamente todos los datos relacionados (personajes e historia), manteniendo tu base de datos impecable.
  - 🚀 **Optimización de Memoria:** El "cerebro" de la IA ahora se carga una sola vez y se comparte entre todas las funciones, ahorrando mucha memoria gráfica (VRAM).
  - 🎨 **Interfaz Inteligente:** El panel de selección de mundos ahora se ajusta perfectamente a la pantalla y al texto, sin botones cortados ni espacios mal aprovechados.
  - 🔄 **Rotación Inteligente Mejorada:** Se arregló el sistema de rotación para que no se rinda con tu IA local a la primera; ahora le da una oportunidad de corregirse antes de buscar ayuda externa.
  - 🌍 **IA Políglota y Robusta:** La detección de objetos y la narrativa ahora son más precisas en 10 idiomas, con blindaje especial para que nunca te falte historia.
  - 🛠️ **Persistencia de IA Garantizada:** Corregido el error que hacía que Gemini se "olvidara" o se transformara en Ollama. Tus prioridades de uso de IA ahora se guardan de forma segura y quirúrgica.
  - ⚡ **Gemini Restaurado:** Reparado el acceso al modelo Gemini recuperando sus claves y URL correctas.
  - 🎨 **Interfaz Temática Corregida:** Los botones de decisión ahora recuperan instantáneamente el color de tu mundo (ej. Oro para fantasía) al cargar la partida.
  - 👥 **Consciencia entre Personajes:** ¡La IA ahora es consciente de todos tus personajes! Si tienes varios héroes en un mismo mundo, la IA los reconocerá como habitantes y podrá recordar qué hizo cada uno de forma individual.
  - 🧠 **Memoria con Atribución:** El sistema de recuerdos ahora distingue quién realizó cada acción, evitando que la IA confunda tus hazañas pasadas con las de otros personajes.

****************************************************************************************************
13/02/2026 07:56 - Sistema de Interpretación Semántica de Combate - Beta_v054
****************************************************************************************************
- What's New (ES-419):
  🧪 YA DISPONIBLE:
  
  ⚠️ **AVISO IMPORTANTE:** EL JUEGO PUEDE MIGRAR LA ANTIGUA BASE DE DATOS A LA NUEVA ESTRUCTURA MEDIANTE OPCIONES DEL LAUNCHER. NO RECOMIENDO ESTO; AUNQUE FUNCIONE TU ANTIGUA PARTIDA, MUCHAS COSAS ESTARÁN ROTAS. MI RECOMENDACIÓN ES ELIMINAR TODAS LAS PARTIDAS ANTERIORES GUARDADAS. NO ES NECESARIO BORRAR LA BASE DE DATOS POR COMPLETO SALVO EN CASO EXTREMO.
  
  Cambios:
  
  - 🌍 **Gestor de Mundos y Personajes:** Ahora tienes total libertad. Crea tus propios Mundos con sus propias reglas y ambientación, y dentro de cada uno, crea tantos personajes como quieras. **Nota Importante:** Todos los personajes de un mismo mundo comparten la misma línea temporal y los eventos sucedidos, lo que sienta las bases para el futuro modo multijugador.
  - 🧠 **Memoria Contextual (Súper RAG):** La IA ahora tiene "sentidos". Al buscar información en el Lore o en su memoria, tiene en cuenta dónde estás, con quién estás, si estás herido y qué acaba de pasar. Si estás con un Rey, recordará cosas sobre reyes. Si estás herido, buscará reglas sobre curación. ¡Es mucho más intuitivo y coherente!
  - 🌍 **Lore en el Primer Personaje:** ¿Escribías una descripción épica de tu mundo y la IA la ignoraba en tu primer personaje? ¡Solucionado! Ahora la descripción manual del mundo llega directamente a la IA durante la creación inicial, antes incluso de que el sistema de memoria se active.
  - ⚙️ **Sistema de Mundos Mejorado:** He independizado el nombre de tu mundo de las reglas técnicas. Ahora puedes llamar a tu mundo como quieras sin que eso afecte a la carga de reglas de Fantasía o Cyberpunk.
  - 📝 **Claridad en Creación:** He mejorado las instrucciones internas para que la IA entienda mejor cuándo debe inventar un trasfondo y cuándo debe limitarse a extraer tus estadísticas.
  - 🧠 **Combate por Texto Libre:** Ahora puedes escribir tus acciones en combate como si hablaras con un PJ de mesa: "lanzar hechizo de curación sobre mí", "desenfundar mi espada", "usar poción de curación". La IA entiende tu intención y la traduce a mecánica de juego.
  - 🎨 **¡Nueva Interfaz Épica!** He remodelado el juego por completo. Menús estilo RPG, fondos animados y una experiencia visual totalmente renovada. Estilo oscuro semitransparente, bordes neón y sombras suavizadas para una inmersión total.
  - 🎬 **IA Director de Escena (MEJORADO):** El combate ahora cobra vida. La IA genera eventos ambientales y reacciones que enriquecen la narrativa: antorchas que caen, enemigos que retroceden, vigas que se derrumban. ¡El campo de batalla ya no es estático!
  - ⚔️ **Desenfundar con Palabras:** Ya no necesitas hacer clic en el slot del arma. Simplemente escribe "desenfundar espada" o "sacar mi hacha" y el sistema lo interpreta automáticamente (¡OJO!, hacerlo en combate puede resultar en fracaso, pifia y pérdida de turno... "¡A los combates hay que venir preparados!").
  - 📖 **Hechizos Reconocidos:** La IA ahora conoce tu libro de hechizos completo. Di "lanzar bola de fuego" y si tienes ese hechizo, lo lanzará.
  - 🌍 **Narrativa en tu Idioma:** La historia ahora respeta estrictamente el idioma seleccionado, evitando mezclas raras entre idiomas (¡ojalá no vuelva a tener que ver más spanglish nunca más!, he forzado tanto a la IA que diría que si vuelve a generar textos en otro idioma diferente al seleccionado, será puramente porque realmente está maldita).
  - 🛡️ **No Más Turnos Perdidos:** Si el juego no entiende tu acción, te pedirá que la reformules. Tu turno NO se pierde.
  - 🎒 **Inventario Manual:** Para mover objetos entre slots (equipar desde mochila, cargar munición), usa la interfaz de arrastrar y soltar. Esto evita confusiones y ahorra recursos de IA.
  - 🧪 **Uso de Pociones Fluido:** Ahora puedes arrastrar pociones y comida directamente sobre tu retrato para usarlas. He añadido también la opción "Usar" al hacer clic derecho. ¡Más intuitivo y rápido!
  - 🩸 **Corrección de Daño:** ¡Ya no eres inmortal! Hemos arreglado un problema donde la barra de vida no bajaba aunque te golpearan. Ahora sufrirás como es debido.
  - 👻 **Adiós a los Items Fantasma:** ¿Encontrabas un objeto en la historia pero nunca aparecía en tu mochila? ¡Problema resuelto! Ahora el sistema repara automáticamente los objetos que la IA "olvida" crear.
  - 🐛 **Corrección Crítica NPC:** Solucionado un fallo que impedía que los NPCs tomaran decisiones tácticas correctamente, causando que siempre "esperaran" en lugar de atacar o defenderse.
  - 🎒 **Corrección Inventario Inicial:** Los nuevos personajes ya no comienzan desnudos. Ahora reciben su equipo inicial correctamente.
  - 🎲 **Creación de Personaje:** Corregido un exploit donde subir y bajar un atributo en ciertos umbrales generaba puntos extra infinitos. ¡Se acabó el truco del Carisma!
  - 🖼️ **Retratos Arreglados:** ¿Creabas un mundo con nombre propio y los retratos desaparecían? ¡Arreglado! Ahora el sistema encuentra las imágenes correctas sin importar cómo bautices a tu mundo.
  - 💍 **Iconos Inteligentes:** Los objetos (incluidos anillos) ahora muestran iconos más precisos y correctos en la interfaz.
  - 🧪 **Tooltips Mejorados:** Las pociones, consumibles y hechizos ahora muestran correctamente toda su información y efectos al pasar el mouse por encima.
  - 🎵 **Mejoras de Audio:** La música de combate ya no se detiene al presionar los botones predefinidos.
  - [I18N] **Fix Implantes:** Añadidas claves de traducción faltantes para slots de implantes (`slot_implant_*`) e iconos correspondientes (`icon_implant_*`) en `es.json`.
  - [FIX][AUDIO] **Audio Inconsistente:** Adaptados los efectos de sonido (SFX) de equipar items y desenfundar armas a la ambientación. Ahora el sistema detecta el `setting_key` y usa sonidos futuristas/industriales en Cyberpunk y sonidos clásicos en Fantasía.
  - [FIX][I18N] **Limpieza es.json:** Eliminadas más de 20 claves duplicadas en `es.json` y corregidas erratas en nombres de slots (ej. "Oíidos" -> "Oídos").
  - ⚙️ **Detección de Modelos Inteligente:** Ahora el juego lee directamente el "cerebro" de los modelos que importes (GGUF). Detecta el contexto máximo real de forma automática. (Modelos oficiales optimizados ni se tocan para máxima estabilidad).
  - 📂 **Ahorro de Espacio:** Al añadir un modelo desde tu computadora, ahora el juego lo mueve directamente a su carpeta en lugar de copiarlo. ¡Tus Gigabytes te lo agradecerán!
  - ⚖️ **Justicia en los Atributos:** Corregido un exploit que permitía conseguir puntos infinitos al subir y bajar atributos en la creación.
  - 📖 **Guía de Entrenamiento:** He actualizado el Manual (README) con todos los detalles sobre cómo tus personajes ganan experiencia y suben sus atributos.
  - 📜 **Códice de Mundos Épicos:** ¡Se acabó el lore de "una posdata"! Ahora el generador crea mundos con historia profunda, describiendo sus religiones, leyes, geografía y personajes famosos en un formato de crónica detallada.
  - 🧙 **Historias Coherentes:** Tu personaje ya no nace en el vacío. Su trasfondo ahora se integra inteligentemente con el lore del mundo que acabas de crear o elegir.
  - ⚡ **Interfaz Fluida:** La autogeneración de historias y mundos ahora se realiza en segundo plano. ¡Se acabaron las esperas con la pantalla congelada!
  - 🚀 **Inicio de Aventura Instantáneo:** ¡He eliminado las esperas! Ahora, tras crear tu personaje, saltas directamente a la historia. El sistema usa tu trasfondo enriquecido para crear el comienzo perfecto sin que tengas que escribir ni una sola palabra más.
  - 🎭 **Trasfondos con Pretexto:** Tus personajes ya no solo tienen un pasado, sino también un motivo urgente para empezar la aventura. El nuevo sistema de IA genera automáticamente la chispa inicial de la historia integrada en tu biografía.
  - 🧹 **Interfaz Simplificada:** He quitado los botones y pantallas que no aportaban valor. El botón "Iniciar Historia" centraliza ahora todo el poder para que empieces a jugar cuanto antes.
  - [FIX][UI] **Duplicación Visual en Selección de Mundo:** Corregido bug donde el nombre del mundo aparecía duplicado como "Nombre [Nombre]". Ahora se oculta la etiqueta de tipo si es redundante.
  - [FEAT][UI] **Carga Rápida (Click Simple):** Ahora se puede cargar un personaje o iniciar la creación de uno nuevo con un solo click en la pantalla de selección de mundos. Se mantiene la expansión de mundos para evitar conflictos.
  - 🧠 **IA más Creativa:** He roto el "bucle de repetición" de la IA inyectando variabilidad técnica en cada petición. Ahora los personajes generados aleatoriamente serán mucho más únicos y originales, ignorando los ejemplos de la guía.
  
  🛡️ A los valientes que se ATREVAN a luchar en la primera línea de batalla: ¡La aventura los espera, ahora más indomable que nunca!

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
