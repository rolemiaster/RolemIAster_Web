****************************************************************************************************
27/02/2026 16:46 - Sincronizzazione del Caricamento in Combattimento e Flusso dei Turni - Beta_v059
****************************************************************************************************
- What's New (IT):
  - **Combattimento e ritmo di gioco**
    - ⚔️ **Assalti più fluidi:** non più battiti a vuoto quando la tua azione era in coda e il caricamento delle partite restituisce decisioni reali, non pulsanti fantasma.
    - 🧭 **Scena sincronizzata:** ciò che vedi sullo schermo riflette lo stato attuale del combattimento e appaiono solo i nemici presenti nella tua posizione.
    - 🚫 **Meno scartoffie interne:** abbiamo eliminato controlli inutili in modo che il gioco proceda senza blocchi amministrativi.
  
  - **Motore visivo e pannello avanzato**
    - 🧹 **Selettore pulito:** le cartelle tecniche sono nascoste e il filtraggio è normalizzato per scegliere modelli senza rumore.
    - ️ **Sfondi stabili:** se un'immagine è in corso non ne travolge altre; inoltre, il caricamento in combattimento evita rigenerazioni a sorpresa.
    - 🎛️ **Pannello immagine potenziato:** strategia di rendering, forza del cambio e passaggi minimi ora sono controllabili dall'interfaccia avanzata con aiuto contestuale.
  
  - **Creazione personaggio e ritratti**
    - 🧍 **Sesso in vista:** scegli Maschio/Femmina nel modulo base e l'intero flusso (ritratti, dati interni) rispetta quella scelta.
    - 👶➡️🧓 **Età comprensibile:** utilizziamo fasce narrative in modo che l'IA disegni meglio la fase di vita.
    - 🧼 **Prompt igienizzati:** puliamo il rumore tecnico prima di inviare richieste di immagini e questo si riflette nella stabilità dei ritratti.
    -  **Schede affidabili:** l'IA non può "dimenticare" attributi obbligatori né gonfiare l'inventario iniziale.
  
  - **Narrativa, regole e RAG**
    - 🚀 **Arrivo PG più diretto:** la scena iniziale usa contratti JSON rigorosi ed evita strane mescolanze di contesto.
    -  **RAG focalizzato:** vengono indicizzate solo le radici permesse e la scheda inviata al prompt contiene riassunti degli effetti per risparmiare token.
  
  - **Configurazione IA e PSR**
    - 🎛️ **Nuovo controllo PSR Fase 1:** decidi se vuoi la modalità chirurgica sempre in esplorazione o solo quando il prompt stringe.
    - 📏 **Soglia regolabile (95% predefinito):** affina il margine che concedi prima di attivare il PSR automatico in base al tuo hardware.
    - 🧠 **Prompt più leggeri e senza loop:** riassumiamo gli stati e l'IA ha a disposizione strumenti per non saturarsi quando la storia si complica.

****************************************************************************************************
24/02/2026 12:32 - Generazione di immagini tramite IA, miglioramenti narrativi e controllo - Beta_v058
****************************************************************************************************
- What's New (IT):
  **🧠 Evoluzione del Cervello: Ciao, Qwen 3**
  Ho migrato il motore del gioco per sfruttare al massimo la nuova generazione di modelli Qwen3. I vecchi modelli della serie 2.5 hanno accompagnato l'inizio del viaggio di RolemIAster, ma è arrivato il momento di lasciare alle spalle i vecchi fasti. Questo salto quantitativo nella generazione delle storie si traduce in una prosa più immersiva, regole molto più rigorose e personaggi più coerenti. Preparate le vostre schede grafiche, perché il Game Master è appena salito di livello.

  **Novità: Seconda fase della Generazione di Immagini tramite IA**
  - 🎨 **Il tuo mondo in immagini:** Ho integrato un sistema iniziale di generazione di immagini tramite Intelligenza Artificiale. Mentre giochi, il sistema cerca di generare ritratti e paesaggi che accompagnino l'ambientazione della tua partita.
  - 🖼️ **Sfondi dinamici:** Le immagini vengono generate in background senza interrompere la partita. Vedrai come appaiono progressivamente sullo sfondo, nelle schede dei personaggi e nel Codicillo.
  - 🧹 **Gestione immagini:** Nuovo pannello per visualizzare ed eliminare le immagini generate che non ti piacciono.
  
  **Miglioramenti nella generazione dei personaggi:**
  - ⚙️ **Creazione casuale più solida:** Ho unificato e migliorato il motore di regole che l'IA usa per creare personaggi da zero, garantendo inventari più logici (da 5 a 10 oggetti coerenti) e schede più equilibrate.
  - 🧠 **Cervello diviso:** L'IA ora comprende meglio quando deve "inventare" un personaggio da zero e quando deve limitarsi a estrarre i dati dalla biografia che hai scritto tu stesso.
  - ⚡ **Velocità su misura:** Nuova sezione nelle Impostazioni Visuali. Scegli tra "Rapida" (1 passaggio), "Media" (2 passaggi) o "Alta" (4 passaggi) per adattare il tempo di generazione alla potenza del tuo computer.
  - 🛠️ **Ottimizzazione tecnica:** Il modello di IA per le immagini viene caricato nella **RAM (Memory)** e processato tramite **CPU**, senza occupare memoria video (VRAM). Questo garantisce che non interferisca con le prestazioni dell'IA principale del gioco (LLM). Richiede circa 5GB di RAM aggiuntivi, rimanendo entro i requisiti minimi ufficiali di Steam.
  - 📤 **Condividi le tue avventure:** Tutte le immagini generate vengono salvate automaticamente. Le troverai nella cartella: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Selettore modelli (Avanzato):** Se avvii il gioco con il parametro `--advanced`, ora puoi scegliere quale modello di IA usare per le immagini dal pannello Aspetto. Questo permette agli appassionati di provare diverse versioni di Stable Diffusion ottimizzate per OpenVINO (file .xml/.bin).
  
  **Narrativa e Cervello IA:**
  - 🧠 **Fine dei loop:** È stata implementata una nuova "Dottrina della Memoria" nell'IA. Ora distingue meglio tra "ricordi" (ciò che è già accaduto) e il "presente" (ciò che sta accadendo). Questo aiuta a ridurre i casi in cui l'IA si ripeteva o rimaneva bloccata.
  - 📜 **Archivi storici:** Il sistema presenta i tuoi ricordi all'IA come un "Archivio Storico Chiuso", rendendo più facile l'uso di queste informazioni come riferimento per far avanzare la storia.
  - ⚡ **Istruzioni ottimizzate:** È stato migliorato il modo in cui il gioco richiede la narrazione nella tua lingua, liberando capacità del modello per concentrarsi sulla creatività.
  - 👁️ **Focus narrativo:** È stata riscritta la percezione dell'IA. Ora comprende meglio quali elementi sono "sfondo statico" e non dovrebbe ripeterli inutilmente in ogni paragrafo.
  - 🔀 **Decisioni più chiare:** L'IA ora offre vie d'uscita più definite. I suoi suggerimenti (pulsanti) si dividono tra l'indagare l'ambiente (Approfondisci) o cambiare rotta (Divergi).
  - 🫵 **Tratamiento diretto:** È stata modificata l'istruzione di base per garantire che l'IA si rivolga a te con il "Tu", migliorando l'immersione personale.
  
  **Creazione del personaggio:**
  - 🖼️ **Ritratti del personaggio:** Quando generi un personaggio con l'IA, il sistema cerca di creare un ritratto basato su età, professione e descrizione. Tieni presente che è una versione iniziale e la fedeltà (specialmente nell'età) può variare a seconda del modello utilizzato. (Sto ancora facendo dei test, ma l'inizio è promettente)
  - 🎲 **Generazione casuale affidabile:** Corretto un errore per cui il pulsante "Genera con IA" poteva fallire al primo tentativo, lasciando i campi vuoti. Ora il sistema di correzione intelligente assicura che la risposta sia sempre valida.
  
  **Gestione delle immagini generate:**
  - 🖼️ **Galleria immagini IA:** Nuovo pannello nel menu Archivio che mostra tutte le immagini generate dall'IA durante le tue partite (ritratti, sfondi). Puoi filtrare per tipo di immagine o per mondo.
  - 🗑️ **Eliminazione selettiva:** Seleziona una o più immagini ed eliminale se non ti convincono (magari quella in cui l'IA ha deciso che era una buona idea parcheggiare un autobus nella stalla del castello). Il sistema pulisce sia il file che il suo registro interno.
  - 📂 **Accesso diretto:** Fai doppio clic su qualsiasi miniatura per aprire la cartella in cui si trova il file. Se la cartella è già aperta, verrà riutilizzata la stessa finestra.
  - 💾 **Ricorda le dimensioni:** La dimensione della finestra della galleria viene salvata automaticamente tra le sessioni.
  
  **Prestazioni su configurazioni basse (Importante per GPU con poca VRAM):**
  - 🧠 **PSR - Governance Ibrida:** Nuovo sistema che divide il lavoro dell'IA in due fasi: Pianificazione (Chef) ed Esecuzione (Cuochi). Ciò consente ai modelli locali con 8 GB di VRAM di funzionare evitando crash dovuti all'eccesso di contesto (+12K token), a costo di una latenza maggiore; l'interazione con l'IA passa da un singolo prompt a una serie di prompt (minore è la VRAM, maggiore sarà il numero di prompt generati e il tempo di risposta).
  - ⚡ **Esecuzione intelligente:** Il sistema decide automaticamente se elaborare tutto in una volta (monolitico) o dividere in parti (iterativo) in base alla VRAM disponibile. Le GPU con meno VRAM attivano la modalità a parti solo quando necessario.
  - 📊 **Ottimizzazione dinamica:** Il PSR riduce il carico di token durante la generazione, consentendo agli utenti con schede grafiche da 4GB di completare la creazione dei personaggi e la generazione della storia che prima si bloccavano.
  - 🔄 **Coherencia mantenuta:** Nonostante la divisione del lavoro, il sistema inietta un'"intenzione maestra" affinché l'IA non perda il filo di ciò che stava facendo.
  
  **Voci IA (miglioramento incrementale):**
  Generazione in tempo reale di voci in tutte le lingue (alcune lingue sono più limitate di altre, la più varia per tipi di voci è l'inglese)
  - 🗣️ **Grida di combattimento con voce:** All'inizio del combattimento contro nemici ostili, viene ora riprodotta una frase vocale contestuale di apertura.
  - 🎭 **Frases dinamiche per contesto:** Il motore può generare brevi linee vocali per eventi specifici (servizi/combattimento) in base alla lingua, all'ambientazione e al profilo del personaggio.
  - 🧠 **Modelli vocali interni:** I modelli tecnici delle voci sono stati separati dal sistema narrativo per evitare interfererze con la storia.
  - 🔊 **Maggiore chiarezza all'ascolto:** Migliorata l'intelligibilità e la prosodia della sintesi per dare priorità a una dizione comprensibile.
  
  **⚠️ Avviso di compatibilità (Partite precedenti):**
  - 🔄 A causa della quantità di modifiche interne al motore di regole e al sistema di ambientazione, le **partite e i mondi salvati in precedenza continueranno a essere giocabili (probabilmente)**, ma è molto probabile che presentino errori o comportamenti imprevisti. **Si consiglia di creare un nuovo mondo pulito** per godere correttamente di tutti i miglioramenti.

****************************************************************************************************
17/02/2026 07:20 - Generazione di Immagini IA, Miglioramenti Narrativi e Controllo - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (IT):
  **⚠️ RAMO SPERIMENTALE (BETA DI STEAM)**
  Questa versione è attualmente disponibile solo nel **Ramo Sperimentale** di Steam. Per attivarla:
  1. Clicca con il tasto destro su **RolemIAster** nella tua Libreria di Steam.
  2. Seleziona **Proprietà...**
  3. Vai alla scheda **Beta**.
  4. In "Partecipazione alla beta", seleziona **experimental** dal menu a tendina.
  
  **Novità: Prima fase della Generazione di Immagini IA**
  - 🎨 **Il Tuo Mondo in Immagini:** Ho integrato un sistema iniziale di generazione di immagini tramite Intelligenza Artificiale. Mentre giochi, il sistema tenta di generare ritratti e paesaggi che accompagnino l'ambientazione della tua partita.
  - 🖼️ **Sfondi Dinamici:** Le immagini vengono generate in background senza interrompere la partita. Le vedrai apparire progressivamente sullo sfondo, nelle schede dei personaggi e nel Codice.
  - ⚡ **Velocità su Misura:** Nuova sezione nelle Impostazioni Visive. Scegli tra "Rapida" (1 passaggio), "Media" (2 passaggi) o "Alta" (4 passaggi) per adattare il tempo di generazione alla potenza del tuo computer.
  - 🛠️ **Ottimizzazione Tecnica:** Il modello IA per le immagini viene caricato nella **RAM (Memoria)** ed elaborato via **CPU**, senza occupare memoria video (VRAM). Questo garantisce che non interferisca con le prestazioni dell'IA principale del gioco (LLM). Richiede circa 5GB di RAM aggiuntiva, rimanendo entro i requisiti minimi ufficiali di Steam.
  - 📤 **Condividi le tue Avventure:** Tutte le immagini generate vengono salvate automaticamente. Le troverai nella cartella: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa e Cervello IA:**
  - 🧠 **Fine dei Loop:** È stata implementata una nuova "Dottrina della Memoria" nell'IA. Ora distingue meglio tra "ricordi" (ciò che è già accaduto) e il "presente" (ciò che sta accadendo). Questo aiuta a ridurre i casi in cui l'IA si ripeteva o rimaneva bloccata.
  - 📜 **Archivi Storici:** Il sistema presenta i tuoi ricordi all'IA come un "Archivio Storico Chiuso", facilitando l'uso di tali informazioni come riferimento per far avanzare la storia.
  - ⚡ **Istruzioni Ottimizzate:** È stato migliorato il modo in cui il gioco richiede la narrazione nella tua lingua, liberando capacità del modello per concentrarsi sulla creatività.
  - 👁️ **Focus Narrativo:** La percezione dell'IA è stata riscritta. Ora comprende meglio quali elementi sono "sfondo statico" e non dovrebbe ripeterli inutilmente in ogni paragrafo.
  - 🔀 **Decisioni Più Chiare:** L'IA ora offre vie di uscita più definite. I suoi suggerimenti (pulsanti) sono divisi tra investigare l'ambiente (Approfondire) o cambiare rotta (Divergere).
  - 🫵 **Trattamento Diretto:** È stata regolata l'istruzione di base per garantire che l'IA ti dia del "Tu", migliorando l'immersione personale.
  
  **Creazione del Personaggio:**
  - 🖼️ **Ritratti del Personaggio:** Quando generi un personaggio con l'IA, il sistema tenta di creare un ritratto basato su età, professione e descrizione. Tieni presente che è una versione iniziale e la fedeltà (specialmente nell'età) può variare in base al modello utilizzato. (continuo a fare test ma l'inizio è promettente)
  - 🎲 **Generazione Casuale Affidabile:** Corretto un bug per cui il pulsante "Genera con IA" poteva fallire al primo tentativo, lasciando i campi vuoti. Ora il sistema di correzione intelligente assicura che la risposta sia sempre valida.

****************************************************************************************************
17/02/2026 07:04 - Generazione di Immagini IA, Miglioramenti Narrativi e Controllo - Beta_v058
****************************************************************************************************
- What's New (IT):
  **⚠️ RAMO SPERIMENTALE (BETA DI STEAM)**
  Questa versione è attualmente disponibile solo nel **Ramo Sperimentale** di Steam. Per attivarla:
  1. Clicca con il tasto destro su **RolemIAster** nella tua Libreria di Steam.
  2. Seleziona **Proprietà...**
  3. Vai alla scheda **Beta**.
  4. In "Partecipazione alla beta", seleziona **experimental** dal menu a tendina.
  
  **Novità: Prima fase della Generazione di Immagini IA**
  - 🎨 **Il Tuo Mondo in Immagini:** Ho integrato un sistema iniziale di generazione di immagini tramite Intelligenza Artificiale. Mentre giochi, il sistema tenta di generare ritratti e paesaggi che accompagnino l'ambientazione della tua partita.
  - 🖼️ **Sfondi Dinamici:** Le immagini vengono generate in background senza interrompere la partita. Le vedrai apparire progressivamente sullo sfondo, nelle schede dei personaggi e nel Codice.
  - ⚡ **Velocità su Misura:** Nuova sezione nelle Impostazioni Visive. Scegli tra "Rapida" (1 passaggio), "Media" (2 passaggi) o "Alta" (4 passaggi) per adattare il tempo di generazione alla potenza del tuo computer.
  - 🛠️ **Ottimizzazione Tecnica:** Il modello IA per le immagini viene caricato nella **RAM (Memoria)** ed elaborato via **CPU**, senza occupare memoria video (VRAM). Questo garantisce che non interferisca con le prestazioni dell'IA principale del gioco (LLM). Richiede circa 5GB di RAM aggiuntiva, rimanendo entro i requisiti minimi ufficiali di Steam.
  - 📤 **Condividi le tue Avventure:** Tutte le immagini generate vengono salvate automaticamente. Le troverai nella cartella: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativa e Cervello IA:**
  - 🧠 **Fine dei Loop:** È stata implementata una nuova "Dottrina della Memoria" nell'IA. Ora distingue meglio tra "ricordi" (ciò che è già accaduto) e il "presente" (ciò che sta accadendo). Questo aiuta a ridurre i casi in cui l'IA si ripeteva o rimaneva bloccata.
  - 📜 **Archivi Storici:** Il sistema presenta i tuoi ricordi all'IA come un "Archivio Storico Chiuso", facilitando l'uso di tali informazioni come riferimento per far avanzare la storia.
  - ⚡ **Istruzioni Ottimizzate:** È stato migliorato il modo in cui il gioco richiede la narrazione nella tua lingua, liberando capacità del modello per concentrarsi sulla creatività.
  - 👁️ **Focus Narrativo:** La percezione dell'IA è stata riscritta. Ora comprende meglio quali elementi sono "sfondo statico" e non dovrebbe ripeterli inutilmente in ogni paragrafo.
  - 🔀 **Decisioni Più Chiare:** L'IA ora offre vie di uscita più definite. I suoi suggerimenti (pulsanti) sono divisi tra investigare l'ambiente (Approfondire) o cambiare rotta (Divergere).
  - 🫵 **Trattamento Diretto:** È stata regolata l'istruzione di base per garantire che l'IA ti dia del "Tu", migliorando l'immersione personale.
  
  **Creazione del Personaggio:**
  - 🖼️ **Ritratti del Personaggio:** Quando generi un personaggio con l'IA, il sistema tenta di creare un ritratto basato su età, professione e descrizione. Tieni presente che è una versione iniziale e la fedeltà (specialmente nell'età) può variare in base al modello utilizzato. (continuo a fare test ma l'inizio è promettente)
  - 🎲 **Generazione Casuale Affidabile:** Corretto un bug per cui il pulsante "Genera con IA" poteva fallire al primo tentativo, lasciando i campi vuoti. Ora il sistema di correzione intelligente assicura che la risposta sia sempre valida.

****************************************************************************************************
13/02/2026 21:47 - Ottimizzazione Configurazione IA e Potenziamento i18n - Beta_v055
****************************************************************************************************
- What's New (IT):
  - ⚙️ **Controllo Priorità Locale:** Ora puoi regolare manualmente la priorità delle tue schede grafiche anche se il sistema è in modalità automatica.
  - 🧠 **Informazioni Rotazione IA:** Ho aggiunto pannelli informativi nelle impostazioni dei provider esterni per spiegare come funziona la rotazione automatica in caso di errore o superamento della quota.
  - 🌍 **Supporto GPU Esteso:** Il messaggio informativo i18n ora riflette correttamente il supporto per NVIDIA CUDA e Vulkan (AMD/Intel). Traduzioni aggiornate in tutte le lingue!
  - ⚙️ **Connettività Migliorata:** Riparati i connettori per Ollama e altri server compatibili con OpenAI.
  - 🧠 **IA Poliglotta e Robusta:** Il rilevamento degli oggetti ottenuti nella storia ora funziona in 10 lingue. Inoltre, ho blindato il sistema affinché non rimanga mai senza storia iniziale, anche se l'IA ha un intoppo tecnico.
  - 🔄 **Rotazione Intelligente:** Ho sistemato il sistema di rotazione affinché non rinunci alla tua IA locale al primo tentativo. Ora il sistema le darà un'opportunità di correggersi prima di cercare aiuto esterno.
  - 🧹 **Pulizia delle Fondamenta:** Ho eliminato regole vecchie e confuse affinché il "cervello" dell'IA sia più nitido e preciso nella gestione dei tuoi oggetti.

