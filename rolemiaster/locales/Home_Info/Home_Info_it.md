# 📢 Messaggio dello Sviluppatore (Accesso Anticipato)

Benvenuto in RolemIAster. Prima che tu ti tuffi nella tua prossima grande avventura, voglio rubarti un minuto per chiarire un paio di cose (prometto di essere breve, che i dadi ti aspettano).

Questo gioco è in fase di **Accesso Anticipato (Early Access)**.
Sono uno sviluppatore solitario —sì, solo io, la mia tastiera e litri di caffè—, il che significa che faccio tutto quello che posso, ma a volte non riesco a fare tutto in tempo. Mi scuso in anticipo se dovessi tardare a correggere qualche bug sfuggente, implementare quella funzione che tanto desideri, o rispondere immediatamente su Discord. Faccio il giocoliere, ma non ho ancora ottenuto tentacoli extra.

## ⚠️ Avviso Importante sull'Hardware (Locale vs Cloud)
Ci sono due modi per giocare, e la tua esperienza dipende da quale scegli:

*   **Modalità Locale (Gratis, Privata):** Se vuoi eseguire l'IA sul tuo PC, i requisiti dello store (12GB VRAM Minimo) sono sacri. Meno di così e l'IA si trascinerà o bloccherà il tuo computer. È pura matematica, non magia.
*   **Modalità Cloud (API Gemini, GPT, ecc. solo se avvii con il comando `--advanced`):** Qui cambia la musica! Se configuri il gioco per utilizzare servizi cloud (come Google Gemini o OpenAI), il lavoro pesante viene svolto sui loro server, non sul tuo. In questa modalità, il gioco funziona fluidamente su praticamente qualsiasi computer, dato che la tua scheda grafica è a riposo.

## Gestione delle Aspettative
Se sei venuto aspettandoti una super produzione AAA senza intoppi, temo che tu sia nel posto sbagliato (per il momento). Il gioco si trova in una fase iniziale, e onestamente, solo i coraggiosi che comprendono e supportano questo tipo di progetti sperimentali hanno la pazienza di goderselo ora.

## Garanzia di Soddisfazione
Se senti che il gioco è troppo acerbo per te o il tuo hardware ne risente troppo, nessuno si arrabbierà se chiedi un rimborso. Al contrario, sarò lieto di accoglierti di nuovo in futuro —e che tu paghi 40 o 60 USD quando il gioco sarà rifinito e completo 😉—. Il prezzo attuale è un regalo per chi ha fiducia in me in questa fase.

Detto questo, la mia gratitudine è infinita per coloro che decidono di rimanere. I vostri report e suggerimenti sono il vero motore di questo progetto. Grazie a voi, il gioco è migliorato brutalmente in poche settimane.

**RolemIAster si sta costruendo su misura per voi.**

*Grazie per la pazienza, il supporto e che i critici siano dalla vostra parte!*


*********************************************************************************
#  AGGIORNIAMO A QWEN 3.5 + TURBO QUANT! NUOVO MOTORE, NUOVA TECNOLOGIA, NUOVA ERA 🚀
*********************************************************************************

🚧 AREA DI LAVORO: LOBOTOMIA COMPLETATA (E FUNZIONA) 🧠🔧
In cosa sono impegnato?
Sto cambiando il motore del gioco, e non è cosa da poco.
Finora, ogni volta che giocavi un turno, il sistema caricava nell'IA un "mattone" di regole da 15.000 a 20.000 token. In pratica, era come obbligare il master a rileggersi l'intero manuale prima di ogni frase. 📚🥵
Ho implementato due tecnologie che lavorano in sinergia:

1. 🧠 **TurboQuant — La memoria compressa**
   - Ho integrato una tecnologia di Google (presentata all'ICLR 2026) che comprime la memoria dell'IA a quasi un terzo della sua dimensione originale.
   - Se hai una RTX delle serie 3000, 4000 o 5000, il gioco la sfrutterà automaticamente.
   - ⚠️ **NOTA IMPORTANTE SULLE GPU AMD:** SEBBENE CI SIANO INDIZI DI FUNZIONAMENTO DI TURBO QUANT SU SCHEDE AMD/INTEL (VULKAN), IN PRATICA PRESENTA MOLTI ERRORI E QUINDI PER ORA NON VERRÀ IMPLEMENTATO. CI ASPETTIAMO CHE LA COMMUNITY FACCIA LA SUA PARTE E CHE ABBIA PRESTO NOVITÀ.
   - **Risultato:** L'IA ricorda di più spendendo meno VRAM. È pura magia digitale. ✨

2. 📖 **Contesto massivo (+200%)**
   - Ho riscritto il calcolo della memoria conversazionale in modo chirurgico: ora il gioco legge le specifiche tecniche di ogni modello e calcola con precisione quanto entra nella tua GPU.
   - Il modello da 9B passa da ricordare ~36.000 parole a oltre ~110.000 su una GPU con 16GB di VRAM. 🚀
   - Inoltre, ho aumentato il limite di risposta da 4.096 a 8.192 token: narrazioni più lunghe senza interruzioni a metà frase.

Il risultato finale: Una velocità superiore nella maggior parte dei casi, partite lunghe che non perdono il filo, e un'IA molto più concentrata (e sobria). 🎯

Nota di Realtà (Disclaimer 🧐):
Se anche i giganti della Silicon Valley (Gemini, ChatGPT...) a volte vedono elefanti rosa, il mio modello locale non sarà perfetto il 100% delle volte. Ma non è più il "tipo ubriaco al matrimonio" — ora è un Master di Ruolo competente con memoria da elefante vero. 🐘

Grazie per la pazienza mentre aggiustavo i bulloni! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->