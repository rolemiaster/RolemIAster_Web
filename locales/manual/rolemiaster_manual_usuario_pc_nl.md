# 🐉 Welkom bij RoleMIAster!

Pak je dobbelstenen (of je muis) en bereid je voor op avonturen waar de enige limiet is hoe verwrongen je fantasie is! **RoleMIAster** is een oneindig rollenspel gedreven door Kunstmatige Intelligentie waarmee je de held (of de schurk) van je eigen verhalen kunt zijn.

---

## ⚠️ JURIDISCHE KENNISGEVING (Het saaie maar noodzakelijke deel)

**LEES DIT OF LIJD DE WOEDE VAN DE DOBBELSTENEN:**

1.  **🤖 Geïntegreerde Lokale AI:** RoleMIAster brengt zijn eigen digitale brein mee. Het werkt **zonder internet** en zonder dat je iets raars hoeft te doen. Installeren en spelen!
2.  **☁️ Optionele Cloud:** Als je liever geld uitgeeft aan externe AI's (OpenAI, Gemini...), is dat jouw zaak. De kosten zijn voor jou.
3.  **🎲 Generatieve Chaos:** De AI verzint het verhaal ter plekke. Als de verteller gek wordt en zegt dat het koeien regent, kijk dan niet naar ons. De ontwikkelaar is niet verantwoordelijk voor de waanzin die het model genereert.
4.  **🏗️ Early Access:** Dit is nog in aanbouw. Als je een bug vindt, is het geen fout, het is een verrassende "feature"! (Stuur ons feedback, alsjeblieft, dat helpt ons enorm.)

---

## 🖥️ SYSTEEMVEREISTEN EN DIGITALE BREINEN (AI)

RoleMIAster werkt met **Lokale Kunstmatige Intelligentie**. Dat betekent dat je pc het zware denkwerk zal doen. Je hebt geen internet nodig, maar wel een grafische kaart die niet uit het dinosauriërtijdperk stamt. (Opmerking: Als het koud is in je kamer, werkt dit spel als gratis verwarming.)

### ⚙️ Concepten voor beginners

**VRAM (Video RAM)** is de benzine van de AI.
*   RoleMIAster heeft **12.000 tot 16.000 woorden (tokens)** nodig om de draad van het verhaal niet te verliezen.
*   Als je GPU zonder geheugen komt te zitten, zal het spel langzamer zijn dan een slak met astma.

---

### 📊 MODEL CATALOGUS (Kies je gif)

Beheer je AI's in **Configuratie → Geïntegreerde Lokale AI → Modellen Beheren**.

#### 🏆 Qwen 2.5 Familie (De crème de la crème)

| Model        | Grootte   | Min. VRAM | Tier | Oordeel                                                                      |
|--------------|-----------|-----------|------|------------------------------------------------------------------------------|
| **Qwen2.5-3B** | ~2.5GB    | **8GB**   | B    | 👶 **De Leerling.** Doet zijn best, maar vraag hem geen Shakespeare te schrijven. Raakt soms in de war. |
| **Qwen2.5-7B** | ~5.5GB    | **12GB**  | A    | ✅ **DE UITVERKOZENE.** Gebalanceerd, slim en snel. Dit is het standaard aanbevolen model. |
| **Qwen2.5-14B**| ~10GB     | **16GB**  | S    | 🧐 **De Professor.** Rijke, diepe narratieven en zeer natuurlijke dialogen.    |
| **Qwen2.5-32B**| ~22GB     | **32GB**  | S+   | 👑 **Goddelijk Niveau.** Je hebt een ruimteschip (RTX 3090/4090) nodig om dit te draaien. |

---

### 🎮 SNELLE KEUZEGIDS

| Jouw Grafische Kaart | VRAM    | Aanbevolen Model   | Resultaat                                 |
|----------------------|---------|--------------------|-------------------------------------------|
| GTX 1050/1060        | 4GB     | Qwen2.5-3B         | 🆗 Net aan, maar speelbaar (Lage context) |
| GTX 1070/1660        | 6GB     | Qwen2.5-3B         | 🆗 Werkt goed                             |
| RTX 2060/3060        | 8GB     | Qwen2.5-3B         | 🚀 Vliegt                                 |
| RTX 3070/4060Ti      | 12GB    | **Qwen2.5-7B**     | ✅ De ideale ervaring                      |
| RTX 3090/4080        | 16-24GB | Qwen2.5-14B        | 🌟 Luxe                                   |
| RTX 4090             | 24GB    | Qwen2.5-32B        | 👑 Maximale kwaliteit                     |

**💡 Pro Tip:** Laat altijd ongeveer **2GB VRAM vrij** voor het besturingssysteem, anders begint Windows te huilen en dingen te sluiten.

---

### 🚨 HELP! MIJN PC IS LANGZAAM! (VRAM-problemen)

Als het spel langzamer reageert dan je crush op WhatsApp, heb je waarschijnlijk geen VRAM meer over.

**Symptomen dat je te veel hebt gevraagd:**
1.  **Het model wordt naar de RAM verplaatst:** De pc gebruikt het normale geheugen in plaats van de grafische kaart. Resultaat: EXTREEM TRAAG.
2.  **Lichte overloop (1-2GB):** Duurt 30-60 seconden per antwoord.
3.  **Matige overloop (3-5GB):** 2-5 minuten. Je kunt koffie gaan halen.
4.  **Ernstige overloop:** 10-30 minuten. Onspeelbaar.

#### 🛡️ Noodprotocol
Als de zaken slecht gaan, volg deze stappen in volgorde:

1.  **📉 Verlaag de % VRAM:** Ga naar Configuratie en verlaag deze naar **85%**. Herstart en probeer opnieuw.
2.  **🧹 Opruimen:** Sluit die browser met 40 openstaande tabbladen. Ze eten je geheugen op.
3.  **🛑 De 70% Limiet:** Ga nooit onder de **70%** van toegewezen VRAM.
    *   *Waarom?* Omdat de AI ruimte nodig heeft om te "denken" (de KV-cache). Als je minder dan 70% geeft, wordt hij leeg en geeft hij een fout.
4.  **🔙 Tactische Terugtrekking:** Als niets werkt, ga dan naar een kleiner model (van 7B naar 3B).

---

### ⚙️ GEAVANCEERDE MODEL CONFIGURATIE

Voor degenen die graag knoppen indrukken in **Configuratie → Geïntegreerde Lokale AI**:

| Optie          | Functie                                     | Aanbeveling                                     |
|----------------|---------------------------------------------|-------------------------------------------------|
| **GPU Layers** | Hoeveel van het model wordt op de grafische kaart geladen | **-1** (Betekent "ALLES". Raak dit niet aan tenzij je weet wat je doet) |
| **Maximale Context** | Het "kortetermijngeheugen" van de AI      | **16384 - 32768** (Minder dan dit en de AI heeft amnesie) |
| **Temperatuur** | Creativiteit vs. Waanzin                      | **0.7 - 0.8** (Hoger = gekker; Lager = robotachtiger) |
| **Geschiedenis RAG** | Dingen van lang geleden onthouden        | **Ja** (Essentieel voor lange campagnes)         |
| **Embeddings Cachen**| Versnelt het zoeken naar herinneringen    | **Ja** (Maakt het sneller)                      |

---

### 🔧 PROBLEEMOPLOSSING (Troubleshooting)

| Probleem        | Oplossing                                                                           |
|-----------------|-------------------------------------------------------------------------------------|
| **Trage AI / Lag** | Controleer of `GPU Layers` op -1 staat. Sluit Chrome. Verlaag de `Maximale Context`. |
| **Geheugenfout (OOM)** | Verlaag de `Maximale Context` of kies een kleiner model (3B).                      |
| **De AI hallucineert / dwaalt af** | Verlaag de `Temperatuur` naar 0.6. Als het gek blijft, herstart de applicatie. |

---

### 🌐 ALTERNATIEVE AANBIEDERS (Alleen voor Experts)

> **Opmerking:** De lokale AI die het spel meelevert is meer dan genoeg. Dit is alleen voor gevorderde of dappere gebruikers.

*   **Externe Lokale Engines:**
    *   **Ollama / LM Studio:** Als je al je eigen obscure modellen hebt, kun je die gebruiken.
*   **Cloud API's (Betaald):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vereist internet en geld.
    *   Configureer dit in: **Configuratie → AI → Nieuwe Provider Toevoegen**.

---

## 🎲 HOE TE SPELEN?

Bij het openen van het spel heb je twee opties:

1.  **🆕 Nieuw Avontuur**: Creëer je legende vanaf nul. Het spel begeleidt je bij het kiezen van ras, klasse, wereld en premisse. (Als het leven je citroenen geeft... of een 3 voor Kracht, word dan Barde.)
2.  **💾 Partij Laden**: Ga verder waar je gebleven was vóór die vernederende dood. (Of om die "kleine rekenfout" met de draak recht te zetten.)

### De Interface (Je cockpit)

*   **Linker Paneel (JIJ):** Je Personageblad. Leven, mana, vaardigheden en hoe knap je bent (Charisma).
*   **Centraal Paneel (HET VERHAAL):**
    *   **Boven:** Waar de verteller vertelt wat er gebeurt.
    *   **Onder:** Je keuzeknoppen en het tekstvak om in te typen wat je wilt doen.
*   **Rechter Paneel (JOUW SPULLEN):** Inventaris en uitrusting. Het paradijs van de digitale dierenvriend.

---

## 📜 SPELREGELS (Ja, er zijn regels)

RoleMIAster gebruikt een klassiek en robuust d100 (honderd-zijdige dobbelsteen) systeem.

### 1. Je Attributen (Wat jou definieert)
Ze worden willekeurig gegenereerd, net als in het tafelrollenspel van vroeger!

*   💪 **Kracht (KRA):** Om hard te slaan en stenen te tillen.
*   ❤️ **Constitutie (CON):** Om slagen, ziekten en vergif te weerstaan.
*   🐘 **Grootte (GRO):** Groot en zwaar, of klein en ongrijpbaar.
*   🏃 **Behendigheid (BEH):** Wendbaarheid, nauwkeurigheid en niet struikelen over je eigen voeten.
*   🧠 **Intelligentie (INT):** Leren, onthouden en puzzels oplossen.
*   🔮 **Wilskracht (WIL):** Je ziel, je geluk, doorzettingsvermogen en magie.
*   😎 **Charisma (CHA):** Leiderschap, aantrekkelijkheid en het vermogen om mensen te bedriegen.

### 2. Snelle Berekeningen (Afgeleide Kenmerken)
*   **Leven (LV):** `(CON + GRO) / 2`. Als het 0 bereikt... nou ja, je weet wel. D.
*   **Mana (MV):** Gelijk aan je WIL. Zonder mana geen trucjes. (Een magiër zonder mana is gewoon een kerel in een gewaad die cosplay doet.)
*   **Actiepunten (AP):** `(INT + BEH) / 2`. Bepaalt je Initiatief. Wie het eerst slaat, slaat twee keer.

### 3. Je Vaardigheden
Beginnen met een basiswaarde (bv: Sluipen = BEH + INT) en verbeteren door ze te gebruiken. Het is een percentage (%).

### 4. Actie Resolutie (De Dobbelsteen)
Wanneer je iets risicovol probeert te doen (klimmen, liegen, aanvallen...), vraagt de AI om een worp.
Het spel gooit een onzichtbare **d100**. **(Onthoud: De dobbelstenen haten je. Het is persoonlijk.)**

*   **Je Doel:** Gooi **MINDER OF GELIJK** aan je vaardigheid.
    *   *Voorbeeld:* Je hebt 45% in Klimmen.
    *   Je gooit een 30: ✅ **Succes**. Je klimt als een aap.
    *   Je gooit een 80: ❌ **Mislukt**. Je valt hard.
    *   Je gooit een 01-05: ✨ **CRITIEEL!** Je doet een epische parkour met een salto.
    *   Je gooit een 99-100: 💀 **MISLUKKING!** Je broek valt halverwege naar beneden en je valt met je gezicht.

---

## 💡 TIPS OM NIET (SNEL) TE STERVEN

*   **✍️ Wees Beschrijvend:** Schrijf niet zomaar "ik val aan". Schrijf: *"Ik probeer zijn bijl te ontwijken door over de grond te rollen en steek mijn dolk in zijn enkel"* De AI zal je belonen.
*   **🧪 Experimenteer:** Je bent niet beperkt tot de knoppen. Schrijf gekke dingen! De AI zal improviseren.
*   **🎭 Rol:** Kruip in je rol. Lees de beschrijvingen en gedraag je zoals je personage zou doen, niet zoals jij in je pyjama.

---

## ⚔️ COMBAT (Aanvallen!)

Als woorden tekortschieten, is het tijd voor een gevecht. Combat is **tactisch** en werkt via **Ticks** (tijd).

### 🕹️ Hoe het werkt:
*   **Ticks:** Elke actie kost tijd. Zware wapens zijn langzaam (verbruiken veel ticks). Dolken zijn snel.
*   **Jouw Snelheid:** Hangt af van je Actiepunten (AP).

### Basisacties:
*   **🗡️ Aanvallen:** Raak met wat je hebt getrokken.
*   **🛡️ Blokkeren:** Je neemt een defensieve houding aan. Vermindert schade, maar kost Stamina.
*   **🏃 Vluchten:** Voor lafaards (of voor wijzen die willen leven).
*   **🏳️ Overgeven:** Als je ziet dat je niet wint, kun je om genade smeken.
*   **✨ Magie / Cyberware:** Vuur, laserstralen, hacks...

### ⚠️ GOUDEN OVERLEVINGSREGEL
**TREK JE WAPEN VOORDAT JE VECHT!**
Het wapen trekken tijdens het gevecht kost tijd (Ticks). Als ze je met het zwaard in de schede pakken, krijg je ervan langs terwijl je probeert het onhandig te trekken. OF ERGER NOG!, ALS JE JE WAPENS IN JE RUGZAK DRAAGT IN PLAATS VAN IN HUN UITRUSTINGSSLOT (Pardon, ik moet het zwaard uit de rugzak halen, ik wist dat ik het ergens had... ergens...) 🤦‍♂️
👉 Klik op het **label van het uitgeruste wapen** (rechterpaneel) om het te trekken. Het licht groen op.

Pogingen om wapens te verplaatsen tijdens gevechten kosten tijd (Ticks) en kunnen resulteren in een verrassingsaanval, bovendien is het zeer waarschijnlijk dat je je beurt verliest, dat je mist door de nervositeit van de bijl die je voorhoofd nadert of dat het op de grond valt. (Misschien was het geen goed idee om een personage met ADHD te creëren)

---

## ✨ MAGIE EN CYBERNETICA

Afhankelijk van of je wereld "Middeleeuwse fantasie" of "Cyberpunk" is:

### 🧙‍♂️ Fantasie: Betoveringen
Ben je een tovenaar? Je kunt je uitrusting betoveren.
1.  **Leren:** Je hebt de spreuk in je grimoire nodig.
2.  **Lanceren (Drag & Drop):** Sleep de spreuk van je lijst naar het object in je inventaris.
3.  **Kosten:** Een actieve betovering **kost Mana per beurt**.
4.  **Waarschuwing:** Als je zonder mana komt te zitten midden in een gevecht, wordt het vuurwapen weer een roestig stuk ijzer.

### 🦾 Cyberpunk: Implantaten
Wil je ogen met zoom of gorilla-armen?
1.  Zoek een **Techno-chirurg** (NPC in dienst).
2.  Betaal de credits (niets is gratis in de toekomst).
3.  **Kosten van Menselijkheid:** Elk implantaat kost je een stukje ziel (**Menselijkheid**).
    *   Als je er te veel plaatst, verander je in een **Cyberpsychose** (een moorddadige looprobot) en verlies je de controle over je personage.

---

## 🛒 WINKELS EN DIENSTEN

Praat met NPC's om te handelen.
*   **Afdingen:** Je **Handels**vaardigheid (gebaseerd op Charisma) bepaalt de prijzen. Als je lelijk of onaardig bent, word je opgelicht.
*   **Verkopen:** **Klik met de rechtermuisknop** op een object in je inventaris om het aan de handelaar te verkopen.

---

## 🎒 INVENTARIS BEHEER (Tetris)

*   **Gewicht:** Je hebt een draaglimiet (Kracht + Grootte). Als je te veel schroot meedraagt, loop je langzaam en met straffen (Diógenes is niet je vriend).
*   **Panelen:**
    *   **Uitrusting:** Wat je draagt.
    *   **Gordel:** Snelle toegang in gevechten (het kost minder tijd om hier potions te gebruiken).
    *   **Rugzak:** De bodemloze put.
*   **Snel Gebruik:** Sleep een drankje of eten rechtstreeks op **je gezicht** (het portret) om het direct te consumeren.

---

## 🛠️ FINALE AANPASSINGEN

In het menu **Configuratie** kun je alles aanpassen:
*   **🌍 Taal:** De AI vertaalt het hele spel en de antwoorden voor je.
*   **👁️ Uiterlijk:** Tekstgrootte en kleuren, zodat je niet blind wordt.
*   **🧠 AI Instellingen:** Wissel van model, temperatuur, etc.

---

## 🚧 Waarschuwing: Early Access

RoleMIAster is in **actieve ontwikkeling**, langzaam aan het koken.
*   Je kunt bugs (of "onverwachte features") tegenkomen.
*   Ik voeg elke week nieuwe dingen toe.
*   Jouw feedback is goud waard! Vertel me wat je leuk vindt en wat je erg leuk vindt.

Ga nu, gooi initiatief en creëer je legende!

<!-- source_hash: 2511f352 -->