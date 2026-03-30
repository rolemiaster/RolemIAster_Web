# 🐉 Velkommen til RolemIAster!

Grib dine terninger (eller din mus) og forbered dig på eventyr, hvor den eneste grænse er, hvor skør din fantasi er! **RolemIAster** er et uendeligt rollespil drevet af kunstig intelligens, der lader dig være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK ANSVARSFRASKRIVELSE (Den kedelige, men nødvendige del)

**LÆS MIG, ELLERS LIDT UNDER TERNINGERNES VREDESVÆLD:**

1.  **🤖 Lokal Integreret AI:** RolemIAster medbringer sin egen digitale hjerne. Den fungerer **uden internet** og uden at du behøver at røre ved noget mærkeligt. Installer og spil!
2.  **☁️ Valgfri Cloud:** Hvis du foretrækker at bruge penge på eksterne AI'er (OpenAI, Gemini...), er det op til dig og dit kreditkort. Omkostningerne er dit eget ansvar.
3.  **🎲 Generativ Kaos:** AI'en finder på historien undervejs. Hvis fortælleren bliver skør og siger, at det regner køer, så kig ikke på os. Udvikleren er ikke ansvarlig for vanviddet, som modellen genererer.
4.  **🏗️ Early Access:** Dette er under opbygning. Hvis du finder en fejl, er det ikke en fejl, det er en overraskende "funktion"! (Send os feedback, tak, det hjælper os meget).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyder, at din pc vil gøre det hårde arbejde med at tænke. Du behøver ikke internet, men du har brug for et grafikkort, der ikke er fra dinosaurernes tid. (Bemærk: Hvis det er koldt i dit rum, fungerer dette spil som gratis opvarmning).

### ⚙️ Koncepter for uindviede

**VRAM (Video-RAM)** er AI'ens benzin.
*   RolemIAster skal "huske" **12.000 til 16.000 ord (tokens)** for ikke at miste tråden i historien.
*   Hvis din GPU løber tør for hukommelse, vil spillet køre langsommere end en snegl med astma.

---

### 📊 MODELKATALOG (Vælg din forgiftning)

Administrer dine AI'er under **Indstillinger → Lokal Integreret AI → Administrer Modeller**.

#### 🏆 Qwen 3.5-familien — Specifikt trænet til RolemIAster

Disse modeller er trænet med **Supervised Fine-Tuning (SFT)** for at mestre spillets narrative regler. De er ikke generiske modeller: de kender RolemIAster's JSON-kontrakt, NPC'er, inventar og kamp ud af hovedet.

| Model       | Størrelse | Minimum VRAM | Niveau | Dom                    |
| :---------- | :-------- | :----------- | :----- | :--------------------- |
| **Qwen3.5-2B** | ~1.5GB    | **3GB**      | B      | ⚡ **Hastighedsmester.** Den hurtigste af dem alle. Ideel til basis-GPU'er eller til at spille uden dedikeret GPU. |
| **Qwen3.5-4B** | ~2.8GB    | **4GB**      | A      | ✅ **DEN AFBALANCEREDE.** Optimal hastighed og kvalitet. Anbefalet standardmodel for de fleste spillere. |
| **Qwen3.5-9B** | ~5.5GB    | **8GB**      | S      | 🌟 **Fortælleren.** Rigere narrative og overlegen sammenhæng. Til dem med en RTX 3070 eller bedre. |

---

### 🎮 HURTIG GUIDE TIL VALG AF MODEL

| Dit Grafikkort | VRAM | Anbefalet Model | Resultat              |
| :------------- | :--- | :-------------- | :-------------------- |
| GTX 1050/1060 / Uden GPU | 2-4GB | **Qwen3.5-2B** | 🆗 Lige akkurat, men spilbart |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Meget god oplevelse |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Hurtig og præcis |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 Den ideelle oplevelse |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maksimal kvalitet, lynhurtige svar |

**💡 Pro Tip:** Efterlad altid omkring **2 GB VRAM ledigt** til operativsystemet, ellers begynder Windows at græde og lukke ting ned.

---

### 🚨 HJÆLP! MIN PC KØRER LANGSOMT! (VRAM-problemer)

Hvis spillet tager længere tid om at svare end din crush på WhatsApp, er du sandsynligvis løbet tør for VRAM.

**Symptomer på at du har været for smart:**
1.  **Modellen flyttes til RAM:** Computeren bruger den normale hukommelse i stedet for grafikhukommelsen. Resultat: EKSTREM LANGSOMHED.
2.  **Let overskridelse (1-2GB):** Tager 30-60 sekunder pr. svar.
3.  **Moderat overskridelse (3-5GB):** 2-5 minutter. Du kan gå ud og hente en kop kaffe.
4.  **Alvorlig overskridelse:** 10-30 minutter. Uspilbart.

#### 🛡️ Nødprotokol
Hvis det går galt, følg disse trin i rækkefølge:

1.  **📉 Sænk VRAM %:** Gå til Indstillinger og sænk den til **85%**. Genstart og prøv igen.
2.  **🧹 Rengøring:** Luk den browser med 40 åbne faner. De spiser din hukommelse.
3.  **🛑 70%-grænsen:** Gå aldrig under **70%** af tildelt VRAM.
    *   *Hvorfor?* Fordi AI'en har brug for plads til at "tænke" (KV-cachen). Hvis du giver den mindre end 70%, vil den blive tom og give en fejl.
4.  **🔙 Taktisk tilbagetrækning:** Hvis intet virker, så skift til en mindre model (gå fra 9B til 4B, eller fra 4B til 2B).

---

### ⚙️ AVANCEREDE MODELINDSTILLINGER ("Maksimal nørderi")

> **EKSPERTMODE:** Hvis du er en professionel og vil have adgang til avancerede modelindstillinger (tilføj dine egne GGUF-modeller downloadet fra HuggingFace, juster lag osv.), skal du starte spillet med kommandoen: `--advanced`.

For dem, der kan lide at trykke på knapper i **Indstillinger → Lokal Integreret AI**:

| Indstilling          | Funktion                                           | Anbefaling                                        |
| :------------------- | :------------------------------------------------- | :------------------------------------------------ |
| **GPU Layers**       | Hvor meget af modellen der indlæses på grafikkortet | **-1** (Betyder "ALT". Rør ikke ved det, medmindre du ved, hvad du gør) |
| **Maksimal Kontekst** | AI'ens "korttidshukommelse"                        | **16384 - 32768** (Mindre end dette, og AI'en får hukommelsestab) |
| **Temperatur**       | Kreativitet vs. Vanvid                              | **0.7 - 0.8** (Højere = mere skør; Lavere = mere robotagtig) |
| **Historik RAG**     | Huske ting fra lang tid siden                      | **Ja** (Uundværligt til lange kampagner)          |
| **Cache Embeddings** | Fremskynder hukommelsessøgning                     | **Ja** (Gør det hurtigere)                        |

---

### 🔧 FEJLFINDING (Troubleshooting)

| Fejl               | Løsning                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------- |
| **Langsom AI / Lag** | Tjek, at `GPU Layers` er -1. Luk Chrome. Sænk `Contexto Máximo`.                      |
| **Hukommelsesfejl (OOM)** | Reducer `Contexto Máximo` eller vælg en mindre model (3B).                                     |
| **AI'en vrøvler / Hallucinerer** | Sænk `Temperatura` til 0.6. Hvis den stadig er skør, genstart applikationen. |

---

### 🌐 ALTERNATIVE UDBYDERE (Kun eksperter)

> **Bemærk:** Den lokale AI, som spillet medbringer, er mere end nok. Dette er kun for avancerede eller modige brugere.

*   **Eksterne Lokale Motor:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nørdede modeller, kan du bruge dem.
*   **Cloud API'er (Betaling påkrævet):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kræver internet og penge.
    *   Konfigurer det under: **Indstillinger → AI → Tilføj Ny Udbyder**.

---

### 🌍 HVORDAN SPILLER MAN? (Multiverset og dig)

Når du åbner spillet, har du to veje:

1.  **🆕 Nyt Eventyr**: Skab din egen legende fra bunden. Spillet vil bede dig om **Navn, Erhverv (Profession), Fysisk Beskrivelse, Psykologisk Beskrivelse og Baggrund/Præmis** for din historie. Desuden vælger du **Sværhedsgrad** og **Humoristisk Tone**, som vil guide kampagnen.
2.  **💾 Fortsæt Spil**: RolemIAster **gemmer i realtid**. Her er der ingen "indlæs før du dør" eller vej tilbage. Hver beslutning, hver fejl og hvert sår bliver brændt ind i historien. Det er en **UDFORDRING**: hvad du gør, er gjort. Lev med konsekvenserne... eller dø med dem.

RolemIAster er ikke et isoleret spil; det er et **Vedvarende Multivers**.
*   **Uendelige Verdener:** Skab dine egne universer (**Middelalderlig Fantasy** eller **Cyberpunk**) med deres egen lore.
*   **Uendelige Karakterer:** Inden for hver verden kan du have så mange helte, som du vil.
*   **Delt Tidslinje:** Pas på! Hvad en karakter gør, påvirker de andres verden. AI'en er bevidst om dine andre helte og vil genkende dem som indbyggere i verdenen.
*   **AI med "Sanser" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerer som AI'ens "sladrehank", der giver den minder om verdenen, hvem der følger med, hvor du er, og hvad der lige er sket, så historien bliver 100% sammenhængende.

### Interfacet (Din kommandobro)

*   **Venstre Panel (DU):** Din Karakterark. Liv, mana, evner og hvor flot du er (Karisma).
*   **Centralt Panel (HISTORIEN):**
    *   **Opad:** Hvor fortælleren beskriver, hvad der sker.
    *   **Nedad:** Dine beslutningsknapper og tekstboksen til at skrive, hvad du vil gøre.
*   **Højre Panel (DINE TING):** Inventar og udstyr. Det digitale Diogenes' paradis.

---

## 📜 SPILREGLER (Ja, der er regler)

RolemIAster bruger et klassisk og robust d100-system (hundrede-sidet terning).

### 1. Dine Attributter (Hvad der definerer dig)
AI'en genererer dine attributter baseret på den kontekst, profession og beskrivelse, du har indtastet. Når de er genereret, har du **10 EKSTRA POINT** til at fordele efter din egen vilje.
*   **Stigende Omkostninger:** At øge en attribut op til 14 koster 1 point. Fra 15 til 16 koster det 2 point. Fra 17 koster det 3 point! Tænk godt over, hvor du lægger musklerne.

*   💪 **Styrke (STR):** Din rene fysiske kraft. Påvirker nærkampsskade og din bæreevne.
*   ❤️ **Konstitution (KON):** Din udholdenhed. Til at modstå slag, sygdomme og gifte.
*   🐘 **Størrelse (STO):** Din omfang. Stor og tung, eller lille og undvigende.
*   🏃 **Behændighed (BEH):** Smidighed, sigteevne og undgå at snuble over dine egne fødder.
*   🧠 **Intelligens (INT):** At lære, huske og løse gåder.
*   🔮 **Kraft (KRA):** Din sjæl, din held, viljestyrke og din magiske reserve.
*   😎 **Karisma (KAR):** Lederskab, tiltrækningskraft og evnen til at snyde (eller forføre) folk.

### 2. Hurtig Matematik (Afledte Egenskaber)
Motoren beregner disse tal automatisk baseret på dine attributter:

*   🩸 **Liv (LV):** `CON * 10`. Hvis det når 0... ja, du ved det. Død.
*   ✨ **Mana (MA):** `(POD * 10) + INT`. Drivmidlet til dine magiske tricks. Uden mana, ingen tricks. (En troldmand uden mana er bare en fyr i kappe, der laver cosplay).
*   ⚡ **Udholdenhed (UD):** `((CON+FUE+DES)/3)*10 + POD`. Din energi til at kæmpe og bevæge dig uden at dø i forsøget.
*   🧠 **Menneskelighed (MEN):** `(CON+POD) * 5`. (Kun i Cyberpunk: Måler, hvor meget der er tilbage af dig, før kablerne gør dig skør).
*   ⚔️ **Handlingspoint (HP):** `(INT + DES) / 2`. Bestemmer din initiativ. Den, der rammer først, rammer dobbelt.

### 3. Dine Færdigheder
Starter med en basisværdi (f.eks. Snigeri = BEH + INT) og forbedres ved brug. Det er en procentdel (%).

### 4. Afvikling af Handlinger (Terningen)
Når du forsøger at gøre noget risikabelt (klatre, lyve, angribe...), beder AI'en dig om at kaste. Spillet kaster en usynlig **d100**. **(Husk: Terningerne hader dig. Det er personligt).**

*   **Dit Mål:** At slå et tal **LIGE UNDER ELLER LIGE OVER** dit færdighedsniveau.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du slår en 30: ✅ **Succes**. Du klatrer som en abe.
    *   Du slår en 80: ❌ **Fejl**. Du falder og slår dig.
    *   **Kritisk:** At slå mindre end eller lig med **1/5 af din færdighed** (eller en 01). Episk! Du udfører en ekstraordinær parkour med et saltomortale.
    *   **Fejlslag:** En **99 eller 100**. Terningerne har besluttet, at det ikke er din dag. Dine bukser falder ned halvvejs, og du falder med ansigtet først.

---

## 💡 TIPS TIL IKKE AT DØ (FORDI SKADEN ER STOR)

*   **✍️ Vær Beskrivende:** Skriv ikke kun "jeg angriber". Skriv: *"Jeg forsøger at undvige hans økse ved at rulle hen over jorden og stikker ham med min dolk i anklen"*. AI'en vil belønne dig.
*   **🧪 Eksperimenter:** Du er ikke begrænset til knapperne. Skriv skøre ting! AI'en vil improvisere.
*   **🎭 Rollespil:** Lev dig ind i rollen. Læs beskrivelserne og handl, som din karakter ville, ikke som du selv ville gøre i pyjamas.

---

## ⚔️ KAMP (Til våbnene!)

Når ord ikke længere er nok, kommer tiden til slag. Kampen er **taktisk** og fungerer i **Ticks** (tid).

### 🕹️ Sådan fungerer det:
*   **Ticks:** Hver handling koster tid. Tunge våben er langsomme (bruger mange ticks). Dolke er hurtige.
*   **Din Hastighed:** Afhænger af dine Handlingspoint (HP).

### Grundlæggende Handlinger:
*   **🗡️ Angrib:** Slå til med det, du har trukket.
*   **🛡️ Bloker:** Sæt dig i defensiven. Reducerer skade, men bruger udholdenhed.
*   **🏃 Flygt:** For kujoner (eller kloge folk, der vil leve).
*   **🏳️ Giv op:** Hvis du kan se, at du ikke vinder, kan du bede om nåde.
*   **✨ Magi / Cyberware:** Ildkugler, laserstråler, hacks...

### 💬 Frit Tekst Handlinger (NYT!)
Kan du ikke lide knapperne? Skriv, hvad du vil gøre, som om du talte med en rigtig spilmester!
*   **Eksempler:** *"Kast ildkugle efter goblinen"*, *"Træk mit runeridder sværd"*, *"Brug eliksir på mig selv"*.
*   **Sceneinstruktør:** Kampen får nu liv. AI'en genererer miljømæssige begivenheder og reaktioner, der beriger fortællingen: faldende bjælker, fjender der trækker sig tilbage, faldende fakler. Kamparenaen er ikke længere statisk!
*   **Hvis AI'en ikke forstår:** Den vil bede dig om at omformulere. Din tur går **IKKE** tabt!
*   **⚠️ Begrænsning:** At flytte genstande mellem slots (udstyre fra rygsæk, lade ammunition) gøres med **Drag & Drop** i interfacet, ikke via tekst.

### ⚠️ GULDREGEL FOR OVERLEVELSE
**TRÆK VÅBEN FØR KAMPEN!**
At trække våben midt i kampen koster tid (Ticks). Hvis du bliver fanget med sværdet i skeden, vil du få tæsk, mens du klodset forsøger at trække det ud. ELLER VÆRRE ENDNU!, HVIS DU HAR DINE VÅBEN I RYGSÆKKEN I STEDET FOR I UTRUSTNINGSSPOLLEN (Undskyld et øjeblik, jeg skal lige have huggerten ud af rygsækken, jeg er sikker på, jeg havde den et sted... et eller andet sted...) 🤦‍♂️
👉 Klik på **etiketten på det udstyrede våben** (højre panel) for at trække det. Det lyser grønt.

Forsøg på at flytte våben i kamp koster tid (Ticks) og kan resultere i et overraskelsesangreb, desuden er der stor sandsynlighed for, at du mister din tur, at du rammer ved siden af af nerverne over øksen, der nærmer sig dit mellemstykke, eller at du taber den på jorden. (Måske var det ikke en god idé at skabe en karakter med ADHD)

---

## ✨ MAGI OG CYBERNETIK

Afhængigt af om din verden er "Middelalderlig Fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Forhekselser
Er du en troldmand? Du kan fortrylle dit udstyr.
1.  **Lær:** Du skal have besværgelsen i din grimoire.
2.  **Kast (Drag & Drop):** Træk besværgelsen fra din liste hen over genstanden i dit inventar.
3.  **Omkostning:** At opretholde en fortryllelse aktiv **koster Mana pr. tur**.
4.  **Advarsel:** Hvis du løber tør for mana midt i kampen, bliver dit ildsværd igen et stykke rustent jern.

### 🦾 Cyberpunk: Implantater
Vil du have øjne med zoom eller gorilla-arme?
1.  Find en **Tekno-Kirurg** (NPC til service).
2.  Betal kreditterne (intet er gratis i fremtiden).
3.  **Menneskelighedsomkostning:** Hvert implantat koster dig et stykke af din sjæl (**Menneskelighed**).
    *   Hvis du får for mange, bliver du til en **Cyberpsykopat** (en morderisk brødrister på ben) og mister kontrollen over din karakter.

---

## 🛒 BUTIKKER OG SERVICES (SIS)

Tal med NPC'er for at handle.
*   **AI Foreslår, Du Bestemmer:** Når du taler med en købmand eller helbreder, vil AI'en foreslå deres services (reparation, salg, helbredelse), men en **"Vis Services"**-knap vil dukke op, så du kan bestemme, hvornår du går ind i transaktions-tilstand.
*   **Forhandling:** Din **Handel**-færdighed (baseret på Karisma) bestemmer priserne. Hvis du er grim eller ubehøvlet, vil du blive snydt.
*   **Salg:** Højreklik på en genstand i dit inventar for at sælge den til butiksindehaveren, eller træk den hen på ham.

---

## 🎒 INVENTARSTYRING (Tetris)

*   **Vægt:** Du har en bæreevne (Styrke + Størrelse). Hvis du bærer for meget skrammel, vil du være langsom og straffet (Diogenes er ikke din ven).
*   **Paneler:**
    *   **Udstyr:** Det du har på dig.
    *   **Bælte:** Hurtig adgang i kamp (koster mindre tid at bruge eliksirer herfra).
    *   **Rygsæk:** Bunden af sækken.
*   **Flydende Brug:** Træk en eliksir eller mad direkte på **dit ansigt** (portrættet) for at indtage den øjeblikkeligt. Du kan også bruge kontekstmenuen (højreklik -> Brug).

---

## 🛠️ FINALE JUSTERINGER

I **Indstillinger**-menuen kan du justere alt:
*   **🌍 Sprog:** AI'en vil oversætte hele spillet og svarene undervejs. Polyglot-tilstand aktiveret.
*   **👁️ Udseende:** Skriftstørrelse og farver, for ikke at blive blind. Neon-kanter og bløde skygger for fuld fordybelse.
*   **🧠 AI-justeringer:** Skift model, temperatur osv. (Husk, hvad vi har gennemgået i starten af manualen om `--advanced` flaget, hvis du er en af dem, der vil røre ved alt).

---

## 🎭 SVÆRHEDSGRAD OG HUMOR (Tilpas din lidelse)

Før du starter, husk at AI'en ikke kun fortæller, men også **tilpasser verden** efter dine præferencer. Disse parametre vælges, når verdenen oprettes, og er permanente for den pågældende verden:

*   **🎮 Sværhedsgrad (Administreret af AI):** Det er ikke bare en skadesmultiplikator. Spillet siger til AI'en: "Hey, sværhedsgraden er denne, ager derefter."
    *   **Let:** Du vil aldrig dø (eller det vil være næsten umuligt), situationerne er enklere, priserne er billigere, og fjenderne er mere klodsede. AI'en vil ræsonnere hver scene for at gøre din vej til en rosenmark.
    *   **Normal:** Standardbalancen.
    *   **Udfordring:** AI'en vil være hensynsløs, priserne uoverkommelige, og enhver fejl kan være den sidste.

*   **🃏 Humoristisk Tone:** Definerer, hvordan AI'en taler til dig, og hvilken type begivenheder der finder sted. Selvom hver model har sin egen måde at fortolke begrebet "humor" på, vil AI'en forsøge at tilpasse sig det, du vælger... eller ej:
    *   **Seriøs:** En episk, mørk og formel fortælling.
    *   **Sarkastisk:** AI'en vil grine af dine fejl, kaste konstante stikpiller efter dig og bruge en ironisk tone.
    *   **Vanvittig:** Gør dig klar til det absurde. Flyvende køer, surrealistiske situationer og totalt kaos styret af AI'ens mest snoede logik.

---

## 🚧 Bemærk: Early Access

RolemIAster er under **aktiv udvikling**, der simrer langsomt.
*   Du kan finde fejl (eller "uventede funktioner").
*   Jeg tilføjer nye ting hver uge.
*   Din feedback er guld værd! Fortæl mig, hvad du kan lide, og hvad du kan lide rigtig meget. (Hvis du ikke kan lide noget, så fortæl mig det også, men pænt).

Gå nu ud, kast initiativ, og skab din legende!

<!-- source_hash: 9af75cff -->