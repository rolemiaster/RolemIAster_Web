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

