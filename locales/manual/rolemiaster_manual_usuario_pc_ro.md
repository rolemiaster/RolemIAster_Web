# 🐉 Bine ați venit la RolemIAster!

Luați zarurile (sau mouse-ul) și pregătiți-vă pentru aventuri în care singura limită este cât de întortocheată vă este imaginația! **RolemIAster** este un joc de rol infinit propulsat de Inteligența Artificială, care vă permite să fiți eroul (sau răufăcătorul) propriilor povești.

---

## ⚠️ DISCLAIMER (Partea plictisitoare, dar necesară)

**CITEȘTE-MĂ SAU VEI SUFERI FURIA ZARURILOR:**

1.  **🤖 IA Locală Integrată:** RolemIAster vine cu propriul creier digital. Funcționează **fără internet** și fără să fie nevoie să atingi nimic ciudat. Instalează și joacă!
2.  **☁️ Cloud Opțional:** Dacă preferi să cheltui banii pe IA externe (OpenAI, Gemini...), e treaba ta și a cardului tău de credit. Costurile te privesc.
3.  **🎲 Haos Generativ:** IA inventează povestea din mers. Dacă naratorul o ia razna și spune că plouă cu vaci, nu te uita la noi. Dezvoltatorul nu este responsabil pentru nebuniile pe care le generează modelul.
4.  **🏗️ Acces Timpuriu (Early Access):** Aici încă se lucrează. Dacă găsești un bug, nu e o eroare, e o "funcționalitate" surpriză! (Trimite-ne feedback, te rugăm, ne ajută mult).

---

## 🖥️ CERINȚE DE SISTEM ȘI CREIERE DIGITALE (IA)

RolemIAster funcționează cu **Inteligență Artificială Locală**. Asta înseamnă că PC-ul tău va face munca grea de gândire. Nu ai nevoie de internet, dar ai nevoie de o placă video care să nu fie din epoca dinozaurilor. (Notă: Dacă e frig în camera ta, acest joc funcționează ca încălzire gratuită).

### ⚙️ Concepte pentru neinițiați

**VRAM (Memoria Video)** este benzina IA.
*   RolemIAster trebuie să "țină minte" între **12.000 și 16.000 de cuvinte (tokeni)** pentru a nu pierde firul poveștii.
*   Dacă GPU-ul tău rămâne fără memorie, jocul va merge mai încet decât un melc cu astm.

---

### 📊 CATALOG DE MODELE (Alege-ți otrava)

Gestionează-ți IA-urile în **Configurare → IA Locală Integrată → Gestionare Modele**.

#### 🏆 Familia Qwen 2.5 (La crème de la crème)

| Model | Dimensiune | VRAM Minimă | Tier | Verdict |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Stagiarul.** Își face treaba, dar nu-i cere să scrie Shakespeare. Uneori se încurcă. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **ALESUL.** Echilibrat, isteț și rapid. Este modelul recomandat implicit. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Profesorul Universitar.** Narațiune bogată, profundă și dialoguri foarte naturale. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Nivel Zeu.** Ai nevoie de o navă spațială (RTX 3090/4090) pentru a rula asta. |

---

### 🎮 GHID DE ALEGERE RAPIDĂ

| Placa ta Grafică | VRAM | Model Recomandat | Rezultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 La limită, dar se poate juca (Context scăzut) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Merge bine |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Zboară |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Experiența ideală |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Lux total |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Calitate maximă |

**💡 Pro Tip:** Lasă întotdeauna vreo **2GB de VRAM liberi** pentru sistemul de operare, altfel Windows va începe să plângă și să închidă chestii.

---

### 🚨 AJUTOR! PC-UL MEU SE MIȘCĂ GREU! (Probleme de VRAM)

Dacă jocul răspunde mai greu decât crush-ul tău pe WhatsApp, probabil ai rămas fără VRAM.

**Simptome că te-ai crezut prea deștept:**
1.  **Modelul se revarsă în RAM:** PC-ul folosește memoria normală în loc de cea grafică. Rezultat: LENTOARE EXTREMĂ.
2.  **Depășire ușoară (1-2GB):** Va dura 30-60 secunde per răspuns.
3.  **Depășire moderată (3-5GB):** 2-5 minute. Poți să te duci după o cafea.
4.  **Depășire severă:** 10-30 minute. De nejucat.

#### 🛡️ Protocol de Urgență
Dacă lucrurile merg prost, urmează acești pași în ordine:

1.  **📉 Scade % de VRAM:** Du-te la Configurare și scade-l la **85%**. Repornește și încearcă.
2.  **🧹 Curățenie:** Închide browserul ăla cu 40 de tab-uri deschise. Îți mănâncă memoria.
3.  **🛑 Limita de 70%:** Nu coborî niciodată sub **70%** VRAM alocat.
    *   *De ce?* Pentru că IA are nevoie de spațiu pentru a "gândi" (cache-ul KV). Dacă îi dai mai puțin de 70%, se va bloca și va da eroare.
4.  **🔙 Retragere Tactică:** Dacă nimic nu funcționează, treci la un model mai mic (treci de la 7B la 3B).

---

### ⚙️ CONFIGURARE AVANSATĂ A MODELULUI ("Geek Suprem")

> **MOD EXPERT:** Dacă ești un pro și vrei să accesezi configurarea modelelor avansate (să adaugi propriile modele GGUF descărcate de pe HuggingFace, să modifici layere etc.), trebuie să pornești jocul cu comanda: `--advanced`.

Pentru cei cărora le place să apese butoane în **Configurare → IA Locală Integrată**:

| Opțiune | Funcție | Recomandare |
|--------|---------|---------------|
| **GPU Layers** | Cât din model se încarcă în placa grafică | **-1** (Înseamnă "TOT". Nu atinge decât dacă știi ce faci) |
| **Context Maxim** | "Memoria pe termen scurt" a IA | **16384 - 32768** (Mai puțin de atât și IA va avea amnezie) |
| **Temperatură** | Creativitate vs Nebunie | **0.7 - 0.8** (Mai mare = mai nebună; Mai mică = mai robotică) |
| **RAG de Istoric** | Reamintirea lucrurilor de mult timp | **Da** (Esențial pentru campanii lungi) |
| **Cache Embeddings** | Accelerează căutarea amintirilor | **Da** (Face să meargă mai repede) |

---

### 🔧 DEPANARE (Troubleshooting)

| Gafă | Soluție |
|-------|---------|
| **IA Lentă / Lag** | Verifică dacă `GPU Layers` este -1. Închide Chrome. Scade `Contexto Máximo`. |
| **Eroare de Memorie (OOM)** | Redu `Contexto Máximo` sau alege un model mai mic (3B). |
| **IA delirează / Alucinează** | Scade `Temperatura` la 0.6. Dacă tot e nebună, repornește aplicația. |

---

### 🌐 FURNIZORI ALTERNATIVI (Doar Experți)

> **Notă:** IA locală cu care vine jocul este mai mult decât suficientă. Această secțiune este doar pentru utilizatori avansați sau curajoși.

*   **Motoare Locale Externe:**
    *   **Ollama / LM Studio:** Dacă ai deja propriile modele geek, le poți folosi.
*   **API-uri în Cloud (Cu plată):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Necesită internet și să scoți bani din buzunar.
    *   Configurează în: **Configurare → IA → Adaugă Furnizor Nou**.

---

### 🌍 CUM SE JOACĂ? (Multiversul și Tu)

La deschiderea jocului, ai două căi:

1.  **🆕 Aventură Nouă**: Creează-ți legenda de la zero. Jocul îți va cere **Nume, Meserie (Profesie), Descriere Fizică, Descriere Psihologică și Fundalul/Pretextul** poveștii tale. În plus, vei alege **Nivelul de Dificultate** și **Tonul Umorului** care vor ghida campania.
2.  **💾 Continuă Partida**: RolemIAster **salvează în timp real**. Aici nu există "încarcă înainte de a muri" sau cale de întoarcere. Fiecare decizie, fiecare gafă și fiecare rană este întipărită adânc în poveste. Este o **PROVOCARE**: ce ai făcut, bun făcut rămâne. Trăiește cu consecințele... sau mori cu ele.

RolemIAster nu este o partidă izolată; este un **Multivers Persistent**.
*   **Lumi Infinite:** Creează-ți propriile universuri (**Fantezie Medievală** sau **Cyberpunk**) cu propriul Lore.
*   **Personaje Infinite:** În cadrul fiecărei lumi, poți avea oricâți eroi dorești.
*   **Linie Temporală Partajată:** Atenție! Ceea ce face un personaj afectează lumea celorlalți. IA este conștientă de ceilalți eroi ai tăi și îi va recunoaște ca locuitori ai lumii.
*   **IA cu "Simțuri" (Super RAG):** Sistemul RAG (Retrieval-Augmented Generation) acționează ca "informatorul" IA-ului, oferindu-i amintiri despre lume, cine te însoțește, unde ești și ce tocmai s-a întâmplat, pentru ca povestea să fie 100% coerentă.

### Interfața (Cabina ta de pilotaj)

*   **Panoul Stâng (TU):** Fișa ta de Personaj. Viață, mana, abilități și cât ești de frumos (Carisma).
*   **Panoul Central (POVESTEA):**
    *   **Sus:** Unde naratorul povestește ce se întâmplă.
    *   **Jos:** Butoanele tale de decizie și caseta de text pentru a scrie ce vrei să faci.
*   **Panoul Drept (LUCRURILE TALE):** Inventar și echipament. Paradisul pentru un Diogene digital.

---

## 📜 REGULILE JOCULUI (Da, există reguli)

RolemIAster folosește un sistem d100 (zar cu o sută de fețe) clasic și robust.

### 1. Atributele Tale (Ceea ce te definește)
IA îți generează atributele bazându-se pe context, profesie și descrierea pe care ai introdus-o. Odată generate, ai **10 PUNCTE EXTRA** de împărțit după bunul plac.
*   **Costuri Etapizate:** Creșterea unui atribut până la 14 costă 1 punct. De la 15 la 16 costă 2 puncte. De la 17 în sus costă 3 puncte! Gândește-te bine unde pui mușchii.

*   💪 **Forță (FOR):** Puterea ta fizică pură. Influențează daunele corp la corp și capacitatea de încărcare.
*   ❤️ **Constituție (CON):** Rezistența ta. Pentru a suporta lovituri, boli și otrăvuri.
*   🐘 **Mărime (MAR):** Anvergura ta. Mare și greu, sau mic și alunecos.
*   🏃 **Dexteritate (DEX):** Agilitate, țintire și capacitatea de a nu te împiedica de propriile picioare.
*   🧠 **Inteligență (INT):** Învățare, memorie și rezolvarea puzzle-urilor.
*   🔮 **Putere (PUT):** Sufletul tău, norocul tău, forța de voință și rezerva ta magică.
*   😎 **Charismă (CAR):** Lidership, atractivitate și capacitatea de a păcăli (sau seduce) oamenii.

### 2. Matematică Rapidă (Caracteristici Derivate)
Motorul calculează aceste cifre automat pe baza atributelor tale:

*   🩸 **Viață (PV):** `CON * 10`. Dacă ajunge la 0... ei bine, știi tu. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Combustibilul pentru trucurile tale de magie. Fără mana, nu există trucuri. (Un magician fără mana e doar un tip în halat care face cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energia ta pentru a lupta și a te mișca fără să mori încercând.
*   🧠 **Umanitate (UMA):** `(CON+POD) * 5`. (Doar în Cyberpunk: Măsoară cât ți-a mai rămas din umanitate înainte ca cablurile să te înnebunească).
*   ⚔️ **Puncte de Acțiune (PA):** `(INT + DES) / 2`. Îți determină Inițiativa. Cine lovește primul, lovește de două ori.

### 3. Abilitățile Tale
Încep cu o valoare de bază (ex: Furișare = DEX + INT) și se îmbunătățesc folosindu-le. Este un procent (%).

### 4. Rezolvarea Acțiunilor (Zarul)
Când încerci să faci ceva riscant (escaladare, mințit, atac...), IA îți va cere o aruncare. Jocul aruncă un **d100** invizibil. **(Ține minte: Zarurile te urăsc. E personal).**

*   **Obiectivul Tău:** Să scoți un număr **MAI MIC SAU EGAL** cu nivelul abilității tale.
    *   *Exemplu:* Ai 45% la Cățărare.
    *   Scoți un 30: ✅ **Succes**. Urci ca o maimuță.
    *   Scoți un 80: ❌ **Eșec**. Tragi o căzătură zdravănă.
    *   **Critic:** Scoți mai puțin sau egal cu **1/5 din abilitatea ta** (sau un 01). Epic! Faci un parkour extraordinar cu salt mortal.
    *   **Gafă (Pifia):** Un **99 sau 100**. Zarurile au decis că azi nu e ziua ta. Îți cad pantalonii la jumătatea drumului și cazi în bot.

---

## 💡 SFATURI PENTRU A NU MURI (REPEDE)

*   **✍️ Fii Descriptiv:** Nu scrie doar "atac". Scrie: *"Încerc să eschivez securea rostogolindu-mă pe podea și îi înfig pumnalul în gleznă"*. IA te va recompensa.
*   **🧪 Experimentează:** Nu ești limitat la butoane. Scrie nebunii! IA va improviza.
*   **🎭 Roleplay:** Intră în rol. Citește descrierile și acționează cum ar face personajul tău, nu cum ai face tu în pijamale.

---

## ⚔️ LUPTA (La arme!)

Când cuvintele eșuează, vine vremea pumnilor. Lupta este **tactică** și funcționează pe **Ticks** (timp).

### 🕹️ Cum funcționează:
*   **Ticks:** Fiecare acțiune costă timp. Armele grele sunt lente (consumă mulți ticks). Pumnalele sunt rapide.
*   **Viteza Ta:** Depinde de Punctele de Acțiune (PA).

### Acțiuni De Bază:
*   **🗡️ Atacă:** Dă-i cu ce ai scos din teacă.
*   **🛡️ Blochează:** Te pui în defensivă. Reduce daunele dar consumă Stamina.
*   **🏃 Fugi:** Pentru lași (sau înțelepți care vor să trăiască).
*   **🏳️ Predă-te:** Dacă vezi că nu câștigi, poți implora milă.
*   **✨ Magie / Cyberware:** Foc, raze laser, hack-uri...

### 💬 Acțiuni prin Text Liber (NOU!)
Nu-ți plac butoanele? Scrie ce vrei să faci ca și cum ai vorbi cu un Maestru de Joc în carne și oase!
*   **Exemple:** *"Arunc bilă de foc spre goblin"*, *"Scot sabia runică din teacă"*, *"Folosesc poțiune pe mine"*.
*   **Regizor de Scenă:** Lupta prinde acum viață. IA generează evenimente ambientale și reacții care îmbogățesc narațiunea: grinzi care cad, inamici care se retrag, torțe care cad. Câmpul de luptă nu mai este static!
*   **Dacă IA nu înțelege:** Îți va cere să reformulezi. Tura ta NU se pierde!
*   **⚠️ Limitare:** Mutarea obiectelor între sloturi (echipare din rucsac, încărcare muniție) se face cu **Drag & Drop** în interfață, nu prin text.

### ⚠️ REGULA DE AUR A SUPRAVIEȚUIRII
**SCOATE ARMA ÎNAINTE DE A LUPTA!**
Scoaterea armei în mijlocul luptei consumă timp (Ticks). Dacă te prind cu sabia în teacă, o să te bată până îți schimbă buletinul în timp ce tu încerci să o scoți stângaci. SAU MAI RĂU, DACĂ AI ARMELE ÎN RUCSAC ÎN LOC SĂ FIE ÎN SLOTUL DE ECHIPAMENT (Scuzați o secundă, trebuie să scot spada de două mâini din rucsac, știu că o aveam pe aici... pe undeva...) 🤦‍♂️
👉 Fă **Click pe eticheta armei echipate** (panoul drept) pentru a o scoate din teacă. Se va lumina în verde.

Încercarea de a muta arme în luptă consumă timp (Ticks) și poate rezulta într-un atac surpriză, plus că e foarte probabil să pierzi tura, să ratezi din cauza nervilor toporului care se apropie de tine sau să-ți cadă arma pe jos. (Poate nu a fost o idee bună să-ți faci un personaj cu ADHD).

---

## ✨ MAGIE ȘI CIBERNETICĂ

În funcție de lumea ta, dacă e "Fantezie Medievală" sau "Cyberpunk":

### 🧙‍♂️ Fantezie: Încântări
Ești vrăjitor? Poți să-ți încânți echipamentul.
1.  **Învață:** Ai nevoie de vrajă în grimor.
2.  **Lansează (Drag & Drop):** Trage vraja din lista ta peste obiectul din inventar.
3.  **Cost:** Menținerea unei încântări active **consumă Mana pe tură**.
4.  **Avertisment:** Dacă rămâi fără mana în mijlocul luptei, sabia de foc redevine o bucată de fier ruginit.

### 🦾 Cyberpunk: Implanturi
Vrei ochi cu zoom sau brațe de gorilă?
1.  Caută un **Tehno-chirurg** (NPC de serviciu).
2.  Plătește creditele (nimic nu e gratis în viitor).
3.  **Cost de Umanitate:** Fiecare implant îți ia o bucată de suflet (**Umanitate**).
    *   Dacă îți pui prea multe, te vei transforma într-o **Cyberpsihoză** (un prăjitor de pâine cu picioare asasin) și vei pierde controlul personajului.

---

## 🛒 MAGAZINE ȘI SERVICII (SIS)

Vorbește cu NPC-uri pentru a face comerț.
*   **IA Sugerează, Tu Comanzi:** Când vorbești cu un negustor sau vindecător, IA îți va sugera serviciile lor (reparații, vânzare, vindecare), dar va apărea un buton de **"Vezi Servicii"** pentru ca tu să decizi când intri în modul tranzacțional.
*   **Negociere:** Abilitatea ta de **Comerț** (bazată pe Carismă) decide prețurile. Dacă ești urât sau antipatic, te vor păcăli.
*   **Vânzare:** Fă **Click Dreapta** pe un obiect din inventar pentru a-l vinde negustorului sau trage-l peste el.

---

## 🎒 GESTIONAREA INVENTARULUI (Tetris)

*   **Greutate:** Ai o limită de încărcare (Forță + Mărime). Dacă cari prea multe vechituri, vei merge încet și vei fi penalizat (Diogene nu îți este prieten).
*   **Panouri:**
    *   **Echipament:** Ce porți pe tine.
    *   **Curea:** Acces rapid în luptă (consumă mai puțin timp să folosești poțiuni de aici).
    *   **Rucsac:** Fundul sacului.
*   **Utilizare Fluidă:** Trage o poțiune sau mâncare direct peste **fața ta** (portretul) pentru a o consuma instantaneu. De asemenea, poți folosi meniul contextual (click dreapta -> Utilizează).

---

## 🛠️ SETĂRI FINALE

În meniul de **Configurare** poți butona totul:
*   **🌍 Limbă:** IA îți va traduce tot jocul și răspunsurile din zbor. Mod poliglot activat.
*   **👁️ Aspect:** Mărimea fontului și culori, ca să nu orbești. Margini neon și umbre netezite pentru o imersiune totală.
*   **🧠 Setări IA:** Schimbă modelul, temperatura etc. (Amintește-ți ce am văzut la începutul manualului despre flag-ul `--advanced` dacă ești dintre cei care vor să atingă totul).

---

## 🎭 DIFICULTATE ȘI UMOR (Personalizează-ți suferința)

Înainte de a începe, amintește-ți că IA nu doar narează, ci **ajustează lumea** în funcție de preferințele tale. Acești parametri sunt aleși la crearea lumii și sunt permanenți pentru acea lume:

*   **🎮 Dificultate (Gestionată de IA):** Nu este un simplu multiplicator de daune. Jocul îi spune IA-ului: "Hei, dificultatea e asta, acționează în consecință".
    *   **Ușor:** Nu vei muri niciodată (sau va fi aproape imposibil), situațiile sunt mai simple, prețurile sunt mai mici și inamicii sunt mai neîndemânatici. IA va raționa fiecare scenă astfel încât drumul tău să fie presărat cu trandafiri.
    *   **Normal:** Echilibrul standard.
    *   **Provocare:** IA va fi implacabilă, prețurile prohibitive și orice greșeală poate fi ultima.

*   **🃏 Tonul Umorului:** Definește cum îți vorbește IA și ce tip de evenimente au loc. Deși fiecare model are propriul mod de a interpreta conceptul de "umor", IA va încerca să se adapteze la ce alegi... sau nu:
    *   **Serios:** O narațiune epică, întunecată și formală.
    *   **Sarcastic:** IA va râde de eșecurile tale, îți va arunca constant ironii și va folosi un ton zeflemitor.
    *   **Delirant:** Pregătește-te pentru absurd. Vaci zburătoare, situații suprarealiste și haos total gestionat de logica cea mai întortocheată a IA.

---

## 🚧 Avertisment: Acces Timpuriu (Early Access)

RolemIAster este în **dezvoltare activă**, gătindu-se la foc mic.
*   Poți găsi bug-uri (sau "caracteristici neașteptate").
*   Adaug lucruri noi în fiecare săptămână.
*   Feedback-ul tău valorează aur! Spune-mi ce îți place și ce îți place mult. (Dacă nu îți place ceva, spune-mi și asta, dar cu blândețe).

Acum du-te, dă cu zarul pentru inițiativă și creează-ți legenda!

<!-- source_hash: f3494f05 -->