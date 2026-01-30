****************************************************************************************************
30/01/2026 02:09 - Multi-GPU & Stability Update - Beta_v050
****************************************************************************************************
- Novedades:
   **¡Potencia Multi-GPU y Estabilidad Blindada!**  *   **Soporte Multi-GPU:** Divide modelos gigantes entre todas tus tarjetas gráficas. *   **Cero Crashes:** Motor blindado con todas las librerías DLL necesarias. *   **Conexión:** Arreglado el acceso al manual online. *   **Idiomas:** 100% textos revisados.

****************************************************************************************************
28/01/2026 22:49 - Estabilización y Mejoras de IA - Beta_v049
****************************************************************************************************
- Novedades:
  Hemos pulido la experiencia de juego con correcciones importantes y una nueva herramienta visual:

  * **Inventario Limpio y Fiable:** Se acabó encontrar "objetos fantasma" o ítems con nombres extraños en tu mochila. Hemos implementado un sistema validación narrativa que asegura que todo lo que recojas o compres exista realmente en el mundo de juego.
  * **Diálogos Fluidos:** Hemos reparado esos molestos botones que a veces aparecían como "Unknown" o no respondían. Ahora las opciones de diálogo con los NPCs siempre mostrarán el texto correcto.
  * **Generación de Personajes Robusta:** Crear tu héroe es ahora un proceso sólido. Hemos solucionado los conflictos que a veces dejaban la ficha incompleta o con estadísticas erróneas al combinar biografía y stats.
  * **Nueva Barra de Estado de IA:** ¡Ahora puedes ver el cerebro de la máquina funcionando! Hemos añadido una barra en la parte superior que te muestra la velocidad de respuesta y el uso de memoria en tiempo real. Así sabrás siempre si la IA está "pensando" tu próxima aventura.

****************************************************************************************************
28/01/2026 03:50 - Fix Critico Compilacion - Beta_v048
****************************************************************************************************
- Novedades:
  Solucionado un error critico que impedia iniciar el juego en instalaciones nuevas. Mejorada la estabilidad y la compatibilidad con diferentes equipos.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & RTX 50 Support - Beta_v047
****************************************************************************************************
- Novedades:

  > [!IMPORTANTE]
  > **POR MOTIVOS DE COMPATIBILIDAD, ES NECESARIO ELIMINAR LA DB PREVIA O DE LO CONTRARIO ES MUY PROBABLE QUE DE ERRORES EN LA CONFIGURACIÓN IA**
  > **(Solución: Click en el icono de engranaje ⚙️ del Launcher -> Borrar Base de Datos)**

  *Soporte Crítico para RTX Serie 50: Solucionado un error grave que provocaba el cierre inesperado al intentar generar personajes en las nuevas tarjetas gráficas NVIDIA (RTX 5070, 5080, 5090).
  (Como no dispongo de una RTX de la serie 5000 no he podido probar directamente si la solución es 100%, pero la teoría es que debería estar solucionado. ¡Espero vuestros cánticos de victoria aquí!)
  
  *Actualización del Motor de IA: Hemos actualizado el cerebro local del juego para que sea compatible con la última tecnología de hardware, asegurando que todos puedan disfrutar de la experiencia sin conexión, sin importar lo moderno que sea su equipo.
  
  *Nuevo Launcher: Actualizaciones y noticias en tiempo real desde la web oficial.


****************************************************************************************************
26/01/2026 06:49 - Integración Web Documentación - Beta_v045
****************************************************************************************************
- Novedades:
  *Ahora el Manual de Usuario y el Registro de Cambios se cargan directamente desde nuestra web oficial, garantizando que siempre tengas la información más actualizada sin necesidad de descargar parches. Incluye modo offline inteligente.

  *Hemos reforzado la estabilidad del juego para que nunca se quede colgado al iniciar. Además, los vendedores han vuelto de sus vacaciones en el limbo: ahora aparecen correctamente, tienen mercancía en las estanterías y respetan la ambientación del mundo (nada de pociones mágicas en el futuro).

  *Se ha arreglado el bug que no permitía modificar los parámetros de IA y la selección del modelo de IA, haciendo que algunos usuarios con VRAM limitada no pudiesen jugar.
  **En caso de necesidad de modificar los parámetros de IA, recomiendo encarecidamente probar primero bajando el % de VRAM a 85%, reiniciar y probar, si esto sigue sin ser suficiente, recomiendo revisar que la VRAM de la GPU no esté siendo usada por otros procesos que no sean del propio juego (reinicio de pc si es necesario, cierre de aplicaciones que puedan ocupar VRAM). si después de bajar la cantidad de vram incluso hasta el 70%, sigue sin funcionar, no recomiendo seguir bajando porque el juego no podrá gestionar los prompts que se envían a la IA, por lo que aunque se consiga evitar el desbordamiento de VRAM, el juego no podrá funcionar porque no tiene con qué hacerlo, en ese caso la única opción restante es bajar de modelo a uno inferior, volver a colocar los parámetros de IA en automático y reiniciar.

****************************************************************************************************
26/01/2026 04:00 - Estabilización Core y Diagnóstico Servicios - Beta_v044
****************************************************************************************************
- Novedades:
  Estabilización Core y Diagnóstico Servicios" "Correcciones críticas en generación de personajes, UI (MainWindow) y optimización de búsqueda semántica. Inicio de diagnóstico profundo del modo servicios.

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
24/01/2026 06:30 - Soporte Biografia Backend - Beta_v042
****************************************************************************************************
- Description:
  Exposicion de datos de biografia para UI y ajustes de i18n.
