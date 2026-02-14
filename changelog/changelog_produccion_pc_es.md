****************************************************************************************************
14/02/2026 05:06 - Refuerzo de Integridad, Consciencia de Personajes y Optimiza - Beta_v056
****************************************************************************************************
- Novedades (ES):
  - 🧠 **Prioridad IA a tu gusto:** Ahora puedes arrastrar y soltar tus conectores de IA para decidir cuál usar primero. Si una falla, el juego intentará automáticamente con la siguiente en tu lista de prioridades.
  - ⚙️ **Control de Precarga:** Añadida opción en el lanzador para decidir si quieres precargar el modelo de IA local o cargarlo solo cuando sea necesario (ahorro de recursos al arrancar).
  - 🛡️ **Borrado Seguro y Limpio:** Al eliminar un mundo, el sistema ahora se encarga de limpiar absolutamente todos los datos relacionados (personajes e historia), manteniendo tu base de datos impecable.
  - 🚀 **Optimización de Memoria:** El "cerebro" de la IA ahora se carga una sola vez y se comparte entre todas las funciones, ahorrando mucha memoria gráfica (VRAM).
  - 🎨 **Interfaz Inteligente:** El panel de selección de mundos ahora se ajusta perfectamente a la pantalla y al texto, sin botones cortados ni espacios mal aprovechados.
  - 🔄 **Rotación Inteligente Mejorada:** He arreglado el sistema de rotación para que no se rinda con tu IA local a la primera; ahora le da una oportunidad de corregirse antes de buscar ayuda externa.
  - 🌍 **IA Políglota y Robusta:** La detección de objetos y la narrativa ahora son más precisas en 10 idiomas, con blindaje especial para que nunca te falte historia.
  - 🛠️ **Persistencia de IA Garantizada:** Corregido el error que hacía que Gemini se "olvidara" o se transformara en Ollama. Tus prioridades de uso de IA ahora se guardan de forma segura y quirúrgica.
  - ⚡ **Gemini Restaurado:** Reparado el acceso al modelo Gemini recuperando sus claves y URL correctas.
  - 🎨 **Interfaz Temática Corregida:** Los botones de decisión ahora recuperan instantáneamente el color de tu mundo (ej. Oro para fantasía) al cargar la partida.
  - 👥 **Consciencia entre Personajes:** ¡La IA ahora es consciente de todos tus personajes! Si tienes varios héroes en un mismo mundo, la IA los reconocerá como habitantes y podrá recordar qué hizo cada uno de forma individual.
  - 🧠 **Memoria con Atribución:** El sistema de recuerdos ahora distingue quién realizó cada acción, evitando que la IA confunda tus hazañas pasadas con las de otros personajes.

****************************************************************************************************
13/02/2026 07:56 - Sistema de Interpretación Semántica de Combate - Beta_v054
****************************************************************************************************
- Novedades (ES):
  🧪 YA DISPONIBLE:
  
  ⚠️ **AVISO IMPORTANTE:** EL JUEGO PUEDE MIGRAR LA ANTIGUA BASE DE DATOS PARA LA NUEVA ESTRUCTURA MEDIANTE OPCIONES DEL LAUNCHER. NO RECOMIENDO ESTO, AUNQUE FUNCIONE TU ANTIGUA PARTIDA, MUCHAS COSAS ESTARÁN ROTAS. MI RECOMENDACIÓN ES ELIMINAR TODAS LAS PARTIDAS ANTERIORES GUARDADAS. NO ES NECESARIO BORRAR LA BASE DE DATOS AL COMPLETO SALVO CASO EXTREMO.
  
  Cambios:
  
  - 🌍 **Gestor de Mundos y Personajes:** Ahora tienes total libertad. Crea tus propios Mundos con sus propias reglas y ambientación, y dentro de cada uno, crea tantos personajes como quieras. **Nota Importante:** Todos los personajes de un mismo mundo comparten la misma línea temporal y los eventos sucedidos, lo que sienta las bases para el futuro modo multijugador.
  - 🧠 **Memoria Contextual (Súper RAG):** La IA ahora tiene "sentidos". Al buscar información en el Lore o en su memoria, tiene en cuenta dónde estás, con quién estás, si estás herido y qué acaba de pasar. Si estás con un Rey, recordará cosas sobre reyes. Si estás herido, buscará reglas sobre curación. ¡Es mucho más intuitivo y coherente!
  - 🌍 **Lore en el Primer Personaje:** ¿Escribías una descripción épica de tu mundo y la IA la ignoraba en tu primer personaje? ¡Solucionado! Ahora la descripción manual del mundo llega directamente a la IA durante la creación inicial, antes incluso de que el sistema de memoria se active.
  - ⚙️ **Sistema de Mundos Mejorado:** He independizado el nombre de tu mundo de las reglas técnicas. Ahora puedes llamar a tu mundo como quieras sin que eso afecte a la carga de reglas de Fantasía o Cyberpunk.
  - 📝 **Claridad en Creación:** He mejorado las instrucciones internas para que la IA entienda mejor cuándo debe inventar un trasfondo y cuándo debe limitarse a extraer tus estadísticas.
  - 🧠 **Combate por Texto Libre:** Ahora puedes escribir tus acciones en combate como si hablaras con un pj de mesa: "lanzar hechizo de curación sobre mí", "desenfundar mi espada", "usar poción de curación". La IA entiende tu intención y la traduce a mecánica de juego.
  - 🎨 **¡Nueva Interfaz Épica!** He remodelado el juego por completo. Menús estilo RPG, fondos animados y una experiencia visual totalmente renovada. Estilo oscuro semitransparente, bordes neón y sombras suavizadas para una inmersión total.
  - 🎬 **IA Director de Escena (MEJORADO):** El combate ahora cobra vida. La IA genera eventos ambientales y reacciones que enriquecen la narrativa: antorchas que caen, enemigos que retroceden, vigas que se derrumban. ¡El campo de batalla ya no es estático!
  - ⚔️ **Desenfundar con Palabras:** Ya no necesitas hacer clic en el slot del arma. Simplemente escribe "desenfundar espada" o "sacar mi hacha" y el sistema lo interpreta automáticamente (OJO!, hacerlo en combate puede resultar en fracaso, pifia y perdida de turno!... "A los combates se viene preparado de casa!").
  - 📖 **Hechizos Reconocidos:** La IA ahora conoce tu libro de hechizos completo. Di "lanzar bola de fuego" y si tienes ese hechizo, lo lanzará.
  - 🌍 **Narrativa en tu Idioma:** La historia ahora respeta estrictamente el idioma seleccionado, evitando mezclas raras entre idiomas (ojalá no vuelva a tener que ver más spanglish nunca más!, he forzado tanto a la ia que diría que si vuelve a generar textos en otro idioma diferente al seleccionado, será puramente porque realmnete está maldita).
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
  - 🧪 **Tooltips Mejorados:** Las pociones, consumibles y hechizos ahora muestran correctamente toda su información y efectos al pasar el ratón por encima.
  - 🎵 **Mejoras de Audio:** La música de combate ya no se detiene al pulsar los botones predefinidos.
  - [I18N] **Fix Implantes:** Añadidas claves de traducción faltantes para slots de implantes (`slot_implant_*`) e iconos correspondientes (`icon_implant_*`) en `es.json`.
  - [FIX][AUDIO] **Audio Inconsistente:** Adaptados los efectos de sonido (SFX) de equipar items y desenfundar armas a la ambientación. Ahora el sistema detecta el `setting_key` y usa sonidos futuristas/industriales en Cyberpunk y sonidos clásicos en Fantasía.
  - [FIX][I18N] **Limpieza es.json:** Eliminadas más de 20 claves duplicadas en `es.json` y corregidas erratas en nombres de slots (ej. "Oíidos" -> "Oídos").
  - ⚙️ **Detección de Modelos Inteligente:** Ahora el juego lee directamente el "cerebro" de los modelos que importes (GGUF). Detecta el contexto máximo real de forma automática. (Modelos oficiales optimizados ni se tocan para máxima estabilidad).
  - 📂 **Ahorro de Espacio:** Al añadir un modelo desde tu ordenador, ahora el juego lo mueve directamente a su carpeta en lugar de copiarlo. ¡Tus Gigabytes te lo agradecerán!
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
  
  🛡️ A los valientes que se ATREVAN a luchar en la primera línea de batalla: ¡La aventura os espera, ahora más indomable que nunca!

****************************************************************************************************
06/02/2026 02:32 - Soporte Vulkan (AMD/Intel) y Manejo Robusto de Errores - Beta_v053
****************************************************************************************************
- Novedades (ES):
  - 🚀 **Motor Híbrido Vulkan:** ¡Soporte oficial para tarjetas gráficas AMD e Intel! Ahora el juego incluye un motor Vulkan dedicado que se activa automáticamente (o manualmente) para acelerar la IA en equipos no-NVIDIA.
  - ⚙️ **Control Total del Motor:** Hemos añadido la opción "Forzar Vulkan" tanto en el Launcher como en la Configuración. Si tienes problemas con CUDA o quieres probar el rendimiento de Vulkan (que en muchas configuraciones va volando), tú tienes el mando.
  - 🚦 **Estado del Sistema:** Ahora puedes ver exactamente qué motor está rugiendo bajo el capó (🟢 VERDE para CUDA, 🔴 ROJO para Vulkan) en el panel de estado.
  - 🛡️ **Semáforo de IA:** Si la Inteligencia Artificial se "cansa" (supera su cuota) o se corta internet, el juego te avisará con una ventana clara y útil en lugar de dejarte esperando en silencio.
  - 🔄 **Seguridad Anti-Bloqueo:** Si ocurre un error de conexión, el juego ya no "rompe" la conversación. Tus opciones de diálogo reaparecerán para que puedas reintentar sin perder progreso.
  - ☁️ **Memoria de Nube:** El menú de configuración ahora recuerda correctamente tus preferencias de proveedores en la nube entre sesiones.

****************************************************************************************************
03/02/2026 20:23 - Optimización de Memoria VRAM y Estabilidad de Carga - Beta_v052
****************************************************************************************************
- Novedades (ES):
  - 🧠 **Cerebro Optimizado:** Hemos corregido un fallo grave que hacía que la IA intentase "pensar dos veces" al mismo tiempo, duplicando el uso de memoria de la tarjeta gráfica y causando lentitud extrema o bloqueos. ¡Tu VRAM te lo agradecerá!
  - 💾 **Carga Segura:** Mejorada la estabilidad general al cargar partidas para asegurar que retomar tu aventura sea siempre una experiencia fluida.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Crítico: Estabilidad, Multi-GPU y Mejoras de Localización - Beta_v051
****************************************************************************************************
- Novedades (ES):
  - 🚑 **Arreglo Crítico:** Solucionado un problema que impedía en algunas circunstancias extrañas iniciar el juego ("Fallo Total") debido a corrupción en la base de datos que el Launcher no podía limpiar. Ahora la opción "Borrar Base de Datos" es mucho más efectiva.
  - ⚡ **Mejora Hardware:** Corregido un fallo que hacía que el modo de "Configuración Automática" ignorase la potencia de sistemas con múltiples tarjetas gráficas en algunas configuraciones con GPUs no idénticas.
  - 🛠️ **Utilidad:** Añadida una nueva opción en el Launcher para abrir fácilmente el registro (log) de la sesión anterior y facilitar el soporte.
  - 🌍 **Localización:** Corregidos varios botones que aparecían en inglés (Yes/No) en el lanzador. Ahora respetan el idioma seleccionado.
  - 📖 **Interfaz:** Mejorado el formato del texto de información de versiones para que sea más legible.
  
  - **Próximamente:** Siguiente punto en proceso de implementación: compatibilidad con GPU AMD, NVIDIA e Intel mediante Vulkan.

****************************************************************************************************
01/02/2026 23:44 - Multi-GPU, corrección de manuales y estabilidad - v050
****************************************************************************************************
- Novedades:
  **¡Potencia Multi-GPU y arreglos críticos!**
  * **🚀 Soporte Multi-GPU:** Implementada la capacidad de dividir grandes modelos de IA entre varias tarjetas gráficas. *Ahora puedes usar todo tu arsenal de hardware; ¡Poder ilimitado!*
  * **🛡️ Estabilidad:** Añadidas todas las bibliotecas DLL faltantes para evitar cierres inesperados. *He blindado el motor; si falla ahora, será debido a un fallo crítico en los datos.*
  * **📖 Manuales web dinámicos:**
  * **Selector real:** El menú de idiomas ahora comprueba qué archivos existen realmente antes de mostrarlos. *Se acabaron las opciones fantasma que no hacían nada; magia de adivinación de nivel 5.*
  * **Solución Error 403:** Corregido el error de permisos que impedía ver el registro de cambios dentro del juego. *Le enseñé a la aplicación cómo pedir acceso correctamente («¡Ábrete, sésamo!»).*
  * **🌍 Idiomas:** Revisión de textos y traducciones. *Modo políglota activado.*

****************************************************************************************************
28/01/2026 22:49 - Estabilización y Mejoras de IA - Beta_v049
****************************************************************************************************
- Novedades:
  Hemos pulido la experiencia de juego con correcciones importantes y una nueva herramienta visual:

  * **Inventario Limpio y Confiable:** Se acabó encontrar "objetos fantasma" o ítems con nombres extraños en tu mochila. Hemos implementado un sistema de validación narrativa que asegura que todo lo que recojas o compres exista realmente en el mundo del juego.
  * **Diálogos Fluidos:** Hemos reparado esos molestos botones que a veces aparecían como "Unknown" o no respondían. Ahora las opciones de diálogo con los NPCs siempre mostrarán el texto correcto.
  * **Generación de Personajes Robusta:** Crear tu héroe es ahora un proceso sólido. Hemos solucionado los conflictos que a veces dejaban la ficha incompleta o con estadísticas erróneas al combinar biografía y stats.
  * **Nueva Barra de Estado de IA:** ¡Ahora puedes ver el cerebro de la máquina funcionando! Hemos añadido una barra en la parte superior que te muestra la velocidad de respuesta y el uso de memoria en tiempo real. Así sabrás siempre si la IA está "pensando" tu próxima aventura.

****************************************************************************************************
28/01/2026 03:50 - Fix Crítico Compilación - Beta_v048
****************************************************************************************************
- Novedades:
  Solucionado un error crítico que impedía iniciar el juego en instalaciones nuevas. Mejorada la estabilidad y la compatibilidad con diferentes equipos.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & RTX 50 Support - Beta_v047
****************************************************************************************************
- Novedades:

  > [!IMPORTANTE]
  > **POR MOTIVOS DE COMPATIBILIDAD, ES NECESARIO ELIMINAR LA DB PREVIA O DE LO CONTRARIO ES MUY PROBABLE QUE DÉ ERRORES EN LA CONFIGURACIÓN IA**
  > **(Solución: Clic en el ícono de engranaje ⚙️ del Launcher -> Borrar Base de Datos)**

  *Soporte Crítico para RTX Serie 50: Solucionado un error grave que provocaba el cierre inesperado al intentar generar personajes en las nuevas tarjetas gráficas NVIDIA (RTX 5070, 5080, 5090).
  (Como no dispongo de una RTX de la serie 5000 no pude probar directamente si la solución es 100%, pero la teoría es que debería estar solucionado. ¡Espero sus cánticos de victoria aquí!)
  
  *Actualización del Motor de IA: Hemos actualizado el cerebro local del juego para que sea compatible con la última tecnología de hardware, asegurando que todos puedan disfrutar de la experiencia sin conexión, sin importar qué tan moderno sea su equipo.
  
  *Nuevo Launcher: Actualizaciones y noticias en tiempo real desde la web oficial.


****************************************************************************************************
26/01/2026 06:49 - Integración Web Documentación - Beta_v045
****************************************************************************************************
- Novedades:
  *Ahora el Manual de Usuario y el Registro de Cambios se cargan directamente desde nuestra web oficial, garantizando que siempre tengas la información más actualizada sin necesidad de descargar parches. Incluye modo offline inteligente.

  *Hemos reforzado la estabilidad del juego para que nunca se trabe al iniciar. Además, los vendedores han vuelto de sus vacaciones en el limbo: ahora aparecen correctamente, tienen mercancía en los estantes y respetan la ambientación del mundo (nada de pociones mágicas en el futuro).

  *Se arregló el bug que no permitía modificar los parámetros de IA y la selección del modelo de IA, haciendo que algunos usuarios con VRAM limitada no pudiesen jugar.
  **En caso de necesitar modificar los parámetros de IA, recomiendo encarecidamente probar primero bajando el % de VRAM a 85%, reiniciar y probar; si esto sigue sin ser suficiente, recomiendo revisar que la VRAM de la GPU no esté siendo usada por otros procesos que no sean del propio juego (reinicio de la PC si es necesario, cierre de aplicaciones que puedan ocupar VRAM). Si después de bajar la cantidad de VRAM incluso hasta el 70% sigue sin funcionar, no recomiendo seguir bajando porque el juego no podrá gestionar los prompts que se envían a la IA, por lo que aunque se consiga evitar el desbordamiento de VRAM, el juego no podrá funcionar porque no tiene con qué hacerlo; en ese caso la única opción restante es bajar de modelo a uno inferior, volver a colocar los parámetros de IA en automático y reiniciar.

****************************************************************************************************
26/01/2026 04:00 - Estabilización Core y Diagnóstico Servicios - Beta_v044
****************************************************************************************************
- Novedades:
  Estabilización Core y Diagnóstico Servicios. Correcciones críticas en generación de personajes, UI (MainWindow) y optimización de búsqueda semántica. Inicio de diagnóstico profundo del modo servicios.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs y Estabilidad - Beta_v043
****************************************************************************************************
- Description:
  Parche correctivo enfocado en diagnóstico y corrección de bucle de UI.

- Changes:
  Arreglado bug visual del diálogo de reinicio
  Nuevo sistema de logs en %LOCALAPPDATA% para diagnóstico
  Optimizaciones de rendimiento interno

****************************************************************************************************
24/01/2026 06:30 - Soporte Biografía Backend - Beta_v042
****************************************************************************************************
- Description:
  Exposición de datos de biografía para UI y ajustes de i18n.

<!-- source_hash: 5f218fc5 -->
