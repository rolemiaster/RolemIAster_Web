****************************************************************************************************
24/02/2026 03:02 - Tekoälykuvien luonti, kerronnalliset parannukset ja hallinta - Beta_v058
****************************************************************************************************
- What's New (FI):
  **⚠️ KOKEILUHAARA (STEAM BETA)**
  Tämä versio on tällä hetkellä saatavilla vain Steamissä **Kokeiluhaarassa** (Experimental Branch). Ota se käyttöön näin:
  1. Napsauta hiiren kakkospainikkeella **RolemIAster**-peliä Steam-kirjastossasi.
  2. Valitse **Ominaisuudet...**
  3. Siirry **Betat**-välilehdelle.
  4. Valitse "Betaan osallistuminen" -kohdan pudotusvalikosta **experimental**.
  
  **Uutta: Tekoälykuvien luonnin ensimmäinen vaihe**
  - 🎨 **Maailmasi kuvina:** Olen integroinut alustavan järjestelmän tekoälypohjaiseen kuvien luontiin. Pelaamisen aikana järjestelmä yrittää luoda muotokuvia ja maisemia, jotka sopivat pelisi tunnelmaan.
  - 🖼️ **Dynaamiset taustat:** Kuvat luodaan taustalla keskeyttämättä peliäsi. Näet niiden ilmestyvän vähitellen taustalle, hahmokortteihin ja koodeksiin.
  - 🧹 **Kuvien hallinta:** Uusi paneeli, jossa voit tarkastella ja poistaa luotuja kuvia, joista et pidä.
  
  **Parannuksia hahmojen luontiin:**
  - ⚙️ **Vankempi satunnaisluonti:** Olen yhtenäistänyt ja parantanut sääntömoottoria, jota tekoäly käyttää hahmojen luomiseen tyhjästä. Tämä takaa loogisemmat tavaraluettelot (5–10 johdonmukaista esinettä) ja tasapainoisemmat hahmolomakkeet.
  - 🧠 **Jaetut aivot:** Tekoäly ymmärtää nyt paremmin, milloin sen tulee "keksiä" hahmo tyhjästä ja milloin sen tulee vain poimia tiedot kirjoittamastasi biografiasta.
  - ⚡ **Nopeus tarpeidesi mukaan:** Uusi osio visuaalisissa asetuksissa. Valitse "Nopea" (1 vaihe), "Keskitaso" (2 vaihetta) tai "Korkea" (4 vaihetta) säätääksesi luontiaikaa laitteistosi tehon mukaan.
  - 🛠️ **Tekninen optimointi:** Kuvien tekoälymalli ladataan **RAM-muistiin** ja prosessoidaan **CPU:n** kautta viemättä videomuistia (VRAM). Tämä takaa, ettei se häiritse pelin päätekoälyn (LLM) suorituskykyä. Se vaatii noin 5 Gt lisä-RAM-muistia, mutta pysyy silti Steam-vähimmäisvaatimusten rajoissa.
  - 📤 **Jaa seikkailusi:** Kaikki luodut kuvat tallennetaan automaattisesti. Löydät ne kansiosta: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Mallin valitsin (Edistynyt):** Jos käynnistät pelin parametrilla `--advanced`, voit nyt valita Ulkoasu-paneelista, mitä tekoälymallia käytetään kuviin. Tämän ansiosta harrastajat voivat testata eri Stable Diffusion -versioita, jotka on optimoitu OpenVINO:lle (.xml/.bin-tiedostot).
  
  **Kerronta ja tekoälyaivot:**
  - 🧠 **Loppu silmukoille:** Tekoälyyn on istutettu uusi "Muistioppi". Se erottaa nyt paremmin "muistot" (mitä on jo tapahtunut) ja "nykyhetken" (mitä tapahtuu nyt). Tämä auttaa vähentämään tapauksia, joissa tekoäly toisti itseään tai jäi jumiin.
  - 📜 **Historialliset arkistot:** Järjestelmä esittää muistosi tekoälylle "Suljettuna historiallisena arkistona", mikä helpottaa kyseisten tietojen käyttöä viitteenä tarinan edistämiseksi.
  - ⚡ **Optimoidut ohjeet:** Tapaa, jolla peli pyytää kerrontaa kielelläsi, on parannettu, mikä vapauttaa mallin kapasiteettia keskittymään luovuuteen.
  - 👁️ **Kerronnallinen fokus:** Tekoälyn havaintokyky on kirjoitettu uudelleen. Se ymmärtää nyt paremmin, mitkä elementit ovat "staattista taustaa", eikä sen tulisi toistaa niitä tarpeettomasti jokaisessa kappaleessa.
  - 🔀 **Selkeämmät päätökset:** Tekoäly tarjoaa nyt selkeämpiä etenemisreittejä. Sen ehdotukset (painikkeet) on jaettu ympäristön tutkimiseen (Syvenny) tai suunnan muuttamiseen (Erkane).
  - 🫵 **Suora puhuttelu:** Perusohjeistusta on säädetty sen varmistamiseksi, että tekoäly puhuttelee sinua muodossa "Sinä", mikä parantaa immersiota.
  
  **Hahmonluonti:**
  - 🖼️ **Hahmojen muotokuvat:** Kun luot hahmon tekoälyllä, järjestelmä yrittää luoda muotokuvan iän, ammatin ja kuvauksen perusteella. Huomaa, että tämä on varhainen versio, ja uskollisuus (erityisesti iän suhteen) voi vaihdella käytetyn mallin mukaan. (Jatkan testausta, mutta alku näyttää lupaavalta.)
  - 🎲 **Luotettava satunnaisluonti:** Korjattu virhe, jossa "Luo tekoälyllä" -painike saattoi epäonnistua ensimmäisellä yrityksellä jättäen kentät tyhjiksi. Nyt älykäs korjausjärjestelmä varmistaa, että vastaus on aina kelvollinen.
  
  **Luotujen kuvien hallinta:**
  - 🖼️ **Tekoälykuvagalleria:** Tiedosto-valikossa on uusi paneeli, joka näyttää kaikki tekoälyn peliesi aikana luomat kuvat (muotokuvat, taustat). Voit suodattaa kuvatyypin tai maailman mukaan.
  - 🗑️ **Valikoiva poisto:** Valitse yksi tai useampi kuva ja poista ne, jos ne eivät miellytä (ehkä se kuva, jossa tekoäly päätti, että linnan talliin on hyvä idea pysäköidä bussi). Järjestelmä siivoaa sekä tiedoston että sisäisen rekisterinsä.
  - 📂 **Suora pääsy:** Kaksoisnapsauta pikkukuvaa avataksesi kansion, jossa tiedosto sijaitsee. Jos kansio on jo auki, käytetään samaa ikkunaa.
  - 💾 **Ikkunan koon muistaminen:** Gallerian ikkunan koko tallennetaan automaattisesti istuntojen välillä.
  
  **Suorituskyky matalilla asetuksilla (Tärkeää GPU:ille, joissa on vähän VRAM-muistia):**
  - 🧠 **PSR - Hybridihallinta:** Uusi järjestelmä, joka jakaa tekoälyn työn kahteen vaiheeseen: Suunnittelu (Keittiömestari) ja Toteutus (Kokit). Tämä mahdollistaa paikallisten mallien toiminnan 8 Gt VRAM-muistilla välttäen kontekstin ylikuormituksesta johtuvat kaatumiset (+12K tokenia), mutta viive kasvaa. Tekoälyn käsittely muuttuu yhdestä kehotteesta kehotteiden sarjaksi (mitä vähemmän VRAM-muistia, sitä enemmän kehotteita luodaan ja sitä pidempi vastausaika).
  - ⚡ **Älykäs suoritus:** Järjestelmä päättää automaattisesti käytettävissä olevan VRAM-muistin perusteella, käsitelläänkö kaikki kerralla (monoliittinen) vai jaetaanko se osiin (iteratiivinen). GPU:t, joissa on vähemmän VRAM-muistia, aktivoivat ositetun tilan vain tarvittaessa.
  - 📊 **Dynaaminen optimointi:** PSR vähentää token-kuormitusta luonnin aikana, mikä mahdollistaa sen, että käyttäjät, joilla on 4 Gt:n näytönohjain, voivat suorittaa hahmonluonnin ja tarinan luonnin, jotka aiemmin jumiutuivat.
  - 🔄 **Johdonmukaisuuden ylläpito:** Vaikka työ jaetaan, järjestelmä syöttää "pääaikeen", jotta tekoäly ei menetä punaista lankaa tekemisistään.
  
  **Tekoälyäänet (inkrementaalinen parannus):**
  Reaaliaikainen äänten luonti kaikilla kielillä (jotkut kielet ovat rajoitetumpia kuin toiset; englannin kielessä on monipuolisin äänivalikoima)
  - 🗣️ **Äänelliset taisteluhuudot:** Kun taistelu vihollisia vastaan alkaa, peli toistaa nyt kontekstisidonnaisen aloituslauseen ääneen.
  - 🎭 **Dynaamiset lauseet kontekstin mukaan:** Moottori voi luoda lyhyitä äänirepliikkejä tiettyihin tapahtumiin (palvelut/taistelu) kielen, tunnelman ja hahmoprofiilin mukaan.
  - 🧠 **Sisäiset äänimallit:** Tekniset äänimallit on erotettu kerrontajärjestelmästä, jotta ne eivät häiritse tarinaa.
  - 🔊 **Parempi selkeys:** Synteesin ymmärrettävyyttä ja prosodiaa on parannettu, jotta selkeä ääntäminen on etusijalla.
  
  **⚠️ Yhteensopivuusilmoitus (Aiemmat tallennukset):**
  - 🔄 Sääntömoottoriin ja ympäristöjärjestelmään tehtyjen lukuisten sisäisten muutosten vuoksi **aiemmin tallennetut pelit ja maailmat ovat edelleen pelattavissa (mahdollisesti)**, mutta on hyvin todennäköistä, että niissä esiintyy virheitä tai odottamattomia toimintoja. **Suosittelemme luomaan uuden puhtaan maailman**, jotta voit nauttia kaikista parannuksista kunnolla.

****************************************************************************************************
15/02/2026 02:57 - Suorakirjoitus, vakauskorjauksia ja tunnistus - Beta_v057
****************************************************************************************************
- What's New (FI):
  **Vakaus:**
  - 🛠️ **Hyvästit asetuskaatumisille:** Korjattu useita kaatumisia, jotka tapahtuivat tietyissä olosuhteissa ja estivät tekoälyasetusten avaamisen tai muokkaamisen mallia vaihdettaessa tai arvoja nollattaessa.
  - 🗃️ **Hiljainen tietokanta:** Ärsyttävä "Yhteensopimaton tietokanta" -ilmoitus peliä käynnistettäessä ei enää ilmesty, jos tietokantasi on kunnossa. Se näytetään vain, kun tapahtuu todellinen rakenteellinen muutos, joka vaatii migraatiota.
  
  **Pelikokemus:**
  - 🎯 **Tekoälyn tarkkuussäätö:** Voit nyt kirjoittaa kontekstin, tokenien, lämpötilan tai GPU-kerrosten arvot manuaalisesti suoraan numerokenttään liukusäätimen vieressä. Et ole enää pelkkien liukusäädinten varassa! Molemmat säätimet on synkronoitu: liikuta säädintä ja numero päivittyy, tai kirjoita numero ja säädin liikkuu.
  - ⌨️ **Suorakirjoitus:** Sinun ei enää tarvitse napsauttaa tekstikenttää kirjoittaaksesi toimintosi! Nyt voit alkaa kirjoittaa suoraan peliruudulla ollessasi. Jos olet vuorovaikutuksessa inventaarion tai muun paneelin kanssa ja haluat sitten kirjoittaa, ala vain kirjoittaa valitsematta mitään. Järjestelmä ohjaa painalluksesi automaattisesti toimintokenttään. Se ei häiritse valikoita, dialogeja eikä järjestelmän pikanäppäimiä.
  
  Lisäksi joitakin pienempiä muutoksia...

****************************************************************************************************
14/02/2026 21:48 - Kontekstin synkronointi ja tekoälyn vastausten hallinta - Beta_v056
****************************************************************************************************
- What's New (FI):
  **Järjestelmät ja suorituskyky:**
  - 🧠 **Täydellinen kontekstin hallinta:** Voit nyt säätää sekä tekoälyn muistia (`n_ctx`) että vastausten pituutta (`Max Tokens`) paljon intuitiivisemmilla liukusäätimillä.
  - ♾️ **Rajoittamaton tila:** Aktivoi "Rajoittamaton"-tila vetämällä liukusäädin minimiin, jolloin tehokkaat mallit, kuten Gemini, voivat käyttää koko kapasiteettiaan ilman rajoituksia.
  - ⚡ **Ajurien uudelleenkäynnistys:** Uusi valinta käynnistysohjelmassa näytönohjaimen ajurien uudelleenkäynnistämiseksi ennen pelaamista (valinnainen, säädettävissä käynnistysohjelmasta). Näyttö välkkyy nyt käynnistyksen yhteydessä; tällä varmistamme, että kaikki VRAM on käytettävissä puhdistamalla jäämät.
  - 🛠️ **Vankka konfiguraatio:** Korjattu visuaaliset virheet ja tekniset ongelmat suosikkitekoälytarjoajiesi asetusten tallentamisessa.
  - 🚀 **Parempi virheentunnistus:** Peli tunnistaa nyt älykkäämmin, milloin ulkoiselta tekoälyltä loppuu tila.
  
  **Mekaniikat ja maailma:**
  - 🎒 **Taattu tavaraluettelo:** Ei enää seikkailun aloittamista ilman tavaroita. SDIA-järjestelmä valvoo nyt myös hahmonluontia, jotta varusteesi ovat aina mukana.
  - 📜 **Puhdistettu taustatarina:** Korjattu virhe, joka lisäsi "koodinpätkiä" tai outoa tekstiä maailmasi historiaan. Codex on nyt puhtaampi ja luettavampi.
  - ⚠️ **Yhteensopivuusopas:** Asetuksiin on lisätty varoituksia, jotka auttavat valitsemaan yhteensopivia malleja (Instruct/Chat).
  - ⚙️ **Luotettavat implantit:** Korjattu paikkojen määrittely ja sääntöjen lataus hahmonluonnissa. Nyt kaikki kyberparannuksesi käyttävät virallisia paikkoja ja varustautuvat automaattisesti oikein.
  - 🎓 **Oppilasraja:** Säädetty taitojen alkutasapainoa. Tekoäly luo pistepaketin, joka jaetaan automaattisesti tärkeimpiin taitoihin hahmosi kontekstin perusteella. Sankarisi aloittavat nyt todellisina noviiseina ja kehittyvät loogisemmin.

****************************************************************************************************
14/02/2026 05:06 - Eheyden vahvistus, hahmojen tietoisuus ja optimointi - Beta_v055
****************************************************************************************************
- What's New (FI):
  - 🧠 **Tekoälyn priorisointi mieltymystesi mukaan:** Nyt voit vetää ja pudottaa tekoälyliittymiäsi päättääksesi, mitä käytetään ensin. Jos yksi epäonnistuu, peli yrittää automaattisesti seuraavaa prioriteettilistallasi.
  - ⚙️ **Esilatauksen hallinta:** Käynnistysohjelmaan on lisätty vaihtoehto, jolla voit päättää, haluatko esiladata paikallisen tekoälymallin vai ladata sen vasta tarvittaessa (säästää resursseja käynnistyksessä).
  - 🛡️ **Turvallinen ja puhdas poisto:** Kun poistat maailman, järjestelmä huolehtii nyt kaikkien siihen liittyvien tietojen (hahmot ja tarina) täydellisestä siivoamisesta, pitäen tietokantasi virheettömänä.
  - 🚀 **Muistin optimointi:** Tekoälyn "aivot" ladataan nyt vain kerran ja jaetaan kaikkien toimintojen kesken, mikä säästää runsaasti näyttömuistia (VRAM).
  - 🎨 **Älykäs käyttöliittymä:** Maailman valintapaneeli mukautuu nyt täydellisesti näyttöön ja tekstiin ilman leikkautuvia painikkeita tai huonosti käytettyä tilaa.
  - 🔄 **Parannettu älykäs kierto:** Olen korjannut kiertojärjestelmän, jotta se ei luovuta paikallisen tekoälyn suhteen heti; nyt se antaa sille mahdollisuuden korjata itsensä ennen ulkoisen avun hakemista.
  - 🌍 **Monikielinen ja vankka tekoäly:** Esineiden tunnistus ja kerronta ovat nyt tarkempia 10 kielellä, ja ne on suojattu erityisesti, jotta tarina ei lopu koskaan kesken.
  - 🛠️ **Taattu tekoälyn pysyvyys:** Korjattu virhe, joka sai Geminin "unohtamaan" tai muuttumaan Ollamaksi. Tekoälyn käyttöprioriteettisi tallennetaan nyt turvallisesti ja tarkasti.
  - ⚡ **Gemini palautettu:** Pääsy Gemini-malliin on korjattu palauttamalla sen oikeat avaimet ja URL-osoitteet.
  - 🎨 **Teemoitettu käyttöliittymä korjattu:** Päätöspainikkeet palauttavat nyt välittömästi maailmasi värin (esim. kulta fantasiaa varten) peliä ladattaessa.
  - 👥 **Hahmojen välinen tietoisuus:** Tekoäly on nyt tietoinen kaikista hahmoistasi! Jos sinulla on useita sankareita samassa maailmassa, tekoäly tunnistaa heidät asukkaiksi ja muistaa kunkin tekemiset yksilöllisesti.
  - 🧠 **Tekijäkohtainen muisti:** Muistijärjestelmä erottaa nyt, kuka teki minkäkin toiminnon, estäen tekoälyä sekoittamasta menneitä urotekojasi muiden hahmojen tekoihin.

****************************************************************************************************
13/02/2026 07:56 - Semanttinen taisteluntulkintajärjestelmä - Beta_v054
****************************************************************************************************
- What's New (FI):
  🧪 NYT SAATAVILLA:
  
  ⚠️ **TÄRKEÄ HUOMAUTUS:** PELI VOI SIIRTÄÄ VANHAN TIETOKANNAN UUTEEN RAKENTEESEEN KÄYNNISTYSOHJELMAN ASETUSTEN KAUTTA. EN SUOSITTELE TÄTÄ; VAIKKA VANHA TALLENNUKSESI TOIMISI, MONI ASIA ON RIKKI. SUOSITTELEN POISTAMAAN KAIKKI AIEMMAT TALLENNUKSET. TIETOKANTAA EI TARVITSE POISTAA KOKONAAN PAITSI ÄÄRIMMÄISISSÄ TAPAUKSISSA.
  
  Muutokset:
  
  - 🌍 **Maailmojen ja hahmojen hallinta:** Sinulla on nyt täysi vapaus. Luo omia maailmoja omine sääntöineen ja asetelmineen, ja luo kuhunkin niin monta hahmoa kuin haluat. **Tärkeä huomio:** Kaikki saman maailman hahmot jakavat saman aikajanan ja tapahtumat, mikä luo pohjan tulevalle moninpelitilalle.
  - 🧠 **Kontekstuaalinen muisti (Super RAG):** Tekoälyllä on nyt "aistit". Etsiessään tietoa tarinasta (Lore) tai muististaan se ottaa huomioon, missä olet, kenen kanssa olet, oletko haavoittunut ja mitä juuri tapahtui. Jos olet kuninkaan seurassa, se muistaa kuninkaita koskevat asiat. Jos olet haavoittunut, se etsii parannussääntöjä. Se on paljon intuitiivisempi ja johdonmukaisempi!
  - 🌍 **Ensimmäisen hahmon tarina:** Kirjoititko eeppisen kuvauksen maailmastasi, mutta tekoäly sivuutti sen ensimmäisen hahmosi kohdalla? Korjattu! Nyt manuaalinen maailmankuvaus siirtyy suoraan tekoälylle alkuluonnin aikana, jopa ennen muistijärjestelmän aktivoitumista.
  - ⚙️ **Parannettu maailmajärjestelmä:** Olen erottanut maailmasi nimen teknisistä säännöistä. Nyt voit nimetä maailmasi miten haluat ilman, että se vaikuttaa Fantasia- tai Kyberpunk-sääntöjen latautumiseen.
  - 📝 **Selkeyttä luomiseen:** Olen parantanut sisäisiä ohjeita, jotta tekoäly ymmärtää paremmin, milloin sen tulee keksiä taustatarina ja milloin vain poimia tilastosi.
  - 🧠 **Vapaa tekstitaistelu:** Nyt voit kirjoittaa taistelutoimintosi kuin puhuisit pöytäroolipelin pelinjohtajalle: "langeta parannusloitsu itseeni", "vedä miekka esiin", "käytä parannusjuomaa". Tekoäly ymmärtää aikomuksesi ja kääntää sen pelimekaniikaksi.
  - 🎨 **Uusi eeppinen käyttöliittymä!** Olen uudistanut pelin täysin. RPG-tyyliset valikot, animoidut taustat ja täysin uudistettu visuaalinen kokemus. Tumma puoliläpinäkyvä tyyli, neonreunukset ja pehmennetyt varjot täydellistä immersiota varten.
  - 🎬 **Tekoälyohjaaja (PARANNETTU):** Taistelu herää nyt eloon. Tekoäly luo ympäristötapahtumia ja reaktioita, jotka rikastuttavat kerrontaa: putoavia soihtuja, perääntyviä vihollisia, romahtavia palkkeja. Taistelukenttä ei ole enää staattinen!
  - ⚔️ **Aseen veto sanoilla:** Sinun ei enää tarvitse klikata aseen paikkaa. Kirjoita vain "vedä miekka" tai "ota kirves esiin", ja järjestelmä tulkitsee sen automaattisesti (HUOM! Tämän tekeminen taistelussa voi johtaa epäonnistumiseen, kämmiin ja vuoron menetykseen... "Taisteluihin tullaan valmiina!").
  - 📖 **Tunnistetut loitsut:** Tekoäly tuntee nyt koko loitsukirjasi. Sano "heitä tulipallo", ja jos sinulla on kyseinen loitsu, se heitetään.
  - 🌍 **Kerronta omalla kielelläsi:** Tarina kunnioittaa nyt tiukasti valittua kieltä välttäen outoja kielisekoituksia (toivottavasti en joudu näkemään enää spanglishia koskaan! Olen pakottanut tekoälyä niin paljon, että jos se vielä generoi tekstiä muulla kuin valitulla kielellä, se on puhtaasti kirottu).
  - 🛡️ **Ei enää menetettyjä vuoroja:** Jos peli ei ymmärrä toimintaasi, se pyytää sinua muotoilemaan sen uudelleen. Vuorosi EI mene hukkaan.
  - 🎒 **Manuaalinen inventaario:** Siirtääksesi esineitä paikkojen välillä (varustaminen repusta, ammusten lataus), käytä vedä ja pudota -käyttöliittymää. Tämä välttää sekaannuksia ja säästää tekoälyn resursseja.
  - 🧪 **Sujuva juomien käyttö:** Nyt voit vetää juomia ja ruokaa suoraan muotokuvasi päälle käyttääksesi niitä. Olen lisännyt myös "Käytä"-vaihtoehdon hiiren oikealla painikkeella. Intuitiivisempaa ja nopeampaa!
  - 🩸 **Vahinkokorjaus:** Et ole enää kuolematon! Olemme korjanneet ongelman, jossa terveyspalkki ei laskenut, vaikka sinua lyötiin. Nyt kärsit kuten kuuluukin.
  - 👻 **Hyvästit haamuesineille:** Löysitkö tarinassa esineen, mutta se ei koskaan ilmestynyt reppuusi? Ongelma ratkaistu! Nyt järjestelmä korjaa automaattisesti esineet, jotka tekoäly "unohtaa" luoda.
  - 🐛 **Kriittinen NPC-korjaus:** Korjattu virhe, joka esti NPC-hahmoja tekemästä taktisia päätöksiä oikein, minkä vuoksi ne aina "odottivat" hyökkäämisen tai puolustamisen sijaan.
  - 🎒 **Aloitusinventaarion korjaus:** Uudet hahmot eivät enää aloita alasti. Nyt ne saavat aloitusvarusteensa oikein.
  - 🎲 **Hahmonluonti:** Korjattu hyväksikäytettävä virhe, jossa ominaisuuden nostaminen ja laskeminen tietyissä rajoissa loi äärettömästi lisäpisteitä. Karisma-huijaus on ohi!
  - 🖼️ **Korjatut muotokuvat:** Loitko maailman omalla nimellä ja muotokuvat katosivat? Korjattu! Nyt järjestelmä löytää oikeat kuvat riippumatta siitä, miten nimeät maailmasi.
  - 💍 **Älykkäät ikonit:** Esineet (mukaan lukien sormukset) näyttävät nyt tarkemmat ja oikeat ikonit käyttöliittymässä.
  - 🧪 **Parannetut työkaluvihjeet:** Juomat, kulutustavarat ja loitsut näyttävät nyt oikein kaikki tietonsa ja vaikutuksensa, kun hiiri viedään niiden päälle.
  - 🎵 **Ääniparannuksia:** Taistelumusiikki ei enää pysähdy, kun painat esimääritettyjä painikkeita.
  - [I18N] **Implanttikorjaus:** Lisätty puuttuvat käännösavaimet implanttipaikoille (`slot_implant_*`) ja vastaaville ikoneille (`icon_implant_*`) tiedostoon `es.json`.
  - [FIX][AUDIO] **Epäjohdonmukainen ääni:** Mukautettu esineiden varustamisen ja aseiden esiin ottamisen äänitehosteet (SFX) ympäristöön. Nyt järjestelmä havaitsee `setting_key`:n ja käyttää futuristisia/teollisia ääniä Kyberpunkissa ja klassisia ääniä Fantasiassa.
  - [FIX][I18N] **Tiedoston es.json siivous:** Poistettu yli 20 kaksoiskappaletta avaimista tiedostossa `es.json` ja korjattu kirjoitusvirheitä paikkojen nimissä (esim. "Oíidos" -> "Oídos").
  - ⚙️ **Älykäs mallintunnistus:** Peli lukee nyt suoraan tuomiesi mallien (GGUF) "aivot". Se havaitsee todellisen maksimikontekstin automaattisesti. (Virallisiin optimoituihin malleihin ei kosketa maksimaalisen vakauden takaamiseksi).
  - 📂 **Tilansäästö:** Kun lisäät mallin tietokoneeltasi, peli siirtää sen nyt suoraan omaan kansioonsa kopioimisen sijaan. Gigatavusi kiittävät sinua!
  - ⚖️ **Oikeutta ominaisuuksiin:** Korjattu hyväksikäytettävä virhe, joka mahdollisti äärettömät pisteet nostamalla ja laskemalla ominaisuuksia luonnin aikana.
  - 📖 **Koulutusopas:** Olen päivittänyt ohjekirjan (README) kaikilla yksityiskohdilla siitä, miten hahmosi saavat kokemusta ja nostavat ominaisuuksiaan.
  - 📜 **Eeppisten maailmojen koodeksi:** Ei enää "yhden jälkikirjoituksen" tarinoita! Nyt generaattori luo maailmoja syvällisellä historialla, kuvaten niiden uskonnot, lait, maantiedon ja kuuluisat henkilöt yksityiskohtaisessa kronikkamuodossa.
  - 🧙 **Johdonmukaiset tarinat:** Hahmosi ei enää synny tyhjiöön. Sen tausta integroituu nyt älykkäästi juuri luomasi tai valitsemasi maailman tarinaan.
  - ⚡ **Sujuva käyttöliittymä:** Tarinoiden ja maailmojen automaattinen luonti tapahtuu nyt taustalla. Ei enää odottelua jäätyneen ruudun ääressä!
  - 🚀 **Välitön seikkailun aloitus:** Olen poistanut odotusajat! Hahmon luomisen jälkeen hyppäät nyt suoraan tarinaan. Järjestelmä käyttää rikastettua taustaasi luodakseen täydellisen alun ilman, että sinun tarvitsee kirjoittaa sanaakaan lisää.
  - 🎭 **Taustatarinat motiivilla:** Hahmoillasi ei ole enää pelkkä menneisyys, vaan myös kiireellinen syy aloittaa seikkailu. Uusi tekoälyjärjestelmä luo automaattisesti tarinan alkukipinän, joka on integroitu biografiaasi.
  - 🧹 **Yksinkertaistettu käyttöliittymä:** Olen poistanut painikkeet ja näytöt, jotka eivät tuoneet lisäarvoa. "Aloita tarina" -painike keskittää nyt kaiken voiman, jotta pääset pelaamaan mahdollisimman pian.
  - [FIX][UI] **Visuaalinen kaksoiskappale maailman valinnassa:** Korjattu virhe, jossa maailman nimi näkyi kahteen kertaan muodossa "Nimi [Nimi]". Nyt tyyppimerkintä piilotetaan, jos se on turha.
  - [FEAT][UI] **Pikalataus (yksi klikkaus):** Hahmon voi nyt ladata tai uuden luomisen aloittaa yhdellä klikkauksella maailman valintaruudussa. Maailmojen laajennus säilyy ristiriitojen välttämiseksi.
  - 🧠 **Luovempi tekoäly:** Olen rikkonut tekoälyn "toistosilmukan" syöttämällä teknistä vaihtelua jokaiseen pyyntöön. Nyt satunnaisesti luodut hahmot ovat paljon ainutlaatuisempia ja omaperäisempiä, sivuuttaen oppaan esimerkit.
  
  🛡️ Niille rohkeille, jotka USKALTAVAT taistella etulinjassa: Seikkailu odottaa teitä, nyt kesyttömämpänä kuin koskaan!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-tuki (AMD/Intel) ja vankka virheiden hallinta - Beta_v053
****************************************************************************************************
- What's New (FI):
  - 🚀 **Vulkan-hybridimoottori:** Virallinen tuki AMD- ja Intel-näytönohjaimille! Peli sisältää nyt dedikoidun Vulkan-moottorin, joka aktivoituu automaattisesti (tai manuaalisesti) tekoälyn kiihdyttämiseksi muilla kuin NVIDIAn laitteilla.
  - ⚙️ **Täysi moottorin hallinta:** Olemme lisänneet "Pakota Vulkan" -valinnan sekä käynnistysohjelmaan että asetuksiin. Jos CUDA:n kanssa ilmenee ongelmia tai haluat testata Vulkanin suorituskykyä (joka on monissa kokoonpanoissa huippunopea), päätösvalta on sinulla.
  - 🚦 **Järjestelmän tila:** Nyt näet tilapaneelista tarkalleen, mikä moottori konepellin alla jyllää (🟢 VIHREÄ = CUDA, 🔴 PUNAINEN = Vulkan).
  - 🛡️ **Tekoälyn tilailmaisin:** Jos tekoäly "väsyy" (kiintiö ylittyy) tai internetyhteys katkeaa, peli varoittaa sinua selkeällä ja hyödyllisellä ikkunalla sen sijaan, että jättäisi sinut odottamaan tietämättömänä.
  - 🔄 **Jumiutumisen esto:** Yhteysvirheen sattuessa peli ei enää "katkaise" keskustelua. Dialogivaihtoehtosi ilmestyvät takaisin, jotta voit yrittää uudelleen menettämättä edistymistä.
  - ☁️ **Pilvimuisti:** Asetusvalikko muistaa nyt pilvipalveluntarjoajien asetuksesi oikein pelikertojen välillä.

****************************************************************************************************
03/02/2026 20:23 - VRAM-optimointi ja latausvakaus - Beta_v052
****************************************************************************************************
- What's New (FI):
  - 🧠 **Optimoidut aivot:** Olemme korjanneet vakavan virheen, joka sai tekoälyn yrittämään "ajatella kahdesti" samaan aikaan. Tämä kaksinkertaisti näytönohjaimen muistin käytön ja aiheutti äärimmäistä hidastelua tai kaatumisia. VRAM-muistisi kiittää!
  - 💾 **Varma lataus:** Yleistä vakautta on parannettu tallennuksia ladattaessa, jotta seikkailun jatkaminen on aina sujuvaa.

****************************************************************************************************
02/02/2026 00:18 - Kriittinen pikakorjaus: Vakaus, Multi-GPU ja lokalisointiparannuksia - Beta_v051
****************************************************************************************************
- What's New (FI):
  - 🚑 **Kriittinen korjaus:** Korjattu ongelma, joka esti tietyissä harvinaisissa tilanteissa pelin käynnistymisen (ns. "Totaalinen virhe") tietokannan korruptoitumisen vuoksi, jota käynnistysohjelma ei pystynyt puhdistamaan. "Tyhjennä tietokanta" -toiminto on nyt huomattavasti tehokkaampi.
  - ⚡ **Laitteistoparannus:** Korjattu virhe, jonka vuoksi "Automaattinen määritys" -tila jätti huomiotta usean näytönohjaimen järjestelmien tehon tietyissä kokoonpanoissa, joissa on käytössä erilaisia näytönohjaimia.
  - 🛠️ **Työkalu:** Käynnistysohjelmaan on lisätty uusi vaihtoehto, jolla voi helposti avata edellisen istunnon lokin (log) tuen helpottamiseksi.
  - 🌍 **Lokalisointi:** Korjattu käynnistysohjelmassa useita painikkeita, jotka näkyivät englanniksi (Yes/No). Nyt ne noudattavat valittua kieltä.
  - 📖 **Käyttöliittymä:** Parannettu versiotietotekstin muotoilua luettavuuden parantamiseksi.
  
  - **Tulossa pian:** Seuraavana toteutusvuorossa: AMD-, NVIDIA- ja Intel-näytönohjaintuki Vulkanin kautta.

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
