# 📢 Zpráva od vývojáře (Early Access)

Vítejte v RolemIAster. Než se ponoříte do svého dalšího velkého dobrodružství, chci vám ukrást minutku a ujasnit pár věcí (slibuji, že budu stručný, kostky na vás čekají).

Tato hra je ve fázi **předběžného přístupu (Early Access)**.
Jsem sólový vývojář — ano, jen já, můj klávesnice a litry kávy — což znamená, že dělám vše, co můžu, ale někdy nestíhám všechno včas. Předem se omlouvám, pokud mi bude trvat déle opravit nějakého záludného buga, implementovat funkci, po které toužíte, nebo okamžitě odpovědět na Discordu. Žongluji, ale ještě mi nenarostly další chapadla.

## ⚠️ Důležité upozornění ohledně hardwaru (Lokální vs. Cloud)
Existují dva způsoby hraní a vaše zkušenost závisí na tom, který si vyberete:

*   **Lokální režim (Zdarma, Soukromý):** Pokud chcete spouštět AI na svém vlastním PC, požadavky obchodu (minimálně 12 GB VRAM) jsou posvátné. Méně než to a AI se bude vleče nebo zablokuje váš počítač. Je to čistá matematika, ne magie.
*   **Režim Cloud (API Gemini, GPT atd. pouze pokud spustíte příkazem `--advanced`):** Tady se film mění! Pokud nastavíte hru tak, aby používala cloudové služby (jako Google Gemini nebo OpenAI), těžkou práci odvedou jejich servery, ne váš. V tomto režimu hra běží plynule prakticky na jakémkoli počítači, protože vaše grafická karta odpočívá.

## Řízení očekávání
Pokud jste čekali bezchybný AAA titul, obávám se, že jste na špatném místě (prozatím). Hra je v rané fázi a upřímně, jen ti odvážní, kteří rozumí a podporují tento typ experimentálních projektů, mají nyní trpělivost si ji užít.

## Záruka spokojenosti
Pokud máte pocit, že je hra pro vás příliš "zelená" nebo váš hardware příliš trpí, nikdo se nebude zlobit, když požádáte o vrácení peněz. Naopak, rád vás v budoucnu znovu přivítám — a že zaplatíte 40 nebo 60 USD, až bude hra vyleštěná a dokončená 😉. Aktuální cena je dárek za důvěru ve mě v této fázi.

To jsem řekl, mé poděkování je nekonečné pro ty, kteří se rozhodnou zůstat. Vaše hlášení a návrhy jsou skutečným motorem tohoto projektu. Díky vám se hra za pár týdnů brutálně zlepšila.

**RolemIAster se staví na míru pro vás.**

*Děkuji za trpělivost, podporu a ať jsou kritici na vaší straně!*


*********************************************************************************
#  AKTUALIZUJEME NA QWEN 3.5 + TURBO QUANT! NOVÝ MOTOR, NOVÁ TECHNOLOGIE, NOVÁ ÉRA 🚀
*********************************************************************************

🚧 STAVBA: LOBOTOMIE DOKONČENA (A FUNGUJE) 🧠🔧
Na čem pracuji?
Měním herní motor a není to žádná maličkost.
Doposud při každém vašem tahu hodil systém AI "balík" pravidel o 15 000 až 20 000 tokenech. V podstatě to bylo jako nutit mistra číst celý manuál před každou větou. 📚🥵
Implementoval jsem dvě technologie, které pracují společně:

1. 🧠 **TurboQuant — Komprimovaná paměť**
   - Integroval jsem technologii od Googlu (představenou na ICLR 2026), která komprimuje paměť AI na téměř třetinu původní velikosti.
   - Pokud máte RTX z řady 3000, 4000 nebo 5000, hra ji automaticky využije.
   - ⚠️ **DŮLEŽITÁ POZNÁMKA OHLEDNĚ AMD GPU:** AČKOLI EXISTUJÍ NÁZNAKY FUNKČNOSTI TURBO QUANT NA KARTÁCH AMD/INTEL (VULKAN), V PRAXI ZPŮSOBUJE MNOHO CHYB A PROTO PRO NÁS NEBUDE IMPLEMENTOVÁNA. DOUFÁME, ŽE KOMUNITA UDĚLÁ TO SAMÉ A BRZY BUDEME MÍT NOVINKY.
   - **Výsledek:** AI si pamatuje více a spotřebuje méně VRAM. Je to čistá digitální magie. ✨

2. 📖 **Masivní kontext (+200%)**
   - Přepsal jsem výpočet konverzační paměti chirurgicky: nyní hra čte technické specifikace každého modelu a přesně vypočítá, kolik se vejde na vaši GPU.
   - Model 9B jde z paměti ~36 000 slov na více než ~110 000 na GPU s 16 GB VRAM. 🚀
   - Navíc jsem zvýšil limit odpovědi ze 4 096 na 8 192 tokenů: delší vyprávění bez přerušení uprostřed věty.

Konečný výsledek: Většinou vyšší rychlost, dlouhé hry, které neztrácejí nit, a mnohem soustředěnější (a střízlivější) AI. 🎯

Poznámka k realitě (Disclaimer 🧐):
Pokud i giganti ze Silicon Valley (Gemini, ChatGPT...) občas vidí růžové slony, můj lokální model nebude 100% dokonalý. Ale už to není "opilý strýc na svatbě" — je to nyní kompetentní Mistr hry se skutečnou sloní pamětí. 🐘

Děkuji za trpělivost, zatímco jsem ladil šroubky! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->