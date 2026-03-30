# 🐉 Bem-vindo ao RolemIAster!

Pegue seus dados (ou seu mouse) e prepare-se para viver aventuras onde o único limite é o quão distorcida sua imaginação consegue ser! **RolemIAster** é um RPG infinito impulsionado por Inteligência Artificial que permite que você seja o herói (ou o vilão) de suas próprias histórias.

---

## ⚠️ AVISO LEGAL (A parte chata, mas necessária)

**LEIA ISSO OU SOFRERÁ A IRA DOS DADOS:**

1.  **🤖 IA Local Integrada:** RolemIAster traz seu próprio cérebro digital. Funciona **sem internet** e sem que você precise mexer em nada complicado. Instale e jogue!
2.  **☁️ Nuvem Opcional:** Se você prefere gastar dinheiro em IAs externas (OpenAI, Gemini...), problema seu com seu cartão de crédito. Custos são por sua conta.
3.  **🎲 Caos Generativo:** A IA inventa a história na hora. Se o narrador enlouquecer e disser que está chovendo vacas, não olhe para nós. O desenvolvedor não se responsabiliza pelas loucuras que o modelo gerar.
4.  **🏗️ Acesso Antecipado:** Isto está em construção. Se você encontrar um bug, não é um defeito, é uma "feature" surpresa! (Nos mande feedback, por favor, isso nos ajuda muito).

---

## 🖥️ REQUISITOS DO SISTEMA E CÉREBROS DIGITAIS (IA)

RolemIAster funciona com **Inteligência Artificial Local**. Isso significa que seu PC fará o trabalho pesado de pensar. Você não precisa de internet, mas sim de uma placa de vídeo que não seja da época dos dinossauros. (Nota: Se estiver frio no seu quarto, este jogo funciona como aquecimento grátis).

### ⚙️ Conceitos para não iniciados

A **VRAM (Memória de Vídeo)** é a gasolina da IA.
*   RolemIAster precisa "lembrar" de **12.000 a 16.000 palavras (tokens)** para não perder o fio da meada da história.
*   Se sua GPU ficar sem memória, o jogo ficará mais lento que uma lesma com asma.

---

### 📊 CATÁLOGO DE MODELOS (Escolha seu veneno)

Gerencie suas IAs em **Configurações → IA Local Integrada → Gerenciar Modelos**.

#### 🏆 Família Qwen 3.5 — Treinados especificamente para RolemIAster

Estes modelos foram treinados com **Fine-Tuning Supervisionado (SFT)** para dominar as regras narrativas do jogo. Não são modelos genéricos: eles conhecem o contrato JSON do RolemIAster, os NPCs, o inventário e o combate de cor.

| Modelo        | Tamanho | VRAM Mínima | Tier | Veredito                                                                          |
|---------------|---------|-------------|------|-----------------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB  | **3GB**     | B    | ⚡ **O Veloz.** O mais rápido de todos. Ideal para GPUs básicas ou para jogar sem GPU dedicada. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**     | A    | ✅ **O EQUILIBRADO.** Velocidade e qualidade ótimas. Modelo padrão recomendado para a maioria dos jogadores. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**     | S    | 🌟 **O Narrador.** Narrativa rica e coerência superior. Para quem tem uma RTX 3070 ou melhor.    |

---

### 🎮 GUIA DE ESCOLHA RÁPIDA

| Sua Placa de Vídeo | VRAM | Modelo Recomendado | Resultado             |
|--------------------|------|--------------------|-----------------------|
| GTX 1050/1060 / Sem GPU | 2-4GB | **Qwen3.5-2B** | 🆗 Justo, mas jogável |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Experiência muito boa |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Rápido e preciso   |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 A experiência ideal |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Qualidade máxima, respostas ultrarrápidas |

**💡 Dica Pro:** Sempre deixe uns **2GB de VRAM livres** para o sistema operacional, ou o Windows começará a chorar e fechar coisas.

---

### 🚨 SOCORRO! MEU PC ESTÁ LENTO! (Problemas de VRAM)

Se o jogo demora mais para responder que seu crush no WhatsApp, provavelmente você ficou sem VRAM.

**Sintomas de que você passou dos limites:**
1.  **O modelo descarrega para a RAM:** O PC usa a memória normal em vez da gráfica. Resultado: LENTIDÃO EXTREMA.
2.  **Transbordamento leve (1-2GB):** Demorará 30-60 segundos por resposta.
3.  **Transbordamento moderado (3-5GB):** 2-5 minutos. Você pode ir tomar um café.
4.  **Transbordamento severo:** 10-30 minutos. Injogável.

#### 🛡️ Protocolo de Emergência
Se a coisa apertar, siga estes passos em ordem:

1.  **📉 Reduza o % de VRAM:** Vá em Configurações e reduza para **85%**. Reinicie e teste.
2.  **🧹 Limpeza:** Feche aquele navegador com 40 abas abertas. Elas estão comendo sua memória.
3.  **🛑 O Limite de 70%:** Nunca reduza abaixo de **70%** da VRAM alocada.
    *   *Por quê?* Porque a IA precisa de espaço para "pensar" (o cache KV). Se você der menos de 70%, ela ficará em branco e dará erro.
4.  **🔙 Retirada Tática:** Se nada funcionar, baixe para um modelo menor (vá do 9B para o 4B, ou do 4B para o 2B).

---

### ⚙️ CONFIGURAÇÃO AVANÇADA DO MODELO ("Friekagem Máxima")

> **MODO EXPERTO:** Se você é um profissional e quer acessar a configuração de modelos avançados (adicionar seus próprios modelos GGUF baixados do HuggingFace, mexer nas camadas, etc.), você deve iniciar o jogo com o comando: `--advanced`.

Para quem gosta de mexer nos botões em **Configurações → IA Local Integrada**:

| Opção           | Função                                         | Recomendação              |
|-----------------|------------------------------------------------|---------------------------|
| **Camadas da GPU** | Quanto do modelo é carregado na gráfica        | **-1** (Significa "TUDO". Não mexa a menos que saiba o que está fazendo) |
| **Contexto Máximo** | A "memória de curto prazo" da IA              | **16384 - 32768** (Menos que isso e a IA terá amnésia) |
| **Temperatura** | Criatividade vs Loucura                       | **0.7 - 0.8** (Mais alto = mais louco; Mais baixo = mais robótico) |
| **RAG do Histórico** | Lembrar coisas de muito tempo atrás          | **Sim** (Essencial para campanhas longas) |
| **Cache de Embeddings** | Acelera a busca por memórias            | **Sim** (Faz com que rode mais rápido) |

---

### 🔧 SOLUÇÃO DE PROBLEMAS (Troubleshooting)

| Problema           | Solução                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------|
| **IA Lenta / Lag** | Verifique se `GPU Layers` é -1. Feche o Chrome. Reduza o `Contexto Máximo`.               |
| **Erro de Memória (OOM)** | Reduza o `Contexto Máximo` ou escolha um modelo menor (3B).                                      |
| **A IA delira / Alucina** | Reduza a `Temperatura` para 0.6. Se continuar louca, reinicie o aplicativo.                 |

---

### 🌐 FORNECEDORES ALTERNATIVOS (Apenas para Experts)

> **Nota:** A IA local que o jogo traz é mais que suficiente. Isso é apenas para usuários avançados ou corajosos.

*   **Motores Locais Externos:**
    *   **Ollama / LM Studio:** Se você já tem seus próprios modelos "nerds", pode usá-los.
*   **APIs na Nuvem (Pagamento):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requer internet e gastar dinheiro.
    *   Configure em: **Configurações → IA → Adicionar Novo Fornecedor**.

---

### 🌍 COMO JOGAR? (O Multiverso e Você)

Ao abrir o jogo, você tem dois caminhos:

1.  **🆕 Nova Aventura**: Crie sua lenda do zero. O jogo pedirá **Nome, Ofício (Profissão), Descrição Física, Descrição Psicológica e o Background/Pretexto** da sua história. Além disso, você escolherá o **Nível de Dificuldade** e o **Tom de Humor** que guiarão a campanha.
2.  **💾 Continuar Partida**: RolemIAster **salva em tempo real**. Aqui não existe "carregar antes de morrer" nem volta atrás. Cada decisão, cada gafe e cada ferida ficam gravadas a ferro e fogo na história. É um **DESAFIO**: o que você fizer, feito está. Viva com as consequências... ou morra com elas.

RolemIAster não é uma partida isolada; é um **Multiverso Persistente**.
*   **Mundos Infinitos:** Crie seus próprios universos (**Fantasia Medieval** ou **Cyberpunk**) com seu próprio Lore.
*   **Personagens Infinitos:** Dentro de cada mundo, você pode ter todos os heróis que quiser.
*   **Linha Temporal Compartilhada:** Atenção! O que um personagem faz afeta o mundo dos outros. A IA está ciente de seus outros heróis e os reconhecerá como habitantes do mundo.
*   **IA com "Sentidos" (Super RAG):** O sistema RAG (Retrieval-Augmented Generation) atua como o "dedo-duro" da IA, dando-lhe memórias sobre o mundo, quem está com você, onde você está e o que acabou de acontecer para que a história seja 100% coerente.

### A Interface (Seu painel de controle)

*   **Painel Esquerdo (VOCÊ):** Sua Ficha de Personagem. Vida, mana, habilidades e o quão bonito você é (Carisma).
*   **Painel Central (A HISTÓRIA):**
    *   **Acima:** Onde o narrador conta o que acontece.
    *   **Abaixo:** Seus botões de decisão e a caixa de texto para escrever o que você quer fazer.
*   **Painel Direito (SUAS COISAS):** Inventário e equipamento. O paraíso do acumulador digital.

---

## 📜 REGRAS DO JOGO (Sim, há regras)

RolemIAster usa um sistema d100 (dado de cem faces) clássico e robusto.

### 1. Seus Atributos (O que te define)
A IA gera seus atributos com base no contexto, profissão e descrição que você introduziu. Uma vez gerados, você tem **10 PONTOS EXTRAS** para distribuir como quiser.
*   **Custos Escalonados:** Aumentar um atributo até 14 custa 1 ponto. De 15 a 16 custa 2 pontos. A partir de 17 custa 3 pontos! Pense bem onde coloca o músculo.

*   💪 **Força (FOR):** Sua potência física pura. Influencia o dano corpo a corpo e sua capacidade de carga.
*   ❤️ **Constituição (CON):** Sua resistência. Para aguentar golpes, doenças e venenos.
*   🐘 **Tamanho (TAM):** Sua envergadura. Grande e pesado, ou pequeno e esquivo.
*   🏃 **Destreza (DES):** Agilidade, pontaria e não tropeçar nos próprios pés.
*   🧠 **Inteligência (INT):** Aprender, lembrar e resolver enigmas.
*   🔮 **Poder (POD):** Sua alma, sua sorte, força de vontade e sua reserva mágica.
*   😎 **Carisma (CAR):** Liderança, atratividade e capacidade de enganar (ou seduzir) as pessoas.

### 2. Matemáticas Rápidas (Características Derivadas)
O motor calcula estes números automaticamente com base nos seus atributos:

*   🩸 **Vida (PV):** `CON * 10`. Se chegar a 0... bem, você sabe. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. O combustível para seus truques de magia. Sem mana, sem truques. (Um mago sem mana é apenas um cara de bata fazendo cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Sua energia para lutar e se mover sem morrer tentando.
*   🧠 **Humanidade (HUM):** `(CON+POD) * 5`. (Apenas em Cyberpunk: Mede quanto lhe resta de humano antes que os fios te enlouqueçam).
*   ⚔️ **Pontos de Ação (PA):** `(INT + DES) / 2`. Determina sua Iniciativa. Quem bate primeiro, bate duas vezes.

### 3. Suas Habilidades
Começam com um valor base (ex: Furtividade = DES + INT) e melhoram ao serem usadas. É uma porcentagem (%).

### 4. Resolução de Ações (O Dado)
Quando você tenta fazer algo arriscado (escalar, mentir, atacar...), a IA pedirá uma rolagem. O jogo lança um **d100** invisível. (Lembre-se: Os dados te odeiam. É pessoal).

*   **Seu Objetivo:** Tirar um número **MENOR OU IGUAL** ao seu nível de habilidade.
    *   *Exemplo:* Você tem 45% em Escalar.
    *   Tira 30: ✅ **Sucesso**. Sobe como um macaco.
    *   Tira 80: ❌ **Falha**. Você se machuca feio.
    *   **Crítico:** Tirar menor ou igual a **1/5 da sua habilidade** (ou um 01). Épico! Você faz um parkour extraordinário com cambalhota.
    *   **Gafe:** Um **99 ou 100**. Os dados decidiram que hoje não é seu dia. Suas calças caem no meio do caminho e você cai de cara.

---

## 💡 DICAS PARA NÃO MORRER (RÁPIDO)

*   **✍️ Seja Descritivo:** Não escreva apenas "ataco". Escreva: *"Tento esquivar sua machadada rolando pelo chão e enfio minha adaga no tornozelo dele"*. A IA te recompensará.
*   **🧪 Experimente:** Você não está limitado aos botões. Escreva loucuras! A IA improvisará.
*   **🎭 Interprete:** Entre no personagem. Leia as descrições e aja como seu personagem agiria, não como você agiria de pijama.

---

## ⚔️ O COMBATE (Às armas!)

Quando as palavras falham, chega a hora da pancadaria. O combate é **tático** e funciona por **Ticks** (tempo).

### 🕹️ Como funciona:
*   **Ticks:** Cada ação custa tempo. Armas pesadas são lentas (gastam muitos ticks). Adagas são rápidas.
*   **Sua Velocidade:** Depende dos seus Pontos de Ação (PA).

### Ações Básicas:
*   **🗡️ Atacar:** Bata com o que você tem desembainhado.
*   **🛡️ Bloquear:** Você se defende. Reduz o dano, mas gasta Stamina.
*   **🏃 Fugir:** De covardes (ou de sábios que querem viver).
*   **🏳️ Render-se:** Se você vir que não vai ganhar, pode implorar por piedade.
*   **✨ Magia / Cyberware:** Fogo, raios laser, hackeamentos...

### 💬 Ações por Texto Livre (NOVO!)
Não gosta dos botões? Escreva o que você quer fazer como se estivesse falando com um Mestre de carne e osso!
*   **Exemplos:** *"Lançar bola de fogo no goblin"*, *"Desembainhar minha espada rúnica"*, *"Usar poção em mim"*.
*   **Diretor de Cena:** O combate agora ganha vida. A IA gera eventos ambientais e reações que enriquecem a narrativa: vigas caindo, inimigos recuando, tochas caindo. O campo de batalha não é mais estático!
*   **Se a IA não entender:** Ela pedirá para você reformular. Seu turno NÃO é perdido!
*   **⚠️ Limitação:** Mover itens entre slots (equipar da mochila, carregar munição) é feito com **Arrastar e Soltar** na interface, não por texto.

### ⚠️ REGRA DE OURO DE SOBREVIVÊNCIA
**¡DESEMBAINHE ANTES DE LUTAR!**
Sacar a arma no meio do combate consome tempo (Ticks). Se você for pego com a espada na bainha, vão te dar até no documento de identidade enquanto você tenta tirá-la desajeitadamente. Ou PIOR AINDA!, SE VOCÊ FOR COM SUAS ARMAS NA MOCHILA EM VEZ DE NO SLOT DE EQUIPAMENTO (Com licença um segundo, preciso tirar o espadão da mochila, eu o tinha por aqui... em algum lugar...) 🤦‍♂️
👉 Clique na etiqueta da arma equipada (painel direito) para desembainhá-la. Ela ficará iluminada em verde.

Tentar mover armas em combate consome tempo (Ticks) e pode resultar em um ataque surpresa, além de ser muito provável que você perca o turno, que falhe por causa do nervosismo do machado que se aproxima da sua testa ou que a derrube no chão. (Talvez não tenha sido uma boa ideia criar um personagem com TDAH)

---

## ✨ MAGIA E CIBERNÉTICA

Dependendo se o seu mundo é de "Fantasia Medieval" ou "Cyberpunk":

### 🧙‍♂️ Fantasia: Encantamentos
Você é um feiticeiro? Você pode encantar seu equipamento.
1.  **Aprenda:** Você precisa do feitiço em seu grimório.
2.  **Lance (Arrastar e Soltar):** Arraste o feitiço de sua lista sobre o item em seu inventário.
3.  **Custo:** Manter um encantamento ativo **gasta Mana por turno**.
4.  **Aviso:** Se você ficar sem mana no meio do combate, a espada de fogo volta a ser um pedaço de ferro enferrujado.

### 🦾 Cyberpunk: Implantes
Quer olhos com zoom ou braços de gorila?
1.  Procure um **Tecnocirurgião** (NPC de serviço).
2.  Pague os créditos (nada é de graça no futuro).
3.  **Custo de Humanidade:** Cada implante tira um pedaço da sua alma (**Humanidade**).
    *   Se você colocar muitos, se tornará uma **Cyberpsicose** (uma torradeira com pernas assassina) e perderá o controle do seu personagem.

---

## 🛒 LOJAS E SERVIÇOS (SIS)

Fale com NPCs para negociar.
*   **IA Sugere, Você Manda:** Quando falar com um mercador ou curandeiro, a IA sugerirá seus serviços (consertar, vender, curar), mas aparecerá um botão **"Ver Serviços"** para que você decida quando entrar no modo transacional.
*   **Regateio:** Sua habilidade de **Comércio** (baseada em Carisma) decide os preços. Se você for feio ou antipático, será enganado.
*   **Vender:** Clique com o botão direito em um item do seu inventário para vendê-lo ao lojista ou arraste-o sobre ele.

---

## 🎒 GERENCIAMENTO DE INVENTÁRIO (Tetris)

*   **Peso:** Você tem um limite de carga (Força + Tamanho). Se carregar muita sucata, você ficará lento e penalizado (Acumulador não é seu amigo).
*   **Painéis:**
    *   **Equipado:** O que você está vestindo.
    *   **Cinto:** Acesso rápido em combate (gasta menos tempo usar poções daqui).
    *   **Mochila:** O fundo do saco.
*   **Uso Fluido:** Arraste uma poção ou comida diretamente para **seu rosto** (o retrato) para consumi-la instantaneamente. Você também pode usar o menu de contexto (clique direito -> Usar).

---

## 🛠️ AJUSTES FINAIS

No menu de **Configurações** você pode mexer em tudo:
*   **🌍 Idioma:** A IA traduzirá todo o jogo e as respostas na hora. Modo poliglota ativado.
*   **👁️ Aparência:** Tamanho da fonte e cores, para não ficar cego. Bordas de neon e sombras suavizadas para uma imersão total.
*   **🧠 Ajustes de IA:** Mude de modelo, temperatura, etc. (Lembre-se do que vimos no início do manual sobre o flag `--advanced` se você é do tipo que quer mexer em tudo).

---

## 🎭 DIFICULDADE E HUMOR (Personalize seu sofrimento)

Antes de começar, lembre-se que a IA não apenas narra, mas **ajusta o mundo** de acordo com suas preferências. Estes parâmetros são escolhidos ao criar o mundo e são permanentes para esse mundo:

*   **🎮 Dificuldade (Gerenciada por IA):** Não é um simples multiplicador de dano. O jogo diz para a IA: "Ei, a dificuldade é esta, aja de acordo".
    *   **Fácil:** Você nunca morrerá (ou será quase impossível), as situações são mais simples, os preços são mais baratos e os inimigos são mais desajeitados. A IA raciocinará cada cena para que seu caminho seja de rosas.
    *   **Normal:** O equilíbrio padrão.
    *   **Desafio:** A IA será implacável, os preços proibitivos e qualquer erro pode ser o último.

*   **🃏 Tom de Humor:** Define como a IA fala com você e que tipo de eventos ocorrem. Embora cada modelo tenha sua forma de interpretar o conceito de "humor", a IA tentará se adaptar ao que você escolher... ou não:
    *   **Sério:** Uma narrativa épica, sombria e formal.
    *   **Sarcástico:** A IA rirá de suas falhas, te provocará constantemente e usará um tom irônico.
    *   **Delirante:** Prepare-se para o absurdo. Vacas voadoras, situações surreais e caos total gerenciado pela lógica mais distorcida da IA.

---

## 🚧 Aviso: Acesso Antecipado

RolemIAster está em **desenvolvimento ativo**, cozinhando em fogo lento.
*   Você pode encontrar bugs (ou "características inesperadas").
*   Adiciono coisas novas toda semana.
*   Seu feedback vale ouro! Me diga o que você gosta e o que você gosta muito. (Se não gostar de algo, me diga também, mas com carinho).

Agora vá, role iniciativa e crie sua lenda!

<!-- source_hash: 9af75cff -->