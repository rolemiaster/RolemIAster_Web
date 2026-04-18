# 🐉 Tervetuloa RolemIAsteriin!

Tartu noppiisi (tai hiireesi) ja valmistaudu seikkailuihin, joissa ainoa raja on mielikuvituksesi kieroutuneisuus! **RolemIAster** on tekoälyn pyörittämä loputon roolipeli, jonka avulla voit olla omien tarinoidesi sankari (tai pahis).

---

## ⚠️ OIKEUDELLINEN HUOMAUTUS (Tylsä mutta välttämätön osa)

**LUE TAI KOHTAAT NOPPIEN VIHAN:**

1.  **🤖 Sisäänrakennettu paikallinen tekoäly:** RolemIAster tuo oman digitaalisen aivonsa. Se toimii **ilman internetiä** ja ilman, että sinun tarvitsee koskea mihinkään omituiseen. Asenna ja pelaa!
2.  **☁️ Valinnainen pilvipalvelu:** Jos haluat mieluummin käyttää rahojasi ulkoisiin tekoälyihin (OpenAI, Gemini...), niin sinun valintasi luottokorttisi kanssa. Kulut ovat sinun vastuullasi.
3.  **🎲 Generatiivinen kaaos:** Tekoäly keksii tarinan lennossa. Jos pelinjohtaja sekoaa ja sanoo, että lehmiä sataa, älä katso meitä. Kehittäjä ei ole vastuussa mallin tuottamista hullutuksista.
4.  **🏗️ Ennakkojulkaisu:** Tämä on rakenteilla. Jos löydät bugin, se ei ole vika, se on yllätys "ominaisuus"! (Lähetä palautetta, kiitos, se auttaa meitä paljon).

---

## 🖥️ JÄRJESTELMÄVAATIMUKSET JA DIGITAALISET AIVOT (TEKOÄLY)

RolemIAster toimii **Paikallisella Tekoälyllä**. Tämä tarkoittaa, että tietokoneesi tekee ajattelutyön. Et tarvitse internetiä, mutta tarvitset näytönohjaimen, joka ei ole dinosaurusten ajoilta. (Huom: Jos huoneessasi on kylmä, tämä peli toimii ilmaisena lämmittimenä).

### ⚙️ Konseptit aloittelijoille

**VRAM (Näytönohjaimen muisti)** on tekoälyn polttoainetta.
*   **TurboQuantin** ansiosta RolemIAster pystyy nyt muistamaan **yli 100 000 sanaa (tokenia)** — melkein kolminkertaisesti aiempaan verrattuna — ilman, että se kaataa näytönohjaintasi.
*   Jos näytönohjaimesi muisti loppuu, peli hidastuu enemmän kuin yskivä etana.

---

### 📊 MALLIKATALOGI (Valitse myrkkyynsi)

Hallitse tekoälyjäsi kohdassa **Asetukset → Sisäänrakennettu paikallinen tekoäly → Hallitse malleja**.

#### 🏆 Qwen 3.5 -perhe — Erityisesti RolemIAsterille koulutettuja

Nämä mallit on koulutettu **Ohjatulla hienosäädöllä (SFT)** hallitsemaan pelin kerronnallisia sääntöjä. Ne eivät ole geneerisiä malleja: ne tuntevat RolemIAsterin JSON-sopimuksen, NPC:t, inventaarion ja taistelun ulkoa.

| Malli | Koko | Minimi VRAM | Taso | Tuomio |
|--------|--------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **Nopeusjuoksija.** Nopein kaikista. Ihanteellinen perusnäytönohjaimille tai ilman erillistä näytönohjainta pelaamiseen. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **TASAPAINOINEN.** Optimaalinen nopeus ja laatu. Suositeltu vakio malli useimmille pelaajille. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **Kertoja.** Rikas kerronta ja ylivoimainen koherenssi. Niille, joilla on RTX 3070 tai parempi. |

---

### 🎮 NOPEAT VALINTAOHJEET

| Näytönohjaimesi | VRAM | Suositeltu malli | Tulos |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Ei näytönohjainta | 4GB | **Qwen3.5-2B** | 🆗 Juuri ja juuri pelattavissa, todella juuri ja juuri... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Hyvä kokemus |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Nopea ja tarkka |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Ihanteellinen kokemus |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Huippulaatu, ultra-nopeat vastaukset |

**💡 Vinkki:** Jätä aina noin **2GB VRAMia vapaaksi** käyttöjärjestelmälle, muuten Windows alkaa itkeä ja sulkea ohjelmia.

---

### 🚨 APUA! TIETOKONEENI ON HITAANSA! (VRAM-ongelmat)

Jos pelin vastaaminen kestää kauemmin kuin ihastuksesi vastaaminen WhatsAppissa, olet luultavasti loppunut VRAMista.

**Oireita siitä, että olet ollut liian innokas:**
1.  **Malli siirtyy RAMiin:** Tietokone käyttää tavallista muistia näytönohjaimen muistin sijaan. Tulos: EXTREME HITAUS.
2.  **Lievä ylivuoto (1-2GB):** Vastaus kestää 30-60 sekuntia.
3.  **Kohtalainen ylivuoto (3-5GB):** 2-5 minuuttia. Voit käydä kahvilla.
4.  **Vakava ylivuoto:** 10-30 minuuttia. Pelikelvoton.

#### 🛡️ Hätäprotokolla
Jos tilanne menee pieleen, seuraa näitä ohjeita järjestyksessä:

1.  **📉 Laske VRAM-prosenttia:** Mene asetuksiin ja laske se **85%:iin**. Käynnistä uudelleen ja kokeile.
2.  **🧹 Siivous:** Sulje se selain, jossa on 40 välilehteä auki. Ne syövät muistiasi.
3.  **🛑 70% raja:** Älä koskaan laske alle **70%**:n varatusta VRAMista.
    *   *Miksi?* Koska tekoäly tarvitsee tilaa "ajatella" (KV-välimuisti). Jos annat sille alle 70%, se tyhjentyy ja antaa virheilmoituksen.
4.  **🔙 Taktiikan vetäytyminen:** Jos mikään muu ei auta, vaihda pienempään malliin (siirry 9B:stä 4B:iin tai 4B:stä 2B:iin).

---

### ⚙️ LISÄASETUKSET MALLILLE ("Maksimaalinen säätäminen")

> **ASIANTUNTIJATILA:** Jos olet pro-pelaaja ja haluat käyttää edistyneitä malliasetuksia (lisätä omia GGUF-malleja HuggingFaceesta, muokata kerroksia jne.), sinun on käynnistettävä peli komennolla: `--advanced`.

Niille, jotka tykkäävät naputella nappeja kohdassa **Asetukset → Sisäänrakennettu paikallinen tekoäly**:

| Vaihtoehto | Toiminto | Suositus |
|--------|---------|---------------|
| **GPU Layers** | Kuinka suuri osa mallista ladataan näytönohjaimeen | **-1** (Tarkoittaa "KAIKKI". Älä koske, ellet tiedä mitä teet) |
| **Maksimi konteksti** | Tekoälyn "lyhytaikainen muisti" | **16384 - 32768** (Alle tämän ja tekoälyllä on muistinmenetys) |
| **Lämpötila** | Luovuus vs. hulluus | **0.7 - 0.8** (Korkeampi = hullumpi; Matala = robottimaisempi) |
| **Historian RAG** | Muistelee asioita kaukaa | **Kyllä** (Välttämätön pitkille kampanjoille) |
| **Välimuistita Vektorit** | Nopeuttaa muistien hakua | **Kyllä** (Nopeuttaa toimintaa) |

---

### 🔧 VIANETSINTÄ (Troubleshooting)

| Ongelma | Korjaus |
|-------|---------|
| **Hidas tekoäly / Lag** | Tarkista, että `GPU Layers` on -1. Sulje Chrome. Laske `Contexto Máximo`. |
| **Muistivirhe (OOM)** | Vähennä `Contexto Máximo` tai valitse pienempi malli (3B). |
| **Tekoäly sekoilee / Hallusinoi** | Laske `Temperatura` arvoon 0.6. Jos se on edelleen sekaisin, käynnistä sovellus uudelleen. |

---

### 🌐 VAIHTOEHTOISET TARJOAJAT (Vain asiantuntijoille)

> **Huom:** Pelin mukana tuleva paikallinen tekoäly riittää mainiosti. Tämä on vain edistyneille tai rohkeille käyttäjille.

*   **Ulkoiset paikalliset moottorit:**
    *   **Ollama / LM Studio:** Jos sinulla on jo omia nörttimalleja, voit käyttää niitä.
*   **Pilvipohjaiset API:t (Maksullisia):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vaatii internetin ja rahaa.
    *   Määritä kohdassa: **Asetukset → Tekoäly → Lisää uusi tarjoaja**.

---

### 🌍 MITEN PELATA? (Monimaailma ja sinä)

Kun avaat pelin, sinulla on kaksi polkua:

1.  **🆕 Uusi seikkailu**: Luo legendasi tyhjästä. Peli kysyy **Nimeä, Ammattia, Fyysistä kuvausta, Psykologista kuvausta ja Tarinasi taustaa/pretekstiä**. Lisäksi valitset **Vaikeustason** ja **Huumorin sävyn**, jotka ohjaavat kampanjaa.
2.  **💾 Jatka peliä**: RolemIAster **tallentaa reaaliaikaisesti**. Täällä ei ole "lataa ennen kuolemaa" tai paluuta. Jokainen päätös, jokainen epäonnistuminen ja jokainen haava tallentuu syvälle historiaan. Se on **HASTE**: mitä teet, on tehty. Elä seuraamusten kanssa... tai kuole niiden kanssa.

RolemIAster ei ole yksittäinen peli; se on **Pysyvä Monimaailma**.
*   **Loputtomat maailmat:** Luo omat universumisi (**Keskiaikainen fantasia** tai **Cyberpunk**) omalla lorellaan.
*   **Loputtomat hahmot:** Jokaisessa maailmassa voi olla niin monta sankaria kuin haluat.
*   **Jaettu aikajana:** Varo! Se, mitä yksi hahmo tekee, vaikuttaa muiden maailmaan. Tekoäly on tietoinen muista sankareistasi ja tunnistaa heidät maailman asukkaiksi.
*   **Tekoäly "aisteilla" (Super RAG):** RAG (Retrieval-Augmented Generation) -järjestelmä toimii tekoälyn "vihjeenä", antaen sille muistoja maailmasta, kuka on mukana, missä ollaan ja mitä juuri tapahtui, jotta tarina olisi 100% johdonmukainen.

### Käyttöliittymä (Ohjaamosi)

*   **Vasemmanpuoleinen paneeli (SINÄ):** Hahmokorttisi. Elämä, manna, taidot ja kuinka komea olet (Karismä).
*   **Keskipaneeli (TARINA):**
    *   **Ylhäällä:** Missä pelinjohtaja kertoo, mitä tapahtuu.
    *   **Alhaalla:** Päätösnappulasi ja tekstikenttä kirjoittaa, mitä haluat tehdä.
*   **Oikeanpuoleinen paneeli (OMAT ASIAT):** Inventaario ja varusteet. Digitaalisen Diogeneen paratiisi.

---

## 📜 PELISÄÄNNÖT (Kyllä, on sääntöjä)

RolemIAster käyttää klassista ja vankkaa d100-järjestelmää (sadan tahkon noppa).

### 1. Attribuuttisi (Mikä määrittelee sinut)
Tekoäly luo attribuuttisi antamasi kontekstin, ammatin ja kuvauksen perusteella. Kun ne on luotu, sinulla on **10 LISÄPISTETTÄ** jaettavaksi mielesi mukaan.
*   **Portaikkoiset kustannukset:** Attribuutin nostaminen 14:ään maksaa 1 pisteen. 15-16:ään nostaminen maksaa 2 pistettä. Siitä eteenpäin 17:stä ylöspäin maksaa 3 pistettä! Ajattele hyvin, mihin laitat lihaksen.

*   💪 **Voima (VOI):** Raaka fyysinen voimasi. Vaikuttaa lähitaisteluvahinkoon ja kantokykyyn.
*   ❤️ **Kestävyys (KES):** Vastustuskykysi. Kestää iskuja, tauteja ja myrkkyjä.
*   🐘 **Koko (KOK):** Vartalosi ulottuvuus. Suuri ja painava, vai pieni ja ketterä.
*   🏃 **Ketteryys (KET):** Nopeus, tarkkuus ja se, ettet kompastu omiin jalkoihisi.
*   🧠 **Älykkyys (ÄLY):** Oppiminen, muistaminen ja pulmien ratkaiseminen.
*   🔮 **Tahto (TAH):** Sielusi, onnesi, tahdonvoimasi ja maaginen reservisi.
*   😎 **Karismä (KAR):** Johtajuus, viehätysvoima ja kyky huijata (tai viettää) ihmisiä.

### 2. Nopeat laskelmat (Johdetut ominaisuudet)
Moottori laskee nämä luvut automaattisesti attribuuttiesi perusteella:

*   🩸 **Elämäpisteet (EP):** `CON * 10`. Jos ne menevät 0:aan... no, tiedät kyllä. F.
*   ✨ **Mannapisteet (MP):** `(POD * 10) + INT`. Polttoainetta taikatemppuihisi. Ilman mannaa ei ole temppuja. (Maagikko ilman mannaa on vain kaapuun pukeutunut tyyppi, joka cosplayaa).
*   ⚡ **Kestävyys (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energiasi taistelemiseen ja liikkumiseen kuolematta yrittäessä.
*   🧠 **Ihmisyys (IHMI):** `(CON+POD) * 5`. (Vain Cyberpunkissa: Mittaa, kuinka paljon sinusta on jäljellä ihmistä ennen kuin johdot sekoittavat mielesi).
*   ⚔️ **Toimintopisteet (TP):** `(INT + DES) / 2`. Määrittää aloitteesi. Se, joka iskee ensin, iskee kahdesti.

### 3. Taitosi
Alkana perustasolla (esim. Hiiviskely = KET + ÄLY) ja paranevat käyttämällä. Kyseessä on prosentti (%).

### 4. Toimintojen ratkaiseminen (Noppa)
Kun yrität tehdä jotain riskialtista (kiivetä, valehdella, hyökätä...), tekoäly pyytää sinua heittämään. Peli heittää näkymättömän **d100**:n. **(Muista: Nopat vihaavat sinua. Se on henkilökohtaista).**

*   **Tavoitteesi:** Saada numero **ALLE TAI TASOIHIN** taitotasosi.
    *   *Esimerkki:* Sinulla on 45% Kiipeilyä.
    *   Saat 30: ✅ **Onnistuminen**. Kiipeät kuin apina.
    *   Saat 80: ❌ **Epäonnistuminen**. Lyöt itsesi muhkuun.
    *   **Kriittinen:** Saada alle tai tasan **1/5 taitotasostasi** (tai 01). Eeppistä! Teet uskomatonta parkouria voltilla.
    *   **Mokaus:** **99 tai 100**. Nopat ovat päättäneet, että tänään ei ole sinun päiväsi. Housusi putoavat kesken kaiken ja lyöt kasvosi maahan.

---

## 💡 NEUVOT, JOTTA ET KUOLE (NOPEASTI)

*   **✍️ Ole kuvaileva:** Älä kirjoita vain "hyökkään". Kirjoita: *"Yritän väistää hänen kirvestään pyörähtämällä maassa ja iskeä tikarini hänen nilkkaansa"*. Tekoäly palkitsee sinut.
*   **🧪 Kokeile:** Et ole rajoittunut nappeihin. Kirjoita hullutuksia! Tekoäly improvisoi.
*   **🎭 Roolipelaa:** Mene hahmon nahkoihin. Lue kuvaukset ja toimi kuin hahmosi, älä kuin itse pyjamassa.

---

## ⚔️ TAISTELU (Aseisiin!)

Kun sanat loppuvat, on aika tapella. Taistelu on **taktista** ja toimii **kierroksittain** (aika).

### 🕹️ Toimintaperiaate:
*   **Kierrokset:** Jokainen toiminto vie aikaa. Raskaat aseet ovat hitaita (kuluttavat paljon kierroksia). Tikarit ovat nopeita.
*   **Nopeutesi:** Riippuu Toimintopisteistäsi (TP).

### Perustoiminnot:
*   **🗡️ Hyökkää:** Lyö millä tahansa, mitä sinulla on esillä.
*   **🛡️ Torju:** Siirryt puolustukseen. Vähentää vahinkoa mutta kuluttaa kestävyyttä.
*   **🏃 Pakene:** Koppavien (tai viisaiden, jotka haluavat elää) tapa.
*   **🏳️ Antaudu:** Jos näet, ettet voita, voit anoa armoa.
*   **✨ Taika / Cyberware:** Tuli, lasersäteet, hakkeroinnit...

### 💬 Vapaan tekstin toiminnot (UUSI!)
Etkö pidä napeista? Kirjoita mitä haluat tehdä, kuin puhuisit ihmismestarille!
*   **Esimerkkejä:** *"Heitä tulipallo gobliinia päin"*, *"Vedä miekkani esiin"*, *"Käytä parannusjuomaa itselleni"*.
*   **Kohtauksen ohjaaja:** Taistelu herää nyt eloon. Tekoäly luo ympäristötapahtumia ja reaktioita, jotka rikastuttavat kertomusta: putoavia palkkeja, perääntyviä vihollisia, putoavia soihtuja! Taistelukenttä ei ole enää staattinen!
*   **Jos tekoäly ei ymmärrä:** Se pyytää sinua muotoilemaan uudelleen. Sinun vuorosi EI mene hukkaan!
*   **⚠️ Rajoitus:** Esineiden siirtäminen paikkojen välillä (varustaminen repusta, ammuksien lataaminen) tehdään **Drag & Drop** -toiminnolla käyttöliittymässä, ei tekstin kautta.

### ⚠️ KULTAINEN SELVIYTYMIS SÄÄNTÖ
**VEDÄ ASETTA ESILLE ENNEN TAISTELUA!**
Aseen esiin vetäminen taistelun keskellä vie aikaa (Kierroksia). Jos jäät kiinni miekka tupessa, saat niin paljon osumia, että sinut tunnistetaan henkilöllisyystodistuksesta, samalla kun yrität kömpelösti vetää sitä esiin. TAI PAHEMPAA!, JOS SINULLA ON ASEET REPUSTA EIKÄ VARUSTEINEN VALMIINA (Anteeksi hetki, minun pitää vetää sapeli repusta, tiedän että minulla oli se tässä jossain... jossain...) 🤦‍♂️
👉 Klikkaa varustetun aseen merkkiä (oikea paneeli) vetääksesi sen esiin. Se syttyy vihreäksi.

Aseiden siirtäminen taistelun aikana vie aikaa (Kierroksia) ja voi johtaa yllätyshyökkäykseen, lisäksi on erittäin todennäköistä, että menetät vuorosi, epäonnistut hermostuneesti lähestyvän kirveen vuoksi tai pudotat sen maahan. (Ehkä ei ollut hyvä idea luoda ADHD-hahmoa)

---

## ✨ TAINA JA KYBERNETIIKKA

Riippuen siitä, onko maailmasi "Keskiaikainen Fantasia" vai "Cyberpunk":

### 🧙‍♂️ Fantasia: Lumoukset
Oletko velho? Voit lumota varusteesi.
1.  **Opi:** Tarvitset loitsun käsi- tai grimoiikistasi.
2.  **Heitä (Drag & Drop):** Raahaa loitsu listaltasi esineen päälle inventaariossasi.
3.  **Kustannus:** Aktiivisen lumouksen ylläpitäminen **kuluttaa mannaa per kierros**.
4.  **Huom:** Jos manna loppuu taistelun keskellä, tulipykäys on taas vain ruosteinen rautakappale.

### 🦾 Cyberpunk: Implantit
Haluatko silmät zoomilla tai apinan käsivarret?
1.  Etsi **Teknokirurgi** (NPC-palvelija).
2.  Maksa krediitit (mikään ei ole ilmaista tulevaisuudessa).
3.  **Ihmisyyden kustannus:** Jokainen implantti vie pienen palan sieluasi (**Ihmisyys**).
    *   Jos laitat liikaa, muutut **Kyberpsykoksi** (tappavaksi robottitoasteriksi) ja menetät hahmosi hallinnan.

---

## 🛒 KAUPAT JA PALVELUT (SIS)

Puhu NPC:iden kanssa kauppaa käydäksesi.
*   **Tekoäly ehdottaa, sinä päätät:** Kun puhut kauppiaan tai parantajan kanssa, tekoäly ehdottaa heidän palveluitaan (korjaus, myynti, parannus), mutta ilmestyy **"Näytä palvelut"** -nappi, jotta voit itse päättää, milloin siirryt transaktiomoodiin.
*   **Tinkiminen:** **Kauppa**-taitosi (perustuen Karismaan) päättää hinnat. Jos olet ruma tai epäkohtelias, sinua huijataan.
*   **Myynti:** Klikkaa **hiiren oikealla painikkeella** esinettä inventaariossasi myydäksesi sen kauppiaalle tai raahaa se hänen päälleen.

---

## 🎒 INVENTAARION HALLINTA (Tetris)

*   **Paino:** Sinulla on kantorajoitus (Voima + Koko). Jos kannat liikaa romua, olet hidas ja saat rangaistuksia (Diogenes ei ole ystäväsi).
*   **Paneelit:**
    *   **Varusteet:** Se, mitä sinulla on päällä.
    *   **Vyö:** Nopea pääsy taistelussa (vie vähemmän aikaa käyttää juomia täältä).
    *   **Reppu:** Säkin pohja.
*   **Sujuva käyttö:** Raahaa juoma tai ruokaa suoraan **kasvojesi** (muotokuvasi) päälle kuluttaaksesi sen välittömästi. Voit myös käyttää kontekstivalikkoa (hiiren oikea painike -> Käytä).

---

## 🛠️ LOPPUASENNUKSIA

**Asetukset**-valikosta voit muokata kaikkea:
*   **🌍 Kieli:** Tekoäly kääntää koko pelin ja vastaukset lennossa. Monikielinen tila aktivoitu.
*   **👁️ Ulkoasu:** Kirjainkoko ja värit, jotta et sokeudu. Neonreunat ja pehmeät varjot täydelliseen immersioon.
*   **🧠 Tekoälyn asetukset:** Vaihda mallia, lämpötilaa jne. (Muista, mitä olemme käyneet läpi manuaalin alussa `--advanced` lipusta, jos olet sellainen, joka haluaa koskea kaikkeen).

---

## 🎭 VAIKEUSTASO JA HUUMORI (Mukauta kärsimystäsi)

Ennen aloittamista, muista, että tekoäly ei vain kerro tarinaa, vaan **muokkaa maailmaa** mieltymystesi mukaan. Nämä parametrit valitaan maailman luomisen yhteydessä ja ovat pysyviä kyseisessä maailmassa:

*   **🎮 Vaikeustaso (Tekoälyn hallitsema):** Ei ole vain vahinkokerroin. Peli käskee tekoälyä: "Hei, vaikeustaso on tämä, toimi sen mukaisesti".
    *   **Helppo:** Et kuole koskaan (tai se on lähes mahdotonta), tilanteet ovat yksinkertaisempia, hinnat ovat halvempia ja viholliset ovat kömpelömpiä. Tekoäly järkeilee jokaisen kohtauksen, jotta polkusi olisi ruusuilla tanssimista.
    *   **Normaali:** Standardi tasapaino.
    *   **Haaste:** Tekoäly on armoton, hinnat ovat kohtuuttomia ja jokainen virhe voi olla viimeinen.

*   **🃏 Huumorin sävy:** Määrittää, miten tekoäly puhuu sinulle ja millaisia tapahtumia esiintyy. Vaikka jokaisella mallilla on oma tapansa tulkita "huumoria", tekoäly yrittää mukautua valintaasi... tai sitten ei:
    *   **Vakava:** Eeppinen, synkkä ja muodollinen kerronta.
    *   **Sarkastinen:** Tekoäly nauraa virheillesi, heittelee jatkuvasti ivallisia huomautuksia ja käyttää ironista sävyä.
    *   **Mielipuolinen:** Valmistaudu absurdiin. Lentävät lehmät, surrealistiset tilanteet ja täysi kaaos tekoälyn kieroutuneimman logiikan hallitsemana.

---

## 🚧 Huomautus: Ennakkojulkaisu

RolemIAster on **aktiivisessa kehityksessä**, kypsyen hitaasti.
*   Voit löytää bugeja (tai "odottamattomia ominaisuuksia").
*   Lisään uusia asioita joka viikko.
*   Palautteesi on kullanarvoista! Kerro, mistä pidät ja mistä pidät todella paljon. (Jos et pidä jostain, kerro myös, mutta lempeästi).

Nyt mene, heitä aloitusheitto ja luo legendasi!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->