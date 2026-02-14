****************************************************************************************************
14/02/2026 05:06 - Integritetsförstärkning, Karaktärsmedvetenhet och Optimering - Beta_v056
****************************************************************************************************
- What's New (SV):
  - 🧠 **AI-prioritet som du vill:** Nu kan du dra och släppa dina AI-kopplingar för att bestämma vilken som ska användas först. Om en misslyckas försöker spelet automatiskt med nästa på din prioriteringslista.
  - ⚙️ **Kontroll över förladdning:** Alternativ tillagt i startprogrammet för att bestämma om du vill förladda den lokala AI-modellen eller bara ladda den när det behövs (sparar resurser vid uppstart).
  - 🛡️ **Säker och ren radering:** Vid borttagning av en värld ser systemet nu till att rensa absolut all relaterad data (karaktärer och berättelse), vilket håller din databas fläckfri.
  - 🚀 **Minnesoptimering:** AI:ns "hjärna" laddas nu bara en gång och delas mellan alla funktioner, vilket sparar mycket grafikminne (VRAM).
  - 🎨 **Smart gränssnitt:** Världsurvalspanelen anpassar sig nu perfekt till skärmen och texten, utan avskurna knappar eller dåligt utnyttjat utrymme.
  - 🔄 **Förbättrad smart rotation:** Jag har fixat rotationssystemet så att det inte ger upp med din lokala AI direkt; nu ges den en chans att korrigera sig själv innan extern hjälp söks.
  - 🌍 **Flerspråkig och robust AI:** Objektsdetektering och berättande är nu mer exakt på 10 språk, med speciella skyddsåtgärder så att du aldrig står utan historia.
  - 🛠️ **Garanterad AI-persistens:** Fixade felet som gjorde att Gemini "glömde" eller förvandlades till Ollama. Dina prioriteringar för AI-användning sparas nu säkert och exakt.
  - ⚡ **Gemini återställd:** Reparerade åtkomsten till Gemini-modellen genom att återställa dess korrekta nycklar och URL.
  - 🎨 **Fixat tematiskt gränssnitt:** Beslutsknappar återfår nu omedelbart din världs färg (t.ex. Guld för fantasy) när spelet laddas.
  - 👥 **Medvetenhet mellan karaktärer:** AI:n är nu medveten om alla dina karaktärer! Om du har flera hjältar i samma värld kommer AI:n att känna igen dem som invånare och kan komma ihåg vad var och en gjorde individuellt.
  - 🧠 **Minne med attribuering:** Minnessystemet skiljer nu på vem som utförde varje handling, vilket förhindrar att AI:n blandar ihop dina tidigare bedrifter med andra karaktärers.

****************************************************************************************************
13/02/2026 07:56 - System för semantisk stridstolkning - Beta_v054
****************************************************************************************************
- What's New (SV):
  🧪 NU TILLGÄNGLIGT:
  
  ⚠️ **VIKTIGT MEDDELANDE:** SPELET KAN MIGRERA DEN GAMLA DATABASEN TILL DEN NYA STRUKTUREN VIA STARTALTERNATIVEN. JAG REKOMMENDERAR INTE DETTA; ÄVEN OM DIN GAMLA SPARFIL FUNGERAR, KOMMER MÅNGA SAKER ATT VARA TRASIGA. MIN REKOMMENDATION ÄR ATT RADERA ALLA TIDIGARE SPARADE SPEL. DET ÄR INTE NÖDVÄNDIGT ATT RADERA HELA DATABASEN UTOM I EXTREMFALL.
  
  Ändringar:
  
  - 🌍 **Världs- och karaktärshanterare:** Nu har du total frihet. Skapa dina egna världar med sina egna regler och miljöer, och skapa så många karaktärer du vill i varje värld. **Viktig notering:** Alla karaktärer i samma värld delar samma tidslinje och inträffade händelser, vilket lägger grunden för det framtida flerspelarläget.
  - 🧠 **Kontextuellt minne (Super RAG):** AI:n har nu "sinnen". När den söker information i loret eller i sitt minne, tar den hänsyn till var du är, vem du är med, om du är skadad och vad som precis har hänt. Om du är med en kung, kommer den ihåg saker om kungar. Om du är skadad, letar den efter regler om läkning. Det är mycket mer intuitivt och sammanhängande!
  - 🌍 **Lore för första karaktären:** Skrev du en episk beskrivning av din värld som AI:n ignorerade för din första karaktär? Löst! Nu når den manuella världsbeskrivningen AI:n direkt under det inledande skapandet, till och med innan minnessystemet aktiveras.
  - ⚙️ **Förbättrat världssystem:** Jag har gjort namnet på din värld oberoende av de tekniska reglerna. Nu kan du kalla din värld vad du vill utan att det påverkar laddningen av Fantasy- eller Cyberpunk-regler.
  - 📝 **Tydlighet vid skapande:** Jag har förbättrat de interna instruktionerna så att AI:n bättre förstår när den ska hitta på en bakgrundshistoria och när den bara ska extrahera din statistik.
  - 🧠 **Strid med fritext:** Nu kan du skriva dina handlingar i strid som om du pratade med en spelledare: "kasta helande besvärjelse på mig själv", "dra mitt svärd", "använd läkningsdryck". AI:n förstår din avsikt och översätter den till spelmekanik.
  - 🎨 **Nytt episkt gränssnitt!** Jag har gjort om spelet helt och hållet. Menyer i RPG-stil, animerade bakgrunder och en helt förnyad visuell upplevelse. Mörk halvgenomskinlig stil, neonkanter och mjuka skuggor för total inlevelse.
  - 🎬 **AI-scenregissör (FÖRBÄTTRAD):** Striden får nu liv. AI:n genererar miljöhändelser och reaktioner som berikar berättelsen: facklor som faller, fiender som drar sig tillbaka, bjälkar som rasar. Slagfältet är inte längre statiskt!
  - ⚔️ **Dra vapen med ord:** Du behöver inte längre klicka på vapenplatsen. Skriv bara "dra svärd" eller "ta fram min yxa" så tolkar systemet det automatiskt (OBS!, att göra detta i strid kan resultera i misslyckande, fummel och förlorad tur!... "Man kommer förberedd till strid!").
  - 📖 **Igenkända besvärjelser:** AI:n känner nu till hela din besvärjelsebok. Säg "kasta eldklot" och om du har den besvärjelsen, kommer den att kastas.
  - 🌍 **Berättelse på ditt språk:** Berättelsen respekterar nu strikt det valda språket och undviker konstiga blandningar mellan språk (förhoppningsvis behöver jag aldrig se mer "svengelska" igen!, jag har tvingat AI:n så hårt att om den genererar texter på ett annat språk än det valda, är det nog för att den faktiskt är förbannad).
  - 🛡️ **Inga fler förlorade turer:** Om spelet inte förstår din handling kommer det att be dig formulera om den. Din tur går INTE förlorad.
  - 🎒 **Manuellt inventarium:** För att flytta föremål mellan platser (utrusta från ryggsäck, ladda ammunition), använd dra-och-släpp-gränssnittet. Detta undviker förvirring och sparar AI-resurser.
  - 🧪 **Smidig användning av drycker:** Nu kan du dra drycker och mat direkt till ditt porträtt för att använda dem. Jag har också lagt till alternativet "Använd" vid högerklick. Mer intuitivt och snabbt!
  - 🩸 **Skadekorrigering:** Du är inte längre odödlig! Vi har fixat ett problem där hälsomätaren inte sjönk även om du blev träffad. Nu kommer du att lida som sig bör.
  - 👻 **Hejdå spökföremål:** Hittade du ett föremål i berättelsen men det dök aldrig upp i din ryggsäck? Problemet löst! Nu reparerar systemet automatiskt föremål som AI:n "glömmer" att skapa.
  - 🐛 **Kritisk NPC-fix:** Åtgärdade ett fel som hindrade NPC:er från att fatta taktiska beslut korrekt, vilket gjorde att de alltid "väntade" istället för att attackera eller försvara sig.
  - 🎒 **Korrigering av startutrustning:** Nya karaktärer börjar inte längre nakna. Nu får de sin startutrustning korrekt.
  - 🎲 **Karaktärsskapande:** Korrigerade ett kryphål där höjning och sänkning av ett attribut vid vissa trösklar genererade oändliga extrapoäng. Slut på Karisma-tricket!
  - 🖼️ **Fixade porträtt:** Skapade du en värld med ett eget namn och porträtten försvann? Fixat! Nu hittar systemet rätt bilder oavsett vad du döper din värld till.
  - 💍 **Smarta ikoner:** Föremål (inklusive ringar) visar nu mer exakta och korrekta ikoner i gränssnittet.
  - 🧪 **Förbättrade verktygstips:** Drycker, förbrukningsvaror och besvärjelser visar nu korrekt all information och effekter när du håller muspekaren över dem.
  - 🎵 **Ljudförbättringar:** Stridssmusiken stannar inte längre när man trycker på fördefinierade knappar.
  - [I18N] **Fix Implantat:** Lade till saknade översättningsnycklar för implantatplatser (`slot_implant_*`) och motsvarande ikoner (`icon_implant_*`) i `es.json`.
  - [FIX][AUDIO] **Inkonsekvent ljud:** Anpassade ljudeffekter (SFX) för att utrusta föremål och dra vapen till miljön. Systemet känner nu av `setting_key` och använder futuristiska/industriella ljud i Cyberpunk och klassiska ljud i Fantasy.
  - [FIX][I18N] **Rensning av es.json:** Tog bort över 20 duplicerade nycklar i `es.json` och korrigerade stavfel i namn på platser (t.ex. "Oíidos" -> "Oídos").
  - ⚙️ **Smart modelldetektering:** Nu läser spelet direkt "hjärnan" hos modellerna du importerar (GGUF). Det upptäcker automatiskt den faktiska maximala kontexten. (Officiella optimerade modeller rörs inte för maximal stabilitet).
  - 📂 **Platsbesparing:** När du lägger till en modell från din dator flyttar spelet den nu direkt till sin mapp istället för att kopiera den. Dina Gigabytes kommer att tacka dig!
  - ⚖️ **Rättvisa attribut:** Korrigerade ett kryphål som gjorde det möjligt att få oändliga poäng genom att höja och sänka attribut vid skapandet.
  - 📖 **Träningsguide:** Jag har uppdaterat manualen (README) med alla detaljer om hur dina karaktärer får erfarenhet och höjer sina attribut.
  - 📜 **Kodex för episka världar:** Inget mer lore som bara är en "fotnot"! Nu skapar generatorn världar med djup historia och beskriver deras religioner, lagar, geografi och kända personer i ett detaljerat krönikeformat.
  - 🧙 **Sammanhängande berättelser:** Din karaktär föds inte längre i ett vakuum. Bakgrunden integreras nu intelligent med loret för den värld du just skapat eller valt.
  - ⚡ **Flytande gränssnitt:** Autogenerering av berättelser och världar sker nu i bakgrunden. Inga fler väntetider med fryst skärm!
  - 🚀 **Omedelbar äventyrsstart:** Jag har eliminerat väntetiderna! Nu hoppar du direkt in i berättelsen efter att ha skapat din karaktär. Systemet använder din berikade bakgrund för att skapa den perfekta början utan att du behöver skriva ett enda ord till.
  - 🎭 **Bakgrunder med motiv:** Dina karaktärer har inte längre bara ett förflutet, utan också ett brådskande motiv för att starta äventyret. Det nya AI-systemet genererar automatiskt den inledande gnistan till berättelsen integrerad i din biografi.
  - 🧹 **Förenklat gränssnitt:** Jag har tagit bort knappar och skärmar som inte tillförde något värde. Knappen "Starta berättelse" centraliserar nu all kraft så att du kan börja spela så snart som möjligt.
  - [FIX][UI] **Visuell duplicering vid val av värld:** Fixade en bugg där världens namn visades duplicerat som "Namn [Namn]". Nu döljs typetiketten om den är redundant.
  - [FEAT][UI] **Snabbladdning (enkelt klick):** Nu kan du ladda en karaktär eller börja skapa en ny med ett enda klick på skärmen för val av värld. Expansionen av världar behålls för att undvika konflikter.
  - 🧠 **Mer kreativ AI:** Jag har brutit AI:ns "upprepningsloop" genom att injicera teknisk variation i varje förfrågan. Nu kommer slumpmässigt genererade karaktärer att vara mycket mer unika och originella och ignorera exemplen i guiden.
  
  🛡️ Till de modiga som VÅGAR kämpa vid frontlinjen: Äventyret väntar er, nu mer otämjbart än någonsin!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-stöd (AMD/Intel) och robust felhantering - Beta_v053
****************************************************************************************************
- What's New (SV):
  - 🚀 **Vulkan Hybridmotor:** Officiellt stöd för grafikkort från AMD och Intel! Spelet inkluderar nu en dedikerad Vulkan-motor som aktiveras automatiskt (eller manuellt) för att accelerera AI på system som inte använder NVIDIA.
  - ⚙️ **Full kontroll över motorn:** Vi har lagt till alternativet "Tvinga Vulkan" i både startprogrammet och inställningarna. Om du har problem med CUDA eller vill testa Vulkans prestanda (som flyger fram i många konfigurationer) är det du som bestämmer.
  - 🚦 **Systemstatus:** Nu kan du se exakt vilken motor som brummar under huven (🟢 GRÖNT för CUDA, 🔴 RÖTT för Vulkan) i statuspanelen.
  - 🛡️ **AI-bevakning:** Om den artificiella intelligensen blir "trött" (överskrider sin kvot) eller om internet bryts, varnar spelet dig med ett tydligt och hjälpsamt fönster istället för att låta dig vänta i tystnad.
  - 🔄 **Låsningsskydd:** Om ett anslutningsfel uppstår "bryter" spelet inte längre konversationen. Dina dialogval dyker upp igen så att du kan försöka på nytt utan att förlora framsteg.
  - ☁️ **Molnminne:** Inställningsmenyn kommer nu ihåg dina val av molnleverantör korrekt mellan sessioner.

****************************************************************************************************
03/02/2026 20:23 - VRAM-optimering och laddningsstabilitet - Beta_v052
****************************************************************************************************
- What's New (SV):
  - 🧠 **Optimerad hjärna:** Vi har åtgärdat ett allvarligt fel som fick AI:n att försöka "tänka två gånger" samtidigt, vilket fördubblade användningen av grafikkortsminnet och orsakade extrem lagg eller krascher. Ditt VRAM kommer att tacka dig!
  - 💾 **Säker laddning:** Förbättrad allmän stabilitet vid laddning av sparfiler för att säkerställa att det alltid är en smidig upplevelse att återuppta ditt äventyr.

****************************************************************************************************
02/02/2026 00:18 - Kritisk hotfix: Stabilitet, Multi-GPU och lokaliseringsförbättringar - Beta_v051
****************************************************************************************************
- What's New (SV):
  - 🚑 **Kritisk fix:** Åtgärdade ett problem som under vissa sällsynta omständigheter förhindrade spelet från att starta ("Totalfel") på grund av databaskorruption som startprogrammet inte kunde rensa. Alternativet "Rensa databas" är nu mycket effektivare.
  - ⚡ **Hårdvaruförbättring:** Åtgärdade ett fel som gjorde att läget för "Automatisk konfiguration" ignorerade prestandan hos system med flera grafikkort i vissa konfigurationer med icke-identiska GPU:er.
  - 🛠️ **Verktyg:** Lade till ett nytt alternativ i startprogrammet för att enkelt öppna loggen från föregående session och underlätta support.
  - 🌍 **Lokalisering:** Åtgärdade flera knappar som visades på engelska (Yes/No) i startprogrammet. De följer nu det valda språket.
  - 📖 **Gränssnitt:** Förbättrade formatet på texten för versionsinformation för att göra den mer läsbar.
  
  - **Kommer snart:** Nästa punkt under implementering: kompatibilitet med AMD-, NVIDIA- och Intel-GPU:er via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fix av manualer & Stabilitet - Beta_v050
****************************************************************************************************
- Nyheter:
  **Multi-GPU-kraft och kritiska korrigeringar!**
  
  * **🚀 Multi-GPU-stöd:** Implementerat förmågan att dela upp stora AI-modeller mellan flera grafikkort. *Nu kan du använda hela din hårdvaruarsenal; Obegränsad makt!*
  * **🛡️ Stabilitet:** Lagt till alla saknade DLL-bibliotek för att undvika oväntade krascher. *Jag har pansarskyddat motorn, om den misslyckas nu beror det på ett fummel med tärningarna.*
  * **📖 Dynamiska webbmanualer:**
    * **Verklig väljare:** Språkmenyn verifierar nu vilka filer som faktiskt existerar innan de visas. *Slut på spökalternativ som inte gjorde något; spådomsmagi nivå 5.*
    * **Fix Error 403:** Löst behörighetsfelet som förhindrade visning av ändringsloggen inuti spelet. *Jag har lärt appen att be om inträde korrekt ("Sesam, öppna dig!").*
  * **🌍 Språk:** Genomgång av texter och översättningar. *Polyglottläge aktiverat.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisering och AI-förbättringar - Beta_v049
****************************************************************************************************
- Nyheter:
  Vi har polerat spelupplevelsen med viktiga korrigeringar och ett nytt visuellt verktyg:

  * **Ren och pålitlig inventarie:** Slut på att hitta "spökobjekt" eller föremål med konstiga namn i din ryggsäck. Vi har implementerat ett narrativt valideringssystem som säkerställer att allt du plockar upp eller köper faktiskt existerar i spelvärlden.
  * **Flytande dialoger:** Vi har reparerat de irriterande knapparna som ibland dök upp som "Unknown" eller inte svarade. Nu kommer dialogalternativen med NPC:er alltid att visa rätt text.
  * **Robust karaktärsskapande:** Att skapa din hjälte är nu en stabil process. Vi har löst konflikterna som ibland lämnade karaktärsbladet ofullständigt eller med felaktig statistik när biografi och stats kombinerades.
  * **Ny statusrad för AI:** Nu kan du se maskinens hjärna arbeta! Vi har lagt till en rad högst upp som visar svarshastigheten och minnesanvändningen i realtid. På så sätt vet du alltid om AI:n "funderar" på ditt nästa äventyr.

****************************************************************************************************
28/01/2026 03:50 - Kritisk kompileringsfix - Beta_v048
****************************************************************************************************
- Nyheter:
  Löst ett kritiskt fel som förhindrade spelet från att starta vid nya installationer. Förbättrad stabilitet och kompatibilitet med olika datorer.

****************************************************************************************************
26/01/2026 19:38 - Webb-launcher & RTX 50-stöd - Beta_v047
****************************************************************************************************
- Nyheter:

  > [!VIKTIGT]
  > **AV KOMPATIBILITETSSKÄL MÅSTE DEN TIDIGARE DATABASEN RADERAS, ANNARS ÄR DET MYCKET TROLIGT ATT FEL UPPSTÅR I AI-KONFIGURATIONEN**
  > **(Lösning: Klicka på kugghjulsikonen ⚙️ i launchern -> Radera databas)**

  *Kritiskt stöd för RTX 50-serien: Löst ett allvarligt fel som orsakade oväntad nedstängning vid försök att generera karaktärer på de nya grafikkorten från NVIDIA (RTX 5070, 5080, 5090).
  (Eftersom jag inte har ett RTX i 5000-serien har jag inte kunnat testa direkt om lösningen är 100 %, men teorin är att det borde vara löst. Jag väntar på era segersånger här!)
  
  *Uppdatering av AI-motorn: Vi har uppdaterat spelets lokala hjärna för att vara kompatibel med den senaste hårdvarutekniken, vilket säkerställer att alla kan njuta av upplevelsen offline, oavsett hur modern deras utrustning är.
  
  *Ny launcher: Uppdateringar och nyheter i realtid från den officiella webbplatsen.


****************************************************************************************************
26/01/2026 06:49 - Webbintegration av dokumentation - Beta_v045
****************************************************************************************************
- Nyheter:
  *Nu laddas användarmanualen och ändringsloggen direkt från vår officiella webbplats, vilket garanterar att du alltid har den senaste informationen utan att behöva ladda ner patchar. Inkluderar intelligent offlineläge.

  *Vi har förstärkt spelets stabilitet så att det aldrig hänger sig vid start. Dessutom har handlarna kommit tillbaka från sin semester i limbot: nu dyker de upp korrekt, har varor på hyllorna och respekterar världens atmosfär (inga magiska drycker i framtiden).

  *Buggen som inte tillät ändring av AI-parametrar och val av AI-modell har åtgärdats, vilket gjorde att vissa användare med begränsat VRAM inte kunde spela.
  **Vid behov av att ändra AI-parametrar rekommenderar jag starkt att först prova att sänka % VRAM till 85 %, starta om och testa. Om detta fortfarande inte räcker rekommenderar jag att kontrollera att GPU:ns VRAM inte används av andra processer som inte tillhör spelet (starta om datorn vid behov, stäng applikationer som kan ta upp VRAM). Om det fortfarande inte fungerar efter att ha sänkt mängden VRAM till och med 70 %, rekommenderar jag inte att sänka mer eftersom spelet inte kommer att kunna hantera de prompts som skickas till AI:n. Så även om man lyckas undvika att VRAM svämmar över, kommer spelet inte att fungera eftersom det inte har något att arbeta med. I så fall är det enda återstående alternativet att byta till en lägre modell, återställa AI-parametrarna till automatiskt läge och starta om.

****************************************************************************************************
26/01/2026 04:00 - Kärnstabilisering och tjänstediagnostik - Beta_v044
****************************************************************************************************
- Nyheter:
  Kärnstabilisering och tjänstediagnostik" "Kritiska korrigeringar i karaktärsgenerering, gränssnitt (MainWindow) och optimering av semantisk sökning. Start av djupgående diagnostik av tjänsteläget.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Loggar och Stabilitet - Beta_v043
****************************************************************************************************
- Description:
  Korrigerande patch fokuserad på diagnostik och korrigering av UI-loop.

- Changes:
  Åtgärdat visuell bugg i omstartsdialogen
  Nytt loggsystem i %LOCALAPPDATA% för diagnostik
  Interna prestandaoptimeringar

****************************************************************************************************
24/01/2026 06:30 - Stöd för Backend-biografi - Beta_v042
****************************************************************************************************
- Description:
  Exponering av biografidata för gränssnitt och i18n-justeringar.

<!-- source_hash: 5f218fc5 -->
