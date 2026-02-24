****************************************************************************************************
24/02/2026 12:32 - KI-bildegenerering, narrative forbedringer og kontroll - Beta_v058
****************************************************************************************************
- What's New (NO):
  **Nyhet: Andre fase av KI-bildegenerering**
  - 🎨 **Din verden i bilder:** Jeg har integrert et system for bildegenerering med kunstig intelligens. Mens du spiller, forsøker systemet å generere portretter og landskap som passer til stemningen i spillet ditt.
  - 🖼️ **Dynamiske bakgrunner:** Bilder genereres i bakgrunnen uten å stoppe spillet. Du vil se dem dukke opp gradvis i bakgrunnen, på karakterkortene og i kodesen (Códice).
  - 🧹 **Bildebehandling:** Nytt panel for å se og slette genererte bilder du ikke liker.
  
  **Forbedringer i karaktergenerering:**
  - ⚙️ **Mer robust tilfeldig generering:** Jeg har samlet og forbedret regelmotoren KI-en bruker for å lage karakterer fra bunnen av, noe som sikrer mer logisk utstyr (5 til 10 sammenhengende gjenstander) og mer balanserte karakterark.
  - 🧠 **Delt hjerne:** KI-en forstår nå bedre når den skal «finne opp» en karakter fra bunnen av, og når den skal begrense seg til å hente data fra biografien du selv har skrevet.
  - ⚡ **Hastighet tilpasset deg:** Ny seksjon i visuelle innstillinger. Velg mellom «Rask» (1 steg), «Middels» (2 steg) eller «Høy» (4 steg) for å justere genereringstiden etter maskinens kraft.
  - 🛠️ **Teknisk optimalisering:** KI-modellen for bilder lastes inn i **RAM (minne)** og behandles via **CPU**, uten å bruke videominne (VRAM). Dette sikrer at den ikke forstyrrer ytelsen til spillets hoved-KI (LLM). Krever ca. 5 GB ekstra RAM, noe som holder seg innenfor de offisielle minstekravene på Steam.
  - 📤 **Del dine eventyr:** Alle genererte bilder lagres automatisk. Du finner dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Modellvelger (Avansert):** Hvis du starter spillet med parameteren `--advanced`, kan du nå velge hvilken KI-modell som skal brukes for bilder fra utseendepanelet. Dette lar entusiaster prøve forskjellige versjoner av Stable Diffusion optimalisert for OpenVINO (.xml/.bin-filer).
  
  **Narrativ og KI-hjerne:**
  - 🧠 **Slutt på løkker:** En ny «minnedoktrine» er implementert i KI-en. Den skiller nå bedre mellom «minner» (det som allerede har skjedd) og «nåtid» (det som skjer nå). Dette bidrar til å redusere tilfeller der KI-en gjentar seg selv eller setter seg fast.
  - 📜 **Historiske arkiver:** Systemet presenterer minnene dine for KI-en som et «lukket historisk arkiv», noe som gjør det lettere for den å bruke informasjonen som referanse for å drive historien fremover.
  - ⚡ **Optimaliserte instruksjoner:** Måten spillet ber om fortelling på ditt språk har blitt forbedret, noe som frigjør kapasitet i modellen til å fokusere på kreativitet.
  - 👁️ **Narrativt fokus:** KI-ens persepsjon er skrevet om. Den forstår nå bedre hvilke elementer som er «statisk bakgrunn» og bør ikke gjenta dem unødvendig i hvert avsnitt.
  - 🔀 **Tydeligere valg:** KI-en tilbyr nå mer definerte utveier. Forslagene (knappene) er delt mellom å undersøke omgivelsene (Fordype seg) eller endre kurs (Avvike).
  - 🫵 **Direkte tiltale:** Grunninstruksjonen er justert for å sikre at KI-en tiltaler deg som «du», noe som forbedrer den personlige innlevelsen.
  
  **Karakteroppretting:**
  - 🖼️ **Karakterportretter:** Når du genererer en karakter med KI, prøver systemet å lage et portrett basert på alder, yrke og beskrivelse. Vær oppmerksom på at dette er en tidlig versjon og nøyaktigheten (spesielt når det gjelder alder) kan variere avhengig av modellen som brukes. (Jeg fortsetter å teste, men starten er lovende)
  - 🎲 **Pålitelig tilfeldig generering:** Rettet en feil der «Generer med KI»-knappen kunne mislykkes på første forsøk og etterlate feltene tomme. Nå sørger det smarte korrigeringssystemet for at svaret alltid er gyldig.
  
  **Administrering av genererte bilder:**
  - 🖼️ **KI-bildegalleri:** Nytt panel i filmenyen som viser alle bildene KI-en har generert i løpet av spillene dine (portretter, bakgrunner). Du kan filtrere etter bildetype eller verden.
  - 🗑️ **Selektiv sletting:** Velg ett eller flere bilder og slett dem hvis de ikke passer (kanskje det der KI-en bestemte at det var en god idé å parkere en buss i slottets stall). Systemet renser både filen og den interne registreringen.
  - 📂 **Direkte tilgang:** Dobbeltklikk på et miniatyrbilde for å åpne mappen der filen ligger. Hvis du allerede har mappen åpen, gjenbrukes det samme vinduet.
  - 💾 **Husk størrelse:** Størrelsen på gallerivinduet lagres automatisk mellom økter.
  
  **Ytelse på lave spesifikasjoner (Viktig for GPU-er med lite VRAM):**
  - 🧠 **PSR – Hybrid styring:** Nytt system som deler KI-arbeidet i to faser: Planlegging (kokken) og utførelse (kokkene). Dette gjør at lokale modeller med 8 GB VRAM kan fungere uten å krasje på grunn av for mye kontekst (+12K tokens), på bekostning av høyere forsinkelse. Samhandlingen med KI-en går fra å være én enkelt ledetekst (prompt) til en serie med ledetekster (jo mindre VRAM, desto flere ledetekster genereres og lengre blir responstiden).
  - ⚡ **Smart utførelse:** Systemet avgjør automatisk om alt skal behandles på en gang (monolittisk) eller deles i deler (iterativt) basert på tilgjengelig VRAM. Skjermkort med mindre VRAM aktiverer delvis modus kun når det er nødvendig.
  - 📊 **Dynamisk optimalisering:** PSR reduserer token-belastningen under generering, slik at brukere med 4 GB grafikkort kan fullføre karakteroppretting og historiegenerering som tidligere låste seg.
  - 🔄 **Beholdt sammenheng:** Til tross for at arbeidet deles opp, injiserer systemet en «hovedintensjon» slik at KI-en ikke mister tråden i det den holdt på med.
  
  **KI-stemmer (gradvis forbedring):**
  Sanntidsgenerering av stemmer på alle språk (noen språk er mer begrensede enn andre, engelsk har det største utvalget av stemmer)
  - 🗣️ **Kamprop med stemme:** Når du starter en kamp mot fiendtlige motstandere, utløses nå en kontekstuell stemmefrasering.
  - 🎭 **Dynamiske fraser etter kontekst:** Motoren kan generere korte stemmelinjer for spesifikke hendelser (tjenester/kamp) basert på språk, miljø og karakterprofil.
  - 🧠 **Interne stemmemaler:** Tekniske stemmemaler har blitt separert fra det narrative systemet for å unngå forstyrrelser i historien.
  - 🔊 **Bedre klarhet ved lytting:** Forbedret forståelighet og prosodi i syntesen for å prioritere tydelig diksjon.
  
  **⚠️ Kompatibilitetsvarsel (tidligere lagringer):**
  - 🔄 På grunn av mengden interne endringer i regelmotoren og miljøsystemet, vil **tidligere lagrede spill og verdener fortsatt være spillbare (muligens)**, men det er svært sannsynlig at de vil inneholde feil eller uventet oppførsel. **Det anbefales å lage en helt ny verden** for å oppleve alle forbedringene på riktig måte.

****************************************************************************************************
17/02/2026 07:20 - AI-bildegenerering, narrative forbedringer og kontroll - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (NO):
  **⚠️ EKSPERIMENTELL GREN (STEAM BETA)**
  Denne versjonen er for øyeblikket kun tilgjengelig i Steams **Eksperimentelle gren**. Slik aktiverer du den:
  1. Høyreklikk på **RolemIAster** i Steam-biblioteket ditt.
  2. Velg **Egenskaper...**
  3. Gå til fanen **Betaer**.
  4. Under «Betadeltakelse» velger du **experimental** i rullegardinmenyen.
  
  **Nyhet: Første fase av AI-bildegenerering**
  - 🎨 **Din verden i bilder:** Jeg har integrert et innledende system for bildegenerering ved hjelp av kunstig intelligens. Mens du spiller, prøver systemet å generere portretter og landskap som passer til stemningen i spillet ditt.
  - 🖼️ **Dynamiske bakgrunner:** Bildene genereres i bakgrunnen uten å stoppe spillet. Du vil se at de gradvis dukker opp i bakgrunnen, på karakterkort og i Kodeksen.
  - ⚡ **Hastighet etter ditt behov:** Ny seksjon i Visuelle innstillinger. Velg mellom «Rask» (1 trinn), «Middels» (2 trinn) eller «Høy» (4 trinn) for å tilpasse genereringstiden til utstyret ditt.
  - 🛠️ **Teknisk optimalisering:** AI-modellen for bilder lastes inn i **RAM (minne)** og behandles via **CPU**, uten å bruke videominne (VRAM). Dette sikrer at den ikke forstyrrer ytelsen til spillets hoved-AI (LLM). Dette krever omtrent 5 GB ekstra RAM, men holder seg innenfor de offisielle minimumskravene til Steam.
  - 📤 **Del eventyrene dine:** Alle genererte bilder lagres automatisk. Du finner dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativ og AI-hjerne:**
  - 🧠 **Slutt på løkker:** En ny «minnedoktrine» er implementert i AI-en. Den skiller nå bedre mellom «minner» (det som allerede har skjedd) og «nåtid» (det som skjer nå). Dette bidrar til å redusere tilfeller der AI-en gjentok seg selv eller satt fast.
  - 📜 **Historiske arkiver:** Systemet presenterer minnene dine for AI-en som et «lukket historisk arkiv», noe som gjør det lettere for den å bruke informasjonen som referanse for å drive historien fremover.
  - ⚡ **Optimaliserte instruksjoner:** Måten spillet ber om fortelling på ditt språk er forbedret, noe som frigjør kapasitet slik at modellen kan fokusere på kreativitet.
  - 👁️ **Narrativt fokus:** AI-ens oppfatning er omskrevet. Den forstår nå bedre hvilke elementer som er «statisk bakgrunn» og ikke bør gjentas unødvendig i hvert avsnitt.
  - 🔀 **Klarere beslutninger:** AI-en tilbyr nå mer definerte fluktveier. Forslagene (knapper) er delt mellom å undersøke omgivelsene (Fordype) eller endre kurs (Avvike).
  - 🫵 **Direkte tiltale:** Grunninstruksjonen er justert for å sikre at AI-en tiltaler deg som «du», noe som forbedrer den personlige innlevelsen.
  
  **Karakterskaping:**
  - 🖼️ **Karakterportretter:** Når du genererer en karakter med AI, prøver systemet å lage et portrett basert på alder, yrke og beskrivelse. Vær oppmerksom på at dette er en tidlig versjon, og nøyaktigheten (spesielt når det gjelder alder) kan variere avhengig av hvilken modell som brukes. (Jeg tester fortsatt, men starten er god)
  - 🎲 **Pålitelig tilfeldig generering:** Rettet en feil der knappen «Generer med AI» kunne feile ved første forsøk og la feltene stå tomme. Nå sørger det smarte korrigeringssystemet for at svaret alltid er gyldig.

****************************************************************************************************
17/02/2026 07:04 - AI-bildegenerering, narrative forbedringer og kontroll - Beta_v058
****************************************************************************************************
- What's New (NO):
  **⚠️ EKSPERIMENTELL GREN (STEAM BETA)**
  Denne versjonen er for øyeblikket kun tilgjengelig i Steams **Eksperimentelle gren**. Slik aktiverer du den:
  1. Høyreklikk på **RolemIAster** i Steam-biblioteket ditt.
  2. Velg **Egenskaper...**
  3. Gå til fanen **Betaer**.
  4. Under «Betadeltakelse» velger du **experimental** i rullegardinmenyen.
  
  **Nyhet: Første fase av AI-bildegenerering**
  - 🎨 **Din verden i bilder:** Jeg har integrert et innledende system for bildegenerering ved hjelp av kunstig intelligens. Mens du spiller, prøver systemet å generere portretter og landskap som passer til stemningen i spillet ditt.
  - 🖼️ **Dynamiske bakgrunner:** Bildene genereres i bakgrunnen uten å stoppe spillet. Du vil se at de gradvis dukker opp i bakgrunnen, på karakterkort og i Kodeksen.
  - ⚡ **Hastighet etter ditt behov:** Ny seksjon i Visuelle innstillinger. Velg mellom «Rask» (1 trinn), «Middels» (2 trinn) eller «Høy» (4 trinn) for å tilpasse genereringstiden til utstyret ditt.
  - 🛠️ **Teknisk optimalisering:** AI-modellen for bilder lastes inn i **RAM (minne)** og behandles via **CPU**, uten å bruke videominne (VRAM). Dette sikrer at den ikke forstyrrer ytelsen til spillets hoved-AI (LLM). Dette krever omtrent 5 GB ekstra RAM, men holder seg innenfor de offisielle minimumskravene til Steam.
  - 📤 **Del eventyrene dine:** Alle genererte bilder lagres automatisk. Du finner dem i mappen: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrativ og AI-hjerne:**
  - 🧠 **Slutt på løkker:** En ny «minnedoktrine» er implementert i AI-en. Den skiller nå bedre mellom «minner» (det som allerede har skjedd) og «nåtid» (det som skjer nå). Dette bidrar til å redusere tilfeller der AI-en gjentok seg selv eller satt fast.
  - 📜 **Historiske arkiver:** Systemet presenterer minnene dine for AI-en som et «lukket historisk arkiv», noe som gjør det lettere for den å bruke informasjonen som referanse for å drive historien fremover.
  - ⚡ **Optimaliserte instruksjoner:** Måten spillet ber om fortelling på ditt språk er forbedret, noe som frigjør kapasitet slik at modellen kan fokusere på kreativitet.
  - 👁️ **Narrativt fokus:** AI-ens oppfatning er omskrevet. Den forstår nå bedre hvilke elementer som er «statisk bakgrunn» og ikke bør gjentas unødvendig i hvert avsnitt.
  - 🔀 **Klarere beslutninger:** AI-en tilbyr nå mer definerte fluktveier. Forslagene (knapper) er delt mellom å undersøke omgivelsene (Fordype) eller endre kurs (Avvike).
  - 🫵 **Direkte tiltale:** Grunninstruksjonen er justert for å sikre at AI-en tiltaler deg som «du», noe som forbedrer den personlige innlevelsen.
  
  **Karakterskaping:**
  - 🖼️ **Karakterportretter:** Når du genererer en karakter med AI, prøver systemet å lage et portrett basert på alder, yrke og beskrivelse. Vær oppmerksom på at dette er en tidlig versjon, og nøyaktigheten (spesielt når det gjelder alder) kan variere avhengig av hvilken modell som brukes. (Jeg tester fortsatt, men starten er god)
  - 🎲 **Pålitelig tilfeldig generering:** Rettet en feil der knappen «Generer med AI» kunne feile ved første forsøk og la feltene stå tomme. Nå sørger det smarte korrigeringssystemet for at svaret alltid er gyldig.

****************************************************************************************************
13/02/2026 21:47 - Optimalisering av AI-oppsett og forbedring av i18n - Beta_v055
****************************************************************************************************
- What's New (NO):
  - ⚙️ **Lokal prioritetsstyring:** Nå kan du manuelt justere prioriteten til grafikkortene dine, selv om systemet står i automatisk modus.
  - 🧠 **Info om AI-rotasjon:** Jeg har lagt til infopaneler i innstillingene for eksterne leverandører for å forklare hvordan den automatiske rotasjonen fungerer ved feil eller overskredet kvote.
  - 🌍 **Utvidet GPU-støtte:** i18n-informasjonsmeldingen gjenspeiler nå korrekt støtten for NVIDIA CUDA og Vulkan (AMD/Intel). Oppdaterte oversettelser på alle språk!
  - ⚙️ **Forbedret tilkobling:** Fikset koblingene for Ollama og andre OpenAI-kompatible servere.
  - 🧠 **Flerspråklig og robust AI:** Deteksjon av objekter fra historien fungerer nå på 10 språk. I tillegg har jeg sikret systemet slik at du aldri blir stående uten starthistorie, selv om AI-en har et teknisk uhell.
  - 🔄 **Smart rotasjon:** Jeg har fikset rotasjonssystemet slik at det ikke gir opp din lokale AI ved første forsøk. Nå gir systemet den en sjanse til å korrigere seg selv før det henter ekstern hjelp.
  - 🧹 **Grunnleggende opprydding:** Jeg har fjernet gamle og forvirrende regler slik at AI-ens «hjerne» blir skarpere og mer presis i håndteringen av objektene dine.

