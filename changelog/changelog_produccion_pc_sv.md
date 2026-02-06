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