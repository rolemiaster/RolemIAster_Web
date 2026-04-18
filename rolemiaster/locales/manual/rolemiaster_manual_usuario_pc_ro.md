# 🐉 Bun venit la RolemIAster!

Prinde-ți zarurile (sau mouse-ul) și pregătește-te să trăiești aventuri unde singura limită este cât de răsucită îți este imaginația! **RolemIAster** este un joc de rol infinit, alimentat de Inteligență Artificială, care îți permite să fii eroul (sau răufăcătorul) propriilor tale povești.

---

## ⚠️ NOTĂ LEGALĂ (Partea plictisitoare, dar necesară)

**CITEȘTE SAU VEI SUferi IRA ZARURILOR:**

1.  **🤖 IA Local Integrată:** RolemIAster își aduce propriul creier digital. Funcționează **fără internet** și fără să fie nevoie să atingi ceva ciudat. Instalează și joacă!
2.  **☁️ Cloud Opțional:** Dacă preferi să cheltuiești banii pe IA externe (OpenAI, Gemini...), e problema ta cu cardul de credit. Costurile sunt pe cont propriu.
3.  **🎲 Haos Generativ:** IA inventează povestea pe parcurs. Dacă naratorul înnebunește și spune că plouă cu vaci, nu te uita la noi. Dezvoltatorul nu își asumă responsabilitatea pentru nebuniile pe care le generează modelul.
4.  **🏗️ Acces Anticipat:** Acesta este încă în construcție. Dacă găsești un bug, nu este un defect, este o "funcție" surpriză! (Trimite-ne feedback, te rugăm, ne ajută mult).

---

## 🖥️ CERINȚE DE SISTEM ȘI CREIERE DIGITALE (IA)

RolemIAster funcționează cu **Inteligență Artificială Locală**. Asta înseamnă că PC-ul tău va face munca grea de a gândi. Nu ai nevoie de internet, dar ai nevoie de o placă grafică care nu este din epoca dinozaurilor. (Notă: Dacă îți este frig în cameră, acest joc funcționează ca o încălzire gratuită).

### ⚙️ Concepte pentru începători

**VRAM (Memorie Video)** este benzina IA.
*   RolemIAster trebuie să "țină minte" între **12.000 și 16.000 de cuvinte (token-uri)** pentru a nu pierde firul poveștii.
*   Dacă GPU-ul tău rămâne fără memorie, jocul va fi mai lent decât un melc cu astm.

---

### 📊 CATALOG DE MODELE (Alege-ți otrava)

Gestionează-ți IA în **Configurare → IA Locală Integrată → Gestionare Modele**.

#### 🏆 Familia Qwen 3.5 — Antrenați specific pentru RolemIAster

Aceste modele au fost antrenate prin **Fine-Tuning Supervizat (SFT)** pentru a stăpâni regulile narative ale jocului. Nu sunt modele generice: cunosc contractul JSON al RolemIAster, NPC-urile, inventarul și lupta pe de rost.

| Model | Dimensiune | VRAM Minimă | Nivel | Verdict |
|--------|--------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **Viteza Fulgerului.** Cel mai rapid dintre toți. Ideal pentru GPU-uri de bază sau pentru a juca fără GPU dedicat. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **ECHILIBRUL PERFECT.** Viteză și calitate optime. Model standard recomandat pentru majoritatea jucătorilor. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **Narațiunea Captivantă.** Narativă bogată și coerență superioară. Pentru cei care au un RTX 3070 sau mai bun. |

---

### 🎮 GHID RAPID DE ALEGERE

| Grafică | VRAM | Model Recomandat | Rezultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Fără GPU | 2-4GB | **Qwen3.5-2B** | 🆗 Aproape, dar jucabil |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Experiență foarte bună |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Rapid și precis |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 Experiența ideală |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Calitate maximă, răspunsuri ultra-rapide |

**💡 Sfat Pro:** Lasă întotdeauna cam **2GB de VRAM liberi** pentru sistemul de operare, altfel Windows va începe să plângă și să închidă lucruri.

---

### 🚨 SOS! PC-UL MEU E LENT! (Probleme de VRAM)

Dacă jocul durează mai mult să răspundă decât colegul tău de banc la școală, probabil că ai rămas fără VRAM.

**Simptome că te-ai crezut prea deștept:**
1.  **Modelul se mută în RAM:** PC-ul folosește memoria normală în loc de cea grafică. Rezultat: LENTITATE EXTREMĂ.
2.  **Depășire ușoară (1-2GB):** Va dura 30-60 de secunde pe răspuns.
3.  **Depășire moderată (3-5GB):** 2-5 minute. Poți să-ți iei o cafea.
4.  **Depășire severă:** 10-30 minute. Injocabil.

#### 🛡️ Protocol de Urgență
Dacă situația e gravă, urmează acești pași în ordine:

1.  **📉 Scade % VRAM:** Mergi la Configurare și scade la **85%**. Repornește și încearcă.
2.  **🧹 Curățare:** Închide acel browser cu 40 de file deschise. Îți mănâncă memoria.
3.  **🛑 Limita de 70%:** Nu coborî niciodată sub **70%** din VRAM alocată.
    *   *De ce?* Pentru că IA are nevoie de spațiu să "gândească" (cache-ul KV). Dacă îi dai mai puțin de 70%, va rămâne albă și va da eroare.
4.  **🔙 Retragere Tactică:** Dacă nimic nu funcționează, treci la un model mai mic (de la 9B la 4B, sau de la 4B la 2B).

---

### ⚙️ CONFIGURARE AVANSATĂ MODEL ("Frikire Maximă")

> **MODUL EXPERT:** Dacă ești un pro și vrei să accesezi setările avansate ale modelului (adăugarea propriilor modele GGUF descărcate de pe HuggingFace, manipularea straturilor etc.), trebuie să pornești jocul cu comanda: `--advanced`.

Pentru cei cărora le place să apese butoane în **Configurare → IA Locală Integrată**:

| Opțiune | Funcție | Recomandare |
|--------|---------|---------------|
| **GPU Layers** | Cât din model este încărcat în placa grafică | **-1** (Înseamnă "TOT". Nu te atinge decât dacă știi ce faci) |
| **Context Maxim** | "Memoria pe termen scurt" a IA | **16384 - 32768** (Mai puțin de atât și IA va avea amnezie) |
| **Temperatură** | Creativitate vs. Nebunie | **0.7 - 0.8** (Mai mare = mai nebun; Mai mic = mai robotic) |
| **RAG Istoric** | Ține minte lucruri de demult | **Da** (Indispensabil pentru campanii lungi) |
| **Cache Embeddings** | Accelerează căutarea amintirilor | **Da** (Îl face să meargă mai repede) |

---

### 🔧 SOLUȚIONAREA PROBLEMELOR (Troubleshooting)

| Problemă | Soluție |
|-------|---------|
| **IA Lentă / Lag** | Verifică dacă `GPU Layers` este -1. Închide Chrome. Scade `Contexto Máximo`. |
| **Eroare de Memorie (OOM)** | Redu `Contexto Máximo` sau alege un model mai mic (3B). |
| **IA delirează / Alucinații** | Scade `Temperatura` la 0.6. Dacă tot e nebună, repornește aplicația. |

---

### 🌐 FURNIZORII ALTERNATIVI (Doar pentru experți)

> **Notă:** IA locală pe care o include jocul este suficientă. Acesta este doar pentru utilizatori avansați sau curajoși.

*   **Motoare Locale Externe:**
    *   **Ollama / LM Studio:** Dacă ai deja modelele tale preferate, le poți folosi.
*   **API-uri Cloud (Contra cost):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Necesită internet și să cheltuiești bani.
    *   Configurează în: **Configurare → IA → Adaugă Furnizor Nou**.

---

### 🌍 CUM SE JOACĂ? (Multiversul și tu)

La deschiderea jocului, ai două căi:

1.  **🆕 Aventură Nouă**: Creează-ți legenda de la zero. Jocul îți va cere **Nume, Meserie (Profesiune), Descriere Fizică, Descriere Psihologică și Fundalul/Pretextul** poveștii tale. În plus, vei alege **Nivelul de Dificultate** și **Tonul de Umor** care vor ghida campania.
2.  **💾 Continuă Jocul**: RolemIAster **salvează în timp real**. Aici nu există "încarcă înainte să mori" sau cale de întoarcere. Fiecare decizie, fiecare gafă și fiecare rană sunt gravate în piatră în poveste. Este o **PROVOCARE**: ce faci, e făcut. Trăiește cu consecințele... sau mori cu ele.

RolemIAster nu este o partidă izolată; este un **Multivers Persistent**.
*   **Lumi Infinite:** Creează-ți propriile universuri (**Fantezie Medievală** sau **Cyberpunk**) cu propriul Lor.
*   **Personaje Infinite:** În fiecare lume, poți avea toți eroii pe care îi dorești.
*   **Linie Temporală Partajată:** Atenție! Ceea ce face un personaj afectează lumea celorlalți. IA este conștientă de ceilalți eroi ai tăi și îi va recunoaște ca locuitori ai lumii.
*   **IA cu "Simțuri" (Super RAG):** Sistemul RAG (Retrieval-Augmented Generation) acționează ca "turnătorul" IA, oferindu-i amintiri despre lume, cine te însoțește, unde ești și ce s-a întâmplat recent, pentru ca povestea să fie 100% coerentă.

### Interfața (Cabina ta de comandă)

*   **Panoul Stâng (TU):** Fișa Personajului tău. Viață, mană, abilități și cât de arătos ești (Carisma).
*   **Panoul Central (POVESTEA):**
    *   **Sus:** Unde naratorul povestește ce se întâmplă.
    *   **Jos:** Butoanele tale de decizie și caseta de text pentru a scrie ce vrei să faci.
*   **Panoul Drept (LUCRURILE TALE):** Inventarul și echipamentul. Paradisul unui Diogene digital.

---

## 📜 REGULILE JOCULUI (Da, există reguli)

RolemIAster folosește un sistem clasic și robust d100 (zar cu o sută de fețe).

### 1. Atributele Tale (Ce te definește)
IA generează atributele tale pe baza contextului, meseriei și descrierii pe care le-ai introdus. Odată generate, ai **10 PUNCTE EXTRA** de distribuit după bunul plac.
*   **Costuri Progresive:** Creșterea unui atribut până la 14 costă 1 punct. De la 15 la 16 costă 2 puncte. Dincolo de 17 costă 3 puncte! Gândește-te bine unde pui mușchiul.

*   💪 **Forța (FOR):** Puterea ta fizică pură. Afectează daunele corp la corp și capacitatea ta de transport.
*   ❤️ **Constituția (CON):** Rezistența ta. Pentru a suporta lovituri, boli și otrăvuri.
*   🐘 **Mărimea (MAR):** Dimensiunea ta. Mare și greu, sau mic și agil.
*   🏃 **Dexteritatea (DEX):** Agilitatea, precizia țintei și să nu te împiedici de propriile picioare.
*   🧠 **Inteligența (INT):** A învăța, a-ți aminti și a rezolva puzzle-uri.
*   🔮 **Puterea (PUT):** Sufletul tău, norocul tău, forța voinței și rezerva ta magică.
*   😎 **Carisma (CAR):** Liderism, atractivitate și capacitatea de a înșela (sau seduce) oamenii.

### 2. Matematica Rapidă (Caracteristici Derivate)
Motorul calculează aceste cifre automat pe baza atributelor tale:

*   🩸 **Viața (PV):** `CON * 10`. Dacă ajunge la 0... ei bine, știi. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Combustibilul pentru trucurile tale magice. Fără mană, nu există trucuri. (Un mag fără mană este doar un tip cu un halat, care face cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energia ta pentru luptă și mișcare fără să mori încercând.
*   🧠 **Umanitatea (UM):** `(CON+POD) * 5`. (Doar în Cyberpunk: Măsoară cât îți mai rămâne din om înainte ca firele să-ți înnebunească mintea).
*   ⚔️ **Puncte de Acțiune (PA):** `(INT + DES) / 2`. Determină Inițiativa ta. Cine lovește primul, lovește de două ori.

### 3. Abilitățile Tale
Încep cu o valoare de bază (ex: Furtivitate = DEX + INT) și se îmbunătățesc prin utilizare. Este un procent (%).

### 4. Rezolvarea Acțiunilor (Zarul)
Când încerci să faci ceva riscant (a escalada, a minți, a ataca...), IA îți va cere o aruncare. Jocul aruncă un **d100** invizibil. **(Amintește-ți: Zarurile te urăsc. E personal).**

*   **Obiectivul Tău:** Obține un număr **MAI MIC SAU EGAL** cu nivelul tău de abilitate.
    *   *Exemplu:* Ai 45% la Cățărare.
    *   Obții 30: ✅ **Succes**. Urcă ca o maimuță.
    *   Obții 80: ❌ **Eșec**. Cazi cu capul înainte.
    *   **Critic:** Obținerea unui scor egal sau mai mic de **1/5 din abilitatea ta** (sau un 01). Epic! Faci un parkour extraordinar cu o săritură.
    *   **Gafă:** Un **99 sau 100**. Zarurile au decis că azi nu e ziua ta. Pantalonii îți cad în mijlocul drumului și cazi cu fața.

---

## 💡 SFATURI PENTRU A NU MURI (RAPID)

*   **✍️ Fii Descriptiv:** Nu scrie doar "ataca". Scrie: *"Încerc să-i evit toporul, rostogolindu-mă pe jos, și îi înfig pumnalul în gleznă."* IA te va recompensa.
*   **🧪 Experimentează:** Nu ești limitat la butoane. Scrie nebunii! IA va improviza.
*   **🎭 Joacă Rolul:** Intră în pielea personajului. Citește descrierile și acționează ca personajul tău, nu cum ai face tu în pijama.

---

## ⚔️ LUPTA (La arme!)

Când cuvintele eșuează, vine ora bătăilor. Lupta este **tactică** și funcționează pe **Tick-uri** (timp).

### 🕹️ Cum funcționează:
*   **Tick-uri:** Fiecare acțiune costă timp. Armele grele sunt lente (folosesc multe tick-uri). Pumnalele sunt rapide.
*   **Viteza ta:** Depinde de Punctele tale de Acțiune (PA).

### Acțiuni de Bază:
*   **🗡️ Atacă:** Lovește cu ce ai la îndemână.
*   **🛡️ Blochează:** Te pui în defensivă. Reduce daunele, dar consumă Stamina.
*   **🏃 Fugi:** De la lași (sau de la înțelepți care vor să trăiască).
*   **🏳️ Predare:** Dacă vezi că nu câștigi, poți implora milă.
*   **✨ Magie / Cyberware:** Foc, raze laser, hackeri...

### 💬 Acțiuni prin Text Liber (NOU!)
Nu-ți plac butoanele? Scrie ce vrei să faci ca și cum ai vorbi cu un Game Master din carne și oase!
*   **Exemple:** *"Aruncă o minge de foc spre goblin"*, *"Scoate sabia mea runică"*, *"Folosește poțiunea pe mine"*.
*   **Regizor de Scenă:** Lupta prinde acum viață. IA generează evenimente ambientale și reacții care îmbogățesc narațiunea: grinzi care cad, inamici care se retrag, torțe care cad. Câmpul de luptă nu mai este static!
*   **Dacă IA nu înțelege:** Îți va cere să reformulezi. Turul tău NU se pierde!
*   **⚠️ Limitare:** Mutarea obiectelor între sloturi (echipare din rucsac, încărcare muniție) se face prin **Drag & Drop** în interfață, nu prin text.

### ⚠️ REGULA DE AUR DE SUPRAVIEȚUIRE
**SCOATE-ȚI ARMA ÎNAINTE DE A LUPTA!**
Scoate arma în mijlocul luptei consumă timp (Tick-uri). Dacă ești prins cu sabia în teacă, vei fi lovit până în buletin în timp ce încerci să o scoți stângaci. SAU MAI RĂU!, DACĂ MERGI CU ARMELE ÎN RUCKSAC ÎN LOC DE SLOTUL DE ECHIPARE (Scuzați-mă o secundă, trebuie să scot sabia mare din rucsac, cred că o aveam pe aici... pe undeva...) 🤦‍♂️
👉 Dă **Click pe eticheta armei echipate** (panoul din dreapta) pentru a o scoate. Se va aprinde verde.

Încercarea de a muta arme în luptă consumă timp (Tick-uri) și poate rezulta într-un atac surpriză, în plus, este foarte probabil să-ți pierzi turul, să greșești din cauza nervilor toporului care se apropie de frunte sau să ți-o scape pe jos. (Poate nu a fost o idee bună să-ți creezi un personaj cu TDAH)

---

## ✨ MAGIE ȘI CIBERNETICĂ

În funcție de dacă lumea ta este de "Fantezie Medievală" sau "Cyberpunk":

### 🧙‍♂️ Fantezie: Incantații
Ești vrăjitor? Poți să-ți încarci echipamentul.
1.  **Învață:** Ai nevoie de vrajă în grimoarul tău.
2.  **Aruncă (Drag & Drop):** Trage vraja din lista ta peste obiectul din inventarul tău.
3.  **Cost:** Menținerea unei incantații active **consumă Mană pe tur**.
4.  **Avertisment:** Dacă rămâi fără mană în mijlocul luptei, sabia de foc redevine o bucată de fier ruginit.

### 🦾 Cyberpunk: Implante
Vrei ochi cu zoom sau brațe de gorilă?
1.  Caută un **Tehnocirurg** (NPC de serviciu).
2.  Plătește creditele (nimic nu este gratis în viitor).
3.  **Cost de Umanitate:** Fiecare implant îți ia o bucată de suflet (**Umanitatea**).
    *   Dacă pui prea multe, vei deveni o **Cyberpsihoză** (un prăjitor de pâine cu picioare, ucigaș) și vei pierde controlul personajului.

---

## 🛒 MAGAZINE ȘI SERVICII (SIS)

Vorbește cu NPC-uri pentru a face comerț.
*   **IA Sugerează, Tu Decizi:** Când vorbești cu un negustor sau un vindecător, IA îți va sugera serviciile lor (reparare, vânzare, vindecare), dar va apărea un buton de **"Vezi Servicii"** pentru ca tu să decizi când intri în modul tranzacțional.
*   **Negociere:** Abilitatea ta de **Comerț** (bazată pe Carisma) decide prețurile. Dacă ești urât sau nepoliticos, te vor înșela.
*   **Vânzare:** Dă **Click Dreapta** pe un obiect din inventarul tău pentru a-l vinde negustorului sau trage-l peste el.

---

## 🎒 GESTIONAREA INVENTARULUI (Tetris)

*   **Greutate:** Ai o limită de încărcare (Forța + Mărimea). Dacă transporți prea mult fier vechi, vei merge lent și cu penalizări (Diogene nu este prietenul tău).
*   **Panouri:**
    *   **Echipament:** Ceea ce porți.
    *   **Centură:** Acces rapid în luptă (consumă mai puțin timp folosirea poțiunilor de aici).
    *   **Rucsac:** Fundul sacului.
*   **Utilizare Fluidă:** Trage o poțiune sau mâncare direct pe **fața ta** (portretul) pentru a o consuma instant. Poți folosi și meniul contextual (click dreapta -> Folosește).

---

## 🛠️ SETĂRI FINALE

În meniul de **Configurare** poți ajusta totul:
*   **🌍 Limbă:** IA îți va traduce tot jocul și răspunsurile pe loc. Mod poliglot activat.
*   **👁️ Aspect:** Mărimea fontului și culorile, pentru a nu-ți pierde vederea. Margini neon și umbre netezite pentru o imersiune totală.
*   **🧠 Setări IA:** Schimbă modelul, temperatura etc. (Amintește-ți ce am văzut la începutul manualului despre flag-ul `--advanced` dacă ești genul care vrea să bage nasul peste tot).

---

## 🎭 DIFICULTATE ȘI UMOR (Personalizează-ți suferința)

Înainte de a începe, amintește-ți că IA nu doar povestește, ci **ajustează lumea** conform preferințelor tale. Acești parametri se aleg la crearea lumii și sunt permanenți pentru acea lume:

*   **🎮 Dificultate (Gestionată de IA):** Nu este un simplu multiplicator de daune. Jocul îi spune IA: "Hei, dificultatea este aceasta, acționează în consecință".
    *   **Ușor:** Nu vei muri niciodată (sau va fi aproape imposibil), situațiile sunt mai simple, prețurile sunt mai mici, iar inamicii sunt mai neîndemânatici. IA va raționa fiecare scenă pentru ca drumul tău să fie unul cu trandafiri.
    *   **Normal:** Echilibrul standard.
    *   **Provocare:** IA va fi implacabilă, prețurile prohibitive, iar orice greșeală poate fi ultima.

*   **🃏 Ton de Umor:** Definește cum îți vorbește IA și ce tip de evenimente apar. Chiar dacă fiecare model are propria sa modalitate de a interpreta conceptul "umor", IA va încerca să se adapteze la ce alegi... sau nu:
    *   **Serios:** O narațiune epică, întunecată și formală.
    *   **Sarcastic:** IA va râde de greșelile tale, îți va arunca ghionturi constante și va folosi un ton ironic.
    *   **Delirant:** Pregătește-te pentru absurd. Vaci zburătoare, situații suprarealiste și haos total gestionat de logica cea mai răsucită a IA.

---

## 🚧 Notă: Acces Anticipat

RolemIAster este în **dezvoltare activă**, gătindu-se la foc mic.
*   Poți găsi bug-uri (sau "caracteristici neașteptate").
*   Adaug lucruri noi în fiecare săptămână.
*   Feedback-ul tău valorează aur! Spune-mi ce îți place și ce îți place foarte mult. (Dacă nu îți place ceva, spune-mi și asta, dar cu afecțiune).

Acum, pleacă, aruncă inițiativa și creează-ți legenda!

<!-- source_hash: 9af75cff -->