# 📢 Fejlesztői üzenet (Korai Hozzáférés)

Üdvözlünk a RolemIAsterben. Mielőtt belemerülnél a következő nagy kalandodba, szeretnék egy percet rabolni, hogy tisztázzak pár dolgot (ígérem, rövid leszek, a kockák már várnak).

Ez a játék **Korai Hozzáférésben (Early Access)** van.
Egyedül vagyok fejlesztő — igen, csak én, a billentyűzetem és liternyi kávé —, ami azt jelenti, hogy mindent megteszek, amit tudok, de néha nem érek oda mindenre időben. Elnézést kérek előre is, ha sokáig tart egy-egy csintalan bug kijavítása, az általad annyira kívánt funkció bevezetése, vagy a Discordon való azonnali válaszadás. Zsonglőrködöm, de még nem nőttek extra csápjaim.

## ⚠️ Fontos figyelmeztetés a hardverrel kapcsolatban (Helyi vs. Felhő)
Kétféleképpen játszhatsz, és a tapasztalatod attól függ, melyiket választod:

*   **Helyi mód (Ingyenes, Privát):** Ha az AI-t a saját PC-eden szeretnéd futtatni, az áruház követelményei (Minimum 12 GB VRAM) szentek. Kevesebből az AI csak kullogni fog, vagy lefagyasztja a géped. Ez tiszta matematika, nem mágia.
*   **Felhő mód (Gemini, GPT API stb. csak akkor, ha a `--advanced` paranccsal indítasz):** Itt változik a helyzet! Ha a játékot úgy konfigurálod, hogy felhőalapú szolgáltatásokat használjon (mint a Google Gemini vagy az OpenAI), akkor a nehéz munka az ő szervereiken történik, nem a tiéden. Ebben a módban a játék szinte bármilyen gépen zökkenőmentesen fut, mivel a grafikus kártyád pihen.

## Elvárások kezelése
Ha egy hibátlan AAA szuperprodukcióra számítottál, attól tartok, rossz helyen jársz (egyelőre). A játék korai szakaszban van, és őszintén szólva, csak a bátrak, akik megértik és támogatják az ilyen kísérleti projekteket, rendelkeznek a türelemmel ahhoz, hogy most élvezzék.

## Elégedettségi garancia
Ha úgy érzed, a játék túl zöld neked, vagy a hardvered túl sokat szenved, senki sem fog haragudni, ha visszatérítést kérsz. Éppen ellenkezőleg, örömmel látlak majd a jövőben – és hogy 40 vagy 60 USD-t fizetsz, amikor a játék polírozott és kész lesz 😉—. A jelenlegi ár egy ajándék, azért, hogy ebben a szakaszban megbíztál bennem.

Ezzel együtt hálám végtelen azokkal szemben, akik úgy döntenek, maradnak. A jelentéseitek és javaslataitok a projekt igazi motorjai. Nektek köszönhetően a játék brutálisan fejlődött néhány hét alatt.

**A RolemIAster veletek együtt épül.**

*Köszönöm a türelmet, a támogatást, és hogy a kritikusok az oldalatokon állnak!*


*********************************************************************************
🚧 ÉPÍTÉSI TERÜLET: "LOBOTOMIZÁLOM" AZ AI-T (JÓRA) 🧠🔧
Min dolgozom?
A játék motorját cserélem, és ez nem kis munka.
Eddig minden alkalommal, amikor egy kört játszol, a rendszer 15 000-20 000 tokent dob az AI-nak a szabályokból. Alapvetően olyan, mintha minden mondat előtt a mestert a teljes kézikönyv elolvasására kényszerítenéd. 📚🥵

A probléma:
Túl sok egyszerre érkező adat esetén az AI néha "részegre" issza magát a kontextustól. Összezavarodik, kitalál nyelveket, tárgyakat tör össze, vagy teljesen hallucinál (a híres delíriumok). Ez a narratív "kék képernyő" digitális megfelelője.

A megoldás: Szigorú diéta! 🥗
Személyesen újra képzem a modellt (házi finomhangolás), hogy memorizálja a szabályokat.

A terv: Hogy az AI már tudjon játszani anélkül, hogy minden alkalommal el kellene olvasnia a kézikönyvet.

A cél: 20k-ról mindössze 5k tokenre csökkenteni a költést körönként.

Az eredmény: Brutálisan nagyobb sebesség és egy sokkal fókuszáltabb (és józanabb) AI. 🚀

Valóság megjegyzés (Disclaimer 🧐):
Ez egy tripla szaltós mérnöki munka: képzés, tesztelés és megerősítés. És legyünk őszinték: ha még a Szilícium-völgy óriásai (Gemini, ChatGPT...) is néha rózsaszín elefántokat látnak, az én helyi modellem sem lesz 100%-ban tökéletes. De a cél az, hogy a "buli részeges fickójából" kompetens szerepjáték mesterré váljon.

Köszönöm a türelmet, amíg állítgatom a csavarokat! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->