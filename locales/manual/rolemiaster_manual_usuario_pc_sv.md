# 🐉 Välkommen till RolemIAster!

Ta dina tärningar (eller din mus) och förbered dig på att uppleva äventyr där den enda gränsen är hur skruvad din fantasi är! **RolemIAster** är ett oändligt rollspel drivet av artificiell intelligens som låter dig vara hjälten (eller skurken) i dina egna berättelser.

---

## ⚠️ JURIDISKT MEDDELANDE (Den tråkiga men nödvändiga delen)

**LÄS DETTA ELLER DRÄP DIG MED TÄRNINGARNAS VREDE:**

1.  **🤖 Integrerad Lokal AI:** RolemIAster har sin egen digitala hjärna. Den fungerar **utan internet** och utan att du behöver röra vid något konstigt. Installera och spela!
2.  **☁️ Valfri molntjänst:** Om du föredrar att spendera pengar på externa AI:er (OpenAI, Gemini...), så är det upp till dig och ditt kreditkort. Kostnaderna är dina.
3.  **🎲 Generativt Kaos:** AI:n hittar på historien i farten. Om berättaren blir galen och säger att det regnar kor, titta inte på oss. Utvecklaren ansvarar inte för det galenskap som modellen genererar.
4.  **🏗️ Early Access:** Detta är under uppbyggnad. Om du hittar en bugg är det inte ett fel, det är en överrasknings-"funktion"! (Skicka gärna feedback, det hjälper oss mycket).

---

## 🖥️ SYSTEMKRAV OCH DIGITALA HJÄRNOR (AI)

RolemIAster fungerar med **lokal artificiell intelligens**. Det betyder att din dator kommer att göra det tunga jobbet med att tänka. Du behöver inte internet, men du behöver ett grafikkort som inte är från dinosauriernas tid. (Notera: Om det är kallt i ditt rum fungerar det här spelet som gratis uppvärmning).

### ⚙️ Begrepp för nybörjare

**VRAM (Grafikminne)** är AI:ns bensin.
*   RolemIAster behöver "komma ihåg" **12 000 till 16 000 ord (tokens)** för att inte tappa tråden i berättelsen.
*   Om din GPU får slut på minne kommer spelet att gå långsammare än en snigel med astma.

---

### 📊 MODELLKATALOG (Välj ditt gift)

Hantera dina AI:er i **Inställningar → Integrerad Lokal AI → Hantera modeller**.

#### 🏆 Qwen 3.5-familjen — Specifikt tränade för RolemIAster

Dessa modeller har tränats med **övervakad finjustering (SFT)** för att bemästra spelets narrativa regler. De är inte generiska modeller: de känner till RolemIAsters JSON-kontrakt, NPC:er, inventarier och strid utantill.

| Modell       | Storlek | Minst VRAM | Nivå | Dom                   |
|--------------|---------|------------|------|-----------------------|
| **Qwen3.5-2B** | ~1.5GB  | **3GB**    | B    | ⚡ **Snabbheten.** Snabbast av alla. Idealisk för grundläggande GPU:er eller för att spela utan dedikerad GPU. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**    | A    | ✅ **BALANSEN.** Optimal hastighet och kvalitet. Rekommenderad standardmodell för de flesta spelare. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**    | S    | 🌟 **Berättaren.** Rik berättelse och överlägsen koherens. För dem som har en RTX 3070 eller bättre. |

---

### 🎮 SNABBVALSGUIDE

| Ditt grafikkort | VRAM  | Rekommenderad modell | Resultat               |
|-------------------|-------|----------------------|------------------------|
| GTX 1050/1060 / Ingen GPU | 2-4GB | **Qwen3.5-2B**       | 🆗 Knappt men spelbart |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B**       | ✅ Mycket bra upplevelse |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B**       | 🚀 Snabb och exakt    |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B**       | 🌟 Den ideala upplevelsen |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**       | 👑 Maximal kvalitet, ultrablixtsnabba svar |

**💡 Proffstips:** Lämna alltid cirka **2 GB VRAM ledigt** för operativsystemet, annars börjar Windows gråta och stänga ner saker.

---

### 🚨 HJÄLP! MIN DATOR ÄR LÅNGSAM! (VRAM-problem)

Om spelet tar längre tid att svara än din förälskelse på WhatsApp, har du förmodligen slut på VRAM.

**Symptom på att du har varit för kaxig:**
1.  **Modellen tippas över till RAM:** Datorn använder vanligt minne istället för grafikkortets. Resultat: EXTREMT LÅNGSAMT.
2.  **Lätt överflöd (1-2GB):** Tar 30-60 sekunder per svar.
3.  **Måttligt överflöd (3-5GB):** 2-5 minuter. Du kan gå och hämta en kaffe.
4.  **Svårt överflöd:** 10-30 minuter. Osspelbart.

#### 🛡️ Nödprotokoll
Om det går dåligt, följ dessa steg i ordning:

1.  **📉 Minska VRAM %:** Gå till Inställningar och sänk det till **85%**. Starta om och prova.
2.  **🧹 Rengöring:** Stäng den där webbläsaren med 40 öppna flikar. De äter upp ditt minne.
3.  **🛑 70%-gränsen:** Sänk aldrig under **70%** av tilldelad VRAM.
    *   *Varför?* För AI:n behöver utrymme för att "tänka" (KV-cachen). Om du ger den mindre än 70% blir den tom och ger fel.
4.  **🔙 Taktiskt tillbakadragande:** Om inget fungerar, byt till en mindre modell (gå från 9B till 4B, eller från 4B till 2B).

---

### ⚙️ AVANCERAD MODELLINSTÄLLNING ("Maximalt nördigt")

> **EXPERT LÄGE:** Om du är proffs och vill komma åt avancerad modellkonfiguration (lägga till egna GGUF-modeller nedladdade från HuggingFace, ändra lager, etc.), måste du starta spelet med kommandot: `--advanced`.

För de som gillar att röra på knappar i **Inställningar → Integrerad Lokal AI**:

| Alternativ          | Funktion                                         | Rekommendation                    |
|---------------------|--------------------------------------------------|-----------------------------------|
| **GPU Layers**      | Hur mycket av modellen som laddas på grafikkortet | **-1** (Betyder "ALLT". Rör det inte om du inte vet vad du gör) |
| **Maximal kontext** | AI:ns "korttidsminne"                             | **16384 - 32768** (Mindre än så har AI:n minnesförlust) |
| **Temperatur**      | Kreativitet kontra galenskap                      | **0.7 - 0.8** (Högre = galnare; Lägre = mer robotaktigt) |
| **Historik RAG**    | Komma ihåg saker från länge sedan                | **Ja** (Oumbärligt för långa kampanjer) |
| **Cache Embeddings**| Snabbar upp minnessökningen                      | **Ja** (Gör att det går snabbare)  |

---

### 🔧 FELSÖKNING (Troubleshooting)

| Problem          | Lösning                                                    |
|------------------|------------------------------------------------------------|
| **Långsam AI / Lag** | Kontrollera att `GPU Layers` är -1. Stäng Chrome. Sänk `Contexto Máximo`. |
| **Minnesfel (OOM)** | Minska `Contexto Máximo` eller välj en mindre modell (3B). |
| **AI:n babblar / Hallucinerar** | Sänk `Temperatura` till 0.6. Om den fortfarande är galen, starta om programmet. |

---

### 🌐 ALTERNATIVA LEVERANTÖRER (Endast experter)

> **Notering:** Den lokala AI som spelet medför räcker och blir över. Detta är endast för avancerade eller modiga användare.

*   **Lokala externa motorer:**
    *   **Ollama / LM Studio:** Om du redan har egna nördigade modeller kan du använda dem.
*   **Moln-API:er (betalda):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kräver internet och att du öppnar plånboken.
    *   Konfigurera i: **Inställningar → AI → Lägg till ny leverantör**.

---

### 🌍 HUR SPELAR MAN? (Multiversumet och du)

När du öppnar spelet har du två vägar:

1.  **🆕 Nytt äventyr**: Skapa din egen legend från grunden. Spelet kommer att be om **Namn, Yrke, Fysisk beskrivning, Psykologisk beskrivning och Bakgrund/Pretext** för din historia. Dessutom väljer du **Svårighetsgrad** och **Humoristisk ton** som styr kampanjen.
2.  **💾 Fortsätt spel**: RolemIAster **sparar i realtid**. Här finns inget "ladda före döden" eller återvändo. Varje beslut, varje misslyckande och varje skada etsas in i historien. Det är en **UTMANING**: det du gör är gjort. Lev med konsekvenserna... eller dö med dem.

RolemIAster är inte en isolerad spelomgång; det är ett **Persistent Multiversum**.
*   **Oändliga världar:** Skapa dina egna universum (**Medeltida fantasy** eller **Cyberpunk**) med sitt eget "Lore".
*   **Oändliga karaktärer:** Inom varje värld kan du ha så många hjältar du vill.
*   **Delad tidslinje:** Obs! Vad en karaktär gör påverkar andras värld. AI:n är medveten om dina andra hjältar och kommer att känna igen dem som invånare i världen.
*   **AI med "sinnen" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerar som AI:ns "tjallare", vilket ger den minnen om världen, vem som följer med dig, var du befinner dig och vad som precis hände för att historien ska vara 100% sammanhängande.

### Gränssnittet (Din kontrollhytt)

*   **Vänster panel (DU):** Ditt karaktärskort. Liv, mana, färdigheter och hur snygg du är (Karism).
*   **Mittenpanel (HISTORIEN):**
    *   **Ovan:** Där berättaren berättar vad som händer.
    *   **Nedan:** Dina beslutsknappar och textfältet för att skriva vad du vill göra.
*   **Höger panel (DINA SAKER):** Inventarier och utrustning. Ett paradis för digitala samlare.

---

## 📜 SPELREGLER (Ja, det finns regler)

RolemIAster använder ett klassiskt och robust d100-system (hundrasidig tärning).

### 1. Dina Attribut (Vad som definierar dig)
AI:n genererar dina attribut baserat på sammanhang, yrke och beskrivning som du har angett. När de har genererats har du **10 EXTRA POÄNG** att fördela som du vill.
*   **Stegvisa kostnader:** Att höja ett attribut upp till 14 kostar 1 poäng. Från 15 till 16 kostar det 2 poäng. Från 17 kostar det 3 poäng! Tänk noga på var du lägger musklerna.

*   💪 **Styrka (STY):** Din rena fysiska kraft. Påverkar närstridsskador och din bärförmåga.
*   ❤️ **Kondition (KON):** Din uthållighet. För att klara slag, sjukdomar och gifter.
*   🐘 **Storlek (STO):** Din kroppsmassa. Stor och tung, eller liten och smidig.
*   🏃 **Smidighet (SMI):** Rörlighet, precision och att inte snubbla på dina egna fötter.
*   🧠 **Intelligens (INT):** Att lära sig, komma ihåg och lösa pussel.
*   🔮 **Kraft (KRA):** Din själ, ditt mod, din viljestyrka och din magiska reserv.
*   😎 **Karism (KAR):** Ledarskap, attraktion och förmåga att lura (eller förföra) folk.

### 2. Snabba Matematik (Härledda egenskaper)
Motorn beräknar dessa siffror automatiskt baserat på dina attribut:

*   🩸 **Liv (LP):** `CON * 10`. Om det når 0... ja, du vet. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Bränslet för dina magiska trick. Ingen mana, inga trick. (En trollkarl utan mana är bara en typ i mantel som cosplayar).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Din energi för att slåss och röra dig utan att dö i processen.
*   🧠 **Mänsklighet (MÄN):** `(CON+POD) * 5`. (Endast i Cyberpunk: Mäter hur mycket människa du har kvar innan kablarna gör dig galen).
*   ⚔️ **Actionpoäng (AP):** `(INT + DES) / 2`. Bestämmer din initiativ. Den som slår först, slår två gånger.

### 3. Dina Färdigheter
Börjar med ett basvärde (t.ex. Smyga = SMI + INT) och förbättras genom att användas. Det är en procentuell siffra (%).

### 4. Lösa Handlingar (Tärningen)
När du försöker göra något riskabelt (klättra, ljuga, attackera...), kommer AI:n att be om en kast. Spelet kastar en osynlig **d100**. **(Kom ihåg: Tärningarna hatar dig. Det är personligt).**

*   **Ditt mål:** Få ett nummer **LIKA MED ELLER MINDRE ÄN** din färdighetsnivå.
    *   *Exempel:* Du har 45% i Klättring.
    *   Du får en 30: ✅ **Framgång**. Du klättrar som en apa.
    *   Du får en 80: ❌ **Misslyckande**. Du slår dig rejält.
    *   **Kritisk:** Att få lika med eller mindre än **1/5 av din färdighet** (eller en 01). Episkt! Du utför en extraordinär parkour med volt.
    *   **Miss:** En **99 eller 100**. Tärningarna har bestämt att idag är inte din dag. Du tappar byxorna halvvägs och ramlar på ansiktet.

---

## 💡 TIPS FÖR ATT INTE DÖ (SNABBT)

*   **✍️ Var beskrivande:** Skriv inte bara "jag attackerar". Skriv: *"Jag försöker undvika hans yxa genom att rulla på marken och stöter min dolk i hans fotled."* AI:n kommer att belöna dig.
*   **🧪 Experimentera:** Du är inte begränsad till knapparna. Skriv galenskaper! AI:n kommer att improvisera.
*   **🎭 Rolla:** Gå in i rollen. Läs beskrivningarna och agera som din karaktär skulle göra, inte som du skulle göra i pyjamas.

---

## ⚔️ STRIDEN (Till vapen!)

När orden inte räcker till, kommer slagens tid. Strid är **taktisk** och fungerar i **ticks** (tid).

### 🕹️ Hur det fungerar:
*   **Ticks:** Varje handling kostar tid. Tunga vapen är långsamma (kostar många ticks). Dolkar är snabba.
*   **Din hastighet:** Beror på dina Actionpoäng (AP).

### Grundläggande handlingar:
*   **🗡️ Attackera:** Slå med vad du har dragit.
*   **🛡️ Blockera:** Du går i defensiv. Minskar skada men kostar Stamina.
*   **🏃 Fly:** För fegisar (eller för kloka som vill leva).
*   **🏳️ Ge upp:** Om du ser att du inte vinner kan du be om nåd.
*   **✨ Magi / Cyberware:** Eld, laserstrålar, hackningar...

### 💬 Fri text-handlingar (NYTT!)
Gillar du inte knapparna? Skriv vad du vill göra som om du pratade med en levande Spelledare!
*   **Exempel:** *"Kasta eldboll på goblinen"*, *"Dra mitt runsvärd"*, *"Använd potion på mig"*.
*   **Scenregissör:** Striden får nu liv. AI:n genererar miljömässiga händelser och reaktioner som berikar berättelsen: fallande balkar, reträtterande fiender, fallande facklor! Stridsfältet är inte längre statiskt!
*   **Om AI:n inte förstår:** Den kommer att be dig omformulera. Din tur går INTE förlorad!
*   **⚠️ Begränsning:** Att flytta objekt mellan platser (utrusta från ryggsäck, ladda ammunition) görs med **Dra och Släpp** i gränssnittet, inte via text.

### ⚠️ GYLLENE ÖVERLEVNADSREGLEN
**DRA VAPEN INNAN DU SLÅSS!**
Att dra vapnet mitt i striden kostar tid (Ticks). Om du blir överraskad med svärdet i skidan, kommer du att få stryk tills du inte känner igen dig själv medan du klumpigt försöker dra det. Eller ÄNNU VÄRRE!, OM DU HAR DINA VAPEN I RYGGSECKEN ISTÄLLET FÖR I UTTRUSTNINGSPLATSERNA (Ursäkta ett ögonblick, jag måste dra mitt långsvärd ur ryggsäcken, jag vet att jag hade det här någonstans... någonstans...) 🤦‍♂️
👉 Klicka på **etiketten för det utrustade vapnet** (höger panel) för att dra det. Det kommer att lysa grönt.

Att försöka flytta vapen i strid kostar tid (Ticks) och kan resultera i ett överraskningsangrepp, dessutom är det mycket troligt att du förlorar din tur, missar på grund av nerverna från yxan som närmar sig din tinning eller att du tappar det på marken. (Kanske var det inte en bra idé att skapa en karaktär med ADHD)

---

## ✨ MAGI OCH CYBERNETIK

Beroende på om din värld är "Medeltida fantasy" eller "Cyberpunk":

### 🧙‍♂️ Fantasy: Förtrollningar
Är du en trollkarl? Du kan förtrolla din utrustning.
1.  **Lär dig:** Du behöver besvärjelsen i din grimoire.
2.  **Kasta (Dra och Släpp):** Dra besvärjelsen från din lista över föremålet i ditt inventarium.
3.  **Kostnad:** Att behålla en aktiv förtrollning **kostar Mana per tur**.
4.  **Varning:** Om du får slut på mana mitt i striden blir ditt elsvärd bara en rostig bit järn igen.

### 🦾 Cyberpunk: Implantat
Vill du ha ögon med zoom eller gorillarmar?
1.  Hitta en **Teknokirurg** (NPC som utför tjänster).
2.  Betala krediter (ingenting är gratis i framtiden).
3.  **Mänsklighetskostnad:** Varje implantat kostar dig en bit av din själ (**Mänsklighet**).
    *   Om du installerar för många blir du en **Cyberpsykos** (en mördande brödrost med ben) och förlorar kontrollen över din karaktär.

---

## 🛒 BUTIKER OCH TJÄNSTER (SIS)

Prata med NPC:er för att handla.
*   **AI föreslår, du bestämmer:** När du pratar med en köpman eller helare kommer AI:n att föreslå deras tjänster (reparation, försäljning, helande), men en **"Visa Tjänster"-knapp** kommer att dyka upp så att du kan bestämma när du vill gå in i transaktionsläget.
*   **Förhandling:** Din färdighet **Handel** (baserad på Karism) bestämmer priserna. Om du är ful eller otrevlig kommer du att bli lurad.
*   **Sälj:** **Högerklicka** på ett föremål i ditt inventarium för att sälja det till handlaren eller dra det över honom.

---

## 🎒 INVENTARIEHANTERING (Tetris)

*   **Vikt:** Du har en lastgräns (Styrka + Storlek). Om du bär för mycket skrot kommer du att vara långsam och få straff (Samlare är inte din vän).
*   **Paneler:**
    *   **Utrustning:** Vad du bär.
    *   **Bälte:** Snabb åtkomst i strid (kostar mindre tid att använda potions härifrån).
    *   **Ryggsäck:** Botten på säcken.
*   **Flytande användning:** Dra en potion eller mat direkt över **ditt ansikte** (porträttet) för att konsumera den omedelbart. Du kan också använda kontextmenyn (högerklick -> Använd).

---

## 🛠️ SLUTLIGA JUSTERINGAR

I menyn **Inställningar** kan du justera allt:
*   **🌍 Språk:** AI:n kommer att översätta hela spelet och svaren i farten. Flerspråkighetsläge aktiverat.
*   **👁️ Utseende:** Textstorlek och färger, för att inte bli blind. Neonskal och mjuka skuggor för total inlevelse.
*   **🧠 AI-inställningar:** Byt modell, temperatur, etc. (Kom ihåg vad vi sett i början av manualen om flaggan `--advanced` om du är en av dem som vill röra på allt).

---

## 🎭 SVÅRIGHET OCH HUMOR (Anpassa ditt lidande)

Innan du börjar, kom ihåg att AI:n inte bara berättar, utan också **anpassar världen** enligt dina preferenser. Dessa parametrar väljs när världen skapas och är permanenta för den världen:

*   **🎮 Svårighetsgrad (Hanterad av AI):** Det är inte en enkel skademultiplikator. Spelet säger till AI:n: "Hej, svårighetsgraden är denna, agera därefter".
    *   **Lätt:** Du kommer aldrig att dö (eller det kommer att vara nästan omöjligt), situationerna är enklare, priserna är billigare och fienderna är klumpigare. AI:n kommer att resonera varje scen för att göra din väg till en rosengång.
    *   **Normal:** Standardbalans.
    *   **Utmaning:** AI:n kommer att vara obeveklig, priserna prohibitiva och varje misstag kan vara det sista.

*   **🃏 Humorisktisk ton:** Bestämmer hur AI:n pratar med dig och vilken typ av händelser som inträffar. Även om varje modell har sitt eget sätt att tolka konceptet "humor", kommer AI:n att försöka anpassa sig till vad du väljer... eller inte:
    *   **Seriös:** En episk, mörk och formell berättelse.
    *   **Sarkastisk:** AI:n kommer att skratta åt dina misslyckanden, kasta ständiga pikar åt dig och använda en ironisk ton.
    *   **Delirisk:** Förbered dig på det absurda. Flygande kor, surrealistiska situationer och totalt kaos hanterat av AI:ns mest vridna logik.

---

## 🚧 Meddelande: Early Access

RolemIAster är under **aktiv utveckling**, kokas långsamt.
*   Du kan stöta på buggar (eller "oväntade funktioner").
*   Jag lägger till nya saker varje vecka.
*   Din feedback är guld värd! Berätta vad du gillar och vad du gillar väldigt mycket. (Om du inte gillar något, berätta det också, men med kärlek).

Nu gå, slå initiativ och skapa din legend!

<!-- source_hash: 9af75cff -->