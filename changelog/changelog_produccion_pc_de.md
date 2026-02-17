****************************************************************************************************
17/02/2026 07:20 - KI-Bildgenerierung, narrative Verbesserungen und Steuerung - EXPERIMENTAL_v057
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
17/02/2026 07:04 - KI-Bildgenerierung, narrative Verbesserungen und Steuerung - Beta_v058
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
13/02/2026 21:47 - Optimierung der KI-Konfiguration & i18n-Verstärkung - Beta_v055
****************************************************************************************************
- What's New (DE):
  - ⚙️ **Steuerung der lokalen Priorität:** Du kannst jetzt die Priorität deiner Grafikkarten manuell anpassen, selbst wenn sich das System im Automatikmodus befindet.
  - 🧠 **Infos zur KI-Rotation:** Ich habe Infopanels in den Einstellungen für externe Anbieter hinzugefügt, um zu erklären, wie die automatische Rotation bei Fehlern oder überschrittenen Kontingenten funktioniert.
  - 🌍 **Erweiterter GPU-Support:** Die i18n-Info-Nachricht spiegelt nun korrekt die Unterstützung für NVIDIA CUDA und Vulkan (AMD/Intel) wider. Übersetzungen in allen Sprachen aktualisiert!
  - ⚙️ **Verbesserte Konnektivität:** Die Connectors für Ollama und andere OpenAI-kompatible Server wurden repariert.
  - 🧠 **Vielsprachige und robuste KI:** Die Erkennung von erhaltenen Objekten in der Geschichte funktioniert jetzt in 10 Sprachen. Außerdem habe ich das System abgesichert, damit du nie ohne Anfangsgeschichte dastehst, selbst wenn die KI einen technischen Aussetzer hat.
  - 🔄 **Intelligente Rotation:** Ich habe das Rotationssystem korrigiert, damit es deine lokale KI nicht sofort aufgibt. Das System gibt ihr nun eine Chance zur Korrektur, bevor es externe Hilfe sucht.
  - 🧹 **Grundreinigung:** Ich habe alte und verwirrende Regeln entfernt, damit das „Gehirn“ der KI beim Umgang mit deinen Objekten schärfer und präziser arbeitet.

