# 🐉 Velkommen til RolemIAster!

Grip terningene dine (eller musen) og forbered deg på å oppleve eventyr der den eneste grensen er hvor vridd fantasien din er! **RolemIAster** er et uendelig rollespill drevet av kunstig intelligens som lar deg være helten (eller skurken) i dine egne historier.

---

## ⚠️ Juridisk merknad (Den kjedelige, men nødvendige delen)

**LES DETTE, ELLER DU VIL LIDE KUNGENS VREDE:**

1.  **🤖 Integrert lokal KI:** RolemIAster har sin egen digitale hjerne. Den fungerer **uten internett** og uten at du trenger å gjøre noe rart. Installer og spill!
2.  **☁️ Valgfri sky:** Hvis du foretrekker å bruke penger på eksterne KI-er (OpenAI, Gemini...), så er det ditt valg med kredittkortet ditt. Kostnadene er ditt ansvar.
3.  **🎲 Generativt kaos:** KI-en finner på historien mens den går. Hvis fortelleren blir gal og sier at det regner kuer, ikke se på oss. Utvikleren er ikke ansvarlig for galskapen modellen genererer.
4.  **🏗️ Tidlig tilgang:** Dette er under arbeid. Hvis du finner en feil, er det ikke en feil, det er en "overraskelsesfunksjon"! (Send oss tilbakemelding, vær så snill, det hjelper oss mye).

---

## 🖥️ Systemkrav og digitale hjerner (KI)

RolemIAster fungerer med **lokal kunstig intelligens**. Det betyr at PC-en din vil gjøre den harde jobben med å tenke. Du trenger ikke internett, men du trenger et grafikkort som ikke er fra dinosaurtiden. (Merk: Hvis det er kaldt i rommet ditt, fungerer dette spillet som gratis oppvarming).

### ⚙️ Begreper for nybegynnere

**VRAM (Videominne)** er drivstoffet for KI-en.
*   RolemIAster trenger å "huske" **12 000 til 16 000 ord (tokens)** for ikke å miste tråden i historien.
*   Hvis GPU-en din går tom for minne, vil spillet gå tregere enn en snegle med astma.

---

### 📊 Modellkatalog (Velg din gift)

Administrer KI-ene dine under **Innstillinger → Integrert lokal KI → Administrer modeller**.

#### 🏆 Qwen 3.5-familien — Spesielt trent for RolemIAster

Disse modellene er trent med **Veiledet finjustering (SFT)** for å mestre spillets narrative regler. De er ikke generiske modeller: De kjenner RolemIAsters JSON-kontrakt, NPC-er, inventar og kamp fra hukommelsen.

| Modell       | Størrelse | Min. VRAM | Nivå | Dom                                                                |
| :----------- | :-------- | :-------- | :--- | :----------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1.5GB    | **3GB**   | B    | ⚡ **Fartsdemonen.** Den raskeste av alle. Ideell for grunnleggende GPU-er eller for spilling uten dedikert GPU. |
| **Qwen3.5-4B** | ~2.8GB    | **4GB**   | A    | ✅ **DEN BALANSERTE.** Optimal hastighet og kvalitet. Anbefalt standardmodell for de fleste spillere. |
| **Qwen3.5-9B** | ~5.5GB    | **8GB**   | S    | 🌟 **FORTELTEREN.** Rik fortelling og overlegen koherens. For de med en RTX 3070 eller bedre. |

---

### 🎮 Rask veiledning for valg

| Grafikkortet ditt | VRAM     | Anbefalt modell | Resultat                |
| :---------------- | :------- | :-------------- | :---------------------- |
| GTX 1050/1060 / Uten GPU | 2-4GB    | **Qwen3.5-2B**  | 🆗 Knapt nok, men spillbart |
| GTX 1070/1660 / RX 580 | 4-6GB    | **Qwen3.5-4B**  | ✅ Veldig god opplevelse |
| RTX 2060/3060 / RX 6600 | 6-8GB    | **Qwen3.5-4B**  | 🚀 Raskt og presist      |
| RTX 3070/4060Ti / RX 6700 | 8-12GB   | **Qwen3.5-9B**  | 🌟 Den ideelle opplevelsen |
| RTX 3090/4080/4090 | 16GB+    | **Qwen3.5-9B**  | 👑 Maksimal kvalitet, lynraske svar |

**💡 Profftips:** La alltid **ca. 2 GB VRAM være ledig** til operativsystemet, ellers begynner Windows å gråte og lukke ting.

---

### 🚨 HJELP! PC-en min går tregt! (VRAM-problemer)

Hvis spillet tar lengre tid å svare enn din crush på WhatsApp, har du sannsynligvis gått tom for VRAM.

**Symptomer på at du har vært for smart:**
1.  **Modellen dumpes til RAM:** PC-en bruker vanlig minne i stedet for grafikkminnet. Resultat: EKSTREM TREGHET.
2.  **Lett oversvømmelse (1-2 GB):** Tar 30-60 sekunder per svar.
3.  **Moderat oversvømmelse (3-5 GB):** 2-5 minutter. Du kan gå og hente en kaffe.
4.  **Alvorlig oversvømmelse:** 10-30 minutter. Uspillbart.

#### 🛡️ Nødprotokoll
Hvis det går galt, følg disse trinnene i rekkefølge:

1.  **📉 Reduser VRAM-prosenten:** Gå til Innstillinger og reduser den til **85%**. Start på nytt og prøv.
2.  **🧹 Opprydding:** Lukk nettleseren med 40 åpne faner. De spiser opp minnet ditt.
3.  **🛑 Grensen på 70%:** Aldri gå under **70%** av tildelt VRAM.
    *   *Hvorfor?* Fordi KI-en trenger plass til å "tenke" (KV-cachen). Hvis du gir den mindre enn 70%, vil den bli blank og gi feil.
4.  **🔙 Taktisk tilbaketrekning:** Hvis ingenting fungerer, bytt til en mindre modell (gå fra 9B til 4B, eller fra 4B til 2B).

---

### ⚙️ Avansert modellkonfigurasjon ("Maksimal Frikting")

> **Ekspertmodus:** Hvis du er en proff og vil ha tilgang til avansert modellkonfigurasjon (legge til dine egne GGUF-modeller lastet ned fra HuggingFace, justere lag, osv.), må du starte spillet med kommandoen: `--advanced`.

For de som liker å trykke på knapper under **Innstillinger → Integrert lokal KI**:

| Opsjon             | Funksjon                                     | Anbefaling                                                              |
| :----------------- | :------------------------------------------- | :---------------------------------------------------------------------- |
| **GPU Layers**     | Hvor mye av modellen som lastes til grafikkortet | **-1** (Betyr "ALT". Ikke rør med mindre du vet hva du driver med)     |
| **Maksimal kontekst** | KI-ens "korttidsminne"                       | **16384 - 32768** (Mindre enn dette, og KI-en får hukommelsestap)         |
| **Temperatur**     | Kreativitet vs. galskap                      | **0.7 - 0.8** (Høyere = galere; Lavere = mer robotaktig)                |
| **Historikk RAG**  | Huske ting fra lenge siden                   | **Ja** (Uunnværlig for lange kampanjer)                                 |
| **Cache Embeddings** | Akselererer søk etter minner               | **Ja** (Gjør at det går raskere)                                        |

---

### 🔧 Feilsøking (Troubleshooting)

| Problem        | Løsning                                                                    |
| :------------- | :------------------------------------------------------------------------- |
| **Treg KI / Lag** | Sjekk at `GPU Layers` er -1. Lukk Chrome. Reduser `Contexto Máximo`. |
| **Minnefeil (OOM)** | Reduser `Contexto Máximo` eller velg en mindre modell (3B).          |
| **KI-en vrøvler / Hallusinerer** | Reduser `Temperatura` til 0.6. Hvis den fortsatt er gal, start applikasjonen på nytt. |

---

### 🌐 Alternative leverandører (Kun for eksperter)

> **Merk:** Den lokale KI-en som følger med spillet er mer enn nok. Dette er kun for avanserte eller modige brukere.

*   **Eksterne lokale motorer:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne "nerdete" modeller, kan du bruke dem.
*   **Sky-API-er (betales):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Krever internett og penger.
    *   Konfigurer det under: **Innstillinger → KI → Legg til ny leverandør**.

---

### 🌍 Hvordan spille? (Multiverset og du)

Når du åpner spillet, har du to veier:

1.  **🆕 Nytt eventyr**: Skap din legende fra bunnen av. Spillet vil be om **Navn, Yrke, Fysisk beskrivelse, Psykologisk beskrivelse og Bakgrunn/Pretekst** for historien din. I tillegg vil du velge **Vanskelighetsgrad** og **Humoristisk tone** som styrer kampanjen.
2.  **💾 Fortsett spill**: RolemIAster **lagrer i sanntid**. Her er det ingen "last før du dør" eller tilbake. Hver avgjørelse, hver tabbe og hvert sår blir brent inn i historien. Det er en **UTFORDRING**: det du gjør, er gjort. Lev med konsekvensene... eller dø med dem.

RolemIAster er ikke et isolert spill; det er et **Vedvarende multivers**.
*   **Uendelige verdener:** Skap dine egne universer (**Middelalderfantasi** eller **Cyberpunk**) med sin egen lore.
*   **Uendelige karakterer:** Innenfor hver verden kan du ha alle heltene du ønsker.
*   **Delt tidslinje:** Vær forsiktig! Det en karakter gjør, påvirker de andres verden. KI-en er klar over dine andre helter og vil gjenkjenne dem som innbyggere i verden.
*   **KI med "sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som KI-ens "varsler", og gir den minner om verden, hvem som er med deg, hvor du er og hva som nettopp skjedde, slik at historien blir 100% koherent.

### Grensesnittet (Din kommandosentral)

*   **Venstre panel (DU):** Ditt karakterark. Liv, mana, ferdigheter og hvor kjekk du er (Karisma).
*   **Midtpanel (HISTORIEN):**
    *   **Oppe:** Hvor fortelleren forteller hva som skjer.
    *   **Nede:** Dine beslutningsknapper og tekstboksen for å skrive hva du vil gjøre.
*   **Høyre panel (DINE TING):** Inventar og utstyr. Digitale Diogeners paradis.

---

## 📜 Spilleregler (Ja, det finnes regler)

RolemIAster bruker et klassisk og robust d100 (hundre-sidig terning)-system.

### 1. Dine attributter (Det som definerer deg)
KI-en genererer attributtene dine basert på konteksten, yrket og beskrivelsen du har oppgitt. Når de er generert, har du **10 EKSTRA POENG** å fordele etter eget ønske.
*   **Trinnvise kostnader:** Å øke et attributt opp til 14 koster 1 poeng. Fra 15 til 16 koster det 2 poeng. Fra 17 og oppover koster det 3 poeng! Tenk nøye gjennom hvor du legger musklene.

*   💪 **Styrke (STY):** Din rene fysiske kraft. Påvirker nærkamp og bæreevne.
*   ❤️ **Konstitusjon (KON):** Din utholdenhet. For å tåle slag, sykdommer og gifter.
*   🐘 **Størrelse (STØ):** Din omkrets. Stor og tung, eller liten og smidig.
*   🏃 **Behendighet (BEH):** Smidighet, sikte og ikke å snuble i egne føtter.
*   🧠 **Intelligens (INT):** Læring, husking og problemløsning.
*   🔮 **Kraft (KRA):** Din sjel, hell, viljestyrke og magiske reserve.
*   😎 **Karisma (KAR):** Lederskap, attraktivitet og evnen til å lure (eller forføre) folk.

### 2. Raske matematiske utregninger (Avledede egenskaper)
Motoren beregner disse tallene automatisk basert på dine attributter:

*   🩸 **Liv (LV):** `CON * 10`. Hvis det når 0... vel, du vet. D.
*   ✨ **Mana (MA):** `(POD * 10) + INT`. Drivstoffet for dine magiske triks. Uten mana, ingen triks. (En magiker uten mana er bare en fyr i kappe som cosplayer).
*   ⚡ **Utholdenhet (UT):** `((CON+FUE+DES)/3)*10 + POD`. Din energi til å kjempe og bevege deg uten å dø på forsøket.
*   🧠 **Menneskelighet (MEN):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler hvor mye du har igjen av menneske før ledningene gjør deg gal).
*   ⚔️ **Handlingspoeng (HP):** `(INT + DES) / 2`. Bestemmer din initiativ. Den som slår først, slår to ganger.

### 3. Dine ferdigheter
Starter med en grunnverdi (f.eks. Snik = BEH + INT) og forbedres ved bruk. Det er en prosentandel (%).

### 4. Løsning av handlinger (Terningen)
Når du prøver å gjøre noe risikabelt (klatre, lyve, angripe ...), vil KI-en be deg om et terningkast. Spillet kaster en usynlig **d100**. **(Husk: Terningene hater deg. Det er personlig).**

*   **Ditt mål:** Få et tall **LIKT ELLER MINDRE** enn ferdighetsnivået ditt.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du slår 30: ✅ **Suksess**. Klatrer som en apekatt.
    *   Du slår 80: ❌ **Feil**. Du får deg en smell.
    *   **Kritisk:** Slå mindre enn eller lik **1/5 av ferdigheten** (eller en 01). Episk! Du gjør ekstraordinær parkour med salto.
    *   **Tabbe:** En **99 eller 100**. Terningene har bestemt at i dag er ikke din dag. Buksa di faller ned midtveis og du faller med ansiktet først.

---

## 💡 Tips for å ikke dø (raskt)

*   **✍️ Vær beskrivende:** Ikke skriv bare "angriper". Skriv: *"Jeg prøver å unngå øksen hans ved å rulle langs bakken og stikker ham i ankelen med dolken min."* KI-en vil belønne deg.
*   **🧪 Eksperimenter:** Du er ikke begrenset til knappene. Skriv galskap! KI-en vil improvisere.
*   **🎭 Rollespill:** Gå inn i rollen. Les beskrivelsene og oppfør deg som karakteren din ville gjort, ikke som du ville gjort i pysjamas.

---

## ⚔️ Kamp (Til våpen!)

Når ordene svikter, kommer slåsskampen. Kampen er **taktisk** og fungerer i **Ticks** (tid).

### 🕹️ Slik fungerer det:
*   **Ticks:** Hver handling koster tid. Tunge våpen er trege (bruker mange ticks). Dolker er raske.
*   **Din hastighet:** Avhenger av dine Handlingspoeng (HP).

### Grunnleggende handlinger:
*   **🗡️ Angripe:** Slå til med det du har dratt.
*   **🛡️ Blokker:** Du går i forsvar. Reduserer skade, men bruker Utholdenhet.
*   **🏃 Flykte:** Av feiginger (eller kloke folk som vil leve).
*   **🏳️ Overgi seg:** Hvis du ser at du ikke vinner, kan du be om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacking ...

### 💬 Handlinger med fri tekst (NYTT!)
Liker du ikke knappene? Skriv hva du vil gjøre som om du snakket med en levende spilleder!
*   **Eksempler:** *"Kast en ildkule på goblinen"*, *"Dra mitt runerune sverd"*, *"Bruk en drikk på meg"*.
*   **Sceneleder:** Kampen blir nå levende. KI-en genererer miljøhendelser og reaksjoner som beriker fortellingen: fallende bjelker, fiender som trekker seg tilbake, fallende fakler. Kamparenaen er ikke lenger statisk!
*   **Hvis KI-en ikke forstår:** Den vil be deg om å omformulere. Din tur går IKKE tapt!
*   **⚠️ Begrensning:** Å flytte objekter mellom plasser (utstyre fra ryggsekk, lade ammunisjon) gjøres med **Dra og slipp** i grensesnittet, ikke via tekst.

### ⚠️ GULLREGEL FOR OVERLEVELSE
**DRA FØR DU SLÅSS!**
Å dra våpenet midt i kampen koster tid (Ticks). Hvis du blir tatt med sverdet i sliren, får du juling til du blir ID-kortet mens du prøver å dra det klumsete ut. ELLER VERRE!, HVIS DU HAR VÅPNENE I RYGGSEKKEN I STEDET FOR I UTSTYRSPLASSEN (Unnskyld meg et øyeblikk, jeg må hente det store sverdet fra sekken, jeg vet jeg hadde det et sted ... et sted) 🤦‍♂️
👉 **Klikk på etiketten til det utstyrte våpenet** (høyre panel) for å dra det. Det vil lyse grønt.

Å prøve å flytte våpen i kamp koster tid (Ticks) og kan resultere i et overraskelsesangrep, i tillegg er det svært sannsynlig at du mister turen, at du feiler på grunn av nervene fra øksen som nærmer seg øyebrynet ditt, eller at du mister det på bakken. (Kanskje det ikke var en god idé å lage en karakter med ADHD)

---

## ✨ Magi og kybernetikk

Avhengig av om verdenen din er "Middelalderfantasi" eller "Cyberpunk":

### 🧙‍♂️ Fantasi: Fortryllelser
Er du en trollmann? Du kan fortrylle utstyret ditt.
1.  **Lær:** Du trenger formelen i grimoaret ditt.
2.  **Kast (Dra og slipp):** Dra formelen fra listen din over objektet i inventaret ditt.
3.  **Kostnad:** Å holde en fortryllelse aktiv **bruker Mana per tur**.
4.  **Merk:** Hvis du går tom for mana midt i kampen, blir flammestålet til et rustent stykke jern igjen.

### 🦾 Cyberpunk: Implantater
Vil du ha øyne med zoom eller gorilla-armer?
1.  Finn en **Tekno-kirurg** (NPC for tjeneste).
2.  Betal kreditene (ingenting er gratis i fremtiden).
3.  **Menneskelighet Kostnad:** Hvert implantat koster deg et stykke av sjelen din (**Menneskelighet**).
    *   Hvis du setter inn for mange, vil du bli en **Cyberpsykopat** (en morderisk brødrister på bein) og miste kontrollen over karakteren din.

---

## 🛒 Butikker og tjenester (SIS)

Snakk med NPC-er for å handle.
*   **KI foreslår, du bestemmer:** Når du snakker med en kjøpmann eller healer, vil KI-en foreslå tjenestene deres (reparere, selge, helbrede), men en knapp for **"Se tjenester"** vil dukke opp slik at du kan bestemme når du går inn i transaksjonsmodus.
*   **Pruting:** Din **Handel**-ferdighet (basert på Karisma) bestemmer prisene. Hvis du er stygg eller uvennlig, vil du bli lurt.
*   **Selge:** **Høyreklikk** på et objekt i inventaret ditt for å selge det til selgeren, eller dra det over ham.

---

## 🎒 Inventarhåndtering (Tetris)

*   **Vekt:** Du har en bæreevnelimit (Styrke + Størrelse). Hvis du bærer for mye skrapmetall, vil du gå tregt og med straff (Diogenes er ikke din venn).
*   **Paneler:**
    *   **Utstyr:** Det du har på deg.
    *   **Belte:** Rask tilgang i kamp (bruker mindre tid på å bruke drikker herfra).
    *   **Ryggsekk:** Bunnen av sekken.
*   **Flytende bruk:** Dra en drikk eller mat direkte over **ansiktet ditt** (portrettet) for å konsumere den umiddelbart. Du kan også bruke kontekstmenyen (høyreklikk -> Bruk).

---

## 🛠️ Siste justeringer

I **Innstillinger**-menyen kan du justere alt:
*   **🌍 Språk:** KI-en vil oversette hele spillet og svarene dine på farten. Poliglotmodus aktivert.
*   **👁️ Utseende:** Skriftstørrelse og farger, for å unngå å bli blind. Neonkanter og mykgjorte skygger for full fordypning.
*   **🧠 KI-justeringer:** Bytt modell, temperatur, osv. (Husk hva vi har sett i begynnelsen av manualen om flagget `--advanced` hvis du er en av dem som vil røre på alt).

---

## 🎭 Vanskelighetsgrad og humor (Tilpass din lidelse)

Før du begynner, husk at KI-en ikke bare forteller, men **justerer verden** etter dine preferanser. Disse parameterne velges når du lager verdenen og er permanente for den verdenen:

*   **🎮 Vanskelighetsgrad (styrt av KI):** Det er ikke en enkel skademultiplikator. Spillet sier til KI-en: "Hei, vanskelighetsgraden er slik, opptre deretter."
    *   **Lett:** Du vil aldri dø (eller det vil være nesten umulig), situasjonene er enklere, prisene er billigere og fiendene er klønete. KI-en vil resonnere hver scene for å gjøre veien din til en rosehage.
    *   **Normal:** Standardbalansen.
    *   **Utfordring:** KI-en vil være nådeløs, prisene uoverkommelige og enhver feil kan være din siste.

*   **🃏 Humoristisk tone:** Definerer hvordan KI-en snakker til deg og hvilke typer hendelser som skjer. Selv om hver modell har sin egen måte å tolke konseptet "humor" på, vil KI-en prøve å tilpasse seg det du velger... eller ikke:
    *   **Seriøs:** En episk, mørk og formell fortelling.
    *   **Sarkastisk:** KI-en vil le av feilene dine, kaste konstante stikk og bruke en ironisk tone.
    *   **Vrangforestilling:** Forbered deg på det absurde. Flyvende kuer, surrealistiske situasjoner og totalt kaos styrt av KI-ens mest forvrengte logikk.

---

## 🚧 Merknad: Tidlig tilgang

RolemIAster er under **aktiv utvikling**, og kokes sakte.
*   Du kan finne feil (eller "uventede funksjoner").
*   Jeg legger til nye ting hver uke.
*   Tilbakemeldingen din er verdt gull! Fortell meg hva du liker og hva du liker veldig godt. (Hvis du ikke liker noe, fortell meg det også, men med kjærlighet).

Gå nå, slå initiativet og skap din legende!

<!-- source_hash: 9af75cff -->