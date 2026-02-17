****************************************************************************************************
17/02/2026 06:58 - KI-Bildgenerierung, narrative Verbesserungen und Steuerung - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (DE):
  **⚠️ EXPERIMENTELLER ZWEIG (STEAM BETA)**
  Diese Version ist derzeit nur im **Experimentellen Zweig** auf Steam verfügbar. So aktivierst du sie:
  1. Rechtsklick auf **RolemIAster** in deiner Steam-Bibliothek.
  2. Wähle **Eigenschaften...**
  3. Gehe zum Reiter **Betas**.
  4. Wähle unter "Beta-Teilnahme" im Dropdown-Menü **experimental** aus.
  
  **Neuheit: Erste Phase der KI-Bildgenerierung**
  - 🎨 **Deine Welt in Bildern:** Ich habe ein erstes System zur KI-Bildgenerierung integriert. Während du spielst, versucht das System, Porträts und Landschaften zu generieren, die zur Atmosphäre deines Spiels passen.
  - 🖼️ **Dynamische Hintergründe:** Die Bilder werden im Hintergrund generiert, ohne dein Spiel zu unterbrechen. Du wirst sehen, wie sie nach und nach im Hintergrund, auf Charakterkarten und im Kodex erscheinen.
  - ⚡ **Geschwindigkeit nach Maß:** Neuer Abschnitt in den visuellen Einstellungen. Wähle zwischen "Schnell" (1 Schritt), "Mittel" (2 Schritte) oder "Hoch" (4 Schritte), um die Generierungszeit an die Leistung deines Computers anzupassen.
  - 🛠️ **Technische Optimierung:** Das KI-Bildmodell wird in den **RAM (Arbeitsspeicher)** geladen und über die **CPU** verarbeitet, ohne Videospeicher (VRAM) zu belegen. Dies stellt sicher, dass die Leistung der Haupt-KI des Spiels (LLM) nicht beeinträchtigt wird. Benötigt etwa 5 GB zusätzlichen RAM, bleibt aber innerhalb der offiziellen Mindestanforderungen von Steam.
  - 📤 **Teile deine Abenteuer:** Alle generierten Bilder werden automatisch gespeichert. Du findest sie im Ordner: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Erzählung und KI-Gehirn:**
  - 🧠 **Ende der Schleifen:** Es wurde eine neue "Gedächtnis-Doktrin" in die KI implementiert. Sie unterscheidet nun besser zwischen "Erinnerungen" (was bereits geschehen ist) und der "Gegenwart" (was gerade passiert). Dies hilft, Fälle zu reduzieren, in denen sich die KI wiederholte oder stecken blieb.
  - 📜 **Historische Archive:** Das System präsentiert der KI deine Erinnerungen als "geschlossenes historisches Archiv", was es ihr erleichtert, diese Informationen als Referenz zu nutzen, um die Geschichte voranzutreiben.
  - ⚡ **Optimierte Anweisungen:** Die Art und Weise, wie das Spiel die Erzählung in deiner Sprache anfordert, wurde verbessert, wodurch Kapazitäten des Modells für mehr Kreativität freigegeben werden.
  - 👁️ **Narrativer Fokus:** Die Wahrnehmung der KI wurde neu geschrieben. Sie versteht jetzt besser, welche Elemente "statischer Hintergrund" sind und nicht unnötigerweise in jedem Absatz wiederholt werden sollten.
  - 🔀 **Klarere Entscheidungen:** Die KI bietet nun definiertere Auswege an. Ihre Vorschläge (Buttons) unterteilen sich in die Untersuchung der Umgebung (Vertiefen) oder einen Kurswechsel (Abweichen).
  - 🫵 **Direkte Ansprache:** Die Basisanweisung wurde angepasst, um sicherzustellen, dass die KI dich mit "Du" anspricht, was die persönliche Immersion verbessert.
  
  **Charaktererstellung:**
  - 🖼️ **Charakterporträts:** Wenn du einen Charakter mit KI generierst, versucht das System, ein Porträt basierend auf Alter, Beruf und Beschreibung zu erstellen. Bitte beachte, dass dies eine frühe Version ist und die Genauigkeit (insbesondere beim Alter) je nach verwendetem Modell variieren kann. (Ich führe weiterhin Tests durch, aber der Anfang ist gut)
  - 🎲 **Zuverlässige Zufallsgenerierung:** Ein Fehler wurde behoben, bei dem der Button "Mit KI generieren" beim ersten Versuch fehlschlagen konnte und die Felder leer blieben. Das intelligente Korrektursystem stellt nun sicher, dass die Antwort immer gültig ist.

****************************************************************************************************
15/02/2026 02:57 - Direkte Eingabe, Stabilitätskorrekturen und Erkennung - Beta_v057
****************************************************************************************************
- What's New (DE):
  **Stabilität:**
  - 🛠️ **Keine Konfigurations-Abstürze mehr:** Mehrere Fehler wurden behoben, die unter bestimmten Bedingungen auftraten und das Öffnen oder Ändern der KI-Konfiguration beim Modellwechsel oder Zurücksetzen der Werte verhinderten.
  - 🗃️ **Stille Datenbank:** Die nervige Meldung „Inkompatible Datenbank“ beim Spielstart erscheint nicht mehr, wenn deine Datenbank in Ordnung ist. Sie wird nur angezeigt, wenn eine echte strukturelle Änderung vorliegt, die eine Migration erfordert.
  
  **Spielerlebnis:**
  - 🎯 **KI-Präzisionssteuerung:** Du kannst jetzt Werte für Kontext, Token, Temperatur oder GPU-Layer manuell in ein Zahlenfeld direkt neben dem Schieberegler eingeben. Du bist nicht mehr nur auf die Schieberegler angewiesen! Beide Steuerungen sind synchronisiert: Bewege den Regler und die Zahl aktualisiert sich, oder gib die Zahl ein und der Regler bewegt sich.
  - ⌨️ **Direkte Eingabe:** Du musst nicht mehr in das Textfeld klicken, um deine Aktion zu schreiben! Du kannst jetzt direkt anfangen zu tippen, während du im Spielbildschirm bist. Wenn du mit dem Inventar oder einem anderen Panel interagierst und dann schreiben möchtest, fang einfach an zu tippen, ohne etwas auswählen zu müssen. Das System leitet deine Tastenanschläge automatisch an das Aktionsfeld weiter. Es stört weder Menüs, Dialoge noch System-Shortcuts.
  
  Einige weitere kleinere Änderungen...

****************************************************************************************************
14/02/2026 21:48 - Kontext-Synchronisierung und KI-Antwortsteuerung - Beta_v056
****************************************************************************************************
- What's New (DE):
  **Systeme und Leistung:**
  - 🧠 **Volle Kontextkontrolle:** Du kannst jetzt sowohl das Gedächtnis der KI (`n_ctx`) als auch die Länge ihrer Antworten (`Max Tokens`) mit viel intuitiveren Schiebereglern anpassen.
  - ♾️ **Unbegrenzter Modus:** Schiebe den Regler auf das Minimum, um den Modus "Unbegrenzt" zu aktivieren, damit leistungsstarke Modelle wie Gemini ihre volle Kapazität ohne Einschränkungen nutzen können.
  - ⚡ **Treiber-Neustart:** Neue Option im Launcher, um die Grafiktreiber vor dem Spielen neu zu starten (optional, im Launcher konfigurierbar). Der Bildschirm flackert beim Start kurz auf; so stellen wir sicher, dass der gesamte VRAM verfügbar ist und von Rückständen bereinigt wird.
  - 🛠️ **Robuste Konfiguration:** Visuelle Fehler und technische Probleme beim Speichern der Einstellungen deiner bevorzugten KI-Anbieter wurden behoben.
  - 🚀 **Bessere Fehlererkennung:** Das Spiel erkennt nun intelligenter, wenn einer externen KI der Speicherplatz ausgeht.
  
  **Mechaniken und Welt:**
  - 🎒 **Garantiertes Inventar:** Keine Abenteuer mehr ohne deine Gegenstände. Das SDIA-System überwacht jetzt auch die Charaktererstellung, damit deine Ausrüstung immer vorhanden ist.
  - 📜 **Bereinigte Lore:** Ein Fehler wurde behoben, der "Code"-Fragmente oder seltsamen Text in die Geschichte deiner Welt einfügte. Der Kodex ist nun reiner und besser lesbar.
  - ⚠️ **Kompatibilitäts-Guide:** Hinweise in den Einstellungen hinzugefügt, um dir bei der Auswahl kompatibler Modelle (Instruct/Chat) zu helfen.
  - ⚙️ **Zuverlässige Implantate:** Die Definition von Slots und das Laden von Regeln bei der Charaktererstellung wurden korrigiert. Alle deine Cyber-Verbesserungen nutzen nun offizielle Slots und rüsten sich korrekt automatisch aus.
  - 🎓 **Lehrlings-Limit:** Die anfängliche Fertigkeitsbalance wurde angepasst. Die KI generiert ein Punktepaket, das automatisch auf die wichtigsten Fertigkeiten basierend auf dem Kontext deines Charakters verteilt wird. Deine Helden beginnen nun als echte Anfänger und machen logischere Fortschritte.

****************************************************************************************************
14/02/2026 05:06 - Integritätsstärkung, Charakterbewusstsein und Optimierung - Beta_v055
****************************************************************************************************
- What's New (DE):
  - 🧠 **KI-Priorität nach Wunsch:** Du kannst deine KI-Verbindungen jetzt per Drag & Drop verschieben, um festzulegen, welche zuerst genutzt wird. Falls eine ausfällt, versucht das Spiel es automatisch mit der nächsten auf deiner Prioritätenliste.
  - ⚙️ **Vorlade-Steuerung:** Option im Launcher hinzugefügt, um zu entscheiden, ob das lokale KI-Modell vorgeladen oder erst bei Bedarf geladen werden soll (spart Ressourcen beim Start).
  - 🛡️ **Sicheres und sauberes Löschen:** Wenn du eine Welt löschst, kümmert sich das System nun darum, absolut alle zugehörigen Daten (Charaktere und Geschichte) zu bereinigen und deine Datenbank makellos zu halten.
  - 🚀 **Speicheroptimierung:** Das „Gehirn“ der KI wird jetzt nur einmal geladen und von allen Funktionen geteilt, was viel Grafikspeicher (VRAM) spart.
  - 🎨 **Intelligentes Interface:** Das Weltauswahl-Panel passt sich jetzt perfekt an den Bildschirm und den Text an, ohne abgeschnittene Schaltflächen oder schlecht genutzten Platz.
  - 🔄 **Verbesserte intelligente Rotation:** Ich habe das Rotationssystem repariert, damit es bei deiner lokalen KI nicht sofort aufgibt; es gibt ihr jetzt eine Chance zur Korrektur, bevor externe Hilfe gesucht wird.
  - 🌍 **Mehrsprachige und robuste KI:** Objekterkennung und Erzählung sind jetzt in 10 Sprachen präziser, mit speziellem Schutz, damit dir nie die Geschichte ausgeht.
  - 🛠️ **Garantierte KI-Persistenz:** Der Fehler wurde behoben, durch den Gemini „vergessen“ oder in Ollama verwandelt wurde. Deine KI-Prioritäten werden jetzt sicher und präzise gespeichert.
  - ⚡ **Gemini wiederhergestellt:** Zugriff auf das Gemini-Modell repariert, indem die korrekten Schlüssel und URLs wiederhergestellt wurden.
  - 🎨 **Themen-Interface korrigiert:** Entscheidungsschaltflächen nehmen beim Laden des Spiels jetzt sofort wieder die Farbe deiner Welt an (z. B. Gold für Fantasy).
  - 👥 **Bewusstsein zwischen Charakteren:** Die KI ist sich jetzt all deiner Charaktere bewusst! Wenn du mehrere Helden in derselben Welt hast, erkennt die KI sie als Bewohner und kann sich individuell daran erinnern, was jeder getan hat.
  - 🧠 **Gedächtnis mit Zuordnung:** Das Erinnerungssystem unterscheidet jetzt, wer welche Handlung ausgeführt hat, und verhindert, dass die KI deine vergangenen Taten mit denen anderer Charaktere verwechselt.

****************************************************************************************************
13/02/2026 07:56 - Semantisches Kampf-Interpretationssystem - Beta_v054
****************************************************************************************************
- What's New (DE):
  🧪 JETZT VERFÜGBAR:
  
  ⚠️ **WICHTIGER HINWEIS:** DAS SPIEL KANN DIE ALTE DATENBANK ÜBER DIE LAUNCHER-OPTIONEN IN DIE NEUE STRUKTUR MIGRIEREN. ICH RATE JEDOCH DAVON AB. AUCH WENN DEIN ALTER SPIELSTAND FUNKTIONIERT, WERDEN VIELE DINGE DEFEKT SEIN. MEINE EMPFEHLUNG IST, ALLE VORHERIGEN SPEICHERSTÄNDE ZU LÖSCHEN. ES IST NICHT NÖTIG, DIE GESAMTE DATENBANK ZU LÖSCHEN, AUSSER IN EXTREMFÄLLEN.
  
  Änderungen:
  
  - 🌍 **Manager für Welten und Charaktere:** Du hast jetzt völlige Freiheit. Erstelle deine eigenen Welten mit eigenen Regeln und Schauplätzen, und erstelle darin so viele Charaktere, wie du möchtest. **Wichtiger Hinweis:** Alle Charaktere derselben Welt teilen sich die gleiche Zeitlinie und die geschehenen Ereignisse, was die Grundlage für den zukünftigen Multiplayer-Modus bildet.
  - 🧠 **Kontextuelles Gedächtnis (Super RAG):** Die KI hat jetzt "Sinne". Wenn sie im Lore oder in ihrem Gedächtnis nach Informationen sucht, berücksichtigt sie, wo du bist, mit wem du zusammen bist, ob du verletzt bist und was gerade passiert ist. Wenn du bei einem König bist, erinnert sie sich an Dinge über Könige. Wenn du verletzt bist, sucht sie nach Heilungsregeln. Es ist viel intuitiver und kohärenter!
  - 🌍 **Lore beim ersten Charakter:** Hast du eine epische Beschreibung deiner Welt geschrieben und die KI hat sie bei deinem ersten Charakter ignoriert? Gelöst! Jetzt gelangt die manuelle Weltbeschreibung direkt bei der ersten Erstellung an die KI, noch bevor das Gedächtnissystem aktiv wird.
  - ⚙️ **Verbessertes Weltensystem:** Ich habe den Namen deiner Welt von den technischen Regeln entkoppelt. Du kannst deine Welt jetzt nennen, wie du willst, ohne dass dies das Laden der Fantasy- oder Cyberpunk-Regeln beeinflusst.
  - 📝 **Klarheit bei der Erstellung:** Ich habe die internen Anweisungen verbessert, damit die KI besser versteht, wann sie einen Hintergrund erfinden soll und wann sie sich darauf beschränken muss, deine Statistiken zu extrahieren.
  - 🧠 **Freitext-Kampf:** Du kannst deine Kampfaktionen jetzt schreiben, als würdest du mit einem Tabletop-Charakter sprechen: "Heilzauber auf mich wirken", "Schwert ziehen", "Heiltrank benutzen". Die KI versteht deine Absicht und übersetzt sie in Spielmechaniken.
  - 🎨 **Neues episches Interface!** Ich habe das Spiel komplett umgestaltet. Menüs im RPG-Stil, animierte Hintergründe und ein völlig neues visuelles Erlebnis. Dunkler, halbtransparenter Stil, Neonränder und weiche Schatten für totale Immersion.
  - 🎬 **KI-Szenenregisseur (VERBESSERT):** Der Kampf erwacht zum Leben. Die KI generiert Umgebungsereignisse und Reaktionen, die die Erzählung bereichern: Fackeln fallen um, Feinde weichen zurück, Balken stürzen ein. Das Schlachtfeld ist nicht mehr statisch!
  - ⚔️ **Ziehen mit Worten:** Du musst nicht mehr auf den Waffenslot klicken. Schreibe einfach "Schwert ziehen" oder "meine Axt herausholen" und das System interpretiert es automatisch (ACHTUNG!, dies im Kampf zu tun, kann zu Fehlschlägen, Patzern und Zugverlust führen!... "In Kämpfe geht man vorbereitet!").
  - 📖 **Erkannte Zauber:** Die KI kennt jetzt dein komplettes Zauberbuch. Sag "Feuerball werfen" und wenn du diesen Zauber hast, wird sie ihn wirken.
  - 🌍 **Erzählung in deiner Sprache:** Die Geschichte hält sich jetzt strikt an die gewählte Sprache und vermeidet seltsame Sprachmischungen (hoffentlich muss ich nie wieder Spanglish sehen! Ich habe die KI so sehr gezwungen, dass, wenn sie wieder Texte in einer anderen Sprache als der gewählten generiert, sie wirklich verflucht sein muss).
  - 🛡️ **Keine verlorenen Züge mehr:** Wenn das Spiel deine Aktion nicht versteht, bittet es dich, sie neu zu formulieren. Dein Zug geht NICHT verloren.
  - 🎒 **Manuelles Inventar:** Um Gegenstände zwischen Slots zu verschieben (aus Rucksack ausrüsten, Munition laden), benutze das Drag-and-Drop-Interface. Das vermeidet Verwirrung und spart KI-Ressourcen.
  - 🧪 **Flüssige Tranknutzung:** Du kannst jetzt Tränke und Essen direkt auf dein Porträt ziehen, um sie zu benutzen. Ich habe auch die Option "Benutzen" per Rechtsklick hinzugefügt. Intuitiver und schneller!
  - 🩸 **Schadenskorrektur:** Du bist nicht mehr unsterblich! Wir haben ein Problem behoben, bei dem die Lebensleiste nicht sank, obwohl du getroffen wurdest. Jetzt wirst du leiden, wie es sich gehört.
  - 👻 **Tschüss Geister-Items:** Hast du einen Gegenstand in der Geschichte gefunden, aber er tauchte nie in deinem Rucksack auf? Problem gelöst! Das System repariert jetzt automatisch Gegenstände, die die KI zu erstellen "vergisst".
  - 🐛 **Kritische NPC-Korrektur:** Ein Fehler wurde behoben, der verhinderte, dass NPCs taktische Entscheidungen korrekt trafen, was dazu führte, dass sie immer "warteten", anstatt anzugreifen oder sich zu verteidigen.
  - 🎒 **Korrektur Startinventar:** Die neuen Charaktere beginnen nicht mehr nackt. Sie erhalten jetzt ihre Startausrüstung korrekt.
  - 🎲 **Charaktererstellung:** Ein Exploit wurde korrigiert, bei dem das Erhöhen und Senken eines Attributs bei bestimmten Schwellenwerten unendlich viele Extrapunkte generierte. Schluss mit dem Charisma-Trick!
  - 🖼️ **Porträts repariert:** Hast du eine Welt mit eigenem Namen erstellt und die Porträts verschwanden? Repariert! Das System findet jetzt die richtigen Bilder, egal wie du deine Welt nennst.
  - 💍 **Intelligente Symbole:** Die Gegenstände (einschließlich Ringe) zeigen jetzt präzisere und korrektere Symbole im Interface an.
  - 🧪 **Verbesserte Tooltips:** Tränke, Verbrauchsgüter und Zauber zeigen jetzt beim Überfahren mit der Maus korrekt alle Informationen und Effekte an.
  - 🎵 **Audio-Verbesserungen:** Die Kampfmusik stoppt nicht mehr, wenn vordefinierte Tasten gedrückt werden.
  - [I18N] **Fix Implantate:** Fehlende Übersetzungsschlüssel für Implantat-Slots (`slot_implant_*`) und entsprechende Symbole (`icon_implant_*`) in `es.json` hinzugefügt.
  - [FIX][AUDIO] **Inkonsistentes Audio:** Soundeffekte (SFX) für das Ausrüsten von Items und das Ziehen von Waffen an das Setting angepasst. Das System erkennt jetzt den `setting_key` und verwendet futuristische/industrielle Sounds in Cyberpunk und klassische Sounds in Fantasy.
  - [FIX][I18N] **Bereinigung es.json:** Über 20 doppelte Schlüssel in `es.json` entfernt und Tippfehler in Slot-Namen korrigiert (z. B. "Oíidos" -> "Oídos").
  - ⚙️ **Intelligente Modell-Erkennung:** Das Spiel liest jetzt direkt das "Gehirn" der Modelle, die du importierst (GGUF). Es erkennt automatisch den tatsächlichen maximalen Kontext. (Offizielle, optimierte Modelle werden für maximale Stabilität nicht angetastet).
  - 📂 **Platzersparnis:** Wenn du ein Modell von deinem Computer hinzufügst, verschiebt das Spiel es jetzt direkt in seinen Ordner, anstatt es zu kopieren. Deine Gigabytes werden es dir danken!
  - ⚖️ **Gerechtigkeit bei Attributen:** Ein Exploit wurde korrigiert, der unendlich viele Punkte beim Erhöhen und Senken von Attributen während der Erstellung ermöglichte.
  - 📖 **Trainingshandbuch:** Ich habe das Handbuch (README) mit allen Details aktualisiert, wie deine Charaktere Erfahrung sammeln und ihre Attribute steigern.
  - 📜 **Kodex der epischen Welten:** Schluss mit Lore, der nur eine Fußnote ist! Der Generator erstellt jetzt Welten mit tiefer Geschichte und beschreibt Religionen, Gesetze, Geografie und berühmte Persönlichkeiten in einem detaillierten Chronik-Format.
  - 🧙 **Kohärente Geschichten:** Dein Charakter wird nicht mehr im Vakuum geboren. Sein Hintergrund integriert sich jetzt intelligent in die Lore der Welt, die du gerade erstellt oder ausgewählt hast.
  - ⚡ **Flüssiges Interface:** Die automatische Generierung von Geschichten und Welten erfolgt jetzt im Hintergrund. Kein Warten mehr mit eingefrorenem Bildschirm!
  - 🚀 **Sofortiger Abenteuerstart:** Ich habe die Wartezeiten eliminiert! Nach der Erstellung deines Charakters springst du jetzt direkt in die Geschichte. Das System nutzt deinen angereicherten Hintergrund, um den perfekten Anfang zu schaffen, ohne dass du ein einziges Wort mehr schreiben musst.
  - 🎭 **Hintergründe mit Vorwand:** Deine Charaktere haben nicht mehr nur eine Vergangenheit, sondern auch einen dringenden Grund, das Abenteuer zu beginnen. Das neue KI-System generiert automatisch den initialen Funken der Geschichte, integriert in deine Biografie.
  - 🧹 **Vereinfachtes Interface:** Ich habe Knöpfe und Bildschirme entfernt, die keinen Mehrwert boten. Der Button "Geschichte starten" zentralisiert jetzt die ganze Kraft, damit du so schnell wie möglich anfangen kannst zu spielen.
  - [FIX][UI] **Visuelle Duplizierung in der Weltauswahl:** Bug behoben, bei dem der Weltname doppelt als "Name [Name]" erschien. Der Typ-Tag wird jetzt ausgeblendet, wenn er redundant ist.
  - [FEAT][UI] **Schnellladen (Einfacher Klick):** Ein Charakter kann jetzt mit einem einzigen Klick im Weltauswahl-Bildschirm geladen oder neu erstellt werden. Die Erweiterung der Welten bleibt erhalten, um Konflikte zu vermeiden.
  - 🧠 **Kreativere KI:** Ich habe die "Wiederholungsschleife" der KI durchbrochen, indem ich technische Variabilität in jede Anfrage injiziert habe. Zufällig generierte Charaktere werden nun viel einzigartiger und origineller sein und die Beispiele aus dem Handbuch ignorieren.
  
  🛡️ An die Mutigen, die es WAGEN, an vorderster Front zu kämpfen: Das Abenteuer erwartet euch, jetzt unzähmbarer als je zuvor!

****************************************************************************************************
06/02/2026 02:32 - Vulkan-Unterstützung (AMD/Intel) und robuste Fehlerbehandlung - Beta_v053
****************************************************************************************************
- What's New (DE):
  - 🚀 **Hybride Vulkan-Engine:** Offizielle Unterstützung für AMD- und Intel-Grafikkarten! Das Spiel enthält jetzt eine dedizierte Vulkan-Engine, die automatisch (oder manuell) aktiviert wird, um die KI auf Nicht-NVIDIA-Systemen zu beschleunigen.
  - ⚙️ **Volle Engine-Kontrolle:** Wir haben die Option „Vulkan erzwingen“ sowohl im Launcher als auch in den Einstellungen hinzugefügt. Wenn du Probleme mit CUDA hast oder die Leistung von Vulkan testen möchtest (die in vielen Konfigurationen regelrecht fliegt), hast du die Kontrolle.
  - 🚦 **Systemstatus:** Jetzt kannst du im Status-Panel genau sehen, welche Engine unter der Haube brummt (🟢 GRÜN für CUDA, 🔴 ROT für Vulkan).
  - 🛡️ **KI-Ampel:** Wenn die künstliche Intelligenz „müde“ wird (ihre Quote überschreitet) oder das Internet ausfällt, benachrichtigt dich das Spiel mit einem klaren und hilfreichen Fenster, anstatt dich schweigend warten zu lassen.
  - 🔄 **Anti-Blockier-Sicherheit:** Sollte ein Verbindungsfehler auftreten, bricht das Spiel die Konversation nicht mehr ab. Deine Dialogoptionen erscheinen erneut, damit du es noch einmal versuchen kannst, ohne deinen Fortschritt zu verlieren.
  - ☁️ **Cloud-Gedächtnis:** Das Einstellungsmenü merkt sich nun korrekt deine Präferenzen für Cloud-Anbieter zwischen den Sitzungen.

****************************************************************************************************
03/02/2026 20:23 - VRAM-Speicheroptimierung und Ladestabilität - Beta_v052
****************************************************************************************************
- What's New (DE):
  - 🧠 **Optimiertes Gehirn:** Wir haben einen schweren Fehler behoben, durch den die KI versuchte, „zweimal gleichzeitig zu denken“. Dies verdoppelte die VRAM-Nutzung und führte zu extremen Lags oder Abstürzen. Dein VRAM wird es dir danken!
  - 💾 **Sicheres Laden:** Die allgemeine Stabilität beim Laden von Spielständen wurde verbessert. So wird sichergestellt, dass das Fortsetzen deines Abenteuers stets reibungslos verläuft.

****************************************************************************************************
02/02/2026 00:18 - Kritischer Hotfix: Stabilität, Multi-GPU und Verbesserungen der Lokalisierung - Beta_v051
****************************************************************************************************
- What's New (DE):
  - 🚑 **Kritische Fehlerbehebung:** Ein Problem wurde behoben, das unter seltenen Umständen den Spielstart verhinderte ("Totalausfall"), verursacht durch eine beschädigte Datenbank, die der Launcher nicht bereinigen konnte. Die Option "Datenbank löschen" ist nun deutlich effektiver.
  - ⚡ **Hardware-Verbesserung:** Ein Fehler wurde korrigiert, durch den der Modus "Automatische Konfiguration" bei Systemen mit mehreren Grafikkarten (in einigen Konfigurationen mit nicht identischen GPUs) die Leistung ignorierte.
  - 🛠️ **Utility:** Eine neue Option wurde im Launcher hinzugefügt, um das Protokoll (Log) der vorherigen Sitzung einfach zu öffnen und so den Support zu erleichtern.
  - 🌍 **Lokalisierung:** Mehrere Schaltflächen im Launcher korrigiert, die noch auf Englisch (Yes/No) angezeigt wurden. Diese richten sich nun nach der gewählten Sprache.
  - 📖 **Benutzeroberfläche:** Die Formatierung des Textes für die Versionsinformationen wurde verbessert, um die Lesbarkeit zu erhöhen.
  
  - **Demnächst:** Der nächste Punkt in der Umsetzung: Kompatibilität mit AMD-, NVIDIA- und Intel-GPUs via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Handbücher-Fix & Stabilität - Beta_v050
****************************************************************************************************
- Neuigkeiten:
  **Multi-GPU-Leistung und kritische Korrekturen!**
  
  * **🚀 Multi-GPU-Unterstützung:** Implementierung der Fähigkeit, große KI-Modelle auf mehrere Grafikkarten aufzuteilen. *Jetzt kannst du dein gesamtes Hardware-Arsenal nutzen; unbegrenzte Macht!*
  * **🛡️ Stabilität:** Alle fehlenden DLL-Bibliotheken hinzugefügt, um unerwartete Abstürze zu vermeiden. *Ich habe die Engine gepanzert, wenn sie jetzt versagt, ist ein Patzer beim Würfeln schuld.*
  * **📖 Dynamische Web-Handbücher:**
    * **Echter Selektor:** Das Sprachmenü prüft nun, welche Dateien tatsächlich existieren, bevor es sie anzeigt. *Schluss mit Phantom-Optionen, die nichts bewirkten; Wahrsagerei-Magie Stufe 5.*
    * **Fix Fehler 403:** Berechtigungsfehler behoben, der das Anzeigen des Changelogs im Spiel verhinderte. *Ich habe der App beigebracht, korrekt um Einlass zu bitten ("Sesam öffne dich!").*
  * **🌍 Sprachen:** Überarbeitung von Texten und Übersetzungen. *Polyglott-Modus aktiviert.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisierung und KI-Verbesserungen - Beta_v049
****************************************************************************************************
- Neuigkeiten:
  Wir haben das Spielerlebnis mit wichtigen Korrekturen und einem neuen visuellen Tool aufpoliert:

  * **Sauberes und zuverlässiges Inventar:** Schluss mit "Phantom-Objekten" oder Items mit seltsamen Namen im Rucksack. Wir haben ein System zur narrativen Validierung implementiert, das sicherstellt, dass alles, was du sammelst oder kaufst, wirklich in der Spielwelt existiert.
  * **Flüssige Dialoge:** Wir haben diese lästigen Buttons repariert, die manchmal als "Unknown" erschienen oder nicht reagierten. Jetzt zeigen die Dialogoptionen mit den NPCs immer den korrekten Text an.
  * **Robuste Charaktererstellung:** Das Erstellen deines Helden ist jetzt ein solider Prozess. Wir haben die Konflikte gelöst, die manchmal das Charakterblatt unvollständig ließen oder fehlerhafte Statistiken beim Kombinieren von Biografie und Stats verursachten.
  * **Neue KI-Statusleiste:** Jetzt kannst du dem Gehirn der Maschine bei der Arbeit zusehen! Wir haben oben eine Leiste hinzugefügt, die dir die Antwortgeschwindigkeit und die Speichernutzung in Echtzeit anzeigt. So weißt du immer, ob die KI gerade über dein nächstes Abenteuer "nachdenkt".

****************************************************************************************************
28/01/2026 03:50 - Kritischer Kompilierungs-Fix - Beta_v048
****************************************************************************************************
- Neuigkeiten:
  Ein kritischer Fehler wurde behoben, der den Spielstart bei Neuinstallationen verhinderte. Verbesserte Stabilität und Kompatibilität mit verschiedenen Computern.

****************************************************************************************************
26/01/2026 19:38 - Web-Launcher & RTX 50 Support - Beta_v047
****************************************************************************************************
- Neuigkeiten:

  > [!WICHTIG]
  > **AUS KOMPATIBILITÄTSGRÜNDEN IST ES NOTWENDIG, DIE VORHERIGE DB ZU LÖSCHEN, ANDERNFALLS TRETEN HÖCHSTWAHRSCHEINLICH FEHLER IN DER KI-KONFIGURATION AUF**
  > **(Lösung: Klick auf das Zahnrad-Symbol ⚙️ im Launcher -> Datenbank löschen)**

  *Kritischer Support für RTX 50-Serie: Ein schwerwiegender Fehler wurde behoben, der einen unerwarteten Absturz beim Versuch verursachte, Charaktere auf den neuen NVIDIA-Grafikkarten (RTX 5070, 5080, 5090) zu generieren.
  (Da ich keine RTX der 5000er-Serie besitze, konnte ich nicht direkt testen, ob die Lösung zu 100% funktioniert, aber theoretisch sollte es behoben sein. Ich erwarte eure Siegesgesänge hier!)
  
  *Update der KI-Engine: Wir haben das lokale Gehirn des Spiels aktualisiert, um kompatibel mit der neuesten Hardware-Technologie zu sein und sicherzustellen, dass jeder das Erlebnis offline genießen kann, egal wie modern sein Computer ist.
  
  *Neuer Launcher: Updates und Nachrichten in Echtzeit von der offiziellen Website.


****************************************************************************************************
26/01/2026 06:49 - Web-Dokumentations-Integration - Beta_v045
****************************************************************************************************
- Neuigkeiten:
  *Das Benutzerhandbuch und das Änderungsprotokoll werden nun direkt von unserer offiziellen Website geladen, was garantiert, dass du immer die aktuellsten Informationen hast, ohne Patches herunterladen zu müssen. Inklusive intelligentem Offline-Modus.

  *Wir haben die Stabilität des Spiels verstärkt, damit es beim Starten nie hängen bleibt. Außerdem sind die Händler aus ihrem Urlaub im Limbus zurückgekehrt: Sie erscheinen jetzt korrekt, haben Waren in den Regalen und respektieren das Setting der Welt (keine magischen Tränke in der Zukunft).

  *Der Bug wurde behoben, der das Ändern der KI-Parameter und die Auswahl des KI-Modells verhinderte, wodurch einige Benutzer mit begrenztem VRAM nicht spielen konnten.
  **Falls die KI-Parameter geändert werden müssen, empfehle ich dringend, zunächst den VRAM-Prozentsatz auf 85% zu senken, neu zu starten und zu testen. Wenn dies immer noch nicht ausreicht, empfehle ich zu überprüfen, ob der VRAM der GPU nicht von anderen Prozessen verwendet wird, die nicht zum Spiel gehören (PC-Neustart falls nötig, Schließen von Anwendungen, die VRAM belegen könnten). Wenn es auch nach dem Senken der VRAM-Menge auf bis zu 70% immer noch nicht funktioniert, empfehle ich nicht, weiter herunterzugehen, da das Spiel die an die KI gesendeten Prompts nicht verwalten kann. Auch wenn der VRAM-Überlauf vermieden wird, kann das Spiel nicht funktionieren, da es keine Ressourcen dafür hat. In diesem Fall bleibt als einzige Option, auf ein niedrigeres Modell zu wechseln, die KI-Parameter wieder auf automatisch zu stellen und neu zu starten.

****************************************************************************************************
26/01/2026 04:00 - Core-Stabilisierung und Dienste-Diagnose - Beta_v044
****************************************************************************************************
- Neuigkeiten:
  Core-Stabilisierung und Dienste-Diagnose. Kritische Korrekturen bei der Charaktergenerierung, UI (MainWindow) und Optimierung der semantischen Suche. Beginn der tiefgehenden Diagnose des Dienste-Modus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs und Stabilität - Beta_v043
****************************************************************************************************
- Beschreibung:
  Korrektur-Patch mit Fokus auf Diagnose und Behebung von UI-Schleifen.

- Änderungen:
  Visueller Bug des Neustart-Dialogs behoben
  Neues Log-System in %LOCALAPPDATA% zur Diagnose
  Interne Leistungsoptimierungen

****************************************************************************************************
24/01/2026 06:30 - Backend-Biografie-Support - Beta_v042
****************************************************************************************************
- Beschreibung:
  Offenlegung von Biografie-Daten für UI und i18n-Anpassungen.

<!-- source_hash: 5f218fc5 -->
