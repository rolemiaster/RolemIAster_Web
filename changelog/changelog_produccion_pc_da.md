****************************************************************************************************
07/02/2026 20:26 - System til Semantisk Kampfortolkning - EXPERIMENTAL_v053
****************************************************************************************************
- What's New (DA):
  🧪 NU TILGÆNGELIG: EKSPERIMENTEL VERSION (For adgang: Højreklik i Steam ➡️ Egenskaber ➡️ Betaer)
  
  🛡️ Til de modige, der TØR kæmpe ved frontlinjen: Eventyret venter jer, nu mere utæmmeligt end nogensinde!
  
  📝 Jeg ser frem til jeres Krigsrapporter (fejl og feedback) fra fronten. Giv dem tørt på! ⚔️
  
  - 🧠 **Fritekstkamp:** Nu kan du skrive dine handlinger i kamp, som om du talte med en karakter i et bordrollespil: "kast helbredelsesformular på mig", "træk mit sværd", "brug helbredelsesdrik". Den kunstige intelligens forstår din hensigt og oversætter den til spilmekanik.
  - ⚔️ **Træk våben med ord:** Du behøver ikke længere klikke på våbenpladsen. Skriv blot "træk sværd" eller "tag min økse frem", og systemet fortolker det automatisk (OBS!, gør du det i kamp, kan det resultere i fiasko, en bommert og tab af tur!... "Man kommer forberedt til kamp!").
  - 📖 **Genkendte formularer:** Den kunstige intelligens kender nu hele din formularbog. Sig "kast ildkugle", og hvis du har den formular, vil den blive kastet.
  - 🛡️ **Ingen tabte ture:** Hvis spillet ikke forstår din handling, vil det bede dig om at omformulere den. Din tur går IKKE tabt.
  - 🎒 **Manuelt inventar:** For at flytte genstande mellem pladser (udstyr fra rygsæk, lad ammunition), skal du bruge træk og slip-grænsefladen. Dette forhindrer forvirring og sparer AI-ressourcer.
  - 🎬 **AI Sceneinstruktør (FORBEDRET):** Kampene kommer nu til live. Den kunstige intelligens genererer miljøhændelser og reaktioner, der beriger fortællingen: fakler der falder, fjender der trækker sig tilbage, bjælker der styrter sammen. Slagmarken er ikke længere statisk!
  - 🐛 **Kritisk NPC-rettelse:** Løst en fejl, der forhindrede NPC'er i at tage korrekte taktiske beslutninger, hvilket fik dem til altid at "vente" i stedet for at angribe eller forsvare sig.
  - 🎵 **Lydrettelse:** Kampmusikken stopper ikke længere, når der trykkes på de foruddefinerede knapper (Angrib, Bloker osv.).

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