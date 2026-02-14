# 🐉 Welkom bij RolemIAster!

Pak je dobbelstenen (of je muis) en maak je klaar voor avonturen waar de enige limiet is hoe verwrongen je eigen fantasie is! **RolemIAster** is een oneindige RPG aangedreven door Kunstmatige Intelligentie waarmee je de held (of de schurk) van je eigen verhalen kunt zijn.

---

## ⚠️ DISCLAIMER (Het saaie maar noodzakelijke gedeelte)

**LEES MIJ OF VOEL DE TOORN VAN DE DOBBELSTENEN:**

1.  **🤖 Geïntegreerde Lokale AI:** RolemIAster brengt zijn eigen digitale brein mee. Het werkt **zonder internet** en zonder dat je rare dingen hoeft te doen. Installeren en spelen!
2.  **☁️ Optionele Cloud:** Als je liever geld uitgeeft aan externe AI's (OpenAI, Gemini...), leef je uit met je creditcard. De kosten zijn voor jouw rekening.
3.  **🎲 Generatieve Chaos:** De AI verzint het verhaal ter plekke. Als de verteller gek wordt en zegt dat het koeien regent, kijk ons er dan niet op aan. De ontwikkelaar is niet verantwoordelijk voor de gekkigheid die het model genereert.
4.  **🏗️ Early Access:** Dit is nog in aanbouw. Als je een bug vindt, is het geen fout, maar een "verrassingsfeature"! (Stuur ons feedback, alsjeblieft, dat helpt ons enorm).

---

## 🖥️ SYSTEEMVEREISTEN EN DIGITALE BREINEN (AI)

RolemIAster werkt met **Lokale Kunstmatige Intelligentie**. Dat betekent dat jouw PC het zware denkwerk doet. Je hebt geen internet nodig, maar wel een grafische kaart die niet uit het tijdperk van de dinosaurussen komt. (Opmerking: Als het koud is in je kamer, werkt dit spel als gratis verwarming).

### ⚙️ Concepten voor beginners

De **VRAM (Videogeheugen)** is de brandstof van de AI.
*   RolemIAster moet **12.000 tot 16.000 woorden (tokens)** "onthouden" om de draad van het verhaal niet kwijt te raken.
*   Als je GPU zonder geheugen komt te zitten, zal het spel trager gaan dan een slak met astma.

---

### 📊 MODELLENCATALOGUS (Kies je vergif)

Beheer je AI's in **Instellingen → Geïntegreerde Lokale AI → Modellen Beheren**.

#### 🏆 Familie Qwen 2.5 (De crème de la crème)

| Model | Grootte | Min. VRAM | Tier | Oordeel |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **De Stagiair.** Voldoet, maar vraag hem niet om Shakespeare te schrijven. Raakt soms in de war. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DE UITVERKORENE.** Evenwichtig, slim en snel. Dit is het standaard aanbevolen model. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **De Professor.** Rijke, diepgaande verhaallijnen en zeer natuurlijke dialogen. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **God-niveau.** Je hebt een ruimteschip (RTX 3090/4090) nodig om dit te draaien. |

---

### 🎮 SNELKEUZEGIDS

| Jouw Grafische Kaart | VRAM | Aanbevolen Model | Resultaat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Krap maar speelbaar (Lage context) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Gaat prima |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Vliegt |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ De ideale ervaring |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Pure luxe |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximale kwaliteit |

**💡 Pro Tip:** Laat altijd ongeveer **2GB VRAM vrij** voor het besturingssysteem, anders begint Windows te huilen en dingen af te sluiten.

---

### 🚨 HELP! MIJN PC IS TRAAG! (VRAM Problemen)

Als het spel trager reageert dan je crush op WhatsApp, heb je waarschijnlijk geen VRAM meer.

**Symptomen dat je overmoedig bent geweest:**
1.  **Het model valt terug op RAM:** De PC gebruikt het normale geheugen in plaats van de grafische kaart. Resultaat: EXTREME TRAAGHEID.
2.  **Lichte overschrijding (1-2GB):** Het duurt 30-60 seconden per antwoord.
3.  **Matige overschrijding (3-5GB):** 2-5 minuten. Je kunt koffie gaan halen.
4.  **Ernstige overschrijding:** 10-30 minuten. Onspeelbaar.

#### 🛡️ Noodprotocol
Als het misgaat, volg dan deze stappen in volgorde:

1.  **📉 Verlaag het VRAM %:** Ga naar Instellingen en verlaag het naar **85%**. Herstart en probeer opnieuw.
2.  **🧹 Schoonmaak:** Sluit die browser met 40 open tabbladen. Ze eten je geheugen op.
3.  **🛑 De 70% Grens:** Ga nooit lager dan **70%** toegewezen VRAM.
    *   *Waarom?* Omdat de AI ruimte nodig heeft om te "denken" (de KV-cache). Als je minder dan 70% geeft, krijgt hij een black-out en geeft hij een foutmelding.
4.  **🔙 Tactische Terugtocht:** Als niets werkt, ga dan terug naar een kleiner model (ga van de 7B naar de 3B).

---

### ⚙️ GEAVANCEERDE MODELCONFIGURATIE ("Maximaal Nerden")

> **EXPERT MODUS:** Als je een pro bent en toegang wilt tot geavanceerde modelinstellingen (je eigen GGUF-modellen toevoegen gedownload van HuggingFace, lagen aanpassen, enz.), moet je het spel starten met het commando: `--advanced`.

Voor degenen die graag op knopjes drukken in **Instellingen → Geïntegreerde Lokale AI**:

| Optie | Functie | Aanbeveling |
|--------|---------|---------------|
| **GPU Layers** | Hoeveel van het model in de grafische kaart wordt geladen | **-1** (Betekent "ALLES". Blijf eraf tenzij je weet wat je doet) |
| **Max Context** | Het "korte termijn geheugen" van de AI | **16384 - 32768** (Minder dan dit en de AI krijgt geheugenverlies) |
| **Temperatuur** | Creativiteit vs Waanzin | **0.7 - 0.8** (Hoger = gekker; Lager = robotachtiger) |
| **RAG Geschiedenis** | Dingen herinneren van lang geleden | **Ja** (Onmisbaar voor lange campagnes) |
| **Embeddings Cachen** | Versnelt het zoeken naar herinneringen | **Ja** (Zorgt dat het sneller gaat) |

---

### 🔧 PROBLEEMOPLOSSING (Troubleshooting)

| Fout | Oplossing |
|-------|---------|
| **Trage AI / Lag** | Controleer of `GPU Layers` op -1 staat. Sluit Chrome. Verlaag de `Contexto Máximo`. |
| **Geheugenfout (OOM)** | Verminder de `Contexto Máximo` of kies een kleiner model (3B). |
| **De AI ijlt / Hallucineert** | Verlaag de `Temperatura` naar 0.6. Als hij gek blijft doen, herstart de applicatie. |

---

### 🌐 ALTERNATIEVE PROVIDERS (Alleen Experts)

> **Opmerking:** De lokale AI die bij het spel zit is ruim voldoende. Dit is alleen voor geavanceerde gebruikers of waaghalzen.

*   **Externe Lokale Engines:**
    *   **Ollama / LM Studio:** Als je al je eigen geeky modellen hebt, kun je die gebruiken.
*   **Cloud API's (Betaald):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vereist internet en betalen.
    *   Configureer het in: **Instellingen → AI → Nieuwe Provider Toevoegen**.

---

### 🌍 HOE TE SPELEN? (Het Multiversum en Jij)

Bij het openen van het spel heb je twee wegen:

1.  **🆕 Nieuw Avontuur**: Creëer je legende vanaf nul. Het spel vraagt om **Naam, Beroep, Fysieke Beschrijving, Psychologische Beschrijving en de Achtergrond/Aanleiding** van je verhaal. Daarnaast kies je het **Moeilijkheidsniveau** en de **Toon van de Humor** die de campagne zullen leiden.
2.  **💾 Spel Hervatten**: RolemIAster **slaat real-time op**. Hier is geen "laden voor je doodging" en geen weg terug. Elke beslissing, elke blunder en elke wond wordt in het geheugen van het verhaal gegrift. Het is een **UITDAGING**: wat je doet, is gedaan. Leef met de gevolgen... of sterf ermee.

RolemIAster is geen geïsoleerd spel; het is een **Persistent Multiversum**.
*   **Oneindige Werelden:** Creëer je eigen universums (**Middeleeuwse Fantasy** of **Cyberpunk**) met hun eigen Lore.
*   **Oneindige Personages:** Binnen elke wereld kun je zoveel helden hebben als je wilt.
*   **Gedeelde Tijdlijn:** Let op! Wat het ene personage doet, beïnvloedt de wereld van de anderen. De AI is zich bewust van je andere helden en zal ze herkennen als bewoners van de wereld.
*   **AI met "Zintuigen" (Super RAG):** Het RAG-systeem (Retrieval-Augmented Generation) fungeert als de "influisteraar" van de AI, en geeft herinneringen over de wereld, wie er bij je is, waar je bent en wat er net is gebeurd, zodat het verhaal 100% coherent is.

### De Interface (Je cockpit)

*   **Linker Paneel (JIJ):** Je Personagekaart. Leven, mana, vaardigheden en hoe knap je bent (Charisma).
*   **Midden Paneel (HET VERHAAL):**
    *   **Boven:** Waar de verteller vertelt wat er gebeurt.
    *   **Onder:** Je beslissingsknoppen en het tekstvak om te schrijven wat je maar wilt.
*   **Rechter Paneel (JOUW SPULLEN):** Inventaris en uitrusting. Het paradijs voor de digitale hoarder.

---

## 📜 SPELREGELS (Ja, er zijn regels)

RolemIAster gebruikt een klassiek en robuust d100 (honderdzijdige dobbelsteen) systeem.

### 1. Je Attributen (Wat jou definieert)
De AI genereert je attributen op basis van de context, het beroep en de beschrijving die je hebt ingevoerd. Eenmaal gegenereerd, heb je **10 EXTRA PUNTEN** om naar eigen inzicht te verdelen.
*   **Gelaagde Kosten:** Een attribuut verhogen tot 14 kost 1 punt. Van 15 tot 16 kost 2 punten. Vanaf 17 kost het 3 punten! Bedenk goed waar je je spierballen inzet.

*   💪 **Kracht (FUE):** Je pure fysieke vermogen. Beïnvloedt schade in man-tegen-man gevechten en hoeveel je kunt dragen.
*   ❤️ **Constitutie (CON):** Je weerstand. Om klappen, ziektes en vergif te weerstaan.
*   🐘 **Grootte (TAM):** Je omvang. Groot en zwaar, of klein en ongrijpbaar.
*   🏃 **Behendigheid (DES):** Lenigheid, nauwkeurigheid en niet over je eigen voeten struikelen.
*   🧠 **Intelligentie (INT):** Leren, onthouden en puzzels oplossen.
*   🔮 **Macht (POD):** Je ziel, je geluk, wilskracht en je magische reserve.
*   😎 **Charisma (CAR):** Leiderschap, aantrekkelijkheid en het vermogen om mensen te misleiden (of te verleiden).

### 2. Snelle Wiskunde (Afgeleide Kenmerken)
De engine berekent deze cijfers automatisch op basis van je attributen:

*   🩸 **Leven (PV):** `CON * 10`. Als dit 0 bereikt... nou ja, je weet wel. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. De brandstof voor je goocheltrucs. Zonder mana, geen trucjes. (Een magiër zonder mana is gewoon een kerel in een badjas die cosplay doet).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Je energie om te vechten en te bewegen zonder dood neer te vallen.
*   🧠 **Menselijkheid (HUM):** `(CON+POD) * 5`. (Alleen in Cyberpunk: Meet hoeveel mens er nog van je over is voordat de kabels je gek maken).
*   ⚔️ **Actiepunten (PA):** `(INT + DES) / 2`. Bepaalt je Initiatief. Wie eerst slaat, heeft het voordeel.

### 3. Je Vaardigheden
Beginnen met een basiswaarde (bv: Sluipen = DES + INT) en verbeteren door ze te gebruiken. Het is een percentage (%).

### 4. Acties Oplossen (De Dobbelsteen)
Wanneer je iets riskants probeert (klimmen, liegen, aanvallen...), zal de AI je om een worp vragen. Het spel gooit een onzichtbare **d100**. **(Onthoud: De dobbelstenen haten je. Het is persoonlijk).**

*   **Je Doel:** Een getal gooien dat **LAGER OF GELIJK** is aan je vaardigheidsniveau.
    *   *Voorbeeld:* Je hebt 45% in Klimmen.
    *   Je gooit een 30: ✅ **Succes**. Je klimt omhoog als een aap.
    *   Je gooit een 80: ❌ **Mislukking**. Je maakt een smak.
    *   **Kritiek:** Lager of gelijk gooien aan **1/5 van je vaardigheid** (of een 01). Episch! Je doet een buitengewone parkour met salto.
    *   **Fout (Pifia):** Een **99 of 100**. De dobbelstenen hebben besloten dat het vandaag niet jouw dag is. Je broek zakt halverwege af en je valt op je gezicht.

---

## 💡 TIPS OM NIET (SNEL) TE STERVEN

*   **✍️ Wees Beschrijvend:** Schrijf niet alleen "ik val aan". Schrijf: *"Ik probeer zijn bijl te ontwijken door over de grond te rollen en steek mijn dolk in zijn enkel"*. De AI zal je belonen.
*   **🧪 Experimenteer:** Je bent niet beperkt tot de knoppen. Schrijf gekke dingen! De AI zal improviseren.
*   **🎭 Rol:** Kruip in de huid van je personage. Lees de beschrijvingen en gedraag je zoals je personage zou doen, niet zoals jij in je pyjama zou doen.

---

## ⚔️ HET GEVECHT (Te wapen!)

Wanneer woorden tekortschieten, is het tijd voor klappen. Het gevecht is **tactisch** en werkt op basis van **Ticks** (tijd).

### 🕹️ Hoe het werkt:
*   **Ticks:** Elke actie kost tijd. Zware wapens zijn traag (kosten veel ticks). Dolken zijn snel.
*   **Jouw Snelheid:** Hangt af van je Actiepunten (PA).

### Basisacties:
*   **🗡️ Aanvallen:** Sla met wat je maar getrokken hebt.
*   **🛡️ Blokkeren:** Je gaat in de verdediging. Vermindert schade maar kost Stamina.
*   **🏃 Vluchten:** Voor lafaards (of wijzen die willen leven).
*   **🏳️ Overgeven:** Als je ziet dat je niet wint, kun je om genade smeken.
*   **✨ Magie / Cyberware:** Vuur, lasers, hacks...

### 💬 Acties via Vrije Tekst (NIEUW!)
Hou je niet van knoppen? Schrijf wat je wilt doen alsof je met een echte Spelleider praat!
*   **Voorbeelden:** *"Vuurbal gooien naar de goblin"*, *"Mijn runenzwaard trekken"*, *"Drankje op mezelf gebruiken"*.
*   **Scèneregisseur:** Het gevecht komt nu tot leven. De AI genereert omgevingsgebeurtenissen en reacties die het verhaal verrijken: vallende balken, vijanden die terugdeinzen, vallende fakkels. Het slagveld is niet langer statisch!
*   **Als de AI het niet begrijpt:** Zal hij je vragen het te herformuleren. Je beurt gaat NIET verloren!
*   **⚠️ Beperking:** Objecten verplaatsen tussen slots (uitrusten vanuit rugzak, munitie laden) doe je met **Drag & Drop** in de interface, niet via tekst.

### ⚠️ GOUDEN OVERLEVINGSREGEL
**TREK JE WAPEN VOOR JE VECHT!**
Je wapen trekken midden in een gevecht kost tijd (Ticks). Als ze je betrappen met je zwaard nog in de schede, krijg je klappen tot je niet meer weet wie je bent terwijl je onhandig probeert het te trekken. OF NOG ERGER, ALS JE JE WAPENS IN JE RUGZAK HEBT IN PLAATS VAN IN HUN UITRUSTINGSSLOT (Momentje, ik moet even mijn tweehander uit mijn rugzak halen, ik weet dat ik hem hier ergens had... ergens...) 🤦‍♂️
👉 Klik op het **Label van het uitgeruste wapen** (rechter paneel) om het te trekken. Het zal groen oplichten.

Wapens proberen te verplaatsen in een gevecht kost tijd (Ticks) en kan resulteren in een verrassingsaanval, bovendien is het zeer waarschijnlijk dat je je beurt verliest, mist door de zenuwen van de bijl die op je voorhoofd afkomt of dat je het laat vallen. (Misschien was het geen goed idee om een personage met ADHD te maken).

---

## ✨ MAGIE EN CYBERNETICA

Afhankelijk van of je wereld "Middeleeuwse Fantasy" of "Cyberpunk" is:

### 🧙‍♂️ Fantasy: Betoveringen
Ben je een tovenaar? Je kunt je uitrusting betoveren.
1.  **Leer:** Je hebt de spreuk nodig in je grimoire.
2.  **Spreek uit (Drag & Drop):** Sleep de spreuk vanuit je lijst naar het object in je inventaris.
3.  **Kosten:** Een betovering actief houden **kost Mana per beurt**.
4.  **Waarschuwing:** Als je mana opraakt midden in een gevecht, wordt dat vuurzwaard weer gewoon een stuk roestig ijzer.

### 🦾 Cyberpunk: Implantaten
Wil je ogen met zoom of gorilla-armen?
1.  Zoek een **Technochirurg** (Service NPC).
2.  Betaal de credits (niets is gratis in de toekomst).
3.  **Menselijkheidskosten:** Elk implantaat kost je een stukje van je ziel (**Menselijkheid**).
    *   Als je er te veel neemt, verander je in een **Cyberpsychose** (een moordlustige broodrooster op pootjes) en verlies je de controle over je personage.

---

## 🛒 WINKELS EN DIENSTEN (SIS)

Praat met NPC's om te handelen.
*   **AI Suggereert, Jij Bepaalt:** Wanneer je met een handelaar of genezer praat, zal de AI hun diensten voorstellen (repareren, verkopen, genezen), maar er verschijnt een knop **"Diensten Bekijken"** zodat jij beslist wanneer je de transactiemodus ingaat.
*   **Afdingen:** Je **Handel** vaardigheid (gebaseerd op Charisma) bepaalt de prijzen. Als je lelijk of onsympathiek bent, zetten ze je af.
*   **Verkopen:** Klik met de **Rechtermuisknop** op een object in je inventaris om het aan de winkelier te verkopen of sleep het naar hem toe.

---

## 🎒 INVENTARISBEHEER (Tetris)

*   **Gewicht:** Je hebt een draaglimiet (Kracht + Grootte). Als je te veel troep meesleept, word je traag en krijg je strafpunten (Hoarden is niet je vriend).
*   **Panelen:**
    *   **Uitrusting:** Wat je draagt.
    *   **Riem:** Snelle toegang in gevechten (kost minder tijd om drankjes van hier te gebruiken).
    *   **Rugzak:** De bodem van de zak.
*   **Vloeiend Gebruik:** Sleep een drankje of voedsel direct op **je gezicht** (het portret) om het direct te consumeren. Je kunt ook het contextmenu gebruiken (rechtermuisknop -> Gebruiken).

---

## 🛠️ LAATSTE AANPASSINGEN

In het menu **Instellingen** kun je alles aanpassen:
*   **🌍 Taal:** De AI vertaalt het hele spel en de antwoorden direct voor je ("on the fly"). Polyglot-modus geactiveerd.
*   **👁️ Uiterlijk:** Lettergrootte en kleuren, om niet blind te worden. Neon randen en zachte schaduwen voor totale immersie.
*   **🧠 AI Instellingen:** Verander van model, temperatuur, enz. (Herinner je wat we aan het begin van de handleiding zagen over de flag `--advanced` als je iemand bent die overal aan wil zitten).

---

## 🎭 MOEILIJKHEIDSGRAAD EN HUMOR (Personaliseer je lijden)

Onthoud voordat je begint dat de AI niet alleen vertelt, maar de **wereld aanpast** aan jouw voorkeuren. Deze parameters worden gekozen bij het creëren van de wereld en zijn permanent voor die wereld:

*   **🎮 Moeilijkheid (Beheerd door AI):** Het is niet simpelweg een schade-vermenigvuldiger. Het spel zegt tegen de AI: "Hé, dit is de moeilijkheidsgraad, handel ernaar".
    *   **Makkelijk:** Je zult nooit sterven (of het zal bijna onmogelijk zijn), situaties zijn eenvoudiger, prijzen zijn goedkoper en vijanden zijn onhandiger. De AI zal elke scène zo beredeneren dat je pad een makkie is.
    *   **Normaal:** De standaard balans.
    *   **Uitdaging:** De AI zal onverbiddelijk zijn, prijzen onbetaalbaar en elke fout kan de laatste zijn.

*   **🃏 Toon van de Humor:** Bepaalt hoe de AI tegen je praat en welk soort gebeurtenissen er plaatsvinden. Hoewel elk model zijn eigen interpretatie heeft van het concept "humor", zal de AI proberen zich aan te passen aan wat jij kiest... of niet:
    *   **Serieus:** Een episch, duister en formeel verhaal.
    *   **Sarcastisch:** De AI zal lachen om je fouten, je constant steken onder water geven en een ironische toon gebruiken.
    *   **Waanzinnig:** Bereid je voor op het absurde. Vliegende koeien, surrealistische situaties en totale chaos beheerd door de meest kronkelige logica van de AI.

---

## 🚧 Waarschuwing: Early Access

RolemIAster is in **actieve ontwikkeling**, langzaam aan het garen.
*   Je kunt bugs vinden (of "onverwachte features").
*   Ik voeg elke week nieuwe dingen toe.
*   Je feedback is goud waard! Vertel me wat je leuk vindt en wat je heel erg leuk vindt. (Als je iets niet leuk vindt, vertel het me dan ook, maar met liefde).

Ga nu, rol voor initiatief en creëer je legende!

<!-- source_hash: f3494f05 -->