# 🐉 Velkommen til RolemIAster!

Grip terningene dine (eller musen) og gjør deg klar til å oppleve eventyr der den eneste grensen er hvor vridd fantasien din er! **RolemIAster** er et uendelig rollespill drevet av kunstig intelligens som lar deg være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK ANSVARSFRASKRIVELSE (Den kjedelige, men nødvendige delen)

**LES DETTE ELLER LID UNDER TERNINGENES VREDE:**

1.  **🤖 Integrert Lokal AI:** RolemIAster har sin egen digitale hjerne. Den fungerer **uten internett** og uten at du trenger å gjøre noe rart. Installer og spill!
2.  **☁️ Valgfri Sky:** Hvis du foretrekker å bruke pengene dine på eksterne AI-er (OpenAI, Gemini osv.), så gjør det med kredittkortet ditt. Kostnadene er ditt ansvar.
3.  **🎲 Generativt Kaos:** AI-en finner opp historien mens dere spiller. Hvis fortelleren blir gal og sier at det regner kuer, ikke se på oss. Utvikleren er ikke ansvarlig for galskapen som modellen genererer.
4.  **🏗️ Tidlig Tilgang:** Dette er under bygging. Hvis du finner en feil, er det ikke en feil, det er en overraskende "funksjon"! (Send oss tilbakemelding, vær så snill, det hjelper oss mye).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyr at PC-en din vil gjøre den tunge tenkearbeidet. Du trenger ikke internett, men du trenger et grafikkort som ikke er fra dinosaurtiden. (Merk: Hvis det er kaldt på rommet ditt, fungerer dette spillet som gratis oppvarming).

### ⚙️ Konsepter for nybegynnere

**VRAM (Video RAM)** er drivstoffet for AI-en.
*   RolemIAster trenger å "huske" **12 000 til 16 000 ord (tokens)** for å ikke miste tråden i historien.
*   Hvis GPU-en din går tom for minne, vil spillet gå saktere enn en snegle med astma.

---

### 📊 MODELLKATALOG (Velg din forgiftning)

Administrer AI-ene dine i **Innstillinger → Integrert Lokal AI → Administrer Modeller**.

#### 🏆 Qwen 2.5-familien (Kremen av kremen)

| Modell        | Størrelse | Minimum VRAM | Nivå | Vurdering                                                                           |
|---------------|-----------|--------------|------|-----------------------------------------------------------------------------------|
| **Qwen2.5-3B** | ~2.5GB    | **8GB**      | B    | 👶 **Lærlingen.** Fungerer, men ikke be den om å skrive Shakespeare. Den surrer av og til. |
| **Qwen2.5-7B** | ~5.5GB    | **12GB**     | A    | ✅ **DEN UTVALGTE.** Balansert, smart og rask. Dette er standardanbefalt modell.       |
| **Qwen2.5-14B**| ~10GB     | **16GB**     | S    | 🧐 **Professor.** Rik, dyp narrativ og svært naturlige dialoger.                   |
| **Qwen2.5-32B**| ~22GB     | **32GB**     | S+   | 👑 **Guddommelig nivå.** Du trenger et romskip (RTX 3090/4090) for å kjøre dette.    |

---

### 🎮 RASK VEILEDNING FOR VALG

| Grafikkortet ditt | VRAM   | Anbefalt modell  | Resultat                            |
|-------------------|--------|------------------|-------------------------------------|
| GTX 1050/1060     | 4GB    | Qwen2.5-3B       | 🆗 Akkurat nok, men spillbart (lav kontekst) |
| GTX 1070/1660     | 6GB    | Qwen2.5-3B       | 🆗 Fungerer bra                       |
| RTX 2060/3060     | 8GB    | Qwen2.5-3B       | 🚀 Flyr                               |
| RTX 3070/4060Ti   | 12GB   | **Qwen2.5-7B**   | ✅ Den ideelle opplevelsen            |
| RTX 3090/4080     | 16-24GB| Qwen2.5-14B      | 🌟 Luksus                            |
| RTX 4090          | 24GB   | Qwen2.5-32B      | 👑 Maksimal kvalitet                 |

**💡 Profftips:** La alltid ca. **2GB VRAM være ledig** for operativsystemet, ellers begynner Windows å gråte og lukke ting.

---

### 🚨 HJELP! PC-en MIN ER SAKTE! (VRAM-problemer)

Hvis spillet tar lengre tid å svare enn din crush på WhatsApp, har du sannsynligvis gått tom for VRAM.

**Symptomer på at du har vært for smart:**
1.  **Modellen flyttes til RAM:** PC-en bruker vanlig minne i stedet for grafikkminne. Resultat: EKSTREM SAKTEHET.
2.  **Lett overflyt (1-2GB):** Tar 30-60 sekunder per svar.
3.  **Moderat overflyt (3-5GB):** 2-5 minutter. Du kan gå og hente en kaffe.
4.  **Alvorlig overflyt:** 10-30 minutter. Uspillbart.

#### 🛡️ Nødprotokoll
Hvis det går galt, følg disse trinnene i rekkefølge:

1.  **📉 Reduser VRAM %:** Gå til Innstillinger og reduser det til **85%**. Start på nytt og prøv.
2.  **🧹 Opprydding:** Lukk nettleseren med 40 åpne faner. De spiser opp minnet ditt.
3.  **🛑 70% Grensen:** Gå aldri under **70%** av tildelt VRAM.
    *   *Hvorfor?* Fordi AI-en trenger plass til å "tenke" (KV-cachen). Hvis du gir den mindre enn 70%, vil den bli tom og gi en feil.
4.  **🔙 Taktisk tilbaketrekning:** Hvis ingenting annet fungerer, gå ned til en mindre modell (fra 7B til 3B).

---

### ⚙️ AVANSERT MODELLKONFIGURASJON

For de som liker å trykke på knapper i **Innstillinger → Integrert Lokal AI**:

| Valg            | Funksjon                               | Anbefaling                        |
|-----------------|----------------------------------------|-----------------------------------|
| **GPU Layers**  | Hvor mye av modellen som lastes inn på grafikkortet | **-1** (Betyr "ALT". Ikke rør dette med mindre du vet hva du gjør) |
| **Maks Kontekst**| AI-ens "korttidsminne"                 | **16384 - 32768** (Mindre enn dette, og AI-en vil få hukommelsestap) |
| **Temperatur**  | Kreativitet vs. galskap                 | **0.7 - 0.8** (Høyere = galere; Lavere = mer robotaktig) |
| **Historie RAG**| Huske ting fra lenge siden             | **Ja** (Uunnværlig for lange kampanjer) |
| **Cache Embeddings**| Akselererer minnesøk              | **Ja** (Gjør at det går raskere)     |

---

### 🔧 FEILSØKING (Troubleshooting)

| Problem         | Løsning                                                                    |
|-----------------|----------------------------------------------------------------------------|
| **Treg AI / Lag**| Verifiser at `GPU Layers` er -1. Lukk Chrome. Reduser `Maks Kontekst`.         |
| **Minnefeil (OOM)**| Reduser `Maks Kontekst` eller velg en mindre modell (3B).                    |
| **AI-en babler / Hallusinerer**| Reduser `Temperatur` til 0.6. Hvis den fortsatt er gal, start applikasjonen på nytt. |

---

### 🌐 ALTERNATIVE LEVERANDØRER (Kun eksperter)

> **Merk:** Den lokale AI-en som følger med spillet er mer enn nok. Dette er kun for avanserte eller modige brukere.

*   **Eksterne Lokale Motor:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nisjemodeller, kan du bruke dem.
*   **Skybaserte API-er (Betalt):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Krever internett og penger.
    *   Konfigurer i: **Innstillinger → AI → Legg til Ny Leverandør**.

---

## 🎲 HVORDAN SPILLE?

Når du åpner spillet, har du to veier:

1.  **🆕 Nytt Eventyr**: Skap din egen legende fra bunnen av. Spillet vil veilede deg til å velge rase, klasse, verden og premiss. (Hvis livet gir deg sitroner... eller en 3 i Styrke, bli Barde).
2.  **💾 Last Inn Spill**: Fortsett akkurat der du slapp før den ydmykende døden. (Eller for å rette opp den "lille feilkalkulasjonen" med dragen).

### Grensesnittet (Din kommandokabin)

*   **Venstre Panel (DU):** Din Karakterark. Liv, mana, ferdigheter og hvor pen du er (Karisma).
*   **Midtre Panel (HISTORIEN):**
    *   **Oppe:** Hvor fortelleren forteller hva som skjer.
    *   **Nede:** Dine beslutningsknapper og tekstfeltet for å skrive hva du vil gjøre.
*   **Høyre Panel (DINE TING):** Inventar og utstyr. Et digitalt Diogenes' paradis.

---

## 📜 SPILLEREGLER (Ja, det er regler)

RolemIAster bruker et klassisk og robust d100 (hundresidig terning) system.

### 1. Dine Attributter (Det som definerer deg)
Genereres tilfeldig, akkurat som i et analogt rollespill fra gamle dager!

*   💪 **Styrke (STY):** For å slå hardt og løfte steiner.
*   ❤️ **Konstitusjon (KON):** For å tåle slag, sykdommer og gift.
*   🐘 **Størrelse (STØ):** Stor og tung, eller liten og unnvikende.
*   🏃 **Behendighet (BEH):** Smidighet, presisjon og ikke snuble i egne bein.
*   🧠 **Intelligens (INT):** Lære, huske og løse gåter.
*   🔮 **Kraft (KRA):** Din sjel, din lykke, viljestyrke og magi.
*   😎 **Karisma (KAR):** Lederskap, attraktivitet og evnen til å lure folk.

### 2. Rask Matematikk (Avledede egenskaper)
*   **Liv (LV):** `(KON + STØ) / 2`. Hvis det når 0... vel, du vet. Død.
*   **Mana (MV):** Lik din KRA. Uten mana, ingen triks. (En magiker uten mana er bare en fyr i kappe som cosplay).
*   **Handlingspoeng (HP):** `(INT + BEH) / 2`. Bestemmer din Initiativ. Den som slår først, slår to ganger.

### 3. Dine Ferdigheter
Starter med en grunnverdi (f.eks. Sniking = BEH + INT) og forbedres ved bruk. Det er en prosent (%) verdi.

### 4. Løsning av handlinger (Terningen)
Når du prøver å gjøre noe risikabelt (klatre, lyve, angripe...), vil AI-en be deg om et kast.
Spillet kaster en usynlig **d100**. **(Husk: Terningene hater deg. Det er personlig).**

*   **Ditt Mål:** Få **MINDRE ELLER LIKT** din ferdighet.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du får en 30: ✅ **Suksess**. Klatrer som en apekatt.
    *   Du får en 80: ❌ **Feil**. Du slår deg hardt.
    *   Du får en 01-05: ✨ **KRITISK SUKSESS!** Gjør episk parkour med en salto.
    *   Du får en 99-100: 💀 **FIASKO!** Buksene dine faller ned midtveis og du faller på ansiktet.

---

## 💡 TIPS FOR Å IKKE DØ (FORT)

*   **✍️ Vær Beskrivende:** Ikke skriv bare "angriper". Skriv: *"Jeg prøver å unngå øksen hans ved å rulle på bakken og stikker dolken min i ankelen hans"*. AI-en vil belønne deg.
*   **🧪 Eksperimenter:** Du er ikke begrenset til knappene. Skriv galskap! AI-en vil improvisere.
*   **🎭 Rollespill:** Kom inn i rollen. Les beskrivelsene og oppfør deg som karakteren din ville gjort, ikke som du ville gjort i pysjamas.

---

## ⚔️ KAMP (Til våpen!)

Når ordene svikter, er det tid for slagsmål. Kampen er **taktisk** og fungerer i **Ticks** (tid).

### 🕹️ Hvordan det fungerer:
*   **Ticks:** Hver handling koster tid. Tunge våpen er trege (bruker mange ticks). Dolker er raske.
*   **Din Hastighet:** Avhenger av dine Handlingspoeng (HP).

### Grunnleggende Handlinger:
*   **🗡️ Angrip:** Slå med det du har trukket.
*   **🛡️ Blokker:** Du går i forsvar. Reduserer skade, men bruker Stamina.
*   **🏃 Flykt:** Av feiginger (eller av kloke folk som vil leve).
*   **🏳️ Overgi deg:** Hvis du ser at du ikke vinner, kan du tigge om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacking...

### ⚠️ GULLREGEL FOR OVERLEVELSE
**TREKK VÅPNET FØR KAMP!**
Å trekke våpenet midt i kampen koster tid (Ticks). Hvis du blir tatt med sverdet i sliren, får du juling mens du prøver å trekke det klønete. ELLER VERRE!, HVIS DU HAR VÅPNENE DINE I RYGGSEKKEN I STEDEN FOR I UTSTYRSPLASSEN (Unnskyld et øyeblikk, jeg må hente langsværd fra sekken, jeg vet jeg hadde det her... et sted...) 🤦‍♂️
👉 Klikk på **etiketten for det utstyrte våpenet** (høyre panel) for å trekke det. Det vil lyse grønt.

Å prøve å flytte våpen i kamp koster tid (Ticks) og kan resultere i et overraskelsesangrep, i tillegg er det svært sannsynlig at du mister turen, at du bommer på grunn av nervene fra øksen som nærmer seg tinningen din, eller at du mister den på bakken. (Kanskje det ikke var en god idé å lage en karakter med ADHD)

---

## ✨ MAGI OG CYBERNETIKK

Avhengig av om verdenen din er "Middelalderfantasi" eller "Cyberpunk":

### 🧙‍♂️ Fantasi: Fortryllelser
Er du en magiker? Du kan fortrylle utstyret ditt.
1.  **Lær:** Du trenger formelen i grimoiren din.
2.  **Kast (Dra og Slipp):** Dra formelen fra listen din over objektet i inventaret ditt.
3.  **Kostnad:** Å holde en fortryllelse aktiv **bruker Mana per tur**.
4.  **Merk:** Hvis du går tom for mana midt i kampen, blir flammesverdet igjen en rusten jernbit.

### 🦾 Cyberpunk: Implantater
Vil du ha øyne med zoom eller gorilla-armer?
1.  Finn en **Teknokirurg** (NPC som utfører tjenester).
2.  Betal kredittene (ingenting er gratis i fremtiden).
3.  **Menneskelighet Kostnad:** Hvert implantat tar en bit av sjelen din (**Menneskelighet**).
    *   Hvis du får for mange, blir du en **Cyberpsykopat** (en morderisk brødrister på stylter) og mister kontrollen over karakteren din.

---

## 🛒 BUTIKKER OG TJENESTER

Snakk med NPC-er for å handle.
*   **Pruting:** Din **Handels**-ferdighet (basert på Karisma) bestemmer prisene. Hvis du er stygg eller uvennlig, vil du bli lurt.
*   **Selg:** **Høyreklikk** på et objekt i inventaret ditt for å selge det til selgeren.

---

## 🎒 INVENTARSTYRING (Tetris)

*   **Vekt:** Du har en lastegrense (Styrke + Størrelse). Hvis du bærer for mye skrap, vil du gå sakte og få straff (Diogenes er ikke din venn).
*   **Paneler:**
    *   **Utstyr:** Det du har på deg.
    *   **Belte:** Rask tilgang i kamp (det koster mindre tid å bruke eliksirer herfra).
    *   **Ryggsekk:** Bunnen av sekken.
*   **Rask Bruk:** Dra en eliksir eller mat direkte over **ansiktet ditt** (portrettet) for å konsumere det umiddelbart.

---

## 🛠️ SLUTTJUSTERINGER

I **Innstillinger**-menyen kan du justere alt:
*   **🌍 Språk:** AI-en vil oversette hele spillet og svarene til deg mens du spiller.
*   **👁️ Utseende:** Tekststørrelse og farger, for å unngå å bli blind.
*   **🧠 AI Innstillinger:** Bytt modell, temperatur, osv.

---

## 🚧 Merknad: Tidlig Tilgang

RolemIAster er under **aktiv utvikling**, og kokes sakte.
*   Du kan finne feil (eller "uventede funksjoner").
*   Jeg legger til nye ting hver uke.
*   Din tilbakemelding er gull verdt! Fortell meg hva du liker og hva du liker veldig godt.

Nå, gå, kast initiativ og skap din legende!

<!-- source_hash: 2511f352 -->