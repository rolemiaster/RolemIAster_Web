****************************************************************************************************
07/02/2026 20:26 - Sistema de Interpretación Semántica de Combate - BETA_v054
****************************************************************************************************
🧪 YA DISPONIBLE:

⚠️ **AVISO IMPORTANTE:** EL JUEGO PUEDE MIGRAR LA ANTIGUA BASE DE DATOS PARA LA NUEVA ESTRUCTURA MEDIANTE OPCIONES DEL LAUNCHER. NO RECOMIENDO ESTO, AUNQUE FUNCIONE TU ANTIGUA PARTIDA, MUCHAS COSAS ESTARÁN ROTAS. MI RECOMENDACIÓN ES ELIMINAR TODAS LAS PARTIDAS ANTERIORES GUARDADAS. NO ES NECESARIO BORRAR LA BASE DE DATOS AL COMPLETO SALVO CASO EXTREMO.

Cambios:

- 🌍 **Gestor de Mundos y Personajes:** Ahora tienes total libertad. Crea tus propios Mundos con sus propias reglas y ambientación, y dentro de cada uno, crea tantos personajes como quieras. **Nota Importante:** Todos los personajes de un mismo mundo comparten la misma línea temporal y los eventos sucedidos, lo que sienta las bases para el futuro modo multijugador.
- 🧠 **Memoria Contextual (Súper RAG):** La IA ahora tiene "sentidos". Al buscar información en el Lore o en su memoria, tiene en cuenta dónde estás, con quién estás, si estás herido y qué acaba de pasar. ¡Es mucho más intuitivo y coherente!
- 🌍 **Lore en el Primer Personaje:** ¿Escribías una descripción épica de tu mundo y la IA la ignoraba en tu primer personaje? ¡Solucionado! Ahora la descripción manual del mundo llega directamente a la IA durante la creación inicial.
- ⚙️ **Sistema de Mundos Mejorado:** He independizado el nombre de tu mundo de las reglas técnicas.
- 📝 **Claridad en Creación:** He mejorado las instrucciones internas para que la IA entienda mejor cuándo debe inventar un trasfondo.
- 🧠 **Combate por Texto Libre:** Escribe acciones como "lanzar hechizo de curación" o "desenfundar espada". La IA entiende tu intención.
- 🎨 **¡Nueva Interfaz Épica!** Remodelación completa estilo RPG con menús animados y bordes neón.
- 🎬 **IA Director de Escena (MEJORADO):** El combate ahora cobra vida con eventos ambientales.
- ⚔️ **Desenfundar con Palabras:** Escribe "desenfundar espada" en lugar de hacer clic. ¡Cuidado en combate!
- 📖 **Hechizos Reconocidos:** La IA conoce tu libro de hechizos completo.
- 🌍 **Narrativa en tu Idioma:** Respeta estrictamente el idioma seleccionado, evitando mezclas.
- 🛡️ **No Más Turnos Perdidos:** Si el juego no entiende, te pedirá aclaraciones. Tu turno NO se pierde.
- 🎒 **Inventario Manual:** Interfaz de arrastrar y soltar para mover objetos.
- 🧪 **Uso de Pociones Fluido:** Arrastra sobre retrato o usa el menú de clic derecho.
- 🩸 **Corrección de Daño:** Barra de vida corregida. Ya no eres inmortal.
- 👻 **Adiós a los Items Fantasma:** Reparación automática de objetos que la IA olvida crear.
- 🐛 **Corrección Crítica NPC:** Decisiones tácticas de NPCs corregidas.
- 🎒 **Corrección Inventario Inicial:** Personajes ya no empiezan desnudos.
- 🎲 **Creación de Personaje:** Exploit de puntos infinitos corregido.
- 🖼️ **Retratos Arreglados:** El sistema encuentra imágenes correctas independientemente del nombre del mundo.
- 💍 **Iconos Inteligentes:** Objetos y anillos con iconos precisos.
- 🧪 **Tooltips Mejorados:** Información completa al pasar el ratón.
- 🎵 **Mejoras de Audio:** Música no se detiene al pulsar botones.

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
