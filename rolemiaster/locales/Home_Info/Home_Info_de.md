# 📢 Entwicklernachricht (Early Access)

Willkommen bei RolemIAster. Bevor du dich in dein nächstes großes Abenteuer stürzt, möchte ich mir eine Minute Zeit nehmen, um ein paar Dinge klarzustellen (ich verspreche, kurz zu sein, die Würfel warten auf dich).

Dieses Spiel befindet sich in der **Early Access**-Phase.
Ich bin ein Einzelentwickler – ja, nur ich, meine Tastatur und Liter Kaffee – was bedeutet, dass ich alles gebe, was ich kann, aber manchmal nicht alles rechtzeitig schaffe. Ich entschuldige mich im Voraus, wenn es dauert, einen schwer fassbaren Bug zu beheben, diese Funktion zu implementieren, die du dir so sehr wünschst, oder sofort auf Discord zu antworten. Ich jongliere, aber ich habe noch keine zusätzlichen Tentakel entwickelt.

## ⚠️ Wichtiger Hinweis zur Hardware (Lokal vs. Cloud)
Es gibt zwei Möglichkeiten zu spielen, und dein Erlebnis hängt davon ab, welche du wählst:

*   **Lokaler Modus (Kostenlos, Privat):** Wenn du die KI auf deinem eigenen PC ausführen möchtest, sind die Anforderungen des Stores (Minimum 12 GB VRAM) heilig. Weniger und die KI wird schleifen oder dein System einfrieren. Das ist reine Mathematik, keine Magie.
*   **Cloud-Modus (Gemini-, GPT-API usw. nur wenn mit dem Befehl `--advanced` gestartet):** Hier ändert sich die Geschichte! Wenn du das Spiel so konfigurierst, dass es Cloud-Dienste (wie Google Gemini oder OpenAI) nutzt, wird die schwere Arbeit auf deren Servern erledigt, nicht auf deinem. In diesem Modus läuft das Spiel flüssig auf praktisch jedem Gerät, da deine Grafikkarte sich ausruht.

## Erwartungsmanagement
Wenn du eine nahtlose AAA-Produktion erwartet hast, fürchte ich, bist du (vorerst) am falschen Ort. Das Spiel befindet sich in einem frühen Stadium, und ehrlich gesagt, nur die Mutigen, die solche experimentellen Projekte verstehen und unterstützen, haben die Geduld, es jetzt zu genießen.

## Zufriedenheitsgarantie
Wenn du das Gefühl hast, dass das Spiel für dich zu unreif ist oder deine Hardware zu sehr leidet, wird niemand böse sein, wenn du eine Rückerstattung beantragst. Im Gegenteil, ich würde dich in Zukunft gerne wieder begrüßen – und dass du 40 oder 60 USD bezahlst, wenn das Spiel poliert und fertig ist 😉. Der aktuelle Preis ist ein Geschenk dafür, dass du mir in dieser Phase vertraust.

Davon abgesehen ist mein Dank unendlich an diejenigen, die sich entscheiden zu bleiben. Eure Berichte und Vorschläge sind der eigentliche Motor dieses Projekts. Dank euch hat sich das Spiel in wenigen Wochen brutal verbessert.

**RolemIAster wird nach euren Wünschen gebaut.**

*Danke für die Geduld, die Unterstützung und mögen die Kritiker auf eurer Seite sein!*


*********************************************************************************
🚧 BAUSTELLE: ICH "LOBOTOMIERE" DIE KI (IM GUTEN SINNE) 🧠🔧
Was mache ich gerade?
Ich ändere die Spiel-Engine, und das ist keine Kleinigkeit.
Bisher wird jedes Mal, wenn du einen Zug spielst, dem System ein "Brocken" von 15.000 bis 20.000 Token an Regeln übergeben. Im Grunde ist es, als würde man den Spielleiter zwingen, das gesamte Handbuch zu lesen, bevor er jeden Satz spricht. 📚🥵

Das Problem:
Bei so vielen Daten auf einmal "betrinkt" sich die KI manchmal am Kontext. Sie wird verwirrt, erfindet Sprachen, zerbricht Gegenstände oder halluziniert direkt (die berühmten Wahnvorstellungen). Es ist das digitale Äquivalent eines "Blue Screen of Death", nur erzählerisch.

Die Lösung: Strikte Diät! 🥗
Ich trainiere das Modell persönlich neu (Homemade Fine-Tuning), damit es die Regeln auswendig lernt.

Der Plan: Dass die KI bereits weiß, wie man spielt, ohne jedes Mal das Handbuch lesen zu müssen.

Das Ziel: Den Verbrauch von 20k auf nur 5k Token pro Zug senken.

Das Ergebnis: Eine brutal höhere Geschwindigkeit und eine viel zentriertere (und nüchternere) KI. 🚀

Realitätscheck (Disclaimer 🧐):
Das ist eine dreifach-tödliche Ingenieurarbeit: trainieren, testen und absichern. Und seien wir ehrlich: Wenn selbst die Giganten aus dem Silicon Valley (Gemini, ChatGPT...) manchmal rosa Elefanten sehen, wird mein lokales Modell nicht 100% der Zeit perfekt sein. Aber das Ziel ist, dass es vom "betrunkenen Onkel auf der Hochzeit" zu einem kompetenten Rollenspiel-Meister wird.

Danke für eure Geduld, während ich an den Stellschrauben drehe! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->