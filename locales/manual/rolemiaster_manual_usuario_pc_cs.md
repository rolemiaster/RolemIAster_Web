# 🐉 Vítejte v RoleMIAster!

Popadněte své kostky (nebo myš, k tomu jste si taky mohli dovolit) a připravte se na dobrodružství, kde jediným limitem je, jak pokroucená je vaše představivost! **RoleMIAster** je nekonečná RPG hra poháněná umělou inteligencí, která vám umožní být hrdinou (nebo padouchem) vašich vlastních příběhů.

---

## ⚠️ PRÁVNÍ UPOZORNĚNÍ (Ta nudná, ale nezbytná část)

**PŘEČTĚTE SI, NEBO BUDETE TRPĚT HNĚV KOSTEK:**

1.  **🤖 Integrovaná lokální AI:** RoleMIAster přináší svůj vlastní digitální mozek. Funguje **bez internetu** a aniž byste museli cokoli složitě nastavovat. Nainstalujte a hrajte!
2.  **☁️ Volitelný Cloud:** Pokud raději utrácíte peníze za externí AI (OpenAI, Gemini...), je to vaše věc a vaše kreditní karta. Náklady jdou plně na vás.
3.  **🎲 Generativní Chaos:** AI si vymýšlí příběh za pochodu. Pokud se vypravěč pomátne a prohlásí, že prší krávy, nekoukejte na nás. Vývojář nenese odpovědnost za šílenosti, které model vygeneruje.
4.  **🏗️ Předběžný přístup (Early Access):** Toto je stále ve výstavbě. Pokud najdete chybu, není to chyba, je to překvapivá "funkce"! (Pošlete nám zpětnou vazbu, prosím, moc nám to pomůže).

---

## 🖥️ SYSTÉMOVÉ POŽADAVKY A DIGITÁLNÍ MOZKY (AI)

RoleMIAster funguje s **lokální umělou inteligencí**. To znamená, že váš PC bude odvádět těžkou práci při přemýšlení. Nepotřebujete internet, ale potřebujete grafickou kartu, která není z doby dinosaurů. (Poznámka: Pokud je ve vaší místnosti zima, tato hra funguje jako bezplatné topení).

### ⚙️ Pojmy pro začátečníky

**VRAM (Video RAM)** je benzín pro AI.
*   RoleMIAster potřebuje "pamatovat si" **12 000 až 16 000 slov (tokenů)**, aby neztratil nit příběhu.
*   Pokud vaší GPU dojde paměť, hra poběží pomaleji než šnek s astmatem.

---

### 📊 KATALOG MODELŮ (Vyberte si svůj jed)

Spravujte své AI v **Nastavení → Integrovaná lokální AI → Správa modelů**.

#### 🏆 Rodina Qwen 2.5 (Ta smetánka)

| Model       | Velikost | Min. VRAM | Úroveň | Verdikt                                                               |
|-------------|----------|-----------|--------|-----------------------------------------------------------------------|
| **Qwen2.5-3B** | ~2.5GB   | **8GB**   | B      | 👶 **Učeň.** Odvede svou práci, ale nechtějte po něm, aby psal Shakespeara. Občas se zamotá. |
| **Qwen2.5-7B** | ~5.5GB   | **12GB**  | A      | ✅ **VYVOLENÝ.** Vyvážený, chytrý a rychlý. Je to výchozí doporučený model.      |
| **Qwen2.5-14B**| ~10GB    | **16GB**  | S      | 🧐 **Profesor.** Bohaté, hluboké vyprávění a velmi přirozené dialogy.     |
| **Qwen2.5-32B**| ~22GB    | **32GB**  | S+     | 👑 **Bohovská úroveň.** Potřebujete vesmírnou loď (RTX 3090/4090), abyste to rozběhli. |

---

### 🎮 RYCHLÝ PRŮVODCE VÝBĚREM

| Vaše grafika | VRAM    | Doporučený model | Výsledek                                 |
|--------------|---------|------------------|------------------------------------------|
| GTX 1050/1060| 4GB     | Qwen2.5-3B       | 🆗 Těsné, ale hratelné (nízký kontext) |
| GTX 1070/1660| 6GB     | Qwen2.5-3B       | 🆗 Běží dobře                            |
| RTX 2060/3060| 8GB     | Qwen2.5-3B       | 🚀 Letí                                   |
| RTX 3070/4060Ti| 12GB   | **Qwen2.5-7B**   | ✅ Ideální zážitek                      |
| RTX 3090/4080| 16-24GB | Qwen2.5-14B      | 🌟 Luxus                                  |
| RTX 4090     | 24GB    | Qwen2.5-32B      | 👑 Maximální kvalita                     |

**💡 Pro tip:** Vždy nechte zhruba **2 GB VRAM volných** pro operační systém, jinak začne Windows naříkat a zavírat věci.

---

### 🚨 POMOC! MŮJ POČÍTAČ JE PŘÍLIŠ POMALÝ! (Problémy s VRAM)

Pokud hře trvá odpovědět déle než vašemu crushi na WhatsAppu, pravděpodobně jste vyčerpali VRAM.

**Příznaky toho, že jste to přehnali:**
1.  **Model se přesouvá do RAM:** Počítač používá normální paměť místo grafické. Výsledek: EXTRÉMNÍ POMALOST.
2.  **Mírné přetečení (1-2 GB):** 30-60 sekund na odpověď.
3.  **Střední přetečení (3-5 GB):** 2-5 minut. Můžete si jít pro kávu.
4.  **Vážné přetečení:** 10-30 minut. Nehratelné.

#### 🛡️ Nouzový protokol
Pokud se věci pokazí, postupujte v tomto pořadí:

1.  **📉 Snižte % VRAM:** Přejděte do Nastavení a snižte na **85 %**. Restartujte a zkuste.
2.  **🧹 Vyčištění:** Zavřete ten prohlížeč se 40 otevřenými kartami. Požírají vaši paměť.
3.  **🛑 Limit 70 %:** Nikdy neklesejte pod **70 %** přidělené VRAM.
    *   *Proč?* Protože AI potřebuje prostor na "myšlení" (KV cache). Pokud jí dáte méně než 70 %, ztratí paměť a zobrazí chybu.
4.  **🔙 Taktický ústup:** Pokud nic jiného nefunguje, snižte na menší model (přejděte z 7B na 3B).

---

### ⚙️ POKROČILÉ NASTAVENÍ MODELU

Pro ty, kteří rádi mačkají tlačítka v **Nastavení → Integrovaná lokální AI**:

| Možnost         | Funkce                                       | Doporučení                          |
|-----------------|----------------------------------------------|-------------------------------------|
| **GPU Layers**  | Kolik modelu se načte do grafiky             | **-1** (Znamená "VŠECHNO". Nedotýkejte se, pokud nevíte, co děláte) |
| **Max. Kontext**| "Krátkodobá paměť" AI                        | **16384 - 32768** (Méně než toto a AI bude trpět amnézií) |
| **Teplota**     | Kreativita vs. Šílenství                     | **0.7 - 0.8** (Vyšší = bláznivější; Nižší = robotická) |
| **Historie RAG**| Pamatování si věcí z dávné minulosti         | **Ano** (Nezbytné pro dlouhé kampaně) |
| **Cache Embeddings**| Zrychluje vyhledávání vzpomínek          | **Ano** (Zrychluje běh)              |

---

### 🔧 ŘEŠENÍ PROBLÉMŮ (Troubleshooting)

| Problém           | Oprava                                                                            |
|-------------------|-----------------------------------------------------------------------------------|
| **Pomalá AI / Lag**| Ověřte, zda `GPU Layers` je -1. Zavřete Chrome. Snižte `Max. Kontext`.                |
| **Chyba paměti (OOM)**| Snižte `Max. Kontext` nebo zvolte menší model (3B).                               |
| **AI blouzní / Halucinuje**| Snižte `Teplotu` na 0.6. Pokud je stále šílená, restartujte aplikaci.             |

---

### 🌐 ALTERNATIVNÍ POSKYTOVATELÉ (Pouze pro experty)

> **Poznámka:** Lokální AI dodávaná se hrou je více než dostačující. Toto je pouze pro pokročilé uživatele nebo odvážné.

*   **Externí lokální enginy:**
    *   **Ollama / LM Studio:** Pokud už máte své vlastní fajn modely, můžete je použít.
*   **Cloudové API (placené):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Vyžaduje internet a placení.
    *   Nastavte v: **Nastavení → AI → Přidat nového poskytovatele**.

---

## 🎲 JAK HRÁT?

Při otevření hry máte dvě možnosti:

1.  **🆕 Nové dobrodružství**: Vytvořte svou legendu od nuly. Hra vás provede výběrem rasy, třídy, světa a zápletky. (Pokud vám život nadělí citróny... nebo 3 v Síle, staňte se bardem).
2.  **💾 Načíst hru**: Pokračujte přesně tam, kde jste skončili před tou ponižující smrtí. (Nebo abyste opravili ten "malý výpočetní omyl" s drakem).

### Rozhraní (Vaše řídicí kabina)

*   **Levý panel (VY):** Vaše postava. Životy, mana, schopnosti a to, jak jste pohlední (Charisma).
*   **Střední panel (PŘÍBĚH):**
    *   **Nahoře:** Kde vypravěč vypráví, co se děje.
    *   **Dole:** Vaše tlačítka rozhodnutí a textové pole pro psaní toho, co chcete udělat.
*   **Pravý panel (VAŠE VĚCI):** Inventář a vybavení. Ráj pro digitální Diogena.

---

## 📜 PRAVIDLA HRY (Ano, jsou tu pravidla)

RoleMIAster používá klasický a robustní systém d100 (sto stěnná kostka).

### 1. Vaše atributy (Co vás definuje)
Generují se náhodně, jako v klasickém stolním RPG!

*   💪 **Síla (SÍL):** Pro silné údery a zvedání kamenů.
*   ❤️ **Odolnost (ODL):** Pro snášení úderů, nemocí a jedů.
*   🐘 **Velikost (VEL):** Velký a těžký, nebo malý a hbitý.
*   🏃 **Hbitost (HBI):** Obratnost, přesnost a nezakopnutí o vlastní nohy.
*   🧠 **Inteligence (INT):** Učení se, pamatování a řešení hádanek.
*   🔮 **Moc (MOC):** Vaše duše, štěstí, síla vůle a magie.
*   😎 **Charisma (CHA):** Vedení, přitažlivost a schopnost klamat lidi.

### 2. Rychlé matematiky (Odvozené vlastnosti)
*   **Životy (ŽV):** `(ODL + VEL) / 2`. Pokud klesnou na 0... no, víte. ZM.
*   **Mana (MV):** Rovná se vaší MOC. Bez many nejsou žádné triky. (Mág bez many je jen chlap v róbě cosplayující).
*   **Akční body (AP):** `(INT + HBI) / 2`. Určuje vaši iniciativu. Kdo udeří první, udeří dvakrát.

### 3. Vaše schopnosti
Začínají s základní hodnotou (např. Plížení = HBI + INT) a zlepšují se jejich používáním. Jedná se o procenta (%).

### 4. Řešení akcí (Kostka)
Když se pokusíte o něco riskantního (šplhání, lhaní, útok...), AI vám požádá o hod.
Hra hodí neviditelnou **d100**. **(Pamatujte: Kostky vás nenávidí. Je to osobní).**

*   **Váš cíl:** Hodit **MÉNE NEBO ROVNO** vaší schopnosti.
    *   *Příklad:* Máte 45% na Šplhání.
    *   Hodíte 30: ✅ **Úspěch**. Lezete jako opice.
    *   Hodíte 80: ❌ **Neúspěch**. Sjedete si záda.
    *   Hodíte 01-05: ✨ **KRITICKÝ ÚSPĚCH!** Provedete epický parkour s přemetem.
    *   Hodíte 99-100: 💀 **PIFIE!** Spadne vám kalhoty v půlce cesty a zřítíte se na obličej.

---

## 💡 TIPY, JAK (RYCHLE) NEUMŘÍT

*   **✍️ Buďte popisní:** Nepište jen "útočím". Napište: *"Pokusím se uhnout jeho sekeře tím, že se skutálím po zemi a vrazím mu dýku do kotníku."* AI vás odmění.
*   **🧪 Experimentujte:** Nejste omezeni tlačítky. Pište šílenosti! AI bude improvizovat.
*   **🎭 Roleplayujte:** Vžijte se do role. Čtěte popisy a jednejte, jako by to dělala vaše postava, ne vy v pyžamu.

---

## ⚔️ BOJ (Do zbraně!)

Když slova selžou, nastává čas na bitku. Boj je **taktický** a funguje na **Ticky** (čas).

### 🕹️ Jak to funguje:
*   **Ticky:** Každá akce stojí čas. Těžké zbraně jsou pomalé (spotřebují hodně ticků). Dýky jsou rychlé.
*   **Vaše rychlost:** Závisí na vašich Akčních bodech (AP).

### Základní akce:
*   **🗡️ Útok:** Zasáhněte tím, co máte tasené.
*   **🛡️ Blok:** Dostanete se do obrany. Snižuje poškození, ale spotřebovává výdrž.
*   **🏃 Útěk:** Od zbabělců (nebo moudrých, kteří chtějí žít).
*   **🏳️ Vzdát se:** Pokud vidíte, že nevyhrajete, můžete prosit o milost.
*   **✨ Magie / Kybernetika:** Oheň, laserové paprsky, hackování...

### ⚠️ ZLATÉ PRAVIDLO PŘEŽITÍ
**PŘED BOJEM TASETE ZBRAŇ!**
Tasení zbraně uprostřed boje spotřebuje čas (Ticky). Pokud vás přistihnou s taseným mečem v pochvě, dostanete do průkazu, zatímco se ho nešikovně snažíte vytáhnout. NEBO HORŠÍ, POKUD MÁTE ZBRANĚ V BATOHU MÍSTO VE SLOTU VYBAVENÍ (Promiňte okamžik, musím vytáhnout velký meč z batohu, vím, že jsem ho tu někde měl... někde...) 🤦‍♂️
👉 Klikněte na **štítku tasené zbraně** (pravý panel), abyste ji vytasili. Zazelená se.

Pokus přesouvat zbraně v boji spotřebovává čas (Ticky) a může vést k překvapivému útoku, navíc je velmi pravděpodobné, že ztratíte tah, minete kvůli nervozitě z přibližující se sekery k vašemu obočí, nebo vám spadne na zem. (Možná nebylo dobré si vytvořit postavu s ADHD)

---

## ✨ MAGIE A KYBERNETIKA

V závislosti na tom, zda je váš svět "Středověká fantazie" nebo "Cyberpunk":

### 🧙‍♂️ Fantazie: Kouzla
Jste kouzelník? Můžete očarovat své vybavení.
1.  **Naučte se:** Potřebujete kouzlo ve své knize kouzel.
2.  **Hoďte (Drag & Drop):** Přetáhněte kouzlo ze svého seznamu na předmět ve svém inventáři.
3.  **Náklady:** Udržování aktivního kouzla **spotřebovává manu za kolo**.
4.  **Upozornění:** Pokud vám uprostřed boje dojde mana, ohnivý meč se opět stane rezavým kusem železa.

### 🦾 Cyberpunk: Implantáty
Chcete oči se zoomem nebo paže gorily?
1.  Najděte **Technosurgeon** (NPC v službách).
2.  Zaplaťte kredity (v budoucnosti nic není zdarma).
3.  **Náklady na lidskost:** Každý implantát vám odebere kousek duše (**Lidskost**).
    *   Pokud jich nainstalujete příliš mnoho, stanete se **Cyberpsychikem** (vražedným toustovačem na nohou) a ztratíte kontrolu nad svou postavou.

---

## 🛒 OBCHODY A SLUŽBY

Promluvte si s NPC a obchodujte.
*   **Smlouvání:** Vaše schopnost **Obchodování** (založená na Charismatu) rozhoduje o cenách. Pokud jste oškliví nebo nevlídní, budou vás podvádět.
*   **Prodej:** **Pravým kliknutím** na předmět ve svém inventáři ho prodejte obchodníkovi.

---

## 🎒 SPRÁVA INVENTÁŘE (Tetris)

*   **Váha:** Máte limit zátěže (Síla + Velikost). Pokud nesete příliš mnoho šrotu, budete pomalí a potrestaní (Diogen není váš přítel).
*   **Panely:**
    *   **Vybavení:** Co máte na sobě.
    *   **Opasek:** Rychlý přístup v boji (používání lektvarů odtud stojí méně času).
    *   **Batoh:** Dno pytle.
*   **Rychlé použití:** Přetáhněte lektvar nebo jídlo přímo na **svou tvář** (portrét) k okamžitému použití.

---

## 🛠️ FINÁLNÍ NASTAVENÍ

V menu **Nastavení** můžete měnit vše:
*   **🌍 Jazyk:** AI vám v reálném čase přeloží celou hru a odpovědi.
*   **👁️ Vzhled:** Velikost písma a barvy, abyste neoslepli.
*   **🧠 Nastavení AI:** Změňte model, teplotu atd.

---

## 🚧 Upozornění: Předběžný přístup (Early Access)

RoleMIAster je ve **vývoji**, pomalu se vaří.
*   Můžete narazit na chyby (nebo "neočekávané vlastnosti").
*   Každý týden přidávám nové věci.
*   Vaše zpětná vazba má cenu zlata! Řekněte mi, co se vám líbí a co se vám líbí hodně.

Nyní jděte, hoďte iniciativu a vytvořte svou legendu!

<!-- source_hash: 2511f352 -->