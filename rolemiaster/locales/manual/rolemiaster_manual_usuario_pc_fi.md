# 🐉 Tervetuloa RolemIAsteriin!

Tartu noppiisi (tai hiireesi) ja valmistaudu elämään seikkailuja, joissa ainoa raja on mielikuvituksesi kieroutuneisuus! **RolemIAster** on tekoälyn pyörittämä loputon roolipeli, jonka avulla voit olla oman tarinasi sankari (tai pahis).

---

## ⚠️ OIKEUDELLINEN HUOMAUTUS (Tylsä mutta välttämätön osa)

**LUE TAI KOSET KÄRSIT NOPPIEN VIIHASTA:**

1.  **🤖 Sisäänrakennettu paikallinen tekoäly:** RolemIAster tuo oman digitaalisen aivonsa. Se toimii **ilman internetiä** ja ilman, että sinun tarvitsee koskea mihinkään erikoiseen. Asenna ja pelaa!
2.  **☁️ Valinnainen pilvi:** Jos haluat mieluummin käyttää rahojasi ulkoisiin tekoälyihin (OpenAI, Gemini...), niin sitten vaan luottokorttisi kanssa. Kustannukset ovat sinun vastuullasi.
3.  **🎲 Generatiivinen kaaos:** Tekoäly keksii tarinan lennosta. Jos kertojasta tulee hullu ja hän sanoo, että lehmiä sataa, älä katso meihin. Kehittäjä ei ole vastuussa mallin luomista hulluuksista.
4.  **🏗️ Early Access:** Tämä on työn alla. Jos löydät bugin, se ei ole vika, vaan yllätysominaisuus! (Lähetä meille palautetta, se auttaa meitä todella paljon).

---

## 🖥️ JÄRJESTELMÄVAATIMUKSET JA DIGITAALISET AIVOT (IA)

RolemIAster toimii **paikallisella tekoälyllä**. Tämä tarkoittaa, että tietokoneesi tekee ajattelutyön. Et tarvitse internetiä, mutta tarvitset näytönohjaimen, joka ei ole dinosaurusten aikakaudelta. (Huom: Jos huoneessasi on kylmä, tämä peli toimii ilmaisena lämmittimenä).

### ⚙️ Käsitteitä aloittelijoille

**VRAM (Näyttömuisti)** on tekoälyn polttoainetta.
*   RolemIAster tarvitsee "muistaakseen" **12 000 - 16 000 sanaa (tokenia)**, jotta se ei menetä tarinan juonta.
*   Jos näytönohjaimesi muisti loppuu, peli on hitaampi kuin astmaa sairastava etana.

---

### 📊 MALLIKATALOGI (Valitse myrkky)

Hallinnoi tekoälyjäsi kohdassa **Asetukset → Sisäänrakennettu paikallinen tekoäly → Hallinnoi malleja**.

#### 🏆 Qwen 3.5 -perhe — Erityisesti RolemIAsteriin koulutetut

Nämä mallit on koulutettu **Valvotulla hienosäädöllä (SFT)** hallitsemaan pelin kerronnallisia sääntöjä. Ne eivät ole geneerisiä malleja: ne tuntevat RolemIAsterin JSON-sopimuksen, NPC:t, inventaarion ja taistelun ulkoa.

| Malli | Koko | Vähimmäis-VRAM | Taso | Tuomio |
|--------|--------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **Nopeusjuoksija.** Kaikista nopein. Ihanteellinen perusnäytönohjaimille tai pelattaessa ilman erillistä näytönohjainta. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **TASAPAINOINEN.** Optimaalinen nopeus ja laatu. Suositeltu oletusmalli useimmille pelaajille. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **Kertoja.** Rikasta kerrontaa ja ylivoimaista johdonmukaisuutta. Niille, joilla on RTX 3070 tai parempi. |

---

### 🎮 NOPEA VALINTAOPAS

| Näytönohjaimesi | VRAM | Suositeltu malli | Tulos |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Ilman näytönohjainta | 2-4GB | **Qwen3.5-2B** | 🆗 Niukasti, mutta pelattava |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Erittäin hyvä kokemus |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Nopea ja tarkka |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 Ihanteellinen kokemus |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Huippulaatu, erittäin nopeat vastaukset |

**💡 Vinkki:** Jätä aina **noin 2 Gt VRAMia vapaaksi** käyttöjärjestelmää varten, muuten Windows alkaa itkeä ja sulkea asioita.

---

### 🚨 APUA! PC ON HITAAN KOALA! (VRAM-ongelmat)

Jos pelin vastaaminen kestää kauemmin kuin ihastuksesi vastaaminen WhatsAppissa, olet todennäköisesti loppunut VRAMista.

**Oireet siitä, että olet ollut liian uhkarohkea:**
1.  **Malli siirtyy RAMiin:** Tietokone käyttää tavallista muistia näytönohjaimen sijaan. Tulos: EXTREMEEN HITAUTEEN.
2.  **Lievä ylivuoto (1-2GB):** Vastaus kestää 30-60 sekuntia.
3.  **Kohtalainen ylivuoto (3-5GB):** 2-5 minuuttia. Voit mennä hakemaan kahvia.
4.  **Vakava ylivuoto:** 10-30 minuuttia. Pelaamiskelvoton.

#### 🛡️ Hätäprotokolla
Jos tilanne menee pieleen, toimi näin järjestyksessä:

1.  **📉 Laske VRAM-%:** Mene Asetuksiin ja laske se **85%:iin**. Käynnistä uudelleen ja kokeile.
2.  **🧹 Siivous:** Sulje se selain, jossa on 40 välilehteä auki. Ne syövät muistiasi.
3.  **🛑 70% raja:** Älä koskaan mene alle **70%**:n allokoidusta VRAMista.
    *   *Miksi?* Koska tekoäly tarvitsee tilaa "ajatella" (KV-välimuisti). Jos annat sille alle 70%, se tyhjenee ja antaa virheen.
4.  **🔙 Taktinen vetäytyminen:** Jos mikään muu ei auta, vaihda pienempään malliin (mene 9B:stä 4B:hen tai 4B:stä 2B:hen).

---

### ⚙️ MALLIN LAAJENNETTU ASETAKSEN ("Maksimi friikkaus")

> **ASIANTUNTIJATILA:** Jos olet pro ja haluat päästä käsiksi mallien laajennettuihin asetuksiin (lisätä omia GGUF-mallejasi HuggingFacesta, säätää kerroksia jne.), sinun on käynnistettävä peli komennolla: `--advanced`.

Niille, jotka tykkäävät napautella nappeja kohdassa **Asetukset → Sisäänrakennettu paikallinen tekoäly**:

| Vaihtoehto | Toiminto | Suositus |
|--------|---------|---------------|
| **GPU Layers** | Kuinka suuri osa mallista ladataan näytönohjaimelle | **-1** (Tarkoittaa "KAIKKI". Älä koske, ellet tiedä mitä teet) |
| **Maksimi konteksti** | Tekoälyn "lyhytkestoinen muisti" | **16384 - 32768** (Vähemmän kuin tämä ja tekoäly kärsii muistinmenetyksestä) |
| **Lämpötila** | Luovuus vs. hulluus | **0.7 - 0.8** (Korkeampi = hullumpi; Matalampi = robottimaisempi) |
| **Historia RAG** | Muistaa asioita kaukaa | **Kyllä** (Välttämätön pitkissä kampanjoissa) |
| **Välimuisti upotuksille** | Nopeuttaa muistien hakua | **Kyllä** (Nopeuttaa toimintaa) |

---

### 🔧 VIANETSINTÄ (Troubleshooting)

| Ongelma | Korjaus |
|-------|---------|
| **Hidas tekoäly / Lag** | Varmista, että `GPU Layers` on -1. Sulje Chrome. Laske `Contexto Máximo`. |
| **Muistivirhe (OOM)** | Pienennä `Contexto Máximo` tai valitse pienempi malli (3B). |
| **Tekoäly sekoilee / Hallusinoi** | Laske `Temperatura` arvoon 0.6. Jos se jatkaa sekoilua, käynnistä sovellus uudelleen. |

---

### 🌐 VAIHTOEHTOISET TOIMITTAJAT (Vain asiantuntijoille)

> **Huom:** Pelin mukana tuleva paikallinen tekoäly riittää kyllä. Tämä on vain edistyneille tai rohkeille käyttäjille.

*   **Ulkoiset paikalliset moottorit:**
    *   **Ollama / LM Studio:** Jos sinulla on jo omat harrastusmallisi, voit käyttää niitä.
*   **Pilvi-API:t (Maksullisia):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vaatii internetin ja rahan käyttöä.
    *   Määritä kohdassa: **Asetukset → Tekoäly → Lisää uusi toimittaja**.

---

### 🌍 MITEN PELATA? (Multiversumi ja sinä)

Kun avaat pelin, sinulla on kaksi vaihtoehtoa:

1.  **🆕 Uusi seikkailu**: Luo legendasi tyhjästä. Peli kysyy sinulta **Nimeä, Ammattia, Fyysistä kuvausta, Psykologista kuvausta ja tarinasi taustaa/perustelua**. Lisäksi valitset **Vaikeustason** ja **Huumorin sävyn**, jotka ohjaavat kampanjaa.
2.  **💾 Jatka peliä**: RolemIAster **tallentaa reaaliaikaisesti**. Täällä ei ole "lataa ennen kuolemaa" eikä paluuta. Jokainen päätös, jokainen virhe ja jokainen haava syövytetään tarinaan. Se on **HASTE**: mitä teet, se on tehty. Elä seurausten kanssa... tai kuole niiden kanssa.

RolemIAster ei ole yksittäinen pelikerta; se on **pysyvä multiversumi**.
*   **Loputtomat maailmat:** Luo omia universumejasi (**Keskiaikainen fantasia** tai **Cyberpunk**) omalla Lorellaan.
*   **Loputtomat hahmot:** Jokaisessa maailmassa voit olla niin monta sankaria kuin haluat.
*   **Jaettu aikajana:** Huomio! Se, mitä yksi hahmo tekee, vaikuttaa muiden maailmaan. Tekoäly on tietoinen muista sankareistasi ja tunnistaa heidät maailman asukkaiksi.
*   **Tekoäly "aisteilla" (Super RAG):** RAG (Retrieval-Augmented Generation) -järjestelmä toimii tekoälyn "kyylänä", antaen sille muistoja maailmasta, kuka on mukana, missä olet ja mitä juuri tapahtui, jotta tarina on 100% johdonmukainen.

### Käyttöliittymä (Ohjaamisi)

*   **Vasemmanpuoleinen paneeli (SINÄ):** Hahmokorttisi. Elämä, mana, taidot ja kuinka komea olet (Karishma).
*   **Keskipaneeli (TARINA):**
    *   **Ylhäällä:** Missä kertoja kertoo, mitä tapahtuu.
    *   **Alhaalla:** Päätöksesi painikkeet ja tekstikenttä kirjoittaa, mitä haluat tehdä.
*   **Oikeanpuoleinen paneeli (OMAT TAVARAT):** Inventaario ja varusteet. Digitaalisen keräilijän paratiisi.

---

## 📜 PELISÄÄNNÖT (Kyllä, on sääntöjä)

RolemIAster käyttää klassista ja vankkaa d100-järjestelmää (sata-sivuinen noppa).

### 1. Attribuuttisi (Mikä sinut määrittelee)
Tekoäly luo attribuuttisi antamasi kontekstin, ammatin ja kuvauksen perusteella. Kun ne on luotu, sinulla on **10 LISÄPISTETTÄ** jaettavaksi haluamallasi tavalla.
*   **Portaittaiset kustannukset:** Attribuutin nostaminen 14:ään maksaa 1 pisteen. 15-16 maksaa 2 pistettä. 17:stä ylöspäin maksaa 3 pistettä! Mieti tarkkaan, mihin laitat lihaksesi.

*   💪 **Voima (VOI):** Raaka fyysinen voimasi. Vaikuttaa lähitaisteluvahinkoon ja kantokapasiteettiisi.
*   ❤️ **Kestävyys (KES):** Vastustuskykysi. Selviytyä iskuista, sairauksista ja myrkyistä.
*   🐘 **Koko (KOO):** Mittasuhteesi. Suuri ja painava, tai pieni ja vikkelä.
*   🏃 **Ketteryys (KET):** Notkeus, tarkkuus ja se, ettet kompastu omiin jalkoihisi.
*   🧠 **Älykkyys (ÄLY):** Oppia, muistaa ja ratkaista pulmia.
*   🔮 **Voima (VOI):** Sielusi, onnesi, tahdonvoimasi ja maaginen reservisi.
*   😎 **Karishma (KAR):** Johtajuus, viehätysvoima ja kyky pettää (tai vietellä) ihmisiä.

### 2. Pikamatematikka (Johdetut ominaisuudet)
Moottori laskee nämä arvot automaattisesti attribuuttiesi perusteella:

*   🩸 **Elämäpisteet (EP):** `CON * 10`. Jos se putoaa nollaan... no, tiedät kyllä. F.
*   ✨ **Manapisteet (MP):** `(POD * 10) + INT`. Polttoainetta taikatemppuihisi. Ilman manaa ei ole temppuja. (Maagikko ilman manaa on vain kaapupäinen tyyppi cosplay-asussa).
*   ⚡ **Kestävyyspisteet (KP):** `((CON+FUE+DES)/3)*10 + POD`. Energiasi taisteluun ja liikkumiseen kuolematta yrittäessä.
*   🧠 **Inhimillisyys (INH):** `(CON+POD) * 5`. (Vain Cyberpunkissa: Mittaa, kuinka paljon sinusta on jäljellä ihmistä ennen kuin johdot tekevät sinusta hullun).
*   ⚔️ **Toimintapisteet (TP):** `(INT + DES) / 2`. Määrittää aloitteesi. Ensimmäisenä iskevä iskee kahdesti.

### 3. Taitosi
Ne alkavat perustasolta (esim. Hiiviskely = KET + ÄLY) ja paranevat käytössä. Se on prosentti (%).

### 4. Toimintojen ratkaisu (Noppa)
Kun yrität tehdä jotain riskialtista (kiipeä, valehdella, hyökätä...), tekoäly pyytää sinua heittämään. Peli heittää näkymättömän **d100**:n. **(Muista: Nopat vihaavat sinua. Se on henkilökohtaista).**

*   **Tavoitteesi:** Saada numero **ALLE TAI TASOLLA** taitotasosi kanssa.
    *   *Esimerkki:* Sinulla on 45% Kiivetä.
    *   Saat 30: ✅ **Onnistuminen**. Kiipeät kuin apina.
    *   Saat 80: ❌ **Epäonnistuminen**. Satutat itsesi.
    *   **Kriittinen:** Saada alle tai taso **1/5 taitotasostasi** (tai 01). Eeppistä! Teet poikkeuksellisen parkour-suorituksen voltilla.
    *   **Mokaus:** **99 tai 100**. Nopat ovat päättäneet, ettei tänään ole sinun päiväsi. Housusi putoavat kesken kaiken ja kaadut naama edellä.

---

## 💡 NEUVOJA EI KUOLEMISEEN (NOPEASTI)

*   **✍️ Ole kuvaileva:** Älä kirjoita vain "hyökkään". Kirjoita: *"Yritän väistää hänen kirvestään pyörähtämällä maassa ja pistän tikarini hänen nilkkaansa."* Tekoäly palkitsee sinua.
*   **🧪 Kokeile:** Et ole rajoittunut painikkeisiin. Kirjoita hulluja juttuja! Tekoäly improvisoi.
*   **🎭 Roolipelaa:** Mene hahmosi rooliin. Lue kuvaukset ja toimi kuin hahmosi, älä kuin itse pyjamassa.

---

## ⚔️ TAISTELU (Aseisiin!)

Kun sanat loppuvat, on tappelun aika. Taistelu on **taktista** ja toimii **Tickien** (ajan) mukaan.

### 🕹️ Miten se toimii:
*   **Tickit:** Jokainen toimenpide maksaa aikaa. Raskaat aseet ovat hitaita (kuluttavat paljon tickejä). Tikarit ovat nopeita.
*   **Nopeutesi:** Riippuu Toimintapisteistäsi (TP).

### Perustoiminnot:
*   **🗡️ Hyökkää:** Lyö sillä, mitä sinulla on esillä.
*   **🛡️ Torju:** Menet puolustukseen. Vähentää vahinkoa, mutta kuluttaa Kestävyyttä.
*   **🏃 Pakene:** Pelkurimaista (tai viisasta, jos haluat elää).
*   **🏳️ Antaudu:** Jos näet, ettet voita, voit pyytää armoa.
*   **✨ Taika / Cyberware:** Tuli, lasersäteet, hakkeroinnit...

### 💬 Vapaamuotoiset toiminnot (UUTTA!)
Etkö pidä napeista? Kirjoita, mitä haluat tehdä, kuin puhuisit oikean Mestarin kanssa!
*   **Esimerkkejä:** *"Ammu tulipallo gobeliniin"*, *"Ota esiin ruunakirpathini"*, *"Käytä taikajuomaa minuun."*
*   **Kohtauksen ohjaaja:** Taistelu herää nyt eloon. Tekoäly luo ympäristötapahtumia ja reaktioita, jotka rikastuttavat kerrontaa: putoavat palkit, perääntyvät viholliset, putoavat soihtut. Taistelukenttä ei ole enää staattinen!
*   **Jos tekoäly ei ymmärrä:** Se pyytää sinua muotoilemaan uudelleen. Vuorosi EI mene hukkaan!
*   **⚠️ Rajoitus:** Esineiden siirtäminen paikkojen välillä (varustaminen repusta, ammusten lataaminen) tehdään käyttöliittymän **Drag & Dropilla**, ei tekstin avulla.

### ⚠️ SELVIYTYMISEN KULTASÄÄNTÖ
**OTA ASE ESILLE ENNEN TAISTELUA!**
Aseen esille ottaminen taistelun aikana vie aikaa (Tickejä). Jos sinut yllätetään miekan ollessa tupessa, sinua lyödään niin paljon, että tunnusmerkkiisi asti, kun yrität kömpelösti ottaa sitä pois. TAI HUONOMPAA, JOS ASEESI OVAT REPUSTASI EIKÄ VARUSTUSPAIKOILLA (Anteeksi hetki, minun täytyy ottaa jättimiekka repusta, tiedän, että minulla oli se tässä jossain... jossain?) 🤦‍♂️
👉 Klikkaa **varustetun aseen etikettiä** (oikeanpuoleinen paneeli) ottaaksesi sen esille. Se syttyy vihreänä.

Aseiden siirtäminen taistelun aikana vie aikaa (Tickejä) ja voi johtaa yllätyshyökkäykseen, lisäksi on erittäin todennäköistä, että menetät vuorosi, epäonnistut hermostuksesta lähestyvän kirveen vuoksi tai pudotat sen maahan. (Ehkä ei ollut hyvä idea luoda ADHD-persoonaa)

---

## ✨ MAGIA JA KYBERNETIIKKA

Riippuen siitä, onko maailmasi "Keskiaikainen fantasia" vai "Cyberpunk":

### 🧙‍♂️ Fantasia: Lumoukset
Oletko velho? Voit lumota varusteesi.
1.  **Opi:** Tarvitset loitsun kirjastostasi.
2.  **Heitä (Drag & Drop):** Vedä loitsu listaltasi inventaarion esineen päälle.
3.  **Kustannus:** Lumouksen pitäminen aktiivisena **kuluttaa manaa vuoron aikana**.
4.  **Huomautus:** Jos mana loppuu kesken taistelun, tultumiekka muuttuu taas ruosteiseksi rautakappaleeksi.

### 🦾 Cyberpunk: Implantit
Haluatko silmät zoomilla tai gorillankädet?
1.  Etsi **Teknosirurgi** (palvelu-NPC).
2.  Maksa krediitit (mikään ei ole ilmaista tulevaisuudessa).
3.  **Inhimillisyyden kustannus:** Jokainen implantti vie palan sieluasi (**Inhimillisyyttä**).
    *   Jos asennat liikaa, muuttuu sinusta **Kyberpsykootti** (tappava keitetty munakori jaloilla) ja menetät hahmosi hallinnan.

---

## 🛒 KAUPAT JA PALVELUT (SIS)

Puhu NPC:iden kanssa kaupankäyntiä varten.
*   **Tekoäly ehdottaa, sinä päätät:** Kun puhut kauppiaalle tai parantajalle, tekoäly ehdottaa heidän palvelujaan (korjaus, myynti, parannus), mutta painike **"Näytä palvelut"** ilmestyy, jotta voit itse päättää, milloin siirtyä transaktiotilaan.
*   **Tinkiminen:** **Kauppa**-taitosi (Perustuu Karismaan) määrää hinnat. Jos olet ruma tai epäystävällinen, sinua huijataan.
*   **Myynti:** Klikkaa hiiren oikealla painikkeella esinettä inventaarissasi myydäksesi sen kauppiaalle tai vedä se hänen päälleen.

---

## 🎒 INVENTAARION HALLINTA (Tetris)

*   **Paino:** Sinulla on kantorajoitus (Voima + Koko). Jos kannat liikaa romua, olet hidas ja saat rangaistuksia (Keräilijä ei ole ystäväsi).
*   **Paneelit:**
    *   **Varusteet:** Mitä sinulla on päälläsi.
    *   **Vyö:** Nopea pääsy taistelussa (juomien käyttö tästä vie vähemmän aikaa).
    *   **Reppu:** Säkin pohja.
*   **Sujuva käyttö:** Vedä juoma tai ruoka suoraan **kasvoillesi** (profiilikuvaan) kuluttaaksesi sen välittömästi. Voit myös käyttää kontekstivalikkoa (oikea klikkaus -> Käytä).

---

## 🛠️ LOPULLISET SÄÄNNÖT

**Asetukset**-valikosta voit säätää kaikkea:
*   **🌍 Kieli:** Tekoäly kääntää koko pelin ja vastaukset lennossa. Monikielinen tila aktivoitu.
*   **👁️ Ulkoasu:** Fonttikoko ja värit, jotta et sokeudu. Neonreunat ja pehmennetyt varjot täydelliseen uppoutumiseen.
*   **🧠 Tekoälyn asetukset:** Vaihda mallia, lämpötilaa jne. (Muista, mitä olemme käyneet läpi tämän käyttöoppaan alussa `--advanced` lipulla, jos olet niitä, jotka haluavat säätää kaikkea).

---

## 🎭 VAIKEUSTASO JA HUMORI (Mukauta kärsimystäsi)

Ennen aloittamista, muista, että tekoäly ei vain kerro, vaan myös **säätää maailmaa** mieltymystesi mukaan. Nämä parametrit valitaan maailman luonnin yhteydessä ja ovat pysyviä kyseiselle maailmalle:

*   **🎮 Vaikeustaso (Tekoälyn hallinnoima):** Ei ole pelkkä vahinkokerroin. Peli käskee tekoälyä: "Hei, vaikeustaso on tämä, toimi sen mukaisesti".
    *   **Helppo:** Et koskaan kuole (tai se on lähes mahdotonta), tilanteet ovat yksinkertaisempia, hinnat ovat halvempia ja viholliset kömpelömpiä. Tekoäly järkeilee jokaisen kohtauksen, jotta polkusi olisi ruusuilla tanssimista.
    *   **Normaali:** Standarditasapaino.
    *   **Haaste:** Tekoäly on armoton, hinnat kohtuuttomia ja jokainen virhe voi olla viimeisesi.

*   **🃏 Huumorin sävy:** Määrittää, miten tekoäly puhuu sinulle ja millaisia tapahtumia ilmenee. Vaikka jokaisella mallilla on oma tapansa tulkita "huumorin" käsitettä, tekoäly yrittää mukautua valintaasi... tai ei:
    *   **Vakava:** Eeppinen, synkkä ja muodollinen kerronta.
    *   **Sarkastinen:** Tekoäly nauraa virheillesi, heittää sinulle jatkuvasti piikikkäitä kommentteja ja käyttää ironista sävyä.
    *   **Mielipuolinen:** Valmistaudu absurdiin. Lentävät lehmät, surrealistiset tilanteet ja täydellinen kaaos, jota hallinnoi tekoälyn kieroin logiikka.

---

## 🚧 Huomautus: Early Access

RolemIAster on **aktiivisessa kehityksessä**, kypsymässä hitaasti.
*   Voit löytää bugeja (tai "odottamattomia ominaisuuksia").
*   Lisään uusia asioita joka viikko.
*   Palautteesi on kultaakin kalliimpaa! Kerro, mistä pidät ja mistä pidät todella paljon. (Jos et pidä jostain, kerro myös, mutta ystävällisesti).

Mene nyt, heitä aloite ja luo legendasi!

<!-- source_hash: 9af75cff -->