# 📢 Utvecklarens Meddelande (Early Access)

Välkommen till RolemIAster. Innan du kastar dig in i ditt nästa stora äventyr, vill jag bara ta en minut för att klargöra ett par saker (jag lovar att vara kort, tärningarna väntar på dig).

Det här spelet befinner sig i **Early Access**.
Jag är en ensam utvecklare — ja, bara jag, mitt tangentbord och liter av kaffe — vilket innebär att jag gör allt jag kan, men ibland hinner jag inte med allt. Jag ber om ursäkt i förväg om det tar tid att fixa en svåråtkomlig bugg, implementera den där funktionen du längtar efter, eller svara omedelbart på Discord. Jag jonglerar, men jag har ännu inte fått extra tentakler.

## ⚠️ Viktig Information om Hårdvara (Lokal vs. Moln)
Här finns två sätt att spela, och din upplevelse beror på vilket du väljer:

*   **Lokalt läge (Gratis, Privat):** Om du vill köra AI:n på din egen PC är kraven från butiken (Minst 8 GB VRAM) heliga för att få en bra start. Mindre än så och AI:n kommer att släpa sig fram eller låsa din dator. Det är ren matematik, inte magi, även om detta nu med Turbo Quant kan förändras till det bättre.
*   **Molnläge (API för Gemini, GPT, etc. endast om du startar med kommandot `--advanced`):** Här ändras filmen! Om du konfigurerar spelet för att använda molntjänster (som Google Gemini eller OpenAI), görs det tunga arbetet på deras servrar, inte på din. I det här läget körs spelet smidigt på i stort sett vilken dator som helst, eftersom ditt grafikkort vilar.

## Hantering av Förväntningar
Om du har kommit hit och förväntar dig en sömlös AAA-produktion, är jag rädd att du är på fel plats (för tillfället). Spelet befinner sig i ett tidigt skede, och ärligt talat, bara de modiga som förstår och stöder den här typen av experimentella projekt har tålamod att njuta av det just nu.

## Nöjdhetsgaranti
Om du känner att spelet är för grönt för dig eller att din hårdvara lider för mycket, kommer ingen att bli arg om du ber om en återbetalning. Tvärtom, jag blir glad om du kommer tillbaka i framtiden — och betalar 40 eller 60 USD när spelet är polerat och färdigt 😉—. Det nuvarande priset är en gåva för att du litar på mig i det här skedet.

Med det sagt, min tacksamhet är oändlig för er som väljer att stanna kvar. Era rapporter och förslag är den verkliga motorn i det här projektet. Tack vare er har spelet blivit otroligt mycket bättre på bara några veckor.

**RolemIAster byggs skräddarsytt för er.**

*Tack för tålamodet, stödet och att kritikerna är på er sida!*


*********************************************************************************
# 📢 VI UPPDATERAR TILL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNIK, NY ERA 🚀
*********************************************************************************

🚧 ARBETSOMRÅDE: LOBOTOMI GENOMFÖRD (OCH DEN FUNGERAR) 🧠🔧
Vad sysslar jag med?
Jag håller på att byta ut spelets motor, och det är ingen lätt match.
Hittills, varje gång du spelade en tur, kastade systemet ett "bunt" med regler på 15 000 till 20 000 tokens till AI:n. I princip var det som att tvinga spelledaren att läsa hela manualen före varje mening. 📚🥵
Jag har implementerat två tekniker som arbetar tillsammans:

1. 🧠 **TurboQuant — Det komprimerade minnet**
   - Jag har integrerat en teknik från Google (presenterad på ICLR 2026) som komprimerar AI:ns minne till nästan en tredjedel av sin ursprungliga storlek.
   - Om du har ett RTX från serierna 3000, 4000 eller 5000, kommer spelet automatiskt att dra nytta av det.
   - ⚠️ **VIKTIGT MEDDELANDE OM AMD GPU:** ÄVEN OM DET FINNS INDIKATIONER PÅ ATT TURBOQUANT FUNGERAR PÅ AMD/INTEL-KORT (VULKAN), GER DET I PRAKTIKEN MÅNGA FEL OCH KOMMER DÄRFÖR INTE ATT IMPLEMENTERAS FÖR NÄRVARANDE. VI HOPPAS ATT GEMENSKAPEN GÖR DET SAMMA OCH ATT VI HAR NYHETER SNART.
   - **Resultat:** AI:n kommer ihåg mer genom att använda mindre VRAM. Det är ren digital magi. ✨

2. 📖 **Massivt kontext (+200%)**
   - Jag har skrivit om beräkningen av konversationsminnet kirurgiskt: nu läser spelet de tekniska specifikationerna för varje modell och beräknar exakt hur mycket som får plats på din GPU.
   - 9B-modellen går från att komma ihåg ~36 000 ord till mer än ~110 000 ord på en GPU med 16 GB VRAM. 🚀
   - Dessutom har jag höjt gränsen för svar från 4 096 till 8 192 tokens: längre berättelser utan avbrott mitt i en mening.

Slutresultatet: Högre hastighet i de flesta fall, långa spel som inte tappar tråden, och en mycket mer fokuserad (och nykter) AI. 🎯

Verklighetsanteckning (Ansvarsfriskrivning 🧐):
Om till och med Silicon Valleys jättar (Gemini, ChatGPT...) ibland ser rosa elefanter, kommer min lokala modell inte att vara perfekt 100% av tiden. Men det är inte längre "den berusade farbrorn på bröllopet" — det är nu en kompetent Rollspelmästare med ett verkligt elefantminne. 🐘

Tack för tålamodet medan jag justerade skruvarna! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->