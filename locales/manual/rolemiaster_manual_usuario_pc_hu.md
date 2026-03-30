# 🐉 Üdvözöljük a RolemIAsterben!

Ragadd meg a kockáidat (vagy az egeret), és készülj fel olyan kalandokra, ahol az egyetlen határ a képzeleted elborultsága! A **RolemIAster** egy végtelen mesterséges intelligencia által vezérelt szerepjáték, amely lehetővé teszi, hogy te legyél saját történeteid hőse (vagy gonosztevője).

---

## ⚠️ JOGI NYILATKOZAT (Az unalmas, de szükséges rész)

**OLVASD EL, VAGY SZÍVD MAGADRA A KOCKÁK HARAGJÁT:**

1.  **🤖 Beépített Helyi MI:** A RolemIAster saját digitális aggyal rendelkezik. **Internet nélkül** működik, és nem kell semmi különöset sem csinálnod. Telepítés és játék!
2.  **☁️ Opcionális Felhő:** Ha inkább költenéd a pénzed külső MI-kre (OpenAI, Gemini...), akkor a te dolgod a bankkártyáddal. A költségek téged terhelnek.
3.  **🎲 Generatív Káosz:** A MI útközben találja ki a történetet. Ha a narrátor megőrül, és azt mondja, hogy tehenek esnek az égből, ne minket nézz. A fejlesztő nem vállal felelősséget a modell által generált őrültségekért.
4.  **🏗️ Korai Hozzáférés:** Ez még fejlesztés alatt áll. Ha hibát találsz, az nem hiba, hanem egy meglepetés "funkció"! (Kérlek, küldj visszajelzést, nagyon sokat segít.)

---

## 🖥️ RENDSZERKÖVETELMÉNYEK ÉS DIGITÁLIS AGYAK (MI)

A RolemIAster **helyi mesterséges intelligenciával** működik. Ez azt jelenti, hogy a számítógéped végzi a gondolkodás nehéz munkáját. Nincs szükséged internetre, de egy grafikus kártyára, ami nem a dinoszauruszok korából való. (Megjegyzés: Ha hideg van a szobádban, ez a játék ingyenes fűtésként működik.)

### ⚙️ Koncepciók kezdőknek

A **VRAM (Videó Memória)** a MI üzemanyaga.
*   A RolemIAsternek **12 000-16 000 szóra (tokenre)** van szüksége, hogy ne veszítse el a történet fonalát.
*   Ha a GPU-d kifogy a memóriából, a játék lassabb lesz, mint egy asztmás csiga.

---

### 📊 MODELL KATALÓGUS (Válaszd a méregedet)

A MI-ket a **Beállítások → Beépített Helyi MI → Modellek kezelése** alatt kezelheted.

#### 🏆 Qwen 3.5 Család — Speciálisan a RolemIAsterhez lett tréningezve

Ezeket a modelleket **Felügyelt Finomhangolással (SFT)** tréningezték, hogy elsajátítsák a játék narratív szabályait. Nem generikus modellek: ismerik a RolemIAster JSON szerződését, az NPC-ket, a leltárt és a harcot kívülről.

| Modell       | Méret     | Minimális VRAM | Szint | Ítélet                                                                            |
|--------------|-----------|----------------|-------|-----------------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB    | **3GB**        | B     | ⚡ **A Gyors. ** A leggyorsabb mind közül. Ideális alap grafikus kártyákhoz vagy GPU nélkül játékhoz. |
| **Qwen3.5-4B** | ~2.8GB    | **4GB**        | A     | ✅ **AZ EGYENSÚLYOZOTT.** Optimális sebesség és minőség. Az ajánlott alapmodell a legtöbb játékos számára. |
| **Qwen3.5-9B** | ~5.5GB    | **8GB**        | S     | 🌟 **A Narrátor.** Gazdag narratíva és kiváló koherencia. Azoknak, akiknek RTX 3070 vagy jobb kártyája van. |

---

### 🎮 GYORS VÁLASZTÁSI ÚTMUTATÓ

| A Grafikus Kártyád | VRAM | Ajánlott Modell | Eredmény                       |
|--------------------|------|-----------------|--------------------------------|
| GTX 1050/1060 / Nincs GPU | 2-4GB | **Qwen3.5-2B**  | 🆗 Csak épp játszható           |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B**  | ✅ Nagyon jó élmény            |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B**  | 🚀 Gyors és pontos              |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B**  | 🌟 Az ideális élmény           |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**  | 👑 Maximális minőség, villámgyors válaszok |

**💡 Tipp:** Mindig hagyj **2GB VRAM-ot szabadon** az operációs rendszernek, különben a Windows elkezd sírni és bezárni dolgokat.

---

### 🚨 SEGÍTSÉG! LASSÚ A GÉPEM! (VRAM Problémák)

Ha a játék lassabban válaszol, mint a szerelmed a WhatsAppon, valószínűleg kifogytál a VRAM-ból.

**Tünetek, hogy túl sok voltál:**
1.  **A modell átkerül a RAM-ba:** A számítógép a rendes memóriát használja a grafikus helyett. Eredmény: EXTRÉM LASSULÁS.
2.  **Kisebb túlcsordulás (1-2GB):** Várakozási idő 30-60 másodperc válaszonként.
3.  **Közepes túlcsordulás (3-5GB):** 2-5 perc. Elmész kávéért.
4.  **Súlyos túlcsordulás:** 10-30 perc. Játékra alkalmatlan.

#### 🛡️ Vészhelyzeti Protokoll
Ha a helyzet rosszra fordul, kövesd ezeket a lépéseket sorrendben:

1.  **📉 Csökkentsd a VRAM %-ot:** Menj a Beállításokba és csökkentsd **85%-ra**. Indítsd újra és próbáld ki.
2.  **🧹 Takarítás:** Zárd be azt a böngészőt 40 füllel. Elszívják a memóriádat.
3.  **🛑 A 70%-os Határ:** Soha ne menj 70% alá az allokált VRAM-ból.
    *   *Miért?* Mert a MI-nek helyre van szüksége a "gondolkodáshoz" (a KV gyorsítótár). Ha kevesebbet adsz neki, mint 70%, üres fejjel fog maradni és hibát fog jelezni.
4.  **🔙 Taktikai Visszavonulás:** Ha semmi sem működik, válts kisebb modellre (menj a 9B-ról a 4B-ra, vagy a 4B-ról a 2B-ra).

---

### ⚙️ HALADÓ MODELLBEÁLLÍTÁSOK ("Maximális Frikuzás")

> **SZAKÉRTŐ MÓD:** Ha profi vagy, és hozzáférni szeretnél a haladó modellbeállításokhoz (saját GGUF modellek hozzáadása HuggingFace-ről, rétegek módosítása stb.), akkor a következő paranccsal indítsd el a játékot: `--advanced`.

Azoknak, akik szeretnek gombokat nyomogatni a **Beállítások → Beépített Helyi MI** alatt:

| Opció             | Funkció                                          | Ajánlás                                                                |
|-------------------|--------------------------------------------------|------------------------------------------------------------------------|
| **GPU Layers**    | Mennyit tölt a modell a grafikus kártyára        | **-1** (Jelenti: "MINDENT". Ne nyúlj hozzá, hacsak nem tudod mit csinálsz) |
| **Maximális Kontextus** | A MI "rövid távú memóriája"                | **16384 - 32768** (Kevesebb ennél, és a MI amnéziás lesz)               |
| **Hőmérséklet**  | Kreativitás vs. Őrültség                     | **0.7 - 0.8** (Magasabb = őrültebb; Alacsonyabb = robotikusabb)          |
| **Történelem RAG**| Emlékezni dolgokra, amik régen történtek        | **Igen** (Elengedhetetlen hosszú kampányokhoz)                         |
| **Embeddings gyorsítótárazása** | Felgyorsítja az emlékek keresését        | **Igen** (Gyorsabbá teszi)                                             |

---

### 🔧 HIÁBAHÁRÍTÁS (Troubleshooting)

| Probléma        | Javítás                                                                                     |
|-----------------|---------------------------------------------------------------------------------------------|
| **Lassú MI / Lag** | Ellenőrizd, hogy a `GPU Layers` -1 legyen. Zárj be Chrome-ot. Csökkentsd a `Contexto Máximo`. |
| **Memória Hiba (OOM)** | Csökkentsd a `Contexto Máximo` vagy válassz kisebb modellt (3B).                        |
| **Az MI delirál / hallucinál** | Csökkentsd a `Temperatura` 0.6-ra. Ha továbbra is őrült, indítsd újra az alkalmazást. |

---

### 🌐 ALTERNATÍV SZOLGÁLTATÓK (Csak Szakértőknek)

> **Megjegyzés:** A játék által kínált helyi MI bőven elegendő. Ez csak haladó vagy bátor felhasználók számára készült.

*   **Külső Helyi Motorok:**
    *   **Ollama / LM Studio:** Ha már megvannak a saját fúrós modeljeid, használhatod őket.
*   **Felhő API-k (Fizetős):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Internetet és pénzt igényel.
    *   Konfiguráld itt: **Beállítások → MI → Új szolgáltató hozzáadása**.

---

### 🌍 HOGYAN JÁTSZ? (A Multiverzum és Te)

Amikor megnyitod a játékot, két utad van:

1.  **🆕 Új Kaland**: Hozd létre a legendádat a nulláról. A játék kérni fogja a **Neved, Hivatásod, Fizikai Leírásod, Pszichológiai Leírásod és a történeted Háttérét/Előzetesét**. Továbbá kiválaszthatod a **Nehézségi Szintet** és a **Humor Tónusát**, amelyek irányítani fogják a kampányt.
2.  **💾 Folytasd a Játékot**: A RolemIAster **valós időben ment**. Itt nincs "mentés halál előtt" és nincs visszaút. Minden döntés, minden hiba és minden sebesség bele van írva a történetbe. Ez egy ** kihívás**: amit teszel, az megtörtént. Élj a következményekkel... vagy halj meg velük.

A RolemIAster nem egy elszigetelt játék; ez egy **Állandó Multiverzum**.
*   **Végtelen Világok:** Hozd létre saját univerzumokat (**Középkori Fantázia** vagy **Cyberpunk**) saját Lore-ral.
*   **Végtelen Karakterek:** Minden világban annyi hőst tarthatsz meg, amennyit csak akarsz.
*   **Megosztott Idővonal:** Figyelem! Amit az egyik karakter csinál, az hatással van a többiek világára. A MI tudatában van más hőseidnek, és felismeri őket a világ lakóiként.
*   **MI "Érzékekkel" (Szuper RAG):** A RAG (Retrieval-Augmented Generation) rendszer a MI "súgójá"-ként működik, emlékezve a világra, ki kísér, hol vagy, és mi történt éppen, hogy a történet 100%-ban koherens legyen.

### A Felület (A te parancsnoki fülkéd)

*   **Bal Panel (TE):** A Karakterlapod. Élet, manna, képességek és hogy milyen jól nézel ki (Karizma).
*   **Középső Panel (A TÖRTÉNET):**
    *   **Fent:** Ahol a narrátor elmondja, mi történik.
    *   **Lent:** A döntésgombjaid és a szövegdoboz, ahová bármit beírhatsz, amit tenni szeretnél.
*   **Jobb Panel (A TE DOLGAID):** Leltár és felszerelés. A digitális takarékoskodó paradicsoma.

---

## 📜 JÁTÉKSZABÁLYOK (Igen, vannak szabályok)

A RolemIAster egy klasszikus és robusztus d100 (százas kocka) rendszert használ.

### 1. Az Attribútumok (Ami meghatároz téged)
A MI generálja az attribútumaidat a kontextus, a hivatás és a megadott leírás alapján. Miután generálva lettek, **10 EXTRA PONTOT** kapsz, amit kedved szerint oszthatsz el.
*   **Lépcsőzetes Költségek:** Egy attribútum 14-ig 1 pontba kerül. 15-től 16-ig 2 pontba. 17-től felfelé 3 pontba kerül! Gondold át jól, hova teszed az erőt.

*   💪 **Erő (FUE):** A tiszta fizikai erő. Befolyásolja a közelharci sebzést és a teherbíró képességedet.
*   ❤️ **Állóképesség (CON):** A ellenállóképességed. Sebek, betegségek és mérgek elviselésére.
*   🐘 **Méret (TAM):** A testi terjedelem. Nagy és nehéz, vagy kicsi és fürge.
*   🏃 **Ügyesség (DES):** Agilitás, célzás és hogy ne botolj meg a saját lábadban.
*   🧠 **Intelligencia (INT):** Tanulás, emlékezés és rejtvények megoldása.
*   🔮 **Bátorság (POD):** Lelked, szerencséd, akaraterőd és varázserő tartalékod.
*   😎 **Karizma (CAR):** Vezetőképesség, vonzerő és az emberek manipulálásának (vagy csábításának) képessége.

### 2. Gyors Matematika (Származtatott Jellemzők)
A motor automatikusan kiszámolja ezeket az értékeket az attribútumaid alapján:

*   🩸 **Élet (PV):** `CON * 10`. Ha 0-ra ér... nos, tudod. F.
*   ✨ **Manna (PM):** `(POD * 10) + INT`. A varázslatod üzemanyaga. Manna nélkül nincsenek trükkök. (Egy manna nélküli varázsló csak egy köntöst viselő ember, aki cosplayezik.)
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Az energiád a harcra és mozgásra anélkül, hogy meghalnál próbálkozás közben.
*   🧠 **Humanitás (HUM):** `(CON+POD) * 5`. (Csak Cyberpunkban: Méri, mennyi ember maradt benned, mielőtt a vezetékek megőrjítenének.)
*   ⚔️ **Akció Pontok (PA):** `(INT + DES) / 2`. Meghatározza a kezdeményezésedet. Aki előbb üt, kétszer üt.

### 3. A Képességeid
Egy alapértékkel indulnak (pl. Lopakodás = DES + INT), és használatukkal javulnak. Százalékos értékűek (%).

### 4. Akció Feloldás (A Kocka)
Amikor kockázatos dolgot próbálsz megtenni (mászás, hazudozás, támadás...), a MI kérni fog egy dobást. A játék egy láthatatlan **d100**-at dob. **(Emlékezz: A kockák utálnak téged. Személyes.)**

*   **A Célod:** Egy **KISEBB VAGY EGYENLŐ** számot dobni a képességed szintjénél.
    *   *Példa:* 45%-od van a Mászásban.
    *   Dobsz egy 30-at: ✅ **Siker**. Majomként mászol fel.
    *   Dobsz egy 80-at: ❌ **Hiba**. Nagyot esel.
    *   **Kritikus:** A képességed **1/5-énél kisebbet vagy egyenlőt** dobsz (vagy 01-et). Epikus! Rendkívüli parkourt csinálsz egy szaltóval.
    *   **Hiba:** Egy **99 vagy 100**. A kockák úgy döntöttek, ma nem a te napod. Leesik a nadrágod középen, és arccal esel el.

---

## 💡 TANÁCSOK, HOGY NE HALJ MEG (GYORSAN)

*   **✍️ Légy Leíró:** Ne írj csak annyit, hogy "támadok". Írj: *"Megpróbálom elkerülni a fejszéjét a földön gurulva, és a bokájába szúrom a tőrömet"*. A MI megjutalmaz téged.
*   **🧪 Kísérletezz:** Nem vagy korlátozva a gombokhoz. Írj őrültségeket! A MI improvizálni fog.
*   **🎭 Szerepjátssz:** Lépj be a szerepedbe. Olvasd el a leírásokat, és úgy cselekedj, ahogy a karaktered tenné, nem pedig úgy, ahogy te tennéd pizsamában.

---

## ⚔️ HARC (Fegyverbe!)

Amikor a szavak csődöt mondanak, eljön a csiperkedés ideje. A harc **taktikus** és **Tick-ek** (idő) alapján működik.

### 🕹️ Hogyan működik:
*   **Tick-ek:** Minden akció időt vesz igénybe. A nehéz fegyverek lassúak (sok tick-et költenek). A tőrök gyorsak.
*   **A te sebességed:** Az Akció Pontjaidtól (PA) függ.

### Alapvető Akciók:
*   **🗡️ Támadás:** Üsd meg azzal, amit kihúztál.
*   **🛡️ Blokkolás:** Védekezésbe állsz. Csökkenti a sebzést, de Stamina-t fogyaszt.
*   **🏃 Elmenekülés:** Gyávák számára (vagy bölcs emberek számára, akik élni akarnak).
*   **🏳️ Megadás:** Ha látod, hogy nem nyersz, könyöröghetsz kegyelemért.
*   **✨ Mágia / Cyberware:** Tűz, lézersugarak, hackelés...

### 💬 Szabad Szöveges Akciók (ÚJ!)
Nem szereted a gombokat? Írd le, mit akarsz csinálni, mintha egy hús-vér Mesterrel beszélnél!
*   **Példák:** *"Tűzlabdát dobni a goblinra"*, *"Előhúzni a futó kardomat"*, *"Pociont használni magamon"*.
*   **Jelenet Rendező:** A harc most életre kel. A MI környezeti eseményeket és reakciókat generál, amelyek gazdagítják a narratívát: leeső gerendák, visszahúzódó ellenségek, leeső fáklyák. A csatatér már nem statikus!
*   **Ha a MI nem érti:** Újrafogalmazást kér. A te köröd NEM vész el!
*   **⚠️ Korlátozás:** Tárgyak mozgatása a slotok között (felszerelés a hátizsákból, lőszer betöltése) **Drag & Drop** segítségével történik az interfészen, nem szöveggel.

### ⚠️ AZ ALAPVETŐ TÚLÉLÉSI SZABÁLY
**HÚZD KI A FELYVEREDET HARC ELŐTT!**
A fegyver kihúzása a harc közepén időt (Tick-eket) fogyaszt. Ha fegyverrel a hüvelyben kapnak el, addig ütnek, amíg meg nem unják, miközben ügyetlenül próbálod kihúzni. VAGY MÉG ROSSZABB!, HA A HÁTIZSÁKBAN VANNAK A FELYVEREID A FELSZERELÉS SLOTJA HELYETT (Elvezesse egy pillanat, ki kell húznom a nagykardot a hátizsákból, tudom, hogy itt volt valahol... valahol...) 🤦‍♂️
👉 **Kattints a felszerelt fegyver címkéjére** (jobb panel) a kihúzásához. Zölden világít majd.

A fegyverek harc közbeni mozgatása időt (Tick-eket) fogyaszt, és meglepetésszerű támadást eredményezhet, ráadásul nagy valószínűséggel elveszíted a körödet, vagy az idegességtől elhibázod a közeledő fejszét, ami az arcodba csapódik, vagy a földre ejted. (Lehet, hogy nem volt jó ötlet ADHD-s karaktert csinálni.)

---

## ✨ MÁGIA ÉS KIBERNETIKA

Attól függően, hogy a világod "Középkori Fantázia" vagy "Cyberpunk":

### 🧙‍♂️ Fantázia: Bűbájok
Bűbájos vagy? Meg tudod bűvölni a felszerelésedet.
1.  **Tanulj:** A varázslatnak ott kell lennie a grimoiredben.
2.  **Dobd (Drag & Drop):** Húzd a varázslatot a listádról a tárgyadra a leltáradban.
3.  **Költség:** Az aktív bűbáj fenntartása **Manna-t fogyaszt körönként**.
4.  **Figyelmeztetés:** Ha kifogysz a mannaból a harc közepén, a tűz kard ismét rozsdás vasdarabbá válik.

### 🦾 Cyberpunk: Implantátumok
Akarod a zoom szemeket vagy majom karokat?
1.  Keress egy **Technosurgent** (szolgáltatást nyújtó NPC).
2.  Fizess a kreditért (semmi sem ingyenes a jövőben).
3.  **Humanitás Költség:** Minden implantátum elvisz egy darabot a lelkedből (**Humanitás**).
    *   Ha túl sokat teszel be, **Cyberpszichóvá** válsz (egy gyilkos lábú kenyérpirító), és elveszíted az irányítást a karaktered felett.

---

## 🛒 BOLTOK ÉS SZOLGÁLTATÁSOK (SIS)

Beszélj NPC-kkel a kereskedéshez.
*   **A MI JAVASOL, TE DÖNTESZ:** Amikor egy kereskedővel vagy gyógyítóval beszélsz, a MI javasolni fogja a szolgáltatásaikat (javítás, eladás, gyógyítás), de megjelenik egy **"Szolgáltatások megtekintése"** gomb, hogy te dönthess, mikor lépsz be a tranzakciós módba.
*   **Alkudozás:** A **Kereskedés** képességed (Karizmán alapul) határozza meg az árakat. Ha csúnya vagy vagy antipatikus, átvernek.
*   **Eladás:** **Jobb klikkel** egy tárgyra a leltáradban, hogy eladd a kereskedőnek, vagy húzd rá.

---

## 🎒 LELTÁR KEZELÉS (Tetris)

*   **Súly:** Van egy teherbírási limite (Erő + Méret). Ha túl sok kacatot viszel, lassú leszel és büntetést kapsz (Diógen nem a barátod).
*   **Panelek:**
    *   **Felszerelés:** Amit viselsz.
    *   **Öv:** Gyors hozzáférés harc közben (kevesebb időt fogyaszt potionokat használni innen).
    *   **Hátizsák:** A zsák mélye.
*   **Folyékony Használat:** Húzz egy potiont vagy ételt közvetlenül az **arcodra** (a portréra) az azonnali fogyasztáshoz. Használhatod a kontextus menüt is (jobb klikk -> Használat).

---

## 🛠️ VÉGSŐ BEÁLLÍTÁSOK

A **Beállítások** menüben mindent módosíthatsz:
*   **🌍 Nyelv:** A MI lefordít minden játékot és válaszokat menet közben. Poliglott mód aktiválva.
*   **👁️ Megjelenés:** Betűméret és színek, hogy ne vakulj meg. Neon keretek és puha árnyékok a teljes elmerüléshez.
*   **🧠 MI Beállítások:** Válts modell, hőmérséklet stb. (Emlékezz arra, amit a kézikönyv elején láttunk a `--advanced` jelzővel kapcsolatban, ha te is azok közé tartozol, akik mindent meg akarnak érinteni.)

---

## 🎭 NEHÉZSÉG ÉS HUMOR (Szabd testre a szenvedésedet)

Mielőtt elkezdenél, emlékezz arra, hogy a MI nem csak narrál, hanem **beállítja a világot** az igényeidnek megfelelően. Ezek a paraméterek a világ létrehozásakor választhatók ki, és permanensek az adott világra:

*   **🎮 Nehézség (MI által Kezelt):** Nem egyszerű sebzés szorzó. A játék azt mondja a MI-nek: "Hé, a nehézség ez, ennek megfelelően cselekedj."
    *   **Könnyű:** Soha nem fogsz meghalni (vagy szinte lehetetlen lesz), a helyzetek egyszerűbbek, az árak olcsóbbak, és az ellenségek ügyetlenebbek. A MI minden jelenetet okosan fog megtervezni, hogy utad rózsás legyen.
    *   **Normál:** Az alap egyensúly.
    *   **Kihívás:** A MI könyörtelen lesz, az árak csillagászatiak, és minden hiba az utolsó lehet.

*   **🃏 Humor Tónus:** Meghatározza, hogyan beszél veled a MI, és milyen események történnek. Bár minden modellnek megvan a maga módja a "humor" fogalmának értelmezésére, a MI megpróbál alkalmazkodni ahhoz, amit választasz... vagy nem:
    *   **Komoly:** Epikus, sötét és formális narratíva.
    *   **Szarkasztikus:** A MI nevetni fog a hibáidon, állandóan beszól neked, és irónikus hangnemet használ.
    *   **Delíriumos:** Készülj fel az abszurditásra. Repülő tehenek, szürreális helyzetek és a MI legcsavarodottabb logikája által vezérelt káosz.

---

## 🚧 Figyelmeztetés: Korai Hozzáférés

A RolemIAster **aktív fejlesztés alatt** áll, lassú tűzön fő.
*   Találhatsz hibákat (vagy "váratlan funkciókat").
*   Minden héten új dolgokat adok hozzá.
*   A visszajelzésed aranyat ér! Mondd el, mi tetszik és mi tetszik nagyon. (Ha valami nem tetszik, mondd el azt is, de szeretettel.)

Most menj, dobd az első kezdeményezésedet, és hozd létre a legendádat!

<!-- source_hash: 9af75cff -->