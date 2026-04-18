# 📢 Utviklermelding (Tidlig tilgang)

Velkommen til RolemIAster. Før du kaster deg ut i ditt neste store eventyr, vil jeg stjele ett minutt av tiden din for å avklare et par ting (jeg lover å være kort, terningene venter på deg).

Dette spillet er i fase **Tidlig Tilgang (Early Access)**.
Jeg er en ensporet utvikler — ja, bare meg, tastaturet mitt og liter med kaffe — noe som betyr at jeg gjør alt jeg kan, men noen ganger rekker jeg ikke alt. Jeg beklager på forhånd hvis det tar tid å fikse en snikete feil, implementere funksjonen du så inderlig ønsker, eller svare umiddelbart på Discord. Jeg sjonglerer, men jeg har ennå ikke fått ekstra tentakler.

## ⚠️ Viktig merknad om maskinvare (lokalt vs. skyen)
Her er to måter å spille på, og opplevelsen din avhenger av hva du velger:

*   **Lokal modus (gratis, privat):** Hvis du vil kjøre AI-en på din egen PC, er kravene i butikken (Minimum 12 GB VRAM) hellige. Mindre enn det, og AI-en vil krype eller låse maskinen din. Det er ren matematikk, ikke magi.
*   **Skymodus (Gemini, GPT API osv. kun hvis du starter med kommandoen `--advanced`):** Her snur filmen! Hvis du konfigurerer spillet til å bruke skytjenester (som Google Gemini eller OpenAI), gjøres det tunge arbeidet på deres servere, ikke dine. I denne modusen kjører spillet jevnt på praktisk talt alle enheter, siden grafikkortet ditt hviler.

## Håndtering av forventninger
Hvis du kom hit og forventet en sømløs AAA-produksjon, frykter jeg at du er på feil sted (foreløpig). Spillet er i en tidlig fase, og ærlig talt, bare de modige som forstår og støtter denne typen eksperimentelle prosjekter, har tålmodigheten til å nyte det akkurat nå.

## Garanti for tilfredshet
Hvis du føler at spillet er for "grønt" for deg, eller maskinvaren din lider for mye, vil ingen bli sinte hvis du ber om refusjon. Tvert imot, jeg vil gjerne ønske deg velkommen tilbake i fremtiden — og at du betaler 40 eller 60 USD når spillet er polert og ferdig 😉. Den nåværende prisen er en gave for å stole på meg i denne fasen.

Når det er sagt, er min takknemlighet uendelig for de som velger å bli værende. Deres rapporter og forslag er den virkelige motoren i dette prosjektet. Takket være dere har spillet forbedret seg utrolig på få uker.

**RolemIAster blir bygget skreddersydd for dere.**

*Takk for tålmodigheten, støtten og må kritikerne være på din side!*

*********************************************************************************
#  VI OPPDATERER TIL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNOLOGI, NY ERA 🚀
*********************************************************************************

🚧 BYGGEPLASS: LOBOTOMI FULLFØRT (OG DET FUNKERER) 🧠🔧
Hva driver jeg med?
Jeg bytter ut spillmotoren, og det er ingen enkel sak.
Fram til nå, hver gang du spilte en runde, kastet systemet en "blokk" med regler på 15 000 til 20 000 tokens til AI-en. I hovedsak var det som å tvinge spillmesteren til å lese hele manualen før hver setning. 📚🥵
Jeg har implementert to teknologier som jobber sammen:

1. 🧠 **TurboQuant — Komprimert minne**
   - Jeg integrerte en teknologi fra Google (presentert på ICLR 2026) som komprimerer AI-ens minne til nesten en tredjedel av original størrelse.
   - Hvis du har et RTX-kort fra 3000-, 4000- eller 5000-serien, vil spillet automatisk utnytte det.
   - ⚠️ **VIKTIG MERKNAD OM AMD GPU:** SELV OM DET ER INDIKASJONER PÅ AT TURBOQUANT FUNGERER PÅ AMD/INTEL-KORT (VULKAN), GIR DET I PRAKSIS MANGE FEIL OG VIL DERFOR IKKE BLI IMPLEMENTERT FOR NÅ. VI HÅPER AT FELLESSKAPET GJØR SAMME OG AT VI SNART FÅR NYHETER.
   - **Resultat:** AI-en husker mer mens den bruker mindre VRAM. Det er ren digital magi. ✨

2. 📖 **Massiv kontekst (+200%)**
   - Jeg har omskrevet beregningen av konversasjonsminne kirurgisk: nå leser spillet de tekniske spesifikasjonene for hver modell og beregner nøyaktig hvor mye som passer på GPU-en din.
   - 9B-modellen går fra å huske ~36 000 ord til over ~110 000 på en GPU med 16 GB VRAM. 🚀
   - I tillegg har jeg økt svargrensen fra 4 096 til 8 192 tokens: lengre fortellinger uten avbrudd midt i en setning.

Sluttresultatet: Overlegen hastighet i de fleste tilfeller, lange spill som ikke mister tråden, og en mye mer fokusert (og edru) AI. 🎯

Virkelighetsmerknad (Ansvarsfraskrivelse 🧐):
Hvis selv gigantene i Silicon Valley (Gemini, ChatGPT...) noen ganger ser rosa elefanter, vil ikke min lokale modell være perfekt 100 % av tiden. Men den er ikke lenger "den fulle fyren i bryllupet" — nå er den en kompetent rollespillmester med en ekte elefantminne. 🐘

Takk for tålmodigheten mens jeg justerte skruene! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->