# 🐉 Üdvözöljük a RolemIAsterben!

Ragadd meg a kockáidat (vagy az egeredet), és készülj fel kalandokra, ahol az egyetlen határ a képzeleted elborultsága! A **RolemIAster** egy mesterséges intelligencia által hajtott, végtelen szerepjáték, amely lehetővé teszi, hogy saját történeteid hőse (vagy gonosztevője) legyél.

---

## ⚠️ JOGI NYILATKOZAT (Az unalmas, de szükséges rész)

**OLVASD EL, VAGY SZÁMÍTS A KOCKÁK HARAGJÁRA:**

1.  **🤖 Beépített Helyi MI:** A RolemIAster saját digitális aggyal rendelkezik. **Internet nélkül** működik, és nem kell semmit sem bonyolultan beállítanod. Csak telepítsd és játssz!
2.  **☁️ Opcionális Felhő:** Ha inkább pénzt költenél külső MI-kre (OpenAI, Gemini...), akkor a te dolgod. A költségek téged terhelnek.
3.  **🎲 Generatív Káosz:** Az MI menet közben találja ki a történetet. Ha a narrátor megőrül, és azt mondja, hogy tehenek esnek az égből, ne minket nézz. A fejlesztő nem vállal felelősséget a modell által generált őrületekért.
4.  **🏗️ Korai Hozzáférés:** Ez még fejlesztés alatt áll. Ha hibát találsz, az nem egy hiba, hanem egy meglepetés "funkció"! (Kérlek, küldj visszajelzést, nagyon sokat segít!)

---

## 🖥️ RENDSZERIGÉNYEK ÉS DIGITÁLIS Agyak (MI)

A RolemIAster **Helyi Mesterséges Intelligenciával** működik. Ez azt jelenti, hogy a számítógéped végzi el a gondolkodás nehéz munkáját. Nincs szükséged internetre, de annál inkább egy nem dinoszaurusz korabeli videokártyára. (Megjegyzés: Ha hideg van a szobádban, ez a játék ingyenes fűtésként működik.)

### ⚙️ Fogalmak kezdőknek

A **VRAM (Videó Memória)** az MI üzemanyaga.
*   A **TurboQuant**nak köszönhetően a RolemIAster mostantól **több mint 100 000 szót (tokent)** tud megjegyezni – csaknem háromszor annyit, mint korábban – anélkül, hogy tönkretenné a grafikus kártyádat.
*   Ha a GPU-d kifogyna a memóriából, a játék lassabb lesz, mint egy asztmás csiga.

---

### 📊 MODELLKATALÓGUS (Válaszd ki a méreged)

Kezeld az MI-idet a **Konfiguráció → Beépített Helyi MI → Modellek kezelése** menüben.

#### 🏆 Qwen 3.5 Család — Kifejezetten a RolemIAsterhez képzett

Ezek a modellek **Felügyelt Finomhangolással (SFT)** lettek kiképezve a játék narratív szabályainak elsajátítására. Nem általános modellek: ismerik a RolemIAster JSON szerződését, az NPC-ket, a leltárt és a harcot kívülről.

| Modell | Méret | Minimális VRAM | Szint | Ítélet |
|--------|---------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **A Gyors. ** Mind közül a leggyorsabb. Ideális alap grafikus kártyákhoz vagy GPU nélküli játékhoz. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **AZ EGYENSÚLYOZOTT.** Optimális sebesség és minőség. Az alap modell, ajánlott a legtöbb játékos számára. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **A Narrátor.** Gazdag narratíva és kiváló koherencia. Akiknek van RTX 3070-ük vagy jobbjuk. |

---

### 🎮 GYORS VÁLASZTÁSI ÚTMUTATÓ

| Grafikus kártyád | VRAM | Ajánlott modell | Eredmény |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Nincs GPU | 4GB | **Qwen3.5-2B** | 🆗 Csak éppen játszható, nagyon éppen... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Jó élmény |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Gyors és pontos |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Az ideális élmény |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maximális minőség, szupergyors válaszok |

**💡 Pro Tipp:** Mindig hagyj **körülbelül 2 GB VRAM-ot szabadon** az operációs rendszer számára, különben a Windows sírni fog és bezár minden dolgot.

---

### 🚨 SEGÍTSÉG! A PC-M LASSÚ! (VRAM problémák)

Ha a játék lassabban válaszol, mint a szerelmed WhatsAppon, valószínűleg kifogytál a VRAM-ból.

**Tünetek, hogy túl sok voltál:**
1.  **A modell az RAM-ba ömlik:** A PC a normál memóriát használja a grafikus helyett. Eredmény: EXTRÉM LASSULÁS.
2.  **Kisebb túlcsordulás (1-2 GB):** Válaszonként 30-60 másodpercet fog tartani.
3.  **Mérsékelt túlcsordulás (3-5 GB):** 2-5 perc. Elmehetsz kávéért.
4.  **Súlyos túlcsordulás:** 10-30 perc. Játszhatatlan.

#### 🛡️ Vészhelyzeti Protokoll
Ha rosszul mennek a dolgok, kövesd ezeket a lépéseket sorrendben:

1.  **📉 Csökkentsd a VRAM %-ot:** Menj a Konfigurációba, és állítsd **85%-ra**. Indítsd újra és próbáld meg.
2.  **🧹 Tisztítás:** Zárd be azt a böngészőt 40 füllel. Eszik a memóriádat.
3.  **🛑 A 70%-os Határ:** Soha ne csökkentsd **70%** alá a hozzárendelt VRAM-ot.
    *   *Miért?* Mert az MI-nek szüksége van helyre a "gondolkodáshoz" (a KV gyorsítótár). Ha kevesebbet adsz neki, mint 70%, üres lesz, és hibát fog adni.
4.  **🔙 Taktikai Visszavonulás:** Ha semmi sem működik, válts kisebb modellre (menj át 9B-ról 4B-ra, vagy 4B-ról 2B-ra).

---

### ⚙️ HALADÓ MODELL KONFIGURÁCIÓ ("Maximális Buzgóság")

> **SZAKÉRTŐ MÓD:** Ha profi vagy, és hozzá szeretnél férni a fejlett modellkonfigurációkhoz (saját, HuggingFace-ról letöltött GGUF modellek hozzáadása, rétegek módosítása stb.), akkor a játékot a következő paranccsal kell indítanod: `--advanced`.

Azoknak, akik szeretnek gombokat nyomogatni a **Konfiguráció → Beépített Helyi MI** menüben:

| Opció | Funkció | Ajánlás |
|--------|---------|---------------|
| **GPU rétegek** | Mennyi modell töltődik be a grafikus kártyára | **-1** (Jelentése: "MINDEN". Ne érj hozzá, hacsak nem tudod, mit csinálsz) |
| **Maximális Kontextus** | Az MI "rövid távú memóriája" | **16384 - 32768** (Kevesebb ennél, és az MI amnéziás lesz) |
| **Hőmérséklet** | Kreativitás vs. Őrültség | **0.7 - 0.8** (Magasabb = őrültebb; Alacsonyabb = robotikusabb) |
| **Történelem RAG** | Régi dolgok megjegyzése | **Igen** (Elengedhetetlen hosszú kampányokhoz) |
| **Embeddings gyorsítótárazása** | Gyorsítja az emlékek keresését | **Igen** (Gyorsabbá teszi) |

---

### 🔧 PROBLÉMAELHÁRÍTÁS (Troubleshooting)

| Hiba | Javítás |
|-------|---------|
| **Lassú MI / Lag** | Ellenőrizd, hogy a `GPU Layers` -1 legyen. Zárd be a Chrome-ot. Csökkentsd a `Contexto Máximo` értékét. |
| **Memória hiba (OOM)** | Csökkentsd a `Contexto Máximo` értéket, vagy válassz kisebb modellt (3B). |
| **Az MI beszél / hallucinál** | Csökkentsd a `Temperatura` értéket 0.6-ra. Ha még mindig őrült, indítsd újra az alkalmazást. |

---

### 🌐 ALTERNATÍV SZOLGÁLTATÓK (Csak szakértőknek)

> **Megjegyzés:** A játékba épített helyi MI elegendő és bőséges. Ez csak haladó vagy bátor felhasználók számára készült.

*   **Külső Helyi Motorok:**
    *   **Ollama / LM Studio:** Ha már rendelkezel saját, elborult modelljeiddel, használhatod őket.
*   **Felhő API-k (Fizetős):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Internetet és pénzt igényel.
    *   Konfigurálhatod itt: **Konfiguráció → MI → Új Szolgáltató hozzáadása**.

---

### 🌍 HOGYAN JÁTSZUNK? (A Multiverzum és Te)

Amikor elindítod a játékot, két út áll előtted:

1.  **🆕 Új Kaland**: Hozd létre a legendádat a nulláról. A játék kérni fogja a **Nevedet, Hivatásodat, Fizikai Leírásodat, Pszichológiai Leírásodat és a történeted Háttérét/Indokát**. Ezenkívül kiválasztod a **Nehézségi Szintet** és a **Humor Tónusát**, amelyek irányítják a kampányt.
2.  **💾 Folytatás Mentett Játékból**: A RolemIAster **valós időben ment**. Itt nincs "mentés halál előtt" vagy visszalépés. Minden döntés, minden hiba és minden sebesség be van égve a történetbe. Ez egy ** kihívás**: amit teszel, meg van téve. Élj a következményekkel... vagy halj meg velük.

A RolemIAster nem egy elszigetelt játék; ez egy **Állandó Multiverzum**.
*   **Végtelen Világok:** Hozz létre saját univerzumokat (**Középkori Fantázia** vagy **Cyberpunk**) saját Lore-ral.
*   **Végtelen Karakterek:** Minden világban annyi hőst tarthatsz meg, amennyit csak akarsz.
*   **Megosztott Idővonal:** Vigyázat! Amit egy karakter tesz, az hatással van a többiek világára. Az MI tudatában van más hőseidnak, és ismerni fogja őket a világ lakóiként.
*   **MI "Érzékekkel" (Szuper RAG):** A RAG (Retrieval-Augmented Generation) rendszer úgy működik, mint az MI "súgógépe", emlékképeket adva neki a világról, arról, hogy ki kísér téged, hol vagy, és mi történt nemrég, hogy a történet 100%-ban koherens legyen.

### Az Interfész (A te irányítófülkéd)

*   **Bal Panel (TE):** A karakterlapod. Élet, manna, képességek és milyen jóképű vagy (Karizma).
*   **Középső Panel (A TÖRTÉNET):**
    *   **Fent:** Ahol a narrátor elmondja, mi történik.
    *   **Lent:** Döntésgombjaid és a szövegdoboz, ahová bármit írhatsz, amit tenni szeretnél.
*   **Jobb Panel (A TE HOLMIJAID):** Leltár és felszerelés. A digitális diágenesz paradicsoma.

---

## 📜 JÁTSZABÁLYOK (Igen, vannak szabályok)

A RolemIAster egy klasszikus és robusztus d100 (százoldalú kocka) rendszert használ.

### 1. Az Attribútumaid (Ami definiál téged)
Az MI a megadott kontextus, hivatás és leírás alapján generálja az attribútumaidat. Miután generálta őket, **10 EXTRA PONTOD** van arra, hogy kedved szerint szétosztd.
*   **Lépcsőzetes Költségek:** Egy attribútum 14-ig emelése 1 pontba kerül. 15-től 16-ig 2 pontba kerül. 17-től kezdve 3 pontba kerül! Gondold át jól, hova teszed az erőt.

*   💪 **Erő (ERŐ):** Tisztán fizikai erőnléted. Hatással van a közelharci sebzésre és a teherbíró képességedre.
*   ❤️ **Alkotmány (ALK):** Ellenállóképességed. Ütések, betegségek és mérgek elviselésére.
*   🐘 **Méret (MÉRET):** A testalkatod. Nagy és nehéz, vagy kicsi és furfangos.
*   🏃 **Ügyesség (ÜGY):** Agilitás, célzás és az, hogy ne botolj meg a saját lábadban.
*   🧠 **Intelligencia (INT):** Tanulás, emlékezés és rejtvények megoldása.
*   🔮 **Akaraterő (AKAR):** A lelked, a szerencséd, az akaraterőd és a varázserő-tartalékod.
*   😎 **Karizma (KAR):** Vezetés, vonzerő és az emberek megtévesztésének (vagy elcsábításának) képessége.

### 2. Gyors Matematika (Származtatott Jellemzők)
A motor automatikusan kiszámítja ezeket az értékeket az attribútumaid alapján:

*   🩸 **Élet (ÉLET):** `CON * 10`. Ha 0-ra csökken... nos, tudod. F.
*   ✨ **Manna (MANNA):** `(POD * 10) + INT`. A varázslataid üzemanyaga. Manna nélkül nincsenek varázslatok. (Egy manna nélküli varázsló csak egy köpenyes ember, aki cosplayezik).
*   ⚡ **Kitartás (KIT):** `((CON+FUE+DES)/3)*10 + POD`. Az energiád a harcra és mozgásra anélkül, hogy megpróbálnád megölni magad.
*   🧠 **Emberiség (EMB):** `(CON+POD) * 5`. (Csak Cyberpunkban: Méri, mennyi maradt belőled ember, mielőtt a kábelek megőrjítenének).
*   ⚔️ **Akció Pontok (AP):** `(INT + DES) / 2`. Meghatározza a kezdeményezésedet. Aki először üt, kétszer üt.

### 3. A Képességeid
Egy alapértékkel indulnak (pl. Lopakodás = ÜGY + INT) és használatukkal javulnak. Százalékos értékben (%-ban) vannak kifejezve.

### 4. Cselekvés Feloldása (A Kocka)
Amikor kockázatos dolgot próbálsz megtenni (mászás, hazudozás, támadás...), az MI egy dobást kér. A játék egy láthatatlan **d100**-at dob. **(Emlékeztető: A kockák utálnak. Személyes.)**

*   **A Célod:** Egy ** a képzettséged szintjénél KISEBB VAGY EGYENLŐ** számot dobni.
    *   *Példa:* Mászásban 45%-os vagy.
    *   Dobsz egy 30-at: ✅ **Siker**. Majomként mászol fel.
    *   Dobsz egy 80-at: ❌ **Hiba**. Megütöd magad.
    *   **Kritikus:** A képzettséged **1/5-ödénél vagy annál kisebb** számot dobsz (vagy egy 01-est). Epikus! Csodálatos parkourt csinálsz egy szaltóval.
    *   **Kudarc:** Egy **99 vagy 100**. A kockák eldöntötték, hogy ma nem a te napod. Leesnek a nadrágjaid félúton, és arccal előre esel.

---

## 💡 TANÁCSOK A NEM HALÁLHOZ (GYORSAN)

*   **✍️ Legyél Leíró:** Ne írj csak annyit, hogy "támadok". Írd le: *"Megpróbálom elkerülni a fejszéjét a földön gurulva, és a bokájába szúrom a tőröm."* Az MI díjazni fogja.
*   **🧪 Kísérletezz:** Nem vagy korlátozva a gombokra. Írj elborult dolgokat! Az MI improvizálni fog.
*   **🎭 Szerepjátszás:** Lépj a karaktered szerepébe. Olvasd el a leírásokat, és cselekedj úgy, ahogyan a karaktered tenné, nem úgy, ahogyan te tennéd pizsamában.

---

## ⚔️ A HARC (Fegyverbe!)

Amikor a szavak elbuknak, eljön az ütés ideje. A harc **taktikus** és **Tickek** (idő) szerint működik.

### 🕹️ Hogyan működik:
*   **Tickek:** Minden cselekvés időt vesz igénybe. A nehéz fegyverek lassúak (sok ticket fogyasztanak). A tőrök gyorsak.
*   **A Te Sebességed:** Az Akció Pontjaidtól (AP) függ.

### Alapvető Cselekvések:
*   **🗡️ Támadás:** Üsd meg, amivel épp kivontad.
*   **🛡️ Blokkolás:** Védekezésbe lendülsz. Csökkenti a sebzést, de fogyasztja a kitartást.
*   **🏃 Elmenekülés:** Gyávák számára (vagy bölcs emberek számára, akik élni akarnak).
*   **🏳️ Megadás:** Ha látod, hogy nem nyersz, könyöröghetsz kegyelemért.
*   **✨ Varázslat / Cyberware:** Tűz, lézersugarak, hackelések...

### 💬 Szabad Szöveges Cselekvések (ÚJ!)
Nem szereted a gombokat? Írd le, mit akarsz tenni, mintha egy hús-vér mesterrel beszélnél!
*   **Példák:** *"Tűzlabdát dobok a goblinra"*, *"Kihúzom a rúnás kardomat"*, *"Használok egy varázsitalt magamon"*.
*   **Rendező:** A harc most életre kel. Az MI környezeti eseményeket és reakciókat generál, amelyek gazdagítják a narratívát: leeső gerendák, visszavonuló ellenségek, lehulló fáklyák. A csatatér már nem statikus!
*   **Ha az MI nem érti:** Újra megfogalmazást kér. A te köröd NEM vész el!
*   **⚠️ Korlátozás:** Tárgyak mozgatása a slotok között (felszerelés a hátizsákból, lőszer betöltése) **Drag & Drop** módon történik az interfészen, nem szöveggel.

### ⚠️ ARANYTÜZELÉSI SZABÁLY
**VONJ ELŐBB A FÉMSZERET, MIELŐTT HARCOLNÁL!**
A fegyver kihúzása a harc közepén időt (Tickeket) fogyaszt. Ha a kardod hüvelyében kapnak el, addig ütnek, amíg csak lehet az igazolványodon, amíg ügyetlenül próbálod kihúzni. VAGY ROSSZABB ESETBEN!, HA A FELSZERELÉSI SLOTOD HELYETT A HÁTIZSÁKODBAN VANNAK A FELSZERELÉSEID (Elnézést, csak ki kell húznom a kardot a hátizsákból, tudom, hogy itt volt valahol... valahol...) 🤦‍♂️
👉 Kattints a felszerelt fegyver címkéjére (jobb panelen) a kihúzásához. Zölden világít majd.

A fegyverek mozgatása harc közben időt (Tickeket) fogyaszt, és meglepetésszerű támadással járhat, ráadásul nagyon valószínű, hogy elveszted a körödet, mert az arcodhoz közeledő fejsze idegességétől hibázol, vagy elejted. (Talán nem volt jó ötlet TDAH-s karaktert létrehozni)

---

## ✨ VARÁZSLAT ÉS CIBERNETIKA

Attól függően, hogy a világod "Középkori Fantázia" vagy "Cyberpunk":

### 🧙‍♂️ Fantázia: Bűbáj
Varázsló vagy? Megvarázsolhatod a felszerelésedet.
1.  **Tanuld meg:** Szükséged van a varázslatra a grimoárban.
2.  **Dobd el (Drag & Drop):** Húzd a varázslatot a listádból az elemre a leltáradban.
3.  **Költség:** Egy varázslat aktívan tartása **Manna-t fogyaszt körönként**.
4.  **Figyelmeztetés:** Ha harc közben kifogy a mannádból, a tűzkard újra egy rozsdás vastömb lesz.

### 🦾 Cyberpunk: Implantátumok
Szeretnél zoomos szemeket vagy gorilla karokat?
1.  Keress egy **Techno-sebészt** (NPC szolgálattal).
2.  Fizess a kreditekért (semmi sem ingyenes a jövőben).
3.  **Emberiség Költsége:** Minden implantátum elvesz egy darabot a lelkedből (**Emberiség**).
    *   Ha túl sokat teszel be, **Cyberpszichóvá** válsz (egy gyilkos lábas toaster) és elveszted az irányítást a karaktered felett.

---

## 🛒 BOLTOK ÉS SZOLGÁLTATÁSOK (SIS)

Beszélj NPC-kkel a kereskedéshez.
*   **Az MI Javasol, Te Döntesz:** Amikor egy kereskedővel vagy gyógyítóval beszélsz, az MI javasolni fogja a szolgáltatásait (javítás, eladás, gyógyítás), de megjelenik egy **"Szolgáltatások megtekintése"** gomb, hogy te döntsd el, mikor lépsz be a tranzakciós módba.
*   **Alkudozás:** A **Kereskedés** képességed (a Karizmán alapul) határozza meg az árakat. Ha csúnya vagy vagy barátságtalan, átvernek.
*   **Eladás:** **Jobb egérgombbal** kattints egy elemre a leltáradban, hogy eladd a kereskedőnek, vagy húzd rá.

---

## 🎒 LELTÁR KEZELÉS (Tetris)

*   **Súly:** Teherbíró képességed korlátozott (Erő + Méret). Ha túl sok kacatot cipelsz, lassú leszel és büntetést kapsz (Diogenész nem a barátod).
*   **Panelek:**
    *   **Felszerelés:** Amit viselsz.
    *   **Öv:** Gyors hozzáférés harcban (kevesebb időt fogyaszt a bájitalok használata innen).
    *   **Hátizsák:** A zsák alja.
*   **Folyékony Használat:** Húzz egy bájitalt vagy ételt közvetlenül az **arcodra** (a portréra) az azonnali fogyasztáshoz. A kontextusmenüt (jobb egérgomb -> Használat) is használhatod.

---

## 🛠️ VÉGSŐ BEÁLLÍTÁSOK

A **Konfiguráció** menüben mindent módosíthatsz:
*   **🌍 Nyelv:** Az MI lefordítja az egész játékot és a válaszokat menet közben. Poliglott mód aktiválva.
*   **👁️ Megjelenés:** Betűméret és színek, hogy ne vakulj meg. Neon keretek és lágyított árnyékok a teljes elmélyülésért.
*   **🧠 MI Beállítások:** Váltás modellek között, hőmérséklet stb. (Emlékezz arra, amit a kézikönyv elején láttál a `--advanced` jelzővel kapcsolatban, ha azok közé tartozol, akik mindent módosítani akarnak).

---

## 🎭 NEHÉZSÉG ÉS HUMOR (Szenvedésed személyre szabása)

Mielőtt elkezdenél, emlékezz arra, hogy az MI nem csak narrál, hanem **igazítja a világot** az elvárásaid szerint. Ezek a paraméterek a világ létrehozásakor választhatók, és az adott világra nézve állandóak:

*   **🎮 Nehézség (MI által vezérelve):** Nem egyszerű sebzés szorzó. A játék azt mondja az MI-nek: "Hé, ez a nehézségi szint, ennek megfelelően cselekedj."
    *   **Könnyű:** Soha nem fogsz meghalni (vagy szinte lehetetlen lesz), a helyzetek egyszerűbbek, az árak olcsóbbak, és az ellenségek ügyetlenebbek. Az MI minden jelenetet logikusan fog felépíteni, hogy az utad rózsákkal legyen kikövezve.
    *   **Normál:** Az alap egyensúly.
    *   **Kihívás:** Az MI könyörtelen lesz, az árak megfizethetetlenek, és bármilyen hiba lehet az utolsó.

*   **🃏 Humor Tónus:** Meghatározza, hogyan beszél veled az MI, és milyen típusú események történnek. Bár minden modellnek megvan a maga módja a "humor" fogalmának értelmezésére, az MI megpróbál alkalmazkodni ahhoz, amit választasz... vagy nem:
    *   **Komoly:** Epikus, sötét és formális narratíva.
    *   **Szarkasztikus:** Az MI nevetni fog a hibáidon, folyamatosan szurkál téged, és ironikus hangnemet használ.
    *   **Deliráns:** Készülj fel az abszurditásra. Repülő tehenek, szürreális helyzetek és teljes káosz, amit az MI legcsavarosabb logikája kezel.

---

## 🚧 Figyelem: Korai Hozzáférés

A RolemIAster **aktív fejlesztés alatt** áll, lassú tűzön fő.
*   Találhatsz hibákat (vagy "váratlan funkciókat").
*   Minden héten új dolgokat adok hozzá.
*   A visszajelzésed aranyat ér! Mondd el, mit szeretsz, és mit szeretsz nagyon. (Ha valamit nem szeretsz, mondd el azt is, de szeretettel.)

Most menj, dobj kezdeményezést, és alkosd meg a legendádat!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->