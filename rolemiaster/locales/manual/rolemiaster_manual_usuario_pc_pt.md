# 🐉 Bem-vindo ao RolemIAster!

Agarre os seus dados (ou o seu rato) e prepare-se para viver aventuras onde o único limite é quão retorcida é a sua imaginação! **RolemIAster** é um jogo de RPG infinito impulsionado por Inteligência Artificial que lhe permite ser o herói (ou o vilão) das suas próprias histórias.

---

## ⚠️ AVISO LEGAL (A parte aborrecida mas necessária)

**LEIA-ME OU SOFRERÁ A IRA DOS DADOS:**

1.  **🤖 IA Local Integrada:** RolemIAster traz o seu próprio cérebro digital. Funciona **sem internet** e sem que tenha de tocar em nada estranho. Instalar e jogar!
2.  **☁️ Nuvem Opcional:** Se preferir gastar os dinheiros em IAs externas (OpenAI, Gemini...), allá você com o seu cartão de crédito. Os custos são da sua conta.
3.  **🎲 Caos Generativo:** A IA inventa a história sobre a marcha. Se o narrador ficar louco e disser que chovem vacas, não olhe para nós. O desenvolvedor não se responsabiliza pelas loucuras que o modelo gerar.
4.  **🏗️ Early Access:** Isto está em obras. Se encontrar um bug, não é uma falha, é uma "feature" surpresa! (Envie-nos feedback, por favor, que ajuda imenso).

---

## 🖥️ REQUISITOS DO SISTEMA E CÉREBROS DIGITAIS (IA)

RolemIAster funciona com **Inteligência Artificial Local**. Isso significa que o seu PC fará o trabalho pesado de pensar. Não precisa de internet, mas precisa de uma placa gráfica que não seja da época dos dinossauros. (Nota: Se estiver frio no seu quarto, este jogo funciona como aquecimento grátis).

### ⚙️ Conceitos para não iniciados

A **VRAM (Memória de Vídeo)** é a gasolina da IA.
*   Graças ao **TurboQuant**, RolemIAster consegue agora lembrar-se de **mais de 100.000 palavras (tokens)** — quase o triplo do que antes — sem colapsar a sua gráfica.
*   Se a sua GPU ficar sem memória, o jogo ficará mais lento que uma lesma com asma.

---

### 📊 CATÁLOGO DE MODELOS (Escolha o seu veneno)

Gerencie as suas IAs em **Configurações → IA Local Integrada → Gerir Modelos**.

#### 🏆 Família Qwen 3.5 — Treinados especificamente para RolemIAster

Estes modelos foram treinados com **Fine-Tuning Supervisionado (SFT)** para dominar as regras narrativas do jogo. Não são modelos genéricos: conhecem o contrato JSON do RolemIAster, os NPCs, o inventário e o combate de memória.

| Modelo | Tamanho | VRAM Mínima | Tier | Veredicto |
|--------|---------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **O Veloz.** O mais rápido de todos. Ideal para GPUs básicas ou para jogar sem GPU dedicada. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **O EQUILIBRADO.** Velocidade e qualidade ótimas. Modelo padrão recomendado para a maioria dos jogadores. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **O Narrador.** Narrativa rica e coerência superior. Para quem tem uma RTX 3070 ou melhor. |

---

### 🎮 GUIA DE ESCOLHA RÁPIDA

| A Sua Gráfica | VRAM | Modelo Recomendado | Resultado |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Sem GPU | 4GB | **Qwen3.5-2B** | 🆗 Justo mas jogável, muito justo... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Boa experiência |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Rápido e preciso |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 A experiência ideal |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Máxima qualidade, respostas ultrarrápidas |

**💡 Pro Tip:** Deixe sempre uns **2GB de VRAM livres** para o sistema operativo, ou o Windows começará a chorar e a fechar coisas.

---

### 🚨 SOCORRO! O MEU PC ESTÁ LENTO! (Problemas de VRAM)

Se o jogo demora mais a responder que o seu crush no WhatsApp, provavelmente ficou sem VRAM.

**Sintomas de que se passou de esperto:**
1.  **O modelo vira-se para a RAM:** O PC usa a memória normal em vez da gráfica. Resultado: LENTIDÃO EXTREMA.
2.  **Transbordamento leve (1-2GB):** Demorará 30-60 segundos por resposta.
3.  **Transbordamento moderado (3-5GB):** 2-5 minutos. Pode ir buscar um café.
4.  **Transbordamento severo:** 10-30 minutos. Injogável.

#### 🛡️ Protocolo de Emergência
Se a coisa correr mal, siga estes passos em ordem:

1.  **📉 Baixe o % de VRAM:** Vá a Configuração e baixe para **85%**. Reinicie e teste.
2.  **🧹 Limpeza:** Feche aquele navegador com 40 abas abertas. Estão a comer a sua memória.
3.  **🛑 O Limite dos 70%:** Nunca baixe de **70%** de VRAM alocada.
    *   *Porquê?* Porque a IA precisa de espaço para "pensar" (a cache KV). Se lhe der menos de 70%, ela ficará em branco e dará erro.
4.  **🔙 Retirada Táctica:** Se nada funcionar, desça para um modelo mais pequeno (passe do 9B para o 4B, ou do 4B para o 2B).

---

### ⚙️ CONFIGURAÇÃO AVANÇADA DO MODELO ("Frikagem Máxima")

> **MODO PERITO:** Se é um pro e quer aceder à configuração de modelos avançados (adicionar os seus próprios modelos GGUF descarregados do HuggingFace, mexer em camadas, etc.), deve iniciar o jogo com o comando: `--advanced`.

Para quem gosta de mexer em botões em **Configurações → IA Local Integrada**:

| Opção | Função | Recomendação |
|--------|---------|---------------|
| **Camadas GPU** | Quanto do modelo é carregado na gráfica | **-1** (Significa "TUDO". Não mexa, a não ser que saiba o que está a fazer) |
| **Contexto Máximo** | A "memória a curto prazo" da IA | **16384 - 32768** (Menos disto e a IA terá amnésia) |
| **Temperatura** | Criatividade vs Loucura | **0.7 - 0.8** (Mais alto = mais louco; Mais baixo = mais robótico) |
| **RAG de Histórico** | Lembrar coisas de há muito tempo | **Sim** (Imprescindível para campanhas longas) |
| **Cachear Embeddings** | Acelera a busca de memórias | **Sim** (Faz com que vá mais rápido) |

---

### 🔧 SOLUÇÃO DE PROBLEMAS (Troubleshooting)

| Falha | Correção |
|-------|---------|
| **IA Lenta / Lag** | Verifique se `GPU Layers` é -1. Feche o Chrome. Baixe o `Contexto Máximo`. |
| **Erro de Memória (OOM)** | Reduza o `Contexto Máximo` ou escolha um modelo mais pequeno (3B). |
| **A IA delira / Alucina** | Baixe a `Temperatura` para 0.6. Se continuar louca, reinicie a aplicação. |

---

### 🌐 FORNECEDORES ALTERNATIVOS (Só para Peritos)

> **Nota:** A IA local que o jogo traz é mais do que suficiente. Isto é apenas para utilizadores avançados ou corajosos.

*   **Motores Locais Externos:**
    *   **Ollama / LM Studio:** Se já tem os seus próprios modelos "nerds", pode usá-los.
*   **APIs na Nuvem (Pagos):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requer internet e gastar dinheiro.
    *   Configure em: **Configurações → IA → Adicionar Novo Fornecedor**.

---

### 🌍 COMO JOGAR? (O Multiverso e Você)

Ao abrir o jogo, tem dois caminhos:

1.  **🆕 Nova Aventura**: Crie a sua lenda a partir do zero. O jogo pedirá **Nome, Profissão, Descrição Física, Descrição Psicológica e o Background/Pretexto** da sua história. Além disso, escolherá o **Nível de Dificuldade** e o **Tom de Humor** que irão guiar a campanha.
2.  **💾 Continuar Jogo**: RolemIAster **guarda em tempo real**. Aqui não há "carregar antes de morrer" nem volta atrás. Cada decisão, cada gafe e cada ferida ficam gravadas a fogo na história. É um **DESAFIO**: o que fizer, feito está. Viva com as consequências... ou morra com elas.

RolemIAster não é um jogo isolado; é um **Multiverso Persistente**.
*   **Mundos Infinitos:** Crie os seus próprios universos (**Fantasia Medieval** ou **Cyberpunk**) com o seu próprio Lore.
*   **Personagens Infinitos:** Dentro de cada mundo, pode ter todos os heróis que quiser.
*   **Linha Temporal Partilhada:** Atenção! O que um personagem faz afeta o mundo dos outros. A IA está ciente dos seus outros heróis e reconhecê-los-á como habitantes do mundo.
*   **IA com "Sentidos" (Super RAG):** O sistema RAG (Retrieval-Augmented Generation) atua como o "informador" da IA, dando-lhe memórias sobre o mundo, quem o acompanha, onde está e o que acabou de acontecer para que a história seja 100% coerente.

### A Interface (A sua cabine de comando)

*   **Painel Esquerdo (VOCÊ):** A sua Ficha de Personagem. Vida, mana, habilidades e quão bonito é (Carisma).
*   **Painel Central (A HISTÓRIA):**
    *   **Em cima:** Onde o narrador conta o que acontece.
    *   **Em baixo:** Os seus botões de decisão e a caixa de texto para escrever o que quer fazer.
*   **Painel Direito (AS SUAS COISAS):** Inventário e equipamento. O paraíso do Diógenes digital.

---

## 📜 REGRAS DO JOGO (Sim, há regras)

RolemIAster usa um sistema d100 (dado de cem faces) clássico e robusto.

### 1. Os Seus Atributos (O que o define)
A IA gera os seus atributos baseando-se no contexto, profissão e descrição que introduziu. Uma vez gerados, tem **10 PONTOS EXTRA** para distribuir à sua vontade.
*   **Custos Escalonados:** Aumentar um atributo até 14 custa 1 ponto. De 15 a 16 custa 2 pontos. A partir de 17 custa 3 pontos! Pense bem onde põe o músculo.

*   💪 **Força (FOR):** A sua potência física pura. Influencia o dano corpo a corpo e a sua capacidade de carga.
*   ❤️ **Constituição (CON):** A sua resistência. Para aguentar golpes, doenças e venenos.
*   🐘 **Tamanho (TAM):** A sua envergadura. Grande e pesado, ou pequeno e esguio.
*   🏃 **Destreza (DES):** Agilidade, pontaria e não tropeçar nos próprios pés.
*   🧠 **Inteligência (INT):** Aprender, lembrar e resolver puzzles.
*   🔮 **Poder (POD):** A sua alma, a sua sorte, força de vontade e a sua reserva mágica.
*   😎 **Carisma (CAR):** Liderança, atratividade e capacidade de enganar (ou seduzir) as pessoas.

### 2. Matemáticas Rápidas (Características Derivadas)
O motor calcula estes números automaticamente com base nos seus atributos:

*   🩸 **Vida (PV):** `CON * 10`. Se chegar a 0... bem, já sabe. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. O combustível para os seus truques de magia. Sem mana, não há truques. (Um mago sem mana é só um tipo de bata a fazer cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. A sua energia para combater e mover-se sem morrer no processo.
*   🧠 **Humanidade (HUM):** `(CON+POD) * 5`. (Só em Cyberpunk: Mede quanto lhe resta de humano antes que os cabos o deixem louco).
*   ⚔️ **Pontos de Ação (PA):** `(INT + DES) / 2`. Determina a sua Iniciativa. Quem bate primeiro, bate duas vezes.

### 3. As Suas Habilidades
Começam com um valor base (ex: Furtividade = DES + INT) e melhoram ao usá-las. É uma percentagem (%).

### 4. Resolução de Ações (O Dado)
Quando tenta fazer algo arriscado (escalar, mentir, atacar...), a IA pedirá uma rolagem. O jogo lança um **d100** invisível. **(Lembre-se: Os dados odeiam-no. É pessoal).**

*   **O Seu Objetivo:** Obter um número **MENOR OU IGUAL** ao seu nível de habilidade.
    *   *Exemplo:* Tem 45% em Trepar.
    *   Obtém um 30: ✅ **Sucesso**. Sobe como um macaco.
    *   Obtém um 80: ❌ **Falha**. Dá um encontrão.
    *   **Crítico:** Obter menos ou igual a **1/5 da sua habilidade** (ou um 01). Épico! Faz um parkour extraordinário com mortal.
    *   **Gafe:** Um **99 ou 100**. Os dados decidiram que hoje não é o seu dia. Cai-lhe as calças a meio do caminho e cai de cara.

---

## 💡 DICAS PARA NÃO MORRER (RÁPIDO)

*   **✍️ Seja Descritivo:** Não escreva apenas "ataco". Escreva: *"Tento esquivar a sua machadada rolando pelo chão e cravo-lhe a minha adaga no tornozelo"*. A IA irá recompensá-lo.
*   **🧪 Experimente:** Não está limitado aos botões. Escreva loucuras! A IA improvisará.
*   **🎭 Interprete:** Entre no papel. Leia as descrições e aja como o seu personagem agiria, não como você faria de pijama.

---

## ⚔️ O COMBATE (Às armas!)

Quando as palavras falham, chega a hora das pancadas. O combate é **táctico** e funciona por **Ticks** (tempo).

### 🕹️ Como funciona:
*   **Ticks:** Cada ação custa tempo. Armas pesadas são lentas (gastam muitos ticks). Adagas são rápidas.
*   **A Sua Velocidade:** Depende dos seus Pontos de Ação (PA).

### Ações Básicas:
*   **🗡️ Atacar:** Bata com o que tem à mão.
*   **🛡️ Bloquear:** Põe-se na defensiva. Reduz o dano mas gasta Stamina.
*   **🏃 Fugir:** De covardes (ou de sábios que querem viver).
*   **🏳️ Render-se:** Se vê que não vai ganhar, pode pedir piedade.
*   **✨ Magia / Cyberware:** Fogo, raios laser, hacks...

### 💬 Ações por Texto Livre (NOVO!)
Não gosta dos botões? Escreva o que quer fazer como se falasse com um Master de carne e osso!
*   **Exemplos:** *"Lançar bola de fogo ao goblin"*, *"Sacar a minha espada rúnica"*, *"Usar poção em mim"*.
*   **Diretor de Cena:** O combate agora ganha vida. A IA gera eventos ambientais e reações que enriquecem a narrativa: vigas que caem, inimigos que recuam, tochas que caem. O campo de batalha já não é estático!
*   **Se a IA não entender:** Pedirá para reformular. O seu turno NÃO se perde!
*   **⚠️ Limitação:** Mover objetos entre slots (equipar da mochila, carregar munição) faz-se com **Drag & Drop** na interface, não por texto.

### ⚠️ REGRA DE OURO DE SOBREVIVÊNCIA
**DESENFUNDE ANTES DE LUTAR!**
Sacar a arma no meio do combate consome tempo (Ticks). Se o apanharem com a espada na bainha, vão dar-lhe até no cartão de identidade enquanto tenta tirá-la desajeitadamente. OU PIOR AINDA!, SE FOR COM AS SUAS ARMAS NA MOCHILA EM VEZ DE NO SEU SLOT DE EQUIPAMENTO (Desculpe um segundo, tenho de tirar o espadão da mochila, sei que o tinha por aqui... em algum lado...) 🤦‍♂️
👉 Clique na etiqueta da arma equipada (painel direito) para a desembainhar. Ficará iluminada a verde.

Tentar mover armas em combate consome tempo (Ticks) e pode resultar num ataque surpresa, além de ser muito provável que perca o turno, que falhe pelos nervos do machado que se aproxima da sua testa ou que lhe caia ao chão. (Talvez não tenha sido boa ideia criar um personagem com TDAH)

---

## ✨ MAGIA E CIBERNÉTICA

Dependendo se o seu mundo é de "Fantasia Medieval" ou "Cyberpunk":

### 🧙‍♂️ Fantasia: Encantamentos
É feiticeiro? Pode encantar o seu equipamento.
1.  **Aprender:** Precisa do feitiço no seu grimório.
2.  **Lançar (Drag & Drop):** Arraste o feitiço da sua lista sobre o objeto no seu inventário.
3.  **Custo:** Manter um encantamento ativo **gasta Mana por turno**.
4.  **Aviso:** Se ficar sem mana a meio do combate, a espada de fogo volta a ser um pedaço de ferro enferrujado.

### 🦾 Cyberpunk: Implantes
Quer olhos com zoom ou braços de gorila?
1.  Procure um **Tecnocirurgião** (NPC de serviço).
2.  Pague os créditos (nada é grátis no futuro).
3.  **Custo de Humanidade:** Cada implante tira-lhe um pedaço da alma (**Humanidade**).
    *   Se puser demasiados, tornar-se-á uma **Cyberpsicose** (uma torradeira com pernas assassina) e perderá o controlo do seu personagem.

---

## 🛒 LOJAS E SERVIÇOS (SIS)

Fale com NPCs para comerciar.
*   **IA Sugere, Você Manda:** Quando falar com um mercador ou curandeiro, a IA sugerirá os seus serviços (reparar, vender, curar), mas aparecerá um botão de **"Ver Serviços"** para que você decida quando entrar no modo transacional.
*   **Regateio:** A sua habilidade de **Comércio** (baseada em Carisma) decide os preços. Se for feio ou antipático, vai ser enganado.
*   **Vender:** Clique com o **Botão Direito** num objeto do seu inventário para o vender ao lojista ou arraste-o sobre ele.

---

## 🎒 GESTÃO DE INVENTÁRIO (Tetris)

*   **Peso:** Tem um limite de carga (Força + Tamanho). Se levar demasiado sucata, irá lento e penalizado (Diógenes não é o seu amigo).
*   **Painéis:**
    *   **Equipamento:** O que está a usar.
    *   **Cinto:** Acesso rápido em combate (gasta menos tempo usar poções daqui).
    *   **Mochila:** O fundo do saco.
*   **Uso Fluido:** Arraste uma poção ou comida diretamente para **o seu rosto** (o retrato) para a consumir instantaneamente. Também pode usar o menu contextual (clique direito -> Usar).

---

## 🛠️ AJUSTES FINAIS

No menu de **Configurações** pode mexer em tudo:
*   **🌍 Idioma:** A IA irá traduzir todo o jogo e as respostas na hora. Modo poliglota ativado.
*   **👁️ Aparência:** Tamanho da letra e cores, para não ficar cego. Bordas néon e sombras suavizadas para uma imersão total.
*   **🧠 Ajustes IA:** Mude de modelo, temperatura, etc. (Lembre-se do que vimos no início do manual sobre o flag `--advanced` se for daqueles que querem mexer em tudo).

---

## 🎭 DIFICULDADE E HUMOR (Personalize o seu sofrimento)

Antes de começar, lembre-se que a IA não só narra, como também **ajusta o mundo** de acordo com as suas preferências. Estes parâmetros são escolhidos ao criar o mundo e são permanentes para esse mundo:

*   **🎮 Dificuldade (Gerida pela IA):** Não é um simples multiplicador de dano. O jogo diz à IA: "Ouve, a dificuldade é esta, age em conformidade".
    *   **Fácil:** Nunca morrerá (ou será quase impossível), as situações são mais simples, os preços são mais baratos e os inimigos são mais desajeitados. A IA raciocinará cada cena para que o seu caminho seja de rosas.
    *   **Normal:** O equilíbrio padrão.
    *   **Desafio:** A IA será implacável, os preços proibitivos e qualquer erro pode ser o último.

*   **🃏 Tom de Humor:** Define como a IA lhe fala e que tipo de eventos ocorrem. Embora cada modelo tenha a sua forma de interpretar o conceito "humor", a IA tentará adaptar-se ao que escolher... ou não:
    *   **Sério:** Uma narrativa épica, sombria e formal.
    *   **Sarcástico:** A IA rirá das suas falhas, atirar-lhe-á farpas constantes e usará um tom irónico.
    *   **Delirante:** Prepare-se para o absurdo. Vacas voadoras, situações surrealistas e caos total gerido pela lógica mais retorcida da IA.

---

## 🚧 Aviso: Early Access

RolemIAster está em **desenvolvimento ativo**, a cozinhar a fogo lento.
*   Pode encontrar bugs (ou "características inesperadas").
*   Adiciono coisas novas todas as semanas.
*   O seu feedback vale ouro! Diga-me o que gosta e o que gosta muito. (Se não gostar de algo, diga-me também, mas com carinho).

Agora vá, lance iniciativa e crie a sua lenda!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->