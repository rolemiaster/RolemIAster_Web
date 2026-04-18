# 📢 Fejlesztői üzenet (Korai hozzáférés)

Üdvözlünk a RolemIAsterben. Mielőtt belemerülnél a következő nagy kalandodba, szeretnék elrabolni egy percet, hogy tisztázzak pár dolgot (ígérem, rövid leszek, a kockák már várnak).

Ez a játék **Korai hozzáférés (Early Access)** fázisban van.
Egyedülálló fejlesztő vagyok – igen, csak én, a billentyűzetem és liter kávé –, ami azt jelenti, hogy mindent megteszek, amit csak tudok, de néha nem érek oda mindenre időben. Előre is elnézést kérek, ha lassan javítok ki egy-egy rakoncátlan hibát, valósítom meg azt a funkciót, amit nagyon szeretnél, vagy azonnal válaszolok a Discordon. Zsonglőrködöm, de még nem nőttek extra csápjaim.

## ⚠️ Fontos figyelmeztetés hardverrel kapcsolatban (Helyi vs. Felhő)
Kétféleképpen játszhatsz, és a tapasztalatod attól függ, melyiket választod:

*   **Helyi mód (Ingyenes, Privát):** Ha az AI-t a saját PC-den szeretnéd futtatni, a bolt követelményei (Minimum 8GB VRAM) szentek ahhoz, hogy jó lábakon indulj. Kevesebből az AI vontatottan fut, vagy lefagyasztja a gépedet. Ez tiszta matematika, nem varázslat, bár a Turbo Quanttal ez most változhat a jobb irányba.
*   **Felhő mód (Gemini, GPT API stb., csak ha `--advanced` paranccsal indítod):** Itt változik a játék! Ha a játékot úgy konfigurálod, hogy felhőszolgáltatásokat használjon (például Google Gemini vagy OpenAI), a nehéz munka az ő szerverükön történik, nem a tiéden. Ebben a módban a játék gyakorlatilag bármilyen gépen gördülékenyen fut, mivel a grafikus kártyád pihen.

## Elvárások kezelése
Ha olyan zökkenőmentes, AAA szuperprodukciót vártál, akkor attól tartok, rossz helyre jöttél (egyelőre). A játék egy korai szakaszban van, és őszintén szólva, csak a bátrak, akik megértik és támogatják az ilyen kísérleti projekteket, rendelkeznek elég türelemmel ahhoz, hogy most élvezzék.

## Elégedettségi garancia
Ha úgy érzed, a játék túl zöld még neked, vagy a hardvered túl sokat szenved, senki nem fog megharagudni, ha visszakéred a pénzed. Éppen ellenkezőleg, örömmel látlak majd újra a jövőben – és hogy 40 vagy 60 USD-t fizetsz majd, amikor a játék csiszolt és befejezett lesz 😉—. A jelenlegi ár egy ajándék, amiért bíztál bennem ebben a szakaszban.

Mindezek után, végtelen hálával tartozom azoknak, akik úgy döntenek, maradnak. A jelentéseitek és javaslataitok a projekt igazi motorjai. Nektek köszönhetően a játék hetek alatt brutálisan fejlődött.

**A RolemIAster veletek együtt épül.**

*Köszönöm a türelmet, a támogatást, és hogy a kritikusok az oldaladon állnak!*


*********************************************************************************
# 📢 FRISSÍTVE QWEN 3.5 + TURBO QUANTRA! ÚJ MOTOR, ÚJ TECHNOLÓGIA, ÚJ KORSZAK 🚀
*********************************************************************************

🚧 ÉPÍTKEZÉSI TERÜLET: LOBOTÓMIA ELVÉGEZVE (ÉS MŰKÖDIK) 🧠🔧
Mivel vagyok elfoglalva?
A játék motorját cserélem, és ez nem kis falat.
Eddig minden egyes kör után a rendszer 15 000-20 000 tokenes "köteget" dobott az AI-nak a szabályokból. Alapvetően olyan volt, mintha a mestert minden mondat előtt a teljes kézikönyv elolvasására kényszerítenénk. 📚🥵
Két technológiát implementáltam, amelyek együtt dolgoznak:

1. 🧠 **TurboQuant — A tömörített memória**
   - Integráltam egy Google technológiát (az ICLR 2026-ban bemutatott), amely az AI memóriáját eredeti méretének közel egyharmadára tömöríti.
   - Ha van RTX 3000-es, 4000-es vagy 5000-es sorozatú kártyád, a játék automatikusan kihasználja azt.
   - ⚠️ **FONTOS MEGJEGYZÉS AMD GPU-KHOZ:** BÁR VANNAK INDÍCIÓK A TURBO QUANT MŰKÖDÉSÉRE AMD/INTEL KÁRTYÁKON (VULKAN), GYAKORLATILAG NAGYON SOK HIBA VAN, ÉS EZÉRT EGYELŐRE NEM KERÜL IMPLEMENTÁLÁSRA. REMÉLJÜK, HOGY A KÖZÖSSÉG KITALÁL VALAMIT, ÉS HAMAROSAN ÚJ INFORMÁCIÓINK LESZNEK.
   - **Eredmény:** Az AI kevesebb VRAM felhasználásával többet jegyez meg. Ez tiszta digitális varázslat. ✨

2. 📖 **Masszív kontextus (+200%)**
   - Sebészileg írtam át a konverziós memória számítását: mostantól a játék elolvassa az egyes modellek technikai specifikációit, és pontosan kiszámítja, mennyi fér bele a GPU-dba.
   - A 9B modell ~36 000 szóból több mint ~110 000 szót képes megjegyezni egy 16 GB VRAM-mal rendelkező GPU-n. 🚀
   - Emellett a válasz limitejét 4096-ról 8192 tokenre emeltem: hosszabb narrációk vágás nélkül, fél mondatban.

Végeredmény: Többnyire kiváló sebesség, hosszú játékmenetek, amelyek nem vesztik el a fonalat, és egy sokkal fókuszáltabb (és józanabb) AI. 🎯

Valósági megjegyzés (Disclaimer 🧐):
Ha még a Szilícium-völgyi óriások (Gemini, ChatGPT...) is néha rózsaszín elefántokat látnak, az én helyi modellem sem lesz 100%-ban tökéletes. De már nem az a "részeg nagybácsi az esküvőn" – most egy kompetens szerepjáték-mester valódi elefántmemóriával. 🐘

Köszönöm a türelmet, amíg finomhangoltam a csavarokat! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->