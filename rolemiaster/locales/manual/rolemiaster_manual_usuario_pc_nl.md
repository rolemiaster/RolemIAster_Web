# 🐉 Welkom bij RolemIAster!

Pak je dobbelstenen (of je muis) en bereid je voor op avonturen waarbij de enige grens ligt bij hoe kronkelig je fantasie is! **RolemIAster** is een eindeloos rollenspel aangedreven door Kunstmatige Intelligentie, waarmee je de held (of de schurk) van je eigen verhalen kunt worden.

---

## ⚠️ JURIDISCHE KENNISGEVING (Het saaie maar noodzakelijke deel)

**LEES DIT OF JE ZULT DE TOORN VAN DE DOBBELSTENEN ERVAREN:**

1.  **🤖 Lokale AI Geïntegreerd:** RolemIAster heeft zijn eigen digitale brein. Het werkt **zonder internet** en zonder dat je iets raars hoeft aan te raken. Installeren en spelen maar!
2.  **☁️ Optionele Cloud:** Als je liever geld uitgeeft aan externe AI's (OpenAI, Gemini...), ga je gang met je creditcard. De kosten zijn voor jou.
3.  **🎲 Generatieve Chaos:** De AI bedenkt het verhaal ter plekke. Als de verteller gek wordt en zegt dat het koeien regent, kijk ons niet aan. De ontwikkelaar is niet verantwoordelijk voor de waanzin die het model genereert.
4.  **🏗️ Early Access:** Dit is nog in aanbouw. Als je een bug vindt, is het geen fout, maar een verrassende "feature"! (Stuur ons feedback, alsjeblieft, dat helpt ons enorm).

---

## 🖥️ SYSTEEMVEREISTEN EN DIGITALE HERSENEN (AI)

RolemIAster werkt met **Lokale Kunstmatige Intelligentie**. Dat betekent dat je pc het zware denkwerk doet. Je hebt geen internet nodig, maar wel een grafische kaart die niet uit het dinotijdperk stamt. (Opmerking: Als het koud is in je kamer, werkt dit spel als gratis verwarming).

### ⚙️ Concepten voor beginners

**VRAM (Videogeheugen)** is de benzine van de AI.
*   Dankzij **TurboQuant** kan RolemIAster nu **meer dan 100.000 woorden (tokens)** onthouden — bijna drie keer zoveel als voorheen — zonder je grafische kaart te laten vastlopen.
*   Als je GPU zonder geheugen komt te zitten, zal het spel langzamer zijn dan een slak met astma.

---

### 📊 MODEL CATALOGUS (Kies je gif)

Beheer je AI's in **Instellingen → Lokale AI Geïntegreerd → Modellen Beheren**.

#### 🏆 Qwen 3.5 Familie — Specifiek getraind voor RolemIAster

Deze modellen zijn getraind met **Supervised Fine-Tuning (SFT)** om de narratieve regels van het spel te beheersen. Het zijn geen generieke modellen: ze kennen het JSON-contract van RolemIAster, de NPC's, de inventaris en de gevechten uit hun hoofd.

| Model        | Grootte | Min. VRAM | Niveau | Oordeel                                                                     |
|--------------|---------|-----------|--------|-----------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB  | **3GB**   | B      | ⚡ **De Sprinter.** De snelste van allemaal. Ideaal voor basis-GPU's of spelen zonder dedicated GPU. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**   | A      | ✅ **DE GEBALANCEERDE.** Optimale snelheid en kwaliteit. Aanbevolen standaardmodel voor de meeste spelers. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**   | S      | 🌟 **De Verteller.** Rijke narratief en superieure consistentie. Voor wie een RTX 3070 of beter heeft. |

---

### 🎮 SNELLE KEUZEGIDS

| Jouw Grafische Kaart | VRAM | Aanbevolen Model | Resultaat                                         |
|----------------------|------|------------------|---------------------------------------------------|
| GTX 1050/1060 / Geen GPU | 4GB  | **Qwen3.5-2B**   | 🆗 Net aan maar speelbaar, erg net aan...         |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**   | ✅ Goede ervaring                                  |
| RTX 2060/3060 / RX 6600  | 8GB  | **Qwen3.5-4B**   | 🚀 Snel en nauwkeurig                              |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**   | 🌟 De ideale ervaring                              |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**   | 👑 Maximale kwaliteit, ultra-snelle antwoorden     |

**💡 Pro Tip:** Houd altijd ongeveer **2GB VRAM vrij** voor het besturingssysteem, anders begint Windows te huilen en dingen af te sluiten.

---

### 🚨 HELP! MIJN PC IS TRAAG! (VRAM-problemen)

Als het spel langer duurt om te reageren dan je crush op WhatsApp, heb je waarschijnlijk geen VRAM meer.

**Symptomen dat je te ver bent gegaan:**
1.  **Het model wordt naar RAM verplaatst:** De pc gebruikt het normale geheugen in plaats van de grafische kaart. Resultaat: EXTREME TRAAGHEID.
2.  **Lichte overloop (1-2GB):** Duurt 30-60 seconden per antwoord.
3.  **Matige overloop (3-5GB):** 2-5 minuten. Je kunt een koffie halen.
4.  **Ernstige overloop:** 10-30 minuten. Niet speelbaar.

#### 🛡️ Noodprotocol
Als de boel misgaat, volg dan deze stappen in volgorde:

1.  **📉 Verlaag het % VRAM:** Ga naar Instellingen en verlaag het naar **85%**. Herstart en probeer het opnieuw.
2.  **🧹 Schoonmaken:** Sluit die browser met 40 open tabbladen. Ze eten je geheugen op.
3.  **🛑 De 70% Limiet:** Ga nooit onder **70%** toegewezen VRAM.
    *   *Waarom?* Omdat de AI ruimte nodig heeft om te "denken" (de KV-cache). Als je minder dan 70% geeft, wordt het leeg en krijg je een foutmelding.
4.  **🔙 Tactische terugtrekking:** Als niets werkt, schakel dan over naar een kleiner model (van 9B naar 4B, of van 4B naar 2B).

---

### ⚙️ GEAVANCEERDE MODELCONFIGURATIE ("Maximale Frikkerij")

> **EXPERTMODUS:** Als je een pro bent en toegang wilt tot geavanceerde modelconfiguraties (eigen GGUF-modellen toevoegen gedownload van HuggingFace, lagen aanpassen, etc.), moet je het spel starten met het commando: `--advanced`.

Voor degenen die graag knoppen indrukken in **Instellingen → Lokale AI Geïntegreerd**:

| Optie            | Functie                                                      | Aanbeveling                                                              |
|------------------|--------------------------------------------------------------|--------------------------------------------------------------------------|
| **GPU Layers**   | Hoeveel van het model wordt in de grafische kaart geladen      | **-1** (Betekent "ALLES". Raak het niet aan, tenzij je weet wat je doet) |
| **Maximale Context** | Het "kortetermijngeheugen" van de AI                         | **16384 - 32768** (Minder dan dit en de AI heeft geheugenverlies)          |
| **Temperatuur**  | Creativiteit versus Waanzin                                  | **0.7 - 0.8** (Hoger = gekker; Lager = robotachtiger)                       |
| **Geschiedenis RAG** | Dingen van lang geleden onthouden                            | **Ja** (Onmisbaar voor lange campagnes)                                     |
| **Embeddings Cachen** | Versnelt het zoeken naar herinneringen                     | **Ja** (Zorgt ervoor dat het sneller gaat)                                |

---

### 🔧 PROBLEMEN OPLOSSEN (Troubleshooting)

| Probleem | Oplossing                                                                    |
|----------|------------------------------------------------------------------------------|
| **Trage AI / Lag** | Controleer of `GPU Layers` -1 is. Sluit Chrome af. Verlaag `Contexto Máximo`. |
| **Geheugenfout (OOM)** | Verminder `Contexto Máximo` of kies een kleiner model (3B).              |
| **De AI waanvoorstellingen / Hallucinaties** | Verlaag `Temperatura` naar 0.6. Als het nog steeds gek is, herstart de applicatie. |

---

### 🌐 ALTERNATIEVE PROVIDERS (Alleen voor Experts)

> **Opmerking:** De lokale AI die het spel biedt, is meer dan genoeg. Dit is alleen voor gevorderde gebruikers of waaghalzen.

*   **Lokale Externe Motoren:**
    *   **Ollama / LM Studio:** Als je al je eigen gekke modellen hebt, kun je die gebruiken.
*   **Cloud API's (Betaald):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vereist internet en geld uitgeven.
    *   Configureer dit in: **Instellingen → AI → Nieuwe Provider Toevoegen**.

---

### 🌍 HOE TE SPELEN? (Het Multiversum en Jij)

Bij het openen van het spel heb je twee keuzes:

1.  **🆕 Nieuw Avontuur**: Creëer je legende vanaf nul. Het spel vraagt je om **Naam, Beroep, Fysieke Beschrijving, Psychologische Beschrijving en de Achtergrond/Voorwendsel** van je verhaal. Bovendien kies je de **Moeilijkheidsgraad** en de **Humoristische Toon** die de campagne zullen begeleiden.
2.  **💾 Ga Verder met Partij**: RolemIAster **slaat realtime op**. Hier is geen "laden voor het sterven" of teruggaan. Elke beslissing, elke blunder en elke verwonding wordt in vuur en vlam in het verhaal gegrift. Het is een **UITDAGING**: wat je doet, is gedaan. Leef met de gevolgen... of sterf ermee.

RolemIAster is geen geïsoleerde partij; het is een **Persistent Multiversum**.
*   **Eindeloze Werelden:** Creëer je eigen universums (**Middeleeuwse Fantasie** of **Cyberpunk**) met hun eigen Lore.
*   **Eindeloze Karakters:** Binnen elke wereld kun je zoveel helden hebben als je wilt.
*   **Gedeelde Tijdlijn:** Pas op! Wat het ene personage doet, heeft invloed op de wereld van de anderen. De AI is zich bewust van je andere helden en zal ze herkennen als bewoners van de wereld.
*   **AI met "Zintuigen" (Super RAG):** Het RAG-systeem (Retrieval-Augmented Generation) fungeert als de "klokkenluider" van de AI, waardoor het herinneringen krijgt over de wereld, wie je vergezelt, waar je bent en wat er zojuist is gebeurd, zodat het verhaal 100% coherent is.

### De Interface (Jouw cockpit)

*   **Linkerpaneel (JIJ):** Je Karaktersheet. Leven, mana, vaardigheden en hoe knap je bent (Charisma).
*   **Middenpaneel (HET VERHAAL):**
    *   **Boven:** Waar de verteller vertelt wat er gebeurt.
    *   **Onder:** Je beslissingsknoppen en het tekstveld om te schrijven wat je wilt doen.
*   **Rechterpaneel (JOUW SPULLEN):** Inventaris en uitrusting. Het paradijs van de digitale diogenes.

---

## 📜 SPELREGELS (Ja, er zijn regels)

RolemIAster gebruikt een klassiek en robuust d100 (honderd-zijdige dobbelsteen) systeem.

### 1. Jouw Attributen (Wat jou definieert)
De AI genereert je attributen op basis van de context, het beroep en de beschrijving die je hebt ingevoerd. Zodra ze zijn gegenereerd, heb je **10 EXTRA PUNTEN** om naar believen te verdelen.
*   **Oplopende Kosten:** Het verhogen van een attribuut tot 14 kost 1 punt. Van 15 tot 16 kost het 2 punten. Vanaf 17 kost het 3 punten! Denk goed na waar je de spierballen legt.

*   💪 **Kracht (KRA):** Je pure fysieke kracht. Beïnvloedt schade in de buurt en je draagvermogen.
*   ❤️ **Constitutie (CON):** Je weerstand. Om klappen, ziektes en gif te weerstaan.
*   🐘 **Grootte (GRO):** Je omvang. Groot en zwaar, of klein en ongrijpbaar.
*   🏃 **Behendigheid (BEH):** Wendbaarheid, nauwkeurigheid en niet struikelen over je eigen voeten.
*   🧠 **Intelligentie (INT):** Leren, onthouden en puzzels oplossen.
*   🔮 **Kracht (KRACHT):** Je ziel, je geluk, wilskracht en je magische reserve.
*   😎 **Charisma (CHA):** Leiderschap, aantrekkingskracht en het vermogen om mensen te bedriegen (of te verleiden).

### 2. Snelle Wiskunde (Afgeleide Kenmerken)
De engine berekent deze cijfers automatisch op basis van je attributen:

*   🩸 **Leven (LP):** `CON * 10`. Als dit 0 bereikt... nou ja, je weet het. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. De brandstof voor je magische trucjes. Zonder mana, geen trucjes. (Een tovenaar zonder mana is slechts een kerel in een gewaad die cosplayt).
*   ⚡ **Uithoudingsvermogen (UIT):** `((CON+FUE+DES)/3)*10 + POD`. Je energie om te vechten en te bewegen zonder daarbij het loodje te leggen.
*   🧠 **Menselijkheid (MEN):** `(CON+POD) * 5`. (Alleen in Cyberpunk: Meet hoeveel je van je menselijkheid overhoudt voordat de kabels je gek maken).
*   ⚔️ **Actiepunten (AP):** `(INT + DES) / 2`. Bepaalt je Initiatief. Wie het eerst slaat, slaat twee keer.

### 3. Jouw Vaardigheden
Beginnen met een basiswaarde (bv. Sluipen = BEH + INT) en verbeteren door gebruik. Het is een percentage (%).

### 4. Actie-resolutie (De Dobbelsteen)
Wanneer je iets risicovol probeert te doen (klimmen, liegen, aanvallen...), vraagt de AI je om een worp. Het spel gooit een onzichtbare **d100**. **(Onthoud: de dobbelstenen haten je. Het is persoonlijk).**

*   **Je Doel:** Een getal **LAGER OF GELIJK** aan je vaardigheidsniveau halen.
    *   *Voorbeeld:* Je hebt 45% in Klimmen.
    *   Je gooit een 30: ✅ **Succes**. Je klimt als een aap.
    *   Je gooit een 80: ❌ **Mislukking**. Je valt hard.
    *   **Kritiek:** Gooi lager of gelijk aan **1/5 van je vaardigheid** (of een 01). Episch! Je doet een buitengewoon parkour met een salto.
    *   **Blunder:** Een **99 of 100**. De dobbelstenen hebben besloten dat het vandaag niet je dag is. Je broek zakt halverwege en je valt met je gezicht voorover.

---

## 💡 TIPS OM NIET (SNEL) TE STERVEN

*   **✍️ Wees Beschrijvend:** Schrijf niet alleen "ik val aan". Schrijf: *"Ik probeer zijn bijl te ontwijken door over de grond te rollen en steek mijn dolk in zijn enkel"*. De AI zal je belonen.
*   **🧪 Experimenteer:** Je bent niet beperkt tot de knoppen. Schrijf gekke dingen! De AI zal improviseren.
*   **🎭 Roleplay:** Kruip in de huid van je personage. Lees de beschrijvingen en gedraag je zoals je personage zou doen, niet zoals jij in je pyjama zou doen.

---

## ⚔️ DE GEVECHT (Op de wapens!)

Als woorden falen, komt de tijd van de klappen. Het gevecht is **tactisch** en werkt met **Ticks** (tijd).

### 🕹️ Hoe het werkt:
*   **Ticks:** Elke actie kost tijd. Zware wapens zijn langzaam (verbruiken veel ticks). Dolken zijn snel.
*   **Jouw Snelheid:** Hangt af van je Actiepunten (AP).

### Basisacties:
*   **🗡️ Aanvallen:** Sla met wat je hebt getrokken.
*   **🛡️ Blokkeren:** Je gaat in de verdediging. Vermindert schade maar kost Uithoudingsvermogen.
*   **🏃 Vluchten:** Van lafaards (of van wijzen die willen leven).
*   **🏳️ Overgeven:** Als je ziet dat je niet wint, kun je om genade smeken.
*   **✨ Magie / Cyberware:** Vuur, laserstralen, hacks...

### 💬 Acties via Vrije Tekst (NIEUW!)
Houd je niet van knoppen? Schrijf wat je wilt doen alsof je met een levende Master spreekt!
*   **Voorbeelden:** *"Vuurbal gooien op de goblin"*, *"Mijn runenzwaard trekken"*, *"Gebruik potion op mezelf"*.
*   **Scène-regisseur:** Het gevecht komt nu tot leven. De AI genereert omgevingsgebeurtenissen en reacties die de narratief verrijken: balken die vallen, vijanden die terugwijken, fakkels die neerkomen! Het slagveld is niet langer statisch!
*   **Als de AI het niet begrijpt:** Het zal je vragen om te herformuleren. Jouw beurt gaat NIET verloren!
*   **⚠️ Beperking:** Het verplaatsen van objecten tussen slots (uitrusten vanuit rugzak, munitie laden) gebeurt met **Drag & Drop** in de interface, niet via tekst.

### ⚠️ GOUDEN OVERLEVINGSREGEL
**TREK JE WAPEN VOORDAT JE VECHT!**
Het wapen trekken tijdens het gevecht kost tijd (Ticks). Als je gepakt wordt met je zwaard nog in de schede, krijg je tot in je identiteitsbewijs terwijl je het onhandig probeert te trekken. OF ERGER NOG!, ALS JE JE WAPENS IN JE RUGZAK DRAAGT IN PLAATS VAN IN HUN UITRUSTINGSSLOT (Neem me niet kwalijk, ik moet even het grote zwaard uit de rugzak halen, ik wist dat ik het hier ergens had... ergens...) 🤦‍♂️
👉 Klik op het label van het uitgeruste wapen (rechterpaneel) om het te trekken. Het licht groen op.

Pogingen om wapens te verplaatsen tijdens gevechten kosten tijd (Ticks) en kunnen resulteren in een verrassingsaanval, bovendien is de kans groot dat je je beurt verliest, dat je faalt door de paniek van de bijl die je richting het voorhoofd nadert, of dat je het laat vallen. (Misschien was het geen goed idee om een personage met ADHD te creëren)

---

## ✨ MAGIE EN CYBERNETICA

Afhankelijk van of je wereld "Middeleeuwse Fantasie" of "Cyberpunk" is:

### 🧙‍♂️ Fantasie: Betoveringen
Ben je een tovenaar? Je kunt je uitrusting betoveren.
1.  **Leer:** Je hebt de spreuk nodig in je grimoire.
2.  **Gooi (Drag & Drop):** Sleep de spreuk vanuit je lijst over het object in je inventaris.
3.  **Kosten:** Een actieve betovering in stand houden kost **Mana per beurt**.
4.  **Waarschuwing:** Als je zonder mana komt te zitten midden in een gevecht, wordt het vuurwapen weer een roestig stuk ijzer.

### 🦾 Cyberpunk: Implantaten
Wil je ogen met zoom of gorilla-armen?
1.  Zoek een **Techno-chirurg** (NPC voor diensten).
2.  Betaal de credits (niets is gratis in de toekomst).
3.  **Kosten aan Menselijkheid:** Elk implantaat neemt een stukje van je ziel weg (**Menselijkheid**).
    *   Als je er te veel plaatst, word je een **Cyberpsychopaat** (een moorddadige broodrooster met poten) en verlies je de controle over je personage.

---

## 🛒 WINKELS EN DIENSTEN (SIS)

Praat met NPC's om te handelen.
*   **AI Stelt Voor, Jij Beslist:** Wanneer je met een handelaar of genezer praat, zal de AI zijn diensten suggereren (repareren, verkopen, genezen), maar er verschijnt een knop **"Bekijk Diensten"** zodat jij kunt beslissen wanneer je in de transactionele modus gaat.
*   **Onderhandelen:** Je vaardigheid **Handel** (gebaseerd op Charisma) bepaalt de prijzen. Als je lelijk of onvriendelijk bent, word je opgelicht.
*   **Verkopen:** Klik met de **rechtermuisknop** op een object in je inventaris om het aan de winkelier te verkopen, of sleep het naar hem toe.

---

## 🎒 INVENTARISBEHEER (Tetris)

*   **Gewicht:** Je hebt een laadlimiet (Kracht + Grootte). Als je te veel schroot meedraagt, ga je langzaam en met straffen (Diogenes is niet je vriend).
*   **Panelen:**
    *   **Uitrusting:** Wat je draagt.
    *   **Gordel:** Snelle toegang in gevechten (kost minder tijd om potions van hier te gebruiken).
    *   **Rugzak:** De bodemloze put.
*   **Vloeiend Gebruik:** Sleep een potion of voedsel direct op **je gezicht** (het portret) om het direct te consumeren. Je kunt ook het contextmenu gebruiken (rechtermuisknop -> Gebruiken).

---

## 🛠️ FINALE AANPASSINGEN

In het menu **Instellingen** kun je alles aanpassen:
*   **🌍 Taal:** De AI vertaalt het hele spel en de antwoorden realtime voor je. Polyglot-modus geactiveerd.
*   **👁️ Uiterlijk:** Lettergrootte en kleuren, zodat je niet blind wordt. Neonranden en verzachte schaduwen voor totale onderdompeling.
*   **🧠 AI Instellingen:** Wissel van model, temperatuur, etc. (Onthoud wat we aan het begin van de handleiding hebben gezien over de vlag `--advanced` als je een van degenen bent die alles wil aanraken).

---

## 🎭 MOEILIJKHEID EN HUMOR (Personaliseer je lijden)

Voordat je begint, onthoud dat de AI niet alleen vertelt, maar ook **de wereld aanpast** aan jouw voorkeuren. Deze parameters worden gekozen bij het maken van de wereld en zijn permanent voor die wereld:

*   **🎮 Moeilijkheidsgraad (AI-beheerd):** Het is geen simpele schadevermenigvuldiger. Het spel vertelt de AI: "Hé, de moeilijkheidsgraad is dit, handel dienovereenkomstig".
    *   **Makkelijk:** Je zult nooit sterven (of het zal bijna onmogelijk zijn), situaties zijn eenvoudiger, prijzen zijn goedkoper en vijanden zijn onhandiger. De AI zal elke scène redeneren om je pad een rozenparcours te maken.
    *   **Normaal:** De standaard balans.
    *   **Uitdaging:** De AI zal meedogenloos zijn, prijzen prohibitief en elke fout kan de laatste zijn.

*   **🃏 Humoristische Toon:** Definieert hoe de AI tegen je praat en wat voor soort gebeurtenissen er plaatsvinden. Hoewel elk model zijn eigen manier heeft om het concept "humor" te interpreteren, zal de AI proberen zich aan te passen aan wat je kiest... of niet:
    *   **Serieus:** Een epische, duistere en formele narratief.
    *   **Sarcastisch:** De AI zal lachen om je fouten, je constant plagen en een ironische toon gebruiken.
    *   **Dolletjes:** Bereid je voor op het absurde. Vliegende koeien, surrealistische situaties en totale chaos beheerd door de meest kronkelige logica van de AI.

---

## 🚧 Waarschuwing: Early Access

RolemIAster is in **actieve ontwikkeling**, langzaam sudderend.
*   Je kunt bugs (of "onverwachte features") tegenkomen.
*   Ik voeg wekelijks nieuwe dingen toe.
*   Jouw feedback is goud waard! Vertel me wat je leuk vindt en wat je erg leuk vindt. (Als je iets niet leuk vindt, vertel het me ook, maar met liefde).

Ga nu, gooi initiatief en creëer je legende!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->