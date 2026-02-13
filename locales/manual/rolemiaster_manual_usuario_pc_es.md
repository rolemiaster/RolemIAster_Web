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
*   RolemIAster necesita "recordar" de **12,000 a 16,000 palabras (tokens)** para no perder el hilo de la historia.
*   Si tu GPU se queda sin memoria, el juego irá más lento que un caracol con asma.

---

### 📊 CATÁLOGO DE MODELOS (Elige tu veneno)

Gestiona tus IAs en **Configuración → IA Local Integrada → Gestionar Modelos**.

#### 🏆 Familia Qwen 2.5 (La crème de la crème)

| Modelo | Tamaño | VRAM Mínima | Tier | Veredicto |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **El Becario.** Cumple, pero no le pidas que escriba Shakespeare. A veces se lía. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **EL ELEGIDO.** Equilibrado, listo y rápido. Es el modelo recomendado por defecto. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **El Catedrático.** Narrativa rica, profunda y diálogos muy naturales. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Nivel Dios.** Necesitas una nave espacial (RTX 3090/4090) para mover esto. |

---

### 🎮 GUÍA DE ELECCIÓN RÁPIDA

| Tu Gráfica | VRAM | Modelo Recomendado | Resultado |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Justito pero jugable (Contexto bajo) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Va bien |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Vuela |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ La experiencia ideal |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Lujazo |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Máxima calidad |

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
4.  **🔙 Retirada Táctica:** Si nada funciona, baja a un modelo más pequeño (pasa del 7B al 3B).

---

### ⚙️ CONFIGURACIÓN AVANZADA DEL MODELO

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

## 🎲 ¿CÓMO JUGAR?

Al abrir el juego, tienes dos caminos:

1.  **🆕 Nueva Aventura**: Crea tu leyenda desde cero. El juego te guiará para elegir raza, clase, mundo y premisa. (Si la vida te da limones... o un 3 en Fuerza, hazte Bardo).
2.  **💾 Cargar Partida**: Continúa justo donde lo dejaste antes de esa muerte humillante. (O para corregir ese "pequeño error de cálculo" con el dragón).

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
Se generan al azar, ¡como en el rol de mesa de toda la vida!

*   💪 **Fuerza (FUE):** Para pegar fuerte y levantar piedras.
*   ❤️ **Constitución (CON):** Para aguantar golpes, enfermedades y venenos.
*   🐘 **Tamaño (TAM):** Grande y pesado, o pequeño y escurridizo.
*   🏃 **Destreza (DES):** Agilidad, puntería y no tropezarte con tus propios pies.
*   🧠 **Inteligencia (INT):** Aprender, recordar y resolver puzles.
*   🔮 **Poder (POD):** Tu alma, tu suerte, fuerza de voluntad y magia.
*   😎 **Carisma (CAR):** Liderazgo, atractivo y capacidad de engañar a la gente.

### 2. Matemáticas Rápidas (Características Derivadas)
*   **Vida (PV):** `(CON + TAM) / 2`. Si llega a 0... bueno, ya sabes. F.
*   **Maná (PM):** Igual a tu POD. Sin maná, no hay trucos. (Un mago sin maná es solo un tipo con bata haciendo cosplay).
*   **Puntos de Acción (PA):** `(INT + DES) / 2`. Determina tu Iniciativa. Quién pega primero, pega dos veces.

### 3. Tus Habilidades
Empiezan con un valor base (ej: Sigilo = DES + INT) y mejoran usándolas. Es un porcentaje (%).

### 4. Resolución de Acciones (El Dado)
Cuando intentas hacer algo arriesgado (escalar, mentir, atacar...), la IA te pedirá una tirada.
El juego lanza un **d100** invisible. **(Recuerda: Los dados te odian. Es personal).**

*   **Tu Objetivo:** Sacar **MENOS O IGUAL** que tu habilidad.
    *   *Ejemplo:* Tienes 45% en Trepar.
    *   Sacas un 30: ✅ **Éxito**. Subes como un mono.
    *   Sacas un 80: ❌ **Fallo**. Te das un costalazo.
    *   Sacas un 01-05: ✨ **¡CRÍTICO!** Haces un parkour épico con voltereta.
    *   Sacas un 99-100: 💀 **¡PIFIA!** Se te caen los pantalones a mitad de camino y te caes de boca.

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
¿No te gustan los botones? ¡Escribe lo que quieras hacer!
*   **Ejemplos válidos:**
    *   *"Lanzar bola de fuego al goblin"* → La IA busca en tu grimorio y lanza el hechizo.
    *   *"Desenfundar mi espada"* → Se desenfunda automáticamente.
    *   *"Usar poción de curación sobre mí"* → La poción se consume y te cura.
    *   *"Atacar al guardia con mi hacha"* → Ataque dirigido.
*   **Si la IA no entiende:** Te pedirá que reformules. ¡Tu turno NO se pierde!
*   **⚠️ Limitación:** Mover objetos entre slots (equipar desde mochila, cargar munición) se hace con **Drag & Drop** en la interfaz, no por texto.

### ⚠️ REGLA DE ORO DE SUPERVIVENCIA
**¡DESENFUNDA ANTES DE PELEAR!**
Sacar el arma en medio del combate consume tiempo (Ticks). Si te pillan con la espada en la vaina, te van a dar hasta en el carnet de identidad mientras intentas sacarla torpemente. O PEOR AÚN!, SI VAS CON TUS ARMAS EN LA MOCHILA EN LUGAR DE EN SU SLOT DE EQUIPAMIENTO (Escuse un segundo, tengo que sacar el mandoble de la mochila, sé que lo tenía por aquí... en alguna parte...) 🤦‍♂️
👉 Haz **Click en la etiqueta del arma equipada** (panel derecho) para desenfundarla. Se iluminará en verde.

Intentar mover armas en combate consume tiempo (Ticks) y puede resultar en un ataque de sorpresa, además es muy probable que pierdas el turno, que falles por los nervios del hacha que se te aproxima al entrecejo  o que se te caiga al suelo. (Quizá no fue buena idea crearte un personaje con TDAH) 

---

## ✨ MAGIA Y CIBERNÉTICA

Dependiendo de si tu mundo es de "Fantasía medieval" o "Cyberpunk":

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

## 🛒 TIENDAS Y SERVICIOS

Habla con NPCs para comerciar.
*   **Regateo:** Tu habilidad de **Comercio** (basada en Carisma) decide los precios. Si eres feo o antipático, te timarán.
*   **Vender:** Haz **Click Derecho** en un objeto de tu inventario para venderlo al tendero.

---

## 🎒 GESTIÓN DE INVENTARIO (Tetris)

*   **Peso:** Tienes un límite de carga (Fuerza + Tamaño). Si llevas demasiada chatarra, irás lento y penalizado (Diógenes no es tu amigo).
*   **Paneles:**
    *   **Equipo:** Lo que llevas puesto.
    *   **Cinturón:** Acceso rápido en combate (gasta menos tiempo usar pociones de aquí).
    *   **Mochila:** El fondo del saco.
*   **Uso Rápido:** Arrastra una poción o comida directamente sobre **tu cara** (el retrato) para consumirla al instante.

---

## 🛠️ AJUSTES FINALES

En el menú de **Configuración** puedes tocarlo todo:
*   **🌍 Idioma:** La IA te traducirá todo el juego y las respuestas al vuelo.
*   **👁️ Apariencia:** Tamaño de letra y colores, para no quedarte ciego.
*   **🧠 Ajustes IA:** Cambia de modelo, temperatura, etc.

---

## 🚧 Aviso: Early Access

RolemIAster está en **desarrollo activo**, cocinándose a fuego lento.
*   Puedes encontrar bugs (o "características inesperadas").
*   Añado cosas nuevas cada semana.
*   ¡Tu feedback vale oro! Dime qué te gusta y qué te gusta mucho.

¡Ahora ve, tira iniciativa y crea tu leyenda!