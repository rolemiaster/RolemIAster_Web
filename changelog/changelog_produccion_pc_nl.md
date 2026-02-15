****************************************************************************************************
15/02/2026 02:57 - Direct typen, stabiliteitsfixes en detectie v - Beta_v057
****************************************************************************************************
- What's New (NL):
  **Stabiliteit:**
  - 🛠️ **Vaarwel configuratiecrashes:** Diverse fouten verholpen die onder bepaalde omstandigheden optraden en het openen of wijzigen van AI-instellingen verhinderden bij het wisselen van model of het resetten van waarden.
  - 🗃️ **Stille database:** De vervelende melding "Niet-compatibele database" bij het opstarten van het spel verschijnt niet meer als je database in orde is. Deze wordt alleen getoond wanneer er een echte structurele wijziging is die migratie vereist.
  
  **Spelervaring:**
  - 🎯 **Precisiecontrole in AI:** Je kunt nu handmatig de waarden voor Context, Tokens, Temperatuur of GPU-lagen direct invoeren in een numeriek veld naast de schuifregelaar. Je bent niet langer alleen afhankelijk van de schuifregelaars! Beide bedieningselementen zijn gesynchroniseerd: beweeg de schuifregelaar en het getal wordt bijgewerkt, of typ het getal en de schuifregelaar beweegt.
  - ⌨️ **Direct typen:** Je hoeft niet langer op het tekstvak te klikken om je actie te schrijven! Je kunt nu direct beginnen met typen terwijl je in het spelscherm bent. Als je interactie hebt met de inventaris of een ander paneel en vervolgens wilt schrijven, begin dan gewoon met typen zonder iets te selecteren. Het systeem stuurt je toetsaanslagen automatisch door naar het actieveld. Het interfereert niet met menu's, dialogen of systeemsneltoetsen.
  
  En nog enkele kleine wijzigingen...

****************************************************************************************************
14/02/2026 21:48 - Contextsynchronisatie en AI-reactiebeheer - Beta_v056
****************************************************************************************************
- What's New (NL):
  **Systemen en Prestaties:**
  - 🧠 **Volledige Contextcontrole:** Je kunt nu zowel het AI-geheugen (`n_ctx`) als de lengte van de reacties (`Max Tokens`) aanpassen met veel intuïtievere schuifregelaars.
  - ♾️ **Onbeperkte Modus:** Schuif naar het minimum om de modus "Onbeperkt" te activeren, waardoor krachtige modellen zoals Gemini hun volledige capaciteit zonder beperkingen kunnen gebruiken.
  - ⚡ **Drivers Herstarten:** Nieuwe optie in de launcher om videostuurprogramma's te herstarten voor het spelen (optioneel, configureerbaar vanuit launcher). Het scherm zal nu knipperen bij het starten; hiermee zorgen we ervoor dat alle VRAM beschikbaar is door restanten te verwijderen.
  - 🛠️ **Robuuste Configuratie:** Visuele fouten en technische storingen bij het opslaan van de instellingen van je favoriete AI-providers zijn verholpen.
  - 🚀 **Betere Foutdetectie:** Het spel is nu slimmer in het detecteren wanneer een externe AI geen ruimte meer heeft.
  
  **Mechanieken en Wereld:**
  - 🎒 **Gegarandeerde Inventaris:** Geen avonturen meer starten zonder je items te zien. Het SDIA-systeem bewaakt nu ook de creatie van personages, zodat je uitrusting er altijd is.
  - 📜 **Gezuiverde Lore:** Een fout hersteld die fragmenten van "code" of vreemde tekst in het verhaal van je wereld injecteerde. De Codex is nu zuiverder en leesbaarder.
  - ⚠️ **Compatibiliteitsgids:** Waarschuwingen toegevoegd in de instellingen om je te helpen compatibele modellen te kiezen (Instruct/Chat).
  - ⚙️ **Betrouwbare Implantaten:** De definitie van slots en het laden van regels bij het maken van personages is gecorrigeerd. Nu gebruiken al je cyber-verbeteringen officiële slots en rusten ze zichzelf correct uit.
  - 🎓 **Leerlinglimiet:** De initiële balans van vaardigheden is aangepast. De AI genereert een pakket punten dat automatisch wordt verdeeld over de belangrijkste vaardigheden op basis van de context van je personage. Je helden beginnen nu als echte nieuwelingen en maken op een logischere manier progressie.

****************************************************************************************************
14/02/2026 05:06 - Integriteitsversterking, Personagebewustzijn en Optimalisatie - Beta_v055
****************************************************************************************************
- What's New (NL):
  - 🧠 **AI-prioriteit naar wens:** Je kunt nu je AI-connectors slepen en neerzetten om te bepalen welke eerst wordt gebruikt. Als er een faalt, probeert het spel automatisch de volgende in je prioriteitenlijst.
  - ⚙️ **Beheer voor vooraf laden:** Optie toegevoegd aan de launcher om te kiezen of je het lokale AI-model vooraf wilt laden of pas wanneer nodig (bespaart systeembronnen bij het opstarten).
  - 🛡️ **Veilig en schoon verwijderen:** Bij het verwijderen van een wereld zorgt het systeem er nu voor dat absoluut alle gerelateerde gegevens (personages en verhaal) worden opgeruimd, waardoor je database onberispelijk blijft.
  - 🚀 **Geheugenoptimalisatie:** Het "brein" van de AI wordt nu slechts één keer geladen en gedeeld tussen alle functies, wat veel videogeheugen (VRAM) bespaart.
  - 🎨 **Slimme interface:** Het wereldselectiepaneel past zich nu perfect aan het scherm en de tekst aan, zonder afgesneden knoppen of slecht benutte ruimte.
  - 🔄 **Verbeterde slimme rotatie:** Het rotatiesysteem is gerepareerd zodat het je lokale AI niet meteen opgeeft; het krijgt nu een kans om zichzelf te corrigeren voordat er externe hulp wordt gezocht.
  - 🌍 **Veeltalige en robuuste AI:** Objectdetectie en het verhaal zijn nu nauwkeuriger in 10 talen, met speciale bescherming zodat je nooit zonder verhaal komt te zitten.
  - 🛠️ **Gegarandeerde AI-persistentie:** Fout opgelost waardoor Gemini werd "vergeten" of veranderde in Ollama. Je AI-gebruiksprioriteiten worden nu veilig en nauwkeurig opgeslagen.
  - ⚡ **Gemini hersteld:** Toegang tot het Gemini-model gerepareerd door de juiste sleutels en URL te herstellen.
  - 🎨 **Thematische interface gecorrigeerd:** Beslissingsknoppen nemen nu direct de kleur van je wereld aan (bijv. goud voor fantasy) bij het laden van het spel.
  - 👥 **Bewustzijn tussen personages:** De AI is zich nu bewust van al je personages! Als je meerdere helden in dezelfde wereld hebt, herkent de AI ze als inwoners en kan onthouden wat elk individu heeft gedaan.
  - 🧠 **Geheugen met toeschrijving:** Het herinneringssysteem onderscheidt nu wie welke actie heeft uitgevoerd, waardoor wordt voorkomen dat de AI jouw eerdere daden verwart met die van andere personages.

****************************************************************************************************
13/02/2026 07:56 - Semantisch Gevechtsinterpretatiesysteem - Beta_v054
****************************************************************************************************
- What's New (NL):
  🧪 NU BESCHIKBAAR:
  
  ⚠️ **BELANGRIJKE MEDEDELING:** HET SPEL KAN DE OUDE DATABASE MIGREREN NAAR DE NIEUWE STRUCTUUR VIA OPTIES IN DE LAUNCHER. IK RAAD DIT NIET AAN; ZELFS ALS JE OUDE SAVE WERKT, ZULLEN VEEL DINGEN STUK ZIJN. MIJN ADVIES IS OM ALLE VORIGE OPGESLAGEN SPELLEN TE VERWIJDEREN. HET IS NIET NODIG OM DE VOLLEDIGE DATABASE TE WISSEN, TENZIJ IN EXTREME GEVALLEN.
  
  Wijzigingen:
  
  - 🌍 **Wereld- en Personagebeheer:** Je hebt nu totale vrijheid. Creëer je eigen werelden met hun eigen regels en setting, en maak daarbinnen zoveel personages als je wilt. **Belangrijke opmerking:** Alle personages in dezelfde wereld delen dezelfde tijdlijn en gebeurtenissen, wat de basis legt voor de toekomstige multiplayer-modus.
  - 🧠 **Contextueel Geheugen (Super RAG):** De AI heeft nu "zintuigen". Bij het zoeken naar informatie in de Lore of het geheugen, wordt er rekening gehouden met waar je bent, met wie je bent, of je gewond bent en wat er net is gebeurd. Als je bij een Koning bent, herinnert hij zich dingen over koningen. Als je gewond bent, zoekt hij naar regels voor genezing. Het is veel intuïtiever en coherenter!
  - 🌍 **Lore bij het Eerste Personage:** Schreef je een epische beschrijving van je wereld en negeerde de AI die bij je eerste personage? Opgelost! De handmatige wereldbeschrijving gaat nu rechtstreeks naar de AI tijdens de initiële creatie, zelfs voordat het geheugensysteem actief wordt.
  - ⚙️ **Verbeterd Wereldsysteem:** Ik heb de naam van je wereld losgekoppeld van de technische regels. Je kunt je wereld nu noemen zoals je wilt zonder dat dit invloed heeft op het laden van Fantasy- of Cyberpunk-regels.
  - 📝 **Duidelijkheid bij Creatie:** Ik heb de interne instructies verbeterd zodat de AI beter begrijpt wanneer hij een achtergrondverhaal moet verzinnen en wanneer hij zich moet beperken tot het extraheren van je statistieken.
  - 🧠 **Vrije Tekstgevechten:** Je kunt je acties in gevechten nu schrijven alsof je tegen een tafelrollenspel-personage praat: "spreek genezingsspreuk over mij uit", "trek mijn zwaard", "gebruik genezingsdrankje". De AI begrijpt je bedoeling en vertaalt deze naar spelmechanismen.
  - 🎨 **Nieuwe Epische Interface!** Ik heb het spel volledig verbouwd. Menu's in RPG-stijl, geanimeerde achtergronden en een compleet vernieuwde visuele ervaring. Donkere halfdoorzichtige stijl, neonranden en zachte schaduwen voor totale immersie.
  - 🎬 **AI Scèneregisseur (VERBETERD):** Gevechten komen nu tot leven. De AI genereert omgevingsgebeurtenissen en reacties die het verhaal verrijken: vallende fakkels, terugtrekkende vijanden, instortende balken. Het slagveld is niet langer statisch!
  - ⚔️ **Wapen Trekken met Woorden:** Je hoeft niet meer op het wapenslot te klikken. Typ gewoon "trek zwaard" of "pak mijn bijl" en het systeem interpreteert het automatisch (LET OP! Dit doen tijdens een gevecht kan leiden tot falen, blunders en verlies van beurt!... "Kom voorbereid naar het gevecht!").
  - 📖 **Herkende Spreuken:** De AI kent nu je volledige spreukenboek. Zeg "werp vuurbal" en als je die spreuk hebt, wordt hij uitgevoerd.
  - 🌍 **Verhaal in je Eigen Taal:** Het verhaal respecteert nu strikt de geselecteerde taal en voorkomt vreemde mengelmoesjes van talen (hopelijk hoef ik nooit meer 'Spanglish' te zien! Ik heb de AI zo gedwongen dat als hij nu tekst in een andere taal genereert, hij echt vervloekt moet zijn).
  - 🛡️ **Geen Verloren Beurten Meer:** Als het spel je actie niet begrijpt, wordt je gevraagd deze anders te formuleren. Je beurt gaat NIET verloren.
  - 🎒 **Handmatige Inventaris:** Gebruik de sleep-en-neerzet interface om voorwerpen tussen vakken te verplaatsen (uitrusten vanuit rugzak, munitie laden). Dit voorkomt verwarring en bespaart AI-rekenkracht.
  - 🧪 **Vloeiend Drankjesgebruik:** Je kunt nu drankjes en voedsel rechtstreeks naar je portret slepen om ze te gebruiken. Ik heb ook de optie "Gebruiken" toegevoegd aan de rechtermuisknop. Intuïtiever en sneller!
  - 🩸 **Schadecorrectie:** Je bent niet langer onsterfelijk! We hebben een probleem opgelost waarbij de levensbalk niet zakte, zelfs niet als je geraakt werd. Nu zul je lijden zoals het hoort.
  - 👻 **Vaarwel Spookvoorwerpen:** Vond je een voorwerp in het verhaal maar verscheen het nooit in je rugzak? Probleem opgelost! Het systeem herstelt nu automatisch voorwerpen die de AI "vergeet" aan te maken.
  - 🐛 **Kritieke NPC-fix:** Een fout opgelost waardoor NPC's geen tactische beslissingen konden nemen correct, waardoor ze altijd "wachtten" in plaats van aan te vallen of zich te verdedigen.
  - 🎒 **Correctie Startinventaris:** Nieuwe personages beginnen niet langer naakt. Ze ontvangen nu hun startuitrusting correct.
  - 🎲 **Personagecreatie:** Een exploit verholpen waarbij het verhogen en verlagen van een attribuut bij bepaalde drempels oneindige extra punten opleverde. Weg met de Charisma-truc!
  - 🖼️ **Portretten Hersteld:** Maakte je een wereld met een eigen naam en verdwenen de portretten? Opgelost! Het systeem vindt nu de juiste afbeeldingen, ongeacht hoe je je wereld doopt.
  - 💍 **Slimme Iconen:** Voorwerpen (inclusief ringen) tonen nu nauwkeurigere en correcte iconen in de interface.
  - 🧪 **Verbeterde Tooltips:** Drankjes, verbruiksartikelen en spreuken tonen nu correct al hun informatie en effecten wanneer je er met de muis overheen gaat.
  - 🎵 **Audioverbeteringen:** De gevechtsmuziek stopt niet meer bij het indrukken van de voorgedefinieerde knoppen.
  - [I18N] **Fix Implantaten:** Ontbrekende vertaalsleutels toegevoegd voor implantaatslots (`slot_implant_*`) en bijbehorende iconen (`icon_implant_*`) in `es.json`.
  - [FIX][AUDIO] **Inconsistente Audio:** Geluidseffecten (SFX) voor het uitrusten van items en trekken van wapens aangepast aan de setting. Het systeem detecteert nu de `setting_key` en gebruikt futuristische/industriële geluiden in Cyberpunk en klassieke geluiden in Fantasy.
  - [FIX][I18N] **Opschoning es.json:** Meer dan 20 dubbele sleutels verwijderd uit `es.json` en typefouten in slotnamen gecorrigeerd (bijv. "Oíidos" -> "Oídos").
  - ⚙️ **Slimme Modeldetectie:** Het spel leest nu direct het "brein" van de modellen die je importeert (GGUF). Het detecteert automatisch de echte maximale context. (Geoptimaliseerde officiële modellen worden met rust gelaten voor maximale stabiliteit).
  - 📂 **Ruimtebesparing:** Bij het toevoegen van een model vanaf je computer, verplaatst het spel het nu rechtstreeks naar de map in plaats van het te kopiëren. Je Gigabytes zullen je dankbaar zijn!
  - ⚖️ **Rechtvaardigheid in Attributen:** Een exploit verholpen waarmee je oneindige punten kon krijgen door attributen te verhogen en verlagen tijdens de creatie.
  - 📖 **Trainingsgids:** Ik heb de Handleiding (README) bijgewerkt met alle details over hoe je personages ervaring opdoen en hun attributen verhogen.
  - 📜 **Codex van Epische Werelden:** Geen lore meer van slechts een "naschrift"! De generator creëert nu werelden met een diepe geschiedenis, waarin religies, wetten, geografie en beroemde personages worden beschreven in een gedetailleerd kroniekformaat.
  - 🧙 **Coherente Verhalen:** Je personage wordt niet langer in het luchtledige geboren. Zijn achtergrond integreert nu slim met de lore van de wereld die je net hebt gecreëerd of gekozen.
  - ⚡ **Vloeiende Interface:** De automatische generatie van verhalen en werelden gebeurt nu op de achtergrond. Geen wachttijden meer met een bevroren scherm!
  - 🚀 **Direct Avontuur:** Ik heb de wachttijden geëlimineerd! Na het aanmaken van je personage spring je nu direct in het verhaal. Het systeem gebruikt je verrijkte achtergrond om het perfecte begin te creëren zonder dat je nog een woord hoeft te schrijven.
  - 🎭 **Achtergronden met Aanleiding:** Je personages hebben niet langer alleen een verleden, maar ook een dringende reden om het avontuur te beginnen. Het nieuwe AI-systeem genereert automatisch de initiële vonk van het verhaal, geïntegreerd in je biografie.
  - 🧹 **Vereenvoudigde Interface:** Ik heb knoppen en schermen verwijderd die geen waarde toevoegden. De knop "Verhaal Starten" centraliseert nu alle kracht, zodat je zo snel mogelijk kunt gaan spelen.
  - [FIX][UI] **Visuele Duplicatie bij Wereldselectie:** Bug verholpen waarbij de wereldnaam dubbel verscheen als "Naam [Naam]". Het typelabel wordt nu verborgen als het overbodig is.
  - [FEAT][UI] **Snel Laden (Eén Klik):** Je kunt nu een personage laden of een nieuwe creatie starten met slechts één klik in het wereldselectiescherm. Het uitklappen van werelden blijft behouden om conflicten te voorkomen.
  - 🧠 **Creatievere AI:** Ik heb de "herhalingslus" van de AI doorbroken door technische variabiliteit in elk verzoek te injecteren. Willekeurig gegenereerde personages zullen nu veel unieker en origineler zijn en de voorbeelden uit de gids negeren.
  
  🛡️ Aan de dapperen die het AANDURVEN om in de voorste linies te vechten: Het avontuur wacht op jullie, nu onstuimiger dan ooit!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-ondersteuning (AMD/Intel) en Robuuste Foutafhandeling - Beta_v053
****************************************************************************************************
- What's New (NL):
  - 🚀 **Hybride Vulkan-engine:** Officiële ondersteuning voor grafische kaarten van AMD en Intel! De game bevat nu een speciale Vulkan-engine die automatisch (of handmatig) wordt geactiveerd om de AI te versnellen op niet-NVIDIA-systemen.
  - ⚙️ **Totale controle over de engine:** We hebben de optie "Vulkan forceren" toegevoegd aan zowel de Launcher als de Instellingen. Als je problemen hebt met CUDA of de prestaties van Vulkan wilt testen (die in veel configuraties razendsnel is), heb jij de controle.
  - 🚦 **Systeemstatus:** Je kunt nu in het statuspaneel precies zien welke engine er onder de motorkap draait (🟢 GROEN voor CUDA, 🔴 ROOD voor Vulkan).
  - 🛡️ **AI-verkeerslicht:** Als de AI "moe" wordt (het quotum overschrijdt) of de internetverbinding wegvalt, waarschuwt de game je met een duidelijk en nuttig venster in plaats van je in stilte te laten wachten.
  - 🔄 **Anti-vastloopbeveiliging:** Bij een verbindingsfout wordt het gesprek niet meer afgebroken. Je dialoogopties verschijnen opnieuw, zodat je het opnieuw kunt proberen zonder voortgang te verliezen.
  - ☁️ **Cloudgeheugen:** Het instellingenmenu onthoudt nu correct je voorkeuren voor cloudproviders tussen sessies door.

****************************************************************************************************
03/02/2026 20:23 - VRAM-optimalisatie en Laadstabiliteit - Beta_v052
****************************************************************************************************
- What's New (NL):
  - 🧠 **Geoptimaliseerd Brein:** We hebben een ernstige fout verholpen waardoor de AI tegelijkertijd "twee keer probeerde na te denken", waardoor het geheugengebruik van de videokaart verdubbelde en extreme vertraging of crashes ontstonden. Je VRAM zal je dankbaar zijn!
  - 💾 **Veilig Laden:** De algemene stabiliteit bij het laden van opgeslagen spellen is verbeterd, zodat het hervatten van je avontuur altijd soepel verloopt.

****************************************************************************************************
02/02/2026 00:18 - Kritieke Hotfix: Stabiliteit, Multi-GPU en Lokalisatieverbeteringen - Beta_v051
****************************************************************************************************
- What's New (NL):
  - 🚑 **Kritieke Fix:** Een probleem verholpen dat er in zeldzame omstandigheden voor zorgde dat het spel niet kon starten ("Totale Uitval") door corruptie in de database die de Launcher niet kon opschonen. De optie "Database Wissen" is nu veel effectiever.
  - ⚡ **Hardwareverbetering:** Een fout verholpen waardoor de modus "Automatische Configuratie" de rekenkracht van systemen met meerdere grafische kaarten negeerde in sommige configuraties met niet-identieke GPU's.
  - 🛠️ **Hulpmiddel:** Een nieuwe optie toegevoegd aan de Launcher om eenvoudig het logboek (log) van de vorige sessie te openen en ondersteuning te vergemakkelijken.
  - 🌍 **Lokalisatie:** Diverse knoppen gecorrigeerd die in het Engels (Yes/No) in de launcher verschenen. Ze respecteren nu de geselecteerde taal.
  - 📖 **Interface:** De opmaak van de tekst met versie-informatie verbeterd om deze leesbaarder te maken.
  
  - **Binnenkort:** Volgende punt in het implementatieproces: compatibiliteit met AMD-, NVIDIA- en Intel-GPU's via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fix Handleidingen & Stabiliteit - Beta_v050
****************************************************************************************************
- Nieuw:
  **Multi-GPU Kracht en Kritieke Oplossingen!**
  
  * **🚀 Multi-GPU Ondersteuning:** Implementatie van de capaciteit om grote AI-modellen te verdelen over meerdere grafische kaarten. *Je kunt nu je volledige hardware-arsenaal gebruiken; Onbeperkte Macht!*
  * **🛡️ Stabiliteit:** Alle ontbrekende DLL-bibliotheken toegevoegd om onverwachte crashes te voorkomen. *Ik heb de engine gepantserd, als hij nu faalt is het de schuld van een flater met de dobbelstenen.*
  * **📖 Dynamische Webhandleidingen:**
    * **Echte Selector:** Het taalmenu controleert nu welke bestanden daadwerkelijk bestaan voordat ze worden getoond. *Geen spookopties meer die niets deden; waarzeggerij niveau 5.*
    * **Fix Fout 403:** Toestemmingsfout opgelost die verhinderde dat de Changelog in het spel werd bekeken. *Ik heb de app geleerd correct om doorgang te vragen ("Sesam open u!").*
  * **🌍 Talen:** Herziening van teksten en vertalingen. *Polyglot-modus geactiveerd.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisatie en AI-verbeteringen - Beta_v049
****************************************************************************************************
- Nieuw:
  We hebben de spelervaring gepolijst met belangrijke correcties en een nieuwe visuele tool:

  * **Schone en Betrouwbare Inventaris:** Geen "spookobjecten" of items met vreemde namen meer in je rugzak. We hebben een narratief validatiesysteem geïmplementeerd dat ervoor zorgt dat alles wat je verzamelt of koopt daadwerkelijk bestaat in de spelwereld.
  * **Vloeiende Dialogen:** We hebben die vervelende knoppen gerepareerd die soms als "Unknown" verschenen of niet reageerden. Nu tonen de dialoogopties met NPC's altijd de juiste tekst.
  * **Robuuste Personagegeneratie:** Je held creëren is nu een solide proces. We hebben de conflicten opgelost die soms zorgden voor een onvolledig blad of foutieve statistieken bij het combineren van biografie en stats.
  * **Nieuwe AI-statusbalk:** Nu kun je het brein van de machine aan het werk zien! We hebben bovenaan een balk toegevoegd die de reactiesnelheid en het geheugengebruik in real-time toont. Zo weet je altijd of de AI aan het "nadenken" is over je volgende avontuur.

****************************************************************************************************
28/01/2026 03:50 - Kritieke Compilatiefix - Beta_v048
****************************************************************************************************
- Nieuw:
  Een kritieke fout opgelost die verhinderde dat het spel startte bij nieuwe installaties. Stabiliteit en compatibiliteit met verschillende systemen verbeterd.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & RTX 50 Support - Beta_v047
****************************************************************************************************
- Nieuw:

  > [!BELANGRIJK]
  > **OM COMPATIBILITEITSREDENEN IS HET NOODZAKELIJK DE VORIGE DB TE VERWIJDEREN, ANDERS IS DE KANS GROOT OP FOUTEN IN DE AI-CONFIGURATIE**
  > **(Oplossing: Klik op het tandwielpictogram ⚙️ van de Launcher -> Database Verwijderen)**

  *Kritieke Ondersteuning voor RTX 50-serie: Een ernstige fout opgelost die onverwacht afsluiten veroorzaakte bij het genereren van personages op de nieuwe NVIDIA grafische kaarten (RTX 5070, 5080, 5090).
  (Aangezien ik niet over een RTX uit de 5000-serie beschik, heb ik niet direct kunnen testen of de oplossing 100% is, maar in theorie zou het opgelost moeten zijn. Ik wacht hier op jullie overwinningszangen!)
  
  *Update van de AI-engine: We hebben het lokale brein van het spel geüpdatet om compatibel te zijn met de nieuwste hardwaretechnologie, zodat iedereen offline van de ervaring kan genieten, ongeacht hoe modern hun apparatuur is.
  
  *Nieuwe Launcher: Updates en nieuws in real-time vanaf de officiële website.


****************************************************************************************************
26/01/2026 06:49 - Webintegratie Documentatie - Beta_v045
****************************************************************************************************
- Nieuw:
  *Nu worden de Gebruikershandleiding en het Wijzigingslogboek direct geladen vanaf onze officiële website, zodat je altijd de meest actuele informatie hebt zonder patches te hoeven downloaden. Inclusief slimme offline modus.

  *We hebben de stabiliteit van het spel versterkt zodat het nooit vastloopt bij het opstarten. Bovendien zijn de verkopers terug van hun vakantie in het limbo: ze verschijnen nu correct, hebben goederen in de schappen en respecteren de setting van de wereld (geen toverdranken in de toekomst).

  *De bug is verholpen die het wijzigen van AI-parameters en de selectie van het AI-model verhinderde, waardoor sommige gebruikers met beperkte VRAM niet konden spelen.
  **In geval van noodzaak om de AI-parameters te wijzigen, raad ik ten zeerste aan om eerst het VRAM-% te verlagen naar 85%, opnieuw op te starten en te testen. Als dit nog steeds niet voldoende is, raad ik aan te controleren of de VRAM van de GPU niet wordt gebruikt door andere processen dan het spel zelf (pc opnieuw opstarten indien nodig, applicaties sluiten die VRAM kunnen gebruiken). Als het na het verlagen van de hoeveelheid VRAM zelfs tot 70% nog steeds niet werkt, raad ik niet aan verder te zakken omdat het spel de prompts die naar de AI worden gestuurd niet zal kunnen beheren. Dus hoewel VRAM-overloop wordt voorkomen, zal het spel niet kunnen functioneren omdat het niets heeft om mee te werken. In dat geval is de enige overgebleven optie om te downgraden naar een lager model, de AI-parameters weer op automatisch te zetten en opnieuw op te starten.

****************************************************************************************************
26/01/2026 04:00 - Core-stabilisatie en Servicediagnose - Beta_v044
****************************************************************************************************
- Nieuw:
  Core-stabilisatie en Servicediagnose" "Kritieke correcties in personagegeneratie, UI (MainWindow) en optimalisatie van semantisch zoeken. Start van diepgaande diagnose van de servicemodus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs en Stabiliteit - Beta_v043
****************************************************************************************************
- Description:
  Correctieve patch gericht op diagnose en correctie van UI-lus.

- Changes:
  Visuele bug in herstartdialoog opgelost
  Nieuw logsysteem in %LOCALAPPDATA% voor diagnose
  Interne prestatieoptimalisaties

****************************************************************************************************
24/01/2026 06:30 - Ondersteuning Biografie Backend - Beta_v042
****************************************************************************************************
- Description:
  Blootstelling van biografiegegevens voor UI en i18n-aanpassingen.

<!-- source_hash: 5f218fc5 -->
