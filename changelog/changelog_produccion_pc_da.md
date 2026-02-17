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

