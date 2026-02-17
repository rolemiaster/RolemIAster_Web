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

