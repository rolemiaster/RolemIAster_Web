# 📢 Utvecklarmeddelande (Early Access)

Välkommen till RolemIAster. Innan du dyker ner i ditt nästa stora äventyr vill jag ta en minut för att klargöra ett par saker (jag lovar att vara kort, tärningarna väntar).

Det här spelet är i **Early Access**-fasen.
Jag är en ensam utvecklare – ja, bara jag, mitt tangentbord och liter av kaffe – vilket betyder att jag gör allt jag kan, men ibland hinner jag inte med allt. Jag ber i förväg om ursäkt om det tar tid att fixa en svårbugg, implementera den där funktionen du så gärna vill ha, eller svara omedelbart på Discord. Jag jonglerar, men jag har ännu inte fått extra tentakler.

## ⚠️ Viktigt meddelande om hårdvara (lokalt vs. moln)
Det finns två sätt att spela på, och din upplevelse beror på vilket du väljer:

*   **Lokalt läge (Gratis, privat):** Om du vill köra AI:n på din egen dator är kraven i butiken (minimum 12 GB VRAM) heliga. Mindre än så och AI:n kommer att släpa efter eller krascha din dator. Det är ren matematik, ingen magi.
*   **Molnläge (API för Gemini, GPT, etc. endast om du startar med kommandot `--advanced`):** Här ändras spelplanen! Om du konfigurerar spelet för att använda molntjänster (som Google Gemini eller OpenAI) görs det tunga arbetet på deras servrar, inte på din. I det här läget flyter spelet på praktiskt taget alla datorer, eftersom ditt grafikkort vilar.

## Förväntningshantering
Om du har kommit hit och förväntar dig en sömlös AAA-produktion, fruktar jag att du är på fel ställe (för tillfället). Spelet befinner sig i ett tidigt skede, och ärligt talat har bara de modiga som förstår och stöder den här typen av experimentella projekt tålamodet att njuta av det just nu.

## Nöjdhetsgaranti
Om du känner att spelet är för grönt för dig eller att din hårdvara lider för mycket, kommer ingen att bli arg om du ber om återbetalning. Tvärtom, jag blir glad om du kommer tillbaka i framtiden – och betalar 40 eller 60 USD när spelet är polerat och färdigt 😉. Nuvarande pris är en gåva för att du litar på mig i det här skedet.

Med det sagt är min tacksamhet oändlig för de som väljer att stanna kvar. Era rapporter och förslag är projektets verkliga motor. Tack vare er har spelet förbättrats brutalt på bara några veckor.

**RolemIAster byggs skräddarsytt för er.**

*Tack för ert tålamod, ert stöd och att kritikerna är på er sida!*


*********************************************************************************
#  VI UPPGRADERAR TILL QWEN 3.5 + TURBO QUANT! NY MOTOR, NY TEKNIK, NY ERA 🚀
*********************************************************************************

🚧 ARBETSOMRÅDE: LOBOTOMI GENOMFÖRD (OCH DET FUNKAR) 🧠🔧
Vad har jag sysslat med?
Jag byter spelmotor, och det är ingen liten sak.
Hittills, varje gång du spelade en runda, slängde systemet ett "massivt" regelverk på 15 000 till 20 000 tokens till AI:n. I grund och botten var det som att tvinga spelledaren att läsa hela manualen före varje mening. 📚🥵
Jag har implementerat två tekniker som arbetar tillsammans:

1. 🧠 **TurboQuant — Komprimerat minne**
   - Jag integrerade en teknik från Google (presenterad på ICLR 2026) som komprimerar AI:ns minne till nästan en tredjedel av dess ursprungliga storlek.
   - Om du har en RTX-kort från serierna 3000, 4000 eller 5000, kommer spelet automatiskt att utnyttja det.
   - ⚠️ **VIKTIGT MEDDELANDE OM AMD GPU:** ÄVEN OM DET FINNS INDIKATIONER PÅ ATT TURBO QUANT FUNGERAR PÅ AMD/INTEL-KORT (VULKAN), GER DET I PRAKTIKEN MÅNGA FEL OCH KOMMER DÄRFÖR INTE ATT IMPLEMENTERAS FÖR NÄRVARANDE. VI HOPPAS ATT GEMENSKAPEN GÖR DET FÖR OSS OCH ATT VI SNART FÅR NYHETER.
   - **Resultat:** AI:n kommer ihåg mer samtidigt som den använder mindre VRAM. Det är ren digital magi. ✨

2. 📖 **Massivt kontext (+200%)**
   - Jag har omskrivit beräkningen av konversationsminnet kirurgiskt: nu läser spelet de tekniska specifikationerna för varje modell och beräknar exakt hur mycket som får plats på din GPU.
   - 9B-modellen går från att komma ihåg ~36 000 ord till över ~110 000 på en GPU med 16 GB VRAM. 🚀
   - Dessutom höjde jag svarsgränsen från 4 096 till 8 192 tokens: längre berättelser utan avbrott mitt i en mening.

Slutresultatet: Överlägsen hastighet i de flesta fall, långa spelomgångar som inte tappar tråden, och en AI som är mycket mer fokuserad (och nykter). 🎯

Verklighetsnot (Disclaimer 🧐):
Om till och med jättarna från Silicon Valley (Gemini, ChatGPT...) ibland ser rosa elefanter, kommer min lokala modell inte att vara perfekt 100 % av tiden. Men det är inte längre "brorsan som är full på bröllopet" – nu är det en kompetent rollspelsledare med minne som en riktig elefant. 🐘

Tack för ert tålamod medan jag justerade skruvarna! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->