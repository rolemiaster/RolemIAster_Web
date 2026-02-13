# 🐉 Tervetuloa RolemIAsteriin!

Ota noppasi (tai hiiresi) mukaan ja valmistaudu seikkailuihin, joissa ainoa raja on mielikuvituksesi villiyden aste! **RolemIAster** on tekoälyllä toimiva, loputon roolipeli, joka antaa sinun olla omien tarinoidesi sankari (tai pahis).

---

## ⚠️ OIKEUDELLINEN HUOMAUTUS (Tylsä, mutta välttämätön osa)

**LUE TAI KÄRSIT NOPPIEN VIHASTA:**

1.  **🤖 Integroitu paikallinen tekoäly:** RolemIAster tuo oman digitaalisen aivonsa. Se toimii **ilman internetiä** eikä vaadi sinulta mitään erikoisia toimenpiteitä. Asenna ja pelaa!
2.  **☁️ Valinnainen pilvi:** Jos haluat tuhlata rahaa ulkoisiin tekoälyihin (OpenAI, Gemini...), se on omalla vastuullasi luottokorttisi kanssa. Kulut ovat sinun.
3.  **🎲 Generatiivinen kaaos:** Tekoäly keksii tarinan lennossa. Jos pelinjohtaja sekoaa ja ilmoittaa, että taivaalta sataa lehmiä, älä syytä meitä. Kehittäjä ei ole vastuussa mallin tuottamista hulluuksista.
4.  **🏗️ Varhainen pääsy:** Tämä on vielä työn alla. Jos löydät bugin, se ei ole virhe, vaan yllättävä "ominaisuus"! (Lähetä meille palautetta, se auttaa meitä paljon).

---

## 🖥️ JÄRJESTELMÄVAATIMUKSET JA DIGITAALISET AIVOT (Tekoäly)

RolemIAster toimii **paikallisella tekoälyllä**. Tämä tarkoittaa, että tietokoneesi tekee raskaan ajatustyön. Internetiä ei tarvita, mutta tarvitaan näytönohjain, joka ei ole peräisin dinosaurusten ajoilta. (Huomautus: Jos huoneessasi on kylmä, tämä peli toimii ilmaisena lämmittimenä).

### ⚙️ Käsitteitä aloittelijoille

**VRAM (Näyttömuisti)** on tekoälyn polttoainetta.
*   RolemIAsterin tarvitsee "muistaa" **12 000–16 000 sanaa (tokenia)**, jotta se ei kadota tarinan lankaa.
*   Jos näytönohjaimesi muisti loppuu, peli hidastuu enemmän kuin astmaa sairastava etana.

---

### 📊 MALLIKATALOGI (Valitse myrkkyynne)

Hallitse tekoälyjäsi kohdassa **Asetukset → Integroitu paikallinen tekoäly → Hallitse malleja**.

#### 🏆 Qwen 2.5 -perhe (Kerman kerma)

| Malli | Koko | Vähimmäis-VRAM | Taso | Tuomio |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Harjoittelija.** Selviytyy, mutta älä pyydä sitä kirjoittamaan Shakespearea. Menee välillä sekaisin. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **VALITTU.** Tasapainoinen, fiksu ja nopea. Tämä on oletuksena suositeltu malli. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Professori.** Rikas, syvällinen kerronta ja erittäin luonnolliset dialogit. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Jumalataso.** Tarvitset avaruusaluksen (RTX 3090/4090) pyörittääksesi tätä. |

---

### 🎮 NOPEA VALINTAOPAS

| Näytönohjaimesi | VRAM | Suositeltu malli | Tulos |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Juuri ja juuri pelattava (matala konteksti) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Toimii hyvin |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Lentää |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Ihanteellinen kokemus |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luksusta |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maksimilaatu |

**💡 Vinkki:** Jätä aina noin **2GB VRAMia vapaaksi** käyttöjärjestelmälle, muuten Windows alkaa itkeä ja sulkea ohjelmia.

---

### 🚨 APUA! PC:NI ON HIDAS! (VRAM-ongelmat)

Jos pelin vastaaminen kestää kauemmin kuin ihastuksesi vastaaminen WhatsAppissa, olet todennäköisesti loppunut VRAMista.

**Oireita, että olet ollut liian optimistinen:**
1.  **Malli siirtyy RAMiin:** Tietokone käyttää normaalia muistia näytönohjaimen sijaan. Tulos: EXTREEMINEN HIDASTUMINEN.
2.  **Vähäinen ylivuoto (1-2GB):** Vastaus kestää 30-60 sekuntia.
3.  **Kohtalainen ylivuoto (3-5GB):** 2–5 minuuttia. Voit käydä hakemassa kahvia.
4.  **Vakava ylivuoto:** 10–30 minuuttia. Pelaamiskelvoton.

#### 🛡️ HÄTÄPROTOKOLLA
Jos tilanne menee huonoksi, noudata näitä ohjeita järjestyksessä:

1.  **📉 Laske VRAM-%:** Mene Asetuksiin ja laske se **85%:iin**. Käynnistä uudelleen ja kokeile.
2.  **🧹 Siivous:** Sulje se selain, jossa on 40 välilehteä auki. Ne syövät muistiasi.
3.  **🛑 70% raja:** Älä koskaan laske allokoitua VRAMia alle **70%:iin**.
    *   *Miksi?* Koska tekoäly tarvitsee tilaa "ajatella" (KV-välimuisti). Jos annat sille alle 70%, se menee tyhjäksi ja antaa virheen.
4.  **🔙 Taktinen vetäytyminen:** Jos mikään muu ei auta, vaihda pienempään malliin (7B -> 3B).

---

### ⚙️ MALLIN LAAJENNUSASSETUKSET

Niille, jotka tykkäävät säätää nappeja kohdassa **Asetukset → Integroitu paikallinen tekoäly**:

| Vaihtoehto | Toiminto | Suositus |
|--------|---------|---------------|
| **GPU Layers** | Kuinka suuri osa mallista ladataan näytönohjaimelle | **-1** (Tarkoittaa "KAIKKI". Älä koske, ellei tiedä mitä tekee) |
| **Maksimi konteksti** | Tekoälyn "lyhytkestoinen muisti" | **16384 - 32768** (Alle sen ja tekoäly kärsii muistinmenetyksestä) |
| **Lämpötila** | Luovuus vs. hulluus | **0.7 - 0.8** (Korkeampi = hullumpi; Alempi = robottimaisempi) |
| **Historiallinen RAG** | Muistaa asioita kaukaa | **Kyllä** (Välttämätön pitkille kampanjoille) |
| **Välimuistita upotukset** | Nopeuttaa muistojen hakua | **Kyllä** (Tekee siitä nopeamman) |

---

### 🔧 ONGELMANRATKAISU (Troubleshooting)

| Vika | Korjaus |
|-------|---------|
| **Tekoäly hidas / Lagia** | Tarkista, että `GPU Layers` on -1. Sulje Chrome. Laske `Maksimi konteksti`. |
| **Muistivirhe (OOM)** | Vähennä `Maksimi konteksti` tai valitse pienempi malli (3B). |
| **Tekoäly sekoilee / Hallusinoi** | Laske `Lämpötila` 0.6:een. Jos se edelleen sekoilee, käynnistä sovellus uudelleen. |

---

### 🌐 VAIHTOEHTOISISET TOIMITTAJAT (Vain asiantuntijat)

> **Huomautus:** Pelin mukana tuleva paikallinen tekoäly riittää hyvin. Tämä on vain edistyneille tai rohkeille käyttäjille.

*   **Ulkoiset paikalliset moottorit:**
    *   **Ollama / LM Studio:** Jos sinulla on jo omia nörttimallejasi, voit käyttää niitä.
*   **Pilvipalvelut (maksullisia):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vaatii internetin ja rahaa.
    *   Määritä kohdassa: **Asetukset → Tekoäly → Lisää uusi toimittaja**.

---

## 🎲 MITEN PELATA?

Kun avaat pelin, sinulla on kaksi polkua:

1.  **🆕 Uusi seikkailu**: Luo legendasi tyhjästä. Peli ohjaa sinua valitsemaan rodun, luokan, maailman ja lähtökohdan. (Jos elämä antaa sinulle sitruunoita... tai 3 voimaa, ryhdy bardiksi).
2.  **💾 Lataa peli**: Jatka siitä, mihin jäit ennen sitä nöyryyttävää kuolemaa. (Tai korjataksesi sen "pienen laskuvirheen" lohikäärmeen kanssa).

### Käyttöliittymä (Ohjaamosi)

*   **Vasemmanpuoleinen paneeli (SINÄ):** Hahmolomakkeesi. Elämä, manaa, taidot ja kuinka komea olet (Karismasi).
*   **Keskipaneeli (TARINA):**
    *   **Ylhäällä:** Mistä pelinjohtaja kertoo, mitä tapahtuu.
    *   **Alhaalla:** Päätöspainikkeesi ja tekstilaatikko kirjoittaa mitä haluat tehdä.
*   **Oikeanpuoleinen paneeli (OMAT TAVARASI):** Inventaario ja varusteet. Digitaalisen hamstraajan paratiisi.

---

## 📜 PELISÄÄNNÖT (Kyllä, on sääntöjä)

RolemIAster käyttää klassista ja vankkaa d100-järjestelmää (sadansivuisia noppia).

### 1. Attribuuttisi (Mikä määrittelee sinut)
Ne generoidaan satunnaisesti, kuten ikivanhoissa pöytäroolipeleissä!

*   💪 **Voima (VUO):** Lyödä kovaa ja nostaa kiviä.
*   ❤️ **Kestävyys (KES):** Kestää iskuja, tauteja ja myrkkyjä.
*   🐘 **Koko (KOK):** Suuri ja painava, tai pieni ja vikkelä.
*   🏃 **Ketteryys (KET):** Nopeus, tarkkuus ja ettei kompastu omiin jalkoihin.
*   🧠 **Älykkyys (ÄLY):** Oppia, muistaa ja ratkaista pulmia.
*   🔮 **Voima (VOI):** Sielusi, onnesi, tahdonvoimasi ja taikuutesi.
*   😎 **Karismasi (KAR):** Johtajuus, viehätysvoima ja kyky huijata ihmisiä.

### 2. Nopeat laskelmat (Johdetut ominaisuudet)
*   **Elämäpisteet (EP):** `(KES + KOK) / 2`. Jos ne laskevat nollaan... no, tiedät kyllä. F.
*   **Mana Pisteet (MP):** Yhtä suuri kuin VOI. Ilman manaa ei temppuja. (Mies ilman manaa on vain kaapuun pukeutunut tyyppi cosplayaamassa).
*   **Toimintopisteet (TP):** `(ÄLY + KET) / 2`. Määrittää aloitteesi. Se, joka lyö ensin, lyö kahdesti.

### 3. Taitosi
Ne alkavat perusarvolla (esim. Hiiviskely = KET + ÄLY) ja paranevat käyttämällä niitä. Ne ovat prosentteja (%).

### 4. Toimintojen ratkaisu (Noppa)
Kun yrität tehdä jotain riskialtista (kiivetä, valehdella, hyökätä...), tekoäly pyytää sinua heittämään.
Peli heittää näkymättömän **d100**:n. **(Muista: Nopat vihaavat sinua. Se on henkilökohtaista).**

*   **Tavoitteesi:** Heittää **ALLE TAI TASA** taitosi arvon.
    *   *Esimerkki:* Sinulla on 45% kiipeämistaitoa.
    *   Heität 30: ✅ **Onnistuminen**. Kiipeät kuin apina.
    *   Heität 80: ❌ **Epäonnistuminen**. Kaadut päin pläsiä.
    *   Heität 01-05: ✨ **KRIIITTINEN!** Teet eeppisen parkourin kärrynpyörällä.
    *   Heität 99-100: 💀 **PUUSKA!** Housusi tippuvat kesken matkan ja kaadut naama edellä.

---

## 💡 VINKKEJÄ (EI NOPEASTI KUOLEMISEEN)

*   **✍️ Ole kuvaileva:** Älä kirjoita vain "hyökkään". Kirjoita: *"Yritän väistää hänen kirvestään pyörimällä maassa ja isken tikarillani hänen nilkkaansa."* Tekoäly palkitsee sinut.
*   **🧪 Kokeile:** Et ole rajoittunut painikkeisiin. Kirjoita hulluja juttuja! Tekoäly improvisoi.
*   **🎭 Roolipelaa:** Uppoudu rooliin. Lue kuvaukset ja toimi hahmosi tavoin, älä niin kuin itse tekisit pyjamassa.

---

## ⚔️ TAISTELU (Aseisiin!)

Kun sanat loppuvat, on aika lyödä turpaan. Taistelu on **taktista** ja toimii **kierroksina** (aika).

### 🕹️ Miten se toimii:
*   **Kierrokset:** Jokainen toimi maksaa aikaa. Raskaat aseet ovat hitaita (kuluttavat paljon kierroksia). Tikarit ovat nopeita.
*   **Oma nopeutesi:** Riippuu Toimintopisteistäsi (TP).

### Perustoimet:
*   **🗡️ Hyökkää:** Anna isku sillä, mikä on riisuttu.
*   **🛡️ Torju:** Menet puolustuskannalle. Vähentää vahinkoa, mutta kuluttaa kestävyyttä.
*   **🏃 Pakene:** Pelkurien (tai viisaiden, jotka haluavat elää) keino.
*   **🏳️ Antautuminen:** Jos näet, ettet voita, voit anoa armoa.
*   **✨ Taikuus / Kybernetiikka:** Tuli, lasersäteet, hakkeroinnit...

### ⚠️ SELVIYTYMISEN KULTAINEN SÄÄNTÖ
**RIISU ASE ENNEN TAISTELUA!**
Aseen esiin vetäminen taistelun keskellä kuluttaa aikaa (kierroksia). Jos sinut yllätetään miekka tupessa, sinut lyödään niin, että nahkasi irtoaa, samalla kun yrität kömpelösti vetää sitä esiin. TAI PAREMPI VIELÄ!, JOS KANNAT ASEITA SELKÄREPUSSISSASI VARUSTELOTASKUN SIJAAN (Anteeksi hetki, minun täytyy kaivaa suurmiekan repusta, tiedän että se oli täällä jossain... jossain?) 🤦‍♂️
👉 Klikkaa varustetun aseen tunnusta (oikea paneeli) vetääksesi sen esiin. Se syttyy vihreäksi.

Aseiden siirtäminen taistelun aikana kuluttaa aikaa (kierroksia) ja voi johtaa yllätyshyökkäykseen, lisäksi on hyvin todennäköistä, että menetät vuorosi, epäonnistut hermostuksissasi lähestyvästä kirveeniskusta kulmakarvoihisi tai että se putoaa maahan. (Ehkä ei ollut hyvä idea luoda hahmoa ADHD:lla)

---

## ✨ MAGIA JA KYBERNETIIKKA

Riippuen siitä, onko maailmasi "Keskiaikainen fantasia" vai "Cyberpunk":

### 🧙‍♂️ Fantasia: Lumoukset
Oletko velho? Voit lumota varusteesi.
1.  **Opi:** Tarvitset loitsun grimuaarissasi.
2.  **Heitä (Raahaa ja pudota):** Raahaa loitsu listaltasi esineen päälle inventaariossasi.
3.  **Kustannus:** Lumouksen pitäminen aktiivisena **kuluttaa manaa vuorossa**.
4.  **Varoitus:** Jos manasi loppuu taistelun keskellä, tulimiekka muuttuu taas ruosteiseksi rautakangiksi.

### 🦾 Cyberpunk: Implantit
Haluatko zoom-silmät tai apinan kädet?
1.  Etsi **Teknokirurgi** (palvelun tarjoaja NPC).
2.  Maksa krediitit (mikään ei ole ilmaista tulevaisuudessa).
3.  **Ihmisyyden kustannus:** Jokainen implantti vie palan sielustasi (**Ihmisyys**).
    *   Jos laitat liikaa, sinusta tulee **Kyberpsyko** (tappajaksi muuttunut kulmalevy jaloilla) ja menetät hahmosi hallinnan.

---

## 🛒 KAUPAT JA PALVELUT

Puhu NPC:iden kanssa kauppaa käydäksesi.
*   **Tinkiminen:** **Kauppa**-taitosi (perustuu Karismaan) määrittää hinnat. Jos olet ruma tai epäystävällinen, sinua huijataan.
*   **Myyminen:** Klikkaa **Oikealla painikkeella** inventaariosi esinettä myydäksesi sen kauppiaalle.

---

## 🎒 INVENTAARION HALLINTA (Tetris)

*   **Paino:** Sinulla on kantorajoitus (Voima + Koko). Jos kannat liikaa romua, liikut hitaasti ja saat rangaistuksia (Hamstraaminen ei ole ystäväsi).
*   **Paneelit:**
    *   **Varusteet:** Mitä sinulla on päälläsi.
    *   **Vyö:** Nopea pääsy taistelussa (juomien käyttö tästä kuluttaa vähemmän aikaa).
    *   **Repussa:** Säkin pohja.
*   **Nopea käyttö:** Raahaa juoma tai ruoka suoraan **kasvoillesi** (muotokuvaan) kuluttaaksesi sen välittömästi.

---

## 🛠️ LOPPUASETUKSET

**Asetus**-valikosta voit säätää kaikkea:
*   **🌍 Kieli:** Tekoäly kääntää koko pelin ja vastaukset lennossa.
*   **👁️ Ulkoasu:** Fonttikoko ja värit, ettei sokeudu.
*   **🧠 Tekoälyn asetukset:** Vaihda mallia, lämpötilaa jne.

---

## 🚧 Huomautus: Varhainen pääsy

RolemIAster on **aktiivisessa kehityksessä**, kypsymässä hitaasti.
*   Voit löytää bugeja (tai "yllättäviä ominaisuuksia").
*   Lisään uusia asioita joka viikko.
*   Palautteesi on kullanarvoista! Kerro, mistä pidät ja mistä todella pidät.

Mene nyt, heitä aloite ja luo legendasi!

<!-- source_hash: 2511f352 -->