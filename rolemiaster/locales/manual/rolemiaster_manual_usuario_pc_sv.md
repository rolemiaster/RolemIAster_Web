# 🐉 Välkommen till RolemIAster!

Greppa dina tärningar (eller din mus) och gör dig redo att uppleva äventyr där den enda gränsen är hur vridet ditt sinne är! **RolemIAster** är ett oändligt rollspel drivet av artificiell intelligens som låter dig vara hjälten (eller skurken) i dina egna berättelser.

---

## ⚠️ JURIDISKT MEDDELANDE (Den tråkiga men nödvändiga delen)

**LÄS DETTA ELLER LID UNDER TÄRNINGARNAS VREDE:**

1.  **🤖 Inbyggd Lokal AI:** RolemIAster har sitt eget digitala hjärnkontor. Det fungerar **utan internet** och utan att du behöver röra vid något konstigt. Installera och spela!
2.  **☁️ Valfri molnlösning:** Om du föredrar att spendera pengar på externa AI (OpenAI, Gemini...), är det ditt eget beslut med ditt kreditkort. Kostnaderna är ditt ansvar.
3.  **🎲 Generativt Kaos:** AI:n hittar på berättelsen i farten. Om spelledaren blir galen och säger att det regnar kor, titta inte på oss. Utvecklaren är inte ansvarig för galenskaperna som modellen genererar.
4.  **🏗️ Tidig Åtkomst:** Det här är under utveckling. Om du hittar en bugg är det inte ett fel, det är en överrasknings-"funktion"! (Skicka oss feedback, snälla, det hjälper oss mycket).

---

## 🖥️ SYSTEMKRAV OCH DIGITALA HJÄRNOR (AI)

RolemIAster fungerar med **Lokal Artificiell Intelligens**. Det betyder att din dator gör det tunga tankearbetet. Du behöver inget internet, men du behöver ett grafikkort som inte är från dinosauriernas tid. (Notera: Om det är kallt i ditt rum fungerar det här spelet som gratis uppvärmning).

### ⚙️ Begrepp för nybörjare

**VRAM (Video-RAM)** är AI:ns bensin.
*   Tack vare **TurboQuant** kan RolemIAster nu minnas **över 100 000 ord (tokens)** — nästan tre gånger mer än tidigare — utan att krascha ditt grafikkort.
*   Om din GPU får slut på minne kommer spelet att gå långsammare än en snigel med astma.

---

### 📊 MODELLKATALOG (Välj ditt gift)

Hantera dina AI i **Inställningar → Inbyggd Lokal AI → Hantera Modeller**.

#### 🏆 Qwen 3.5-familjen — Specifikt tränade för RolemIAster

Dessa modeller har tränats med **övervakat finjustering (SFT)** för att bemästra spelets berättarregler. Det är inga generiska modeller: de kan sina RolemIAster JSON-kontrakt, NPC:er, inventarier och strider utantill.

| Modell        | Storlek | Minsta VRAM | Nivå | Dom             |
|---------------|---------|-------------|------|-----------------|
| **Qwen3.5-2B**| ~1.5GB  | **3GB**     | B    | ⚡ **Snabbisen.** Snabbast av alla. Idealisk för grundläggande GPU:er eller för att spela utan dedikerad GPU. |
| **Qwen3.5-4B**| ~2.8GB  | **4GB**     | A    | ✅ **BALANSERAD.** Optimal hastighet och kvalitet. Rekommenderad standardmodell för de flesta spelare. |
| **Qwen3.5-9B**| ~5.5GB  | **8GB**     | S    | 🌟 **Berättaren.** Rik berättelse och överlägsen koherens. För dig med en RTX 3070 eller bättre. |

---

### 🎮 SNABB VALGUIDE

| Ditt Grafikkort | VRAM | Rekommenderad Modell | Resultat                     |
|-------------------|------|--------------------|------------------------------|
| GTX 1050/1060 / Ingen GPU | 4GB | **Qwen3.5-2B** | 🆗 Knappt spelbart, väldigt knappt... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Bra upplevelse          |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Snabbt och exakt         |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Den ideala upplevelsen |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maxkvalitet, supersnabba svar |

**💡 Proffstips:** Lämna alltid cirka **2 GB VRAM ledigt** för operativsystemet, annars börjar Windows gråta och stänga ner saker.

---

### 🚨 HJÄLP! MIN DATOR ÄR LÅNGSAM! (VRAM-problem)

Om spelet tar längre tid att svara än din förälskelse på WhatsApp, har du förmodligen fått slut på VRAM.

**Symtom på att du har varit för kaxig:**
1.  **Modellen dumpas till RAM:** Datorn använder vanligt minne istället för grafiskt minne. Resultat: EXTREM LÅNGSAMHET.
2.  **Liten överbelastning (1-2GB):** Tar 30-60 sekunder per svar.
3.  **Måttlig överbelastning (3-5GB):** 2-5 minuter. Du hinner gå och ta en kaffe.
4.  **Allvarlig överbelastning:** 10-30 minuter. Ospelbart.

#### 🛡️ NÖDSPROTOKOLL
Om det går dåligt, följ dessa steg i ordning:

1.  **📉 Sänk VRAM %:** Gå till Inställningar och sänk till **85%**. Starta om och prova.
2.  **🧹 Rengöring:** Stäng det där webbläsarfönstret med 40 flikar öppna. De äter upp ditt minne.
3.  **🛑 Gränsen på 70%:** Sänk aldrig under **70%** av tilldelad VRAM.
    *   *Varför?* För att AI:n behöver utrymme för att "tänka" (KV-cachen). Om du ger den mindre än 70% blir den blank och ger fel.
4.  **🔙 Taktisk reträtt:** Om inget fungerar, gå ner till en mindre modell (från 9B till 4B, eller från 4B till 2B).

---

### ⚙️ AVANCERAD MODELLKONFIGURATION ("Maximal Nördighet")

> **EXPERTLÄGE:** Om du är en proffs och vill komma åt avancerad modellkonfiguration (lägga till egna GGUF-modeller nedladdade från HuggingFace, ändra lager, etc.), måste du starta spelet med kommandot: `--advanced`.

För dig som gillar att trycka på knappar i **Inställningar → Inbyggd Lokal AI**:

| Alternativ       | Funktion                                  | Rekommendation                  |
|------------------|-------------------------------------------|---------------------------------|
| **GPU Layers**   | Hur mycket av modellen som laddas till grafikkortet | **-1** (Betyder "ALLT". Rör inte om du inte vet vad du gör) |
| **Maximal Kontex** | AI:ns "korttidsminne"                        | **16384 - 32768** (Mindre än så får AI:n minnesförlust) |
| **Temperatur**   | Kreativitet vs. Galenskap                 | **0.7 - 0.8** (Högre = galnare; Lägre = mer robotaktig) |
| **Historik RAG** | Komma ihåg saker från länge sedan          | **Ja** (Oumbärligt för långa kampanjer) |
| **Cache Embeddings** | Accelererar minnessökning               | **Ja** (Gör det snabbare)      |

---

### 🔧 FELSÖKNING (Troubleshooting)

| Problem             | Lösning                                                      |
|---------------------|--------------------------------------------------------------|
| **AI långsam / Lagg** | Verifiera att `GPU Layers` är -1. Stäng Chrome. Sänk `Contexto Máximo`. |
| **Minnesfel (OOM)** | Minska `Contexto Máximo` eller välj en mindre modell (3B). |
| **AI:n svamlar / Hallucinerar** | Sänk `Temperatura` till 0.6. Om den fortfarande är galen, starta om programmet. |

---

### 🌐 ALTERNATIVA LEVERANTÖRER (Endast experter)

> **Notera:** Den lokala AI som spelet levereras med är fullt tillräcklig. Detta är endast för avancerade eller modiga användare.

*   **Lokala Externa Motor:**
    *   **Ollama / LM Studio:** Om du redan har dina egna nördigheter modeller, kan du använda dem.
*   **Moln-API:er (Betalning krävs):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Kräver internet och pengar.
    *   Konfigurera i: **Inställningar → AI → Lägg till Ny Leverantör**.

---

### 🌍 HUR SPELAR MAN? (Multiversum och du)

När du öppnar spelet har du två vägar:

1.  **🆕 Nytt Äventyr**: Skapa din legend från grunden. Spelet kommer att fråga efter **Namn, Yrke, Fysisk Beskrivning, Psykologisk Beskrivning och Bakgrund/Pretext** för din historia. Dessutom väljer du **Svårighetsgrad** och **Humoristisk Ton** som styr kampanjen.
2.  **💾 Fortsätt Partiet**: RolemIAster **sparar i realtid**. Ingen "ladda innan döden" eller väg tillbaka här. Varje beslut, varje misslyckande och varje skada bränns fast i historien. Det är en **UTMANING**: vad du gör, det är gjort. Lev med konsekvenserna... eller dö med dem.

RolemIAster är inte en enskild spelomgång; det är ett **Persistent Multiversum**.
*   **Oändliga Världar:** Skapa dina egna universum (**Medeltida Fantasi** eller **Cyberpunk**) med eget lore.
*   **Oändliga Karaktärer:** Inom varje värld kan du ha så många hjältar du vill.
*   **Delad Tidslinje:** Se upp! Vad en karaktär gör påverkar de andras värld. AI:n är medveten om dina andra hjältar och kommer att känna igen dem som invånare i världen.
*   **AI med "Sinnen" (Super RAG):** RAG-systemet (Retrieval-Augmented Generation) fungerar som AI:ns "skvallrare", och ger den minnen om världen, vem som följer med dig, var du är och vad som precis hände för att historien ska bli 100% koherent.

### Gränssnittet (Din kontrollhytt)

*   **Vänster Panel (DU):** Din karaktärsblad. Liv, mana, förmågor och hur snygg du är (Karismat).
*   **Central Panel (HISTORIEN):**
    *   **Ovan:** Där spelledaren berättar vad som händer.
    *   **Nedan:** Dina beslutsknappar och textrutan för att skriva vad du vill göra.
*   **Höger Panel (DINA SAKER):** Inventarier och utrustning. Ett paradis för digitala samlare.

---

## 📜 SPELREGLER (Ja, det finns regler)

RolemIAster använder ett klassiskt och robust d100-system (hundra-sidig tärning).

### 1. Dina Attribut (Vad som definierar dig)
AI:n genererar dina attribut baserat på sammanhang, yrke och beskrivning som du har angett. När de väl genererats har du **10 EXTRA POÄNG** att fördela som du vill.
*   **Stegvisa Kostnader:** Att höja ett attribut till 14 kostar 1 poäng. Från 15 till 16 kostar det 2 poäng. Från 17 och uppåt kostar det 3 poäng! Tänk noga var du lägger musklerna.

*   💪 **Styrka (STY):** Din rena fysiska kraft. Påverkar närstridsskador och din bärförmåga.
*   ❤️ **Kondition (KON):** Din uthållighet. För att stå ut med slag, sjukdomar och gifter.
*   🐘 **Storlek (STO):** Din kroppsbyggnad. Stor och tung, eller liten och smidig.
*   🏃 **Smidighet (SMI):** Agilitet, pricksäkerhet och att inte snubbla över dina egna fötter.
*   🧠 **Intelligens (INT):** Lära sig, komma ihåg och lösa pussel.
*   🔮 **Vilja (VIL):** Din själ, ditt mod, din viljestyrka och din magiska reserv.
*   😎 **Karismat (KAR):** Ledarskap, attraktivitet och förmågan att lura (eller förföra) folk.

### 2. Snabba Matematiska Beräkningar (Härledda Egenskaper)
Motorn beräknar dessa siffror automatiskt baserat på dina attribut:

*   🩸 **Liv (LP):** `CON * 10`. Om det når 0... ja, du vet. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Bränslet för dina magiska trick. Utan mana, inga trick. (En trollkarl utan mana är bara en snubbe i mantel som cosplayer).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Din energi för att slåss och röra dig utan att dö i försöket.
*   🧠 **Mänsklighet (MÄN):** `(CON+POD) * 5`. (Endast i Cyberpunk: Mäter hur mycket människa som finns kvar innan kablarna gör dig galen).
*   ⚔️ **Handlingspoäng (HP):** `(INT + DES) / 2`. Bestämmer din initiativförmåga. Den som slår först, slår två gånger.

### 3. Dina Färdigheter
Börjar med ett basvärde (t.ex. Smyga = SMI + INT) och förbättras genom användning. Det är en procent (%) chans.

### 4. Lösa Handlingar (Tärningen)
När du försöker göra något riskabelt (klättra, ljuga, attackera...), kommer AI:n att be dig att slå tärning. Spelet kastar en osynlig **d100**. **(Kom ihåg: Tärningarna hatar dig. Det är personligt).**

*   **Ditt Mål:** Få ett nummer **MINDRE ÄN ELLER LIKA MED** din färdighetsnivå.
    *   *Exempel:* Du har 45% i Klättring.
    *   Du slår en 30: ✅ **Framgång**. Du klättrar som en apa.
    *   Du slår en 80: ❌ **Misslyckande**. Du slår dig illa.
    *   **Kritiskt:** Slå mindre än eller lika med **1/5 av din färdighet** (eller en 01). Episkt! Du gör en extraordinär parkour med en volter.
    *   **Pajaser:** En **99 eller 100**. Tärningarna har bestämt att det inte är din dag. Du tappar byxorna mitt i och faller pladask.

---

## 💡 TIPS FÖR ATT INTE DÖ (SNABBT)

*   **✍️ Var Beskrivande:** Skriv inte bara "jag attackerar". Skriv: *"Jag försöker undvika hans yxa genom att rulla på golvet och sticker honom i ankeln med min dolk"*. AI:n kommer att belöna dig.
*   **🧪 Experimentera:** Du är inte begränsad till knapparna. Skriv galenskaper! AI:n kommer att improvisera.
*   **🎭 Rollspela:** Gå in i rollen. Läs beskrivningarna och agera som din karaktär skulle göra, inte som du skulle göra i pyjamas.

---

## ⚔️ STRIDEN (Till vapen!)

När orden inte räcker till, är det dags för handling. Striden är **taktisk** och fungerar med **Tick** (tid).

### 🕹️ Hur det fungerar:
*   **Tick:** Varje handling kostar tid. Tunga vapen är långsamma (kostar många tick). Dolkar är snabba.
*   **Din Hastighet:** Beror på dina handlingspoäng (HP).

### Grundläggande Handlingar:
*   **🗡️ Attackera:** Slå med det du har draget.
*   **🛡️ Blockera:** Du intar en defensiv position. Minskar skada men kostar uthållighet.
*   **🏃 Fly:** För fegisar (eller för kloka som vill leva).
*   **🏳️ Ge Upp:** Om du ser att du inte vinner, kan du be om nåd.
*   **✨ Magi / Cyberware:** Eld, laserstrålar, hackningar...

### 💬 Fri Text-Handlingar (NYTT!)
Gillar du inte knapparna? Skriv vad du vill göra som om du pratade med en levande spelledare!
*   **Exempel:** *"Kasta en eldboll på goblinen"*, *"Dra mitt runsvärd"*, *"Använd en dryck på mig"*.
*   **Scenregissör:** Striden blir nu levande. AI:n genererar miljömässiga händelser och reaktioner som berikar berättelsen: fallande bjälkar, fiender som drar sig tillbaka, fallande facklor! Stridsfältet är inte längre statiskt!
*   **Om AI:n inte förstår:** Den kommer att be dig att omformulera. Din tur går INTE förlorad!
*   **⚠️ Begränsning:** Att flytta föremål mellan platser (utrusta från ryggsäcken, ladda ammunition) görs med **Dra & Släpp** i gränssnittet, inte via text.

### ⚠️ GYLLENE ÖVERLEVNADSREGELN
**DRA VAPEN INNAN DU SLÅSS!**
Att dra vapnet mitt i striden tar tid (Tick). Om du blir överrumplad med svärdet i skidan, kommer du att få stryk tills du skäms medan du klumpigt försöker dra det. ELLER VÄRRE!, OM DU HAR DINA VAPEN I RYGGSECKEN ISTÄLLET FÖR I UTRUSTNINGSPLATSEN (Ursäkta en sekund, jag måste leta upp mitt svärd ur ryggsäcken, jag vet att jag hade det här någonstans... någonstans...) 🤦‍♂️
👉 Klicka på etiketten för det utrustade vapnet (höger panel) för att dra det. Det lyser grönt.

Att försöka flytta vapen i strid tar tid (Tick) och kan resultera i ett överraskningsangrepp, dessutom är det mycket troligt att du förlorar din tur, att du missar av nervositet när yxan närmar sig ditt ögonbryn eller att du tappar det på golvet. (Kanske var det inte en bra idé att skapa en karaktär med ADHD)

---

## ✨ MAGI OCH CYBERNETIK

Beroende på om din värld är "Medeltida Fantasi" eller "Cyberpunk":

### 🧙‍♂️ Fantasi: Förbannelser
Är du en trollkarl? Du kan förtrolla din utrustning.
1.  **Lär dig:** Du behöver formeln i din grimoire.
2.  **Kasta (Dra & Släpp):** Dra formeln från din lista över föremålet i ditt inventarie.
3.  **Kostnad:** Att upprätthålla en aktiv förtrollning **kostar Mana per tur**.
4.  **Varning:** Om du får slut på mana mitt i striden blir eldsvärdet bara en rostig järnskrotbit igen.

### 🦾 Cyberpunk: Implantat
Vill du ha ögon med zoom eller gorillaarmar?
1.  Leta upp en **Teknokirurg** (tjänste-NPC).
2.  Betala krediter (inget är gratis i framtiden).
3.  **Mänsklighetskostnad:** Varje implantat tar en bit av din själ (**Mänsklighet**).
    *   Om du installerar för många blir du en **Cyberpsykos** (en mördar-brödrost med ben) och förlorar kontrollen över din karaktär.

---

## 🛒 BUTIKER OCH TJÄNSTER (SIS)

Prata med NPC:er för att handla.
*   **AI föreslår, du bestämmer:** När du pratar med en handlare eller helare kommer AI:n att föreslå deras tjänster (reparera, sälja, hela), men en knapp för **"Visa Tjänster"** kommer att visas så att du kan bestämma när du går in i transaktionsläget.
*   **Prutning:** Din färdighet i **Handel** (baserad på Karisma) bestämmer priserna. Om du är ful eller otrevlig, kommer du att bli lurad.
*   **Sälja:** Högerklicka på ett föremål i ditt inventarie för att sälja det till handlaren eller dra det över honom.

---

## 🎒 INVENTARIEHANTERING (Tetris)

*   **Vikt:** Du har en lastgräns (Styrka + Storlek). Om du bär för mycket skrot kommer du att gå långsamt och med straff (Diatogenes är inte din vän).
*   **Paneler:**
    *   **Utrustning:** Vad du har på dig.
    *   **Bälte:** Snabb åtkomst i strid (tar mindre tid att använda drycker härifrån).
    *   **Ryggsäck:** Botten av säcken.
*   **Smidig Användning:** Dra en dryck eller mat direkt över **ditt ansikte** (porträttet) för att konsumera den omedelbart. Du kan också använda snabbmenyn (högerklick -> Använd).

---

## 🛠️ SLUTLIGA JUSTERINGAR

I menyn **Inställningar** kan du justera allt:
*   **🌍 Språk:** AI:n översätter hela spelet och svaren i farten. Flerspråkligt läge aktiverat.
*   **👁️ Utseende:** Textstorlek och färger, för att inte bli blind. Neonsken och mjuka skuggor för total inlevelse.
*   **🧠 AI-inställningar:** Byt modell, temperatur, etc. (Kom ihåg vad vi diskuterade i början av manualen om flaggan `--advanced` om du är en av dem som vill peta på allt).

---

## 🎭 SVÅRIGHET OCH HUMOR (Anpassa ditt lidande)

Innan du börjar, kom ihåg att AI:n inte bara berättar, utan också **anpassar världen** efter dina preferenser. Dessa parametrar väljs när världen skapas och är permanenta för den världen:

*   **🎮 Svårighetsgrad (Hanterad av AI):** Det är inte bara en skademultiplikator. Spelet säger till AI:n: "Hallå, svårighetsgraden är denna, agera därefter."
    *   **Lätt:** Du kommer aldrig att dö (eller det blir nästan omöjligt), situationerna är enklare, priserna är billigare och fienderna är klumpigare. AI:n kommer att resonera varje scen för att göra din väg till en rosengång.
    *   **Normal:** Standardbalansen.
    *   **Utmaning:** AI:n blir obeveklig, priserna oöverkomliga och varje misstag kan vara det sista.

*   **🃏 Humoristisk Ton:** Definierar hur AI:n talar till dig och vilken typ av händelser som inträffar. Även om varje modell har sitt eget sätt att tolka konceptet "humor", kommer AI:n att försöka anpassa sig till vad du väljer... eller inte:
    *   **Seriös:** En episk, mörk och formell berättelse.
    *   **Sarkastisk:** AI:n kommer att skratta åt dina misstag, kasta ständiga pikar och använda en ironisk ton.
    *   **Galen:** Gör dig redo för det absurda. Flygande kor, surrealistiska situationer och totalt kaos styrt av AI:ns mest vridna logik.

---

## 🚧 Meddelande: Tidig Åtkomst

RolemIAster är under **aktiv utveckling**, kokas långsamt.
*   Du kan stöta på buggar (eller "oväntade funktioner").
*   Jag lägger till nya saker varje vecka.
*   Din feedback är guld värd! Berätta vad du gillar och vad du gillar mycket. (Om du inte gillar något, säg det också, men med kärlek).

Gå nu, slå initiativ och skapa din legend!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->