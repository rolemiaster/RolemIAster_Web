# 📢 Kehittäjän viesti (Ennakkojulkaisu)

Tervetuloa RolemIAsteriin. Ennen kuin sukellat seuraavaan suureen seikkailuusi, haluan varastaa minuutin selvittääkseni pari asiaa (lupaan olla lyhyt, noppasi odottavat).

Tämä peli on **ennakkojulkaisu (Early Access)** -vaiheessa.
Olen yhden miehen kehittäjä – kyllä, vain minä, näppäimistöni ja litratolkulla kahvia – mikä tarkoittaa, että teen parhaani, mutta en aina ehdi kaiken kanssa ajoissa. Pahoittelen etukäteen, jos kestää jonkin sitkeän bugin korjaamisessa, haluamasi ominaisuuden toteuttamisessa tai Discord-viesteihin vastaamisessa. Tasapainottelen, mutta en ole vielä saanut ylimääräisiä lonkeroita.

## ⚠️ Tärkeä ilmoitus laitteistosta (Paikallinen vs. Pilvi)
Tässä on kaksi tapaa pelata, ja kokemuksesi riippuu valinnastasi:

*   **Paikallinen tila (Ilmainen, yksityinen):** Jos haluat ajaa tekoälyn omalla tietokoneellasi, kaupan vaatimukset (vähintään 12 Gt VRAM) ovat pyhiä. Alle sen ja tekoäly joko ryömii tai jumittaa laitteesi. Se on puhdasta matematiikkaa, ei magiaa.
*   **Pilvitila (Gemini, GPT jne. API vain, jos käynnistät komennolla `--advanced`):** Tässä elokuva muuttuu! Jos konfiguroit pelin käyttämään pilvipalveluita (kuten Google Gemini tai OpenAI), raskas työ tehdään heidän palvelimillaan, ei sinun. Tässä tilassa peli toimii sujuvasti käytännössä millä tahansa laitteella, koska näytönohjaimesi lepää.

## Odotusten hallinta
Jos tulit odottaen saumattomasti toimivaa AAA-tuotantoa, pelkäänpä, että olet väärässä paikassa (toistaiseksi). Peli on varhaisessa vaiheessa, ja rehellisesti sanottuna vain rohkeat, jotka ymmärtävät ja tukevat tämänkaltaisia kokeellisia projekteja, jaksavat nauttia siitä nyt.

## Tyytyväisyystakuu
Jos koet pelin olevan liian raaka sinulle tai laitteistosi kärsii liikaa, kukaan ei pahastu, jos pyydät palautusta. Päinvastoin, otan sinut ilomielin takaisin tulevaisuudessa – ja maksamaan 40 tai 60 dollaria, kun peli on hiottu ja valmis 😉. Nykyinen hinta on lahja luottamuksesta tässä vaiheessa.

Silti, kiitollisuuteni on rajaton niille, jotka päätätte jäädä. Teidän ilmoituksenne ja ehdotuksenne ovat tämän projektin todellinen moottori. Teidän ansiostanne peli on parantunut huimasti muutamassa viikossa.

**RolemIAster rakennetaan räätälöidysti teille.**

*Kiitos kärsivällisyydestä, tuesta ja siitä, että kriitikot ovat puolellanne!*


*********************************************************************************
#  PÄIVITIMME QWEN 3.5 + TURBO QUANT! UUSI MOOTTORI, UUSI TEKNOLOGIA, UUSI AIKA 🚀
*********************************************************************************

🚧 RAKENNUSTYÖMAA: LOBOTOMIA VALMIS (JA SE TOIMII) 🧠🔧
Mitä olen puuhaillut?
Olen vaihtamassa pelimoottoria, eikä se ole pikkujuttu.
Tähän asti joka kerta, kun pelasin vuoron, järjestelmä heitti tekoälylle 15 000–20 000 tokenin sääntöpaketin. Pohjimmiltaan se oli kuin pakottaisi pelinjohtajan lukemaan koko käsikirjan ennen jokaista lausetta. 📚🥵
Olen ottanut käyttöön kaksi teknologiaa, jotka työskentelevät yhdessä:

1. 🧠 **TurboQuant — Pakattu muisti**
   - Integroin Googlen teknologian (esitelty ICLR 2026), joka pakkaa tekoälyn muistin lähes kolmasosaan alkuperäisestä koosta.
   - Jos sinulla on RTX-sarjan 3000, 4000 tai 5000 -näytönohjain, peli hyödyntää sitä automaattisesti.
   - ⚠️ **TÄRKEÄ HUOMAUTUS AMD GPU:STA:** VAIKKA TURBO QUANTIN TOIMINNASTA AMD/INTEL-KORTEILLA (VULKAN) ON MERKKEJÄ, KÄYTÄNNÖSSÄ SE AIHEUTTAA PALJON VIRHEITÄ JA SIKSI SITÄ EI TÄLLÄ HETKELLÄ KÄYTETÄ. TOIVOMME YHTEISÖN TEKEVÄN SAMOIN JA SAAMME PIAN UUTISIA.
   - **Tulos:** Tekoäly muistaa enemmän kuluttaen vähemmän VRAMia. Se on puhdasta digitaalista taikuutta. ✨

2. 📖 **Massiivinen konteksti (+200%)**
   - Kirjoitin keskustelumuistin laskennan uudelleen kirurgisesti: nyt peli lukee jokaisen mallin tekniset tiedot ja laskee tarkasti, kuinka paljon siihen mahtuu GPU:llesi.
   - 9B-malli muistaa 16 Gt VRAMin GPU:lla ~36 000 sanasta yli ~110 000 sanaan. 🚀
   - Lisäksi nostin vastausrajainta 4 096:sta 8 192:een tokeniin: pidempiä kertomuksia ilman keskeytyksiä lauseen keskellä.

Lopputulos: Ylivoimainen nopeus useimmissa tapauksissa, pitkät pelit, jotka eivät menetä lankaa, ja paljon keskittyneempi (ja selkeämpi) tekoäly. 🎯

Todellisuus (Vastuuvapauslauseke 🧐):
Jos jopa Piilaakson jättiläiset (Gemini, ChatGPT...) näkevät joskus vaaleanpunaisia ​​elefantteja, paikallinen mallini ei ole 100 % täydellinen aina. Mutta se ei ole enää "hääjuhlien humalainen kaveri" – nyt se on pätevä roolipelimestari, jolla on todellisen elefantin muisti. 🐘

Kiitos kärsivällisyydestä, kun säädin ruuveja! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->