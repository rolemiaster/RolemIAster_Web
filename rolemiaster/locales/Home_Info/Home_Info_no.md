# 📢 Utviklermelding (Tidlig tilgang)

Velkommen til RolemIAster. Før du dykker ned i ditt neste store eventyr, vil jeg stjele et minutt for å avklare et par ting (jeg lover å være kort, terningene venter).

Dette spillet er i **Tidlig tilgang (Early Access)**.
Jeg er en ensom utvikler — ja, bare meg, tastaturet mitt og liter med kaffe — noe som betyr at jeg gjør alt jeg kan, men noen ganger rekker jeg ikke alt. Jeg beklager på forhånd hvis det tar tid å fikse en vanskelig bug, implementere den funksjonen du ønsker deg, eller svare umiddelbart på Discord. Jeg sjonglerer, men har ennå ikke fått ekstra tentakler.

## ⚠️ Viktig merknad om maskinvare (lokalt vs. sky)
Det er to måter å spille på, og din opplevelse avhenger av hvilken du velger:

*   **Lokal modus (Gratis, privat):** Hvis du vil kjøre AI-en på din egen PC, er kravene i butikken (minimum 8GB VRAM) hellige for å få en god start. Mindre enn det, og AI-en vil hakke eller krasje systemet ditt. Det er ren matematikk, ikke magi, selv om dette nå kan endre seg til det bedre med Turbo Quant.
*   **Sky-modus (API for Gemini, GPT, etc. kun hvis du starter med kommandoen `--advanced`):** Her endres filmen! Hvis du konfigurerer spillet til å bruke skytjenester (som Google Gemini eller OpenAI), gjøres det tunge arbeidet på deres servere, ikke dine. I denne modusen kjører spillet jevnt på praktisk talt hvilket som helst utstyr, da skjermkortet ditt hviler.

## Forventningsstyring
Hvis du har kommet hit og forventer en feilfri AAA-produksjon, frykter jeg at du er på feil sted (foreløpig). Spillet er i en tidlig fase, og ærlig talt, bare de modige som forstår og støtter denne typen eksperimentelle prosjekter, har tålmodigheten til å nyte det akkurat nå.

## Tilfredshetsgaranti
Hvis du føler at spillet er for uferdig for deg eller maskinvaren din lider for mye, vil ingen bli sinte hvis du ber om refusjon. Tvert imot, jeg vil være glad for å ønske deg velkommen tilbake i fremtiden — og at du betaler 40 eller 60 USD når spillet er polert og ferdig 😉—. Nåværende pris er en gave for å stole på meg i denne fasen.

Når det er sagt, er min takknemlighet uendelig for de som velger å bli. Deres rapporter og forslag er den virkelige motoren i dette prosjektet. Takket være dere har spillet blitt utrolig mye bedre på få uker.

**RolemIAster bygges skreddersydd for dere.**

*Takk for tålmodigheten, støtten, og måtte kritikerne være på din side!*


*********************************************************************************
# 📢 VI OPPGRADERER TIL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNOLOGI, NY ERA 🚀
*********************************************************************************

🚧 BYGGEPLASS: LOBOTOMI FULLFØRT (OG DET FUNKERER) 🧠🔧
Hva driver jeg med?
Jeg bytter spillmotor, og det er ingen liten sak.
Til nå, hver gang du spilte en tur, sendte systemet et "kjempestort" regelspekter på 15 000 til 20 000 tokens til AI-en. I utgangspunktet var det som å tvinge gamemesteren til å lese hele manualen før hver setning. 📚🥵
Jeg har implementert to teknologier som jobber sammen:

1. 🧠 **TurboQuant — Komprimert minne**
   - Jeg har integrert en teknologi fra Google (presentert på ICLR 2026) som komprimerer AI-ens minne til nesten en tredjedel av original størrelse.
   - Hvis du har en RTX-modell fra 3000-, 4000- eller 5000-serien, vil spillet automatisk dra nytte av den.
   - ⚠️ **VIKTIG MERKNAD OM AMD GPU:** SELV OM DET ER INDIKASJONER PÅ AT TURBOQUANT FUNGERER PÅ AMD/INTEL-KORT (VULKAN), GIR DET I PRAKSIS MANGE FEIL OG VIL DERFOR IKKE IMPLEMENTERES FOR ØYEBLIKKET. VI HÅPER AT FELLESKAPET GJØR DET SAMME OG AT VI SNART HAR NYTT.
   - **Resultat:** AI-en husker mer, bruker mindre VRAM. Det er ren digital magi. ✨

2. 📖 **Massiv kontekst (+200%)**
   - Jeg har omskrevet beregningen av samtaleminne kirurgisk: nå leser spillet de tekniske spesifikasjonene for hver modell og beregner nøyaktig hvor mye som får plass på GPU-en din.
   - 9B-modellen går fra å huske ~36 000 ord til over ~110 000 på en GPU med 16 GB VRAM. 🚀
   - I tillegg har jeg økt svargrensen fra 4 096 til 8 192 tokens: lengre fortellinger uten avbrudd midt i en setning.

Sluttresultatet: Overlegen hastighet i de fleste tilfeller, lange spilløkter som ikke mister tråden, og en mye mer fokusert (og edruelig) AI. 🎯

Virkelighetsmerknad (Ansvarsfraskrivelse 🧐):
Hvis selv gigantene fra Silicon Valley (Gemini, ChatGPT...) noen ganger ser rosa elefanter, vil min lokale modell ikke være 100 % perfekt hver gang. Men det er ikke lenger "den fulle fyren i bryllupet" — nå er det en kompetent rollespillmester med et ekte elefantminne. 🐘

Takk for tålmodigheten mens jeg justerte skruene! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->