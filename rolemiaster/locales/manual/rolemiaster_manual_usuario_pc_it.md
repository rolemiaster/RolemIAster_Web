# 🐉 Benvenuto su RolemIAster!

Prendi i tuoi dadi (o il tuo mouse) e preparati a vivere avventure dove l'unico limite è quanto sia contorta la tua immaginazione! **RolemIAster** è un gioco di ruolo infinito guidato dall'Intelligenza Artificiale che ti permette di essere l'eroe (o il cattivo) delle tue storie.

---

## ⚠️ DISCLAIMER (La parte noiosa ma necessaria)

**LEGGIMI O SUBIRAI L'IRA DEI DADI:**

1.  **🤖 IA Locale Integrata:** RolemIAster porta con sé il proprio cervello digitale. Funziona **senza internet** e senza che tu debba toccare nulla di strano. Installa e gioca!
2.  **☁️ Cloud Opzionale:** Se preferisci spendere i tuoi soldi in IA esterne (OpenAI, Gemini...), a tuo rischio e pericolo con la carta di credito. I costi sono affar tuo.
3.  **🎲 Caos Generativo:** L'IA inventa la storia al momento. Se il narratore impazzisce e dice che piovono mucche, non guardare noi. Lo sviluppatore non è responsabile delle follie generate dal modello.
4.  **🏗️ Early Access:** Questo è un cantiere aperto. Se trovi un bug, non è un errore, è una "feature" a sorpresa! (Mandaci feedback, per favore, ci aiuta molto).

---

## 🖥️ REQUISITI DI SISTEMA E CERVELLI DIGITALI (IA)

RolemIAster funziona con **Intelligenza Artificiale Locale**. Ciò significa che il tuo PC farà il lavoro pesante di pensare. Non hai bisogno di internet, ma sì di una scheda video che non sia dell'epoca dei dinosauri. (Nota: Se fa freddo nella tua stanza, questo gioco funziona come riscaldamento gratuito).

### ⚙️ Concetti per non iniziati

La **VRAM (Memoria Video)** è la benzina dell'IA.
*   RolemIAster ha bisogno di "ricordare" da **12.000 a 16.000 parole (token)** per non perdere il filo della storia.
*   Se la tua GPU finisce la memoria, il gioco andrà più lento di una lumaca asmatica.

---

### 📊 CATALOGO MODELLI (Scegli il tuo veleno)

Gestisci le tue IA in **Impostazioni → IA Locale Integrata → Gestisci Modelli**.

#### 🏆 Famiglia Qwen 2.5 (La crème de la crème)

| Modello | Dimensione | VRAM Minima | Tier | Verdetto |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Lo Stagista.** Fa il suo dovere, ma non chiedergli di scrivere Shakespeare. A volte si confonde. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **IL PRESCELTO.** Equilibrato, intelligente e veloce. È il modello raccomandato di default. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Il Professore.** Narrativa ricca, profonda e dialoghi molto naturali. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Livello Dio.** Hai bisogno di un'astronave (RTX 3090/4090) per far girare questo. |

---

### 🎮 GUIDA ALLA SCELTA RAPIDA

| La tua Scheda | VRAM | Modello Consigliato | Risultato |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Appena sufficiente ma giocabile (Contesto basso) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Va bene |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Vola |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ L'esperienza ideale |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Un lusso |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Massima qualità |

**💡 Pro Tip:** Lascia sempre circa **2GB di VRAM liberi** per il sistema operativo, o Windows inizierà a piangere e a chiudere cose.

---

### 🚨 AIUTO! IL MIO PC È LENTO! (Problemi di VRAM)

Se il gioco ci mette più tempo a rispondere della tua crush su WhatsApp, sicuramente hai finito la VRAM.

**Sintomi che hai fatto il passo più lungo della gamba:**
1.  **Il modello si riversa sulla RAM:** Il PC usa la memoria normale invece di quella grafica. Risultato: LENTEZZA ESTREMA.
2.  **Sovraccarico lieve (1-2GB):** Impiegherà 30-60 secondi per risposta.
3.  **Sovraccarico moderato (3-5GB):** 2-5 minuti. Puoi andarti a prendere un caffè.
4.  **Sovraccarico grave:** 10-30 minuti. Ingiocabile.

#### 🛡️ Protocolo di Emergenza
Se le cose vanno male, segui questi passaggi in ordine:

1.  **📉 Abbassa la % di VRAM:** Vai su Impostazioni e abbassalo all'**85%**. Riavvia e prova.
2.  **🧹 Pulizia:** Chiudi quel browser con 40 schede aperte. Stanno mangiando la tua memoria.
3.  **🛑 Il Limite del 70%:** Non scendere mai sotto il **70%** di VRAM assegnata.
    *   *Perché?* Perché l'IA ha bisogno di spazio per "pensare" (la cache KV). Se le dai meno del 70%, andrà in bianco e darà errore.
4.  **🔙 Ritirata Tattica:** Se nulla funziona, passa a un modello più piccolo (passa dal 7B al 3B).

---

### ⚙️ CONFIGURAZIONE AVANZATA DEL MODELLO ("Smanettamento Estremo")

> **MODALITÀ ESPERTO:** Se sei un pro e vuoi accedere alla configurazione dei modelli avanzati (aggiungere i tuoi modelli GGUF scaricati da HuggingFace, toccare i layer, ecc.), devi avviare il gioco con il comando: `--advanced`.

Per coloro a cui piace toccare i pulsanti in **Impostazioni → IA Locale Integrata**:

| Opzione | Funzione | Raccomandazione |
|--------|---------|---------------|
| **GPU Layers** | Quanto del modello viene caricato nella scheda grafica | **-1** (Significa "TUTTO". Non toccarlo a meno che tu non sappia cosa stai facendo) |
| **Contesto Massimo** | La "memoria a breve termine" dell'IA | **16384 - 32768** (Meno di questo e l'IA avrà l'amnesia) |
| **Temperatura** | Creatività vs Follia | **0.7 - 0.8** (Più alto = più pazza; Più basso = più robotica) |
| **RAG della Cronologia** | Ricordare cose di molto tempo fa | **Sì** (Imprescindibile per campagne lunghe) |
| **Cache degli Embeddings** | Accelera la ricerca dei ricordi | **Sì** (Rende tutto più veloce) |

---

### 🔧 RISOLUZIONE DEI PROBLEMI (Troubleshooting)

| Problema | Soluzione |
|-------|---------|
| **IA Lenta / Lag** | Verifica che `GPU Layers` sia -1. Chiudi Chrome. Abbassa il `Contexto Máximo`. |
| **Errore di Memoria (OOM)** | Riduci il `Contexto Máximo` o scegli un modello più piccolo (3B). |
| **L'IA delira / Allucina** | Abbassa la `Temperatura` a 0.6. Se continua a essere pazza, riavvia l'applicazione. |

---

### 🌐 PROVIDER ALTERNATIVI (Solo Esperti)

> **Nota:** L'IA locale inclusa nel gioco è più che sufficiente. Questo è solo per utenti avanzati o coraggiosi.

*   **Motori Locali Esterni:**
    *   **Ollama / LM Studio:** Se hai già i tuoi modelli da smanettone, puoi usarli.
*   **API in Cloud (A pagamento):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Richiede internet e sborsare soldi.
    *   Configuralo in: **Impostazioni → IA → Aggiungi Nuovo Provider**.

---

### 🌍 COME GIOCARE? (Il Multiverso e Te)

All'apertura del gioco, hai due strade:

1.  **🆕 Nuova Avventura**: Crea la tua leggenda da zero. Il gioco ti chiederà **Nome, Mestiere (Professione), Descrizione Fisica, Descrizione Psicologica e il Background/Pretesto** della tua storia. Inoltre, sceglierai il **Livello di Difficoltà** e il **Tono dell'Umorismo** che guideranno la campagna.
2.  **💾 Continua Partita**: RolemIAster **salva in tempo reale**. Qui non c'è "carica prima di morire" né tornare indietro. Ogni decisione, ogni fiasco e ogni ferita rimane incisa a fuoco nella storia. È una **SFIDA**: ciò che fai, fatto rimane. Vivi con le conseguenze... o muori con esse.

RolemIAster non è una partita isolata; è un **Multiverso Persistente**.
*   **Mondi Infiniti:** Crea i tuoi universi (**Fantasy Medievale** o **Cyberpunk**) con la loro Lore.
*   **Personaggi Infiniti:** All'interno di ogni mondo, puoi avere tutti gli eroi che vuoi.
*   **Linea Temporale Condivisa:** Occhio! Quello che fa un personaggio influenza il mondo degli altri. L'IA è consapevole dei tuoi altri eroi e li riconoscerà come abitanti del mondo.
*   **IA con "Sensi" (Super RAG):** Il sistema RAG (Retrieval-Augmented Generation) agisce come la "spia" dell'IA, dandole ricordi sul mondo, chi ti accompagna, dove sei e cosa è appena successo affinché la storia sia coerente al 100%.

### L'Interfaccia (La tua cabina di comando)

*   **Pannello Sinistro (TU):** La tua Scheda Personaggio. Vita, mana, abilità e quanto sei bello (Carisma).
*   **Pannello Centrale (LA STORIA):**
    *   **In alto:** Dove il narratore racconta cosa succede.
    *   **In basso:** I tuoi pulsanti decisionali e la casella di testo per scrivere quello che vuoi fare.
*   **Pannello Destro (LE TUE COSE):** Inventario ed equipaggiamento. Il paradiso dell'accumulatore seriale digitale.

---

## 📜 REGOLE DEL GIOCO (Sì, ci sono delle regole)

RolemIAster usa un sistema d100 (dado a cento facce) classico e robusto.

### 1. I Tuoi Attributi (Ciò che ti definisce)
L'IA genera i tuoi attributi basandosi sul contesto, professione e descrizione che hai inserito. Una volta generati, hai **10 PUNTI EXTRA** da distribuire a tuo piacimento.
*   **Costi Scalari:** Alzare un attributo fino a 14 costa 1 punto. Da 15 a 16 costa 2 punti. A partire da 17 costa 3 punti! Pensa bene dove metti i muscoli.

*   💪 **Forza (FOR):** La tua potenza fisica pura. Influenza il danno corpo a corpo e la tua capacità di carico.
*   ❤️ **Costituzione (COS):** La tua resistenza. Per sopportare colpi, malattie e veleni.
*   🐘 **Taglia (TAG):** La tua stazza. Grande e pesante, o piccolo e sfuggente.
*   🏃 **Destrezza (DES):** Agilità, mira e non inciampare nei propri piedi.
*   🧠 **Intelligenza (INT):** Imparare, ricordare e risolvere enigmi.
*   🔮 **Potere (POT):** La tua anima, la tua fortuna, forza di volontà e la tua riserva magica.
*   😎 **Carisma (CAR):** Leadership, attrattiva e capacità di ingannare (o sedurre) la gente.

### 2. Matematica Rapida (Caratteristiche Derivate)
Il motore calcola queste cifre automaticamente basandosi sui tuoi attributi:

*   🩸 **Punti Vita (PV):** `CON * 10`. Se arriva a 0... beh, sai già. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Il carburante per i tuoi trucchi di magia. Senza mana, niente trucchi. (Un mago senza mana è solo un tizio col camice che fa cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. La tua energia per combattere e muoverti senza morire nel tentativo.
*   🧠 **Umanità (UMA):** `(CON+POD) * 5`. (Solo in Cyberpunk: Misura quanto ti resta di umano prima che i cavi ti facciano impazzire).
*   ⚔️ **Punti Azione (PA):** `(INT + DES) / 2`. Determina la tua Iniziativa. Chi picchia per primo, picchia due volte.

### 3. Le Tue Abilità
Iniziano con un valore base (es: Furtività = DES + INT) e migliorano usandole. È una percentuale (%).

### 4. Risoluzione delle Azioni (Il Dado)
Quando provi a fare qualcosa di rischioso (scalare, mentire, attaccare...), l'IA ti chiederà un tiro. Il gioco lancia un **d100** invisibile. **(Ricorda: I dadi ti odiano. È una cosa personale).**

*   **Il Tuo Obiettivo:** Fare un numero **MINORE O UGUALE** al tuo livello di abilità.
    *   *Esempio:* Hai 45% in Scalare.
    *   Fai un 30: ✅ **Successo**. Sali come una scimmia.
    *   Fai un 80: ❌ **Fallimento**. Prendi una botta.
    *   **Critico:** Fare meno o uguale a **1/5 della tua abilità** (o un 01). Epico! Fai un parkour straordinario con capriola.
    *   **Fallimento Critico:** Un **99 o 100**. I dadi hanno deciso che oggi non è la tua giornata. Ti cadono i pantaloni a metà strada e cadi di faccia.

---

## 💡 CONSIGLI PER NON MORIRE (RAPIDAMENTE)

*   **✍️ Sii Descrittivo:** Non scrivere solo "attacco". Scrivi: *"Provo a schivare la sua ascia rotolando a terra e conficco il mio pugnale nella sua caviglia"*. L'IA ti premierà.
*   **🧪 Sperimenta:** Non sei limitato ai pulsanti. Scrivi follie! L'IA improvviserà.
*   **🎭 Ruola:** Entra nella parte. Leggi le descrizioni e agisci come farebbe il tuo personaggio, non come faresti tu in pigiama.

---

## ⚔️ IL COMBATTIMENTO (Alle armi!)

Quando le parole falliscono, arriva l'ora delle botte. Il combattimento è **tattico** e funziona a **Tick** (tempo).

### 🕹️ Come funziona:
*   **Tick:** Ogni azione costa tempo. Le armi pesanti sono lente (consumano molti tick). I pugnali sono veloci.
*   **La Tua Velocità:** Dipende dai tuoi Punti Azione (PA).

### Azioni Base:
*   **🗡️ Attaccare:** Dacci dentro con quello che hai sfoderato.
*   **🛡️ Bloccare:** Ti metti sulla difensiva. Riduce il danno ma consuma Stamina.
*   **🏃 Fuggire:** Da codardi (o da saggi che vogliono vivere).
*   **🏳️ Arrendersi:** Se vedi che non vinci, puoi supplicare pietà.
*   **✨ Magia / Cyberware:** Fuoco, raggi laser, hacking...

### 💬 Azioni a Testo Libero (NUOVO!)
Non ti piacciono i pulsanti? Scrivi quello che vuoi fare come se parlassi con un Master in carne ed ossa!
*   **Esempi:** *"Lanciare palla di fuoco al goblin"*, *"Sfoderare la mia spada runica"*, *"Usare pozione su di me"*.
*   **Direttore di Scena:** Il combattimento ora prende vita. L'IA genera eventi ambientali e reazioni che arricchiscono la narrativa: travi che cadono, nemici che indietreggiano, torce che cadono. Il campo di battaglia non è più statico!
*   **Se l'IA non capisce:** Ti chiederà di riformulare. Il tuo turno NON viene perso!
*   **⚠️ Limitazione:** Spostare oggetti tra gli slot (equipaggiare dallo zaino, caricare munizioni) si fa con **Drag & Drop** nell'interfaccia, non via testo.

### ⚠️ REGOLA D'ORO DI SOPRAVVIVENZA
**SFODERA PRIMA DI COMBATTERE!**
Estrarre l'arma nel mezzo del combattimento consuma tempo (Tick). Se ti beccano con la spada nel fodero, ti colpiranno fino sulla carta d'identità mentre cerchi di estrarla goffamente. O PEGGIO ANCORA, SE VAI CON LE TUE ARMI NELLO ZAINO INVECE CHE NEL LORO SLOT DI EQUIPAGGIAMENTO (Scusi un secondo, devo tirare fuori lo spadone dallo zaino, so che ce l'avevo qui... da qualche parte...) 🤦‍♂️
👉 Clicca **sull'etichetta dell'arma equipaggiata** (pannello destro) per sfoderarla. Si illuminerà di verde.

Provare a spostare armi in combattimento consuma tempo (Tick) e può risultare in un attacco a sorpresa, inoltre è molto probabile che tu perda il turno, che tu fallisca per il nervosismo dell'ascia che si avvicina alla tua fronte o che ti cada a terra. (Forse non è stata una buona idea crearti un personaggio con l'ADHD)

---

## ✨ MAGIA E CIBERNETICA

A seconda se il tuo mondo è "Fantasy Medievale" o "Cyberpunk":

### 🧙‍♂️ Fantasy: Incantamenti
Sei uno stregone? Puoi incantare il tuo equipaggiamento.
1.  **Impara:** Hai bisogno dell'incantesimo nel tuo grimorio.
2.  **Lancia (Drag & Drop):** Trascina l'incantesimo dalla tua lista sull'oggetto nel tuo inventario.
3.  **Costo:** Mantenere un incantamento attivo **consuma Mana per turno**.
4.  **Avviso:** Se rimani a secco di mana a metà combattimento, la spada di fuoco torna ad essere un pezzo di ferro arrugginito.

### 🦾 Cyberpunk: Impianti
Vuoi occhi con zoom o braccia da gorilla?
1.  Cerca un **Tecno-chirurgo** (NPC di servizio).
2.  Paga i crediti (nulla è gratis nel futuro).
3.  **Costo di Umanità:** Ogni impianto ti toglie un pezzo di anima (**Umanità**).
    *   Se te ne metti troppi, ti trasformerai in una **Cyberpsicosi** (un tostapane con le gambe assassino) e perderai il controllo del tuo personaggio.

---

## 🛒 NEGOZI E SERVIZI (SIS)

Parla con gli NPC per commerciare.
*   **L'IA Suggerisce, Tu Comandi:** Quando parli con un mercante o un guaritore, l'IA ti suggerirà i suoi servizi (riparare, vendere, curare), ma apparirà un pulsante di **"Vedi Servizi"** affinché tu decida quando entrare nella modalità transazionale.
*   **Contrattazione:** La tua abilità di **Commercio** (basata sul Carisma) decide i prezzi. Se sei brutto o antipatico, ti fregheranno.
*   **Vendere:** Fai **Tasto Destro** su un oggetto del tuo inventario per venderlo al negoziante o trascinalo su di lui.

---

## 🎒 GESTIONE INVENTARIO (Tetris)

*   **Peso:** Hai un limite di carico (Forza + Taglia). Se porti troppe cianfrusaglie, andrai lento e penalizzato (l'accumulo non è tuo amico).
*   **Pannelli:**
    *   **Equipaggiamento:** Quello che indossi.
    *   **Cintura:** Accesso rapido in combattimento (consuma meno tempo usare pozioni da qui).
    *   **Zaino:** Il fondo del sacco.
*   **Uso Fluido:** Trascina una pozione o del cibo direttamente **sulla tua faccia** (il ritratto) per consumarla all'istante. Puoi anche usare il menu contestuale (tasto destro -> Usa).

---

## 🛠️ IMPOSTAZIONI FINALI

Nel menu di **Configurazione** puoi toccare tutto:
*   **🌍 Lingua:** L'IA ti tradurrà tutto il gioco e le risposte al volo. Modalità poliglotta attivata.
*   **👁️ Aspetto:** Dimensione del carattere e colori, per non diventare cieco. Bordi neon e ombre ammorbidite per un'immersione totale.
*   **🧠 Impostazioni IA:** Cambia modello, temperatura, ecc. (Ricorda quello che abbiamo visto all'inizio del manuale sul flag `--advanced` se sei uno di quelli che vogliono toccare tutto).

---

## 🎭 DIFFICOLTÀ E UMORISMO (Personalizza la tua sofferenza)

Prima di iniziare, ricorda che l'IA non solo narra, ma **adatta il mondo** secondo le tue preferenze. Questi parametri si scelgono quando si crea il mondo e sono permanenti per quel mondo:

*   **🎮 Difficoltà (Gestita dall'IA):** Non è un semplice moltiplicatore di danno. Il gioco dice all'IA: "Ehi, la difficoltà è questa, agisci di conseguenza".
    *   **Facile:** Non morirai mai (o sarà quasi impossibile), le situazioni sono più semplici, i prezzi sono più economici e i nemici sono più goffi. L'IA ragionerà ogni scena affinché il tuo cammino sia una passeggiata.
    *   **Normale:** L'equilibrio standard.
    *   **Sfida:** L'IA sarà implacabile, i prezzi proibitivi e qualsiasi errore può essere l'ultimo.

*   **🃏 Tono dell'Umorismo:** Definisce come ti parla l'IA e che tipo di eventi accadono. Anche se ogni modello ha il suo modo di interpretare il concetto di "umorismo", l'IA cercherà di adattarsi a ciò che scegli... o no:
    *   **Serio:** Una narrativa epica, oscura e formale.
    *   **Sarcastico:** L'IA riderà dei tuoi fallimenti, ti lancerà frecciatine costanti e userà un tono ironico.
    *   **Delirante:** Preparati all'assurdo. Mucche volanti, situazioni surrealiste e caos totale gestito dalla logica più contorta dell'IA.

---

## 🚧 Avviso: Early Access

RolemIAster è in **sviluppo attivo**, cucinato a fuoco lento.
*   Puoi trovare bug (o "caratteristiche inaspettate").
*   Aggiungo cose nuove ogni settimana.
*   Il tuo feedback vale oro! Dimmi cosa ti piace e cosa ti piace molto. (Se non ti piace qualcosa, dimmelo pure, ma con affetto).

Ora vai, tira iniziativa e crea la tua leggenda!

<!-- source_hash: f3494f05 -->