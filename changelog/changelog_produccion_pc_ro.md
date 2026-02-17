****************************************************************************************************
17/02/2026 19:13 - Generarea de Imagini prin AI, Îmbunătățiri Narative și Control - v058
****************************************************************************************************
- What's New (RO):
  **⚠️ RAMURA EXPERIMENTALĂ (STEAM BETA)**
  Această versiune este disponibilă momentan doar în **Ramura Experimentală** de pe Steam. Pentru a o activa:
  1. Dă clic dreapta pe **RolemIAster** în Biblioteca ta Steam.
  2. Selectează **Proprietăți...**
  3. Mergi la fila **Betas**.
  4. La „Participare la beta”, selectează **experimental** din meniul derulant.
  **Noutate: Prima fază a Generării de Imagini prin AI**
  - 🎨 **Lumea Ta în Imagini:** Am integrat un sistem inițial de generare a imaginilor prin Inteligență Artificială. Pe măsură ce joci, sistemul încearcă să genereze portrete și peisaje care să însoțească atmosfera jocului tău.
  - 🖼️ **Fundaluri Dinamice:** Imaginile sunt generate în fundal fără a opri jocul. Vei vedea cum apar progresiv pe fundal, pe cardurile personajelor și în Codex.
  - ⚡ **Viteză pe Măsura Ta:** Secțiune nouă în Setări Vizuale. Alege între „Rapidă” (1 pas), „Medie” (2 pași) sau „Înaltă” (4 pași) pentru a ajusta timpul de generare la puterea echipamentului tău.
  - 🛠️ **Optimizare Tehnică:** Modelul AI pentru imagini se încarcă în **RAM (Memorie)** și este procesat via **CPU**, fără a ocupa memoria video (VRAM). Acest lucru garantează că nu interferează cu performanța AI-ului principal al jocului (LLM). Necesită aproximativ 5GB de RAM suplimentari, rămânând în limitele cerințelor minime oficiale Steam.
  - 📤 **Împărtășește-ți Aventurile:** Toate imaginile generate sunt salvate automat. Le vei găsi în dosarul: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Selector de Modele (Avansat):** Dacă pornești jocul cu parametrul `--advanced`, acum poți alege ce model AI să folosești pentru imagini din panoul Aspect. Acest lucru permite entuziaștilor să testeze diferite versiuni de Stable Diffusion optimizate pentru OpenVINO (fișiere .xml/.bin).
  **Narativă și Creier AI:**
  - 🧠 **Sfârșitul Buclelor:** A fost implementată o nouă „Doctrină a Memoriei” în AI. Acum distinge mai bine între „amintiri” (ceea ce s-a întâmplat deja) și „prezent” (ceea ce se întâmplă acum). Acest lucru ajută la reducerea cazurilor în care AI-ul se repeta sau se bloca.
  - 📜 **Arhive Istorice:** Sistemul prezintă amintirile tale AI-ului ca o „Arhivă Istorică Închisă”, facilitând utilizarea acelei informații ca referință pentru a avansa povestea.
  - ⚡ **Instrucțiuni Optimizate:** S-a îmbunătățit modul în care jocul solicită narațiunea în limba ta, eliberând capacitatea modelului pentru a se concentra pe creativitate.
  - 👁️ **Focus Narativ:** S-a rescris percepția AI-ului. Acum înțelege mai bine ce elemente sunt „fundal static” și nu ar trebui să le repete inutil în fiecare paragraf.
  - 🔀 **Decizii Mai Clare:** AI-ul oferă acum căi de scăpare mai definite. Sugestiile sale (butoanele) sunt împărțite între investigarea mediului (Aprofundare) sau schimbarea direcției (Divergență).
  - 🫵 **Adresare Directă:** S-a ajustat instrucțiunea de bază pentru a asigura că AI-ul ți se adresează cu „Tu”, îmbunătățind imersiunea personală.
  **Crearea Personajului:**
  - 🖼️ **Portrete de Personaj:** La generarea unui personaj cu AI, sistemul încearcă să creeze un portret bazat pe vârstă, profesie și descriere. Ține cont că este o versiune inițială și fidelitatea (în special la vârstă) poate varia în funcție de modelul utilizat. (continui testele, dar începutul este promițător)
  - 🎲 **Generare Aleatorie Fiabilă:** S-a corectat o eroare prin care butonul „Generează cu AI” putea eșua la prima încercare, lăsând câmpurile goale. Acum, sistemul de corecție inteligentă se asigură că răspunsul este întotdeauna valid.

****************************************************************************************************
15/02/2026 02:57 - Scriere Directă, Corecții de Stabilitate și Detectare d - Beta_v057
****************************************************************************************************
- What's New (RO):
  **Stabilitate:**
  - 🛠️ **Adio Blocaje de Configurare:** Au fost corectate mai multe erori care apăreau în anumite condiții și împiedicau deschiderea sau modificarea configurației IA la schimbarea modelului sau resetarea valorilor.
  - 🗃️ **Bază de Date Silențioasă:** Avertismentul enervant de "Bază de Date Incompatibilă" la pornirea jocului nu va mai apărea dacă baza ta de date este în regulă. Se va afișa doar atunci când există o modificare structurală reală care necesită migrare.
  
  **Experiență de Joc:**
  - 🎯 **Control de Precizie IA:** Acum poți scrie manual valorile pentru Context, Token-uri, Temperatură sau Straturi GPU direct într-un câmp numeric de lângă glisor. Nu mai depinzi doar de "glisoare"! Ambele controale sunt sincronizate: mișcă glisorul și numărul se actualizează, sau scrie numărul și glisorul se mișcă.
  - ⌨️ **Scriere Directă:** Nu mai este nevoie să dai clic în caseta de text pentru a scrie acțiunea! Acum poți începe să tastezi direct în timp ce te afli pe ecranul de joc. Dacă interacționezi cu inventarul sau cu alt panou și apoi vrei să scrii, pur și simplu începe să tastezi fără a fi nevoie să selectezi nimic. Sistemul redirecționează automat apăsările de taste către câmpul de acțiune. Nu interferează cu meniurile, dialogurile sau scurtăturile de sistem.
  
  Câteva modificări minore în plus...

****************************************************************************************************
14/02/2026 21:48 - Sincronizarea Contextului și Controlul Răspunsului IA - Beta_v056
****************************************************************************************************
- What's New (RO):
  **Sisteme și Performanță:**
  - 🧠 **Control Total al Contextului:** Acum poți ajusta atât memoria IA (`n_ctx`), cât și lungimea răspunsurilor sale (`Max Tokens`) cu glisoare mult mai intuitive.
  - ♾️ **Mod Nelimitat:** Glisează la minim pentru a activa modul "Nelimitat", lăsând modele puternice precum Gemini să-și folosească întreaga capacitate fără restricții.
  - ⚡ **Repornire Drivere:** O nouă opțiune în lansator pentru a reporni driverele video înainte de a juca (opțional, configurabil din launcher); acum, la pornire, ecranul va clipi, asigurându-ne astfel că toată memoria VRAM este disponibilă, curățând-o de reziduuri.
  - 🛠️ **Configurare Robustă:** Au fost corectate erorile vizuale și defecțiunile tehnice la salvarea configurației furnizorilor tăi preferați de IA.
  - 🚀 **Detectare Mai Bună a Erorilor:** Jocul este acum mai inteligent în detectarea momentului în care o IA externă rămâne fără spațiu.
  
  **Mecanici și Lume:**
  - 🎒 **Inventar Garantat:** S-a terminat cu începutul unei aventuri fără a-ți vedea obiectele. Sistemul SDIA supraveghează acum și crearea personajului, astfel încât echipamentul tău să fie mereu acolo.
  - 📜 **Lore Purificat:** S-a reparat o eroare care injecta fragmente de "cod" sau text ciudat în istoria lumii tale. Acum Codexul va fi mai pur și mai lizibil.
  - ⚠️ **Ghid de Compatibilitate:** Au fost incluse avertismente în configurare pentru a te ajuta să alegi modele compatibile (Instruct/Chat).
  - ⚙️ **Implanturi Fiabile:** S-a corectat definiția sloturilor și încărcarea regulilor la crearea personajelor. Acum, toate îmbunătățirile tale cibernetice vor folosi sloturi oficiale și se vor echipa automat în mod corect.
  - 🎓 **Limită de Ucenic:** S-a ajustat echilibrul inițial al abilităților. IA generează un pachet de puncte de distribuit automat în cele mai importante abilități, în funcție de contextul personajului tău. Eroii tăi vor începe acum ca adevărați novici, progresând într-un mod mai logic.

****************************************************************************************************
14/02/2026 05:06 - Consolidarea Integrității, Conștientizarea Personajelor și Optimizare - Beta_v055
****************************************************************************************************
- What's New (RO):
  - 🧠 **Prioritate IA după preferințe:** Acum poți trage și plasa conectorii IA pentru a decide pe care să-l folosești primul. Dacă unul eșuează, jocul va încerca automat cu următorul din lista ta de priorități.
  - ⚙️ **Control Preîncărcare:** Adăugată o opțiune în lansator pentru a decide dacă dorești să preîncarci modelul IA local sau să-l încarci doar la nevoie (economie de resurse la pornire).
  - 🛡️ **Ștergere Sigură și Curată:** La ștergerea unei lumi, sistemul se ocupă acum de curățarea absolută a tuturor datelor aferente (personaje și poveste), păstrând baza de date impecabilă.
  - 🚀 **Optimizare Memorie:** „Creierul” IA se încarcă acum o singură dată și este partajat între toate funcțiile, economisind multă memorie video (VRAM).
  - 🎨 **Interfață Inteligentă:** Panoul de selecție a lumilor se ajustează acum perfect la ecran și la text, fără butoane tăiate sau spații nefolosite.
  - 🔄 **Rotație Inteligentă Îmbunătățită:** Am reparat sistemul de rotație pentru a nu renunța la IA locală din prima; acum îi oferă o șansă de corectare înainte de a căuta ajutor extern.
  - 🌍 **IA Poliglotă și Robustă:** Detectarea obiectelor și narațiunea sunt acum mai precise în 10 limbi, cu protecție specială pentru a nu rămâne niciodată fără poveste.
  - 🛠️ **Persistență IA Garantată:** Corectată eroarea care făcea ca Gemini să „uite” sau să se transforme în Ollama. Prioritățile tale de utilizare a IA sunt acum salvate sigur și chirurgical.
  - ⚡ **Gemini Restaurat:** Reparat accesul la modelul Gemini, recuperând cheile și URL-ul corecte.
  - 🎨 **Interfață Tematică Corectată:** Butoanele de decizie recuperează acum instantaneu culoarea lumii tale (ex. Auriu pentru fantezie) la încărcarea jocului.
  - 👥 **Conștientizare între Personaje:** IA este acum conștientă de toate personajele tale! Dacă ai mai mulți eroi în aceeași lume, IA îi va recunoaște ca locuitori și își va putea aminti ce a făcut fiecare în parte.
  - 🧠 **Memorie cu Atribuire:** Sistemul de amintiri distinge acum cine a efectuat fiecare acțiune, evitând ca IA să confunde faptele tale trecute cu cele ale altor personaje.

****************************************************************************************************
13/02/2026 07:56 - Sistem de Interpretare Semantică a Luptei - Beta_v054
****************************************************************************************************
- What's New (RO):
  🧪 ACUM DISPONIBIL:
  
  ⚠️ **AVERTISMENT IMPORTANT:** JOCUL POATE MIGRA VECHEA BAZĂ DE DATE CĂTRE NOUA STRUCTURĂ PRIN OPȚIUNILE LAUNCHERULUI. NU RECOMAND ACEST LUCRU; CHIAR DACĂ VECHEA SALVARE FUNCȚIONEAZĂ, MULTE LUCRURI VOR FI STRICATE. RECOMANDAREA MEA ESTE SĂ ȘTERGI TOATE SALVĂRILE ANTERIOARE. NU ESTE NECESAR SĂ ȘTERGI ÎNTREAGA BAZĂ DE DATE DECÂT ÎN CAZURI EXTREME.
  
  Schimbări:
  
  - 🌍 **Manager de Lumi și Personaje:** Acum ai libertate deplină. Creează-ți propriile Lumi cu propriile reguli și atmosferă, iar în fiecare dintre ele, creează oricâte personaje dorești. **Notă Importantă:** Toate personajele din aceeași lume împart aceeași axă temporală și evenimentele petrecute, ceea ce pune bazele viitorului mod multiplayer.
  - 🧠 **Memorie Contextuală (Super RAG):** IA are acum „simțuri”. Când caută informații în Lore sau în memoria sa, ține cont de unde ești, cu cine ești, dacă ești rănit și ce tocmai s-a întâmplat. Dacă ești cu un Rege, își va aminti lucruri despre regi. Dacă ești rănit, va căuta reguli despre vindecare. Este mult mai intuitiv și coerent!
  - 🌍 **Lore la Primul Personaj:** Scriai o descriere epică a lumii tale și IA o ignora la primul tău personaj? Rezolvat! Acum descrierea manuală a lumii ajunge direct la IA în timpul creării inițiale, chiar înainte ca sistemul de memorie să se activeze.
  - ⚙️ **Sistem de Lumi Îmbunătățit:** Am separat numele lumii tale de regulile tehnice. Acum poți numi lumea cum dorești, fără ca acest lucru să afecteze încărcarea regulilor de Fantezie sau Cyberpunk.
  - 📝 **Claritate în Creare:** Am îmbunătățit instrucțiunile interne pentru ca IA să înțeleagă mai bine când trebuie să inventeze un trecut și când trebuie să se limiteze la extragerea statisticilor tale.
  - 🧠 **Luptă prin Text Liber:** Acum poți scrie acțiunile în luptă ca și cum ai vorbi cu un GM la masă: „arunc vrajă de vindecare pe mine”, „îmi scot sabia”, „folosesc poțiune de vindecare”. IA îți înțelege intenția și o traduce în mecanici de joc.
  - 🎨 **O Nouă Interfață Epică!** Am remodelat jocul complet. Meniuri stil RPG, fundaluri animate și o experiență vizuală complet reînnoită. Stil întunecat semitransparent, margini neon și umbre netezite pentru o imersiune totală.
  - 🎬 **IA Regizor de Scenă (ÎMBUNĂTĂȚIT):** Lupta prinde viață. IA generează evenimente ambientale și reacții care îmbogățesc narațiunea: torțe care cad, inamici care se retrag, grinzi care se prăbușesc. Câmpul de luptă nu mai este static!
  - ⚔️ **Scoaterea Armei prin Cuvinte:** Nu mai trebuie să dai clic pe slotul armei. Pur și simplu scrie „scot sabia” sau „îmi scot toporul” și sistemul interpretează automat (ATENȚIE!, a face asta în luptă poate duce la eșec, gafă și pierderea turei!... „La luptă se vine pregătit de acasă!”).
  - 📖 **Vrăji Recunoscute:** IA îți cunoaște acum întreaga carte de vrăji. Spune „arunc minge de foc” și, dacă ai acea vrajă, o va lansa.
  - 🌍 **Narațiune în Limba Ta:** Povestea respectă acum strict limba selectată, evitând amestecurile ciudate între limbi (sper să nu mai văd niciodată spanglish!, am forțat atât de mult IA-ul încât aș zice că, dacă mai generează texte în altă limbă decât cea selectată, e pur și simplu blestemată).
  - 🛡️ **Gata cu Turele Pierdute:** Dacă jocul nu îți înțelege acțiunea, îți va cere să o reformulezi. Tura ta NU se pierde.
  - 🎒 **Inventar Manual:** Pentru a muta obiecte între sloturi (echipare din rucsac, încărcare muniție), folosește interfața de tragere și plasare. Acest lucru evită confuziile și economisește resurse IA.
  - 🧪 **Utilizare Fluidă a Poțiunilor:** Acum poți trage poțiuni și mâncare direct peste portretul tău pentru a le folosi. Am adăugat și opțiunea „Folosește” la clic dreapta. Mai intuitiv și mai rapid!
  - 🩸 **Corecție Daune:** Nu mai ești nemuritor! Am reparat o problemă unde bara de viață nu scădea deși erai lovit. Acum vei suferi așa cum se cuvine.
  - 👻 **Adio Obiecte Fantomă:** Găseai un obiect în poveste dar nu apărea niciodată în rucsac? Problema rezolvată! Acum sistemul repară automat obiectele pe care IA „uită” să le creeze.
  - 🐛 **Corecție Critică NPC:** Rezolvat un bug care împiedica NPC-urile să ia decizii tactice corect, determinându-le să „aștepte” mereu în loc să atace sau să se apere.
  - 🎒 **Corecție Inventar Inițial:** Noile personaje nu mai încep dezbrăcate. Acum își primesc echipamentul inițial corect.
  - 🎲 **Crearea Personajului:** Corectat un exploit unde creșterea și scăderea unui atribut la anumite praguri genera puncte extra infinite. S-a terminat cu trucul Carismei!
  - 🖼️ **Portrete Reparate:** Creai o lume cu nume propriu și portretele dispăreau? Reparat! Acum sistemul găsește imaginile corecte indiferent de cum îți botezi lumea.
  - 💍 **Iconițe Inteligente:** Obiectele (inclusiv inelele) afișează acum iconițe mai precise și corecte în interfață.
  - 🧪 **Tooltip-uri Îmbunătățite:** Poțiunile, consumabilele și vrăjile își afișează acum corect toate informațiile și efectele la trecerea mouse-ului.
  - 🎵 **Îmbunătățiri Audio:** Muzica de luptă nu se mai oprește la apăsarea butoanelor predefinite.
  - [I18N] **Fix Implanturi:** Adăugate chei de traducere lipsă pentru sloturile de implanturi (`slot_implant_*`) și iconițele corespunzătoare (`icon_implant_*`) în `es.json`.
  - [FIX][AUDIO] **Audio Inconsistent:** Adaptate efectele sonore (SFX) de echipare a obiectelor și scoatere a armelor la atmosferă. Acum sistemul detectează `setting_key` și folosește sunete futuriste/industriale în Cyberpunk și sunete clasice în Fantezie.
  - [FIX][I18N] **Curățare es.json:** Eliminate peste 20 de chei duplicate în `es.json` și corectate greșeli de tipar în numele sloturilor (ex. „Oíidos” -> „Oídos”).
  - ⚙️ **Detectare Inteligentă a Modelelor:** Acum jocul citește direct „creierul” modelelor pe care le imporți (GGUF). Detectează contextul maxim real în mod automat. (Modelele oficiale optimizate nici nu sunt atinse pentru stabilitate maximă).
  - 📂 **Economisire Spațiu:** La adăugarea unui model din calculatorul tău, acum jocul îl mută direct în folderul său în loc să îl copieze. Gigabaiții tăi îți vor mulțumi!
  - ⚖️ **Dreptate în Atribute:** Corectat un exploit care permitea obținerea de puncte infinite la creșterea și scăderea atributelor la creare.
  - 📖 **Ghid de Antrenament:** Am actualizat Manualul (README) cu toate detaliile despre cum personajele tale câștigă experiență și își cresc atributele.
  - 📜 **Codex de Lumi Epice:** S-a terminat cu lore-ul de tip „un post-scriptum”! Acum generatorul creează lumi cu o istorie profundă, descriind religiile, legile, geografia și personajele faimoase într-un format de cronică detaliată.
  - 🧙 **Povești Coerente:** Personajul tău nu se mai naște în vid. Trecutul său se integrează acum inteligent cu lore-ul lumii pe care tocmai ai creat-o sau ales-o.
  - ⚡ **Interfață Fluidă:** Autogenerarea poveștilor și lumilor se realizează acum în fundal. S-au terminat așteptările cu ecranul înghețat!
  - 🚀 **Început de Aventură Instantaneu:** Am eliminat așteptările! Acum, după ce îți creezi personajul, sari direct în poveste. Sistemul folosește trecutul tău îmbogățit pentru a crea începutul perfect fără să trebuiască să scrii nici măcar un singur cuvânt în plus.
  - 🎭 **Trecuturi cu Motivație:** Personajele tale nu mai au doar un trecut, ci și un motiv urgent pentru a începe aventura. Noul sistem de IA generează automat scânteia inițială a poveștii integrată în biografia ta.
  - 🧹 **Interfață Simplificată:** Am scos butoanele și ecranele care nu aduceau valoare. Butonul „Începe Povestea” centralizează acum toată puterea ca să începi să joci cât mai curând.
  - [FIX][UI] **Duplicare Vizuală în Selecția Lumii:** Corectat bug unde numele lumii apărea duplicat ca „Nume [Nume]”. Acum eticheta de tip este ascunsă dacă este redundantă.
  - [FEAT][UI] **Încărcare Rapidă (Clic Simplu):** Acum se poate încărca un personaj sau începe crearea unuia nou cu un singur clic în ecranul de selecție a lumilor. Se menține expansiunea lumilor pentru a evita conflictele.
  - 🧠 **IA mai Creativă:** Am spart „bucla de repetiție” a IA injectând variabilitate tehnică în fiecare cerere. Acum personajele generate aleatoriu vor fi mult mai unice și originale, ignorând exemplele din ghid.
  
  🛡️ Celor curajoși care ÎNDRĂZNESC să lupte în prima linie a bătăliei: Aventura vă așteaptă, acum mai neîmblânzită ca niciodată!

****************************************************************************************************
06/02/2026 02:32 - Suport Vulkan (AMD/Intel) și Gestionare Robustă a Erorilor - Beta_v053
****************************************************************************************************
- What's New (RO):
  - 🚀 **Motor Hibrid Vulkan:** Suport oficial pentru plăcile grafice AMD și Intel! Acum jocul include un motor Vulkan dedicat care se activează automat (sau manual) pentru a accelera IA pe sistemele non-NVIDIA.
  - ⚙️ **Control Total al Motorului:** Am adăugat opțiunea "Forțează Vulkan" atât în Launcher, cât și în Setări. Dacă ai probleme cu CUDA sau vrei să testezi performanța Vulkan (care pe multe configurații zboară), tu deții controlul.
  - 🚦 **Starea Sistemului:** Acum poți vedea exact ce motor ruge sub capotă (🟢 VERDE pentru CUDA, 🔴 ROȘU pentru Vulkan) în panoul de stare.
  - 🛡️ **Semafor IA:** Dacă Inteligența Artificială „obosește” (își depășește cota) sau se întrerupe internetul, jocul te va anunța printr-o fereastră clară și utilă, în loc să te lase să aștepți în tăcere.
  - 🔄 **Siguranță Anti-Blocare:** Dacă apare o eroare de conexiune, jocul nu mai „rupe” conversația. Opțiunile tale de dialog vor reapărea pentru a putea reîncerca fără a pierde progresul.
  - ☁️ **Memorie Cloud:** Meniul de configurare reține acum corect preferințele tale pentru furnizorii de cloud între sesiuni.

****************************************************************************************************
03/02/2026 20:23 - Optimizare Memorie VRAM și Stabilitate la Încărcare - Beta_v052
****************************************************************************************************
- What's New (RO):
  - 🧠 **Creier Optimizat:** Am corectat o eroare gravă care determina AI-ul să încerce să „gândească de două ori” simultan, dublând utilizarea memoriei plăcii video și cauzând lag extrem sau blocaje. VRAM-ul tău îți va mulțumi!
  - 💾 **Încărcare Sigură:** Stabilitate generală îmbunătățită la încărcarea salvărilor pentru a garanta că reluarea aventurii tale este întotdeauna o experiență fluidă.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Critic: Stabilitate, Multi-GPU și Îmbunătățiri de Localizare - Beta_v051
****************************************************************************************************
- What's New (RO):
  - 🚑 **Remediere Critică:** S-a rezolvat o problemă care împiedica, în circumstanțe rare, pornirea jocului („Eșec Total”) din cauza coruperii bazei de date pe care Launcher-ul nu o putea curăța. Acum opțiunea „Șterge Baza de Date” este mult mai eficientă.
  - ⚡ **Îmbunătățire Hardware:** S-a corectat o eroare care făcea ca modul de „Configurare Automată” să ignore puterea sistemelor cu mai multe plăci grafice în anumite configurații cu GPU-uri neidentice.
  - 🛠️ **Utilitar:** S-a adăugat o nouă opțiune în Launcher pentru a deschide cu ușurință jurnalul (log) sesiunii anterioare și a facilita suportul.
  - 🌍 **Localizare:** Au fost corectate mai multe butoane care apăreau în engleză (Yes/No) în launcher. Acum respectă limba selectată.
  - 📖 **Interfață:** S-a îmbunătățit formatul textului cu informații despre versiune pentru a fi mai ușor de citit.
  
  - **În curând:** Următorul punct în procesul de implementare: compatibilitate cu GPU AMD, NVIDIA și Intel prin Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Reparare Manuale & Stabilitate - Beta_v050
****************************************************************************************************
- Noutăți:
  **Putere Multi-GPU și Corecții Critice!**
  
  * **🚀 Suport Multi-GPU:** A fost implementată capacitatea de a împărți modelele mari de IA între mai multe plăci grafice. *Acum îți poți folosi tot arsenalul hardware; Putere Nelimitată!*
  * **🛡️ Stabilitate:** Au fost adăugate toate bibliotecile DLL lipsă pentru a preveni închiderile neașteptate. *Am blindat motorul, dacă eșuează acum va fi din cauza unei aruncări critice greșite cu zarurile.*
  * **📖 Manuale Web Dinamice:**
    * **Selector Real:** Meniul de limbi verifică acum ce fișiere există cu adevărat înainte de a le afișa. *S-a terminat cu opțiunile fantomă care nu făceau nimic; magie de divinație de nivelul 5.*
    * **Reparare Eroare 403:** S-a rezolvat eroarea de permisiuni care împiedica vizualizarea Changelog-ului în joc. *Am învățat aplicația să ceară trecere corect („Sesam, deschide-te!”).*
  * **🌍 Limbi:** Revizuirea textelor și a traducerilor. *Mod Poliglot activat.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizare și Îmbunătățiri IA - Beta_v049
****************************************************************************************************
- Noutăți:
  Am șlefuit experiența de joc cu corecții importante și un nou instrument vizual:

  * **Inventar Curat și Fiabil:** S-a terminat cu găsirea „obiectelor fantomă” sau a itemelor cu nume ciudate în rucsac. Am implementat un sistem de validare narativă care asigură că tot ceea ce culegi sau cumperi există cu adevărat în lumea jocului.
  * **Dialoguri Fluide:** Am reparat acele butoane enervante care uneori apăreau ca „Unknown” sau nu răspundeau. Acum opțiunile de dialog cu NPC-urile vor afișa întotdeauna textul corect.
  * **Generare Robustă de Personaje:** Crearea eroului tău este acum un proces solid. Am rezolvat conflictele care uneori lăsau fișa incompletă sau cu statistici eronate la combinarea biografiei și a stats-urilor.
  * **Noua Bară de Stare IA:** Acum poți vedea creierul mașinii funcționând! Am adăugat o bară în partea superioară care îți arată viteza de răspuns și utilizarea memoriei în timp real. Astfel vei ști întotdeauna dacă IA-ul „gândește” următoarea ta aventură.

****************************************************************************************************
28/01/2026 03:50 - Fix Critic Compilare - Beta_v048
****************************************************************************************************
- Noutăți:
  S-a rezolvat o eroare critică ce împiedica pornirea jocului în instalări noi. S-a îmbunătățit stabilitatea și compatibilitatea cu diferite echipamente.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & Suport RTX 50 - Beta_v047
****************************************************************************************************
- Noutăți:

  > [!IMPORTANT]
  > **DIN MOTIVE DE COMPATIBILITATE, ESTE NECESAR SĂ ȘTERGEȚI DB-UL ANTERIOR, ALTFEL ESTE FOARTE PROBABIL SĂ APARĂ ERORI ÎN CONFIGURAȚIA IA**
  > **(Soluție: Click pe pictograma roată dințată ⚙️ din Launcher -> Șterge Baza de Date)**

  *Suport Critic pentru RTX Seria 50: S-a rezolvat o eroare gravă care provoca închiderea neașteptată la încercarea de a genera personaje pe noile plăci grafice NVIDIA (RTX 5070, 5080, 5090).
  (Cum nu dispun de un RTX din seria 5000 nu am putut testa direct dacă soluția este 100%, dar teoria este că ar trebui să fie rezolvat. Aștept cântecele voastre de victorie aici!)
  
  *Actualizare Motor IA: Am actualizat creierul local al jocului pentru a fi compatibil cu cea mai recentă tehnologie hardware, asigurând că toți se pot bucura de experiență offline, indiferent cât de modern este echipamentul lor.
  
  *Launcher Nou: Actualizări și știri în timp real de pe site-ul oficial.


****************************************************************************************************
26/01/2026 06:49 - Integrare Web Documentație - Beta_v045
****************************************************************************************************
- Noutăți:
  *Acum Manualul de Utilizare și Jurnalul de Modificări (Changelog) se încarcă direct de pe site-ul nostru oficial, garantând că ai mereu informația cea mai actualizată fără a fi nevoie să descarci patch-uri. Include mod offline inteligent.

  *Am consolidat stabilitatea jocului astfel încât să nu se blocheze niciodată la pornire. În plus, vânzătorii s-au întors din vacanțele lor din limb: acum apar corect, au marfă pe rafturi și respectă ambientul lumii (fără poțiuni magice în viitor).

  *S-a reparat bug-ul care nu permitea modificarea parametrilor IA și selectarea modelului IA, făcând ca unii utilizatori cu VRAM limitat să nu poată juca.
  **În caz de necesitate de a modifica parametrii IA, recomand cu tărie să încercați mai întâi reducând % de VRAM la 85%, reporniți și testați; dacă acest lucru tot nu este suficient, recomand să verificați ca VRAM-ul GPU-ului să nu fie folosit de alte procese care nu țin de jocul propriu-zis (repornire pc dacă este necesar, închiderea aplicațiilor care pot ocupa VRAM). Dacă după scăderea cantității de VRAM chiar și până la 70%, tot nu funcționează, nu recomand să scădeți mai mult deoarece jocul nu va putea gestiona prompt-urile trimise către IA, astfel că, deși se reușește evitarea depășirii VRAM-ului, jocul nu va putea funcționa pentru că nu are cu ce să o facă; în acel caz singura opțiune rămasă este să coborâți la un model inferior, să puneți din nou parametrii IA pe automat și să reporniți.

****************************************************************************************************
26/01/2026 04:00 - Stabilizare Core și Diagnostic Servicii - Beta_v044
****************************************************************************************************
- Noutăți:
  Stabilizare Core și Diagnostic Servicii" "Corecții critice în generarea de personaje, UI (MainWindow) și optimizarea căutării semantice. Începerea diagnosticului profund al modului servicii.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs și Stabilitate - Beta_v043
****************************************************************************************************
- Description:
  Patch corectiv axat pe diagnosticare și corectarea buclei de UI.

- Changes:
  S-a reparat bug-ul vizual al dialogului de repornire
  Nou sistem de logs în %LOCALAPPDATA% pentru diagnosticare
  Optimizări de performanță internă

****************************************************************************************************
24/01/2026 06:30 - Suport Biografie Backend - Beta_v042
****************************************************************************************************
- Description:
  Expunerea datelor de biografie pentru UI și ajustări de i18n.

<!-- source_hash: 5f218fc5 -->
