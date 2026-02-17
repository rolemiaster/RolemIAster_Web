****************************************************************************************************
17/02/2026 07:20 - MI-alapú Képkészítés, Narratív Fejlesztések és Irányítás - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (HU):
  **⚠️ KÍSÉRLETI ÁG (STEAM BÉTA)**
  Ez a verzió jelenleg csak a Steam **Kísérleti Ágában** (Experimental Branch) érhető el. Az aktiváláshoz:
  1. Kattints jobb gombbal a **RolemIAster**-re a Steam Könyvtáradban.
  2. Válaszd a **Tulajdonságok...** (Properties) lehetőséget.
  3. Menj a **Béták** (Betas) fülre.
  4. A "Bétában való részvétel" (Beta Participation) alatt válaszd ki az **experimental** lehetőséget a legördülő menüből.
  
  **Újdonság: MI Képalkotás Első Fázis**
  - 🎨 **A Világod Képekben:** Integráltam egy kezdeti Mesterséges Intelligencia alapú képkészítő rendszert. Játék közben a rendszer megpróbál a játék hangulatához illeszkedő portrékat és tájakat generálni.
  - 🖼️ **Dinamikus Hátterek:** A képek a háttérben generálódnak anélkül, hogy megállítanák a játékot. Látni fogod, ahogy fokozatosan megjelennek a háttérben, a karakterkártyákon és a Kódexben.
  - ⚡ **Testreszabható Sebesség:** Új rész a Vizuális Beállításokban. Válassz a "Gyors" (1 lépés), "Közepes" (2 lépés) vagy "Magas" (4 lépés) közül, hogy a generálási időt a géped teljesítményéhez igazítsd.
  - 🛠️ **Technikai Optimalizálás:** A képalkotó MI modell a **RAM-ba (Memória)** töltődik be és a **CPU** dolgozza fel, anélkül, hogy videómemóriát (VRAM) foglalna. Ez biztosítja, hogy ne zavarja a játék fő MI-jének (LLM) teljesítményét. Körülbelül 5 GB plusz RAM-ot igényel, ami még mindig a hivatalos Steam minimum követelményeken belül marad.
  - 📤 **Oszd Meg Kalandjaidat:** Minden generált kép automatikusan mentésre kerül. Itt találod őket: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narratíva és MI Agy:**
  - 🧠 **A Hurkok Vége:** Új "Memória Doktrínát" vezettünk be az MI-nél. Mostantól jobban megkülönbözteti az "emlékeket" (ami már megtörtént) és a "jelent" (ami éppen történik). Ez segít csökkenteni azokat az eseteket, amikor az MI ismételte önmagát vagy elakadt.
  - 📜 **Történeti Archívumok:** A rendszer az emlékeidet "Lezárt Történeti Archívumként" mutatja be az MI-nek, megkönnyítve számára, hogy ezt az információt referenciaként használja a történet előremozdításához.
  - ⚡ **Optimalizált Utasítások:** Javítottuk a módot, ahogyan a játék a narrációt kéri a nyelveden, felszabadítva a modell kapacitását, hogy a kreativitásra koncentrálhasson.
  - 👁️ **Narratív Fókusz:** Újraírtuk az MI észlelését. Mostantól jobban érti, mely elemek számítanak "statikus háttérnek", és nem kellene feleslegesen ismételnie őket minden bekezdésben.
  - 🔀 **Világosabb Döntések:** Az MI mostantól határozottabb menekülőutakat kínál. Javaslatai (gombok) a környezet kivizsgálása (Elmélyülés) vagy az irányváltás (Eltérés) között oszlanak meg.
  - 🫵 **Közvetlen Megszólítás:** Módosítottuk az alap utasítást annak érdekében, hogy az MI tegeződjön veled, javítva a személyes beleélést.
  
  **Karakterkészítés:**
  - 🖼️ **Karakterportrék:** Amikor MI-vel generálsz egy karaktert, a rendszer megpróbál egy portrét készíteni a kora, hivatása és leírása alapján. Vedd figyelembe, hogy ez egy kezdeti verzió, és a hűség (különösen az életkor tekintetében) a használt modelltől függően változhat. (továbbra is tesztelek, de a kezdet biztató)
  - 🎲 **Megbízható Véletlenszerű Generálás:** Javításra került egy hiba, ahol a "Generálás MI-vel" gomb az első próbálkozásra kudarcot vallhatott, üresen hagyva a mezőket. Mostantól az intelligens javítórendszer biztosítja, hogy a válasz mindig érvényes legyen.

****************************************************************************************************
17/02/2026 07:04 - MI-alapú Képkészítés, Narratív Fejlesztések és Irányítás - Beta_v058
****************************************************************************************************
- What's New (HU):
  **⚠️ KÍSÉRLETI ÁG (STEAM BÉTA)**
  Ez a verzió jelenleg csak a Steam **Kísérleti Ágában** (Experimental Branch) érhető el. Az aktiváláshoz:
  1. Kattints jobb gombbal a **RolemIAster**-re a Steam Könyvtáradban.
  2. Válaszd a **Tulajdonságok...** (Properties) lehetőséget.
  3. Menj a **Béták** (Betas) fülre.
  4. A "Bétában való részvétel" (Beta Participation) alatt válaszd ki az **experimental** lehetőséget a legördülő menüből.
  
  **Újdonság: MI Képalkotás Első Fázis**
  - 🎨 **A Világod Képekben:** Integráltam egy kezdeti Mesterséges Intelligencia alapú képkészítő rendszert. Játék közben a rendszer megpróbál a játék hangulatához illeszkedő portrékat és tájakat generálni.
  - 🖼️ **Dinamikus Hátterek:** A képek a háttérben generálódnak anélkül, hogy megállítanák a játékot. Látni fogod, ahogy fokozatosan megjelennek a háttérben, a karakterkártyákon és a Kódexben.
  - ⚡ **Testreszabható Sebesség:** Új rész a Vizuális Beállításokban. Válassz a "Gyors" (1 lépés), "Közepes" (2 lépés) vagy "Magas" (4 lépés) közül, hogy a generálási időt a géped teljesítményéhez igazítsd.
  - 🛠️ **Technikai Optimalizálás:** A képalkotó MI modell a **RAM-ba (Memória)** töltődik be és a **CPU** dolgozza fel, anélkül, hogy videómemóriát (VRAM) foglalna. Ez biztosítja, hogy ne zavarja a játék fő MI-jének (LLM) teljesítményét. Körülbelül 5 GB plusz RAM-ot igényel, ami még mindig a hivatalos Steam minimum követelményeken belül marad.
  - 📤 **Oszd Meg Kalandjaidat:** Minden generált kép automatikusan mentésre kerül. Itt találod őket: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narratíva és MI Agy:**
  - 🧠 **A Hurkok Vége:** Új "Memória Doktrínát" vezettünk be az MI-nél. Mostantól jobban megkülönbözteti az "emlékeket" (ami már megtörtént) és a "jelent" (ami éppen történik). Ez segít csökkenteni azokat az eseteket, amikor az MI ismételte önmagát vagy elakadt.
  - 📜 **Történeti Archívumok:** A rendszer az emlékeidet "Lezárt Történeti Archívumként" mutatja be az MI-nek, megkönnyítve számára, hogy ezt az információt referenciaként használja a történet előremozdításához.
  - ⚡ **Optimalizált Utasítások:** Javítottuk a módot, ahogyan a játék a narrációt kéri a nyelveden, felszabadítva a modell kapacitását, hogy a kreativitásra koncentrálhasson.
  - 👁️ **Narratív Fókusz:** Újraírtuk az MI észlelését. Mostantól jobban érti, mely elemek számítanak "statikus háttérnek", és nem kellene feleslegesen ismételnie őket minden bekezdésben.
  - 🔀 **Világosabb Döntések:** Az MI mostantól határozottabb menekülőutakat kínál. Javaslatai (gombok) a környezet kivizsgálása (Elmélyülés) vagy az irányváltás (Eltérés) között oszlanak meg.
  - 🫵 **Közvetlen Megszólítás:** Módosítottuk az alap utasítást annak érdekében, hogy az MI tegeződjön veled, javítva a személyes beleélést.
  
  **Karakterkészítés:**
  - 🖼️ **Karakterportrék:** Amikor MI-vel generálsz egy karaktert, a rendszer megpróbál egy portrét készíteni a kora, hivatása és leírása alapján. Vedd figyelembe, hogy ez egy kezdeti verzió, és a hűség (különösen az életkor tekintetében) a használt modelltől függően változhat. (továbbra is tesztelek, de a kezdet biztató)
  - 🎲 **Megbízható Véletlenszerű Generálás:** Javításra került egy hiba, ahol a "Generálás MI-vel" gomb az első próbálkozásra kudarcot vallhatott, üresen hagyva a mezőket. Mostantól az intelligens javítórendszer biztosítja, hogy a válasz mindig érvényes legyen.

****************************************************************************************************
13/02/2026 21:47 - MI-beállítások optimalizálása és i18n megerősítése - Beta_v055
****************************************************************************************************
- What's New (HU):
  - ⚙️ **Helyi prioritásvezérlés:** Mostantól manuálisan is beállíthatod a videókártyáid prioritását, még akkor is, ha a rendszer automatikus módban van.
  - 🧠 **MI-rotációs információk:** Információs paneleket adtam hozzá a külső szolgáltatók beállításaihoz, hogy elmagyarázzam, hogyan működik az automatikus rotáció hiba vagy kvótatúllépés esetén.
  - 🌍 **Kibővített GPU-támogatás:** Az i18n információs üzenet mostantól helyesen tükrözi az NVIDIA CUDA és a Vulkan (AMD/Intel) támogatását. Frissített fordítások minden nyelven!
  - ⚙️ **Javított kapcsolat:** Javításra kerültek az Ollama és más OpenAI-kompatibilis szerverek csatlakozói.
  - 🧠 **Soknyelvű és robusztus MI:** A történetben szerzett tárgyak észlelése mostantól 10 nyelven működik. Emellett megerősítettem a rendszert, hogy soha ne maradj kezdőtörténet nélkül, még akkor sem, ha az MI technikai akadályba ütközik.
  - 🔄 **Intelligens rotáció:** Javítottam a rotációs rendszert, hogy ne adja fel azonnal a helyi MI-vel. A rendszer most ad neki egy esélyt a javításra, mielőtt külső segítséget keresne.
  - 🧹 **Alapok tisztítása:** Eltávolítottam a régi és zavaros szabályokat, hogy az MI „agya” élesebb és pontosabb legyen a tárgyaid kezelésekor.

