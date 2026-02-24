****************************************************************************************************
24/02/2026 12:32 - Generarea imaginilor prin IA, Îmbunătățiri narative și Control - Beta_v058
****************************************************************************************************
- What's New (RO):
  **Noutate: A doua fază a Generării de Imagini prin IA**
  - 🎨 **Lumea ta în imagini:** Am integrat un sistem inițial de generare a imaginilor prin Inteligență Artificială. Pe măsură ce joci, sistemul încearcă să genereze portrete și peisaje care să însoțească atmosfera partidei tale.
  - 🖼️ **Fundaluri dinamice:** Imaginile sunt generate în fundal fără a opri jocul. Vei vedea cum apar progresiv în fundal, pe cardurile personajelor și în Codex.
  - 🧹 **Gestionarea imaginilor:** Panou nou pentru a vizualiza și șterge imaginile generate care nu îți plac.
  
  **Îmbunătățiri în Generarea Personajelor:**
  - ⚙️ **Creare aleatorie mai solidă:** Am unificat și îmbunătățit motorul de reguli pe care IA îl folosește pentru a crea personaje de la zero, garantând inventare mai logice (5 până la 10 obiecte coerente) și fișe de personaj mai echilibrate.
  - 🧠 **Creier divizat:** IA înțelege acum mai bine când trebuie să „inventeze” un personaj de la zero și când trebuie să se limiteze la extragerea datelor din biografia pe care ai scris-o chiar tu.
  - ⚡ **Viteză pe măsura ta:** Secțiune nouă în Configurare Vizuală. Alege între „Rapidă” (1 pas), „Medie” (2 pași) sau „Înaltă” (4 pași) pentru a ajusta timpul de generare la puterea echipamentului tău.
  - 🛠️ **Optimizare tehnică:** Modelul de IA pentru imagini se încarcă în **RAM (Memory)** și este procesat prin **CPU**, fără a ocupa memoria video (VRAM). Acest lucru garantează că nu interferează cu performanța IA principale a jocului (LLM). Necesită aproximativ 5GB de RAM suplimentari, menținându-se în cadrul cerințelor minime oficiale Steam.
  - 📤 **Împărtășește-ți aventurile:** Toate imaginile generate sunt salvate automat. Le vei găsi în folderul: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Selector de modele (Avansat):** Dacă pornești jocul cu parametrul `--advanced`, acum poți alege ce model de IA să folosești pentru imagini din panoul Aspect. Acest lucru permite entuziaștilor să încerce diferite versiuni de Stable Diffusion optimizate pentru OpenVINO (fișiere .xml/.bin).
  
  **Narativă și Creier IA:**
  - 🧠 **Sfârșitul buclelor:** A fost implementată o nouă „Doctrină de Memorie” în IA. Acum distinge mai bine între „amintiri” (ceea ce s-a întâmplat deja) și „prezent” (ceea ce se întâmplă acum). Acest lucru ajută la reducerea cazurilor în care IA se repeta sau rămânea blocată.
  - 📜 **Arhive istorice:** Sistemul prezintă amintirile tale către IA ca pe o „Arhivă Istorică Închisă”, facilitând utilizarea acelei informații ca referință pentru a avansa povestea.
  - ⚡ **Instrucțiuni optimizate:** A fost îmbunătățit modul în care jocul solicită narațiunea în limba ta, eliberând capacitatea modelului pentru a se concentra pe creativitate.
  - 👁️ **Focus narativ:** A fost rescrisă percepția IA. Acum înțelege mai bine care elemente sunt „fundal static” și nu ar trebui să le repete inutil în fiecare paragraf.
  - 🔀 **Decizii mai clare:** IA oferă acum căi de ieșire mai bine definite. Sugestiile sale (butoane) se împart între investigarea mediului (Aprofundare) sau schimbarea cursului (Divergență).
  - 🫵 **Adresare directă:** S-a ajustat instrucțiunea de bază pentru a asigura că IA ți se adresează cu „Tu”, îmbunătățind imersiunea personală.
  
  **Crearea de personaj:**
  - 🖼️ **Portrete de personaj:** La generarea unui personaj cu IA, sistemul încearcă să creeze un portret bazat pe vârsta, profesia și descrierea acestuia. Reține că este o versiune inițială, iar fidelitatea (în special în ceea ce privește vârsta) poate varia în funcție de modelul utilizat (continui testele, dar începutul este promițător).
  - 🎲 **Generare aleatorie fiabilă:** S-a corectat o eroare unde butonul „Generează cu IA” putea eșua la prima încercare, lăsând câmpurile goale. Acum sistemul de corecție inteligentă se asigură că răspunsul este întotdeauna valid.
  
  **Gestionarea imaginilor generate:**
  - 🖼️ **Galeria de imagini IA:** Panou nou în meniul Fișier care afișează toate imaginile pe care IA le-a generat în timpul partidelor tale (portrete, fundaluri). Poți filtra după tipul de imagine sau după lume.
  - 🗑️ **Ștergere selectivă:** Selectează una sau mai multe imagini și șterge-le dacă nu te conving (poate acea imagine în care IA a decis că e o idee bună să parcheze un autobuz în grajdul castelului). Sistemul curăță atât fișierul, cât și registrul său intern.
  - 📂 **Acces direct:** Fă dublu clic pe orice miniatură pentru a deschide folderul unde se află fișierul. Dacă ai deja folderul deschis, se va reutiliza aceeași fereastră.
  - 💾 **Reține spațiul:** Dimensiunea ferestrei galeriei se salvează automat între sesiuni.
  
  **Performanță pe configurații joase (Important pentru GPU cu VRAM puțină):**
  - 🧠 **PSR - Guvernanță hibridă:** Sistem nou care împarte munca IA în două faze: Planificare (Chef) și Execuție (Bucătari). Acest lucru permite modelelor locale cu 8 GB de VRAM să funcționeze evitând colapsurile din cauza contextului excesiv (+12K tokens), cu prețul unei latențe mai mari; interacțiunea cu IA trece de la un singur prompt la o serie de prompt-uri (cu cât VRAM-ul este mai mic, cu atât se vor genera mai multe prompt-uri și timpul de răspuns va fi mai mare).
  - ⚡ **Execuție inteligentă:** Sistemul decide automat dacă procesează totul deodată (monolitic) sau împarte în părți (iterativ) în funcție de VRAM-ul tău disponibil. GPU-urile cu mai puțină VRAM activează modul pe părți doar când este necesar.
  - 📊 **Optimizare dinamică:** PSR reduce încărcarea de tokeni în timpul generării, permițând utilizatorilor cu plăci grafice de 4GB să finalizeze crearea personajelor și generarea poveștii, care înainte se blocau.
  - 🔄 **Coerență menținută:** În ciuda împărțirii muncii, sistemul injectează o „intenție maestră” pentru ca IA să nu piardă firul a ceea ce făcea.
  
  **Voci IA (îmbunătățire incrementală):**
  Generare în timp real a vocilor în toate limbile (unele limbi sunt mai limitate decât altele, cea mai variată în tipuri de voci fiind engleza).
  - 🗣️ **Strigăte de luptă vocale:** La începerea luptei împotriva inamicilor ostili, acum se declanșează o frază vocală contextuală de intrare.
  - 🎭 **Fraze dinamice prin context:** Motorul poate genera linii scurte de voce pentru evenimente concrete (servicii/luptă) în funcție de limbă, atmosferă și profilul personajului.
  - 🧠 **Șabloane de voce interne:** Șabloanele tehnice de voce au fost separate de sistemul narativ pentru a evita interferențele cu povestea.
  - 🔊 **Claritate sporită la ascultare:** S-a îmbunătățit inteligibilitatea și prozodia sintezei pentru a prioritiza o dicție ușor de înțeles.
  
  **⚠️ Aviz de compatibilitate (Partide anterioare):**
  - 🔄 Din cauza numărului mare de schimbări interne în motorul de reguli și în sistemul de atmosferă, **partidele și lumile salvate anterior vor fi în continuare jucabile (probabil)**, dar este foarte probabil să prezinte erori sau comportamente neașteptate. **Se recomandă crearea unei lumi noi curate** pentru a vă bucura corect de toate îmbunătățirile.

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

