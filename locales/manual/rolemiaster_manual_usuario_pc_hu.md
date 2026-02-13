# 🐉 Üdvözöl a RolemIAster!

Fogd a kockáidat (vagy az egeredet), és készülj fel olyan kalandokra, ahol az egyetlen határ a képzeleted csavarossága! A **RolemIAster** egy mesterséges intelligencia által vezérelt, végtelen szerepjáték, amely lehetővé teszi, hogy te légy saját történeteid hőse (vagy gonosztevője).

---

## ⚠️ JOGI NYILATKOZAT (Az unalmas, de szükséges rész)

**OLVASD EL, KÜLÖNBEN SZENVEDNI FOGSZ A KOCKÁK HARAGJÁTÓL:**

1.  **🤖 Integrált Helyi MI:** A RolemIAsternek saját digitális agya van. **Internet nélkül** működik, és nem kell semmi furcsát beállítanod. Telepítsd és játssz!
2.  **☁️ Opcionális Felhő:** Ha inkább pénzt költenél külső MI-kre (OpenAI, Gemini...), akkor a te dolgod a hitelkártyáddal. A költségek a tiéd.
3.  **🎲 Generatív Káosz:** A MI rögtönözve találja ki a történetet. Ha a narrátor megőrül, és azt mondja, hogy tehéneg, ne minket nézz. A fejlesztő nem vállal felelősséget a modell által generált őrületekért.
4.  **🏗️ Korai Hozzáférés:** Ez még fejlesztés alatt áll. Ha találsz egy hibát, az nem bug, hanem egy meglepetés "funkció"! (Kérlek, küldj visszajelzést, mert nagyon sokat segít.)

---

## 🖥️ RENDSZERKÖVETELMÉNYEK ÉS DIGITÁLIS AGYAK (MI)

A RolemIAster **Helyi Mesterséges Intelligenciával** működik. Ez azt jelenti, hogy a számítógéped végzi a kemény gondolkodási munkát. Nincs szükséged internetre, de egy grafikus kártyára, ami nem a dinoszauruszok korából való. (Megjegyzés: Ha hideg van a szobádban, ez a játék ingyenes fűtésként is működik.)

### ⚙️ Fogalmak kezdőknek

A **VRAM (Videó memória)** az MI üzemanyaga.
*   A RolemIAsternek kb. **12 000–16 000 szóra (tokenre)** van szüksége, hogy ne veszítse el a történet fonalát.
*   Ha a GPU-d kifogy a memóriából, a játék lassabb lesz, mint egy asztmás csiga.

---

### 📊 MODELLEK KATALÓGUSA (Válaszd ki a méregedet)

A MI-ket a **Beállítások → Integrált Helyi MI → Modellek kezelése** menüpontban kezelheted.

#### 🏆 Qwen 2.5 Család (A java java)

| Modell | Méret | Minimális VRAM | Kategória | Ítélet |
|--------|-------|----------------|-----------|--------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **A gyakornok.** Teszi a dolgát, de ne várd tőle, hogy Shakespeare-t írjon. Néha elveszik. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **A KIVÁLASZTOTT.** Kiegyensúlyozott, okos és gyors. Ez az alapértelmezett ajánlott modell. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **A professzor.** Gazdag, mély narratíva és nagyon természetes párbeszédek. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Isteni szint.** Szükséged lesz egy űrhajóra (RTX 3090/4090), hogy ezt futtasd. |

---

### 🎮 GYORS VÁLASZTÁSI ÚTMUTATÓ

| A Te Grafikus Kártyád | VRAM | Ajánlott Modell | Eredmény |
|----------------------|------|--------------------|-----------|
| GTX 1050/1060        | 4GB  | Qwen2.5-3B         | 🆗 Csak éppen, de játszható (Alacsony kontextus) |
| GTX 1070/1660        | 6GB  | Qwen2.5-3B         | 🆗 Jól fut |
| RTX 2060/3060        | 8GB  | Qwen2.5-3B         | 🚀 Szárnyal |
| RTX 3070/4060Ti      | 12GB | **Qwen2.5-7B**     | ✅ Ideális élmény |
| RTX 3090/4080        | 16-24GB | Qwen2.5-14B    | 🌟 Luxus |
| RTX 4090             | 24GB | Qwen2.5-32B        | 👑 Maximális minőség |

**💡 Pro tipp:** Mindig hagyj kb. **2 GB VRAM-ot szabadon** az operációs rendszernek, különben a Windows sírni kezd, és bezár dolgokat.

---

### 🚨 SEGÍTSÉG! LASSÚ A GÉPEM! (VRAM problémák)

Ha a játék lassabban válaszol, mint a kiszemelted WhatsApp-on, akkor valószínűleg kifogytál a VRAM-ból.

**Tünetek, hogy túlambiciózus voltál:**
1.  **A modell átkerül a RAM-ba:** A számítógép a normál memóriát használja a grafikus kártya helyett. Eredmény: EXTRÉM LASSÚSÁG.
2.  **Enyhe túlcsordulás (1-2GB):** 30-60 másodpercet fog tartani válaszonként.
3.  **Mérsékelt túlcsordulás (3-5GB):** 2-5 perc. Elmehetsz kávézni.
4.  **Súlyos túlcsordulás:** 10-30 perc. Játszhatatlan.

#### 🛡️ Vészhelyzeti Protokoll
Ha a helyzet rosszra fordul, kövesd ezeket a lépéseket sorrendben:

1.  **📉 Csökkentsd a VRAM %-át:** Menj a Beállításokba, és állítsd **85%-ra**. Indítsd újra, és próbáld meg.
2.  **🧹 Takarítás:** Csukd be azt a böngészőt 40 füllel. Elszívják a memóriádat.
3.  **🛑 A 70%-os korlát:** Soha ne állítsd 70% alá a hozzárendelt VRAM-ot.
    *   *Miért?* Mert az MI-nek szüksége van helyre a "gondolkodáshoz" (a KV gyorsítótár). Ha kevesebbet adsz neki, mint 70%, üres lesz, és hibát fog adni.
4.  **🔙 Taktikai visszavonulás:** Ha semmi sem működik, válts kisebb modellre (7B-ról 3B-ra).

---

### ⚙️ HALADÓ MODELLEZŐ BEÁLLÍTÁSOK

Azoknak, akik szeretnek gombokat nyomogatni a **Beállítások → Integrált Helyi MI** menüben:

| Opció | Funkció | Ajánlás |
|--------|---------|---------------|
| **GPU Layers** | Mennyi a modellből töltődjön be a grafikus kártyára | **-1** (Jelentése: "MINDEN". Ne nyúlj hozzá, hacsak nem tudod, mit csinálsz) |
| **Maximális Kontextus** | Az MI "rövid távú memóriája" | **16384 - 32768** (Ennél kevesebb, és az MI amnéziás lesz) |
| **Hőmérséklet** | Kreativitás vs Őrültség | **0.7 - 0.8** (Magasabb = őrültebb; Alacsonyabb = robotikusabb) |
| **Történeti RAG** | Régi dolgok megjegyzése | **Igen** (Elengedhetetlen hosszú kampányokhoz) |
| **Embeddings gyorsítótárazása** | Felgyorsítja az emlékek keresését | **Igen** (Gyorsabbá teszi) |

---

### 🔧 HIÁRPUZÓBAN (Troubleshooting)

| Hiba | Javítás |
|-------|---------|
| **Lassú MI / Lag** | Ellenőrizd, hogy a `GPU Layers` -1 legyen. Csukd be a Chrome-ot. Csökkentsd a `Maximális Kontextust`. |
| **Memória Hiba (OOM)** | Csökkentsd a `Maximális Kontextust`, vagy válassz kisebb modellt (3B). |
| **Az MI összefügéstelenkedik / hallucinál** | Csökkentsd a `Hőmérsékletet` 0.6-ra. Ha továbbra is őrült, indítsd újra az alkalmazást. |

---

### 🌐 ALTERNATÍV SZOLGÁLTATÓK (Csak szakértőknek)

> **Megjegyzés:** A játékhoz mellékelt helyi MI elegendő és bőséges. Ez csak haladó vagy bátor felhasználóknak szól.

*   **Külső Helyi Motorok:**
    *   **Ollama / LM Studio:** Ha már vannak saját mániákus modelljeid, használhatod őket.
*   **Felhő alapú API-k (fizetős):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Internetet és pénzt igényel.
    *   Konfiguráld a következő helyen: **Beállítások → MI → Új szolgáltató hozzáadása**.

---

## 🎲 HOGYAN JÁTSZUNK?

Amikor elindítod a játékot, két út áll előtted:

1.  **🆕 Új Kaland**: Hozz létre a legendádat a nulláról. A játék végigvezet a faj, osztály, világ és alapfelvetés kiválasztásában. (Ha az élet citromot ad... vagy 3-at az Erőben, legyél Bárd).
2.  **💾 Játék Betöltése**: Folytasd pontosan ott, ahol abbahagytad a megalázó halál előtt. (Vagy hogy "korrigáld" azt a "kis számítási hibát" a sárkánnyal).

### Az Interfész (A Te vezérlőpultod)

*   **Bal Panel (TE):** A Karakterlapod. Élet, manna, képességek és milyen jól nézel ki (Karizma).
*   **Középső Panel (A TÖRTÉNET):**
    *   **Felül:** Ahol a narrátor elmondja, mi történik.
    *   **Alul:** A döntési gombjaid és a szövegdoboz, ahová beírhatod, mit akarsz csinálni.
*   **Jobb Panel (A HOLMIJAID):** Leltár és felszerelés. A digitális Diogenész paradicsoma.

---

## 📜 JÁTSZÉKI SZABÁLYOK (Igen, vannak szabályok)

A RolemIAster egy klasszikus és robusztus d100 (százoldalú kocka) rendszert használ.

### 1. Az attribútumaid (Mi határoz meg téged)
Véletlenszerűen generálódnak, mint az asztali szerepjátékokban régen!

*   💪 **Erő (ERŐ):** Erős ütéshez és kövek emeléséhez.
*   ❤️ **Állóképesség (ÁLL):** Ütések, betegségek és mérgek elviselésére.
*   🐘 **Méret (MÉ):** Nagy és nehéz, vagy kicsi és fürge.
*   🏃 **Ügyesség (ÜGY):** Agilitás, célzás és az, hogy ne botolj meg a saját lábadban.
*   🧠 **Intelligencia (INT):** Tanulás, emlékezés és rejtvények megoldása.
*   🔮 **Akaraterő (AKA):** Lelked, szerencséd, akaraterőd és varázslatod.
*   😎 **Karizma (KAR):** Vezetés, vonzerő és emberek megtévesztésének képessége.

### 2. Gyors Számítások (Származtatott jellemzők)
*   **Élet (ÉL):** `(ÁLL + MÉ) / 2`. Ha 0-ra csökken... nos, tudod. F.
*   **Manna (MN):** Egyenlő az AKA-ddal. Manna nélkül nincsenek trükkök. (Egy manna nélküli varázsló csak egy köntöst viselő fickó, aki cosplayezik).
*   **Akció Pontok (AP):** `(INT + ÜGY) / 2`. Meghatározza a kezdeményezésedet. Aki előbb üt, kétszer üt.

### 3. A képességeid
Alapértékkel kezdődnek (pl. Lopakodás = ÜGY + INT), és használatukkal javulnak. Százalékos értékűek (%).

### 4. Akciók Feloldása (A Kocka)
Amikor valami kockázatosat próbálsz megtenni (mászni, hazudni, támadni...), az MI dobást kér tőled.
A játék egy láthatatlan **d100-at** dob. **(Emlékezz: A kockák gyűlölnek téged. Ez személyes).**

*   **A Célod:** Kevesebbet vagy ugyanannyit dobni, mint a képességed.
    *   *Példa:* 45%-od van a Mászásban.
    *   Dobsz egy 30-ast: ✅ **Siker**. Majomként mászol fel.
    *   Dobsz egy 80-ast: ❌ **Hiba**. Nagyot esel.
    *   Dobsz egy 01-05-öst: ✨ **KRITIKUS** Lenyűgöző parkourt csinálsz szaltóval.
    *   Dobsz egy 99-100-ast: 💀 **PIFIA** Leesnek a nadrágjaid félúton, és arccal a földre esel.

---

## 💡 TIPPEK, HOGY NE HALJ MEG (GYORSAN)

*   **✍️ Legyél leíró:** Ne írj csak annyit, hogy "támadok". Írj: *"Megpróbálom kikerülni a baltáját a földön gurulva, és a torkába szúrom a tőröm."* Az MI díjazni fogja.
*   **🧪 Kísérletezz:** Nem vagy korlátozva a gombokra. Írj őrültségeket! Az MI improvizálni fog.
*   **🎭 Szerepjáték:** Vedd magadra a szerepet. Olvasd el a leírásokat, és úgy cselekedj, ahogy a karaktered tenné, nem úgy, ahogy te tennéd pizsamában.

---

## ⚔️ A HARC (Fegyverbe!)

Amikor a szavak kudarcot vallanak, eljön az ütés ideje. A harc **taktikus** és **Tick-ek** (idő) alapján működik.

### 🕹️ Hogyan működik:
*   **Tick-ek:** Minden akció időt vesz igénybe. A nehéz fegyverek lassúak (sok tick-et fogyasztanak). A tőrök gyorsak.
*   **A Te Sebességed:** Az Akció Pontjaidtól (AP) függ.

### Alapvető Akciók:
*   **🗡️ Támadás:** Üsd meg, amivel elővetted.
*   **🛡️ Blokkolás:** Védelmi pozícióba helyezed magad. Csökkenti a sebzést, de állóképességet fogyaszt.
*   **🏃 Elmenekülés:** Gyávák számára (vagy bölcsek számára, akik élni akarnak).
*   **🏳️ Megadás:** Ha látod, hogy nem nyersz, könyöröghetsz kegyelemért.
*   **✨ Varázslat / Cyberware:** Tűz, lézersugarak, hackelés...

### ⚠️ A TÚLÉLÉS ARANYAKA
**KARD KI, MIELŐTT HARCOLNÁL!**
A fegyver elővétele a harc közepén időt (Tick-eket) fogyaszt. Ha a kardhüvelyében érnek, addig kapod, amíg csak tudod, miközben megpróbálod ügyetlenül kivenni. VAGY MÉG ROSSZABB!, HA A FELSZERELÉS HORDOZÓBAN HORDOD A FELSZERELÉSÉT A ZSEBÉBEN (Elnézés, egy pillanat, kiveszem a nagykardot a hátizsákból, tudom, hogy itt volt valahol... valahol...) 🤦‍♂️
👉 Kattints az **equipált fegyver címkéjére** (jobb panel), hogy elővedd. Zöldre vált.

A fegyverek harc közbeni mozgatása időt (Tick-eket) fogyaszt, és meglepetésszerű támadást eredményezhet, ráadásul nagy valószínűséggel elveszíted a körödet, mert az idegességtől elhibázod a közeledő fejsze elől való elugrást, vagy kiesik a kezedből. (Talán nem volt jó ötlet ADHD-s karaktert készíteni)

---

## ✨ VARÁZSLAT ÉS KIBERNETIKA

Attól függően, hogy a világod "középkori fantázia" vagy "cyberpunk" típusú:

### 🧙‍♂️ Fantázia: Rontások
Varázsló vagy? Meg tudod rontani a felszerelésedet.
1.  **Tanulás:** A varázslatnak a varázskönyvedben kell lennie.
2.  **Dobás (Drag & Drop):** Húzd a varázslatot a listádról az inventory-ban lévő tárgyra.
3.  **Költség:** Egy aktív rontás fenntartása **mannát fogyaszt körönként**.
4.  **Figyelem:** Ha a harc közepén kifogysz a mannából, a tűz-kard újra csak egy rozsdás vasharab lesz.

### 🦾 Cyberpunk: Implantátumok
Nagyítós szemeket vagy gorilla karokat akarsz?
1.  Keress egy **Techno-sebészt** (NPC szolgálatban).
2.  Fizesd ki a krediteket (a jövőben semmi sem ingyenes).
3.  **Emberiség Költsége:** Minden implantátum elvesz egy darabot a lelkedből (**Emberiség**).
    *   Ha túl sokat teszel be, **Cyber-pszichózissá** válsz (egy gyilkos lábakkal rendelkező kenyérpirító), és elveszíted az irányítást a karaktered felett.

---

## 🛒 BOLTOK ÉS SZOLGÁLTATÁSOK

Beszélj NPC-kkel a kereskedéshez.
*   **Alkudozás:** A **Kereskedés** képességed (Karizmán alapul) határozza meg az árakat. Ha csúnya vagy, vagy ellenszenves, átvernek.
*   **Eladás:** **Jobb klikkel** egy tárgyra az inventory-ban, hogy eladd a kereskedőnek.

---

## 🎒 INVENTORY KEZELÉS (Tetris)

*   **Súly:** Van egy terhelési korlátod (Erő + Méret). Ha túl sok kacatot viszel magaddal, lassú leszel, és büntetést kapsz (Diogenész nem a barátod).
*   **Panelek:**
    *   **Felszerelés:** Amit viselsz.
    *   **Öv:** Gyors hozzáférés harcban (kevesebb időt vesz igénybe innen használni a bájitalokat).
    *   **Hátizsák:** A zsák mélye.
*   **Gyors Használat:** Húzd a bájitalt vagy ételt közvetlenül **az arcodra** (a portréra) az azonnali fogyasztáshoz.

---

## 🛠️ VÉGSŐ BEÁLLÍTÁSOK

A **Beállítások** menüben mindent módosíthatsz:
*   **🌍 Nyelv:** A MI valós időben fordít neked mindent és a válaszokat.
*   **👁️ Megjelenés:** Betűméret és színek, hogy ne vakulj meg.
*   **🧠 MI Beállítások:** Válts modelt, hőmérsékletet stb.

---

## 🚧 Figyelmeztetés: Korai Hozzáférés

A RolemIAster **aktív fejlesztés alatt áll**, lassan fő.
*   Találhatsz hibákat (vagy "váratlan funkciókat").
*   Minden héten új dolgokat adok hozzá.
*   A visszajelzésed aranyat ér! Mondd el, mi tetszik, és mi tetszik nagyon.

Most pedig menj, dobj kezdeményezést, és alkosd meg a legendádat!

<!-- source_hash: 2511f352 -->