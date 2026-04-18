# 🐉 Welkom bij RolemIAster!

Pak je dobbelstenen (of je muis) en bereid je voor op avonturen waar de enige beperking de kronkeligheid van je fantasie is! **RolemIAster** is een eindeloos rollenspel, aangedreven door kunstmatige intelligentie, waarmee je de held (of de schurk) van je eigen verhalen kunt zijn.

---

## ⚠️ JURIDISCHE KENNISGEVING (Het saaie, maar noodzakelijke deel)

**LEES DIT OF LIJD DE TOORN VAN DE DOBBELSTENEN:**

1.  **🤖 Lokale AI Ingebouwd:** RolemIAster heeft zijn eigen digitale brein. Het werkt **zonder internet** en zonder dat je iets vreemds hoeft te doen. Installeren en spelen!
2.  **☁️ Optionele Cloud:** Als je liever geld uitgeeft aan externe AI's (OpenAI, Gemini...), ga je gang met je creditcard. De kosten zijn voor jou.
3.  **🎲 Generatieve Chaos:** De AI verzint het verhaal gaandeweg. Als de verteller gek wordt en zegt dat het koeien regent, kijk ons niet aan. De ontwikkelaar is niet verantwoordelijk voor de waanzin die het model genereert.
4.  **🏗️ Early Access:** Dit is nog in ontwikkeling. Als je een bug vindt, is het geen fout, het is een verrassende "functie"! (Stuur ons feedback, alsjeblieft, dat helpt ons enorm).

---

## 🖥️ SYSTEEMVEREISTEN EN DIGITALE HERSENEN (AI)

RolemIAster werkt met **Lokale Kunstmatige Intelligentie**. Dat betekent dat je pc het zware denkwerk doet. Je hebt geen internet nodig, maar wel een grafische kaart die niet uit het dinosauriërtijdperk stamt. (Opmerking: Als het koud is in je kamer, werkt dit spel als gratis verwarming).

### ⚙️ Concepten voor beginners

**VRAM (Video RAM)** is de brandstof van de AI.
*   RolemIAster moet **12.000 tot 16.000 woorden (tokens)** "onthouden" om de draad van het verhaal niet kwijt te raken.
*   Als je GPU geen geheugen meer heeft, zal het spel langzamer zijn dan een slak met astma.

---

### 📊 MODELLENCATALOGUS (Kies je gif)

Beheer je AI's in **Instellingen → Lokale AI Ingebouwd → Modellen Beheren**.

#### 🏆 Qwen 3.5 Familie — Speciaal getraind voor RolemIAster

Deze modellen zijn getraind met **Supervised Fine-Tuning (SFT)** om de verhaalregels van het spel te beheersen. Het zijn geen generieke modellen: ze kennen het JSON-contract van RolemIAster, de NPC's, de inventaris en de gevechten uit hun hoofd.

| Model         | Grootte | Minimaal VRAM | Tier | Oordeel                                                                    |
| :------------ | :------ | :------------ | :--- | :------------------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1.5GB  | **3GB**       | B    | ⚡ **De Sprinter.** De snelste van allemaal. Ideaal voor basis GPU's of voor spelen zonder dedicated GPU. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**       | A    | ✅ **DE BALANS.** Optimale snelheid en kwaliteit. Standaard aanbevolen model voor de meeste spelers. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**       | S    | 🌟 **De Verteller.** Rijke verhaallijn en superieure coherentie. Voor wie een RTX 3070 of beter heeft. |

---

### 🎮 SNELLE KEUZEGIDS

| Jouw Grafische Kaart | VRAM  | Aanbevolen Model | Resultaat                  |
| :------------------- | :---- | :--------------- | :------------------------- |
| GTX 1050/1060 / Zonder GPU | 2-4GB | **Qwen3.5-2B**   | 🆗 Net aan, maar speelbaar |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B**   | ✅ Zeer goede ervaring      |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B**   | 🚀 Snel en nauwkeurig       |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B**   | 🌟 De ideale ervaring      |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**   | 👑 Maximale kwaliteit, supersnelle reacties |

**💡 Pro Tip:** Houd altijd ongeveer **2GB VRAM vrij** voor het besturingssysteem, anders begint Windows te huilen en dingen te sluiten.

---

### 🚨 HELP! MIJN PC IS TRAAG! (VRAM Problemen)

Als het spel trager reageert dan je crush op WhatsApp, heb je waarschijnlijk geen VRAM meer.

**Symptomen dat je te ver bent gegaan:**
1.  **Het model wordt naar RAM weggeschreven:** De pc gebruikt het normale geheugen in plaats van de grafische kaart. Resultaat: EXTREME TRAAGHEID.
2.  **Lichte overloop (1-2GB):** 30-60 seconden per antwoord.
3.  **Matige overloop (3-5GB):** 2-5 minuten. Je kunt koffie gaan halen.
4.  **Ernstige overloop:** 10-30 minuten. Niet speelbaar.

#### 🛡️ Noodprotocol
Als het misgaat, volg dan deze stappen in volgorde:

1.  **📉 Verlaag het % VRAM:** Ga naar Instellingen en verlaag het naar **85%**. Herstart en probeer het opnieuw.
2.  **🧹 Schoonmaken:** Sluit die browser met 40 geopende tabbladen. Ze vreten je geheugen op.
3.  **🛑 De 70% Limiet:** Ga nooit lager dan **70%** van het toegewezen VRAM.
    *   *Waarom?* Omdat de AI ruimte nodig heeft om te "denken" (de KV-cache). Als je minder dan 70% toewijst, wordt het leeg en krijg je een foutmelding.
4.  **🔙 Tactische Terugtrekking:** Als niets werkt, schakel dan over op een kleiner model (van 9B naar 4B, of van 4B naar 2B).

---

### ⚙️ GEAVANCEERDE MODELCONFIGURATIE ("Maximale Freak-out")

> **EXPERT MODUS:** Als je een pro bent en toegang wilt tot geavanceerde modelconfiguraties (je eigen GGUF-modellen toevoegen gedownload van HuggingFace, lagen aanpassen, etc.), moet je het spel starten met het commando: `--advanced`.

Voor degenen die graag knoppen indrukken in **Instellingen → Lokale AI Ingebouwd**:

| Optie             | Functie                                     | Aanbeveling                                                              |
| :---------------- | :------------------------------------------ | :----------------------------------------------------------------------- |
| **GPU Layers**    | Hoeveel van het model wordt op de grafische kaart geladen | **-1** (Betekent "ALLES". Niet aanraken tenzij je weet wat je doet)        |
| **Max Context**   | De "kortetermijngeheugen" van de AI         | **16384 - 32768** (Minder dan dit en de AI krijgt amnesie)                 |
| **Temperatuur**   | Creativiteit versus Waanzin                 | **0.7 - 0.8** (Hoger = gekker; Lager = robotachtiger)                    |
| **History RAG**   | Dingen van lang geleden onthouden           | **Ja** (Essentieel voor lange campagnes)                                   |
| **Cache Embeddings** | Versnelt het zoeken naar herinneringen      | **Ja** (Maakt het sneller)                                               |

---

### 🔧 PROBLEEMOPLOSSING (Troubleshooting)

| Probleem         | Oplossing                                                                           |
| :--------------- | :---------------------------------------------------------------------------------- |
| **Trage AI / Lag** | Controleer of `GPU Layers` -1 is. Sluit Chrome. Verlaag `Contexto Máximo`. |
| **Geheugenfout (OOM)** | Verlaag `Contexto Máximo` of kies een kleiner model (3B).                     |
| **De AI hallucineert / ziet dingen** | Verlaag `Temperatura` naar 0.6. Als het nog steeds gek is, herstart de applicatie. |

---

### 🌐 ALTERNATIEVE PROVIDERS (Alleen voor Experts)

> **Opmerking:** De lokale AI die het spel meelevert, is meer dan voldoende. Dit is alleen voor gevorderde gebruikers of dapperen.

*   **Externe Lokale Engines:**
    *   **Ollama / LM Studio:** Als je al je eigen gekke modellen hebt, kun je die gebruiken.
*   **Cloud API's (betaald):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vereist internet en geld.
    *   Configureer dit in: **Instellingen → AI → Nieuwe Provider Toevoegen**.

---

### 🌍 HOE TE SPELEN? (Het Multiversum en Jij)

Wanneer je het spel opent, heb je twee opties:

1.  **🆕 Nieuw Avontuur**: Creëer je legende vanaf nul. Het spel zal je vragen om **Naam, Beroep, Fysieke Beschrijving, Psychologische Beschrijving en de Achtergrond/Motivatie** van je verhaal. Bovendien kies je het **Moeilijkheidsniveau** en de **Humor Toon** die de campagne zullen sturen.
2.  **💾 Ga Door met Spel**: RolemIAster **slaat realtime op**. Hier is geen "laden voor de dood" of terugkeren. Elke beslissing, elke blunder en elke wond wordt in vuur en vlam vastgelegd in het verhaal. Het is een **UITDAGING**: wat je doet, is gedaan. Leef met de gevolgen... of sterf ermee.

RolemIAster is geen opzichzelfstaand spel; het is een **Persistent Multiversum**.
*   **Eindeloze Werelden:** Creëer je eigen universums (**Middeleeuwse Fantasie** of **Cyberpunk**) met je eigen Lore.
*   **Eindeloze Karakters:** Binnen elke wereld kun je zoveel helden hebben als je wilt.
*   **Gedeelde Tijdslijn:** Let op! Wat een personage doet, beïnvloedt de wereld van anderen. De AI is zich bewust van je andere helden en zal ze herkennen als bewoners van de wereld.
*   **AI met "Zintuigen" (Super RAG):** Het RAG-systeem (Retrieval-Augmented Generation) fungeert als de "informant" van de AI, waardoor het herinneringen krijgt over de wereld, wie je vergezelt, waar je bent en wat er net is gebeurd, zodat het verhaal 100% coherent is.

### De Interface (Je cockpit)

*   **Linkerpaneel (JIJ):** Je Karaktersheet. Leven, mana, vaardigheden en hoe knap je bent (Charisma).
*   **Middenpaneel (HET VERHAAL):**
    *   **Boven:** Waar de verteller vertelt wat er gebeurt.
    *   **Onder:** Je beslissingsknoppen en het tekstvak om in te typen wat je wilt doen.
*   **Rechterpaneel (JOUW SPULLEN):** Inventaris en uitrusting. Het paradijs van de digitale Diogenes.

---

## 📜 SPELREGELS (Ja, er zijn regels)

RolemIAster gebruikt een klassiek en robuust d100 (honderd-zijdige dobbelsteen) systeem.

### 1. Je Attributen (Wat jou definieert)
De AI genereert je attributen op basis van de context, het beroep en de beschrijving die je hebt ingevoerd. Zodra ze zijn gegenereerd, heb je **10 EXTRA PUNTEN** om naar eigen goeddunken te verdelen.
*   **Oplopende Kosten:** Een attribuut tot 14 verhogen kost 1 punt. Van 15 tot 16 kost het 2 punten. Vanaf 17 kost het 3 punten! Denk goed na waar je de spierballen zet.

*   💪 **Kracht (KRA):** Je pure fysieke kracht. Beïnvloedt schade in gevechten van dichtbij en je draagvermogen.
*   ❤️ **Constitutie (CON):** Je uithoudingsvermogen. Om klappen, ziekten en gif te weerstaan.
*   🐘 **Grootte (GRO):** Je omvang. Groot en zwaar, of klein en ongrijpbaar.
*   🏃 **Behendigheid (BEH):** Wendbaarheid, precisie en niet struikelen over je eigen voeten.
*   🧠 **Intelligentie (INT):** Leren, onthouden en puzzels oplossen.
*   🔮 **Wilskracht (WIL):** Je ziel, je geluk, wilskracht en je magische reserve.
*   😎 **Charisma (CHA):** Leiderschap, aantrekkelijkheid en het vermogen om mensen te bedriegen (of te verleiden).

### 2. Snelle Wiskunde (Afgeleide Kenmerken)
De engine berekent deze cijfers automatisch op basis van je attributen:

*   🩸 **Leven (LP):** `CON * 10`. Als dit 0 bereikt... nou ja, je weet het. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. De brandstof voor je magische trucjes. Zonder mana, geen trucjes. (Een tovenaar zonder mana is gewoon een vent in een gewaad die cosplay doet).
*   ⚡ **Uithoudingsvermogen (STA):** `((CON+FUE+DES)/3)*10 + POD`. Je energie om te vechten en te bewegen zonder het risico te lopen te sterven.
*   🧠 **Menselijkheid (MEN):** `(CON+POD) * 5`. (Alleen in Cyberpunk: meet hoeveel je nog mens bent voordat de kabels je gek maken).
*   ⚔️ **Actie Punten (AP):** `(INT + DES) / 2`. Bepaalt je Initiatief. Wie het eerst slaat, slaat twee keer.

### 3. Je Vaardigheden
Beginnen met een basiswaarde (bijv. Sluipen = BEH + INT) en verbeteren door ze te gebruiken. Het is een percentage (%).

### 4. Actie Oplossing (De Dobbelsteen)
Wanneer je iets riskansts probeert te doen (klimmen, liegen, aanvallen...), zal de AI je vragen om een worp. Het spel werpt een onzichtbare **d100**. (Onthoud: De dobbelstenen haten je. Het is persoonlijk).

*   **Je Doel:** Een getal **KLEINER OF GELIJK** aan je vaardigheidsniveau gooien.
    *   *Voorbeeld:* Je hebt 45% in Klimmen.
    *   Je gooit een 30: ✅ **Succes**. Je klimt als een aap.
    *   Je gooit een 80: ❌ **Mislukking**. Je valt met een klap.
    *   **Kritiek:** Minder of gelijk aan **1/5 van je vaardigheid** gooien (of een 01). Episch! Je doet een buitengewone parkour met een salto.
    *   **Blunder:** Een **99 of 100**. De dobbelstenen hebben besloten dat het vandaag niet jouw dag is. Je broek zakt halverwege af en je valt met je gezicht plat op de grond.

---

## 💡 TIPS OM NIET (SNEL) TE STERVEN

*   **✍️ Wees Beschrijvend:** Typ niet alleen "aanvallen". Typ: *"Ik probeer zijn bijl te ontwijken door over de grond te rollen en steek mijn dolk in zijn enkel"*. De AI zal je belonen.
*   **🧪 Experimenteer:** Je bent niet beperkt tot de knoppen. Typ gekke dingen! De AI zal improviseren.
*   **🎭 Rol:** Kruip in de huid van je personage. Lees de beschrijvingen en handel zoals je personage zou doen, niet zoals jij in je pyjama zou doen.

---

## ⚔️ HET GEVECHT (Aanvalluh!)

Als woorden falen, komt de tijd voor klappen. Gevechten zijn **tactisch** en werken met **Ticks** (tijd).

### 🕹️ Hoe het werkt:
*   **Ticks:** Elke actie kost tijd. Zware wapens zijn langzaam (verbruiken veel ticks). Dolken zijn snel.
*   **Jouw Snelheid:** Hangt af van je Actie Punten (AP).

### Basisacties:
*   **🗡️ Aanvallen:** Sla toe met wat je hebt getrokken.
*   **🛡️ Blokkeren:** Je gaat in de verdediging. Vermindert schade maar verbruikt Uithoudingsvermogen.
*   **🏃 Vluchten:** Voor lafaards (of wijzen die willen leven).
*   **🏳️ Overgeven:** Als je ziet dat je niet wint, kun je om genade smeken.
*   **✨ Magie / Cyberware:** Vuur, laserstralen, hacks...

### 💬 Tekstvrije Acties (NIEUW!)
Houd je niet van knoppen? Typ wat je wilt doen alsof je met een echte Game Master praat!
*   **Voorbeelden:** *"Vuurbal naar de goblin gooien"*, *"Mijn runen zwaard trekken"*, *"Potion op mezelf gebruiken"*.
*   **Regisseur:** Het gevecht komt nu tot leven. De AI genereert omgevingsgebeurtenissen en reacties die het verhaal verrijken: vallende balken, terugtrekkende vijanden, vallende fakkels. Het slagveld is niet langer statisch!
*   **Als de AI het niet begrijpt:** Het zal je vragen om het te herformuleren. Jouw beurt gaat NIET verloren!
*   **⚠️ Beperking:** Objecten verplaatsen tussen slots (uitrusting uit rugzak, munitie laden) doe je met **Drag & Drop** in de interface, niet via tekst.

### ⚠️ GOUDEN OVERLEVINGSREGEL
**TREK JE WAPEN VOORDAT JE VECHT!**
Het wapen trekken tijdens een gevecht kost tijd (Ticks). Als je wordt betrapt met je zwaard in de schede, krijg je klappen tot je erbij neervalt terwijl je probeert het onhandig te trekken. OF ERGER NOG!, ALS JE JE WAPENS IN JE RUGZAK HEBT IN PLAATS VAN IN HUN UITRUSTINGSSLOT (Neem me niet kwalijk, ik moet even mijn tweehands zwaard uit de rugzak halen, ik wist dat ik het ergens had... ergens...) 🤦‍♂️
👉 Klik op het label van het uitgeruste wapen (rechterpaneel) om het te trekken. Het licht groen op.

Het verplaatsen van wapens tijdens een gevecht kost tijd (Ticks) en kan resulteren in een verrassingsaanval, bovendien is het zeer waarschijnlijk dat je je beurt verliest, dat je mist door de nervositeit van de bijl die je voorhoofd nadert, of dat het op de grond valt. (Misschien was het geen goed idee om een personage met ADHD te creëren)

---

## ✨ MAGIE EN CYBERNETICA

Afhankelijk van of je wereld "Middeleeuwse Fantasie" of "Cyberpunk" is:

### 🧙‍♂️ Fantasie: Betoveringen
Ben je een tovenaar? Je kunt je uitrusting betoveren.
1.  **Leren:** Je hebt de spreuk in je spreukenboek nodig.
2.  **Werpen (Drag & Drop):** Sleep de spreuk vanuit je lijst naar het object in je inventaris.
3.  **Kosten:** Het actief houden van een betovering **kost Mana per beurt**.
4.  **Waarschuwing:** Als je zonder mana komt te zitten midden in een gevecht, wordt het vuurwapen weer een stuk verroeste ijzer.

### 🦾 Cyberpunk: Implantaten
Wil je ogen met zoom of gorilla-armen?
1.  Zoek een **Techno-Chirurg** (een dienstverlenende NPC).
2.  Betaal de credits (niets is gratis in de toekomst).
3.  **Menselijkheidskosten:** Elk implantaat kost je een stukje ziel (**Menselijkheid**).
    *   Als je er te veel plaatst, word je een **Cyberpsychopaat** (een moorddadige broodrooster met poten) en verlies je de controle over je personage.

---

## 🛒 WINKELS EN DIENSTEN (SIS)

Praat met NPC's om te handelen.
*   **AI Stelt Voor, Jij Beslist:** Wanneer je met een handelaar of genezer praat, zal de AI hun diensten voorstellen (repareren, verkopen, genezen), maar er verschijnt een knop **"Diensten Bekijken"** zodat jij kunt beslissen wanneer je de transactiemodus ingaat.
*   **Afdingen:** Je **Handel** vaardigheid (gebaseerd op Charisma) bepaalt de prijzen. Als je lelijk of onaardig bent, word je opgelicht.
*   **Verkopen:** Klik met de rechtermuisknop op een object in je inventaris om het aan de winkelier te verkopen of sleep het naar hem toe.

---

## 🎒 INVENTARISBEHEER (Tetris)

*   **Gewicht:** Je hebt een draaglimiet (Kracht + Grootte). Als je te veel schroot meedraagt, ga je langzaam en met straffen (Diogenes is niet je vriend).
*   **Panelen:**
    *   **Uitrusting:** Wat je draagt.
    *   **Gordel:** Snelle toegang in gevechten (kost minder tijd om hier potions te gebruiken).
    *   **Rugzak:** De bodemloze put.
*   **Vloeiend Gebruik:** Sleep een potion of voedsel rechtstreeks naar **je gezicht** (het portret) om het onmiddellijk te consumeren. Je kunt ook het contextmenu gebruiken (rechtermuisknop -> Gebruiken).

---

## 🛠️ LAATSTE AANPASSINGEN

In het **Instellingen** menu kun je alles aanpassen:
*   **🌍 Taal:** De AI vertaalt het hele spel en de antwoorden realtime voor je. Polyglot-modus geactiveerd.
*   **👁️ Uiterlijk:** Lettergrootte en kleuren, zodat je niet blind wordt. Neonranden en verzachte schaduwen voor totale onderdompeling.
*   **🧠 AI Instellingen:** Wissel van model, temperatuur, enz. (Onthoud wat we aan het begin van de handleiding hebben gezien over de `--advanced` flag als je iemand bent die alles wil aanraken).

---

## 🎭 MOEILIJKHEIDSGRAAD EN HUMOR (Pas je lijden aan)

Voordat je begint, onthoud dat de AI niet alleen vertelt, maar ook **de wereld aanpast** aan jouw voorkeuren. Deze parameters worden gekozen bij het creëren van de wereld en zijn permanent voor die wereld:

*   **🎮 Moeilijkheidsgraad (Beheerd door AI):** Het is geen simpele schadevermenigvuldiger. Het spel vertelt de AI: "Hé, de moeilijkheidsgraad is dit, handel dienovereenkomstig."
    *   **Eenvoudig:** Je zult nooit sterven (of het is bijna onmogelijk), situaties zijn eenvoudiger, prijzen zijn goedkoper en vijanden zijn onhandiger. De AI zal elke scène redeneren om je pad een rozenparcours te maken.
    *   **Normaal:** De standaard balans.
    *   **Uitdaging:** De AI zal meedogenloos zijn, de prijzen astronomisch en elke fout kan de laatste zijn.

*   **🃏 Humor Toon:** Bepaalt hoe de AI met je praat en wat voor soort gebeurtenissen plaatsvinden. Hoewel elk model zijn eigen manier heeft om het concept "humor" te interpreteren, zal de AI proberen zich aan te passen aan wat je kiest... of niet:
    *   **Serieus:** Een epische, duistere en formele vertelling.
    *   **Sarcastisch:** De AI zal lachen om je fouten, je constant porren en een ironische toon gebruiken.
    *   **Bizar:** Bereid je voor op het absurde. Vliegende koeien, surrealistische situaties en totale chaos beheerd door de meest verdraaide logica van de AI.

---

## 🚧 Waarschuwing: Early Access

RolemIAster is in **actieve ontwikkeling**, langzaam aan het sudderen.
*   Je kunt bugs (of "onverwachte functies") tegenkomen.
*   Ik voeg elke week nieuwe dingen toe.
*   Jouw feedback is goud waard! Vertel me wat je leuk vindt en wat je erg leuk vindt. (Als je iets niet leuk vindt, vertel het me ook, maar wel met liefde).

Ga nu, gooi initiatief en creëer je legende!

<!-- source_hash: 9af75cff -->