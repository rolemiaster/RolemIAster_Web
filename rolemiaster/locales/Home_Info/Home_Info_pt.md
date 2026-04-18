# 📢 Mensagem do Desenvolvedor (Acesso Antecipado)

Bem-vindo ao RolemIAster. Antes de mergulhar na sua próxima grande aventura, quero roubar um minuto do seu tempo para deixar algumas coisas claras (prometo ser breve, que os dados estão à sua espera).

Este jogo está em fase de **Acesso Antecipado (Early Access)**.
Sou um desenvolvedor solo — sim, só eu, meu teclado e litros de café — o que significa que faço tudo o que posso, mas às vezes não consigo fazer tudo a tempo. Peço desculpa antecipadamente se demorar a corrigir algum bug esquivo, implementar aquela funcionalidade que você tanto deseja, ou responder imediatamente no Discord. Faço malabarismos, mas ainda não ganhei tentáculos extras.

## ⚠️ Aviso Importante sobre Hardware (Local vs Cloud)
Existem duas formas de jogar, e a sua experiência depende de qual escolher:

*   **Modo Local (Grátis, Privado):** Se quiser executar a IA no seu próprio PC, os requisitos da loja (Mínimo 12GB VRAM) são sagrados. Menos que isso e a IA vai arrastar-se ou bloquear o seu equipamento. É pura matemática, não magia.
*   **Modo Cloud (API do Gemini, GPT, etc. apenas se iniciar com o comando `--advanced`):** Aqui a história muda! Se configurar o jogo para usar serviços na nuvem (como Google Gemini ou OpenAI), o trabalho pesado é feito nos servidores deles, não no seu. Neste modo, o jogo funciona fluentemente em praticamente qualquer equipamento, já que a sua placa gráfica descansa.

## Gestão de Expectativas
Se veio à espera de uma superprodução AAA sem falhas, temo que esteja no lugar errado (por enquanto). O jogo encontra-se numa fase inicial e, sinceramente, apenas os corajosos que entendem e apoiam este tipo de projetos experimentais têm a paciência para o desfrutar agora.

## Garantia de Satisfação
Se sentir que o jogo está demasiado "verde" para si ou que o seu hardware sofre demasiado, ninguém se vai chatear se pedir um reembolso. Pelo contrário, terei todo o gosto em recebê-lo de volta no futuro — e que pague 40 ou 60 USD quando o jogo estiver polido e finalizado 😉. O preço atual é uma oferta por confiar em mim nesta fase.

Dito isto, o meu agradecimento é infinito para aqueles que decidem ficar. Os vossos relatórios e sugestões são o motor real deste projeto. Graças a vocês, o jogo melhorou brutalmente em poucas semanas.

**RolemIAster está a ser construído à medida para vocês.**

*Obrigado pela paciência, pelo apoio e que os críticos estejam do vosso lado!*


*********************************************************************************
#  ATUALIZAMOS PARA QWEN 3.5 + TURBO QUANT! NOVO MOTOR, NOVA TECNOLOGIA, NOVA ERA 🚀
*********************************************************************************

🚧 ZONA EM CONSTRUÇÃO: LOBOTOMIA CONCLUÍDA (E FUNCIONA) 🧠🔧
No que ando metido?
Estou a mudar o motor do jogo, e não é brincadeira.
Até agora, cada vez que jogavas um turno, o sistema enviava para a IA um "tijolo" de regras com 15.000 a 20.000 tokens. Basicamente, era como obrigar o mestre a ler todo o manual antes de cada frase. 📚🥵
Implementei duas tecnologias que trabalham em conjunto:

1. 🧠 **TurboQuant — A memória comprimida**
   - Integrei uma tecnologia do Google (apresentada na ICLR 2026) que comprime a memória da IA para quase um terço do seu tamanho original.
   - Se tiveres uma RTX das séries 3000, 4000 ou 5000, o jogo vai aproveitá-la automaticamente.
   - ⚠️ **NOTA IMPORTANTE SOBRE GPU AMD:** EMBORA HAJA INDÍCIOS DE FUNCIONAMENTO DO TURBO QUANT EM PLACAS AMD/INTEL (VULKAN), NA PRÁTICA DÁ MUITOS FALHAS E, PORTANTO, POR AGORA NÃO SERÁ IMPLEMENTADO. ESPERAMOS QUE A COMUNIDADE FAÇA O SEU TRABALHO E TENHAMOS NOVIDADES EM BREVE.
   - **Resultado:** A IA lembra-se de mais, gastando menos VRAM. É pura magia digital. ✨

2. 📖 **Contexto massivo (+200%)**
   - Reescrevi o cálculo de memória conversacional de forma cirúrgica: agora o jogo lê as especificações técnicas de cada modelo e calcula com precisão quanto cabe na tua GPU.
   - O modelo de 9B passa de recordar ~36.000 palavras para mais de ~110.000 numa GPU com 16GB VRAM. 🚀
   - Além disso, aumentei o limite de resposta de 4.096 para 8.192 tokens: narrações mais longas sem cortes a meio da frase.

O resultado final: Uma velocidade superior na maioria dos casos, partidas longas que não perdem o fio à meada, e uma IA muito mais centrada (e sóbria). 🎯

Nota de Realidade (Disclaimer 🧐):
Se até os gigantes do Vale do Silício (Gemini, ChatGPT...) às vezes veem elefantes cor-de-rosa, o meu modelo local não vai ser perfeito 100% das vezes. Mas já não é o "tio bêbado do casamento" — agora é um Mestre de Jogo competente com memória de elefante real. 🐘

Obrigado pela paciência enquanto ajustava os parafusos! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->