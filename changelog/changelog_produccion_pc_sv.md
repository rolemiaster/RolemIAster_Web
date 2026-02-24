****************************************************************************************************
24/02/2026 12:32 - AI-bildgenerering, berättarmässiga förbättringar och kontroll - Beta_v058
****************************************************************************************************
- What's New (SV):
  **🧠 Hjärnans evolution: Hej, Qwen 3**
  Jag har migrerat spelmotorn för att få ut maximal prestanda av den nya generationen Qwen3-modeller. De gamla modellerna i 2.5-serien följde med när RolemIAster började sin resa, men nu är det dags att lämna gamla storheter bakom oss. Detta kvantitativa hopp i berättelsegenereringen ger mer uppslukande prosa, mycket striktare regler och mer sammanhängande karaktärer. Förbered era grafikkort, för spelledaren har precis gått upp en nivå.

  **Nyhet: Andra fasen av AI-bildgenerering**
  - 🎨 **Din värld i bilder:** Jag har integrerat ett initialt system för bildgenerering via artificiell intelligens. Medan du spelar försöker systemet generera porträtt och landskap som matchar stämningen i ditt äventyr.
  - 🖼️ **Dynamiska bakgrunder:** Bilderna genereras i bakgrunden utan att pausa ditt spel. Du kommer att se dem dyka upp successivt i bakgrunden, på karaktärskort och i Codex.
  - 🧹 **Bildhantering:** Ny panel för att visa och radera genererade bilder som du inte gillar.
  
  **Förbättringar i karaktärsskapande:**
  - ⚙️ **Stabilare slumpmässig generering:** Jag har enhetliggjort och förbättrat regelmotorn som AI:n använder för att skapa karaktärer från grunden, vilket garanterar mer logiska inventarier (5 till 10 sammanhängande föremål) och mer balanserade karaktärsblad.
  - 🧠 **Delad hjärna:** AI:n förstår nu bättre när den ska "uppfinna" en karaktär från noll och när den ska begränsa sig till att extrahera data från biografin som du själv har skrivit.
  - ⚡ **Hastighet efter dina behov:** Ny sektion i Visuella inställningar. Välj mellan "Snabb" (1 steg), "Medium" (2 steg) eller "Hög" (4 steg) för att anpassa genereringstiden till din dators kraft.
  - 🛠️ **Teknisk optimering:** AI-modellen för bilder laddas i **RAM (Memory)** och bearbetas via **CPU**, utan att ta upp videominne (VRAM). Detta garanterar att den inte stör prestandan för spelets huvudsakliga AI (LLM). Kräver cirka 5 GB extra RAM, vilket håller sig inom Steams officiella minimikrav.
  - 📤 **Dela dina äventyr:** Alla genererade bilder sparas automatiskt. Du hittar dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Modellväljare (Avancerat):** Om du startar spelet med parametern `--advanced` kan du nu välja vilken AI-modell som ska användas för bilder från panelen Utseende. Detta gör det möjligt för entusiaster att testa olika versioner av Stable Diffusion optimerade för OpenVINO (.xml/.bin-filer).
  
  **Berättande och AI-hjärna:**
  - 🧠 **Slut på loopar:** En ny "Minnesdoktrin" har implementerats i AI:n. Den skiljer nu bättre på "minnen" (det som redan hänt) och "nuet" (det som händer just nu). Detta hjälper till att minska fall där AI:n upprepar sig eller fastnar.
  - 📜 **Historiska arkiv:** Systemet presenterar dina minnen för AI:n som ett "Stängt historiskt arkiv", vilket gör det lättare för den att använda informationen som referens för att föra historien framåt.
  - ⚡ **Optimerade instruktioner:** Sättet spelet begär berättandet på ditt språk har förbättrats, vilket frigör modellens kapacitet att fokusera på kreativitet.
  - 👁️ **Narrativt fokus:** AI:ns perception har skrivits om. Den förstår nu bättre vilka element som är "statisk bakgrund" och bör inte upprepa dem i onödan i varje stycke.
  - 🔀 **Tydligare beslut:** AI:n erbjuder nu mer definierade vägar framåt. Dess förslag (knappar) är uppdelade mellan att undersöka omgivningen (Fördjupa) eller byta kurs (Avvika).
  - 🫵 **Direkt tilltal:** Grundinstruktionen har justerats för att säkerställa att AI:n tilltalar dig med "Du", vilket förbättrar den personliga inlevelsen.
  
  **Karaktärsskapande:**
  - 🖼️ **Karaktärsporträtt:** När en karaktär genereras med AI försöker systemet skapa ett porträtt baserat på dess ålder, yrke och beskrivning. Observera att detta är en tidig version och att likheten (särskilt gällande ålder) kan variera beroende på vilken modell som används. (Jag fortsätter att testa, men starten är lovande)
  - 🎲 **Tillförlitlig slumpmässig generering:** Fixat ett fel där knappen "Generera med AI" kunde misslyckas vid första försöket och lämna fälten tomma. Nu ser det smarta korrigeringssystemet till att svaret alltid är giltigt.
  
  **Hantering av genererade bilder:**
  - 🖼️ **AI-bildgalleri:** Ny panel i Arkiv-menyn som visar alla bilder som AI:n har genererat under dina spelpass (porträtt, bakgrunder). Du kan filtrera efter bildtyp eller värld.
  - 🗑️ **Selektiv radering:** Markera en eller flera bilder och ta bort dem om du inte är nöjd (kanske den där AI:n tyckte det var en bra idé att parkera en buss i slottets stall). Systemet rensar både filen och dess interna register.
  - 📂 **Direktåtkomst:** Dubbelklicka på valfri miniatyrbild för att öppna mappen där filen finns. Om du redan har mappen öppen återanvänds samma fönster.
  - 💾 **Kommer ihåg ditt utrymme:** Gallerifönstrets storlek sparas automatiskt mellan sessioner.
  
  **Prestanda på låga inställningar (Viktigt för GPU:er med lite VRAM):**
  - 🧠 **PSR - Hybridstyrning:** Nytt system som delar upp AI-arbetet i två faser: Planering (Kock) och Exekvering (Biträdande kockar). Detta gör det möjligt för lokala modeller med 8 GB VRAM att fungera utan krascher på grund av för mycket kontext (+12K tokens), på bekostnad av högre latens. Interaktionen med AI:n går från att vara en enda prompt till en serie prompter (ju mindre VRAM, desto fler prompter genereras och desto längre blir svarstiden).
  - ⚡ **Intelligent exekvering:** Systemet avgör automatiskt om allt ska bearbetas på en gång (monolitiskt) eller delas upp i delar (iterativt) baserat på ditt tillgängliga VRAM. GPU:er med mindre VRAM aktiverar det stegvisa läget endast när det är nödvändigt.
  - 📊 **Dynamisk optimering:** PSR minskar belastningen av tokens under genereringen, vilket gör att användare med grafikkort på 4 GB kan slutföra karaktärsskapande och historiegenerering som tidigare låste sig.
  - 🔄 **Bibehållen koherens:** Trots att arbetet delas upp injicerar systemet en "huvudintention" så att AI:n inte tappar tråden i det den gjorde.
  
  **AI-röster (stegvis förbättring):**
  Realtidsgenerering av röster på alla språk (vissa språk är mer begränsade än andra, engelska har det bredaste utbudet av rösttyper).
  - 🗣️ **Stridsrop med röst:** När en strid inleds mot fientliga fiender utlöses nu en kontextuell röstfras som start.
  - 🎭 **Dynamiska fraser efter sammanhang:** Motorn kan generera korta röstlinjer för specifika händelser (tjänster/strid) baserat på språk, miljö och karaktärsprofil.
  - 🧠 **Interna röstmallar:** De tekniska röstmallarna har separerats från det narrativa systemet för att undvika störningar i historien.
  - 🔊 **Bättre tydlighet:** Taligenkänningens tydlighet och prosodi har förbättrats för att prioritera begriplig diktion.
  
  **⚠️ Kompatibilitetsmeddelande (Tidigare spelsessioner):**
  - 🔄 På grund av mängden interna ändringar i regelmotorn och miljösystemet kommer **tidigare sparade spel och världar fortfarande att vara spelbara (troligtvis)**, men det är mycket troligt att de uppvisar fel eller oväntat beteende. **Det rekommenderas att skapa en ny, ren värld** för att kunna njuta av alla förbättringar på rätt sätt.

****************************************************************************************************
17/02/2026 07:20 - AI-bildgenerering, berättelseförbättringar och kontroll - EXPERIMENTAL_v057
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

