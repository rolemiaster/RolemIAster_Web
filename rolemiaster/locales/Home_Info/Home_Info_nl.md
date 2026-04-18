# 📢 Bericht van de Ontwikkelaar (Vroege Toegang)

Welkom bij RolemIAster. Voordat je je in je volgende grote avontuur stort, wil ik je een minuutje van je tijd stelen om een paar dingen duidelijk te maken (ik beloof kort te zijn, de dobbelstenen wachten op je).

Deze game bevindt zich in de fase van **Vroege Toegang (Early Access)**.
Ik ben een solo-ontwikkelaar — ja, alleen ik, mijn toetsenbord en liters koffie — wat betekent dat ik alles doe wat ik kan, maar soms niet alles op tijd red. Ik bied van tevoren mijn excuses aan als ik er lang over doe om een lastige bug op te lossen, die functie te implementeren die je zo graag wilt, of onmiddellijk te reageren op Discord. Ik jongleer, maar heb nog geen extra tentakels gekregen.

## ⚠️ Belangrijke Mededeling over Hardware (Lokaal vs. Cloud)
Er zijn twee manieren om te spelen, en je ervaring hangt af van je keuze:

*   **Lokale Modus (Gratis, Privé):** Als je de AI op je eigen pc wilt draaien, zijn de vereisten van de winkel (Minimaal 12GB VRAM) heilig. Minder dan dat en de AI zal struikelen of je systeem vastlopen. Het is pure wiskunde, geen magie.
*   **Cloud Modus (API van Gemini, GPT, etc. alleen als je start met commando `--advanced`):** Hier verandert de film! Als je de game configureert om cloudservices te gebruiken (zoals Google Gemini of OpenAI), wordt het zware werk gedaan op hun servers, niet op die van jou. In deze modus draait de game soepel op vrijwel elk systeem, omdat je grafische kaart rust.

## Verwachtingsmanagement
Als je hier kwam met de verwachting van een naadloze AAA-productie, ben ik bang dat je op het verkeerde adres bent (voorlopig). De game bevindt zich in een vroege fase, en eerlijk gezegd hebben alleen de dapperen die dit soort experimentele projecten begrijpen en ondersteunen het geduld om er nu van te genieten.

## Tevredenheidsgarantie
Als je het gevoel hebt dat de game te groen is voor jou of dat je hardware te veel lijdt, zal niemand boos zijn als je om terugbetaling vraagt. Integendeel, ik zal blij zijn je in de toekomst weer te mogen verwelkomen — en dat je 40 of 60 USD betaalt wanneer de game gepolijst en voltooid is 😉. De huidige prijs is een geschenk voor je vertrouwen in mij in dit stadium.

Dat gezegd hebbende, mijn dank is oneindig voor degenen die ervoor kiezen te blijven. Jullie rapporten en suggesties zijn de echte motor van dit project. Dankzij jullie is de game in een paar weken enorm verbeterd.

**RolemIAster wordt op maat voor jullie gebouwd.**

*Bedankt voor het geduld, de steun en moge de critici aan jullie zijde staan!*


*********************************************************************************
#  WE UPGRADEN NAAR QWEN 3.5 + TURBO QUANT! NIEUWE ENGINE, NIEUWE TECHNOLOGIE, NIEUW TIJDPERK 🚀
*********************************************************************************

🚧 BOUWPLAATS: LOBOTOMIE VOLTOOID (EN HET WERKT) 🧠🔧
Waar ben ik mee bezig?
Ik ben de game-engine aan het vervangen, en dat is geen kattenpis.
Tot nu toe, elke keer als je een beurt speelde, gooide het systeem de AI een "dikke pil" van 15.000 tot 20.000 tokens aan regels voor de kiezen. In feite was het alsof je de game master dwong om het hele handboek te lezen voor elke zin. 📚🥵
Ik heb twee technologieën geïmplementeerd die samenwerken:

1. 🧠 **TurboQuant — Het gecomprimeerde geheugen**
   - Ik heb een technologie van Google (gepresenteerd op ICLR 2026) geïntegreerd die het geheugen van de AI comprimeert tot bijna een derde van de oorspronkelijke grootte.
   - Als je een RTX uit de 3000-, 4000- of 5000-serie hebt, zal de game deze automatisch benutten.
   - ⚠️ **BELANGRIJKE OPMERKING OVER AMD GPU'S:** HOEWEL ER INDICATIES ZIJN DAT TURBOQUANT WERKT OP AMD/INTEL KAARTEN (VULKAN), GEEFT HET IN DE PRAKTIJK VEEL FOUTEN EN DAAROM WORDT HET VOORLOPIG NIET GEÏMPLEMENTEERD. WE HOPEN DAT DE COMMUNITY ZELF IN ACTIE KOMT EN WE SNEL NIEUWS HEBBEN.
   - **Resultaat:** De AI onthoudt meer met minder VRAM. Het is pure digitale magie. ✨

2. 📖 **Massieve Context (+200%)**
   - Ik heb de berekening van het gespreksgeheugen chirurgisch herschreven: nu leest de game de technische specificaties van elk model en berekent nauwkeurig hoeveel er op je GPU past.
   - Het 9B-model gaat van het onthouden van ~36.000 woorden naar meer dan ~110.000 op een GPU met 16GB VRAM. 🚀
   - Bovendien heb ik de responslimiet verhoogd van 4.096 naar 8.192 tokens: langere narratieven zonder onderbrekingen halverwege een zin.

Het eindresultaat: hogere snelheid in de meeste gevallen, lange spellen die de draad niet kwijtraken, en een veel meer gefocuste (en nuchtere) AI. 🎯

Realiteitsnoot (Disclaimer 🧐):
Als zelfs de giganten uit Silicon Valley (Gemini, ChatGPT...) soms roze olifanten zien, zal mijn lokale model niet 100% van de tijd perfect zijn. Maar het is niet langer de "dronken oom op het feest" — het is nu een competente Rol-Master met het geheugen van een echte olifant. 🐘

Bedankt voor het geduld terwijl ik de schroeven aandraaide! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->