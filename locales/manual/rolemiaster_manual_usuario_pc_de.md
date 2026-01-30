# 🐉 Willkommen bei RoleMIAster!

Schnapp dir deine Würfel (oder deine Maus) und mach dich bereit, Abenteuer zu erleben, bei denen deine einzige Grenze die Verdrehtheit deiner Vorstellungskraft ist! **RoleMIAster** ist ein unendlich skalierbares Rollenspiel, das von künstlicher Intelligenz angetrieben wird und es dir ermöglicht, der Held (oder der Schurke) deiner eigenen Geschichten zu sein.

---

## ⚠️ RECHTLICHER HINWEIS (Der langweilige, aber notwendige Teil)

**LIES DAS, SONST WIRST DU DEN ZORN DER WÜRFEL ERLEBEN:**

1.  **🤖 Lokale integrierte KI:** RoleMIAster bringt sein eigenes digitales Gehirn mit. Es funktioniert **ohne Internet** und ohne dass du an irgendwelchen seltsamen Dingen herumfummeln musst. Installieren und losspielen!
2.  **☁️ Optionale Cloud:** Wenn du lieber Geld für externe KIs (OpenAI, Gemini...) ausgeben möchtest, dann mach das mit deiner Kreditkarte. Die Kosten sind dein eigenes Problem.
3.  **🎲 Generativer Zufall:** Die KI erfindet die Geschichte im Moment. Wenn der Erzähler verrückt spielt und sagt, dass Kühe regnen, schau nicht uns an. Der Entwickler übernimmt keine Verantwortung für die Verrücktheiten, die das Modell generiert.
4.  **🏗️ Early Access:** Hier wird noch gebaut. Wenn du einen Bug findest, ist das kein Fehler, sondern ein überraschendes "Feature"! (Bitte schicke uns Feedback, das hilft uns sehr).

---

## 🖥️ SYSTEMANFORDERUNGEN UND DIGITALE GEHIRNE (KI)

RoleMIAster funktioniert mit **lokaler künstlicher Intelligenz**. Das bedeutet, dein PC erledigt die harte Denk-Arbeit. Du brauchst kein Internet, aber eine Grafikkarte, die nicht aus der Zeit der Dinosaurier stammt. (Hinweis: Wenn es in deinem Zimmer kalt ist, funktioniert dieses Spiel als kostenlose Heizung).

### ⚙️ Konzepte für Einsteiger

**VRAM (Grafikspeicher)** ist der Treibstoff der KI.
*   RoleMIAster muss sich **12.000 bis 16.000 Wörter (Tokens)** "merken", um den Faden der Geschichte nicht zu verlieren.
*   Wenn deiner GPU der Speicher ausgeht, wird das Spiel langsamer sein als eine Schnecke mit Asthma.

---

### 📊 MODELLKATALOG (Wähle dein Gift)

Verwalte deine KIs unter **Einstellungen → Lokale integrierte KI → Modelle verwalten**.

#### 🏆 Qwen 2.5 Familie (Die Crème de la Crème)

| Modell       | Größe  | Min. VRAM | Tier | Urteil                                                              |
| :----------- | :----- | :-------- | :--- | :------------------------------------------------------------------ |
| **Qwen2.5-3B** | ~2.5GB | **8GB**   | B    | 👶 **Der Praktikant.** Er erledigt die Arbeit, aber bitte nicht von ihm erwarten, dass er Shakespeare schreibt. Manchmal verliert er den Faden. |
| **Qwen2.5-7B** | ~5.5GB | **12GB**  | A    | ✅ **DER AUSERWÄHLTE.** Ausgewogen, klug und schnell. Dies ist das empfohlene Standardmodell. |
| **Qwen2.5-14B**| ~10GB  | **16GB**  | S    | 🧐 **Der Professor.** Reichhaltige, tiefgründige Erzählungen und sehr natürliche Dialoge. |
| **Qwen2.5-32B**| ~22GB  | **32GB**  | S+   | 👑 **Göttliches Level.** Du brauchst ein Raumschiff (RTX 3090/4090), um das hier laufen zu lassen. |

---

### 🎮 SCHNELLE WAHLANLEITUNG

| Deine Grafikkarte | VRAM | Empfohlenes Modell | Ergebnis                       |
| :---------------- | :--- | :----------------- | :----------------------------- |
| GTX 1050/1060     | 4GB  | Qwen2.5-3B         | 🆗 Gerade so spielbar (geringer Kontext) |
| GTX 1070/1660     | 6GB  | Qwen2.5-3B         | 🆗 Läuft gut                   |
| RTX 2060/3060     | 8GB  | Qwen2.5-3B         | 🚀 Fliegt                      |
| RTX 3070/4060Ti   | 12GB | **Qwen2.5-7B**     | ✅ Das ideale Erlebnis         |
| RTX 3090/4080     | 16-24GB| Qwen2.5-14B        | 🌟 Luxuriös                    |
| RTX 4090          | 24GB | Qwen2.5-32B        | 👑 Maximale Qualität           |

**💡 Pro-Tipp:** Lasse immer etwa **2 GB VRAM frei** für das Betriebssystem, sonst fängt Windows an zu weinen und schließt Dinge.

---

### 🚨 HILFE! MEIN PC IST LANGSAM! (VRAM-Probleme)

Wenn das Spiel länger zum Reagieren braucht als deine Schwärmerei auf WhatsApp, hast du wahrscheinlich keinen VRAM mehr.

**Anzeichen dafür, dass du zu viel wolltest:**
1.  **Das Modell wird auf den RAM ausgelagert:** Der PC nutzt den normalen Speicher anstelle der Grafikkarte. Ergebnis: EXTREME LANGSAMKEIT.
2.  **Leichte Überlastung (1-2GB):** Dauert 30-60 Sekunden pro Antwort.
3.  **Moderate Überlastung (3-5GB):** 2-5 Minuten. Du kannst dir einen Kaffee holen gehen.
4.  **Schwere Überlastung:** 10-30 Minuten. Unspielbar.

#### 🛡️ Notfallprotokoll
Wenn es schlecht läuft, folge diesen Schritten in dieser Reihenfolge:

1.  **📉 Reduziere den VRAM %:** Gehe zu Einstellungen und reduziere ihn auf **85 %**. Starte neu und probiere es aus.
2.  **🧹 Aufräumen:** Schließe diesen Browser mit 40 offenen Tabs. Sie fressen deinen Speicher.
3.  **🛑 Die 70%-Grenze:** Gehe niemals unter **70 %** des zugewiesenen VRAM.
    *   *Warum?* Weil die KI Platz zum "Denken" braucht (den KV-Cache). Wenn du weniger als 70 % zuweist, wird sie leer und gibt einen Fehler aus.
4.  **🔙 Taktischer Rückzug:** Wenn nichts hilft, steige auf ein kleineres Modell um (von 7B auf 3B wechseln).

---

### ⚙️ ERWEITERTE MODELLKONFIGURATION

Für diejenigen, die gerne an Knöpfen drehen unter **Einstellungen → Lokale integrierte KI**:

| Option           | Funktion                                  | Empfehlung                                                |
| :--------------- | :---------------------------------------- | :-------------------------------------------------------- |
| **GPU Layers**   | Wie viel vom Modell in die Grafikkarte geladen wird | **-1** (Bedeutet "ALLES". Nicht anfassen, es sei denn, du weißt, was du tust) |
| **Maximaler Kontext** | Das "Kurzzeitgedächtnis" der KI          | **16384 - 32768** (Weniger und die KI hat Amnesie)          |
| **Temperatur**   | Kreativität vs. Wahnsinn                | **0.7 - 0.8** (Höher = verrückter; Niedriger = roboterhafter) |
| **History RAG**  | Erinnern von Dingen von vor langer Zeit | **Ja** (Unverzichtbar für lange Kampagnen)                |
| **Embeddings Cachen**| Beschleunigt die Suche nach Erinnerungen | **Ja** (Macht es schneller)                               |

---

### 🔧 FEHLERBEHEBUNG (Troubleshooting)

| Problem        | Lösung                                                                                                         |
| :------------- | :------------------------------------------------------------------------------------------------------------- |
| **Langsame KI / Lag** | Überprüfe, ob `GPU Layers` -1 ist. Schließe Chrome. Reduziere den `Maximalen Kontext`.                       |
| **Speicherfehler (OOM)** | Reduziere den `Maximalen Kontext` oder wähle ein kleineres Modell (3B).                                      |
| **Die KI redet wirres Zeug / Halluziniert** | Reduziere die `Temperatur` auf 0.6. Wenn sie immer noch verrückt ist, starte die Anwendung neu. |

---

### 🌐 ALTERNATIVE ANBIETER (Nur für Experten)

> **Hinweis:** Die integrierte lokale KI ist mehr als ausreichend. Dies ist nur für fortgeschrittene oder mutige Benutzer.

*   **Externe lokale Engines:**
    *   **Ollama / LM Studio:** Wenn du bereits deine eigenen nerdigen Modelle hast, kannst du diese verwenden.
*   **Cloud-APIs (kostenpflichtig):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Benötigt Internet und kostet Geld.
    *   Konfiguriere es unter: **Einstellungen → KI → Neuen Anbieter hinzufügen**.

---

## 🎲 SPIELEN?

Wenn du das Spiel öffnest, hast du zwei Wege:

1.  **🆕 Neues Abenteuer**: Erschaffe deine Legende von Grund auf. Das Spiel führt dich durch die Auswahl von Rasse, Klasse, Welt und Prämisse. (Wenn das Leben dir Zitronen gibt... oder eine Stärke von 3, mach dich zum Barden).
2.  **💾 Spielstand laden**: Mache genau dort weiter, wo du vor diesem demütigenden Tod aufgehört hast. (Oder um diesen "kleinen Rechenfehler" mit dem Drachen zu korrigieren).

### Die Benutzeroberfläche (Deine Kommandozentrale)

*   **Linkes Panel (DU):** Dein Charakterbogen. Leben, Mana, Fähigkeiten und wie gut aussehend du bist (Charisma).
*   **Mittleres Panel (DIE GESCHICHTE):**
    *   **Oben:** Wo der Erzähler erzählt, was passiert.
    *   **Unten:** Deine Entscheidungsbuttons und das Textfeld, um einzugeben, was du tun möchtest.
*   **Rechtes Panel (DEINE SACHEN):** Inventar und Ausrüstung. Das Paradies für digitale Messi.

---

## 📜 SPIELREGELN (Ja, es gibt Regeln)

RoleMIAster verwendet ein klassisches und robustes W100-Würfelsystem (Hundertseitenwürfel).

### 1. Deine Attribute (Was dich definiert)
Sie werden zufällig generiert, genau wie beim klassischen Pen-&-Paper-Rollenspiel!

*   💪 **Stärke (STR):** Um kräftig zuzuschlagen und Steine zu heben.
*   ❤️ **Konstitution (KON):** Um Schläge, Krankheiten und Gifte auszuhalten.
*   🐘 **Größe (GRÖ):** Groß und schwer, oder klein und flink.
*   🏃 **Geschicklichkeit (GES):** Beweglichkeit, Treffsicherheit und nicht über die eigenen Füße zu stolpern.
*   🧠 **Intelligenz (INT):** Lernen, erinnern und Rätsel lösen.
*   🔮 **Macht (MCH):** Deine Seele, dein Glück, Willenskraft und Magie.
*   😎 **Charisma (CHA):** Führung, Anziehungskraft und die Fähigkeit, Leute zu täuschen.

### 2. Schnelle Mathematik (Abgeleitete Werte)
*   **Leben (LP):** `(KON + GRÖ) / 2`. Wenn es 0 erreicht... nun, du weißt schon. F.
*   **Mana (MP):** Gleich deinem MCH. Ohne Mana gibt es keine Tricks. (Ein Magier ohne Mana ist nur ein Typ im Bademantel, der Cosplay betreibt).
*   **Aktionspunkte (AP):** `(INT + GES) / 2`. Bestimmt deine Initiative. Wer zuerst zuschlägt, schlägt zweimal zu.

### 3. Deine Fähigkeiten
Sie beginnen mit einem Basiswert (z. B. Schleichen = GES + INT) und verbessern sich durch Anwendung. Es ist ein Prozentwert (%).

### 4. Aktionslösung (Der Würfel)
Wenn du versuchst, etwas Riskantes zu tun (klettern, lügen, angreifen...), wird die KI dich um einen Wurf bitten.
Das Spiel würfelt unsichtbar einen **W100**. **(Denk dran: Die Würfel hassen dich. Es ist persönlich).**

*   **Dein Ziel:** Würfle **WENIGER ODER GLEICH** deinem Fähigkeitswert.
    *   *Beispiel:* Du hast 45% im Klettern.
    *   Du würfelst eine 30: ✅ **Erfolg**. Du kletterst wie ein Affe.
    *   Du würfelst eine 80: ❌ **Fehlschlag**. Du stürzt ab.
    *   Du würfelst eine 01-05: ✨ **KRITISCH!** Du machst einen epischen Parkour mit Salto.
    *   Du würfelst eine 99-100: 💀 **PATZER!** Deine Hose fällt auf halbem Weg runter und du fällst auf den Mund.

---

## 💡 TIPPS, UM NICHT (SCHNELL) ZU STERBEN

*   **✍️ Sei Beschreibend:** Schreibe nicht nur "Ich greife an". Schreibe: *"Ich versuche, seiner Axt auszuweichen, indem ich über den Boden rolle und ihm meinen Dolch in den Knöchel ramme."* Die KI wird dich belohnen.
*   **🧪 Experimentiere:** Du bist nicht auf Buttons beschränkt. Schreibe Verrücktes! Die KI wird improvisieren.
*   **🎭 Roleplay:** Schlüpfe in die Rolle. Lies die Beschreibungen und handle, wie dein Charakter es tun würde, nicht wie du es im Schlafanzug tun würdest.

---

## ⚔️ KAMPF (An die Waffen!)

Wenn Worte versagen, kommt die Zeit für Prügel. Der Kampf ist **taktisch** und funktioniert nach **Ticks** (Zeit).

### 🕹️ Wie es funktioniert:
*   **Ticks:** Jede Aktion kostet Zeit. Schwere Waffen sind langsam (verbrauchen viele Ticks). Dolche sind schnell.
*   **Deine Geschwindigkeit:** Hängt von deinen Aktionspunkten (AP) ab.

### Grundaktionen:
*   **🗡️ Angreifen:** Hau mit dem drauf, was du gezogen hast.
*   **🛡️ Blocken:** Du gehst in die Defensive. Reduziert Schaden, verbraucht aber Ausdauer.
*   **🏃 Flüchten:** Für Feiglinge (oder Weise, die leben wollen).
*   **🏳️ Aufgeben:** Wenn du siehst, dass du nicht gewinnen wirst, kannst du um Gnade flehen.
*   **✨ Magie / Cyberware:** Feuer, Laserstrahlen, Hacks...

### ⚠️ GOLDENE ÜBERLEBENSREGEL
**ZIEH DIE WAFFE, BEVOR DU KÄMPFST!**
Die Waffe mitten im Kampf zu ziehen, kostet Zeit (Ticks). Wenn du mit gezogenem Schwert erwischt wirst, bekommst du Schläge, bis dir die Identifikationskarte zu bunt wird, während du versuchst, sie unbeholfen herauszuziehen. ODER SCHLIMMER NOCH!, WENN DU DEINE WAFFEN IM RUCKSACK STATT IM AUSRÜSTUNGSSLOT HAST (Entschuldigen Sie mich eine Sekunde, ich muss das Langschwert aus dem Rucksack holen, ich glaube, ich hatte es hier irgendwo... irgendwo!) 🤦‍♂️
👉 Klicke auf die **Beschriftung der ausgerüsteten Waffe** (rechtes Panel), um sie zu ziehen. Sie wird grün leuchten.

Das Bewegen von Waffen im Kampf kostet Zeit (Ticks) und kann zu einem Überraschungsangriff führen, außerdem verlierst du höchstwahrscheinlich deinen Zug, verfehlst vor Nervosität wegen der sich nähernden Axt zu deiner Augenbraue oder lässt sie fallen. (Vielleicht war es keine gute Idee, einen Charakter mit ADHS zu erschaffen).

---

## ✨ MAGIE UND CYBERNETIK

Abhängig davon, ob deine Welt "Mittelalterliche Fantasy" oder "Cyberpunk" ist:

### 🧙‍♂️ Fantasy: Verzauberungen
Bist du ein Zauberer? Du kannst deine Ausrüstung verzaubern.
1.  **Lernen:** Du brauchst den Zauber in deinem Grimoire.
2.  **Wirken (Drag & Drop):** Ziehe den Zauber aus deiner Liste auf das Objekt in deinem Inventar.
3.  **Kosten:** Das Aufrechterhalten einer Verzauberung **kostet Mana pro Zug**.
4.  **Hinweis:** Wenn dir mitten im Kampf das Mana ausgeht, wird das Feuerschwert wieder zu einem Stück rostigem Eisen.

### 🦾 Cyberpunk: Implantate
Willst du Zoom-Augen oder Gorillabenen?
1.  Suche einen **Techno-Chirurgen** (ein NPC im Dienst).
2.  Zahle die Credits (nichts ist kostenlos in der Zukunft).
3.  **Menschlichkeitskosten:** Jedes Implantat entzieht dir ein Stück deiner Seele (**Menschlichkeit**).
    *   Wenn du zu viele davon einbaust, wirst du zu einer **Cyber-Psychose** (ein laufender Toaster-Mörder) und verlierst die Kontrolle über deinen Charakter.

---

## 🛒 SHOPS UND SERVICES

Sprich mit NPCs, um zu handeln.
*   **Feilschen:** Deine **Handelsfähigkeit** (basiert auf Charisma) bestimmt die Preise. Wenn du hässlich oder unfreundlich bist, wirst du betrogen.
*   **Verkaufen:** Mache einen **Rechtsklick** auf einen Gegenstand in deinem Inventar, um ihn dem Händler zu verkaufen.

---

## 🎒 INVENTARVERWALTUNG (Tetris)

*   **Gewicht:** Du hast ein Tragfähigkeitslimit (Stärke + Größe). Wenn du zu viel Schrott trägst, wirst du langsam und hast Strafen (Messi ist nicht dein Freund).
*   **Panels:**
    *   **Ausrüstung:** Was du trägst.
    *   **Gürtel:** Schneller Zugriff im Kampf (kostet weniger Zeit, Tränke hier zu benutzen).
    *   **Rucksack:** Der Boden des Sackes.
*   **Schnellnutzung:** Ziehe einen Trank oder ein Nahrungsmittel direkt auf **dein Gesicht** (das Porträt), um es sofort zu verbrauchen.

---

## 🛠️ ENDGÜLTIGE EINSTELLUNGEN

Im Menü **Einstellungen** kannst du alles anpassen:
*   **🌍 Sprache:** Die KI übersetzt dir das gesamte Spiel und die Antworten im Handumdrehen.
*   **👁️ Aussehen:** Schriftgröße und Farben, damit du nicht blind wirst.
*   **🧠 KI-Einstellungen:** Wechsle das Modell, die Temperatur usw.

---

## 🚧 Hinweis: Early Access

RoleMIAster befindet sich in **aktiver Entwicklung**, es köchelt langsam.
*   Du kannst Bugs (oder "unerwartete Features") finden.
*   Ich füge jede Woche neue Dinge hinzu.
*   Dein Feedback ist Gold wert! Sag mir, was dir gefällt und was dir sehr gefällt.

Jetzt geh los, würfle Initiative und erschaffe deine Legende!

<!-- source_hash: 2511f352 -->