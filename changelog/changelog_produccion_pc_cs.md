****************************************************************************************************
24/02/2026 12:32 - Generování obrázků pomocí UI, vylepšení vyprávění a ovládání - Beta_v058
****************************************************************************************************
- What's New (CS):
  **Novinka: Druhá fáze generování obrázků pomocí UI**
  - 🎨 **Váš svět v obrazech:** Integroval jsem počáteční systém generování obrázků pomocí umělé inteligence. Jak hrajete, systém se pokouší generovat portréty a krajiny, které doprovázejí atmosféru vaší hry.
  - 🖼️ **Dynamická pozadí:** Obrázky se generují na pozadí, aniž by přerušovaly hru. Uvidíte, jak se postupně objevují na pozadí, na kartách postav a v Kodexu.
  - 🧹 **Správa obrázků:** Nový panel pro prohlížení a mazání vygenerovaných obrázků, které se vám nelíbí.
  
  **Vylepšení generování postav:**
  - ⚙️ **Robustnější náhodné vytváření:** Sjednotil a vylepšil jsem systém pravidel, který UI používá k vytváření postav od nuly, což zaručuje logičtější inventáře (5 až 10 koherentních předmětů) a vyváženější karty postav.
  - 🧠 **Rozdělený mozek:** UI nyní lépe chápe, kdy má postavu „vymyslet“ od nuly a kdy se má omezit na extrakci dat z biografie, kterou jste sami napsali.
  - ⚡ **Rychlost na míru:** Nová sekce ve Vizuálním nastavení. Vyberte si mezi „Rychlou“ (1 krok), „Střední“ (2 kroky) nebo „Vysokou“ (4 kroky) pro přizpůsobení doby generování výkonu vašeho počítače.
  - 🛠️ **Technická optimalizace:** Model UI pro obrázky se načítá do **RAM (paměti)** a zpracovává se přes **CPU**, aniž by zabíral videopaměť (VRAM). To zaručuje, že nebude zasahovat do výkonu hlavní herní UI (LLM). Vyžaduje přibližně 5 GB RAM navíc, čímž zůstává v rámci oficiálních minimálních požadavků na Steamu.
  - 📤 **Sdílejte svá dobrodružství:** Všechny vygenerované obrázky se automaticky ukládají. Najdete je ve složce: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Výběr modelů (Pokročilé):** Pokud hru spustíte s parametrem `--advanced`, můžete nyní v panelu Vzhled zvolit, který model UI použít pro obrázky. To umožňuje nadšencům testovat různé verze Stable Diffusion optimalizované pro OpenVINO (soubory .xml/.bin).
  
  **Vyprávění a mozek UI:**
  - 🧠 **Konec smyček:** V UI byla implementována nová „Doktrína paměti“. Nyní lépe rozlišuje mezi „vzpomínkami“ (co se již stalo) a „přítomností“ (co se děje právě teď). To pomáhá omezit případy, kdy se UI opakovala nebo se zasekla.
  - 📜 **Historické archivy:** Systém předkládá vaše vzpomínky UI jako „Uzavřený historický archiv“, což jí usnadňuje používat tyto informace jako referenci pro posun v příběhu.
  - ⚡ **Optimalizované instrukce:** Způsob, jakým hra žádá o vyprávění ve vašem jazyce, byl vylepšen, což uvolňuje kapacitu modelu pro soustředění na kreativitu.
  - 👁️ **Narativní zaměření:** Vnímání UI bylo přepsáno. Nyní lépe chápe, které prvky jsou „statické pozadí“ a nemělo by je zbytečně opakovat v každém odstavci.
  - 🔀 **Jasnější rozhodování:** UI nyní nabízí definovanější únikové cesty. Její návrhy (tlačítka) se dělí na prozkoumání okolí (Prohloubit) nebo změnu směru (Odbočit).
  - 🫵 **Přímé oslovení:** Základní instrukce byla upravena tak, aby vám UI tykala, což zlepšuje osobní imerzi.
  
  **Tvorba postavy:**
  - 🖼️ **Portréty postav:** Při generování postavy pomocí UI se systém pokusí vytvořit portrét na základě věku, profese a popisu. Mějte na paměti, že se jedná o počáteční verzi a věrnost (zejména u věku) se může lišit podle použitého modelu. (Stále provádím testy, ale začátek je slibný)
  - 🎲 **Spolehlivé náhodné generování:** Opravena chyba, kdy tlačítko „Generovat pomocí UI“ mohlo při prvním pokusu selhat a nechat pole prázdná. Nyní systém inteligentní opravy zajišťuje, že odpověď bude vždy platná.
  
  **Správa vygenerovaných obrázků:**
  - 🖼️ **Galerie obrázků UI:** Nový panel v nabídce Soubor, který zobrazuje všechny obrázky, které UI vygenerovala během vašich her (portréty, pozadí). Můžete filtrovat podle typu obrázku nebo světa.
  - 🗑️ **Selektivní mazání:** Vyberte jeden nebo více obrázků a odstraňte je, pokud se vám nelíbí (třeba ten, kde se UI rozhodla, že je dobrý nápad zaparkovat autobus v hradní stáji). Systém vyčistí soubor i jeho interní záznam.
  - 📂 **Přímý přístup:** Poklepáním na libovolnou miniaturu otevřete složku, kde se soubor nachází. Pokud již máte složku otevřenou, použije se stejné okno.
  - 💾 **Zapamatování velikosti:** Velikost okna galerie se automaticky ukládá mezi relacemi.
  
  **Výkon při nízké konfiguraci (Důležité pro GPU s malou VRAM):**
  - 🧠 **PSR - Hybridní řízení:** Nový systém, který rozděluje práci UI do dvou fází: Plánování (Šéfkuchař) a Provedení (Kuchaři). To umožňuje lokálním modelům s 8 GB VRAM fungovat bez kolapsů z nadměrného kontextu (+12 tisíc tokenů) za cenu vyšší latence; interakce s UI se mění z jednoho promptu na sérii promptů (čím méně VRAM, tím více promptů se vygeneruje a tím delší bude doba odezvy).
  - ⚡ **Inteligentní provádění:** Systém se automaticky rozhodne, zda vše zpracuje najednou (monoliticky), nebo rozdělí na části (iterativně) podle vaší dostupné VRAM. GPU s méně VRAM aktivují režim po částech pouze v případě potřeby.
  - 📊 **Dynamická optimalizace:** PSR snižuje zatížení tokeny během generování, což umožňuje uživatelům s 4GB grafickými kartami dokončit tvorbu postav a generování příběhu, které dříve zamrzalo.
  - 🔄 **Zachovaná koherence:** Navzdory rozdělení práce systém vkládá „hlavní záměr“, aby UI neztratila nit toho, co dělala.
  
  **Hlasy UI (postupné vylepšování):**
  Generování hlasů v reálném čase ve všech jazycích (některé jazyky jsou omezenější než jiné, největší výběr typů hlasů je v angličtině)
  - 🗣️ **Hlasové bojové pokřiky:** Při zahájení boje proti nepřátelům se nyní přehraje kontextová hlasová hláška.
  - 🎭 **Dynamické fráze podle kontextu:** Engine může generovat krátké hlasové linky pro konkrétní události (služby/boj) v závislosti na jazyce, prostředí a profilu postavy.
  - 🧠 **Interní hlasové šablony:** Technické šablony hlasů byly odděleny od narativního systému, aby se zabránilo interferenci s příběhem.
  - 🔊 **Vyšší srozumitelnost:** Byla vylepšena srozumitelnost a prozódie syntézy s prioritou na srozumitelnou dikci.
  
  **⚠️ Aviso de Compatibilidad (Partidas Anteriores):**
  - 🔄 Vzhledem k množství interních změn v systému pravidel a prostředí budou **dříve uložené hry a světy i nadále hratelné (pravděpodobně)**, ale je velmi pravděpodobné, že se v nich objeví chyby nebo neočekávané chování. **Doporučuje se vytvořit nový čistý svět**, abyste si všechna vylepšení řádně užili.

****************************************************************************************************
17/02/2026 07:20 - Generování obrázků pomocí AI, vylepšení vyprávění a ovládání - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (CS):
  **⚠️ EXPERIMENTÁLNÍ VĚTEV (STEAM BETA)**
  Tato verze je momentálně dostupná pouze v **Experimentální větvi** služby Steam. Pro aktivaci:
  1. Klikněte pravým tlačítkem na **RolemIAster** ve své knihovně Steam.
  2. Vyberte **Vlastnosti...**
  3. Přejděte na kartu **Beta verze**.
  4. V části "Účast na beta verzi" vyberte z rozbalovací nabídky **experimental**.
  
  **Novinka: První fáze generování obrázků pomocí AI**
  - 🎨 **Váš svět v obrazech:** Integroval jsem počáteční systém generování obrázků pomocí umělé inteligence. Během hraní se systém snaží generovat portréty a krajiny, které doplňují atmosféru vaší hry.
  - 🖼️ **Dynamická pozadí:** Obrázky se generují na pozadí, aniž by se hra zastavila. Uvidíte, jak se postupně objevují na pozadí, na kartách postav a v Kodexu.
  - ⚡ **Rychlost podle vás:** Nová sekce ve Vizuálním nastavení. Vyberte si mezi "Rychlá" (1 krok), "Střední" (2 kroky) nebo "Vysoká" (4 kroky) a přizpůsobte dobu generování výkonu vašeho počítače.
  - 🛠️ **Technická optimalizace:** AI model pro obrázky se načítá do **RAM (paměti)** a zpracovává se přes **CPU**, aniž by zabíral video paměť (VRAM). To zaručuje, že nebude narušovat výkon hlavní AI hry (LLM). Vyžaduje asi 5 GB další RAM, což se stále vejde do oficiálních minimálních požadavků služby Steam.
  - 📤 **Sdílejte svá dobrodružství:** Všechny vygenerované obrázky se automaticky ukládají. Najdete je ve složce: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Vyprávění a AI mozek:**
  - 🧠 **Konec smyček:** Do AI byla implementována nová "Doktrína paměti". Nyní lépe rozlišuje mezi "vzpomínkami" (co se již stalo) a "přítomností" (co se právě děje). To pomáhá omezit případy, kdy se AI opakovala nebo zasekla.
  - 📜 **Historické archivy:** Systém prezentuje vaše vzpomínky AI jako "Uzavřený historický archiv", což jí usnadňuje využití těchto informací jako reference pro posun příběhu.
  - ⚡ **Optimalizované instrukce:** Byl vylepšen způsob, jakým hra žádá o vyprávění ve vašem jazyce, čímž se uvolnila kapacita modelu, aby se mohl soustředit na kreativitu.
  - 👁️ **Zaměření vyprávění:** Vnímání AI bylo přepsáno. Nyní lépe chápe, které prvky jsou "statické pozadí" a neměla by je zbytečně opakovat v každém odstavci.
  - 🔀 **Jasnější rozhodnutí:** AI nyní nabízí jasněji definované únikové cesty. Její návrhy (tlačítka) se dělí na prozkoumání okolí (Prohloubit) nebo změnu směru (Odchýlit se).
  - 🫵 **Přímé oslovení:** Byla upravena základní instrukce, aby vám AI zaručeně tykala ("Ty"), což zlepšuje osobní ponoření do hry.
  
  **Tvorba postavy:**
  - 🖼️ **Portréty postav:** Při generování postavy pomocí AI se systém pokusí vytvořit portrét na základě jejího věku, povolání a popisu. Mějte na paměti, že se jedná o počáteční verzi a věrnost (zejména u věku) se může lišit v závislosti na použitém modelu. (stále provádím testy, ale začátek je slibný)
  - 🎲 **Spolehlivé náhodné generování:** Opravena chyba, kdy tlačítko "Generovat pomocí AI" mohlo na první pokus selhat a nechat pole prázdná. Nyní systém inteligentní korekce zajišťuje, že odpověď je vždy platná.

****************************************************************************************************
17/02/2026 07:04 - Generování obrázků pomocí AI, vylepšení vyprávění a ovládání - Beta_v058
****************************************************************************************************
- What's New (CS):
  **⚠️ EXPERIMENTÁLNÍ VĚTEV (STEAM BETA)**
  Tato verze je momentálně dostupná pouze v **Experimentální větvi** služby Steam. Pro aktivaci:
  1. Klikněte pravým tlačítkem na **RolemIAster** ve své knihovně Steam.
  2. Vyberte **Vlastnosti...**
  3. Přejděte na kartu **Beta verze**.
  4. V části "Účast na beta verzi" vyberte z rozbalovací nabídky **experimental**.
  
  **Novinka: První fáze generování obrázků pomocí AI**
  - 🎨 **Váš svět v obrazech:** Integroval jsem počáteční systém generování obrázků pomocí umělé inteligence. Během hraní se systém snaží generovat portréty a krajiny, které doplňují atmosféru vaší hry.
  - 🖼️ **Dynamická pozadí:** Obrázky se generují na pozadí, aniž by se hra zastavila. Uvidíte, jak se postupně objevují na pozadí, na kartách postav a v Kodexu.
  - ⚡ **Rychlost podle vás:** Nová sekce ve Vizuálním nastavení. Vyberte si mezi "Rychlá" (1 krok), "Střední" (2 kroky) nebo "Vysoká" (4 kroky) a přizpůsobte dobu generování výkonu vašeho počítače.
  - 🛠️ **Technická optimalizace:** AI model pro obrázky se načítá do **RAM (paměti)** a zpracovává se přes **CPU**, aniž by zabíral video paměť (VRAM). To zaručuje, že nebude narušovat výkon hlavní AI hry (LLM). Vyžaduje asi 5 GB další RAM, což se stále vejde do oficiálních minimálních požadavků služby Steam.
  - 📤 **Sdílejte svá dobrodružství:** Všechny vygenerované obrázky se automaticky ukládají. Najdete je ve složce: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Vyprávění a AI mozek:**
  - 🧠 **Konec smyček:** Do AI byla implementována nová "Doktrína paměti". Nyní lépe rozlišuje mezi "vzpomínkami" (co se již stalo) a "přítomností" (co se právě děje). To pomáhá omezit případy, kdy se AI opakovala nebo zasekla.
  - 📜 **Historické archivy:** Systém prezentuje vaše vzpomínky AI jako "Uzavřený historický archiv", což jí usnadňuje využití těchto informací jako reference pro posun příběhu.
  - ⚡ **Optimalizované instrukce:** Byl vylepšen způsob, jakým hra žádá o vyprávění ve vašem jazyce, čímž se uvolnila kapacita modelu, aby se mohl soustředit na kreativitu.
  - 👁️ **Zaměření vyprávění:** Vnímání AI bylo přepsáno. Nyní lépe chápe, které prvky jsou "statické pozadí" a neměla by je zbytečně opakovat v každém odstavci.
  - 🔀 **Jasnější rozhodnutí:** AI nyní nabízí jasněji definované únikové cesty. Její návrhy (tlačítka) se dělí na prozkoumání okolí (Prohloubit) nebo změnu směru (Odchýlit se).
  - 🫵 **Přímé oslovení:** Byla upravena základní instrukce, aby vám AI zaručeně tykala ("Ty"), což zlepšuje osobní ponoření do hry.
  
  **Tvorba postavy:**
  - 🖼️ **Portréty postav:** Při generování postavy pomocí AI se systém pokusí vytvořit portrét na základě jejího věku, povolání a popisu. Mějte na paměti, že se jedná o počáteční verzi a věrnost (zejména u věku) se může lišit v závislosti na použitém modelu. (stále provádím testy, ale začátek je slibný)
  - 🎲 **Spolehlivé náhodné generování:** Opravena chyba, kdy tlačítko "Generovat pomocí AI" mohlo na první pokus selhat a nechat pole prázdná. Nyní systém inteligentní korekce zajišťuje, že odpověď je vždy platná.

****************************************************************************************************
13/02/2026 21:47 - Optimalizace nastavení AI a vylepšení i18n - Beta_v055
****************************************************************************************************
- What's New (CS):
  - ⚙️ **Ovládání lokální priority:** Nyní můžete ručně upravit prioritu svých grafických karet, i když je systém v automatickém režimu.
  - 🧠 **Informace o rotaci AI:** Přidal jsem informační panely do nastavení externích poskytovatelů, které vysvětlují, jak funguje automatická rotace v případě chyby nebo překročení kvóty.
  - 🌍 **Rozšířená podpora GPU:** Informační zpráva i18n nyní správně odráží podporu pro NVIDIA CUDA a Vulkan (AMD/Intel). Překlady byly aktualizovány ve všech jazycích!
  - ⚙️ **Vylepšená konektivita:** Opraveny konektory pro Ollama a další servery kompatibilní s OpenAI.
  - 🧠 **Mnohojazyčná a robustní AI:** Detekce získaných předmětů v příběhu nyní funguje v 10 jazycích. Navíc jsem systém zabezpečil, abyste nikdy nezůstali bez úvodního příběhu, ani v případě technického klopýtnutí AI.
  - 🔄 **Inteligentní rotace:** Opravil jsem systém rotace, aby to s vaší lokální AI nevzdával hned na poprvé. Nyní jí systém dá šanci se opravit, než začne hledat externí pomoc.
  - 🧹 **Čištění základů:** Odstranil jsem stará a matoucí pravidla, aby byl "mozek" AI bystřejší a přesnější při práci s vašimi předměty.

