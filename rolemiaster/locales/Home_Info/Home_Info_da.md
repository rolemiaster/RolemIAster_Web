# 📢 Besked fra Udvikleren (Early Access)

Velkommen til RolemIAster. Før du kaster dig ud i dit næste store eventyr, vil jeg gerne tage et minut til at afklare et par ting (jeg lover at være kort, terningerne venter på dig).

Dette spil er i **Early Access**-fasen.
Jeg er en enlig udvikler — ja, kun mig, mit tastatur og litervis af kaffe — hvilket betyder, at jeg gør alt, hvad jeg kan, men nogle gange når jeg ikke alt til tiden. Jeg beklager på forhånd, hvis det tager mig tid at rette en lumsk fejl, implementere den funktion, du brændende ønsker, eller svare med det samme på Discord. Jeg jonglerer, men har endnu ikke fået ekstra tentakler.

## ⚠️ Vigtig Bemærkning om Hardware (Lokal vs. Cloud)
Her er to måder at spille på, og din oplevelse afhænger af, hvilken du vælger:

*   **Lokal Tilstand (Gratis, Privat):** Hvis du vil køre AI'en på din egen PC, er kravene i butikken (Minimum 12GB VRAM) hellige. Mindre end det, og AI'en vil slæbe sig afsted eller låse din computer. Det er ren matematik, ikke magi.
*   **Cloud Tilstand (Gemini API, GPT osv. kun hvis du starter med kommandoen `--advanced`):** Her ændrer billedet sig! Hvis du konfigurerer spillet til at bruge cloud-tjenester (som Google Gemini eller OpenAI), bliver det tunge arbejde udført på deres servere, ikke på din. I denne tilstand kører spillet flydende på stort set ethvert udstyr, da dit grafikkort kan hvile.

## Forventningsafstemning
Hvis du er kommet hertil i forventning om en fejlfri AAA-blockbuster, er jeg bange for, at du er på det forkerte sted (for nu). Spillet er i en tidlig fase, og ærligt talt, kun de modige, der forstår og støtter denne type eksperimentelle projekter, har tålmodigheden til at nyde det lige nu.

## Garanti for Tilfredshed
Hvis du føler, at spillet er for umodent for dig, eller din hardware lider for meget, vil ingen blive sure, hvis du beder om en refusion. Tværtimod vil jeg med glæde byde dig velkommen tilbage i fremtiden — og at du betaler 40 eller 60 USD, når spillet er poleret og færdigt 😉. Den nuværende pris er en gave for at have tillid til mig i denne fase.

Når det er sagt, er min taknemmelighed uendelig for dem, der beslutter sig for at blive. Deres rapporter og forslag er projektets virkelige motor. Takket være jer er spillet blevet utroligt forbedret på få uger.

**RolemIAster bygges skræddersyet til jer.**

*Tak for tålmodigheden, støtten og måtte kritikerne være på jeres side!*


*********************************************************************************
#  VI OPGRADERER TIL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNOLOGI, NY ÆRA 🚀
*********************************************************************************

🚧 ARBEJDSOMRÅDE: LOBOTOMI FULDFØRT (OG DEN VIRKER) 🧠🔧
Hvad har jeg gang i?
Jeg er ved at udskifte spilmotoren, og det er ikke småting.
Indtil nu, hver gang du spillede en tur, sendte systemet en "klods" af regler på 15.000 til 20.000 tokens til AI'en. Dybest set var det som at tvinge masteren til at læse hele manualen før hver sætning. 📚🥵
Jeg har implementeret to teknologier, der arbejder sammen:

1. 🧠 **TurboQuant — Den komprimerede hukommelse**
   - Jeg har integreret en teknologi fra Google (præsenteret på ICLR 2026), der komprimerer AI'ens hukommelse til næsten en tredjedel af dens oprindelige størrelse.
   - Hvis du har en RTX fra 3000-, 4000- eller 5000-serien, vil spillet automatisk udnytte den.
   - ⚠️ **VIGTIG BEMÆRKNING OM AMD GPU'ER:** SELVOM DER ER TEGN PÅ, AT TURBOQUANT VIRKER PÅ AMD/INTEL-KORT (VULKAN), GIVER DET I PRAKSIS MANGE FEJL OG VIL DERFOR IKKE BLIVE IMPLEMENTERET FOR NU. VI FORVENTER, AT FÆLLESSKABET GJØR DET SAMME, OG VI HAR NYHEDER SNART.
   - **Resultat:** AI'en husker mere, mens den bruger mindre VRAM. Det er ren digital magi. ✨

2. 📖 **Massiv kontekst (+200%)**
   - Jeg har kirurgisk omskrevet beregningen af samtalehukommelse: Nu læser spillet de tekniske specifikationer for hver model og beregner præcist, hvor meget der passer ind i din GPU.
   - 9B-modellen går fra at huske ~36.000 ord til over ~110.000 på en GPU med 16GB VRAM. 🚀
   - Derudover har jeg hævet svarsgrænsen fra 4.096 til 8.192 tokens: længere fortællinger uden afbrydelser midt i en sætning.

Slutresultatet: Overlegen hastighed i de fleste tilfælde, lange spil, der ikke mister tråden, og en meget mere fokuseret (og ædru) AI. 🎯

Realitetsnote (Ansvarsfraskrivelse 🧐):
Hvis selv Silicon Valleys giganter (Gemini, ChatGPT...) nogle gange ser lyserøde elefanter, vil min lokale model ikke være perfekt 100 % af tiden. Men det er ikke længere "brudgommens fulde onkel" — nu er det en kompetent Rollespilsmester med en elefant hukommelse. 🐘

Tak for tålmodigheden, mens jeg justerede skruerne! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->