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

