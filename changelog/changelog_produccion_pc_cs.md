****************************************************************************************************
07/02/2026 20:26 - Systém sémantické interpretace boje - EXPERIMENTAL_v053
****************************************************************************************************
- What's New (CS):
  🧪 NYNÍ K DISPOZICI: EXPERIMENTÁLNÍ VERZE (Pro přístup: Klikněte pravým tlačítkem ve službě Steam ➡️ Vlastnosti ➡️ Beta verze)
  
  🛡️ Pro odvážné, kteří se ODVÁŽÍ bojovat v první linii: Dobrodružství čeká, nyní nezkrotnější než kdy dřív!
  
  📝 Očekávám vaše válečná hlášení (chyby a zpětnou vazbu) na frontě. Dejte jim co proto! ⚔️
  
  - 🧠 **Boj volným textem:** Nyní můžete psát své bojové akce, jako byste mluvili s postavou ve stolní hře: "seslat na mě léčivé kouzlo", "tasit meč", "použít léčivý lektvar". UI pochopí váš záměr a přeloží ho do herních mechanismů.
  - ⚔️ **Tasení slovy:** Už nemusíte klikat na slot zbraně. Stačí napsat "tasit meč" nebo "vytáhnout sekeru" a systém to automaticky interpretuje (POZOR!, dělání tohoto v boji může vést k neúspěchu, fatálnímu selhání a ztrátě tahu!... "Do boje se chodí připravený z domova!").
  - 📖 **Rozpoznaná kouzla:** UI nyní zná celou vaši knihu kouzel. Řekněte "seslat ohnivou kouli", a pokud toto kouzlo máte, sešle ho.
  - 🛡️ **Žádné další ztracené tahy:** Pokud hra vaší akci neporozumí, požádá vás o její přeformulování. Váš tah se NEZTRATÍ.
  - 🎒 **Manuální inventář:** Pro přesun předmětů mezi sloty (vybavení z batohu, nabíjení munice) použijte rozhraní drag & drop. To zabraňuje zmatkům a šetří zdroje UI.
  - 🎬 **Režisér scény UI (VYLEPŠENO):** Boj nyní ožívá. UI generuje environmentální události a reakce, které obohacují příběh: padající pochodně, ustupující nepřátelé, hroutící se trámy. Bojiště už není statické!
  - 🐛 **Kritická oprava NPC:** Opravena chyba, která bránila NPC ve správném taktickém rozhodování, což způsobovalo, že místo útoku nebo obrany vždy jen "čekaly".
  - 🎵 **Oprava zvuku:** Bojová hudba se již nezastaví při stisknutí předdefinovaných tlačítek (Útok, Blokování atd.).

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