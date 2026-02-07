****************************************************************************************************
07/02/2026 20:26 - Szemantikus Harci Értelmező Rendszer - EXPERIMENTAL_v053
****************************************************************************************************
- What's New (HU):
  🧪 MÁR ELÉRHETŐ: KÍSÉRLETI VERZIÓ (Elérés: Jobb klikk a Steamen ➡️ Tulajdonságok ➡️ Béták)
  
  🛡️ A bátraknak, akik MERÉSZELNEK az első sorban harcolni: A kaland vár, most zabolátlanabb, mint valaha!
  
  📝 Várom a Háborús Jelentéseiteket (hibák és visszajelzések) a frontról. Adjatok nekik! ⚔️
  
  - 🧠 **Szabad Szöveges Harc:** Mostantól úgy írhatod le a harci cselekedeteidet, mintha egy asztali szerepjátékban beszélnél: "gyógyító varázslat magamra", "kard előhúzása", "gyógyital használata". A MI megérti a szándékodat, és átülteti játékmechanikába.
  - ⚔️ **Fegyverrántás Szavakkal:** Nem kell többé a fegyverhelyre kattintanod. Csak írd be, hogy "kard előhúzása" vagy "fejsze elővétele", és a rendszer automatikusan értelmezi (VIGYÁZAT! Ha harc közben teszed, az kudarcot, balsikert és körveszteséget okozhat!... "A csatába felkészülten érkezünk!").
  - 📖 **Felismert Varázslatok:** A MI mostantól ismeri a teljes varázskönyvedet. Mondd, hogy "tűzgolyó", és ha megvan a varázslat, el is süti.
  - 🛡️ **Nincs Több Elveszett Kör:** Ha a játék nem érti a cselekedetedet, megkér, hogy fogalmazd át. A köröd NEM vész el.
  - 🎒 **Manuális Tárgylistakezelés:** A tárgyak helyek közötti mozgatásához (felszerelés a hátizsákból, lőszer betöltése) használd a fogd és vidd felületet. Ez elkerüli a félreértéseket és MI-erőforrást takarít meg.
  - 🎬 **MI Jelenetrendező (JAVÍTOTT):** A harc mostantól életre kel. A MI környezeti eseményeket és reakciókat generál, amelyek gazdagítják a narratívát: leeső fáklyák, hátráló ellenségek, beomló gerendák. A csatatér többé nem statikus!
  - 🐛 **Kritikus NPC Javítás:** Javítva egy hiba, amely megakadályozta, hogy az NPC-k megfelelő taktikai döntéseket hozzanak, ami miatt mindig csak "várakoztak" támadás vagy védekezés helyett.
  - 🎵 **Hang Javítás:** A harci zene többé nem áll le az előre meghatározott gombok (Támadás, Blokkolás stb.) megnyomásakor.

****************************************************************************************************
06/02/2026 02:32 - Vulkan támogatás (AMD/Intel) és robusztus hibakezelés - Beta_v053
****************************************************************************************************
- What's New (HU):
  - 🚀 **Hibrid Vulkan motor:** Hivatalos támogatás AMD és Intel videókártyákhoz! A játék mostantól tartalmaz egy dedikált Vulkan motort, amely automatikusan (vagy manuálisan) aktiválódik, hogy felgyorsítsa az MI-t a nem NVIDIA rendszereken.
  - ⚙️ **Teljes motorvezérlés:** Hozzáadtuk a „Vulkan kényszerítése” opciót az indítóhoz és a beállításokhoz is. Ha problémád van a CUDA-val, vagy tesztelni szeretnéd a Vulkan teljesítményét (ami sok konfiguráción száguld), a döntés a te kezedben van.
  - 🚦 **Rendszerállapot:** Az állapotjelző panelen mostantól pontosan láthatod, melyik motor dübörög a motorháztető alatt (🟢 ZÖLD a CUDA, 🔴 PIROS a Vulkan esetében).
  - 🛡️ **MI állapotjelző:** Ha a Mesterséges Intelligencia „elfárad” (túllépi a kvótát) vagy megszakad az internet, a játék egy egyértelmű és hasznos ablakban figyelmeztet ahelyett, hogy csendben várakoztatna.
  - 🔄 **Elakadás elleni védelem:** Csatlakozási hiba esetén a játék többé nem „töri meg” a beszélgetést. A válaszlehetőségek újra megjelennek, így újra próbálkozhatsz anélkül, hogy elveszítenéd az előrehaladást.
  - ☁️ **Felhő memória:** A beállítások menü mostantól megfelelően megjegyzi a felhőszolgáltatókkal kapcsolatos preferenciáidat a munkamenetek között.

****************************************************************************************************
03/02/2026 20:23 - VRAM-optimalizálás és betöltési stabilitás - Beta_v052
****************************************************************************************************
- What's New (HU):
  - 🧠 **Optimalizált agy:** Javítottunk egy súlyos hibát, amely miatt az MI egyszerre próbált „kétszer gondolkodni”, megduplázva a videokártya memóriahasználatát, ami extrém lassulást vagy fagyást okozott. A VRAM-od hálás lesz érte!
  - 💾 **Biztonságos betöltés:** Javult az általános stabilitás a mentések betöltésekor, hogy a kaland folytatása mindig zökkenőmentes élmény legyen.

****************************************************************************************************
02/02/2026 00:18 - Kritikus gyorsjavítás: Stabilitás, Multi-GPU és honosítási fejlesztések - Beta_v051
****************************************************************************************************
- What's New (HU):
  - 🚑 **Kritikus javítás:** Megoldódott egy probléma, amely ritka esetekben, adatbázis-sérülés miatt megakadályozta a játék indítását („Teljes hiba”), amit a Launcher nem tudott megtisztítani. Az „Adatbázis törlése” opció mostantól sokkal hatékonyabb.
  - ⚡ **Hardveres javítás:** Kijavítottunk egy hibát, amely miatt az „Automatikus beállítás” mód figyelmen kívül hagyta a teljesítményt olyan többkártyás rendszereknél, ahol a GPU-k nem voltak azonosak.
  - 🛠️ **Eszköz:** Új opció került a Launcherbe az előző munkamenet naplójának (log) egyszerű megnyitásához, megkönnyítve ezzel a terméktámogatást.
  - 🌍 **Honosítás:** Javításra került több gomb a Launcherben, amelyek eddig angolul (Yes/No) jelentek meg. Mostantól megfelelnek a kiválasztott nyelvnek.
  - 📖 **Kezelőfelület:** Javult a verzióinformációs szöveg formázása, így az olvashatóbbá vált.
  
  - **Hamarosan:** A következő megvalósítás alatt álló funkció: AMD, NVIDIA és Intel GPU kompatibilitás Vulkan segítségével.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Kézikönyv javítások & Stabilitás - Beta_v050
****************************************************************************************************
- Újdonságok:
  **Multi-GPU erő és kritikus javítások!**
  
  * **🚀 Multi-GPU támogatás:** Implementálva a képesség a nagy MI-modellek felosztására több grafikus kártya között. *Most már a teljes hardverarzenálodat használhatod; Korlátlan Hatalom!*
  * **🛡️ Stabilitás:** Hozzáadva az összes hiányzó DLL könyvtár a váratlan leállások elkerülése érdekében. *Megerősítettem a motort, ha most meghibásodik, az egy balszerencsés kockadobás miatt lesz.*
  * **📖 Dinamikus webes kézikönyvek:**
    * **Valós választó:** A nyelv menü most ellenőrzi, mely fájlok léteznek valójában, mielőtt megjelenítené őket. *Vége a fantom opcióknak, amelyek nem csináltak semmit; 5. szintű jósló mágia.*
    * **403-as hiba javítása:** Megoldva a jogosultsági hiba, amely megakadályozta a változásnapló (Changelog) megtekintését a játékon belül. *Megtanítottam az alkalmazást, hogyan kérjen engedélyt helyesen ("Szezám tárulj!").*
  * **🌍 Nyelvek:** Szövegek és fordítások felülvizsgálata. *Poliglott mód bekapcsolva.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizálás és MI fejlesztések - Beta_v049
****************************************************************************************************
- Újdonságok:
  Csiszoltuk a játékélményt fontos javításokkal és egy új vizuális eszközzel:

  * **Tiszta és megbízható eszköztár:** Vége a "fantomtárgyak" vagy furcsa nevű elemek megtalálásának a hátizsákban. Implementáltunk egy narratív ellenőrző rendszert, amely biztosítja, hogy minden, amit felveszel vagy vásárolsz, valójában létezzen a játékvilágban.
  * **Gördülékeny párbeszédek:** Javítottuk azokat a zavaró gombokat, amelyek néha "Unknown"-ként jelentek meg vagy nem reagáltak. Most az NPC-kkel folytatott párbeszédopciók mindig a helyes szöveget mutatják.
  * **Robusztus karaktergenerálás:** A hősöd létrehozása most már szilárd folyamat. Megoldottuk az ütközéseket, amelyek néha hiányos karakterlapot vagy hibás statisztikákat eredményeztek az életrajz és a statisztikák kombinálásakor.
  * **Új MI állapotsor:** Most láthatod a gép agyát működés közben! Hozzáadtunk egy sávot a felső részhez, amely valós időben mutatja a válaszadási sebességet és a memóriahasználatot. Így mindig tudni fogod, hogy az MI éppen "gondolkodik-e" a következő kalandodon.

****************************************************************************************************
28/01/2026 03:50 - Kritikus fordítási javítás - Beta_v048
****************************************************************************************************
- Újdonságok:
  Megoldva egy kritikus hiba, amely megakadályozta a játék indítását új telepítéseknél. Javított stabilitás és kompatibilitás a különböző gépekkel.

****************************************************************************************************
26/01/2026 19:38 - Webes indító & RTX 50 támogatás - Beta_v047
****************************************************************************************************
- Újdonságok:

  > [!FONTOS]
  > **KOMPATIBILITÁSI OKOKBÓL SZÜKSÉGES TÖRÖLNI AZ ELŐZŐ ADATBÁZIST (DB), KÜLÖNBEN NAGYON VALÓSZÍNŰ, HOGY HIBÁK LÉPNEK FEL AZ MI KONFIGURÁCIÓBAN**
  > **(Megoldás: Kattints a fogaskerék ikonra ⚙️ az Indítóban -> Adatbázis törlése)**

  *Kritikus támogatás az RTX 50-es szériához: Megoldva egy súlyos hiba, amely váratlan leállást okozott a karakterek generálásakor az új NVIDIA grafikus kártyákon (RTX 5070, 5080, 5090).
  (Mivel nem rendelkezem 5000-es szériájú RTX-szel, nem tudtam közvetlenül tesztelni, hogy a megoldás 100%-os-e, de az elmélet szerint meg kell oldódnia. Várom a győzelmi énekeiteket itt!)
  
  *MI motor frissítése: Frissítettük a játék helyi agyát, hogy kompatibilis legyen a legújabb hardvertechnológiával, biztosítva, hogy mindenki élvezhesse az offline élményt, függetlenül attól, mennyire modern a gépe.
  
  *Új indító (Launcher): Frissítések és hírek valós időben a hivatalos weboldalról.


****************************************************************************************************
26/01/2026 06:49 - Webes dokumentáció integráció - Beta_v045
****************************************************************************************************
- Újdonságok:
  *Mostantól a Felhasználói kézikönyv és a Változásnapló közvetlenül a hivatalos weboldalunkról töltődik be, garantálva, hogy mindig a legfrissebb információval rendelkezz javítások letöltése nélkül. Tartalmaz intelligens offline módot.

  *Megerősítettük a játék stabilitását, hogy soha ne fagyjon le indításkor. Ezenkívül a kereskedők visszatértek a limbóban töltött vakációjukról: most már helyesen jelennek meg, van áru a polcokon, és tiszteletben tartják a világ hangulatát (nincsenek varázsitalok a jövőben).

  *Javítva a hiba, amely nem engedte módosítani az MI paramétereket és az MI-modell kiválasztását, ami miatt néhány korlátozott VRAM-mal rendelkező felhasználó nem tudott játszani.
  **Amennyiben szükség van az MI paraméterek módosítására, erősen ajánlom, hogy először próbáld meg 85%-ra csökkenteni a VRAM %-ot, indítsd újra és próbáld ki. Ha ez még mindig nem elegendő, javaslom annak ellenőrzését, hogy a GPU VRAM-ját nem használják-e más folyamatok, amelyek nem a játékhoz tartoznak (PC újraindítása, ha szükséges, VRAM-ot foglaló alkalmazások bezárása). Ha a VRAM mennyiségének csökkentése után (akár 70%-ig) sem működik, nem javaslom a további csökkentést, mert a játék nem tudja majd kezelni az MI-nek küldött promptokat. Így bár elkerülhető a VRAM túlcsordulás, a játék nem fog működni, mert nincs mivel dolgoznia. Ebben az esetben az egyetlen fennmaradó lehetőség egy alacsonyabb modellre váltani, visszaállítani az MI paramétereket automatikusra, és újraindítani.

****************************************************************************************************
26/01/2026 04:00 - Mag stabilizálás és Szolgáltatás diagnosztika - Beta_v044
****************************************************************************************************
- Újdonságok:
  Mag stabilizálás és Szolgáltatás diagnosztika" "Kritikus javítások a karaktergenerálásban, a kezelőfelületen (MainWindow) és a szemantikus keresés optimalizálásában. A szolgáltatások mód mélyreható diagnosztikájának indítása.

****************************************************************************************************
25/01/2026 19:28 - Gyorsjavítás: Naplók és Stabilitás - Beta_v043
****************************************************************************************************
- Description:
  Javítócsomag, amely a diagnosztikára és a felhasználói felület (UI) hurok javítására összpontosít.

- Changes:
  Javítva az újraindítási párbeszédablak vizuális hibája
  Új naplózási rendszer a %LOCALAPPDATA% könyvtárban diagnosztikai célokra
  Belső teljesítményoptimalizálások

****************************************************************************************************
24/01/2026 06:30 - Életrajz háttérrendszer támogatás - Beta_v042
****************************************************************************************************
- Description:
  Életrajzi adatok közzététele a felhasználói felület (UI) számára és i18n beállítások.

<!-- source_hash: 5f218fc5 -->