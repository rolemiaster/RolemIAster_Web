# 📢 Mensagem do Desenvolvedor (Acesso Antecipado)

Bem-vindo à RolemIAster. Antes de mergulhar em sua próxima grande aventura, quero roubar um minuto do seu tempo para deixar algumas coisas claras (prometo ser breve, que os dados estão esperando por você).

Este jogo está em fase de **Acesso Antecipado (Early Access)**.
Sou um desenvolvedor solitário — sim, só eu, meu teclado e litros de café —, o que significa que faço o meu melhor, mas às vezes não consigo fazer tudo a tempo. Peço desculpas antecipadamente se demorar para corrigir algum bug escorregadio, implementar aquela funcionalidade que você tanto deseja, ou responder imediatamente no Discord. Eu faço malabarismos, mas ainda não me saíram tentáculos extras.

## ⚠️ Aviso Importante sobre Hardware (Local vs Nuvem)
Existem duas maneiras de jogar, e sua experiência dependerá de qual você escolher:

*   **Modo Local (Grátis, Privado):** Se você quiser rodar a IA em seu próprio PC, os requisitos da loja (Mínimo 8GB VRAM) são sagrados para começar com o pé direito. Menos que isso e a IA vai rastejar ou travar seu equipamento. É pura matemática, não magia, embora agora com Turbo Quant, isso pode mudar para melhor.
*   **Modo Nuvem (API de Gemini, GPT, etc. apenas se iniciar com o comando `--advanced`):** Aqui a história muda! Se você configurar o jogo para usar serviços na nuvem (como Google Gemini ou OpenAI), o trabalho pesado será feito nos servidores deles, não no seu. Neste modo, o jogo funciona de forma fluida em praticamente qualquer equipamento, já que sua placa de vídeo descansa.

## Gerenciamento de Expectativas
Se você veio esperando uma superprodução AAA sem falhas, temo que esteja no lugar errado (por enquanto). O jogo está em uma fase inicial, e sinceramente, apenas os corajosos que entendem e apoiam esse tipo de projeto experimental têm paciência para aproveitá-lo neste momento.

## Garantia de Satisfação
Se você sentir que o jogo está muito cru para você ou seu hardware sofre demais, ninguém vai ficar chateado se você pedir um reembolso. Pelo contrário, ficarei feliz em recebê-lo de volta no futuro — e que você pague 40 ou 60 USD quando o jogo estiver polido e finalizado 😉. O preço atual é um presente por confiar em mim nesta fase.

Dito isso, meu agradecimento é infinito para aqueles que decidem ficar. Seus relatórios e sugestões são o verdadeiro motor deste projeto. Graças a vocês, o jogo melhorou brutalmente em poucas semanas.

**RolemIAster está sendo construído sob medida para vocês.**

*Obrigado pela paciência, pelo apoio e que os críticos estejam do seu lado!*


*********************************************************************************
# 📢 ATUALIZAMOS PARA QWEN 3.5 + TURBO QUANT! NOVO MOTOR, NOVA TECNOLOGIA, NOVA ERA 🚀
*********************************************************************************

🚧 ÁREA EM OBRAS: LOBOTOMIA COMPLETA (E FUNCIONA) 🧠🔧
No que estou trabalhando?
Estou trocando o motor do jogo, e não é pouca coisa.
Até agora, cada vez que você jogava um turno, o sistema lançava para a IA um "pacotão" de regras de 15.000 a 20.000 tokens. Basicamente, era como obrigar o mestre a ler o manual inteiro antes de cada frase. 📚🥵
Implementei duas tecnologias que trabalham em equipe:

1. 🧠 **TurboQuant — A memória comprimida**
   - Integrei uma tecnologia do Google (apresentada na ICLR 2026) que comprime a memória da IA para quase um terço do seu tamanho original.
   - Se você tem uma RTX das séries 3000, 4000 ou 5000, o jogo a aproveitará automaticamente.
   - ⚠️ **NOTA IMPORTANTE SOBRE GPU AMD:** EMBORA HAJA INDÍCIOS DE FUNCIONAMENTO DO TURBO QUANT EM PLACAS AMD/INTEL (VULKAN), NA PRÁTICA DÁ MUITOS ERROS E PORTANTO POR ENQUANTO NÃO SERÁ IMPLEMENTADO. ESPERAMOS QUE A COMUNIDADE FAÇA O SEU PAPEL E TENHAMOS NOVIDADES EM BREVE.
   - **Resultado:** A IA lembra mais gastando menos VRAM. É pura magia digital. ✨

2. 📖 **Contexto massivo (+200%)**
   - Reescrevi o cálculo de memória conversacional de forma cirúrgica: agora o jogo lê as especificações técnicas de cada modelo e calcula com precisão quanto cabe na sua GPU.
   - O modelo de 9B passa de lembrar ~36.000 palavras para mais de ~110.000 em uma GPU com 16GB VRAM. 🚀
   - Além disso, aumentei o limite de resposta de 4.096 para 8.192 tokens: narrações mais longas sem cortes no meio da frase.

O resultado final: Velocidade superior na maioria dos casos, partidas longas que não perdem o fio da meada, e uma IA muito mais focada (e sóbria). 🎯

Nota de Realidade (Disclaimer 🧐):
Se até os gigantes do Vale do Silício (Gemini, ChatGPT...) às vezes veem elefantes cor-de-rosa, meu modelo local não será perfeito 100% das vezes. Mas ele não é mais o "cara bêbado do casamento" — agora é um Mestre de RPG competente com memória de elefante de verdade. 🐘

Obrigado pela paciência enquanto ajustava as engrenagens! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->