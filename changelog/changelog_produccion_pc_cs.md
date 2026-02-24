****************************************************************************************************
24/02/2026 03:02 - Generování obrázků pomocí AI, narativní vylepšení a ovládání - Beta_v058
****************************************************************************************************
- What's New (CS):
  **⚠️ EXPERIMENTÁLNÍ VĚTEV (BETA NA STEAMU)**
  Tato verze je aktuálně dostupná pouze v **Experimentální větvi** na Steamu. Pro její aktivaci:
  1. Klikněte pravým tlačítkem na **RolemIAster** ve vaší knihovně na Steamu.
  2. Vyberte **Vlastnosti...**
  3. Přejděte na záložku **Beta verze**.
  4. V části "Účast v beta verzi" vyberte z rozbalovací nabídky **experimental**.
  
  **Novinka: První fáze generování obrázků pomocí AI**
  - 🎨 **Váš svět v obrazech:** Integroval jsem počáteční systém generování obrázků pomocí umělé inteligence. Jak hrajete, systém se snaží generovat portréty a krajiny, které dokreslují atmosféru vaší hry.
  - 🖼️ **Dynamická pozadí:** Obrázky se generují na pozadí bez přerušení vaší hry. Uvidíte, jak se postupně objevují na pozadí, na kartách postav a v Kodexu.
  - 🧹 **Správa obrázků:** Nový panel pro zobrazení a odstranění vygenerovaných obrázků, které se vám nelíbí.
  
  **Vylepšení v generování postav:**
  - ⚙️ **Solidnější náhodné generování:** Sjednotil a vylepšil jsem pravidlový engine, který AI používá k tvorbě postav od nuly, což zaručuje logičtější inventáře (5 až 10 smysluplných předmětů) a vyváženější deníky postav.
  - 🧠 **Rozdělený mozek:** AI nyní lépe chápe, kdy má postavu "vymyslet" od nuly a kdy by se měla omezit na extrakci dat z biografie, kterou jste sami napsali.
  - ⚡ **Rychlost na míru:** Nová sekce ve Vizuálním nastavení. Vyberte si mezi "Rychlá" (1 krok), "Střední" (2 kroky) nebo "Vysoká" (4 kroky), abyste přizpůsobili dobu generování výkonu vašeho počítače.
  - 🛠️ **Technická optimalizace:** AI model pro obrázky se načítá do **RAM (paměti)** a zpracovává se přes **procesor (CPU)**, aniž by zabíral video paměť (VRAM). To zajišťuje, že nezasahuje do výkonu hlavní AI hry (LLM). Vyžaduje přibližně 5 GB dodatečné RAM, přičemž se stále drží v rámci oficiálních minimálních požadavků na Steamu.
  - 📤 **Sdílejte svá dobrodružství:** Všechny vygenerované obrázky se automaticky ukládají. Najdete je ve složce: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Výběr modelů (Pokročilé):** Pokud spustíte hru s parametrem `--advanced`, můžete nyní v panelu Vzhled vybrat, který AI model se má pro obrázky použít. To umožňuje nadšencům zkoušet různé verze Stable Diffusion optimalizované pro OpenVINO (soubory .xml/.bin).
  
  **Vyprávění a AI mozek:**
  - 🧠 **Konec smyček:** Do AI byla implementována nová "Doktrína paměti". Nyní lépe rozlišuje mezi "vzpomínkami" (co už se stalo) a "přítomností" (co se právě děje). To pomáhá redukovat případy, kdy se AI opakovala nebo se zasekla.
  - 📜 **Historické archivy:** Systém prezentuje vaše vzpomínky AI jako "Uzavřený historický archiv", což jí usnadňuje využívat tyto informace jako referenci pro posun v příběhu.
  - ⚡ **Optimalizované instrukce:** Byl vylepšen způsob, jakým hra vyžaduje vyprávění ve vašem jazyce, což uvolňuje kapacitu modelu, aby se mohl soustředit na kreativitu.
  - 👁️ **Fokus na vyprávění:** Vnímání AI bylo přepsáno. Nyní lépe chápe, které prvky jsou "statickým pozadím", a nebude je zbytečně opakovat v každém odstavci.
  - 🔀 **Jasnější rozhodnutí:** AI nyní nabízí lépe definované únikové cesty. Její návrhy (tlačítka) se dělí na průzkum okolí (Prohloubit) nebo změnu směru (Odklonit se).
  - 🫵 **Přímé oslovování:** Základní instrukce byla upravena tak, aby bylo zajištěno, že vám AI tyká ("Ty"), což zlepšuje osobní ponoření do hry.
  
  **Tvorba postavy:**
  - 🖼️ **Portréty postav:** Při generování postavy pomocí AI se systém pokusí vytvořit portrét na základě jejího věku, profese a popisu. Mějte na paměti, že se jedná o počáteční verzi a věrnost (zejména u věku) se může lišit v závislosti na použitém modelu. (Stále provádím testy, ale začátek je dobrý)
  - 🎲 **Spolehlivé náhodné generování:** Byla opravena chyba, kdy mohlo tlačítko "Generovat pomocí AI" při prvním pokusu selhat a ponechat pole prázdná. Nyní inteligentní systém oprav zajišťuje, že je odpověď vždy platná.
  
  **Správa vygenerovaných obrázků:**
  - 🖼️ **Galerie AI obrázků:** Nový panel v nabídce Soubor, který zobrazuje všechny obrázky vygenerované AI během vašich her (portréty, pozadí). Můžete je filtrovat podle typu obrázku nebo podle světa.
  - 🗑️ **Selektivní mazání:** Vyberte jeden nebo více obrázků a smažte je, pokud se vám nelíbí (možná ten, kde se AI rozhodla, že je dobrý nápad zaparkovat autobus ve stájích hradu). Systém vyčistí jak samotný soubor, tak i jeho interní záznam.
  - 📂 **Rychlý přístup:** Dvojitým kliknutím na jakoukoliv miniaturu otevřete složku, kde se soubor nachází. Pokud už máte složku otevřenou, použije se stejné okno.
  - 💾 **Zapamatování prostoru:** Velikost okna galerie se automaticky ukládá mezi jednotlivými sezeními.
  
  **Výkon na slabších sestavách (Důležité pro GPU s malou VRAM):**
  - 🧠 **PSR - Hybridní řízení:** Nový systém, který rozděluje práci AI do dvou fází: Plánování (Šéfkuchař) a Provedení (Kuchaři). To umožňuje, aby lokální modely s 8 GB VRAM fungovaly bez pádů z důvodu přetížení kontextu (+12K tokenů), a to za cenu vyšší latence. Interakce s AI přechází z jediného promptu na sérii promptů (čím menší je VRAM, tím více promptů se vygeneruje a tím delší bude doba odezvy).
  - ⚡ **Inteligentní provádění:** Systém se automaticky rozhodne, zda zpracuje vše najednou (monoliticky) nebo to rozdělí na části (iterativně) podle vaší dostupné VRAM. Grafické karty s menší VRAM aktivují režim po částech jen v případě potřeby.
  - 📊 **Dynamická optimalizace:** PSR snižuje zátěž tokenů během generování, což umožňuje uživatelům s 4GB grafickými kartami dokončit tvorbu postavy a generování příběhu, u kterých dříve docházelo k zamrznutí.
  - 🔄 **Zachování soudržnosti:** I přes rozdělení práce systém injektuje "hlavní záměr", aby AI neztratila nit toho, co zrovna dělala.
  
  **AI hlasy (postupné vylepšování):**
  Generování hlasů v reálném čase ve všech jazycích (některé jazyky jsou omezenější než jiné, nejpestřejší nabídka typů hlasů je v angličtině)
  - 🗣️ **Namluvené bojové pokřiky:** Při zahájení boje proti nepřátelům se nyní přehraje kontextová úvodní hlasová hláška.
  - 🎭 **Dynamické fráze podle kontextu:** Engine dokáže generovat krátké hlasové repliky pro konkrétní události (služby/boj) v závislosti na jazyce, prostředí a profilu postavy.
  - 🧠 **Interní hlasové šablony:** Technické hlasové šablony byly odděleny od narativního systému, aby nedocházelo k narušování příběhu.
  - 🔊 **Větší srozumitelnost při poslechu:** Byla zlepšena srozumitelnost a prozódie syntézy, aby měla přednost srozumitelná dikce.
  
  **⚠️ Upozornění na kompatibilitu (Předchozí rozehrané hry):**
  - 🔄 Kvůli množství interních změn v pravidlovém enginu a systému prostředí budou **dříve uložené hry a světy pravděpodobně i nadále hratelné**, ale je velmi pravděpodobné, že se u nich projeví chyby nebo neočekávané chování. **Doporučuje se vytvořit nový čistý svět**, abyste si mohli správně užít všechna vylepšení.

****************************************************************************************************
15/02/2026 02:57 - Přímé psaní, opravy stability a detekce - Beta_v057
****************************************************************************************************
- What's New (CS):
  **Stabilita:**
  - 🛠️ **Sbohem pádům v nastavení:** Opraveno několik chyb, ke kterým docházelo za určitých podmínek a které bránily otevření nebo úpravě nastavení AI při změně modelu nebo resetování hodnot.
  - 🗃️ **Tichá databáze:** Otravné upozornění na „Nekompatibilní databázi“ při spuštění hry se již nebude zobrazovat, pokud je vaše databáze v pořádku. Zobrazí se pouze v případě, že dojde ke skutečné strukturální změně vyžadující migraci.
  
  **Herní zážitek:**
  - 🎯 **Přesné ovládání AI:** Nyní můžete ručně zadávat hodnoty kontextu, tokenů, teploty nebo vrstev GPU přímo do číselného pole vedle posuvníku. Už nejste odkázáni jen na posuvníky! Oba ovládací prvky jsou synchronizované: pohněte posuvníkem a číslo se aktualizuje, nebo napište číslo a posuvník se posune.
  - ⌨️ **Přímé psaní:** Pro napsání akce už nemusíte klikat do textového pole! Nyní můžete začít psát rovnou, jakmile jste na herní obrazovce. Pokud pracujete s inventářem nebo jiným panelem a pak chcete psát, prostě začněte psát bez nutnosti cokoli vybírat. Systém automaticky přesměruje vaše stisky kláves do pole pro akci. Nekoliduje s menu, dialogy ani systémovými zkratkami.
  
  A několik dalších menších změn...

****************************************************************************************************
14/02/2026 21:48 - Synchronizace kontextu a ovládání odpovědí AI - Beta_v056
****************************************************************************************************
- What's New (CS):
  **Systémy a výkon:**
  - 🧠 **Úplná kontrola kontextu:** Nyní můžete upravovat jak paměť AI (`n_ctx`), tak délku jejích odpovědí (`Max Tokens`) pomocí mnohem intuitivnějších posuvníků.
  - ♾️ **Neomezený režim:** Posunutím na minimum aktivujete režim „Neomezeno“, čímž umožníte výkonným modelům, jako je Gemini, využít jejich plnou kapacitu bez omezení.
  - ⚡ **Restart ovladačů:** Nová možnost ve spouštěči pro restart grafických ovladačů před hraním (volitelné, konfigurovatelné v launcheru). Obrazovka nyní při spuštění problikne, čímž zajistíme dostupnost veškeré VRAM a její vyčištění od zbytků dat.
  - 🛠️ **Robustní konfigurace:** Opraveny vizuální chyby a technické závady při ukládání nastavení vašich preferovaných poskytovatelů AI.
  - 🚀 **Lepší detekce chyb:** Hra nyní chytřeji detekuje, když externí AI dojde místo.
  
  **Mechanismy a svět:**
  - 🎒 **Zaručený inventář:** Už žádné začátky dobrodružství bez předmětů. Systém SDIA nyní dohlíží i na tvorbu postavy, aby vaše vybavení bylo vždy k dispozici.
  - 📜 **Očištěné lore:** Opravena chyba, která vkládala fragmenty „kódu“ nebo podivného textu do historie vašeho světa. Kodex bude nyní čistší a čitelnější.
  - ⚠️ **Průvodce kompatibilitou:** Do nastavení byla přidána upozornění, která vám pomohou vybrat kompatibilní modely (Instruct/Chat).
  - ⚙️ **Spolehlivé implantáty:** Opravena definice slotů a načítání pravidel při tvorbě postavy. Všechna vaše kybernetická vylepšení nyní budou využívat oficiální sloty a automaticky se správně vybaví.
  - 🎓 **Limit učedníka:** Upraveno počáteční vyvážení dovedností. AI generuje balíček bodů, které se automaticky rozdělí do nejdůležitějších dovedností podle kontextu vaší postavy. Vaši hrdinové nyní začnou jako skuteční nováčci a budou postupovat logičtějším způsobem.

****************************************************************************************************
14/02/2026 05:06 - Posílení integrity, povědomí o postavách a optimalizace - Beta_v055
****************************************************************************************************
- What's New (CS):
  - 🧠 **Priorita AI podle vašeho gusta:** Nyní můžete přetahovat své konektory AI a rozhodnout, který použít jako první. Pokud jeden selže, hra automaticky zkusí další ve vašem seznamu priorit.
  - ⚙️ **Ovládání přednačítání:** Do spouštěče byla přidána možnost rozhodnout, zda chcete přednačíst lokální model AI, nebo jej načíst pouze v případě potřeby (úspora zdrojů při spuštění).
  - 🛡️ **Bezpečné a čisté mazání:** Při odstranění světa se systém nyní postará o vyčištění naprosto všech souvisejících dat (postavy a příběh), čímž udrží vaši databázi bezchybnou.
  - 🚀 **Optimalizace paměti:** „Mozek“ AI se nyní načítá pouze jednou a je sdílen mezi všemi funkcemi, což šetří spoustu grafické paměti (VRAM).
  - 🎨 **Inteligentní rozhraní:** Panel pro výběr světů se nyní dokonale přizpůsobí obrazovce a textu, bez oříznutých tlačítek nebo špatně využitých mezer.
  - 🔄 **Vylepšená inteligentní rotace:** Opravil jsem systém rotace, aby to s vaší lokální AI nevzdal hned napoprvé; nyní jí dá šanci se opravit, než začne hledat externí pomoc.
  - 🌍 **Polyglotní a robustní AI:** Detekce objektů a vyprávění jsou nyní přesnější v 10 jazycích, se speciálním jištěním, aby vám nikdy nechyběl příběh.
  - 🛠️ **Zaručená perzistence AI:** Opravena chyba, kvůli které Gemini „zapomínal“ nebo se měnil na Ollama. Vaše priority používání AI se nyní ukládají bezpečně a chirurgicky přesně.
  - ⚡ **Gemini obnoven:** Opraven přístup k modelu Gemini obnovením jeho správných klíčů a URL.
  - 🎨 **Opravené tematické rozhraní:** Rozhodovací tlačítka nyní při načtení hry okamžitě získají barvu vašeho světa (např. zlatá pro fantasy) při načítání hry.
  - 👥 **Povědomí mezi postavami:** AI si je nyní vědoma všech vašich postav! Pokud máte v jednom světě více hrdinů, AI je rozpozná jako obyvatele a bude si pamatovat, co každý z nich udělal jednotlivě.
  - 🧠 **Paměť s přisuzováním:** Systém vzpomínek nyní rozlišuje, kdo kterou akci provedl, čímž zabraňuje tomu, aby si AI pletla vaše minulé činy s činy jiných postav.

****************************************************************************************************
13/02/2026 07:56 - Systém sémantické interpretace boje - Beta_v054
****************************************************************************************************
- What's New (CS):
  🧪 NYNÍ DOSTUPNÉ:
  
  ⚠️ **DŮLEŽITÉ UPOZORNĚNÍ:** HRA MŮŽE MIGROVAT STAROU DATABÁZI NA NOVOU STRUKTURU POMOCÍ MOŽNOSTÍ V LAUNCHERU. NEDOPORUČUJI TO, I KDYŽ VAŠE STARÁ ULOŽENÁ HRA MŮŽE FUNGOVAT, MNOHO VĚCÍ BUDE ROZBITÝCH. MÉ DOPORUČENÍ JE SMAZAT VŠECHNY PŘEDCHOZÍ ULOŽENÉ POZICE. NENÍ NUTNÉ MAZAT CELOU DATABÁZI, POKUD NEJDE O EXTRÉMNÍ PŘÍPAD.
  
  Změny:
  
  - 🌍 **Správce světů a postav:** Nyní máte naprostou svobodu. Vytvářejte vlastní světy s vlastními pravidly a prostředím a v každém z nich vytvořte tolik postav, kolik chcete. **Důležitá poznámka:** Všechny postavy ve stejném světě sdílejí stejnou časovou osu a události, což pokládá základy pro budoucí režim pro více hráčů.
  - 🧠 **Kontextová paměť (Super RAG):** AI má nyní "smysly". Při hledání informací v Lore nebo ve své paměti bere v úvahu, kde jste, s kým jste, zda jste zraněni a co se právě stalo. Pokud jste s králem, vybaví si věci o králích. Pokud jste zraněni, vyhledá pravidla o léčení. Je to mnohem intuitivnější a koherentnější!
  - 🌍 **Lore u první postavy:** Psali jste epický popis svého světa a AI ho u první postavy ignorovala? Vyřešeno! Nyní se manuální popis světa dostane přímo k AI během počáteční tvorby, ještě předtím, než se aktivuje paměťový systém.
  - ⚙️ **Vylepšený systém světů:** Oddělil jsem název vašeho světa od technických pravidel. Nyní můžete svůj svět nazvat, jak chcete, aniž by to ovlivnilo načítání pravidel pro Fantasy nebo Cyberpunk.
  - 📝 **Jasnost při tvorbě:** Vylepšil jsem interní instrukce, aby AI lépe chápala, kdy má vymyslet pozadí příběhu a kdy se má omezit na extrakci vašich statistik.
  - 🧠 **Boj volným textem:** Nyní můžete psát své akce v boji, jako byste mluvili s vypravěčem u stolu: "seslat na sebe léčivé kouzlo", "tasit meč", "použít léčivý lektvar". AI pochopí váš záměr a převede jej do herních mechanik.
  - 🎨 **Nové epické rozhraní!** Hru jsem kompletně předělal. Menu ve stylu RPG, animovaná pozadí a zcela nový vizuální zážitek. Tmavý poloprůhledný styl, neonové okraje a zjemněné stíny pro naprosté vtažení do hry.
  - 🎬 **AI režisér scény (VYLEPŠENO):** Boj nyní ožívá. AI generuje environmentální události a reakce, které obohacují vyprávění: padající pochodně, ustupující nepřátelé, hroutící se trámy. Bojiště už není statické!
  - ⚔️ **Tasení slovy:** Už nemusíte klikat na slot zbraně. Stačí napsat "tasit meč" nebo "vytáhnout sekeru" a systém to automaticky vyhodnotí (POZOR! Udělat to v boji může vést k neúspěchu, fatální chybě a ztrátě tahu!... "Do boje se chodí připraven z domova!").
  - 📖 **Rozpoznaná kouzla:** AI nyní zná celou vaši knihu kouzel. Řekněte "seslat ohnivou kouli", a pokud toto kouzlo máte, sešle ho.
  - 🌍 **Vyprávění ve vašem jazyce:** Příběh nyní striktně respektuje vybraný jazyk a vyhýbá se podivným mixům jazyků (kéž už nikdy neuvidím žádný "spanglish"! Tlačil jsem na AI tolik, že jestli znovu vygeneruje text v jiném jazyce, než je vybrán, tak je asi opravdu prokletá).
  - 🛡️ **Žádné ztracené tahy:** Pokud hra nepochopí vaši akci, požádá vás o přeformulování. Váš tah SE NEZTRÁCÍ.
  - 🎒 **Manuální inventář:** Pro přesun předmětů mezi sloty (vybavení z batohu, nabití munice) používejte rozhraní "táhni a pusť". Zabrání to zmatkům a šetří zdroje AI.
  - 🧪 **Plynulé používání lektvarů:** Nyní můžete přetáhnout lektvary a jídlo přímo na svůj portrét a použít je. Přidal jsem také možnost "Použít" při kliknutí pravým tlačítkem. Intuitivnější a rychlejší!
  - 🩸 **Oprava poškození:** Už nejste nesmrtelní! Opravili jsme problém, kdy ukazatel zdraví neklesal, i když vás zasáhli. Nyní budete trpět, jak se patří.
  - 👻 **Sbohem, duchové předmětů:** Našli jste v příběhu předmět, ale nikdy se neobjevil ve vašem batohu? Problém vyřešen! Systém nyní automaticky opravuje předměty, které AI "zapomene" vytvořit.
  - 🐛 **Kritická oprava NPC:** Vyřešena chyba, která bránila NPC ve správném taktickém rozhodování, což způsobovalo, že místo útoku nebo obrany stále jen "čekaly".
  - 🎒 **Oprava počátečního inventáře:** Nové postavy už nezačínají nahé. Nyní správně obdrží své počáteční vybavení.
  - 🎲 **Tvorba postavy:** Opraven exploit, kdy zvyšování a snižování atributu v určitých mezích generovalo nekonečné body navíc. Konec triku s Charismatem!
  - 🖼️ **Opravené portréty:** Vytvářeli jste svět s vlastním názvem a portréty mizely? Opraveno! Systém nyní najde správné obrázky bez ohledu na to, jak svůj svět pojmenujete.
  - 💍 **Chytré ikony:** Předměty (včetně prstenů) nyní v rozhraní zobrazují přesnější a správné ikony.
  - 🧪 **Vylepšené popisky:** Lektvary, spotřební doplňky a kouzla nyní při najetí myší správně zobrazují všechny informace a účinky.
  - 🎵 **Vylepšení zvuku:** Bojová hudba se už nezastaví po stisknutí předdefinovaných tlačítek.
  - [I18N] **Oprava implantátů:** Přidány chybějící překladové klíče pro sloty implantátů (`slot_implant_*`) a odpovídající ikony (`icon_implant_*`) v `es.json`.
  - [FIX][AUDIO] **Nekonzistentní zvuk:** Zvukové efekty (SFX) vybavování předmětů a tasení zbraní přizpůsobeny prostředí. Systém nyní detekuje `setting_key` a používá futuristické/industriální zvuky v Cyberpunku a klasické zvuky ve Fantasy.
  - [FIX][I18N] **Čištění es.json:** Odstraněno více než 20 duplicitních klíčů v `es.json` a opraveny překlepy v názvech slotů (např. "Oíidos" -> "Oídos").
  - ⚙️ **Inteligentní detekce modelů:** Hra nyní čte přímo "mozek" modelů, které importujete (GGUF). Automaticky detekuje skutečný maximální kontext. (Optimalizovaných oficiálních modelů se to netýká pro zajištění maximální stability).
  - 📂 **Úspora místa:** Při přidání modelu z vašeho počítače jej nyní hra přesune přímo do své složky, místo aby jej kopírovala. Vaše gigabajty vám poděkují!
  - ⚖️ **Spravedlnost v atributech:** Opraven exploit, který umožňoval získat nekonečno bodů při zvyšování a snižování atributů během tvorby.
  - 📖 **Průvodce tréninkem:** Aktualizoval jsem manuál (README) o všechny podrobnosti týkající se toho, jak vaše postavy získávají zkušenosti a zvyšují své atributy.
  - 📜 **Kodex epických světů:** Konec lore ve stylu "poznámka pod čarou"! Generátor nyní vytváří světy s hlubokou historií, popisuje jejich náboženství, zákony, geografii a slavné postavy ve formátu podrobné kroniky.
  - 🧙 **Koherentní příběhy:** Vaše postava se už nerodí v prázdnotě. Její pozadí se nyní inteligentně prolíná s lore světa, který jste právě vytvořili nebo zvolili.
  - ⚡ **Plynulé rozhraní:** Automatické generování příběhů a světů nyní probíhá na pozadí. Konec čekání se zamrzlou obrazovkou!
  - 🚀 **Okamžitý začátek dobrodružství:** Odstranil jsem čekání! Nyní po vytvoření postavy skočíte rovnou do příběhu. Systém využije vaše obohacené pozadí k vytvoření dokonalého začátku, aniž byste museli napsat jediné další slovo.
  - 🎭 **Pozadí s záminkou:** Vaše postavy už nemají jen minulost, ale také naléhavý důvod začít dobrodružství. Nový systém AI automaticky generuje počáteční jiskru příběhu integrovanou do vaší biografie.
  - 🧹 **Zjednodušené rozhraní:** Odstranil jsem tlačítka a obrazovky, které nepřinášely žádnou hodnotu. Tlačítko "Spustit příběh" nyní centralizuje veškerou sílu, abyste mohli začít hrát co nejdříve.
  - [FIX][UI] **Vizuální duplicita při výběru světa:** Opravena chyba, kdy se název světa zobrazoval duplicitně jako "Název [Název]". Nyní se štítek typu skryje, pokud je redundantní.
  - [FEAT][UI] **Rychlé načítání (Jednoduché kliknutí):** Nyní lze načíst postavu nebo zahájit tvorbu nové jedním kliknutím na obrazovce výběru světů. Rozbalování světů zůstalo zachováno, aby se předešlo konfliktům.
  - 🧠 **Kreativnější AI:** Rozbil jsem "smyčku opakování" AI vložením technické variability do každého požadavku. Náhodně generované postavy budou nyní mnohem unikátnější a originálnější a budou ignorovat příklady z průvodce.
  
  🛡️ Pro odvážné, kteří se ODVÁŽÍ bojovat v první linii: Dobrodružství čeká, nyní nezkrotnější než kdy dřív!

****************************************************************************************************
06/02/2026 02:32 - Podpora Vulkanu (AMD/Intel) a robustní zpracování chyb - Beta_v053
****************************************************************************************************
- What's New (CS):
  - 🚀 **Hybridní engine Vulkan:** Oficiální podpora pro grafické karty AMD a Intel! Hra nyní obsahuje dedikovaný engine Vulkan, který se aktivuje automaticky (nebo ručně) pro zrychlení AI na sestavách bez NVIDIA.
  - ⚙️ **Úplná kontrola nad enginem:** Přidali jsme možnost "Vynutit Vulkan" jak do spouštěče, tak do nastavení. Pokud máte problémy s CUDA nebo chcete vyzkoušet výkon Vulkanu (který na mnoha konfiguracích letí), máte to ve svých rukou.
  - 🚦 **Stav systému:** Nyní v panelu stavu přesně uvidíte, jaký engine řve pod kapotou (🟢 ZELENÁ pro CUDA, 🔴 ČERVENÁ pro Vulkan).
  - 🛡️ **Semafor AI:** Pokud se umělá inteligence "unaví" (překročí svou kvótu) nebo vypadne internet, hra vás upozorní jasným a užitečným oknem, místo aby vás nechala čekat v tichosti.
  - 🔄 **Ochrana proti zásekům:** Pokud dojde k chybě připojení, hra už "nerozbije" konverzaci. Vaše možnosti dialogu se znovu objeví, takže to můžete zkusit znovu bez ztráty postupu.
  - ☁️ **Cloudová paměť:** Nabídka nastavení si nyní mezi relacemi správně pamatuje vaše preference poskytovatelů cloudu.

****************************************************************************************************
03/02/2026 20:23 - Optimalizace paměti VRAM a stabilita načítání - Beta_v052
****************************************************************************************************
- What's New (CS):
  - 🧠 **Optimalizovaný mozek:** Opravili jsme závažnou chybu, kvůli které se UI snažila „myslet dvakrát“ najednou, což zdvojnásobovalo využití paměti grafické karty a způsobovalo extrémní zpomalení nebo pády hry. Vaše VRAM vám poděkuje!
  - 💾 **Bezpečné načítání:** Vylepšili jsme celkovou stabilitu při načítání uložených her, abychom zajistili, že návrat do vašeho dobrodružství bude vždy plynulý.

****************************************************************************************************
02/02/2026 00:18 - Kritická oprava: Stabilita, Multi-GPU a vylepšení lokalizace - Beta_v051
****************************************************************************************************
- What's New (CS):
  - 🚑 **Kritická oprava:** Vyřešen problém, který za určitých vzácných okolností bránil spuštění hry („Celkové selhání“) kvůli poškození databáze, které spouštěč nedokázal vyčistit. Nyní je možnost „Vymazat databázi“ mnohem účinnější.
  - ⚡ **Vylepšení hardwaru:** Opravena chyba, kvůli které režim „Automatická konfigurace“ v některých sestavách s neidentickými GPU ignoroval výkon systémů s více grafickými kartami.
  - 🛠️ **Nástroje:** Do spouštěče byla přidána nová možnost pro snadné otevření záznamu (logu) předchozí relace pro usnadnění podpory.
  - 🌍 **Lokalizace:** Opraveno několik tlačítek, která se ve spouštěči zobrazovala v angličtině (Yes/No). Nyní respektují vybraný jazyk.
  - 📖 **Rozhraní:** Vylepšen formát textu informací o verzi pro lepší čitelnost.
  
  - **Již brzy:** Další bod v procesu implementace: kompatibilita s GPU AMD, NVIDIA a Intel prostřednictvím rozhraní Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Oprava manuálů a stabilita - Beta_v050
****************************************************************************************************
- Novinky:
  **Výkon Multi-GPU a kritické opravy!**
  
  * **🚀 Podpora Multi-GPU:** Implementována možnost rozdělit velké modely AI mezi více grafických karet. *Nyní můžete využít celý svůj hardwarový arzenál; Neomezená moc!*
  * **🛡️ Stabilita:** Přidány všechny chybějící knihovny DLL, aby se zabránilo neočekávaným pádům. *Obrnil jsem engine; pokud teď selže, bude to vina kritického neúspěchu při hodu kostkou.*
  * **📖 Dynamické webové manuály:**
    * **Skutečný výběr:** Nabídka jazyků nyní před zobrazením ověřuje, které soubory skutečně existují. *Konec fantomových možností, které nic nedělaly; věštecká magie 5. úrovně.*
    * **Oprava chyby 403:** Vyřešena chyba oprávnění, která bránila zobrazení seznamu změn přímo ve hře. *Naučil jsem aplikaci správně požádat o průchod („Sezame, otevři se!“).*
  * **🌍 Jazyky:** Revize textů a překladů. *Režim polyglota aktivován.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizace a vylepšení AI - Beta_v049
****************************************************************************************************
- Novinky:
  Vyladili jsme herní zážitek důležitými opravami a novým vizuálním nástrojem:

  * **Čistý a spolehlivý inventář:** Už žádné nalézání „fantomových předmětů“ nebo věcí s podivnými názvy v batohu. Implementovali jsme systém narativního ověřování, který zajišťuje, že vše, co seberete nebo koupíte, v herním světě skutečně existuje.
  * **Plynulé dialogy:** Opravili jsme ta otravná tlačítka, která se někdy zobrazovala jako „Unknown“ nebo nereagovala. Nyní budou možnosti dialogu s NPC vždy zobrazovat správný text.
  * **Robustní tvorba postav:** Vytvoření vašeho hrdiny je nyní solidní proces. Vyřešili jsme konflikty, které někdy při kombinování biografie a statistik zanechávaly kartu postavy neúplnou nebo s chybnými statistikami.
  * **Nová stavová lišta AI:** Nyní můžete vidět mozek stroje v chodu! Do horní části jsme přidali lištu, která v reálném čase zobrazuje rychlost odezvy a využití paměti. Vždy tak budete vědět, zda AI „přemýšlí“ o vašem dalším dobrodružství.

****************************************************************************************************
28/01/2026 03:50 - Kritická oprava kompilace - Beta_v048
****************************************************************************************************
- Novinky:
  Vyřešena kritická chyba, která bránila spuštění hry u nových instalací. Vylepšena stabilita a kompatibilita s různými sestavami.

****************************************************************************************************
26/01/2026 19:38 - Webový Launcher & Podpora RTX 50 - Beta_v047
****************************************************************************************************
- Novinky:

  > [!DŮLEŽITÉ]
  > **Z DŮVODŮ KOMPATIBILITY JE NUTNÉ ODSTRANIT PŘEDCHOZÍ DATABÁZI, JINAK JE VELMI PRAVDĚPODOBNÉ, ŽE DOJDE K CHYBÁM V KONFIGURACI AI**
  > **(Řešení: Klikněte na ikonu ozubeného kola ⚙️ v Launcheru -> Smazat databázi)**

  *Kritická podpora pro RTX řady 50: Vyřešena závažná chyba, která způsobovala neočekávané ukončení při pokusu o generování postav na nových grafických kartách NVIDIA (RTX 5070, 5080, 5090).
  (Jelikož nemám k dispozici RTX řady 5000, nemohl jsem přímo ověřit, zda je řešení 100%, ale teoreticky by to mělo být vyřešeno. Čekám zde na vaše vítězné chorály!)
  
  *Aktualizace AI enginu: Aktualizovali jsme lokální mozek hry, aby byl kompatibilní s nejnovějším hardwarem, čímž zajišťujeme, že si offline zážitek mohou užít všichni, bez ohledu na to, jak moderní je jejich vybavení.
  
  *Nový Launcher: Aktualizace a novinky v reálném čase z oficiálního webu.


****************************************************************************************************
26/01/2026 06:49 - Webová integrace dokumentace - Beta_v045
****************************************************************************************************
- Novinky:
  *Uživatelská příručka a seznam změn se nyní načítají přímo z našeho oficiálního webu, což zaručuje, že budete mít vždy nejaktuálnější informace bez nutnosti stahovat opravy. Zahrnuje inteligentní offline režim.

  *Posílili jsme stabilitu hry, aby při spuštění nikdy nezamrzla. Navíc se obchodníci vrátili z dovolené v limbu: nyní se objevují správně, mají zboží v regálech a respektují zasazení světa (žádné kouzelné lektvary v budoucnosti).*

  *Byla opravena chyba, která neumožňovala měnit parametry AI a výběr modelu AI, kvůli čemuž někteří uživatelé s omezenou VRAM nemohli hrát.
  **V případě nutnosti úpravy parametrů AI důrazně doporučuji nejprve zkusit snížit % VRAM na 85 %, restartovat a vyzkoušet. Pokud to stále nestačí, doporučuji zkontrolovat, zda VRAM GPU není využívána jinými procesy mimo hru (v případě potřeby restartujte PC, zavřete aplikace, které mohou zabírat VRAM). Pokud ani po snížení množství VRAM až na 70 % hra nefunguje, nedoporučuji dále snižovat, protože hra nebude schopna zpracovat prompty odesílané do AI. I když se tedy podaří zabránit přetečení VRAM, hra nebude fungovat, protože nebude mít s čím pracovat. V takovém případě je jedinou zbývající možností přejít na nižší model, vrátit parametry AI na automatické nastavení a restartovat.

****************************************************************************************************
26/01/2026 04:00 - Stabilizace jádra a diagnostika služeb - Beta_v044
****************************************************************************************************
- Novinky:
  Stabilizace jádra a diagnostika služeb. Kritické opravy při generování postav, UI (MainWindow) a optimalizace sémantického vyhledávání. Zahájení hloubkové diagnostiky režimu služeb.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logy a stabilita - Beta_v043
****************************************************************************************************
- Popis:
  Opravný patch zaměřený na diagnostiku a opravu smyčky v uživatelském rozhraní.

- Změny:
  Opravena vizuální chyba dialogu restartu
  Nový systém logování v %LOCALAPPDATA% pro diagnostiku
  Optimalizace interního výkonu

****************************************************************************************************
24/01/2026 06:30 - Podpora backendu biografie - Beta_v042
****************************************************************************************************
- Popis:
  Zpřístupnění dat biografie pro UI a úpravy i18n.

<!-- source_hash: 5f218fc5 -->
