# 🐉 Velkommen til RolemIAster!

Finn fram terningene (eller musen) og gjør deg klar for eventyr der den eneste grensen er din egen skrudde fantasi! **RolemIAster** er et uendelig rollespill drevet av kunstig intelligens som lar deg være helten (eller skurken) i dine egne historier.

---

## ⚠️ ANSVARSFRASKRIVELSE (Den kjedelige, men nødvendige delen)

**LES MEG, ELLER FØL TERNINGENES VREDE:**

1.  **🤖 Integrert lokal AI:** RolemIAster har sin egen digitale hjerne. Det fungerer **uten internett** og uten at du trenger å fikle med noe merkelig. Installer og spill!
2.  **☁️ Valgfri nettsky:** Hvis du foretrekker å bruke penger på eksterne AI-er (OpenAI, Gemini...), er det opp til deg og kredittkortet ditt. Kostnadene er ditt ansvar.
3.  **🎲 Generativt kaos:** AI-en finner på historien underveis. Hvis fortelleren blir gal og sier at det regner kuer, ikke se på oss. Utvikleren er ikke ansvarlig for galskapen modellen genererer.
4.  **🏗️ Early Access:** Dette er under arbeid. Hvis du finner en bug, er det ikke en feil, det er en overraskende "feature"! (Send oss gjerne tilbakemelding, det hjelper oss mye).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster kjører på **Lokal Kunstig Intelligens**. Det betyr at PC-en din gjør den tunge tenkejobben. Du trenger ikke internett, men du trenger et grafikkort som ikke er fra dinosaurenes tid. (Merk: Hvis det er kaldt på rommet ditt, fungerer dette spillet som gratis oppvarming).

### ⚙️ Konsepter for nybegynnere

**VRAM (Videominne)** er drivstoffet til AI-en.
*   RolemIAster må "huske" **12 000 til 16 000 ord (tokens)** for ikke å miste tråden i historien.
*   Hvis GPU-en din går tom for minne, vil spillet gå tregere enn en snegle med astma.

---

### 📊 MODELLKATALOG (Velg din gift)

Administrer AI-ene dine i **Innstillinger → Integrert lokal AI → Administrer Modeller**.

#### 🏆 Qwen 2.5-familien (Kremen av kremen)

| Modell | Størrelse | Min. VRAM | Nivå | Dom |
|--------|-----------|-----------|------|-----|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Praktikanten.** Leverer, men ikke be den skrive Shakespeare. Roter det til iblant. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DEN UTVALGTE.** Balansert, smart og rask. Dette er den anbefalte standardmodellen. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Professoren.** Rik, dyp fortellerstemme og veldig naturlige dialoger. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Gudenivå.** Du trenger et romskip (RTX 3090/4090) for å kjøre dette. |

---

### 🎮 HURTIGGUIDE FOR VALG

| Ditt Grafikkort | VRAM | Anbefalt Modell | Resultat |
|-----------------|------|-----------------|----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Akkurat nok, men spillbart (Lav kontekst) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Fungerer bra |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Lynraskt |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Den ideelle opplevelsen |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luksus |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maksimal kvalitet |

**💡 Pro-tips:** La det alltid være igjen ca. **2 GB VRAM** til operativsystemet, ellers begynner Windows å gråte og lukke ting.

---

### 🚨 HJELP! PC-EN MIN ER TREG! (VRAM-problemer)

Hvis spillet bruker lenger tid på å svare enn crushet ditt på WhatsApp, har du sannsynligvis gått tom for VRAM.

**Symptomer på at du har overvurdert maskinen din:**
1.  **Modellen flyttes til RAM:** PC-en bruker vanlig minne i stedet for grafikkminne. Resultat: EKSTREM TREIGHET.
2.  **Lett overflyt (1-2 GB):** Tar 30-60 sekunder per svar.
3.  **Moderat overflyt (3-5 GB):** 2-5 minutter. Du kan gå og hente kaffe.
4.  **Alvorlig overflyt:** 10-30 minutter. Uspillbart.

#### 🛡️ Nødprotokoll
Hvis ting går galt, følg disse trinnene i rekkefølge:

1.  **📉 Senk % VRAM:** Gå til Innstillinger og senk den til **85%**. Start på nytt og test.
2.  **🧹 Rengjøring:** Lukk nettleseren med 40 åpne faner. De spiser opp minnet ditt.
3.  **🛑 70%-grensen:** Gå aldri under **70%** tildelt VRAM.
    *   *Hvorfor?* Fordi AI-en trenger plass til å "tenke" (KV-cache). Hvis du gir den mindre enn 70%, blir den blank og gir feilmelding.
4.  **🔙 Taktisk retrett:** Hvis ingenting fungerer, bytt til en mindre modell (gå fra 7B til 3B).

---

### ⚙️ AVANSERT MODELLKONFIGURASJON ("Maksimal nerding")

> **EKSPERTMODUS:** Hvis du er en proff og vil ha tilgang til avanserte modellinnstillinger (legge til dine egne GGUF-modeller lastet ned fra HuggingFace, justere lag, osv.), må du starte spillet med kommandoen: `--advanced`.

For de som liker å trykke på knapper i **Innstillinger → Integrert lokal AI**:

| Alternativ | Funksjon | Anbefaling |
|------------|----------|------------|
| **GPU Layers** | Hvor mye av modellen som lastes inn på grafikkortet | **-1** (Betyr "ALT". Ikke rør dette med mindre du vet hva du gjør) |
| **Contexto Máximo** | AI-ens "korttidsminne" | **16384 - 32768** (Mindre enn dette og AI-en får amnesi) |
| **Temperatura** | Kreativitet vs. Galskap | **0.7 - 0.8** (Høyere = galere; Lavere = mer robotaktig) |
| **RAG de Historial** | Huske ting fra lenge siden | **Ja** (Viktig for lange kampanjer) |
| **Cachear Embeddings** | Akselererer søk i minner | **Ja** (Gjør at det går raskere) |

---

### 🔧 FEILSØKING (Troubleshooting)

| Tabbe | Løsning |
|-------|---------|
| **Treg AI / Lag** | Sjekk at `GPU Layers` er -1. Lukk Chrome. Senk `Contexto Máximo`. |
| **Minnefeil (OOM)** | Reduser `Contexto Máximo` eller velg en mindre modell (3B). |
| **AI-en delirer / Hallusinerer** | Senk `Temperatura` til 0.6. Hvis den fortsatt er gal, start applikasjonen på nytt. |

---

### 🌐 ALTERNATIVE LEVERANDØRER (Kun eksperter)

> **Merk:** Den lokale AI-en som følger med spillet er mer enn bra nok. Dette er kun for avanserte brukere eller de modige.

*   **Eksterne lokale motorer:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nerde-modeller, kan du bruke dem.
*   **API-er i skyen (Betalt):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Krever internett og at du blar opp penger.
    *   Konfigurer i: **Innstillinger → AI → Legg til ny leverandør**.

---

### 🌍 HVORDAN SPILLE? (Multiverset og deg)

Når du åpner spillet, har du to valg:

1.  **🆕 Nytt eventyr**: Skap legenden din fra bunnen av. Spillet vil be om **Navn, Yrke (Profesjon), Fysisk beskrivelse, Psykologisk beskrivelse og Bakgrunn/Påskudd** for historien din. I tillegg velger du **Vanskelighetsgrad** og **Humortone** som skal styre kampanjen.
2.  **💾 Fortsett spill**: RolemIAster **lagrer i sanntid**. Her kan du ikke "laste inn før du dør" eller gå tilbake. Hver avgjørelse, hver tabbe og hvert sår blir brent inn i historien. Det er en **UTFORDRING**: det du gjør, forblir gjort. Lev med konsekvensene... eller dø med dem.

RolemIAster er ikke et isolert spill; det er et **Vedvarende Multivers**.
*   **Uendelige verdener:** Skap dine egne universer (**Middelalder-fantasy** eller **Cyberpunk**) med sin egen Lore.
*   **Uendelige karakterer:** Innenfor hver verden kan du ha så mange helter du vil.
*   **Delt tidslinje:** Obs! Det en karakter gjør, påvirker de andres verden. AI-en er klar over dine andre helter og vil gjenkjenne dem som innbyggere i verdenen.
*   **AI med "Sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som AI-ens "sladrehank", og gir den minner om verdenen, hvem som er med deg, hvor du er og hva som nettopp skjedde, slik at historien blir 100% sammenhengende.

### Grensesnittet (Din cockpit)

*   **Venstre panel (DEG):** Din karakterprofil. Liv, mana, ferdigheter og hvor kjekk du er (Karisma).
*   **Midtre panel (HISTORIEN):**
    *   **Oppe:** Der fortelleren beretter hva som skjer.
    *   **Nede:** Dine handlingsknapper og tekstboksen for å skrive hva du vil gjøre.
*   **Høyre panel (TINGENE DINE):** Inventar og utstyr. Et paradis for digitale samlere.

---

## 📜 SPILLEREGLER (Ja, det finnes regler)

RolemIAster bruker et klassisk og robust d100-system (hundresidet terning).

### 1. Dine Egenskaper (Det som definerer deg)
AI-en genererer egenskapene dine basert på konteksten, yrket og beskrivelsen du har lagt inn. Når de er generert, har du **10 EKSTRAPOENG** å fordele etter eget ønske.
*   **Trinnvise kostnader:** Å øke en egenskap opp til 14 koster 1 poeng. Fra 15 til 16 koster det 2 poeng. Fra 17 og oppover koster det 3 poeng! Tenk nøye over hvor du legger musklene.

*   💪 **Styrke (STY):** Din rene fysiske kraft. Påvirker nærkampskade og bæreevne.
*   ❤️ **Konstitusjon (KON):** Din motstandskraft. For å tåle slag, sykdommer og gifter.
*   🐘 **Størrelse (STR):** Din kroppsbygning. Stor og tung, eller liten og smidig.
*   🏃 **Smidighet (SMI):** Agilitet, presisjon og evnen til ikke å snuble i egne bein.
*   🧠 **Inteligens (INT):** Lære, huske og løse gåter.
*   🔮 **Kraft (KRA):** Din sjel, din flaks, viljestyrke og din magiske reserve.
*   😎 **Karisma (KAR):** Lederskap, tiltrekningskraft og evnen til å lure (eller forføre) folk.

### 2. Kjapp Matte (Avledede Karakteristikker)
Motoren beregner disse tallene automatisk basert på egenskapene dine:

*   🩸 **Liv (HP):** `CON * 10`. Hvis det når 0... vel, du vet. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Drivstoffet for magitriksene dine. Uten mana, ingen triks. (En magiker uten mana er bare en fyr i badekåpe som cosplayer).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energien din for å slåss og bevege deg uten å dø i forsøket.
*   🧠 **Menneskelighet (HUM):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler hvor mye menneske du har igjen før kablene gjør deg gal).
*   ⚔️ **Handlingspoeng (AP):** `(INT + DES) / 2`. Bestemmer initiativet ditt. Hvem som slår først, slår to ganger.

### 3. Dine Ferdigheter
Starter med en basisverdi (f.eks: Sniking = SMI + INT) og forbedres ved bruk. Det er en prosentandel (%).

### 4. Handlingsresolusjon (Terningen)
Når du prøver å gjøre noe risikabelt (klatre, lyve, angripe...), vil AI-en be om et kast. Spillet kaster en usynlig **d100**. **(Husk: Terningene hater deg. Det er personlig).**

*   **Ditt Mål:** Få et tall som er **LAVERE ELLER LIKT** ferdighetsnivået ditt.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du får 30: ✅ **Suksess**. Du klatrer som en ape.
    *   Du får 80: ❌ **Bom**. Du går på trynet.
    *   **Kritisk:** Få mindre eller likt **1/5 av ferdigheten din** (eller en 01). Episk! Du utfører en ekstraordinær parkour med salto.
    *   **Tabbe:** En **99 eller 100**. Terningene har bestemt at i dag ikke er din dag. Buksene faller ned halvveis og du faller pladask.

---

## 💡 TIPS FOR Å IKKE DØ (RASKT)

*   **✍️ Vær Beskrivende:** Ikke skriv bare "jeg angriper". Skriv: *"Jeg prøver å unngå øksen hans ved å rulle på bakken og kjøre dolken min inn i ankelen hans"*. AI-en vil belønne deg.
*   **🧪 Eksperimenter:** Du er ikke begrenset til knappene. Skriv gale ting! AI-en improviserer.
*   **🎭 Rollespill:** Lev deg inn i rollen. Les beskrivelsene og opptre som karakteren din ville gjort, ikke som du ville gjort i pysjamas.

---

## ⚔️ KAMP (Til våpen!)

Når ordene ikke strekker til, er det tid for juling. Kampen er **taktisk** og fungerer med **Ticks** (tid).

### 🕹️ Hvordan det fungerer:
*   **Ticks:** Hver handling koster tid. Tunge våpen er trege (bruker mange ticks). Dolker er raske.
*   **Din Hastighet:** Avhenger av dine Handlingspoeng (AP).

### Grunnleggende Handlinger:
*   **🗡️ Angrip:** Slå med det du har trukket.
*   **🛡️ Blokker:** Du går i forsvar. Reduserer skade, men bruker Stamina.
*   **🏃 Flykt:** For feiginger (eller vise folk som vil leve).
*   **🏳️ Overgi seg:** Hvis du ser at du ikke vinner, kan du be om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacking...

### 💬 Handlinger med Fritekst (NYTT!)
Liker du ikke knapper? Skriv hva du vil gjøre som om du snakket med en levende Spillmester!
*   **Eksempler:** *"Kast ildkule på goblinen"*, *"Trekk runesverdet mitt"*, *"Bruk drikk på meg selv"*.
*   **Sceneregissør:** Kampen kommer til live. AI-en genererer miljøhendelser og reaksjoner: bjelker som faller, fiender som trekker seg tilbake, fakler som faller. Slagmarken er ikke lenger statisk!
*   **Hvis AI-en ikke forstår:** Den ber deg om å formulere på nytt. Du mister IKKE turen din!
*   **⚠️ Begrensning:** Flytting av gjenstander mellom spor (utstyr fra ryggsekk, lade ammunisjon) gjøres med **Drag & Drop** i grensesnittet, ikke med tekst.

### ⚠️ DEN GYLDNE OVERLEVELSESREGELEN
**TREKK VÅPEN FØR DU SLÅSS!**
Å trekke våpenet midt i kampen koster tid (Ticks). Hvis du blir tatt med sverdet i sliren, kommer du til å få juling så det synger mens du klønete prøver å få det ut. ELLER ENDA VERRE!, HVIS DU HAR VÅPNENE DINE I RYGGSEKKEN ISTEDENFOR I UTSTYRSSPORET (Unnskyld et øyeblikk, jeg må bare få storsverdet opp av sekken, jeg vet jeg hadde det her et sted...) 🤦‍♂️
👉 Klikk på **etiketten til det utstyrte våpenet** (høyre panel) for å trekke det. Det vil lyse grønt.

Å prøve å flytte våpen i kamp bruker tid (Ticks) og kan føre til et overraskelsesangrep, pluss at det er veldig sannsynlig at du mister turen, bommer på grunn av nervene for øksen som nærmer seg pannen din, eller at du mister det i bakken. (Kanskje det ikke var noen god idé å lage en karakter med ADHD).

---

## ✨ MAGI OG KYBERNETIKK

Avhengig av om verdenen din er "Middelalder-fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Fortryllelser
Er du trollmann? Du kan fortrylle utstyret ditt.
1.  **Lær:** Du trenger formelen i trolldomsboken din.
2.  **Kast (Drag & Drop):** Dra formelen fra listen din over på gjenstanden i inventaret.
3.  **Kostnad:** Å holde en fortryllelse aktiv **koster Mana per tur**.
4.  **Advarsel:** Hvis du går tom for mana midt i kampen, blir ildsverdet bare en rusten jernbit igjen.

### 🦾 Cyberpunk: Implantater
Vil du ha øyne med zoom eller gorillaarmer?
1.  Finn en **Teknokirurg** (NPC-tjeneste).
2.  Betal kredittene (ingenting er gratis i fremtiden).
3.  **Menneskelighetskostnad:** Hvert implantat tar en bit av sjelen din (**Menneskelighet**).
    *   Hvis du installerer for mange, blir du en **Cyberpsykose** (en morderisk brødrister med bein) og mister kontrollen over karakteren din.

---

## 🛒 BUTIKKER OG TJENESTER (SIS)

Snakk med NPC-er for å handle.
*   **AI foreslår, Du bestemmer:** Når du snakker med en kjøpmann eller helbreder, vil AI-en foreslå tjenestene deres (reparere, selge, helbrede), men en knapp for **"Se tjenester"** vil dukke opp slik at du kan bestemme når du vil gå inn i transaksjonsmodus.
*   **Pruting:** Din **Handel**-ferdighet (basert på Karisma) avgjør prisene. Hvis du er stygg eller ufordragelig, blir du lurt.
*   **Selge:** **Høyreklikk** på en gjenstand i inventaret ditt for å selge den til butikkeieren, eller dra den over ham/henne.

---

## 🎒 INVENTARHÅNDTERING (Tetris)

*   **Vekt:** Du har en bæregrense (Styrke + Størrelse). Hvis du bærer for mye skrot, går du sakte og får straff (Samlemani er ikke din venn).
*   **Paneler:**
    *   **Utstyr:** Det du har på deg.
    *   **Belte:** Rask tilgang i kamp (bruker mindre tid på å bruke drikker herfra).
    *   **Ryggsekk:** Bunnen av sekken.
*   **Flytende bruk:** Dra en drikk eller mat direkte over **fjeset ditt** (portrettet) for å innta det umiddelbart. Du kan også bruke hurtigmenyen (høyreklikk -> Bruk).

---

## 🛠️ SISTE JUSTERINGER

I menyen **Innstillinger** kan du endre på alt:
*   **🌍 Språk:** AI-en oversetter hele spillet og svarene fortløpende. Polyglot-modus aktivert.
*   **👁️ Utseende:** Skriftstørrelse og farger, så du ikke blir blind. Neonkanter og myke skygger for total innlevelse.
*   **🧠 AI-innstillinger:** Bytt modell, temperatur, osv. (Husk det vi så i begynnelsen av manualen om flagget `--advanced` hvis du er en av dem som vil fikle med alt).

---

## 🎭 VANSKELIGHETSGRAD OG HUMOR (Skreddersy din lidelse)

Før du begynner, husk at AI-en ikke bare forteller, men **tilpasser verdenen** etter dine preferanser. Disse parameterne velges når du skaper verdenen og er permanente for den verdenen:

*   **🎮 Vanskelighetsgrad (Styrt av AI):** Det er ikke bare en skademultiplikator. Spillet sier til AI-en: "Hei, vanskelighetsgraden er denne, opptre deretter".
    *   **Lett:** Du dør aldri (eller det er nesten umulig), situasjonene er enklere, prisene er billigere og fiendene er klønete. AI-en tilrettelegger hver scene slik at veien din blir en dans på roser.
    *   **Normal:** Standardbalansen.
    *   **Utfordring:** AI-en vil være nådeløs, prisene uoverkommelige og enhver feil kan bli den siste.

*   **🃏 Humortone:** Definerer hvordan AI-en snakker til deg og hvilke typer hendelser som oppstår. Selv om hver modell har sin egen tolkning av begrepet "humor", vil AI-en prøve å tilpasse seg det du velger... eller ikke:
    *   **Alvorlig:** En episk, mørk og formell fortelling.
    *   **Sarkastisk:** AI-en ler av feilene dine, kommer med stadige stikk og bruker en ironisk tone.
    *   **Hysterisk/Galskap:** Gjør deg klar for det absurde. Flyvende kuer, surrealistiske situasjoner og totalt kaos styrt av AI-ens mest skrudde logikk.

---

## 🚧 Varsel: Early Access

RolemIAster er under **aktiv utvikling**, og kokes på svak varme.
*   Du kan finne bugs (eller "uventede funksjoner").
*   Jeg legger til nye ting hver uke.
*   Tilbakemeldingen din er gull verdt! Fortell meg hva du liker og hva du liker veldig godt. (Hvis du ikke liker noe, si det også, men med kjærlighet).

Nå gå, kast initiativ og skap din legende!

<!-- source_hash: f3494f05 -->