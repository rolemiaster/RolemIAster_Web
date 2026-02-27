****************************************************************************************************
27/02/2026 16:46 - Sincronización de Carga en Combate y Flujo de Turnos - Beta_v059
****************************************************************************************************
- What's New (ES-419):
  - **Combate y ritmo de partida**
    - ⚔️ **Asaltos más fluidos:** ya no hay pulsaciones en vacío cuando tu acción estaba en cola y la carga de partidas devuelve decisiones reales, no botones fantasma.
    - 🧭 **Escena sincronizada:** lo que ves en pantalla refleja el estado actual del combate y solo aparecen enemigos presentes en tu ubicación.
    - 🚫 **Menos papeleo interno:** depuramos comprobaciones inútiles para que la partida avance sin atascos administrativos.
  
  - **Motor visual y panel avanzado**
    - 🧹 **Selector limpio:** se ocultan carpetas técnicas y se normaliza el filtrado para elegir modelos sin ruido.
    - ️ **Fondos estables:** si una imagen está en marcha no atropella a las siguientes; además, la carga en combate evita regeneraciones sorpresa.
    - 🎛️ **Panel de imagen vitaminado:** estrategia de render, fuerza de cambio y pasos mínimos ahora se controlan desde la interfaz avanzada con ayuda contextual.
  
  - **Creación de personaje y retratos**
    - 🧍 **Sexo a la vista:** eliges Masculino/Femenino en el formulario base y todo el flujo (retratos, datos internos) respeta esa elección.
    - 👶➡️🧓 **Edad entendible:** usamos tramos narrativos para que la IA dibuje mejor la etapa vital.
    - 🧼 **Prompts higienizados:** limpiamos ruido técnico antes de enviar peticiones de imagen y eso se nota en la estabilidad de los retratos.
    -  **Fichas fiables:** la IA no puede “olvidar” atributos obligatorios ni inflar el inventario inicial.
  
  - **Narrativa, reglas y RAG**
    - 🚀 **Llegada de PJ más directa:** la escena inicial usa contratos JSON estrictos y evita mezclas raras de contexto.
    -  **RAG enfocado:** solo se indexan las raíces permitidas y la ficha enviada al prompt lleva resúmenes de efectos para ahorrar tokens.
  
  - **Configuración IA y PSR**
    - 🎛️ **Nuevo control PSR Fase 1:** decide si quieres el modo quirúrgico siempre en exploración o solo cuando el prompt aprieta.
    - 📏 **Umbral ajustable (95% default):** afina cuánto margen das antes de disparar PSR automático según tu hardware.
    - 🧠 **Prompts más ligeros y sin bucles:** resumimos estados y la IA dispone de herramientas para no saturarse cuando la historia se complica.

****************************************************************************************************
24/02/2026 12:32 - Generación de imágenes por IA, mejoras narrativas y control - Beta_v058
****************************************************************************************************
- What's New (ES-419):
  **🧠 Evolución del Cerebro: Hola, Qwen 3**
  He migrado el motor del juego para sacar el máximo partido de la nueva generación de modelos Qwen3. Los antiguos modelos de la serie 2.5 fueron clave al inicio del viaje de RolemIAster, pero llegó el momento de dejar atrás las viejas glorias. Este salto cuantitativo en la generación de historias se traduce en una prosa más inmersiva, reglas mucho más estrictas y personajes más coherentes. Preparen sus tarjetas gráficas, porque el Director de Juego acaba de subir de nivel.

  **Novedad: Segunda fase de generación de imágenes por IA**
  - 🎨 **Tu mundo en imágenes:** He integrado un sistema inicial de generación de imágenes por Inteligencia Artificial. A medida que juegas, el sistema intenta generar retratos y paisajes que acompañen la ambientación de tu partida.
  - 🖼️ **Fondos dinámicos:** Las imágenes se generan en segundo plano sin detener tu partida. Verás cómo aparecen progresivamente al fondo, en las tarjetas de personajes y en el Códice.
  - 🧹 **Gestión de imágenes:** Nuevo panel para ver y eliminar las imágenes generadas que no te gusten.
  
  **Mejoras en la generación de personajes:**
  - ⚙️ **Creación aleatoria más sólida:** He unificado y mejorado el motor de reglas que la IA utiliza para crear personajes desde cero, garantizando inventarios más lógicos (5 a 10 objetos coherentes) y fichas más equilibradas.
  - 🧠 **Cerebro dividido:** La IA ahora entiende mejor cuándo debe "inventar" un personaje desde cero y cuándo debe limitarse a extraer los datos de la biografía que tú mismo has escrito.
  - ⚡ **Velocidad a tu medida:** Nueva sección en Configuración Visual. Elige entre "Rápida" (1 paso), "Media" (2 pasos) o "Alta" (4 pasos) para ajustar el tiempo de generación a la potencia de tu equipo.
  - 🛠️ **Optimización técnica:** El modelo de IA para imágenes se carga en la **RAM (memoria)** y se procesa vía **CPU**, sin ocupar memoria de video (VRAM). Esto garantiza que no interfiera con el rendimiento de la IA principal del juego (LLM). Requiere unos 5 GB de RAM adicionales, manteniéndose dentro de los requisitos mínimos oficiales de Steam.
  - 📤 **Comparte tus aventuras:** Todas las imágenes generadas se guardan automáticamente. Las encontrarás en la carpeta: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Selector de modelos (avanzado):** Si inicias el juego con el parámetro `--advanced`, ahora puedes elegir qué modelo de IA usar para las imágenes desde el panel de Apariencia. Esto permite a los entusiastas probar diferentes versiones de Stable Diffusion optimizadas para OpenVINO (archivos .xml/.bin).
  
  **Narrativa y cerebro de la IA:**
  - 🧠 **Fin de los bucles:** Se ha implementado una nueva "Doctrina de memoria" en la IA. Ahora distingue mejor entre "recuerdos" (lo que ya pasó) y el "presente" (lo que está sucediendo). Esto ayuda a reducir los casos en los que la IA se repetía o se quedaba atascada.
  - 📜 **Archivos históricos:** El sistema presenta tus recuerdos a la IA como un "Archivo histórico cerrado", facilitando que use esa información como referencia para avanzar la historia.
  - ⚡ **Instrucciones optimizadas:** Se ha mejorado la forma en que el juego solicita la narración en tu idioma, liberando capacidad del modelo para concentrarse en la creatividad.
  - 👁️ **Foco narrativo:** Se ha reescrito la percepción de la IA. Ahora entiende mejor qué elementos son "fondo estático" y no debería repetirlos innecesariamente en cada párrafo.
  - 🔀 **Decisiones más claras:** La IA ahora ofrece vías de escape más definidas. Sus sugerencias (botones) se dividen entre investigar el entorno (Profundizar) o cambiar de rumbo (Divergir).
  - 🫵 **Tratamiento directo:** Se ha ajustado la instrucción base para asegurar que la IA te trate de "tú", mejorando la inmersión personal.
  
  **Creación de personaje:**
  - 🖼️ **Retratos de personaje:** Al generar un personaje con IA, el sistema intenta crear un retrato basado en su edad, profesión y descripción. Ten en cuenta que es una versión inicial y la fidelidad (especialmente en la edad) puede variar según el modelo utilizado (sigo haciendo pruebas, pero el inicio es prometedor).
  - 🎲 **Generación aleatoria fiable:** Corregido un error donde el botón "Generar con IA" podía fallar en el primer intento, dejando los campos vacíos. Ahora el sistema de corrección inteligente asegura que la respuesta sea siempre válida.
  
  **Gestión de imágenes generadas:**
  - 🖼️ **Galería de imágenes IA:** Nuevo panel en el menú Archivo que muestra todas las imágenes que la IA ha generado durante tus partidas (retratos, fondos). Puedes filtrar por tipo de imagen o por mundo.
  - 🗑️ **Borrado selectivo:** Selecciona una o varias imágenes y elimínalas si no te convencen (quizá esa en la que la IA decidió que era buena idea estacionar un autobús en el establo del castillo). El sistema limpia tanto el archivo como su registro interno.
  - 📂 **Acceso directo:** Haz doble clic sobre cualquier miniatura para abrir la carpeta donde se encuentra el archivo. Si ya tienes la carpeta abierta, se reutiliza la misma ventana.
  - 💾 **Recuerda tu espacio:** El tamaño de la ventana de la galería se guarda automáticamente entre sesiones.
  
  **Rendimiento en configuraciones bajas (importante para GPU con poca VRAM):**
  - 🧠 **PSR - Gobernanza híbrida:** Nuevo sistema que divide el trabajo de la IA en dos fases: Planificación (Chef) y Ejecución (Cocineros). Esto permite que modelos locales con 8 GB de VRAM funcionen evitando colapsos por exceso de contexto (+12K tokens) a costa de una latencia mayor; la interacción con la IA pasa de ser un único prompt a una serie de prompts (cuanto menor sea la VRAM, mayor cantidad de prompts se generarán y mayor será el tiempo de respuesta).
  - ⚡ **Ejecución inteligente:** El sistema decide automáticamente si procesar todo de una vez (monolítico) o dividirlo en partes (iterativo) según tu VRAM disponible. Las GPU con menos VRAM activan el modo por partes solo cuando es necesario.
  - 📊 **Optimización dinámica:** PSR reduce la carga de tokens durante la generación, permitiendo que usuarios con tarjetas gráficas de 4 GB puedan completar la creación de personajes y la generación de historia que antes se bloqueaban.
  - 🔄 **Coherencia mantenida:** A pesar de dividir el trabajo, el sistema inyecta una "intención maestra" para que la IA no pierda el hilo de lo que estaba haciendo.
  
  **Voces por IA (mejora incremental):**
  Generación en tiempo real de voces en todos los idiomas (algunos idiomas están más limitados que otros; el inglés es el que cuenta con más variedad de voces).
  - 🗣️ **Gritos de combate con voz:** Al iniciar un combate contra enemigos hostiles, ahora se activa una frase de voz contextual de entrada.
  - 🎭 **Frases dinámicas por contexto:** El motor puede generar líneas cortas de voz para eventos específicos (servicios/combate) según el idioma, la ambientación y el perfil del personaje.
  - 🧠 **Plantillas de voz internas:** Se han separado las plantillas técnicas de voz del sistema narrativo para evitar interferencias con la historia.
  - 🔊 **Mayor claridad al escuchar:** Se ha mejorado la inteligibilidad y la prosodia de la síntesis para priorizar una dicción comprensible.
  
  **⚠️ Aviso de compatibilidad (partidas anteriores):**
  - 🔄 Debido a la gran cantidad de cambios internos en el motor de reglas y en el sistema de ambientación, las **partidas y mundos guardados anteriormente seguirán siendo jugables (posiblemente)**, pero es muy probable que presenten errores o comportamientos inesperados. **Se recomienda crear un mundo nuevo desde cero** para disfrutar de todas las mejoras correctamente.

****************************************************************************************************
17/02/2026 07:20 - Generación de Imágenes por IA, Mejoras Narrativas y Control - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (ES-419):
  **⚠️ RAMA EXPERIMENTAL (BETA DE STEAM)**
  Esta versión está disponible actualmente solo en la **Rama Experimental** de Steam. Para activarla:
  1. Haz clic derecho sobre **RolemIAster** en tu Biblioteca de Steam.
  2. Selecciona **Propiedades...**
  3. Ve a la pestaña **Betas**.
  4. En "Participación en la beta", selecciona **experimental** en el menú desplegable.
  
  **Novedad: Primera fase de Generación de Imágenes por IA**
  - 🎨 **Tu Mundo en Imágenes:** He integrado un sistema inicial de generación de imágenes por Inteligencia Artificial. A medida que juegas, el sistema intenta generar retratos y paisajes que acompañen la ambientación de tu partida.
  - 🖼️ **Fondos Dinámicos:** Las imágenes se generan en segundo plano sin detener tu partida. Verás cómo aparecen progresivamente en el fondo, en las tarjetas de personajes y en el Códice.
  - ⚡ **Velocidad a tu Medida:** Nueva sección en Configuración Visual. Elige entre "Rápida" (1 paso), "Media" (2 pasos) o "Alta" (4 pasos) para ajustar el tiempo de generación a la potencia de tu equipo.
  - 🛠️ **Optimización Técnica:** El modelo de IA para imágenes se carga en la **RAM (Memory)** y se procesa vía **CPU**, sin ocupar memoria de video (VRAM). Esto garantiza que no interfiera con el rendimiento de la IA principal del juego (LLM). Requiere unos 5GB de RAM adicionales, manteniéndose dentro de los requisitos mínimos oficiales de Steam.
  - 📤 **Comparte tus Aventuras:** Todas las imágenes generadas se guardan automáticamente. Las encontrarás en la carpeta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa y Cerebro IA:**
  - 🧠 **Fin de los Bucles:** Se ha implementado una nueva "Doctrina de Memoria" en la IA. Ahora distingue mejor entre "recuerdos" (lo que ya pasó) y el "presente" (lo que está pasando). Esto ayuda a reducir los casos donde la IA se repetía o quedaba atascada.
  - 📜 **Archivos Históricos:** El sistema presenta tus recuerdos a la IA como un "Archivo Histórico Cerrado", facilitando que use esa información como referencia para avanzar la historia.
  - ⚡ **Instrucciones Optimizadas:** Se ha mejorado la forma en que el juego solicita la narración en tu idioma, liberando capacidad del modelo para concentrarse en la creatividad.
  - 👁️ **Foco Narrativo:** Se ha reescrito la percepción de la IA. Ahora entiende mejor qué elementos son "fondo estático" y no debería repetirlos innecesariamente en cada párrafo.
  - 🔀 **Decisiones Más Claras:** La IA ahora ofrece vías de escape más definidas. Sus sugerencias (botones) se dividen entre investigar el entorno (Profundizar) o cambiar de rumbo (Divergir).
  - 🫵 **Tratamiento Directo:** Se ha ajustado la instrucción base para asegurar que la IA te trate de "Tú", mejorando la inmersión personal.
  
  **Creación de Personaje:**
  - 🖼️ **Retratos de Personaje:** Al generar un personaje con IA, el sistema intenta crear un retrato basado en su edad, profesión y descripción. Ten en cuenta que es una versión inicial y la fidelidad (especialmente en la edad) puede variar según el modelo utilizado. (sigo haciendo pruebas pero el inicio es bueno)
  - 🎲 **Generación Aleatoria Confiable:** Corregido un error donde el botón "Generar con IA" podía fallar en el primer intento, dejando los campos vacíos. Ahora el sistema de corrección inteligente se asegura de que la respuesta sea siempre válida.

****************************************************************************************************
17/02/2026 07:04 - Generación de Imágenes por IA, Mejoras Narrativas y Control - Beta_v058
****************************************************************************************************
- What's New (ES-419):
  **⚠️ RAMA EXPERIMENTAL (BETA DE STEAM)**
  Esta versión está disponible actualmente solo en la **Rama Experimental** de Steam. Para activarla:
  1. Haz clic derecho sobre **RolemIAster** en tu Biblioteca de Steam.
  2. Selecciona **Propiedades...**
  3. Ve a la pestaña **Betas**.
  4. En "Participación en la beta", selecciona **experimental** en el menú desplegable.
  
  **Novedad: Primera fase de Generación de Imágenes por IA**
  - 🎨 **Tu Mundo en Imágenes:** He integrado un sistema inicial de generación de imágenes por Inteligencia Artificial. A medida que juegas, el sistema intenta generar retratos y paisajes que acompañen la ambientación de tu partida.
  - 🖼️ **Fondos Dinámicos:** Las imágenes se generan en segundo plano sin detener tu partida. Verás cómo aparecen progresivamente en el fondo, en las tarjetas de personajes y en el Códice.
  - ⚡ **Velocidad a tu Medida:** Nueva sección en Configuración Visual. Elige entre "Rápida" (1 paso), "Media" (2 pasos) o "Alta" (4 pasos) para ajustar el tiempo de generación a la potencia de tu equipo.
  - 🛠️ **Optimización Técnica:** El modelo de IA para imágenes se carga en la **RAM (Memory)** y se procesa vía **CPU**, sin ocupar memoria de video (VRAM). Esto garantiza que no interfiera con el rendimiento de la IA principal del juego (LLM). Requiere unos 5GB de RAM adicionales, manteniéndose dentro de los requisitos mínimos oficiales de Steam.
  - 📤 **Comparte tus Aventuras:** Todas las imágenes generadas se guardan automáticamente. Las encontrarás en la carpeta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa y Cerebro IA:**
  - 🧠 **Fin de los Bucles:** Se ha implementado una nueva "Doctrina de Memoria" en la IA. Ahora distingue mejor entre "recuerdos" (lo que ya pasó) y el "presente" (lo que está pasando). Esto ayuda a reducir los casos donde la IA se repetía o quedaba atascada.
  - 📜 **Archivos Históricos:** El sistema presenta tus recuerdos a la IA como un "Archivo Histórico Cerrado", facilitando que use esa información como referencia para avanzar la historia.
  - ⚡ **Instrucciones Optimizadas:** Se ha mejorado la forma en que el juego solicita la narración en tu idioma, liberando capacidad del modelo para concentrarse en la creatividad.
  - 👁️ **Foco Narrativo:** Se ha reescrito la percepción de la IA. Ahora entiende mejor qué elementos son "fondo estático" y no debería repetirlos innecesariamente en cada párrafo.
  - 🔀 **Decisiones Más Claras:** La IA ahora ofrece vías de escape más definidas. Sus sugerencias (botones) se dividen entre investigar el entorno (Profundizar) o cambiar de rumbo (Divergir).
  - 🫵 **Tratamiento Directo:** Se ha ajustado la instrucción base para asegurar que la IA te trate de "Tú", mejorando la inmersión personal.
  
  **Creación de Personaje:**
  - 🖼️ **Retratos de Personaje:** Al generar un personaje con IA, el sistema intenta crear un retrato basado en su edad, profesión y descripción. Ten en cuenta que es una versión inicial y la fidelidad (especialmente en la edad) puede variar según el modelo utilizado. (sigo haciendo pruebas pero el inicio es bueno)
  - 🎲 **Generación Aleatoria Confiable:** Corregido un error donde el botón "Generar con IA" podía fallar en el primer intento, dejando los campos vacíos. Ahora el sistema de corrección inteligente se asegura de que la respuesta sea siempre válida.

****************************************************************************************************
13/02/2026 21:47 - Optimización de Configuración de IA y Refuerzo de i18n - Beta_v055
****************************************************************************************************
- What's New (ES-419):
  - ⚙️ **Control de Prioridad Local:** Ahora puedes ajustar manualmente la prioridad de tus tarjetas gráficas aunque el sistema esté en modo automático.
  - 🧠 **Información de Rotación de IA:** Agregué paneles informativos en la configuración de proveedores externos para explicar cómo funciona la rotación automática en caso de error o cuota excedida.
  - 🌍 **Soporte de GPU Ampliado:** El mensaje de información i18n ahora refleja correctamente el soporte para NVIDIA CUDA y Vulkan (AMD/Intel). ¡Traducciones actualizadas en todos los idiomas!
  - ⚙️ **Conectividad Mejorada:** Se repararon los conectores para Ollama y otros servidores compatibles con OpenAI.
  - 🧠 **IA Políglota y Robusta:** La detección de objetos obtenidos en la historia ahora funciona en 10 idiomas. Además, blindé el sistema para que nunca te quedes sin historia inicial, incluso si la IA tiene un traspié técnico.
  - 🔄 **Rotación Inteligente:** Arreglé el sistema de rotación para que no se rinda con tu IA local a la primera. Ahora el sistema le dará una oportunidad de corregirse antes de buscar ayuda externa.
  - 🧹 **Limpieza de Cimientos:** Eliminé reglas antiguas y confusas para que el "cerebro" de la IA sea más nítido y preciso al manejar tus objetos.

