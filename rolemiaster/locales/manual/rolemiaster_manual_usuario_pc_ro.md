# 🐉 Bine ai venit la RolemIAster!

Ia-ți zarurile (sau mouse-ul) și pregătește-te să trăiești aventuri unde singura limită este cât de contorsionată este imaginația ta! **RolemIAster** este un joc de rol infinit, alimentat de Inteligență Artificială, care îți permite să fii eroul (sau răufăcătorul) propriilor tale povești.

---

## ⚠️ NOTIFICARE LEGALĂ (Partea plictisitoare, dar necesară)

**CITEȘTE SAU VEI SUferi IRA ZARURILOR:**

1.  **🤖 IA Locală Integrată:** RolemIAster își aduce propriul creier digital. Funcționează **fără internet** și fără să fie nevoie să atingi ceva ciudat. Instalează și joacă!
2.  **☁️ Cloud Opțional:** Dacă preferi să cheltuiești bani pe IA externe (OpenAI, Gemini...), asta e treaba ta și a cardului tău de credit. Costurile sunt pe umerii tăi.
3.  **🎲 Haos Generativ:** IA inventează povestea pe loc. Dacă naratorul o ia razna și spune că plouă cu vaci, nu te uita la noi. Dezvoltatorul nu este responsabil pentru nebuniile generate de model.
4.  **🏗️ Acces Timpuriu:** Acesta este în construcție. Dacă găsești un bug, nu este un defect, este o "funcționalitate" surpriză! (Trimite-ne feedback, te rugăm, ne ajută mult).

---

## 🖥️ CERINȚE DE SISTEM ȘI CREIERE DIGITALE (IA)

RolemIAster funcționează cu **Inteligență Artificială Locală**. Asta înseamnă că PC-ul tău va face treaba grea de a gândi. Nu ai nevoie de internet, dar ai nevoie de o placă video care nu este din epoca dinozaurilor. (Notă: Dacă îți este frig în cameră, acest joc funcționează ca o încălzire gratuită).

### ⚙️ Concepte pentru începători

**VRAM (Memoria Video)** este benzina IA.
*   Datorită **TurboQuant**, RolemIAster poate acum să rețină **peste 100.000 de cuvinte (token-uri)** — aproape de trei ori mai mult ca înainte — fără să-ți blocheze placa video.
*   Dacă GPU-ul tău rămâne fără memorie, jocul va merge mai încet decât o melc cu astm.

---

### 📊 CATALOG DE MODELE (Alege-ți otravă)

Gestionează-ți IA-urile în **Configurare → IA Locală Integrată → Gestionare Modele**.

#### 🏆 Familia Qwen 3.5 — Antrenate specific pentru RolemIAster

Aceste modele au fost antrenate cu **Fine-Tuning Supervizat (SFT)** pentru a stăpâni regulile narative ale jocului. Nu sunt modele generice: cunosc contractul JSON al RolemIAster, NPC-urile, inventarul și lupta din memorie.

| Model        | Dimensiune | VRAM Minim | Nivel | Verdict                                                                  |
|--------------|------------|------------|-------|--------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB     | **3GB**    | B     | ⚡ **Viteza Fulgerului.** Cel mai rapid. Ideal pentru GPU-uri de bază sau pentru jocuri fără GPU dedicat. |
| **Qwen3.5-4B** | ~2.8GB     | **4GB**    | A     | ✅ **ECHILIBRUL PERFECT.** Viteză și calitate optime. Model standard recomandat pentru majoritatea jucătorilor. |
| **Qwen3.5-9B** | ~5.5GB     | **8GB**    | S     | 🌟 **Naratorul.** Narativă bogată și coerență superioară. Pentru cei cu o RTX 3070 sau mai bună. |

---

### 🎮 GHID RAPID DE ALEGERE

| Placa ta video | VRAM | Model Recomandat | Rezultat                                   |
|----------------|------|-----------------|--------------------------------------------|
| GTX 1050/1060 / Fără GPU | 4GB | **Qwen3.5-2B** | 🆗 Chiar la limită, dar jucabil, foarte la limită... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Experiență bună                               |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Rapid și precis                               |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Experiența ideală                             |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Calitate maximă, răspunsuri ultra-rapide       |

**💡 Sfat Pro:** Lasă întotdeauna cam **2GB de VRAM liberi** pentru sistemul de operare, altfel Windows va începe să plângă și să închidă programe.

---

### 🚨 AJUTOR! PC-UL MEU MERGE ÎNCET! (Probleme de VRAM)

Dacă jocul durează mai mult să răspundă decât prietenul/a ta pe WhatsApp, probabil ai rămas fără VRAM.

**Simptome că ai fost prea ambițios:**
1.  **Modelul se mută în RAM:** PC-ul folosește memoria normală în loc de cea grafică. Rezultat: LENTOARE EXTREMĂ.
2.  **Depășire ușoară (1-2GB):** Va dura 30-60 secunde per răspuns.
3.  **Depășire moderată (3-5GB):** 2-5 minute. Poți să te duci să-ți iei o cafea.
4.  **Depășire severă:** 10-30 minute. Imposibil de jucat.

#### 🛡️ Protocol de Urgență
Dacă lucrurile merg prost, urmează acești pași în ordine:

1.  **📉 Scade % de VRAM:** Mergi la Configurare și scade-l la **85%**. Repornește și încearcă.
2.  **🧹 Curățenie:** Închide acel browser cu 40 de file deschise. Îți mănâncă memoria.
3.  **🛑 Limita de 70%:** Nu coborî niciodată sub **70%** din VRAM alocată.
    *   *De ce?* Pentru că IA are nevoie de spațiu să "gândească" (cache-ul KV). Dacă îi dai mai puțin de 70%, se va bloca și va da eroare.
4.  **🔙 Retragere Tactică:** Dacă nimic nu funcționează, treci la un model mai mic (de la 9B la 4B, sau de la 4B la 2B).

---

### ⚙️ CONFIGURARE AVANSATĂ A MODELULUI ("Freak Maxim")

> **MOD EXPERT:** Dacă ești un profesionist și vrei să accesezi configurarea modelelor avansate (să adaugi propriile modele GGUF descărcate de pe HuggingFace, să ajustezi straturi etc.), trebuie să pornești jocul cu comanda: `--advanced`.

Pentru cei cărora le place să apese pe butoane în **Configurare → IA Locală Integrată**:

| Opțiune             | Funcție                                                         | Recomandare                                    |
|---------------------|-----------------------------------------------------------------|------------------------------------------------|
| **GPU Layers**      | Cât din model se încarcă pe placa grafică                        | **-1** (Înseamnă "TOTUL". Nu atinge decât dacă știi ce faci) |
| **Context Maxim**   | "Memoria pe termen scurt" a IA                                  | **16384 - 32768** (Mai puțin de atât și IA va avea amnezie) |
| **Temperatură**     | Creativitate vs Nebunie                                         | **0.7 - 0.8** (Mai mult = mai nebun; Mai puțin = mai robotic) |
| **RAG Istoric**     | Reține lucruri de demult                                        | **Da** (Imprescindibil pentru campanii lungi)     |
| **Cache Embeddings**| Accelerează căutarea amintirilor                                | **Da** (Îl face să meargă mai repede)             |

---

### 🔧 SOLUȚIONARE PROBLEME (Troubleshooting)

| Problemă        | Soluție                                                                          |
|-----------------|----------------------------------------------------------------------------------|
| **IA Lentă / Lag**| Verifică dacă `GPU Layers` este -1. Închide Chrome. Scade `Contexto Máximo`. |
| **Eroare de Memorie (OOM)** | Reduce `Contexto Máximo` sau alege un model mai mic (3B).                   |
| **IA Delirează / Halucinează** | Scade `Temperatura` la 0.6. Dacă încă este nebună, repornește aplicația. |

---

### 🌐 FURNIZORII ALTERNATIVI (Doar pentru experți)

> **Notă:** IA locală pe care o aduce jocul este suficientă. Acesta este doar pentru utilizatori avansați sau curajoși.

*   **Motoare Locale Externe:**
    *   **Ollama / LM Studio:** Dacă ai deja modelele tale favorite, le poți folosi.
*   **API-uri Cloud (cu plată):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Necesită internet și să scoți bani din buzunar.
    *   Configurează-le în: **Configurare → IA → Adaugă Furnizor Nou**.

---

### 🌍 CUM SE JOACĂ? (Multiversul și tu)

La deschiderea jocului, ai două căi:

1.  **🆕 Aventură Nouă**: Creează-ți legenda de la zero. Jocul îți va cere **Nume, Meserie (Profesiune), Descriere Fizică, Descriere Psihologică și Fundalul/Pretextul** poveștii tale. În plus, vei alege **Nivelul de Dificultate** și **Tonul de Umor** care vor ghida campania.
2.  **💾 Continuă Jocul**: RolemIAster **salvează în timp real**. Aici nu există "încarcă înainte de a muri" sau cale de întoarcere. Fiecare decizie, fiecare greșeală și fiecare rană sunt înregistrate în foc în istorie. Este o **PROVOCARE**: ce faci, este făcut. Trăiește cu consecințele... sau mori cu ele.

RolemIAster nu este o partidă izolată; este un **Multivers Persistent**.
*   **Lumi Infinite:** Creează-ți propriile universuri (**Fantezie Medievală** sau **Cyberpunk**) cu propriul Lore.
*   **Personaje Infinite:** În fiecare lume, poți avea toți eroii pe care îi dorești.
*   **Linie Temporală Comună:** Atenție! Ceea ce face un personaj afectează lumea celorlalți. IA este conștientă de ceilalți eroi ai tăi și îi va recunoaște ca locuitori ai lumii.
*   **IA cu "Simțuri" (Super RAG):** Sistemul RAG (Retrieval-Augmented Generation) acționează ca un "turnător" pentru IA, oferindu-i amintiri despre lume, cine te însoțește, unde te afli și ce s-a întâmplat recent, pentru ca povestea să fie 100% coerentă.

### Interfața (Cabina ta de comandă)

*   **Panoul Stâng (TU):** Fișa Personajului tău. Viață, mană, abilități și cât de atrăgător ești (Carismă).
*   **Panoul Central (POVESTEA):**
    *   **Sus:** Unde naratorul povestește ce se întâmplă.
    *   **Jos:** Butoanele tale de decizie și caseta de text pentru a scrie ce vrei să faci.
*   **Panoul Drept (LUCRURILE TALE):** Inventar și echipament. Paradisul unui Diogene digital.

---

## 📜 REGULILE JOCULUI (Da, există reguli)

RolemIAster folosește un sistem clasic și robust d100 (zar de o sută de fețe).

### 1. Atributele tale (Ce te definește)
IA îți generează atributele bazându-se pe contextul, profesia și descrierea pe care le-ai introdus. Odată generate, ai **10 PUNCTE EXTRA** de distribuit după cum dorești.
*   **Costuri Progresive:** Creșterea unui atribut până la 14 costă 1 punct. De la 15 la 16 costă 2 puncte. De la 17 în sus costă 3 puncte! Gândește-te bine unde pui mușchiul.

*   💪 **Forță (FOR):** Puterea ta fizică pură. Influențează daunele în lupta corp la corp și capacitatea ta de încărcare.
*   ❤️ **Constituție (CON):** Rezistența ta. Pentru a suporta lovituri, boli și otrăvuri.
*   🐘 **Dimensiune (DIM):** Anvergura ta. Mare și greu, sau mic și furiș.
*   🏃 **Dexteritate (DEX):** Agilitate, precizie și să nu te împiedici de propriile picioare.
*   🧠 **Inteligență (INT):** Să înveți, să reții și să rezolvi puzzle-uri.
*   🔮 **Putere (POT):** Sufletul tău, norocul tău, forța voinței și rezerva ta magică.
*   😎 **Carismă (CAR):** Leadership, atracție și capacitatea de a înșela (sau seduce) oamenii.

### 2. Matematica rapidă (Caracteristici Derivate)
Motorul calculează automat aceste cifre pe baza atributelor tale:

*   🩸 **Viață (PV):** `CON * 10`. Dacă ajunge la 0... ei bine, știi deja. F.
*   ✨ **Mană (PM):** `(POD * 10) + INT`. Combustibilul pentru trucurile tale magice. Fără mană, fără trucuri. (Un magician fără mană este doar un tip cu o robă care face cosplay).
*   ⚡ **Stamină (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energia ta pentru a lupta și a te mișca fără să mori încercând.
*   🧠 **Umanitate (UM):** `(CON+POD) * 5`. (Doar în Cyberpunk: Măsoară cât îți mai rămâne din umanitate înainte ca firele să te înnebunească).
*   ⚔️ **Puncte de Acțiune (PA):** `(INT + DES) / 2`. Determină Inițiativa ta. Cine lovește primul, lovește de două ori.

### 3. Abilitățile tale
Încep cu o valoare de bază (ex: Furtivitate = DEX + INT) și se îmbunătățesc prin utilizare. Este un procent (%).

### 4. Rezolvarea Acțiunilor (Zarul)
Când încerci să faci ceva riscant (să escaladezi, să minți, să ataci...), IA îți va cere o aruncare. Jocul aruncă un **d100** invizibil. **(Amintește-ți: Zarurile te urăsc. E personal).**

*   **Obiectivul tău:** Să obții un număr **MAI MIC SAU EGAL** cu nivelul tău de abilitate.
    *   *Exemplu:* Ai 45% la Cățărare.
    *   Obții 30: ✅ **Succes**. Urcă ca o maimuță.
    *   Obții 80: ❌ **Eșec**. Cazi cu capul înainte.
    *   **Critic:** Obții mai puțin sau egal cu **1/5 din abilitatea ta** (sau un 01). Epic! Faci un salt extraordinar cu o piruetă.
    *   **Gafă:** Un **99 sau 100**. Zarurile au decis că azi nu e ziua ta. Îți cad pantalonii la jumătatea drumului și te împiedici.

---

## 💡 SFATURI PENTRU A NU MURI (REPede)

*   **✍️ Fii Descriptiv:** Nu scrie doar "atacul". Scrie: *"Încerc să-i evit toporul, rostogolindu-mă pe jos, și îi înfig pumnalul în gleznă"*. IA te va recompensa.
*   **🧪 Experimentează:** Nu ești limitat la butoane. Scrie nebunii! IA va improviza.
*   **🎭 Joacă-ți Rolul:** Intră în pielea personajului. Citește descrierile și acționează ca personajul tău, nu ca tine în pijamale.

---

## ⚔️ LUPTA (La arme!)

Când cuvintele eșuează, vine vremea bătăilor. Lupta este **tactică** și funcționează pe **Tichete** (timp).

### 🕹️ Cum funcționează:
*   **Tichete:** Fiecare acțiune costă timp. Armele grele sunt lente (consumă multe tichete). Pumnalele sunt rapide.
*   **Viteza ta:** Depinde de Punctele tale de Acțiune (PA).

### Acțiuni de Bază:
*   **🗡️ Atacă:** Lovește cu ce ai dezvăluit.
*   **🛡️ Blochează:** Te pui în defensivă. Reduce daunele, dar consumă Stamină.
*   **🏃 Fugi:** De la lașii (sau de la înțelepții care vor să trăiască).
*   **🏳️ Predă-te:** Dacă vezi că nu câștigi, poți implora milă.
*   **✨ Magie / Cyberware:** Foc, raze laser, hack-uri...

### 💬 Acțiuni prin Text Liber (NOU!)
Nu-ți plac butoanele? Scrie ce vrei să faci, de parcă ai vorbi cu un Master din carne și oase!
*   **Exemple:** *"Aruncă o minge de foc la goblin"*, *"Dezvăluie-mi sabia runică"*, *"Folosește poțiunea asupra mea"*.
*   **Regizor de Scenă:** Lupta prinde acum viață. IA generează evenimente de mediu și reacții care îmbogățesc narațiunea: grinzi care cad, inamici care dau înapoi, torțe care se sting! Câmpul de luptă nu mai este static!
*   **Dacă IA nu înțelege:** Îți va cere să reformulezi. Turul tău NU se pierde!
*   **⚠️ Limitare:** Mutarea obiectelor între sloturi (echiparea din rucsac, încărcarea muniției) se face prin **Drag & Drop** în interfață, nu prin text.

### ⚠️ REGULA DE AUR A SUPRAVIEȚUIRII
**DEZVĂLUie ARMA ÎNAINTE DE LUPTĂ!**
Scoaterea armei în mijlocul luptei consumă timp (Tichete). Dacă ești prins cu sabia în teacă, vei primi până în buletin în timp ce încerci să o scoți stângaci. SAU MAI RĂU!, DACĂ AI ARMELE ÎN RUCsac ÎN LOC SĂ FIE ÎN SLOTUL DE ECHIPARE (Scuzați-mă o secundă, trebuie să scot mandolul din rucsac, știu că îl aveam pe aici... pe undeva...) 🤦‍♂️
👉 Dă **Click pe eticheta armei echipate** (panoul din dreapta) pentru a o dezvălui. Se va lumina în verde.

Încercarea de a muta arme în timpul luptei consumă timp (Tichete) și poate duce la un atac prin surprindere, plus este foarte probabil să pierzi turul, să greșești din cauza nervilor toporului care se apropie de frunte sau să ți-l scape pe jos. (Poate nu a fost o idee bună să-ți creezi un personaj cu ADHD)

---

## ✨ MAGIE ȘI CIBERNETICĂ

În funcție de dacă lumea ta este "Fantezie Medievală" sau "Cyberpunk":

### 🧙‍♂️ Fantezie: Incantații
Ești vrăjitor? Poți să-ți încarci echipamentul.
1.  **Învață:** Ai nevoie de vrajă în grimoriul tău.
2.  **Lansează (Drag & Drop):** Trage vraja din lista ta peste obiectul din inventarul tău.
3.  **Cost:** Menținerea unei incantații active **consumă Mană pe tur**.
4.  **Atenție:** Dacă rămâi fără mană în mijlocul luptei, sabia de foc redevine o bucată de fier ruginit.

### 🦾 Cyberpunk: Implante
Vrei ochi cu zoom sau brațe de gorilă?
1.  Caută un **Tehnician Medical** (NPC de serviciu).
2.  Plătește creditele (nimic nu e gratis în viitor).
3.  **Costul Umanității:** Fiecare implant îți ia o bucată din suflet (**Umanitate**).
    *   Dacă pui prea multe, vei deveni un **Cyberpsihopăt** (o prăjitoare cu picioare ucigașă) și vei pierde controlul asupra personajului tău.

---

## 🛒 MAGAZINE ȘI SERVICII (SIS)

Vorbește cu NPC-urile pentru a face comerț.
*   **IA Sugerează, Tu Decizi:** Când vorbești cu un negustor sau un vindecător, IA îți va sugera serviciile lor (reparații, vânzare, vindecare), dar va apărea un buton de **"Vezi Servicii"** pentru ca tu să decizi când intri în modul tranzacțional.
*   **Negociere:** Abilitatea ta de **Comerț** (bazată pe Carismă) decide prețurile. Dacă ești urât sau neprietenos, vei fi înșelat.
*   **Vinde:** Dă **Click Dreapta** pe un obiect din inventarul tău pentru a-l vinde comerciantului sau trage-l peste el.

---

## 🎒 GESTIONAREA INVENTARULUI (Tetris)

*   **Greutate:** Ai o limită de încărcare (Forță + Dimensiune). Dacă cari prea mult fier vechi, vei merge încet și penalizat (Diogene nu îți este prieten).
*   **Panouri:**
    *   **Echipament:** Ce porți.
    *   **Centura:** Acces rapid în luptă (consumă mai puțin timp să folosești poțiuni de aici).
    *   **Rucsac:** Fundul sacului.
*   **Utilizare Fluidă:** Trage o poțiune sau mâncare direct pe **fața ta** (portretul) pentru a o consuma instantaneu. Poți folosi și meniul contextual (click dreapta -> Folosește).

---

## 🛠️ AJUSTĂRI FINALE

În meniul **Configurare** poți modifica totul:
*   **🌍 Limbă:** IA îți va traduce tot jocul și răspunsurile pe loc. Mod poliblot activat.
*   **👁️ Aspect:** Dimensiunea literelor și culorile, ca să nu rămâi orb. Margini de neon și umbre netezite pentru imersiune totală.
*   **🧠 Setări IA:** Schimbă modelul, temperatura etc. (Amintește-ți ce am văzut la începutul manualului despre flag-ul `--advanced` dacă ești genul care vrea să atingă tot).

---

## 🎭 DIFICULTATE ȘI UMAOR (Personalizează-ți suferința)

Înainte de a începe, amintește-ți că IA nu doar narază, ci **ajustează lumea** în funcție de preferințele tale. Acești parametri se aleg la crearea lumii și sunt permanenți pentru acea lume:

*   **🎮 Dificultate (Gestionată de IA):** Nu este un simplu multiplicator de daune. Jocul îi spune IA: "Hei, dificultatea este asta, acționează în consecință."
    *   **Ușor:** Nu vei muri niciodată (sau va fi aproape imposibil), situațiile sunt mai simple, prețurile mai mici și inamicii mai stângaci. IA va raționa fiecare scenă pentru ca drumul tău să fie pavat cu trandafiri.
    *   **Normal:** Echilibrul standard.
    *   **Provocare:** IA va fi nemiloasă, prețurile prohibitive și orice greșeală poate fi ultima.

*   **🃏 Ton de Umor:** Definește cum îți vorbește IA și ce fel de evenimente apar. Chiar dacă fiecare model are modul său de a interpreta conceptul de "umor", IA va încerca să se adapteze la ceea ce alegi... sau nu:
    *   **Serios:** O narațiune epică, întunecată și formală.
    *   **Sarcastic:** IA va râde de greșelile tale, îți va arunca constant săgeți și va folosi un ton ironic.
    *   **Delirant:** Pregătește-te pentru absurd. Vaci zburătoare, situații suprarealiste și haos total gestionat de logica cea mai contorsionată a IA.

---

## 🚧 Notă: Acces Timpuriu

RolemIAster este în **dezvoltare activă**, coaptă la foc mic.
*   Poți găsi bug-uri (sau "funcționalități neașteptate").
*   Adaug lucruri noi în fiecare săptămână.
*   Feedback-ul tău valorează aur! Spune-mi ce îți place și ce îți place foarte mult. (Dacă nu-ți place ceva, spune-mi și mie, dar cu dragoste).

Acum, du-te, aruncă inițiativa și creează-ți legenda!

<!-- source_hash: 4b8ac77b -->