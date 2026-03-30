# 🐉 Willkommen bei RolemIAster!

Schnapp dir deine Würfel (oder deine Maus) und mach dich bereit für Abenteuer, bei denen die einzige Grenze deiner Vorstellungskraft ist, wie verdreht sie sein kann! **RolemIAster** ist ein unendliches Rollenspiel, das von künstlicher Intelligenz angetrieben wird und es dir ermöglicht, der Held (oder der Bösewicht) deiner eigenen Geschichten zu sein.

---

## ⚠️ RECHTLICHER HINWEIS (Der langweilige, aber notwendige Teil)

**LIES DAS, ODER DU WIRST DIE WUT DER WÜRFEL ERLEBEN:**

1.  **🤖 Integrierte lokale KI:** RolemIAster bringt sein eigenes digitales Gehirn mit. Es funktioniert **ohne Internet** und ohne dass du an irgendetwas Seltsames herumfummeln musst. Installieren und spielen!
2.  **☁️ Optionale Cloud:** Wenn du lieber Geld für externe KIs (OpenAI, Gemini...) ausgeben möchtest, dann tu das mit deiner Kreditkarte. Kosten sind deine Sache.
3.  **🎲 Generatives Chaos:** Die KI erfindet die Geschichte auf dem Laufenden. Wenn der Erzähler verrückt wird und sagt, dass es Kühe regnet, schau uns nicht an. Der Entwickler haftet nicht für den Wahnsinn, den das Modell generiert.
4.  **🏗️ Early Access:** Das hier ist im Bau. Wenn du einen Bug findest, ist es kein Fehler, sondern ein überraschendes "Feature"! (Schick uns Feedback, bitte, das hilft uns sehr).

---

## 🖥️ SYSTEMANFORDERUNGEN UND DIGITALE GEHIRNE (KI)

RolemIAster funktioniert mit **lokaler künstlicher Intelligenz**. Das bedeutet, dein PC erledigt die harte Arbeit des Denkens. Du brauchst kein Internet, aber eine Grafikkarte, die nicht aus der Zeit der Dinosaurier stammt. (Hinweis: Wenn es in deinem Zimmer kalt ist, funktioniert dieses Spiel als kostenlose Heizung).

### ⚙️ Konzepte für Nicht-Profis

**VRAM (Grafikspeicher)** ist der Treibstoff für KI.
*   RolemIAster muss sich **12.000 bis 16.000 Wörter (Tokens)** merken können, um den Faden der Geschichte nicht zu verlieren.
*   Wenn deiner GPU der Speicher ausgeht, wird das Spiel langsamer sein als eine Schnecke mit Asthma.

---

### 📊 MODELLKATALOG (Wähle dein Gift)

Verwalte deine KIs unter **Einstellungen → Integrierte lokale KI → Modelle verwalten**.

#### 🏆 Qwen 3.5 Familie — Speziell für RolemIAster trainiert

Diese Modelle wurden mit **Supervised Fine-Tuning (SFT)** trainiert, um die erzählerischen Regeln des Spiels zu beherrschen. Es sind keine generischen Modelle: Sie kennen den JSON-Vertrag von RolemIAster, die NPCs, das Inventar und den Kampf auswendig.

| Modell      | Größe   | VRAM Minimum | Stufe | Urteil                                                              |
|-------------|---------|--------------|-------|---------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB  | **3GB**      | B     | ⚡ **Der Sprinter.** Der schnellste von allen. Ideal für grundlegende GPUs oder zum Spielen ohne dedizierte GPU. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**      | A     | ✅ **DER AUSGEGLICHENE.** Optimale Geschwindigkeit und Qualität. Empfohlenes Standardmodell für die meisten Spieler. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**      | S     | 🌟 **Der Erzähler.** Reiche Erzählung und überlegene Kohärenz. Für diejenigen mit einer RTX 3070 oder besser. |

---

### 🎮 SCHNELLE AUSWAHLLEITUNG

| Deine Grafikkarte | VRAM | Empfohlenes Modell | Ergebnis                  |
|-------------------|------|--------------------|---------------------------|
| GTX 1050/1060 / Ohne GPU | 2-4GB | **Qwen3.5-2B**     | 🆗 Knappe, aber spielbare Leistung |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B**     | ✅ Sehr gute Erfahrung     |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B**     | 🚀 Schnell und präzise     |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B**     | 🌟 Die ideale Erfahrung    |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**     | 👑 Maximale Qualität, ultraschnelle Antworten |

**💡 Pro-Tipp:** Lass immer etwa **2 GB VRAM frei** für das Betriebssystem, sonst fängt Windows an zu weinen und schließt Dinge.

---

### 🚨 HILFE! MEIN PC IST LANGSAM! (VRAM-Probleme)

Wenn das Spiel länger zum Antworten braucht als dein Schwarm auf WhatsApp, ist dir wahrscheinlich der VRAM ausgegangen.

**Symptome dafür, dass du es übertrieben hast:**
1.  **Das Modell wird in den RAM ausgelagert:** Der PC nutzt den normalen Speicher statt der Grafikkarte. Ergebnis: EXTREME LANGSAMKEIT.
2.  **Leichte Überlauf (1-2GB):** Dauert 30-60 Sekunden pro Antwort.
3.  **Moderate Überlauf (3-5GB):** 2-5 Minuten. Du kannst dir einen Kaffee holen gehen.
4.  **Schwere Überlauf:** 10-30 Minuten. Unspielbar.

#### 🛡️ Notfallprotokoll
Wenn die Dinge schlecht laufen, befolge diese Schritte in der richtigen Reihenfolge:

1.  **📉 VRAM-Prozentsatz reduzieren:** Gehe zu Einstellungen und reduziere ihn auf **85%**. Starte neu und probiere es aus.
2.  **🧹 Aufräumen:** Schließe diesen Browser mit 40 offenen Tabs. Sie fressen deinen Speicher auf.
3.  **🛑 Die 70%-Grenze:** Gehe nie unter **70%** des zugewiesenen VRAM.
    *   *Warum?* Weil die KI Platz zum "Denken" braucht (der KV-Cache). Wenn du ihr weniger als 70% gibst, wird sie leer und gibt einen Fehler aus.
4.  **🔙 Taktischer Rückzug:** Wenn nichts funktioniert, steige auf ein kleineres Modell um (von 9B auf 4B oder von 4B auf 2B).

---

### ⚙️ ERWEITERTE MODELLKONFIGURATION ("Maximales Freak-Level")

> **EXPERTENMODUS:** Wenn du ein Profi bist und auf erweiterte Modelleinstellungen zugreifen möchtest (eigene GGUF-Modelle von HuggingFace hinzufügen, Layer bearbeiten usw.), musst du das Spiel mit dem Befehl starten: `--advanced`.

Für diejenigen, die gerne Knöpfe drücken in **Einstellungen → Integrierte lokale KI**:

| Option           | Funktion                                        | Empfehlung                                                      |
|------------------|-------------------------------------------------|-----------------------------------------------------------------|
| **GPU Layers**   | Wie viel des Modells wird auf die Grafikkarte geladen | **-1** (Bedeutet "ALLES". Nicht anfassen, es sei denn, du weißt, was du tust) |
| **Maximaler Kontext** | Das "Kurzzeitgedächtnis" der KI                 | **16384 - 32768** (Weniger als das und die KI hat Amnesie)      |
| **Temperatur**   | Kreativität vs. Wahnsinn                        | **0.7 - 0.8** (Höher = verrückter; Niedriger = roboterhafter)   |
| **History RAG**  | Dinge von vor langer Zeit erinnern              | **Ja** (Unverzichtbar für lange Kampagnen)                     |
| **Embeddings cachen** | Beschleunigt die Erinnerungssuche              | **Ja** (Macht es schneller)                                     |

---

### 🔧 FEHLERBEHEBUNG (Troubleshooting)

| Problem         | Lösung                                                                        |
|-----------------|-------------------------------------------------------------------------------|
| **Langsame KI / Lag** | Überprüfe, ob `GPU Layers` -1 ist. Schließe Chrome. Reduziere `Contexto Máximo`. |
| **Speicherfehler (OOM)** | Reduziere `Contexto Máximo` oder wähle ein kleineres Modell (3B).         |
| **Die KI spinnt / halluziniert** | Reduziere die `Temperatura` auf 0.6. Wenn sie immer noch verrückt ist, starte die Anwendung neu. |

---

### 🌐 ALTERNATIVE ANBIETER (Nur für Experten)

> **Hinweis:** Die im Spiel enthaltene lokale KI reicht vollkommen aus. Dies ist nur für fortgeschrittene oder mutige Benutzer.

*   **Externe lokale Engines:**
    *   **Ollama / LM Studio:** Wenn du bereits deine eigenen abgefahrenen Modelle hast, kannst du sie verwenden.
*   **Cloud-APIs (Kostenpflichtig):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Benötigt Internet und Geld.
    *   Konfiguriere es unter: **Einstellungen → KI → Neuen Anbieter hinzufügen**.

---

### 🌍 WIE SPIELT MAN? (Das Multiversum und du)

Wenn du das Spiel öffnest, hast du zwei Wege:

1.  **🆕 Neues Abenteuer**: Erschaffe deine Legende von Grund auf neu. Das Spiel wird dich nach **Name, Beruf, Körperbeschreibung, psychologischer Beschreibung und dem Hintergrund/Vorwand** deiner Geschichte fragen. Außerdem wählst du den **Schwierigkeitsgrad** und den **Humorton**, die die Kampagne leiten.
2.  **💾 Spiel fortsetzen**: RolemIAster **speichert in Echtzeit**. Hier gibt es kein "vor dem Tod laden" und kein Zurück. Jede Entscheidung, jeder Fehltritt und jede Wunde wird tief in die Geschichte eingebrannt. Es ist eine **HERAUSFORDERUNG**: Was du tust, ist getan. Lebe mit den Konsequenzen ... oder stirb mit ihnen.

RolemIAster ist keine isolierte Partie; es ist ein **persistentes Multiversum**.
*   **Unendliche Welten:** Erschaffe deine eigenen Universen (**Mittelalterliche Fantasy** oder **Cyberpunk**) mit eigenem Lore.
*   **Unendliche Charaktere:** Innerhalb jeder Welt kannst du so viele Helden haben, wie du möchtest.
*   **Gemeinsame Zeitlinie:** Achtung! Was ein Charakter tut, beeinflusst die Welt der anderen. Die KI ist sich deiner anderen Helden bewusst und erkennt sie als Bewohner der Welt an.
*   **KI mit "Sinne" (Super RAG):** Das RAG-System (Retrieval-Augmented Generation) fungiert als "Informant" der KI, gibt ihr Erinnerungen über die Welt, wer sie begleitet, wo sie sich befindet und was gerade passiert ist, damit die Geschichte zu 100% kohärent ist.

### Die Benutzeroberfläche (Deine Kommandozentrale)

*   **Linkes Panel (DU):** Dein Charakterbogen. Leben, Mana, Fähigkeiten und wie gutaussehend du bist (Charisma).
*   **Mittleres Panel (DIE GESCHICHTE):**
    *   **Oben:** Wo der Erzähler erzählt, was passiert.
    *   **Unten:** Deine Entscheidungsknöpfe und die Textbox, um einzugeben, was du tun möchtest.
*   **Rechtes Panel (DEINE SACHEN):** Inventar und Ausrüstung. Das Paradies für digitale Messi-Syndrom-Betroffene.

---

## 📜 SPIELREGELN (Ja, es gibt Regeln)

RolemIAster verwendet ein klassisches und robustes d100-System (Hunderter-Würfel).

### 1. Deine Attribute (Was dich definiert)
Die KI generiert deine Attribute basierend auf dem von dir eingegebenen Kontext, Beruf und Beschreibung. Sobald sie generiert sind, hast du **10 EXTRA-PUNKTE**, die du nach Belieben verteilen kannst.
*   **Gestaffelte Kosten:** Ein Attribut bis 14 zu erhöhen kostet 1 Punkt. Von 15 bis 16 kostet es 2 Punkte. Ab 17 kostet es 3 Punkte! Überlege gut, wo du deine Muskeln einsetzt.

*   💪 **Stärke (STR):** Deine reine physische Kraft. Beeinflusst Nahkampfschaden und deine Tragfähigkeit.
*   ❤️ **Konstitution (KON):** Deine Ausdauer. Um Schläge, Krankheiten und Gifte auszuhalten.
*   🐘 **Größe (GRÖ):** Deine Körpergröße. Groß und schwer oder klein und wendig.
*   🏃 **Geschicklichkeit (GES):** Beweglichkeit, Zielgenauigkeit und nicht über deine eigenen Füße stolpern.
*   🧠 **Intelligenz (INT):** Lernen, Erinnern und Rätsel lösen.
*   🔮 **Kraft (KRA):** Deine Seele, dein Glück, Willenskraft und deine magische Reserve.
*   😎 **Charisma (CHA):** Führung, Anziehungskraft und die Fähigkeit, Leute zu täuschen (oder zu verführen).

### 2. Schnelle Mathematik (Abgeleitete Eigenschaften)
Die Engine berechnet diese Werte automatisch basierend auf deinen Attributen:

*   🩸 **Leben (LP):** `CON * 10`. Wenn es 0 erreicht ... nun, du weißt es. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Der Treibstoff für deine Zaubertricks. Ohne Mana gibt es keine Tricks. (Ein Magier ohne Mana ist nur ein Typ im Umhang, der Cosplay macht).
*   ⚡ **Ausdauer (AUS):** `((CON+FUE+DES)/3)*10 + POD`. Deine Energie zum Kämpfen und Bewegen, ohne dabei zu sterben.
*   🧠 **Menschlichkeit (MNS):** `(CON+POD) * 5`. (Nur in Cyberpunk: Misst, wie viel von deinem Menschsein übrig ist, bevor die Kabel dich verrückt machen).
*   ⚔️ **Aktionspunkte (AP):** `(INT + DES) / 2`. Bestimmt deine Initiative. Wer zuerst zuschlägt, schlägt zweimal.

### 3. Deine Fähigkeiten
Sie beginnen mit einem Basiswert (z.B. Schleichen = GES + INT) und verbessern sich durch Nutzung. Es ist ein Prozentsatz (%).

### 4. Aktionsauflösung (Der Würfel)
Wenn du etwas Riskantes versuchst (klettern, lügen, angreifen ...), wird dich die KI nach einem Wurf fragen. Das Spiel würfelt unsichtbar einen **d100**. **(Erinnere dich: Die Würfel hassen dich. Es ist persönlich).**

*   **Dein Ziel:** Eine Zahl **KLEINER ODER GLEICH** deinem Fähigkeitswert erzielen.
    *   *Beispiel:* Du hast 45% im Klettern.
    *   Du würfelst eine 30: ✅ **Erfolg**. Du kletterst wie ein Affe.
    *   Du würfelst eine 80: ❌ **Fehlversuch**. Du fällst unsanft.
    *   **Kritisch:** Würfle kleiner oder gleich **1/5 deiner Fähigkeit** (oder eine 01). Episch! Du machst einen außergewöhnlichen Parkour mit Salto.
    *   **Patzer:** Eine **99 oder 100**. Die Würfel haben entschieden, dass heute nicht dein Tag ist. Deine Hose rutscht auf halbem Weg herunter und du fällst auf die Nase.

---

## 💡 TIPPS, UM NICHT (SCHNELL) ZU STERBEN

*   **✍️ Sei Beschreibend:** Schreibe nicht nur "angreifen". Schreibe: *"Ich versuche, seiner Axt auszuweichen, indem ich über den Boden rolle und ihm meinen Dolch in den Knöchel ramme"*. Die KI wird dich belohnen.
*   **🧪 Experimentiere:** Du bist nicht auf die Schaltflächen beschränkt. Schreibe verrückte Dinge! Die KI wird improvisieren.
*   **🎭 Rollenspiel:** Schlüpfe in deine Rolle. Lies die Beschreibungen und handle so, wie dein Charakter es tun würde, nicht wie du es im Pyjama tun würdest.

---

## ⚔️ DER KAMPF (Auf zur Waffe!)

Wenn Worte versagen, kommt die Zeit für Fäuste. Der Kampf ist **taktisch** und funktioniert in **Ticks** (Zeit).

### 🕹️ Wie es funktioniert:
*   **Ticks:** Jede Aktion kostet Zeit. Schwere Waffen sind langsam (verbrauchen viele Ticks). Dolche sind schnell.
*   **Deine Geschwindigkeit:** Hängt von deinen Aktionspunkten (AP) ab.

### Grundlegende Aktionen:
*   **🗡️ Angreifen:** Hau mit dem, was du gezogen hast.
*   **🛡️ Blocken:** Du gehst in die Defensive. Reduziert Schaden, verbraucht aber Ausdauer.
*   **🏃 Fliehen:** Für Feiglinge (oder Weise, die leben wollen).
*   **🏳️ Aufgeben:** Wenn du siehst, dass du nicht gewinnst, kannst du um Gnade bitten.
*   **✨ Magie / Cyberware:** Feuer, Laserstrahlen, Hacks ...

### 💬 Freitextaktionen (NEU!)
Du magst die Knöpfe nicht? Schreibe, was du tun möchtest, als würdest du mit einem lebenden Spielleiter sprechen!
*   **Beispiele:** *"Feuerball auf den Goblin schleudern"*, *"Mein Runenschwert ziehen"*, *"Heiltrank auf mich anwenden"*.
*   **Szenenregisseur:** Der Kampf wird jetzt lebendig. Die KI generiert Umweltereignisse und Reaktionen, die die Erzählung bereichern: herabfallende Balken, zurückweichende Feinde, umfallende Fackeln. Das Schlachtfeld ist nicht mehr statisch!
*   **Wenn die KI dich nicht versteht:** Sie wird dich bitten, es neu zu formulieren. Dein Zug geht dabei NICHT verloren!
*   **⚠️ Einschränkung:** Objekte zwischen Slots bewegen (aus dem Rucksack ausrüsten, Munition laden) erfolgt per **Drag & Drop** in der Benutzeroberfläche, nicht per Text.

### ⚠️ GOLDENE REGEL DES ÜBERLEBENS
**ZIEHE VOR DEM KAMPF DIE WAFFE!**
Das Ziehen der Waffe mitten im Kampf kostet Zeit (Ticks). Wenn du mit gezogenem Schwert erwischt wirst, wirst du ordentlich eins auf die Mütze bekommen, während du versuchst, es umständlich herauszuziehen. ODER SCHLIMMER!, WENN DU DEINE WAFFEN IM RUCKSACK TRÄGST STATT IN IHREM AUSRÜSTUNGSSLOT (Entschuldigen Sie mich kurz, ich muss das Großschwert aus dem Rucksack holen, ich glaube, ich hatte es irgendwo hier ... irgendwo...) 🤦‍♂️
👉 Klicke auf das **Etikett der ausgerüsteten Waffe** (rechtes Panel), um sie zu ziehen. Sie leuchtet grün.

Der Versuch, Waffen im Kampf zu bewegen, kostet Zeit (Ticks) und kann zu einem Überraschungsangriff führen. Außerdem verlierst du wahrscheinlich deinen Zug, scheiterst vor Nervosität, wenn die Axt auf deine Stirn zukommt, oder lässt sie fallen. (Vielleicht war es keine gute Idee, einen Charakter mit ADHS zu erstellen)

---

## ✨ MAGIE UND CYBERNETIK

Abhängig davon, ob deine Welt "Mittelalterliche Fantasy" oder "Cyberpunk" ist:

### 🧙‍♂️ Fantasy: Verzauberungen
Bist du ein Magier? Du kannst deine Ausrüstung verzaubern.
1.  **Lernen:** Du benötigst den Zauber in deinem Zauberbuch.
2.  **Wirken (Drag & Drop):** Ziehe den Zauber aus deiner Liste auf das Objekt in deinem Inventar.
3.  **Kosten:** Das Aufrechterhalten einer Verzauberung verbraucht **Mana pro Zug**.
4.  **Hinweis:** Wenn dir mitten im Kampf das Mana ausgeht, wird das Feuerschwert wieder zu einem Stück verrostetem Eisen.

### 🦾 Cyberpunk: Implantate
Willst du Augen mit Zoom oder Gorillasarme?
1.  Suche einen **Technochirurgen** (NPC für Dienstleistungen).
2.  Bezahle die Credits (nichts ist kostenlos in der Zukunft).
3.  **Menschlichkeitskosten:** Jedes Implantat kostet dich ein Stück deiner Seele (**Menschlichkeit**).
    *   Wenn du zu viele einbaust, wirst du zu einer **Cyberpsychose** (einer mörderischen Toaster-auf-Beinen) und verlierst die Kontrolle über deinen Charakter.

---

## 🛒 LÄDEN UND DIENSTLEISTUNGEN (SIS)

Sprich mit NPCs, um zu handeln.
*   **KI schlägt vor, du entscheidest:** Wenn du mit einem Händler oder Heiler sprichst, wird die KI seine Dienste vorschlagen (reparieren, verkaufen, heilen), aber ein **"Dienstleistungen anzeigen"**-Button erscheint, damit du entscheidest, wann du in den Transaktionsmodus wechselst.
*   **Feilschen:** Deine **Handelsfähigkeit** (basierend auf Charisma) bestimmt die Preise. Wenn du hässlich oder unfreundlich bist, wirst du über den Tisch gezogen.
*   **Verkaufen:** Klicke mit der **rechten Maustaste** auf einen Gegenstand in deinem Inventar, um ihn dem Händler zu verkaufen, oder ziehe ihn auf ihn.

---

## 🎒 INVENTARVERWALTUNG (Tetris)

*   **Gewicht:** Du hast ein Ladekapazitätslimit (Stärke + Größe). Wenn du zu viel Schrott trägst, wirst du langsam und erhältst Mali (Dioxenes ist kein Freund).
*   **Panels:**
    *   **Ausrüstung:** Was du trägst.
    *   **Gürtel:** Schneller Zugriff im Kampf (kostet weniger Zeit, Tränke hier zu verwenden).
    *   **Rucksack:** Der Boden des Sacks.
*   **Flüssige Nutzung:** Ziehe einen Trank oder Nahrung direkt auf **dein Gesicht** (das Porträt), um ihn sofort zu konsumieren. Du kannst auch das Kontextmenü verwenden (Rechtsklick -> Verwenden).

---

## 🛠️ FEINABSTIMMUNG

Im Menü **Einstellungen** kannst du alles anpassen:
*   **🌍 Sprache:** Die KI übersetzt das gesamte Spiel und die Antworten live für dich. Polyglotten-Modus aktiviert.
*   **👁️ Aussehen:** Schriftgröße und Farben, damit du nicht blind wirst. Neonränder und weiche Schatten für volle Immersion.
*   **🧠 KI-Einstellungen:** Wechsle das Modell, die Temperatur usw. (Erinnere dich an das, was wir am Anfang des Handbuchs über das Flag `--advanced` gesehen haben, wenn du zu denen gehörst, die alles anfassen wollen).

---

## 🎭 SCHWIERIGKEIT UND HUMOR (Passe dein Leiden an)

Bevor du anfängst, erinnere dich, dass die KI nicht nur erzählt, sondern auch **die Welt anpasst** deinen Vorlieben entsprechend. Diese Parameter werden bei der Erstellung der Welt gewählt und sind für diese Welt permanent:

*   **🎮 Schwierigkeit (Von der KI verwaltet):** Kein einfacher Schadensmultiplikator. Das Spiel sagt der KI: "Hey, die Schwierigkeit ist diese, handle entsprechend".
    *   **Einfach:** Du wirst nie sterben (oder es wird fast unmöglich sein), die Situationen sind einfacher, die Preise sind günstiger und die Feinde sind tollpatschiger. Die KI wird jede Szene logisch gestalten, damit dein Weg ein Rosenweg ist.
    *   **Normal:** Die Standardbalance.
    *   **Herausforderung:** Die KI wird unerbittlich sein, die Preise prohibitiv und jeder Fehler kann der letzte sein.

*   **🃏 Humorton:** Definiert, wie die KI mit dir spricht und welche Art von Ereignissen stattfinden. Obwohl jedes Modell seine eigene Art hat, "Humor" zu interpretieren, wird die KI versuchen, sich anzupassen, was du wählst ... oder nicht:
    *   **Ernst:** Eine epische, düstere und formale Erzählung.
    *   **Sarkastisch:** Die KI lacht über deine Fehler, wirft dir ständig Seitenhiebe zu und verwendet einen ironischen Ton.
    *   **Wirr:** Bereite dich auf das Absurde vor. Fliegende Kühe, surreale Situationen und totales Chaos, verwaltet von der verdrehtesten Logik der KI.

---

## 🚧 Hinweis: Early Access

RolemIAster befindet sich in **aktiver Entwicklung**, wird bei niedriger Hitze gekocht.
*   Du könntest Bugs (oder "unerwartete Features") finden.
*   Ich füge jede Woche neue Dinge hinzu.
*   Dein Feedback ist Gold wert! Sag mir, was dir gefällt und was dir sehr gefällt. (Wenn dir etwas nicht gefällt, sag es mir auch, aber mit Liebe).

Jetzt geh los, würfle Initiative und erschaffe deine Legende!

<!-- source_hash: 9af75cff -->