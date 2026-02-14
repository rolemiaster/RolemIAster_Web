# 🐉 Välkommen till RolemIAster!

Fatta tärningarna (eller musen) och gör dig redo för äventyr där den enda gränsen är din vridna fantasi! **RolemIAster** är ett oändligt rollspel drivet av Artificiell Intelligens som låter dig vara hjälten (eller skurken) i dina egna berättelser.

---

## ⚠️ JURIDISK ANSVARSFRISKRIVNING (Den tråkiga men nödvändiga delen)

**LÄS DETTA ANNARS DRABBAS DU AV TÄRNINGARNAS VREDE:**

1.  **🤖 Integrerad Lokal AI:** RolemIAster har en egen digital hjärna. Det fungerar **utan internet** och utan att du behöver röra något konstigt. Installera och spela!
2.  **☁️ Valfritt Moln:** Om du föredrar att slösa pengar på externa AI:er (OpenAI, Gemini...), är det upp till dig och ditt kreditkort. Kostnaderna står du för.
3.  **🎲 Generativt Kaos:** AI:n hittar på berättelsen allt eftersom. Om berättaren blir galen och säger att det regnar kor, titta inte på oss. Utvecklaren ansvarar inte för de galenskaper modellen genererar.
4.  **🏗️ Early Access:** Detta är under konstruktion. Om du hittar en bugg är det inte ett fel, det är en överrasknings-"feature"! (Skicka gärna feedback, det hjälper oss mycket).

---

## 🖥️ SYSTEMKRAV OCH DIGITALA HJÄRNOR (AI)

RolemIAster drivs av **Lokal Artificiell Intelligens**. Det betyder att din PC gör grovjobbet med att tänka. Du behöver inte internet, men du behöver ett grafikkort som inte är från dinosauriernas tid. (Obs: Om det är kallt i ditt rum fungerar det här spelet som gratis uppvärmning).

### ⚙️ Begrepp för oinvigda

**VRAM (Videominne)** är bränslet för AI:n.
*   RolemIAster behöver "komma ihåg" **12 000 till 16 000 ord (tokens)** för att inte tappa tråden i berättelsen.
*   Om din GPU får slut på minne kommer spelet att gå långsammare än en snigel med astma.

---

### 📊 MODELLKATALOG (Välj ditt gift)

Hantera dina AI:er i **Inställningar → Integrerad Lokal AI → Hantera Modeller**.

#### 🏆 Qwen 2.5-familjen (Crème de la crème)

| Modell | Storlek | Minsta VRAM | Tier | Omdöme |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Praktikanten.** Gör jobbet, men be den inte skriva Shakespeare. Rör till det ibland. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DEN UTVALDE.** Balanserad, smart och snabb. Detta är den rekommenderade standardmodellen. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Professorn.** Rikt berättande, djup och mycket naturliga dialoger. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Gudsnivå.** Du behöver ett rymdskepp (RTX 3090/4090) för att driva detta. |

---

### 🎮 SNABBGUIDE FÖR VAL

| Ditt Grafikkort | VRAM | Rekommenderad Modell | Resultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Precis spelbart (Låg kontext) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Flyter på |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Flyger fram |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Den ideala upplevelsen |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Lyxigt |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximal kvalitet |

**💡 Proffstips:** Lämna alltid cirka **2GB VRAM ledigt** för operativsystemet, annars börjar Windows gråta och stänga ner saker.

---

### 🚨 HJÄLP! MIN DATOR ÄR LÅNGSAM! (VRAM-problem)

Om spelet tar längre tid på sig att svara än din crush på WhatsApp, har du förmodligen slut på VRAM.

**Symtom på att du varit lite för optimistisk:**
1.  **Modellen spiller över till RAM:** Datorn använder det vanliga minnet istället för grafikkortets. Resultat: EXTREM TRÖGHET.
2.  **Lätt överspill (1-2GB):** Tar 30-60 sekunder per svar.
3.  **Måttligt överspill (3-5GB):** 2-5 minuter. Du kan gå och hämta kaffe.
4.  **Allvarligt överspill:** 10-30 minuter. Ospelningsbart.

#### 🛡️ Nödprotokoll
Om det går dåligt, följ dessa steg i ordning:

1.  **📉 Sänk % VRAM:** Gå till Inställningar och sänk det till **85%**. Starta om och testa.
2.  **🧹 Städning:** Stäng webbläsaren med 40 öppna flikar. De äter upp ditt minne.
3.  **🛑 70%-gränsen:** Gå aldrig under **70%** tilldelat VRAM.
    *   *Varför?* För att AI:n behöver utrymme att "tänka" (KV-cachen). Om du ger den mindre än 70% blir den blank och ger felmeddelanden.
4.  **🔙 Taktisk reträtt:** Om inget fungerar, byt till en mindre modell (gå från 7B till 3B).

---

### ⚙️ AVANCERAD MODELLKONFIGURATION ("Maximalt Nörderi")

> **EXPERTLÄGE:** Om du är ett proffs och vill komma åt avancerade modellkonfigurationer (lägga till egna GGUF-modeller nedladdade från HuggingFace, justera lager, etc.), måste du starta spelet med kommandot: `--advanced`.

För dem som gillar att trycka på knappar i **Inställningar → Integrerad Lokal AI**:

| Alternativ | Funktion | Rekommendation |
|--------|---------|---------------|
| **GPU Layers** | Hur mycket av modellen som laddas i grafikkortet | **-1** (Betyder "ALLT". Rör ej om du inte vet vad du gör) |
| **Maximal Kontext** | AI:ns "korttidsminne" | **16384 - 32768** (Mindre än så och AI:n får minnesförlust) |
| **Temperatur** | Kreativitet vs Galenskap | **0.7 - 0.8** (Högre = galnare; Lägre = mer robotaktig) |
| **Historik-RAG** | Komma ihåg saker från för länge sedan | **Ja** (Oumbärligt för långa kampanjer) |
| **Cacha Embeddings** | Snabbar upp sökandet av minnen | **Ja** (Gör att det går snabbare) |

---

### 🔧 FELSÖKNING (Troubleshooting)

| Fummel | Lösning |
|-------|---------|
| **Långsam AI / Lagg** | Kontrollera att `GPU Layers` är -1. Stäng Chrome. Sänk `Contexto Máximo`. |
| **Minnesfel (OOM)** | Minska `Contexto Máximo` eller välj en mindre modell (3B). |
| **AI:n yrar / Hallucinerar** | Sänk `Temperatura` till 0.6. Om den fortfarande är galen, starta om applikationen. |

---

### 🌐 ALTERNATIVA LEVERANTÖRER (Endast Experter)

> **Obs:** Den lokala AI:n som följer med spelet räcker och blir över. Detta är bara för avancerade användare eller de modiga.

*   **Externa Lokala Motorer:**
    *   **Ollama / LM Studio:** Om du redan har dina egna nördiga modeller kan du använda dem.
*   **Moln-API:er (Betalt):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kräver internet och att du spenderar pengar.
    *   Konfigurera i: **Inställningar → AI → Lägg till Ny Leverantör**.

---

### 🌍 HUR SPELAR MAN? (Multiversum och Du)

När du öppnar spelet har du två vägar:

1.  **🆕 Nytt Äventyr**: Skapa din legend från noll. Spelet kommer be om **Namn, Yrke, Fysisk beskrivning, Psykologisk beskrivning och Bakgrund/Pretext** för din historia. Dessutom väljer du **Svårighetsgrad** och **Humorton** som styr kampanjen.
2.  **💾 Fortsätt Spel**: RolemIAster **sparar i realtid**. Här finns ingen "ladda om innan jag dog" eller någon återvändo. Varje beslut, varje fummel och varje skada bränns in i historien. Det är en **UTMANING**: gjort är gjort. Lev med konsekvenserna... eller dö med dem.

RolemIAster är inte en isolerad spelomgång; det är ett **Persistent Multiversum**.
*   **Oändliga Världar:** Skapa dina egna universum (**Medeltida Fantasy** eller **Cyberpunk**) med sin egen Lore.
*   **Oändliga Karaktärer:** Inom varje värld kan du ha hur många hjältar du vill.
*   **Delad Tidslinje:** Se upp! Det en karaktär gör påverkar de andras värld. AI:n är medveten om dina andra hjältar och kommer känna igen dem som invånare i världen.
*   **AI med "Sinnen" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerar som AI:ns "tipsare", och ger den minnen om världen, vem som följer med dig, var du är och vad som nyss hände för att berättelsen ska vara 100% sammanhängande.

### Gränssnittet (Din cockpit)

*   **Vänster Panel (DU):** Ditt Karaktärsblad. Liv, mana, färdigheter och hur snygg du är (Karisma).
*   **Mittenpanelen (BERÄTTELSEN):**
    *   **Överst:** Där berättaren beskriver vad som händer.
    *   **Nederst:** Dina beslutsknappar och textrutan för att skriva vad du vill göra.
*   **Höger Panel (DINA PRYLAR):** Inventarium och utrustning. Det digitala paradiset för samlare.

---

## 📜 SPELREGLER (Ja, det finns regler)

RolemIAster använder ett klassiskt och robust d100-system (hundrasidig tärning).

### 1. Dina Attribut (Det som definierar dig)
AI:n genererar dina attribut baserat på kontext, yrke och beskrivning som du angett. När de väl är genererade har du **10 EXTRA POÄNG** att fördela som du vill.
*   **Stegrande Kostnader:** Att höja ett attribut upp till 14 kostar 1 poäng. Från 15 till 16 kostar det 2 poäng. Från och med 17 kostar det 3 poäng! Tänk noga på var du lägger musklerna.

*   💪 **Styrka (STY):** Din rena fysiska kraft. Påverkar skada i närstrid och din bärförmåga.
*   ❤️ **Fysik (FYS):** Din tålighet. För att tåla stryk, sjukdomar och gifter.
*   🐘 **Storlek (STO):** Din kroppshydda. Stor och tung, eller liten och hal.
*   🏃 **Smidighet (SMI):** Rörlighet, pricksäkerhet och att inte snubbla på dina egna fötter.
*   🧠 **Intelligens (INT):** Lära sig, minnas och lösa pussel.
*   🔮 **Kraft (KRA):** Din själ, din tur, viljestyrka och din magiska reserv.
*   😎 **Karisma (KAR):** Ledarskap, attraktionskraft och förmåga att lura (eller förföra) folk.

### 2. Snabb Matte (Härledda Egenskaper)
Motorn beräknar dessa siffror automatiskt baserat på dina attribut:

*   🩸 **Liv (HP):** `CON * 10`. Om det når 0... tja, du vet. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Bränslet för dina magiska trick. Utan mana, inga trick. (En magiker utan mana är bara en kille i morgonrock som cosplaysar).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Din energi för att slåss och röra dig utan att dö på kuppen.
*   🧠 **Humanitet (HUM):** `(CON+POD) * 5`. (Endast i Cyberpunk: Mäter hur mycket människa du har kvar innan kablarna gör dig galen).
*   ⚔️ **Handlingspoäng (HP/AP):** `(INT + DES) / 2`. Bestämmer ditt Initiativ. Den som slår först, slår två gånger.

### 3. Dina Färdigheter
Börjar med ett basvärde (t.ex: Smyga = SMI + INT) och förbättras genom att användas. Det är en procentsats (%).

### 4. Lösa Handlingar (Tärningen)
När du försöker göra något riskabelt (klättra, ljuga, attackera...), kommer AI:n att be om ett tärningsslag. Spelet kastar en osynlig **d100**. **(Kom ihåg: Tärningarna hatar dig. Det är personligt).**

*   **Ditt Mål:** Få ett nummer **LÄGRE ÄN ELLER LIKA MED** din färdighetsnivå.
    *   *Exempel:* Du har 45% i Klättra.
    *   Du slår 30: ✅ **Lyckat**. Du klättrar upp som en apa.
    *   Du slår 80: ❌ **Misslyckat**. Du åker på en smäll.
    *   **Kritiskt:** Slå lägre än eller lika med **1/5 av din färdighet** (eller 01). Episkt! Du gör en extraordinär parkour med volt.
    *   **Fummel:** En **99 eller 100**. Tärningarna har bestämt att idag inte är din dag. Byxorna ramlar ner halvvägs och du faller pladask.

---

## 💡 TIPS FÖR ATT INTE DÖ (SNABBT)

*   **✍️ Var Beskrivande:** Skriv inte bara "jag attackerar". Skriv: *"Jag försöker undvika hans yxa genom att rulla längs marken och hugger min dolk i hans vrist"*. AI:n kommer att belöna dig.
*   **🧪 Experimentera:** Du är inte begränsad till knapparna. Skriv galna saker! AI:n improviserar.
*   **🎭 Rollspela:** Gå in i rollen. Läs beskrivningarna och agera som din karaktär skulle göra, inte som du skulle göra i pyjamas.

---

## ⚔️ STRID (Till vapen!)

När orden sviker är det dags för stryk. Striden är **taktisk** och fungerar via **Ticks** (tid).

### 🕹️ Hur det fungerar:
*   **Ticks:** Varje handling kostar tid. Tunga vapen är långsamma (kostar många ticks). Dolkar är snabba.
*   **Din Hastighet:** Beror på dina Handlingspoäng (AP).

### Grundläggande Handlingar:
*   **🗡️ Attackera:** Slå till med vad du än har draget.
*   **🛡️ Blockera:** Du intar försvarsställning. Minskar skada men kostar Stamina.
*   **🏃 Fly:** För fegisar (eller för visa som vill leva).
*   **🏳️ Ge upp:** Om du ser att du inte vinner kan du be om nåd.
*   **✨ Magi / Cyberware:** Eld, laserstrålar, hackning...

### 💬 Handlingar via Fritext (NYTT!)
Gillar du inte knapparna? Skriv vad du vill göra som om du pratade med en spelledare av kött och blod!
*   **Exempel:** *"Kasta eldklot på goblinen"*, *"Dra mitt runsvärd"*, *"Använd dryck på mig själv"*.
*   **Scenregissör:** Striden får nu liv. AI:n genererar miljöhändelser och reaktioner som berikar berättelsen: bjälkar som faller, fiender som backar, facklor som ramlar. Slagfältet är inte längre statiskt!
*   **Om AI:n inte förstår:** Den ber dig formulera om. Din tur går INTE förlorad!
*   **⚠️ Begränsning:** Att flytta föremål mellan slots (utrusta från ryggsäck, ladda ammunition) görs med **Drag & Drop** i gränssnittet, inte via text.

### ⚠️ GYLLENE REGELN FÖR ÖVERLEVNAD
**DRA VAPEN INNAN DU SLÅSS!**
Att dra vapnet mitt i striden drar tid (Ticks). Om de kommer på dig med svärdet i skidan kommer de att slå dig gul och blå medan du fumligt försöker få fram det. ELLER ÄNNU VÄRRE!, OM DU HAR DINA VAPEN I RYGGSÄCKEN ISTÄLLET FÖR I DESS UTRUSTNINGSPLATS (Ursäkta ett ögonblick, jag måste ta fram storsvärdet ur ryggsäcken, jag vet att jag hade det här någonstans... någonstans...) 🤦‍♂️
👉 **Klicka på etiketten för det utrustade vapnet** (höger panel) för att dra det. Det kommer att lysa grönt.

Att försöka flytta vapen i strid drar tid (Ticks) och kan resultera i en överraskningsattack, dessutom är det mycket troligt att du förlorar turen, missar på grund av nerverna över yxan som närmar sig din panna eller att du tappar det i marken. (Kanske var det ingen bra idé att skapa en karaktär med ADHD).

---

## ✨ MAGI OCH CYBERNETIK

Beroende på om din värld är "Medeltida Fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Förtrollningar
Är du trollkarl? Du kan förtrolla din utrustning.
1.  **Lär dig:** Du behöver besvärjelsen i din grimoar.
2.  **Kasta (Drag & Drop):** Dra besvärjelsen från din lista till föremålet i ditt inventarium.
3.  **Kostnad:** Att hålla en förtrollning aktiv **kostar Mana per tur**.
4.  **Varning:** Om du får slut på mana mitt i striden blir eldsvärdet återigen en bit rostigt järn.

### 🦾 Cyberpunk: Implantat
Vill du ha ögon med zoom eller gorillaarmar?
1.  Hitta en **Teknorkirurg** (NPC som erbjuder tjänster).
2.  Betala krediterna (inget är gratis i framtiden).
3.  **Kostnad i Humanitet:** Varje implantat tar en bit av din själ (**Humanitet**).
    *   Om du sätter in för många drabbas du av **Cyberpsykos** (en mördar-brödrost med ben) och du förlorar kontrollen över din karaktär.

---

## 🛒 BUTIKER OCH TJÄNSTER (SIS)

Prata med NPC:er för att handla.
*   **AI Föreslår, Du Bestämmer:** När du pratar med en handlare eller helare kommer AI:n att föreslå deras tjänster (reparera, sälja, läka), men en knapp för **"Visa Tjänster"** dyker upp så att du bestämmer när du vill gå in i transaktionsläget.
*   **Prutning:** Din färdighet i **Handel** (baserat på Karisma) avgör priserna. Om du är ful eller otrevlig kommer du bli lurad.
*   **Sälja:** **Högerklicka** på ett föremål i ditt inventarium för att sälja det till handlaren eller dra det över honom/henne.

---

## 🎒 LAGERHANTERING (Tetris)

*   **Vikt:** Du har en lastgräns (Styrka + Storlek). Om du bär på för mycket skräp blir du långsam och får straff (Diogenes är inte din vän).
*   **Paneler:**
    *   **Utrustning:** Det du har på dig.
    *   **Bälte:** Snabb åtkomst i strid (tar mindre tid att använda drycker härifrån).
    *   **Ryggsäck:** Botten av säcken.
*   **Smidig användning:** Dra en dryck eller mat direkt över **ditt ansikte** (porträttet) för att konsumera det direkt. Du kan också använda snabbmenyn (högerklick -> Använd).

---

## 🛠️ SLUTLIGA INSTÄLLNINGAR

I menyn **Inställningar** kan du pilla på allt:
*   **🌍 Språk:** AI:n översätter hela spelet och svaren åt dig i farten. Polyglott-läge aktiverat.
*   **👁️ Utseende:** Textstorlek och färger, så att du inte blir blind. Neonkanter och mjuka skuggor för total inlevelse.
*   **🧠 AI-inställningar:** Byt modell, temperatur, etc. (Kom ihåg vad vi gick igenom i början av manualen om flaggan `--advanced` om du är en av dem som vill pilla på allt).

---

## 🎭 SVÅRIGHETSGRAD OCH HUMOR (Skräddarsy ditt lidande)

Innan du börjar, kom ihåg att AI:n inte bara berättar, utan **anpassar världen** efter dina preferenser. Dessa parametrar väljs när världen skapas och är permanenta för den världen:

*   **🎮 Svårighetsgrad (Hanteras av AI):** Det är inte en enkel skademultiplikator. Spelet säger till AI:n: "Hörru, svårighetsgraden är denna, agera därefter".
    *   **Lätt:** Du kommer aldrig att dö (eller så är det nästan omöjligt), situationerna är enklare, priserna är billigare och fienderna är klumpigare. AI:n resonerar kring varje scen så att din väg blir en dans på rosor.
    *   **Normal:** Standardbalansen.
    *   **Utmaning:** AI:n kommer att vara skoningslös, priserna orimliga och varje misstag kan bli ditt sista.

*   **🃏 Humorton:** Definierar hur AI:n pratar med dig och vilken typ av händelser som inträffar. Även om varje modell har sitt eget sätt att tolka begreppet "humor", kommer AI:n att försöka anpassa sig till det du väljer... eller inte:
    *   **Seriös:** Ett episkt, mörkt och formellt berättande.
    *   **Sarkastisk:** AI:n kommer att skratta åt dina misslyckanden, kasta pikar konstant och använda en ironisk ton.
    *   **Vansinnig:** Gör dig redo för det absurda. Flygande kor, surrealistiska situationer och totalt kaos hanterat av AI:ns mest vridna logik.

---

## 🚧 Varning: Early Access

RolemIAster är under **aktiv utveckling** och kokas på låg värme.
*   Du kan hitta buggar (eller "oväntade funktioner").
*   Jag lägger till nya saker varje vecka.
*   Din feedback är guld värd! Berätta vad du gillar och vad du gillar väldigt mycket. (Om du inte gillar något, säg det också, men med kärlek).

Gå nu, slå initiativ och skapa din legend!

<!-- source_hash: f3494f05 -->