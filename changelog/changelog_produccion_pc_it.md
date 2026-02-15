****************************************************************************************************
15/02/2026 02:57 - Scrittura diretta, correzioni di stabilità e rilevamento d - Beta_v058
****************************************************************************************************
- What's New (IT):
  **Stabilità:**
  - 🛠️ **Addio ai crash di configurazione:** Corretti diversi bug che si verificavano in determinate condizioni e che impedivano di aprire o modificare le impostazioni dell'IA quando si cambiava modello o si ripristinavano i valori.
  - 🗃️ **Database silenzioso:** Il fastidioso avviso di "Database incompatibile" all'avvio del gioco non apparirà più se il tuo database è corretto. Verrà mostrato solo in caso di una reale modifica strutturale che richiede una migrazione.
  
  **Esperienza di gioco:**
  - 🎯 **Controllo di precisione IA:** Ora puoi inserire manualmente i valori di Contesto, Token, Temperatura o Livelli GPU direttamente in un campo numerico accanto al cursore. Non dipendi più solo dalle "barre di scorrimento"! Entrambi i controlli sono sincronizzati: sposta il cursore e il numero si aggiorna, oppure scrivi il numero e il cursore si muove.
  - ⌨️ **Scrittura diretta:** Non è più necessario cliccare sulla casella di testo per scrivere la tua azione! Ora puoi iniziare a digitare direttamente mentre sei nella schermata di gioco. Se interagisci con l'inventario o un altro pannello e poi vuoi scrivere, inizia semplicemente a digitare senza dover selezionare nulla. Il sistema reindirizza automaticamente i tasti premuti al campo di azione. Non interferisce con menu, finestre di dialogo o scorciatoie di sistema.
  
  Altre modifiche minori...

****************************************************************************************************
14/02/2026 21:48 - Sincronizzazione del Contesto e Controllo Risposta IA - Beta_v056
****************************************************************************************************
- What's New (IT):
  **Sistemi e Prestazioni:**
  - 🧠 **Controllo Totale del Contesto:** Ora puoi regolare sia la memoria dell'IA (`n_ctx`) che la lunghezza delle sue risposte (`Max Tokens`) con cursori molto più intuitivi.
  - ♾️ **Modalità Illimitata:** Scorri al minimo per attivare la modalità "Illimitata", lasciando che modelli potenti come Gemini usino tutta la loro capacità senza restrizioni.
  - ⚡ **Riavvio dei Driver:** Nuova opzione nel launcher per riavviare i driver video prima di giocare (opzionale, configurabile dal launcher); ora all'avvio lo schermo lampeggerà, assicurando che tutta la vram sia disponibile ed epurandola dai residui.
  - 🛠️ **Configurazione Robusta:** Corretti errori visivi e problemi tecnici nel salvataggio della configurazione dei tuoi provider IA preferiti.
  - 🚀 **Miglior Rilevamento Errori:** Il gioco ora è più intelligente nel rilevare quando un'IA esterna esaurisce lo spazio.
  
  **Meccaniche e Mondo:**
  - 🎒 **Inventario Garantito:** Basta iniziare un'avventura senza vedere i tuoi oggetti. Il sistema SDIA ora sorveglia anche la creazione del personaggio affinché il tuo equipaggiamento sia sempre lì.
  - 📜 **Lore Purificata:** Riparato un errore che iniettava frammenti di "codice" o testo strano nella storia del tuo mondo. Ora il Codice sarà più puro e leggibile.
  - ⚠️ **Guida alla Compatibilità:** Inclusi avvisi nella configurazione per aiutarti a scegliere modelli compatibili (Instruct/Chat).
  - ⚙️ **Impianti Affidabili:** Corretta la definizione degli slot e il caricamento delle regole nella creazione dei personaggi. Ora tutti i tuoi cyber-potenziamenti useranno slot ufficiali e si auto-equipaggeranno correttamente.
  - 🎓 **Limite Apprendista:** Regolato il bilanciamento iniziale delle abilità. L'IA genera un pacchetto di punti da distribuire automaticamente nelle abilità più importanti in base al contesto del tuo personaggio. I tuoi eroi ora inizieranno come veri novellini, progredendo in modo più logico.

****************************************************************************************************
14/02/2026 05:06 - Rafforzamento dell'Integrità, Consapevolezza dei Personaggi e Ottimizzazione - Beta_v055
****************************************************************************************************
- What's New (IT):
  - 🧠 **Priorità IA a tuo piacimento:** Ora puoi trascinare e rilasciare i tuoi connettori IA per decidere quale utilizzare per primo. Se uno fallisce, il gioco tenterà automaticamente con il successivo nella tua lista di priorità.
  - ⚙️ **Controllo del Precaricamento:** Aggiunta un'opzione nel launcher per decidere se precaricare il modello IA locale o caricarlo solo quando necessario (risparmio di risorse all'avvio).
  - 🛡️ **Cancellazione Sicura e Pulita:** Quando elimini un mondo, il sistema ora si occupa di ripulire assolutamente tutti i dati correlati (personaggi e storia), mantenendo il tuo database impeccabile.
  - 🚀 **Ottimizzazione della Memoria:** Il "cervello" dell'IA ora viene caricato una sola volta e condiviso tra tutte le funzioni, risparmiando molta memoria video (VRAM).
  - 🎨 **Interfaccia Intelligente:** Il pannello di selezione dei mondi ora si adatta perfettamente allo schermo e al testo, senza pulsanti tagliati o spazi mal sfruttati.
  - 🔄 **Rotazione Intelligente Migliorata:** Ho sistemato il sistema di rotazione affinché non rinunci alla tua IA locale al primo tentativo; ora le dà un'opportunità di correggersi prima di cercare aiuto esterno.
  - 🌍 **IA Poliglotta e Robusta:** Il rilevamento degli oggetti e la narrativa sono ora più precisi in 10 lingue, con una protezione speciale per assicurarti che non manchi mai la storia.
  - 🛠️ **Persistenza IA Garantita:** Corretto l'errore che faceva sì che Gemini si "dimenticasse" o si trasformasse in Ollama. Le tue priorità di utilizzo dell'IA vengono ora salvate in modo sicuro e chirurgico.
  - ⚡ **Gemini Ripristinato:** Riparato l'accesso al modello Gemini recuperando le sue chiavi e URL corretti.
  - 🎨 **Interfaccia Tematica Corretta:** I pulsanti di scelta ora recuperano istantaneamente il colore del tuo mondo (es. Oro per il fantasy) al caricamento della partita.
  - 👥 **Consapevolezza tra Personaggi:** L'IA è ora consapevole di tutti i tuoi personaggi! Se hai più eroi nello stesso mondo, l'IA li riconoscerà come abitanti e potrà ricordare cosa ha fatto ognuno individualmente.
  - 🧠 **Memoria con Attribuzione:** Il sistema dei ricordi ora distingue chi ha compiuto ogni azione, evitando che l'IA confonda le tue gesta passate con quelle di altri personaggi.

****************************************************************************************************
13/02/2026 07:56 - Sistema di Interpretazione Semantica di Combattimento - Beta_v054
****************************************************************************************************
- What's New (IT):
  🧪 ORA DISPONIBILE:
  
  ⚠️ **AVVISO IMPORTANTE:** IL GIOCO PUÒ MIGRARE IL VECCHIO DATABASE ALLA NUOVA STRUTTURA TRAMITE LE OPZIONI DEL LAUNCHER. NON LO CONSIGLIO, ANCHE SE IL TUO VECCHIO SALVATAGGIO FUNZIONA, MOLTE COSE SARANNO ROTTE. LA MIA RACCOMANDAZIONE È ELIMINARE TUTTI I SALVATAGGI PRECEDENTI. NON È NECESSARIO CANCELLARE L'INTERO DATABASE TRANNE IN CASI ESTREMI.
  
  Cambiamenti:
  
  - 🌍 **Gestore di Mondi e Personaggi:** Ora hai totale libertà. Crea i tuoi Mondi con le loro regole e ambientazioni, e all'interno di ognuno, crea tutti i personaggi che vuoi. **Nota Importante:** Tutti i personaggi dello stesso mondo condividono la stessa linea temporale e gli eventi accaduti, gettando le basi per la futura modalità multigiocatore.
  - 🧠 **Memoria Contestuale (Super RAG):** L'IA ora ha dei "sensi". Quando cerca informazioni nel Lore o nella sua memoria, tiene conto di dove sei, con chi sei, se sei ferito e cosa è appena successo. Se sei con un Re, ricorderà cose sui re. Se sei ferito, cercherà regole sulla guarigione. È molto più intuitivo e coerente!
  - 🌍 **Lore nel Primo Personaggio:** Scrivevi una descrizione epica del tuo mondo e l'IA la ignorava nel tuo primo personaggio? Risolto! Ora la descrizione manuale del mondo arriva direttamente all'IA durante la creazione iniziale, prima ancora che il sistema di memoria si attivi.
  - ⚙️ **Sistema di Mondi Migliorato:** Ho reso indipendente il nome del tuo mondo dalle regole tecniche. Ora puoi chiamare il tuo mondo come vuoi senza che ciò influisca sul caricamento delle regole Fantasy o Cyberpunk.
  - 📝 **Chiarezza nella Creazione:** Ho migliorato le istruzioni interne affinché l'IA capisca meglio quando deve inventare un background e quando deve limitarsi a estrarre le tue statistiche.
  - 🧠 **Combattimento a Testo Libero:** Ora puoi scrivere le tue azioni in combattimento come se parlassi con un master: "lanciare incantesimo di cura su di me", "sfoderare la mia spada", "usare pozione di cura". L'IA capisce la tua intenzione e la traduce in meccaniche di gioco.
  - 🎨 **Nuova Interfaccia Epica!** Ho rimodellato completamente il gioco. Menu in stile RPG, sfondi animati e un'esperienza visiva totalmente rinnovata. Stile scuro semitrasparente, bordi neon e ombre ammorbidite per un'immersione totale.
  - 🎬 **IA Regista di Scena (MIGLIORATO):** Il combattimento ora prende vita. L'IA genera eventi ambientali e reazioni che arricchiscono la narrazione: torce che cadono, nemici che indietreggiano, travi che crollano. Il campo di battaglia non è più statico!
  - ⚔️ **Sfoderare con le Parole:** Non devi più cliccare sullo slot dell'arma. Scrivi semplicemente "sfoderare spada" o "tirare fuori la mia ascia" e il sistema lo interpreta automaticamente (OCCHIO! farlo in combattimento può risultare in fallimento, errore critico e perdita del turno!... "Ai combattimenti si viene preparati da casa!").
  - 📖 **Incantesimi Riconosciuti:** L'IA ora conosce il tuo libro degli incantesimi completo. Di' "lanciare palla di fuoco" e se possiedi quell'incantesimo, lo lancerà.
  - 🌍 **Narrativa nella tua Lingua:** La storia ora rispetta rigorosamente la lingua selezionata, evitando strani mix tra lingue (spero di non dover mai più vedere lo spanglish! Ho forzato così tanto l'IA che direi che se torna a generare testi in una lingua diversa da quella selezionata, è perché è davvero maledetta).
  - 🛡️ **Niente Più Turni Persi:** Se il gioco non capisce la tua azione, ti chiederà di riformularla. Il tuo turno NON viene perso.
  - 🎒 **Inventario Manuale:** Per spostare oggetti tra gli slot (equipaggiare dallo zaino, caricare munizioni), usa l'interfaccia trascina e rilascia. Questo evita confusioni e risparmia risorse dell'IA.
  - 🧪 **Uso Fluido delle Pozioni:** Ora puoi trascinare pozioni e cibo direttamente sul tuo ritratto per usarli. Ho aggiunto anche l'opzione "Usa" cliccando con il tasto destro. Più intuitivo e veloce!
  - 🩸 **Correzione del Danno:** Non sei più immortale! Abbiamo risolto un problema per cui la barra della salute non scendeva anche se venivi colpito. Ora soffrirai come si deve.
  - 👻 **Addio agli Oggetti Fantasma:** Trovavi un oggetto nella storia ma non appariva mai nel tuo zaino? Problema risolto! Ora il sistema ripara automaticamente gli oggetti che l'IA "dimentica" di creare.
  - 🐛 **Correzione Critica NPC:** Risolto un bug che impediva agli NPC di prendere decisioni tattiche correttamente, facendo sì che "attendessero" sempre invece di attaccare o difendersi.
  - 🎒 **Correzione Inventario Iniziale:** I nuovi personaggi non iniziano più nudi. Ora ricevono correttamente il loro equipaggiamento iniziale.
  - 🎲 **Creazione del Personaggio:** Corretto un exploit in cui alzare e abbassare un attributo in certe soglie generava punti extra infiniti. Finito il trucco del Carisma!
  - 🖼️ **Ritratti Sistemati:** Creavi un mondo con un nome personalizzato e i ritratti sparivano? Risolto! Ora il sistema trova le immagini corrette indipendentemente da come battezzi il tuo mondo.
  - 💍 **Icone Intelligenti:** Gli oggetti (anelli inclusi) ora mostrano icone più precise e corrette nell'interfaccia.
  - 🧪 **Tooltip Migliorati:** Pozioni, consumabili e incantesimi ora mostrano correttamente tutte le loro informazioni ed effetti passando il mouse sopra.
  - 🎵 **Miglioramenti Audio:** La musica di combattimento non si ferma più premendo i pulsanti predefiniti.
  - [I18N] **Fix Impianti:** Aggiunte chiavi di traduzione mancanti per slot degli impianti (`slot_implant_*`) e icone corrispondenti (`icon_implant_*`) in `es.json`.
  - [FIX][AUDIO] **Audio Incoerente:** Adattati gli effetti sonori (SFX) di equipaggiamento oggetti e sfoderamento armi all'ambientazione. Ora il sistema rileva la `setting_key` e usa suoni futuristici/industriali nel Cyberpunk e suoni classici nel Fantasy.
  - [FIX][I18N] **Pulizia es.json:** Eliminate più di 20 chiavi duplicate in `es.json` e corretti refusi nei nomi degli slot (es. "Oíidos" -> "Oídos").
  - ⚙️ **Rilevamento Intelligente dei Modelli:** Ora il gioco legge direttamente il "cervello" dei modelli che importi (GGUF). Rileva il contesto massimo reale automaticamente. (I modelli ufficiali ottimizzati non vengono toccati per la massima stabilità).
  - 📂 **Risparmio di Spazio:** Quando aggiungi un modello dal tuo computer, ora il gioco lo sposta direttamente nella sua cartella invece di copiarlo. I tuoi Gigabyte ti ringrazieranno!
  - ⚖️ **Giustizia negli Attributi:** Corretto un exploit che permetteva di ottenere punti infiniti alzando e abbassando gli attributi durante la creazione.
  - 📖 **Guida all'Addestramento:** Ho aggiornato il Manuale (README) con tutti i dettagli su come i tuoi personaggi guadagnano esperienza e aumentano i loro attributi.
  - 📜 **Codice dei Mondi Epici:** Finito il lore da "un post scriptum"! Ora il generatore crea mondi con una storia profonda, descrivendo le loro religioni, leggi, geografia e personaggi famosi in un formato di cronaca dettagliata.
  - 🧙 **Storie Coerenti:** Il tuo personaggio non nasce più nel vuoto. Il suo background ora si integra intelligentemente con il lore del mondo che hai appena creato o scelto.
  - ⚡ **Interfaccia Fluida:** L'autogenerazione di storie e mondi ora avviene in background. Finite le attese con lo schermo congelato!
  - 🚀 **Inizio Avventura Istantaneo:** Ho eliminato le attese! Ora, dopo aver creato il tuo personaggio, salti direttamente nella storia. Il sistema usa il tuo background arricchito per creare l'inizio perfetto senza che tu debba scrivere un'altra parola.
  - 🎭 **Background con Pretesto:** I tuoi personaggi non hanno più solo un passato, ma anche un motivo urgente per iniziare l'avventura. Il nuovo sistema IA genera automaticamente la scintilla iniziale della storia integrata nella tua biografia.
  - 🧹 **Interfaccia Semplificata:** Ho rimosso i pulsanti e le schermate che non aggiungevano valore. Il pulsante "Inizia Storia" ora centralizza tutto il potere per farti iniziare a giocare il prima possibile.
  - [FIX][UI] **Duplicazione Visiva nella Selezione del Mondo:** Corretto un bug dove il nome del mondo appariva duplicato come "Nome [Nome]". Ora l'etichetta del tipo viene nascosta se ridondante.
  - [FEAT][UI] **Caricamento Rapido (Click Semplice):** Ora è possibile caricare un personaggio o iniziarne la creazione di uno nuovo con un solo click nella schermata di selezione dei mondi. Si mantiene l'espansione dei mondi per evitare conflitti.
  - 🧠 **IA più Creativa:** Ho rotto il "loop di ripetizione" dell'IA iniettando variabilità tecnica in ogni richiesta. Ora i personaggi generati casualmente saranno molto più unici e originali, ignorando gli esempi della guida.
  
  🛡️ Ai coraggiosi che OSERANNO combattere in prima linea: L'avventura vi aspetta, ora più indomabile che mai!

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
