# 📢 Bericht van de Ontwikkelaar (Vroege Toegang)

Welkom bij RolemIAster. Voordat je je in je volgende grote avontuur stort, wil ik je even kort bezighouden om een paar dingen te verduidelijken (ik beloof kort te zijn, de dobbelstenen wachten op je).

Deze game bevindt zich in **Vroege Toegang (Early Access)**.
Ik ben een solo-ontwikkelaar — ja, alleen ik, mijn toetsenbord en liters koffie — wat betekent dat ik alles doe wat ik kan, maar soms niet alles op tijd kan afhandelen. Mijn excuses bij voorbaat als het even duurt om een lastige bug op te lossen, die functie te implementeren waar je zo naar verlangt, of direct te reageren op Discord. Ik jongleer, maar heb nog geen extra tentakels gekregen.

## ⚠️ Belangrijke Hardware Waarschuwing (Lokaal vs. Cloud)
Er zijn twee manieren om te spelen, en je ervaring hangt af van je keuze:

*   **Lokale Modus (Gratis, Privé):** Als je de AI op je eigen pc wilt draaien, zijn de systeemeisen van de winkel (minimaal 8GB VRAM) heilig om goed van start te gaan. Minder dan dat en de AI zal vertragen of je systeem vast laten lopen. Het is pure wiskunde, geen magie, hoewel dit met Turbo Quant nu ten goede kan veranderen.
*   **Cloud Modus (Gemini, GPT API, etc. alleen als je start met het commando `--advanced`):** Hier verandert het verhaal! Als je de game configureert om cloudservices (zoals Google Gemini of OpenAI) te gebruiken, wordt het zware werk op hun servers gedaan, niet op die van jou. In deze modus draait de game soepel op vrijwel elke computer, omdat je grafische kaart rust.

## Verwachtingsmanagement
Als je hier kwam met de verwachting van een naadloze AAA-productie, ben ik bang dat je (voorlopig) aan het verkeerde adres bent. De game bevindt zich in een vroeg stadium, en eerlijk gezegd hebben alleen de dapperen die dit soort experimentele projecten begrijpen en steunen het geduld om er nu van te genieten.

## Tevredenheidsgarantie
Als je het gevoel hebt dat de game te groen is voor jou of je hardware er te veel onder lijdt, zal niemand boos worden als je een terugbetaling vraagt. Integendeel, ik zal je graag in de toekomst weer verwelkomen — en dat je 40 of 60 USD betaalt als de game gepolijst en voltooid is 😉. De huidige prijs is een cadeau voor het vertrouwen dat je me in dit stadium geeft.

Dat gezegd hebbende, mijn dank is oneindig voor degenen die besluiten te blijven. Jullie rapporten en suggesties zijn de ware motor van dit project. Dankzij jullie is de game in enkele weken enorm verbeterd.

**RolemIAster wordt op maat voor jullie gebouwd.**

*Bedankt voor je geduld, steun en moge de kritische ogen met je zijn!*


*********************************************************************************
# 📢 WE UPGRADEN NAAR QWEN 3.5 + TURBO QUANT! NIEUWE MOTOR, NIEUWE TECHNOLOGIE, NIEUW TIJDPERK 🚀
*********************************************************************************

🚧 BOUWTERREIN: LOBOTOMIE VOLTOOID (EN HET WERKT) 🧠🔧
Waar ben ik mee bezig?
Ik ben de spelmotor aan het veranderen, en dat is geen kleinigheid.
Tot nu toe, telkens als je een beurt speelde, wierp het systeem de AI een "brok" regels van 15.000 tot 20.000 tokens toe. In wezen was het alsof je de master dwong om de hele handleiding te lezen voor elke zin. 📚🥵
Ik heb twee technologieën geïmplementeerd die samenwerken:

1. 🧠 **TurboQuant — Gecomprimeerd Geheugen**
   - Ik heb een technologie van Google geïntegreerd (gepresenteerd op ICLR 2026) die het geheugen van de AI comprimeert tot bijna een derde van de oorspronkelijke grootte.
   - Als je een RTX van de 3000, 4000 of 5000 serie hebt, zal de game deze automatisch benutten.
   - ⚠️ **BELANGRIJKE OPMERKING OVER AMD GPU's:** HOEWEL ER INDICIËS ZIJN VAN TURBOQUANT WERKING OP AMD/INTEL KAARTEN (VULKAN), GEEFT HET IN DE PRAKTIJK VEEL FOUTEN EN WORDT HET DAAROM VOORLOPIG NIET GEÏMPLEMENTEERD. WE HOPEN DAT DE COMMUNITY HET OVERNEEMT EN WE SNEL NIEUWIGHEID HEBBEN.
   - **Resultaat:** De AI onthoudt meer met minder VRAM-verbruik. Het is pure digitale magie. ✨

2. 📖 **Massieve Context (+200%)**
   - Ik heb de berekening van het conversationele geheugen chirurgisch herschreven: nu leest de game de technische specificaties van elk model en berekent nauwkeurig hoeveel er op je GPU past.
   - Het 9B model gaat van het onthouden van ~36.000 woorden naar meer dan ~110.000 op een GPU met 16GB VRAM. 🚀
   - Bovendien heb ik de response-limiet van 4.096 naar 8.192 tokens verhoogd: langere verhalen zonder onderbrekingen halverwege een zin.

Het eindresultaat: Hogere snelheid in de meeste gevallen, lange games die de draad niet kwijtraken, en een veel meer gefocuste (en nuchtere) AI. 🎯

Realiteitsnotitie (Disclaimer 🧐):
Als zelfs de giganten van Silicon Valley (Gemini, ChatGPT...) soms roze olifanten zien, zal mijn lokale model niet 100% perfect zijn. Maar het is niet meer de "dronken oom op de bruiloft" — het is nu een capabele Rollenspel-Master met het geheugen van een echte olifant. 🐘

Bedankt voor je geduld terwijl ik de schroeven aandraaide! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->