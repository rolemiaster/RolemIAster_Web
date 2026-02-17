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

