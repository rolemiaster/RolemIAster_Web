# 🐉 Bun venit în RolemIAster!

Prindeți-vă zarurile (sau mouse-ul) și pregătiți-vă să trăiți aventuri unde singura limită este cât de răsucită este imaginația voastră! **RolemIAster** este un joc de rol infinit, alimentat de Inteligență Artificială, care vă permite să fiți eroul (sau răufăcătorul) propriilor voastre povești.

---

## ⚠️ AVERTISMENT LEGAL (Partea plictisitoare, dar necesară)

**CITEȘTE SAU VEI SUFERI IRA ZARURILOR:**

1.  **🤖 IA Locală Integrată:** RolemIAster își aduce propriul creier digital. Funcționează **fără internet** și fără să fie nevoie să atingeți ceva ciudat. Instalați și jucați!
2.  **☁️ Cloud Opțional:** Dacă preferați să cheltuiți bani pe IA externe (OpenAI, Gemini...), e treaba voastră cu cardul vostru de credit. Costurile sunt pe răspunderea voastră.
3.  **🎲 Haos Generativ:** IA inventează povestea pe parcurs. Dacă naratorul înnebunește și spune că plouă cu vaci, nu ne uitați pe noi. Dezvoltatorul nu este responsabil pentru nebuniile pe care le generează modelul.
4.  **🏗️ Acces Timpuriu:** Asta este în lucru. Dacă găsiți un bug, nu este un defect, este o "funcționalitate" surpriză! (Trimiteți-ne feedback, vă rugăm, ne ajută mult).

---

## 🖥️ CERINȚE DE SISTEM ȘI CREIERE DIGITALE (IA)

RolemIAster funcționează cu **Inteligență Artificială Locală**. Asta înseamnă că PC-ul vostru va face munca grea de a gândi. Nu aveți nevoie de internet, dar aveți nevoie de o placă grafică care să nu fie din epoca dinozaurilor. (Notă: Dacă este frig în cameră, acest joc funcționează ca încălzire gratuită).

### ⚙️ Concepte pentru începători

**VRAM (Memoria Video)** este benzina IA.
*   RolemIAster are nevoie să "țină minte" **de la 12.000 la 16.000 de cuvinte (token-uri)** pentru a nu pierde firul poveștii.
*   Dacă GPU-ul vostru rămâne fără memorie, jocul va merge mai lent decât un melc cu astm.

---

### 📊 CATALOG DE MODELE (Alege-ți otrava)

Gestionați-vă IA-urile în **Configurare → IA Locală Integrată → Gestionare Modele**.

#### 🏆 Familia Qwen 2.5 (Crema de pe prăjitură)

| Model         | Mărime | VRAM Minimă | Nivel | Verdict                                                              |
|---------------|--------|-------------|-------|----------------------------------------------------------------------|
| **Qwen2.5-3B** | ~2.5GB | **8GB**     | B     | 👶 **Stagiarul.** Se descurcă, dar nu-i cere să scrie Shakespeare. Uneori se încurcă. |
| **Qwen2.5-7B** | ~5.5GB | **12GB**    | A     | ✅ **CEL ALES.** Echilibrat, inteligent și rapid. Este modelul implicit recomandat. |
| **Qwen2.5-14B** | ~10GB  | **16GB**    | S     | 🧐 **Profesorul.** Narativă bogată, profundă și dialoguri foarte naturale. |
| **Qwen2.5-32B** | ~22GB  | **32GB**    | S+    | 👑 **Nivel Divin.** Ai nevoie de o navă spațială (RTX 3090/4090) pentru a mișca asta. |

---

### 🎮 GHID RAPID DE ALEGERE

| Grafica Ta   | VRAM | Model Recomandat | Rezultat                                 |
|--------------|------|-----------------|------------------------------------------|
| GTX 1050/1060 | 4GB  | Qwen2.5-3B      | 🆗 Suficient, dar jucabil (Context redus) |
| GTX 1070/1660 | 6GB  | Qwen2.5-3B      | 🆗 Merge bine                           |
| RTX 2060/3060 | 8GB  | Qwen2.5-3B      | 🚀 Zboară                                |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B**  | ✅ Experiența ideală                     |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B     | 🌟 Lux                                   |
| RTX 4090     | 24GB | Qwen2.5-32B     | 👑 Calitate maximă                       |

**💡 Sfat Pro:** Lasă întotdeauna cam **2GB de VRAM liberi** pentru sistemul de operare, altfel Windows va începe să plângă și să închidă lucruri.

---

### 🚨 SOC! PC-UL MEU MERGE ÎNCET! (Probleme de VRAM)

Dacă jocul durează mai mult să răspundă decât iubitul/iubita ta pe WhatsApp, probabil că ai rămas fără VRAM.

**Simptome că te-ai crezut prea deștept:**
1.  **Modelul se descarcă în RAM:** PC-ul folosește memoria normală în loc de cea grafică. Rezultat: LENTOARE EXTREMĂ.
2.  **Depășire ușoară (1-2GB):** Va dura 30-60 de secunde pe răspuns.
3.  **Depășire moderată (3-5GB):** 2-5 minute. Poți să-ți iei o cafea.
4.  **Depășire severă:** 10-30 minute. Injucabil.

#### 🛡️ Protocol de Urgență
Dacă lucrurile merg prost, urmează acești pași în ordine:

1.  **📉 Scade % VRAM:** Mergi la Configurare și scade la **85%**. Repornește și încearcă.
2.  **🧹 Curățenie:** Închide acel browser cu 40 de tab-uri deschise. Îți mănâncă memoria.
3.  **🛑 Limita de 70%:** Nu coborî niciodată sub **70%** din VRAM alocat.
    *   *De ce?* Pentru că IA are nevoie de spațiu să "gândească" (cache-ul KV). Dacă îi dai mai puțin de 70%, va rămâne în alb și va da eroare.
4.  **🔙 Retragere Tactică:** Dacă nimic nu funcționează, coboară la un model mai mic (treci de la 7B la 3B).

---

### ⚙️ CONFIGURARE AVANSATĂ A MODELULUI

Pentru cei cărora le place să apese butoane în **Configurare → IA Locală Integrată**:

| Opțiune         | Funcție                                  | Recomandare                                         |
|-----------------|------------------------------------------|-----------------------------------------------------|
| **GPU Layers**  | Cât din model se încarcă pe grafică       | **-1** (Înseamnă "TOT". Nu atinge dacă nu știi ce faci) |
| **Context Maxim** | "Memoria pe termen scurt" a IA           | **16384 - 32768** (Mai puțin de atât și IA va avea amnezie) |
| **Temperatură** | Creativitate vs. Nebunie                 | **0.7 - 0.8** (Mai mare = mai nebun; Mai mic = mai robotic) |
| **RAG Istoric** | Să-și amintească lucruri vechi          | **Da** (Indispensabil pentru campanii lungi)         |
| **Cache Embeddings** | Accelerează căutarea amintirilor     | **Da** (Îl face să meargă mai repede)               |

---

### 🔧 SOLUȚIONARE PROBLEME (Troubleshooting)

| Problemă         | Soluție                                                                           |
|-----------------|------------------------------------------------------------------------------------|
| **IA Lentă / Lag** | Verifică dacă `GPU Layers` este -1. Închide Chrome. Scade `Context Maxim`.           |
| **Eroare Memorie (OOM)** | Reduce `Context Maxim` sau alege un model mai mic (3B).                       |
| **IA Delirează / Alucinează** | Scade `Temperatură` la 0.6. Dacă tot e nebună, repornește aplicația.     |

---

### 🌐 FURNIZORII ALTERNATIVI (Doar Experți)

> **Notă:** IA locală pe care o aduce jocul este suficientă. Asta este doar pentru utilizatori avansați sau curajoși.

*   **Motoare Locale Externe:**
    *   **Ollama / LM Studio:** Dacă aveți deja propriile modele "friki", le puteți folosi.
*   **API-uri în Cloud (Contra cost):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Necesită internet și să scoți bani din buzunar.
    *   Configurați-le în: **Configurare → IA → Adaugă Furnizor Nou**.

---

## 🎲 CUM SE JOACĂ?

La deschiderea jocului, aveți două căi:

1.  **🆕 Aventură Nouă**: Creați-vă legenda de la zero. Jocul vă va ghida să alegeți rasă, clasă, lume și premisa. (Dacă viața îți dă lămâi... sau un 3 la Forță, devino Bard).
2.  **💾 Încarcă Salvare**: Continuați exact de unde ați rămas înainte de acea moarte umilitoare. (Sau pentru a corecta acel "mic calcul greșit" cu dragonul).

### Interfața (Cabina ta de comandă)

*   **Panoul Stâng (TU):** Fisa Personajului Tău. Viață, mană, abilități și cât de arătos ești (Carismă).
*   **Panoul Central (POVESTEA):**
    *   **Sus:** Unde naratorul povestește ce se întâmplă.
    *   **Jos:** Butoanele tale de decizie și caseta de text pentru a scrie ce vrei să faci.
*   **Panoul Drept (CELE ALE TALE):** Inventar și echipament. Paradisul lui Diogene digital.

---

## 📜 REGULILE JOCULUI (Da, există reguli)

RolemIAster folosește un sistem clasic și robust d100 (zar cu o sută de fețe).

### 1. Atributele Tale (Ce te definește)
Se generează aleatoriu, ca la rolul de masă de-o viață!

*   💪 **Forță (FOR):** Pentru a lovi puternic și a ridica pietre.
*   ❤️ **Constituție (CON):** Pentru a rezista loviturilor, bolilor și otravurilor.
*   🐘 **Dimensiune (DIM):** Mare și greu, sau mic și evaziv.
*   🏃 **Dexteritate (DEX):** Agilitate, precizie și să nu te împiedici de propriile picioare.
*   🧠 **Inteligență (INT):** A învăța, a-ți aminti și a rezolva puzzle-uri.
*   🔮 **Putere (POT):** Sufletul tău, norocul, forța de voință și magia.
*   😎 **Carismă (CAR):** Leadership, atracție și capacitatea de a înșela oamenii.

### 2. Matematica Rapidă (Caracteristici Derivate)
*   **Viață (PV):** `(CON + DIM) / 2`. Dacă ajunge la 0... ei bine, știi deja. F.
*   **Mană (PM):** Egal cu POT-ul tău. Fără mană, fără trucuri. (Un magician fără mană este doar un tip cu halat care face cosplay).
*   **Puncte de Acțiune (PA):** `(INT + DEX) / 2`. Determină Inițiativa ta. Cine lovește primul, lovește de două ori.

### 3. Abilitățile Tale
Încep cu o valoare de bază (ex: Furișare = DEX + INT) și se îmbunătățesc folosindu-le. Este un procent (%).

### 4. Rezolvarea Acțiunilor (Zarul)
Când încerci să faci ceva riscant (a escalada, a minți, a ataca...), IA îți va cere o aruncare.
Jocul aruncă un **d100** invizibil. **(Amintește-ți: Zarurile te urăsc. E personal).**

*   **Obiectivul Tău:** Să obții **MAI MIC SAU EGAL** cu abilitatea ta.
    *   *Exemplu:* Ai 45% la Cățărare.
    *   Obții un 30: ✅ **Succes**. Urcă precum o maimuță.
    *   Obții un 80: ❌ **Eșec**. Te prăbușești urât.
    *   Obții un 01-05: ✨ **CRITIC!** Faci un salt acrobatic epic cu piruetă.
    *   Obții un 99-100: 💀 **PIF!** Îți cad pantalonii pe drum și te prăbușești cu fața în jos.

---

## 💡 SFATURI PENTRU A NU MURI (REPede)

*   **✍️ Fii Descriptiv:** Nu scrie doar "atac". Scrie: *"Încerc să-i eschivez toporul rostogolindu-mă pe jos și îi înfig pumnalul în gleznă"*. IA te va recompensa.
*   **🧪 Experimentează:** Nu ești limitat la butoane. Scrie nebunii! IA va improviza.
*   **🎭 Joacă Rolul:** Intră în pielea personajului. Citește descrierile și acționează cum ar face personajul tău, nu cum ai face tu în pijamale.

---

## ⚔️ COMBATUL (La arme!)

Când cuvintele eșuează, vine ora ciocnirii. Combatul este **tactic** și funcționează pe **Tichete** (timp).

### 🕹️ Cum funcționează:
*   **Tichete:** Fiecare acțiune costă timp. Armele grele sunt lente (consumă multe tichete). Pumnalele sunt rapide.
*   **Viteza Ta:** Depinde de Punctele Tale de Acțiune (PA).

### Acțiuni de Bază:
*   **🗡️ Atac:** Lovește cu ce ai scos.
*   **🛡️ Blocaj:** Te pui în defensivă. Reduce daunele, dar consumă Stamina.
*   **🏃 Fugă:** De lași (sau de la înțelepți care vor să trăiască).
*   **🏳️ Predare:** Dacă vezi că nu câștigi, poți cere milă.
*   **✨ Magie / Cyberware:** Foc, raze laser, hacking...

### ⚠️ REGULA DE AUR DE SUPRAVIEȚUIRE
**SCOATE ARMA ÎNAINTE SĂ TE BATE!**
A scoate arma în mijlocul luptei consumă timp (Tichete). Dacă ești prins cu sabia în teacă, vei fi lovit până și în permisul de identitate în timp ce încerci să o scoți stângaci. SAU MAI RĂU!, DACĂ PORȚI ARMELE ÎN RUCSAC ÎN LOC DE SLOTUL DE ECHIPAMENT (Scuzați-mă o secundă, trebuie să scot sabia mare din rucsac, știu că o aveam pe aici... pe undeva...) 🤦‍♂️
👉 Dă **Click pe eticheta armei echipate** (panoul drept) pentru a o scoate. Se va ilumina verde.

Încercarea de a muta arme în luptă consumă timp (Tichete) și poate duce la un atac surpriză, în plus este foarte probabil să pierzi rândul, să ratezi din cauza nervilor toporului care se apropie de sprânceana ta sau să-ți cadă pe jos. (Poate nu a fost o idee bună să-ți creezi un personaj cu TDAH)

---

## ✨ MAGIE ȘI CIBERNETICĂ

În funcție de dacă lumea ta este de "Fantezie Medievală" sau "Cyberpunk":

### 🧙‍♂️ Fantezie: Incantații
Ești vrăjitor? Poți să-ți încarci echipamentul.
1.  **Învață:** Ai nevoie de vrajă în grimoarul tău.
2.  **Aruncă (Drag & Drop):** Trage vraja din lista ta peste obiectul din inventarul tău.
3.  **Cost:** Menținerea unei vrăji active **consumă Mană pe tur**.
4.  **Avertisment:** Dacă rămâi fără mană în mijlocul luptei, sabia de foc redevine o bucată de fier ruginit.

### 🦾 Cyberpunk: Implante
Vrei ochi cu zoom sau brațe de gorilă?
1.  Caută un **Tehnician Chirurg** (NPC de serviciu).
2.  Plătește creditele (nimic nu este gratuit în viitor).
3.  **Cost de Umanitate:** Fiecare implant îți ia o bucățică din suflet (**Umanitate**).
    *   Dacă pui prea multe, te vei transforma într-o **Cyberpsihoză** (un prăjitor cu picioare criminal) și vei pierde controlul asupra personajului tău.

---

## 🛒 MAGAZINE ȘI SERVICII

Vorbește cu NPC-uri pentru a face comerț.
*   **Negociere:** Abilitatea ta de **Comerț** (bazată pe Carismă) decide prețurile. Dacă ești urât sau antipatic, vei fi înșelat.
*   **Vinde:** Dă **Click Dreapta** pe un obiect din inventarul tău pentru a-l vinde negustorului.

---

## 🎒 GESTIONAREA INVENTARULUI (Tetris)

*   **Greutate:** Ai o limită de încărcare (Forță + Dimensiune). Dacă cari prea mult fier vechi, vei merge lent și penalizat (Diogene nu este prietenul tău).
*   **Panouri:**
    *   **Echipament:** Ce porți.
    *   **Centura:** Acces rapid în luptă (consumă mai puțin timp să folosești poțiuni de aici).
    *   **Rucsac:** Fundul sacului.
*   **Utilizare Rapidă:** Trage o poțiune sau mâncare direct pe **fața ta** (portretul) pentru a o consuma instantaneu.

---

## 🛠️ SETĂRI FINALE

În meniul de **Configurare** poți ajusta totul:
*   **🌍 Limbă:** IA îți va traduce tot jocul și răspunsurile pe loc.
*   **👁️ Aspect:** Mărimea fontului și culorile, pentru a nu orbi.
*   **🧠 Setări IA:** Schimbă modelul, temperatura, etc.

---

## 🚧 Notă: Acces Timpuriu

RolemIAster este în **dezvoltare activă**, gătindu-se la foc mic.
*   Poți găsi bug-uri (sau "caracteristici neașteptate").
*   Adaug lucruri noi în fiecare săptămână.
*   Feedback-ul tău valorează aur! Spune-mi ce-ți place și ce-ți place mult.

Acum mergi, aruncă inițiativa și creează-ți legenda!

<!-- source_hash: 2511f352 -->