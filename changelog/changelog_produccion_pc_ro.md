****************************************************************************************************
17/02/2026 07:20 - Generare de imagini AI, îmbunătățiri narative și control - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (RO):
  **⚠️ RAMURA EXPERIMENTALĂ (STEAM BETA)**
  Această versiune este disponibilă momentan doar în **Ramura Experimentală** de pe Steam. Pentru a o activa:
  1. Fă click dreapta pe **RolemIAster** în Biblioteca ta Steam.
  2. Selectează **Proprietăți...**
  3. Mergi la fila **Betas**.
  4. La „Participare la beta”, selectează **experimental** din meniul derulant.
  
  **Nou: Prima fază a generării de imagini AI**
  - 🎨 **Lumea ta în imagini:** Am integrat un sistem inițial de generare a imaginilor prin Inteligență Artificială. Pe măsură ce joci, sistemul încearcă să genereze portrete și peisaje care să însoțească atmosfera jocului.
  - 🖼️ **Fundaluri dinamice:** Imaginile sunt generate în fundal fără a opri jocul. Vei vedea cum apar progresiv în fundal, pe cărțile personajelor și în Codex.
  - ⚡ **Viteză pe măsura ta:** Nouă secțiune în Configurare vizuală. Alege între „Rapidă” (1 pas), „Medie” (2 pași) sau „Înaltă” (4 pași) pentru a ajusta timpul de generare la puterea echipamentului tău.
  - 🛠️ **Optimizare tehnică:** Modelul AI pentru imagini se încarcă în **RAM (Memorie)** și este procesat prin **CPU**, fără a ocupa memoria video (VRAM). Acest lucru garantează că nu interferează cu performanța AI-ului principal al jocului (LLM). Necesită aproximativ 5GB de RAM suplimentari, menținându-se în cerințele minime oficiale Steam.
  - 📤 **Împărtășește-ți aventurile:** Toate imaginile generate sunt salvate automat. Le vei găsi în folderul: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narațiune și creier AI:**
  - 🧠 **Sfârșitul buclelor:** S-a implementat o nouă „Doctrină a Memoriei” în AI. Acum distinge mai bine între „amintiri” (ce s-a întâmplat deja) și „prezent” (ce se întâmplă acum). Acest lucru ajută la reducerea cazurilor în care AI-ul se repeta sau se bloca.
  - 📜 **Arhive istorice:** Sistemul prezintă amintirile tale AI-ului ca o „Arhivă Istorică Închisă”, facilitând utilizarea acelei informații ca referință pentru a avansa povestea.
  - ⚡ **Instrucțiuni optimizate:** S-a îmbunătățit modul în care jocul solicită narațiunea în limba ta, eliberând capacitatea modelului pentru a se concentra pe creativitate.
  - 👁️ **Focus narativ:** S-a rescris percepția AI-ului. Acum înțelege mai bine ce elemente sunt „fundal static” și nu ar trebui să le repete inutil în fiecare paragraf.
  - 🔀 **Decizii mai clare:** AI-ul oferă acum căi de scăpare mai definite. Sugestiile sale (butoanele) sunt împărțite între investigarea mediului (Aprofundare) sau schimbarea direcției (Divergență).
  - 🫵 **Adresare directă:** S-a ajustat instrucțiunea de bază pentru a asigura că AI-ul ți se adresează cu „Tu”, îmbunătățind imersiunea personală.
  
  **Crearea personajului:**
  - 🖼️ **Portrete de personaje:** La generarea unui personaj cu AI, sistemul încearcă să creeze un portret bazat pe vârsta, profesia și descrierea sa. Reține că este o versiune inițială și fidelitatea (în special în privința vârstei) poate varia în funcție de modelul utilizat. (încă fac teste, dar începutul este bun)
  - 🎲 **Generare aleatorie fiabilă:** S-a corectat o eroare unde butonul „Generează cu AI” putea eșua la prima încercare, lăsând câmpurile goale. Acum sistemul de corecție inteligentă se asigură că răspunsul este întotdeauna valid.

****************************************************************************************************
17/02/2026 07:04 - Generare de imagini AI, îmbunătățiri narative și control - Beta_v058
****************************************************************************************************
- What's New (RO):
  **⚠️ RAMURA EXPERIMENTALĂ (STEAM BETA)**
  Această versiune este disponibilă momentan doar în **Ramura Experimentală** de pe Steam. Pentru a o activa:
  1. Fă click dreapta pe **RolemIAster** în Biblioteca ta Steam.
  2. Selectează **Proprietăți...**
  3. Mergi la fila **Betas**.
  4. La „Participare la beta”, selectează **experimental** din meniul derulant.
  
  **Nou: Prima fază a generării de imagini AI**
  - 🎨 **Lumea ta în imagini:** Am integrat un sistem inițial de generare a imaginilor prin Inteligență Artificială. Pe măsură ce joci, sistemul încearcă să genereze portrete și peisaje care să însoțească atmosfera jocului.
  - 🖼️ **Fundaluri dinamice:** Imaginile sunt generate în fundal fără a opri jocul. Vei vedea cum apar progresiv în fundal, pe cărțile personajelor și în Codex.
  - ⚡ **Viteză pe măsura ta:** Nouă secțiune în Configurare vizuală. Alege între „Rapidă” (1 pas), „Medie” (2 pași) sau „Înaltă” (4 pași) pentru a ajusta timpul de generare la puterea echipamentului tău.
  - 🛠️ **Optimizare tehnică:** Modelul AI pentru imagini se încarcă în **RAM (Memorie)** și este procesat prin **CPU**, fără a ocupa memoria video (VRAM). Acest lucru garantează că nu interferează cu performanța AI-ului principal al jocului (LLM). Necesită aproximativ 5GB de RAM suplimentari, menținându-se în cerințele minime oficiale Steam.
  - 📤 **Împărtășește-ți aventurile:** Toate imaginile generate sunt salvate automat. Le vei găsi în folderul: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narațiune și creier AI:**
  - 🧠 **Sfârșitul buclelor:** S-a implementat o nouă „Doctrină a Memoriei” în AI. Acum distinge mai bine între „amintiri” (ce s-a întâmplat deja) și „prezent” (ce se întâmplă acum). Acest lucru ajută la reducerea cazurilor în care AI-ul se repeta sau se bloca.
  - 📜 **Arhive istorice:** Sistemul prezintă amintirile tale AI-ului ca o „Arhivă Istorică Închisă”, facilitând utilizarea acelei informații ca referință pentru a avansa povestea.
  - ⚡ **Instrucțiuni optimizate:** S-a îmbunătățit modul în care jocul solicită narațiunea în limba ta, eliberând capacitatea modelului pentru a se concentra pe creativitate.
  - 👁️ **Focus narativ:** S-a rescris percepția AI-ului. Acum înțelege mai bine ce elemente sunt „fundal static” și nu ar trebui să le repete inutil în fiecare paragraf.
  - 🔀 **Decizii mai clare:** AI-ul oferă acum căi de scăpare mai definite. Sugestiile sale (butoanele) sunt împărțite între investigarea mediului (Aprofundare) sau schimbarea direcției (Divergență).
  - 🫵 **Adresare directă:** S-a ajustat instrucțiunea de bază pentru a asigura că AI-ul ți se adresează cu „Tu”, îmbunătățind imersiunea personală.
  
  **Crearea personajului:**
  - 🖼️ **Portrete de personaje:** La generarea unui personaj cu AI, sistemul încearcă să creeze un portret bazat pe vârsta, profesia și descrierea sa. Reține că este o versiune inițială și fidelitatea (în special în privința vârstei) poate varia în funcție de modelul utilizat. (încă fac teste, dar începutul este bun)
  - 🎲 **Generare aleatorie fiabilă:** S-a corectat o eroare unde butonul „Generează cu AI” putea eșua la prima încercare, lăsând câmpurile goale. Acum sistemul de corecție inteligentă se asigură că răspunsul este întotdeauna valid.

****************************************************************************************************
13/02/2026 21:47 - Optimizarea Configurării AI și Consolidarea i18n - Beta_v055
****************************************************************************************************
- What's New (RO):
  - ⚙️ **Control Prioritate Locală:** Acum poți ajusta manual prioritatea plăcilor tale grafice chiar dacă sistemul este în modul automat.
  - 🧠 **Informații Rotație AI:** Am adăugat panouri informative în setările furnizorilor externi pentru a explica cum funcționează rotația automată în caz de eroare sau cotă depășită.
  - 🌍 **Suport GPU Extins:** Mesajul de informare i18n reflectă acum corect suportul pentru NVIDIA CUDA și Vulkan (AMD/Intel). Traduceri actualizate în toate limbile!
  - ⚙️ **Conectivitate Îmbunătățită:** S-au reparat conectorii pentru Ollama și alte servere compatibile cu OpenAI.
  - 🧠 **AI Poliglot și Robust:** Detectarea obiectelor obținute în poveste funcționează acum în 10 limbi. De asemenea, am protejat sistemul astfel încât să nu rămâi niciodată fără povestea inițială, chiar dacă AI-ul are o problemă tehnică.
  - 🔄 **Rotație Inteligentă:** Am reparat sistemul de rotație pentru a nu renunța la AI-ul tău local din prima încercare. Acum sistemul îi va oferi o șansă de a se corecta înainte de a căuta ajutor extern.
  - 🧹 **Curățare de Bază:** Am eliminat reguli vechi și confuze pentru ca "creierul" AI-ului să fie mai clar și mai precis în gestionarea obiectelor tale.

