# 📢 Mensaje del Desarrollador (Acceso Anticipado)

Bienvenido a RolemIAster. Antes de que te sumerjas en tu próxima gran aventura, quiero robarte un minuto para dejar un par de cosas claras (prometo ser breve, que los dados te esperan).

Este juego está en fase de **Acceso Anticipado (Early Access)**.
Soy un desarrollador solitario —sí, solo yo, mi teclado y litros de café—, lo que significa que hago todo lo que puedo, pero a veces no llego a tiempo a todo. Me disculpo de antemano si tardo en arreglar algún bug escurridizo, implementar esa función que tanto deseas, o responder de inmediato en Discord. Hago malabares, pero todavía no me han salido tentáculos extra.

## ⚠️ Aviso Importante sobre Hardware (Local vs Cloud)
Aquí hay dos formas de jugar, y tu experiencia depende de cuál elijas:

*   **Modo Local (Gratis, Privado):** Si quieres ejecutar la IA en tu propio PC, los requisitos de la tienda (Mínimo 12GB VRAM) son sagrados. Menos de eso y la IA se arrastrará o bloqueará tu equipo. Es pura matemática, no magia.
*   **Modo Cloud (API de Gemini, GPT, etc. solo si inicias con comando `--advanced`):** ¡Aquí cambia la película! Si configuras el juego para usar servicios en la nube (como Google Gemini o OpenAI), el trabajo pesado se hace en sus servidores, no en el tuyo. En este modo, el juego funciona fluido en prácticamente cualquier equipo, ya que tu tarjeta gráfica descansa.

## Gestión de Expectativas
Si has venido esperando una superproducción AAA sin fisuras, me temo que estás en el lugar equivocado (por el momento). El juego se encuentra en una etapa temprana, y sinceramente, solo los valientes que entienden y apoyan este tipo de proyectos experimentales tienen la paciencia para disfrutarlo ahora mismo.

## Garantía de Satisfacción
Si sientes que el juego está demasiado verde para ti o tu hardware sufre demasiado, nadie se enfadará si pides una devolución. Al contrario, estaré encantado de recibirte de vuelta en el futuro —y de que pagues 40 o 60 USD cuando el juego esté pulido y terminado 😉—. El precio actual es un regalo por confiar en mí en esta etapa.

Dicho esto, mi agradecimiento es infinito para los que decidís quedaros. Vuestros reportes y sugerencias son el motor real de este proyecto. Gracias a vosotros, el juego ha mejorado una brutalidad en pocas semanas.

**RolemIAster se está construyendo a medida para vosotros.**

*¡Gracias por la paciencia, el apoyo y que los críticos estén de vuestro lado!*


*********************************************************************************
# � ¡ACTUALIZAMOS A QWEN 3.5 + TURBO QUANT! NUEVO MOTOR, NUEVA TECNOLOGÍA, NUEVA ERA 🚀
*********************************************************************************

�🚧 ZONA DE OBRAS: LOBOTOMÍA COMPLETADA (Y FUNCIONA) 🧠🔧
¿En qué ando metido?
Estoy cambiando el motor del juego, y no es moco de pavo.
Hasta ahora, cada vez que juegas un turno, el sistema le lanzaba a la IA un "tocho" de reglas de 15.000 a 20.000 tokens. Básicamente, era como obligar al máster a leerse el manual entero antes de cada frase. 📚🥵
He implementado dos tecnologías que trabajan en equipo:

1. 🧠 **TurboQuant — La memoria comprimida**
   - Integré una tecnología de Google (presentada en ICLR 2026) que comprime la memoria de la IA a casi un tercio de su tamaño original.
   - Si tienes una RTX de las series 3000, 4000 o 5000, el juego la aprovechará automáticamente.
   - ⚠️ **NOTA IMPORTANTE SOBRE GPU AMD:** AUNQUE HAY INDICIOS DE FUNCIONAMIENTO DE TURBO QUANT EN TARJETAS AMD/INTEL (VULKAN), EN LA PRÁCTICA DA MUCHOS FALLOS Y POR TANTO POR AHORA NO SE IMPLEMENTARÁ. ESPERAMOS QUE LA COMUNIDAD HAGA LO PROPIO Y TENGAMOS PRONTO NOVEDADES.
   - **Resultado:** La IA recuerda más gastando menos VRAM. Es pura magia digital. ✨

2. 📖 **Contexto masivo (+200%)**
   - Reescribí el cálculo de memoria conversacional de forma quirúrgica: ahora el juego lee las especificaciones técnicas de cada modelo y calcula con precisión cuánto cabe en tu GPU.
   - El modelo de 9B pasa de recordar ~36.000 palabras a más de ~110.000 en una GPU con 16GB VRAM. 🚀
   - Además, subí el límite de respuesta de 4.096 a 8.192 tokens: narraciones más largas sin cortes a mitad de frase.

El resultado final: Una velocidad superior en la mayoría de los casos, partidas largas que no pierden el hilo, y una IA mucho más centrada (y sobria). 🎯

Nota de Realidad (Disclaimer 🧐):
Si hasta los gigantes de Silicon Valley (Gemini, ChatGPT...) a veces ven elefantes rosas, mi modelo local no va a ser perfecto el 100% de las veces. Pero ya no es el "tío borracho de la boda" — ahora es un Máster de Rol competente con memoria de elefante real. 🐘

¡Gracias por la paciencia mientras ajustaba las tuercas! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->