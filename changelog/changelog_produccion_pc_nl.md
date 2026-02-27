****************************************************************************************************
27/02/2026 16:46 - Synchronisatie van Gevechtssaving en Beurtstroom - Beta_v059
****************************************************************************************************
- What's New (NL):
  - **Gevechten en spelritme**
    - ⚔️ **Vloeiendere aanvallen:** geen lege pulsen meer wanneer je actie in de wachtrij stond en het laden van gevechten retourneert echte beslissingen, geen spookknoppen.
    - 🧭 **Gesynchroniseerde scène:** wat je op het scherm ziet, weerspiegelt de huidige gevechtsstatus en er verschijnen alleen vijanden die zich op jouw locatie bevinden.
    - 🚫 **Minder interne rompslomp:** we hebben nutteloze controles opgeschoond, zodat het spel zonder administratieve haperingen verdergaat.
  
  - **Visuele motor en geavanceerd paneel**
    - 🧹 **Schone selectie:** technische mappen worden verborgen en filteren wordt genormaliseerd om modellen zonder ruis te kiezen.
    - ️ **Stabiele achtergronden:** als een afbeelding bezig is, overschrijft deze niet de volgende; bovendien voorkomt laden in gevechten verrassende regeneraties.
    - 🎛️ **Versterkt afbeeldingspaneel:** renderstrategie, wijzigingskracht en minimale stappen worden nu vanuit de geavanceerde interface met contextuele hulp bediend.
  
  - **Karaktercreatie en portretten**
    - 🧍 **Geslacht zichtbaar:** je kiest Mannelijk/Vrouwelijk in het basisformulier en de hele stroom (portretten, interne gegevens) respecteert die keuze.
    - 👶➡️🧓 **Begrijpelijke leeftijd:** we gebruiken narratieve segmenten, zodat de AI de levensfase beter kan weergeven.
    - 🧼 **Gezuiverde prompts:** we hebben technische ruis schoongemaakt voordat we afbeeldingsverzoeken versturen, en dat merk je aan de stabiliteit van de portretten.
    -  **Betrouwbare kaarten:** de AI kan geen verplichte attributen "vergeten" of de initiële inventaris opblazen.
  
  - **Narratief, regels en RAG**
    - 🚀 **Directere aankomst van PJ:** de initiële scène gebruikt strikte JSON-contracten en vermijdt rare contextmengelingen.
    -  **Gerichte RAG:** alleen toegestane roots worden geïndexeerd en de kaart die naar de prompt wordt gestuurd, bevat samenvattingen van effecten om tokens te besparen.
  
  - **AI-configuratie en PSR**
    - 🎛️ **Nieuwe PSR-controle Fase 1:** bepaal of je de chirurgische modus altijd wilt in exploratie of alleen wanneer de prompt aandringt.
    - 📏 **Instelbare drempel (standaard 95%):** bepaal hoeveel marge je geeft voordat automatische PSR wordt geactiveerd, afhankelijk van je hardware.
    - 🧠 **Lichtere prompts en zonder lussen:** we vatten staten samen en de AI beschikt over tools om niet verzadigd te raken wanneer het verhaal ingewikkeld wordt.

****************************************************************************************************
24/02/2026 12:32 - AI-beeldgeneratie, narratieve verbeteringen en controle - Beta_v058
****************************************************************************************************
- What's New (NL):
  **🧠 Evolutie van het Brein: Hallo, Qwen 3**
  Ik heb de game-engine gemigreerd om het maximale uit de nieuwe generatie Qwen3-modellen te halen. De oude modellen uit de 2.5-serie hebben RolemIAster op weg geholpen, maar het is tijd om oude glorie achter ons te laten. Deze kwantitatieve sprong in verhaalgeneratie levert meeslependere proza, veel strengere regels en coherenter personages op. Maak je grafische kaarten gereed, want de Game Master is net een level gestegen.

  **Nieuw: Tweede fase van AI-beeldgeneratie**
  - 🎨 **Jouw wereld in beelden:** Ik heb een initieel systeem voor beeldgeneratie via kunstmatige intelligentie geïntegreerd. Terwijl je speelt, probeert het systeem portretten en landschappen te genereren die passen bij de sfeer van je sessie.
  - 🖼️ **Dynamische achtergronden:** Beelden worden op de achtergrond gegenereerd zonder je spel te onderbreken. Je ziet ze geleidelijk verschijnen in de achtergrond, op personagekaarten en in de Codex.
  - 🧹 **Beheer van afbeeldingen:** Nieuw paneel om gegenereerde afbeeldingen die je niet bevallen te bekijken en te verwijderen.
  
  **Verbeteringen in personagegeneratie:**
  - ⚙️ **Robuustere willekeurige creatie:** Ik heb de regel-engine die de AI gebruikt om personages vanaf nul te creëren verenigd en verbeterd, wat zorgt voor logischere inventarissen (5 tot 10 coherente objecten) en meer gebalanceerde fiches.
  - 🧠 **Gespleten brein:** De AI begrijpt nu beter wanneer hij een personage 'vanuit het niets' moet bedenken en wanneer hij zich moet beperken tot het extraheren van gegevens uit de biografie die je zelf hebt geschreven.
  - ⚡ **Snelheid op maat:** Nieuwe sectie in Visuele Instellingen. Kies tussen "Snel" (1 stap), "Gemiddeld" (2 stappen) of "Hoog" (4 stappen) om de generatietijd aan te passen aan de kracht van je pc.
  - 🛠️ **Technische optimalisatie:** Het AI-beeldmodel wordt in het **RAM (geheugen)** geladen en via de **CPU** verwerkt, zonder videogeheugen (VRAM) in beslag te nemen. Dit zorgt ervoor dat het de prestaties van de hoofd-AI van het spel (LLM) niet verstoort. Vereist ongeveer 5 GB extra RAM, wat binnen de officiële minimale systeemvereisten van Steam blijft.
  - 📤 **Deel je avonturen:** Alle gegenereerde afbeeldingen worden automatisch opgeslagen. Je vindt ze in de map: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Model-selector (Geavanceerd):** Als je het spel opstart met de parameter `--advanced`, kun je nu via het uiterlijk-paneel kiezen welk AI-model je voor beelden wilt gebruiken. Dit stelt enthousiastelingen in staat om verschillende versies van Stable Diffusion te testen die geoptimaliseerd zijn voor OpenVINO (.xml/.bin-bestanden).

  **Narratief en AI-brein:**
  - 🧠 **Einde aan loops:** Er is een nieuwe "geheugendoctrine" in de AI geïmplementeerd. Deze maakt nu een beter onderscheid tussen "herinneringen" (wat al is gebeurd) en het "heden" (wat er nu gebeurt). Dit helpt situaties te verminderen waarin de AI zichzelf herhaalt of vastloopt.
  - 📜 **Historische archieven:** Het systeem presenteert je herinneringen aan de AI als een "gesloten historisch archief", waardoor het makkelijker is om die informatie als referentie te gebruiken om het verhaal voort te zetten.
  - ⚡ **Geoptimaliseerde instructies:** De manier waarop het spel om narratieve input in jouw taal vraagt is verbeterd, waardoor er meer modelcapaciteit vrijkomt voor creativiteit.
  - 👁️ **Narratieve focus:** De perceptie van de AI is herschreven. Hij begrijpt nu beter welke elementen "statische achtergrond" zijn en hoeft deze niet onnodig in elke paragraaf te herhalen.
  - 🔀 **Duidelijkere keuzes:** De AI biedt nu duidelijker gedefinieerde ontsnappingsroutes. De suggesties (knoppen) zijn onderverdeeld in het verkennen van de omgeving (Verdiepen) of het veranderen van koers (Afwijken).
  - 🫵 **Directe aanspreekvorm:** De basisinstructie is aangepast om ervoor te zorgen dat de AI je met "je" of "jij" aanspreekt, wat de persoonlijke immersie verbetert.
  
  **Personagecreatie:**
  - 🖼️ **Personageportretten:** Bij het genereren van een personage met AI probeert het systeem een portret te maken op basis van leeftijd, beroep en beschrijving. Houd er rekening mee dat dit een vroege versie is en dat de getrouwheid (vooral wat betreft leeftijd) kan variëren afhankelijk van het gebruikte model. (Ik blijf testen, maar het begin is veelbelovend)
  - 🎲 **Betrouwbare willekeurige generatie:** Een fout opgelost waarbij de knop "Genereren met AI" bij de eerste poging kon mislukken, waardoor velden leeg bleven. Het slimme correctiesysteem zorgt er nu voor dat het antwoord altijd geldig is.
  
  **Beheer van gegenereerde afbeeldingen:**
  - 🖼️ **AI-afbeeldingengalerij:** Nieuw paneel in het menu Bestand dat alle afbeeldingen toont die de AI tijdens je sessies heeft gegenereerd (portretten, achtergronden). Je kunt filteren op type afbeelding of op wereld.
  - 🗑️ **Selectief verwijderen:** Selecteer één of meerdere afbeeldingen en verwijder ze als ze je niet bevallen (misschien die ene waarbij de AI besloot dat het een goed idee was om een bus in de kasteelstal te parkeren). Het systeem ruimt zowel het bestand als het interne register op.
  - 📂 **Directe toegang:** Dubbelklik op een miniatuur om de map te openen waar het bestand zich bevindt. Als je de map al open hebt staan, wordt hetzelfde venster hergebruikt.
  - 💾 **Venstergrootte onthouden:** De grootte van het galerijvenster wordt automatisch opgeslagen tussen sessies.
  
  **Prestaties op lage configuraties (Belangrijk voor GPU's met weinig VRAM):**
  - 🧠 **PSR - Hybride Governance:** Nieuw systeem dat het werk van de AI in twee fasen verdeelt: Planning (Chef) en Uitvoering (Koks). Hierdoor kunnen lokale modellen met 8 GB VRAM werken zonder vast te lopen door een teveel aan context (+12K tokens), ten koste van een hogere latentie. De interactie met de AI gaat van een enkele prompt naar een reeks prompts (hoe minder VRAM, hoe meer prompts er worden gegenereerd en hoe langer de responstijd).
  - ⚡ **Intelligente uitvoering:** Het systeem beslist automatisch of alles in één keer verwerkt wordt (monolithisch) of in delen wordt opgesplitst (iteratief), afhankelijk van je beschikbare VRAM. GPU's met minder VRAM activeren de deelmodus alleen wanneer dat nodig is.
  - 📊 **Dynamische optimalisatie:** PSR vermindert de tokenbelasting tijdens het genereren, waardoor gebruikers met videokaarten van 4 GB personagecreaties en verhaalgeneraties kunnen voltooien die voorheen vastliepen.
  - 🔄 **Behoud van coherentie:** Ondanks de verdeling van het werk, injecteert het systeem een "hoofdintentie" zodat de AI de draad van het verhaal niet kwijtraakt.
  
  **AI-stemmen (incrementele verbetering):**
  Realtime generatie van stemmen in alle talen (sommige talen zijn beperkter dan andere; het Engels heeft de meeste variatie in stemtypes).
  - 🗣️ **Gevechtskreten met stem:** Bij het starten van een gevecht tegen vijanden wordt er nu een contextuele gesproken zin geactiveerd.
  - 🎭 **Dynamische zinnen per context:** De engine kan korte spraakfragmenten genereren voor specifieke gebeurtenissen (diensten/gevecht) op basis van taal, sfeer en personageprofiel.
  - 🧠 **Interne stemsjablonen:** De technische stemsjablonen zijn gescheiden van het narratieve systeem om interferentie met het verhaal te voorkomen.
  - 🔊 **Betere verstaanbaarheid:** De verstaanbaarheid en prosodie van de synthese zijn verbeterd om prioriteit te geven aan een duidelijke uitspraak.
  
  **⚠️ Compatibiliteitswaarschuwing (Eerdere sessies):**
  - 🔄 Vanwege de hoeveelheid interne wijzigingen in de regel-engine en het sfeersysteem, blijven **eerder opgeslagen sessies en werelden (mogelijk) speelbaar**, maar de kans is groot dat ze fouten of onverwacht gedrag vertonen. **Het wordt aanbevolen om een schone nieuwe wereld te maken** om optimaal van alle verbeteringen te kunnen genieten.

****************************************************************************************************
17/02/2026 07:20 - AI-beeldgeneratie, Verhaalverbeteringen en Controle - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (NL):
  **⚠️ EXPERIMENTELE TAK (STEAM BETA)**
  Deze versie is momenteel alleen beschikbaar in de **Experimentele Tak** van Steam. Om deze te activeren:
  1. Klik met de rechtermuisknop op **RolemIAster** in je Steam-bibliotheek.
  2. Selecteer **Eigenschappen...**
  3. Ga naar het tabblad **Betas**.
  4. Selecteer bij "Deelname aan beta" **experimental** in het keuzemenu.
  
  **Nieuw: Eerste fase van AI-beeldgeneratie**
  - 🎨 **Jouw Wereld in Beelden:** Ik heb een initieel systeem voor beeldgeneratie via Kunstmatige Intelligentie geïntegreerd. Terwijl je speelt, probeert het systeem portretten en landschappen te genereren die passen bij de sfeer van je spel.
  - 🖼️ **Dynamische Achtergronden:** De afbeeldingen worden op de achtergrond gegenereerd zonder je spel te onderbreken. Je zult zien hoe ze geleidelijk verschijnen in de achtergrond, op personagekaarten en in de Codex.
  - ⚡ **Snelheid op Maat:** Nieuwe sectie in Visuele Instellingen. Kies tussen "Snel" (1 stap), "Gemiddeld" (2 stappen) of "Hoog" (4 stappen) om de generatietijd aan te passen aan de kracht van je apparatuur.
  - 🛠️ **Technische Optimalisatie:** Het AI-model voor afbeeldingen wordt geladen in het **RAM (Geheugen)** en verwerkt via de **CPU**, zonder videogeheugen (VRAM) in beslag te nemen. Dit garandeert dat het de prestaties van de hoofd-AI van het spel (LLM) niet verstoort. Het vereist ongeveer 5GB extra RAM, wat binnen de officiële minimale systeemvereisten van Steam blijft.
  - 📤 **Deel je Avonturen:** Alle gegenereerde afbeeldingen worden automatisch opgeslagen. Je vindt ze in de map: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Verhaal en AI-brein:**
  - 🧠 **Einde van Lussen:** Er is een nieuwe "Geheugendoctrine" geïmplementeerd in de AI. Het onderscheidt nu beter tussen "herinneringen" (wat al gebeurd is) en het "heden" (wat er nu gebeurt). Dit helpt gevallen te verminderen waarin de AI zichzelf herhaalde of vastliep.
  - 📜 **Historische Archieven:** Het systeem presenteert je herinneringen aan de AI als een "Gesloten Historisch Archief", waardoor het makkelijker wordt om die informatie als referentie te gebruiken om het verhaal voort te zetten.
  - ⚡ **Geoptimaliseerde Instructies:** De manier waarop het spel de vertelling in jouw taal aanvraagt is verbeterd, waardoor capaciteit van het model vrijkomt om zich te concentreren op creativiteit.
  - 👁️ **Verhalende Focus:** De perceptie van de AI is herschreven. Het begrijpt nu beter welke elementen "statische achtergrond" zijn en niet onnodig herhaald moeten worden in elke alinea.
  - 🔀 **Duidelijkere Beslissingen:** De AI biedt nu meer gedefinieerde uitwegen. De suggesties (knoppen) zijn verdeeld tussen het onderzoeken van de omgeving (Verdiepen) of van koers veranderen (Afwijken).
  - 🫵 **Directe Aanspreekvorm:** De basisinstructie is aangepast om ervoor te zorgen dat de AI je met "Jij" aanspreekt, wat de persoonlijke immersie verbetert.
  
  **Personagecreatie:**
  - 🖼️ **Personageportretten:** Bij het genereren van een personage met AI probeert het systeem een portret te maken op basis van leeftijd, beroep en beschrijving. Houd er rekening mee dat dit een eerste versie is en dat de getrouwheid (vooral wat betreft leeftijd) kan variëren afhankelijk van het gebruikte model. (ik blijf testen, maar het begin is goed)
  - 🎲 **Betrouwbare Willekeurige Generatie:** Een fout opgelost waarbij de knop "Genereren met AI" bij de eerste poging kon mislukken, waardoor velden leeg bleven. Het slimme correctiesysteem zorgt er nu voor dat het antwoord altijd geldig is.

****************************************************************************************************
17/02/2026 07:04 - AI-beeldgeneratie, Verhaalverbeteringen en Controle - Beta_v058
****************************************************************************************************
- What's New (NL):
  **⚠️ EXPERIMENTELE TAK (STEAM BETA)**
  Deze versie is momenteel alleen beschikbaar in de **Experimentele Tak** van Steam. Om deze te activeren:
  1. Klik met de rechtermuisknop op **RolemIAster** in je Steam-bibliotheek.
  2. Selecteer **Eigenschappen...**
  3. Ga naar het tabblad **Betas**.
  4. Selecteer bij "Deelname aan beta" **experimental** in het keuzemenu.
  
  **Nieuw: Eerste fase van AI-beeldgeneratie**
  - 🎨 **Jouw Wereld in Beelden:** Ik heb een initieel systeem voor beeldgeneratie via Kunstmatige Intelligentie geïntegreerd. Terwijl je speelt, probeert het systeem portretten en landschappen te genereren die passen bij de sfeer van je spel.
  - 🖼️ **Dynamische Achtergronden:** De afbeeldingen worden op de achtergrond gegenereerd zonder je spel te onderbreken. Je zult zien hoe ze geleidelijk verschijnen in de achtergrond, op personagekaarten en in de Codex.
  - ⚡ **Snelheid op Maat:** Nieuwe sectie in Visuele Instellingen. Kies tussen "Snel" (1 stap), "Gemiddeld" (2 stappen) of "Hoog" (4 stappen) om de generatietijd aan te passen aan de kracht van je apparatuur.
  - 🛠️ **Technische Optimalisatie:** Het AI-model voor afbeeldingen wordt geladen in het **RAM (Geheugen)** en verwerkt via de **CPU**, zonder videogeheugen (VRAM) in beslag te nemen. Dit garandeert dat het de prestaties van de hoofd-AI van het spel (LLM) niet verstoort. Het vereist ongeveer 5GB extra RAM, wat binnen de officiële minimale systeemvereisten van Steam blijft.
  - 📤 **Deel je Avonturen:** Alle gegenereerde afbeeldingen worden automatisch opgeslagen. Je vindt ze in de map: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Verhaal en AI-brein:**
  - 🧠 **Einde van Lussen:** Er is een nieuwe "Geheugendoctrine" geïmplementeerd in de AI. Het onderscheidt nu beter tussen "herinneringen" (wat al gebeurd is) en het "heden" (wat er nu gebeurt). Dit helpt gevallen te verminderen waarin de AI zichzelf herhaalde of vastliep.
  - 📜 **Historische Archieven:** Het systeem presenteert je herinneringen aan de AI als een "Gesloten Historisch Archief", waardoor het makkelijker wordt om die informatie als referentie te gebruiken om het verhaal voort te zetten.
  - ⚡ **Geoptimaliseerde Instructies:** De manier waarop het spel de vertelling in jouw taal aanvraagt is verbeterd, waardoor capaciteit van het model vrijkomt om zich te concentreren op creativiteit.
  - 👁️ **Verhalende Focus:** De perceptie van de AI is herschreven. Het begrijpt nu beter welke elementen "statische achtergrond" zijn en niet onnodig herhaald moeten worden in elke alinea.
  - 🔀 **Duidelijkere Beslissingen:** De AI biedt nu meer gedefinieerde uitwegen. De suggesties (knoppen) zijn verdeeld tussen het onderzoeken van de omgeving (Verdiepen) of van koers veranderen (Afwijken).
  - 🫵 **Directe Aanspreekvorm:** De basisinstructie is aangepast om ervoor te zorgen dat de AI je met "Jij" aanspreekt, wat de persoonlijke immersie verbetert.
  
  **Personagecreatie:**
  - 🖼️ **Personageportretten:** Bij het genereren van een personage met AI probeert het systeem een portret te maken op basis van leeftijd, beroep en beschrijving. Houd er rekening mee dat dit een eerste versie is en dat de getrouwheid (vooral wat betreft leeftijd) kan variëren afhankelijk van het gebruikte model. (ik blijf testen, maar het begin is goed)
  - 🎲 **Betrouwbare Willekeurige Generatie:** Een fout opgelost waarbij de knop "Genereren met AI" bij de eerste poging kon mislukken, waardoor velden leeg bleven. Het slimme correctiesysteem zorgt er nu voor dat het antwoord altijd geldig is.

****************************************************************************************************
13/02/2026 21:47 - Optimalisatie van AI-instellingen en i18n-verbeteringen - Beta_v055
****************************************************************************************************
- What's New (NL):
  - ⚙️ **Lokaal prioriteitsbeheer:** Je kunt nu handmatig de prioriteit van je grafische kaarten aanpassen, zelfs als het systeem in de automatische modus staat.
  - 🧠 **AI-rotatie-informatie:** Ik heb informatiepanelen toegevoegd aan de instellingen voor externe providers om uit te leggen hoe de automatische rotatie werkt bij fouten of overschreden quota.
  - 🌍 **Uitgebreide GPU-ondersteuning:** Het i18n-informatiebericht geeft nu correct de ondersteuning voor NVIDIA CUDA en Vulkan (AMD/Intel) weer. Vertalingen bijgewerkt in alle talen!
  - ⚙️ **Verbeterde connectiviteit:** Connectoren voor Ollama en andere met OpenAI compatibele servers zijn gerepareerd.
  - 🧠 **Veeltalige en robuuste AI:** De detectie van voorwerpen die in het verhaal zijn verkregen werkt nu in 10 talen. Daarnaast heb ik het systeem beveiligd zodat je nooit zonder startverhaal komt te zitten, zelfs als de AI een technische hapering heeft.
  - 🔄 **Slimme rotatie:** Ik heb het rotatiesysteem gerepareerd zodat het je lokale AI niet bij de eerste poging opgeeft. Het systeem geeft het nu een kans om zichzelf te corrigeren voordat er externe hulp wordt gezocht.
  - 🧹 **Basis opgeschoond:** Ik heb oude en verwarrende regels verwijderd zodat het "brein" van de AI scherper en nauwkeuriger is in de omgang met je voorwerpen.

