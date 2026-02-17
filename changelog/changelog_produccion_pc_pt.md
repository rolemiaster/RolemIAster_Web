****************************************************************************************************
17/02/2026 19:12 - Geração de Imagens por IA, Melhorias Narrativas e Controle - v058
****************************************************************************************************
- What's New (PT):
  **⚠️ RAMO EXPERIMENTAL (BETA DA STEAM)**
  Esta versão está disponível atualmente apenas no **Ramo Experimental** da Steam. Para ativá-la:
  1. Clique com o botão direito em **RolemIAster** na sua Biblioteca Steam.
  2. Selecione **Propriedades...**
  3. Vá para a aba **Betas**.
  4. Em "Participação na beta", selecione **experimental** no menu suspenso.
  **Novidade: Primeira fase de Geração de Imagens por IA**
  - 🎨 **O Seu Mundo em Imagens:** Integrei um sistema inicial de geração de imagens por Inteligência Artificial. À medida que você joga, o sistema tenta gerar retratos e paisagens que acompanhem a ambientação da sua partida.
  - 🖼️ **Fundos Dinâmicos:** As imagens são geradas em segundo plano sem parar o seu jogo. Verá como aparecem progressivamente no fundo, nos cartões de personagens e no Códice.
  - ⚡ **Velocidade sob Medida:** Nova seção em Configuração Visual. Escolha entre "Rápida" (1 passo), "Média" (2 passos) ou "Alta" (4 passos) para ajustar o tempo de geração à potência do seu equipamento.
  - 🛠️ **Otimização Técnica:** O modelo de IA para imagens é carregado na **RAM (Memory)** e processado via **CPU**, sem ocupar memória de vídeo (VRAM). Isso garante que não interfira no desempenho da IA principal do jogo (LLM). Requer cerca de 5GB de RAM adicionais, mantendo-se dentro dos requisitos mínimos oficiais da Steam.
  - 📤 **Compartilhe as Suas Aventuras:** Todas as imagens geradas são salvas automaticamente. Você as encontrará na pasta: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Seletor de Modelos (Avançado):** Se iniciar o jogo com o parâmetro `--advanced`, agora você pode escolher qual modelo de IA usar para as imagens no painel de Aparência. Isso permite aos entusiastas testar diferentes versões do Stable Diffusion otimizadas para OpenVINO (arquivos .xml/.bin).
  **Narrativa e Cérebro da IA:**
  - 🧠 **Fim dos Loops:** Foi implementada uma nova "Doutrina de Memória" na IA. Agora ela distingue melhor entre "memórias" (o que já passou) e o "presente" (o que está acontecendo). Isso ajuda a reduzir os casos onde a IA se repetia ou ficava presa.
  - 📜 **Arquivos Históricos:** O sistema apresenta as suas memórias à IA como um "Arquivo Histórico Fechado", facilitando o uso dessa informação como referência para avançar a história.
  - ⚡ **Instruções Otimizadas:** A forma como o jogo solicita a narração no seu idioma foi melhorada, liberando capacidade do modelo para se concentrar na criatividade.
  - 👁️ **Foco Narrativo:** A percepção da IA foi reescrita. Agora ela entende melhor quais elementos são "fundo estático" e não deve repeti-los desnecessariamente em cada parágrafo.
  - 🔀 **Decisões Mais Claras:** A IA agora oferece vias de escape mais definidas. As suas sugestões (botões) dividem-se entre investigar o ambiente (Aprofundar) ou mudar de rumo (Divergir).
  - 🫵 **Tratamento Direto:** A instrução base foi ajustada para garantir que a IA trate você por "Você", melhorando a imersão pessoal.
  **Criação de Personagem:**
  - 🖼️ **Retratos de Personagem:** Ao gerar um personagem com IA, o sistema tenta criar um retrato baseado na sua idade, profissão e descrição. Tenha em conta que é uma versão inicial e a fidelidade (especialmente na idade) pode variar segundo o modelo utilizado. (continuo fazendo testes, mas o início é bom)
  - 🎲 **Geração Aleatória Confiável:** Corrigido um erro onde o botão "Gerar com IA" podia falhar na primeira tentativa, deixando os campos vazios. Agora o sistema de correção inteligente garante que a resposta seja sempre válida.

****************************************************************************************************
15/02/2026 02:57 - Escrita Direta, Correções de Estabilidade e Detecção d - Beta_v057
****************************************************************************************************
- What's New (PT):
  **Estabilidade:**
  - 🛠️ **Adeus aos Travamentos na Configuração:** Corrigidas várias falhas que ocorriam sob certas condições e impediam a abertura ou modificação da configuração da IA ao trocar de modelo ou redefinir valores.
  - 🗃️ **Banco de Dados Silencioso:** O aviso irritante de "Banco de Dados Incompatível" ao iniciar o jogo não aparecerá mais se o seu banco de dados estiver correto. Ele só será exibido quando houver uma mudança estrutural real que exija migração.
  
  **Experiência de Jogo:**
  - 🎯 **Controle de Precisão na IA:** Agora você pode digitar manualmente os valores de Contexto, Tokens, Temperatura ou Camadas da GPU diretamente em um campo numérico ao lado do slider. Você não depende mais apenas das "barras deslizantes"! Ambos os controles estão sincronizados: mova o slider e o número atualiza, ou digite o número e o slider se move.
  - ⌨️ **Escrita Direta:** Você não precisa mais clicar na caixa de texto para escrever sua ação! Agora você pode começar a digitar diretamente enquanto estiver na tela de jogo. Se você interagir com o inventário ou outro painel e depois quiser escrever, basta começar a digitar sem precisar selecionar nada. O sistema redireciona o que você digita automaticamente para o campo de ação. Não interfere com menus, diálogos nem atalhos do sistema.
  
  Mais algumas pequenas mudanças...

****************************************************************************************************
14/02/2026 21:48 - Sincronização de Contexto e Controle de Resposta de IA - Beta_v056
****************************************************************************************************
- What's New (PT):
  **Sistemas e Desempenho:**
  - 🧠 **Controle Total de Contexto:** Agora você pode ajustar tanto a memória da IA (`n_ctx`) quanto o comprimento de suas respostas (`Max Tokens`) com controles deslizantes muito mais intuitivos.
  - ♾️ **Modo Ilimitado:** Deslize ao mínimo para ativar o modo "Ilimitado", permitindo que modelos poderosos como o Gemini usem toda a sua capacidade sem restrições.
  - ⚡ **Reinicialização de Drivers:** Nova opção no iniciador para reiniciar os drivers de vídeo antes de jogar (opcional, configurável no launcher). Agora, ao iniciar, a tela piscará; com isso garantimos que toda a VRAM esteja disponível, purgando-a de resíduos.
  - 🛠️ **Configuração Robusta:** Corrigidos erros visuais e falhas técnicas ao salvar a configuração dos seus provedores de IA preferidos.
  - 🚀 **Melhor Detecção de Erros:** O jogo agora é mais inteligente ao detectar quando uma IA externa fica sem espaço.
  
  **Mecânicas e Mundo:**
  - 🎒 **Inventário Garantido:** Acabou essa história de começar uma aventura e não ver seus itens. O sistema SDIA agora monitora também a criação do personagem para que seu equipamento sempre esteja lá.
  - 📜 **Lore Purificado:** Corrigida uma falha que injetava fragmentos de "código" ou texto estranho na história do seu mundo. Agora o Códice será mais puro e legível.
  - ⚠️ **Guia de Compatibilidade:** Incluídos avisos nas configurações para ajudar você a escolher modelos compatíveis (Instruct/Chat).
  - ⚙️ **Implantes Confiáveis:** Corrigida a definição de slots e o carregamento de regras na criação de personagens. Agora todas as suas cibermelhorias usarão slots oficiais e serão autoequipadas corretamente.
  - 🎓 **Limite de Aprendiz:** Ajustado o equilíbrio inicial de habilidades. A IA gera um pacote de pontos para distribuir automaticamente nas habilidades mais importantes, de acordo com o contexto do seu personagem. Seus heróis agora começarão como verdadeiros novatos, progredindo de forma mais lógica.

****************************************************************************************************
14/02/2026 05:06 - Reforço de Integridade, Consciência de Personagens e Otimizações - Beta_v055
****************************************************************************************************
- What's New (PT):
  - 🧠 **Prioridade de IA do seu jeito:** Agora você pode arrastar e soltar seus conectores de IA para decidir qual usar primeiro. Se uma falhar, o jogo tentará automaticamente a próxima na sua lista de prioridades.
  - ⚙️ **Controle de Pré-carregamento:** Adicionada opção no inicializador para decidir se você quer pré-carregar o modelo de IA local ou carregá-lo apenas quando necessário (economia de recursos ao iniciar).
  - 🛡️ **Exclusão Segura e Limpa:** Ao excluir um mundo, o sistema agora cuida de limpar absolutamente todos os dados relacionados (personagens e história), mantendo seu banco de dados impecável.
  - 🚀 **Otimização de Memória:** O "cérebro" da IA agora é carregado apenas uma vez e compartilhado entre todas as funções, economizando muita memória de vídeo (VRAM).
  - 🎨 **Interface Inteligente:** O painel de seleção de mundos agora se ajusta perfeitamente à tela e ao texto, sem botões cortados ou espaços mal aproveitados.
  - 🔄 **Rotação Inteligente Melhorada:** Consertei o sistema de rotação para que não desista da sua IA local logo de cara; agora ele dá uma chance para ela se corrigir antes de buscar ajuda externa.
  - 🌍 **IA Poliglota e Robusta:** A detecção de objetos e a narrativa agora são mais precisas em 10 idiomas, com blindagem especial para que nunca falte história.
  - 🛠️ **Persistência de IA Garantida:** Corrigido o erro que fazia o Gemini "esquecer" ou se transformar no Ollama. Suas prioridades de uso de IA agora são salvas de forma segura e cirúrgica.
  - ⚡ **Gemini Restaurado:** Reparado o acesso ao modelo Gemini recuperando suas chaves e URLs corretas.
  - 🎨 **Interface Temática Corrigida:** Os botões de decisão agora recuperam instantaneamente a cor do seu mundo (ex: Dourado para fantasia) ao carregar o jogo.
  - 👥 **Consciência entre Personagens:** A IA agora está ciente de todos os seus personagens! Se você tiver vários heróis em um mesmo mundo, a IA os reconhecerá como habitantes e poderá lembrar o que cada um fez individualmente.
  - 🧠 **Memória com Atribuição:** O sistema de memórias agora distingue quem realizou cada ação, evitando que a IA confunda seus feitos passados com os de outros personagens.

****************************************************************************************************
13/02/2026 07:56 - Sistema de Interpretação Semântica de Combate - Beta_v054
****************************************************************************************************
- What's New (PT):
  🧪 JÁ DISPONÍVEL:
  
  ⚠️ **AVISO IMPORTANTE:** O JOGO PODE MIGRAR O BANCO DE DADOS ANTIGO PARA A NOVA ESTRUTURA ATRAVÉS DAS OPÇÕES DO INICIALIZADOR (LAUNCHER). NÃO RECOMENDO ISSO; EMBORA SUA PARTIDA ANTIGA POSSA FUNCIONAR, MUITAS COISAS ESTARÃO QUEBRADAS. MINHA RECOMENDAÇÃO É EXCLUIR TODOS OS SAVES ANTERIORES. NÃO É NECESSÁRIO APAGAR O BANCO DE DADOS COMPLETO, SALVO EM CASOS EXTREMOS.
  
  Mudanças:
  
  - 🌍 **Gerenciador de Mundos e Personagens:** Agora você tem total liberdade. Crie seus próprios Mundos com suas próprias regras e ambientação e, dentro de cada um, crie quantos personagens quiser. **Nota Importante:** Todos os personagens de um mesmo mundo compartilham a mesma linha do tempo e os eventos ocorridos, o que estabelece as bases para o futuro modo multijogador.
  - 🧠 **Memória Contextual (Super RAG):** A IA agora tem "sentidos". Ao buscar informações no Lore ou em sua memória, ela leva em conta onde você está, com quem está, se está ferido e o que acabou de acontecer. Se você estiver com um Rei, ela lembrará coisas sobre reis. Se estiver ferido, buscará regras sobre cura. É muito mais intuitivo e coerente!
  - 🌍 **Lore no Primeiro Personagem:** Você escrevia uma descrição épica do seu mundo e a IA a ignorava no seu primeiro personagem? Resolvido! Agora a descrição manual do mundo chega diretamente à IA durante a criação inicial, antes mesmo que o sistema de memória seja ativado.
  - ⚙️ **Sistema de Mundos Aprimorado:** Tornei o nome do seu mundo independente das regras técnicas. Agora você pode chamar seu mundo como quiser sem que isso afete o carregamento de regras de Fantasia ou Cyberpunk.
  - 📝 **Clareza na Criação:** Melhorei as instruções internas para que a IA entenda melhor quando deve inventar um histórico e quando deve se limitar a extrair suas estatísticas.
  - 🧠 **Combate por Texto Livre:** Agora você pode escrever suas ações em combate como se falasse com um personagem de RPG de mesa: "lançar feitiço de cura em mim", "desembainhar minha espada", "usar poção de cura". A IA entende sua intenção e a traduz para a mecânica de jogo.
  - 🎨 **Nova Interface Épica!** Remodelei o jogo completamente. Menus estilo RPG, fundos animados e uma experiência visual totalmente renovada. Estilo escuro semitransparente, bordas neon e sombras suavizadas para uma imersão total.
  - 🎬 **IA Diretor de Cena (MELHORADO):** O combate agora ganha vida. A IA gera eventos ambientais e reações que enriquecem a narrativa: tochas caindo, inimigos recuando, vigas desabando. O campo de batalha não é mais estático!
  - ⚔️ **Desembainhar com Palavras:** Você não precisa mais clicar no slot da arma. Simplesmente escreva "desembainhar espada" ou "sacar meu machado" e o sistema interpreta automaticamente (ATENÇÃO!, fazer isso em combate pode resultar em falha, erro crítico e perda de turno!... "Para os combates se vem preparado de casa!").
  - 📖 **Feitiços Reconhecidos:** A IA agora conhece seu livro de feitiços completo. Diga "lançar bola de fogo" e, se você tiver esse feitiço, ela o lançará.
  - 🌍 **Narrativa no Seu Idioma:** A história agora respeita estritamente o idioma selecionado, evitando misturas estranhas entre idiomas (tomara que eu nunca mais tenha que ver 'spanglish'!, forcei tanto a IA que diria que se ela voltar a gerar textos em outro idioma diferente do selecionado, será puramente porque ela está realmente amaldiçoada).
  - 🛡️ **Sem Mais Turnos Perdidos:** Se o jogo não entender sua ação, ele pedirá para você reformulá-la. Seu turno NÃO é perdido.
  - 🎒 **Inventário Manual:** Para mover objetos entre slots (equipar da mochila, carregar munição), use a interface de arrastar e soltar. Isso evita confusões e economiza recursos de IA.
  - 🧪 **Uso Fluido de Poções:** Agora você pode arrastar poções e comida diretamente sobre seu retrato para usá-las. Adicionei também a opção "Usar" ao clicar com o botão direito. Mais intuitivo e rápido!
  - 🩸 **Correção de Dano:** Você não é mais imortal! Corrigimos um problema onde a barra de vida não descia mesmo quando você era atingido. Agora você sofrerá como deve.
  - 👻 **Adeus aos Itens Fantasma:** Você encontrava um objeto na história, mas ele nunca aparecia na sua mochila? Problema resolvido! Agora o sistema repara automaticamente os objetos que a IA "esquece" de criar.
  - 🐛 **Correção Crítica em NPCs:** Corrigida uma falha que impedia os NPCs de tomarem decisões táticas corretamente, fazendo com que sempre "esperassem" em vez de atacar ou defender.
  - 🎒 **Correção do Inventário Inicial:** Os novos personagens não começam mais nus. Agora eles recebem seu equipamento inicial corretamente.
  - 🎲 **Criação de Personagem:** Corrigido um exploit onde aumentar e diminuir um atributo em certos limites gerava pontos extras infinitos. Acabou o truque do Carisma!
  - 🖼️ **Retratos Corrigidos:** Você criava um mundo com nome próprio e os retratos desapareciam? Corrigido! Agora o sistema encontra as imagens corretas, não importa como você batize seu mundo.
  - 💍 **Ícones Inteligentes:** Os objetos (incluindo anéis) agora mostram ícones mais precisos e corretos na interface.
  - 🧪 **Dicas de Ferramenta (Tooltips) Melhoradas:** As poções, consumíveis e feitiços agora mostram corretamente todas as suas informações e efeitos ao passar o mouse por cima.
  - 🎵 **Melhorias de Áudio:** A música de combate não para mais ao pressionar os botões predefinidos.
  - [I18N] **Fix Implantes:** Adicionadas chaves de tradução ausentes para slots de implantes (`slot_implant_*`) e ícones correspondentes (`icon_implant_*`) em `es.json`.
  - [FIX][AUDIO] **Áudio Inconsistente:** Adaptados os efeitos sonoros (SFX) de equipar itens e desembainhar armas à ambientação. Agora o sistema detecta a `setting_key` e usa sons futuristas/industriais em Cyberpunk e sons clássicos em Fantasia.
  - [FIX][I18N] **Limpeza es.json:** Eliminadas mais de 20 chaves duplicadas em `es.json` e corrigidos erros de digitação em nomes de slots (ex. "Oíidos" -> "Oídos").
  - ⚙️ **Detecção Inteligente de Modelos:** Agora o jogo lê diretamente o "cérebro" dos modelos que você importar (GGUF). Detecta o contexto máximo real de forma automática. (Modelos oficiais otimizados nem são tocados para máxima estabilidade).
  - 📂 **Economia de Espaço:** Ao adicionar um modelo do seu computador, agora o jogo o move diretamente para sua pasta em vez de copiá-lo. Seus Gigabytes agradecerão!
  - ⚖️ **Justiça nos Atributos:** Corrigido um exploit que permitia conseguir pontos infinitos ao aumentar e diminuir atributos na criação.
  - 📖 **Guia de Treinamento:** Atualizei o Manual (README) com todos os detalhes sobre como seus personagens ganham experiência e aumentam seus atributos.
  - 📜 **Códice de Mundos Épicos:** Acabou o lore de "um pós-escrito"! Agora o gerador cria mundos com história profunda, descrevendo suas religiões, leis, geografia e personagens famosos em um formato de crônica detalhada.
  - 🧙 **Histórias Coerentes:** Seu personagem não nasce mais no vazio. Seu histórico agora se integra inteligentemente com o lore do mundo que você acabou de criar ou escolher.
  - ⚡ **Interface Fluida:** A autogeração de histórias e mundos agora é realizada em segundo plano. Acabaram-se as esperas com a tela congelada!
  - 🚀 **Início de Aventura Instantâneo:** Eliminei as esperas! Agora, após criar seu personagem, você pula diretamente para a história. O sistema usa seu histórico enriquecido para criar o começo perfeito sem que você precise escrever mais nenhuma palavra.
  - 🎭 **Históricos com Pretexto:** Seus personagens não têm apenas um passado, mas também um motivo urgente para começar a aventura. O novo sistema de IA gera automaticamente a faísca inicial da história integrada à sua biografia.
  - 🧹 **Interface Simplificada:** Removi os botões e telas que não agregavam valor. O botão "Iniciar História" centraliza agora todo o poder para que você comece a jogar o quanto antes.
  - [FIX][UI] **Duplicação Visual na Seleção de Mundo:** Corrigido bug onde o nome do mundo aparecia duplicado como "Nome [Nome]". Agora a etiqueta de tipo é ocultada se for redundante.
  - [FEAT][UI] **Carregamento Rápido (Clique Simples):** Agora é possível carregar um personagem ou iniciar a criação de um novo com apenas um clique na tela de seleção de mundos. A expansão de mundos foi mantida para evitar conflitos.
  - 🧠 **IA Mais Criativa:** Quebrei o "loop de repetição" da IA injetando variabilidade técnica em cada solicitação. Agora os personagens gerados aleatoriamente serão muito mais únicos e originais, ignorando os exemplos do guia.
  
  🛡️ Aos valentes que se ATREVAM a lutar na linha de frente da batalha: A aventura os espera, agora mais indomável do que nunca!

****************************************************************************************************
06/02/2026 02:32 - Suporte a Vulkan (AMD/Intel) e Tratamento Robusto de Erros - Beta_v053
****************************************************************************************************
- What's New (PT):
  - 🚀 **Motor Híbrido Vulkan:** Suporte oficial para placas de vídeo AMD e Intel! Agora o jogo inclui um motor Vulkan dedicado que é ativado automaticamente (ou manualmente) para acelerar a IA em PCs não-NVIDIA.
  - ⚙️ **Controle Total do Motor:** Adicionamos a opção "Forçar Vulkan" tanto no Launcher quanto nas Configurações. Se você tiver problemas com CUDA ou quiser testar o desempenho do Vulkan (que voa em muitas configurações), você está no comando.
  - 🚦 **Status do Sistema:** Agora você pode ver exatamente qual motor está rugindo sob o capô (🟢 VERDE para CUDA, 🔴 VERMELHO para Vulkan) no painel de status.
  - 🛡️ **Semáforo da IA:** Se a Inteligência Artificial se "cansar" (exceder sua cota) ou a internet cair, o jogo te avisará com uma janela clara e útil em vez de te deixar esperando no silêncio.
  - 🔄 **Segurança Anti-Travamento:** Se ocorrer um erro de conexão, o jogo não "quebra" mais a conversa. Suas opções de diálogo reaparecerão para que você possa tentar novamente sem perder o progresso.
  - ☁️ **Memória na Nuvem:** O menu de configurações agora lembra corretamente suas preferências de provedores de nuvem entre as sessões.

****************************************************************************************************
03/02/2026 20:23 - Otimização de Memória VRAM e Estabilidade de Carregamento - Beta_v052
****************************************************************************************************
- What's New (PT):
  - 🧠 **Cérebro Otimizado:** Corrigimos uma falha grave que fazia a IA tentar "pensar duas vezes" ao mesmo tempo, duplicando o uso de memória da placa de vídeo e causando lentidão extrema ou travamentos. Sua VRAM agradecerá!
  - 💾 **Carregamento Seguro:** Melhoria na estabilidade geral ao carregar partidas para garantir que retomar sua aventura seja sempre uma experiência fluida.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Crítico: Estabilidade, Multi-GPU e Melhorias de Localização - Beta_v051
****************************************************************************************************
- What's New (PT):
  - 🚑 **Correção Crítica:** Corrigido um problema que impedia, em algumas circunstâncias raras, a inicialização do jogo ("Falha Total") devido à corrupção no banco de dados que o Launcher não conseguia limpar. Agora a opção "Limpar Banco de Dados" é muito mais eficaz.
  - ⚡ **Melhoria de Hardware:** Corrigida uma falha que fazia com que o modo de "Configuração Automática" ignorasse a potência de sistemas com múltiplas placas de vídeo em algumas configurações com GPUs não idênticas.
  - 🛠️ **Utilidade:** Adicionada uma nova opção no Launcher para abrir facilmente o registro (log) da sessão anterior e facilitar o suporte.
  - 🌍 **Localização:** Corrigidos vários botões que apareciam em inglês (Yes/No) no launcher. Agora eles respeitam o idioma selecionado.
  - 📖 **Interface:** Melhorado o formato do texto de informações da versão para torná-lo mais legível.
  
  - **Em Breve:** Próximo item em processo de implementação: compatibilidade com GPU AMD, NVIDIA e Intel via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Correção de Manuais & Estabilidade - Beta_v050
****************************************************************************************************
- Novidades:
  **Potência Multi-GPU e Correções Críticas!**
  
  * **🚀 Suporte Multi-GPU:** Implementada a capacidade de dividir grandes modelos de IA entre múltiplas placas de vídeo. *Agora você pode usar todo o seu arsenal de hardware; Poder Ilimitado!*
  * **🛡️ Estabilidade:** Adicionadas todas as bibliotecas DLL ausentes para evitar fechamentos inesperados. *Blindei o motor, se falhar agora será culpa de uma falha crítica nos dados.*
  * **📖 Manuais Web Dinâmicos:**
    * **Seletor Real:** O menu de idiomas agora verifica quais arquivos realmente existem antes de mostrá-los. *Acabaram-se as opções fantasma que não faziam nada; magia de adivinhação nível 5.*
    * **Correção Erro 403:** Solucionado o erro de permissões que impedia a visualização do Changelog dentro do jogo. *Ensinei o app a pedir passagem corretamente ("Abre-te Sésamo!").*
  * **🌍 Idiomas:** Revisão de textos e traduções. *Modo Poliglota ativado.*

****************************************************************************************************
28/01/2026 22:49 - Estabilização e Melhorias de IA - Beta_v049
****************************************************************************************************
- Novidades:
  Polimos a experiência de jogo com correções importantes e uma nova ferramenta visual:

  * **Inventário Limpo e Confiável:** Acabou-se encontrar "objetos fantasma" ou itens com nomes estranhos na sua mochila. Implementamos um sistema de validação narrativa que garante que tudo o que você colete ou compre realmente exista no mundo do jogo.
  * **Diálogos Fluidos:** Reparamos esses botões irritantes que às vezes apareciam como "Unknown" ou não respondiam. Agora as opções de diálogo com os NPCs sempre mostrarão o texto correto.
  * **Geração de Personagens Robusta:** Criar seu herói é agora um processo sólido. Solucionamos os conflitos que às vezes deixavam a ficha incompleta ou com estatísticas erradas ao combinar biografia e stats.
  * **Nova Barra de Status de IA:** Agora você pode ver o cérebro da máquina funcionando! Adicionamos uma barra na parte superior que mostra a velocidade de resposta e o uso de memória em tempo real. Assim você sempre saberá se a IA está "pensando" na sua próxima aventura.

****************************************************************************************************
28/01/2026 03:50 - Correção Crítica de Compilação - Beta_v048
****************************************************************************************************
- Novidades:
  Solucionado um erro crítico que impedia iniciar o jogo em instalações novas. Melhorada a estabilidade e a compatibilidade com diferentes equipamentos.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web e Suporte RTX 50 - Beta_v047
****************************************************************************************************
- Novidades:

  > [!IMPORTANTE]
  > **POR MOTIVOS DE COMPATIBILIDADE, É NECESSÁRIO ELIMINAR O DB PRÉVIO, CASO CONTRÁRIO É MUITO PROVÁVEL QUE OCORRAM ERROS NA CONFIGURAÇÃO DA IA**
  > **(Solução: Clique no ícone de engrenagem ⚙️ do Launcher -> Apagar Banco de Dados)**

  *Suporte Crítico para RTX Série 50: Solucionado um erro grave que provocava o fechamento inesperado ao tentar gerar personagens nas novas placas de vídeo NVIDIA (RTX 5070, 5080, 5090).
  (Como não disponho de uma RTX da série 5000, não pude testar diretamente se a solução é 100%, mas a teoria é que deve estar solucionado. Espero seus cânticos de vitória aqui!)
  
  *Atualização do Motor de IA: Atualizamos o cérebro local do jogo para que seja compatível com a mais recente tecnologia de hardware, garantindo que todos possam aproveitar a experiência offline, não importa o quão moderno seja seu equipamento.
  
  *Novo Launcher: Atualizações e notícias em tempo real no site oficial.


****************************************************************************************************
26/01/2026 06:49 - Integração Web Documentação - Beta_v045
****************************************************************************************************
- Novidades:
  *Agora o Manual do Usuário e o Registro de Alterações carregam diretamente do nosso site oficial, garantindo que você tenha sempre as informações mais atualizadas sem a necessidade de baixar patches. Inclui modo offline inteligente.

  *Reforçamos a estabilidade do jogo para que nunca trave ao iniciar. Além disso, os vendedores voltaram de suas férias no limbo: agora aparecem corretamente, têm mercadorias nas prateleiras e respeitam a ambientação do mundo (nada de poções mágicas no futuro).

  *Foi corrigido o bug que não permitia modificar os parâmetros de IA e a seleção do modelo de IA, fazendo com que alguns usuários com VRAM limitada não pudessem jogar.
  **Em caso de necessidade de modificar os parâmetros de IA, recomendo fortemente tentar primeiro baixar a % de VRAM para 85%, reiniciar e testar; se isso ainda não for suficiente, recomendo verificar se a VRAM da GPU não está sendo usada por outros processos que não sejam do próprio jogo (reinicie o PC se necessário, feche aplicativos que possam ocupar VRAM). Se depois de baixar a quantidade de VRAM até mesmo para 70%, continuar sem funcionar, não recomendo baixar mais porque o jogo não conseguirá gerenciar os prompts enviados para a IA, portanto, embora se consiga evitar o estouro de VRAM, o jogo não poderá funcionar porque não tem com o que fazê-lo; nesse caso, a única opção restante é mudar para um modelo inferior, voltar a colocar os parâmetros de IA em automático e reiniciar.

****************************************************************************************************
26/01/2026 04:00 - Estabilização do Core e Diagnóstico de Serviços - Beta_v044
****************************************************************************************************
- Novidades:
  Estabilização do Core e Diagnóstico de Serviços. Correções críticas na geração de personagens, UI (MainWindow) e otimização de busca semântica. Início de diagnóstico profundo do modo serviços.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs e Estabilidade - Beta_v043
****************************************************************************************************
- Descrição:
  Patch corretivo focado em diagnóstico e correção de loop de UI.

- Mudanças:
  Corrigido bug visual do diálogo de reinicialização
  Novo sistema de logs em %LOCALAPPDATA% para diagnóstico
  Otimizações de desempenho interno

****************************************************************************************************
24/01/2026 06:30 - Suporte Biografia Backend - Beta_v042
****************************************************************************************************
- Descrição:
  Exposição de dados de biografia para UI e ajustes de i18n.

<!-- source_hash: 5f218fc5 -->
