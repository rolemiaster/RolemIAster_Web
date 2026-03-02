****************************************************************************************************
02/03/2026 12:54 - AI Mag Alapvető Újraépítése - Beta_v060
****************************************************************************************************
- What's New (HU):
  - **🧠 AI Mag Alapvető Újraépítése**
    - ⚡ **Gyorsabb válaszok:** Újjáépítettem a játék agyát, hogy az AI jobban emlékezzen arra, amit már feldolgozott. Gyakorlatiasan: kevesebb időt töltesz a töltőképernyő előtt ülve körök között. A motor most már újra felhasználja a korábbi munkát, ahelyett, hogy nulláról indulna minden egyes lépésnél. (Igen, korábban ezt tette. Nem, nem vagyok büszke rá.)
    - 🧹 **Tisztább memória:** A játéktörténet mostantól a technikai "szemét" nélkül tárolódik el, attól a pillanattól kezdve, ahogy megíródik, nem pedig olvasáskor. Eredmény: az AI-nak több helye marad a történeted megjegyzésére, és kevesebb "token" vész kárba belső adatokon, amelyeket soha nem kellett volna látnia.
    - 🎯 **Szabályok a helyükön:** Az AI által használt kiegészítő szabályok, amelyek gazdagítják a válaszait, áthelyezésre kerültek, hogy ne zavarják a gyorsítótár rendszert. A hatás láthatatlan az Ön számára, de a motor minden körben hálás érte (egy kis plusz sebesség sosem árt).
  
  - ** Qwen3 szabadon: teljes érvelés aktiválva**
    - 🚀 **Mély gondolkodás:** Az érvelési képességgel rendelkező modellek (Qwen3, DeepSeek-R1...) mostantól teljes potenciáljukat ki tudják aknázni. A "vakon" haladás helyett az AI minden válasz előtt belsőleg érvel: megtervezi a karakterkártyákat, értékeli a narratív koherenciát a történeteddel, és elkerüli az olyan hibákat, mint az ismétlődő leltárak vagy a hiányos attribútumok. Az eredmény egy észrevehetően intelligensebb és következetesebb AI.
    - 🧹 **Átlátszó az Ön számára:** Ez az érvelés mind a színfalak mögött történik. A motor automatikusan megtisztítja az AI "belső monológját", mielőtt megmutatná Önnek a választ. Ön csak a végeredményt látja, amely csiszoltabb.
  
  - **⚡ Megbízhatóbb játékindítás**
    - 🛡️ **Búcsú az első körös lefagyásoktól:** Elhárítottunk egy okot az örök várakozásokra egy új játék megkezdésekor. Korábban, ha az AI generált egy kereskedő karaktert anélkül, hogy ismerte volna a kereskedelmi szabályokat (mivel az első körben nincsenek meg), a motor 3-szor próbálta meg kijavítani, mielőtt feladta volna, ami több mint egy percnyi haszontalan várakozást eredményezett. Most azonnal megoldja.
    - 📖 **AI által generált lore próbára téve:** Ha az AI túlságosan belemelegszik, és a világ hátterét technikai formátumban generálja a narratív szöveg helyett, a motor ezt érzékeli, és automatikusan kinyeri a tiszta történetet. A lore mindig úgy érkezik, ahogy kell.
    - 🧹 **Hibátlan felület:** Megtanítottam az AI-t, hogy ne "beszéljen kódul". Korábban néha a döntési gombok vagy a mester kommentjei furcsa belső változókat jelenítettek meg (pl. *Elmenekülni (move to loc_cripta)*). Most minden tiszta, és a modellt arra kényszerítettük, hogy az Ön által választott humoros hangnemben kommunikáljon Önnel (ennek a paraméternek a tiszteletben tartása az AI hangulatától függ).
  
  - **🌍 Nyelvi javítások**
    - 🗣️ **Helyszínek a nyelvén:** Az AI által generált helyszínek mostantól tiszteletben tartják a játékban beállított nyelvet. Ha angolul játszik, már nem fogja látni a "Nyugati Parti Parti Kerület" helyett az angol nevét. (Upsz.)
    - 🔘 **Lokalizált gombok:** Az "Folytatás" vészhelyzeti gomb mostantól az Ön nyelvén beszél ahelyett, hogy mindig spanyolul jelenne meg.

****************************************************************************************************
27/02/2026 16:46 - Szinkronizált Harci Töltés és Körfolyamat - Beta_v059
****************************************************************************************************
- What's New (HU):
  - **Harc és Játékmenet Sebessége**
    - ⚔️ **Sima Harci Lépések:** Nincsenek többé üres kattintások, amikor a lépésed már sorban volt, és a töltődés most valós döntéseket hoz vissza, nem pedig fantomgombokat.
    - 🧭 **Szinkronizált Jelenetek:** Amit a képernyőn látsz, az a harc aktuális állapotát tükrözi, és csak az ott jelenlévő ellenségek jelennek meg.
    - 🚫 **Kevesebb Belső Papírmunka:** Kigyomláltuk a felesleges ellenőrzéseket, hogy a játék elakadások nélkül haladhasson.
  
  - **Vizuális Motor és Fejlett Panel**
    - 🧹 **Tisztább Választó:** A technikai mappák elrejtésre kerülnek, és normalizált szűrés segít zajmentesen kiválasztani a modelleket.
    - ️ **Stabil Háttér:** Ha egy kép már betöltődött, nem ütközik a következővel; továbbá a harci betöltés elkerüli a meglepetésszerű újraalkotásokat.
    - 🎛️ **Felturbózott Kép Panel:** A renderelési stratégia, a változtatás erőssége és a minimális lépések most már az interfészről vezérelhetők, kontextuális segítséggel.
  
  - **Karakteralkotás és Portrék**
    - 🧍 **Nem Látható:** A Nő/Férfi választás az alapűrlapon történik, és a teljes folyamat (portrék, belső adatok) tiszteletben tartja ezt a választást.
    - 👶➡️🧓 **Érthető Életkor:** Narratív szakaszokat használunk, hogy az AI jobban lerajzolja az életkort.
    - 🧼 **Tisztított Prompts-ok:** Technikai zajokat távolítunk el a képpromptok küldése előtt, ami a portrék stabilitásán látszik.
    -  **Megbízható Karakterlapok:** Az AI nem tudja "elfelejteni" a kötelező attribútumokat, sem pedig a kezdő leltárt túlzottá tenni.
  
  - **Narratíva, Szabályok és RAG**
    - 🚀 **Közvetlenebb PJ Érkezés:** A kezdő jelenet szigorú JSON szerződéseket használ, és elkerüli a furcsa kontextus keveredéseket.
    -  **Fókuszált RAG:** Csak az engedélyezett gyökerek kerülnek indexelésre, és a promptba küldött karakterlap tartalmazza a hatások összefoglalóit a tokenek megtakarítása érdekében.
  
  - **AI és PSR Konfiguráció**
    - 🎛️ **Új PSR Vezérlés 1. Fázis:** Döntsd el, hogy a sebészeti módot mindig fedezetnél szeretnéd-e, vagy csak akkor, amikor a prompt nyomja.
    - 📏 **Állítható Küszöbérték (alapértelmezett 95%):** Finomhangold, mennyi mozgásteret adsz, mielőtt a hardveredtől függően automatikusan elindítanád a PSR-t.
    - 🧠 **Könnyebb és Hurokmentes Prompts-ok:** Összefoglaljuk az állapotokat, és az AI rendelkezik eszközökkel, hogy ne telítődjön túl, amikor a történet bonyolulttá válik.

****************************************************************************************************
24/02/2026 12:32 - AI-alapú képalkotás, narratív fejlesztések és irányítás - Beta_v058
****************************************************************************************************
- What's New (HU):
  **🧠 Az Agy Fejlődése: Helló, Qwen 3**
  A játék motorját migráltam, hogy a legtöbbet hozza ki a Qwen3 modellek új generációjából. A 2.5-ös széria régi modelljei indították útjára a RolemIAstert, de eljött az idő, hogy búcsút mondjunk a régi dicsőségnek. Ez a mennyiségi ugrás a történetgenerálásban magával ragadóbb prózát, sokkal szigorúbb szabályokat és koherensebb karaktereket jelent. Készítsétek a videokártyákat, mert a Játékmester most lépett szintet.

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

