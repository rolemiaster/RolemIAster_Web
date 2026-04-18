# 📢 Entwicklernachricht (Early Access)

Willkommen bei RolemIAster. Bevor du dich in dein nächstes großes Abenteuer stürzt, möchte ich dich um eine Minute bitten, um ein paar Dinge klarzustellen (ich verspreche, kurz zu sein, die Würfel warten auf dich).

Dieses Spiel befindet sich in der **Early Access**-Phase.
Ich bin ein Einzelentwickler – ja, nur ich, meine Tastatur und Liter Kaffee –, was bedeutet, dass ich alles tue, was ich kann, aber manchmal nicht alles rechtzeitig schaffe. Ich entschuldige mich im Voraus, wenn es dauert, einen schwer fassbaren Bug zu beheben, eine Funktion zu implementieren, die du dir so sehr wünschst, oder sofort auf Discord zu antworten. Ich jongliere, aber ich habe noch keine zusätzlichen Tentakel bekommen.

## ⚠️ Wichtiger Hinweis zur Hardware (Lokal vs. Cloud)
Es gibt zwei Möglichkeiten zu spielen, und deine Erfahrung hängt davon ab, welche du wählst:

*   **Lokaler Modus (Kostenlos, Privat):** Wenn du die KI auf deinem eigenen PC ausführen möchtest, sind die Anforderungen des Shops (mindestens 12 GB VRAM) heilig. Weniger und die KI wird sich schleppen oder dein System blockieren. Das ist reine Mathematik, keine Magie.
*   **Cloud-Modus (Gemini-, GPT-API usw. nur wenn mit Befehl gestartet `--advanced`):** Hier ändert sich die Sache! Wenn du das Spiel so konfigurierst, dass es Cloud-Dienste nutzt (wie Google Gemini oder OpenAI), wird die Schwerstarbeit auf deren Servern erledigt, nicht auf deinen. In diesem Modus läuft das Spiel flüssig auf praktisch jedem Gerät, da deine Grafikkarte ruht.

## Erwartungsmanagement
Wenn du eine nahtlose AAA-Produktion erwartet hast, bist du hier leider falsch (vorerst). Das Spiel befindet sich in einem frühen Stadium, und ehrlich gesagt, nur die Mutigen, die solche experimentellen Projekte verstehen und unterstützen, haben die Geduld, es jetzt zu genießen.

## Zufriedenheitsgarantie
Wenn du das Gefühl hast, dass das Spiel für dich zu unreif ist oder deine Hardware zu sehr leidet, wird niemand verärgert sein, wenn du eine Rückerstattung beantragst. Im Gegenteil, ich freue mich, dich in Zukunft wieder begrüßen zu dürfen – und dass du 40 oder 60 USD bezahlst, wenn das Spiel poliert und fertig ist 😉. Der aktuelle Preis ist ein Geschenk für dein Vertrauen in dieser Phase.

Davon abgesehen ist mein Dank unendlich für diejenigen, die sich entscheiden zu bleiben. Eure Berichte und Vorschläge sind der eigentliche Motor dieses Projekts. Dank euch hat sich das Spiel in wenigen Wochen brutal verbessert.

**RolemIAster wird maßgeschneidert für euch entwickelt.**

*Danke für die Geduld, die Unterstützung und mögen die Kritiker auf eurer Seite sein!*

*********************************************************************************
#  WIR AKTUALISIEREN AUF QWEN 3.5 + TURBO QUANT! NEUES ENGINE, NEUE TECHNOLOGIE, NEUES ZEITALTER 🚀
*********************************************************************************

🚧 BAUSTELLE: LOBOTOMIE ABGESCHLOSSEN (UND ES FUNKTIONIERT) 🧠🔧
Woran arbeite ich?
Ich ändere die Spiel-Engine, und das ist kein Kinderspiel.
Bisher hat das System jedes Mal, wenn du eine Runde spielst, der KI einen "Brocken" von Regeln mit 15.000 bis 20.000 Tokens zugeworfen. Im Grunde war es, als würde man den Spielleiter zwingen, vor jedem Satz das Handbuch komplett durchzulesen. 📚🥵
Ich habe zwei Technologien implementiert, die zusammenarbeiten:

1. 🧠 **TurboQuant – Das komprimierte Gedächtnis**
   - Ich habe eine Technologie von Google integriert (vorgestellt auf der ICLR 2026), die das Gedächtnis der KI auf fast ein Drittel ihrer ursprünglichen Größe komprimiert.
   - Wenn du eine RTX-Karte der Serie 3000, 4000 oder 5000 hast, wird das Spiel sie automatisch nutzen.
   - ⚠️ **WICHTIGER HINWEIS ZU AMD-GRAFIKKARTEN:** OBWOHL ES HINWEISE AUF DIE FUNKTIONIERENDE TURBOQUANT-TECHNOLOGIE AUF AMD/INTEL-KARTEN (VULKAN) GIBT, GIBT ES IN DER PRAXIS VIELE FEHLER, UND DESHALB WIRD SIE VORERST NICHT IMPLEMENTIERT. WIR HOFFEN, DASS DIE COMMUNITY GLEICHES TUN WIRD UND WIR BALD NEUIGKEITEN HABEN WERDEN.
   - **Ergebnis:** Die KI erinnert sich mehr und verbraucht weniger VRAM. Es ist reine digitale Magie. ✨

2. 📖 **Massiver Kontext (+200%)**
   - Ich habe die Berechnung des Konversationsgedächtnisses chirurgisch neu geschrieben: Jetzt liest das Spiel die technischen Spezifikationen jedes Modells und berechnet präzise, wie viel auf deiner GPU Platz hat.
   - Das 9B-Modell geht von der Erinnerung an ~36.000 Wörter auf über ~110.000 auf einer GPU mit 16 GB VRAM. 🚀
   - Außerdem habe ich das Antwortlimit von 4.096 auf 8.192 Tokens erhöht: längere Erzählungen ohne Unterbrechungen mitten im Satz.

Das Endergebnis: Eine überlegene Geschwindigkeit in den meisten Fällen, lange Spiele, die den Faden nicht verlieren, und eine KI, die viel fokussierter (und nüchterner) ist. 🎯

Realitätscheck (Disclaimer 🧐):
Wenn selbst die Giganten aus dem Silicon Valley (Gemini, ChatGPT...) manchmal rosa Elefanten sehen, wird mein lokales Modell nicht zu 100 % perfekt sein. Aber es ist nicht mehr der "betrunkene Onkel auf der Hochzeit" – es ist jetzt ein kompetenter Rollenspiel-Meister mit dem Gedächtnis eines echten Elefanten. 🐘

Danke für die Geduld, während ich die Schrauben nachgezogen habe! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->