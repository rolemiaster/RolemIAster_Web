****************************************************************************************************
24/02/2026 12:32 - Tekoälykuvien generointi, kerronnalliset parannukset ja hallinta - Beta_v058
****************************************************************************************************
- What's New (FI):
  **Uutta: Tekoälykuvien generoinnin toinen vaihe**
  - 🎨 **Maailmasi kuvina:** Olen integroinut alustavan tekoälypohjaisen kuvien generointijärjestelmän. Pelatessasi järjestelmä pyrkii luomaan muotokuvia ja maisemia, jotka tukevat pelisi tunnelmaa.
  - 🖼️ **Dynaamiset taustat:** Kuvat luodaan taustalla peliä keskeyttämättä. Näet niiden ilmestyvän vähitellen taustalle, hahmokortteihin ja Codexiin.
  - 🧹 **Kuvien hallinta:** Uusi paneeli generoitujen kuvien tarkasteluun ja poistamiseen, jos ne eivät miellytä.
  
  **Hahmonluonnin parannukset:**
  - ⚙️ **Vankempi satunnaisluonti:** Olen yhtenäistänyt ja parantanut sääntömoottoria, jota tekoäly käyttää hahmojen luomiseen tyhjästä. Tämä takaa loogisemmat varusteet (5–10 johdonmukaista esinettä) ja tasapainoisemmat hahmolomakkeet.
  - 🧠 **Jaetut aivot:** Tekoäly ymmärtää nyt paremmin, milloin sen on "keksittävä" hahmo tyhjästä ja milloin sen on rajoituttava poimimaan tietoja itse kirjoittamastasi elämäkerrasta.
  - ⚡ **Nopeus tarpeesi mukaan:** Uusi osio visuaalisissa asetuksissa. Valitse "Nopea" (1 vaihe), "Keskitaso" (2 vaihetta) tai "Korkea" (4 vaihetta) säätääksesi generointiajan laitteistosi tehon mukaan.
  - 🛠️ **Tekninen optimointi:** Kuvien AI-malli ladataan **RAM-muistiin (Memory)** ja käsitellään **suorittimella (CPU)** viemättä videomuistia (VRAM). Tämä varmistaa, ettei se häiritse pelin pääasiallisen tekoälyn (LLM) suorituskykyä. Vaatii noin 5 Gt lisä-RAM-muistia, pysyen Steamin virallisten vähimmäisvaatimusten rajoissa.
  - 📤 **Jaa seikkailusi:** Kaikki generoidut kuvat tallennetaan automaattisesti. Löydät ne kansiosta: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Mallivalitsin (Edistynyt):** Jos käynnistät pelin `--advanced`-parametrilla, voit nyt valita kuvissa käytettävän AI-mallin Ulkoasu-paneelista. Tämän avulla harrastajat voivat kokeilla eri Stable Diffusion -versioita, jotka on optimoitu OpenVINOlle (.xml/.bin-tiedostot).
  
  **Kerronta ja tekoälyaivot:**
  - 🧠 **Silmukoiden loppu:** Tekoälyyn on otettu käyttöön uusi "muistioppi". Se erottaa nyt paremmin "muistot" (mitä on jo tapahtunut) ja "nykyhetken" (mitä on tapahtumassa). Tämä auttaa vähentämään tilanteita, joissa tekoäly toistaa itseään tai jää jumiin.
  - 📜 **Historialliset arkistot:** Järjestelmä esittää muistosi tekoälylle "suljettuna historiallisena arkistona", mikä helpottaa tiedon käyttämistä viitteenä tarinan edistämisessä.
  - ⚡ **Optimoidut ohjeet:** Tapaa, jolla peli pyytää kerrontaa kielelläsi, on parannettu, mikä vapauttaa mallin kapasiteettia keskittymään luovuuteen.
  - 👁️ **Kerronnallinen painopiste:** Tekoälyn havaintokyky on kirjoitettu uudelleen. Se ymmärtää nyt paremmin, mitkä elementit ovat "staattista taustaa", eikä niitä tarvitse toistaa tarpeettomasti jokaisessa kappaleessa.
  - 🔀 **Selkeämmät päätökset:** Tekoäly tarjoaa nyt määritellympiä polkuja. Sen ehdotukset (painikkeet) jakautuvat ympäristön tutkimiseen (Syvenny) tai suunnan vaihtamiseen (Poikkea).
  - 🫵 **Suora puhuttelu:** Perusohjeistusta on säädetty varmistamaan, että tekoäly puhuttelee sinua "sinuna", mikä parantaa immersiota.
  
  **Hahmonluonti:**
  - 🖼️ **Hahmon muotokuvat:** Luodessasi hahmoa tekoälyllä, järjestelmä yrittää luoda muotokuvan iän, ammatin ja kuvauksen perusteella. Huomioithan, että tämä on alkuvaiheen versio ja tarkkuus (erityisesti iän suhteen) voi vaihdella käytetyn mallin mukaan. (Testit jatkuvat, mutta alku on lupaava)
  - 🎲 **Luotettava satunnaisluonti:** Korjattu virhe, jossa "Generoi tekoälyllä" -painike saattoi epäonnistua ensimmäisellä yrityksellä jättäen kentät tyhjiksi. Nyt älykäs korjausjärjestelmä varmistaa, että vastaus on aina kelvollinen.
  
  **Generoityjen kuvien hallinta:**
  - 🖼️ **AI-kuvagalleria:** Uusi paneeli Tiedosto-valikossa näyttää kaikki kuvat, joita tekoäly on luonut peliisi (muotokuvat, taustat). Voit suodattaa kuvatyypin tai maailman mukaan.
  - 🗑️ **Valikoiva poistaminen:** Valitse yksi tai useampi kuva ja poista ne, jos ne eivät miellytä (ehkä se, jossa tekoäly päätti pysäköidä bussin linnan talliin). Järjestelmä poistaa sekä tiedoston että sen sisäisen merkinnän.
  - 📂 **Suora pääsy:** Kaksoisnapsauta pikkukuvaa avataksesi kansion, jossa tiedosto sijaitsee. Jos kansio on jo auki, käytetään samaa ikkunaa.
  - 💾 **Muista ikkunakoko:** Gallerian ikkunakoko tallentuu automaattisesti istuntojen välillä.
  
  **Suorituskyky vaatimattomilla asetuksilla (tärkeää vähäisen VRAM-muistin näytönohjaimille):**
  - 🧠 **PSR – Hybridi hallinta:** Uusi järjestelmä jakaa tekoälyn työn kahteen vaiheeseen: suunnittelu (keittiömestari) ja toteutus (kokit). Tämä mahdollistaa paikallisten mallien käytön 8 Gt VRAM-muistilla välttäen kaatumiset liiallisen kontekstin vuoksi (+12K tokenia). Viive kasvaa hieman, koska viestintä tekoälyn kanssa muuttuu yhdestä kehotteesta sarjaksi kehotteita (mitä vähemmän VRAM-muistia, sitä enemmän kehotteita ja pidempi vastausaika).
  - ⚡ **Älykäs suoritus:** Järjestelmä päättää automaattisesti, käsitelläänkö kaikki kerralla (monoliittinen) vai jaetaanko osiin (iteratiivinen) käytettävissä olevan VRAM-muistin mukaan. Pienemmän VRAM-muistin näytönohjaimet aktivoivat ositetun tilan vain tarvittaessa.
  - 📊 **Dynaaminen optimointi:** PSR vähentää token-kuormitusta generoinnin aikana, mikä mahdollistaa hahmonluonnin ja tarinan generoinnin loppuun saattamisen 4 Gt näytönohjaimilla, jotka aiemmin jumiutuivat.
  - 🔄 **Säilytetty johdonmukaisuus:** Työn jakamisesta huolimatta järjestelmä syöttää "pääaikomuksen", jotta tekoäly ei menetä lankaa siitä, mitä se oli tekemässä.
  
  **AI-äänet (vaiheittainen parannus):**
  Reaaliaikainen äänien generointi kaikilla kielillä (jotkin kielet ovat rajoitetumpia kuin toiset, englannissa on laajin äänivalikoima)
  - 🗣️ **Äänelliset taisteluhuudot:** Aloitettaessa taistelu vihamielisiä vihollisia vastaan, peli toistaa tilanteeseen sopivan ääniraidan.
  - 🎭 **Dynaamiset lauseet kontekstin mukaan:** Moottori voi luoda lyhyitä äänilinjoja tiettyihin tapahtumiin (palvelut/taistelu) kielen, tunnelman ja hahmoprofiilin mukaan.
  - 🧠 **Sisäiset äänimallit:** Tekniset äänimallit on erotettu kerrontajärjestelmästä tarinan häiriöiden välttämiseksi.
  - 🔊 **Parempi selkeys:** Synteesin selkeyttä ja prosodiaa on parannettu ymmärrettävän artikulaation priorisoimiseksi.
  
  **⚠️ Yhteensopivuusilmoitus (aiemmat pelitallennetut):**
  - 🔄 Sääntömoottoriin ja tunnelmajärjestelmään tehtyjen sisäisten muutosten määrän vuoksi **aiemmin tallennetut pelit ja maailmat ovat (mahdollisesti) edelleen pelattavissa**, mutta niissä esiintyy todennäköisesti virheitä tai odottamatonta käytöstä. **On suositeltavaa luoda uusi puhdas maailma**, jotta voit nauttia kaikista parannuksista oikein.

****************************************************************************************************
17/02/2026 07:20 - Tekoälykuvien generointi, kerronnalliset parannukset ja hallinta - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (FI):
  **⚠️ KOKEILUHAARA (STEAM BETA)**
  Tämä versio on tällä hetkellä saatavilla vain Steam-palvelun **Kokeiluhaarassa** (Experimental Branch). Näin otat sen käyttöön:
  1. Napsauta hiiren kakkospainikkeella **RolemIAster**-peliä Steam-kirjastossasi.
  2. Valitse **Ominaisuudet...**
  3. Siirry **Betat**-välilehdelle.
  4. Valitse "Betaan osallistuminen" -kohdan alasvetovalikosta **experimental**.
  
  **Uutta: Tekoälykuvien generoinnin ensimmäinen vaihe**
  - 🎨 **Maailmasi kuvina:** Olen integroinut alustavan järjestelmän kuvien luomiseksi tekoälyllä. Pelatessasi järjestelmä yrittää luoda muotokuvia ja maisemia, jotka sopivat pelisi tunnelmaan.
  - 🖼️ **Dynaamiset taustat:** Kuvat generoidaan taustalla keskeyttämättä peliäsi. Näet niiden ilmestyvän vähitellen taustalle, hahmokortteihin ja Koodeksiin.
  - ⚡ **Nopeus mieltymystesi mukaan:** Uusi osio Visuaalisissa asetuksissa. Valitse "Nopea" (1 vaihe), "Keskitaso" (2 vaihetta) tai "Korkea" (4 vaihetta) säätääksesi generointiajan laitteistosi tehon mukaan.
  - 🛠️ **Tekninen optimointi:** Kuvien tekoälymalli ladataan **RAM-muistiin** ja käsitellään **prosessorilla (CPU)**, viemättä videomuistia (VRAM). Tämä takaa, ettei se häiritse pelin päätekoälyn (LLM) suorituskykyä. Vaatii noin 5 Gt ylimääräistä RAM-muistia, pysyen Steamin virallisten vähimmäisvaatimusten rajoissa.
  - 📤 **Jaa seikkailusi:** Kaikki generoidut kuvat tallennetaan automaattisesti. Löydät ne kansiosta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Kerronta ja tekoälyaivot:**
  - 🧠 **Silmukoiden loppu:** Tekoälyyn on istutettu uusi "Muistidoktriini". Se erottaa nyt paremmin "muistot" (mitä on jo tapahtunut) ja "nykyhetken" (mitä tapahtuu nyt). Tämä auttaa vähentämään tapauksia, joissa tekoäly toisti itseään tai jäi jumiin.
  - 📜 **Historialliset arkistot:** Järjestelmä esittää muistosi tekoälylle "Suljettuna historiallisena arkistona", mikä helpottaa tiedon käyttämistä viitteenä tarinan edistämiseksi.
  - ⚡ **Optimoidut ohjeet:** Pelin tapaa pyytää kerrontaa kielelläsi on parannettu, vapauttaen mallin kapasiteettia keskittymään luovuuteen.
  - 👁️ **Kerronnallinen fokus:** Tekoälyn havaintokyky on kirjoitettu uudelleen. Se ymmärtää nyt paremmin, mitkä elementit ovat "staattista taustaa", eikä sen tulisi toistaa niitä tarpeettomasti jokaisessa kappaleessa.
  - 🔀 **Selkeämmät päätökset:** Tekoäly tarjoaa nyt selkeämpiä poistumisreittejä. Sen ehdotukset (painikkeet) on jaettu ympäristön tutkimiseen (Syvenny) tai suunnan muuttamiseen (Erkaannu).
  - 🫵 **Suora puhuttelu:** Perusohjeistusta on säädetty varmistamaan, että tekoäly sinuttelee ("Tú"), mikä parantaa henkilökohtaista immersiota.
  
  **Hahmonluonti:**
  - 🖼️ **Hahmojen muotokuvat:** Kun luot hahmon tekoälyllä, järjestelmä yrittää luoda muotokuvan iän, ammatin ja kuvauksen perusteella. Huomaa, että tämä on varhainen versio ja uskollisuus (erityisesti iän suhteen) voi vaihdella käytetyn mallin mukaan. (jatkan testaamista, mutta alku on lupaava)
  - 🎲 **Luotettava satunnaisgenerointi:** Korjattu virhe, jossa "Generoi tekoälyllä" -painike saattoi epäonnistua ensimmäisellä yrityksellä jättäen kentät tyhjiksi. Nyt älykäs korjausjärjestelmä varmistaa, että vastaus on aina kelvollinen.

****************************************************************************************************
17/02/2026 07:04 - Tekoälykuvien generointi, kerronnalliset parannukset ja hallinta - Beta_v058
****************************************************************************************************
- What's New (FI):
  **⚠️ KOKEILUHAARA (STEAM BETA)**
  Tämä versio on tällä hetkellä saatavilla vain Steam-palvelun **Kokeiluhaarassa** (Experimental Branch). Näin otat sen käyttöön:
  1. Napsauta hiiren kakkospainikkeella **RolemIAster**-peliä Steam-kirjastossasi.
  2. Valitse **Ominaisuudet...**
  3. Siirry **Betat**-välilehdelle.
  4. Valitse "Betaan osallistuminen" -kohdan alasvetovalikosta **experimental**.
  
  **Uutta: Tekoälykuvien generoinnin ensimmäinen vaihe**
  - 🎨 **Maailmasi kuvina:** Olen integroinut alustavan järjestelmän kuvien luomiseksi tekoälyllä. Pelatessasi järjestelmä yrittää luoda muotokuvia ja maisemia, jotka sopivat pelisi tunnelmaan.
  - 🖼️ **Dynaamiset taustat:** Kuvat generoidaan taustalla keskeyttämättä peliäsi. Näet niiden ilmestyvän vähitellen taustalle, hahmokortteihin ja Koodeksiin.
  - ⚡ **Nopeus mieltymystesi mukaan:** Uusi osio Visuaalisissa asetuksissa. Valitse "Nopea" (1 vaihe), "Keskitaso" (2 vaihetta) tai "Korkea" (4 vaihetta) säätääksesi generointiajan laitteistosi tehon mukaan.
  - 🛠️ **Tekninen optimointi:** Kuvien tekoälymalli ladataan **RAM-muistiin** ja käsitellään **prosessorilla (CPU)**, viemättä videomuistia (VRAM). Tämä takaa, ettei se häiritse pelin päätekoälyn (LLM) suorituskykyä. Vaatii noin 5 Gt ylimääräistä RAM-muistia, pysyen Steamin virallisten vähimmäisvaatimusten rajoissa.
  - 📤 **Jaa seikkailusi:** Kaikki generoidut kuvat tallennetaan automaattisesti. Löydät ne kansiosta: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Kerronta ja tekoälyaivot:**
  - 🧠 **Silmukoiden loppu:** Tekoälyyn on istutettu uusi "Muistidoktriini". Se erottaa nyt paremmin "muistot" (mitä on jo tapahtunut) ja "nykyhetken" (mitä tapahtuu nyt). Tämä auttaa vähentämään tapauksia, joissa tekoäly toisti itseään tai jäi jumiin.
  - 📜 **Historialliset arkistot:** Järjestelmä esittää muistosi tekoälylle "Suljettuna historiallisena arkistona", mikä helpottaa tiedon käyttämistä viitteenä tarinan edistämiseksi.
  - ⚡ **Optimoidut ohjeet:** Pelin tapaa pyytää kerrontaa kielelläsi on parannettu, vapauttaen mallin kapasiteettia keskittymään luovuuteen.
  - 👁️ **Kerronnallinen fokus:** Tekoälyn havaintokyky on kirjoitettu uudelleen. Se ymmärtää nyt paremmin, mitkä elementit ovat "staattista taustaa", eikä sen tulisi toistaa niitä tarpeettomasti jokaisessa kappaleessa.
  - 🔀 **Selkeämmät päätökset:** Tekoäly tarjoaa nyt selkeämpiä poistumisreittejä. Sen ehdotukset (painikkeet) on jaettu ympäristön tutkimiseen (Syvenny) tai suunnan muuttamiseen (Erkaannu).
  - 🫵 **Suora puhuttelu:** Perusohjeistusta on säädetty varmistamaan, että tekoäly sinuttelee ("Tú"), mikä parantaa henkilökohtaista immersiota.
  
  **Hahmonluonti:**
  - 🖼️ **Hahmojen muotokuvat:** Kun luot hahmon tekoälyllä, järjestelmä yrittää luoda muotokuvan iän, ammatin ja kuvauksen perusteella. Huomaa, että tämä on varhainen versio ja uskollisuus (erityisesti iän suhteen) voi vaihdella käytetyn mallin mukaan. (jatkan testaamista, mutta alku on lupaava)
  - 🎲 **Luotettava satunnaisgenerointi:** Korjattu virhe, jossa "Generoi tekoälyllä" -painike saattoi epäonnistua ensimmäisellä yrityksellä jättäen kentät tyhjiksi. Nyt älykäs korjausjärjestelmä varmistaa, että vastaus on aina kelvollinen.

****************************************************************************************************
13/02/2026 21:47 - Tekoälyasetusten optimointi ja i18n-parannukset - Beta_v055
****************************************************************************************************
- What's New (FI):
  - ⚙️ **Paikallinen prioriteettiohjaus:** Nyt voit säätää näytönohjaintesi prioriteettia manuaalisesti, vaikka järjestelmä olisi automaattitilassa.
  - 🧠 **Tekoälyn vuorottelutiedot:** Olen lisännyt ulkoisten palveluntarjoajien asetuksiin tietopaneeleja, jotka selittävät, miten automaattinen vuorottelu toimii virhetilanteissa tai kiintiön ylittyessä.
  - 🌍 **Laajennettu GPU-tuki:** i18n-tietoviesti kertoo nyt oikein tuesta NVIDIA CUDA:lle ja Vulkanille (AMD/Intel). Käännökset päivitetty kaikille kielille!
  - ⚙️ **Parannettu yhteys:** Ollaman ja muiden OpenAI-yhteensopivien palvelimien yhteydet korjattu.
  - 🧠 **Monikielinen ja vankka tekoäly:** Tarinassa saatujen esineiden tunnistus toimii nyt 10 kielellä. Lisäksi olen vahvistanut järjestelmää, jotta et koskaan jää ilman aloitustarinaa, vaikka tekoälyllä olisi teknisiä ongelmia.
  - 🔄 **Älykäs vuorottelu:** Olen korjannut vuorottelujärjestelmän, jotta se ei luovuta paikallisen tekoälysi suhteen heti. Järjestelmä antaa sille nyt mahdollisuuden korjata itsensä ennen ulkoisen avun hakemista.
  - 🧹 **Perustusten siivous:** Olen poistanut vanhoja ja hämmentäviä sääntöjä, jotta tekoälyn "aivot" olisivat terävämmät ja tarkemmat käsitellessään esineitäsi.

