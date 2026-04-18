# 🐉 ¡Bienvenido a RolemIAster!

¡Agarra tus dados (o tu ratón) y prepárate para vivir aventuras donde el único límite es lo retorcida que sea tu imaginación! **RolemIAster** es un juego de rol infinito impulsado por Inteligencia Artificial que te permite ser el héroe (o el villano) de tus propias historias.

---

## ⚠️ AVISO LEGAL (La parte aburrida pero necesaria)

**LÉEME O SUFRIRÁS LA IRA DE LOS DADOS:**

1.  **🤖 IA Local Integrada:** RolemIAster trae su propio cerebro digital. Funciona **sin internet** y sin que tengas que tocar nada raro. ¡Instalar y jugar!
2.  **☁️ Nube Opcional:** Si prefieres gastar los dineros en IAs externas (OpenAI, Gemini...), allá tú con tu tarjeta de crédito. Los costes son cosa tuya.
3.  **🎲 Caos Generativo:** La IA inventa la historia sobre la marcha. Si el narrador se vuelve loco y dice que llueven vacas, no nos mires a nosotros. El desarrollador no se hace responsable de las locuras que genere el modelo.
4.  **🏗️ Early Access:** Esto está en obras. Si encuentras un bug, no es un fallo, ¡es una "feature" sorpresa! (Mándanos feedback, porfa, que nos ayuda mucho).

---

## 🖥️ REQUISITOS DEL SISTEMA Y CEREBROS DIGITALES (IA)

RolemIAster funciona con **Inteligencia Artificial Local**. Eso significa que tu PC hará el trabajo duro de pensar. No necesitas internet, pero sí una tarjeta gráfica que no sea de la época de los dinosaurios. (Nota: Si hace frío en tu habitación, este juego funciona como calefacción gratis).

### ⚙️ Conceptos para no iniciados

La **VRAM (Memoria de Vídeo)** es la gasolina de la IA.
*   Gracias a **TurboQuant**, RolemIAster puede recordar ahora **más de 100,000 palabras (tokens)** —casi el triple que antes— sin colapsar tu gráfica.
*   Si tu GPU se queda sin memoria, el juego irá más lento que un caracol con asma.

---

### 📊 CATÁLOGO DE MODELOS (Elige tu veneno)

Gestiona tus IAs en **Configuración → IA Local Integrada → Gestionar Modelos**.

#### 🏆 Familia Qwen 3.5 — Entrenados específicamente para RolemIAster

Estos modelos han sido entrenados con **Fine-Tuning Supervisado (SFT)** para dominar las reglas narrativas del juego. No son modelos genéricos: conocen el contrato JSON de RolemIAster, los NPCs, el inventario y el combate de memoria.

| Modelo | Tamaño | VRAM Mínima | Tier | Veredicto |
|--------|--------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **El Velocista.** El más rápido de todos. Ideal para GPUs básicas o para jugar sin GPU dedicada. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **EL EQUILIBRADO.** Velocidad y calidad óptimas. Modelo estándar recomendado para la mayoría de jugadores. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **El Narrador.** Narrativa rica y coherencia superior. Para quienes tienen una RTX 3070 o mejor. |

---

### 🎮 GUÍA DE ELECCIÓN RÁPIDA

| Tu Gráfica | VRAM | Modelo Recomendado | Resultado |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Sin GPU | 4GB | **Qwen3.5-2B** | 🆗 Justito pero jugable, muy justito... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Buena experiencia |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Rápido y preciso |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 La experiencia ideal |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Máxima calidad, respuestas ultra-rápidas |

**💡 Pro Tip:** Deja siempre unos **2GB de VRAM libres** para el sistema operativo, o Windows empezará a llorar y a cerrar cosas.

---

### 🚨 ¡SOCORRO! ¡MI PC VA LENTO! (Problemas de VRAM)

Si el juego tarda más en responder que tu crush en WhatsApp, seguramente te has quedado sin VRAM.

**Síntomas de que te has pasado de listo:**
1.  **El modelo se vuelca a la RAM:** El PC usa la memoria normal en vez de la gráfica. Resultado: LENTITUD EXTREMA.
2.  **Desbordamiento leve (1-2GB):** Tardará 30-60 segundos por respuesta.
3.  **Desbordamiento moderado (3-5GB):** 2-5 minutos. Puedes irte a por un café.
4.  **Desbordamiento severo:** 10-30 minutos. Injugable.

#### 🛡️ Protocolo de Emergencia
Si la cosa va mal, sigue estos pasos en orden:

1.  **📉 Baja el % de VRAM:** Ve a Configuración y bájalo al **85%**. Reinicia y prueba.
2.  **🧹 Limpieza:** Cierra ese navegador con 40 pestañas abiertas. Se están comiendo tu memoria.
3.  **🛑 El Límite del 70%:** Nunca bajes del **70%** de VRAM asignada.
    *   *¿Por qué?* Porque la IA necesita espacio para "pensar" (la caché KV). Si le das menos del 70%, se quedará en blanco y dará error.
4.  **🔙 Retirada Táctica:** Si nada funciona, baja a un modelo más pequeño (pasa del 9B al 4B, o del 4B al 2B).

---

### ⚙️ CONFIGURACIÓN AVANZADA DEL MODELO ("Frikeo Máximo")

> **MODO EXPERTO:** Si eres un pro y quieres acceder a la configuración de modelos avanzados (añadir tus propios modelos GGUF descargados desde HuggingFace, tocar capas, etc.), debes iniciar el juego con el comando: `--advanced`.

Para los que les gusta tocar botones en **Configuración → IA Local Integrada**:

| Opción | Función | Recomendación |
|--------|---------|---------------|
| **GPU Layers** | Cuánto del modelo se carga en la gráfica | **-1** (Significa "TODO". No lo toques salvo que sepas qué haces) |
| **Contexto Máximo** | La "memoria a corto plazo" de la IA | **16384 - 32768** (Menos de esto y la IA tendrá amnesia) |
| **Temperatura** | Creatividad vs Locura | **0.7 - 0.8** (Más alto = más loca; Más bajo = más robótica) |
| **RAG de Historial** | Recordar cosas de hace mucho tiempo | **Sí** (Imprescindible para campañas largas) |
| **Cachear Embeddings** | Acelera la búsqueda de recuerdos | **Sí** (Hace que vaya más rápido) |

---

### 🔧 SOLUCIÓN DE PROBLEMAS (Troubleshooting)

| Pifia | Arreglo |
|-------|---------|
| **IA Lenta / Lag** | Verifica que `GPU Layers` sea -1. Cierra Chrome. Baja el `Contexto Máximo`. |
| **Error de Memoria (OOM)** | Reduce el `Contexto Máximo` o elige un modelo más pequeño (3B). |
| **La IA delira / Alucina** | Baja la `Temperatura` a 0.6. Si sigue loca, reinicia la aplicación. |

---

### 🌐 PROVEEDORES ALTERNATIVOS (Solo Expertos)

> **Nota:** La IA local que trae el juego sobra y basta. Esto es solo para usuarios avanzados o valientes.

*   **Motores Locales Externos:**
    *   **Ollama / LM Studio:** Si ya tienes tus propios modelos frikis, puedes usarlos.
*   **APIs en la Nube (De pago):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requiere internet y soltar dinero.
    *   Configúralo en: **Configuración → IA → Añadir Nuevo Proveedor**.

---

### 🌍 ¿CÓMO JUGAR? (El Multiverso y Tú)

Al abrir el juego, tienes dos caminos:

1.  **🆕 Nueva Aventura**: Crea tu leyenda desde cero. El juego te pedirá **Nombre, Oficio (Profesión), Descripción Física, Descripción Psicológica y el Trasfondo/Pretexto** de tu historia. Además, elegirás el **Nivel de Dificultad** y el **Tono de Humor** que guiarán la campaña.
2.  **💾 Continuar Partida**: RolemIAster **guarda en tiempo real**. Aquí no hay "cargar antes de morir" ni vuelta atrás. Cada decisión, cada pifia y cada herida queda grabada a fuego en la historia. Es un **DESAFÍO**: lo que hagas, hecho queda. Vive con las consecuencias... o muere con ellas.

RolemIAster no es una partida aislada; es un **Multiverso Persistente**.
*   **Mundos Infinitos:** Crea tus propios universos (**Fantasía Medieval** o **Cyberpunk**) con su propio Lore.
*   **Personajes Infinitos:** Dentro de cada mundo, puedes tener todos los héroes que quieras.
*   **Línea Temporal Compartida:** ¡Ojo! Lo que hace un personaje afecta al mundo de los demás. La IA es consciente de tus otros héroes y los reconocerá como habitantes del mundo.
*   **IA con "Sentidos" (Súper RAG):** El sistema RAG (Retrieval-Augmented Generation) actúa como el "chivato" de la IA, dándole recuerdos sobre el mundo, quién te acompaña, dónde estás y qué acaba de pasar para que la historia sea 100% coherente.

### La Interfaz (Tu cabina de mando)

*   **Panel Izquierdo (TÚ):** Tu Ficha de Personaje. Vida, maná, habilidades y lo guapo que eres (Carisma).
*   **Panel Central (LA HISTORIA):**
    *   **Arriba:** Donde el narrador cuenta lo que pasa.
    *   **Abajo:** Tus botones de decisión y la caja de texto para escribir lo que quieras hacer.
*   **Panel Derecho (TUS COSAS):** Inventario y equipo. El paraíso del Diógenes digital.

---

## 📜 REGLAS DEL JUEGO (Sí, hay reglas)

RolemIAster usa un sistema d100 (dado de cien caras) clásico y robusto.

### 1. Tus Atributos (Lo que te define)
La IA genera tus atributos basándose en el contexto, profesión y descripción que hayas introducido. Una vez generados, tienes **10 PUNTOS EXTRA** para repartir a tu gusto.
*   **Costes Escalonados:** Subir un atributo hasta 14 cuesta 1 punto. De 15 a 16 cuesta 2 puntos. ¡A partir de 17 cuesta 3 puntos! Piensa bien dónde pones el músculo.

*   💪 **Fuerza (FUE):** Tu potencia física pura. Influye en el daño cuerpo a cuerpo y tu capacidad de carga.
*   ❤️ **Constitución (CON):** Tu resistencia. Para aguantar golpes, enfermedades y venenos.
*   🐘 **Tamaño (TAM):** Tu envergadura. Grande y pesado, o pequeño y escurridizo.
*   🏃 **Destreza (DES):** Agilidad, puntería y no tropezarte con tus propios pies.
*   🧠 **Inteligencia (INT):** Aprender, recordar y resolver puzles.
*   🔮 **Poder (POD):** Tu alma, tu suerte, fuerza de voluntad y tu reserva mágica.
*   😎 **Carisma (CAR):** Liderazgo, atractivo y capacidad de engañar (o seducir) a la gente.

### 2. Matemáticas Rápidas (Características Derivadas)
El motor calcula estas cifras automáticamente basándose en tus atributos:

*   🩸 **Vida (PV):** `CON * 10`. Si llega a 0... bueno, ya sabes. F.
*   ✨ **Maná (PM):** `(POD * 10) + INT`. El combustible para tus trucos de magia. Sin maná, no hay trucos. (Un mago sin maná es solo un tipo con bata haciendo cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Tu energía para combatir y moverte sin morir en el intento.
*   🧠 **Humanidad (HUM):** `(CON+POD) * 5`. (Solo en Cyberpunk: Mide cuánto te queda de humano antes de que los cables te vuelvan loco).
*   ⚔️ **Puntos de Acción (PA):** `(INT + DES) / 2`. Determina tu Iniciativa. Quién pega primero, pega dos veces.

### 3. Tus Habilidades
Empiezan con un valor base (ej: Sigilo = DES + INT) y mejoran usándolas. Es un porcentaje (%).

### 4. Resolución de Acciones (El Dado)
Cuando intentas hacer algo arriesgado (escalar, mentir, atacar...), la IA te pedirá una tirada. El juego lanza un **d100** invisible. **(Recuerda: Los dados te odian. Es personal).**

*   **Tu Objetivo:** Sacar un número **MENOR O IGUAL** a tu nivel de habilidad.
    *   *Ejemplo:* Tienes 45% en Trepar.
    *   Sacas un 30: ✅ **Éxito**. Subes como un mono.
    *   Sacas un 80: ❌ **Fallo**. Te das un costalazo.
    *   **Crítico:** Sacar menos o igual a **1/5 de tu habilidad** (o un 01). ¡Épico! Haces un parkour extraordinario con voltereta.
    *   **Pifia:** Un **99 o 100**. Los dados han decidido que hoy no es tu día. Se te caen los pantalones a mitad de camino y te caes de boca.

---

## 💡 CONSEJOS PARA NO MORIR (RÁPIDO)

*   **✍️ Sé Descriptivo:** No escribas solo "ataco". Escribe: *"Intento esquivar su hacha rodando por el suelo y le clavo mi daga en el tobillo"*. La IA te premiará.
*   **🧪 Experimenta:** No estás limitado a los botones. ¡Escribe locuras! La IA improvisará.
*   **🎭 Rolea:** Métete en el papel. Lee las descripciones y actúa como lo haría tu personaje, no como lo harías tú en pijama.

---

## ⚔️ EL COMBATE (¡A las armas!)

Cuando las palabras fallan, llega la hora de las tortas. El combate es **táctico** y funciona por **Ticks** (tiempo).

### 🕹️ Cómo funciona:
*   **Ticks:** Cada acción cuesta tiempo. Las armas pesadas son lentas (gastan muchos ticks). Las dagas son rápidas.
*   **Tu Velocidad:** Depende de tus Puntos de Acción (PA).

### Acciones Básicas:
*   **🗡️ Atacar:** Dale con lo que tengas desenfundado.
*   **🛡️ Bloquear:** Te pones a la defensiva. Reduce daño pero gasta Stamina.
*   **🏃 Huir:** De cobardes (o de sabios que quieren vivir).
*   **🏳️ Rendirse:** Si ves que no ganas, puedes suplicar piedad.
*   **✨ Magia / Cyberware:** Fuego, rayos láser, hackeos...

### 💬 Acciones por Texto Libre (¡NUEVO!)
¿No te gustan los botones? ¡Escribe lo que quieras hacer como si hablaras con un Máster de carne y hueso!
*   **Ejemplos:** *"Lanzar bola de fuego al goblin"*, *"Desenfundar mi espada rúnica"*, *"Usar poción sobre mí"*.
*   **Director de Escena:** El combate ahora cobra vida. La IA genera eventos ambientales y reacciones que enriquecen la narrativa: vigas que caen, enemigos que retroceden, antorchas que caen. ¡El campo de batalla ya no es estático!
*   **Si la IA no entiende:** Te pedirá que reformules. ¡Tu turno NO se pierde!
*   **⚠️ Limitación:** Mover objetos entre slots (equipar desde mochila, cargar munición) se hace con **Drag & Drop** en la interfaz, no por texto.

### ⚠️ REGLA DE ORO DE SUPERVIVENCIA
**¡DESENFUNDA ANTES DE PELEAR!**
Sacar el arma en medio del combate consume tiempo (Ticks). Si te pillan con la espada en la vaina, te van a dar hasta en el carnet de identidad mientras intentas sacarla torpemente. O PEOR AÚN!, SI VAS CON TUS ARMAS EN LA MOCHILA EN LUGAR DE EN SU SLOT DE EQUIPAMIENTO (Escuse un segundo, tengo que sacar el mandoble de la mochila, sé que lo tenía por aquí... en alguna parte...) 🤦‍♂️
👉 Haz **Click en la etiqueta del arma equipada** (panel derecho) para desenfundarla. Se iluminará en verde.

Intentar mover armas en combate consume tiempo (Ticks) y puede resultar en un ataque de sorpresa, además es muy probable que pierdas el turno, que falles por los nervios del hacha que se te aproxima al entrecejo o que se te caiga al suelo. (Quizá no fue buena idea crearte un personaje con TDAH)

---

## ✨ MAGIA Y CIBERNÉTICA

Dependiendo de si tu mundo es de "Fantasía Medieval" o "Cyberpunk":

### 🧙‍♂️ Fantasía: Encantamientos
¿Eres hechicero? Puedes encantar tu equipo.
1.  **Aprende:** Necesitas el hechizo en tu grimorio.
2.  **Lanza (Drag & Drop):** Arrastra el hechizo desde tu lista sobre el objeto en tu inventario.
3.  **Coste:** Mantener un encantamiento activo **gasta Maná por turno**.
4.  **Aviso:** Si te quedas seco de maná en mitad del combate, la espada de fuego vuelve a ser un trozo de hierro oxidado.

### 🦾 Cyberpunk: Implantes
¿Quieres ojos con zoom o brazos de gorila?
1.  Busca un **Tecnocirujano** (NPC de servicio).
2.  Paga los créditos (nada es gratis en el futuro).
3.  **Coste de Humanidad:** Cada implante te quita un trozo de alma (**Humanidad**).
    *   Si te pones demasiados, te convertirás en una **Cyberpsicosis** (una tostadora con patas asesina) y perderás el control de tu personaje.

---

## 🛒 TIENDAS Y SERVICIOS (SIS)

Habla con NPCs para comerciar.
*   **IA Sugiere, Tú Mandas:** Cuando hables con un mercader o sanador, la IA te sugerirá sus servicios (reparar, vender, sanar), pero aparecerá un botón de **"Ver Servicios"** para que tú decidas cuándo entrar en el modo transaccional.
*   **Regateo:** Tu habilidad de **Comercio** (basada en Carisma) decide los precios. Si eres feo o antipático, te timarán.
*   **Vender:** Haz **Click Derecho** en un objeto de tu inventario para venderlo al tendero o arrástralo sobre él.

---

## 🎒 GESTIÓN DE INVENTARIO (Tetris)

*   **Peso:** Tienes un límite de carga (Fuerza + Tamaño). Si llevas demasiada chatarra, irás lento y penalizado (Diógenes no es tu amigo).
*   **Paneles:**
    *   **Equipo:** Lo que llevas puesto.
    *   **Cinturón:** Acceso rápido en combate (gasta menos tiempo usar pociones de aquí).
    *   **Mochila:** El fondo del saco.
*   **Uso Fluido:** Arrastra una poción o comida directamente sobre **tu cara** (el retrato) para consumirla al instante. También puedes usar el menú contextual (clic derecho -> Usar).

---

## 🛠️ AJUSTES FINALES

En el menú de **Configuración** puedes tocarlo todo:
*   **🌍 Idioma:** La IA te traducirá todo el juego y las respuestas al vuelo. Modo políglota activado.
*   **👁️ Apariencia:** Tamaño de letra y colores, para no quedarte ciego. Bordes neón y sombras suavizadas para una inmersión total.
*   **🧠 Ajustes IA:** Cambia de modelo, temperatura, etc. (Recuerda lo que hemos visto al principio del manual sobre el flag `--advanced` si eres de los que quieren tocarlo todo).

---

## 🎭 DIFICULTAD Y HUMOR (Personaliza tu sufrimiento)

Antes de empezar, recuerda que la IA no solo narra, sino que **ajusta el mundo** según tus preferencias. Estos parámetros se eligen al crear el mundo y son permanentes para dicho mundo:

*   **🎮 Dificultad (Gestionada por IA):** No es un simple multiplicador de daño. El juego le dice a la IA: "Oye, la dificultad es esta, actúa en consecuencia".
    *   **Fácil:** Nunca morirás (o será casi imposible), las situaciones son más sencillas, los precios son más baratos y los enemigos son más torpes. La IA razonará cada escena para que tu camino sea de rosas.
    *   **Normal:** El equilibrio estándar.
    *   **Desafío:** La IA será implacable, los precios prohibitivos y cualquier error puede ser el último.

*   **🃏 Tono de Humor:** Define cómo te habla la IA y qué tipo de eventos ocurren. Aunque cada modelo tiene su forma de interpretar el concepto "humor", la IA intentará adaptarse a lo que elijas... o no:
    *   **Serio:** Una narrativa épica, oscura y formal.
    *   **Sarcástico:** La IA se reirá de tus fallos, te lanzará pullas constantes y usará un tono irónico.
    *   **Delirante:** Prepárate para lo absurdo. Vacas volantes, situaciones surrealistas y caos total gestionado por la lógica más retorcida de la IA.

---

## 🚧 Aviso: Early Access

RolemIAster está en **desarrollo activo**, cocinándose a fuego lento.
*   Puedes encontrar bugs (o "características inesperadas").
*   Añado cosas nuevas cada semana.
*   ¡Tu feedback vale oro! Dime qué te gusta y qué te gusta mucho. (Si no te gusta algo, dímelo también, pero con cariño).

¡Ahora ve, tira iniciativa y crea tu leyenda!

<!-- source_hash: 4b8ac77b -->