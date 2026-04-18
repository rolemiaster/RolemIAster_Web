****************************************************************************************************
18/04/2026 04:06 - Integração TurboQuant — Compressão Extrema de KV Cache com - EXPERIMENTAL_v061
****************************************************************************************************
- What's New (PT):
  - **🗜️ Novo motor de compressão de memória (TurboQuant)**
    - 🧠 **IA lembra mais gastando menos:** Integrei uma tecnologia de compressão avançada (TurboQuant, de um artigo do Google apresentado no ICLR 2026) que permite à IA armazenar sua "memória de trabalho" ocupando quase um terço do espaço que ocupava antes. Na prática: mais espaço para lembrar seu histórico, suas decisões e o contexto da partida sem que a placa de vídeo reclame.
    - ⚡ **Compatível com sua GPU:** Funciona em placas NVIDIA RTX das séries 3000, 4000 e 5000. Se você tem uma dessas, o jogo a aproveitará automaticamente. Caso contrário, tudo continua funcionando como antes com a compressão padrão (que também não era ruim).
    - 🔧 **Trabalho de encanamento:** Esta atualização exigiu recompilar o motor de IA do zero com patches específicos para Windows. Não é algo que se note diretamente, mas é a base sobre a qual as melhorias de contexto das próximas versões serão construídas. (Sim, passei um bom tempo discutindo com o compilador da NVIDIA. Não, não quero falar sobre isso.)
  - **🧠 Otimização massiva de contexto (+200%)**
    - 📖 **IA lê (e lembra) o triplo:** Reescrevi completamente o cálculo de quanta "memória de conversa" a IA pode usar. Antes, uma estimativa conservadora deixava muito espaço inexplorado. Agora, o jogo lê diretamente as especificações técnicas de cada modelo e calcula com precisão quanto contexto cabe na sua GPU. Resultado: o modelo de 9B passa de lembrar ~36.000 palavras para mais de ~110.000 em uma GPU com 16GB de VRAM. Suas partidas longas não perdem o fio da meada tão facilmente e os travamentos para quem tem pouca VRAM devem ser resolvidos.
    - 📝 **Respostas mais longas:** Aumentei o limite de comprimento de resposta da IA de 4.096 para 8.192 tokens. Isso significa descrições mais detalhadas, diálogos mais elaborados e narrativas que não são cortadas no meio da frase quando a coisa fica interessante.
    - 🔄 **Funciona para todos os modelos:** A melhoria é aplicada automaticamente a qualquer modelo compatível (2B, 4B, 9B...). Se você usa um modelo mais antigo ou de terceiros, tudo continua funcionando exatamente igual antes — a otimização só é ativada quando detecta que o modelo a suporta.

