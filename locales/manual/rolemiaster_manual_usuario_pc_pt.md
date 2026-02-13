# 🐉 Bem-vindo ao RolemIAster!

Agarra os teus dados (ou o teu rato) e prepara-te para viver aventuras onde o único limite é o quão retorcida é a tua imaginação! **RolemIAster** é um jogo de role-playing infinito impulsionado por Inteligência Artificial que te permite ser o herói (ou o vilão) das tuas próprias histórias.

---

## ⚠️ AVISO LEGAL (A parte aborrecida mas necessária)

**LÊ-ME OU SOFRERÁS A IRA DOS DADOS:**

1.  **🤖 IA Local Integrada:** RolemIAster traz o seu próprio cérebro digital. Funciona **sem internet** e sem que tenhas de tocar em nada esquisito. Instalar e jogar!
2.  **☁️ Nuvem Opcional:** Se preferes gastar os trocos em IAs externas (OpenAI, Gemini...), que assim seja com o teu cartão de crédito. Os custos são coisa tua.
3.  **🎲 Caos Gerador:** A IA inventa a história à medida que avança. Se o narrador ficar maluco e disser que chovem vacas, não olhes para nós. O desenvolvedor não se responsabiliza pelas loucuras que o modelo gerar.
4.  **🏗️ Early Access:** Isto está em obras. Se encontrares um bug, não é uma falha, é uma "feature" surpresa! (Envia-nos feedback, por favor, que ajuda muito).

---

## 🖥️ REQUISITOS DO SISTEMA E CÉREBROS DIGITAIS (IA)

RolemIAster funciona com **Inteligência Artificial Local**. Isto significa que o teu PC fará o trabalho árduo de pensar. Não precisas de internet, mas sim de uma placa gráfica que não seja da era dos dinossauros. (Nota: Se estiver frio no teu quarto, este jogo funciona como aquecimento grátis).

### ⚙️ Conceitos para não iniciados

A **VRAM (Memória de Vídeo)** é a gasolina da IA.
*   RolemIAster precisa de "lembrar-se" de **12.000 a 16.000 palavras (tokens)** para não perder o fio à história.
*   Se a tua GPU ficar sem memória, o jogo ficará mais lento que uma lesma com asma.

---

### 📊 CATÁLOGO DE MODELOS (Escolhe o teu veneno)

Gere as tuas IAs em **Configuração → IA Local Integrada → Gerir Modelos**.

#### 🏆 Família Qwen 2.5 (A nata da nata)

| Modelo | Tamanho | VRAM Mínima | Nível | Veredicto |
|--------|---------|-------------|-------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **O Estagiário.** Cumpre, mas não lhe peças para escrever Shakespeare. Às vezes confunde-se. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **O ESCOLHIDO.** Equilibrado, inteligente e rápido. É o modelo recomendado por defeito. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **O Catedrático.** Narrativa rica, profunda e diálogos muito naturais. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Nível Deus.** Precisas de uma nave espacial (RTX 3090/4090) para mover isto. |

---

### 🎮 GUIA DE ESCOLHA RÁPIDA

| A Tua Gráfica | VRAM | Modelo Recomendado | Resultado |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Justo mas jogável (Contexto baixo) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Corre bem |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Voa |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ A experiência ideal |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luxo |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Qualidade máxima |

**💡 Dica Pro:** Deixa sempre cerca de **2GB de VRAM livres** para o sistema operativo, ou o Windows começará a chorar e a fechar coisas.

---

### 🚨 SOCORRO! O MEU PC ESTÁ LENTO! (Problemas de VRAM)

Se o jogo demora mais a responder que o teu crush no WhatsApp, provavelmente ficaste sem VRAM.

**Sintomas de que te achaste muito esperto:**
1.  **O modelo descarrega para a RAM:** O PC usa a memória normal em vez da gráfica. Resultado: LENTIDÃO EXTREMA.
2.  **Transbordamento leve (1-2GB):** Demorará 30-60 segundos por resposta.
3.  **Transbordamento moderado (3-5GB):** 2-5 minutos. Podes ir buscar um café.
4.  **Transbordamento severo:** 10-30 minutos. Injogável.

#### 🛡️ Protocolo de Emergência
Se a coisa correr mal, segue estes passos por ordem:

1.  **📉 Baixa a % de VRAM:** Vai a Configuração e baixa para **85%**. Reinicia e experimenta.
2.  **🧹 Limpeza:** Fecha esse navegador com 40 abas abertas. Estão a comer a tua memória.
3.  **🛑 O Limite dos 70%:** Nunca desças abaixo dos **70%** de VRAM atribuída.
    *   *Porquê?* Porque a IA precisa de espaço para "pensar" (a cache KV). Se lhe deres menos de 70%, ela ficará em branco e dará erro.
4.  **🔙 Retirada Tática:** Se nada funcionar, baixa para um modelo mais pequeno (passa do 7B para o 3B).

---

### ⚙️ CONFIGURAÇÃO AVANÇADA DO MODELO

Para aqueles que gostam de mexer em botões em **Configuração → IA Local Integrada**:

| Opção | Função | Recomendação |
|--------|---------|---------------|
| **GPU Layers** | Quanta parte do modelo é carregada na gráfica | **-1** (Significa "TUDO". Não mexas a não ser que saibas o que estás a fazer) |
| **Contexto Máximo** | A "memória de curto prazo" da IA | **16384 - 32768** (Menos disto e a IA terá amnésia) |
| **Temperatura** | Criatividade vs Loucura | **0.7 - 0.8** (Mais alto = mais louco; Mais baixo = mais robótico) |
| **RAG do Histórico** | Lembrar coisas de há muito tempo | **Sim** (Imprescindível para campanhas longas) |
| **Cachear Embeddings** | Acelera a procura de memórias | **Sim** (Faz com que vá mais rápido) |

---

### 🔧 SOLUÇÃO DE PROBLEMAS (Troubleshooting)

| Peba | Conserto |
|-------|---------|
| **IA Lenta / Lag** | Verifica se `GPU Layers` é -1. Fecha o Chrome. Baixa o `Contexto Máximo`. |
| **Erro de Memória (OOM)** | Reduz o `Contexto Máximo` ou escolhe um modelo mais pequeno (3B). |
| **A IA delira / Alucina** | Baixa a `Temperatura` para 0.6. Se continuar maluca, reinicia a aplicação. |

---

### 🌐 FORNECEDORES ALTERNATIVOS (Apenas para Especialistas)

> **Nota:** A IA local que o jogo traz é suficiente e basta. Isto é apenas para utilizadores avançados ou corajosos.

*   **Motores Locais Externos:**
    *   **Ollama / LM Studio:** Se já tens os teus próprios modelos "nerds", podes usá-los.
*   **APIs na Nuvem (Pagamento):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requer internet e gastar dinheiro.
    *   Configura em: **Configuração → IA → Adicionar Novo Fornecedor**.

---

## 🎲 COMO JOGAR?

Ao abrir o jogo, tens dois caminhos:

1.  **🆕 Nova Aventura**: Cria a tua lenda do zero. O jogo guiar-te-á para escolher raça, classe, mundo e premissa. (Se a vida te der limões... ou um 3 em Força, faz-te Bardo).
2.  **💾 Carregar Jogo**: Continua exatamente de onde paraste antes daquela morte humilhante. (Ou para corrigir aquele "pequeno erro de cálculo" com o dragão).

### A Interface (A tua cabine de comando)

*   **Painel Esquerdo (TU):** A tua Ficha de Personagem. Vida, mana, habilidades e o quão bonito és (Carisma).
*   **Painel Central (A HISTÓRIA):**
    *   **Em cima:** Onde o narrador conta o que está a acontecer.
    *   **Em baixo:** Os teus botões de decisão e a caixa de texto para escreveres o que queres fazer.
*   **Painel Direito (AS TUAS COISAS):** Inventário e equipamento. O paraíso do Diógenes digital.

---

## 📜 REGRAS DO JOGO (Sim, há regras)

RolemIAster usa um sistema d100 (dado de cem faces) clássico e robusto.

### 1. Os Teus Atributos (O que te define)
São gerados aleatoriamente, como no RPG de mesa da vida!

*   💪 **Força (FOR):** Para bater forte e levantar pedras.
*   ❤️ **Constituição (CON):** Para aguentar pancadas, doenças e venenos.
*   🐘 **Tamanho (TAM):** Grande e pesado, ou pequeno e esquivo.
*   🏃 **Destreza (DES):** Agilidade, pontaria e não tropeçar nos próprios pés.
*   🧠 **Inteligência (INT):** Aprender, lembrar e resolver puzzles.
*   🔮 **Poder (POD):** A tua alma, a tua sorte, força de vontade e magia.
*   😎 **Carisma (CAR):** Liderança, atratividade e capacidade de enganar as pessoas.

### 2. Matemática Rápida (Características Derivadas)
*   **Vida (PV):** `(CON + TAM) / 2`. Se chegar a 0... bem, já sabes. F.
*   **Mana (PM):** Igual ao teu POD. Sem mana, não há truques. (Um mago sem mana é apenas um tipo com bata a fazer cosplay).
*   **Pontos de Ação (PA):** `(INT + DES) / 2`. Determina a tua Iniciativa. Quem bate primeiro, bate duas vezes.

### 3. As Tuas Habilidades
Começam com um valor base (ex: Furtividade = DES + INT) e melhoram ao usá-las. É uma percentagem (%).

### 4. Resolução de Ações (O Dado)
Quando tentas fazer algo arriscado (escalar, mentir, atacar...), a IA pedir-te-á uma tirada.
O jogo lança um **d100** invisível. **(Lembra-te: Os dados odeiam-te. É pessoal).**

*   **O Teu Objetivo:** Tirar **MENOS OU IGUAL** à tua habilidade.
    *   *Exemplo:* Tens 45% em Escalar.
    *   Tiras um 30: ✅ **Sucesso**. Sobe como um macaco.
    *   Tiras um 80: ❌ **Falha**. Dá com a cabeça no chão.
    *   Tiras um 01-05: ✨ **CRÍTICO!** Fazes um parkour épico com cambalhota.
    *   Tiras um 99-100: 💀 **FALHA CRÍTICA!** Caem-te as calças a meio do caminho e cais de cara.

---

## 💡 DICAS PARA NÃO MORRER (RÁPIDO)

*   **✍️ Sê Descritivo:** Não escrevas apenas "ataco". Escreve: *"Tento esquivar a sua machadada rolando pelo chão e cravo a minha adaga no tornozelo dele"*. A IA vai premiar-te.
*   **🧪 Experimenta:** Não estás limitado aos botões. Escreve loucuras! A IA improvisará.
*   **🎭 Interpreta:** Entra na personagem. Lê as descrições e age como a tua personagem faria, não como tu farias de pijama.

---

## ⚔️ O COMBATE (Às armas!)

Quando as palavras falham, chega a hora das pancadas. O combate é **tático** e funciona por **Ticks** (tempo).

### 🕹️ Como funciona:
*   **Ticks:** Cada ação custa tempo. Armas pesadas são lentas (gastam muitos ticks). Adagas são rápidas.
*   **A Tua Velocidade:** Depende dos teus Pontos de Ação (PA).

### Ações Básicas:
*   **🗡️ Atacar:** Dá-lhe com o que tens desembainhado.
*   **🛡️ Bloquear:** Pões-te na defensiva. Reduz o dano mas gasta Stamina.
*   **🏃 Fugir:** De covardes (ou de sábios que querem viver).
*   **🏳️ Render-se:** Se vês que não ganhas, podes pedir piedade.
*   **✨ Magia / Cyberware:** Fogo, raios laser, hacks...

### ⚠️ REGRA DE OURO DE SOBREVIVÊNCIA
**DESEMBAINHA ANTES DE LUTAR!**
Tirar a arma a meio do combate consome tempo (Ticks). Se te apanham com a espada na bainha, vão dar-te até no cartão de cidadão enquanto tentas tirá-la desajeitadamente. OU PIOR AINDA!, SE VAIS COM AS TUAS ARMAS NA MOCHILA EM VEZ DO SEU SLOT DE EQUIPAMENTO (Desculpe um segundo, tenho de tirar o mandão da mochila, sei que o tinha por aqui... em algum lado...) 🤦‍♂️
👉 Clica na etiqueta da arma equipada (painel direito) para a desembainhar. Ficará iluminada a verde.

Tentar mover armas em combate consome tempo (Ticks) e pode resultar num ataque surpresa, além de ser muito provável que percas o turno, que falhes pelos nervos do machado que se aproxima da tua testa ou que te caia ao chão. (Talvez não tenha sido boa ideia criares uma personagem com TDAH)

---

## ✨ MAGIA E CIBERNÉTICA

Dependendo se o teu mundo é de "Fantasia medieval" ou "Cyberpunk":

### 🧙‍♂️ Fantasia: Encantamentos
És feiticeiro? Podes encantar o teu equipamento.
1.  **Aprende:** Precisas do feitiço no teu grimório.
2.  **Lança (Arrastar e Soltar):** Arrastra o feitiço da tua lista para cima do objeto no teu inventário.
3.  **Custo:** Manter um encantamento ativo **gasta Mana por turno**.
4.  **Aviso:** Se ficarem sem mana a meio do combate, a espada de fogo volta a ser um pedaço de ferro enferrujado.

### 🦾 Cyberpunk: Implantes
Queres olhos com zoom ou braços de gorila?
1.  Procura um **Tecnocirurgião** (NPC de serviço).
2.  Paga os créditos (nada é grátis no futuro).
3.  **Custo de Humanidade:** Cada implante tira-te um pedaço de alma (**Humanidade**).
    *   Se colocares demasiados, transformar-te-ás numa **Cyberpsicose** (uma torradeira com pernas assassina) e perderás o controlo da tua personagem.

---

## 🛒 LOJAS E SERVIÇOS

Fala com NPCs para comerciar.
*   **Regateio:** A tua habilidade de **Comércio** (baseada em Carisma) decide os preços. Se fores feio ou antipático, serás enganado.
*   **Vender:** Clica com o **Botão Direito** num objeto do teu inventário para o vender ao lojista.

---

## 🎒 GESTÃO DE INVENTÁRIO (Tetris)

*   **Peso:** Tens um limite de carga (Força + Tamanho). Se carregares demasiado lixo, andarás lento e penalizado (Diógenes não é teu amigo).
*   **Painéis:**
    *   **Equipamento:** O que estás a usar.
    *   **Cinto:** Acesso rápido em combate (gasta menos tempo usar poções daqui).
    *   **Mochila:** O fundo do saco.
*   **Uso Rápido:** Arrastra uma poção ou comida diretamente para **a tua cara** (o retrato) para a consumires instantaneamente.

---

## 🛠️ AJUSTES FINAIS

No menu de **Configuração** podes mexer em tudo:
*   **🌍 Idioma:** A IA traduzir-te-á todo o jogo e as respostas na hora.
*   **👁️ Aparência:** Tamanho da letra e cores, para não ficares cego.
*   **🧠 Ajustes IA:** Muda de modelo, temperatura, etc.

---

## 🚧 Aviso: Early Access

RolemIAster está em **desenvolvimento ativo**, a cozinhar a fogo lento.
*   Podes encontrar bugs (ou "características inesperadas").
*   Adiciono coisas novas todas as semanas.
*   O teu feedback vale ouro! Diz-me o que gostas e o que gostas muito.

Agora vai, lança iniciativa e cria a tua lenda!

<!-- source_hash: 2511f352 -->