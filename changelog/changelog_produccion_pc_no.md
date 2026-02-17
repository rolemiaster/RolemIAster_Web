****************************************************************************************************
15/02/2026 02:57 - Direkte skriving, stabilitetsfikser og deteksjon - Beta_v057
****************************************************************************************************
- What's New (NO):
  **Stabilitet:**
  - 🛠️ **Farvel til krasj i innstillinger:** Fikset flere feil som oppsto under visse forhold, og som hindret åpning eller endring av KI-innstillinger ved bytte av modell eller tilbakestilling av verdier.
  - 🗃️ **Stille database:** Den irriterende advarselen "Ukompatibel database" ved oppstart vil ikke lenger vises hvis databasen din er i orden. Den vises kun når det er en faktisk strukturell endring som krever migrering.
  
  **Spillopplevelse:**
  - 🎯 **Presisjonskontroll for KI:** Nå kan du skrive inn verdier for kontekst, tokens, temperatur eller GPU-lag manuelt i et tallfelt ved siden av glidebryteren. Du er ikke lenger avhengig av bare "spakene"! Begge kontrollene er synkronisert: flytt glidebryteren og tallet oppdateres, eller skriv inn tallet og glidebryteren flytter seg.
  - ⌨️ **Direkte skriving:** Du trenger ikke lenger å klikke i tekstfeltet for å skrive handlingen din! Nå kan du begynne å skrive direkte mens du er i spillskjermen. Hvis du samhandler med inventaret eller et annet panel og deretter vil skrive, er det bare å begynne å skrive uten å måtte velge noe. Systemet omdirigerer tastetrykkene dine automatisk til handlingsfeltet. Det forstyrrer ikke menyer, dialoger eller systemsnarveier.
  
  Noen flere mindre endringer...

****************************************************************************************************
14/02/2026 21:48 - Kontekstsynkronisering og kontroll av AI-respons - Beta_v056
****************************************************************************************************
- What's New (NO):
  **Systemer og ytelse:**
  - 🧠 **Total kontekstkontroll:** Nå kan du justere både AI-minnet (`n_ctx`) og lengden på svarene (`Max Tokens`) med mye mer intuitive glidebrytere.
  - ♾️ **Ubegrenset modus:** Dra til minimum for å aktivere "Ubegrenset"-modus, slik at kraftige modeller som Gemini kan bruke hele kapasiteten sin uten begrensninger.
  - ⚡ **Omstart av drivere:** Nytt alternativ i oppstarteren for å starte videodrivere på nytt før du spiller (valgfritt, konfigurerbart fra launcher). Skjermen vil nå blinke ved oppstart; dette sikrer at all VRAM er tilgjengelig ved å fjerne restdata.
  - 🛠️ **Robust konfigurasjon:** Fikset visuelle feil og tekniske problemer ved lagring av oppsettet for dine foretrukne AI-leverandører.
  - 🚀 **Bedre feilsøking:** Spillet er nå smartere til å oppdage når en ekstern AI går tom for plass.
  
  **Mekanikker og verden:**
  - 🎒 **Garantert inventar:** Det er slutt på å starte et eventyr uten å se gjenstandene dine. SDIA-systemet overvåker nå også karakterskapingen slik at utstyret ditt alltid er der.
  - 📜 **Renset lore:** Fikset en feil som injiserte fragmenter av "kode" eller merkelig tekst i historien til verdenen din. Kodeksen vil nå være renere og mer lesbar.
  - ⚠️ **Kompatibilitetsguide:** Inkluderte varsler i innstillingene for å hjelpe deg med å velge kompatible modeller (Instruct/Chat).
  - ⚙️ **Pålitelige implantater:** Fikset definisjonen av spor og lasting av regler ved karakterskaping. Nå vil alle cyber-forbedringene dine bruke offisielle spor og utstyres automatisk på riktig måte.
  - 🎓 **Lærlinggrense:** Justert den innledende ferdighetsbalansen. AI-en genererer en pakke med poeng som fordeles automatisk på de viktigste ferdighetene basert på karakterens kontekst. Heltene dine starter nå som ekte nybegynnere og utvikler seg på en mer logisk måte.

****************************************************************************************************
14/02/2026 05:06 - Integritetsforsterkning, Karakterbevissthet og Optimalisering - Beta_v055
****************************************************************************************************
- What's New (NO):
  - 🧠 **AI-prioritering etter eget ønske:** Nå kan du dra og slippe AI-koblingene dine for å bestemme hvilken som skal brukes først. Hvis en feiler, vil spillet automatisk prøve neste på prioriteringslisten din.
  - ⚙️ **Forhåndslastingskontroll:** Lagt til et valg i oppstarteren for å bestemme om du vil forhåndslaste den lokale AI-modellen eller laste den kun ved behov (sparer ressurser ved oppstart).
  - 🛡️ **Sikker og ren sletting:** Når du sletter en verden, sørger systemet nå for å fjerne absolutt alle relaterte data (karakterer og historie), slik at databasen holdes plettfri.
  - 🚀 **Minneoptimalisering:** AI-ens "hjerne" lastes nå bare én gang og deles mellom alle funksjoner, noe som sparer mye grafikkminne (VRAM).
  - 🎨 **Smart grensesnitt:** Panelet for verdensvalg tilpasser seg nå perfekt til skjermen og teksten, uten avkuttede knapper eller dårlig utnyttet plass.
  - 🔄 **Forbedret smart rotasjon:** Jeg har fikset rotasjonssystemet slik at det ikke gir opp din lokale AI med en gang; nå får den en sjanse til å korrigere seg selv før det søkes etter ekstern hjelp.
  - 🌍 **Flerspråklig og robust AI:** Objektdeteksjon og historiefortelling er nå mer presis på 10 språk, med spesiell sikring slik at du aldri går tom for historie.
  - 🛠️ **Garantert AI-persistens:** Fikset feilen som gjorde at Gemini "glemte" eller forvandlet seg til Ollama. Dine prioriteringer for AI-bruk lagres nå på en sikker og nøyaktig måte.
  - ⚡ **Gemini gjenopprettet:** Reparert tilgangen til Gemini-modellen ved å gjenopprette riktige nøkler og URL-er.
  - 🎨 **Tematisk grensesnitt fikset:** Valgknappene henter nå umiddelbart fargen fra din verden (f.eks. gull for fantasy) når spillet lastes.
  - 👥 **Bevissthet mellom karakterer:** AI-en er nå klar over alle karakterene dine! Hvis du har flere helter i samme verden, vil AI-en gjenkjenne dem som innbyggere og kunne huske hva hver enkelt gjorde individuelt.
  - 🧠 **Minne med attribusjon:** Minnesystemet skiller nå mellom hvem som utførte hver handling, for å unngå at AI-en blander dine tidligere bragder med andre karakterers.

****************************************************************************************************
13/02/2026 07:56 - Semantisk kamptolkningssystem - Beta_v054
****************************************************************************************************
- What's New (NO):
  🧪 NÅ TILGJENGELIG:
  
  ⚠️ **VIKTIG MELDING:** SPILLET KAN MIGRERE DEN GAMLE DATABASEN TIL DEN NYE STRUKTUREN VIA VALG I LAUNCHEREN. JEG ANBEFALER IKKE DETTE. SELV OM DIN GAMLE LAGRINGSFIL FUNGERER, VIL MANGE TING VÆRE ØDELAGT. MIN ANBEFALING ER Å SLETTE ALLE TIDLIGERE LAGRINGSFILER. DET ER IKKE NØDVENDIG Å SLETTE HELE DATABASEN MED MINDRE DET ER ET EKSTREMT TILFELLE.
  
  Endringer:
  
  - 🌍 **Verdens- og karakteradministrator:** Nå har du total frihet. Lag dine egne verdener med egne regler og omgivelser, og lag så mange karakterer du vil i hver av dem. **Viktig:** Alle karakterer i samme verden deler samme tidslinje og hendelser, noe som legger grunnlaget for fremtidig flerspillermodus.
  - 🧠 **Kontekstuelt minne (Super RAG):** AI-en har nå "sanser". Når den søker etter informasjon i loren eller minnet sitt, tar den hensyn til hvor du er, hvem du er med, om du er skadet og hva som nettopp har skjedd. Hvis du er med en konge, vil den huske ting om konger. Hvis du er skadet, vil den se etter regler for helbredelse. Det er mye mer intuitivt og sammenhengende!
  - 🌍 **Lore for første karakter:** Skrev du en episk beskrivelse av verdenen din som AI-en ignorerte for din første karakter? Fikset! Nå sendes den manuelle verdensbeskrivelsen direkte til AI-en under den første opprettelsen, til og med før minnesystemet aktiveres.
  - ⚙️ **Forbedret verdenssystem:** Jeg har gjort navnet på verdenen din uavhengig av de tekniske reglene. Nå kan du kalle verdenen din hva du vil uten at det påvirker lastingen av Fantasy- eller Cyberpunk-regler.
  - 📝 **Tydelighet i opprettelse:** Jeg har forbedret de interne instruksjonene slik at AI-en bedre forstår når den skal finne opp en bakgrunnshistorie og når den bare skal hente ut statistikken din.
  - 🧠 **Fritekstkamp:** Nå kan du skrive kamphandlingene dine som om du snakket med en rollespillkarakter: "kast helbredelsesformel på meg", "trekk sverdet", "bruk helbredelseseliksir". AI-en forstår intensjonen din og oversetter den til spillmekanikk.
  - 🎨 **Nytt episk grensesnitt!** Jeg har totalrenovert spillet. Menyer i RPG-stil, animerte bakgrunner og en helt fornyet visuell opplevelse. Mørk, halvgjennomsiktig stil, neonkanter og myke skygger for total innlevelse.
  - 🎬 **AI-regissør (FORBEDRET):** Kampene kommer nå til liv. AI-en genererer miljøhendelser og reaksjoner som beriker fortellingen: fakler som faller, fiender som trekker seg tilbake, bjelker som raser sammen. Slagmarken er ikke lenger statisk!
  - ⚔️ **Trekk våpen med ord:** Du trenger ikke lenger klikke på våpenplassen. Bare skriv "trekk sverd" eller "ta frem øksen", så tolker systemet det automatisk (OBS! Å gjøre dette i kamp kan føre til fiasko, tabbe og tapt tur! ... "Man stiller forberedt til kamp!").
  - 📖 **Gjenkjente formularer:** AI-en kjenner nå hele formularboken din. Si "kast ildkule", og hvis du har den formularen, vil den bli kastet.
  - 🌍 **Fortelling på ditt språk:** Historien respekterer nå strengt det valgte språket, og unngår merkelige blandinger av språk (forhåpentligvis slipper jeg å se mer spanglish! Jeg har tvunget AI-en så hardt at hvis den genererer tekst på et annet språk enn det valgte, er den rett og slett forbannet).
  - 🛡️ **Ingen flere tapte turer:** Hvis spillet ikke forstår handlingen din, vil det be deg om å omformulere. Turen din går IKKE tapt.
  - 🎒 **Manuelt inventar:** For å flytte gjenstander mellom plasser (utstyre fra ryggsekk, lade ammunisjon), bruk dra-og-slipp-grensesnittet. Dette forhindrer forvirring og sparer AI-ressurser.
  - 🧪 **Smidig bruk av eliksirer:** Nå kan du dra eliksirer og mat direkte over portrettet ditt for å bruke dem. Jeg har også lagt til valget "Bruk" ved høyreklikk. Mer intuitivt og raskere!
  - 🩸 **Skadekorrigering:** Du er ikke lenger udødelig! Vi har fikset et problem der helselinjen ikke gikk ned selv om du ble truffet. Nå vil du lide som seg hør og bør.
  - 👻 **Farvel til spøkelsesgjenstander:** Fant du en gjenstand i historien som aldri dukket opp i ryggsekken? Problemet løst! Nå reparerer systemet automatisk gjenstander som AI-en "glemmer" å opprette.
  - 🐛 **Kritisk NPC-fiks:** Fikset en feil som hindret NPC-er i å ta taktiske avgjørelser korrekt, noe som førte til at de alltid "ventet" i stedet for å angripe eller forsvare seg.
  - 🎒 **Fiks av startinventar:** Nye karakterer begynner ikke lenger nakne. Nå mottar de startutstyret sitt på riktig måte.
  - 🎲 **Karakteropprettelse:** Fikset en utnyttelse hvor økning og senking av en egenskap ved visse terskler genererte uendelige ekstra poeng. Slutt på karisma-trikset!
  - 🖼️ **Fikset portretter:** Lagde du en verden med et eget navn og portrettene forsvant? Fikset! Nå finner systemet de riktige bildene uansett hva du kaller verdenen din.
  - 💍 **Smarte ikoner:** Gjenstander (inkludert ringer) viser nå mer presise og korrekte ikoner i grensesnittet.
  - 🧪 **Forbedrede verktøytips:** Eliksirer, forbruksvarer og formularer viser nå all informasjon og effekter korrekt når du holder musen over dem.
  - 🎵 **Lydforbedringer:** Kampmusikken stopper ikke lenger når du trykker på de forhåndsdefinerte knappene.
  - [I18N] **Implantatfiks:** Lagt til manglende oversettelsesnøkler for implantatplasser (`slot_implant_*`) og tilhørende ikoner (`icon_implant_*`) i `es.json`.
  - [FIX][AUDIO] **Inkonsekvent lyd:** Tilpasset lydeffekter (SFX) for utrustning av gjenstander og trekking av våpen til omgivelsene. Systemet oppdager nå `setting_key` og bruker futuristiske/industrielle lyder i Cyberpunk og klassiske lyder i Fantasy.
  - [FIX][I18N] **Opprydding i es.json:** Fjernet over 20 dupliserte nøkler i `es.json` og rettet skrivefeil i navn på plasser (f.eks. "Oíidos" -> "Oídos").
  - ⚙️ **Smart modelldeteksjon:** Spillet leser nå direkte "hjernen" til modellene du importerer (GGUF). Det oppdager automatisk den faktiske maksimale konteksten. (Offisielle optimaliserte modeller røres ikke for maksimal stabilitet).
  - 📂 **Plassbesparelse:** Når du legger til en modell fra datamaskinen din, flytter spillet den nå direkte til sin mappe i stedet for å kopiere den. Gigabytene dine vil takke deg!
  - ⚖️ **Rettferdighet i egenskaper:** Fikset en utnyttelse som gjorde det mulig å få uendelige poeng ved å øke og senke egenskaper under opprettelsen.
  - 📖 **Treningsguide:** Jeg har oppdatert manualen (README) med alle detaljer om hvordan karakterene dine får erfaring og øker egenskapene sine.
  - 📜 **Kodeks for episke verdener:** Slutt på lore som bare er et "etterskrift"! Nå skaper generatoren verdener med dyp historie, som beskriver religioner, lover, geografi og kjente personer i et detaljert krønikeformat.
  - 🧙 **Sammenhengende historier:** Karakteren din blir ikke lenger født i et vakuum. Bakgrunnshistorien integreres nå intelligent med loren til verdenen du nettopp har laget eller valgt.
  - ⚡ **Flytende grensesnitt:** Autogenerering av historier og verdener skjer nå i bakgrunnen. Slutt på ventetiden med frossen skjerm!
  - 🚀 **Øyeblikkelig eventyrstart:** Jeg har eliminert ventetiden! Etter å ha laget karakteren din, hopper du nå direkte inn i historien. Systemet bruker den berikede bakgrunnen din til å skape den perfekte starten uten at du trenger å skrive et eneste ord til.
  - 🎭 **Bakgrunn med påskudd:** Karakterene dine har ikke lenger bare en fortid, men også en presserende grunn til å starte eventyret. Det nye AI-systemet genererer automatisk den innledende gnisten til historien integrert i biografien din.
  - 🧹 **Forenklet grensesnitt:** Jeg har fjernet knapper og skjermer som ikke tilførte verdi. Knappen "Start historie" sentraliserer nå all makt slik at du kan begynne å spille så snart som mulig.
  - [FIX][UI] **Visuell duplisering i verdensvalg:** Fikset en feil der verdensnavnet dukket opp dobbelt som "Navn [Navn]". Type-etiketten skjules nå hvis den er overflødig.
  - [FEAT][UI] **Hurtiginnlasting (enkeltklikk):** Nå kan du laste inn en karakter eller starte opprettelsen av en ny med bare ett klikk på verdensvalg-skjermen. Utvidelse av verdener opprettholdes for å unngå konflikter.
  - 🧠 **Mer kreativ AI:** Jeg har brutt AI-ens "repetisjonssløyfe" ved å injisere teknisk variasjon i hver forespørsel. Nå vil tilfeldig genererte karakterer være mye mer unike og originale, og ignorere eksemplene fra guiden.
  
  🛡️ Til de modige som VÅGER å kjempe ved frontlinjen: Eventyret venter, nå mer utemmet enn noensinne!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-støtte (AMD/Intel) og robust feilhåndtering - Beta_v053
****************************************************************************************************
- What's New (NO):
  - 🚀 **Vulkan hybridmotor:** Offisiell støtte for grafikkort fra AMD og Intel! Spillet inkluderer nå en dedikert Vulkan-motor som aktiveres automatisk (eller manuelt) for å akselerere KI på systemer uten NVIDIA.
  - ⚙️ **Full motorkontroll:** Vi har lagt til alternativet «Tving Vulkan» både i oppstarteren og i innstillingene. Hvis du har problemer med CUDA eller vil teste ytelsen til Vulkan (som er lynrask i mange konfigurasjoner), er det du som bestemmer.
  - 🚦 **Systemstatus:** Nå kan du se nøyaktig hvilken motor som brøler under panseret (🟢 GRØNN for CUDA, 🔴 RØD for Vulkan) i statuspanelet.
  - 🛡️ **KI-trafikklys:** Hvis den kunstige intelligensen blir «sliten» (overskrider kvoten) eller internett faller ut, vil spillet varsle deg med et tydelig vindu i stedet for å la deg vente i stillhet.
  - 🔄 **Sikkerhet mot låsing:** Hvis det oppstår en tilkoblingsfeil, «ødelegger» ikke spillet samtalen lenger. Dialogvalgene dine dukker opp på nytt slik at du kan prøve igjen uten å miste fremgang.
  - ☁️ **Skyminne:** Innstillingsmenyen husker nå preferansene dine for skyleverandører riktig mellom økter.

****************************************************************************************************
03/02/2026 20:23 - VRAM-optimalisering og lastestabilitet - Beta_v052
****************************************************************************************************
- What's New (NO):
  - 🧠 **Optimalisert hjerne:** Vi har rettet en alvorlig feil som gjorde at AI-en forsøkte å "tenke to ganger" på samme tid, noe som doblet VRAM-bruken og forårsaket ekstrem treghet eller krasj. VRAM-en din vil takke deg!
  - 💾 **Sikker lasting:** Forbedret generell stabilitet ved innlasting av spill for å sikre at det å gjenoppta eventyret alltid er en sømløs opplevelse.

****************************************************************************************************
02/02/2026 00:18 - Kritisk hurtigfiks: Stabilitet, Multi-GPU og lokaliseringsforbedringer - Beta_v051
****************************************************************************************************
- What's New (NO):
  - 🚑 **Kritisk feilretting:** Løste et problem som under sjeldne omstendigheter forhindret spillet i å starte («Total svikt») på grunn av korrupsjon i databasen som oppstarteren ikke klarte å rydde opp i. Alternativet «Slett database» er nå mye mer effektivt.
  - ⚡ **Maskinvareforbedring:** Rettet en feil som gjorde at «Automatisk konfigurasjon» ignorerte ytelsen til systemer med flere grafikkort i enkelte konfigurasjoner med ikke-identiske GPU-er.
  - 🛠️ **Verktøy:** La til et nytt alternativ i oppstarteren for enkelt å åpne loggen fra forrige økt, for å gjøre brukerstøtte enklere.
  - 🌍 **Lokalisering:** Rettet flere knapper som vistes på engelsk (Yes/No) i oppstarteren. De følger nå valgt språk.
  - 📖 **Grensesnitt:** Forbedret formateringen av versjonsinformasjonen for å gjøre den mer leselig.
  
  - **Kommer snart:** Neste punkt under arbeid: kompatibilitet med AMD-, NVIDIA- og Intel-GPU-er via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fiks av Manualer & Stabilitet - Beta_v050
****************************************************************************************************
- Nyheter:
  **Multi-GPU-kraft og kritiske feilrettinger!**
  
  * **🚀 Multi-GPU-støtte:** Implementert evnen til å dele store AI-modeller mellom flere grafikkort. *Nå kan du bruke hele maskinvarearsenalet ditt; Ubegrenset makt!*
  * **🛡️ Stabilitet:** Lagt til alle manglende DLL-biblioteker for å unngå uventede avslutninger. *Jeg har pansret motoren, hvis den feiler nå er det på grunn av et kritisk feilslag med terningene.*
  * **📖 Dynamiske nettmanualer:**
    * **Reell velger:** Språkmenyen verifiserer nå hvilke filer som faktisk eksisterer før de vises. *Slutt på spøkelsesalternativer som ikke gjorde noe; spådomsmagi nivå 5.*
    * **Fiks Feil 403:** Løste rettighetsfeilen som forhindret visning av endringsloggen inne i spillet. *Jeg har lært appen å be om adgang på riktig måte ("Sesam lukk deg opp!").*
  * **🌍 Språk:** Gjennomgang av tekster og oversettelser. *Polyglott-modus aktivert.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisering og AI-forbedringer - Beta_v049
****************************************************************************************************
- Nyheter:
  Vi har pusset på spillopplevelsen med viktige rettelser og et nytt visuelt verktøy:

  * **Rent og pålitelig inventar:** Slutt på å finne "spøkelsesobjekter" eller gjenstander med merkelige navn i ryggsekken din. Vi har implementert et narrativt valideringssystem som sikrer at alt du plukker opp eller kjøper faktisk eksisterer i spillverdenen.
  * **Flytende dialoger:** Vi har reparert de irriterende knappene som noen ganger dukket opp som "Unknown" eller ikke responderte. Nå vil dialogalternativene med NPC-er alltid vise riktig tekst.
  * **Robust karaktergenerering:** Å skape helten din er nå en solid prosess. Vi har løst konfliktene som noen ganger etterlot karakterarket ufullstendig eller med feilaktig statistikk ved sammenslåing av biografi og stats.
  * **Ny statuslinje for AI:** Nå kan du se maskinens hjerne i arbeid! Vi har lagt til en linje øverst som viser responshastigheten og minnebruken i sanntid. Slik vet du alltid om AI-en "tenker" på ditt neste eventyr.

****************************************************************************************************
28/01/2026 03:50 - Kritisk Kompileringsfiks - Beta_v048
****************************************************************************************************
- Nyheter:
  Løste en kritisk feil som forhindret spillet i å starte på nye installasjoner. Forbedret stabilitet og kompatibilitet med forskjellig utstyr.

****************************************************************************************************
26/01/2026 19:38 - Nettstarter & RTX 50 Support - Beta_v047
****************************************************************************************************
- Nyheter:

  > [!VIKTIG]
  > **AV KOMPATIBILITETSÅRSAKER ER DET NØDVENDIG Å SLETTE DEN FORRIGE DB-EN, ELLER SÅ ER DET VELDIG SANNSYNLIG AT DET OPPSTÅR FEIL I AI-KONFIGURASJONEN**
  > **(Løsning: Klikk på tannhjulikonet ⚙️ i Starteren -> Slett database)**

  *Kritisk støtte for RTX 50-serien: Løste en alvorlig feil som forårsaket uventet avslutning ved forsøk på å generere karakterer på de nye NVIDIA-grafikkortene (RTX 5070, 5080, 5090).
  (Siden jeg ikke har en RTX fra 5000-serien, har jeg ikke kunnet teste direkte om løsningen er 100 %, men teorien er at det skal være løst. Jeg venter på seiersropene deres her!)
  
  *Oppdatering av AI-motoren: Vi har oppdatert spillets lokale hjerne for å være kompatibel med den nyeste maskinvareteknologien, og sikrer at alle kan nyte opplevelsen uten nett, uansett hvor moderne utstyret deres er.
  
  *Ny starter: Oppdateringer og nyheter i sanntid fra den offisielle nettsiden.


****************************************************************************************************
26/01/2026 06:49 - Nettintegrasjon Dokumentasjon - Beta_v045
****************************************************************************************************
- Nyheter:
  *Nå lastes brukermanualen og endringsloggen direkte fra vår offisielle nettside, noe som garanterer at du alltid har den mest oppdaterte informasjonen uten å måtte laste ned oppdateringer. Inkluderer smart frakoblet modus.

  *Vi har forsterket spillets stabilitet slik at det aldri henger seg opp ved oppstart. I tillegg har selgerne kommet tilbake fra ferien sin i limbo: nå vises de riktig, har varer i hyllene og respekterer verdens atmosfære (ingen magiske drikker i fremtiden).

  *Feilen som ikke tillot endring av AI-parametere og valg av AI-modell er rettet, noe som gjorde at noen brukere med begrenset VRAM ikke kunne spille.
  **Ved behov for å endre AI-parametere, anbefaler jeg sterkt å prøve å senke VRAM-% til 85 % først, starte på nytt og teste. Hvis dette fortsatt ikke er nok, anbefaler jeg å sjekke at GPU-ens VRAM ikke brukes av andre prosesser enn selve spillet (start PC-en på nytt om nødvendig, lukk applikasjoner som kan oppta VRAM). Hvis det fortsatt ikke fungerer etter å ha senket VRAM-mengden til og med ned til 70 %, anbefaler jeg ikke å gå lavere fordi spillet ikke vil klare å håndtere prompts som sendes til AI-en. Selv om man klarer å unngå overflyt av VRAM, vil ikke spillet kunne fungere fordi det ikke har ressurser til å gjøre det. I så fall er det eneste gjenværende alternativet å bytte til en lavere modell, sette AI-parametrene tilbake til automatisk og starte på nytt.

****************************************************************************************************
26/01/2026 04:00 - Core-stabilisering og Tjenestediagnostikk - Beta_v044
****************************************************************************************************
- Nyheter:
  Core-stabilisering og Tjenestediagnostikk" "Kritiske rettelser i karaktergenerering, UI (Hovedvindu) og optimalisering av semantisk søk. Start av dyp diagnostikk av tjenestemodus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logger og Stabilitet - Beta_v043
****************************************************************************************************
- Beskrivelse:
  Korrigerende oppdatering fokusert på diagnostikk og retting av UI-løkke.

- Endringer:
  Fikset visuell feil i omstartsdialogen
  Nytt loggsystem i %LOCALAPPDATA% for diagnostikk
  Interne ytelsesoptimaliseringer

****************************************************************************************************
24/01/2026 06:30 - Støtte for Biografi Backend - Beta_v042
****************************************************************************************************
- Beskrivelse:
  Eksponering av biografidata for UI og i18n-justeringer.

<!-- source_hash: 5f218fc5 -->
