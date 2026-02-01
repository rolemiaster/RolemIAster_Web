****************************************************************************************************
01/02/2026 21:37 - Kriittinen pikakorjaus: Launcherin vakaus ja Multi-GPU-tunnistus - Alfa_v052
****************************************************************************************************
- What's New (FI):
  - 🚑 **Kriittinen korjaus:** Korjattu ongelma, joka esti pelin käynnistymisen tietyissä harvinaisissa olosuhteissa ("Totaalinen virhe") tietokannan vioittumisen vuoksi, jota Launcher ei voinut puhdistaa. "Tyhjennä tietokanta" -toiminto on nyt paljon tehokkaampi.
  - ⚡ **Laitteistoparannus:** Korjattu virhe, jonka vuoksi "Automaattinen määritys" -tila jätti huomioimatta tehon järjestelmissä, joissa on useita ei-identtisiä näytönohjaimia (GPU).
  - 🛠️ **Apuohjelma:** Launcheriin on lisätty uusi toiminto, jolla edellisen istunnon lokitiedoston (log) voi avata helposti tuen avuksi.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Manuaalien korjaukset & Vakaus - Beta_v050
****************************************************************************************************
- Uutta:
  **Multi-GPU-tehoa ja kriittisiä korjauksia!**
  
  * **🚀 Multi-GPU-tuki:** Ominaisuus suurten tekoälymallien jakamiseksi useiden näytönohjainten kesken on otettu käyttöön. *Nyt voit käyttää koko laitteistosi arsenaalia; Rajaton voima!*
  * **🛡️ Vakaus:** Kaikki puuttuvat DLL-kirjastot on lisätty odottamattomien kaatumisten estämiseksi. *Olen panssaroinut moottorin; jos se epäonnistuu nyt, se on nopanheiton moka.*
  * **📖 Dynaamiset verkko-oppaat:**
    * **Todellinen valitsin:** Kielivalikko tarkistaa nyt, mitä tiedostoja on oikeasti olemassa ennen niiden näyttämistä. *Ei enää haamuvalintoja, jotka eivät tehneet mitään; tason 5 ennustusmagiaa.*
    * **Virheen 403 korjaus:** Korjattu käyttöoikeusvirhe, joka esti muutoslogin näkymisen pelin sisällä. *Olen opettanut sovelluksen pyytämään pääsyä oikein ("Sesam aukea!").*
  * **🌍 Kielet:** Tekstien ja käännösten tarkistus. *Polyglotti-tila aktivoitu.*

****************************************************************************************************
28/01/2026 22:49 - Vakautus ja tekoälyparannukset - Beta_v049
****************************************************************************************************
- Uutta:
  Olemme hioneet pelikokemusta tärkeillä korjauksilla ja uudella visuaalisella työkalulla:

  * **Siisti ja luotettava inventaario:** Ei enää "haamuosioiden" tai oudosti nimettyjen esineiden löytämistä repustasi. Olemme ottaneet käyttöön narratiivisen validointijärjestelmän, joka varmistaa, että kaikki keräämäsi tai ostamasi on todella olemassa pelimaailmassa.
  * **Sujuvat dialogit:** Olemme korjanneet ärsyttävät painikkeet, jotka joskus näkyivät tilassa "Unknown" tai eivät reagoineet. Nyt keskusteluvaihtoehdot NPC-hahmojen kanssa näyttävät aina oikean tekstin.
  * **Vankka hahmonluonti:** Sankarisi luominen on nyt vakaa prosessi. Olemme ratkaisseet ristiriidat, jotka joskus jättivät hahmolomakkeen puutteelliseksi tai antoivat virheellisiä tilastoja elämäkertaa ja ominaisuuksia yhdistettäessä.
  * **Uusi tekoälyn tilapalkki:** Nyt voit nähdä koneen aivot toiminnassa! Olemme lisänneet yläosaan palkin, joka näyttää vastausnopeuden ja muistin käytön reaaliajassa. Näin tiedät aina, "miettiikö" tekoäly seuraavaa seikkailuasi.

****************************************************************************************************
28/01/2026 03:50 - Kriittinen koontivirheen korjaus - Beta_v048
****************************************************************************************************
- Uutta:
  Korjattu kriittinen virhe, joka esti peliä käynnistymästä uusissa asennuksissa. Parannettu vakautta ja yhteensopivuutta eri laitteistojen kanssa.

****************************************************************************************************
26/01/2026 19:38 - Web-käynnistysohjelma & RTX 50 -tuki - Beta_v047
****************************************************************************************************
- Uutta:

  > [!TÄRKEÄÄ]
  > **YHTEENSOPIVUUSSYISTÄ AIEMPI TIETOKANTA ON POISTETTAVA, TAI MUUTEN TEKOÄLYASETUKSISSA ILMENEE HYVIN TODENNÄKÖISESTI VIRHEITÄ**
  > **(Ratkaisu: Klikkaa rataskuvaketta ⚙️ Launcherissa -> Poista tietokanta)**

  *Kriittinen tuki RTX 50 -sarjalle: Korjattu vakava virhe, joka aiheutti odottamattoman sulkeutumisen yritettäessä luoda hahmoja uusilla NVIDIA-näytönohjaimilla (RTX 5070, 5080, 5090).
  (Koska minulla ei ole RTX 5000 -sarjan korttia, en ole voinut testata suoraan, onko ratkaisu 100-prosenttinen, mutta teorian mukaan sen pitäisi olla korjattu. Odotan voitonlaulujanne täällä!)
  
  *Tekoälymoottorin päivitys: Olemme päivittäneet pelin paikalliset aivot yhteensopiviksi uusimman laitteistoteknologian kanssa, varmistaen, että kaikki voivat nauttia kokemuksesta ilman verkkoyhteyttä, riippumatta laitteiston uutuudesta.
  
  *Uusi Launcher: Reaaliaikaiset päivitykset ja uutiset viralliselta verkkosivustolta.


****************************************************************************************************
26/01/2026 06:49 - Web-dokumentaation integrointi - Beta_v045
****************************************************************************************************
- Uutta:
  *Nyt käyttöohje ja muutosloki ladataan suoraan viralliselta verkkosivustoltamme, mikä takaa, että sinulla on aina uusin tieto ilman korjaustiedostojen lataamista. Sisältää älykkään offline-tilan.

  *Olemme vahvistaneet pelin vakautta, jotta se ei koskaan jumiudu käynnistettäessä. Lisäksi kauppiaat ovat palanneet lomaltaan limbosta: nyt he ilmestyvät oikein, hyllyillä on tavaraa ja he kunnioittavat maailman tunnelmaa (ei taikajuomia tulevaisuudessa).

  *Korjattu bugi, joka ei sallinut tekoälyparametrien muokkaamista eikä tekoälymallin valintaa, minkä vuoksi jotkut käyttäjät, joilla on rajallinen VRAM, eivät voineet pelata.
  **Mikäli tekoälyparametreja on tarpeen muuttaa, suosittelen vahvasti kokeilemaan ensin % VRAM -arvon laskemista 85 prosenttiin, käynnistämään uudelleen ja testaamaan. Jos tämä ei vieläkään riitä, suosittelen tarkistamaan, etteivät muut prosessit kuin itse peli käytä GPU:n VRAM-muistia (tietokoneen uudelleenkäynnistys tarvittaessa, VRAMia vievien sovellusten sulkeminen). Jos VRAM-määrän laskemisen jälkeen jopa 70 prosenttiin peli ei vieläkään toimi, en suosittele laskemaan sitä enempää, koska peli ei pysty käsittelemään tekoälylle lähetettäviä kehotteita. Tällöin vaikka VRAM-ylivuoto vältettäisiin, peli ei toimi, koska sillä ei ole resursseja siihen. Tässä tapauksessa ainoa jäljellä oleva vaihtoehto on vaihtaa malli alempaan, palauttaa tekoälyparametrit automaattiasetuksille ja käynnistää uudelleen.

****************************************************************************************************
26/01/2026 04:00 - Ytimen vakautus ja palveluiden diagnostiikka - Beta_v044
****************************************************************************************************
- Uutta:
  "Ytimen vakautus ja palveluiden diagnostiikka", "Kriittisiä korjauksia hahmonluonnissa, käyttöliittymässä (MainWindow) ja semanttisen haun optimoinnissa. Palvelutilan syvädiagnostiikan aloitus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Lokit ja vakaus - Beta_v043
****************************************************************************************************
- Description:
  Korjauspäivitys, joka keskittyy diagnostiikkaan ja käyttöliittymän silmukan korjaamiseen.

- Changes:
  Korjattu uudelleenkäynnistysdialogin visuaalinen bugi
  Uusi lokijärjestelmä %LOCALAPPDATA%-kansiossa diagnostiikkaa varten
  Sisäisen suorituskyvyn optimointeja

****************************************************************************************************
24/01/2026 06:30 - Elämäkerran backend-tuki - Beta_v042
****************************************************************************************************
- Description:
  Elämäkertatietojen paljastaminen käyttöliittymälle ja i18n-säädöt.

<!-- source_hash: 5f218fc5 -->