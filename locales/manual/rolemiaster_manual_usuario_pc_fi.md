# 🐉 Tervetuloa RolemIAsteriin!

Nappaa noppasi (tai hiiresi) ja valmistaudu seikkailuihin, joissa ainoana rajana on mielikuvituksesi kierous! **RolemIAster** on tekoälyllä toimiva loputon roolipeli, joka antaa sinun olla omien tarinoidesi sankari (tai roisto).

---

## ⚠️ VASTUUVAPAUSLAUSEKE (Tylsä mutta pakollinen osuus)

**LUE TÄMÄ TAI KOE NOPPIEN VIHA:**

1.  **🤖 Integroitu paikallinen tekoäly:** RolemIAster tuo mukanaan omat digitaaliset aivonsa. Se toimii **ilman internetiä** eikä sinun tarvitse säätää mitään outoa. Asenna ja pelaa!
2.  **☁️ Valinnainen pilvi:** Jos haluat mieluummin tuhlata rahasi ulkoisiin tekoälyihin (OpenAI, Gemini...), luottokorttisi on omalla vastuullasi. Kulut ovat sinun huolesi.
3.  **🎲 Generatiivinen kaaos:** Tekoäly keksii tarinan lennosta. Jos kertoja sekoaa ja väittää lehmiä satavan taivaalta, älä katso meihin. Kehittäjä ei ole vastuussa mallin generoimista hulluuksista.
4.  **🏗️ Early Access:** Tämä on työmaa. Jos löydät bugin, se ei ole virhe, vaan yllätysominaisuus! (Lähetä palautetta, kiitos, se auttaa meitä paljon).

---

## 🖥️ JÄRJESTELMÄVAATIMUKSET JA DIGITAALISET AIVOT (TEKOÄLY)

RolemIAster toimii **paikallisella tekoälyllä**. Se tarkoittaa, että tietokoneesi tekee raskaan ajatustyön. Et tarvitse internetiä, mutta tarvitset näytönohjaimen, joka ei ole dinosaurusajalta. (Huom: Jos huoneessasi on kylmä, tämä peli toimii ilmaisena lämmityksenä).

### ⚙️ Käsitteitä vasta-alkajille

**VRAM (Video Random Access Memory)** on tekoälyn polttoainetta.
*   RolemIAsterin täytyy "muistaa" **12 000 – 16 000 sanaa (tokenia)**, jotta se ei kadota tarinan lankaa.
*   Jos GPU:stasi loppuu muisti, peli toimii hitaammin kuin etana, jolla on astma.

---

### 📊 MALLIKUVASTO (Valitse myrkkysi)

Hallitse tekoälyjäsi kohdassa **Asetukset → Integroitu paikallinen tekoäly → Hallitse malleja**.

#### 🏆 Qwen 2.5 -perhe (Parhaista parhaat)

| Malli | Koko | Minimi VRAM | Taso | Tuomio |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5 Gt | **8 Gt** | B | 👶 **Harjoittelija.** Suoriutuu, mutta älä pyydä sitä kirjoittamaan Shakespearea. Menee välillä sekaisin. |
| **Qwen2.5-7B** | ~5.5 Gt | **12 Gt** | A | ✅ **VALITTU.** Tasapainoinen, fiksu ja nopea. Tämä on suositeltu oletusmalli. |
| **Qwen2.5-14B** | ~10 Gt | **16 Gt** | S | 🧐 **Professori.** Rikas, syvällinen kerronta ja hyvin luonnollinen dialogi. |
| **Qwen2.5-32B** | ~22 Gt | **32 Gt** | S+ | 👑 **Jumala-taso.** Tarvitset avaruusaluksen (RTX 3090/4090) pyörittääksesi tätä. |

---

### 🎮 PIKAVALINTAOPAS

| Näytönohjaimesi | VRAM | Suositeltu malli | Tulos |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4 Gt | Qwen2.5-3B | 🆗 Just ja just pelattava (Alhainen konteksti) |
| GTX 1070/1660 | 6 Gt | Qwen2.5-3B | 🆗 Toimii hyvin |
| RTX 2060/3060 | 8 Gt | Qwen2.5-3B | 🚀 Lentää |
| RTX 3070/4060Ti | 12 Gt | **Qwen2.5-7B** | ✅ Ihanteellinen kokemus |
| RTX 3090/4080 | 16-24 Gt | Qwen2.5-14B | 🌟 Luksusta |
| RTX 4090 | 24 Gt | Qwen2.5-32B | 👑 Maksimaalinen laatu |

**💡 Pro-vinkki:** Jätä aina noin **2 Gt VRAMia vapaaksi** käyttöjärjestelmälle, tai Windows alkaa itkeä ja sulkea asioita.

---

### 🚨 APUA! TIETOKONEENI ON HIDAS! (VRAM-ongelmat)

Jos peli vastaa hitaammin kuin ihastuksesi WhatsAppissa, VRAM on luultavasti loppu.

**Oireita siitä, että olet yliarvioinut koneesi:**
1.  **Malli siirtyy RAM-muistiin:** PC käyttää tavallista muistia näytönohjaimen sijaan. Tulos: ÄÄRIMMÄINEN HITAUS.
2.  **Lievä ylivuoto (1-2 Gt):** Vastaus kestää 30-60 sekuntia.
3.  **Kohtalainen ylivuoto (3-5 Gt):** 2-5 minuuttia. Voit hakea kahvia.
4.  **Vakava ylivuoto:** 10-30 minuuttia. Pelikelvoton.

#### 🛡️ Hätäprotokolla
Jos asiat menevät pieleen, seuraa näitä vaiheita järjestyksessä:

1.  **📉 Laske VRAM %:** Mene asetuksiin ja laske se **85 %:iin**. Käynnistä uudelleen ja kokeile.
2.  **🧹 Siivous:** Sulje se selain, jossa on 40 välilehteä auki. Ne syövät muistiasi.
3.  **🛑 70 %:n raja:** Älä koskaan alita **70 %** varattua VRAMia.
    *   *Miksi?* Koska tekoäly tarvitsee tilaa "ajatella" (KV-välimuisti). Jos annat sille alle 70 %, se menee lukkoon ja antaa virheen.
4.  **🔙 Taktinen perääntyminen:** Jos mikään ei toimi, vaihda pienempään malliin (siirry 7B:stä 3B:hen).

---

### ⚙️ MALLIN LISÄASETUKSET ("Maksiminörtteily")

> **ASIANTUNTIJATILA:** Jos olet pro ja haluat päästä käsiksi edistyneisiin malliasetuksiin (lisätä omia GGUF-malleja HuggingFacesta, säätää tasoja jne.), sinun on käynnistettävä peli komennolla: `--advanced`.

Niille, jotka tykkäävät painella nappuloita kohdassa **Asetukset → Integroitu paikallinen tekoäly**:

| Asetus | Toiminto | Suositus |
|--------|---------|---------------|
| **GPU Layers** | Kuinka suuri osa mallista ladataan näytönohjaimelle | **-1** (Tarkoittaa "KAIKKI". Älä koske, ellet tiedä mitä teet) |
| **Contexto Máximo** | Tekoälyn "lyhytkestoinen muisti" | **16384 - 32768** (Tätä vähemmän ja tekoäly kärsii muistinmenetyksestä) |
| **Temperatura** | Luovuus vs. Hulluus | **0.7 - 0.8** (Korkeampi = hullumpi; Matalampi = robottimaisempi) |
| **RAG de Historial** | Muistaa asioita kaukaa menneisyydestä | **Kyllä** (Välttämätön pitkissä kampanjoissa) |
| **Cachear Embeddings** | Nopeuttaa muistojen hakua | **Kyllä** (Tekee toiminnasta nopeampaa) |

---

### 🔧 VIANMÄÄRITYS (Troubleshooting)

| Moka | Korjaus |
|-------|---------|
| **Hidas tekoäly / Lag** | Tarkista, että `GPU Layers` on -1. Sulje Chrome. Laske `Contexto Máximo`. |
| **Muistivirhe (OOM)** | Pienennä `Contexto Máximo` tai valitse pienempi malli (3B). |
| **Tekoäly hourailee / Hallusinoi** | Laske `Temperatura` arvoon 0.6. Jos se on edelleen hullu, käynnistä sovellus uudelleen. |

---

### 🌐 VAIHTOEHTOISET TARJOAJAT (Vain asiantuntijoille)

> **Huom:** Pelin mukana tuleva paikallinen tekoäly riittää mainiosti. Tämä on vain edistyneille käyttäjille tai rohkeille.

*   **Ulkoiset paikalliset moottorit:**
    *   **Ollama / LM Studio:** Jos sinulla on jo omat nörttimallisi, voit käyttää niitä.
*   **Pilvi-API:t (Maksulliset):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vaatii internetin ja rahan menettämistä.
    *   Konfiguroi kohdassa: **Asetukset → Tekoäly → Lisää uusi tarjoaja**.

---

### 🌍 KUINKA PELATAAN? (Multiversumi ja sinä)

Kun avaat pelin, sinulla on kaksi polkua:

1.  **🆕 Uusi seikkailu**: Luo legendasi tyhjästä. Peli kysyy **Nimeä, Ammattia, Fyysistä kuvausta, Psykologista kuvausta ja Taustaa/Veruketta** tarinallesi. Lisäksi valitset **Vaikeustason** ja **Huumorin sävyn**, jotka ohjaavat kampanjaa.
2.  **💾 Jatka peliä**: RolemIAster **tallentaa reaaliajassa**. Tässä ei ole "lataa ennen kuolemaa" -toimintoa eikä paluuta. Jokainen päätös, jokainen moka ja jokainen haava tallentuu pysyvästi tarinaan. Se on **HAASTE**: tehty mikä tehty. Elä seurausten kanssa... tai kuole niiden mukana.

RolemIAster ei ole yksittäinen peli; se on **Pysyvä Multiversumi**.
*   **Loputtomat maailmat:** Luo omat universumisi (**Keskiaikainen fantasia** tai **Cyberpunk**) omalla Lorellaan.
*   **Loputtomat hahmot:** Kunkin maailman sisällä voit pitää niin monta sankaria kuin haluat.
*   **Jaettu aikajana:** Huomio! Se mitä yksi hahmo tekee, vaikuttaa muiden maailmaan. Tekoäly on tietoinen muista sankareistasi ja tunnistaa heidät maailman asukkaiksi.
*   **Tekoäly "aisteilla" (Super RAG):** RAG-järjestelmä (Retrieval-Augmented Generation) toimii tekoälyn "kielikellona", antaen sille muistoja maailmasta, seuralaisistasi, sijainnistasi ja siitä mitä juuri tapahtui, jotta tarina on 100 % johdonmukainen.

### Käyttöliittymä (Sinun ohjaamosi)

*   **Vasen paneeli (SINÄ):** Hahmolomakkeesi. Terveys, mana, taidot ja kuinka hyvännäköinen olet (Karisma).
*   **Keskipaneeli (TARINA):**
    *   **Ylhäällä:** Missä kertoja kertoo tapahtumat.
    *   **Alhaalla:** Päätöspainikkeet ja tekstikenttä vapaata kirjoittamista varten.
*   **Oikea paneeli (TAVARASI):** Inventaario ja varusteet. Digitaalisen hamstraajan paratiisi.

---

## 📜 PELISÄÄNNÖT (Kyllä, sääntöjä on)

RolemIAster käyttää klassista ja vankkaa d100 (satasivuinen noppa) -järjestelmää.

### 1. Ominaisuutesi (Se mikä määrittelee sinut)
Tekoäly generoi ominaisuutesi kontekstin, ammatin ja kuvauksen perusteella. Kun ne on generoitu, sinulla on **10 LISÄPISTETTÄ** jaettavaksi mielesi mukaan.
*   **Porrastetut kustannukset:** Ominaisuuden nostaminen arvoon 14 maksaa 1 pisteen. 15:stä 16:een maksaa 2 pistettä. 17:stä eteenpäin maksaa 3 pistettä! Mieti tarkkaan, mihin laitat lihakset.

*   💪 **Voima (FUE):** Puhdas fyysinen voimasi. Vaikuttaa lähitaisteluvaurioon ja kantokykyyn.
*   ❤️ **Ruumiinrakenne (CON):** Kestävyytesi. Iskujen, sairauksien ja myrkkyjen sietämiseen.
*   🐘 **Koko (TAM):** Ulottuvuutesi. Suuri ja raskas tai pieni ja liukas.
*   🏃 **Ketteryys (DES):** Notkeus, tarkkuus ja omiin jalkoihin kompastumisen välttäminen.
*   🧠 **Älykkyys (INT):** Oppiminen, muistaminen ja pulmien ratkaisu.
*   🔮 **Mahti (POD):** Sielusi, onnesi, tahdonvoimasi ja taikavarantosi.
*   😎 **Karisma (CAR):** Johtajuus, viehätysvoima ja kyky huijata (tai vietellä) ihmisiä.

### 2. Nopeaa matematiikkaa (Johdetut ominaisuudet)
Moottori laskee nämä luvut automaattisesti ominaisuuksiesi perusteella:

*   🩸 **Terveys (PV):** `CON * 10`. Jos se menee nollaan... noh, tiedät kyllä. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Polttoaine taikatempuillesi. Ilman manaa ei ole temppuja. (Velho ilman manaa on vain kaapuun pukeutunut tyyppi cossaamassa).
*   ⚡ **Kunto (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energiasi taisteluun ja liikkumiseen kuolematta yrittäessäsi.
*   🧠 **Ihmisyys (HUM):** `(CON+POD) * 5`. (Vain Cyberpunkissa: Mittaa kuinka paljon sinusta on ihmistä jäljellä ennen kuin kaapelit tekevät sinut hulluksi).
*   ⚔️ **Toimintapisteet (PA):** `(INT + DES) / 2`. Määrittää aloitekykysi. Se joka lyö ensin, lyö kahdesti.

### 3. Taitosi
Alkaa perusarvosta (esim. Hiiviskely = DES + INT) ja kehittyy käyttämällä. Se on prosenttiosuus (%).

### 4. Toimintojen ratkaisu (Noppa)
Kun yrität jotain riskialtista (kiivetä, valehdella, hyökätä...), tekoäly pyytää heittoa. Peli heittää näkymätöntä **d100**-noppaa. **(Muista: Nopat vihaavat sinua. Se on henkilökohtaista).**

*   **Tavoitteesi:** Saada luku, joka on **PIENEMPI TAI YHTÄ SUURI** kuin taitotasosi.
    *   *Esimerkki:* Sinulla on 45 % Kiipeilyssä.
    *   Saat 30: ✅ **Onnistuminen**. Kiipeät kuin apina.
    *   Saat 80: ❌ **Epäonnistuminen**. Putuat perseellesi.
    *   **Kriittinen:** Tulos on pienempi tai yhtä suuri kuin **1/5 taidostasi** (tai 01). Eeppistä! Teet uskomattoman parkour-liikkeen voltilla.
    *   **Moka:** **99 tai 100**. Nopat ovat päättäneet, ettei tänään ole sinun päiväsi. Housusi putoavat puolimatkassa ja putoat naamallesi.

---

## 💡 VINKKEJÄ KUOLEMAN VÄLTTÄMISEEN (NOPEASTI)

*   **✍️ Ole kuvaileva:** Älä kirjoita vain "hyökkään". Kirjoita: *"Yritän väistää hänen kirveensä kierimällä maassa ja isken tikarini hänen nilkkaansa"*. Tekoäly palkitsee sinut.
*   **🧪 Kokeile:** Et ole rajoitettu painikkeisiin. Kirjoita hulluuksia! Tekoäly improvisoi.
*   **🎭 Roolipelaa:** Eläydy rooliin. Lue kuvaukset ja toimi kuten hahmosi toimisi, ei kuten sinä pyjamassasi toimisit.

---

## ⚔️ TAISTELU (Aseisiin!)

Kun sanat eivät riitä, on aika mätkiä. Taistelu on **taktista** ja toimii **Tikeillä** (aika).

### 🕹️ Miten se toimii:
*   **Tikit:** Jokainen toiminto maksaa aikaa. Raskaat aseet ovat hitaita (kuluttavat paljon tikkejä). Tikarit ovat nopeita.
*   **Nopeutesi:** Riippuu Toimintapisteistäsi (PA).

### Perustoiminnot:
*   **🗡️ Hyökkää:** Iske sillä, mikä on esillä.
*   **🛡️ Torju:** Asetut puolustuskannalle. Vähentää vahinkoa mutta kuluttaa Kuntoa.
*   **🏃 Pakene:** Pelkureille (tai viisaille, jotka haluavat elää).
*   **🏳️ Antaudu:** Jos näet ettet voita, voit anoa armoa.
*   **✨ Taikuus / Kyberware:** Tulta, lasersäteitä, hakkerointia...

### 💬 Vapaamuotoiset toiminnot (UUTTA!)
Etkö tykkää painikkeista? Kirjoita mitä haluat tehdä, aivan kuin puhuisit lihasta ja verestä olevalle Pelinjohtajalle!
*   **Esimerkkejä:** *"Heitä tulipallo hiiden päälle"*, *"Vedä riimumiekka esiin"*, *"Käytä taikajuomaa itseeni"*.
*   **Kohtausohjaaja:** Taistelu herää nyt eloon. Tekoäly luo ympäristötapahtumia ja reaktioita, jotka rikastuttavat kerrontaa: palkkeja putoaa, viholliset perääntyvät, soihtuja kaatuu. Taistelukenttä ei ole enää staattinen!
*   **Jos tekoäly ei ymmärrä:** Se pyytää sinua muotoilemaan uudelleen. Vuoroasi EI menetetä!
*   **⚠️ Rajoitus:** Esineiden siirtäminen paikkojen välillä (varustaminen repusta, ammusten lataus) tehdään **Raahaa ja pudota** -toiminnolla käyttöliittymässä, ei tekstillä.

### ⚠️ KULTAINEN SELVIYTYMISSÄÄNTÖ
**VEDÄ ASEESI ENNEN TAISTELUA!**
Aseen vetäminen kesken taistelun vie aikaa (Tikkejä). Jos sinut yllätetään miekka tupessa, sinua mätkitään henkkareihin asti samalla kun yrität kömpelösti vetää sitä esiin. TAI VIELÄ PAHEMPAA, JOS ASEESI OVAT REPUSSA EIKÄ VARUSTEPAIKASSA (Anteeksi hetki, minun täytyy kaivaa kahden käden miekka repusta, tiedän että se oli täällä... jossain...) 🤦‍♂️
👉 Klikkaa **varustetun aseen tunnistetta** (oikea paneeli) vetääksesi sen esiin. Se syttyy vihreänä.

Aseiden siirtely taistelussa vie aikaa (Tikkejä) ja voi johtaa yllätyshyökkäykseen, lisäksi on hyvin todennäköistä, että menetät vuoron, epäonnistut hermostuksissasi kirveen lähestyessä silmien väliä tai pudotat aseen maahan. (Ehkä ei ollut hyvä idea luoda hahmoa, jolla on ADHD).

---

## ✨ TAIKUUS JA KYBERNETIIKKA

Riippuen siitä, onko maailmasi "Keskiaikaista fantasiaa" vai "Cyberpunkia":

### 🧙‍♂️ Fantasia: Efsunnoinnit (Lumoaminen)
Oletko loitsija? Voit efsunnoida varusteitasi.
1.  **Opi:** Tarvitset loitsun loitsukirjaasi.
2.  **Heitä (Raahaa ja pudota):** Raahaa loitsu listastasi inventaariossa olevan esineen päälle.
3.  **Hinta:** Lumouksen ylläpito **kuluttaa Manaa per vuoro**.
4.  **Varoitus:** Jos manasi loppuu kesken taistelun, tulimiekka muuttuu takaisin ruosteiseksi raudanpalaksi.

### 🦾 Cyberpunk: Implantit
Haluatko zoom-silmät tai gorillakädet?
1.  Etsi **Teknokirurgi** (Palvelu-NPC).
2.  Maksa krediitit (mikään ei ole ilmaista tulevaisuudessa).
3.  **Ihmisyyskustannus:** Jokainen implantti vie palan sieluasi (**Ihmisyys**).
    *   Jos asennat liikaa, sinusta tulee **Kyberpsykoosi** (tappava leivänpaahdin jaloilla) ja menetät hahmosi hallinnan.

---

## 🛒 KAUPAT JA PALVELUT

Puhu NPC:ille käydäksesi kauppaa.
*   **Tekoäly ehdottaa, sinä päätät:** Kun puhut kauppiaalle tai parantajalle, tekoäly ehdottaa heidän palveluitaan (korjaa, myy, paranna), mutta näkyviin tulee painike **"Näytä palvelut"**, jotta voit päättää milloin siirryt kaupankäyntitilaan.
*   **Tinkiminen:** **Kaupankäynti**-taitosi (perustuu Karismaan) määrää hinnat. Jos olet ruma tai epämiellyttävä, sinua huijataan.
*   **Myyminen:** Klikkaa **hiiren oikealla painikkeella** esinettä inventaariossasi myydäksesi sen kauppiaalle tai raahaa se hänen päälleen.

---

## 🎒 INVENTAARION HALLINTA (Tetris)

*   **Paino:** Sinulla on kantoraja (Voima + Koko). Jos kannat liikaa romua, liikut hitaasti ja saat rangaistuksia (Hamstraus ei ole ystäväsi).
*   **Paneelit:**
    *   **Varusteet:** Mitä sinulla on päälläsi.
    *   **Vyö:** Nopea käyttö taistelussa (täältä otettujen taikajuomien käyttö vie vähemmän aikaa).
    *   **Reppu:** Säkin pohja.
*   **Sujuva käyttö:** Raahaa taikajuoma tai ruoka suoraan **naamasi** (muotokuvan) päälle kuluttaaksesi sen heti. Voit myös käyttää kontekstivalikkoa (oikea klikkaus -> Käytä).

---

## 🛠️ VIIMEISTELYT

Asetusvalikossa voit säätää kaikkea:
*   **🌍 Kieli:** Tekoäly kääntää koko pelin ja vastaukset lennosta. Polyglotti-tila päällä.
*   **👁️ Ulkoasu:** Fonttikoko ja värit, ettet sokeudu. Neonreunat ja pehmennetyt varjot täydellistä immersiota varten.
*   **🧠 Tekoälyasetukset:** Vaihda mallia, lämpötilaa jne. (Muista mitä näimme oppaan alussa lipusta `--advanced`, jos olet niitä, jotka haluavat säätää kaikkea).

---

## 🎭 VAIKEUSASTE JA HUUMORI (Räätälöi kärsimyksesi)

Ennen kuin aloitat, muista että tekoäly ei vain kerro, vaan **mukauttaa maailmaa** mieltymystesi mukaan. Nämä parametrit valitaan maailmaa luotaessa ja ne ovat pysyviä kyseiselle maailmalle:

*   **🎮 Vaikeusaste (Tekoälyn hallinnoima):** Se ei ole pelkkä vauriokerroin. Peli sanoo tekoälylle: "Hei, vaikeusaste on tämä, toimi sen mukaan".
    *   **Helppo:** Et kuole koskaan (tai se on lähes mahdotonta), tilanteet ovat yksinkertaisempia, hinnat halvempia ja viholliset kömpelömpiä. Tekoäly järkeilee jokaisen kohtauksen niin, että polkusi on ruusuinen.
    *   **Normaali:** Vakiotasapaino.
    *   **Haaste:** Tekoäly on armoton, hinnat kohtuuttomia ja mikä tahansa virhe voi olla viimeinen.

*   **🃏 Huumorin sävy:** Määrittelee miten tekoäly puhuu sinulle ja millaisia tapahtumia sattuu. Vaikka jokaisella mallilla on oma tapansa tulkita käsite "huumori", tekoäly yrittää sopeutua valintaasi... tai sitten ei:
    *   **Vakava:** Eeppinen, synkkä ja muodollinen kerronta.
    *   **Sarkastinen:** Tekoäly nauraa virheillesi, heittää jatkuvasti piikkejä ja käyttää ironista sävyä.
    *   **Harhainen:** Valmistaudu absurdiin. Lentäviä lehmiä, surrealistisia tilanteita ja täydellistä kaaosta tekoälyn kieroutuneimman logiikan hallinnoimana.

---

## 🚧 Huomautus: Early Access

RolemIAster on **aktiivisessa kehityksessä**, hautumassa hiljalleen.
*   Voit löytää bugeja (tai "odottamattomia ominaisuuksia").
*   Lisään uusia juttuja joka viikko.
*   Palautteesi on kullanarvoista! Kerro mistä tykkäät ja mistä tykkäät tosi paljon. (Jos et tykkää jostain, kerro sekin, mutta hellästi).

Nyt mene, heitä aloite ja luo legendasi!

<!-- source_hash: f3494f05 -->