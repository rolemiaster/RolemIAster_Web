# 📢 Bericht van de Ontwikkelaar (Vroege Toegang)

Welkom bij RolemIAster. Voordat je je in je volgende grote avontuur stort, wil ik je een minuutje stelen om een paar dingen duidelijk te maken (ik beloof kort te zijn, de dobbelstenen wachten op je).

Dit spel is in de fase van **Vroege Toegang (Early Access)**.
Ik ben een solontwikkelaar — ja, alleen ik, mijn toetsenbord en liters koffie — wat betekent dat ik alles doe wat ik kan, maar soms kom ik niet aan alles toe. Mijn excuses bij voorbaat als ik er lang over doe om een lastige bug op te lossen, die functie te implementeren die je zo graag wilt, of onmiddellijk te reageren op Discord. Ik jongleer, maar ik heb nog geen extra tentakels gekregen.

## ⚠️ Belangrijke Opmerking over Hardware (Lokaal vs. Cloud)
Er zijn twee manieren om te spelen, en je ervaring hangt af van de keuze die je maakt:

*   **Lokale Modus (Gratis, Privé):** Als je de AI op je eigen pc wilt draaien, zijn de vereisten van de winkel (Minimaal 12 GB VRAM) heilig. Minder dan dat en de AI zal slepen of je systeem vast laten lopen. Het is pure wiskunde, geen magie.
*   **Cloud Modus (Gemini, GPT API, etc. alleen als je start met commando `--advanced`):** Hier verandert de film! Als je de game configureert om cloudservices te gebruiken (zoals Google Gemini of OpenAI), wordt het zware werk gedaan op hun servers, niet op de jouwe. In deze modus draait de game soepel op vrijwel elk systeem, aangezien je grafische kaart rust.

## Verwachtingsmanagement
Als je hier kwam met de verwachting van een naadloze AAA-productie, ben ik bang dat je op het verkeerde adres bent (voorlopig). De game bevindt zich in een vroeg stadium, en eerlijk gezegd, alleen de dapperen die dit soort experimentele projecten begrijpen en ondersteunen, hebben nu het geduld om ervan te genieten.

## Tevredenheidsgarantie
Als je voelt dat de game te groen is voor jou of je hardware te veel lijdt, zal niemand boos worden als je om restitutie vraagt. Integendeel, ik zal blij zijn je in de toekomst weer te mogen verwelkomen — en dat je 40 of 60 USD betaalt wanneer de game gepolijst en voltooid is 😉—. De huidige prijs is een geschenk voor je vertrouwen in mij in dit stadium.

Dat gezegd hebbende, mijn dankbaarheid is oneindig voor degenen die besluiten te blijven. Jullie rapporten en suggesties zijn de ware motor van dit project. Dankzij jullie is de game in een paar weken enorm verbeterd.

**RolemIAster wordt speciaal voor jullie gebouwd.**

*Bedankt voor je geduld, steun en moge de critici aan jouw kant staan!*


*********************************************************************************
🚧 BOUWZONE: IK BEN DE AI AAN HET "LOBOTOMISEREN" (TEN GOEDE) 🧠🔧
Waar ben ik mee bezig?
Ik ben de game-engine aan het veranderen, en dat is geen kleinigheid.
Tot nu toe, telkens als je een beurt speelt, stuurt het systeem de AI een "blok" met regels van 15.000 tot 20.000 tokens. Kortom, het is alsof je de spelmeester dwingt om de hele handleiding te lezen voor elke zin die hij zegt. 📚🥵

Het probleem:
Met zoveel gegevens in één keer, wordt de AI soms "dronken" van de context. Hij raakt in de war, verzint talen, breekt objecten of hallucineert direct (de beroemde waanvoorstellingen). Het is het digitale equivalent van een "blauwe scherm van de dood" maar dan verhalend.

De Oplossing: Strikte dieet! 🥗
Ik hertrain het model persoonlijk (zelfgemaakte Fine-Tuning) zodat het de regels uit het hoofd leert.

Het plan: Dat de AI al weet hoe te spelen zonder de handleiding elke keer te hoeven lezen.

Het doel: Het verbruik verlagen van 20k naar slechts 5k tokens per beurt.

Het resultaat: Brutaal hogere snelheid en een veel meer gefocuste (en nuchtere) AI. 🚀

Realiteitsnotitie (Disclaimer 🧐):
Dit is drievoudig dodelijk ingenieurschap: trainen, testen en beveiligen. En laten we eerlijk zijn: als zelfs de giganten van Silicon Valley (Gemini, ChatGPT...) soms roze olifanten zien, zal mijn lokale model niet 100% van de tijd perfect zijn. Maar het doel is dat het verandert van de "dronken oom op het feest" naar een competente Rol Spel Meester.

Bedankt voor je geduld terwijl ik de schroeven bijstel! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->