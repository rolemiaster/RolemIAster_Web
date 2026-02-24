****************************************************************************************************
24/02/2026 12:32 - AI-billedgenerering, narrative forbedringer og kontrol - Beta_v058
****************************************************************************************************
- What's New (DA):
  **Nyhed: Anden fase af AI-billedgenerering**
  - 🎨 **Din verden i billeder:** Jeg har integreret et indledende system til billedgenerering via kunstig intelligens. Mens du spiller, forsøger systemet at generere portrætter og landskaber, der ledsager stemningen i dit spil.
  - 🖼️ **Dynamiske baggrunde:** Billederne genereres i baggrunden uden at afbryde dit spil. Du vil se dem dukke op løbende i baggrunden, på karakterkort og i dit Codex.
  - 🧹 **Billedhåndtering:** Nyt panel til at se og slette de genererede billeder, som du ikke bryder dig om.
  
  **Forbedringer af karaktergenerering:**
  - ⚙️ **Mere solid tilfældig generering:** Jeg har forenet og forbedret den regelmotor, som AI'en bruger til at skabe karakterer fra bunden, hvilket sikrer mere logiske inventarer (5 til 10 sammenhængende genstande) og mere balancerede karakterark.
  - 🧠 **Opdelt hjerne:** AI'en forstår nu bedre, hvornår den skal "opfinde" en karakter fra bunden, og hvornår den skal begrænse sig til at udtrække data fra den biografi, du selv har skrevet.
  - ⚡ **Hastighed efter dit behov:** Ny sektion i Visuelle indstillinger. Vælg mellem "Hurtig" (1 trin), "Medium" (2 trin) eller "Høj" (4 trin) for at justere genereringstiden til din computers ydeevne.
  - 🛠️ **Teknisk optimering:** AI-modellen til billeder indlæses i **RAM (Hukommelse)** og behandles via **CPU**, uden at optage videohukommelse (VRAM). Dette sikrer, at den ikke forstyrrer ydeevnen for spillets primære AI (LLM). Det kræver ca. 5 GB ekstra RAM, hvilket holder sig inden for Steams officielle minimumskrav.
  - 📤 **Del dine eventyr:** Alle genererede billeder gemmes automatisk. Du finder dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Modelvælger (Avanceret):** Hvis du starter spillet med parameteren `--advanced`, kan du nu vælge, hvilken AI-model der skal bruges til billeder fra panelet Udseende. Dette giver entusiaster mulighed for at prøve forskellige versioner af Stable Diffusion optimeret til OpenVINO (.xml/.bin-filer).
  
  **Narrativ og AI-hjerne:**
  - 🧠 **Slut med loops:** En ny "Hukommelsesdoktrin" er implementeret i AI'en. Den skelner nu bedre mellem "minder" (hvad der allerede er sket) og "nutiden" (hvad der sker nu). Dette hjælper med at reducere tilfælde, hvor AI'en gentog sig selv eller gik i stå.
  - 📜 **Historiske arkiver:** Systemet præsenterer dine minder for AI'en som et "lukket historisk arkiv", hvilket gør det lettere for den at bruge oplysningerne som reference til at bringe historien videre.
  - ⚡ **Optimerede instruktioner:** Måden, hvorpå spillet anmoder om fortælling på dit sprog, er blevet forbedret, hvilket frigør modelkapacitet til at fokusere på kreativitet.
  - 👁️ **Narrativt fokus:** AI'ens opfattelse er blevet omskrevet. Den forstår nu bedre, hvilke elementer der er "statisk baggrund" og ikke bør gentages unødigt i hvert afsnit.
  - 🔀 **Tydeligere beslutninger:** AI'en tilbyder nu mere definerede udveje. Dens forslag (knapper) er opdelt mellem at undersøge omgivelserne (Uddyb) eller skifte kurs (Diverger).
  - 🫵 **Direkte tiltale:** Grundinstruktionen er blevet justeret for at sikre, at AI'en tiltaler dig som "Du", hvilket forbedrer den personlige indlevelse.
  
  **Karakteroprettelse:**
  - 🖼️ **Karakterportrætter:** Når du genererer en karakter med AI, forsøger systemet at skabe et portræt baseret på alder, profession og beskrivelse. Bemærk, at dette er en tidlig version, og nøjagtigheden (især hvad angår alder) kan variere afhængigt af den anvendte model. (Jeg tester stadig, men starten er lovende).
  - 🎲 **Pålidelig tilfældig generering:** Rettet en fejl, hvor knappen "Generer med AI" kunne fejle i første forsøg og efterlade felterne tomme. Nu sikrer det intelligente korrektionssystem, at svaret altid er gyldigt.
  
  **Administration af genererede billeder:**
  - 🖼️ **AI-billedgalleri:** Nyt panel i Arkiv-menuen, der viser alle de billeder, som AI'en har genereret i løbet af dine spil (portrætter, baggrunde). Du kan filtrere efter billedtype eller verden.
  - 🗑️ **Selektiv sletning:** Vælg et eller flere billeder og slet dem, hvis du ikke er tilfreds (måske det billede, hvor AI'en besluttede, at det var en god idé at parkere en bus i slottets stald). Systemet renser både filen og dens interne registrering.
  - 📂 **Direkte adgang:** Dobbeltklik på et miniaturebillede for at åbne mappen, hvor filen findes. Hvis du allerede har mappen åben, genbruges det samme vindue.
  - 💾 **Husk dit layout:** Størrelsen på gallerivinduet gemmes automatisk mellem sessioner.
  
  **Ydeevne på lave konfigurationer (Vigtigt for GPU'er med lidt VRAM):**
  - 🧠 **PSR - Hybrid styring:** Nyt system, der opdeler AI'ens arbejde i to faser: Planlægning (Kokken) og Udførelse (Køkkenhjælperne). Dette gør det muligt for lokale modeller med 8 GB VRAM at fungere uden nedbrud på grund af for meget kontekst (+12K tokens), på bekostning af højere latenstid; interaktionen med AI'en går fra at være en enkelt prompt til en række prompts (jo mindre VRAM, jo flere prompts genereres der, og jo længere er responstiden).
  - ⚡ **Intelligent afvikling:** Systemet beslutter automatisk, om alt skal behandles på én gang (monolitisk) eller deles op i dele (iterativt) afhængigt af din tilgængelige VRAM. GPU'er med mindre VRAM aktiverer den trinvise tilstand, når det er nødvendigt.
  - 📊 **Dynamisk optimering:** PSR reducerer token-belastningen under generering, hvilket gør det muligt for brugere med 4 GB grafikkort at gennemføre karakteroprettelse og historiegenerering, som tidligere blokerede.
  - 🔄 **Bevaret sammenhæng:** På trods af opdelingen af arbejdet indsprøjter systemet en "overordnet hensigt", så AI'en ikke mister tråden i det, den var i gang med.
  
  **AI-stemmer (inkrementel forbedring):**
  Realtidsgenerering af stemmer på alle sprog (nogle sprog er mere begrænsede end andre; det mest varierede i stemmetyper er engelsk).
  - 🗣️ **Kampkald med stemme:** Når en kamp mod fjendtlige enheder starter, afspilles der nu en kontekstuel stemmebemærkning.
  - 🎭 **Dynamiske sætninger efter kontekst:** Motoren kan generere korte stemmelinjer til specifikke begivenheder (tjenester/kamp) afhængigt af sprog, miljø og karakterprofil.
  - 🧠 **Interne stemmeskabeloner:** De tekniske stemmeskabeloner er blevet adskilt fra det narrative system for at undgå forstyrrelser i historien.
  - 🔊 **Større klarhed ved lytning:** Forbedret forståelighed og prosodi i syntesen for at prioritere tydelig diktion.
  
  **⚠️ Advarsel om kompatibilitet (Tidligere gemte spil):**
  - 🔄 På grund af mængden af interne ændringer i regelmotoren og miljøsystemet vil **tidligere gemte spil og verdener (muligvis) stadig kunne spilles**, men det er meget sandsynligt, at de vil fremvise fejl eller uventet adfærd. **Det anbefales at oprette en ny, ren verden** for at nyde alle forbedringerne korrekt.

****************************************************************************************************
17/02/2026 07:20 - AI-billedgenerering, Fortælleforbedringer og Kontrol - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (DA):
  **⚠️ EKSPERIMENTEL GREN (STEAM BETA)**
  Denne version er i øjeblikket kun tilgængelig i Steams **Eksperimentelle Gren**. Sådan aktiverer du den:
  1. Højreklik på **RolemIAster** i dit Steam-bibliotek.
  2. Vælg **Egenskaber...**
  3. Gå til fanen **Betaer**.
  4. Under "Betadeltagelse" vælger du **experimental** i rullemenuen.
  
  **Nyhed: Første fase af AI-billedgenerering**
  - 🎨 **Din Verden i Billeder:** Jeg har integreret et indledende system til generering af billeder via kunstig intelligens. Mens du spiller, forsøger systemet at generere portrætter og landskaber, der passer til stemningen i dit spil.
  - 🖼️ **Dynamiske Baggrunde:** Billederne genereres i baggrunden uden at stoppe dit spil. Du vil se dem dukke gradvist op i baggrunden, på karakterkort og i Codexet.
  - ⚡ **Hastighed efter dit Behov:** Ny sektion i Visuelle Indstillinger. Vælg mellem "Hurtig" (1 trin), "Mellem" (2 trin) eller "Høj" (4 trin) for at justere genereringstiden til din computers ydeevne.
  - 🛠️ **Teknisk Optimering:** AI-modellen til billeder indlæses i **RAM (Hukommelse)** og behandles via **CPU**, uden at optage videohukommelse (VRAM). Dette sikrer, at det ikke forstyrrer ydeevnen af spillets primære AI (LLM). Det kræver ca. 5 GB ekstra RAM, men holder sig inden for Steams officielle minimumskrav.
  - 📤 **Del dine Eventyr:** Alle genererede billeder gemmes automatisk. Du finder dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Fortælling og AI-hjerne:**
  - 🧠 **Slut med Sløjfer:** En ny "Hukommelsesdoktrin" er blevet implementeret i AI'en. Den skelner nu bedre mellem "minder" (hvad der allerede er sket) og "nutiden" (hvad der sker nu). Dette hjælper med at reducere tilfælde, hvor AI'en gentog sig selv eller gik i stå.
  - 📜 **Historiske Arkiver:** Systemet præsenterer dine minder for AI'en som et "Lukket Historisk Arkiv", hvilket gør det lettere for den at bruge den information som reference til at drive historien fremad.
  - ⚡ **Optimerede Instruktioner:** Måden, hvorpå spillet anmoder om fortællingen på dit sprog, er blevet forbedret, hvilket frigør kapacitet til, at modellen kan fokusere på kreativitet.
  - 👁️ **Fortællingsfokus:** AI'ens opfattelse er blevet omskrevet. Den forstår nu bedre, hvilke elementer der er "statisk baggrund", og bør ikke gentage dem unødvendigt i hvert afsnit.
  - 🔀 **Klarere Beslutninger:** AI'en tilbyder nu mere definerede flugtveje. Dens forslag (knapper) er opdelt mellem at undersøge omgivelserne (Fordybelse) eller ændre kurs (Afvigelse).
  - 🫵 **Direkte Tiltale:** Grundinstruktionen er blevet justeret for at sikre, at AI'en tiltaler dig med "Du", hvilket forbedrer den personlige indlevelse.
  
  **Karakterskabelse:**
  - 🖼️ **Karakterportrætter:** Når du genererer en karakter med AI, forsøger systemet at skabe et portræt baseret på alder, erhverv og beskrivelse. Bemærk, at det er en tidlig version, og nøjagtigheden (især med hensyn til alder) kan variere afhængigt af den anvendte model. (Jeg udfører stadig tests, men starten er god)
  - 🎲 **Pålidelig Tilfældig Generering:** Rettede en fejl, hvor knappen "Generer med AI" kunne fejle i første forsøg og efterlade felterne tomme. Nu sikrer det intelligente korrektionssystem, at svaret altid er gyldigt.

****************************************************************************************************
17/02/2026 07:04 - AI-billedgenerering, Fortælleforbedringer og Kontrol - Beta_v058
****************************************************************************************************
- What's New (DA):
  **⚠️ EKSPERIMENTEL GREN (STEAM BETA)**
  Denne version er i øjeblikket kun tilgængelig i Steams **Eksperimentelle Gren**. Sådan aktiverer du den:
  1. Højreklik på **RolemIAster** i dit Steam-bibliotek.
  2. Vælg **Egenskaber...**
  3. Gå til fanen **Betaer**.
  4. Under "Betadeltagelse" vælger du **experimental** i rullemenuen.
  
  **Nyhed: Første fase af AI-billedgenerering**
  - 🎨 **Din Verden i Billeder:** Jeg har integreret et indledende system til generering af billeder via kunstig intelligens. Mens du spiller, forsøger systemet at generere portrætter og landskaber, der passer til stemningen i dit spil.
  - 🖼️ **Dynamiske Baggrunde:** Billederne genereres i baggrunden uden at stoppe dit spil. Du vil se dem dukke gradvist op i baggrunden, på karakterkort og i Codexet.
  - ⚡ **Hastighed efter dit Behov:** Ny sektion i Visuelle Indstillinger. Vælg mellem "Hurtig" (1 trin), "Mellem" (2 trin) eller "Høj" (4 trin) for at justere genereringstiden til din computers ydeevne.
  - 🛠️ **Teknisk Optimering:** AI-modellen til billeder indlæses i **RAM (Hukommelse)** og behandles via **CPU**, uden at optage videohukommelse (VRAM). Dette sikrer, at det ikke forstyrrer ydeevnen af spillets primære AI (LLM). Det kræver ca. 5 GB ekstra RAM, men holder sig inden for Steams officielle minimumskrav.
  - 📤 **Del dine Eventyr:** Alle genererede billeder gemmes automatisk. Du finder dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Fortælling og AI-hjerne:**
  - 🧠 **Slut med Sløjfer:** En ny "Hukommelsesdoktrin" er blevet implementeret i AI'en. Den skelner nu bedre mellem "minder" (hvad der allerede er sket) og "nutiden" (hvad der sker nu). Dette hjælper med at reducere tilfælde, hvor AI'en gentog sig selv eller gik i stå.
  - 📜 **Historiske Arkiver:** Systemet præsenterer dine minder for AI'en som et "Lukket Historisk Arkiv", hvilket gør det lettere for den at bruge den information som reference til at drive historien fremad.
  - ⚡ **Optimerede Instruktioner:** Måden, hvorpå spillet anmoder om fortællingen på dit sprog, er blevet forbedret, hvilket frigør kapacitet til, at modellen kan fokusere på kreativitet.
  - 👁️ **Fortællingsfokus:** AI'ens opfattelse er blevet omskrevet. Den forstår nu bedre, hvilke elementer der er "statisk baggrund", og bør ikke gentage dem unødvendigt i hvert afsnit.
  - 🔀 **Klarere Beslutninger:** AI'en tilbyder nu mere definerede flugtveje. Dens forslag (knapper) er opdelt mellem at undersøge omgivelserne (Fordybelse) eller ændre kurs (Afvigelse).
  - 🫵 **Direkte Tiltale:** Grundinstruktionen er blevet justeret for at sikre, at AI'en tiltaler dig med "Du", hvilket forbedrer den personlige indlevelse.
  
  **Karakterskabelse:**
  - 🖼️ **Karakterportrætter:** Når du genererer en karakter med AI, forsøger systemet at skabe et portræt baseret på alder, erhverv og beskrivelse. Bemærk, at det er en tidlig version, og nøjagtigheden (især med hensyn til alder) kan variere afhængigt af den anvendte model. (Jeg udfører stadig tests, men starten er god)
  - 🎲 **Pålidelig Tilfældig Generering:** Rettede en fejl, hvor knappen "Generer med AI" kunne fejle i første forsøg og efterlade felterne tomme. Nu sikrer det intelligente korrektionssystem, at svaret altid er gyldigt.

****************************************************************************************************
13/02/2026 21:47 - Optimering af AI-konfiguration og i18n-styrkelse - Beta_v055
****************************************************************************************************
- What's New (DA):
  - ⚙️ **Lokal Prioritetskontrol:** Nu kan du manuelt justere prioriteten for dine grafikkort, selvom systemet er i automatisk tilstand.
  - 🧠 **Information om AI-rotation:** Jeg har tilføjet informationspaneler i indstillingerne for eksterne udbydere for at forklare, hvordan automatisk rotation fungerer i tilfælde af fejl eller overskredet kvote.
  - 🌍 **Udvidet GPU-understøttelse:** Informationsbeskeden for i18n afspejler nu korrekt understøttelse af NVIDIA CUDA og Vulkan (AMD/Intel). Oversættelser er opdateret på alle sprog!
  - ⚙️ **Forbedret Forbindelse:** Forbindelser til Ollama og andre OpenAI-kompatible servere er repareret.
  - 🧠 **Polyglot og Robust AI:** Detektion af genstande fundet i historien fungerer nu på 10 sprog. Derudover har jeg sikret systemet, så du aldrig står uden en starthistorie, selv hvis AI'en begår en teknisk fejl.
  - 🔄 **Intelligent Rotation:** Jeg har rettet rotationssystemet, så det ikke opgiver din lokale AI ved første forsøg. Nu vil systemet give den en chance for at rette sig selv, før det søger ekstern hjælp.
  - 🧹 **Oprydning af Fundamentet:** Jeg har fjernet gamle og forvirrende regler, så AI'ens "hjerne" er skarpere og mere præcis til at håndtere dine genstande.

