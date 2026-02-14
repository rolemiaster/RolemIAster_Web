****************************************************************************************************
14/02/2026 05:06 - Posílení integrity, povědomí o postavách a optimalizace - Beta_v056
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
