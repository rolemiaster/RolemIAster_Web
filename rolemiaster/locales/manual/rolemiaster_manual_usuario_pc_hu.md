# 🐉 Üdvözöl a RolemIAsterben!

Ragadd meg a kockáidat (vagy az egeredet), és készülj fel a kalandokra, ahol az egyetlen határ a kifacsart képzeleted! A **RolemIAster** egy Mesterséges Intelligencia által vezérelt végtelen szerepjáték, amely lehetővé teszi, hogy saját történeteid hőse (vagy gonosztevője) legyél.

---

## ⚠️ JOGI NYILATKOZAT (Az unalmas, de szükséges rész)

**OLVASD EL, VAGY SZEMBENÉZEL A KOCKÁK HARAGJÁVAL:**

1.  **🤖 Beépített Helyi MI:** A RolemIAster saját digitális aggyal érkezik. **Internet nélkül** működik, és nem kell semmi furcsához nyúlnod. Telepítés és játék!
2.  **☁️ Opcionális Felhő:** Ha inkább külső MI-kre (OpenAI, Gemini...) költenéd a pénzed, a te dolgod és a te hitelkártyád. A költségek téged terhelnek.
3.  **🎲 Generatív Káosz:** Az MI menet közben találja ki a történetet. Ha a narrátor megőrül, és azt mondja, hogy tehenek potyognak az égből, ne ránk nézz. A fejlesztő nem vállal felelősséget a modell által generált őrültségekért.
4.  **🏗️ Early Access (Korai Hozzáférés):** Ez még építés alatt áll. Ha találsz egy bugot, az nem hiba, hanem egy meglepetés "feature"! (Kérlek, küldj visszajelzést, sokat segít).

---

## 🖥️ RENDSZERKÖVETELMÉNYEK ÉS DIGITÁLIS AGYAK (MI)

A RolemIAster **Helyi Mesterséges Intelligenciával** működik. Ez azt jelenti, hogy a számítógéped végzi a gondolkodás nehéz munkáját. Nincs szükség internetre, de szükséged van egy videókártyára, ami nem a dinoszauruszok korából származik. (Megjegyzés: Ha hideg van a szobádban, ez a játék ingyen fűtésként is szolgál).

### ⚙️ Fogalmak kezdőknek

A **VRAM (Videómemória)** az MI üzemanyaga.
*   A RolemIAsternek emlékeznie kell **12 000 - 16 000 szóra (tokenre)**, hogy ne veszítse el a fonalat a történetben.
*   Ha a GPU-d kifogy a memóriából, a játék lassabb lesz, mint egy asztmás csiga.

---

### 📊 MODELLKATALÓGUS (Válassz mérget)

Kezeld az MI-ket itt: **Beállítások → Beépített Helyi MI → Modellek Kezelése**.

#### 🏆 Qwen 2.5 Család (A krémek krémje)

| Modell | Méret | Minimum VRAM | Tier | Ítélet |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **A Gyakornok.** Teljesít, de ne kérd tőle, hogy Shakespeare-t írjon. Néha belekavarodik. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **A KIVÁLASZTOTT.** Kiegyensúlyozott, okos és gyors. Ez az alapértelmezett ajánlott modell. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **A Professzor.** Gazdag, mély narratíva és nagyon természetes párbeszédek. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Isteni Szint.** Egy űrhajó (RTX 3090/4090) kell a futtatásához. |

---

### 🎮 GYORSVÁLASZTÁSI ÚTMUTATÓ

| Videókártyád | VRAM | Ajánlott Modell | Eredmény |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Épphogy, de játszható (Alacsony kontextus) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Jól megy |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Hasít |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Az ideális élmény |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luxus |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximális minőség |

**💡 Pro Tipp:** Mindig hagyj szabadon kb. **2GB VRAM-ot** az operációs rendszernek, különben a Windows elkezd sírni és bezárni dolgokat.

---

### 🚨 SEGÍTSÉG! LASSÚ A GÉPEM! (VRAM Problémák)

Ha a játék lassabban válaszol, mint a szerelmed WhatsAppon, valószínűleg kifogytál a VRAM-ból.

**Tünetek, ha túl nagyot vállaltál:**
1.  **A modell átvált RAM-ra:** A PC a normál memóriát használja a grafikus helyett. Eredmény: EXTRÉM LASSÚSÁG.
2.  **Enyhe túlcsordulás (1-2GB):** 30-60 másodpercet vesz igénybe válaszonként.
3.  **Mérsékelt túlcsordulás (3-5GB):** 2-5 perc. Elmehetsz egy kávéért.
4.  **Súlyos túlcsordulás:** 10-30 perc. Játszhatatlan.

#### 🛡️ Vészhelyzeti Protokoll
Ha rosszul mennek a dolgok, kövesd ezeket a lépéseket sorrendben:

1.  **📉 Csökkentsd a VRAM %-ot:** Menj a Beállításokba, és vedd le **85%**-ra. Indítsd újra és próbáld ki.
2.  **🧹 Takarítás:** Zárd be a böngészőt, amiben 40 lap van nyitva. Zabálják a memóriádat.
3.  **🛑 A 70%-os Határ:** Soha ne menj **70%** alá a kiosztott VRAM-nál.
    *   *Miért?* Mert az MI-nek térre van szüksége a "gondolkodáshoz" (a KV cache). Ha 70%-nál kevesebbet adsz neki, lefagy és hibát dob.
4.  **🔙 Taktikai Visszavonulás:** Ha semmi sem működik, válts kisebb modellre (válts 7B-ről 3B-re).

---

### ⚙️ HALADÓ MODELLBEÁLLÍTÁSOK ("Maximális Geekkedés")

> **SZAKÉRTŐ MÓD:** Ha profi vagy, és hozzá szeretnél férni a haladó modellbeállításokhoz (saját GGUF modellek hozzáadása a HuggingFace-ről, rétegek módosítása stb.), a játékot a következő paranccsal kell indítanod: `--advanced`.

Azoknak, akik szeretnek gombokat nyomogatni a **Beállítások → Beépített Helyi MI** menüpontban:

| Opció | Funkció | Ajánlás |
|--------|---------|---------------|
| **GPU Layers** | A modell mekkora része töltődik be a kártyára | **-1** (Azt jelenti: "MINDENT". Ne nyúlj hozzá, hacsak nem tudod, mit csinálsz) |
| **Maximális Kontextus** | Az MI "rövid távú memóriája" | **16384 - 32768** (Ez alatt az MI amnéziás lesz) |
| **Hőmérséklet** | Kreativitás vs Őrület | **0.7 - 0.8** (Magasabb = őrültebb; Alacsonyabb = robotikusabb) |
| **Előzmény RAG** | Emlékezés régen történt dolgokra | **Igen** (Hosszú kampányokhoz elengedhetetlen) |
| **Embeddingek Cache-elése** | Gyorsítja az emlékek keresését | **Igen** (Gyorsabbá teszi a működést) |

---

### 🔧 HIBAELHÁRÍTÁS (Troubleshooting)

| Baki | Megoldás |
|-------|---------|
| **Lassú MI / Lag** | Ellenőrizd, hogy a `GPU Layers` értéke -1. Zárd be a Chrome-ot. Csökkentsd a `Contexto Máximo` értékét. |
| **Memóriahiba (OOM)** | Csökkentsd a `Contexto Máximo` értékét, vagy válassz kisebb modellt (3B). |
| **Az MI félrebeszél / Hallucinál** | Vedd le a `Temperatura` értékét 0.6-ra. Ha továbbra is őrült, indítsd újra az alkalmazást. |

---

### 🌐 ALTERNATÍV SZOLGÁLTATÓK (Csak Szakértőknek)

> **Megjegyzés:** A játékhoz mellékelt helyi MI bőven elég. Ez csak haladó vagy bátor felhasználóknak szól.

*   **Külső Helyi Motorok:**
    *   **Ollama / LM Studio:** Ha már vannak saját geek modelljeid, használhatod őket.
*   **Felhő API-k (Fizetős):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Internetet igényel és pénzbe kerül.
    *   Beállítás itt: **Beállítások → MI → Új Szolgáltató Hozzáadása**.

---

### 🌍 HOGYAN JÁTSSZ? (A Multiverzum és Te)

A játék megnyitásakor két út áll előtted:

1.  **🆕 Új Kaland**: Hozd létre legendádat a nulláról. A játék kérni fogja a **Nevet, Foglalkozást (Hivatást), Fizikai Leírást, Pszichológiai Leírást és a Történeted hátterét/ürügyét**. Ezenkívül kiválasztod a **Nehézségi Szintet** és a **Humor Tónusát**, amelyek vezérlik a kampányt.
2.  **💾 Játék Folytatása**: A RolemIAster **valós időben ment**. Itt nincs "visszatöltés halál előtt" vagy visszaút. Minden döntés, minden baki és minden seb tűzzel íródik a történetbe. Ez egy **KIHÍVÁS**: amit tettél, megtörtént. Élj együtt a következményekkel... vagy halj meg velük.

A RolemIAster nem egy elszigetelt játék; ez egy **Perzisztens Multiverzum**.
*   **Végtelen Világok:** Hozz létre saját univerzumokat (**Középkori Fantasy** vagy **Cyberpunk**) saját Lore-ral.
*   **Végtelen Karakter:** Minden világon belül annyi hősöd lehet, amennyit csak akarsz.
*   **Megosztott Idővonal:** Figyelem! Amit az egyik karakter tesz, az hatással van a többiek világára. Az MI tudatában van a többi hősödnek, és felismeri őket a világ lakóiként.
*   **MI "Érzékekkel" (Szuper RAG):** A RAG rendszer (Retrieval-Augmented Generation) az MI "súgójaként" működik, emlékeket adva neki a világról, arról, hogy ki van veled, hol vagy és mi történt éppen, hogy a történet 100%-ban koherens legyen.

### A Kezelőfelület (A pilótafülkéd)

*   **Bal Panel (TE):** Karakterlapod. Élet, mana, képességek és hogy milyen jóképű vagy (Karizma).
*   **Középső Panel (A TÖRTÉNET):**
    *   **Fent:** Ahol a narrátor elmeséli a történéseket.
    *   **Lent:** A döntési gombok és a szövegdoboz, ahová beírhatod, mit szeretnél tenni.
*   **Jobb Panel (A CUCCOID):** Felszerelés és tárgyak. A digitális Diogenész paradicsoma.

---

## 📜 JÁTÉKSZABÁLYOK (Igen, vannak szabályok)

A RolemIAster egy klasszikus és robusztus d100 (százoldalú kocka) rendszert használ.

### 1. Tulajdonságaid (Ami meghatároz)
Az MI a kontextus, a hivatás és a megadott leírás alapján generálja a tulajdonságaidat. A generálás után **10 EXTRA PONTOD** van, amit tetszés szerint eloszthatsz.
*   **Lépcsőzetes Költségek:** Egy tulajdonság növelése 14-ig 1 pontba kerül. 15-ről 16-ra 2 pontba. 17-től felfelé 3 pontba! Jól gondold meg, hova teszed az izmot.

*   💪 **Erő (ERŐ):** A tiszta fizikai erőd. Befolyásolja a közelharci sebzést és a teherbírást.
*   ❤️ **Állóképesség (ÁLL):** Az ellenálló képességed. Ütések, betegségek és mérgek elviselésére.
*   🐘 **Méret (MÉR):** A testalkatod. Nagy és nehéz, vagy kicsi és fürge.
*   🏃 **Ügyesség (ÜGY):** Fürgeség, célzás és hogy ne ess el a saját lábadban.
*   🧠 **Intelligencia (INT):** Tanulás, emlékezés és rejtvények megoldása.
*   🔮 **Hatalom (HAT):** A lelked, a szerencséd, az akaraterőd és a mágikus tartalékod.
*   😎 **Karizma (KAR):** Vezetés, vonzerő és az emberek megtévesztésének (vagy elcsábításának) képessége.

### 2. Gyors Matek (Származtatott Értékek)
A motor automatikusan kiszámítja ezeket a számokat a tulajdonságaid alapján:

*   🩸 **Életerő (ÉP):** `CON * 10`. Ha eléri a 0-t... nos, tudod. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Üzemanyag a bűvésztrükkjeidhez. Mana nélkül nincsenek trükkök. (Egy mágus mana nélkül csak egy köpenyes fickó, aki cosplayezik).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Az energiád a harchoz és a mozgáshoz, anélkül, hogy belehalnál a próbálkozásba.
*   🧠 **Emberség (EMB):** `(CON+POD) * 5`. (Csak Cyberpunkban: Azt méri, mennyi maradt meg belőled embernek, mielőtt a kábelek megőrjítenek).
*   ⚔️ **Akciópontok (AP):** `(INT + DES) / 2`. Meghatározza a Kezdeményezésedet. Aki először üt, kétszer üt.

### 3. Képességeid
Egy alapértékkel indulnak (pl.: Lopakodás = ÜGY + INT), és használattal fejlődnek. Ez egy százalékos érték (%).

### 4. Cselekvések Feloldása (A Kocka)
Amikor valami kockázatosat próbálsz tenni (mászni, hazudni, támadni...), az MI egy dobást kér. A játék eldob egy láthatatlan **d100**-at. **(Ne feledd: A kockák gyűlölnek téged. Ez személyes).**

*   **A Célod:** Egy **KISEBB VAGY EGYENLŐ** számot dobni, mint a képességszinted.
    *   *Példa:* 45% a Mászásod.
    *   Dobsz egy 30-at: ✅ **Siker**. Felmászol, mint egy majom.
    *   Dobsz egy 80-at: ❌ **Bukás**. Nagyot esel.
    *   **Kritikus:** A képességed **1/5-énél** (vagy 01-nél) kisebbet vagy egyenlőt dobni. Epikus! Rendkívüli parkour mutatványt hajtasz végre szaltóval.
    *   **Baki:** Egy **99 vagy 100**. A kockák úgy döntöttek, hogy ma nincs szerencséd. Félúton lecsúszik a nadrágod, és arccal a földre zuhansz.

---

## 💡 TIPPEK, HOGY NE HALJ MEG (GYORSAN)

*   **✍️ Légy Deszkriptív:** Ne írd csak azt, hogy "támadok". Írd azt: *"Megpróbálom elkerülni a fejszéjét egy gurulással, és bokán szúrom a tőrömmel"*. Az MI jutalmazni fog.
*   **🧪 Kísérletezz:** Nem korlátoznak a gombok. Írj őrültségeket! Az MI improvizálni fog.
*   **🎭 Szerepjátssz:** Éld bele magad a szerepbe. Olvasd el a leírásokat, és cselekedj úgy, ahogy a karaktered tenné, ne úgy, ahogy te pizsamában.

---

## ⚔️ HARC (Fegyverbe!)

Amikor a szavak csődöt mondanak, eljön a pofonok ideje. A harc **taktikus** és **Tickek** (időegységek) alapján működik.

### 🕹️ Hogyan működik:
*   **Tickek:** Minden cselekvés időbe kerül. A nehéz fegyverek lassúak (sok ticket fogyasztanak). A tőrök gyorsak.
*   **A Sebességed:** Az Akciópontjaidtól (AP) függ.

### Alapvető Cselekvések:
*   **🗡️ Támadás:** Üss azzal, ami éppen elő van véve.
*   **🛡️ Védekezés:** Védekező állást veszel fel. Csökkenti a sebzést, de Staminát fogyaszt.
*   **🏃 Menekülés:** Gyáváknak (vagy bölcseknek, akik élni akarnak).
*   **🏳️ Megadás:** Ha látod, hogy nem nyerhetsz, kegyelemért könyöröghetsz.
*   **✨ Mágia / Cyberware:** Tűz, lézersugarak, hackelés...

### 💬 Szabad Szöveges Cselekvések (ÚJ!)
Nem szereted a gombokat? Írd le, mit szeretnél tenni, mintha egy hús-vér Kalandmesterrel beszélnél!
*   **Példák:** *"Tűzlabdát dobok a goblinra"*, *"Előhúzom a rúna kardomat"*, *"Bájitalt használok magamon"*.
*   **Jelenetrendező:** A harc most életre kel. Az MI környezeti eseményeket és reakciókat generál, amelyek gazdagítják a narratívát: lezuhanó gerendák, hátráló ellenségek, leeső fáklyák. A csatatér többé nem statikus!
*   **Ha az MI nem érti:** Megkér, hogy fogalmazd újra. A köröd NEM vész el!
*   **⚠️ Korlátozás:** Tárgyak mozgatása a slotok között (felszerelés hátizsákból, lőszer betöltése) a felületen történő **Húzd és Etsd (Drag & Drop)** módszerrel történik, nem szöveggel.

### ⚠️ A TÚLÉLÉS ARANYSZABÁLYA
**HÚZD ELŐ A FEGYVERT HARC ELŐTT!**
A fegyver elővétele harc közben időt (Tickeket) emészt fel. Ha karddal a hüvelyben kapnak el, addig ütnek, amíg a személyi igazolványod is fájni fog, miközben te ügyetlenül próbálod előrángatni. VAGY MÉG ROSSZABB, HA A FEGYVEREID A HÁTIZSÁKBAN VANNAK A FELSZERELÉSI SLOT HELYETT (Elnézést egy pillanatra, ki kell vennem a pallost a hátizsákból, tudom, hogy itt volt valahol... valahol...) 🤦‍♂️
👉 Kattints **a felszerelt fegyver címkéjére** (jobb oldali panel), hogy előhúzd. Zölden fog világítani.

Fegyvereket mozgatni harc közben időt (Tickeket) igényel, és meglepetésszerű támadást eredményezhet, ráadásul nagyon valószínű, hogy elveszíted a kört, elvéted a szemöldököd felé közeledő fejsze miatti idegességtől, vagy leejted a földre. (Talán nem volt jó ötlet ADHD-s karaktert indítani).

---

## ✨ MÁGIA ÉS KIBERNETIKA

Attól függően, hogy a világod "Középkori Fantasy" vagy "Cyberpunk":

### 🧙‍♂️ Fantasy: Bűbájok
Varázsló vagy? Megbűvölheted a felszerelésedet.
1.  **Tanuld meg:** Szükséged van a varázslatra a varázskönyvedben.
2.  **Vesd be (Drag & Drop):** Húzd a varázslatot a listádról a tárgyra az eszköztáradban.
3.  **Költség:** Egy bűbáj fenntartása **körönként Manába kerül**.
4.  **Figyelmeztetés:** Ha harc közben kifogysz a manából, a tűzkard visszaváltozik egy darab rozsdás vassá.

### 🦾 Cyberpunk: Implantátumok
Zoomos szemeket vagy gorilla karokat akarsz?
1.  Keress egy **Technosebészt** (Szolgáltató NPC).
2.  Fizesd ki a krediteket (a jövőben semmi sincs ingyen).
3.  **Emberség Költség:** Minden implantátum kitép egy darabot a lelkedből (**Emberség**).
    *   Ha túl sokat rakatsz be, **Kiberpszichózis** (egy lábas gyilkos kenyérpirító) lesz úrrá rajtad, és elveszíted az irányítást a karaktered felett.

---

## 🛒 BOLTOK ÉS SZOLGÁLTATÁSOK (NPC-k)

Beszélj NPC-kkel a kereskedéshez.
*   **Az MI Javasol, Te Döntesz:** Amikor egy kereskedővel vagy gyógyítóval beszélsz, az MI javasolni fogja a szolgáltatásaikat (javítás, eladás, gyógyítás), de megjelenik egy **"Szolgáltatások Megtekintése"** gomb, hogy te dönthesd el, mikor lépsz be a tranzakciós módba.
*   **Alkudozás:** A **Kereskedelem** képességed (ami a Karizmán alapul) dönti el az árakat. Ha csúnya vagy barátságtalan vagy, átvernek.
*   **Eladás:** Kattints **Jobb Gombbal** egy tárgyra az eszköztáradban, hogy eladd a boltosnak, vagy húzd rá.

---

## 🎒 FELSZERELÉS KEZELÉSE (Tetris)

*   **Súly:** Van egy teherbírási limited (Erő + Méret). Ha túl sok lomot cipelsz, lassú leszel és büntetést kapsz (Diogenész nem a barátod).
*   **Panelek:**
    *   **Felszerelés:** Amit viselsz.
    *   **Öv:** Gyors elérés harcban (innen kevesebb időbe telik bájitalt használni).
    *   **Hátizsák:** A zsák feneke.
*   **Gördülékeny Használat:** Húzz egy bájitalt vagy ételt közvetlenül **az arcodra** (a portréra), hogy azonnal elfogyaszd. Használhatod a helyi menüt is (jobb klikk -> Használat).

---

## 🛠️ VÉGSŐ BEÁLLÍTÁSOK

A **Beállítások** menüben mindent piszkálhatsz:
*   **🌍 Nyelv:** Az MI röptében lefordítja neked az egész játékot és a válaszokat. Poliglot mód aktiválva.
*   **👁️ Megjelenés:** Betűméret és színek, hogy ne vakulj meg. Neon szegélyek és lágy árnyékok a teljes immerzióért.
*   **🧠 MI Beállítások:** Válts modellt, hőmérsékletet stb. (Emlékezz arra, amit a kézikönyv elején láttunk a `--advanced` flagről, ha azok közé tartozol, akik mindent piszkálni akarnak).

---

## 🎭 NEHÉZSÉG ÉS HUMOR (Szabd személyre a szenvedésed)

Mielőtt elkezdenéd, ne feledd, hogy az MI nemcsak narrál, hanem **igazítja a világot** a preferenciáidhoz. Ezeket a paramétereket a világ létrehozásakor választod ki, és állandóak az adott világra nézve:

*   **🎮 Nehézség (MI által kezelve):** Ez nem egy egyszerű sebzésszorzó. A játék azt mondja az MI-nek: "Hé, a nehézség ez, cselekedj ennek megfelelően".
    *   **Könnyű:** Soha nem halsz meg (vagy szinte lehetetlen), a helyzetek egyszerűbbek, az árak olcsóbbak és az ellenségek ügyetlenebbek. Az MI minden jelenetet úgy alakít, hogy az utad habostorta legyen.
    *   **Normál:** A standard egyensúly.
    *   **Kihívás:** Az MI kíméletlen lesz, az árak megfizethetetlenek, és bármely hiba az utolsó lehet.

*   **🃏 Humor Tónusa:** Meghatározza, hogyan beszél hozzád az MI, és milyen típusú események történnek. Bár minden modellnek megvan a maga értelmezése a "humor" fogalmáról, az MI megpróbál alkalmazkodni ahhoz, amit választasz... vagy nem:
    *   **Komoly:** Epikus, sötét és formális narratíva.
    *   **Szarkasztikus:** Az MI nevetni fog a hibáidon, folyamatosan beszól és ironikus hangnemet használ.
    *   **Delíriumos/Őrült:** Készülj fel az abszurditásra. Repülő tehenek, szürreális helyzetek és totális káosz, amit az MI legkifacsartabb logikája vezérel.

---

## 🚧 Figyelem: Early Access (Korai Hozzáférés)

A RolemIAster **aktív fejlesztés** alatt áll, lassú tűzön fő.
*   Találkozhatsz bugokkal (vagy "váratlan funkciókkal").
*   Minden héten adok hozzá új dolgokat.
*   A visszajelzésed aranyat ér! Mondd el, mi tetszik, és mi tetszik nagyon. (Ha valami nem tetszik, azt is mondd el, de szeretettel).

Most menj, dobj kezdeményezést, és hozd létre a legendádat!

<!-- source_hash: f3494f05 -->