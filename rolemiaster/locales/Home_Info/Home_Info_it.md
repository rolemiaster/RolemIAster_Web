# 📢 Messaggio dello Sviluppatore (Accesso Anticipato)

Benvenuto in RolemIAster. Prima di tuffarti nella tua prossima grande avventura, voglio rubarti un minuto per chiarire un paio di cose (prometto di essere breve, i dadi ti aspettano).

Questo gioco è in fase di **Accesso Anticipato (Early Access)**.
Sono uno sviluppatore solitario —sì, solo io, la mia tastiera e litri di caffè—, il che significa che faccio tutto quello che posso, ma a volte non riesco a fare tutto in tempo. Mi scuso in anticipo se ci metto un po' a risolvere qualche bug sfuggente, implementare quella funzione che desideri tanto, o rispondere immediatamente su Discord. Faccio il giocoliere, ma non mi sono ancora spuntati tentacoli extra.

## ⚠️ Avviso Importante sull'Hardware (Locale vs Cloud)
Ci sono due modi per giocare, e la tua esperienza dipende da quale scegli:

*   **Modalità Locale (Gratis, Privata):** Se vuoi eseguire l'IA sul tuo PC, i requisiti dello store (minimo 8GB VRAM) sono sacri per iniziare col piede giusto. Meno di questo e l'IA arrangherà o bloccherà il tuo computer. È pura matematica, non magia, anche se ora con Turbo Quant, questo potrebbe cambiare in meglio.
*   **Modalità Cloud (API di Gemini, GPT, ecc. solo se avvii con il comando `--advanced`):** Qui cambia tutto! Se configuri il gioco per usare servizi cloud (come Google Gemini o OpenAI), il lavoro pesante viene fatto sui loro server, non sui tuoi. In questa modalità, il gioco funziona fluidamente su praticamente qualsiasi computer, poiché la tua scheda grafica riposa.

## Gestione delle Aspettative
Se sei venuto aspettandoti una produzione AAA senza difetti, temo che tu sia nel posto sbagliato (per ora). Il gioco si trova in una fase iniziale e, onestamente, solo i coraggiosi che capiscono e supportano questo tipo di progetti sperimentali hanno la pazienza per goderselo in questo momento.

## Garanzia di Soddisfazione
Se senti che il gioco è troppo acerbo per te o il tuo hardware ne risente troppo, nessuno si arrabbierà se chiedi un rimborso. Al contrario, sarò felice di accoglierti di nuovo in futuro — e che tu paghi 40 o 60 USD quando il gioco sarà rifinito e completo 😉—. Il prezzo attuale è un regalo per avermi dato fiducia in questa fase.

Detto questo, la mia gratitudine è infinita per coloro che decidono di restare. I vostri report e suggerimenti sono il vero motore di questo progetto. Grazie a voi, il gioco è migliorato enormemente in poche settimane.

**RolemIAster si sta costruendo su misura per voi.**

*Grazie per la pazienza, il supporto e che i critici siano dalla vostra parte!*


*********************************************************************************
# 📢 AGGIORNAMENTO A QWEN 3.5 + TURBO QUANT! NUOVO MOTORE, NUOVA TECNOLOGIA, NUOVA ERA 🚀
*********************************************************************************

🚧 ZONA DI LAVORI: LOBOTOMIA COMPLETATA (E FUNZIONA) 🧠🔧
A cosa sto lavorando?
Sto cambiando il motore di gioco, e non è una cosa da poco.
Fino ad ora, ogni volta che giochi un turno, il sistema lanciava all'IA un "pacco" di regole da 15.000 a 20.000 token. In pratica, era come obbligare il master a rileggersi l'intero manuale prima di ogni frase. 📚🥵
Ho implementato due tecnologie che lavorano in squadra:

1. 🧠 **TurboQuant — La memoria compressa**
   - Ho integrato una tecnologia di Google (presentata a ICLR 2026) che comprime la memoria dell'IA a quasi un terzo della sua dimensione originale.
   - Se hai una RTX delle serie 3000, 4000 o 5000, il gioco la sfrutterà automaticamente.
   - ⚠️ **NOTA IMPORTANTE SULLE GPU AMD:** ANCHE SE CI SONO INDIZI DI FUNZIONAMENTO DI TURBO QUANT SU SCHEDE AMD/INTEL (VULKAN), IN PRATICA DÀ MOLTI ERRORI E PERTANTO PER ORA NON VERRÀ IMPLEMENTATO. CI ASPETTIAMO CHE LA COMUNITÀ FACCIA LO STESSO E CHE CI SIANO PRESTO NOVITÀ.
   - **Risultato:** L'IA ricorda di più spendendo meno VRAM. È pura magia digitale. ✨

2. 📖 **Contesto massivo (+200%)**
   - Ho riscritto il calcolo della memoria conversazionale in modo chirurgico: ora il gioco legge le specifiche tecniche di ogni modello e calcola con precisione quanto entra nella tua GPU.
   - Il modello da 9B passa da ricordare ~36.000 parole a più di ~110.000 su una GPU con 16GB VRAM. 🚀
   - Inoltre, ho alzato il limite di risposta da 4.096 a 8.192 token: narrazioni più lunghe senza interruzioni a metà frase.

Il risultato finale: una velocità superiore nella maggior parte dei casi, partite lunghe che non perdono il filo, e un'IA molto più centrata (e sobria). 🎯

Nota di Realtà (Disclaimer 🧐):
Se persino i giganti della Silicon Valley (Gemini, ChatGPT...) a volte vedono elefanti rosa, il mio modello locale non sarà perfetto al 100% delle volte. Ma non è più il "tipo ubriaco al matrimonio" — ora è un Master di Ruolo competente con la memoria di un elefante reale. 🐘

Grazie per la pazienza mentre aggiustavo i bulloni! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->