# ¡Bienvenido a RoleMIAster!

¡Prepárate para vivir aventuras sin límites donde tu imaginación es la protagonista! RoleMIAster es un juego de rol interactivo impulsado por inteligencia artificial que te permite crear y vivir tus propias historias.

## ⚠️ AVISO LEGAL Y RESPONSABILIDAD

**POR FAVOR, LEE ESTO ANTES DE EMPEZAR:**

1.  **IA Local Integrada:** RoleMIAster incluye un modelo de inteligencia artificial local que funciona sin conexión a internet. No requiere configuración adicional para jugar.
2.  **Proveedores Opcionales:** Si configuras proveedores de IA externos (cloud), los costes asociados son responsabilidad exclusiva del usuario.
3.  **Contenido Generado:** El contenido narrativo es generado dinámicamente por IA. El desarrollador no se hace responsable del contenido que pueda generar el modelo.
4.  **Early Access:** El juego está en desarrollo. Puedes encontrar errores. Tu feedback es esencial para mejorarlo.

---

## 🖥️ REQUISITOS DEL SISTEMA Y MODELOS DE IA

RoleMIAster funciona gracias a **Inteligencia Artificial** (IA). El juego incluye modelos de IA local que funcionan **sin internet** y **sin configuración adicional**. Esta sección explica todo lo que necesitas saber sobre hardware y modelos.

### ⚙️ Conceptos Básicos

**La VRAM de tu GPU es el factor más importante.** RoleMIAster necesita mínimo **12,000-16,000 tokens de contexto** para funcionar correctamente.

---

### 📊 CATÁLOGO DE MODELOS DISPONIBLES

Puedes gestionar y descargar modelos desde **Configuración → IA Local Integrada → Gestionar Modelos**.

#### 🏆 Familia Qwen 2.5 (Recomendada)

| Modelo | Tamaño | VRAM Mínima | Tier | Experiencia de Juego |
|--------|--------|-------------|------|----------------------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 🆗 Aceptable. Narrativa competente pero predecible. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **RECOMENDADO** - Modelo por defecto. Excelente narrativa. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🌟 Premium. Narrativa rica, diálogos naturales. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 Máxima calidad. Requiere RTX 4090 o superior. |

#### 🎭 Familia Mistral (Alternativa Creativa)

| Modelo | Tamaño | VRAM Mínima | Tier | Experiencia de Juego |
|--------|--------|-------------|------|----------------------|
| **Mistral-7B** | ~5.5GB | **12GB** | A | ✅ Alta creatividad. Estilo más "literario". |
| **Mistral-Nemo-12B** | ~8GB | **14GB** | A+ | 🌟 Excelente para diálogos complejos. |
| **Mixtral-8x7B** | ~26GB | **36GB** | S | 👑 Muy potente. Solo hardware de gama alta. |

---

### 🎮 ¿QUÉ MODELO ELEGIR?

| Tu GPU | VRAM | Modelo Recomendado | Calidad |
|--------|------|--------------------|---------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Aceptable (Bajo contexto) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Aceptable |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🆗 Aceptable |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Óptima |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Premium |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Máxima |

**Consejo**: Elige un modelo cuya VRAM mínima sea **al menos 2GB menor** que tu VRAM disponible.

---

### ⚠️ SI TU VRAM ES INSUFICIENTE

Si seleccionas un modelo demasiado grande:

1. **El modelo se vuelca a RAM** → Procesado por CPU (mucho más lento)
2. **Tiempos de respuesta degradados**:
   - Desbordamiento leve (1-2GB): 30-60 segundos
   - Desbordamiento moderado (3-5GB): 2-5 minutos
   - Desbordamiento severo (>5GB): 10-30+ minutos
3. **Juego injugable** si la mayoría del modelo está en RAM

#### 🛡️ Protocolo de Solución para VRAM Limitada

En caso de necesidad de modificar los parámetros de IA (o si experimentas inestabilidad), sigue estos pasos:

1.  **Ajuste Conservador**: Desciende el **% de VRAM al 85%**, reinicia y prueba.
2.  **Limpieza de Entorno**: Verifica que la VRAM de tu GPU no esté secuestrada por otros procesos (navegadores, editores de video, etc.). Reinicia el PC si es necesario.
3.  **Límite Crítico**: Si bajar hasta el **70%** no funciona, **no sigas bajando**.
    *   *Razón*: El juego necesita memoria para gestionar los prompts. Si asignas menos del 70%, aunque evites el desbordamiento, el modelo no tendrá espacio para "pensar" y fallará.
4.  **Último Recurso**: Si lo anterior falla, **baja a un modelo inferior** (ej. de 7B a 3B), restablece los parámetros de IA a "Automático" y reinicia.

---

### ⚙️ CONFIGURACIÓN DEL MODELO LOCAL

En **Configuración → IA Local Integrada**:

| Opción | Función | Recomendación |
|--------|---------|---------------|
| **GPU Layers** | Capas cargadas en GPU | -1 (todas) |
| **Contexto Máximo** | Cuánto recuerda la IA | 16384-32768 |
| **Temperatura** | Creatividad de respuestas | 0.7-0.8 |
| **RAG de Historial** | Recuerda eventos antiguos | Sí (partidas largas) |
| **Cachear Embeddings** | Acelera cargas de RAG | Sí |

---

### 🔧 SOLUCIÓN DE PROBLEMAS

| Problema | Solución |
|----------|----------|
| **IA muy lenta** | Verifica GPU Layers = -1, reduce Contexto Máximo, cierra otras apps |
| **Error de memoria** | Reduce Contexto Máximo, elige modelo más pequeño |
| **Respuestas sin sentido** | Reduce temperatura a 0.6-0.7, reinicia la app |

---

### 🌐 PROVEEDORES ALTERNATIVOS (Avanzado)

> **Nota**: La IA local es suficiente para jugar. Esta sección es solo para usuarios avanzados.

**Motores Locales de Terceros (sin internet):**
- **Ollama**: Ejecuta cualquier modelo local de tu elección
- **LM Studio**: Interfaz gráfica para modelos locales

**APIs Cloud (internet requerido, posibles costes):**
- OpenAI, Gemini, Groq, DeepSeek, etc.

Para configurar: **Configuración → IA → Añadir Nuevo Proveedor**

---

## ¿Cómo Empezar?

Al abrir el juego, te encontrarás con dos opciones principales:

*   **Comenzar una nueva aventura**: ¡La opción ideal para empezar de cero! Serás guiado a través de un proceso para crear tu personaje, elegir un mundo y definir la premisa inicial de tu historia.
*   **Cargar una aventura existente**: Si ya tienes una partida guardada, puedes continuarla desde donde la dejaste.

## La Interfaz de Juego

La pantalla principal se divide en tres partes:

*   **Panel Izquierdo (Ficha de Personaje)**: Aquí puedes ver los atributos, habilidades y estado de tu personaje en todo momento.
*   **Panel Central (Historia y Decisiones)**:
    *   **Ventana de Historia**: La parte superior muestra la narración de la aventura.
    *   **Controles**: En la parte inferior aparecerán las decisiones que puedes tomar o un campo de texto para escribir tus propias acciones.
*   **Panel Derecho (Equipamiento e Inventario)**: Gestiona el equipo que lleva tu personaje y los objetos que ha encontrado en su viaje.

---

## El Sistema de Juego: Reglas y Mecánicas

RoleMIAster utiliza un sistema de reglas para dar estructura a tus aventuras. ¡Conocerlo te ayudará a tomar mejores decisiones!

### 1. Atributos Principales

Tu personaje se define por 7 atributos que representan sus capacidades innatas. Durante la creación del personaje, estos se generan aleatoriamente, ¡como en los juegos de rol de lápiz y papel!

*   **Fuerza (FUE):** Potencia física y musculatura.
*   **Constitución (CON):** Salud y resistencia a enfermedades y veneno.
*   **Tamaño (TAM):** Altura y peso. Un personaje grande puede ser más fuerte, pero menos ágil.
*   **Destreza (DES):** Agilidad, velocidad, coordinación y tiempo de reacción.
*   **Inteligencia (INT):** Capacidad de aprendizaje, memoria y razonamiento.
*   **Poder (POD):** Fuerza de voluntad, suerte y afinidad con la magia o poderes psíquicos.
*   **Carisma (CAR):** Liderazgo, atractivo y capacidad de persuasión.

### 2. Características Derivadas

A partir de tus atributos, se calculan otras características vitales:

*   **Puntos de Vida (PV):** Tu salud total. Se calcula con `(Constitución + Tamaño) / 2`. Si llegan a cero, estás en serios problemas.
*   **Puntos de Magia (PM):** La energía que usas para lanzar hechizos. Es igual a tu atributo de `Poder`.
*   **Puntos de Acción (PA):** Determina tu rapidez y quién actúa primero en un combate. Se calcula con `(Inteligencia + Destreza) / 2`.

### 3. Habilidades

Las habilidades representan lo que tu personaje ha aprendido a hacer. Se miden en un porcentaje (%). Cuanto más alto, mejor.

*   **Valor Base**: Cada habilidad tiene un valor inicial que depende de dos de tus atributos. Por ejemplo, la habilidad de `Sigilo` se calcula con `Destreza + Inteligencia`. Esto significa que un personaje ágil e inteligente tendrá una aptitud natural para ser sigiloso.
*   **Mejora**: A medida que uses tus habilidades y completes desafíos, ganarás experiencia y podrás mejorarlas.

### 4. Resolución de Acciones (Tiradas de Dados)

Cuando intentas hacer algo cuyo resultado es incierto (como escalar un muro, mentir a un guardia o atacar a un enemigo), el Director de Juego (la IA) te pedirá una **tirada de dados**.

*   **¿Cómo funciona?**: El juego simula una tirada de un dado de 100 caras (d100).
*   **El Objetivo**: Para tener éxito, el resultado de la tirada debe ser **menor o igual** que tu valor en la habilidad correspondiente.
    *   *Ejemplo*: Si tu habilidad de `Trepar` es 45%, necesitas sacar 45 o menos en el dado para lograr escalar el muro.
*   **Niveles de Éxito**:
    *   **Éxito Normal**: Superas la tirada. Logras lo que te proponías.
    *   **Éxito Crítico**: Si sacas un número muy bajo (generalmente, menos de 1/5 de tu habilidad), ¡lo haces excepcionalmente bien!
    *   **Fracaso**: No superas la tirada. No consigues tu objetivo.
    *   **Pifia (Fracaso Crítico)**: Si sacas un 99 o 100, no solo fallas, sino que algo sale terriblemente mal.

¡No te preocupes por los cálculos! El juego te mostrará el resultado de la tirada y la IA narrará las consecuencias.

---

## Consejos para una Mejor Experiencia

*   **Sé Descriptivo**: Cuando escribas una acción personalizada, da detalles. En lugar de "ataco al orco", prueba con "intento esquivar su hacha y busco un punto débil en su armadura para clavar mi daga".
*   **Experimenta**: No tengas miedo de probar acciones inesperadas. ¡La IA está preparada para reaccionar a tu creatividad!
*   **Sumérgete en el Mundo**: Lee con atención las descripciones y actúa como lo haría tu personaje.

---

## Sistema de Combate

Cuando te enfrentes a enemigos, el juego entrará en **modo de combate táctico**:

### Orden de Turnos (Sistema de Ticks)
- El combate funciona por **ticks** (segmentos de tiempo)
- Tu velocidad de acción depende de tus **Puntos de Acción (PA)**
- Las armas más lentas consumen más ticks, pero suelen causar más daño

### Opciones de Combate
- **Atacar**: Usa tu arma desenfundada
- **Bloquear**: Adopta una postura defensiva (consume stamina)
- **Huir**: Intenta escapar del combate
- **Rendirse**: Te rindes ante tus enemigos
- **Lanzar Hechizo** (Fantasía) o **Usar Implante** (Cyberpunk)

### Reglas Importantes
- Solo las armas **desenfundadas** cuentan para el daño
- **Para desenfundar**: Haz **click en el slot del arma** en el panel de equipamiento
- Mover objetos durante el combate tiene penalizaciones
- Los objetos del **cinturón** pueden usarse más rápido

> [!IMPORTANT]
> **Preparación para el Combate**: 
> Desenfundar tu arma durante el combate consume tiempo (**Ticks**) y te deja vulnerable. ¡Siempre que sea posible, **desenfunda ANTES** de iniciar una pelea!

---

## Encantamientos (Mundo de Fantasía)

Los hechiceros pueden **encantar objetos** para darles propiedades mágicas:

### ¿Cómo Encantar?
1. Aprende hechizos de encantamiento
2. Selecciona el objeto a encantar desde tu inventario
3. Elige el hechizo en tu grimorio
4. ¡El objeto gana las propiedades del hechizo!

### Mantenimiento
- Los encantamientos **drenan Puntos de Magia** por turno
- Si te quedas sin maná en combate, los objetos se desencantarán automáticamente
- Puedes desencantar manualmente usando el menú contextual

### Magia Avanzada y Uso de Hechizos
*   **Lanzamiento Rápido (Drag & Drop)**:
    *   **Ataque**: Arrastra un hechizo de combate sobre un enemigo en la escena.
    *   **Auto-lanzamiento**: Arrastra un hechizo benéfico sobre tu propio retrato (panel izquierdo).
    *   **Encantar Objeto**: Arrastra un hechizo de encantamiento sobre un objeto en tu inventario.
*   **Menú Contextual**: Haz clic derecho en un hechizo para ver todas las opciones disponibles.

---

## Implantes Cibernéticos (Mundo Cyberpunk)

En el mundo Cyberpunk, puedes mejorar tu cuerpo con **implantes cibernéticos**:

### Instalación
- Visita un **Tecnocirujano**
- Compra el implante de su stock
- Paga el coste de instalación
- El implante se equipa automáticamente

### Coste de Humanidad
- Cada implante reduce tu **Humanidad**
- La humanidad refleja tu conexión con tu yo original
- Cuantos más implantes, menos humano eres

### Desinstalación
- Los implantes se pueden desinstalar pagando una tarifa
- Puedes venderlos de vuelta o guardarlos en el inventario
- La Humanidad se recupera al quitarte implantes

---

## Sistema de Servicios

En tu aventura encontrarás **PNJs de servicio** (vendedores, tecnocirujanos...):

### Comercio
- Tu habilidad de **Comercio** (basada en Carisma) afecta los precios
- Puedes vender objetos usando el menú contextual del inventario
- Los vendedores tienen stock limitado que se repone periódicamente

### Tipos de Servicios
- **Vendedores**: Venden armas, armaduras y consumibles
- **Tecnocirujanos** (Cyberpunk): Instalan/desinstalan implantes
- **Hechiceros** (Fantasía): Venden hechizos y componentes mágicos

---

## Gestión de Inventario

### Capacidad de Carga
- Tu personaje tiene una **capacidad de carga máxima** basada en Fuerza y Tamaño
- Llevar demasiado peso te penaliza
- Revisa la barra de carga en el panel de equipamiento

### Organización
- **Equipo**: Armas y armadura que llevas puestas
- **Cinturón**: Objetos de acceso rápido (útil en combate)
- **Mochila**: Almacenamiento general

### Drag & Drop
- Arrastra objetos entre paneles para moverlos
- Click derecho para acceder a opciones (equipar, vender, desencantar...)
- **Consumibles Rápidos**: Puedes usar pociones y comida arrastrándolos directamente sobre el retrato de tu personaje.

---

## Otros Ajustes de Configuración

En el menú **Configuración** también encontrarás:

*   **Idioma**: Cambiar idioma del juego (La IA traducirá todo el juego al idioma que elijas así como sus respuestas, narración y documentación)
*   **Apariencia**: Cambiar tema visual (tamaño de fuente y colores)
*   **Configuración de IA**: Configurar proveedor de IA (Modelo, API Key, Prioridad, etc)

---

## Aviso: Early Access

RoleMIAster está en **desarrollo activo**:

- Pueden aparecer bugs ocasionales
- Las características se añaden regularmente
- Tu feedback es muy valioso
- Consulta el **changelog** para ver novedades

---

¡Que comience la aventura!