# 📢 Besked fra udvikleren (Early Access)

Velkommen til RolemIAster. Før du kaster dig ud i dit næste store eventyr, vil jeg gerne bruge et minut på at afklare et par ting (jeg lover at være kort, terningerne venter).

Dette spil er i **Early Access**.
Jeg er en enmandshær – ja, kun mig, mit tastatur og liter af kaffe – hvilket betyder, at jeg gør alt, hvad jeg kan, men nogle gange ikke når alt til tiden. Jeg undskylder på forhånd, hvis jeg er langsom til at rette en snedig fejl, implementere den funktion, du så brændende ønsker, eller svare med det samme på Discord. Jeg jonglerer, men har endnu ikke fået ekstra tentakler.

## ⚠️ Vigtig bemærkning om hardware (lokal vs. cloud)
Her er to måder at spille på, og din oplevelse afhænger af, hvilken du vælger:

*   **Lokal tilstand (gratis, privat):** Hvis du vil køre AI'en på din egen pc, er kravet fra butikken (minimum 12 GB VRAM) helligt. Mindre end det, og AI'en vil slæbe sig afsted eller låse din computer. Det er ren matematik, ikke magi.
*   **Cloud-tilstand (Gemini API, GPT osv. kun hvis du starter med kommandoen `--advanced`):** Her ændrer filmen sig! Hvis du konfigurerer spillet til at bruge cloud-tjenester (som Google Gemini eller OpenAI), udføres det tunge arbejde på deres servere, ikke på dine. I denne tilstand kører spillet flydende på stort set ethvert udstyr, da dit grafikkort hviler.

## Forventningsafstemning
Hvis du forventede en fejlfri AAA-produktion, er jeg bange for, at du er kommet til det forkerte sted (i øjeblikket). Spillet er i en tidlig fase, og ærligt talt er det kun de modige, der forstår og støtter denne type eksperimentelle projekter, der har tålmodighed til at nyde det lige nu.

## Tilfredshedsgaranti
Hvis du føler, at spillet er for grønt for dig, eller dit hardware lider for meget, er der ingen, der bliver sure, hvis du beder om en refusion. Tværtimod vil jeg være glad for at byde dig velkommen tilbage i fremtiden – og for at du betaler 40 eller 60 USD, når spillet er poleret og færdigt 😉. Den nuværende pris er en gave for at stole på mig i denne fase.

Når det er sagt, er min taknemmelighed uendelig for dem, der beslutter sig for at blive. Jeres rapporter og forslag er projektets sande drivkraft. Takket være jer er spillet blevet utroligt forbedret på få uger.

**RolemIAster bliver bygget skræddersyet til jer.**

*Tak for tålmodigheden, støtten og må kritikerne være på jeres side!*


*********************************************************************************
🚧 BYGGEPLADS: JEG ER "LOBOTOMISERER" AI'en (TIL DET BEDRE) 🧠🔧
Hvad laver jeg?
Jeg er ved at skifte spillets motor, og det er ikke for sjov.
Indtil nu, hver gang du spiller en tur, kaster systemet et "monstrum" af regler på 15.000 til 20.000 tokens til AI'en. Grundlæggende er det som at tvinge spillederen til at læse hele manualen før hver sætning. 📚🥵

Problemet:
Med så mange data på én gang bliver AI'en nogle gange "fuld" af kontekst. Den bliver forvirret, opfinder sprog, ødelægger genstande eller hallucinerer direkte (de berømte vrangforestillinger). Det er det digitale ækvivalent til et "blåt skærm" men narrativt.

Løsningen: Streng diæt! 🥗
Jeg genoptræner modellen personligt (hjemmelavet finjustering), så den lærer reglerne udenad.

Planen: At AI'en allerede ved, hvordan man spiller, uden at skulle læse manualen hver gang.

Målet: At reducere forbruget fra 20k til kun 5k tokens per tur.

Resultatet: En brutalt overlegen hastighed og en meget mere fokuseret (og ædru) AI. 🚀

Virkelighedsforbehold (Disclaimer 🧐):
Dette er et tredobbelt dødeligt ingeniørarbejde: træning, testning og sikring. Og lad os være ærlige: hvis selv Silicon Valleys giganter (Gemini, ChatGPT...) nogle gange ser lyserøde elefanter, vil min lokale model ikke være perfekt 100% af tiden. Men målet er, at den går fra at være "bryllupsgæsten der er fuld" til en kompetent rollespilsmester.

Tak for tålmodigheden, mens jeg justerer skruerne! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->