# 🐉 Vítejte v RolemIAster!

Popadněte kostky (nebo myš a pusťte se do dobrodružství, kde jediným limitem je to, jak pokřivená je vaše představivost! **RolemIAster** je nekonečná hra na hrdiny poháněná umělou inteligencí, která vám umožní být hrdinou (nebo padouchem) vašich vlastních příběhů.

---

## ⚠️ PRÁVNÍ UPOZORNĚNÍ (Ta nudná, ale nezbytná část)

**PŘEČTĚTE SI TO, NEBO POCÍTÍTE HNĚV KOSTEK:**

1.  **🤖 Integrovaná lokální AI:** RolemIAster si přináší vlastní digitální mozek. Funguje **bez internetu** a bez toho, abyste museli cokoliv složitě nastavovat. Nainstalujte a hrajte!
2.  **☁️ Volitelný Cloud:** Pokud raději utrácíte peníze za externí AI (OpenAI, Gemini...), je to vaše věc s vaší kreditní kartou. Náklady jsou na vás.
3.  **🎲 Generativní chaos:** AI si vymýšlí příběh za pochodu. Pokud se vypravěč pomátne a prohlásí, že prší krávy, nedívejte se na nás. Vývojář nenese odpovědnost za šílenosti, které model vygeneruje.
4.  **🏗️ Early Access:** Toto je stavba. Pokud najdete chybu, není to chyba, je to překvapivá "funkce"! (Pošlete nám zpětnou vazbu, prosím, moc nám to pomůže).

---

## 🖥️ SYSTÉMOVÉ POŽADAVKY A DIGITÁLNÍ MOZKY (AI)

RolemIAster funguje s **Lokální umělou inteligencí**. To znamená, že váš PC odvede těžkou práci myšlení. Nepotřebujete internet, ale potřebujete grafickou kartu, která není z doby dinosaurů. (Poznámka: Pokud je ve vaší místnosti zima, tato hra funguje jako bezplatné topení).

### ⚙️ Pojmy pro začátečníky

**VRAM (Video RAM)** je palivo pro AI.
*   Díky **TurboQuant** si nyní RolemIAster pamatuje **více než 100 000 slov (tokenů)** – téměř trojnásobek oproti dříve – aniž by zrušil vaši grafiku.
*   Pokud vaší GPU dojde paměť, hra poběží pomaleji než šnek s astmatem.

---

### 📊 KATALOG MODELŮ (Vyberte si svůj jed)

Spravujte své AI v **Nastavení → Integrovaná lokální AI → Správa modelů**.

#### 🏆 Rodina Qwen 3.5 — Speciálně trénované pro RolemIAster

Tyto modely byly trénovány pomocí **Řízeného doladění (SFT)**, aby zvládaly narativní pravidla hry. Nejsou to generické modely: znají JSON kontrakt RolemIAsteru, NPC, inventář a boj zpaměti.

| Model | Velikost | Minimální VRAM | Tier | Rozsudek |
|--------|--------|-------------|------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **Rychlík.** Nejrychlejší ze všech. Ideální pro základní GPU nebo pro hraní bez dedikované GPU. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **VYVÁŽENÝ.** Optimální rychlost a kvalita. Doporučený standardní model pro většinu hráčů. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **Vypravěč.** Bohatý narativ a vynikající koherence. Pro ty, kteří mají RTX 3070 nebo lepší. |

---

### 🎮 RYCHLÝ PRŮVODCE VÝBĚREM

| Vaše Grafika | VRAM | Doporučený Model | Výsledek |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Bez GPU | 4GB | **Qwen3.5-2B** | 🆗 Sotva, ale hratelné, velmi sotva... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Dobrý zážitek |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Rychlý a přesný |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Ideální zážitek |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maximální kvalita, ultrarychlé odpovědi |

**💡 Pro tip:** Vždy nechte **2GB VRAM volných** pro operační systém, jinak se Windows začnou kňourat a zavírat věci.

---

### 🚨 POMOC! MŮJ PC JE POMALÝ! (Problémy s VRAM)

Pokud hře trvá odpovědět déle než vaší crush na WhatsAppu, pravděpodobně vám došla VRAM.

**Příznaky toho, že jste to přehnali:**
1.  **Model se přesouvá do RAM:** Počítač používá normální paměť místo grafické. Výsledek: EXTRÉMNÍ POMALOST.
2.  **Mírné přetečení (1-2GB):** Odpověď bude trvat 30-60 sekund.
3.  **Střední přetečení (3-5GB):** 2-5 minut. Můžete si jít pro kávu.
4.  **Těžké přetečení:** 10-30 minut. Nehratelné.

#### 🛡️ Nouzový protokol
Pokud se věci pokazí, postupujte v tomto pořadí:

1.  **📉 Snižte % VRAM:** Přejděte do Nastavení a snižte na **85 %**. Restartujte a zkuste.
2.  **🧹 Vyčištění:** Zavřete ten prohlížeč se 40 otevřenými kartami. Požírají vaši paměť.
3.  **🛑 Limit 70 %:** Nikdy nesnižujte pod **70 %** přidělené VRAM.
    *   *Proč?* Protože AI potřebuje prostor k "myšlení" (KV cache). Pokud jí dáte méně než 70 %, zůstane prázdná a dá chybu.
4.  **🔙 Taktický ústup:** Pokud nic nefunguje, snižte model na menší (přejděte z 9B na 4B nebo z 4B na 2B).

---

### ⚙️ POKROČILÉ NASTAVENÍ MODELU ("Maximální Frikost")

> **EXPERT REŽIM:** Pokud jste profík a chcete přistupovat k pokročilému nastavení modelů (přidávat vlastní modely GGUF stažené z HuggingFace, manipulovat s vrstvami atd.), musíte hru spustit příkazem: `--advanced`.

Pro ty, kteří rádi mačkají tlačítka v **Nastavení → Integrovaná lokální AI**:

| Možnost | Funkce | Doporučení |
|--------|---------|---------------|
| **GPU Vrstvy** | Kolik modelu se načte na grafiku | **-1** (Znamená "VŠE". Nedotýkejte se, pokud nevíte, co děláte) |
| **Maximální Kontext** | "Krátkodobá paměť" AI | **16384 - 32768** (Méně než toto a AI bude mít amnézii) |
| **Teplota** | Kreativita vs Šílenství | **0.7 - 0.8** (Vyšší = šílenější; Nižší = robotický) |
| **RAG Historie** | Pamatování si věcí z dávné minulosti | **Ano** (Nezbytné pro dlouhé kampaně) |
| **Cache Embeddings** | Zrychluje vyhledávání vzpomínek | **Ano** (Zrychluje běh) |

---

### 🔧 ŘEŠENÍ PROBLÉMŮ (Troubleshooting)

| Problém | Oprava |
|-------|---------|
| **Pomalá AI / Lag** | Ověřte, že `GPU Layers` je -1. Zavřete Chrome. Snižte `Contexto Máximo`. |
| **Chyba Paměti (OOM)** | Snižte `Contexto Máximo` nebo zvolte menší model (3B). |
| **AI blouzní / Halucinuje** | Snižte `Temperatura` na 0.6. Pokud stále blázní, restartujte aplikaci. |

---

### 🌐 ALTERNATIVNÍ POSKYTOVATELÉ (Pouze pro experty)

> **Poznámka:** Lokální AI dodávaná se hrou je více než dostačující. Toto je pouze pro pokročilé nebo odvážné uživatele.

*   **Externí lokální enginy:**
    *   **Ollama / LM Studio:** Pokud již máte své vlastní šílené modely, můžete je použít.
*   **Cloudové API (Placené):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vyžaduje internet a platbu.
    *   Nastavte v: **Nastavení → AI → Přidat nového poskytovatele**.

---

### 🌍 JAK HRÁT? (Multivesmír a vy)

Po spuštění hry máte dvě cesty:

1.  **🆕 Nové dobrodružství**: Vytvořte svou legendu od nuly. Hra se vás zeptá na **Jméno, Povolání, Fyzický popis, Psychologický popis a Pozadí/Předtext** vašeho příběhu. Kromě toho zvolíte **Úroveň obtížnosti** a **Tón humoru**, které budou řídit kampaň.
2.  **💾 Pokračovat ve hře**: RolemIAster **ukládá v reálném čase**. Zde není žádné "načíst před smrtí" ani cesta zpět. Každé rozhodnutí, každý přešlap a každé zranění je vryto do příběhu. Je to **VÝZVA**: co uděláte, je hotovo. Žijte s následky... nebo s nimi zemřete.

RolemIAster není izolovaná hra; je to **persistentní multivesmír**.
*   **Nekonečné světy:** Vytvořte si své vlastní vesmíry (**Středověká Fantasy** nebo **Kyberpunk**) s vlastním Lore.
*   **Nekonečné postavy:** V každém světě můžete mít tolik hrdinů, kolik chcete.
*   **Sdílená časová osa:** Pozor! Co udělá jedna postava, ovlivní svět ostatních. AI si je vědoma vašich ostatních hrdinů a pozná je jako obyvatele světa.
*   **AI s "pocity" (Super RAG):** Systém RAG (Retrieval-Augmented Generation) funguje jako "donášeč" AI, poskytuje jí vzpomínky na svět, kdo vás doprovází, kde jste a co se právě stalo, aby byl příběh 100% koherentní.

### Rozhraní (Vaše velitelské centrum)

*   **Levý panel (VY):** Vaše karta postavy. Život, mana, schopnosti a jak jste hezcí (Charisma).
*   **Střední panel (PŘÍBĚH):**
    *   **Nahoře:** Kde vypravěč vypráví, co se děje.
    *   **Dole:** Vaše tlačítka rozhodování a textové pole pro psaní toho, co chcete dělat.
*   **Pravý panel (VAŠE VĚCI):** Inventář a vybavení. Ráj digitálního Diogena.

---

## 📜 PRAVIDLA HRY (Ano, jsou tu pravidla)

RolemIAster používá klasický a robustní systém d100 (sto-stranná kostka).

### 1. Vaše atributy (Co vás definuje)
AI generuje vaše atributy na základě kontextu, povolání a popisu, které jste zadali. Jakmile jsou vygenerovány, máte **10 EXTRA BODŮ** na rozdělení podle libosti.
*   **Stupňované náklady:** Zvýšení atributu na 14 stojí 1 bod. Od 15 do 16 stojí 2 body. Od 17 výše stojí 3 body! Dobře si promyslete, kam dáte svaly.

*   💪 **Síla (SÍL):** Vaše čistá fyzická síla. Ovlivňuje poškození v boji zblízka a vaši nosnost.
*   ❤️ **Odolnost (ODL):** Vaše výdrž. Na snášení úderů, nemocí a jedů.
*   🐘 **Velikost (VEL):** Vaše rozměry. Velký a těžký, nebo malý a hbitý.
*   🏃 **Obratnost (OBR):** Hbitost, přesnost a nezakopnutí o vlastní nohy.
*   🧠 **Inteligence (INT):** Učení, pamatování a řešení hádanek.
*   🔮 **Moc (MOC):** Vaše duše, štěstí, síla vůle a vaše magická rezerva.
*   😎 **Charisma (CHA):** Vedení, přitažlivost a schopnost lhát (nebo svádět) lidi.

### 2. Rychlé matematiky (Odvozené charakteristiky)
Motor tyto hodnoty automaticky vypočítá na základě vašich atributů:

*   🩸 **Život (ŽIV):** `CON * 10`. Pokud klesne na 0... no, víte co. F.
*   ✨ **Mana (MAN):** `(POD * 10) + INT`. Palivo pro vaše kouzelnické triky. Bez many žádné triky. (Čaroděj bez many je jen chlapík v róbě dělá cosplay).
*   ⚡ **Výdrž (VÝD):** `((CON+FUE+DES)/3)*10 + POD`. Vaše energie na boj a pohyb, aniž byste zemřeli při pokusu.
*   🧠 **Lidskost (LID):** `(CON+POD) * 5`. (Pouze v Cyberpunku: Měří, kolik vám zbylo lidskosti, než vás dráty připraví o rozum).
*   ⚔️ **Akční body (AP):** `(INT + DES) / 2`. Určuje vaši iniciativu. Kdo udeří první, udeří dvakrát.

### 3. Vaše dovednosti
Začínají základní hodnotou (např. Plížení = OBR + INT) a zlepšují se jejich používáním. Je to procento (%).

### 4. Řešení akcí (Kostka)
Když se pokusíte o něco riskantního (šplhání, lhaní, útok...), AI vás požádá o hod. Hra hodí neviditelnou **d100**. **(Pamatujte: Kostky vás nenávidí. Je to osobní).**

*   **Váš cíl:** Hodit číslo **MENŠÍ NEBO ROVNÉ** vaší úrovni dovednosti.
    *   *Příklad:* Máte 45 % v Lezení.
    *   Hodíte 30: ✅ **Úspěch**. Lezete jako opice.
    *   Hodíte 80: ❌ **Neúspěch**. Svezete se dolů.
    *   **Kritický úspěch:** Hodit méně nebo rovno **1/5 vaší dovednosti** (nebo 01). Epické! Provádíte mimořádný parkour s přemetem.
    *   **Přešlap:** **99 nebo 100**. Kostky rozhodly, že dnes není váš den. Kalhoty se vám spustí v půlce cesty a vy spadnete obličejem napřed.

---

## 💡 TIPY PRO NEPŘEDČASNÉ UMÍRÁNÍ (RYCHLE)

*   **✍️ Buďte popisní:** Nepište jen "útočím". Napište: *"Pokouším se vyhnout jeho sekeře kotoulem po zemi a vrazit mu dýku do kotníku"*. AI vás odmění.
*   **🧪 Experimentujte:** Nejste omezeni tlačítky. Pište šílenosti! AI bude improvizovat.
*   **🎭 Hrajte roli:** Vžijte se do postavy. Čtěte popisy a jednejte tak, jak by jednala vaše postava, ne vy v pyžamu.

---

## ⚔️ BOJ (Do zbraně!)

Když slova selžou, nastává čas rvaček. Boj je **taktický** a funguje po **tickech** (čase).

### 🕹️ Jak to funguje:
*   **Ticky:** Každá akce stojí čas. Těžké zbraně jsou pomalé (spotřebují hodně ticků). Dýky jsou rychlé.
*   **Vaše rychlost:** Závisí na vašich Akčních bodech (AP).

### Základní akce:
*   **🗡️ Útok:** Udřete tím, co máte tasené.
*   **🛡️ Blok:** Zaujmete obrannou pozici. Snižuje poškození, ale spotřebovává výdrž.
*   **🏃 Útěk:** Od zbabělců (nebo od moudrých, kteří chtějí žít).
*   **🏳️ Vzdát se:** Pokud vidíte, že nevyhrajete, můžete prosit o milost.
*   **✨ Magie / Kybernetika:** Oheň, laserové paprsky, hackování...

### 💬 Akce volným textem (NOVINKA!)
Nemáte rádi tlačítka? Napište, co chcete dělat, jako byste mluvili s živým Mistrem hry!
*   **Příklady:** *"Seslat ohnivou kouli na goblina"*, *"Tasit svůj runový meč"*, *"Použít lektvar na sebe"*.
*   **Režisér scény:** Boj nyní ožívá. AI generuje environmentální události a reakce, které obohacují narativ: padající trámy, couvající nepřátelé, padající pochodně. Bojiště už není statické!
*   **Pokud AI nerozumí:** Požádá vás o přeformulování. Vaše kolo se NEZTRATÍ!
*   **⚠️ Omezení:** Přesun předmětů mezi sloty (vybavit z batohu, nabít munici) se provádí **Drag & Drop** v rozhraní, ne textem.

### ⚠️ ZLATÉ PRAVIDLO PŘEŽITÍ
**TAS PŘED BOJEM!**
Tasení zbraně uprostřed boje stojí čas (Ticky). Pokud vás chytí s mečem v pochvě, dostanete, co vám patří, zatímco se budete nemotorně snažit ho vytáhnout. NEBO HORŠÍ JEŠTĚ!, POKUD MÁTE ZBRANĚ V BATOHU MÍSTO VE SLOTU VYBAVENÍ (Omluva, musím vyndat dlouhý meč z batohu, myslím, že jsem ho měl tady... někde...) 🤦‍♂️
👉 Klikněte na štítek vybavené zbraně (pravý panel), abyste ji tasili. Zeleně se rozsvítí.

Pokus o přesunutí zbraní v boji spotřebuje čas (Ticky) a může vést k překvapivému útoku, navíc je velmi pravděpodobné, že ztratíte kolo, minete kvůli nervům z sekery blížící se k vašemu obočí, nebo vám spadne na zem. (Možná nebylo dobré vytvořit si postavu s ADHD)

---

## ✨ MAGIE A KYBERNETIKA

V závislosti na tom, zda je váš svět "Středověká Fantasy" nebo "Kyberpunk":

### 🧙‍♂️ Fantasy: Kouzla
Jste kouzelník? Můžete očarovat své vybavení.
1.  **Naučit se:** Potřebujete kouzlo ve svém grimoáru.
2.  **Seslat (Drag & Drop):** Přetáhněte kouzlo ze svého seznamu na předmět ve svém inventáři.
3.  **Náklady:** Udržování aktivního očarování **spotřebovává manu za kolo**.
4.  **Upozornění:** Pokud vám dojde mana uprostřed boje, ohnivý meč se opět stane zrezivělým kusem železa.

### 🦾 Kyberpunk: Implantáty
Chcete oči s zoomem nebo ruce gorily?
1.  Najděte **Technochirurga** (NPC ve službě).
2.  Zaplaťte kredity (nic není v budoucnu zdarma).
3.  **Náklady na lidskost:** Každý implantát vám vezme kus duše (**Lidskost**).
    *   Pokud jich dáte příliš mnoho, stanete se **Cyberpsychem** (robotická vražedná popelnice) a ztratíte kontrolu nad svou postavou.

---

## 🛒 OBCHODY A SLUŽBY (SIS)

Mluvte s NPC ohledně obchodu.
*   **AI navrhuje, vy rozhodujete:** Když mluvíte s obchodníkem nebo léčitelem, AI vám navrhne jeho služby (oprava, prodej, léčení), ale objeví se tlačítko **"Zobrazit služby"**, abyste vy rozhodli, kdy vstoupíte do transakčního režimu.
*   **Smlouvání:** Vaše dovednost **Obchodování** (založená na Charismatu) rozhoduje o cenách. Pokud jste oškliví nebo nevlídní, podvedou vás.
*   **Prodej:** Klikněte **Pravým tlačítkem** na předmět ve svém inventáři, abyste ho prodali obchodníkovi, nebo ho na něj přetáhněte.

---

## 🎒 SPRÁVA INVENTÁŘE (Tetris)

*   **Váha:** Máte limit nosnosti (Síla + Velikost). Pokud nesete příliš mnoho šrotu, budete pomalí a budete penalizováni (Diogenes není váš přítel).
*   **Panely:**
    *   **Vybavení:** Co máte na sobě.
    *   **Opasek:** Rychlý přístup v boji (použití lektvarů odsud spotřebuje méně času).
    *   **Batoh:** Dno pytle.
*   **Plynulé použití:** Přetáhněte lektvar nebo jídlo přímo na **svou tvář** (portrét) a okamžitě ho spotřebujte. Můžete také použít kontextové menu (pravé kliknutí -> Použít).

---

## 🛠️ FINÁLNÍ ÚPRAVY

V nabídce **Nastavení** můžete upravit všechno:
*   **🌍 Jazyk:** AI vám přeloží celou hru a odpovědi za letu. Jazykový režim aktivován.
*   **👁️ Vzhled:** Velikost písma a barvy, abyste neoslepli. Neonové okraje a vyhlazené stíny pro plné ponoření.
*   **🧠 Nastavení AI:** Změňte model, teplotu atd. (Pamatujte si, co jsme si řekli na začátku manuálu o příznaku `--advanced`, pokud jste z těch, kteří chtějí všechno upravit).

---

## 🎭 OBTÍŽNOST A HUMOR (Přizpůsobte své utrpení)

Než začnete, pamatujte, že AI nejen vypraví, ale také **upravuje svět** podle vašich preferencí. Tyto parametry se volí při vytváření světa a jsou pro daný svět trvalé:

*   **🎮 Obtížnost (Spravováno AI):** Není to jednoduchý násobitel poškození. Hra říká AI: "Hej, obtížnost je tato, jednej podle toho."
    *   **Snadná:** Nikdy nezemřete (nebo to bude téměř nemožné), situace jsou jednodušší, ceny jsou nižší a nepřátelé jsou nešikovnější. AI bude každou scénu racionálně upravovat, aby vaše cesta byla růžová.
    *   **Normální:** Standardní rovnováha.
    *   **Výzva:** AI bude neúprosná, ceny prohibitivní a každá chyba může být vaše poslední.

*   **🃏 Tón humoru:** Definuje, jak s vámi AI mluví a jaké události se vyskytují. Ačkoli každý model má svůj způsob interpretace konceptu "humor", AI se pokusí přizpůsobit tomu, co zvolíte... nebo ne:
    *   **Vážný:** Epický, temný a formální narativ.
    *   **Sarkastický:** AI se bude smát vašim chybám, bude vás neustále popichovat a používat ironický tón.
    *   **Delirantní:** Připravte se na absurdno. Létající krávy, surrealistické situace a totální chaos řízený tím nejzkroucenějším logikem AI.

---

## 🚧 Upozornění: Early Access

RolemIAster je ve **vývoji**, pomalu se vaří.
*   Můžete narazit na chyby (nebo "neočekávané vlastnosti").
*   Každý týden přidávám nové věci.
*   Vaše zpětná vazba má cenu zlata! Řekněte mi, co se vám líbí a co se vám líbí moc. (Pokud se vám něco nelíbí, řekněte mi to taky, ale s láskou).

Teď jděte, hoďte iniciativu a vytvořte svou legendu!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->