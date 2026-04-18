# 📢 Zpráva od vývojáře (Předběžný přístup)

Vítejte v RolemIAster. Než se ponoříte do svého dalšího velkého dobrodružství, chci vám ukrást minutu a uvést pár věcí na pravou míru (slibuji, že to bude stručné, kostky na vás čekají).

Tato hra je ve fázi **Předběžného přístupu (Early Access)**.
Jsem sólový vývojář – ano, jen já, můj klávesnice a litry kávy –, což znamená, že dělám vše, co můžu, ale někdy na všechno nestíhám. Předem se omlouvám, pokud mi bude trvat déle opravit nějakého záludného brouka, implementovat funkci, po které tolik toužíte, nebo okamžitě odpovědět na Discordu. Balancuji, ale ještě jsem si nenarostly extra chapadla.

## ⚠️ Důležité upozornění k hardwaru (lokální vs. cloud)
Existují dva způsoby hraní a vaše zkušenost závisí na tom, který si vyberete:

*   **Lokální režim (zdarma, soukromý):** Pokud chcete spouštět AI na svém vlastním PC, požadavky obchodu (minimálně 8 GB VRAM) jsou svaté, abyste mohli začít správnou nohou. Méně než to a AI se bude ploužit nebo váš počítač zamrzne. Je to čistá matematika, ne magie, i když s Turbo Quant se to může změnit k lepšímu.
*   **Cloudový režim (API Gemini, GPT atd. pouze pokud spustíte pomocí příkazu `--advanced`):** Tady se film mění! Pokud nastavíte hru pro používání cloudových služeb (jako Google Gemini nebo OpenAI), těžká práce se provádí na jejich serverech, ne na vašem. V tomto režimu hra běží plynule prakticky na jakémkoli zařízení, protože vaše grafická karta odpočívá.

## Správa očekávání
Pokud jste čekali bezchybnou AAA produkci, obávám se, že jste na špatném místě (prozatím). Hra je v rané fázi a upřímně, jen ti odvážní, kteří rozumí a podporují tento typ experimentálních projektů, mají trpělivost si ji teď užít.

## Záruka spokojenosti
Pokud máte pocit, že je hra pro vás příliš nedokončená nebo váš hardware příliš trpí, nikdo se nebude zlobit, pokud požádáte o vrácení peněz. Naopak, budu rád, když se v budoucnu vrátíte – a zaplatíte 40 nebo 60 USD, až bude hra vyleštěná a hotová 😉. Současná cena je dar za důvěru ve mě v této fázi.

Nicméně, mé poděkování těm, kteří se rozhodnou zůstat, je nekonečné. Vaše hlášení a návrhy jsou skutečným motorem tohoto projektu. Díky vám se hra za pár týdnů brutálně zlepšila.

**RolemIAster se buduje na míru pro vás.**

*Děkujeme za trpělivost, podporu a ať jsou kritici na vaší straně!*


*********************************************************************************
# 📢 AKTUALIZOVALI JSME NA QWEN 3.5 + TURBO QUANT! NOVÝ MOTOR, NOVÁ TECHNOLOGIE, NOVÁ ÉRA 🚀
*********************************************************************************

🚧 STAVENIŠTĚ: LOBOTOMIE DOKONČENA (A FUNGUJE) 🧠🔧
Na čem pracuji?
Měním herní motor a není to žádná maličkost.
Doposud, pokaždé když jste odehráli tah, systém hodil AI "balík" pravidel o 15 000 až 20 000 tokenech. V podstatě to bylo jako nutit vypravěče, aby si před každou větou přečetl celou příručku. 📚🥵
Implementoval jsem dvě technologie, které pracují v týmu:

1. 🧠 **TurboQuant — Komprimovaná paměť**
   - Integroval jsem technologii od Googlu (představenou na ICLR 2026), která komprimuje paměť AI na téměř třetinu původní velikosti.
   - Pokud máte RTX řady 3000, 4000 nebo 5000, hra ji automaticky využije.
   - ⚠️ **DŮLEŽITÁ POZNÁMKA K GPU AMD:** I KDYŽ EXISTUJÍ NÁZNAKY FUNGOVÁNÍ TURBO QUANT NA KARTÁCH AMD/INTEL (VULKAN), V PRAXI TO MÁ HODNĚ CHYB, A PROTO SE PROSÍM PRO NÍ NEBUDE IMPLEMENOVAT. OČEKÁVÁME, ŽE KOMUNITA UDĚLÁ SVÉ VLASTNÍ, A BRZY SE DOČKÁME NOVINEK.
   - **Výsledek:** AI si pamatuje více a spotřebovává méně VRAM. Je to čistá digitální magie. ✨

2. 📖 **Masivní kontext (+200%)**
   - Chirurgicky jsem přepsal výpočet konverzační paměti: nyní hra čte technické specifikace každého modelu a přesně počítá, kolik se vejde do vaší GPU.
   - Model 9B se z paměti o ~36 000 slovech přesune na více než ~110 000 na GPU s 16 GB VRAM. 🚀
   - Navíc jsem zvýšil limit odpovědi ze 4 096 na 8 192 tokenů: delší vyprávění bez přerušení uprostřed věty.

Konečný výsledek: Většinou vyšší rychlost, dlouhé hry, které neztrácejí nit, a mnohem soustředěnější (a střízlivější) AI. 🎯

Poznámka k realitě (Vyloučení odpovědnosti 🧐):
Pokud i giganti ze Silicon Valley (Gemini, ChatGPT...) občas vidí růžové slony, můj lokální model nebude 100% dokonalý. Ale už to není "opilý strýc na svatbě" – teď je to kompetentní Master rolí se skutečnou sloní pamětí. 🐘

Děkuji za trpělivost při dolaďování šroubků! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->