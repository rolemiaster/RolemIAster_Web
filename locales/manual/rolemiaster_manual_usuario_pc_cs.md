# 🐉 Vítejte v RolemIAster!

Chopte se kostek (nebo myši) a připravte se na dobrodružství, kde jediným limitem je zvrácenost vaší představivosti! **RolemIAster** je nekonečná RPG hra poháněná umělou inteligencí, která vám umožní být hrdinou (nebo padouchem) vašich vlastních příběhů.

---

## ⚠️ PRÁVNÍ UPOZORNĚNÍ (Ta nudná, ale nutná část)

**PŘEČTI SI MĚ, NEBO POCÍTÍŠ HNĚV KOSTEK:**

1.  **🤖 Integrovaná lokální AI:** RolemIAster si přináší vlastní digitální mozek. Funguje **bez internetu** a bez nutnosti sahat na cokoliv divného. Nainstaluj a hraj!
2.  **☁️ Volitelný Cloud:** Pokud raději utrácíte peníze za externí AI (OpenAI, Gemini...), je to vaše věc a vaše kreditka. Náklady jdou za vámi.
3.  **🎲 Generativní chaos:** AI vymýšlí příběh za pochodu. Pokud se vypravěč zblázní a řekne, že prší krávy, na nás se nedívejte. Vývojář nenese odpovědnost za šílenosti, které model vygeneruje.
4.  **🏗️ Předběžný přístup:** Stále se na tom pracuje. Pokud najdete chybu (bug), není to chyba, je to překvapení v podobě "funkce"! (Pošlete nám prosím zpětnou vazbu, hodně nám to pomáhá).

---

## 🖥️ SYSTÉMOVÉ POŽADAVKY A DIGITÁLNÍ MOZKY (AI)

RolemIAster funguje na **Lokální Umělé Inteligenci**. To znamená, že váš PC oddře tu těžkou práci s myšlením. Nepotřebujete internet, ale potřebujete grafickou kartu, která nepochází z dob dinosaurů. (Poznámka: Pokud je ve vašem pokoji zima, tato hra funguje jako topení zdarma).

### ⚙️ Pojmy pro nezasvěcené

**VRAM (Video paměť)** je palivo pro AI.
*   RolemIAster si potřebuje "pamatovat" **12 000 až 16 000 slov (tokenů)**, aby neztratil nit příběhu.
*   Pokud vaší GPU dojde paměť, hra poběží pomaleji než hlemýžď s astmatem.

---

### 📊 KATALOG MODELŮ (Vyber si svůj jed)

Spravujte své AI v **Nastavení → Integrovaná lokální AI → Správa modelů**.

#### 🏆 Rodina Qwen 2.5 (La crème de la crème)

| Model | Velikost | Min. VRAM | Tier | Verdikt |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Stážista.** Snaží se, ale nechtějte po něm, aby psal Shakespeara. Občas se zamotá. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **VYVOLENÝ.** Vyvážený, chytrý a rychlý. Je to výchozí doporučený model. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Profesor.** Bohaté vyprávění, hloubka a velmi přirozené dialogy. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Božská úroveň.** K rozběhnutí tohoto potřebujete vesmírnou loď (RTX 3090/4090). |

---

### 🎮 RYCHLÝ PRŮVODCE VÝBĚREM

| Vaše Grafika | VRAM | Doporučený Model | Výsledek |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Těsné, ale hratelné (Nízký kontext) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Jde to dobře |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Vuela |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Ideální zážitek |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luxus |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximální kvalita |

**💡 Pro Tip:** Vždy nechte asi **2 GB VRAM volné** pro operační systém, jinak Windows začne brečet a zavírat věci.

---

### 🚨 POMOC! MŮJ PC JE POMALÝ! (Problémy s VRAM)

Pokud hra reaguje pomaleji než váš "crush" na WhatsAppu, pravděpodobně vám došla VRAM.

**Příznaky, že jste to přehnali:**
1.  **Model se přesune do RAM:** PC používá normální paměť místo grafické. Výsledek: EXTRÉMNÍ ZPOMALENÍ.
2.  **Mírné přetečení (1-2 GB):** Odpověď potrvá 30-60 sekund.
3.  **Střední přetečení (3-5 GB):** 2-5 minut. Můžete si dojít pro kafe.
4.  **Vážné přetečení:** 10-30 minut. Nehratelné.

#### 🛡️ Nouzový protokol
Pokud to jde z kopce, postupujte podle těchto kroků:

1.  **📉 Snižte % VRAM:** Jděte do Nastavení a snižte to na **85 %**. Restartujte a vyzkoušejte.
2.  **🧹 Úklid:** Zavřete ten prohlížeč se 40 otevřenými záložkami. Požírají vaši paměť.
3.  **🛑 Limit 70 %:** Nikdy nechoďte pod **70 %** přidělené VRAM.
    *   *Proč?* Protože AI potřebuje prostor na "přemýšlení" (KV cache). Pokud jí dáte méně než 70 %, zasekne se a vyhodí chybu.
4.  **🔙 Taktický ústup:** Pokud nic nezabere, přejděte na menší model (z 7B na 3B).

---

### ⚙️ POKROČILÁ KONFIGURACE MODELU ("Maximální geekovina")

> **EXPERT MÓD:** Pokud jste profík a chcete přistupovat k pokročilému nastavení modelů (přidávat vlastní GGUF modely stažené z HuggingFace, upravovat vrstvy atd.), musíte hru spustit s příkazem: `--advanced`.

Pro ty, kteří rádi mačkají tlačítka v **Nastavení → Integrovaná lokální AI**:

| Možnost | Funkce | Doporučení |
|--------|---------|---------------|
| **GPU Layers** | Kolik z modelu se načte do grafiky | **-1** (Znamená "VŠE". Nesahejte na to, pokud nevíte, co děláte) |
| **Kontext Maximum** | "Krátkodobá paměť" AI | **16384 - 32768** (Méně než toto a AI bude mít amnézii) |
| **Teplota (Temperature)** | Kreativita vs Šílenství | **0.7 - 0.8** (Vyšší = šílenější; Nižší = robotičtější) |
| **Historie RAG** | Pamatování si věcí z dávné minulosti | **Ano** (Nezbytné pro dlouhé kampaně) |
| **Cacheování Embeddings** | Zrychluje vyhledávání vzpomínek | **Ano** (Hra běží rychleji) |

---

### 🔧 ŘEŠENÍ PROBLÉMŮ (Troubleshooting)

| Pifia (Chyba) | Řešení |
|-------|---------|
| **AI Pomalá / Lagy** | Ověřte, že `GPU Layers` je -1. Zavřete Chrome. Snižte `Contexto Máximo`. |
| **Chyba Paměti (OOM)** | Snižte `Contexto Máximo` nebo zvolte menší model (3B). |
| **AI blouzní / Halucinuje** | Snižte `Temperatura` na 0.6. Pokud je stále šílená, restartujte aplikaci. |

---

### 🌐 ALTERNATIVNÍ POSKYTOVATELÉ (Pouze experti)

> **Poznámka:** Lokální AI, kterou hra obsahuje, bohatě stačí. Toto je pouze pro pokročilé nebo odvážné uživatele.

*   **Externí Lokální Motory:**
    *   **Ollama / LM Studio:** Pokud už máte své vlastní geekovské modely, můžete je použít.
*   **Cloudové API (Placené):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vyžaduje internet a utrácení peněz.
    *   Nastavte v: **Nastavení → AI → Přidat nového poskytovatele**.

---

### 🌍 JAK HRÁT? (Multivesmír a vy)

Při otevření hry máte dvě cesty:

1.  **🆕 Nové dobrodružství**: Vytvořte svou legendu od nuly. Hra po vás bude chtít **Jméno, Povolání (Profes), Fyzický popis, Psychologický popis a Pozadí/Záminku** vašeho příběhu. Navíc si vyberete **Úroveň obtížnosti** a **Tón humoru**, které povedou kampaň.
2.  **💾 Pokračovat ve hře**: RolemIAster **ukládá v reálném čase**. Tady není žádné "načíst před smrtí" ani cesta zpět. Každé rozhodnutí, každá chyba a každé zranění je do příběhu vryto ohněm. Je to **VÝZVA**: co uděláte, to se stane. Žijte s následky... nebo s nimi zemřete.

RolemIAster není izolovaná hra; je to **Trvalý Multivesmír**.
*   **Nekonečné světy:** Vytvářejte vlastní vesmíry (**Středověká fantasy** nebo **Cyberpunk**) s vlastním Lore.
*   **Nekonečné postavy:** Uvnitř každého světa můžete mít tolik hrdinů, kolik chcete.
*   **Sdílená časová osa:** Pozor! To, co udělá jedna postava, ovlivní svět ostatních. AI si je vědoma vašich dalších hrdinů a rozpozná je jako obyvatele světa.
*   **AI se "smysly" (Super RAG):** Systém RAG (Retrieval-Augmented Generation) funguje jako "práskač" pro AI, dává jí vzpomínky na svět, kdo vás doprovází, kde jste a co se právě stalo, aby byl příběh 100% koherentní.

### Rozhraní (Váš kokpit)

*   **Levý panel (VY):** Váš deník postavy. Životy, mana, dovednosti a jak jste krásní (Charisma).
*   **Centrální panel (PŘÍBĚH):**
    *   **Nahoře:** Kde vypravěč líčí, co se děje.
    *   **Dole:** Vaše rozhodovací tlačítka a textové pole pro psaní toho, co chcete dělat.
*   **Pravý panel (VAŠE VĚCI):** Inventář a vybavení. Ráj digitálního Diogena.

---

## 📜 PRAVIDLA HRY (Ano, jsou tu pravidla)

RolemIAster používá klasický a robustní systém d100 (stostěnná kostka).

### 1. Vaše Atributy (To, co vás definuje)
AI generuje vaše atributy na základě kontextu, profese a popisu, který jste zadali. Jakmile jsou vygenerovány, máte **10 BODŮ NAVÍC**, které můžete rozdělit dle libosti.
*   **Stupňované náklady:** Zvýšení atributu do 14 stojí 1 bod. Z 15 na 16 stojí 2 body. Od 17 výše stojí 3 body! Dobře si rozmyslete, kam dáte svaly.

*   💪 **Síla (FUE):** Vaše čistá fyzická síla. Ovlivňuje poškození zblízka a nosnost.
*   ❤️ **Odolnost (CON):** Vaše výdrž. Pro snášení úderů, nemocí a jedů.
*   🐘 **Velikost (TAM):** Váš rozsah. Velký a těžký, nebo malý a mrštný.
*   🏃 **Obratnost (DES):** Hbitost, přesnost a schopnost nezakopávat o vlastní nohy.
*   🧠 **Inteligence (INT):** Učení, pamatování a řešení hádanek.
*   🔮 **Moc (POD):** Vaše duše, štěstí, síla vůle a zásoba magie.
*   😎 **Charisma (CAR):** Vůdcovství, přitažlivost a schopnost klamat (nebo svádět) lidi.

### 2. Rychlá matematika (Odvozené vlastnosti)
Motor tyto čísla vypočítá automaticky na základě vašich atributů:

*   🩸 **Životy (PV):** `CON * 10`. Pokud klesnou na 0... no, však víte. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Palivo pro vaše kouzelnické triky. Bez many nejsou triky. (Mág bez many je jen chlápek v županu, co si hraje na cosplay).
*   ⚡ **Výdrž (STA):** `((CON+FUE+DES)/3)*10 + POD`. Vaše energie pro boj a pohyb, aniž byste u toho zemřeli.
*   🧠 **Lidskost (HUM):** `(CON+POD) * 5`. (Pouze v Cyberpunku: Měří, kolik z člověka ve vás zbývá, než vás kabely připraví o rozum).
*   ⚔️ **Akční body (PA):** `(INT + DES) / 2`. Určuje vaši Iniciativu. Kdo udeří první, udeří dvakrát.

### 3. Vaše Dovednosti
Začínají na základní hodnotě (např.: Plížení = DES + INT) a zlepšují se používáním. Je to procento (%).

### 4. Vyhodnocení akcí (Kostka)
Když se pokusíte o něco riskantního (šplhání, lhaní, útok...), AI vás požádá o hod. Hra hodí neviditelnou **d100**. **(Pamatujte: Kostky vás nenávidí. Je to osobní).**

*   **Váš cíl:** Hodit číslo **MENŠÍ NEBO ROVNÉ** vaší úrovni dovednosti.
    *   *Příklad:* Máte 45 % ve Šplhání.
    *   Hodíte 30: ✅ **Úspěch**. Šplháte jako opice.
    *   Hodíte 80: ❌ **Neúspěch**. Spadnete na záda.
    *   **Kritický úspěch:** Hodit méně nebo rovno **1/5 vaší dovednosti** (nebo 01). Epické! Předvedete mimořádný parkour s saltem.
    *   **Pifia (Kritické selhání):** **99 nebo 100**. Kostky rozhodly, že dnes není váš den. V polovině cesty vám spadnou kalhoty a spadnete na pusu.

---

## 💡 TIPY, JAK NEZEMŘÍT (RYCHLE)

*   **✍️ Buďte popisní:** Nepište jen "útočím". Napište: *"Pokusím se vyhnout jeho sekeře kotoulem po zemi a bodnu ho dýkou do kotníku"*. AI vás odmění.
*   **🧪 Experimentujte:** Nejste omezeni jen tlačítky. Pište šílenosti! AI bude improvizovat.
*   **🎭 Roleplay:** Vžijte se do role. Čtěte popisy a jednejte tak, jak by to dělala vaše postava, ne jak byste to dělali vy v pyžamu.

---

## ⚔️ SOUBOJ (Do zbraně!)

Když slova selžou, přichází čas na rány. Souboj je **taktický** a funguje na **Ticky** (čas).

### 🕹️ Jak to funguje:
*   **Ticky:** Každá akce stojí čas. Těžké zbraně jsou pomalé (spotřebují mnoho ticků). Dýky jsou rychlé.
*   **Vaše rychlost:** Závisí na vašich Akčních bodech (PA).

### Základní akce:
*   **🗡️ Útočit:** Prašťte tím, co máte tasené.
*   **🛡️ Blokovat:** Přejdete do defenzivy. Snižuje poškození, ale spotřebovává Výdrž.
*   **🏃 Utéct:** Pro zbabělce (nebo moudré, kteří chtějí žít).
*   **🏳️ Vzdát se:** Pokud vidíte, že nevyhrajete, můžete prosit o milost.
*   **✨ Magie / Cyberware:** Oheň, laserové paprsky, hackování...

### 💬 Akce volným textem (NOVINKA!)
Nelíbí se vám tlačítka? Napište, co chcete dělat, jako byste mluvili s živým Pánem jeskyně!
*   **Příklady:** *"Hodit ohnivou kouli na goblina"*, *"Tasit můj runový meč"*, *"Použít lektvar na sebe"*.
*   **Režisér scény:** Souboj nyní ožívá. AI generuje enviromentální události a reakce, které obohacují vyprávění: padající trámy, ustupující nepřátelé, padající pochodně. Bojiště už není statické!
*   **Pokud AI nerozumí:** Požádá vás o přeformulování. Váš tah NEPROPADÁ!
*   **⚠️ Omezení:** Přesouvání předmětů mezi sloty (vybavení z batohu, nabíjení munice) se provádí pomocí **Drag & Drop** v rozhraní, nikoliv textem.

### ⚠️ ZLATÉ PRAVIDLO PŘEŽITÍ
**TASIT ZBRAŇ PŘED BOJEM!**
Vytažení zbraně uprostřed boje spotřebovává čas (Ticky). Pokud vás chytí s mečem v pochvě, dostanete nakládačku, zatímco se ho budete snažit nešikovně vytáhnout. NEBO JEŠTĚ HŮŘ, POKUD MÁTE ZBRANĚ V BATOHU MÍSTO VE SLOTU VYBAVENÍ (Omluvte mě na vteřinku, musím vyndat obouručák z batohu, vím, že jsem ho tu někde měl... někde...) 🤦‍♂️
👉 Klikněte na **štítek vybavené zbraně** (pravý panel), abyste ji tasili. Rozsvítí se zeleně.

Pokus o přesun zbraní v boji spotřebovává čas (Ticky) a může vyústit v překvapivý útok, navíc je velmi pravděpodobné, že ztratíte tah, že minete kvůli nervům ze sekery blížící se k vašemu obočí, nebo že vám zbraň spadne na zem. (Možná nebyl dobrý nápad vytvořit si postavu s ADHD).

---

## ✨ MAGIE A KYBERNETIKA

V závislosti na tom, zda je váš svět "Středověká fantasy" nebo "Cyberpunk":

### 🧙‍♂️ Fantasy: Očarování
Jste čaroděj? Můžete očarovat své vybavení.
1.  **Naučte se:** Potřebujete kouzlo ve svém grimoáru.
2.  **Sešlete (Drag & Drop):** Přetáhněte kouzlo ze seznamu na předmět ve vašem inventáři.
3.  **Cena:** Udržování aktivního očarování **spotřebovává Manu každé kolo**.
4.  **Upozornění:** Pokud vám uprostřed boje dojde mana, ohnivý meč se změní zpět na kus rezavého železa.

### 🦾 Cyberpunk: Implantáty
Chcete oči se zoomem nebo gorilí paže?
1.  Najděte **Technochirurga** (NPC služba).
2.  Zaplaťte kredity (v budoucnosti není nic zadarmo).
3.  **Cena Lidskosti:** Každý implantát vám vezme kus duše (**Lidskost**).
    *   Pokud si jich pořídíte příliš mnoho, propadnete **Kyberpsychóze** (vražedný toustovač na nožičkách) a ztratíte kontrolu nad postavou.

---

## 🛒 OBCHODY A SLUŽBY (SIS)

Mluvte s NPC a obchodujte.
*   **AI navrhuje, Vy rozhodujete:** Když mluvíte s obchodníkem nebo léčitelem, AI vám navrhne jejich služby (oprava, prodej, léčení), ale objeví se tlačítko **"Zobrazit služby"**, abyste vy rozhodli, kdy vstoupit do transakčního režimu.
*   **Smlouvání:** Vaše dovednost **Obchod** (založená na Charismatu) určuje ceny. Pokud jste oškliví nebo nepříjemní, natáhnou vás.
*   **Prodej:** Klikněte **pravým tlačítkem** na předmět v inventáři, abyste ho prodali obchodníkovi, nebo ho na něj přetáhněte.

---

## 🎒 SPRÁVA INVENTÁŘE (Tetris)

*   **Váha:** Máte limit nosnosti (Síla + Velikost). Pokud nesete příliš mnoho harampádí, budete pomalí a penalizovaní (Diogenes není váš přítel).
*   **Panely:**
    *   **Vybavení:** Co máte na sobě.
    *   **Opasek:** Rychlý přístup v boji (použití lektvarů odtud stojí méně času).
    *   **Batoh:** Dno pytle.
*   **Plynulé použití:** Přetáhněte lektvar nebo jídlo přímo na **svůj obličej** (portrét) pro okamžitou konzumaci. Můžete také použít kontextové menu (pravý klik -> Použít).

---

## 🛠️ ZÁVĚREČNÁ NASTAVENÍ

V menu **Nastavení** můžete upravit vše:
*   **🌍 Jazyk:** AI vám přeloží celou hru a odpovědi za letu. Režim polyglota aktivován.
*   **👁️ Vzhled:** Velikost písma a barvy, abyste neoslepli. Neonové okraje a vyhlazené stíny pro totální imerzi.
*   **🧠 Nastavení AI:** Změňte model, teplotu atd. (Pamatujte na to, co jsme viděli na začátku manuálu ohledně flagu `--advanced`, pokud patříte k těm, co chtějí na všechno sahat).

---

## 🎭 OBTÍŽNOST A HUMOR (Přizpůsob si své utrpení)

Před začátkem si pamatujte, že AI nejen vypráví, ale **upravuje svět** podle vašich preferencí. Tyto parametry se vybírají při vytváření světa a jsou pro daný svět trvalé:

*   **🎮 Obtížnost (Spravovaná AI):** Není to jen jednoduchý násobič poškození. Hra řekne AI: "Hele, obtížnost je taková, chovej se podle toho".
    *   **Lehká:** Nikdy nezemřete (nebo to bude téměř nemožné), situace jsou jednodušší, ceny levnější a nepřátelé tupější. AI odůvodní každou scénu tak, aby vaše cesta byla procházkou růžovým sadem.
    *   **Normální:** Standardní rovnováha.
    *   **Výzva:** AI bude neúprosná, ceny prohibitivní a každá chyba může být poslední.

*   **🃏 Tón humoru:** Definuje, jak s vámi AI mluví a jaký typ událostí nastává. Ačkoliv má každý model svůj způsob interpretace pojmu "humor", AI se pokusí přizpůsobit tomu, co zvolíte... nebo ne:
    *   **Vážný:** Epické, temné a formální vyprávění.
    *   **Sarkastický:** AI se bude smát vašim chybám, neustále si do vás rýpat a používat ironický tón.
    *   **Delirium (Šílený):** Připravte se na absurdno. Létající krávy, surrealistické situace a totální chaos řízený tou nejzvrácenější logikou AI.

---

## 🚧 Upozornění: Předběžný přístup

RolemIAster je v **aktivním vývoji**, vaří se na mírném ohni.
*   Můžete narazit na chyby (nebo "nečekané funkce").
*   Každý týden přidávám nové věci.
*   Vaše zpětná vazba má cenu zlata! Řekněte mi, co se vám líbí a co se vám líbí hodně. (Pokud se vám něco nelíbí, řekněte mi to taky, ale s láskou).

Teď běžte, hoďte si na iniciativu a stvořte svou legendu!

<!-- source_hash: f3494f05 -->