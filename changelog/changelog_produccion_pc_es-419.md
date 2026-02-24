****************************************************************************************************
24/02/2026 12:32 - Generación de imágenes por IA, mejoras narrativas y control - Beta_v058
****************************************************************************************************
- What's New (ES-419):
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

