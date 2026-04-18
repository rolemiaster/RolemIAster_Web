# 🐉 Benvenuti su RolemIAster!

Afferra i tuoi dadi (o il tuo mouse) e preparati a vivere avventure dove l'unico limite è quanto contorta sia la tua immaginazione! **RolemIAster** è un gioco di ruolo infinito alimentato da Intelligenza Artificiale che ti permette di essere l'eroe (o il cattivo) delle tue stesse storie.

---

## ⚠️ AVVISO LEGALE (La parte noiosa ma necessaria)

**LEGGIMI O SUBIRAI L'IRA DEI DADI:**

1.  **🤖 IA Locale Integrata:** RolemIAster porta con sé il proprio cervello digitale. Funziona **senza internet** e senza che tu debba toccare nulla di strano. Installa e gioca!
2.  **☁️ Cloud Opzionale:** Se preferisci spendere i soldi in IA esterne (OpenAI, Gemini...), fai pure con la tua carta di credito. I costi sono affar tuo.
3.  **🎲 Caos Generativo:** L'IA inventa la storia al momento. Se il narratore impazzisce e dice che piovono mucche, non guardare noi. Lo sviluppatore non si assume responsabilità per le follie generate dal modello.
4.  **🏗️ Accesso Anticipato:** Questo è in fase di costruzione. Se trovi un bug, non è un difetto, è una "feature" a sorpresa! (Mandaci feedback, per favore, ci aiuta molto).

---

## 🖥️ REQUISITI DI SISTEMA E CERVELLI DIGITALI (IA)

RolemIAster funziona con **Intelligenza Artificiale Locale**. Ciò significa che il tuo PC farà il lavoro duro di pensare. Non hai bisogno di internet, ma di una scheda grafica che non sia dell'era dei dinosauri. (Nota: Se fa freddo nella tua stanza, questo gioco funziona come riscaldamento gratuito).

### ⚙️ Concetti per non iniziati

La **VRAM (Memoria Video)** è la benzina dell'IA.
*   Grazie a **TurboQuant**, RolemIAster può ora ricordare **oltre 100.000 parole (token)** — quasi il triplo rispetto a prima — senza far collassare la tua scheda grafica.
*   Se la tua GPU esaurisce la memoria, il gioco sarà più lento di una lumaca con l'asma.

---

### 📊 CATALOGO MODELLI (Scegli il tuo veleno)

Gestisci le tue IA in **Configurazione → IA Locale Integrata → Gestisci Modelli**.

#### 🏆 Famiglia Qwen 3.5 — Addestrati specificamente per RolemIAster

Questi modelli sono stati addestrati con **Fine-Tuning Supervisionato (SFT)** per padroneggiare le regole narrative del gioco. Non sono modelli generici: conoscono il contratto JSON di RolemIAster, gli NPC, l'inventario e il combattimento a memoria.

| Modello      | Dimensione | VRAM Minima | Tier | Verdetto                                                                            |
| :----------- | :--------- | :---------- | :--- | :---------------------------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1.5GB     | **3GB**     | B    | ⚡ **Lo Scattante.** Il più veloce di tutti. Ideale per GPU basilari o per giocare senza GPU dedicata. |
| **Qwen3.5-4B** | ~2.8GB     | **4GB**     | A    | ✅ **L'EQUILIBRATO.** Velocità e qualità ottimali. Modello standard raccomandato per la maggior parte dei giocatori. |
| **Qwen3.5-9B** | ~5.5GB     | **8GB**     | S    | 🌟 **Il Narratore.** Narrativa ricca e coerenza superiore. Per chi possiede una RTX 3070 o superiore. |

---

### 🎮 GUIDA ALLA SCELTA RAPIDA

| La Tua Scheda Grafica | VRAM | Modello Raccomandato | Risultato                                |
| :-------------------- | :--- | :------------------ | :--------------------------------------- |
| GTX 1050/1060 / Senza GPU | 4GB  | **Qwen3.5-2B**      | 🆗 Giusto ma giocabile, molto al limite... |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**      | ✅ Buona esperienza                         |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**      | 🚀 Veloce e preciso                       |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**      | 🌟 L'esperienza ideale                    |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**      | 👑 Massima qualità, risposte ultra-veloci |

**💡 Pro Tip:** Lascia sempre circa **2GB di VRAM liberi** per il sistema operativo, altrimenti Windows inizierà a piangere e a chiudere cose.

---

### 🚨 AIUTO! IL MIO PC VA LENTO! (Problemi di VRAM)

Se il gioco ci mette più tempo a rispondere del tuo crush su WhatsApp, probabilmente hai esaurito la VRAM.

**Sintomi che hai fatto il passo più lungo della gamba:**
1.  **Il modello si scarica sulla RAM:** Il PC usa la memoria normale invece di quella grafica. Risultato: LENTEZZA ESTREMA.
2.  **Overflow lieve (1-2GB):** Ci vorranno 30-60 secondi per risposta.
3.  **Overflow moderato (3-5GB):** 2-5 minuti. Puoi andare a prenderti un caffè.
4.  **Overflow grave:** 10-30 minuti. Ingocabile.

#### 🛡️ Protocollo di Emergenza
Se la situazione peggiora, segui questi passaggi in ordine:

1.  **📉 Abbassa la % di VRAM:** Vai in Configurazione e abbassala all'**85%**. Riavvia e prova.
2.  **🧹 Pulizia:** Chiudi quel browser con 40 schede aperte. Si stanno mangiando la tua memoria.
3.  **🛑 Il Limite del 70%:** Non scendere mai sotto il **70%** di VRAM assegnata.
    *   *Perché?* Perché l'IA ha bisogno di spazio per "pensare" (la cache KV). Se le dai meno del 70%, si bloccherà e darà errore.
4.  **🔙 Ritirata Tattica:** Se niente funziona, passa a un modello più piccolo (dal 9B al 4B, o dal 4B al 2B).

---

### ⚙️ CONFIGURAZIONE AVANZATA DEL MODELLO ("Frikkeo Massimo")

> **MODALITÀ ESPERTO:** Se sei un professionista e vuoi accedere alla configurazione di modelli avanzati (aggiungere i tuoi modelli GGUF scaricati da HuggingFace, modificare layer, ecc.), devi avviare il gioco con il comando: `--advanced`.

Per coloro a cui piace armeggiare con i pulsanti in **Configurazione → IA Locale Integrata**:

| Opzione           | Funzione                                                    | Raccomandazione                                                               |
| :---------------- | :---------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **GPU Layers**    | Quanto del modello viene caricato sulla scheda grafica      | **-1** (Significa "TUTTO". Non toccarlo a meno che tu non sappia cosa stai facendo) |
| **Contesto Massimo** | La "memoria a breve termine" dell'IA                        | **16384 - 32768** (Meno di questo e l'IA avrà l'amnesia)                      |
| **Temperatura**   | Creatività vs. Follia                                       | **0.7 - 0.8** (Più alto = più folle; Più basso = più robotica)                 |
| **RAG della Cronologia** | Ricordare cose di molto tempo fa                            | **Sì** (Imprescindibile per campagne lunghe)                                  |
| **Caching Embeddings** | Accelera la ricerca dei ricordi                             | **Sì** (Lo rende più veloce)                                                  |

---

### 🔧 RISOLUZIONE DEI PROBLEMI (Troubleshooting)

| Guasto                 | Soluzione                                                                                |
| :--------------------- | :--------------------------------------------------------------------------------------- |
| **IA Lenta / Lag**     | Verifica che `GPU Layers` sia -1. Chiudi Chrome. Abbassa `Contexto Máximo`. |
| **Errore di Memoria (OOM)** | Riduci `Contexto Máximo` o scegli un modello più piccolo (3B).                      |
| **L'IA delira / Allucina** | Abbassa `Temperatura` a 0.6. Se continua a essere folle, riavvia l'applicazione. |

---

### 🌐 FORNITORI ALTERNATIVI (Solo Esperti)

> **Nota:** L'IA locale inclusa nel gioco è più che sufficiente. Questo è solo per utenti avanzati o coraggiosi.

*   **Motori Locali Esterni:**
    *   **Ollama / LM Studio:** Se hai già i tuoi modelli da nerd, puoi usarli.
*   **API Cloud (A pagamento):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Richiede internet e soldi.
    *   Configuralo in: **Configurazione → IA → Aggiungi Nuovo Fornitore**.

---

### 🌍 COME GIOCARE? (Il Multiverso e Tu)

All'apertura del gioco, hai due percorsi:

1.  **🆕 Nuova Avventura**: Crea la tua leggenda da zero. Il gioco ti chiederà **Nome, Mestiere (Professione), Descrizione Fisica, Descrizione Psicologica e il Background/Pretesto** della tua storia. Inoltre, sceglierai il **Livello di Difficoltà** e il **Tono Umoristico** che guideranno la campagna.
2.  **💾 Continua Partita**: RolemIAster **salva in tempo reale**. Qui non c'è "carica prima di morire" né ritorno. Ogni decisione, ogni gaffe e ogni ferita rimangono impresse a fuoco nella storia. È una **SFIDA**: ciò che fai, è fatto. Vivi con le conseguenze... o muori con esse.

RolemIAster non è una partita isolata; è un **Multiverso Persistente**.
*   **Mondi Infiniti:** Crea i tuoi universi (**Fantasy Medievale** o **Cyberpunk**) con il loro Lore.
*   **Personaggi Infiniti:** All'interno di ogni mondo, puoi avere tutti gli eroi che vuoi.
*   **Linea Temporale Condivisa:** Attenzione! Ciò che fa un personaggio influisce sul mondo degli altri. L'IA è consapevole dei tuoi altri eroi e li riconoscerà come abitanti del mondo.
*   **IA con "Sensi" (Super RAG):** Il sistema RAG (Retrieval-Augmented Generation) agisce come la "spia" dell'IA, dandole ricordi sul mondo, chi ti accompagna, dove ti trovi e cosa è appena successo per rendere la storia 100% coerente.

### L'Interfaccia (La tua cabina di comando)

*   **Pannello Sinistro (TU):** La tua Scheda Personaggio. Vita, mana, abilità e quanto sei bello (Carisma).
*   **Pannello Centrale (LA STORIA):**
    *   **In alto:** Dove il narratore racconta cosa succede.
    *   **In basso:** I tuoi pulsanti di decisione e la casella di testo per scrivere cosa vuoi fare.
*   **Pannello Destro (LE TUE COSE):** Inventario e equipaggiamento. Il paradiso del Diogene digitale.

---

## 📜 REGOLE DEL GIOCO (Sì, ci sono regole)

RolemIAster utilizza un classico e robusto sistema d100 (dado a cento facce).

### 1. I Tuoi Attributi (Ciò che ti definisce)
L'IA genera i tuoi attributi basandosi sul contesto, professione e descrizione che hai inserito. Una volta generati, hai **10 PUNTI EXTRA** da distribuire a tuo piacimento.
*   **Costi Scalati:** Aumentare un attributo fino a 14 costa 1 punto. Da 15 a 16 costa 2 punti. Da 17 in su costa 3 punti! Pensa bene dove metti i muscoli.

*   💪 **Forza (FOR):** La tua pura potenza fisica. Influisce sul danno corpo a corpo e sulla tua capacità di carico.
*   ❤️ **Costituzione (COS):** La tua resistenza. Per sopportare colpi, malattie e veleni.
*   🐘 **Taglia (TAG):** La tua stazza. Grande e pesante, o piccolo e sfuggente.
*   🏃 **Destrezza (DES):** Agilità, mira e capacità di non inciampare nei tuoi stessi piedi.
*   🧠 **Intelligenza (INT):** Imparare, ricordare e risolvere enigmi.
*   🔮 **Potere (POD):** La tua anima, la tua fortuna, forza di volontà e la tua riserva magica.
*   😎 **Carisma (CAR):** Leadership, fascino e capacità di ingannare (o sedurre) la gente.

### 2. Matematica Rapida (Caratteristiche Derivate)
Il motore calcola queste cifre automaticamente basandosi sui tuoi attributi:

*   🩸 **Vita (PV):** `CON * 10`. Se arriva a 0... beh, lo sai. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Il carburante per i tuoi trucchi magici. Senza mana, niente trucchi. (Un mago senza mana è solo un tipo con un camice che fa cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. La tua energia per combattere e muoverti senza morire nel tentativo.
*   🧠 **Umanità (UM):** `(CON+POD) * 5`. (Solo in Cyberpunk: Misura quanto ti rimane di umano prima che i cavi ti facciano impazzire).
*   ⚔️ **Punti Azione (PA):** `(INT + DES) / 2`. Determina la tua Iniziativa. Chi colpisce per primo, colpisce due volte.

### 3. Le Tue Abilità
Iniziano con un valore base (es: Furtività = DES + INT) e migliorano usandole. È una percentuale (%).

### 4. Risoluzione delle Azioni (Il Dado)
Quando provi a fare qualcosa di rischioso (arrampicarti, mentire, attaccare...), l'IA ti chiederà un tiro. Il gioco lancia un **d100** invisibile. **(Ricorda: I dadi ti odiano. È personale).**

*   **Il Tuo Obiettivo:** Ottenere un numero **MINORE O UGUALE** al tuo livello di abilità.
    *   *Esempio:* Hai il 45% in Arrampicarsi.
    *   Ottieni un 30: ✅ **Successo**. Ti arrampichi come una scimmia.
    *   Ottieni un 80: ❌ **Fallimento**. Ti fai male cadendo.
    *   **Critico:** Ottenere meno o uguale a **1/5 della tua abilità** (o un 01). Epico! Fai un parkour straordinario con una capriola.
    *   **Fiaschetta:** Un **99 o 100**. I dadi hanno deciso che oggi non è il tuo giorno. Ti cadono i pantaloni a metà strada e cadi di faccia.

---

## 💡 CONSIGLI PER NON MORIRE (VELOCE)

*   **✍️ Sii Descrittivo:** Non scrivere solo "attacco". Scrivi: *"Cerco di schivare la sua ascia rotolando a terra e gli conficco il mio pugnale nella caviglia."* L'IA ti premierà.
*   **🧪 Sperimenta:** Non sei limitato ai pulsanti. Scrivi follie! L'IA improvviserà.
*   **🎭 Interpreta:** Entra nel personaggio. Leggi le descrizioni e agisci come farebbe il tuo personaggio, non come faresti tu in pigiama.

---

## ⚔️ IL COMBATTIMENTO (Alle armi!)

Quando le parole falliscono, arriva il momento delle botte. Il combattimento è **tattico** e funziona per **Tic** (tempo).

### 🕹️ Come funziona:
*   **Tic:** Ogni azione costa tempo. Le armi pesanti sono lente (consumano molti tic). I pugnali sono veloci.
*   **La Tua Velocità:** Dipende dai tuoi Punti Azione (PA).

### Azioni Base:
*   **🗡️ Attacca:** Colpisci con ciò che hai sfoderato.
*   **🛡️ Blocca:** Ti metti sulla difensiva. Riduce il danno ma consuma Stamina.
*   **🏃 Fuggi:** Da codardi (o da saggi che vogliono vivere).
*   **🏳️ Arrenditi:** Se vedi che non vinci, puoi implorare pietà.
*   **✨ Magia / Cyberware:** Fuoco, raggi laser, hack...

### 💬 Azioni Testo Libero (NOVITÀ!)
Non ti piacciono i pulsanti? Scrivi quello che vuoi fare come se parlassi con un Master in carne e ossa!
*   **Esempi:** *"Lanciare palla di fuoco sul goblin"*, *"Sguainare la mia spada runica"*, *"Usare pozione su me stesso"*.
*   **Direttore di Scena:** Il combattimento ora prende vita. L'IA genera eventi ambientali e reazioni che arricchiscono la narrazione: travi che cadono, nemici che indietreggiano, torce che precipitano! Il campo di battaglia non è più statico!
*   **Se l'IA non capisce:** Ti chiederà di riformulare. Il tuo turno NON viene perso!
*   **⚠️ Limitazione:** Muovere oggetti tra slot (equipaggiare dallo zaino, caricare munizioni) si fa con **Drag & Drop** sull'interfaccia, non via testo.

### ⚠️ REGOLA D'ORO DI SOPRAVVIVENZA
**SFODERA PRIMA DI COMBATTERE!**
Sguainare l'arma in mezzo al combattimento consuma tempo (Tic). Se ti beccano con la spada nel fodero, te le daranno fin dentro il documento d'identità mentre tenti goffamente di estrarla. O PEGGIO ANCORA!, SE HAI LE ARMI NELLO ZAINO INVECE CHE NEL LORO SLOT DI EQUIPAGGIAMENTO (Scusate un attimo, devo tirare fuori il grandespada dallo zaino, so che lo avevo qui... da qualche parte...) 🤦‍♂️
👉 Clicca sull'etichetta dell'arma equipaggiata (pannello destro) per sfoderarla. Si illuminerà di verde.

Tentare di muovere armi durante il combattimento consuma tempo (Tic) e può risultare in un attacco a sorpresa, inoltre è molto probabile che tu perda il turno, che tu fallisca per il nervosismo dell'ascia che si avvicina alla tua fronte o che ti cada a terra. (Forse non è stata una buona idea creare un personaggio con TDAH)

---

## ✨ MAGIA E CYBERNETICA

A seconda che il tuo mondo sia "Fantasy Medievale" o "Cyberpunk":

### 🧙‍♂️ Fantasy: Incantamenti
Sei un mago? Puoi incantare il tuo equipaggiamento.
1.  **Impara:** Hai bisogno dell'incantesimo nel tuo grimorio.
2.  **Lancia (Drag & Drop):** Trascina l'incantesimo dalla tua lista sull'oggetto nel tuo inventario.
3.  **Costo:** Mantenere un incantamento attivo **consuma Mana per turno**.
4.  **Avviso:** Se finisci il mana nel bel mezzo del combattimento, la spada di fuoco torna ad essere un pezzo di ferro arrugginito.

### 🦾 Cyberpunk: Impianti
Vuoi occhi con zoom o braccia da gorilla?
1.  Cerca un **Tecnocirurgo** (NPC di servizio).
2.  Paga i crediti (niente è gratis nel futuro).
3.  **Costo in Umanità:** Ogni impianto ti toglie un pezzo di anima (**Umanità**).
    *   Se ne metti troppi, diventerai una **Cyberpsicosi** (una tostiera assassina su gambe) e perderai il controllo del tuo personaggio.

---

## 🛒 NEGOZI E SERVIZI (SIS)

Parla con gli NPC per commerciare.
*   **IA Suggerisce, Tu Comandi:** Quando parli con un mercante o guaritore, l'IA ti suggerirà i suoi servizi (riparare, vendere, curare), ma apparirà un pulsante **"Vedi Servizi"** per farti decidere quando entrare nella modalità transazionale.
*   **Trattativa:** La tua abilità di **Commercio** (basata sul Carisma) decide i prezzi. Se sei brutto o antipatico, ti fregheranno.
*   **Vendi:** Clicca con il **Tasto Destro** su un oggetto del tuo inventario per venderlo al negoziante o trascinalo su di lui.

---

## 🎒 GESTIONE INVENTARIO (Tetris)

*   **Peso:** Hai un limite di carico (Forza + Taglia). Se porti troppa ferraglia, sarai lento e penalizzato (il Diogene non è tuo amico).
*   **Pannelli:**
    *   **Equipaggiamento:** Ciò che indossi.
    *   **Cintura:** Accesso rapido in combattimento (consuma meno tempo usare pozioni da qui).
    *   **Zaino:** Il fondo del sacco.
*   **Uso Fluido:** Trascina una pozione o del cibo direttamente sul **tuo volto** (il ritratto) per consumarla all'istante. Puoi anche usare il menu contestuale (clic destro -> Usa).

---

## 🛠️ IMPOSTAZIONI FINALI

Nel menu **Configurazione** puoi modificare tutto:
*   **🌍 Lingua:** L'IA ti tradurrà tutto il gioco e le risposte al volo. Modalità poliglotta attivata.
*   **👁️ Aspetto:** Dimensione del carattere e colori, per non diventare cieco. Bordi al neon e ombre smussate per un'immersione totale.
*   **🧠 Impostazioni IA:** Cambia modello, temperatura, ecc. (Ricorda quanto abbiamo visto all'inizio del manuale riguardo al flag `--advanced` se sei uno di quelli che vogliono toccare tutto).

---

## 🎭 DIFFICOLTÀ E UMORE (Personalizza la tua sofferenza)

Prima di iniziare, ricorda che l'IA non solo narra, ma **adatta il mondo** alle tue preferenze. Questi parametri vengono scelti alla creazione del mondo e sono permanenti per detto mondo:

*   **🎮 Difficoltà (Gestita dall'IA):** Non è un semplice moltiplicatore di danno. Il gioco dice all'IA: "Ehi, la difficoltà è questa, agisci di conseguenza".
    *   **Facile:** Non morirai mai (o sarà quasi impossibile), le situazioni sono più semplici, i prezzi sono più bassi e i nemici sono più goffi. L'IA ragionerà ogni scena affinché il tuo cammino sia di rose.
    *   **Normale:** L'equilibrio standard.
    *   **Sfida:** L'IA sarà implacabile, i prezzi proibitivi e ogni errore potrebbe essere l'ultimo.

*   **🃏 Tono Umoristico:** Definisce come ti parla l'IA e che tipo di eventi accadono. Anche se ogni modello ha il suo modo di interpretare il concetto "umorismo", l'IA cercherà di adattarsi a ciò che scegli... o no:
    *   **Serio:** Una narrativa epica, oscura e formale.
    *   **Sarcastico:** L'IA riderà dei tuoi fallimenti, ti lancerà frecciatine costanti e userà un tono ironico.
    *   **Delirante:** Preparati all'assurdo. Mucche volanti, situazioni surreali e caos totale gestito dalla logica più contorta dell'IA.

---

## 🚧 Avviso: Accesso Anticipato

RolemIAster è in **sviluppo attivo**, cucinandosi a fuoco lento.
*   Puoi trovare bug (o "caratteristiche inaspettate").
*   Aggiungo cose nuove ogni settimana.
*   Il tuo feedback vale oro! Dimmi cosa ti piace e cosa ti piace molto. (Se qualcosa non ti piace, dimmelo anche, ma con affetto).

Ora vai, tira iniziativa e crea la tua leggenda!

<!-- source_hash: 4b8ac77b -->