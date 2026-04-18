# 📢 Kehittäjän Viesti (Ennakkojulkaisu)

Tervetuloa RolemIAsteriin. Ennen kuin sukellat seuraavaan suureen seikkailuusi, haluan varastaa minuutin selventääkseni pari asiaa (lupaan olla lyhyt, noppasi odottavat).

Tämä peli on **Ennakkojulkaisu (Early Access)** -vaiheessa.
Olen yksinäinen kehittäjä — kyllä, vain minä, näppäimistöni ja litrat kahvia — mikä tarkoittaa, että teen kaikkeni, mutta en aina ehdi kaikkeen. Pahoittelen etukäteen, jos jonkin pihiä bugin korjaaminen, toivomasi ominaisuuden toteuttaminen tai vastaaminen nopeasti Discordissa kestää. Teen jongleerausta, mutta minulla ei ole vielä ylimääräisiä lonkeroita.

## ⚠️ Tärkeä Ilmoitus Laitteistosta (Paikallinen vs. Pilvi)
Peliä voi pelata kahdella tavalla, ja kokemuksesi riippuu valinnastasi:

*   **Paikallinen Tila (Ilmainen, Yksityinen):** Jos haluat suorittaa tekoälyn omalla tietokoneellasi, kaupan vaatimukset (vähintään 8 Gt VRAM) ovat pyhiä hyvän alun varmistamiseksi. Vähemmän kuin se, ja tekoäly raahautuu tai lukitsee laitteesi. Se on puhdasta matematiikkaa, ei taikuutta, vaikkakin nyt Turbo Quantin myötä tämä voi muuttua parempaan suuntaan.
*   **Pilvitila (Gemini, GPT API jne. vain jos käynnistät komennolla `--advanced`):** Tässä elokuva muuttuu! Jos määrität pelin käyttämään pilvipalveluita (kuten Google Gemini tai OpenAI), raskas työ tehdään heidän palvelimillaan, ei sinun. Tässä tilassa peli toimii sulavasti käytännössä millä tahansa laitteella, sillä näytönohjaimesi lepää.

## Odotusten Hallinta
Jos odotit saumatonta AAA-tuotantoa, pelkäänpä, että olet väärässä paikassa (toistaiseksi). Peli on alkuvaiheessa, ja rehellisesti sanottuna vain rohkeat, jotka ymmärtävät ja tukevat tällaisia kokeellisia projekteja, ovat kärsivällisiä nauttiakseen siitä juuri nyt.

## Tyytyväisyystakuu
Jos koet, että peli on sinulle liian raaka tai laitteistosi kärsii liikaa, kukaan ei pahastu, jos pyydät palautusta. Päinvastoin, otan sinut ilolla takaisin tulevaisuudessa — ja että maksat 40 tai 60 USD, kun peli on hiottu ja valmis 😉. Nykyinen hinta on lahja luottamuksestasi tässä vaiheessa.

Tästä huolimatta kiitollisuuteni on loputon niille, jotka päättävät jäädä. Raporttinne ja ehdotuksenne ovat tämän projektin todellinen moottori. Teidän ansiostanne peli on parantunut hurjasti muutamassa viikossa.

**RolemIAster rakennetaan teitä varten.**

*Kiitos kärsivällisyydestä, tuesta ja siitä, että kriitikot ovat puolellanne!*


*********************************************************************************
# 📢 PÄVITIMME QWEN 3.5 + TURBO QUANTiin! UUSI MOOTTOORI, UUSI TEKNOLOGIA, UUSI AIKA 🚀
*********************************************************************************

🚧 RAKENNUSTYÖMAA: LOBOTOMIA VALMIS (JA TOIMII) 🧠🔧
Mitä teen?
Olen vaihtamassa pelin moottoria, eikä se ole pikkujuttu.
Tähän asti joka kerta, kun pelasit vuoron, järjestelmä heitti tekoälylle 15 000–20 000 tokenin sääntökirjan. Pohjimmiltaan se oli kuin pakottaisi mestarin lukemaan koko käyttöohjeen jokaisen lauseen ennen sitä. 📚🥵
Olen toteuttanut kaksi teknologiaa, jotka työskentelevät yhdessä:

1. 🧠 **TurboQuant — Pakattu muisti**
   - Integroin Googlelta teknologian (esitelty ICLR 2026), joka pakkaa tekoälyn muistin lähes kolmannekseen alkuperäisestä koosta.
   - Jos sinulla on RTX-sarjan 3000, 4000 tai 5000 näytönohjain, peli hyödyntää sitä automaattisesti.
   - ⚠️ **TÄRKEÄ HUOMAUTUS AMD GPU:ISTA:** VAIKKA TURBO QUANTIN TOIMINNASTA AMD/INTEL-KORTEILLA (VULKAN) ON MERKKEJÄ, KÄYTÄNNÖSSÄ SE AIHEUTTAA PALJON VIKKOJA EIKÄ SEN VUOKSI TOTEUTETA TÄLLÄ HETKELLÄ. ODOTAMME YHTEISÖN TEKEVÄN SAMOIN JA SAAVAMME PIAN UUTISIA.
   - **Tulos:** Tekoäly muistaa enemmän kuluttaen vähemmän VRAMia. Se on puhdasta digitaalista taikuutta. ✨

2. 📖 **Massiivinen konteksti (+200%)**
   - Kirjoitin keskustelumuistin laskennan kirurgisesti uudelleen: nyt peli lukee kunkin mallin tekniset tiedot ja laskee tarkasti, kuinka paljon siihen mahtuu GPU:llasi.
   - 9B-malli muistaa nyt ~36 000 sanan sijasta yli ~110 000 sanaa 16 Gt VRAMin GPU:lla. 🚀
   - Lisäksi nostin vastausrajaston 4 096:sta 8 192:een tokeniin: pidempiä kertomuksia ilman keskeytyksiä keskellä lausetta.

Lopputulos: Useimmissa tapauksissa parempi nopeus, pitkät pelit, jotka eivät menetä juonta, ja paljon keskittyneempi (ja selkeämpi) tekoäly. 🎯

Todellisuuden huomautus (Vastuuvapauslauseke 🧐):
Jos jopa Piilaakson jättiläiset (Gemini, ChatGPT...) näkevät joskus vaaleanpunaisia ​​elefantteja, paikallinen mallini ei tule olemaan 100 % täydellinen joka kerta. Mutta se ei ole enää "häiden juopunut setä" — nyt se on pätevä roolimestari, jolla on todellisen norsun muisti. 🐘

Kiitos kärsivällisyydestä, kun säädin ruuveja! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->