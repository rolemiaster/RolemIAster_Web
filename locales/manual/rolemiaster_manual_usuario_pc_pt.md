# 🐉 Bem-vindo ao RolemIAster!

Pegue seus dados (ou seu mouse) e prepare-se para viver aventuras onde o único limite é o quão retorcida for sua imaginação! **RolemIAster** é um RPG infinito impulsionado por Inteligência Artificial que permite que você seja o herói (ou o vilão) das suas próprias histórias.

---

## ⚠️ AVISO LEGAL (A parte chata, mas necessária)

**LEIA-ME OU SOFRERÁ A IRA DOS DADOS:**

1.  **🤖 IA Local Integrada:** O RolemIAster traz seu próprio cérebro digital. Funciona **sem internet** e sem que você tenha que mexer em nada estranho. É instalar e jogar!
2.  **☁️ Nuvem Opcional:** Se você prefere gastar dinheiro com IAs externas (OpenAI, Gemini...), o problema é seu e do seu cartão de crédito. Os custos são por sua conta.
3.  **🎲 Caos Generativo:** A IA inventa a história na hora. Se o narrador ficar louco e disser que estão chovendo vacas, não olhe para nós. O desenvolvedor não se responsabiliza pelas loucuras que o modelo gerar.
4.  **🏗️ Early Access:** Isto está em obras. Se encontrar um bug, não é uma falha, é uma "feature" surpresa! (Mande-nos feedback, por favor, isso nos ajuda muito).

---

## 🖥️ REQUISITOS DO SISTEMA E CÉREBROS DIGITAIS (IA)

O RolemIAster funciona com **Inteligência Artificial Local**. Isso significa que seu PC fará o trabalho pesado de pensar. Você não precisa de internet, mas sim de uma placa de vídeo que não seja da época dos dinossauros. (Nota: Se estiver frio no seu quarto, este jogo funciona como aquecedor grátis).

### ⚙️ Conceitos para não iniciados

A **VRAM (Memória de Vídeo)** é a gasolina da IA.
*   O RolemIAster precisa "lembrar" de **12.000 a 16.000 palavras (tokens)** para não perder o fio da meada da história.
*   Se sua GPU ficar sem memória, o jogo ficará mais lento que um caracol com asma.

---

### 📊 CATÁLOGO DE MODELOS (Escolha o seu veneno)

Gerencie suas IAs em **Configuração → IA Local Integrada → Gerenciar Modelos**.

#### 🏆 Família Qwen 2.5 (O crème de la crème)

| Modelo | Tamanho | VRAM Mínima | Tier | Veredito |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **O Estagiário.** Dá pro gasto, mas não peça para ele escrever Shakespeare. Às vezes se confunde. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **O ESCOLHIDO.** Equilibrado, esperto e rápido. É o modelo recomendado por padrão. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **O Catedrático.** Narrativa rica, profunda e diálogos muito naturais. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Nível Deus.** Você precisa de uma nave espacial (RTX 3090/4090) para rodar isso. |

---

### 🎮 GUIA DE ESCOLHA RÁPIDA

| Sua Placa | VRAM | Modelo Recomendado | Resultado |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Apertado, mas jogável (Contexto baixo) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Vai bem |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Voa |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ A experiência ideal |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luxo puro |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Qualidade máxima |

**💡 Dica Pro:** Deixe sempre uns **2GB de VRAM livres** para o sistema operacional, ou o Windows começará a chorar e a fechar coisas.

---

### 🚨 SOCORRO! MEU PC TÁ LENTO! (Problemas de VRAM)

Se o jogo demora mais para responder do que seu crush no WhatsApp, provavelmente você ficou sem VRAM.

**Sintomas de que você abusou da sorte:**
1.  **O modelo transborda para a RAM:** O PC usa a memória normal em vez da gráfica. Resultado: LENTIDÃO EXTREMA.
2.  **Transbordamento leve (1-2GB):** Demorará 30-60 segundos por resposta.
3.  **Transbordamento moderado (3-5GB):** 2-5 minutos. Pode ir buscar um café.
4.  **Transbordamento severo:** 10-30 minutos. Injogável.

#### 🛡️ Protocolo de Emergência
Se a coisa ficar feia, siga estes passos em ordem:

1.  **📉 Baixe a % de VRAM:** Vá em Configuração e baixe para **85%**. Reinicie e teste.
2.  **🧹 Limpeza:** Feche esse navegador com 40 abas abertas. Elas estão comendo sua memória.
3.  **🛑 O Limite dos 70%:** Nunca baixe de **70%** de VRAM alocada.
    *   *Por quê?* Porque a IA precisa de espaço para "pensar" (o cache KV). Se der menos de 70%, ela ficará em branco e dará erro.
4.  **🔙 Retirada Tática:** Se nada funcionar, mude para um modelo menor (passe do 7B para o 3B).

---

### ⚙️ CONFIGURAÇÃO AVANÇADA DO MODELO ("Nerdice Máxima")

> **MODO EXPERT:** Se você é um pro e quer acessar a configuração de modelos avançados (adicionar seus próprios modelos GGUF baixados do HuggingFace, mexer em camadas, etc.), deve iniciar o jogo com o comando: `--advanced`.

Para quem gosta de apertar botões em **Configuração → IA Local Integrada**:

| Opção | Função | Recomendação |
|--------|---------|---------------|
| **GPU Layers** | Quanto do modelo é carregado na placa | **-1** (Significa "TUDO". Não mexa a menos que saiba o que está fazendo) |
| **Contexto Máximo** | A "memória de curto prazo" da IA | **16384 - 32768** (Menos que isso e a IA terá amnésia) |
| **Temperatura** | Criatividade vs Loucura | **0.7 - 0.8** (Mais alto = mais louca; Mais baixo = mais robótica) |
| **RAG de Histórico** | Lembrar de coisas de muito tempo atrás | **Sim** (Imprescindível para campanhas longas) |
| **Cachear Embeddings** | Acelera a busca de memórias | **Sim** (Faz com que rode mais rápido) |

---

### 🔧 SOLUÇÃO DE PROBLEMAS (Troubleshooting)

| Falha | Solução |
|-------|---------|
| **IA Lenta / Lag** | Verifique se `GPU Layers` é -1. Feche o Chrome. Baixe o `Contexto Máximo`. |
| **Erro de Memória (OOM)** | Reduza o `Contexto Máximo` ou escolha um modelo menor (3B). |
| **A IA delira / Alucina** | Baixe a `Temperatura` para 0.6. Se continuar louca, reinicie a aplicação. |

---

### 🌐 PROVEDORES ALTERNATIVOS (Apenas Experts)

> **Nota:** A IA local que vem com o jogo sobra e basta. Isto é apenas para usuários avançados ou corajosos.

*   **Motores Locais Externos:**
    *   **Ollama / LM Studio:** Se já tem seus próprios modelos nerds, pode usá-los.
*   **APIs na Nuvem (Pagas):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requer internet e abrir a carteira.
    *   Configure em: **Configuração → IA → Adicionar Novo Provedor**.

---

### 🌍 COMO JOGAR? (O Multiverso e Você)

Ao abrir o jogo, você tem dois caminhos:

1.  **🆕 Nova Aventura**: Crie sua lenda do zero. O jogo pedirá **Nome, Ofício (Profissão), Descrição Física, Descrição Psicológica e o Histórico/Pretexto** da sua história. Além disso, você escolherá o **Nível de Dificuldade** e o **Tom de Humor** que guiarão a campanha.
2.  **💾 Continuar Jogo**: O RolemIAster **salva em tempo real**. Aqui não tem "carregar antes de morrer" nem volta atrás. Cada decisão, cada falha crítica e cada ferida fica gravada a fogo na história. É um **DESAFIO**: o que você fez, está feito. Viva com as consequências... ou morra com elas.

O RolemIAster não é uma partida isolada; é um **Multiverso Persistente**.
*   **Mundos Infinitos:** Crie seus próprios universos (**Fantasia Medieval** ou **Cyberpunk**) com seu próprio Lore.
*   **Personagens Infinitos:** Dentro de cada mundo, você pode ter todos os heróis que quiser.
*   **Linha Temporal Compartilhada:** Atenção! O que um personagem faz afeta o mundo dos outros. A IA está ciente dos seus outros heróis e os reconhecerá como habitantes do mundo.
*   **IA com "Sentidos" (Super RAG):** O sistema RAG (Retrieval-Augmented Generation) age como o "dedo-duro" da IA, dando memórias sobre o mundo, quem te acompanha, onde você está e o que acabou de acontecer para que a história seja 100% coerente.

### A Interface (Sua cabine de comando)

*   **Painel Esquerdo (VOCÊ):** Sua Ficha de Personagem. Vida, mana, habilidades e o quão bonito você é (Carisma).
*   **Painel Central (A HISTÓRIA):**
    *   **Em cima:** Onde o narrador conta o que acontece.
    *   **Embaixo:** Seus botões de decisão e a caixa de texto para escrever o que quiser fazer.
*   **Painel Direito (SUAS COISAS):** Inventário e equipamento. O paraíso do acumulador digital.

---

## 📜 REGRAS DO JOGO (Sim, tem regras)

O RolemIAster usa um sistema d100 (dado de cem faces) clássico e robusto.

### 1. Seus Atributos (O que te define)
A IA gera seus atributos baseando-se no contexto, profissão e descrição que você introduziu. Uma vez gerados, você tem **10 PONTOS EXTRAS** para distribuir como quiser.
*   **Custos Escalonados:** Subir um atributo até 14 custa 1 ponto. De 15 a 16 custa 2 pontos. A partir de 17 custa 3 pontos! Pense bem onde você coloca os músculos.

*   💪 **Força (FOR):** Sua potência física pura. Influencia o dano corpo a corpo e sua capacidade de carga.
*   ❤️ **Constituição (CON):** Sua resistência. Para aguentar golpes, doenças e venenos.
*   🐘 **Tamanho (TAM):** Sua envergadura. Grande e pesado, ou pequeno e escorregadio.
*   🏃 **Destreza (DES):** Agilidade, pontaria e não tropeçar nos próprios pés.
*   🧠 **Inteligência (INT):** Aprender, lembrar e resolver quebra-cabeças.
*   🔮 **Poder (POD):** Sua alma, sua sorte, força de vontade e sua reserva mágica.
*   😎 **Carisma (CAR):** Liderança, atratividade e capacidade de enganar (ou seduzir) as pessoas.

### 2. Matemática Rápida (Características Derivadas)
O motor calcula estes números automaticamente baseando-se nos seus atributos:

*   🩸 **Vida (PV):** `CON * 10`. Se chegar a 0... bom, você já sabe. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. O combustível para seus truques de mágica. Sem mana, sem truques. (Um mago sem mana é só um cara de roupão fazendo cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Sua energia para combater e se mover sem morrer tentando.
*   🧠 **Humanidade (HUM):** `(CON+POD) * 5`. (Só em Cyberpunk: Mede o quanto resta de humano em você antes que os cabos te deixem louco).
*   ⚔️ **Pontos de Ação (PA):** `(INT + DES) / 2`. Determina sua Iniciativa. Quem bate primeiro, bate duas vezes.

### 3. Suas Habilidades
Começam com um valor base (ex: Furtividade = DES + INT) e melhoram com o uso. É uma porcentagem (%).

### 4. Resolução de Ações (O Dado)
Quando você tenta fazer algo arriscado (escalar, mentir, atacar...), a IA pedirá uma rolagem. O jogo lança um **d100** invisível. **(Lembre-se: Os dados te odeiam. É pessoal).**

*   **Seu Objetivo:** Tirar um número **MENOR OU IGUAL** ao seu nível de habilidade.
    *   *Exemplo:* Você tem 45% em Escalar.
    *   Tira um 30: ✅ **Sucesso**. Sobe como um macaco.
    *   Tira um 80: ❌ **Falha**. Você se estatela no chão.
    *   **Crítico:** Tirar menos ou igual a **1/5 da sua habilidade** (ou um 01). Épico! Você faz um parkour extraordinário com cambalhota.
    *   **Falha Crítica:** Um **99 ou 100**. Os dados decidiram que hoje não é seu dia. Suas calças caem no meio do caminho e você cai de boca.

---

## 💡 DICAS PARA NÃO MORRER (RÁPIDO)

*   **✍️ Seja Descritivo:** Não escreva apenas "ataco". Escreva: *"Tento esquivar do machado rolando pelo chão e cravo minha adaga no tornozelo dele"*. A IA te recompensará.
*   **🧪 Experimente:** Você não está limitado aos botões. Escreva loucuras! A IA vai improvisar.
*   **🎭 Interprete (Roleplay):** Entre no papel. Leia as descrições e aja como seu personagem agiria, não como você agiria de pijama.

---

## ⚔️ O COMBATE (Às armas!)

Quando as palavras falham, chega a hora da porrada. O combate é **tático** e funciona por **Ticks** (tempo).

### 🕹️ Como funciona:
*   **Ticks:** Cada ação custa tempo. Armas pesadas são lentas (gastam muitos ticks). Adagas são rápidas.
*   **Sua Velocidade:** Depende dos seus Pontos de Ação (PA).

### Ações Básicas:
*   **🗡️ Atacar:** Bata com o que tiver desenhado.
*   **🛡️ Bloquear:** Você fica na defensiva. Reduz dano mas gasta Stamina.
*   **🏃 Fugir:** De covardes (ou de sábios que querem viver).
*   **🏳️ Render-se:** Se vir que não vai ganhar, pode suplicar piedade.
*   **✨ Magia / Cyberware:** Fogo, raios laser, hacks...

### 💬 Ações por Texto Livre (NOVO!)
Não gosta dos botões? Escreva o que quiser fazer como se falasse com um Mestre de carne e osso!
*   **Exemplos:** *"Lançar bola de fogo no goblin"*, *"Sacar minha espada rúnica"*, *"Usar poção em mim"*.
*   **Diretor de Cena:** O combate agora ganha vida. A IA gera eventos ambientais e reações que enriquecem a narrativa: vigas que caem, inimigos que recuam, tochas que tombam. O campo de batalha não é mais estático!
*   **Se a IA não entender:** Ela pedirá para reformular. Seu turno NÃO é perdido!
*   **⚠️ Limitação:** Mover objetos entre slots (equipar da mochila, carregar munição) é feito com **Drag & Drop** na interface, não por texto.

### ⚠️ REGRA DE OURO DE SOBREVIVÊNCIA
**SAQUE A ARMA ANTES DE LUTAR!**
Sacar a arma no meio do combate consome tempo (Ticks). Se te pegam com a espada na bainha, vão acabar com a sua raça enquanto você tenta sacá-la desajeitadamente. OU PIOR AINDA, SE VOCÊ ANDA COM SUAS ARMAS NA MOCHILA EM VEZ DE NO SLOT DE EQUIPAMENTO (Dá licença um segundo, tenho que tirar o montante da mochila, sei que estava por aqui... em algum lugar...) 🤦‍♂️
👉 Clique na **etiqueta da arma equipada** (painel direito) para sacá-la. Ela ficará verde.

Tentar mover armas em combate consome tempo (Ticks) e pode resultar em um ataque surpresa, além de ser muito provável que você perca o turno, que erre pelo nervosismo do machado que se aproxima da sua testa ou que ela caia no chão. (Talvez não tenha sido uma boa ideia criar um personagem com TDAH).

---

## ✨ MAGIA E CIBERNÉTICA

Dependendo de se o seu mundo é de "Fantasia Medieval" ou "Cyberpunk":

### 🧙‍♂️ Fantasia: Encantamentos
Você é feiticeiro? Pode encantar seu equipamento.
1.  **Aprenda:** Você precisa do feitiço no seu grimório.
2.  **Lance (Drag & Drop):** Arraste o feitiço da sua lista sobre o objeto no seu inventário.
3.  **Custo:** Manter um encantamento ativo **gasta Mana por turno**.
4.  **Aviso:** Se você ficar sem mana no meio do combate, a espada de fogo volta a ser um pedaço de ferro enferrujado.

### 🦾 Cyberpunk: Implantes
Quer olhos com zoom ou braços de gorila?
1.  Procure um **Tecnocirurgião** (NPC de serviço).
2.  Pague os créditos (nada é de graça no futuro).
3.  **Custo de Humanidade:** Cada implante te tira um pedaço da alma (**Humanidade**).
    *   Se colocar muitos, você se transformará em um **Cyberpsicopata** (uma torradeira assassina com pernas) e perderá o controle do seu personagem.

---

## 🛒 LOJAS E SERVIÇOS (SIS)

Fale com NPCs para negociar.
*   **IA Sugere, Você Manda:** Quando falar com um mercador ou curandeiro, a IA sugerirá seus serviços (reparar, vender, curar), mas aparecerá um botão de **"Ver Serviços"** para que você decida quando entrar no modo transacional.
*   **Pechincha:** Sua habilidade de **Comércio** (baseada em Carisma) decide os preços. Se você for feio ou antipático, vão te passar a perna.
*   **Vender:** Clique com o **Botão Direito** em um objeto do seu inventário para vendê-lo ao lojista ou arraste-o sobre ele.

---

## 🎒 GESTÃO DE INVENTÁRIO (Tetris)

*   **Peso:** Você tem um limite de carga (Força + Tamanho). Se levar muita tralha, andará lento e penalizado (O acúmulo não é seu amigo).
*   **Painéis:**
    *   **Equipamento:** O que você está vestindo/usando.
    *   **Cinto:** Acesso rápido em combate (gasta menos tempo usar poções daqui).
    *   **Mochila:** O fundo do saco.
*   **Uso Fluido:** Arraste uma poção ou comida diretamente sobre **seu rosto** (o retrato) para consumi-la instantaneamente. Também pode usar o menu contextual (clique direito -> Usar).

---

## 🛠️ AJUSTES FINAIS

No menu de **Configuração** você pode mexer em tudo:
*   **🌍 Idioma:** A IA traduzirá todo o jogo e as respostas na hora. Modo poliglota ativado.
*   **👁️ Aparência:** Tamanho da fonte e cores, para não ficar cego. Bordas neon e sombras suavizadas para uma imersão total.
*   **🧠 Ajustes IA:** Mude de modelo, temperatura, etc. (Lembre-se do que vimos no início do manual sobre a flag `--advanced` se você é daqueles que querem mexer em tudo).

---

## 🎭 DIFICULDADE E HUMOR (Personalize seu sofrimento)

Antes de começar, lembre-se que a IA não apenas narra, mas também **ajusta o mundo** segundo suas preferências. Estes parâmetros são escolhidos ao criar o mundo e são permanentes para o dito mundo:

*   **🎮 Dificuldade (Gerenciada por IA):** Não é um simples multiplicador de dano. O jogo diz à IA: "Ei, a dificuldade é esta, aja de acordo".
    *   **Fácil:** Você nunca morrerá (ou será quase impossível), as situações são mais simples, os preços são mais baratos e os inimigos são mais desajeitados. A IA raciocinará cada cena para que seu caminho seja um mar de rosas.
    *   **Normal:** O equilíbrio padrão.
    *   **Desafio:** A IA será implacável, os preços proibitivos e qualquer erro pode ser o último.

*   **🃏 Tom de Humor:** Define como a IA fala com você e que tipo de eventos ocorrem. Embora cada modelo tenha sua forma de interpretar o conceito "humor", a IA tentará se adaptar ao que você escolher... ou não:
    *   **Sério:** Uma narrativa épica, sombria e formal.
    *   **Sarcástico:** A IA rirá das suas falhas, te lançará indiretas constantes e usará um tom irônico.
    *   **Delirante:** Prepare-se para o absurdo. Vacas voadoras, situações surrealistas e caos total gerenciado pela lógica mais retorcida da IA.

---

## 🚧 Aviso: Early Access

O RolemIAster está em **desenvolvimento ativo**, cozinhando em fogo baixo.
*   Você pode encontrar bugs (ou "características inesperadas").
*   Adiciono coisas novas toda semana.
*   Seu feedback vale ouro! Diga-me o que você gosta e o que você gosta muito. (Se não gostar de algo, diga também, mas com carinho).

Agora vá, role iniciativa e crie sua lenda!

<!-- source_hash: f3494f05 -->