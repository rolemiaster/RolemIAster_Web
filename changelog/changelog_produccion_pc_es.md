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