# 📢 Besked fra Udvikleren (Early Access)

Velkommen til RolemIAster. Før du kaster dig ud i dit næste store eventyr, vil jeg gerne bruge et minut på at afklare et par ting (jeg lover at være kort, for terningerne venter på dig).

Dette spil er i **Early Access**-fase.
Jeg er en enlig udvikler — ja, kun mig, mit tastatur og liter af kaffe — hvilket betyder, at jeg gør alt, hvad jeg kan, men nogle gange når jeg ikke det hele i tide. Jeg undskylder på forhånd, hvis det tager mig tid at rette en svær bug, implementere den funktion, du så gerne ønsker, eller svare med det samme på Discord. Jeg jonglerer, men jeg har endnu ikke fået ekstra tentakler.

## ⚠️ Vigtig Bemærkning om Hardware (Lokal vs. Cloud)
Her er to måder at spille på, og din oplevelse afhænger af, hvilken du vælger:

*   **Lokal Tilstand (Gratis, Privat):** Hvis du vil køre IA'en på din egen PC, er butikkens krav (minimum 8GB VRAM) hellige for at komme godt fra start. Mindre end det, og IA'en vil køre langsomt eller fryse din computer. Det er ren matematik, ikke magi, selvom det med Turbo Quant nu kan ændre sig til det bedre.
*   **Cloud Tilstand (Gemini, GPT API osv. kun hvis du starter med kommandoen `--advanced`):** Her ændrer filmen sig! Hvis du konfigurerer spillet til at bruge cloud-tjenester (som Google Gemini eller OpenAI), bliver det tunge arbejde udført på deres servere, ikke på din. I denne tilstand kører spillet flydende på stort set enhver enhed, da dit grafikkort hviler.

## Forventningsstyring
Hvis du kom for at forvente en fejlfrit AAA-produktion, frygter jeg, at du er på det forkerte sted (for nu). Spillet er i en tidlig fase, og ærligt talt er det kun de modige, der forstår og støtter denne type eksperimentelle projekter, som har tålmodighed til at nyde det lige nu.

## Tilfredshedsgaranti
Hvis du føler, at spillet er for umodent for dig, eller dit hardware lider for meget, bliver ingen sure, hvis du beder om en refusion. Tværtimod vil jeg blive glad for at se dig tilbage i fremtiden — og for at du betaler 40 eller 60 USD, når spillet er poleret og færdigt 😉—. Den nuværende pris er en gave for at stole på mig i denne fase.

Når det er sagt, er min taknemmelighed uendelig for dem, der vælger at blive. Jeres rapporter og forslag er projektets virkelige motor. Takket være jer er spillet blevet utroligt forbedret på få uger.

**RolemIAster bygges specifikt til jer.**

*Tak for tålmodigheden, støtten, og må kritikerne være på jeres side!*


*********************************************************************************
# 📢 VI OPGRADERER TIL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNOLOGI, NY ÆRA 🚀
*********************************************************************************

🚧 ARBEJDSOMRÅDE: LOBOTOMI FULDFØRT (OG DET VIRKER) 🧠🔧
Hvad har jeg gang i?
Jeg er ved at skifte spillets motor, og det er ikke en lille sag.
Indtil nu, hver gang du spillede en tur, sendte systemet et "stort stykke" regler på 15.000 til 20.000 tokens til IA'en. Grundlæggende var det som at tvinge gamemasteren til at læse hele manualen igennem før hver sætning. 📚🥵
Jeg har implementeret to teknologier, der arbejder sammen:

1. 🧠 **TurboQuant — Komprimeret hukommelse**
   - Jeg har integreret en teknologi fra Google (præsenteret på ICLR 2026), der komprimerer IA'ens hukommelse til næsten en tredjedel af dens oprindelige størrelse.
   - Hvis du har en RTX fra 3000, 4000 eller 5000-serien, vil spillet automatisk udnytte den.
   - ⚠️ **VIGTIG BEMÆRKNING OM AMD GPU'ER:** SELVOM DER ER INDIKATIONER PÅ, AT TURBO QUANT VIRKER PÅ AMD/INTEL-KORT (VULKAN), GIVER DET I PRAKSIS MANGE FEJL OG VIL DERFOR IKKE BLIVE IMPLEMENTERET FOR NU. VI HÅBER, AT FÆLLESSKABET GØR DET SAMME, OG AT VI SNART FÅR NYHEDER.
   - **Resultat:** IA'en husker mere, mens den bruger mindre VRAM. Det er ren digital magi. ✨

2. 📖 **Massiv kontekst (+200%)**
   - Jeg har omskriver den konversationelle hukommelsesberegning kirurgisk: Nu læser spillet de tekniske specifikationer for hver model og beregner præcist, hvor meget der passer ind på din GPU.
   - 9B-modellen går fra at huske ~36.000 ord til over ~110.000 på en GPU med 16 GB VRAM. 🚀
   - Desuden har jeg hævet svargrænsen fra 4.096 til 8.192 tokens: længere fortællinger uden afbrydelser midt i en sætning.

Det endelige resultat: En overlegen hastighed i de fleste tilfælde, lange spil, der ikke mister tråden, og en meget mere fokuseret (og ædru) IA. 🎯

Virkeligheds-note (Disclaimer 🧐):
Hvis selv giganterne fra Silicon Valley (Gemini, ChatGPT...) nogle gange ser lyserøde elefanter, vil min lokale model ikke være perfekt 100% af tiden. Men det er ikke længere "den berusede onkel til brylluppet" — nu er det en kompetent rollespils-gamemaster med et elefants hukommelse. 🐘

Tak for tålmodigheden, mens jeg finjusterede skruerne! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->