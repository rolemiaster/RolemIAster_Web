****************************************************************************************************
07/02/2026 20:26 - Systeem voor Semantische Gevechtsinterpretatie - EXPERIMENTAL_v053
****************************************************************************************************
- What's New (NL):
  🧪 NU BESCHIKBAAR: EXPERIMENTELE VERSIE (Toegang: Rechtsklikken in Steam ➡️ Eigenschappen ➡️ Beta's)
  
  🛡️ Aan de dapperen die het DURVEN op te nemen in de frontlinie: Het avontuur wacht, nu ontembaarder dan ooit!
  
  📝 Ik verwacht jullie Oorlogsrapporten (bugs en feedback) aan het front. Geef ze ervan langs! ⚔️
  
  - 🧠 **Vrije Tekstgevechten:** Je kunt nu je acties tijdens gevechten typen alsof je praat met een personage in een tafelrollenspel: "spreek genezingsspreuk over mij uit", "trek mijn zwaard", "gebruik genezingsdrankje". De AI begrijpt je intentie en vertaalt deze naar spelmechanismen.
  - ⚔️ **Trekken met Woorden:** Je hoeft niet langer op het wapenslot te klikken. Typ gewoon "trek zwaard" of "pak mijn bijl" en het systeem interpreteert dit automatisch (LET OP! Dit doen tijdens een gevecht kan leiden tot mislukking, een flater en het verlies van een beurt!... "Je komt voorbereid naar een gevecht!").
  - 📖 **Herkende Spreuken:** De AI kent nu je volledige spreukenboek. Zeg "werp vuurbal" en als je die spreuk hebt, wordt deze uitgevoerd.
  - 🛡️ **Geen Verloren Beurten Meer:** Als het spel je actie niet begrijpt, vraagt het je om deze te herformuleren. Je beurt gaat NIET verloren.
  - 🎒 **Handmatige Inventaris:** Gebruik de sleep-en-neerzet interface om voorwerpen tussen vakjes te verplaatsen (uitrusten vanuit rugzak, munitie laden). Dit voorkomt verwarring en bespaart AI-bronnen.
  - 🎬 **AI Scèneregisseur (VERBETERD):** Het gevecht komt nu tot leven. De AI genereert omgevingsgebeurtenissen en reacties die het verhaal verrijken: vallende fakkels, terugdeinzende vijanden, instortende balken. Het slagveld is niet langer statisch!
  - 🐛 **Kritieke NPC-fix:** Een fout opgelost waardoor NPC's geen correcte tactische beslissingen namen, waardoor ze altijd "wachtten" in plaats van aan te vallen of zich te verdedigen.
  - 🎵 **Audiocorrectie:** De gevechtsmuziek stopt niet langer wanneer je op de vooraf gedefinieerde knoppen drukt (Aanvallen, Blokkeren, enz.).

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