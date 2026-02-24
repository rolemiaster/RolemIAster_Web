****************************************************************************************************
24/02/2026 03:02 - AI-billedgenerering, narrative forbedringer og kontrol - Beta_v058
****************************************************************************************************
- What's New (DA):
  **⚠️ EKSPERIMENTEL GREN (STEAM BETA)**
  Denne version er i øjeblikket kun tilgængelig i Steams **Eksperimentel Gren**. Sådan aktiverer du den:
  1. Højreklik på **RolemIAster** i dit Steam-bibliotek.
  2. Vælg **Egenskaber...**
  3. Gå til fanen **Betaer**.
  4. Under "Betadeltagelse" vælger du **experimental** i rullemenuen.
  
  **Nyhed: Første fase af AI-billedgenerering**
  - 🎨 **Din verden i billeder:** Jeg har integreret et indledende system til generering af billeder via kunstig intelligens. Mens du spiller, forsøger systemet at generere portrætter og landskaber, der passer til stemningen i dit spil.
  - 🖼️ **Dynamiske baggrunde:** Billederne genereres i baggrunden uden at stoppe dit spil. Du vil se dem dukke gradvist op i baggrunden, på karakterkort og i Codexet.
  - 🧹 **Billedstyring:** Nyt panel til at se og slette genererede billeder, du ikke kan lide.
  
  **Forbedringer i karaktergenerering:**
  - ⚙️ **Mere solid tilfældig oprettelse:** Jeg har samlet og forbedret den regelmotor, som AI'en bruger til at skabe karakterer fra bunden, hvilket sikrer mere logiske inventarer (5 til 10 sammenhængende genstande) og mere afbalancerede ark.
  - 🧠 **Opdelt hjerne:** AI'en forstår nu bedre, hvornår den skal "opfinde" en karakter fra bunden, og hvornår den skal nøjes med at udtrække data fra den biografi, du selv har skrevet.
  - ⚡ **Hastighed efter dit behov:** Ny sektion i Visuelle indstillinger. Vælg mellem "Hurtig" (1 trin), "Mellem" (2 trin) eller "Høj" (4 trin) for at justere genereringstiden efter din computers ydeevne.
  - 🛠️ **Teknisk optimering:** AI-modellen til billeder indlæses i **RAM (Memory)** og behandles via **CPU**, uden at optage videohukommelse (VRAM). Dette sikrer, at det ikke forstyrrer spillets primære AI (LLM). Kræver ca. 5 GB ekstra RAM, hvilket holder sig inden for de officielle minimumskrav på Steam.
  - 📤 **Del dine eventyr:** Alle genererede billeder gemmes automatisk. Du finder dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Modelvælger (Avanceret):** Hvis du starter spillet med parameteren `--advanced`, kan du nu vælge, hvilken AI-model der skal bruges til billeder fra panelet Udseende. Dette giver entusiaster mulighed for at prøve forskellige versioner af Stable Diffusion optimeret til OpenVINO (.xml/.bin-filer).
  
  **Narrativ og AI-hjerne:**
  - 🧠 **Slut med loops:** Der er implementeret en ny "Hukommelsesdoktrin" i AI'en. Den skelner nu bedre mellem "minder" (det der er sket) og "nutiden" (det der sker nu). Dette hjælper med at reducere tilfælde, hvor AI'en gentog sig selv eller gik i stå.
  - 📜 **Historiske arkiver:** Systemet præsenterer dine minder for AI'en som et "Lukket historisk arkiv", hvilket gør det lettere for den at bruge den information som reference til at drive historien fremad.
  - ⚡ **Optimerede instruktioner:** Måden spillet beder om fortællingen på dit sprog er blevet forbedret, hvilket frigør kapacitet i modellen til at fokusere på kreativitet.
  - 👁️ **Narrativt fokus:** AI'ens opfattelse er blevet omskrevet. Den forstår nu bedre, hvilke elementer der er "statisk baggrund" og ikke bør gentages unødigt i hvert afsnit.
  - 🔀 **Klarere beslutninger:** AI'en tilbyder nu mere definerede flugtveje. Dens forslag (knapper) er opdelt i at undersøge omgivelserne (Fordybelse) eller ændre kurs (Afvigelse).
  - 🫵 **Direkte tiltale:** Basisinstruktionen er justeret for at sikre, at AI'en tiltaler dig med "Du", hvilket forbedrer den personlige indlevelse.
  
  **Karakteroprettelse:**
  - 🖼️ **Karakterportrætter:** Når du genererer en karakter med AI, forsøger systemet at skabe et portræt baseret på alder, erhverv og beskrivelse. Bemærk, at dette er en tidlig version, og nøjagtigheden (især med hensyn til alder) kan variere afhængigt af den anvendte model. (Jeg udfører stadig tests, men starten er god).
  - 🎲 **Pålidelig tilfældig generering:** Rettet en fejl, hvor knappen "Generer med AI" kunne fejle i første forsøg og efterlade felterne tomme. Det intelligente korrektionssystem sikrer nu, at svaret altid er gyldigt.
  
  **Styring af genererede billeder:**
  - 🖼️ **AI-billedgalleri:** Nyt panel i menuen Arkiv, der viser alle de billeder, AI'en har genereret under dine spil (portrætter, baggrunde). Du kan filtrere efter billedtype eller verden.
  - 🗑️ **Selektiv sletning:** Vælg et eller flere billeder og slet dem, hvis de ikke overbeviser dig (måske det, hvor AI'en besluttede, at det var en god idé at parkere en bus i borgens stald). Systemet renser både filen og dens interne registrering.
  - 📂 **Direkte adgang:** Dobbeltklik på enhver miniature for at åbne mappen, hvor filen befinder sig. Hvis du allerede har mappen åben, genbruges det samme vindue.
  - 💾 **Husk din plads:** Størrelsen på gallerivinduet gemmes automatisk mellem sessioner.
  
  **Ydeevne på lave konfigurationer (Vigtigt for GPU med lidt VRAM):**
  - 🧠 **PSR - Hybrid styring:** Nyt system, der opdeler AI'ens arbejde i to faser: Planlægning (Chef) og Udførelse (Kokke). Dette gør det muligt for lokale modeller med 8 GB VRAM at fungere uden at bryde sammen på grund af for meget kontekst (+12K tokens), på bekostning af højere latenstid. Interaktionen med AI'en går fra at være en enkelt prompt til en række prompts (jo mindre VRAM, desto flere prompts genereres der, og desto længere svartid).
  - ⚡ **Intelligent udførelse:** Systemet beslutter automatisk, om alt skal behandles på én gang (monolitisk) eller opdeles i dele (iterativt) afhængigt af din tilgængelige VRAM. GPU'er med mindre VRAM aktiverer kun den opdelte tilstand, når det er nødvendigt.
  - 📊 **Dynamisk optimering:** PSR reducerer belastningen af tokens under genereringen, hvilket gør det muligt for brugere med grafikkort på 4 GB at fuldføre karakteroprettelse og historiegenerering, som førhen blokerede.
  - 🔄 **Fastholdt sammenhæng:** På trods af arbejdsdelingen indsprøjter systemet en "hovedintention", så AI'en ikke mister tråden i det, den var i gang med.
  
  **AI-stemmer (inkrementel forbedring):**
  Realtidsgenerering af stemmer på alle sprog (nogle sprog er mere begrænsede end andre; engelsk har den største variation af stemmetyper)
  - 🗣️ **Kampraab med stemme:** Når du starter kamp mod fjendtlige fjender, afspilles der nu en kontekstuel stemmefrase ved indgangen.
  - 🎭 **Dynamiske fraser efter kontekst:** Motoren kan generere korte stemmelinjer til specifikke hændelser (tjenester/kamp) afhængigt af sprog, indstilling og karakterprofil.
  - 🧠 **Interne stemmeskabeloner:** De tekniske stemmeskabeloner er blevet adskilt fra det narrative system for at undgå interferens med historien.
  - 🔊 **Større klarhed ved lytning:** Forståeligheden og prosodien i syntesen er forbedret for at prioritere tydelig udtale.
  
  **⚠️ Advarsel om kompatibilitet (Tidligere spil):**
  - 🔄 På grund af mængden af interne ændringer i regelmotoren og systemet for omgivelser, vil **tidligere gemte spil og verdener stadig kunne spilles (muligvis)**, men det er meget sandsynligt, at de vil udvise fejl eller uventet adfærd. **Det anbefales at oprette en ny, ren verden** for at nyde alle forbedringerne korrekt.

****************************************************************************************************
15/02/2026 02:57 - Direkte skrivning, stabilitetsrettelser og detektion - Beta_v057
****************************************************************************************************
- What's New (DA):
  **Stabilitet:**
  - 🛠️ **Farvel til konfigurationsnedbrud:** Rettet adskillige fejl, der opstod under visse forhold, og som forhindrede åbning eller ændring af AI-konfigurationen ved modelskift eller nulstilling af værdier.
  - 🗃️ **Stille database:** Den irriterende advarsel om "Inkompatibel database" ved spilstart vises ikke længere, hvis din database er i orden. Den vises kun, når der er en reel strukturel ændring, der kræver migrering.
  
  **Spiloplevelse:**
  - 🎯 **Præcisionskontrol i AI:** Nu kan du manuelt skrive værdierne for Kontekst, Tokens, Temperatur eller GPU-lag direkte i et talfelt ved siden af skyderen. Du er ikke længere kun afhængig af "skyderne"! Begge kontroller er synkroniserede: flyt skyderen, og tallet opdateres, eller skriv tallet, og skyderen flytter sig.
  - ⌨️ **Direkte skrivning:** Du behøver ikke længere klikke i tekstfeltet for at skrive din handling! Nu kan du begynde at taste direkte, mens du er på spilskærmen. Hvis du interagerer med inventaret eller et andet panel og derefter vil skrive, skal du blot begynde at taste uden at skulle vælge noget. Systemet omdirigerer automatisk dine tastetryk til handlingsfeltet. Det forstyrrer ikke menuer, dialoger eller systemgenveje.
  
  Nogle flere mindre ændringer...

****************************************************************************************************
14/02/2026 21:48 - Synkronisering af kontekst og AI-svarkontrol - Beta_v056
****************************************************************************************************
- What's New (DA):
  **Systemer og Ydeevne:**
  - 🧠 **Fuld Kontekstkontrol:** Nu kan du justere både AI'ens hukommelse (`n_ctx`) og længden af dens svar (`Max Tokens`) med meget mere intuitive skydere.
  - ♾️ **Ubegrænset Tilstand:** Træk skyderen helt i bund for at aktivere tilstanden "Ubegrænset", hvilket lader kraftfulde modeller som Gemini bruge deres fulde kapacitet uden begrænsninger.
  - ⚡ **Genstart af Drivere:** Ny mulighed i launcheren for at genstarte videodriverne før spilstart (valgfrit, kan konfigureres fra launcheren). Nu blinker skærmen ved opstart for at sikre, at al VRAM er tilgængelig ved at rense den for rester.
  - 🛠️ **Robust Konfiguration:** Rettet visuelle fejl og tekniske problemer ved lagring af konfigurationen for dine foretrukne AI-udbydere.
  - 🚀 **Bedre Fejldetektion:** Spillet er nu klogere til at opdage, hvornår en ekstern AI løber tør for plads.
  
  **Mekanikker og Verden:**
  - 🎒 **Garanteret Inventar:** Det er slut med at starte et eventyr uden at se dine genstande. SDIA-systemet overvåger nu også karakterskabelsen, så dit udstyr altid er der.
  - 📜 **Renset Lore:** Rettet en fejl, der indsatte fragmenter af "kode" eller mærkelig tekst i din verdens historie. Nu vil Kodekset være renere og mere læsbart.
  - ⚠️ **Kompatibilitetsguide:** Inkluderet advarsler i indstillingerne for at hjælpe dig med at vælge kompatible modeller (Instruct/Chat).
  - ⚙️ **Pålidelige Implantater:** Rettet definitionen af slots og indlæsningen af regler ved karakterskabelse. Nu vil alle dine cyber-forbedringer bruge officielle slots og automatisk blive udstyret korrekt.
  - 🎓 **Lærlingegrænse:** Justeret den indledende balance for færdigheder. AI'en genererer en pakke af point, der automatisk fordeles på de vigtigste færdigheder baseret på din karakters kontekst. Dine helte vil nu starte som sande novicer og udvikle sig på en mere logisk måde.

****************************************************************************************************
14/02/2026 05:06 - Integritetsforstærkning, karakterbevidsthed og optimering - Beta_v055
****************************************************************************************************
- What's New (DA):
  - 🧠 **AI-prioritering efter dit ønske:** Du kan nu trække og slippe dine AI-forbindelser for at beslutte, hvilken der skal bruges først. Hvis en fejler, vil spillet automatisk prøve den næste på din prioriteringsliste.
  - ⚙️ **Kontrol over forudindlæsning:** Tilføjet en mulighed i launcheren til at beslutte, om du vil forudindlæse den lokale AI-model eller kun indlæse den, når det er nødvendigt (sparer ressourcer ved opstart).
  - 🛡️ **Sikker og ren sletning:** Når du sletter en verden, sørger systemet nu for at rydde absolut alle relaterede data (karakterer og historie) og holder din database pletfri.
  - 🚀 **Hukommelsesoptimering:** AI'ens "hjerne" indlæses nu kun én gang og deles mellem alle funktioner, hvilket sparer meget grafisk hukommelse (VRAM).
  - 🎨 **Intelligent interface:** Panelet til valg af verden tilpasser sig nu perfekt til skærmen og teksten uden afskårne knapper eller spildt plads.
  - 🔄 **Forbedret intelligent rotation:** Jeg har rettet rotationssystemet, så det ikke giver op over for din lokale AI ved første forsøg; det får nu en chance for at rette sig selv, før der søges ekstern hjælp.
  - 🌍 **Flersproget og robust AI:** Objektregistrering og historiefortælling er nu mere præcise på 10 sprog, med særlig sikring så du aldrig løber tør for indhold.
  - 🛠️ **Garanteret AI-persistens:** Rettet fejlen, der fik Gemini til at "glemme" eller forvandle sig til Ollama. Dine prioriteter for AI-brug gemmes nu sikkert og kirurgisk præcist.
  - ⚡ **Gemini gendannet:** Repareret adgangen til Gemini-modellen ved at gendanne dens korrekte nøgler og URL'er.
  - 🎨 **Rettet tematisk interface:** Beslutningsknapper henter nu øjeblikkeligt din verdens farve (f.eks. Guld til fantasy), når spillet indlæses.
  - 👥 **Bevidsthed mellem karakterer:** AI'en er nu opmærksom på alle dine karakterer! Hvis du har flere helte i samme verden, vil AI'en genkende dem som indbyggere og kan huske, hvad hver enkelt gjorde individuelt.
  - 🧠 **Hukommelse med tilskrivning:** Hukommelsessystemet skelner nu mellem, hvem der udførte hver handling, hvilket forhindrer AI'en i at forveksle dine tidligere bedrifter med andre karakterers.

****************************************************************************************************
13/02/2026 07:56 - System til semantisk fortolkning af kamp - Beta_v054
****************************************************************************************************
- What's New (DA):
  🧪 NU TILGÆNGELIG:
  
  ⚠️ **VIGTIG MEDDELELSE:** SPILLET KAN MIGRERE DEN GAMLE DATABASE TIL DEN NYE STRUKTUR VIA INDSTILLINGER I LAUNCHEREN. JEG ANBEFALER DETTE IKKE. SELVOM DIT GAMLE SPIL MÅSKE VIRKER, VIL MANGE TING VÆRE ØDELAGTE. MIN ANBEFALING ER AT SLETTE ALLE TIDLIGERE GEMTE SPIL. DET ER IKKE NØDVENDIGT AT SLETTE HELE DATABASEN, MEDMINDRE DET ER ET EKSTREMT TILFÆLDE.
  
  Ændringer:
  
  - 🌍 **Verdens- og karakterstyring:** Nu har du fuld frihed. Skab dine egne verdener med deres egne regler og miljøer, og opret lige så mange karakterer, du vil, i hver af dem. **Vigtig bemærkning:** Alle karakterer i samme verden deler samme tidslinje og begivenheder, hvilket danner grundlaget for den fremtidige multiplayer-tilstand.
  - 🧠 **Kontekstuel hukommelse (Super RAG):** AI'en har nu "sanser". Når den søger information i lore eller sin hukommelse, tager den højde for, hvor du er, hvem du er sammen med, om du er såret, og hvad der lige er sket. Hvis du er sammen med en konge, vil den huske ting om konger. Hvis du er såret, vil den søge efter regler om helbredelse. Det er meget mere intuitivt og sammenhængende!
  - 🌍 **Lore på den første karakter:** Skrev du en episk beskrivelse af din verden, og AI'en ignorerede den på din første karakter? Løst! Nu sendes den manuelle beskrivelse af verden direkte til AI'en under den indledende skabelse, selv før hukommelsessystemet aktiveres.
  - ⚙️ **Forbedret verdenssystem:** Jeg har gjort navnet på din verden uafhængigt af de tekniske regler. Nu kan du kalde din verden, hvad du vil, uden at det påvirker indlæsningen af Fantasy- eller Cyberpunk-regler.
  - 📝 **Klarhed i skabelse:** Jeg har forbedret de interne instruktioner, så AI'en bedre forstår, hvornår den skal opfinde en baggrundshistorie, og hvornår den blot skal udtrække dine statistikker.
  - 🧠 **Kamp med fritekst:** Nu kan du skrive dine handlinger i kamp, som om du talte med en bordrollespilskarakter: "kast helbredelsesformular på mig selv", "træk mit sværd", "brug helbredelsesdrik". AI'en forstår din hensigt og oversætter den til spilmekanikker.
  - 🎨 **Ny episk brugerflade!** Jeg har redesignet spillet fuldstændigt. Menuer i RPG-stil, animerede baggrunde og en helt fornyet visuel oplevelse. Mørk semitransparent stil, neonkanter og bløde skygger for total fordybelse.
  - 🎬 **AI Sceneinstruktør (FORBEDRET):** Kampene kommer nu til live. AI'en genererer miljøbegivenheder og reaktioner, der beriger fortællingen: fakler der falder, fjender der trækker sig tilbage, bjælker der kollapser. Slagmarken er ikke længere statisk!
  - ⚔️ **Træk våben med ord:** Du behøver ikke længere klikke på våbenpladsen. Skriv blot "træk sværd" eller "tag min økse frem", så fortolker systemet det automatisk (OBS! At gøre dette i kamp kan resultere i fiasko, fejlslag og tab af tur!... "Man kommer forberedt til kamp!").
  - 📖 **Genkendte formularer:** AI'en kender nu hele din formelbog. Sig "kast ildkugle", og hvis du har den formular, vil den blive kastet.
  - 🌍 **Fortælling på dit sprog:** Historien respekterer nu strengt det valgte sprog og undgår mærkelige blandinger af sprog (forhåbentlig skal jeg aldrig se mere "spanglish"! Jeg har tvunget AI'en så meget, at jeg vil sige, at hvis den genererer tekster på et andet sprog end det valgte, er den virkelig forbandet).
  - 🛡️ **Ikke flere tabte ture:** Hvis spillet ikke forstår din handling, vil det bede dig om at omformulere den. Din tur går IKKE tabt.
  - 🎒 **Manuelt inventar:** Brug træk-og-slip-grænsefladen til at flytte genstande mellem pladser (udstyr fra rygsæk, indlæs ammunition). Dette undgår forvirring og sparer AI-ressourcer.
  - 🧪 **Flydende brug af eliksirer:** Nu kan du trække eliksirer og mad direkte over på dit portræt for at bruge dem. Jeg har også tilføjet muligheden "Brug" ved højreklik. Mere intuitivt og hurtigere!
  - 🩸 **Skadesrettelse:** Du er ikke længere udødelig! Vi har rettet et problem, hvor helbredsbjælken ikke faldt, selvom du blev ramt. Nu vil du lide, som det hør og bør.
  - 👻 **Farvel til spøgelsesgenstande:** Fandt du en genstand i historien, men den dukkede aldrig op i din rygsæk? Problemet er løst! Nu reparerer systemet automatisk de genstande, som AI'en "glemmer" at oprette.
  - 🐛 **Kritisk NPC-rettelse:** Løst en fejl, der forhindrede NPC'er i at tage taktiske beslutninger korrekt, hvilket fik dem til altid at "vente" i stedet for at angribe eller forsvare sig.
  - 🎒 **Rettelse af startinventar:** Nye karakterer starter ikke længere nøgne. De modtager nu deres startudstyr korrekt.
  - 🎲 **Karakterskabelse:** Rettet en exploit, hvor hævning og sænkning af en attribut ved bestemte grænser genererede uendelige ekstra point. Slut med karisma-tricket!
  - 🖼️ **Portrætter rettet:** Oprettede du en verden med et eget navn, og portrætterne forsvandt? Rettet! Nu finder systemet de korrekte billeder, uanset hvad du kalder din verden.
  - 💍 **Intelligente ikoner:** Genstande (inklusive ringe) viser nu mere præcise og korrekte ikoner i brugerfladen.
  - 🧪 **Forbedrede værktøjstip:** Eliksirer, forbrugsvarer og formularer viser nu korrekt al deres information og effekter, når du holder musen over dem.
  - 🎵 **Lydforbedringer:** Kampmusikken stopper ikke længere, når du trykker på de foruddefinerede knapper.
  - [I18N] **Fix Implantater:** Tilføjet manglende oversættelsesnøgler for implantatpladser (`slot_implant_*`) og tilsvarende ikoner (`icon_implant_*`) i `es.json`.
  - [FIX][AUDIO] **Inkonsistent lyd:** Tilpasset lydeffekter (SFX) for udstyr af genstande og trækning af våben til omgivelserne. Systemet registrerer nu `setting_key` og bruger futuristiske/industrielle lyde i Cyberpunk og klassiske lyde i Fantasy.
  - [FIX][I18N] **Oprydning i es.json:** Fjernet mere end 20 dublerede nøgler i `es.json` og rettet stavefejl i navne på pladser (f.eks. "Oíidos" -> "Oídos").
  - ⚙️ **Intelligent modeldetektering:** Nu læser spillet direkte "hjernen" i de modeller, du importerer (GGUF). Det registrerer automatisk den maksimale kontekst. (Officielle optimerede modeller røres ikke for maksimal stabilitet).
  - 📂 **Pladsbesparelse:** Når du tilføjer en model fra din computer, flytter spillet den nu direkte til sin mappe i stedet for at kopiere den. Dine gigabytes vil takke dig!
  - ⚖️ **Retfærdighed i attributter:** Rettet en exploit, der tillod uendelige point ved at hæve og sænke attributter under skabelsen.
  - 📖 **Træningsguide:** Jeg har opdateret manualen (README) med alle detaljer om, hvordan dine karakterer får erfaring og øger deres attributter.
  - 📜 **Kodeks for episke verdener:** Slut med lore som en "eftertanke"! Nu skaber generatoren verdener med dyb historie, der beskriver deres religioner, love, geografi og berømte personer i et detaljeret krønikeformat.
  - 🧙 **Sammenhængende historier:** Din karakter fødes ikke længere i et tomrum. Baggrundshistorien integreres nu intelligent med loren i den verden, du lige har skabt eller valgt.
  - ⚡ **Flydende grænseflade:** Autogenerering af historier og verdener sker nu i baggrunden. Slut med at vente med en frosset skærm!
  - 🚀 **Øjeblikkelig eventyrstart:** Jeg har fjernet ventetiden! Nu springer du direkte ind i historien, efter du har skabt din karakter. Systemet bruger din berigede baggrund til at skabe den perfekte start, uden at du behøver at skrive et eneste ord mere.
  - 🎭 **Baggrunde med påskud:** Dine karakterer har ikke længere kun en fortid, men også en presserende grund til at starte eventyret. Det nye AI-system genererer automatisk den indledende gnist til historien, integreret i din biografi.
  - 🧹 **Forenklet grænseflade:** Jeg har fjernet knapper og skærme, der ikke tilførte værdi. Knappen "Start historie" centraliserer nu al magten, så du kan begynde at spille så hurtigt som muligt.
  - [FIX][UI] **Visuel dublering i verdensvalg:** Rettet en fejl, hvor verdensnavnet blev vist to gange som "Navn [Navn]". Type-etiketten skjules nu, hvis den er overflødig.
  - [FEAT][UI] **Hurtig indlæsning (Enkeltklik):** Nu kan du indlæse en karakter eller starte oprettelsen af en ny med et enkelt klik på skærmen for valg af verden. Udvidelsen af verdener bibeholdes for at undgå konflikter.
  - 🧠 **Mere kreativ AI:** Jeg har brudt AI'ens "gentagelsesløkke" ved at injicere teknisk variation i hver forespørgsel. Nu vil de tilfældigt genererede karakterer være meget mere unikke og originale og ignorere eksemplerne i guiden.
  
  🛡️ Til de modige, der VOVER at kæmpe på frontlinjen: Eventyret venter på jer, nu mere utæmmeligt end nogensinde!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-understøttelse (AMD/Intel) og robust fejlhåndtering - Beta_v053
****************************************************************************************************
- What's New (DA):
  - 🚀 **Hybrid Vulkan-motor:** Officiel understøttelse af AMD- og Intel-grafikkort! Spillet inkluderer nu en dedikeret Vulkan-motor, der aktiveres automatisk (eller manuelt) for at accelerere AI på ikke-NVIDIA-systemer.
  - ⚙️ **Fuld kontrol over motoren:** Vi har tilføjet muligheden "Tving Vulkan" i både launcheren og indstillingerne. Hvis du har problemer med CUDA eller vil teste Vulkans ydeevne (som i mange opsætninger kører lynhurtigt), er det dig, der bestemmer.
  - 🚦 **Systemstatus:** Nu kan du se præcis, hvilken motor der brøler under motorhjelmen (🟢 GRØN for CUDA, 🔴 RØD for Vulkan) i statuspanelet.
  - 🛡️ **AI-trafiklys:** Hvis den kunstige intelligens bliver "træt" (overskrider sin kvote), eller internettet ryger, vil spillet give dig besked med et klart og nyttigt vindue i stedet for at lade dig vente i stilhed.
  - 🔄 **Sikkerhed mod fastlåsning:** Hvis der opstår en forbindelsesfejl, "ødelægger" spillet ikke længere samtalen. Dine dialogmuligheder vil dukke op igen, så du kan prøve igen uden at miste fremskridt.
  - ☁️ **Cloud-hukommelse:** Indstillingsmenuen husker nu dine præferencer for cloud-udbydere korrekt mellem sessioner.

****************************************************************************************************
03/02/2026 20:23 - Optimering af VRAM og indlæsningsstabilitet - Beta_v052
****************************************************************************************************
- What's New (DA):
  - 🧠 **Optimeret hjerne:** Vi har rettet en alvorlig fejl, der fik AI'en til at forsøge at "tænke to gange" på samme tid, hvilket fordoblede VRAM-forbruget og forårsagede ekstrem langsomhed eller nedbrud. Din VRAM vil takke dig!
  - 💾 **Sikker indlæsning:** Den generelle stabilitet ved indlæsning af spil er forbedret for at sikre, at det altid er en flydende oplevelse at genoptage dit eventyr.

****************************************************************************************************
02/02/2026 00:18 - Kritisk hotfix: Stabilitet, Multi-GPU og lokaliseringsforbedringer - Beta_v051
****************************************************************************************************
- What's New (DA):
  - 🚑 **Kritisk rettelse:** Løste et problem, der under visse sjældne omstændigheder forhindrede spillet i at starte ("Totalt nedbrud") på grund af korruption i databasen, som launcheren ikke kunne rydde op i. Nu er muligheden "Slet database" meget mere effektiv.
  - ⚡ **Hardwareforbedring:** Rettede en fejl, der fik tilstanden "Automatisk konfiguration" til at ignorere ydeevnen på systemer med flere grafikkort i visse konfigurationer med ikke-identiske GPU'er.
  - 🛠️ **Værktøj:** Tilføjede en ny mulighed i launcheren for nemt at åbne loggen fra den forrige session og lette support.
  - 🌍 **Lokalisering:** Rettede flere knapper, der blev vist på engelsk (Yes/No) i launcheren. De følger nu det valgte sprog.
  - 📖 **Grænseflade:** Forbedrede tekstformatet for versionsoplysninger, så det er mere læseligt.
  
  - **Kommer snart:** Næste punkt under implementering: Kompatibilitet med AMD-, NVIDIA- og Intel-GPU'er via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Manualrettelser & Stabilitet - Beta_v050
****************************************************************************************************
- Nyheder:
  **Multi-GPU-kraft og kritiske rettelser!**
  
  * **🚀 Multi-GPU-understøttelse:** Implementeret muligheden for at opdele store AI-modeller mellem flere grafikkort. *Nu kan du bruge hele dit hardwarearsenal; Ubegrænset magt!*
  * **🛡️ Stabilitet:** Tilføjet alle manglende DLL-biblioteker for at undgå uventede nedbrud. *Jeg har pansret motoren, hvis den fejler nu, er det skyld i et dårligt terningkast.*
  * **📖 Dynamiske Webmanualer:**
    * **Reel vælger:** Sprogmenuen tjekker nu, hvilke filer der faktisk findes, før de vises. *Slut med spøgelsesmuligheder, der ikke gjorde noget; spådomsmagi niveau 5.*
    * **Rettelse af Fejl 403:** Løst tilladelsesfejlen, der forhindrede visning af Changelog inde i spillet. *Jeg har lært appen at bede om adgang korrekt ("Sesam, luk dig op!").*
  * **🌍 Sprog:** Gennemgang af tekster og oversættelser. *Polyglot-tilstand aktiveret.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisering og AI-forbedringer - Beta_v049
****************************************************************************************************
- Nyheder:
  Vi har pudset spiloplevelsen af med vigtige rettelser og et nyt visuelt værktøj:

  * **Rent og pålideligt inventar:** Slut med at finde "spøgelsesgenstande" eller ting med mærkelige navne i din rygsæk. Vi har implementeret et narrativt valideringssystem, der sikrer, at alt, hvad du samler op eller køber, faktisk eksisterer i spilverdenen.
  * **Flydende dialoger:** Vi har repareret de irriterende knapper, der nogle gange dukkede op som "Unknown" eller ikke reagerede. Nu vil dialogmulighederne med NPC'er altid vise den korrekte tekst.
  * **Robust karaktergenerering:** At skabe din helt er nu en solid proces. Vi har løst konflikterne, der nogle gange efterlod arket ufuldstændigt eller med fejlagtige statistikker ved kombinering af biografi og stats.
  * **Ny AI-statuslinje:** Nu kan du se maskinens hjerne arbejde! Vi har tilføjet en bjælke i toppen, der viser svarhastighed og hukommelsesforbrug i realtid. Så ved du altid, om AI'en "tænker" over dit næste eventyr.

****************************************************************************************************
28/01/2026 03:50 - Kritisk kompileringsrettelse - Beta_v048
****************************************************************************************************
- Nyheder:
  Løst en kritisk fejl, der forhindrede spillet i at starte på nye installationer. Forbedret stabilitet og kompatibilitet med forskelligt udstyr.

****************************************************************************************************
26/01/2026 19:38 - Web Launcher & RTX 50-understøttelse - Beta_v047
****************************************************************************************************
- Nyheder:

  > [!VIGTIGT]
  > **AF HENSYN TIL KOMPATIBILITET ER DET NØDVENDIGT AT SLETTE DEN FORRIGE DB, ELLERS ER DER STOR SANDSYNLIGHED FOR FEJL I AI-KONFIGURATIONEN**
  > **(Løsning: Klik på tandhjulsikonet ⚙️ i Launcheren -> Slet database)**

  *Kritisk understøttelse af RTX 50-serien: Løst en alvorlig fejl, der forårsagede uventet nedlukning ved forsøg på at generere karakterer på de nye NVIDIA-grafikkort (RTX 5070, 5080, 5090).
  (Da jeg ikke har et RTX fra 5000-serien, har jeg ikke kunnet teste direkte, om løsningen er 100 %, men teorien er, at det burde være løst. Jeg afventer jeres sejrssange her!)
  
  *Opdatering af AI-motoren: Vi har opdateret spillets lokale hjerne, så den er kompatibel med den nyeste hardwareteknologi, hvilket sikrer, at alle kan nyde oplevelsen offline, uanset hvor moderne deres udstyr er.
  
  *Ny Launcher: Opdateringer og nyheder i realtid fra den officielle hjemmeside.


****************************************************************************************************
26/01/2026 06:49 - Web-dokumentationsintegration - Beta_v045
****************************************************************************************************
- Nyheder:
  *Nu indlæses brugermanualen og ændringsloggen direkte fra vores officielle hjemmeside, hvilket garanterer, at du altid har de mest opdaterede oplysninger uden at skulle downloade patches. Inkluderer intelligent offline-tilstand.

  *Vi har styrket spillets stabilitet, så det aldrig hænger ved opstart. Desuden er sælgerne vendt tilbage fra deres ferie i limboet: nu vises de korrekt, har varer på hylderne og respekterer verdens atmosfære (ingen magiske eliksirer i fremtiden).

  *Fejlen, der ikke tillod ændring af AI-parametre og valg af AI-model, er blevet rettet, hvilket gjorde, at nogle brugere med begrænset VRAM ikke kunne spille.
  **I tilfælde af behov for at ændre AI-parametrene, anbefaler jeg kraftigt først at prøve at sænke % VRAM til 85 %, genstarte og prøve igen. Hvis dette stadig ikke er nok, anbefaler jeg at tjekke, at GPU'ens VRAM ikke bruges af andre processer end selve spillet (genstart pc'en om nødvendigt, luk applikationer, der kan optage VRAM). Hvis det efter sænkning af mængden af VRAM selv ned til 70 % stadig ikke fungerer, anbefaler jeg ikke at sænke yderligere, da spillet ikke vil kunne håndtere de prompts, der sendes til AI'en. Så selvom man undgår VRAM-overløb, vil spillet ikke kunne fungere, fordi det ikke har noget at arbejde med. I så fald er den eneste tilbageværende mulighed at skifte til en mindre model, sætte AI-parametrene tilbage til automatisk og genstarte.

****************************************************************************************************
26/01/2026 04:00 - Core-stabilisering og Tjenestediagnosticering - Beta_v044
****************************************************************************************************
- Nyheder:
  Core-stabilisering og Tjenestediagnosticering" "Kritiske rettelser i karaktergenerering, UI (MainWindow) og optimering af semantisk søgning. Start på dybdegående diagnosticering af tjenestetilstand.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs og Stabilitet - Beta_v043
****************************************************************************************************
- Beskrivelse:
  Korrigerende patch fokuseret på diagnosticering og rettelse af UI-løkke.

- Ændringer:
  Rettet visuel fejl i genstartsdialogen
  Nyt logsystem i %LOCALAPPDATA% til diagnosticering
  Interne ydelsesoptimeringer

****************************************************************************************************
24/01/2026 06:30 - Understøttelse af Backend-biografi - Beta_v042
****************************************************************************************************
- Beskrivelse:
  Eksponering af biografidata til UI og i18n-justeringer.

<!-- source_hash: 5f218fc5 -->
