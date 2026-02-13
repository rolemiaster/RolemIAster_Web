****************************************************************************************************
07/02/2026 20:26 - Sistema de Interpretación Semántica de Combate - BETA_v054
****************************************************************************************************
🧪 YA DISPONIBLE:

⚠️ **AVISO IMPORTANTE:** EL JUEGO PUEDE MIGRAR LA ANTIGUA BASE DE DATOS PARA LA NUEVA ESTRUCTURA MEDIANTE OPCIONES DEL LAUNCHER. NO RECOMIENDO ESTO, AUNQUE FUNCIONE TU ANTIGUA PARTIDA, MUCHAS COSAS ESTARÁN ROTAS. MI RECOMENDACIÓN ES ELIMINAR TODAS LAS PARTIDAS ANTERIORES GUARDADAS. NO ES NECESARIO BORRAR LA BASE DE DATOS AL COMPLETO SALVO CASO EXTREMO.

Cambios:

- 🌍 **Gestor de Mundos y Personajes:** Ahora tienes total libertad. Crea tus propios Mundos con sus propias reglas y ambientación, y dentro de cada uno, crea tantos personajes como quieras. **Nota Importante:** Todos los personajes de un mismo mundo comparten la misma línea temporal y los eventos sucedidos, lo que sienta las bases para el futuro modo multijugador.
- 🧠 **Memoria Contextual (Súper RAG):** La IA ahora tiene "sentidos". Al buscar información en el Lore o en su memoria, tiene en cuenta dónde estás, con quién estás, si estás herido y qué acaba de pasar. ¡Es mucho más intuitivo y coherente!
- 🌍 **Lore en el Primer Personaje:** ¿Escribías una descripción épica de tu mundo y la IA la ignoraba en tu primer personaje? ¡Solucionado! Ahora la descripción manual del mundo llega directamente a la IA durante la creación inicial.
- ⚙️ **Sistema de Mundos Mejorado:** He independizado el nombre de tu mundo de las reglas técnicas.
- 📝 **Claridad en Creación:** He mejorado las instrucciones internas para que la IA entienda mejor cuándo debe inventar un trasfondo.
- 🧠 **Combate por Texto Libre:** Escribe acciones como "lanzar hechizo de curación" o "desenfundar espada". La IA entiende tu intención.
- 🎨 **¡Nueva Interfaz Épica!** Remodelación completa estilo RPG con menús animados y bordes neón.
- 🎬 **IA Director de Escena (MEJORADO):** El combate ahora cobra vida con eventos ambientales.
- ⚔️ **Desenfundar con Palabras:** Escribe "desenfundar espada" en lugar de hacer clic. ¡Cuidado en combate!
- 📖 **Hechizos Reconocidos:** La IA conoce tu libro de hechizos completo.
- 🌍 **Narrativa en tu Idioma:** Respeta estrictamente el idioma seleccionado, evitando mezclas.
- 🛡️ **No Más Turnos Perdidos:** Si el juego no entiende, te pedirá aclaraciones. Tu turno NO se pierde.
- 🎒 **Inventario Manual:** Interfaz de arrastrar y soltar para mover objetos.
- 🧪 **Uso de Pociones Fluido:** Arrastra sobre retrato o usa el menú de clic derecho.
- 🩸 **Corrección de Daño:** Barra de vida corregida. Ya no eres inmortal.
- 👻 **Adiós a los Items Fantasma:** Reparación automática de objetos que la IA olvida crear.
- 🐛 **Corrección Crítica NPC:** Decisiones tácticas de NPCs corregidas.
- 🎒 **Corrección Inventario Inicial:** Personajes ya no empiezan desnudos.
- 🎲 **Creación de Personaje:** Exploit de puntos infinitos corregido.
- 🖼️ **Retratos Arreglados:** El sistema encuentra imágenes correctas independientemente del nombre del mundo.
- 💍 **Iconos Inteligentes:** Objetos y anillos con iconos precisos.
- 🧪 **Tooltips Mejorados:** Información completa al pasar el ratón.
- 🎵 **Mejoras de Audio:** Música no se detiene al pulsar botones.

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
