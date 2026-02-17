****************************************************************************************************
17/02/2026 07:04 - AI-bildgenerering, berättelseförbättringar och kontroll - Beta_v058
****************************************************************************************************
- What's New (SV):
  **⚠️ EXPERIMENTELL GREN (STEAM BETA)**
  Denna version är för närvarande endast tillgänglig i den **Experimentella grenen** på Steam. För att aktivera den:
  1. Högerklicka på **RolemIAster** i ditt Steam-bibliotek.
  2. Välj **Egenskaper...**
  3. Gå till fliken **Betas**.
  4. Under "Betadeltagande", välj **experimental** i rullgardinsmenyn.
  
  **Nyhet: Första fasen av AI-bildgenerering**
  - 🎨 **Din värld i bilder:** Jag har integrerat ett initialt system för bildgenerering med Artificiell Intelligens. När du spelar försöker systemet generera porträtt och landskap som matchar atmosfären i ditt spel.
  - 🖼️ **Dynamiska bakgrunder:** Bilderna genereras i bakgrunden utan att stoppa ditt spel. Du kommer att se dem dyka upp successivt i bakgrunden, på karaktärskort och i Codex.
  - ⚡ **Hastighet som passar dig:** Ny sektion i Visuella inställningar. Välj mellan "Snabb" (1 steg), "Medel" (2 steg) eller "Hög" (4 steg) för att justera genereringstiden efter din dators prestanda.
  - 🛠️ **Teknisk optimering:** AI-modellen för bilder laddas i **RAM (minne)** och bearbetas via **CPU**, utan att ta upp videominne (VRAM). Detta garanterar att den inte stör prestandan hos spelets huvud-AI (LLM). Det krävs cirka 5 GB extra RAM, vilket håller sig inom de officiella minimikraven för Steam.
  - 📤 **Dela dina äventyr:** Alla genererade bilder sparas automatiskt. Du hittar dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Berättande och AI-hjärna:**
  - 🧠 **Slut på loopar:** En ny "Minnesdoktrin" har implementerats i AI:n. Den skiljer nu bättre på "minnen" (det som redan har hänt) och "nuet" (det som händer). Detta hjälper till att minska fallen där AI:n upprepade sig eller fastnade.
  - 📜 **Historiska arkiv:** Systemet presenterar dina minnen för AI:n som ett "Stängt historiskt arkiv", vilket gör det lättare för den att använda informationen som referens för att föra berättelsen framåt.
  - ⚡ **Optimerade instruktioner:** Sättet spelet begär berättande på ditt språk har förbättrats, vilket frigör kapacitet för modellen att fokusera på kreativitet.
  - 👁️ **Narrativt fokus:** AI:ns perception har skrivits om. Den förstår nu bättre vilka element som är "statisk bakgrund" och inte bör upprepas i onödan i varje stycke.
  - 🔀 **Tydligare beslut:** AI:n erbjuder nu mer definierade vägar. Dess förslag (knappar) är uppdelade mellan att undersöka omgivningen (Fördjupa) eller byta riktning (Divergera).
  - 🫵 **Direkt tilltal:** Grundinstruktionen har justerats för att säkerställa att AI:n tilltalar dig med "Du", vilket förbättrar den personliga inlevelsen.
  
  **Karaktärsskapande:**
  - 🖼️ **Karaktärsporträtt:** När du skapar en karaktär med AI försöker systemet skapa ett porträtt baserat på ålder, yrke och beskrivning. Tänk på att detta är en tidig version och att troheten (särskilt gällande ålder) kan variera beroende på vilken modell som används. (jag fortsätter att testa men starten är god)
  - 🎲 **Pålitlig slumpmässig generering:** Fixat ett fel där knappen "Generera med AI" kunde misslyckas vid första försöket och lämna fälten tomma. Nu säkerställer det intelligenta korrigeringssystemet att svaret alltid är giltigt.

****************************************************************************************************
13/02/2026 21:47 - Optimering av AI-konfiguration och förbättring av i18n - Beta_v055
****************************************************************************************************
- What's New (SV):
  - ⚙️ **Lokal prioritetskontroll:** Nu kan du justera prioriteten för dina grafikkort manuellt även om systemet är i automatläge.
  - 🧠 **Information om AI-rotation:** Jag har lagt till informationspaneler i inställningarna för externa leverantörer för att förklara hur den automatiska rotationen fungerar vid fel eller överskriden kvot.
  - 🌍 **Utökat GPU-stöd:** i18n-informationsmeddelandet återspeglar nu korrekt stödet för NVIDIA CUDA och Vulkan (AMD/Intel). Uppdaterade översättningar på alla språk!
  - ⚙️ **Förbättrad anslutning:** Fixade kopplingar för Ollama och andra OpenAI-kompatibla servrar.
  - 🧠 **Flerspråkig och robust AI:** Detektering av objekt som erhålls i berättelsen fungerar nu på 10 språk. Dessutom har jag säkrat systemet så att du aldrig blir utan en startberättelse, även om AI:n får tekniska problem.
  - 🔄 **Smart rotation:** Jag har fixat rotationssystemet så att det inte ger upp på din lokala AI direkt. Nu ger systemet den en chans att korrigera sig själv innan det söker extern hjälp.
  - 🧹 **Grundstädning:** Jag har tagit bort gamla och förvirrande regler för att göra AI:ns "hjärna" skarpare och mer exakt vid hantering av dina objekt.

