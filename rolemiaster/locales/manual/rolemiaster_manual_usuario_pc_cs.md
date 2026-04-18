# 🐉 Vítejte v RolemIAster!

Popadněte své kostky (nebo myš) a připravte se na dobrodružství, kde jediným limitem je pokřivenost vaší fantazie! **RolemIAster** je nekonečná hra na hrdiny poháněná umělou inteligencí, která vám umožní být hrdinou (nebo padouchem) vašich vlastních příběhů.

---

## ⚠️ PRÁVNÍ UPOZORNĚNÍ (Ta nudná, ale nutná část)

**PŘEČTI NEBO UTRPÍŠ HNEDV KRÁLŮ KOSTEK:**

1.  **🤖 Integrovaná lokální AI:** RolemIAster má svůj vlastní digitální mozek. Funguje **bez internetu** a bez nutnosti provádět složitá nastavení. Nainstalujte a hrajte!
2.  **☁️ Volitelný Cloud:** Pokud raději utrácíte peníze za externí AI (OpenAI, Gemini...), je to vaše věc s vaší kreditní kartou. Náklady jsou na vás.
3.  **🎲 Generativní chaos:** AI si příběh vymýšlí za pochodu. Pokud se vypravěč pomátne a řekne, že padají krávy, nedívejte se na nás. Vývojář nenese odpovědnost za šílenosti, které model vygeneruje.
4.  **🏗️ Early Access:** Toto je stále ve výstavbě. Pokud narazíte na chybu, není to chyba, je to "překvapivá funkce"! (Pošlete nám zpětnou vazbu, prosím, velmi nám pomůže).

---

## 🖥️ SYSTÉMOVÉ POŽADAVKY A DIGITÁLNÍ MOZKY (AI)

RolemIAster funguje s **lokální umělou inteligencí**. To znamená, že váš PC odvede těžkou práci s přemýšlením. Nepotřebujete internet, ale potřebujete grafickou kartu, která není z doby dinosaurů. (Poznámka: Pokud je ve vaší místnosti zima, tato hra funguje jako bezplatné topení).

### ⚙️ Koncepty pro začátečníky

**VRAM (Video RAM)** je palivo pro AI.
*   RolemIAster si potřebuje "pamatovat" **12 000 až 16 000 slov (tokenů)**, aby neztratil nit příběhu.
*   Pokud vaší GPU dojde paměť, hra poběží pomaleji než šnek s astmatem.

---

### 📊 KATALOG MODELŮ (Vyberte si svůj jed)

Spravujte své AI v **Nastavení → Integrovaná lokální AI → Spravovat modely**.

#### 🏆 Rodina Qwen 3.5 — Speciálně trénováno pro RolemIAster

Tyto modely byly trénovány pomocí **řízeného doladění (SFT)**, aby zvládly narativní pravidla hry. Nejsou to generické modely: znají JSON kontrakt RolemIAsteru, NPC, inventář a boj zpaměti.

| Model | Velikost | Min. VRAM | Úroveň | Verdikt |
|--------|-----------|-----------|--------|---------|
| **Qwen3.5-2B** | ~1,5 GB | **3 GB** | B | ⚡ **Rychlík.** Nejrychlejší ze všech. Ideální pro základní GPU nebo pro hraní bez dedikované GPU. |
| **Qwen3.5-4B** | ~2,8 GB | **4 GB** | A | ✅ **VYVÁŽENÝ.** Optimální rychlost a kvalita. Doporučený standardní model pro většinu hráčů. |
| **Qwen3.5-9B** | ~5,5 GB | **8 GB** | S | 🌟 **Vypravěč.** Bohatý narativ a vynikající koherence. Pro ty, co mají RTX 3070 nebo lepší. |

---

### 🎮 RYCHLÝ PRŮVODCE VÝBĚREM

| Vaše grafika | VRAM | Doporučený model | Výsledek |
|------------|------|-------------------|-----------|
| GTX 1050/1060 / Bez GPU | 2-4 GB | **Qwen3.5-2B** | 🆗 Těsné, ale hratelné |
| GTX 1070/1660 / RX 580 | 4-6 GB | **Qwen3.5-4B** | ✅ Velmi dobrá zkušenost |
| RTX 2060/3060 / RX 6600 | 6-8 GB | **Qwen3.5-4B** | 🚀 Rychlé a přesné |
| RTX 3070/4060Ti / RX 6700 | 8-12 GB | **Qwen3.5-9B** | 🌟 Ideální zážitek |
| RTX 3090/4080/4090 | 16 GB+ | **Qwen3.5-9B** | 👑 Maximální kvalita, ultra-rychlé odpovědi |

**💡 Pro tip:** Vždy nechte volných cca **2 GB VRAM** pro operační systém, jinak začne Windows naříkat a zavírat věci.

---

### 🚨 POMOC! MŮJ PC JE POMALÝ! (Problémy s VRAM)

Pokud hře trvá odpověď déle než vaší crush na WhatsAppu, pravděpodobně jste vyčerpali VRAM.

**Příznaky, že jste to přehnali:**
1.  **Model se přesune do RAM:** Počítač používá běžnou paměť místo grafické. Výsledek: EXTRÉMNÍ POMALOST.
2.  **Mírné přetečení (1-2 GB):** 30-60 sekund na odpověď.
3.  **Střední přetečení (3-5 GB):** 2-5 minut. Můžete si jít pro kávu.
4.  **Těžké přetečení:** 10-30 minut. Nehratelné.

#### 🛡️ Nouzový protokol
Pokud se věci pokazí, postupujte v tomto pořadí:

1.  **📉 Snižte % VRAM:** Přejděte do Nastavení a snižte ji na **85 %**. Restartujte a zkuste.
2.  **🧹 Vyčištění:** Zavřete ten prohlížeč se 40 otevřenými záložkami. Požírají vaši paměť.
3.  **🛑 Limit 70 %:** Nikdy neklesejte pod **70 %** přidělené VRAM.
    *   *Proč?* Protože AI potřebuje prostor k "myšlení" (KV cache). Pokud jí dáte méně než 70 %, zůstane prázdná a dá chybu.
4.  **🔙 Taktický ústup:** Pokud nic jiného nefunguje, přejděte na menší model (z 9B na 4B, nebo z 4B na 2B).

---

### ⚙️ POKROČILÉ NASTAVENÍ MODELU ("Maximální bláznivost")

> **EXPERT REŽIM:** Pokud jste profík a chcete přistoupit k pokročilému nastavení modelů (přidání vlastních GGUF modelů stažených z HuggingFace, úprava vrstev atd.), musíte hru spustit příkazem: `--advanced`.

Pro ty, kteří rádi mačkají tlačítka v **Nastavení → Integrovaná lokální AI**:

| Možnost | Funkce | Doporučení |
|--------|---------|---------------|
| **GPU vrstvy** | Kolik modelu se načte do grafiky | **-1** (Znamená "VŠE". Neměňte, pokud nevíte, co děláte) |
| **Maximální kontext** | "Krátkodobá paměť" AI | **16384 - 32768** (Méně než toto a AI bude trpět amnézií) |
| **Teplota** | Kreativita vs. Šílenství | **0,7 - 0,8** (Vyšší = bláznivější; Nižší = robotickejší) |
| **RAG historie** | Pamatování si dávných událostí | **Ano** (Nezbytné pro dlouhé kampaně) |
| **Cacheovat Embeddings** | Zrychluje vyhledávání vzpomínek | **Ano** (Zrychluje běh) |

---

### 🔧 ODSTRAŇOVÁNÍ PROBLÉMŮ (Troubleshooting)

| Problém | Řešení |
|-------|---------|
| **Pomalá AI / Lagy** | Zkontrolujte, zda je `GPU Layers` -1. Zavřete Chrome. Snižte `Contexto Máximo`. |
| **Chyba paměti (OOM)** | Snižte `Contexto Máximo` nebo zvolte menší model (3B). |
| **AI blouzní / Halucinuje** | Snižte `Temperatura` na 0,6. Pokud je stále bláznivá, restartujte aplikaci. |

---

### 🌐 ALTERNATIVNÍ POSKYTOVATELÉ (Pouze pro experty)

> **Poznámka:** Lokální AI dodávaná se hrou je dostatečná. Toto je pouze pro pokročilé uživatele nebo odvážné.

*   **Externí lokální enginy:**
    *   **Ollama / LM Studio:** Pokud už máte své vlastní obskurní modely, můžete je použít.
*   **Cloudové API (placené):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vyžaduje internet a placení.
    *   Nastavte v: **Nastavení → AI → Přidat nového poskytovatele**.

---

### 🌍 JAK HRÁT? (Multivesmír a vy)

Po spuštění hry máte dvě možnosti:

1.  **🆕 Nové dobrodružství**: Vytvořte si legendu od nuly. Hra si vyžádá **Jméno, Povolání, Fyzický popis, Psychologický popis a Pozadí/Předstíraný důvod** vašeho příběhu. Navíc si zvolíte **Úroveň obtížnosti** a **Tón humoru**, které budou řídit kampaň.
2.  **💾 Pokračovat ve hře**: RolemIAster **ukládá v reálném čase**. Zde není žádné "načíst před smrtí" ani návrat zpět. Každé rozhodnutí, každá chyba a každé zranění je navždy vryto do historie. Je to **VÝZVA**: co uděláte, je hotovo. Žijte s následky... nebo s nimi zemřete.

RolemIAster není izolovaná hra; je to **Trvalý multivesmír**.
*   **Nekonečné světy:** Vytvořte si vlastní vesmíry (**Středověká fantasy** nebo **Cyberpunk**) s vlastním lore.
*   **Nekonečné postavy:** V každém světě můžete mít tolik hrdinů, kolik chcete.
*   **Sdílená časová osa:** Pozor! Co udělá jedna postava, ovlivní svět ostatních. AI si je vědoma vašich ostatních hrdinů a rozpozná je jako obyvatele světa.
*   **AI s "Vědomostmi" (Super RAG):** Systém RAG (Retrieval-Augmented Generation) funguje jako "špion" pro AI, poskytuje jí vzpomínky na svět, kdo je s vámi, kde jste a co se právě stalo, aby byl příběh 100% koherentní.

### Rozhraní (Vaše velitelské centrum)

*   **Levý panel (VY):** Vaše karta postavy. Život, mana, dovednosti a jak jste pohlední (Charisma).
*   **Střední panel (PŘÍBĚH):**
    *   **Nahoře:** Kde vypravěč vypráví, co se děje.
    *   **Dole:** Vaše tlačítka pro rozhodování a textové pole pro psaní, co chcete dělat.
*   **Pravý panel (VAŠE VĚCI):** Inventář a vybavení. Ráj digitálního Diogena.

---

## 📜 PRAVIDLA HRY (Ano, existují pravidla)

RolemIAster používá klasický a robustní systém d100 (sto stěnné kostky).

### 1. Vaše atributy (Co vás definuje)
AI generuje vaše atributy na základě kontextu, profese a popisu, které jste zadali. Jakmile jsou vygenerovány, máte **10 EXTRA BODŮ**, které můžete rozdělit dle libosti.
*   **Stupňované náklady:** Zvýšení atributu na 14 stojí 1 bod. Od 15 do 16 stojí 2 body. Od 17 výše stojí 3 body! Dobře si rozmyslete, kam vrazíte svaly.

*   💪 **Síla (SÍL):** Vaše čistá fyzická síla. Ovlivňuje poškození v boji zblízka a vaši nosnost.
*   ❤️ **Odolnost (ODL):** Vaše výdrž. Pro snášení úderů, nemocí a jedů.
*   🐘 **Velikost (VEL):** Vaše mohutnost. Velký a těžký, nebo malý a mrštný.
*   🏃 **Obratnost (OBR):** Hbitost, přesnost a schopnost nezakopnout o vlastní nohy.
*   🧠 **Inteligence (INT):** Učení, pamatování a řešení hádanek.
*   🔮 **Síla vůle (VŮL):** Vaše duše, štěstí, síla vůle a vaše magická zásoba.
*   😎 **Charisma (CHA):** Vůdcovství, přitažlivost a schopnost lhát (nebo svádět) lidi.

### 2. Rychlé matematiky (Odvozené vlastnosti)
Motor tyto hodnoty automaticky vypočítává na základě vašich atributů:

*   🩸 **Život (ŽIV):** `CON * 10`. Pokud klesne na 0... no, víte. F.
*   ✨ **Mana (MAN):** `(POD * 10) + INT`. Palivo pro vaše kouzla. Bez many žádná kouzla. (Mág bez many je jen chlapík v róbě dějící cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Vaše energie pro boj a pohyb, aniž byste se při tom zranili.
*   🧠 **Lidskost (LID):** `(CON+POD) * 5`. (Pouze v Cyberpunku: Měří, kolik vám zbylo z lidskosti, než vás kabely přivedou k šílenství).
*   ⚔️ **Akční body (AP):** `(INT + DES) / 2`. Určuje vaši iniciativu. Kdo udeří první, udeří dvakrát.

### 3. Vaše dovednosti
Začínají se základní hodnotou (např. Plížení = OBR + INT) a zlepšují se používáním. Je to procento (%).

### 4. Řešení akcí (Kostka)
Když se pokusíte o něco riskantního (šplhat, lhát, útočit...), AI si vyžádá hod. Hra hodí neviditelnou **d100**. **(Pamatujte: Kostky vás nenávidí. Je to osobní).**

*   **Váš cíl:** Hodit číslo **MENŠÍ NEBO ROVNÉ** vaší úrovni dovednosti.
    *   *Příklad:* Máte 45 % v Lezení.
    *   Hodíte 30: ✅ **Úspěch**. Šplháte jako opice.
    *   Hodíte 80: ❌ **Neúspěch**. Spadnete s žuchnutím.
    *   **Kritický úspěch:** Hodit méně nebo rovno **1/5 vaší dovednosti** (nebo 01). Epické! Uděláte mimořádný parkour s přemetem.
    *   **Chyba:** **99 nebo 100**. Kostky rozhodly, že dnes není váš den. V půlce cesty vám spadnou kalhoty a vy se zřítíte obličejem napřed.

---

## 💡 TIPY, JAK NEUMŘÍT (RYCHLE)

*   **✍️ Buďte popisní:** Nepište jen "útočím". Napište: *"Snažím se uhnout jeho sekeře tím, že se skutálím po zemi a vrazím mu dýku do kotníku."* AI vás odmění.
*   **🧪 Experimentujte:** Nejste omezeni tlačítky. Pište šílenosti! AI bude improvizovat.
*   **🎭 Hrajte roli:** Vžijte se do postavy. Čtěte popisy a jednejte jako vaše postava, ne jako vy v pyžamu.

---

## ⚔️ BOJ (Do zbraní!)

Když slova nestačí, nastává čas na bitku. Boj je **taktický** a funguje na **Ticky** (čas).

### 🕹️ Jak to funguje:
*   **Ticky:** Každá akce stojí čas. Těžké zbraně jsou pomalé (spotřebují mnoho ticků). Dýky jsou rychlé.
*   **Vaše rychlost:** Závisí na vašich Akčních bodech (AP).

### Základní akce:
*   **🗡️ Útok:** Udeřte tím, co máte vytaženo.
*   **🛡️ Blok:** Postavte se do obrany. Snižuje poškození, ale spotřebovává Staminu.
*   **🏃 Útěk:** Pro zbabělce (nebo pro chytré, kteří chtějí žít).
*   **🏳️ Vzdání se:** Pokud vidíte, že nevyhrajete, můžete prosit o milost.
*   **✨ Kouzla / Cyberware:** Oheň, laserové paprsky, hackování...

### 💬 Akce volným textem (NOVINKA!)
Nelíbí se vám tlačítka? Napište, co chcete udělat, jako byste mluvili s živým mistrem!
*   **Příklady:** *"Hoď ohnivou kouli na goblina"*, *"Vytas můj runový meč"*, *"Použij na sebe lektvar"*.
*   **Režisér scény:** Boj nyní ožívá. AI generuje okolní události a reakce, které obohacují narativ: padající trámy, ustupující nepřátelé, padající pochodně. Bojiště už není statické!
*   **Pokud AI nerozumí:** Požádá vás o přeformulování. Váš tah NEPROPADE!
*   **⚠️ Omezení:** Přesouvání předmětů mezi sloty (vybavení z batohu, nabíjení munice) se provádí **Drag & Drop** v rozhraní, nikoli textem.

### ⚠️ ZLATÉ PRAVIDLO PŘEŽITÍ
**VYTAHNI ZBRAŇ PŘED BOJEM!**
Vytahování zbraně uprostřed boje spotřebovává čas (Ticky). Pokud vás chytí s mečem v pochvě, dostanete takové rány, že vám to zlomí občanku, zatímco se neohrabaně snažíte ho vytáhnout. NEBO HORŠÍ NEŽ TO!, POKUD MÁTE ZBRANĚ V BATOHU MÍSTO VE SLOTU VYBAVENÍ (Prosím, promiňte, musím vytáhnout z batohu, myslím, že jsem ho měl tady... někde...) 🤦‍♂️
👉 Klikněte na **štítek vybavené zbraně** (pravý panel) pro její vytažení. Rozsvítí se zeleně.

Pokus o přesun zbraní v boji spotřebovává čas (Ticky) a může vést k překvapivému útoku, navíc je velmi pravděpodobné, že ztratíte tah, minete kvůli nervům z sekery, která se blíží k vašemu obočí, nebo ji upustíte na zem. (Možná nebylo dobré si vytvořit postavu s ADHD)

---

## ✨ KOUZLA A KYBERNETIKA

V závislosti na tom, zda je váš svět "Středověká fantasy" nebo "Cyberpunk":

### 🧙‍♂️ Fantasy: Očarování
Jste kouzelník? Můžete očarovat své vybavení.
1.  **Naučte se:** Potřebujete kouzlo ve svém grimoáru.
2.  **Hoďte (Drag & Drop):** Přetáhněte kouzlo ze svého seznamu na předmět ve svém inventáři.
3.  **Náklady:** Udržování aktivního očarování **spotřebovává manu za tah**.
4.  **Upozornění:** Pokud vám uprostřed boje dojde mana, ohnivý meč se opět stane rezavým kusem železa.

### 🦾 Cyberpunk: Implantační
Chcete oči s zoomem nebo gorilí paže?
1.  Najděte **Technosirurga** (NPC služebníka).
2.  Zaplaťte kredity (v budoucnosti nic není zadarmo).
3.  **Náklady na lidskost:** Každý implantát vám ubere kousek duše (**Lidskost**).
    *   Pokud jich nasadíte příliš mnoho, stanete se **Cyberpsychikem** (vrahounský topinkovač na nožičkách) a ztratíte kontrolu nad svou postavou.

---

## 🛒 OBCHODY A SLUŽBY (SIS)

Mluvte s NPC a obchodujte.
*   **AI navrhne, vy rozhodujete:** Když budete mluvit s obchodníkem nebo léčitelem, AI navrhne jeho služby (opravit, prodat, léčit), ale objeví se tlačítko **"Zobrazit služby"**, abyste se sami rozhodli, kdy vstoupit do transakčního režimu.
*   **Smlouvání:** Vaše dovednost **Obchodování** (založená na Charismatu) určuje ceny. Pokud jste oškliví nebo nepříjemní, podvedou vás.
*   **Prodej:** Klikněte **pravým tlačítkem** na předmět ve svém inventáři, abyste ho prodali obchodníkovi, nebo ho na něj přetáhněte.

---

## 🎒 SPRÁVA INVENTÁŘE (Tetris)

*   **Váha:** Máte limit pro nošení (Síla + Velikost). Pokud nesete příliš mnoho šrotu, budete se pohybovat pomalu a s postihy (Diogen není váš přítel).
*   **Panely:**
    *   **Vybavení:** Co máte na sobě.
    *   **Opasek:** Rychlý přístup v boji (použití lektvarů odsud stojí méně času).
    *   **Batoh:** Dno batohu.
*   **Plynulé použití:** Přetáhněte lektvar nebo jídlo přímo na **vaši tvář** (portrét) pro okamžitou spotřebu. Můžete také použít kontextové menu (pravé kliknutí -> Použít).

---

## 🛠️ FINÁLNÍ ÚPRAVY

V menu **Nastavení** můžete upravit vše:
*   **🌍 Jazyk:** AI vám přeloží celou hru a odpovědi za letu. Režim polyglota aktivován.
*   **👁️ Vzhled:** Velikost písma a barvy, abyste neoslepli. Neonové okraje a vyhlazené stíny pro plné ponoření.
*   **🧠 Nastavení AI:** Změňte model, teplotu atd. (Pamatujte, co jsme si řekli na začátku manuálu o příznaku `--advanced`, pokud jste z těch, kteří chtějí všechno upravovat).

---

## 🎭 OBTÍŽNOST A HUMOR (Přizpůsobte si své utrpení)

Než začnete, pamatujte, že AI nejen vypráví, ale také **přizpůsobuje svět** vašim preferencím. Tyto parametry se volí při vytváření světa a jsou pro daný svět trvalé:

*   **🎮 Obtížnost (Řízená AI):** Není to jednoduchý násobitel poškození. Hra říká AI: "Hele, obtížnost je tato, jednej podle toho."
    *   **Snadná:** Nikdy nezemřete (nebo to bude téměř nemožné), situace jsou jednodušší, ceny jsou levnější a nepřátelé jsou nešikovnější. AI bude u každé scény uvažovat, aby vaše cesta byla růžová.
    *   **Normální:** Standardní rovnováha.
    *   **Výzva:** AI bude neúprosná, ceny neúnosné a každá chyba může být poslední.

*   **🃏 Tón humoru:** Definuje, jak s vámi AI mluví a jaké události se dějí. Ačkoli každý model má svůj způsob interpretace konceptu "humoru", AI se pokusí přizpůsobit tomu, co zvolíte... nebo ne:
    *   **Vážný:** Epický, temný a formální narativ.
    *   **Sarkastický:** AI se bude smát vašim chybám, bude vám neustále házet špínu a používat ironický tón.
    *   **Delirantní:** Připravte se na absurditu. Létající krávy, surreálné situace a totální chaos řízený tím nejzkřivenějším logikou AI.

---

## 🚧 Upozornění: Early Access

RolemIAster je v **aktivním vývoji**, pomalu se vaří.
*   Můžete najít chyby (nebo "neočekávané funkce").
*   Každý týden přidávám nové věci.
*   Vaše zpětná vazba je k nezaplacení! Řekněte mi, co se vám líbí a co se vám líbí hodně. (Pokud se vám něco nelíbí, řekněte mi to také, ale s láskou).

Teď jděte, hoďte iniciativu a vytvořte si svou legendu!

<!-- source_hash: 9af75cff -->