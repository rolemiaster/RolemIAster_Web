# 🐉 Velkommen til RolemIAster!

Grib dine terninger (eller din mus) og gør dig klar til at opleve eventyr, hvor den eneste grænse er, hvor snoet din fantasi er! **RolemIAster** er et uendeligt AI-drevet rollespil, der lader dig være helten (eller skurken) i dine egne historier.

---

## ⚠️ JURIDISK ANSVARSFRASKRIVELSE (Den kedelige, men nødvendige del)

**LÆS DENNE ELLER LID UNDER TERNINGERNES VREDEN:**

1.  **🤖 Lokal Integreret AI:** RolemIAster medbringer sin egen digitale hjerne. Den fungerer **uden internet** og uden at du skal røre ved noget mærkeligt. Installer og spil!
2.  **☁️ Valgfri Cloud:** Hvis du foretrækker at bruge penge på eksterne AI'er (OpenAI, Gemini...), så er det dit eget ansvar med dit kreditkort. Omkostningerne er dine.
3.  **🎲 Generativt Kaos:** AI'en opfinder historien undervejs. Hvis fortælleren bliver skør og siger, at det regner køer, så se ikke på os. Udvikleren er ikke ansvarlig for de vanvittige ting, som modellen genererer.
4.  **🏗️ Tidlig Adgang:** Dette er under konstruktion. Hvis du finder en fejl, er det ikke en fejl, det er en overraskende "feature"! (Send os feedback, tak, det hjælper os meget).

---

## 🖥️ SYSTEMKRAV OG DIGITALE HJERNER (AI)

RolemIAster fungerer med **Lokal Kunstig Intelligens**. Det betyder, at din pc vil udføre det tunge tankearbejde. Du behøver ikke internet, men du har brug for et grafikkort, der ikke er fra dinosaurernes tid. (Bemærk: Hvis der er koldt i dit værelse, fungerer dette spil som gratis opvarmning).

### ⚙️ Koncepter for ikke-initiater

**VRAM (Video RAM)** er AI'ens benzin.
*   RolemIAster skal "huske" mellem **12.000 og 16.000 ord (tokens)** for ikke at miste tråden i historien.
*   Hvis din GPU løber tør for hukommelse, vil spillet være langsommere end en snegl med astma.

---

### 📊 MODELKATALOG (Vælg din gift)

Administrer dine AI'er under **Indstillinger → Lokal Integreret AI → Administrer Modeller**.

#### 🏆 Qwen 2.5 Familien (Crème de la crème)

| Model        | Størrelse | Minimum VRAM | Tier | Vurdering                                                                    |
| :----------- | :-------- | :----------- | :--- | :--------------------------------------------------------------------------- |
| **Qwen2.5-3B** | ~2.5GB    | **8GB**      | B    | 👶 **Praktikanten.** Gør det, men bed den ikke om at skrive Shakespeare. Forvirrer sig nogle gange. |
| **Qwen2.5-7B** | ~5.5GB    | **12GB**     | A    | ✅ **DEN UDVALGTE.** Balanceret, smart og hurtig. Det er den anbefalede standardmodel. |
| **Qwen2.5-14B**| ~10GB     | **16GB**     | S    | 🧐 **Professoren.** Rig, dyb fortælling og meget naturlige dialoger.           |
| **Qwen2.5-32B**| ~22GB     | **32GB**     | S+   | 👑 **Gud-niveau.** Du behøver et rumskib (RTX 3090/4090) for at køre dette.     |

---

### 🎮 HURTIG VALG GUIDE

| Dit Grafikkort | VRAM     | Anbefalet Model | Resultat                               |
| :------------- | :------- | :-------------- | :------------------------------------- |
| GTX 1050/1060  | 4GB      | Qwen2.5-3B      | 🆗 Lige akkurat, men spilbart (lav kontekst) |
| GTX 1070/1660  | 6GB      | Qwen2.5-3B      | 🆗 Går fint                               |
| RTX 2060/3060  | 8GB      | Qwen2.5-3B      | 🚀 Flyver                               |
| RTX 3070/4060Ti| 12GB     | **Qwen2.5-7B**  | ✅ Den ideelle oplevelse                |
| RTX 3090/4080  | 16-24GB  | Qwen2.5-14B     | 🌟 Luksus                               |
| RTX 4090       | 24GB     | Qwen2.5-32B     | 👑 Maksimal kvalitet                   |

**💡 Pro Tip:** Lad altid ca. **2 GB VRAM være ledig** til operativsystemet, ellers begynder Windows at græde og lukke ting ned.

---

### 🚨 HJÆLP! MIN PC ER LANGSOM! (VRAM-problemer)

Hvis spillet tager længere tid at svare end din crush på WhatsApp, er du sandsynligvis løbet tør for VRAM.

**Symptomer på, at du har været for klog:**
1.  **Modellen tippes over til RAM:** PC'en bruger normal hukommelse i stedet for grafikhukommelse. Resultat: EKSTREM LANGSOMHED.
2.  **Let oversvømmelse (1-2GB):** Tager 30-60 sekunder per svar.
3.  **Moderat oversvømmelse (3-5GB):** 2-5 minutter. Du kan gå ud og hente en kop kaffe.
4.  **Alvorlig oversvømmelse:** 10-30 minutter. Uspilbart.

#### 🛡️ Nødprotokol
Hvis det går galt, følg disse trin i rækkefølge:

1.  **📉 Reducer % VRAM:** Gå til Indstillinger og reducer den til **85%**. Genstart og prøv.
2.  **🧹 Rengøring:** Luk den browser med 40 åbne faner. De æder din hukommelse.
3.  **🛑 70% Grænsen:** Gå aldrig under **70%** af tildelt VRAM.
    *   *Hvorfor?* Fordi AI'en har brug for plads til at "tænke" (KV-cachen). Hvis du giver den mindre end 70%, bliver den tom og fejler.
4.  **🔙 Taktisk tilbagetrækning:** Hvis intet virker, skift til en mindre model (gå fra 7B til 3B).

---

### ⚙️ AVANCERET MODELKONFIGURATION

For dem, der kan lide at pille ved knapper i **Indstillinger → Lokal Integreret AI**:

| Indstilling       | Funktion                                         | Anbefaling                                              |
| :---------------- | :----------------------------------------------- | :------------------------------------------------------ |
| **GPU Layers**    | Hvor meget af modellen der indlæses på grafikkortet | **-1** (Betyder "ALT". Rør ikke ved det, medmindre du ved, hvad du gør) |
| **Maksimal Kontekst** | AI'ens "korttidshukommelse"                      | **16384 - 32768** (Mindre end dette, og AI'en får hukommelsestab) |
| **Temperatur**    | Kreativitet vs. Vanvid                             | **0.7 - 0.8** (Højere = mere vanvittig; Lavere = mere robotagtig) |
| **Historik RAG**  | Huske ting fra lang tid siden                    | **Ja** (Uundværligt til lange kampagner)                  |
| **Cache Embeddings**| Fremskynder hukommelsessøgning                    | **Ja** (Gør det hurtigere)                                |

---

### 🔧 FEJLSØGNING (Troubleshooting)

| Problem              | Løsning                                                                   |
| :------------------- | :------------------------------------------------------------------------ |
| **Langsom AI / Lag** | Bekræft, at `GPU Layers` er -1. Luk Chrome. Reducer `Maksimal Kontekst`.     |
| **Hukommelsesfejl (OOM)** | Reducer `Maksimal Kontekst` eller vælg en mindre model (3B).              |
| **AI'en vrøvler / Hallucinerer** | Reducer `Temperatur` til 0.6. Hvis den stadig er skør, genstart applikationen. |

---

### 🌐 ALTERNATIVE UDBYDERE (Kun eksperter)

> **Bemærk:** Den lokale AI, der følger med spillet, er mere end nok. Dette er kun for avancerede eller modige brugere.

*   **Eksterne Lokale Motor:**
    *   **Ollama / LM Studio:** Hvis du allerede har dine egne nørdede modeller, kan du bruge dem.
*   **Cloud API'er (Betalingsbaseret):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kræver internet og penge.
    *   Konfigurer det under: **Indstillinger → AI → Tilføj Ny Udbyder**.

---

## 🎲 HVORDAN SPILLER MAN?

Når du åbner spillet, har du to muligheder:

1.  **🆕 Nyt Eventyr**: Skab din legende fra bunden. Spillet guider dig til at vælge race, klasse, verden og præmis. (Hvis livet giver dig citroner... eller et 3 i Styrke, så bliv Barde).
2.  **💾 Indlæs Spil**: Fortsæt præcis, hvor du slap før den ydmygende død. (Eller for at rette den "lille beregningsfejl" med dragen).

### Grænsefladen (Din kommandocentral)

*   **Venstre Panel (DIG):** Din Karakterark. Liv, mana, evner og hvor flot du er (Karismakontrol).
*   **Centralt Panel (HISTORIEN):**
    *   **Oppe:** Hvor fortælleren fortæller, hvad der sker.
    *   **Nede:** Dine beslutningsknapper og tekstfeltet til at skrive, hvad du vil gøre.
*   **Højre Panel (DINE TING):** Inventar og udstyr. Et paradis for en digital Diogenes.

---

## 📜 SPILREGLER (Ja, der er regler)

RolemIAster bruger et klassisk og robust d100 (hundredsidet terning) system.

### 1. Dine Attributter (Hvad der definerer dig)
Genereres tilfældigt, ligesom i det gode gamle bordrollespil!

*   💪 **Styrke (STY):** Til at slå hårdt og løfte sten.
*   ❤️ **Konstitution (KON):** Til at modstå slag, sygdomme og gifte.
*   🐘 **Størrelse (STØ):** Stor og tung, eller lille og undvigende.
*   🏃 **Behændighed (BEH):** Agilitet, sigteevne og undgå at falde over dine egne fødder.
*   🧠 **Intelligens (INT):** Lære, huske og løse gåder.
*   🔮 **Kraft (KRA):** Din sjæl, din held, viljestyrke og magi.
*   😎 **Karismakontrol (KAR):** Lederskab, tiltrækningskraft og evne til at narre folk.

### 2. Hurtig Matematik (Afledte Egenskaber)
*   **Liv (LP):** `(KON + STØ) / 2`. Hvis det når 0... ja, du ved. DØD.
*   **Mana (MP):** Lige med din KRA. Uden mana, ingen tricks. (En magiker uden mana er bare en fyr i kappe, der laver cosplay).
*   **Handlingspoint (HP):** `(INT + BEH) / 2`. Bestemmer din Initiativ. Den, der slår først, slår to gange.

### 3. Dine Evner
Starter med en basisværdi (f.eks. Sniger = BEH + INT) og forbedres ved brug. Det er en procentdel (%).

### 4. Løsning af Handlinger (Terningen)
Når du forsøger at gøre noget risikabelt (klatre, lyve, angribe...), vil AI'en bede dig om et terningkast.
Spillet kaster en usynlig **d100**. **(Husk: Terningerne hader dig. Det er personligt).**

*   **Dit Mål:** Kast **MINDRE END ELLER LIGE MED** din evne.
    *   *Eksempel:* Du har 45% i Klatring.
    *   Du kaster et 30: ✅ **Succes**. Du klatrer som en abe.
    *   Du kaster et 80: ❌ **Fiasko**. Du falder på numsen.
    *   Du kaster et 01-05: ✨ **KRITISK SUCCES!** Du laver episk parkour med en saltomortale.
    *   Du kaster et 99-100: 💀 **FEJLSLAG!** Dine bukser falder ned midt på vejen, og du falder på hovedet.

---

## 💡 TIPS TIL IKKE AT DØ (SÅ HURTIGT)

*   **✍️ Vær Beskrivende:** Skriv ikke bare "angriber". Skriv: *"Jeg forsøger at undvige hans økse ved at rulle hen over jorden og stikker min dolk i hans ankel"*. AI'en vil belønne dig.
*   **🧪 Eksperimenter:** Du er ikke begrænset til knapperne. Skriv vanvittige ting! AI'en vil improvisere.
*   **🎭 Rollespil:** Kom ind i rollen. Læs beskrivelserne og opfør dig, som din karakter ville, ikke som du ville i pyjamas.

---

## ⚔️ KAMP (Til våben!)

Når ordene svigter, kommer tiden til bank. Kampen er **taktisk** og fungerer i **Ticks** (tid).

### 🕹️ Hvordan det fungerer:
*   **Ticks:** Hver handling koster tid. Tunge våben er langsomme (bruger mange ticks). Dolke er hurtige.
*   **Din Hastighed:** Afhænger af dine Handlingspoint (HP).

### Grundlæggende Handlinger:
*   **🗡️ Angrib:** Slå med det, du har trukket.
*   **🛡️ Bloker:** Du går i defensiven. Reducerer skade, men bruger udholdenhed.
*   **🏃 Flygt:** Af kujoner (eller kloge folk, der vil leve).
*   **🏳️ Overgiv Dig:** Hvis du ser, du ikke vinder, kan du bede om nåde.
*   **✨ Magi / Cyberware:** Ild, laserstråler, hacking...

### ⚠️ GYLDEN OVERLEVELSESREGEL
**TRÆK VÅBEN INDEN KAMPEN!**
At trække våbnet midt i kampen koster tid (Ticks). Hvis du bliver fanget med sværdet i skeden, vil du få tæsk, mens du forsøger at trække det klodset. ELLER VÆRRE ENDNU!, HVIS DU HAR DINE VÅBEN I RYGSÆKKKEN I STEDET FOR I UDSTYRSPLADSEN (Undskyld et øjeblik, jeg skal lige finde sværdet i rygsækken, jeg havde det vist lige her... et eller andet sted...) 🤦‍♂️
👉 Klik på etiketten af det udstyrede våben (højre panel) for at trække det. Det vil lyse grønt.

Forsøg på at flytte våben i kamp koster tid (Ticks) og kan resultere i et overraskelsesangreb, desuden er det meget sandsynligt, at du mister din tur, fejler på grund af nerverne fra den økse, der nærmer sig panden, eller at du taber den på jorden. (Måske var det ikke en god idé at skabe en karakter med ADHD)

---

## ✨ MAGI OG CYBERNETIK

Afhængigt af om din verden er "Middelalder Fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Fortryllelser
Er du en troldmand? Du kan fortrylle dit udstyr.
1.  **Lær:** Du skal bruge besværgelsen i din grimoire.
2.  **Kast (Træk og Slip):** Træk besværgelsen fra din liste over genstanden i dit inventar.
3.  **Omkostning:** At holde en fortryllelse aktiv **bruger Mana per tur**.
4.  **Bemærk:** Hvis du løber tør for mana midt i kampen, bliver ildsværdet igen bare et rustent stykke jern.

### 🦾 Cyberpunk: Implantater
Vil du have øjne med zoom eller abearme?
1.  Find en **Teknokirurg** (NPC til tjeneste).
2.  Betal kreditterne (intet er gratis i fremtiden).
3.  **Humanitetsomkostning:** Hvert implantat koster dig et stykke sjæl (**Humanitet**).
    *   Hvis du sætter for mange ind, bliver du en **Cyberpsykopat** (en dræbende brødrister på ben) og mister kontrollen over din karakter.

---

## 🛒 BUTIKKER OG TJENESTER

Tal med NPCs for at handle.
*   **Forhandling:** Din evne til **Handel** (baseret på Karisma) bestemmer priserne. Hvis du er grim eller uvenlig, vil du blive snydt.
*   **Sælg:** **Højreklik** på en genstand i dit inventar for at sælge den til købmanden.

---

## 🎒 INVENTARSTYRING (Tetris)

*   **Vægt:** Du har en bæreevne (Styrke + Størrelse). Hvis du bærer for meget skrammel, vil du bevæge dig langsomt og få straf (Diogenes er ikke din ven).
*   **Paneler:**
    *   **Udstyr:** Det du har på.
    *   **Bælte:** Hurtig adgang i kamp (det koster mindre tid at bruge eliksirer herfra).
    *   **Rygsæk:** Bunden af sækken.
*   **Hurtig Brug:** Træk en eliksir eller mad direkte over **dit ansigt** (portrættet) for at forbruge den øjeblikkeligt.

---

## 🛠️ FINALE JUSTERINGER

I **Indstillinger**-menuen kan du pille ved alt:
*   **🌍 Sprog:** AI'en oversætter hele spillet og svarerne for dig i farten.
*   **👁️ Udseende:** Skriftstørrelse og farver, så du ikke bliver blind.
*   **🧠 AI Justeringer:** Skift model, temperatur osv.

---

## 🚧 Bemærk: Tidlig Adgang

RolemIAster er under **aktiv udvikling**, der simrer langsomt.
*   Du kan finde fejl (eller "uventede funktioner").
*   Jeg tilføjer nye ting hver uge.
*   Din feedback er guld værd! Fortæl mig, hvad du kan lide, og hvad du virkelig kan lide.

Gå nu, kast initiativ, og skab din legende!

<!-- source_hash: 2511f352 -->