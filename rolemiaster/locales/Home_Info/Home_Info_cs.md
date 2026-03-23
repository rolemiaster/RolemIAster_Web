# 📢 Zpráva od vývojáře (Předběžný přístup)

Vítejte v RolemIAster. Než se ponoříte do svého dalšího velkého dobrodružství, chci vás okrást o minutu, abych ujasnil pár věcí (slibuji, že budu stručný, kostky už na vás čekají).

Tato hra je ve fázi **Předběžného přístupu (Early Access)**.
Jsem sólo vývojář — ano, jen já, moje klávesnice a litry kávy —, což znamená, že dělám vše, co můžu, ale někdy nestíhám všechno. Předem se omlouvám, pokud mi bude trvat déle opravit nějakou zákeřnou chybu, implementovat funkci, po které toužíte, nebo okamžitě odpovědět na Discordu. Dělám žonglování, ale zatím mi nenarostly žádné další chapadla.

## ⚠️ Důležité upozornění ohledně hardwaru (Lokální vs. Cloud)
Existují dva způsoby hraní a vaše zkušenost závisí na tom, který si vyberete:

*   **Lokální režim (Zdarma, Soukromý):** Pokud chcete spustit AI na svém vlastním PC, požadavky obchodu (minimálně 12 GB VRAM) jsou posvátné. Méně než to a AI se bude šourat nebo váš systém zablokuje. Je to čistá matematika, žádná magie.
*   **Cloudový režim (API Gemini, GPT atd. pouze pokud spustíte pomocí příkazu `--advanced`):** Tady se film mění! Pokud nastavíte hru tak, aby používala cloudové služby (jako Google Gemini nebo OpenAI), těžká práce se provádí na jejich serverech, ne na vašem. V tomto režimu hra běží plynule na prakticky jakémkoli zařízení, protože vaše grafická karta odpočívá.

## Řízení očekávání
Pokud jste čekali bezchybnou AAA produkci, obávám se, že jste na špatném místě (prozatím). Hra je v rané fázi a upřímně řečeno, trpělivost ji nyní užít mají jen ti odvážní, kteří chápou a podporují tento typ experimentálních projektů.

## Záruka spokojenosti
Pokud máte pocit, že je hra pro vás příliš syrová nebo váš hardware příliš trpí, nikdo se nebude zlobit, pokud požádáte o vrácení peněz. Naopak, budu rád, když se v budoucnu vrátíte — a zaplatíte 40 nebo 60 USD, až bude hra vyleštěná a dokončená 😉—. Aktuální cena je dárek za důvěru ve mě v této fázi.

S tímto řečeno, moje vděčnost je nekonečná pro ty, kteří se rozhodnou zůstat. Vaše hlášení a návrhy jsou skutečným motorem tohoto projektu. Díky vám se hra za pár týdnů brutálně zlepšila.

**RolemIAster se staví na míru pro vás.**

*Děkuji za trpělivost, podporu a ať jsou kritici na vaší straně!*


*********************************************************************************
🚧 STAVBIŠTĚ: "LOBOTOMIZUJI" AI (K DOBRÉMU) 🧠🔧
Na čem pracuji?
Měním herní engine, a to není žádná maličkost.
Dosud, pokaždé, když odehrajete tah, systém nahraje do AI "hroudu" pravidel o 15 000 až 20 000 tokenech. V podstatě je to jako nutit vypravěče, aby si před každou větou přečetl celou příručku. 📚🥵

Problém:
S tolika daty najednou se AI někdy "opije" kontextem. Plete se, vymýšlí si jazyky, ničí předměty nebo se přímo halucinuje (slavné bludy). Je to digitální ekvivalent "modré obrazovky smrti", ale narativní.

Řešení: Striktní dieta! 🥗
Model osobně přeškoluji (domácí fine-tuning), aby si pravidla zapamatoval.

Plán: Aby AI již věděla, jak hrát, aniž by musela pokaždé číst příručku.

Cíl: Snížit spotřebu z 20k na pouhých 5k tokenů za tah.

Výsledek: Brutálně vyšší rychlost a mnohem soustředěnější (a střízlivější) AI. 🚀

Poznámka k realitě (Vyloučení odpovědnosti 🧐):
Toto je práce trojitého smrtelného inženýrství: trénování, testování a zabezpečení. A buďme upřímní: pokud i giganti ze Silicon Valley (Gemini, ChatGPT...) občas vidí růžové slony, můj lokální model nebude 100% dokonalý. Ale cílem je, aby se z "opilého strýce na svatbě" stal kompetentní Mistr RPG.

Děkuji za trpělivost, zatímco dolaďuji šroubky! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->