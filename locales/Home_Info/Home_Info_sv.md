# 📢 Meddelande från Utvecklaren (Tidig Åtkomst)

Välkommen till RolemIAster. Innan du dyker ner i ditt nästa stora äventyr, vill jag be om en minut för att klargöra ett par saker (jag lovar att vara kort, tärningarna väntar).

Det här spelet är i fasen **Tidig Åtkomst (Early Access)**.
Jag är en ensamstående utvecklare – ja, bara jag, mitt tangentbord och liter av kaffe – vilket innebär att jag gör allt jag kan, men ibland hinner jag inte med allt. Jag ber om ursäkt i förväg om det tar tid att fixa en svårhittad bugg, implementera den funktion du önskar, eller svara omedelbart på Discord. Jag jonglerar, men har ännu inte fått extra tentakler.

## ⚠️ Viktig Information om Hårdvara (Lokalt vs. Moln)
Här finns två sätt att spela, och din upplevelse beror på vilket du väljer:

*   **Lokalt Läge (Gratis, Privat):** Om du vill köra AI:n på din egen PC, är kraven i butiken (minst 12GB VRAM) heliga. Mindre än så och AI:n kommer att krypa eller låsa din dator. Det är ren matematik, ingen magi.
*   **Molnläge (Gemini API, GPT, etc. endast om du startar med kommandot `--advanced`):** Här ändras filmen! Om du konfigurerar spelet för att använda molntjänster (som Google Gemini eller OpenAI), görs det tunga arbetet på deras servrar, inte på din. I det här läget flyter spelet smidigt på praktiskt taget vilken utrustning som helst, eftersom ditt grafikkort vilar.

## Hantera Förväntningar
Om du har kommit hit och förväntar dig en sömlös AAA-produktion, fruktar jag att du är på fel plats (för tillfället). Spelet befinner sig i ett tidigt skede, och ärligt talat, bara de modiga som förstår och stöder den här typen av experimentella projekt har tålamodet att njuta av det just nu.

## Garanti för Nöjdhet
Om du känner att spelet är för "grönt" för dig eller att din hårdvara lider för mycket, kommer ingen att bli arg om du begär en återbetalning. Tvärtom, jag blir glad om du kommer tillbaka i framtiden – och betalar 40 eller 60 USD när spelet är polerat och klart 😉. Det nuvarande priset är en gåva för att du litar på mig i det här skedet.

Med det sagt är min tacksamhet oändlig för dem som väljer att stanna kvar. Era rapporter och förslag är projektets verkliga motor. Tack vare er har spelet förbättrats brutalt på bara några veckor.

**RolemIAster byggs skräddarsytt för er.**

*Tack för ert tålamod, ert stöd och att ni har kritikerna på er sida!*


*********************************************************************************
🚧 ARBETSOMRÅDE: JAG "LOBOTOMERAR" AI:N (FÖR DET BÄTTRE) 🧠🔧
Vad håller jag på med?
Jag byter ut spelets motor, och det är ingen liten sak.
Hittills, varje gång du spelar en tur, skickar systemet AI:n en "klump" med regler på 15 000 till 20 000 tokens. I princip är det som att tvinga spelledaren att läsa hela manualen före varje mening. 📚🥵

Problemet:
Med så mycket data på en gång, blir AI:n ibland "full" av kontext. Den blir förvirrad, hittar på språk, förstör föremål eller hallucinerar helt enkelt (de berömda vanföreställningarna). Det är den digitala motsvarigheten till en "blåskärm" men narrativt.

Lösningen: Strikt diet! 🥗
Jag tränar om modellen personligen (hemmagjord finjustering) så att den lär sig reglerna utantill.

Planen: Att AI:n redan ska veta hur man spelar utan att behöva läsa manualen varje gång.

Målet: Att sänka förbrukningen från 20k till bara 5k tokens per tur.

Resultatet: En brutalt överlägsen hastighet och en mycket mer fokuserad (och nykter) AI. 🚀

Verklighetsanmärkning (Friskrivning 🧐):
Det här är ett tredubbelt dödligt ingenjörsarbete: träna, testa och härda. Och låt oss vara ärliga: om till och med jättarna i Silicon Valley (Gemini, ChatGPT...) ibland ser rosa elefanter, kommer min lokala modell inte att vara perfekt 100% av gångerna. Men målet är att den ska gå från att vara "bröllopets fyllgubbe" till en kompetent Rollspelsmästare.

Tack för tålamodet medan jag justerar skruvarna! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->