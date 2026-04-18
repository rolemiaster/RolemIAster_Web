# 📢 Fejlesztői üzenet (Korai hozzáférés)

Üdvözlünk a RolemIAsterben. Mielőtt belemerülnél a következő nagy kalandodba, szeretnék ellopni egy percet, hogy tisztázzak néhány dolgot (ígérem, rövid leszek, a kockák már várnak).

Ez a játék **Korai hozzáférés (Early Access)** fázisban van.
Egyedüli fejlesztő vagyok — igen, csak én, a billentyűzetem és rengeteg kávé —, ami azt jelenti, hogy mindent megteszek, amit tudok, de néha nem érek be mindenre időben. Elnézést kérek előre, ha időbe telik egy-egy makacs bug javítása, az általad nagyon vágyott funkció implementálása, vagy a Discordon való azonnali válaszadás. Zsonglőrködöm, de még nem nőttek extra csápjaim.

## ⚠️ Fontos figyelmeztetés a hardverrel kapcsolatban (Helyi vs. Felhő)
Kétféleképpen játszhatsz, és a tapasztalatod attól függ, melyiket választod:

*   **Helyi mód (Ingyenes, Privát):** Ha az AI-t a saját PC-den szeretnéd futtatni, a bolti követelmények (Minimum 12 GB VRAM) szentek. Kevesebb ennél, és az AI lelassul, vagy lefagyasztja a gépedet. Ez tiszta matematika, nem varázslat.
*   **Felhő mód (Gemini, GPT API stb. csak akkor, ha a `--advanced` paranccsal indítasz):** Itt változik a helyzet! Ha a játékot felhőszolgáltatások (például Google Gemini vagy OpenAI) használatára konfigurálod, a nehéz munka az ő szervereiken történik, nem a tiéden. Ebben a módban a játék gyakorlatilag bármilyen gépen simán fut, mivel a videokártyád pihen.

## Elvárások kezelése
Ha a zökkenőmentes AAA szuperprodukcióra számítottál, attól tartok, rossz helyen jársz (egyelőre). A játék korai szakaszban van, és őszintén szólva, csak a bátrak, akik megértik és támogatják az ilyen kísérleti projekteket, rendelkeznek a türelemmel, hogy most élvezzék.

## Elégedettségi garancia
Ha úgy érzed, hogy a játék túl zöld még neked, vagy a hardvered túl sokat szenved, senki sem fog megharagudni, ha visszatérítést kérsz. Éppen ellenkezőleg, örömmel látlak majd a jövőben – és hogy 40 vagy 60 USD-t fizetsz, amikor a játék kiforrott és befejezett lesz 😉. A jelenlegi ár ajándék, amiért megbíztál bennem ebben a szakaszban.

Mindazonáltal, végtelenül hálás vagyok azoknak, akik úgy döntenek, hogy itt maradnak. A jelentéseitek és javaslataitok a projekt igazi motorjai. Nektek köszönhetően a játék brutálisan sokat fejlődött néhány hét alatt.

**A RolemIAster tiértekre szabva épül.**

*Köszönöm a türelmet, a támogatást és hogy a kritikusok az oldaladon állnak!*


*********************************************************************************
#  QWEN 3.5 + TURBO QUANTRA FRISSÍTETTÜNK! ÚJ MOTOR, ÚJ TECHNOLÓGIA, ÚJ KORSZAK 🚀
*********************************************************************************

🚧 ÉPÍTKEZÉSI TERÜLET: LOBOTÓMIA KÉSZ (ÉS MŰKÖDIK) 🧠🔧
Mivel foglalkozom?
A játék motorját cserélem, és ez nem kis munka.
Eddig minden alkalommal, amikor egy kört játszottál, a rendszer 15 000-20 000 token nagyságú szabály-"köteget" dobott az AI-nak. Lényegében olyan volt, mintha a mestert arra kényszerítenéd, hogy minden mondat előtt olvassa el az egész kézikönyvet. 📚🥵
Két technológiát vezettem be, amelyek együtt dolgoznak:

1. 🧠 **TurboQuant — A tömörített memória**
   - Integráltam egy Google technológiát (bemutatott ICLR 2026), amely az AI memóriáját az eredeti méretének közel egyharmadára tömöríti.
   - Ha van egy RTX 3000-es, 4000-es vagy 5000-es sorozatú kártyád, a játék automatikusan kihasználja azt.
   - ⚠️ **FONTOS MEGJEGYZÉS AZ AMD GPU-KRÓL:** BÁR VANNAK UTALÁSOK A TURBOQUANT MŰKÖDÉSÉRE AMD/INTEL KÁRTYÁKON (VULKAN), GYAKORLATILAG NAGYON SOK HIBA VAN, ÉS EZÉRT EGYELŐRE NEM LESZ IMPLEMENTÁLVA. REMÉLJÜK, HOGY A KÖZÖSSÉG TESZ KEDVEZŐ LÉPÉSEKET, ÉS HAMAROSAN ÚJDONSÁGOK LESZNEK.
   - **Eredmény:** Az AI kevesebb VRAM használattal többet jegyez meg. Tiszta digitális mágia. ✨

2. 📖 **Masszív kontextus (+200%)**
   - Sebészi pontossággal írtam át a beszélgetési memória számítását: most a játék kiolvassa az egyes modellek műszaki specifikációit, és pontosan kiszámítja, mennyi fér bele a GPU-ba.
   - A 9B modell 16 GB VRAM-mal rendelkező GPU-n ~36 000 szóról több mint ~110 000 szóra emeli a memória kapacitását. 🚀
   - Emellett 4096-ról 8192 tokenre emeltem a válaszhatárt: hosszabb narrációk, mondatok felénél történő vágások nélkül.

Végeredmény: A legtöbb esetben jobb sebesség, hosszú játékok, amelyek nem veszítik el a fonalat, és egy sokkal céltudatosabb (és józanabb) AI. 🎯

Valóság megjegyzés (Jogi nyilatkozat 🧐):
Ha még a Szilícium-völgyi óriások (Gemini, ChatGPT...) is néha rózsaszín elefántokat látnak, az én helyi modellem sem lesz 100%-ban tökéletes. De már nem az a "részeg srác az esküvőn" — most már egy kompetens, valódi elefántmemóriával rendelkező szerepjátékmester. 🐘

Köszönöm a türelmedet, amíg beállítottam a csavarokat! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->