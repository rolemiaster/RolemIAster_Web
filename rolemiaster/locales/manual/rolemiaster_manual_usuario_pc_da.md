# 🐉 Velkommen til RolemIAster!

Grib dine terninger (eller din mus) og gør dig klar til at opleve eventyr, hvor den eneste grænse er, hvor skør din fantasi er! **RolemIAster** er et uendeligt rollespil drevet af kunstig intelligens, der lader dig være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK ANSVARSFRASKRIVELSE (Den kedelige, men nødvendige del)

**LÆS DETTE, ELLERS VIL DU LIDE UNDER TERNINGERNES VREDE:**

1.  **🤖 Lokal Integreret AI:** RolemIAster medbringer sin egen digitale hjerne. Den fungerer **uden internet** og uden at du behøver at røre ved noget mærkeligt. Installer og spil!
2.  **☁️ Valgfri Cloud:** Hvis du foretrækker at bruge penge på eksterne AI'er (OpenAI, Gemini...), så gør det med dit kreditkort. Omkostningerne er dit eget ansvar.
3.  **🎲 Generativt Kaos:** AI'en finder på historien hen ad vejen. Hvis fortælleren går amok og siger, at det regner køer, så se ikke på os. Udvikleren er ikke ansvarlig for vanvid, som modellen genererer.
4.  **🏗️ Early Access:** Dette er under opbygning. Hvis du finder en fejl, er det ikke en fejl, det er en overraskende "feature"! (Send os feedback, tak, det hjælper os meget).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyder, at din PC vil udføre det hårde tænkarbejde. Du behøver ikke internet, men du skal bruge et grafikkort, der ikke er fra dinosaurernes tid. (Bemærk: Hvis der er koldt i dit rum, fungerer dette spil som gratis opvarmning).

### ⚙️ Koncepter for uindviede

**VRAM (Video RAM)** er AI'ens benzin.
*   Takket være **TurboQuant** kan RolemIAster nu huske **over 100.000 ord (tokens)** — næsten tredobbelt så mange som før — uden at din grafik slår fra.
*   Hvis dit GPU løber tør for hukommelse, vil spillet køre langsommere end en snegl med astma.

---

### 📊 MODELKATALOG (Vælg din gift)

Administrer dine AI'er under **Indstillinger → Lokal Integreret AI → Administrer Modeller**.

#### 🏆 Qwen 3.5-familien — Specielt trænet til RolemIAster

Disse modeller er trænet med **Supervised Fine-Tuning (SFT)** for at mestre spillets narrative regler. De er ikke generiske modeller: de kender RolemIAster's JSON-kontrakt, NPC'er, inventar og kamp fra hukommelsen.

| Model         | Størrelse | Min. VRAM | Niveau | Dom                                                                                               |
| :------------ | :-------- | :-------- | :----- | :------------------------------------------------------------------------------------------------ |
| **Qwen3.5-2B** | ~1.5GB    | **3GB**   | B      | ⚡ **Hastighedsmonstret.** Den hurtigste af dem alle. Ideel til grundlæggende GPU'er eller til spil uden dedikeret GPU. |
| **Qwen3.5-4B** | ~2.8GB    | **4GB**   | A      | ✅ **DEN BALANCEREDE.** Optimal hastighed og kvalitet. Anbefalet standardmodel for de fleste spillere.        |
| **Qwen3.5-9B** | ~5.5GB    | **8GB**   | S      | 🌟 **Fortælleren.** Rig narrativ og overlegen sammenhæng. For dem med en RTX 3070 eller bedre.              |

---

### 🎮 HURTIG GUIDE TIL VALG

| Dit Grafikkort | VRAM | Anbefalet Model | Resultat                                          |
| :------------- | :--- | :-------------- | :------------------------------------------------ |
| GTX 1050/1060 / Ingen GPU | 4GB  | **Qwen3.5-2B**    | 🆗 Lige akkurat, men spilbart, meget lige akkurat... |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**    | ✅ God oplevelse                                   |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**    | 🚀 Hurtig og præcis                               |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**    | 🌟 Den ideelle oplevelse                            |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**    | 👑 Maksimal kvalitet, ultrahurtige svar            |

**💡 Pro Tip:** Efterlad altid omkring **2GB VRAM ledigt** til operativsystemet, ellers vil Windows begynde at græde og lukke ting ned.

---

### 🚨 HJÆLP! MIN PC KØRER LANGSOMT! (VRAM-problemer)

Hvis spillet tager længere tid at svare end din crush på WhatsApp, er du sandsynligvis løbet tør for VRAM.

**Symptomer på, at du har været for klog:**
1.  **Modellen vælter over i RAM:** PC'en bruger den almindelige hukommelse i stedet for grafikhukommelsen. Resultat: EKSTREM LANGSOMHED.
2.  **Let overskridelse (1-2GB):** Det vil tage 30-60 sekunder pr. svar.
3.  **Moderat overskridelse (3-5GB):** 2-5 minutter. Du kan gå og hente en kop kaffe.
4.  **Alvorlig overskridelse:** 10-30 minutter. Uspilbart.

#### 🛡️ Nødprotokol
Hvis tingene går galt, følg disse trin i rækkefølge:

1.  **📉 Reducer VRAM %:** Gå til Indstillinger og sænk den til **85%**. Genstart og prøv.
2.  **🧹 Oprydning:** Luk den browser med 40 åbne faner. De æder din hukommelse.
3.  **🛑 70%-grænsen:** Sænk aldrig under **70%** af tildelt VRAM.
    *   *Hvorfor?* Fordi AI'en har brug for plads til at "tænke" (KV-cachen). Hvis du giver den mindre end 70%, vil den blive blank og give en fejl.
4.  **🔙 Taktisk tilbagetrækning:** Hvis intet virker, skal du nedskalere til en mindre model (fra 9B til 4B, eller fra 4B til 2B).

---

### ⚙️ AVANCEREDE MODELINDSTILLINGER ("Maksimal nørderi")

> **EKSPERT-TILSTAND:** Hvis du er professionel og ønsker adgang til avancerede modelindstillinger (tilføj dine egne GGUF-modeller downloadet fra HuggingFace, juster lag osv.), skal du starte spillet med kommandoen: `--advanced`.

For dem, der kan lide at trykke på knapper under **Indstillinger → Lokal Integreret AI**:

| Indstilling      | Funktion                                                                    | Anbefaling                                         |
| :--------------- | :-------------------------------------------------------------------------- | :------------------------------------------------- |
| **GPU Layers**   | Hvor meget af modellen der indlæses på grafikkortet                          | **-1** (Betyder "ALT". Rør det ikke, medmindre du ved, hvad du gør) |
| **Maksimal Kontekst** | AI'ens "korttidshukommelse"                                             | **16384 - 32768** (Mindre end dette og AI'en får hukommelsestab) |
| **Temperatur**   | Kreativitet vs. Vanvid                                                      | **0.7 - 0.8** (Højere = mere skør; Lavere = mere robotagtig) |
| **Historik RAG** | Huske ting fra lang tid siden                                               | **Ja** (Uundværligt til lange kampagner)           |
| **Cache Embeddings** | Fremskynder søgningen efter minder                                          | **Ja** (Gør det hurtigere)                         |

---

### 🔧 FEJLSØGNING (Troubleshooting)

| Problem         | Løsning                                                                                             |
| :-------------- | :-------------------------------------------------------------------------------------------------- |
| **Langsom AI / Lag** | Verificer, at `GPU Layers` er -1. Luk Chrome. Sænk `Contexto Máximo`.                  |
| **Hukommelsesfejl (OOM)** | Reducer `Contexto Máximo` eller vælg en mindre model (3B).                                 |
| **AI'en taler usammenhængende / Hallucinerer** | Sænk `Temperatura` til 0.6. Hvis den stadig er skør, genstart applikationen. |

---

### 🌐 ALTERNATIVE LEVERANDØRER (Kun for eksperter)

> **Bemærk:** Den lokale AI, som spillet leverer, er mere end nok. Dette er kun for avancerede eller modige brugere.

*   **Eksterne Lokale Motor:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nørdede modeller, kan du bruge dem.
*   **Cloud API'er (Betalingspligtige):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kræver internet og at du betaler.
    *   Konfigurer det under: **Indstillinger → AI → Tilføj Ny Leverandør**.

---

### 🌍 HVORDAN SPILLER MAN? (Multiverset og dig)

Når du åbner spillet, har du to muligheder:

1.  **🆕 Nyt Eventyr**: Skab din egen legende fra bunden. Spillet vil bede dig om **Navn, Profession, Fysisk Beskrivelse, Psykologisk Beskrivelse og Baggrund/Motiv** for din historie. Derudover vil du vælge **Sværhedsgrad** og **Humoristisk Tone**, der vil guide kampagnen.
2.  **💾 Fortsæt Spil**: RolemIAster **gemmer i realtid**. Her er der ingen "load før død" eller tilbagegang. Hver beslutning, hver fejltagelse og hvert sår bliver brændt ind i historien. Det er en **UDFORDRING**: hvad du gør, er gjort. Lev med konsekvenserne... eller dø med dem.

RolemIAster er ikke en isoleret spilsession; det er et **Vedvarende Multivers**.
*   **Uendelige Verdener:** Skab dine egne universer (**Middelalderfantasy** eller **Cyberpunk**) med deres egen lore.
*   **Uendelige Karakterer:** Inden for hver verden kan du have alle de helte, du ønsker.
*   **Delt Tidslinje:** Pas på! Hvad en karakter gør, påvirker de andres verden. AI'en er opmærksom på dine andre helte og vil genkende dem som indbyggere i verdenen.
*   **AI med "Sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som AI'ens "snitch", der giver den minder om verdenen, hvem der ledsager dig, hvor du er, og hvad der lige er sket, så historien er 100% sammenhængende.

### Brugerfladen (Din kommandobro)

*   **Venstre Panel (DIG):** Dit karakterblad. Liv, mana, færdigheder og hvor flot du er (Karism).
*   **Midterste Panel (HISTORIEN):**
    *   **Øverst:** Hvor fortælleren beskriver, hvad der sker.
    *   **Nederst:** Dine beslutningsknapper og tekstfeltet til at skrive, hvad du vil gøre.
*   **Højre Panel (DINE TING):** Inventar og udstyr. Det digitale Diogenes' paradis.

---

## 📜 SPILREGLER (Ja, der er regler)

RolemIAster bruger et klassisk og robust d100-system (hundrede-sidet terning).

### 1. Dine Attributter (Det, der definerer dig)
AI'en genererer dine attributter baseret på den kontekst, profession og beskrivelse, du har angivet. Når de er genereret, har du **10 EKSTRA POINT** til at fordele efter din egen vilje.
*   **Trinvis omkostning:** At øge en attribut op til 14 koster 1 point. Fra 15 til 16 koster det 2 point. Fra 17 koster det 3 point! Tænk godt over, hvor du lægger musklerne.

*   💪 **Styrke (STY):** Din rene fysiske kraft. Påvirker nærkamp skade og din bæreevne.
*   ❤️ **Konstitution (KON):** Din udholdenhed. Til at modstå slag, sygdomme og gifte.
*   🐘 **Størrelse (STØ):** Din statur. Stor og tung, eller lille og snedig.
*   🏃 **Behændighed (BEH):** Smidighed, sigteevne og ikke at snuble over dine egne fødder.
*   🧠 **Intelligens (INT):** At lære, huske og løse gåder.
*   🔮 **Vilje (VIL):** Din sjæl, din held, din viljestyrke og din magiske reserve.
*   😎 **Karism (KAR):** Lederskab, tiltrækningskraft og evnen til at narre (eller forføre) folk.

### 2. Hurtige Matematiske Beregninger (Afledte Karakteristika)
Motoren beregner disse tal automatisk baseret på dine attributter:

*   🩸 **Liv (LP):** `CON * 10`. Hvis det når 0... ja, du ved det. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Brændstoffet til dine magiske tricks. Uden mana, ingen tricks. (En magiker uden mana er bare en fyr i en kappe, der cosplayer).
*   ⚡ **Udholdenhed (UDH):** `((CON+FUE+DES)/3)*10 + POD`. Din energi til at kæmpe og bevæge dig uden at dø på forsøget.
*   🧠 **Menneskelighed (MEN):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler hvor meget af dig selv der er tilbage, før kablerne gør dig skør).
*   ⚔️ **Handlingspoint (HP):** `(INT + DES) / 2`. Bestemmer din Initiative. Den, der rammer først, rammer dobbelt.

### 3. Dine Færdigheder
Starter med en basisværdi (f.eks. Snig = BEH + INT) og forbedres ved brug. Det er en procentdel (%).

### 4. Afhandlingsløsning (Terningen)
Når du forsøger at gøre noget risikabelt (klatre, lyve, angribe...), vil AI'en bede dig om et slag. Spillet kaster en usynlig **d100**. **(Husk: Terningerne hader dig. Det er personligt).**

*   **Dit Mål:** At slå et tal, der er **MINDRE ELLER LIGE MED** dit færdighedsniveau.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du slår 30: ✅ **Succes**. Du klatrer som en abe.
    *   Du slår 80: ❌ **Fejl**. Du falder og slår dig.
    *   **Kritisk:** At slå mindre end eller lig med **1/5 af din færdighed** (eller et 01). Episk! Du udfører en ekstraordinær parkour med en saltomortale.
    *   **Fejlslag:** Et **99 eller 100**. Terningerne har besluttet, at i dag ikke er din dag. Dine bukser falder ned midt i det hele, og du falder med ansigtet først.

---

## 💡 TIPS TIL IKKE AT DØ (STRAKS)

*   **✍️ Vær Beskrivende:** Skriv ikke bare "jeg angriber". Skriv: *"Jeg forsøger at undvige hans økse ved at rulle på jorden og stikker min dolk i hans ankel."* AI'en vil belønne dig.
*   **🧪 Eksperimenter:** Du er ikke begrænset til knapperne. Skriv vanvittige ting! AI'en vil improvisere.
*   **🎭 Rollespil:** Kom ind i rollen. Læs beskrivelserne og handl som din karakter ville gøre, ikke som du ville gøre i pyjamas.

---

## ⚔️ KAMP (Til våbnene!)

Når ordene svigter, kommer slåskampen. Kampen er **taktisk** og fungerer pr. **Ticks** (tid).

### 🕹️ Sådan fungerer det:
*   **Ticks:** Hver handling koster tid. Tunge våben er langsomme (bruger mange ticks). Dolke er hurtige.
*   **Din Hastighed:** Afhænger af dine Handlingspoint (HP).

### Grundlæggende Handlinger:
*   **🗡️ Angrib:** Slå med det, du har trukket.
*   **🛡️ Bloker:** Du går i defensiven. Reducerer skade, men bruger udholdenhed.
*   **🏃 Flygt:** Af kujoner (eller af kloge, der vil leve).
*   **🏳️ Giv op:** Hvis du ser, du ikke vinder, kan du bede om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacks...

### 💬 Handlinger med Fri Tekst (NYT!)
Kan du ikke lide knapperne? Skriv, hvad du vil gøre, som om du talte med en rigtig spilleder!
*   **Eksempler:** *"Kast en ildkugle på goblinen"*, *"Træk mit runemagiske sværd"*, *"Brug en eliksir på mig"*.
*   **Sceneinstruktør:** Kampen bliver nu levende. AI'en genererer miljøbegivenheder og reaktioner, der beriger fortællingen: bjælker, der falder ned, fjender, der trækker sig tilbage, fakler, der falder ned! Kamparenaen er ikke længere statisk!
*   **Hvis AI'en ikke forstår:** Den vil bede dig om at omformulere. Din tur går IKKE tabt!
*   **⚠️ Begrænsning:** At flytte genstande mellem slots (udruste fra rygsæk, indlæse ammunition) gøres med **Træk og Slip** i brugerfladen, ikke via tekst.

### ⚠️ GULDREGEL FOR OVERLEVELSE
**TRÆK VÅBENET UD, FØR DU KÆMPER!**
At trække våbnet ud midt i kampen koster tid (Ticks). Hvis du bliver fanget med sværdet i skeden, vil du blive tæsket, mens du forsøger at trække det klodset ud. ELLER VÆRRE ENDNU!, HVIS DU HAR DINE VÅBEN I RYGSÆKKEN I STEDET FOR I DIN UDSTYRSPLADS (Undskyld et øjeblik, jeg skal lige finde sværdet frem fra rygsækken, jeg ved godt, jeg havde det et sted her... et sted...) 🤦‍♂️
👉 Klik på etiketten på det udstyrede våben (højre panel) for at trække det ud. Det vil lyse grønt.

At forsøge at flytte våben i kamp koster tid (Ticks) og kan resultere i et overraskelsesangreb, desuden er der stor sandsynlighed for, at du mister din tur, fejler på grund af nerverne fra den økse, der nærmer sig din pande, eller at du taber det på jorden. (Måske var det ikke en god idé at skabe en karakter med ADHD)

---

## ✨ MAGI OG CYBERNETIK

Afhængigt af om din verden er "Middelalderfantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Fortryllelser
Er du en troldmand? Du kan fortrylle dit udstyr.
1.  **Lær:** Du skal have besværgelsen i din grimoire.
2.  **Kast (Træk og Slip):** Træk besværgelsen fra din liste over genstanden i dit inventar.
3.  **Omkostning:** At holde en fortryllelse aktiv **koster Mana pr. tur**.
4.  **Bemærk:** Hvis du løber tør for mana midt i kampen, bliver dit ildsværd igen et stykke rustent jern.

### 🦾 Cyberpunk: Implanter
Vil du have zoom-øjne eller gorilla-arme?
1.  Find en **Teknokirurg** (en NPC i service).
2.  Betal kreditterne (intet er gratis i fremtiden).
3.  **Omkostning i Menneskelighed:** Hvert implant fjerner et stykke af din sjæl (**Menneskelighed**).
    *   Hvis du installerer for mange, bliver du til en **Cyberpsykopat** (en dræbende brødrister på ben) og mister kontrollen over din karakter.

---

## 🛒 BUTIKKER OG TJENESTER (SIS)

Tal med NPC'er for at handle.
*   **AI Foreslår, Du Bestemmer:** Når du taler med en købmand eller helbreder, vil AI'en foreslå deres tjenester (reparere, sælge, helbrede), men der vil dukke en knap op til **"Se Tjenester"**, så du kan beslutte, hvornår du vil ind i transaktionstilstand.
*   **Forhandling:** Din færdighed i **Handel** (baseret på Karism) bestemmer priserne. Hvis du er grim eller uvenlig, vil du blive snydt.
*   **Sælg:** Højreklik på en genstand i dit inventar for at sælge den til handlende eller træk den over på ham.

---

## 🎒 INVENTARSTYRING (Tetris)

*   **Vægt:** Du har en bæreevne (Styrke + Størrelse). Hvis du bærer for meget skrammel, vil du bevæge dig langsomt og med straf (Diogenes er ikke din ven).
*   **Paneler:**
    *   **Udstyr:** Det du har på.
    *   **Bælte:** Hurtig adgang i kamp (koster mindre tid at bruge eliksirer herfra).
    *   **Rygsæk:** Bunden af sækken.
*   **Flydende Brug:** Træk en eliksir eller mad direkte over **dit ansigt** (portrættet) for at indtage den øjeblikkeligt. Du kan også bruge kontekstmenuen (højreklik -> Brug).

---

## 🛠️ FINALE JUSTERINGER

I **Indstillinger** menuen kan du ændre alt:
*   **🌍 Sprog:** AI'en oversætter hele spillet og svarene i farten. Polyglot-tilstand aktiveret.
*   **👁️ Udseende:** Skriftstørrelse og farver, så du ikke bliver blind. Neonkanter og bløde skygger for total fordybelse.
*   **🧠 AI-indstillinger:** Skift model, temperatur osv. (Husk, hvad vi har gennemgået i starten af manualen om flaget `--advanced` hvis du er typen, der vil pille ved alt).

---

## 🎭 SVÆRHEDSGRAD OG HUMOR (Tilpas din lidelse)

Før du starter, husk, at AI'en ikke kun fortæller, men **tilpasser verdenen** efter dine præferencer. Disse parametre vælges, når du opretter verdenen, og er permanente for den pågældende verden:

*   **🎮 Sværhedsgrad (Administreret af AI):** Det er ikke en simpel skadesmultiplikator. Spillet siger til AI'en: "Hey, sværhedsgraden er denne, ager derefter."
    *   **Let:** Du vil aldrig dø (eller det vil være næsten umuligt), situationerne er simplere, priserne er billigere, og fjenderne er mere klodsede. AI'en vil ræsonnere hver scene, så din vej bliver som rosenblade.
    *   **Normal:** Standardbalancen.
    *   **Udfordring:** AI'en vil være nådesløs, priserne uoverkommelige, og enhver fejl kan være din sidste.

*   **🃏 Humoristisk Tone:** Definerer, hvordan AI'en taler til dig, og hvilken type begivenheder der finder sted. Selvom hver model har sin egen måde at fortolke begrebet "humor" på, vil AI'en forsøge at tilpasse sig det, du vælger... eller ikke:
    *   **Seriøs:** En episk, mørk og formel fortælling.
    *   **Sarkastisk:** AI'en vil grine af dine fejl, komme med konstante stikpiller og bruge en ironisk tone.
    *   **Vanvittig:** Forbered dig på det absurde. Flyvende køer, surrealistiske situationer og totalt kaos styret af AI'ens mest snoede logik.

---

## 🚧 Bemærk: Early Access

RolemIAster er i **aktiv udvikling**, der simrer langsomt.
*   Du kan finde fejl (eller "uventede features").
*   Jeg tilføjer nye ting hver uge.
*   Din feedback er guld værd! Fortæl mig, hvad du kan lide, og hvad du virkelig kan lide. (Hvis du ikke kan lide noget, så fortæl mig det også, men med kærlighed).

Gå nu, slå initiativ og skab din legende!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->