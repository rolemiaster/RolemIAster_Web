Her er oversættelsen til dansk:

# 🐉 Velkommen til RolemIAster!

Grib dine terninger (eller din mus) og gør dig klar til eventyr, hvor den eneste grænse er, hvor skør din fantasi er! **RolemIAster** er et uendeligt rollespil drevet af Kunstig Intelligens, der lader dig være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK ANSVARSFRASKRIVELSE (Den kedelige, men nødvendige del)

**LÆS MIG ELLER MÆRK TERNINGERNES VREDE:**

1.  **🤖 Integreret Lokal AI:** RolemIAster medbringer sin egen digitale hjerne. Det fungerer **uden internet** og uden at du skal pille ved noget mærkeligt. Installer og spil!
2.  **☁️ Valgfri Cloud:** Hvis du foretrækker at bruge penge på eksterne AI'er (OpenAI, Gemini...), er det op til dig og dit kreditkort. Omkostningerne er din sag.
3.  **🎲 Generativt Kaos:** AI'en opfinder historien løbende. Hvis fortælleren bliver skør og siger, at det regner med køer, skal du ikke kigge på os. Udvikleren er ikke ansvarlig for den galskab, modellen genererer.
4.  **🏗️ Early Access:** Dette er under opbygning. Hvis du finder en bug, er det ikke en fejl, det er en overraskelses-"feature"! (Send os gerne feedback, det hjælper os meget).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyder, at din PC vil gøre det hårde tænkearbejde. Du behøver ikke internet, men du har brug for et grafikkort, der ikke er fra dinosaurernes tid. (Bemærk: Hvis der er koldt på dit værelse, fungerer dette spil som gratis opvarmning).

### ⚙️ Begreber for nybegyndere

**VRAM (Videohukommelse)** er benzinen til AI'en.
*   RolemIAster har brug for at "huske" fra **12.000 til 16.000 ord (tokens)** for ikke at tabe tråden i historien.
*   Hvis din GPU løber tør for hukommelse, vil spillet køre langsommere end en snegl med astma.

---

### 📊 MODELKATALOG (Vælg din gift)

Administrer dine AI'er i **Indstillinger → Integreret Lokal AI → Administrer Modeller**.

#### 🏆 Qwen 2.5 Familien (La crème de la crème)

| Model | Størrelse | Min. VRAM | Tier | Dom |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Praktikanten.** Gør det okay, men bed den ikke om at skrive Shakespeare. Bliver nogle gange forvirret. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DEN UDVALGTE.** Balanceret, klog og hurtig. Det er den anbefalede standardmodel. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Professoren.** Rig, dyb fortælling og meget naturlige dialoger. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Gude-niveau.** Du har brug for et rumskib (RTX 3090/4090) for at køre dette. |

---

### 🎮 HURTIG VALGGUIDE

| Dit Grafikkort | VRAM | Anbefalet Model | Resultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Lige på grænsen, men spilbart (Lav kontekst) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Kører fint |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Flyver afsted |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Den ideelle oplevelse |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Ren luksus |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maksimal kvalitet |

**💡 Pro Tip:** Efterlad altid omkring **2GB VRAM fri** til operativsystemet, ellers begynder Windows at græde og lukke ting ned.

---

### 🚨 HJÆLP! MIN PC ER LANGSOM! (VRAM-problemer)

Hvis spillet er længere om at svare end dit crush på WhatsApp, er du sandsynligvis løbet tør for VRAM.

**Symptomer på at du har været for smart:**
1.  **Modellen skifter til RAM:** PC'en bruger den almindelige hukommelse i stedet for grafikkortet. Resultat: EKSTREM LANGSOMHED.
2.  **Let overløb (1-2GB):** Det tager 30-60 sekunder pr. svar.
3.  **Moderat overløb (3-5GB):** 2-5 minutter. Du kan gå ud og hente kaffe.
4.  **Alvorligt overløb:** 10-30 minutter. Uspilleligt.

#### 🛡️ Nødprotokol
Hvis det går galt, så følg disse trin i rækkefølge:

1.  **📉 Sænk VRAM %:** Gå til Indstillinger og sæt den ned til **85%**. Genstart og prøv igen.
2.  **🧹 Oprydning:** Luk den browser med 40 åbne faner. De spiser din hukommelse.
3.  **🛑 Grænsen på 70%:** Gå aldrig under **70%** tildelt VRAM.
    *   *Hvorfor?* Fordi AI'en har brug for plads til at "tænke" (KV-cachen). Hvis du giver den mindre end 70%, går den i sort og melder fejl.
4.  **🔙 Taktisk Tilbagetog:** Hvis intet virker, så skift til en mindre model (gå fra 7B til 3B).

---

### ⚙️ AVANCERET MODELKONFIGURATION ("Maksimal Nørderi")

> **EKSPERTTILSTAND:** Hvis du er pro og vil have adgang til avanceret modelkonfiguration (tilføje dine egne GGUF-modeller downloadet fra HuggingFace, pille ved lag, osv.), skal du starte spillet med kommandoen: `--advanced`.

For dem der kan lide at trykke på knapper i **Indstillinger → Integreret Lokal AI**:

| Mulighed | Funktion | Anbefaling |
|--------|---------|---------------|
| **GPU Layers** | Hvor meget af modellen der indlæses i grafikkortet | **-1** (Betyder "ALT". Rør det ikke, medmindre du ved, hvad du gør) |
| **Maksimal Kontekst** | AI'ens "korttidshukommelse" | **16384 - 32768** (Mindre end dette, og AI'en får hukommelsestab) |
| **Temperatur** | Kreativitet vs Galskab | **0.7 - 0.8** (Højere = mere skør; Lavere = mere robotagtig) |
| **Historik RAG** | Huske ting fra lang tid siden | **Ja** (Uundværligt til lange kampagner) |
| **Cache Embeddings** | Fremskynder søgning efter minder | **Ja** (Gør at det går hurtigere) |

---

### 🔧 FEJLFINDING (Troubleshooting)

| Fejl | Løsning |
|-------|---------|
| **Langsom AI / Lag** | Tjek at `GPU Layers` er -1. Luk Chrome. Sænk `Contexto Máximo`. |
| **Hukommelsesfejl (OOM)** | Reducer `Contexto Máximo` eller vælg en mindre model (3B). |
| **AI'en vrøvler / Hallucinerer** | Sænk `Temperatura` til 0.6. Hvis den stadig er skør, genstart applikationen. |

---

### 🌐 ALTERNATIVE UDBYDERE (Kun for Eksperter)

> **Bemærk:** Den lokale AI, der følger med spillet, er mere end rigeligt. Dette er kun for avancerede eller modige brugere.

*   **Eksterne Lokale Motorer:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nørdede modeller, kan du bruge dem.
*   **Cloud API'er (Betalte):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kræver internet og at du punger ud.
    *   Konfigurer det i: **Indstillinger → AI → Tilføj Ny Udbyder**.

---

### 🌍 SÅDAN SPILLER DU (Multiverset og Dig)

Når du åbner spillet, har du to veje:

1.  **🆕 Nyt Eventyr**: Skab din legende fra bunden. Spillet vil bede om **Navn, Erhverv (Klasse), Fysisk Beskrivelse, Psykologisk Beskrivelse og Baggrund/Kontekst** for din historie. Derudover vælger du **Sværhedsgrad** og **Humor-tone**, som vil guide kampagnen.
2.  **💾 Fortsæt Spil**: RolemIAster **gemmer i realtid**. Her er ingen "indlæs før jeg døde" eller vej tilbage. Hver beslutning, hver fejl og hvert sår bliver brændt ind i historien. Det er en **UDFORDRING**: Det du gør, er gjort. Lev med konsekvenserne... eller dø med dem.

RolemIAster er ikke et isoleret spil; det er et **Vedvarende Multivers**.
*   **Uendelige Verdener:** Skab dine egne universer (**Middelalder Fantasy** eller **Cyberpunk**) med deres egen Lore.
*   **Uendelige Karakterer:** Inden for hver verden kan du have alle de helte, du ønsker.
*   **Delt Tidslinje:** Obs! Hvad én karakter gør, påvirker de andres verden. AI'en er opmærksom på dine andre helte og vil genkende dem som beboere i verdenen.
*   **AI med "Sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som AI'ens "sladderhank" og giver den minder om verdenen, hvem der følger dig, hvor du er, og hvad der lige er sket, så historien er 100% sammenhængende.

### Grænsefladen (Dit cockpit)

*   **Venstre Panel (DIG):** Dit Karakterark. Liv, mana, færdigheder og hvor lækker du er (Karisma).
*   **Midterpanel (HISTORIEN):**
    *   **Øverst:** Hvor fortælleren beretter, hvad der sker.
    *   **Nederst:** Dine beslutningsknapper og tekstboksen til at skrive, hvad du vil gøre.
*   **Højre Panel (DINE TING):** Inventar og udstyr. Det digitale samlermanis paradis.

---

## 📜 SPILLEREGLER (Ja, der er regler)

RolemIAster bruger et klassisk og robust d100-system (hundredesidet terning).

### 1. Dine Attributter (Det der definerer dig)
AI'en genererer dine attributter baseret på konteksten, erhvervet og beskrivelsen, du har indtastet. Når de er genereret, har du **10 EKSTRA POINT** at fordele efter din smag.
*   **Trinvis Omkostning:** At hæve en attribut op til 14 koster 1 point. Fra 15 til 16 koster 2 point. Fra 17 og op koster det 3 point! Tænk dig godt om, hvor du lægger musklerne.

*   💪 **Styrke (STY):** Din rene fysiske kraft. Påvirker nærkampsskade og din bæreevne.
*   ❤️ **Konstitution (KON):** Din modstandskraft. Til at modstå slag, sygdomme og gift.
*   🐘 **Størrelse (STØ):** Dit omfang. Stor og tung, eller lille og smidig.
*   🏃 **Behændighed (BEH):** Agilitet, sigteevne og ikke at falde over dine egne fødder.
*   🧠 **Intelligens (INT):** At lære, huske og løse gåder.
*   🔮 **Kraft (KRA):** Din sjæl, dit held, viljestyrke og din magiske reserve.
*   😎 **Karisma (KAR):** Lederskab, tiltrækningskraft og evnen til at snyde (eller forføre) folk.

### 2. Hurtig Matematik (Afledte Egenskaber)
Motoren beregner disse tal automatisk baseret på dine attributter:

*   🩸 **Liv (PV):** `CON * 10`. Hvis det når 0... tja, så ved du det. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Brændstoffet til dine magiske tricks. Uden mana, ingen tricks. (En troldmand uden mana er bare en fyr i badekåbe, der leger cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Din energi til at kæmpe og bevæge dig uden at dø i forsøget.
*   🧠 **Humanitet (HUM):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler hvor meget menneske du har tilbage, før kablerne gør dig skør).
*   ⚔️ **Handlingspoint (HP):** `(INT + DES) / 2`. Bestemmer dit Initiativ. Hvem der slår først, slår to gange.

### 3. Dine Færdigheder
Starter med en basisværdi (f.eks.: Snige = BEH + INT) og forbedres ved at bruge dem. Det er en procentdel (%).

### 4. Løsning af Handlinger (Terningen)
Når du prøver at gøre noget risikabelt (klatre, lyve, angribe...), vil AI'en bede om et kast. Spillet kaster en usynlig **d100**. **(Husk: Terningerne hader dig. Det er personligt).**

*   **Dit Mål:** Slå et tal der er **MINDRE ELLER LIG MED** dit færdighedsniveau.
    *   *Eksempel:* Du har 45% i Klatre.
    *   Du slår 30: ✅ **Succes**. Du klatrer op som en abe.
    *   Du slår 80: ❌ **Fejl**. Du falder ned og slår dig.
    *   **Kritisk:** Slå mindre eller lig med **1/5 af din færdighed** (eller en 01). Episk! Du laver ekstraordinær parkour med saltomortale.
    *   **Fumble (Kritisk fejl):** En **99 eller 100**. Terningerne har besluttet, at i dag ikke er din dag. Dine bukser falder ned midtvejs, og du falder på ansigtet.

---

## 💡 TIPS TIL IKKE AT DØ (HURTIGT)

*   **✍️ Vær Beskrivende:** Skriv ikke bare "jeg angriber". Skriv: *"Jeg forsøger at undvige hans økse ved at rulle hen ad gulvet og stikker min daggert i hans ankel"*. AI'en vil belønne dig.
*   **🧪 Eksperimenter:** Du er ikke begrænset til knapperne. Skriv skøre ting! AI'en improviserer.
*   **🎭 Rollespil:** Lev dig ind i rollen. Læs beskrivelserne og ager som din karakter ville gøre det, ikke som du ville gøre det i pyjamas.

---

## ⚔️ KAMP (Til våben!)

Når ordene fejler, er det tid til tæsk. Kamp er **taktisk** og fungerer med **Ticks** (tid).

### 🕹️ Sådan fungerer det:
*   **Ticks:** Hver handling koster tid. Tunge våben er langsomme (bruger mange ticks). Daggerter er hurtige.
*   **Din Hastighed:** Afhænger af dine Handlingspoint (HP).

### Grundlæggende Handlinger:
*   **🗡️ Angrib:** Slå med hvad end du har trukket.
*   **🛡️ Bloker:** Du går i defensiven. Reducerer skade, men bruger Stamina.
*   **🏃 Flygt:** For kujoner (eller vismænd der gerne vil leve).
*   **🏳️ Overgivelse:** Hvis du kan se, du ikke vinder, kan du tigge om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacks...

### 💬 Handlinger via Fritekst (NYT!)
Kan du ikke lide knapperne? Skriv hvad du vil gøre, som om du talte med en rigtig Game Master!
*   **Eksempler:** *"Kast ildkugle på goblinen"*, *"Træk mit runesværd"*, *"Brug potion på mig selv"*.
*   **Sceneinstruktør:** Kampen bliver nu levende. AI'en genererer miljømæssige begivenheder og reaktioner, der beriger fortællingen: bjælker der falder, fjender der trækker sig tilbage, fakler der vælter. Slagmarken er ikke længere statisk!
*   **Hvis AI'en ikke forstår:** Vil den bede dig om at omformulere. Din tur går IKKE tabt!
*   **⚠️ Begrænsning:** At flytte genstande mellem slots (udstyre fra rygsæk, lade ammunition) gøres med **Drag & Drop** i grænsefladen, ikke via tekst.

### ⚠️ DEN GYLDNE OVERLEVELSESREGEL
**TRÆK VÅBEN FØR KAMP!**
At trække våbnet midt i kampen forbruger tid (Ticks). Hvis de fanger dig med sværdet i skeden, får du bank helt ind i næste uge, mens du klodset prøver at få det ud. ELLER ENDNU VÆRRE, HVIS DU GÅR MED DINE VÅBEN I RYGSÆKKEN I STEDET FOR I DERES UDSTYRSSLOT (Undskyld et øjeblik, jeg skal lige have tohåndssværdet op af rygsækken, jeg ved jeg havde det her et sted... et eller andet sted...) 🤦‍♂️
👉 Klik på **etiketten på det udstyrede våben** (højre panel) for at trække det. Det vil lyse grønt.

At forsøge at flytte våben i kamp bruger tid (Ticks) og kan resultere i et overraskelsesangreb, desuden er det meget sandsynligt, at du mister turen, at du fejler på grund af nerverne over øksen, der nærmer sig din pande, eller at du taber det på jorden. (Måske var det ikke en god idé at lave en karakter med ADHD).

---

## ✨ MAGI OG CYBERNETIK

Afhængigt af om din verden er "Middelalder Fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Fortryllelser
Er du troldmand? Du kan fortrylle dit udstyr.
1.  **Lær:** Du skal have besværgelsen i din grimoire.
2.  **Kast (Drag & Drop):** Træk besværgelsen fra din liste over på genstanden i dit inventar.
3.  **Omkostning:** At holde en fortryllelse aktiv **koster Mana pr. tur**.
4.  **Advarsel:** Hvis du løber tør for mana midt i kampen, bliver ildsværdet igen til et stykke rustent jern.

### 🦾 Cyberpunk: Implantater
Vil du have øjne med zoom eller gorilla-arme?
1.  Find en **Teknorkirurg** (NPC-tjeneste).
2.  Betal kreditterne (intet er gratis i fremtiden).
3.  **Omkostning i Humanitet:** Hvert implantat tager en bid af din sjæl (**Humanitet**).
    *   Hvis du tager for mange, får du **Cyberpsykose** (bliver en morderisk brødrister på ben) og mister kontrollen over din karakter.

---

## 🛒 BUTIKKER OG TJENESTER (SIS)

Tal med NPC'er for at handle.
*   **AI Foreslår, Du Bestemmer:** Når du taler med en købmand eller helbreder, vil AI'en foreslå deres tjenester (reparere, sælge, helbrede), men der vil dukke en knap op med **"Se Tjenester"**, så du kan bestemme, hvornår du vil gå i transaktions-tilstand.
*   **Forhandling:** Din færdighed i **Handel** (baseret på Karisma) afgør priserne. Hvis du er grim eller antipatisk, bliver du snydt.
*   **Sælg:** **Højreklik** på en genstand i dit inventar for at sælge den til den handlende, eller træk den over på ham.

---

## 🎒 LAGERSTYRING (Tetris)

*   **Vægt:** Du har en bæregrænse (Styrke + Størrelse). Hvis du bærer på for meget skrammel, vil du være langsom og få straf (Samlermani er ikke din ven).
*   **Paneler:**
    *   **Udstyr:** Det du har på.
    *   **Bælte:** Hurtig adgang i kamp (bruger mindre tid at bruge potions herfra).
    *   **Rygsæk:** Bunden af sækken.
*   **Flydende Brug:** Træk en potion eller mad direkte over på **dit ansigt** (portrættet) for at indtage det øjeblikkeligt. Du kan også bruge kontekstmenuen (højreklik -> Brug).

---

## 🛠️ ENDELIGE INDSTILLINGER

I menuen **Indstillinger** kan du pille ved det hele:
*   **🌍 Sprog:** AI'en oversætter hele spillet og svarene for dig løbende. Polyglot-tilstand aktiveret.
*   **👁️ Udseende:** Skriftstørrelse og farver, så du ikke bliver blind. Neonkanter og bløde skygger for total fordybelse.
*   **🧠 AI Indstillinger:** Skift model, temperatur osv. (Husk hvad vi så i starten af manualen om flaget `--advanced`, hvis du er typen, der vil pille ved alt).

---

## 🎭 SVÆRHEDSGRAD OG HUMOR (Tilpas din lidelse)

Før du starter, så husk at AI'en ikke kun fortæller, men også **justerer verden** efter dine præferencer. Disse parametre vælges, når verdenen skabes, og er permanente for den verden:

*   **🎮 Sværhedsgrad (Styret af AI):** Det er ikke bare en simpel skades-multiplikator. Spillet fortæller AI'en: "Hør her, sværhedsgraden er denne, ager derefter".
    *   **Let:** Du vil aldrig dø (eller det vil være næsten umuligt), situationerne er enklere, priserne er billigere, og fjenderne er mere klodsede. AI'en vil ræsonnere hver scene, så din vej bliver en dans på roser.
    *   **Normal:** Standardbalancen.
    *   **Udfordring:** AI'en vil være nådesløs, priserne uoverkommelige, og enhver fejl kan være den sidste.

*   **🃏 Humor-tone:** Definerer hvordan AI'en taler til dig, og hvilken type begivenheder der sker. Selvom hver model har sin egen måde at fortolke begrebet "humor" på, vil AI'en forsøge at tilpasse sig det, du vælger... eller ej:
    *   **Seriøs:** En episk, mørk og formel fortælling.
    *   **Sarkastisk:** AI'en vil grine af dine fejl, konstant komme med stikpiller og bruge en ironisk tone.
    *   **Delirisk:** Gør dig klar til det absurde. Flyvende køer, surrealistiske situationer og totalt kaos styret af AI'ens mest snoede logik.

---

## 🚧 Advarsel: Early Access

RolemIAster er under **aktiv udvikling** og simrer ved svag varme.
*   Du kan finde bugs (eller "uventede egenskaber").
*   Jeg tilføjer nye ting hver uge.
*   Din feedback er guld værd! Fortæl mig hvad du kan lide, og hvad du virkelig godt kan lide. (Hvis du ikke kan lide noget, så sig det også, men sig det pænt).

Gå nu ud, slå initiativ og skab din legende!

<!-- source_hash: f3494f05 -->