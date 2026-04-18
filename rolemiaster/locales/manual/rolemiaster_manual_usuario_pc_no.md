# 🐉 Velkommen til RolemIAster!

Grip terningene dine (eller musepekeren) og forbered deg på eventyr der den eneste grensen er hvor vridt fantasien din er! **RolemIAster** er et AI-drevet, uendelig rollespill som lar deg være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK MERKNAD (Den kjedelige, men nødvendige delen)

**LES DETTE ELLER LID UNDER TERNINGENES VREDE:**

1.  **🤖 Innebygd Lokal AI:** RolemIAster bringer sin egen digitale hjerne. Den fungerer **uten internett** og uten at du trenger å røre noe rart. Installer og spill!
2.  **☁️ Valgfri Sky:** Hvis du foretrekker å bruke penger på eksterne AI-er (OpenAI, Gemini...), er det ditt valg med kredittkortet ditt. Kostnadene er ditt ansvar.
3.  **🎲 Generativt Kaos:** AI-en finner på historien underveis. Hvis fortelleren blir gal og sier at det regner kuer, ikke se på oss. Utvikleren er ikke ansvarlig for galskapen modellen genererer.
4.  **🏗️ Tidlig Tilgang:** Dette er under utvikling. Hvis du finner en feil, er det ikke en feil, det er en "overraskelsesfunksjon"! (Send oss tilbakemelding, vær så snill, det hjelper oss mye).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyr at PC-en din vil gjøre den tunge jobben med å tenke. Du trenger ikke internett, men du trenger et skjermkort som ikke er fra dinosaurenes tid. (Merk: Hvis det er kaldt på rommet ditt, fungerer dette spillet som gratis oppvarming).

### ⚙️ Konsepter for ikke-initierte

**VRAM (Videominne)** er drivstoffet for AI-en.
*   Takket være **TurboQuant**, kan RolemIAster nå huske **over 100 000 ord (tokens)** — nesten tredoblet fra før — uten å krasje grafikkortet ditt.
*   Hvis GPU-en din går tom for minne, vil spillet gå saktere enn en snegle med astma.

---

### 📊 MODELLKATALOG (Velg din gift)

Administrer AI-ene dine i **Innstillinger → Innebygd Lokal AI → Administrer Modeller**.

#### 🏆 Qwen 3.5-familien — Spesialtrent for RolemIAster

Disse modellene er trent med **Supervised Fine-Tuning (SFT)** for å mestre spillets narrative regler. De er ikke generiske modeller: de kan navnet på RolemIAsters JSON-kontrakt, NPC-ene, inventaret og kampen utenat.

| Modell       | Størrelse | Min. VRAM | Nivå | Dom                                                               |
| :----------- | :-------- | :-------- | :--- | :---------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1.5GB    | **3GB**   | B    | ⚡ **Sprintaren.** Den raskeste av alle. Ideell for grunnleggende GPU-er eller for å spille uten dedikert GPU. |
| **Qwen3.5-4B** | ~2.8GB    | **4GB**   | A    | ✅ **BALANSERTEN.** Optimal hastighet og kvalitet. Anbefalt standardmodell for de fleste spillere. |
| **Qwen3.5-9B** | ~5.5GB    | **8GB**   | S    | 🌟 **Fortelleren.** Rik narrativ og overlegen konsistens. For de med en RTX 3070 eller bedre. |

---

### 🎮 RASK VELGERVEILEDNING

| Skjermkort ditt | VRAM | Anbefalt Modell | Resultat                                |
| :-------------- | :--- | :-------------- | :-------------------------------------- |
| GTX 1050/1060 / Ingen GPU | 4GB  | **Qwen3.5-2B**  | 🆗 Knapt nok, men spillbart, veldig knapt... |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**  | ✅ God opplevelse                         |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**  | 🚀 Rask og presis                         |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**  | 🌟 Den ideelle opplevelsen               |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**  | 👑 Maksimal kvalitet, lynraske svar      |

**💡 Profftips:** La alltid ca. **2 GB VRAM være ledig** for operativsystemet, ellers vil Windows begynne å gråte og lukke ting.

---

### 🚨 HJELP! PC-EN MIN ER SAKTE! (VRAM-problemer)

Hvis spillet tar lengre tid å svare enn din forelskelse på WhatsApp, har du sannsynligvis gått tom for VRAM.

**Symptomer på at du har vært for smart:**
1.  **Modellen veltes til RAM:** PC-en bruker vanlig minne i stedet for grafikkminne. Resultat: EKSTREM SAKTHET.
2.  **Lett overflyt (1-2GB):** Tar 30-60 sekunder per svar.
3.  **Moderat overflyt (3-5GB):** 2-5 minutter. Du kan gå og hente en kaffe.
4.  **Alvorlig overflyt:** 10-30 minutter. Uspillbart.

#### 🛡️ Nødprotokoll
Hvis det går galt, følg disse trinnene i rekkefølge:

1.  **📉 Senk VRAM %:** Gå til Innstillinger og senk den til **85%**. Start på nytt og prøv.
2.  **🧹 Rengjøring:** Lukk den nettleseren med 40 åpne faner. De spiser minnet ditt.
3.  **🛑 Grensen på 70%:** Gå aldri under **70%** av tildelt VRAM.
    *   *Hvorfor?* Fordi AI-en trenger plass til å "tenke" (KV-cachen). Hvis du gir den mindre enn 70%, vil den bli blank og gi feilmelding.
4.  **🔙 Taktisk tilbaketrekning:** Hvis ingenting fungerer, gå ned til en mindre modell (fra 9B til 4B, eller fra 4B til 2B).

---

### ⚙️ AVANSERT MODELLINNSTILLING ("Maksimal Frikking")

> **EKSPERTMODUS:** Hvis du er en proff og vil ha tilgang til avansert modellkonfigurasjon (legge til dine egne GGUF-modeller lastet ned fra HuggingFace, justere lag, osv.), må du starte spillet med kommandoen: `--advanced`.

For de som liker å trykke på knapper i **Innstillinger → Innebygd Lokal AI**:

| Valg             | Funksjon                                    | Anbefaling                                           |
| :--------------- | :------------------------------------------ | :--------------------------------------------------- |
| **GPU Layers**   | Hvor mye av modellen som lastes inn på grafikkortet | **-1** (Betyr "ALT". Ikke rør dette med mindre du vet hva du gjør) |
| **Maks Kontekst** | AI-ens "korttidsminne"                      | **16384 - 32768** (Mindre enn dette, og AI-en blir glemsk) |
| **Temperatur**   | Kreativitet vs. galskap                     | **0.7 - 0.8** (Høyere = villere; Lavere = mer robotaktig) |
| **Historikk RAG** | Huske ting fra lenge siden                  | **Ja** (Nødvendig for lange kampanjer)               |
| **Cache Embeddings** | Akselererer minnesøk                     | **Ja** (Gjør det raskere)                            |

---

### 🔧 FEILSØKING (Troubleshooting)

| Problem             | Løsning                                                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| **Treg AI / Lag**   | Verifiser at `GPU Layers` er -1. Lukk Chrome. Senk `Contexto Máximo`.                                       |
| **Minnefeil (OOM)** | Reduser `Contexto Máximo` eller velg en mindre modell (3B).                                                          |
| **AI-en svimes/hallusinerer** | Senk `Temperatura` til 0.6. Hvis den fortsatt er gal, start programmet på nytt.                               |

---

### 🌐 ALTERNATIVE LEVERANDØRER (Kun for eksperter)

> **Merk:** Den lokale AI-en som følger med spillet er mer enn nok. Dette er bare for avanserte eller modige brukere.

*   **Eksterne Lokale Motorar:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne freaky modeller, kan du bruke dem.
*   **Sky-APIer (Betalt):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Krever internett og penger.
    *   Konfigurer i: **Innstillinger → AI → Legg til Ny Leverandør**.

---

### 🌍 HVORDAN SPILLE? (Multiverset og Deg)

Når du åpner spillet, har du to veier:

1.  **🆕 Nytt Eventyr**: Skap din egen legende fra bunnen av. Spillet vil be om **Navn, Yrke (Profesjon), Fysisk Beskrivelse, Psykologisk Beskrivelse og Bakgrunn/Pretekst** for historien din. I tillegg vil du velge **Vanskelighetsgrad** og **Humortone** som vil styre kampanjen.
2.  **💾 Fortsett Spill**: RolemIAster **lagrer i sanntid**. Her er det ingen "last før du dør" eller vei tilbake. Hver avgjørelse, hver feil og hvert sår blir brent inn i historien. Det er en **UTFORDRING**: det du gjør, er gjort. Lev med konsekvensene... eller dø med dem.

RolemIAster er ikke et isolert spill; det er et **Vedvarende Multivers**.
*   **Uendelige Verdener:** Skap dine egne universer (**Middelalderfantasi** eller **Cyberpunk**) med sin egen lore.
*   **Uendelige Karakterer:** Innenfor hver verden kan du ha så mange helter du vil.
*   **Delt Tidslinje:** Pass på! Det en karakter gjør, påvirker de andres verden. AI-en er klar over dine andre helter og vil gjenkjenne dem som innbyggere i verden.
*   **AI med "Sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som AI-ens "varsler", og gir den minner om verden, hvem som følger deg, hvor du er og hva som nettopp har skjedd, slik at historien blir 100 % koherent.

### Grensesnittet (Din kommandopult)

*   **Venstre Panel (DU):** Karakterarket ditt. Liv, mana, ferdigheter og hvor kjekk du er (Karisma).
*   **Midt Panel (HISTORIEN):**
    *   **Oppe:** Der fortelleren forteller hva som skjer.
    *   **Nede:** Dine valgknapper og tekstboksen for å skrive hva du vil gjøre.
*   **Høyre Panel (DINE TING):** Inventar og utstyr. Et paradis for digitale diogene.

---

## 📜 SPILLEREGLER (Ja, det er regler)

RolemIAster bruker et klassisk og robust d100 (hundre-siders terning) system.

### 1. Dine Attributter (Det som definerer deg)
AI-en genererer dine attributter basert på konteksten, yrket og beskrivelsen du har gitt. Når de er generert, har du **10 EKSTRA POENG** å fordele etter eget ønske.
*   **Trinnvise Kostnader:** Å øke et attributt opp til 14 koster 1 poeng. Fra 15 til 16 koster det 2 poeng. Fra 17 koster det 3 poeng! Tenk nøye over hvor du legger inn musklene.

*   💪 **Styrke (STR):** Din rene fysiske kraft. Påvirker nærkamp-skade og din bæreevne.
*   ❤️ **Konstitusjon (KON):** Din utholdenhet. For å tåle slag, sykdommer og gifter.
*   🐘 **Størrelse (SIZ):** Din omfang. Stor og tung, eller liten og smidig.
*   🏃 **Behendighet (DEX):** Smidighet, presisjon og ikke å snuble i dine egne føtter.
*   🧠 **Intelligens (INT):** Lære, huske og løse gåter.
*   🔮 **Kraft (POW):** Din sjel, din flaks, viljestyrke og din magiske reserve.
*   😎 **Karisma (CHA):** Lederskap, attraktivitet og evnen til å lure (eller forføre) folk.

### 2. Raske Matematikk (Avledede Egenskaper)
Motoren beregner disse tallene automatisk basert på dine attributter:

*   🩸 **Liv (HP):** `CON * 10`. Hvis det når 0... vel, du vet. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Drivstoffet for dine magiske triks. Uten mana, ingen triks. (En trollmann uten mana er bare en fyr i kappe som driver med cosplay).
*   ⚡ **Utholdenhet (STA):** `((CON+FUE+DES)/3)*10 + POD`. Din energi til å kjempe og bevege deg uten å dø i forsøket.
*   🧠 **Menneskelighet (HUM):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler hvor mye av deg som er igjen av menneske før ledningene gjør deg gal).
*   ⚔️ **Handlingspoeng (AP):** `(INT + DES) / 2`. Bestemmer din initiativ. Den som slår først, slår to ganger.

### 3. Dine Ferdigheter
Starter med en grunnbaseverdi (f.eks. Sniking = DEX + INT) og forbedres ved bruk. Det er en prosentandel (%).

### 4. Løsning av Handlinger (Terningen)
Når du prøver å gjøre noe risikabelt (klatre, lyve, angripe...), vil AI-en be deg om en terningkast. Spillet kaster en usynlig **d100**. **(Husk: Terningene hater deg. Det er personlig).**

*   **Ditt Mål:** Å slå et tall **LIKT ELLER MINDRE** enn ferdighetsnivået ditt.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du slår en 30: ✅ **Suksess**. Du klatrer som en ape.
    *   Du slår en 80: ❌ **Feil**. Du slår deg.
    *   **Kritisk:** Å slå likt eller mindre enn **1/5 av ferdigheten din** (eller en 01). Episk! Du gjør en ekstraordinær parkour med et spinn.
    *   **Tabbe:** En **99 eller 100**. Terningene har bestemt at i dag er ikke din dag. Buksene dine faller ned midtveis og du faller på ansiktet.

---

## 💡 TIPS FOR Å IKKE DØ (RASKT)

*   **✍️ Vær Beskrivende:** Ikke bare skriv "angriper". Skriv: *"Jeg prøver å unngå øksen hans ved å rulle langs bakken og stikker dolken min i ankelen hans."* AI-en vil belønne deg.
*   **🧪 Eksperimenter:** Du er ikke begrenset til knappene. Skriv galskap! AI-en vil improvisere.
*   **🎭 Rollespill:** Kom inn i rollen. Les beskrivelsene og oppfør deg som karakteren din ville gjort, ikke som du ville gjort i pysjamas.

---

## ⚔️ KAMP (Til våpen!)

Når ordene svikter, kommer tiden for slag. Kamp er **taktisk** og fungerer etter **Ticks** (tid).

### 🕹️ Slik fungerer det:
*   **Ticks:** Hver handling koster tid. Tunge våpen er trege (bruker mange ticks). Dolker er raske.
*   **Din Hastighet:** Avhenger av dine Handlingspoeng (AP).

### Grunnleggende Handlinger:
*   **🗡️ Angripe:** Slå med det du har trukket.
*   **🛡️ Blokker:** Du går i forsvar. Reduserer skade, men bruker Utholdenhet.
*   **🏃 Flykte:** Fra feiginger (eller kloke som vil leve).
*   **🏳️ Overgi deg:** Hvis du ser at du ikke vinner, kan du be om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacking...

### 💬 Handlinger med Fri Tekst (NYTT!)
Liker du ikke knappene? Skriv hva du vil gjøre som om du snakket med en ekte Game Master!
*   **Eksempler:** *"Kast ildkule på goblinen"*, *"Trekk sverdet mitt"*, *"Bruk potion på meg"*.
*   **Sceneleder:** Kampen blir nå levende. AI-en genererer miljøhendelser og reaksjoner som beriker narrativet: bjelker som faller, fiender som trekker seg tilbake, fakler som faller. Kamparenaen er ikke lenger statisk!
*   **Hvis AI-en ikke forstår:** Den vil be deg om å omformulere. Din tur går IKKE tapt!
*   **⚠️ Begrensning:** Å flytte objekter mellom spor (utstyre fra ryggsekk, laste ammunisjon) gjøres med **Dra og Slipp** i grensesnittet, ikke via tekst.

### ⚠️ GULLREGEL FOR OVERLEVELSE
**TREKK VÅPEN FØR DU SLÅSS!**
Å trekke våpenet midt i kampen koster tid (Ticks). Hvis du blir tatt med sverdet i sliren, vil du få juling mens du prøver å trekke det klønete. ELLER VERRE!, HVIS DU HAR VÅPNENE DINE I RYGGSEKKEN I STEDEN FOR I UTSTYRSSPORET (Unnskyld et øyeblikk, jeg må hente sverd fra ryggsekken, jeg vet jeg hadde det her... et sted...) 🤦‍♂️
👉 Klikk på **taggen til det utstyrte våpenet** (høyre panel) for å trekke det. Det vil lyse grønt.

Å forsøke å flytte våpen i kamp koster tid (Ticks) og kan resultere i et overraskelsesangrep, i tillegg er det svært sannsynlig at du mister turen, at du feiler på grunn av nervene fra øksen som nærmer seg mellom øyenbrynene dine, eller at du mister det på bakken. (Kanskje det ikke var en god idé å lage en karakter med ADHD)

---

## ✨ MAGI OG CYBERNETIKK

Avhengig av om verden din er "Middelalderfantasi" eller "Cyberpunk":

### 🧙‍♂️ Fantasi: Fortryllelser
Er du en magiker? Du kan fortrylle utstyret ditt.
1.  **Lær:** Du trenger trolldommen i din grimoire.
2.  **Kast (Dra og Slipp):** Dra trolldommen fra listen din over objektet i inventaret ditt.
3.  **Kostnad:** Å holde en fortryllelse aktiv **bruker Mana per tur**.
4.  **Advarsel:** Hvis du går tom for mana midt i kampen, blir flammesverdet igjen et rustent jernstykke.

### 🦾 Cyberpunk: Implantater
Vil du ha øyne med zoom eller ape-armer?
1.  Finn en **Teknokirurg** (NPC for tjenester).
2.  Betal kreditorene (ingenting er gratis i fremtiden).
3.  **Menneskelighet Kostnad:** Hvert implantat koster deg en bit av sjelen din (**Menneskelighet**).
    *   Hvis du setter inn for mange, vil du bli en **Cyberpsykose** (en morderisk brødrister med bein) og miste kontrollen over karakteren din.

---

## 🛒 BUTIKKER OG TJENESTER (SIS)

Snakk med NPC-er for å handle.
*   **AI Foreslår, Du Bestemmer:** Når du snakker med en kjøpmann eller helbreder, vil AI-en foreslå deres tjenester (reparere, selge, helbrede), men en "Se Tjenester"-knapp vil dukke opp slik at du kan bestemme når du skal gå inn i transaksjonsmodus.
*   **Pruting:** Din **Handels**-ferdighet (basert på Karisma) bestemmer prisene. Hvis du er stygg eller usympatisk, vil du bli lurt.
*   **Selge:** Høyreklikk på et objekt i inventaret ditt for å selge det til kjøpmannen eller dra det over ham.

---

## 🎒 INVENTARHÅNDTERING (Tetris)

*   **Vekt:** Du har en lastegrense (Styrke + Størrelse). Hvis du bærer for mye skrap, vil du gå sakte og bli straffet (Diogenes er ikke din venn).
*   **Paneler:**
    *   **Utstyr:** Det du har på deg.
    *   **Belte:** Rask tilgang i kamp (koster mindre tid å bruke potions herfra).
    *   **Ryggsekk:** Bunnen av sekken.
*   **Flytende Bruk:** Dra en potion eller mat direkte over **ansiktet ditt** (portrettet) for å konsumere den umiddelbart. Du kan også bruke hurtigmenyen (høyreklikk -> Bruk).

---

## 🛠️ SLUTTJUSTERINGER

I **Innstillinger**-menyen kan du justere alt:
*   **🌍 Språk:** AI-en vil oversette hele spillet og svarene dine til flytende språk. Flerspråklig modus aktivert.
*   **👁️ Utseende:** Skriftstørrelse og farger, slik at du ikke blir blind. Neonlys og myke skygger for total fordypning.
*   **🧠 AI Innstillinger:** Bytt modell, temperatur, osv. (Husk hva vi har sett i begynnelsen av manualen om `--advanced` flagget hvis du er en av dem som vil røre alt).

---

## 🎭 VANSKELIGHET OG HUMOR (Tilpass ditt lidelse)

Før du starter, husk at AI-en ikke bare forteller, men **justerer verden** i henhold til dine preferanser. Disse parameterne velges når du oppretter verden, og er permanente for den verdenen:

*   **🎮 Vanskelighetsgrad (AI-styrt):** Det er ikke bare en skademultiplikator. Spillet sier til AI-en: "Hei, vanskelighetsgraden er denne, opptre deretter."
    *   **Lett:** Du vil aldri dø (eller det vil være nesten umulig), situasjonene er enklere, prisene er billigere, og fiendene er klønete. AI-en vil resonnere hver scene for å gjøre veien din til en rosehage.
    *   **Normal:** Standardbalansen.
    *   **Utfordring:** AI-en vil være nådeløs, prisene urimelige, og enhver feil kan være den siste.

*   **🃏 Humortone:** Definerer hvordan AI-en snakker til deg og hvilke typer hendelser som skjer. Selv om hver modell har sin egen måte å tolke konseptet "humor" på, vil AI-en prøve å tilpasse seg det du velger... eller ikke:
    *   **Alvorlig:** En episk, mørk og formell fortelling.
    *   **Sarkastisk:** AI-en vil le av feilene dine, kaste konstante spydigheter til deg og bruke en ironisk tone.
    *   **Vanvittig:** Gjør deg klar for det absurde. Flyvende kuer, surrealistiske situasjoner og totalt kaos styrt av AI-ens mest vridde logikk.

---

## 🚧 Merknad: Tidlig Tilgang

RolemIAster er under **aktiv utvikling**, kokt langsomt.
*   Du kan finne feil (eller "uventede funksjoner").
*   Jeg legger til nye ting hver uke.
*   Din tilbakemelding er gull verdt! Fortell meg hva du liker og hva du liker veldig godt. (Hvis du ikke liker noe, fortell meg det også, men med kjærlighet).

Gå nå, kast initiativ og skap din legende!

<!-- source_hash: 4b8ac77b -->