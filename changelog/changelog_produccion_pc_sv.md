****************************************************************************************************
02/03/2026 12:54 - Omfattande omarbetning av AI-kärnan - Beta_v060
****************************************************************************************************
- What's New (SV):
  - **🧠 Omarbetning av AI-kärnan**
    - ⚡ **Snabbare svar:** Jag har skrivit om spelets hjärna så att AI:n kommer ihåg bättre vad den redan har bearbetat. Praktiskt sett: mindre tid att stirra på laddningsskärmen mellan turer. Motorn återanvänder nu tidigare arbete istället för att börja från noll varje gång du agerar. (Ja, den gjorde det förut. Nej, jag är inte stolt över det.)
    - 🧹 **Renare minne:** Spelhistoriken lagras nu utan tekniskt skräp från det ögonblick den skrivs, inte när den läses. Resultat: AI:n har mer utrymme att minnas din historia och mindre tokens slösas på interna data som den aldrig behövde se.
    - 🎯 **Regler där de hör hemma:** Kompletterande regler som AI:n konsulterar för att berika sina svar har flyttats så att de inte stör cache-systemet. Effekten är osynlig för dig, men motorn uppskattar det vid varje tur (lite extra hastighet skadar aldrig).
  
  - ** Qwen3 släppt: fullständigt resonemang aktiverat**
    - 🚀 **Djupgående tänkande:** Modeller med resonemangsförmåga (Qwen3, DeepSeek-R1...) har nu sin fulla potential upplåst. Istället för att gå "på måfå" resonerar AI:n internt före varje svar: den planerar karaktärsblocket, utvärderar den narrativa överensstämmelsen med din historia och undviker fel som dubbletter i inventariet eller ofullständiga attribut. Resultatet är en anmärkningsvärt intelligentare och mer konsekvent AI.
    - 🧹 **Transparent för dig:** Allt detta resonemang sker bakom kulisserna. Motorn rensar automatiskt AI:ns "inre monolog" innan den visar dig svaret. Du ser bara det färdiga resultatet, mer polerat.
  
  - **⚡ Mer pålitlig spelstart**
    - 🛡️ **Adjö till "första turens låsningar":** Vi har eliminerat en orsak till eviga väntetider när man startar ett nytt spel. Tidigare, om AI:n genererade en köpman utan att känna till handelsreglerna (eftersom den inte har dem på första turen), försökte motorn korrigera det 3 gånger innan den gav upp, vilket orsakade mer än en minuts meningslös väntan. Nu löser den det omedelbart.
    - 📖 **Lore bevisat mot kreativ AI:** Om AI:n blir exalterad och genererar världens bakgrund i tekniskt format istället för narrativ text, upptäcker motorn det och extraherar den rena historien automatiskt. Din lore kommer alltid fram som den ska.
    - 🧹 **Oklanderligt gränssnitt:** Jag har lärt AI:n att inte "tala kod". Tidigare visade ibland beslutsknappar eller spelledarens kommentarer konstiga interna variabler (som *Fly (move to loc_cripta)*). Nu är allt rent och modellen har tvingats att kommunicera med dig med den humoristiska ton du har valt (att respektera denna parameter beror på AI:ns humör).
  
  - **🌍 Språkkorrigeringar**
    - 🗣️ **Platser på ditt språk:** Platser som genereras av AI:n respekterar nu det språk som är inställt i spelet. Om du spelar på engelska kommer du inte längre att se "Distrito de la Costa Oeste" utan det engelska namnet. (Ups.)
    - 🔘 **Lokaliserade knappar:** Nödknappen "Fortsätt" talar nu ditt språk istället för att alltid visas på spanska.

****************************************************************************************************
27/02/2026 16:46 - Synkronisering av laddning i strid och turflöde - Beta_v059
****************************************************************************************************
- What's New (SV):
  - **Strider och spelupplägg**
    - ⚔️ **Smidigare anfall:** inga fler "tomma" knapptryckningar när din handling var i kö, och laddning av sparfiler återger verkliga beslut, inte "spökknappar".
    - 🧭 **Synkroniserad scen:** det du ser på skärmen återspeglar stridens aktuella status och endast fiender som befinner sig på din plats visas.
    - 🚫 **Mindre internt pappersarbete:** vi har rensat bort onödiga kontroller så att spelet flyter på utan administrativa flaskhalsar.
  
  - **Visuell motor och avancerad panel**
    - 🧹 **Ren väljare:** tekniska mappar döljs och filtreringen normaliseras för att välja modeller utan brus.
    - ️ **Stabila bakgrunder:** om en bild laddas, "kör" den inte över de efterföljande bilderna; dessutom undviker laddning i strid överraskande regenereringar.
    - 🎛️ **Förbättrad bildpanel:** renderstrategi, ändringsstyrka och minsta steg kontrolleras nu från den avancerade gränssnittet med kontextuell hjälp.
  
  - **Karaktärsskapande och porträtt**
    - 🧍 **Synligt kön:** du väljer Man/Kvinna i grundformuläret och hela flödet (porträtt, interna data) respekterar detta val.
    - 👶➡️🧓 **Begriplig ålder:** vi använder berättande tidsramar så att AI:n bättre kan rita livsstadier.
    - 🧼 **Rensade prompts:** vi rensar bort tekniskt brus innan bildförfrågningar skickas, vilket märks i porträttens stabilitet.
    -  **Tillförlitliga karaktärsblad:** AI:n kan inte "glömma bort" obligatoriska attribut eller blåsa upp initialt inventarium.
  
  - **Berättelse, regler och RAG**
    - 🚀 **Mer direkt ankomst för spelarkaraktärer:** startscenen använder strikta JSON-kontrakt och undviker konstiga kontextblandningar.
    -  **Fokuserad RAG:** endast tillåtna rötter indexeras och karaktärsbladet som skickas till prompten innehåller sammanfattningar av effekter för att spara tokens.
  
  - **AI-inställningar och PSR**
    - 🎛️ **Ny PSR-kontroll Fas 1:** bestäm om du vill ha det kirurgiska läget alltid under utforskning eller bara när prompten sätter press.
    - 📏 **Justerbar tröskel (95% standard):** finjustera hur mycket marginal du ger innan automatisk PSR utlöses, beroende på din hårdvara.
    - 🧠 **Lättare prompts utan loopar:** vi sammanfattar tillstånd och AI:n har verktyg för att inte överbelastas när historien blir komplicerad.

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

