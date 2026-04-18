****************************************************************************************************
18/04/2026 04:06 - Integrace TurboQuant — Extrémní komprese KV Cache s - EXPERIMENTAL_v061
****************************************************************************************************
- What's New (CS):
  - **🗜️ Nový kompresní engine paměti (TurboQuant)**
    - 🧠 **AI si pamatuje více a utrácí méně:** Integroval jsem pokročilou kompresní technologii (TurboQuant, z publikace Google prezentované na ICLR 2026), která umožňuje AI ukládat svou "pracovní paměť" s téměř třetinovou spotřebou oproti dřívějšku. V praxi to znamená: více prostoru pro zapamatování si vaší historie, rozhodnutí a kontextu hry, aniž by si grafická karta stěžovala.
    - ⚡ **Kompatibilní s vaší GPU:** Funguje na kartách NVIDIA RTX sérií 3000, 4000 a 5000. Pokud máte jednu z nich, hra ji automaticky využije. Pokud ne, vše funguje jako dříve se standardní kompresí (která také nebyla špatná).
    - 🔧 **Instalatérská práce:** Tato aktualizace vyžadovala přeložení AI enginu od nuly se specifickými záplatami pro Windows. Není to něco, čeho byste si přímo všimli, ale je to základ, na kterém budou stavěna vylepšení kontextu v budoucích verzích. (Ano, strávil jsem hodně času hádkami s kompilátorem NVIDIA. Ne, nechci o tom mluvit.)
  - **🧠 Masivní optimalizace kontextu (+200 %)**
    - 📖 **AI čte (a pamatuje si) trojnásobně:** Zcela jsem přepsal výpočet toho, kolik "paměti konverzace" může AI využít. Dříve konzervativní odhad ponechával spoustu nevyužitého prostoru. Nyní hra přímo čte technické specifikace každého modelu a přesně vypočítá, kolik kontextu se na vaši GPU vejde. Výsledek: model 9B přejde z paměti ~36 000 slov na více než ~110 000 slov na GPU s 16 GB VRAM. Vaše dlouhé hry už tak snadno neztratí nit a problémy s nízkou VRAM by se měly vyřešit.
    - 📝 **Delší odpovědi:** Zvýšil jsem limit délky odpovědi AI z 4 096 na 8 192 tokenů. To znamená podrobnější popisy, propracovanější dialogy a příběhy, které se nepřeruší uprostřed věty, když se to začne zajímavě vyvíjet.
    - 🔄 **Funguje pro všechny modely:** Vylepšení se automaticky aplikuje na jakýkoli podporovaný model (2B, 4B, 9B...). Pokud používáte starší nebo model třetí strany, vše funguje přesně jako dříve — optimalizace se aktivuje pouze tehdy, když detekuje, že ji model podporuje.

