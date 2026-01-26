****************************************************************************************************
26/01/2026 04:45 - Estabilización SDIA y Corrección de Comercios - Beta_v045
****************************************************************************************************
- Novedades:
  Hemos reforzado la estabilidad del juego para que nunca se quede colgado al iniciar. Además, los vendedores han vuelto de sus vacaciones en el limbo: ahora aparecen correctamente, tienen mercancía en las estanterías y respetan la ambientación del mundo (nada de pociones mágicas en el futuro).

  Se ha arreglado el bug que no permitía modificar los parámetros de IA y la selección del modelo de IA, haciendo que algunos usuarios con VRAM limitada no pudiesen jugar.
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

