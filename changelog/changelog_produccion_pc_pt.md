****************************************************************************************************
24/02/2026 12:32 - Geração de Imagens por IA, Melhorias Narrativas e Controle - Beta_v058
****************************************************************************************************
- What's New (PT):
  **🧠 Evolução do Cérebro: Olá, Qwen 3**
  Migrei o motor do jogo para tirar o máximo proveito da nova geração de modelos Qwen3. Os antigos modelos da série 2.5 acompanharam o início da jornada de RolemIAster, mas chegou a hora de deixar as velhas glórias para trás. Este salto quantitativo na geração de histórias traduz-se numa prosa mais imersiva, regras muito mais rígidas e personagens mais coerentes. Preparem as vossas placas gráficas, porque o Mestre de Jogo acabou de subir de nível.

  **Novidade: Segunda fase da Geração de Imagens por IA**
  - 🎨 **Seu Mundo em Imagens:** Integrei um sistema inicial de geração de imagens por Inteligência Artificial. Enquanto você joga, o sistema tenta gerar retratos e cenários que acompanham a ambientação da sua partida.
  - 🖼️ **Fundos Dinâmicos:** As imagens são geradas em segundo plano sem interromper sua partida. Você verá como elas aparecem progressivamente no fundo, nos cards de personagens e no Códice.
  - 🧹 **Gerenciamento de Imagens:** Novo painel para visualizar e excluir as imagens geradas que você não gostar.
  
  **Melhorias na Geração de Personagens:**
  - ⚙️ **Criação Aleatória mais Sólida:** Unifiquei e melhorei o motor de regras que a IA usa para criar personagens do zero, garantindo inventários mais lógicos (5 a 10 itens coerentes) e fichas mais equilibradas.
  - 🧠 **Cérebro Dividido:** A IA agora entende melhor quando deve "inventar" um personagem do zero e quando deve se limitar a extrair os dados da biografia que você mesmo escreveu.
  - ⚡ **Velocidade na sua Medida:** Nova seção em Configuração Visual. Escolha entre "Rápida" (1 passo), "Média" (2 passos) ou "Alta" (4 passos) para ajustar o tempo de geração à potência do seu computador.
  - 🛠️ **Otimização Técnica:** O modelo de IA para imagens é carregado na **RAM (Memory)** e processado via **CPU**, sem ocupar memória de vídeo (VRAM). Isso garante que não interfira no desempenho da IA principal do jogo (LLM). Requer cerca de 5GB de RAM adicionais, mantendo-se dentro dos requisitos mínimos oficiais do Steam.
  - 📤 **Compartilhe suas Aventuras:** Todas as imagens geradas são salvas automaticamente. Você as encontrará na pasta: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Seletor de Modelos (Avançado):** Se você iniciar o jogo com o parâmetro `--advanced`, agora poderá escolher qual modelo de IA usar para as imagens no painel de Aparência. Isso permite que entusiastas testem diferentes versões do Stable Diffusion otimizadas para OpenVINO (arquivos .xml/.bin).
  
  **Narrativa e Cérebro da IA:**
  - 🧠 **Fim dos Loops:** Uma nova "Doutrina de Memória" foi implementada na IA. Agora ela distingue melhor entre "memórias" (o que já passou) e o "presente" (o que está acontecendo). Isso ajuda a reduzir os casos em que a IA se repetia ou ficava travada.
  - 📜 **Arquivos Históricos:** O sistema apresenta suas memórias à IA como um "Arquivo Histórico Fechado", facilitando o uso dessas informações como referência para avançar na história.
  - ⚡ **Instruções Otimizadas:** Melhoramos a forma como o jogo solicita a narração no seu idioma, liberando capacidade do modelo para se concentrar na criatividade.
  - 👁️ **Foco Narrativo:** A percepção da IA foi reescrita. Agora ela entende melhor quais elementos são "fundo estático" e não deve repeti-los desnecessariamente em cada parágrafo.
  - 🔀 **Decisões Mais Claras:** A IA agora oferece caminhos de saída mais definidos. Suas sugestões (botões) dividem-se entre investigar o ambiente (Aprofundar) ou mudar de rumo (Divergir).
  - 🫵 **Tratamiento Direto:** A instrução base foi ajustada para garantir que a IA trate você por "Você", melhorando a imersão pessoal.
  
  **Criação de Personagem:**
  - 🖼️ **Retratos de Personagem:** Ao gerar um personagem com IA, o sistema tenta criar um retrato baseado em sua idade, profissão e descrição. Note que esta é uma versão inicial e a fidelidade (especialmente na idade) pode variar conforme o modelo utilizado. (Continuo fazendo testes, mas o início é promissor)
  - 🎲 **Geração Aleatória Confiável:** Corregido um erro onde o botão "Gerar com IA" podia falhar na primeira tentativa, deixando os campos vazios. Agora, o sistema de correção inteligente garante que a resposta seja sempre válida.
  
  **Gerenciamento de Imagens Geradas:**
  - 🖼️ **Galeria de Imagens de IA:** Novo painel no menu Arquivo que mostra todas as imagens que a IA gerou durante suas partidas (retratos, fundos). Você pode filtrar por tipo de imagem ou por mundo.
  - 🗑️ **Exclusão Seletiva:** Selecione uma ou várias imagens e exclua-as se não lhe agradarem (talvez aquela em que a IA decidiu que era uma boa ideia estacionar um ônibus no estábulo do castelo). O sistema limpa tanto o arquivo quanto seu registro interno.
  - 📂 **Acesso Direto:** Clique duas vezes em qualquer miniatura para abrir a pasta onde o arquivo se encontra. Se você já tiver a pasta aberta, a mesma janela será reutilizada.
  - 💾 **Lembrar do seu Espaço:** O tamanho da janela da galeria é salvo automaticamente entre as sessões.
  
  **Desempenho em Configurações Baixas (Importante para GPUs com pouca VRAM):**
  - 🧠 **PSR - Governança Híbrida:** Novo sistema que divide o trabalho da IA em duas fases: Planejamento (Chef) e Execução (Cozinheiros). Isso permite que modelos locais com 8 GB de VRAM funcionem evitando colapsos por excesso de contexto (+12K tokens), à custa de uma latência maior; a interação com a IA passa de um único prompt para uma série de prompts (quanto menor a VRAM, maior a quantidade de prompts gerados e maior o tempo de resposta).
  - ⚡ **Execução Inteligente:** O sistema decide automaticamente se processa tudo de uma vez (monolítico) ou divide em partes (iterativo) conforme sua VRAM disponível. GPUs com menos VRAM ativam o modo por partes apenas quando necessário.
  - 📊 **Otimização Dinâmica:** O PSR reduz a carga de tokens durante a geração, permitindo que usuários com placas de vídeo de 4GB possam completar a criação de personagens e a geração de história que antes travavam.
  - 🔄 **Coerência Mantida:** Apesar de dividir o trabalho, o sistema injeta uma "intenção mestra" para que a IA não perca o fio da meada do que estava fazendo.
  
  **Vozes de IA (melhoria incremental):**
  Geração em tempo real de vozes em todos os idiomas (alguns idiomas estão mais limitados que outros; o mais variado em tipos de vozes é o inglês)
  - 🗣️ **Gritos de Combate com Voz:** Ao iniciar combate contra inimigos hostis, uma frase de voz contextual de entrada agora é acionada.
  - 🎭 **Frases Dinâmicas por Contexto:** O motor pode gerar linhas curtas de voz para eventos específicos (serviços/combate) conforme idioma, ambientação e perfil do personagem.
  - 🧠 **Modelos de Voz Internos:** Os modelos técnicos de voz foram separados do sistema narrativo para evitar interferências na história.
  - 🔊 **Maior Clareza ao Ouvir:** Melhoramos a inteligibilidade e a prosódia da síntese para priorizar uma dicção compreensível.
  
  **⚠️ Aviso de Compatibilidade (Partidas Anteriores):**
  - 🔄 Devido à quantidade de mudanças internas no motor de regras e no sistema de ambientação, as **partidas e mundos salvos anteriormente continuarão sendo jogáveis (possivelmente)**, mas é muito provável que apresentem erros ou comportamentos inesperados. **Recomenda-se criar um novo mundo do zero** para aproveitar todas as melhorias corretamente.

****************************************************************************************************
17/02/2026 07:20 - Geração de Imagens por IA, Melhorias Narrativas e Controle - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (PT):
  **⚠️ RAMO EXPERIMENTAL (BETA DO STEAM)**
  Esta versão está disponível atualmente apenas no **Ramo Experimental** do Steam. Para ativá-la:
  1. Clique com o botão direito em **RolemIAster** na sua Biblioteca Steam.
  2. Selecione **Propriedades...**
  3. Vá para a aba **Betas**.
  4. Em "Participação na beta", selecione **experimental** no menu suspenso.
  
  **Novidade: Primeira fase da Geração de Imagens por IA**
  - 🎨 **Seu Mundo em Imagens:** Integrei um sistema inicial de geração de imagens por Inteligência Artificial. À medida que você joga, o sistema tenta gerar retratos e paisagens que acompanhem a ambientação da sua partida.
  - 🖼️ **Fundos Dinâmicos:** As imagens são geradas em segundo plano sem interromper seu jogo. Você verá como elas aparecem progressivamente no fundo, nos cartões de personagens e no Códice.
  - ⚡ **Velocidade sob Medida:** Nova seção na Configuração Visual. Escolha entre "Rápida" (1 passo), "Média" (2 passos) ou "Alta" (4 passos) para ajustar o tempo de geração à potência do seu equipamento.
  - 🛠️ **Otimização Técnica:** O modelo de IA para imagens é carregado na **RAM (Memória)** e processado via **CPU**, sem ocupar memória de vídeo (VRAM). Isso garante que não interfira no desempenho da IA principal do jogo (LLM). Requer cerca de 5GB de RAM adicionais, mantendo-se dentro dos requisitos mínimos oficiais do Steam.
  - 📤 **Compartilhe suas Aventuras:** Todas as imagens geradas são salvas automaticamente. Você as encontrará na pasta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa e Cérebro da IA:**
  - 🧠 **Fim dos Loops:** Foi implantada uma nova "Doutrina de Memória" na IA. Agora ela distingue melhor entre "memórias" (o que já aconteceu) e o "presente" (o que está acontecendo). Isso ajuda a reduzir os casos onde a IA se repetia ou ficava travada.
  - 📜 **Arquivos Históricos:** O sistema apresenta suas memórias à IA como um "Arquivo Histórico Fechado", facilitando o uso dessa informação como referência para avançar a história.
  - ⚡ **Instruções Otimizadas:** A forma como o jogo solicita a narração no seu idioma foi melhorada, liberando capacidade do modelo para se concentrar na criatividade.
  - 👁️ **Foco Narrativo:** A percepção da IA foi reescrita. Agora ela entende melhor quais elementos são "fundo estático" e que não devem ser repetidos desnecessariamente em cada parágrafo.
  - 🔀 **Decisões Mais Claras:** A IA agora oferece rotas de fuga mais definidas. Suas sugestões (botões) dividem-se entre investigar o ambiente (Aprofundar) ou mudar de rumo (Divergir).
  - 🫵 **Tratamento Direto:** A instrução base foi ajustada para garantir que a IA trate você por "Você", melhorando a imersão pessoal.
  
  **Criação de Personagem:**
  - 🖼️ **Retratos de Personagem:** Ao gerar um personagem com IA, o sistema tenta criar um retrato baseado na idade, profissão e descrição. Tenha em mente que é uma versão inicial e a fidelidade (especialmente na idade) pode variar conforme o modelo utilizado. (continuo fazendo testes, mas o início é promissor)
  - 🎲 **Geração Aleatória Confiável:** Corrigida uma falha onde o botão "Gerar com IA" podia falhar na primeira tentativa, deixando os campos vazios. Agora o sistema de correção inteligente garante que a resposta seja sempre válida.

****************************************************************************************************
17/02/2026 07:04 - Geração de Imagens por IA, Melhorias Narrativas e Controle - Beta_v058
****************************************************************************************************
- What's New (PT):
  **⚠️ RAMO EXPERIMENTAL (BETA DO STEAM)**
  Esta versão está disponível atualmente apenas no **Ramo Experimental** do Steam. Para ativá-la:
  1. Clique com o botão direito em **RolemIAster** na sua Biblioteca Steam.
  2. Selecione **Propriedades...**
  3. Vá para a aba **Betas**.
  4. Em "Participação na beta", selecione **experimental** no menu suspenso.
  
  **Novidade: Primeira fase da Geração de Imagens por IA**
  - 🎨 **Seu Mundo em Imagens:** Integrei um sistema inicial de geração de imagens por Inteligência Artificial. À medida que você joga, o sistema tenta gerar retratos e paisagens que acompanhem a ambientação da sua partida.
  - 🖼️ **Fundos Dinâmicos:** As imagens são geradas em segundo plano sem interromper seu jogo. Você verá como elas aparecem progressivamente no fundo, nos cartões de personagens e no Códice.
  - ⚡ **Velocidade sob Medida:** Nova seção na Configuração Visual. Escolha entre "Rápida" (1 passo), "Média" (2 passos) ou "Alta" (4 passos) para ajustar o tempo de geração à potência do seu equipamento.
  - 🛠️ **Otimização Técnica:** O modelo de IA para imagens é carregado na **RAM (Memória)** e processado via **CPU**, sem ocupar memória de vídeo (VRAM). Isso garante que não interfira no desempenho da IA principal do jogo (LLM). Requer cerca de 5GB de RAM adicionais, mantendo-se dentro dos requisitos mínimos oficiais do Steam.
  - 📤 **Compartilhe suas Aventuras:** Todas as imagens geradas são salvas automaticamente. Você as encontrará na pasta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa e Cérebro da IA:**
  - 🧠 **Fim dos Loops:** Foi implantada uma nova "Doutrina de Memória" na IA. Agora ela distingue melhor entre "memórias" (o que já aconteceu) e o "presente" (o que está acontecendo). Isso ajuda a reduzir os casos onde a IA se repetia ou ficava travada.
  - 📜 **Arquivos Históricos:** O sistema apresenta suas memórias à IA como um "Arquivo Histórico Fechado", facilitando o uso dessa informação como referência para avançar a história.
  - ⚡ **Instruções Otimizadas:** A forma como o jogo solicita a narração no seu idioma foi melhorada, liberando capacidade do modelo para se concentrar na criatividade.
  - 👁️ **Foco Narrativo:** A percepção da IA foi reescrita. Agora ela entende melhor quais elementos são "fundo estático" e que não devem ser repetidos desnecessariamente em cada parágrafo.
  - 🔀 **Decisões Mais Claras:** A IA agora oferece rotas de fuga mais definidas. Suas sugestões (botões) dividem-se entre investigar o ambiente (Aprofundar) ou mudar de rumo (Divergir).
  - 🫵 **Tratamento Direto:** A instrução base foi ajustada para garantir que a IA trate você por "Você", melhorando a imersão pessoal.
  
  **Criação de Personagem:**
  - 🖼️ **Retratos de Personagem:** Ao gerar um personagem com IA, o sistema tenta criar um retrato baseado na idade, profissão e descrição. Tenha em mente que é uma versão inicial e a fidelidade (especialmente na idade) pode variar conforme o modelo utilizado. (continuo fazendo testes, mas o início é promissor)
  - 🎲 **Geração Aleatória Confiável:** Corrigida uma falha onde o botão "Gerar com IA" podia falhar na primeira tentativa, deixando os campos vazios. Agora o sistema de correção inteligente garante que a resposta seja sempre válida.

****************************************************************************************************
13/02/2026 21:47 - Otimização da Configuração de IA e Reforço de i18n - Beta_v055
****************************************************************************************************
- What's New (PT):
  - ⚙️ **Controle de Prioridade Local:** Agora você pode ajustar manualmente a prioridade das suas placas de vídeo, mesmo que o sistema esteja no modo automático.
  - 🧠 **Informações de Rotação de IA:** Adicionei painéis informativos na configuração de provedores externos para explicar como funciona a rotação automática em caso de erro ou cota excedida.
  - 🌍 **Suporte a GPU Ampliado:** A mensagem de informação i18n agora reflete corretamente o suporte para NVIDIA CUDA e Vulkan (AMD/Intel). Traduções atualizadas em todos os idiomas!
  - ⚙️ **Conectividade Melhorada:** Conectores reparados para Ollama e outros servidores compatíveis com OpenAI.
  - 🧠 **IA Poliglota e Robusta:** A detecção de objetos obtidos na história agora funciona em 10 idiomas. Além disso, blindei o sistema para que você nunca fique sem história inicial, mesmo se a IA tiver uma falha técnica.
  - 🔄 **Rotação Inteligente:** Consertei o sistema de rotação para que não desista da sua IA local na primeira tentativa. Agora, o sistema dará uma chance para ela se corrigir antes de buscar ajuda externa.
  - 🧹 **Limpeza de Base:** Removi regras antigas e confusas para que o "cérebro" da IA seja mais nítido e preciso ao lidar com seus objetos.

