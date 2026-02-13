# 🐉 Benvenuto su RolemIAster!

Impugna i tuoi dadi (o il tuo mouse) e preparati a vivere avventure dove l'unico limite è quanto contorta possa essere la tua immaginazione! **RolemIAster** è un gioco di ruolo infinito alimentato dall'Intelligenza Artificiale che ti permette di essere l'eroe (o il cattivo) delle tue storie.

---

## ⚠️ AVVISO LEGALE (La parte noiosa ma necessaria)

**LEGGIMI O SUBIRAI L'IRA DEI DADI:**

1.  **🤖 IA Locale Integrata:** RolemIAster porta il suo cervello digitale. Funziona **senza internet** e senza che tu debba toccare nulla di strano. Installa e gioca!
2.  **☁️ Cloud Opzionale:** Se preferisci spendere soldi in IA esterne (OpenAI, Gemini...), fai pure con la tua carta di credito. I costi sono affar tuo.
3.  **🎲 Caos Generativo:** L'IA inventa la storia al momento. Se il narratore impazzisce e dice che piovono mucche, non guardare noi. Lo sviluppatore non è responsabile delle follie che il modello genera.
4.  **🏗️ Accesso Anticipato:** Questo è in fase di lavorazione. Se trovi un bug, non è un difetto, è una "feature" a sorpresa! (Mandaci feedback, per favore, ci aiuta molto).

---

## 🖥️ REQUISITI DI SISTEMA E CERVELLI DIGITALI (IA)

RolemIAster funziona con **Intelligenza Artificiale Locale**. Ciò significa che il tuo PC farà il lavoro pesante di pensare. Non hai bisogno di internet, ma di una scheda grafica che non sia dell'era dei dinosauri. (Nota: se fa freddo nella tua stanza, questo gioco funziona come riscaldamento gratuito).

### ⚙️ Concetti per non iniziati

La **VRAM (Memoria Video)** è la benzina dell'IA.
*   RolemIAster ha bisogno di "ricordare" da **12.000 a 16.000 parole (token)** per non perdere il filo della storia.
*   Se la tua GPU rimane senza memoria, il gioco andrà più lento di una lumaca con l'asma.

---

### 📊 CATALOGO MODELLI (Scegli il tuo veleno)

Gestisci le tue IA in **Configurazione → IA Locale Integrata → Gestisci Modelli**.

#### 🏆 Famiglia Qwen 2.5 (Il meglio del meglio)

| Modello | Dimensione | VRAM Minima | Livello | Verdetto |
|---|---|---|---|---|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Lo Stagista.** Fa il suo dovere, ma non chiedergli di scrivere Shakespeare. A volte si confonde. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **L'ELETTO.** Equilibrato, intelligente e veloce. È il modello consigliato di default. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Il Professore.** Narrazione ricca, profonda e dialoghi molto naturali. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Livello Divino.** Hai bisogno di un'astronave (RTX 3090/4090) per muovere questo. |

---

### 🎮 GUIDA ALLA SCELTA RAPIDA

| La Tua Scheda Grafica | VRAM | Modello Consigliato | Risultato |
|---|---|---|---|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Giusto ma giocabile (Contesto basso) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Va bene |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Vola |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ L'esperienza ideale |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Lusso |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Massima qualità |

**💡 Pro Tip:** Lascia sempre circa **2GB di VRAM liberi** per il sistema operativo, altrimenti Windows inizierà a piangere e a chiudere cose.

---

### 🚨 AIUTO! IL MIO PC VA LENTO! (Problemi di VRAM)

Se il gioco impiega più tempo a rispondere del tuo crush su WhatsApp, probabilmente hai esaurito la VRAM.

**Sintomi di essere stato troppo ambizioso:**
1.  **Il modello si riversa sulla RAM:** Il PC usa la memoria normale invece di quella grafica. Risultato: LENTEZZA ESTREMA.
2.  **Overflow lieve (1-2GB):** Ci vorranno 30-60 secondi per risposta.
3.  **Overflow moderato (3-5GB):** 2-5 minuti. Puoi andare a prenderti un caffè.
4.  **Overflow severo:** 10-30 minuti. Ingicabile.

#### 🛡️ Protocollo di Emergenza
Se la situazione peggiora, segui questi passaggi in ordine:

1.  **📉 Abbassa la % di VRAM:** Vai su Configurazione e abbassala all'**85%**. Riavvia e prova.
2.  **🧹 Pulizia:** Chiudi quel browser con 40 schede aperte. Si stanno mangiando la tua memoria.
3.  **🛑 Il Limite del 70%:** Non scendere mai sotto il **70%** di VRAM assegnata.
    *   *Perché?* Perché l'IA ha bisogno di spazio per "pensare" (la cache KV). Se le dai meno del 70%, rimarrà vuota e darà errore.
4.  **🔙 Ritiro Tattico:** Se nulla funziona, passa a un modello più piccolo (dal 7B al 3B).

---

### ⚙️ CONFIGURAZIONE AVANZATA DEL MODELLO

Per chi ama toccare pulsanti in **Configurazione → IA Locale Integrata**:

| Opzione | Funzione | Raccomandazione |
|---|---|---|
| **GPU Layers** | Quanto del modello viene caricato sulla grafica | **-1** (Significa "TUTTO". Non toccare a meno che tu non sappia cosa stai facendo) |
| **Contesto Massimo** | La "memoria a breve termine" dell'IA | **16384 - 32768** (Meno di questo e l'IA avrà l'amnesia) |
| **Temperatura** | Creatività vs Follia | **0.7 - 0.8** (Più alta = più folle; Più bassa = più robotica) |
| **RAG della Cronologia** | Ricordare cose di molto tempo fa | **Sì** (Indispensabile per campagne lunghe) |
| **Cache Embeddings** | Accelera la ricerca dei ricordi | **Sì** (Lo fa andare più veloce) |

---

### 🔧 SOLUZIONE PROBLEMI (Troubleshooting)

| Guasto | Soluzione |
|---|---|
| **IA Lenta / Lag** | Verifica che `GPU Layers` sia -1. Chiudi Chrome. Abbassa il `Contesto Massimo`. |
| **Errore di Memoria (OOM)** | Riduci il `Contesto Massimo` o scegli un modello più piccolo (3B). |
| **L'IA delira / Allucina** | Abbassa la `Temperatura` a 0.6. Se continua a essere folle, riavvia l'applicazione. |

---

### 🌐 FORNITORI ALTERNATIVI (Solo Esperti)

> **Nota:** L'IA locale che il gioco fornisce è più che sufficiente. Questo è solo per utenti avanzati o coraggiosi.

*   **Motori Locali Esterni:**
    *   **Ollama / LM Studio:** Se hai già i tuoi modelli preferiti, puoi usarli.
*   **API Cloud (A pagamento):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Richiede internet e di spendere soldi.
    *   Configuralo in: **Configurazione → IA → Aggiungi Nuovo Fornitore**.

---

## 🎲 COME GIOCARE?

All'apertura del gioco, hai due percorsi:

1.  **🆕 Nuova Avventura**: Crea la tua leggenda da zero. Il gioco ti guiderà nella scelta di razza, classe, mondo e premessa. (Se la vita ti dà limoni... o un 3 in Forza, diventa Bardo).
2.  **💾 Carica Partita**: Continua esattamente da dove avevi lasciato prima di quella morte umiliante. (O per correggere quel "piccolo errore di calcolo" con il drago).

### L'Interfaccia (La tua cabina di pilotaggio)

*   **Pannello Sinistro (TU):** La tua Scheda del Personaggio. Vita, mana, abilità e quanto sei bello (Carisma).
*   **Pannello Centrale (LA STORIA):**
    *   **Sopra:** Dove il narratore racconta cosa succede.
    *   **Sotto:** I tuoi pulsanti di decisione e la casella di testo per scrivere cosa vuoi fare.
*   **Pannello Destro (LE TUE COSE):** Inventario e equipaggiamento. Il paradiso del Diogene digitale.

---

## 📜 REGOLE DEL GIOCO (Sì, ci sono regole)

RolemIAster usa un classico e robusto sistema d100 (dado a cento facce).

### 1. I Tuoi Attributi (Ciò che ti definisce)
Vengono generati casualmente, proprio come nel gioco di ruolo da tavolo di una volta!

*   💪 **Forza (FOR):** Per colpire forte e sollevare pietre.
*   ❤️ **Costituzione (CON):** Per sopportare colpi, malattie e veleni.
*   🐘 **Taglia (TAG):** Grande e pesante, o piccolo e agile.
*   🏃 **Destrezza (DES):** Agilità, mira e non inciampare nei tuoi stessi piedi.
*   🧠 **Intelligenza (INT):** Imparare, ricordare e risolvere enigmi.
*   🔮 **Potere (POT):** La tua anima, la tua fortuna, forza di volontà e magia.
*   😎 **Carisma (CAR):** Leadership, fascino e capacità di ingannare la gente.

### 2. Matematica Rapida (Caratteristiche Derivate)
*   **Vita (PV):** `(CON + TAG) / 2`. Se arriva a 0... beh, lo sai. F.
*   **Mana (PM):** Uguale al tuo POT. Senza mana, niente trucchi. (Un mago senza mana è solo un tipo con una vestaglia che fa cosplay).
*   **Punti Azione (PA):** `(INT + DES) / 2`. Determina la tua Iniziativa. Chi colpisce per primo, colpisce due volte.

### 3. Le Tue Abilità
Iniziano con un valore base (es: Furtività = DES + INT) e migliorano usandole. È una percentuale (%).

### 4. Risoluzione delle Azioni (Il Dado)
Quando provi a fare qualcosa di rischioso (arrampicarti, mentire, attaccare...), l'IA ti chiederà un tiro.
Il gioco lancia un **d100** invisibile. **(Ricorda: i dadi ti odiano. È personale).**

*   **Il Tuo Obiettivo:** Ottenere **MENO O UGUALE** alla tua abilità.
    *   *Esempio:* Hai 45% in Arrampicata.
    *   Ottieni un 30: ✅ **Successo**. Sali come una scimmia.
    *   Ottieni un 80: ❌ **Fallimento**. Ti fai un bel tonfo.
    *   Ottieni un 01-05: ✨ **CRITICO!** Fai un parkour epico con una capriola.
    *   Ottieni un 99-100: 💀 **Fallimento Critico!** Ti cadono i pantaloni a metà strada e cadi a faccia in giù.

---

## 💡 CONSIGLI PER NON MORIRE (VELOCE)

*   **✍️ Sii Descrittivo:** Non scrivere solo "attacco". Scrivi: *"Cerco di schivare la sua ascia rotolando sul terreno e gli infilo il mio pugnale alla caviglia"*. L'IA ti premierà.
*   **🧪 Sperimenta:** Non sei limitato ai pulsanti. Scrivi follie! L'IA improvviserà.
*   **🎭 Fai Role-Playing:** Entra nella parte. Leggi le descrizioni e agisci come farebbe il tuo personaggio, non come faresti tu in pigiama.

---

## ⚔️ IL COMBATTIMENTO (Alle armi!)

Quando le parole falliscono, arriva l'ora delle botte. Il combattimento è **tattico** e funziona per **Tick** (tempo).

### 🕹️ Come funziona:
*   **Tick:** Ogni azione costa tempo. Le armi pesanti sono lente (consumano molti tick). I pugnali sono veloci.
*   **La Tua Velocità:** Dipende dai tuoi Punti Azione (PA).

### Azioni Base:
*   **🗡️ Attaccare:** Colpisci con ciò che hai estratto.
*   **🛡️ Bloccare:** Ti metti sulla difensiva. Riduce il danno ma consuma Stamina.
*   **🏃 Fuggire:** Da codardi (o da saggi che vogliono vivere).
*   **🏳️ Arrendersi:** Se vedi che non vinci, puoi implorare pietà.
*   **✨ Magia / Cyberware:** Fuoco, raggi laser, hacking...

### ⚠️ REGOLA D'ORO DI SOPRAVVIVENZA
**ESTRAI L'ARMA PRIMA DI COMBATTERE!**
Estrarre l'arma nel mezzo del combattimento consuma tempo (Tick). Se ti beccano con la spada nel fodero, ti prenderai botte fino alla carta d'identità mentre provi goffamente a estrarla. O PEGGIO ANCORA!, SE PORTI LE TUE ARMI NELLO ZAINO INVECE CHE NEL LORO SLOT DI EQUIPAGGIAMENTO (Scusate un attimo, devo tirar fuori il soprammano dallo zaino, so che ce l'avevo qui... da qualche parte...) 🤦‍♂️
👉 Clicca sull'etichetta dell'arma equipaggiata (pannello destro) per estrarla. Si illuminerà di verde.

Tentare di spostare armi in combattimento consuma tempo (Tick) e può portare a un attacco a sorpresa, inoltre è molto probabile che perderai il turno, che fallirai per i nervi dell'ascia che ti si avvicina alla fronte o che ti cada a terra. (Forse non è stata una buona idea crearsi un personaggio con TDAH)

---

## ✨ MAGIA E CYBERNETICA

A seconda che il tuo mondo sia di "Fantasia medievale" o "Cyberpunk":

### 🧙‍♂️ Fantasia: Incantesimi
Sei un mago? Puoi incantare il tuo equipaggiamento.
1.  **Impara:** Hai bisogno dell'incantesimo nel tuo grimorio.
2.  **Lancia (Drag & Drop):** Trascina l'incantesimo dalla tua lista sull'oggetto nel tuo inventario.
3.  **Costo:** Mantenere un incantesimo attivo **consuma Mana per turno**.
4.  **Avviso:** Se rimani a secco di mana nel mezzo del combattimento, la spada di fuoco torna a essere un pezzo di ferro arrugginito.

### 🦾 Cyberpunk: Impianti
Vuoi occhi con zoom o braccia da gorilla?
1.  Cerca un **Tecnochirurgo** (NPC di servizio).
2.  Paga i crediti (nulla è gratis nel futuro).
3.  **Costo in Umanità:** Ogni impianto ti toglie un pezzo di anima (**Umanità**).
    *   Se ne metti troppi, ti trasformerai in una **Cyberpsicosi** (un tostapane con gambe assassino) e perderai il controllo del tuo personaggio.

---

## 🛒 NEGOZI E SERVIZI

Parla con gli NPC per commerciare.
*   **Tirare sul Prezzo:** La tua abilità **Commercio** (basata sul Carisma) decide i prezzi. Se sei brutto o antipatico, ti fregheranno.
*   **Vendere:** Fai **Click Destro** su un oggetto nel tuo inventario per venderlo al negoziante.

---

## 🎒 GESTIONE INVENTARIO (Tetris)

*   **Peso:** Hai un limite di carico (Forza + Taglia). Se porti troppa ferraglia, sarai lento e penalizzato (Il Diogene non è tuo amico).
*   **Pannelli:**
    *   **Equipaggiamento:** Ciò che indossi.
    *   **Cintura:** Accesso rapido in combattimento (consuma meno tempo usare pozioni da qui).
    *   **Zaino:** Il fondo del sacco.
*   **Uso Rapido:** Trascina una pozione o cibo direttamente sul **tuo volto** (il ritratto) per consumarla all'istante.

---

## 🛠️ IMPOSTAZIONI FINALI

Nel menu **Configurazione** puoi toccare tutto:
*   **🌍 Lingua:** L'IA ti tradurrà tutto il gioco e le risposte al volo.
*   **👁️ Aspetto:** Dimensione dei caratteri e colori, per non rimanere cieco.
*   **🧠 Impostazioni IA:** Cambia modello, temperatura, ecc.

---

## 🚧 Avviso: Accesso Anticipato

RolemIAster è in **sviluppo attivo**, cucinato a fuoco lento.
*   Puoi trovare bug (o "caratteristiche inaspettate").
*   Aggiungo cose nuove ogni settimana.
*   Il tuo feedback vale oro! Dimmi cosa ti piace e cosa ti piace molto.

Ora vai, tira iniziativa e crea la tua leggenda!

<!-- source_hash: 2511f352 -->