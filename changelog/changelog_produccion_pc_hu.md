****************************************************************************************************
24/02/2026 12:32 - AI-alapú képalkotás, narratív fejlesztések és irányítás - Beta_v058
****************************************************************************************************
- What's New (HU):
  **Újdonság: AI-képalkotás második fázisa**
  - 🎨 **A világod képekben:** Integráltam egy kezdeti AI-alapú képalkotó rendszert. Játék közben a rendszer megpróbál portrékat és tájképeket generálni, amelyek illeszkednek a játék hangulatához.
  - 🖼️ **Dinamikus hátterek:** A képek a háttérben készülnek, anélkül, hogy megakasztanák a játékot. Látni fogod, ahogy fokozatosan megjelennek a háttérben, a karakterkártyákon és a Kódexben.
  - 🧹 **Képkezelés:** Új panel a generált képek megtekintéséhez és a nem tetszők törléséhez.
  
  **Fejlesztések a karakteralkotásban:**
  - ⚙️ **Stabilabb véletlenszerű generálás:** Egységesítettem és továbbfejlesztettem a szabályrendszert, amelyet az AI a karakterek alapoktól való felépítéséhez használ, biztosítva a logikusabb felszerelést (5-10 összefüggő tárgy) és a kiegyensúlyozottabb karakterlapokat.
  - 🧠 **Osztott agy:** Az AI mostantól jobban felismeri, mikor kell „kitalálnia” egy karaktert a semmiből, és mikor kell az általad írt életrajzból kinyernie az adatokat.
  - ⚡ **Testreszabott sebesség:** Új szakasz a Vizuális beállításoknál. Válassz a „Gyors” (1 lépés), „Közepes” (2 lépés) vagy „Magas” (4 lépés) opciók közül, hogy a generálási időt a géped teljesítményéhez igazítsd.
  - 🛠️ **Technikai optimalizálás:** Az AI képmódell a **RAM-ba (memória)** töltődik be és a **CPU** dolgozza fel, nem foglal videómemóriát (VRAM). Ez biztosítja, hogy ne zavarja a játék fő AI-jának (LLM) teljesítményét. Körülbelül 5 GB extra RAM-ot igényel, ami a hivatalos Steam minimumkövetelményeken belül marad.
  - 📤 **Oszd meg a kalandjaidat:** Minden generált kép automatikusan mentésre kerül. Itt találod őket: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Modellválasztó (Haladó):** Ha a játékot az `--advanced` paraméterrel indítod, a Megjelenés panelen kiválaszthatod, melyik AI-modellt használd a képekhez. Ez lehetővé teszi a rajongók számára, hogy kipróbálják a Stable Diffusion különböző, OpenVINO-ra optimalizált (.xml/.bin fájlok) verzióit.
  
  **Narratíva és AI-agy:**
  - 🧠 **Ismétlődések vége:** Új „Memóriadoktrína” került az AI-ba. Mostantól jobban megkülönbözteti az „emlékeket” (ami már megtörtént) a „jelentől” (ami éppen történik). Ez segít csökkenteni azokat az eseteket, amikor az AI ismétli magát vagy elakad.
  - 📜 **Történelmi Archívum:** A rendszer az emlékeidet egy „Lezárt Történelmi Archívumként” mutatja be az AI-nak, megkönnyítve számára az információk referenciaként való használatát a történet előrelendítéséhez.
  - ⚡ **Optimalizált utasítások:** Fejlesztettük a módot, ahogyan a játék a saját nyelveden kéri a narrációt, felszabadítva a modell kapacitását, hogy a kreativitásra koncentrálhasson.
  - 👁️ **Narratív fókusz:** Újraírtuk az AI észlelését. Mostantól jobban megérti, mely elemek alkotják a „statikus hátteret”, így nem ismétli meg azokat feleslegesen minden bekezdésben.
  - 🔀 **Egyértelműbb döntések:** Az AI mostantól világosabb utakat kínál. A javaslatai (gombok) különválnak a környezet felfedezése (Mélyítés) és az irányváltás (Eltérés) között.
  - 🫵 **Közvetlen megszólítás:** Módosítottuk az alapvető utasítást, hogy az AI közvetlenül tegezzen („Tú”), javítva a személyes élményt.
  
  **Karakteralkotás:**
  - 🖼️ **Karakterportrék:** Amikor AI-val generálsz karaktert, a rendszer megpróbál létrehozni egy portrét a kora, foglalkozása és leírása alapján. Vedd figyelembe, hogy ez egy kezdeti verzió, és a hűség (különösen az életkor tekintetében) a használt modelltől függően változhat. (Még folynak a tesztek, de a kezdet biztató)
  - 🎲 **Megbízható véletlenszerű generálás:** Javítottunk egy hibát, ahol a „Generálás AI-val” gomb elsőre sikertelen lehetett, üresen hagyva a mezőket. Az intelligens javítórendszer mostantól biztosítja, hogy a válasz mindig érvényes legyen.
  
  **Generált képek kezelése:**
  - 🖼️ **AI-képgaléria:** Új panel a Fájl menüben, amely megjeleníti az összes képet, amelyet az AI a játékaid során generált (portrék, hátterek). Szűrhetsz képtípus vagy világ szerint.
  - 🗑️ **Szelektív törlés:** Válassz ki egy vagy több képet, és töröld őket, ha nem tetszenek (például azt, ahol az AI úgy döntött, jó ötlet egy buszt parkolni a vár istállójába). A rendszer törli a fájlt és a belső bejegyzést is.
  - 📂 **Közvetlen hozzáférés:** Kattints duplán bármelyik bélyegképre a fájlt tartalmazó mappa megnyitásához. Ha a mappa már nyitva van, ugyanazt az ablakot használja újra.
  - 💾 **Méret megjegyzése:** A galériaablak mérete automatikusan mentésre kerül a munkamenetek között.
  
  **Teljesítmény alacsony konfigurációkon (Fontos kevés VRAM-mal rendelkező GPU-khoz):**
  - 🧠 **PSR - Hibrid irányítás:** Új rendszer, amely két fázisra osztja az AI munkáját: Tervezés (Séf) és Végrehajtás (Szakácsok). Ez lehetővé teszi, hogy a 8 GB VRAM-mal rendelkező helyi modellek működjenek, elkerülve a túl nagy kontextus (+12K token) miatti összeomlást, nagyobb késleltetés árán; az AI-val való interakció egyetlen prompt helyett promptek sorozatává válik (minél kevesebb a VRAM, annál több prompt generálódik és annál hosszabb a válaszidő).
  - ⚡ **Intelligens végrehajtás:** A rendszer automatikusan eldönti, hogy mindent egyszerre (monolitikus) vagy részekre bontva (iteratív) dolgozzon fel a rendelkezésre álló VRAM alapján. A kevesebb VRAM-mal rendelkező GPU-k csak szükség esetén aktiválják a részenkénti módot.
  - 📊 **Dinamikus optimalizálás:** A PSR csökkenti a token-terhelést a generálás során, lehetővé téve a 4 GB-os videokártyával rendelkező felhasználók számára a karakteralkotást és a történetgenerálást, ami korábban elakadt.
  - 🔄 **Megőrzött koherencia:** A munka felosztása ellenére a rendszer egy „mester-szándékot” injektál, hogy az AI ne veszítse el a fonalat.
  
  **AI-hangok (folyamatos fejlesztés):**
  Valós idejű hanggenerálás minden nyelven (egyes nyelvek korlátozottabbak, a legváltozatosabb hangtípusokkal az angol rendelkezik).
  - 🗣️ **Szinkronizált harci kiáltások:** Ellenséges célpontok elleni harc indításakor mostantól egy kontextusba illő bevezető mondat hangzik el.
  - 🎭 **Kontextusfüggő dinamikus mondatok:** A motor rövid hangsorokat generálhat konkrét eseményekhez (szolgáltatások/harc) a nyelv, a környezet és a karakterprofil alapján.
  - 🧠 **Belső hangsablonok:** Elválasztottuk a technikai hangsablonokat a narratív rendszertől a történettel való ütközések elkerülése érdekében.
  - 🔊 **Tisztább hangzás:** Javítottuk az érthetőséget és a prozódiát a szintézisnél, az érthető kiejtést helyezve előtérbe.
  
  **⚠️ Kompatibilitási közlemény (Korábbi mentések):**
  - 🔄 A szabályrendszerben és a környezeti rendszerben végrehajtott számos belső változtatás miatt a **korábban mentett játékok és világok továbbra is játszhatóak maradnak (valószínűleg)**, de nagy a valószínűsége annak, hogy hibák vagy váratlan viselkedések lépnek fel. **Javasoljuk egy tiszta, új világ létrehozását**, hogy minden fejlesztést megfelelően élvezhess.

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

