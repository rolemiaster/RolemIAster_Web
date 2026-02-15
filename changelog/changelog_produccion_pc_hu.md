****************************************************************************************************
15/02/2026 02:57 - Közvetlen írás, stabilitási javítások és észlelés - Beta_v058
****************************************************************************************************
- What's New (HU):
  **Stabilitás:**
  - 🛠️ **Viszlát, konfigurációs összeomlások:** Különböző hibák javítva, amelyek bizonyos körülmények között előfordultak, és megakadályozták az MI-beállítások megnyitását vagy módosítását modellváltáskor vagy az értékek alaphelyzetbe állításakor.
  - 🗃️ **Csendes adatbázis:** A játék indításakor megjelenő zavaró „Inkompatibilis adatbázis” figyelmeztetés többé nem jelenik meg, ha az adatbázisod rendben van. Csak akkor jelenik meg, ha valódi szerkezeti változás történt, amely migrációt igényel.
  
  **Játékélmény:**
  - 🎯 **Precíziós MI-vezérlés:** Mostantól manuálisan is beírhatod a Kontextus, Tokenek, Hőmérséklet vagy GPU-rétegek értékeit közvetlenül a csúszka melletti numerikus mezőbe. Többé nem függsz kizárólag a csúszkáktól! A két vezérlő szinkronban van: mozgasd a csúszkát, és a szám frissül, vagy írd be a számot, és a csúszka mozog.
  - ⌨️ **Közvetlen írás:** Többé nem kell a szövegdobozra kattintanod a cselekvésed beírásához! Mostantól közvetlenül elkezdhetsz gépelni, amíg a játék képernyőjén vagy. Ha az eszköztárral vagy más panellel lépsz interakcióba, majd írni szeretnél, egyszerűen kezdj el gépelni anélkül, hogy bármit is ki kellene jelölnöd. A rendszer a billentyűleütéseidet automatikusan a cselekvés mezőbe irányítja. Nem zavarja a menüket, párbeszédpaneleket és a rendszer gyorsbillentyűit.
  
  További kisebb változtatások...

****************************************************************************************************
14/02/2026 21:48 - Kontextus-szinkronizáció és MI-válaszvezérlés - Beta_v056
****************************************************************************************************
- What's New (HU):
  **Rendszerek és teljesítmény:**
  - 🧠 **Teljes kontextusvezérlés:** Mostantól sokkal intuitívabb csúszkákkal állíthatod be az MI memóriáját (`n_ctx`) és válaszainak hosszát (`Max Tokens`).
  - ♾️ **Korlátlan mód:** Húzd a minimumra a „Korlátlan” mód aktiválásához, lehetővé téve, hogy az olyan nagy teljesítményű modellek, mint a Gemini, korlátozások nélkül használják teljes kapacitásukat.
  - ⚡ **Illesztőprogramok újraindítása:** Új opció az indítóban a videó-illesztőprogramok játék előtti újraindítására (opcionális, az indítóból konfigurálható); indításkor a képernyő mostantól villogni fog, ezzel biztosítva, hogy a teljes vram rendelkezésre álljon, megtisztítva a maradványoktól.
  - 🛠️ **Robusztus konfiguráció:** Javítottuk a vizuális hibákat és technikai problémákat a kedvenc MI-szolgáltatóid beállításainak mentésekor.
  - 🚀 **Jobb hibafelismerés:** A játék mostantól intelligensebben észleli, ha egy külső MI kifogy a helyből.
  
  **Mechanikák és világ:**
  - 🎒 **Garantált eszköztár:** Vége annak, hogy úgy kezdesz egy kalandot, hogy nem látod a tárgyaidat. Az SDIA rendszer mostantól a karakterkészítést is figyeli, hogy a felszerelésed mindig ott legyen.
  - 📜 **Megtisztított háttértörténet:** Javítottuk azt a hibát, amely „kódtöredékeket” vagy furcsa szövegeket illesztett a világod történetébe. A Kódex mostantól tisztább és olvashatóbb lesz.
  - ⚠️ **Kompatibilitási útmutató:** Figyelmeztetéseket helyeztünk el a beállításokban, hogy segítsünk a kompatibilis modellek kiválasztásában (Instruct/Chat).
  - ⚙️ **Megbízható implantátumok:** Javítottuk a foglalatok definícióját és a szabályok betöltését a karakterkészítés során. Mostantól minden kiberfejlesztésed hivatalos foglalatokat használ, és automatikusan, helyesen szerelődik fel.
  - 🎓 **Tanonc korlát:** Kiigazítottuk a képességek kezdeti egyensúlyát. Az MI generál egy pontcsomagot, amelyet automatikusan eloszt a legfontosabb képességek között a karaktered kontextusa alapján. Hőseid mostantól valódi újoncként kezdenek, és logikusabb módon fejlődnek.

****************************************************************************************************
14/02/2026 05:06 - Integritás megerősítése, Karaktertudatosság és Optimalizálás - Beta_v055
****************************************************************************************************
- What's New (HU):
  - 🧠 **Testreszabható MI prioritás:** Mostantól áthúzással rendezheted az MI csatlakozókat a használati sorrend meghatározásához. Ha az egyik meghibásodik, a játék automatikusan megpróbálja a következőt a prioritási listádon.
  - ⚙️ **Előtöltés vezérlése:** Új opció a rendszerindítóban, amellyel eldöntheted, hogy előtöltöd-e a helyi MI modellt, vagy csak szükség esetén töltöd be (erőforrás-megtakarítás indításkor).
  - 🛡️ **Biztonságos és tiszta törlés:** Egy világ törlésekor a rendszer mostantól gondoskodik az összes kapcsolódó adat (karakterek és történet) teljes körű törléséről, makulátlanul tartva az adatbázisodat.
  - 🚀 **Memória-optimalizálás:** Az MI "agya" mostantól csak egyszer töltődik be, és megosztásra kerül az összes funkció között, jelentős grafikus memóriát (VRAM) takarítva meg.
  - 🎨 **Intelligens kezelőfelület:** A világválasztó panel mostantól tökéletesen igazodik a képernyőhöz és a szöveghez, levágott gombok és rosszul kihasznált helyek nélkül.
  - 🔄 **Javított intelligens rotáció:** Javítottam a rotációs rendszert, hogy ne adja fel rögtön a helyi MI-vel; mostantól ad neki egy esélyt a javításra, mielőtt külső segítséget keresne.
  - 🌍 **Többnyelvű és robusztus MI:** A tárgyfelismerés és a narratíva mostantól pontosabb 10 nyelven, speciális védelemmel ellátva, hogy soha ne maradj történet nélkül.
  - 🛠️ **Garantált MI perzisztencia:** Javítva a hiba, amely miatt a Gemini "elfelejtette" beállításait vagy Ollamává változott. Az MI használati prioritásaid mostantól biztonságosan és precízen kerülnek mentésre.
  - ⚡ **Gemini helyreállítva:** Javítva a hozzáférés a Gemini modellhez a helyes kulcsok és URL-ek visszaállításával.
  - 🎨 **Javított tematikus felület:** A döntési gombok mostantól azonnal átveszik a világod színét (pl. Arany a fantasy-hez) a játék betöltésekor.
  - 👥 **Karakterek közötti tudatosság:** Az MI mostantól tudatában van az összes karakterednek! Ha több hősöd van ugyanabban a világban, az MI lakókként ismeri fel őket, és képes lesz emlékezni arra, mit tett mindegyikük egyénileg.
  - 🧠 **Memória hozzárendeléssel:** Az emlékrendszer mostantól megkülönbözteti, ki hajtotta végre az egyes cselekvéseket, megakadályozva, hogy az MI összekeverje a te múltbeli tetteidet más karakterekével.

****************************************************************************************************
13/02/2026 07:56 - Szemantikus Harci Értelmező Rendszer - Beta_v054
****************************************************************************************************
- What's New (HU):
  🧪 MÁR ELÉRHETŐ:
  
  ⚠️ **FONTOS FIGYELMEZTETÉS:** A JÁTÉK ÁT TUDJA MIGRÁLNI A RÉGI ADATBÁZIST AZ ÚJ STRUKTÚRÁBA A LAUNCHER OPCIÓIN KERESZTÜL. EZT NEM JAVASLOM, MÉG HA A RÉGI MENTÉSED MŰKÖDIK IS, SOK DOLOG HIBÁS LESZ. AZT JAVASLOM, HOGY TÖRÖLD AZ ÖSSZES KORÁBBI MENTÉST. NEM SZÜKSÉGES A TELJES ADATBÁZIST TÖRÖLNI, KIVÉVE EXTRÉM ESETBEN.
  
  Változások:
  
  - 🌍 **Világ- és Karakterkezelő:** Most már teljes szabadságot élvezel. Hozz létre saját világokat egyedi szabályokkal és környezettel, és alkoss bennük annyi karaktert, amennyit csak szeretnél. **Fontos megjegyzés:** Egy adott világ karakterei ugyanazon az idővonalon és eseményeken osztoznak, ami megteremti a jövőbeli többjátékos mód alapjait.
  - 🧠 **Kontextuális Memória (Szuper RAG):** A MI most már rendelkezik „érzékekkel”. Amikor a háttértörténetben (Lore) vagy a memóriájában keres információt, figyelembe veszi, hol vagy, kivel vagy, sérült vagy-e, és mi történt éppen. Ha egy Királlyal vagy, királyokkal kapcsolatos dolgokra fog emlékezni. Ha sérült vagy, a gyógyítás szabályait keresi. Sokkal intuitívabb és koherensebb!
  - 🌍 **Lore az Első Karakternél:** Írtál egy epikus leírást a világodról, és a MI figyelmen kívül hagyta az első karakterednél? Megoldva! A világ manuális leírása most közvetlenül eljut a MI-hez a kezdeti létrehozás során, még mielőtt a memóriarendszer aktiválódna.
  - ⚙️ **Továbbfejlesztett Világrendszer:** Függetlenítettem a világod nevét a technikai szabályoktól. Mostantól úgy nevezheted el a világodat, ahogy akarod, anélkül, hogy ez befolyásolná a Fantasy vagy Cyberpunk szabályok betöltését.
  - 📝 **Egyértelműség a Létrehozásnál:** Javítottam a belső utasításokon, hogy a MI jobban értse, mikor kell háttértörténetet kitalálnia, és mikor kell csupán a statisztikáidat kinyernie.
  - 🧠 **Szabad Szöveges Harc:** Mostantól úgy írhatod le a harci cselekedeteidet, mintha egy asztali szerepjátékon beszélnél: „gyógyító varázslat használata magamon”, „kard előhúzása”, „gyógyital használata”. A MI megérti a szándékodat, és lefordítja játékmechanikára.
  - 🎨 **Új Epikus Kezelőfelület!** Teljesen átalakítottam a játékot. RPG stílusú menük, animált hátterek és teljesen megújult vizuális élmény. Sötét, félig átlátszó stílus, neon szegélyek és lágyított árnyékok a teljes immerzióért.
  - 🎬 **MI Jelenetrendező (JAVÍTVA):** A harc most életre kel. A MI környezeti eseményeket és reakciókat generál, amelyek gazdagítják a narratívát: leeső fáklyák, hátráló ellenségek, összeomló gerendák. A csatamező többé nem statikus!
  - ⚔️ **Fegyverrántás Szavakkal:** Nem kell többé a fegyverhelyre kattintanod. Egyszerűen írd be, hogy „kard előhúzása” vagy „bárd elővétele”, és a rendszer automatikusan értelmezi (VIGYÁZAT! Ha ezt harc közben teszed, az kudarcot, balsikert és körveszteséget okozhat!... „A harcba felkészülten érkezünk!”).
  - 📖 **Felismert Varázslatok:** A MI most már ismeri a teljes varázskönyvedet. Mondd, hogy „tűzgolyó varázslása”, és ha rendelkezel ezzel a varázslattal, végrehajtja.
  - 🌍 **Narratíva a Te Nyelveden:** A történet most szigorúan tiszteletben tartja a kiválasztott nyelvet, elkerülve a furcsa nyelvi keveredéseket (remélhetőleg soha többé nem látok „spanglish”-t! Annyira kényszerítettem a MI-t, hogy ha mégis más nyelven generál szöveget, mint a kiválasztott, az tisztán azért lesz, mert tényleg el van átkozva).
  - 🛡️ **Nincs Több Elveszett Kör:** Ha a játék nem érti a cselekvésedet, megkér, hogy fogalmazd át. A köröd NEM vész el.
  - 🎒 **Manuális Tárgylista:** Tárgyak mozgatásához a slotok között (felszerelés a hátizsákból, lőszer betöltése) használd a „fogd és vidd” felületet. Ez elkerüli a félreértéseket és MI-erőforrást takarít meg.
  - 🧪 **Folyékony Bájitalhasználat:** Most már közvetlenül a portrédra húzhatod a bájitalokat és az ételt a használathoz. Hozzáadtam a „Használat” opciót is a jobb egérgombos menübe. Intuitívabb és gyorsabb!
  - 🩸 **Sebzés Javítása:** Már nem vagy halhatatlan! Javítottunk egy problémát, ahol az életerőcsík nem csökkent, hiába találtak el. Most úgy fogsz szenvedni, ahogy illik.
  - 👻 **Viszlát, Szellemtárgyak:** Találtál egy tárgyat a történetben, de soha nem jelent meg a hátizsákodban? Probléma megoldva! A rendszer most automatikusan javítja azokat a tárgyakat, amelyeket a MI „elfelejt” létrehozni.
  - 🐛 **Kritikus NPC Javítás:** Javítva egy hiba, amely megakadályozta, hogy az NPC-k helyes taktikai döntéseket hozzanak, ami miatt mindig csak „várakoztak” támadás vagy védekezés helyett.
  - 🎒 **Kezdő Felszerelés Javítása:** Az új karakterek többé nem meztelenül kezdenek. Mostantól megfelelően megkapják a kezdő felszerelésüket.
  - 🎲 **Karakterkészítés:** Javítva egy exploit, ahol egy tulajdonság növelése és csökkentése bizonyos küszöbértékeknél végtelen extra pontokat generált. Vége a Karizma trükknek!
  - 🖼️ **Javított Portrék:** Egyedi nevet adtál a világnak, és eltűntek a portrék? Javítva! A rendszer most megtalálja a megfelelő képeket, függetlenül attól, hogyan nevezed el a világodat.
  - 💍 **Intelligens Ikonok:** A tárgyak (beleértve a gyűrűket is) most pontosabb és helyesebb ikonokat jelenítenek meg a felületen.
  - 🧪 **Javított Elemleírások:** A bájitalok, fogyóeszközök és varázslatok most helyesen jelenítik meg az összes információt és hatást, ha rájuk viszed az egeret.
  - 🎵 **Audio Javítások:** A harci zene többé nem áll le az előre beállított gombok megnyomásakor.
  - [I18N] **Implantátum Javítás:** Hozzáadva a hiányzó fordítási kulcsok az implantátum helyekhez (`slot_implant_*`) és a megfelelő ikonokhoz (`icon_implant_*`) az `es.json` fájlban.
  - [FIX][AUDIO] **Inkonzisztens Hang:** A tárgyak felszerelésének és a fegyverek előhúzásának hangeffektjeit (SFX) a környezethez igazítottuk. A rendszer most érzékeli a `setting_key`-t, és futurisztikus/ipari hangokat használ Cyberpunk, illetve klasszikus hangokat Fantasy környezetben.
  - [FIX][I18N] **es.json Tisztítás:** Eltávolítva több mint 20 duplikált kulcs az `es.json`-ból, és javítva a helyesírási hibák a slotok neveiben (pl. „Oíidos” -> „Oídos”).
  - ⚙️ **Intelligens Modellérzékelés:** A játék most közvetlenül olvassa az importált modellek (GGUF) „agyát”. Automatikusan észleli a valós maximális kontextust. (A hivatalos optimalizált modelleket a maximális stabilitás érdekében nem módosítja).
  - 📂 **Helytakarékosság:** Amikor modellt adsz hozzá a számítógépedről, a játék most áthelyezi azt a saját mappájába a másolás helyett. A Gigabájtjaid hálásak lesznek!
  - ⚖️ **Igazságosság a Tulajdonságoknál:** Javítva egy exploit, amely lehetővé tette végtelen pontok szerzését a tulajdonságok növelésével és csökkentésével a létrehozás során.
  - 📖 **Képzési Útmutató:** Frissítettem a Kézikönyvet (README) minden részlettel arról, hogyan szereznek tapasztalatot a karaktereid és hogyan nőnek a tulajdonságaik.
  - 📜 **Epikus Világok Kódexe:** Vége az „utóirat” jellegű háttértörténeteknek! A generátor most mély történelemmel rendelkező világokat hoz létre, részletes krónika formátumban leírva a vallásokat, törvényeket, földrajzot és híres személyeket.
  - 🧙 **Koherens Történetek:** A karaktered többé nem a semmiben születik. A háttértörténete most intelligensen integrálódik az éppen létrehozott vagy kiválasztott világ történetébe.
  - ⚡ **Folyamatos Kezelőfelület:** A történetek és világok automatikus generálása most a háttérben zajlik. Nincs több várakozás lefagyott képernyővel!
  - 🚀 **Azonnali Kalandkezdés:** Megszüntettem a várakozást! Most, a karakter létrehozása után azonnal belecsöppensz a történetbe. A rendszer a gazdagított háttértörténetedet használja a tökéletes kezdés megteremtéséhez anélkül, hogy egyetlen szót is írnod kellene.
  - 🎭 **Háttértörténetek Indítékkal:** A karaktereidnek már nemcsak múltja van, hanem sürgető indítéka is a kaland megkezdésére. Az új MI-rendszer automatikusan generálja a történet kezdeti szikráját, integrálva az életrajzodba.
  - 🧹 **Egyszerűsített Kezelőfelület:** Eltávolítottam azokat a gombokat és képernyőket, amelyek nem adtak hozzá értéket. A „Történet Indítása” gomb most mindent központosít, hogy minél hamarabb elkezdhess játszani.
  - [FIX][UI] **Vizuális Duplikáció a Világválasztásnál:** Javítva a hiba, ahol a világ neve duplán jelent meg, mint „Név [Név]”. Most elrejti a típuscímkét, ha az redundáns.
  - [FEAT][UI] **Gyors Betöltés (Egyszerű Kattintás):** Mostantól egyetlen kattintással betölthetsz egy karaktert, vagy újat hozhatsz létre a világválasztó képernyőn. A világok kibontása megmaradt a konfliktusok elkerülése érdekében.
  - 🧠 **Kreatívabb MI:** Megtörtem a MI „ismétlődési hurkát” technikai variabilitás beillesztésével minden kérésbe. A véletlenszerűen generált karakterek most sokkal egyedibbek és eredetibbek lesznek, figyelmen kívül hagyva az útmutató példáit.
  
  🛡️ A bátraknak, akik MERNEK harcolni a csatamező első vonalában: A kaland vár rátok, most fékezhetetlenebb, mint valaha!

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
