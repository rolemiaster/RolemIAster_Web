# 📢 Entwicklernachricht (Early Access)

Willkommen bei RolemIAster. Bevor du dich in dein nächstes großes Abenteuer stürzt, möchte ich mir eine Minute Zeit nehmen, um ein paar Dinge klarzustellen (ich verspreche, kurz zu sein, die Würfel warten auf dich).

Dieses Spiel befindet sich in der **Early Access**-Phase.
Ich bin ein Einzelentwickler – ja, nur ich, meine Tastatur und Liter Kaffee –, was bedeutet, dass ich mein Bestes gebe, aber manchmal nicht alles rechtzeitig schaffe. Ich entschuldige mich im Voraus, wenn es länger dauert, einen schwer fassbaren Bug zu beheben, diese Funktion zu implementieren, die du dir so sehr wünschst, oder sofort auf Discord zu antworten. Ich jongliere, aber ich habe noch keine zusätzlichen Tentakel bekommen.

## ⚠️ Wichtiger Hinweis zur Hardware (Lokal vs. Cloud)
Es gibt zwei Möglichkeiten zu spielen, und dein Erlebnis hängt davon ab, welche du wählst:

*   **Lokaler Modus (Kostenlos, Privat):** Wenn du die KI auf deinem eigenen PC ausführen möchtest, sind die Systemanforderungen (Minimum 8 GB VRAM) heilig, um gut zu starten. Weniger als das und die KI wird abstürzen oder dein System blockieren. Es ist reine Mathematik, keine Magie, obwohl sich das mit Turbo Quant jetzt zum Besseren ändern könnte.
*   **Cloud-Modus (API von Gemini, GPT usw. nur, wenn Sie mit dem Befehl `--advanced` starten):** Hier ändert sich die Handlung! Wenn du das Spiel für die Nutzung von Cloud-Diensten (wie Google Gemini oder OpenAI) konfigurierst, wird die Schwerstarbeit auf deren Servern erledigt, nicht auf deinen. In diesem Modus läuft das Spiel auf praktisch jedem Gerät flüssig, da deine Grafikkarte sich ausruht.

## Erwartungsmanagement
Wenn du hierher gekommen bist und eine makellose AAA-Produktion erwartest, fürchte ich, dass du (vorerst) am falschen Ort bist. Das Spiel befindet sich in einer frühen Phase, und ehrlich gesagt, nur die Mutigen, die diese Art von experimentellen Projekten verstehen und unterstützen, haben die Geduld, es jetzt zu genießen.

## Zufriedenheitsgarantie
Wenn du das Gefühl hast, dass das Spiel für dich zu unreif ist oder deine Hardware zu sehr leidet, wird niemand böse sein, wenn du eine Rückerstattung beantragst. Im Gegenteil, ich würde mich freuen, dich in Zukunft wieder begrüßen zu dürfen – und dass du 40 oder 60 USD bezahlst, wenn das Spiel poliert und fertig ist 😉. Der aktuelle Preis ist ein Geschenk für dein Vertrauen in mich in dieser Phase.

Davon abgesehen ist mein Dank unendlich für diejenigen, die sich entscheiden zu bleiben. Deine Berichte und Vorschläge sind der eigentliche Motor dieses Projekts. Dank euch hat sich das Spiel in wenigen Wochen brutal verbessert.

**RolemIAster wird maßgeschneidert für euch entwickelt.**

*Danke für die Geduld, die Unterstützung und dass die Kritiker auf eurer Seite sind!*


*********************************************************************************
# 📢 WIR AKTUALISIEREN AUF QWEN 3.5 + TURBO QUANT! NEUE ENGINE, NEUE TECHNOLOGIE, NEUES ZEITALTER 🚀
*********************************************************************************

🚧 BAUSTELLE: LOBOTOMIE ABGESCHLOSSEN (UND SIE FUNKTIONIERT) 🧠🔧
Woran arbeite ich?
Ich ändere die Spiel-Engine, und das ist keine Kleinigkeit.
Bisher hat das System jedes Mal, wenn du eine Runde spieltest, der KI einen "Brocken" von Regeln mit 15.000 bis 20.000 Tokens zugeworfen. Im Grunde war es, als würde man den Spielleiter zwingen, vor jedem Satz das ganze Handbuch zu lesen. 📚🥵
Ich habe zwei Technologien implementiert, die zusammenarbeiten:

1. 🧠 **TurboQuant – Das komprimierte Gedächtnis**
   - Ich habe eine Technologie von Google (vorgestellt auf der ICLR 2026) integriert, die das Gedächtnis der KI auf fast ein Drittel ihrer ursprünglichen Größe komprimiert.
   - Wenn du eine RTX-Karte der Serien 3000, 4000 oder 5000 hast, wird das Spiel diese automatisch nutzen.
   - ⚠️ **WICHTIGER HINWEIS ZU AMD-GRAFIKKARTEN:** OBWOHL ES HINWEISE AUF DIE FUNKTION VON TURBO QUANT AUF AMD/INTEL-KARTEN (VULKAN) GIBT, TRITT DIESER PRAKTISCH AUFTRETEND AUCH VIELE FEHLER AUF, UND DESHALB WIRD ER MOMENTAN NICHT IMPLEMENTIERT. WIR HOFFEN, DASS DIE GEMEINSCHAFT DIE GLEICHE ARBEIT LEISTET UND WIR BALD NEUIGKEITEN HABEN WERDEN.
   - **Ergebnis:** Die KI erinnert sich mehr und verbraucht weniger VRAM. Es ist reine digitale Magie. ✨

2. 📖 **Massiver Kontext (+200%)**
   - Ich habe die Berechnung des Konversationsgedächtnisses chirurgisch überarbeitet: Jetzt liest das Spiel die technischen Spezifikationen jedes Modells und berechnet präzise, wie viel auf deiner GPU Platz findet.
   - Das 9B-Modell steigt von der Erinnerung an ~36.000 Wörter auf über ~110.000 auf einer GPU mit 16 GB VRAM. 🚀
   - Darüber hinaus habe ich das Antwortlimit von 4.096 auf 8.192 Tokens erhöht: längere Erzählungen ohne Unterbrechungen mitten im Satz.

Das Endergebnis: Überlegene Geschwindigkeit in den meisten Fällen, lange Spiele, die den Faden nicht verlieren, und eine viel fokussiertere (und nüchternere) KI. 🎯

Realitätsnote (Disclaimer 🧐):
Wenn selbst die Giganten aus Silicon Valley (Gemini, ChatGPT...) manchmal rosafarbene Elefanten sehen, wird mein lokales Modell nicht zu 100 % perfekt sein. Aber es ist nicht mehr der "betrunkene Onkel auf der Hochzeit" – jetzt ist es ein kompetenter Rollenspiel-Meister mit dem Gedächtnis eines echten Elefanten. 🐘

Danke für die Geduld, während ich die Schrauben nachjustiert habe! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->