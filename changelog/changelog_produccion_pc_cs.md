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

