****************************************************************************************************
07/02/2026 20:26 - Sistema di Interpretazione Semantica del Combattimento - BETA_v054
****************************************************************************************************
🧪 GIÀ DISPONIBILE:

⚠️ **AVVISO IMPORTANTE:** IL GIOCO PUÒ MIGRARE IL VECCHIO DATABASE ALLA NUOVA STRUTTURA TRAMITE LE OPZIONI DEL LAUNCHER. NON RACCOMANDO QUESTA PROCEDURA; ANCHE SE LA VECCHIA PARTITA FUNZIONA, MOLTE COSE SARANNO CORROTTE. IL MIO CONSIGLIO È DI ELIMINARE TUTTI I SALVATAGGI PRECEDENTI. NON È NECESSARIO CANCELLARE L'INTERO DATABASE SE NON IN CASI ESTREMI.

Cambiamenti:

- 🌍 **Gestore di Mondi e Personaggi:** Ora hai totale libertà. Crea i tuoi Mondi con regole e ambientazione proprie. Tutti i personaggi di uno stesso mondo condividono la stessa linea temporale, ponendo le basi per il futuro multigiocatore.
- 🧠 **Memoria Contestuale (Super RAG):** L'IA ora ha 'sensi'. Tiene conto di dove sei, con chi sei e cosa è appena successo. Più intuitivo e coerente!
- 🌍 **Lore nel Primo Personaggio:** Risolto! Ora la descrizione manuale del mondo raggiunge l'IA direttamente durante la creazione iniziale.
- ⚙️ **Sistema di Mondi Migliorato:** Nome del mondo indipendente dalle regole tecniche (Fantasy/Cyberpunk).
- 📝 **Chiarezza nella Creazione:** Istruzioni interne migliorate per l'invenzione del background.
- 🧠 **Combattimento a Testo Libero:** Scrivi azioni come 'lancia incantesimo' o 'sguaina spada'. L'IA capisce l'intento.
- 🎨 **Nuova Interfaccia Epica!** Completamente rimodellata con menu in stile RPG, sfondi animati e immersione neon.
- 🎬 **IA Regista di Scena (MIGLIORATO):** Il combattimento prende vita con eventi ambientali e reazioni.
- ⚔️ **Sguainare con le Parole:** Digita 'sguaina spada' invece di cliccare. Attenzione! In combattimento può portare al fallimento o alla perdita del turno.
- 📖 **Incantesimi Riconosciuti:** L'IA conosce tutto il tuo grimorio.
- 🌍 **Narrativa nella tua Lingua:** Rispetta rigorosamente la lingua selezionata, evitando lo 'spanglish'.
- 🛡️ **Mai più Turni Persi:** Se il gioco non capisce, chiede chiarimenti. Turno NON perso.
- 🎒 **Inventario Manuale:** Interfaccia drag-and-drop per spostare oggetti.
- 🧪 **Uso Pozioni Fluido:** Trascina sul ritratto o tasto destro 'Usa'.
- 🩸 **Correzione Danni:** La vita scende correttamente. Non sei più immortale.
- 👻 **Addio agli Item Fantasma:** Ripara automaticamente gli oggetti che l'IA dimentica di creare.
- 🐛 **Correzione Critica NPC:** Decisioni tattiche degli NPC corrette.
- 🎒 **Correzione Inventario Iniziale:** I personaggi non iniziano più nudi.
- 🎲 **Creazione Personaggio:** Risolto exploit punti infiniti.
- 🖼️ **Ritratti Sistemati:** Sistema trova immagini corrette indipendentemente dal nome del mondo.
- 💍 **Icone Intelligenti:** Oggetti e anelli con icone precise.
- 🧪 **Tooltip Migliorati:** Informazioni complete al passaggio del mouse.
- 🎵 **Miglioramenti Audio:** Musica non si ferma premendo i tasti.
- [I18N] **Fix Impianti:** Aggiunte traduzioni per slot e icone.
- [FIX][AUDIO] **Audio Inconsistente:** Suoni adattati all'ambientazione.
- [FIX][I18N] **Pulizia es.json:** Rimossi duplicati.
- ⚙️ **Rilevamento Modelli Intelligente:** Legge i modelli GGUF direttamente. Gestore contesto auto.
- 📂 **Risparmio Spazio:** Sposta i modelli invece di copiarli.
- ⚖️ **Giustizia negli Attributi:** Risolto exploit punti infiniti.
- 📖 **Guida di Allenamento:** README aggiornato con sistema di esperienza.
- 📜 **Codice dei Mondi Epici:** Generazione storia profonda (religioni, leggi, geografia).
- 🧙 **Storie Coerenti:** Background integrato con il lore del mondo.
- ⚡ **Interfaccia Fluida:** Generazione in background (nessun blocco).
- 🚀 **Inizio Avventura Istantaneo:** Partenza diretta dopo la creazione.
- 🎭 **Background con Pretesto:** Ragione urgente per iniziare l'avventura.
- 🧹 **Interfaccia Semplificata:** Tasto 'Inizia Storia' centralizzato.
- [FIX][UI] **Duplicazione Visiva:** Bug nome mondo risolto.
- [FEAT][UI] **Caricamento Rapido:** Click singolo per caricare/creare.
- 🧠 **IA più Creativa:** Variabilità tecnica per rompere i loop.

****************************************************************************************************
06/02/2026 02:32 - Supporto Vulkan (AMD/Intel) e Gestione Errori Robusta - Beta_v053
****************************************************************************************************
- What's New (IT):
  - 🚀 **Motore Ibrido Vulkan:** Supporto ufficiale per schede grafiche AMD e Intel! Ora il gioco include un motore Vulkan dedicato che si attiva automaticamente (o manualmente) per accelerare l'IA su sistemi non-NVIDIA.
  - ⚙️ **Controllo Totale del Motore:** Abbiamo aggiunto l'opzione "Forza Vulkan" sia nel Launcher che nelle Impostazioni. Se hai problemi con CUDA o vuoi provare le prestazioni di Vulkan (che in molte configurazioni vola), hai tu il comando.
  - 🚦 **Stato del Sistema:** Ora puoi vedere esattamente quale motore sta ruggendo sotto il cofano (🟢 VERDE per CUDA, 🔴 ROSSO per Vulkan) nel pannello di stato.
  - 🛡️ **Semaforo IA:** Se l'Intelligenza Artificiale si "stanca" (supera la sua quota) o cade la connessione internet, il gioco ti avviserà con una finestra chiara e utile invece di lasciarti aspettare in silenzio.
  - 🔄 **Sicurezza Anti-Blocco:** Se si verifica un errore di connessione, il gioco non "rompe" più la conversazione. Le tue opzioni di dialogo riappariranno permettendoti di riprovare senza perdere i progressi.
  - ☁️ **Memoria Cloud:** Il menu delle impostazioni ora ricorda correttamente le tue preferenze sui provider cloud tra una sessione e l'altra.

****************************************************************************************************
03/02/2026 20:23 - Ottimizzazione Memoria VRAM e Stabilità di Caricamento - Beta_v052
****************************************************************************************************
- What's New (IT):
  - 🧠 **Cervello Ottimizzato:** Abbiamo corretto un grave errore che portava l'IA a tentare di "pensare due volte" allo stesso tempo, raddoppiando l'uso della memoria della scheda grafica e causando rallentamenti estremi o blocchi. La tua VRAM ti ringrazierà!
  - 💾 **Caricamento Sicuro:** Migliorata la stabilità generale durante il caricamento delle partite per assicurare che riprendere la tua avventura sia sempre un'esperienza fluida.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Critico: Stabilità, Multi-GPU e Miglioramenti alla Localizzazione - Beta_v051
****************************************************************************************************
- What's New (IT):
  - 🚑 **Correzione Critica:** Risolto un problema che impediva in alcune rare circostanze l'avvio del gioco ("Crash Totale") a causa di una corruzione del database che il Launcher non riusciva a ripulire. Ora l'opzione "Cancella Database" è molto più efficace.
  - ⚡ **Miglioramento Hardware:** Corretto un errore che faceva sì che la modalità di "Configurazione Automatica" ignorasse la potenza dei sistemi con più schede grafiche in alcune configurazioni con GPU non identiche.
  - 🛠️ **Utilità:** Aggiunta una nuova opzione nel Launcher per aprire facilmente il registro (log) della sessione precedente e agevolare il supporto.
  - 🌍 **Localizzazione:** Corretti vari pulsanti che apparivano in inglese (Yes/No) nel launcher. Ora rispettano la lingua selezionata.
  - 📖 **Interfaccia:** Migliorato il formato del testo delle informazioni sulla versione per renderlo più leggibile.
  
  - **Prossimamente:** Prossimo punto in fase di implementazione: compatibilità con GPU AMD, NVIDIA e Intel tramite Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fix Manuali & Stabilità - Beta_v050
****************************************************************************************************
- Novità:
  **Potenza Multi-GPU e Correzioni Critiche!**
  
  * **🚀 Supporto Multi-GPU:** Implementata la capacità di dividere grandi modelli di IA tra più schede grafiche. *Ora puoi usare tutto il tuo arsenale hardware; Potere Illimitato!*
  * **🛡️ Stabilità:** Aggiunte tutte le librerie DLL mancanti per evitare chiusure impreviste. *Ho blindato il motore, se fallisce ora sarà colpa di un fallimento critico coi dadi.*
  * **📖 Manuali Web Dinamici:**
    * **Selettore Reale:** Il menu delle lingue ora verifica quali file esistono realmente prima di mostrarli. *Finite le opzioni fantasma che non facevano nulla; magia di divinazione livello 5.*
    * **Fix Errore 403:** Risolto l'errore di permessi che impediva di visualizzare il Changelog all'interno del gioco. *Ho insegnato all'app a chiedere il passaggio correttamente ("Apriti Sesamo!").*
  * **🌍 Lingue:** Revisione di testi e traduzioni. *Modalità Poliglotta attivata.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizzazione e Miglioramenti IA - Beta_v049
****************************************************************************************************
- Novità:
  Abbiamo perfezionato l'esperienza di gioco con correzioni importanti e un nuovo strumento visivo:

  * **Inventario Pulito e Affidabile:** Basta trovare "oggetti fantasma" o item con nomi strani nel tuo zaino. Abbiamo implementato un sistema di validazione narrativa che assicura che tutto ciò che raccogli o compri esista realmente nel mondo di gioco.
  * **Dialoghi Fluidi:** Abbiamo riparato quei fastidiosi pulsanti che a volte apparivano come "Unknown" o non rispondevano. Ora le opzioni di dialogo con gli NPC mostreranno sempre il testo corretto.
  * **Generazione Personaggi Robusta:** Creare il tuo eroe è ora un processo solido. Abbiamo risolto i conflitti che a volte lasciavano la scheda incompleta o con statistiche errate combinando biografia e stats.
  * **Nuova Barra di Stato IA:** Ora puoi vedere il cervello della macchina in funzione! Abbiamo aggiunto una barra nella parte superiore che ti mostra la velocità di risposta e l'uso della memoria in tempo reale. Così saprai sempre se l'IA sta "pensando" alla tua prossima avventura.

****************************************************************************************************
28/01/2026 03:50 - Fix Critico Compilazione - Beta_v048
****************************************************************************************************
- Novità:
  Risolto un errore critico che impediva l'avvio del gioco su nuove installazioni. Migliorata la stabilità e la compatibilità con diversi computer.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & Supporto RTX 50 - Beta_v047
****************************************************************************************************
- Novità:

  > [!IMPORTANTE]
  > **PER MOTIVI DI COMPATIBILITÀ, È NECESSARIO ELIMINARE IL DB PRECEDENTE ALTRIMENTI È MOLTO PROBABILE CHE SI VERIFICHINO ERRORI NELLA CONFIGURAZIONE IA**
  > **(Soluzione: Clicca sull'icona dell'ingranaggio ⚙️ del Launcher -> Cancella Database)**

  *Supporto Critico per RTX Serie 50: Risolto un errore grave che causava la chiusura imprevista durante il tentativo di generare personaggi sulle nuove schede grafiche NVIDIA (RTX 5070, 5080, 5090).
  (Siccome non dispongo di una RTX della serie 5000 non ho potuto provare direttamente se la soluzione è al 100%, ma in teoria dovrebbe essere risolto. Aspetto i vostri canti di vittoria qui!)
  
  *Aggiornamento del Motore IA: Abbiamo aggiornato il cervello locale del gioco per renderlo compatibile con l'ultima tecnologia hardware, assicurando che tutti possano godersi l'esperienza offline, indipendentemente da quanto sia moderno il loro computer.
  
  *Nuovo Launcher: Aggiornamenti e notizie in tempo reale dal sito ufficiale.


****************************************************************************************************
26/01/2026 06:49 - Integrazione Web Documentazione - Beta_v045
****************************************************************************************************
- Novità:
  *Ora il Manuale Utente e il Registro delle Modifiche vengono caricati direttamente dal nostro sito ufficiale, garantendo che tu abbia sempre le informazioni più aggiornate senza bisogno di scaricare patch. Include modalità offline intelligente.

  *Abbiamo rinforzato la stabilità del gioco affinché non si blocchi mai all'avvio. Inoltre, i venditori sono tornati dalle loro vacanze nel limbo: ora appaiono correttamente, hanno merce sugli scaffali e rispettano l'ambientazione del mondo (niente pozioni magiche nel futuro).

  *È stato risolto il bug che non permetteva di modificare i parametri dell'IA e la selezione del modello di IA, impedendo ad alcuni utenti con VRAM limitata di giocare.
  **In caso di necessità di modificare i parametri dell'IA, raccomando caldamente di provare prima abbassando la % di VRAM all'85%, riavviare e provare; se questo non è ancora sufficiente, raccomando di controllare che la VRAM della GPU non sia utilizzata da altri processi che non siano del gioco stesso (riavvio del PC se necessario, chiusura di applicazioni che possano occupare VRAM). Se dopo aver abbassato la quantità di VRAM anche fino al 70% continua a non funzionare, sconsiglio di scendere ulteriormente perché il gioco non potrà gestire i prompt che vengono inviati all'IA, quindi anche se si riesce a evitare l'overflow della VRAM, il gioco non potrà funzionare perché non ha le risorse per farlo; in quel caso l'unica opzione rimanente è passare a un modello inferiore, reimpostare i parametri dell'IA su automatico e riavviare.

****************************************************************************************************
26/01/2026 04:00 - Stabilizzazione Core e Diagnostica Servizi - Beta_v044
****************************************************************************************************
- Novità:
  Stabilizzazione Core e Diagnostica Servizi" "Correzioni critiche nella generazione dei personaggi, UI (MainWindow) e ottimizzazione della ricerca semantica. Avvio della diagnostica profonda della modalità servizi.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Log e Stabilità - Beta_v043
****************************************************************************************************
- Description:
  Patch correttiva focalizzata sulla diagnostica e correzione del loop dell'UI.

- Changes:
  Risolto bug visivo della finestra di riavvio
  Nuovo sistema di log in %LOCALAPPDATA% per la diagnostica
  Ottimizzazioni delle prestazioni interne

****************************************************************************************************
24/01/2026 06:30 - Supporto Biografia Backend - Beta_v042
****************************************************************************************************
- Description:
  Esposizione dei dati della biografia per l'UI e regolazioni i18n.

<!-- source_hash: 5f218fc5 -->
