# 🐉 Välkommen till RoleMIAster!

Ta fram dina tärningar (eller din mus) och förbered dig på att leva äventyr där den enda gränsen är hur snurrig din fantasi är! **RoleMIAster** är ett oändligt rollspel drivet av Artificiell Intelligens som låter dig vara hjälten (eller skurken) i dina egna berättelser.

---

## ⚠️ JURIDISKT MEDDELANDE (Den tråkiga men nödvändiga delen)

**LÄS DETTA ANNARS FÅR DU LIDAS AV TÄRNINGARNAS VREDE:**

1.  **🤖 Integrerad Lokal AI:** RoleMIAster har sin egen digitala hjärna. Den fungerar **utan internet** och utan att du behöver röra något konstigt. Installera och spela!
2.  **☁️ Valfri Molntjänst:** Om du föredrar att lägga pengarna på externa AI:er (OpenAI, Gemini...), är det ditt problem med ditt kreditkort. Kostnaderna är dina egna.
3.  **🎲 Generativt Kaos:** AI:n hittar på historien allteftersom. Om berättaren blir galen och säger att det regnar kor, titta inte på oss. Utvecklaren ansvarar inte för de galenskaper som modellen genererar.
4.  **🏗️ Tidig Tillgång:** Detta är under utveckling. Om du hittar en bugg, är det inte ett fel, det är en överraskande "funktion"! (Skicka gärna feedback, det hjälper oss mycket).

---

## 🖥️ SYSTEMKRAV OCH DIGITALA HÄRNNOR (AI)

RoleMIAster fungerar med **lokal artificiell intelligens**. Det betyder att din PC kommer att göra det tunga arbetet med att tänka. Du behöver inte internet, men du behöver ett grafikkort som inte är från dinosauriernas tid. (Notera: Om det är kallt i ditt rum fungerar det här spelet som gratis uppvärmning).

### ⚙️ Koncept för nybörjare

**VRAM (Videominne)** är AI:ns bensin.
*   RoleMIAster behöver "komma ihåg" **12 000 till 16 000 ord (tokens)** för att inte tappa tråden i berättelsen.
*   Om ditt grafikkort får slut på minne, kommer spelet att gå långsammare än en snigel med astma.

---

### 📊 MODELLKATALOG (Välj ditt gift)

Hantera dina AI:er under **Inställningar → Integrerad Lokal AI → Hantera Modeller**.

#### 🏆 Qwen 2.5-familjen (Gräddan på moset)

| Modell | Storlek | Minsta VRAM | Nivå | Dom |
|--------|---------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Praktikanten.** Klarar sig, men be den inte skriva Shakespeare. Blir ibland förvirrad. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DEN UTVALDE.** Balanserad, smart och snabb. Är standardmodellen som rekommenderas. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Professorn.** Rik, djup berättelse och mycket naturliga dialoger. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Gudomlig nivå.** Du behöver ett rymdskepp (RTX 3090/4090) för att köra detta. |

---

### 🎮 SNABB GUIDE FÖR VAL

| Ditt grafikkort | VRAM | Rekommenderad modell | Resultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Precis tillräckligt men spelbart (Lågt kontextfönster) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Går bra |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Flyger |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Den ideala upplevelsen |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Lyx |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximal kvalitet |

**💡 Proffstips:** Lämna alltid ungefär **2GB VRAM ledigt** för operativsystemet, annars börjar Windows gråta och stänga ner saker.

---

### 🚨 HJÄLP! MIN DATOR ÄR LÅNGSAM! (VRAM-problem)

Om spelet tar längre tid att svara än din förälskelse på WhatsApp, har du antagligen slut på VRAM.

**Symptom på att du varit för kaxig:**
1.  **Modellen töms till RAM:** Datorn använder det vanliga minnet istället för grafikkortets. Resultat: EXTREMT LÅNGSAMT.
2.  **Lätt överflöd (1-2GB):** Det tar 30-60 sekunder per svar.
3.  **Måttligt överflöd (3-5GB):** 2-5 minuter. Du hinner gå och ta en kaffe.
4.  **Svårt överflöd:** 10-30 minuter. Ospelbart.

#### 🛡️ Nödprotokoll
Om det går dåligt, följ dessa steg i ordning:

1.  **📉 Sänk VRAM %:** Gå till Inställningar och sänk den till **85%**. Starta om och testa.
2.  **🧹 Rengöring:** Stäng den där webbläsaren med 40 flikar öppna. De äter upp ditt minne.
3.  **🛑 Gränsen på 70%:** Sänk aldrig under **70%** av allokerad VRAM.
    *   *Varför?* Eftersom AI:n behöver utrymme för att "tänka" (KV-cachen). Om du ger den mindre än 70% blir den blank och ger ett fel.
4.  **🔙 Taktisk reträtt:** Om inget fungerar, gå ner till en mindre modell (från 7B till 3B).

---

### ⚙️ AVANCERAD MODELLKONFIGURATION

För de som gillar att pilla med knappar under **Inställningar → Integrerad Lokal AI**:

| Alternativ | Funktion | Rekommendation |
|--------|---------|---------------|
| **GPU Layers** | Hur mycket av modellen som laddas på grafikkortet | **-1** (Betyder "ALLT". Rör inte detta om du inte vet vad du gör) |
| **Maximalt Kontextfönster** | AI:ns "korttidsminne" | **16384 - 32768** (Mindre än så och AI:n får minnesförlust) |
| **Temperatur** | Kreativitet vs. galenskap | **0.7 - 0.8** (Högre = galnare; Lägre = mer robotaktigt) |
| **Historik RAG** | Komma ihåg saker från förr | **Ja** (Oumbärligt för långa kampanjer) |
| **Cachea Embeddings** | Snabbare sökning av minnen | **Ja** (Gör att det går snabbare) |

---

### 🔧 FELSÖKNING (Troubleshooting)

| Problem | Lösning |
|-------|---------|
| **Långsam AI / Lagg** | Kontrollera att `GPU Layers` är -1. Stäng Chrome. Sänk `Maximalt Kontextfönster`. |
| **Minnesfel (OOM)** | Minska `Maximalt Kontextfönster` eller välj en mindre modell (3B). |
| **AI:n svamlar / Hallucinerar** | Sänk `Temperatur` till 0.6. Om den fortfarande är galen, starta om applikationen. |

---

### 🌐 ALTERNATIVA LEVERANTÖRER (Endast för experter)

> **Notera:** Den lokala AI som spelet levereras med räcker och blir över. Detta är bara för avancerade användare eller modiga själar.

*   **Externa Lokala Motor:**
    *   **Ollama / LM Studio:** Om du redan har egna nördiga modeller kan du använda dem.
*   **Moln-API:er (Kostnad):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kräver internet och att du betalar.
    *   Konfigurera det i: **Inställningar → AI → Lägg till Ny Leverantör**.

---

## 🎲 HUR SPELAR MAN?

När du öppnar spelet har du två vägar:

1.  **🆕 Nytt Äventyr**: Skapa din egen legend från grunden. Spelet guidar dig genom att välja ras, klass, värld och premiss. (Om livet ger dig citroner... eller en 3 i Styrka, bli Bard).
2.  **💾 Ladda Sparat Spel**: Fortsätt precis där du slutade innan den där förnedrande döden. (Eller för att rätta till det "lilla beräkningsfelet" med draken).

### Gränssnittet (Din kontrollhytt)

*   **Vänster panel (DU):** Din Karaktärsblad. Liv, mana, förmågor och hur snygg du är (Karism).
*   **Mittenpanel (BERÄTTELSEN):**
    *   **Ovanför:** Där berättaren beskriver vad som händer.
    *   **Nedanför:** Dina besluts-knappar och textrutan för att skriva vad du vill göra.
*   **Höger panel (DINA SAKER):** Inventarium och utrustning. Det digitala Diogenes paradis.

---

## 📜 SPELREGLER (Ja, det finns regler)

RoleMIAster använder ett klassiskt och robust d100 (hundra-sidig tärning) system.

### 1. Dina Attribut (Det som definierar dig)
De genereras slumpmässigt, precis som i gamla bordsrollspel!

*   💪 **Styrka (STY):** För att slå hårt och lyfta stenar.
*   ❤️ **Konstitution (KON):** För att stå emot slag, sjukdomar och gifter.
*   🐘 **Storlek (STO):** Stor och tung, eller liten och smidig.
*   🏃 **Rörlighet (RÖ):** Smidighet, precision och att inte snubbla på dina egna fötter.
*   🧠 **Intelligens (INT):** Lära sig, minnas och lösa pussel.
*   🔮 **Uthållighet (UTH):** Din själ, ditt mod, viljestyrka och magi.
*   😎 **Karism (KAR):** Ledarskap, attraktionskraft och förmågan att lura folk.

### 2. Snabb Matematik (Härledda egenskaper)
*   **Liv (LV):** `(KON + STO) / 2`. Om det når 0... ja, du vet. DÖD.
*   **Mana (MN):** Lika med din UTH. Ingen mana, inga knep. (En trollkarl utan mana är bara en snubbe i en rock som cosplayar).
*   **Action Points (AP):** `(INT + RÖ) / 2`. Bestämmer din initiativ. Den som slår först slår två gånger.

### 3. Dina Förmågor
Börjar med ett basvärde (t.ex. Smyga = RÖ + INT) och förbättras genom att användas. Det är i procent (%).

### 4. Lösning av Handlingar (Tärningen)
När du försöker göra något riskabelt (klättra, ljuga, attackera...), kommer AI:n att be dig slå.
Spelet kastar en osynlig **d100**. **(Kom ihåg: Tärningarna hatar dig. Det är personligt).**

*   **Ditt Mål:** Få **MINDRE ÄN ELLER LIKA MED** din förmåga.
    *   *Exempel:* Du har 45% i Klättring.
    *   Du slår en 30: ✅ **Framgång**. Du klättrar som en apa.
    *   Du slår en 80: ❌ **Misslyckande**. Du ramlar och slår dig.
    *   Du slår en 01-05: ✨ **KRITISKT!** Du utför en episk parkour med en volt.
    *   Du slår en 99-100: 💀 **SKITSLAG!** Dina byxor ramlar ner mitt i klättringen och du faller pladask.

---

## 💡 TIPS FÖR ATT INTE DÖ (SNABBT)

*   **✍️ Var Beskrivande:** Skriv inte bara "jag attackerar". Skriv: *"Jag försöker undvika hans yxa genom att rulla på golvet och hugger min dolk i hans ankel."* AI:n kommer att belöna dig.
*   **🧪 Experimentera:** Du är inte begränsad till knapparna. Skriv galenskaper! AI:n kommer att improvisera.
*   **🎭 Rollspela:** Lev dig in i rollen. Läs beskrivningarna och agera som din karaktär skulle göra, inte som du skulle göra i pyjamas.

---

## ⚔️ STRID (Dags att slåss!)

När orden inte räcker till, är det dags för slagsmål. Strider är **taktiska** och fungerar i **Tick** (tid).

### 🕹️ Hur det fungerar:
*   **Ticks:** Varje handling kostar tid. Tunga vapen är långsamma (kostar många ticks). Dolkar är snabba.
*   **Din Hastighet:** Beror på dina Action Points (AP).

### Grundläggande Handlingar:
*   **🗡️ Attackera:** Slå med det du har draget.
*   **🛡️ Blockera:** Du går i försvarsställning. Minskar skada men kostar uthållighet.
*   **🏃 Fly:** För fegisar (eller kloka som vill leva).
*   **🏳️ Ge upp:** Om du ser att du inte vinner kan du be om nåd.
*   **✨ Magi / Cyberware:** Eld, laserstrålar, hackning...

### ⚠️ GULDREGER FÖR ÖVERLEVNAD
**DRA DITT VAPEN INNAN DU SLÅSS!**
Att dra vapnet mitt i striden kostar tid (Ticks). Om du blir tagen med svärdet i slidan kommer du att få stryk tills du inte känner igen dig själv medan du försöker dra det klumpigt. Eller ÄNNU VÄRRE!, OM DU HAR DINA VAPEN I RYMMEN ISTÄLLET FÖR I DESS UTRUSTNINGSPLATSER (Ursäkta ett ögonblick, jag måste plocka fram stridssvärdet ur ryggsäcken, jag vet att jag hade det här någonstans... Någonstans...) 🤦‍♂️
👉 Klicka på **etiketten för det utrustade vapnet** (höger panel) för att dra det. Det kommer att lysa grönt.

Att försöka flytta vapen under strid kostar tid (Ticks) och kan resultera i en överraskningsattack, dessutom är det mycket troligt att du förlorar din tur, att du missar på grund av nervositeten från yxan som närmar sig ditt ögonbryn, eller att du tappar det på golvet. (Kanske var det inte en bra idé att skapa en karaktär med ADHD)

---

## ✨ MAGI OCH CYBERNETIK

Beroende på om din värld är "Medeltida fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Förtrollningar
Är du en trollkarl? Du kan förtrolla din utrustning.
1.  **Lär dig:** Du behöver förtrollningen i din grimoire.
2.  **Kasta (Dra & Släpp):** Dra förtrollningen från din lista över föremålet i ditt inventarium.
3.  **Kostnad:** Att hålla en förtrollning aktiv **kostar Mana per tur**.
4.  **Varning:** Om du får slut på mana mitt i striden, blir flamsvärdet återigen ett rostigt järnstycke.

### 🦾 Cyberpunk: Implantat
Vill du ha ögon med zoom eller gorillaklor?
1.  Hitta en **Teknokirurg** (en NPC som tillhandahåller tjänster).
2.  Betala krediterna (ingenting är gratis i framtiden).
3.  **Humanitetskostnad:** Varje implantat tar en bit av din själ (**Mänsklighet**).
    *   Om du sätter in för många, kommer du att bli en **Cyberpsykopat** (en mördande brödrost på ben) och förlora kontrollen över din karaktär.

---

## 🛒 BUTIKER OCH TJÄNSTER

Prata med NPC:er för att handla.
*   **Förhandla:** Din **Handel**-förmåga (baserad på Karism) bestämmer priserna. Om du är ful eller otrevlig, kommer du att bli lurad.
*   **Sälja:** **Högerklicka** på ett föremål i ditt inventarium för att sälja det till handlaren.

---

## 🎒 INVENTARIEHANTERING (Tetris)

*   **Vikt:** Du har en lastgräns (Styrka + Storlek). Om du bär för mycket skräp, kommer du att gå långsamt och få straff (Diogenes är inte din vän).
*   **Paneler:**
    *   **Utrustning:** Det du har på dig.
    *   **Bälte:** Snabb åtkomst i strid (kostar mindre tid att använda drycker härifrån).
    *   **Ryggsäck:** Botten på säcken.
*   **Snabbanvändning:** Dra en dryck eller mat direkt över **ditt ansikte** (porträttet) för att konsumera den omedelbart.

---

## 🛠️ SLUTLIGA JUSTERINGAR

I menyn **Inställningar** kan du ändra allt:
*   **🌍 Språk:** AI:n kommer att översätta hela spelet och svaren i farten.
*   **👁️ Utseende:** Textstorlek och färger, så att du inte blir blind.
*   **🧠 AI-justeringar:** Byt modell, temperatur, etc.

---

## 🚧 Meddelande: Tidig Tillgång

RoleMIAster är under **aktiv utveckling**, som en gryta som kokar långsamt.
*   Du kan hitta buggar (eller "oväntade funktioner").
*   Jag lägger till nya saker varje vecka.
*   Din feedback är guld värd! Berätta vad du gillar och vad du gillar väldigt mycket.

Gå nu, slå initiativ och skapa din legend!

<!-- source_hash: 2511f352 -->