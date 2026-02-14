# 🐉 Willkommen bei RolemIAster!

Schnapp dir deine Würfel (oder deine Maus) und mach dich bereit für Abenteuer, bei denen das einzige Limit die Verdrehtheit deiner eigenen Fantasie ist! **RolemIAster** ist ein endloses Rollenspiel, angetrieben von Künstlicher Intelligenz, das es dir ermöglicht, der Held (oder der Schurke) deiner eigenen Geschichten zu sein.

---

## ⚠️ RECHTLICHER HINWEIS (Der langweilige, aber notwendige Teil)

**LIES MICH ODER SPÜRE DEN ZORN DER WÜRFEL:**

1.  **🤖 Integrierte lokale KI:** RolemIAster bringt sein eigenes digitales Gehirn mit. Es funktioniert **ohne Internet** und ohne dass du irgendetwas Komisches anfassen musst. Installieren und spielen!
2.  **☁️ Optionale Cloud:** Wenn du deine Kohle lieber für externe KIs ausgeben willst (OpenAI, Gemini...), dann viel Spaß mit deiner Kreditkarte. Die Kosten sind dein Bier.
3.  **🎲 Generatives Chaos:** Die KI erfindet die Geschichte spontan. Wenn der Erzähler durchdreht und behauptet, es regne Kühe, schau uns nicht so an. Der Entwickler haftet nicht für die Verrücktheiten, die das Modell generiert.
4.  **🏗️ Early Access:** Das hier ist eine Baustelle. Wenn du einen Bug findest, ist das kein Fehler, sondern ein überraschendes "Feature"! (Bitte schick uns Feedback, das hilft uns sehr).

---

## 🖥️ SYSTEMANFORDERUNGEN UND DIGITALE GEHIRNE (KI)

RolemIAster läuft mit **lokaler Künstlicher Intelligenz**. Das bedeutet, dein PC macht die harte Denkarbeit. Du brauchst kein Internet, aber eine Grafikkarte, die nicht aus dem Dino-Zeitalter stammt. (Hinweis: Wenn es in deinem Zimmer kalt ist, funktioniert dieses Spiel als kostenlose Heizung).

### ⚙️ Begriffe für Nichteingeweihte

Der **VRAM (Videospeicher)** ist der Treibstoff der KI.
*   RolemIAster muss sich **12.000 bis 16.000 Wörter (Tokens)** "merken", um den Faden der Geschichte nicht zu verlieren.
*   Wenn deiner GPU der Speicher ausgeht, wird das Spiel langsamer als eine Schnecke mit Asthma.

---

### 📊 MODELL-KATALOG (Wähl dein Gift)

Verwalte deine KIs unter **Einstellungen → Integrierte lokale KI → Modelle verwalten**.

#### 🏆 Qwen 2.5 Familie (Die Crème de la Crème)

| Modell | Größe | Min. VRAM | Tier | Urteil |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Der Praktikant.** Erfüllt seinen Zweck, aber erwarte keinen Shakespeare. Kommt manchmal durcheinander. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **DER AUSERWÄHLTE.** Ausgewogen, schlau und schnell. Das standardmäßig empfohlene Modell. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Der Professor.** Reiche, tiefgründige Erzählweise und sehr natürliche Dialoge. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Gott-Modus.** Du brauchst ein Raumschiff (RTX 3090/4090), um das hier zu bewegen. |

---

### 🎮 SCHNELLAUSWAHL-GUIDE

| Deine Grafikkarte | VRAM | Empfohlenes Modell | Ergebnis |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Knapp, aber spielbar (Geringer Kontext) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Läuft gut |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Rennt |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Das ideale Erlebnis |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luxus pur |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maximale Qualität |

**💡 Pro Tip:** Lass immer etwa **2GB VRAM frei** für das Betriebssystem, sonst fängt Windows an zu weinen und Dinge zu schließen.

---

### 🚨 HILFE! MEIN PC IST LANGSAM! (VRAM-Probleme)

Wenn das Spiel länger zum Antworten braucht als dein Crush auf WhatsApp, ist dir wahrscheinlich der VRAM ausgegangen.

**Symptome, dass du dich übernommen hast:**
1.  **Das Modell lagert in den RAM aus:** Der PC nutzt den normalen Arbeitsspeicher statt des Grafikspeichers. Ergebnis: EXTREME LANGSAMKEIT.
2.  **Leichter Überlauf (1-2GB):** Braucht 30-60 Sekunden pro Antwort.
3.  **Moderater Überlauf (3-5GB):** 2-5 Minuten. Du kannst dir einen Kaffee holen.
4.  **Schwerer Überlauf:** 10-30 Minuten. Unspielbar.

#### 🛡️ Notfallprotokoll
Wenn es schlecht läuft, befolge diese Schritte der Reihe nach:

1.  **📉 Senke den VRAM-%:** Geh in die Einstellungen und setze ihn auf **85%**. Neustarten und testen.
2.  **🧹 Aufräumen:** Schließ den Browser mit den 40 offenen Tabs. Die fressen deinen Speicher.
3.  **🛑 Die 70%-Grenze:** Gehe niemals unter **70%** zugewiesenen VRAM.
    *   *Warum?* Weil die KI Platz zum "Denken" braucht (den KV-Cache). Wenn du ihr weniger als 70% gibst, wird sie ein Blackout haben und Fehler auswerfen.
4.  **🔙 Taktischer Rückzug:** Wenn nichts funktioniert, wechsle zu einem kleineren Modell (gehe vom 7B zum 3B).

---

### ⚙️ ERWEITERTE MODELL-KONFIGURATION ("Maximales Nerden")

> **EXPERTEN-MODUS:** Wenn du ein Pro bist und auf die erweiterten Modell-Einstellungen zugreifen willst (eigene GGUF-Modelle von HuggingFace hinzufügen, Layer anpassen usw.), musst du das Spiel mit dem Befehl `--advanced` starten.

Für diejenigen, die gerne Knöpfe drücken unter **Einstellungen → Integrierte lokale KI**:

| Option | Funktion | Empfehlung |
|--------|---------|---------------|
| **GPU Layers** | Wie viel vom Modell in die Grafikkarte geladen wird | **-1** (Bedeutet "ALLES". Fass das nicht an, außer du weißt, was du tust) |
| **Maximaler Kontext** | Das "Kurzzeitgedächtnis" der KI | **16384 - 32768** (Weniger als das und die KI bekommt Amnesie) |
| **Temperatur** | Kreativität vs. Wahnsinn | **0.7 - 0.8** (Höher = verrückter; Niedriger = roboterhafter) |
| **Verlaufs-RAG** | Sich an Dinge von vor langer Zeit erinnern | **Ja** (Unverzichtbar für lange Kampagnen) |
| **Embeddings cachen** | Beschleunigt die Suche nach Erinnerungen | **Ja** (Macht alles schneller) |

---

### 🔧 FEHLERBEHEBUNG (Troubleshooting)

| Patzer | Lösung |
|-------|---------|
| **KI Langsam / Lag** | Prüfe, ob `GPU Layers` auf -1 steht. Schließe Chrome. Senke den `Contexto Máximo`. |
| **Speicherfehler (OOM)** | Reduziere den `Contexto Máximo` oder wähle ein kleineres Modell (3B). |
| **Die KI fantasiert / Halluziniert** | Senke die `Temperatura` auf 0.6. Wenn sie immer noch verrückt spielt, starte die Anwendung neu. |

---

### 🌐 ALTERNATIVE ANBIETER (Nur Experten)

> **Hinweis:** Die lokale KI, die das Spiel mitbringt, reicht völlig aus. Dies ist nur für fortgeschrittene oder mutige Benutzer.

*   **Externe Lokale Engines:**
    *   **Ollama / LM Studio:** Wenn du schon deine eigenen Nerd-Modelle hast, kannst du sie nutzen.
*   **Cloud-APIs (Kostenpflichtig):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Erfordert Internet und dass du Geld blechst.
    *   Konfiguriere es unter: **Einstellungen → KI → Neuen Anbieter hinzufügen**.

---

### 🌍 WIE SPIELT MAN? (Das Multiversum und Du)

Beim Öffnen des Spiels hast du zwei Wege:

1.  **🆕 Neues Abenteuer**: Erschaffe deine Legende von Null an. Das Spiel fragt dich nach **Name, Beruf (Klasse), physischer Beschreibung, psychologischer Beschreibung und dem Hintergrund/Vorwand** deiner Geschichte. Außerdem wählst du den **Schwierigkeitsgrad** und den **Humor-Ton**, die die Kampagne leiten.
2.  **💾 Spiel fortsetzen**: RolemIAster **speichert in Echtzeit**. Hier gibt es kein "Laden vor dem Tod" oder Zurückspulen. Jede Entscheidung, jeder Patzer und jede Wunde wird fest in die Geschichte eingebrannt. Es ist eine **HERAUSFORDERUNG**: Was du tust, bleibt getan. Lebe mit den Konsequenzen... oder stirb mit ihnen.

RolemIAster ist keine isolierte Partie; es ist ein **persistentes Multiversum**.
*   **Unendliche Welten:** Erschaffe deine eigenen Universen (**Mittelalter-Fantasy** oder **Cyberpunk**) mit ihrer eigenen Lore.
*   **Unendliche Charaktere:** Innerhalb jeder Welt kannst du so viele Helden haben, wie du willst.
*   **Geteilte Zeitlinie:** Achtung! Was ein Charakter tut, beeinflusst die Welt der anderen. Die KI ist sich deiner anderen Helden bewusst und wird sie als Bewohner der Welt erkennen.
*   **KI mit "Sinnen" (Super RAG):** Das RAG-System (Retrieval-Augmented Generation) fungiert als "Petze" der KI und liefert ihr Erinnerungen über die Welt, wer dich begleitet, wo du bist und was gerade passiert ist, damit die Geschichte 100% kohärent bleibt.

### Die Benutzeroberfläche (Dein Cockpit)

*   **Linkes Panel (DU):** Dein Charakterbogen. Leben, Mana, Fähigkeiten und wie hübsch du bist (Charisma).
*   **Mittleres Panel (DIE GESCHICHTE):**
    *   **Oben:** Wo der Erzähler berichtet, was passiert.
    *   **Unten:** Deine Entscheidungsknöpfe und das Textfeld, um zu schreiben, was du tun willst.
*   **Rechtes Panel (DEIN ZEUG):** Inventar und Ausrüstung. Das Paradies für den digitalen Messie.

---

## 📜 SPIELREGELN (Ja, es gibt Regeln)

RolemIAster nutzt ein klassisches und robustes W100-System (hundertseitiger Würfel).

### 1. Deine Attribute (Was dich definiert)
Die KI generiert deine Attribute basierend auf dem Kontext, Beruf und der Beschreibung, die du eingegeben hast. Sobald generiert, hast du **10 EXTRAPUNKTE**, die du nach Belieben verteilen kannst.
*   **Gestaffelte Kosten:** Ein Attribut bis 14 zu steigern kostet 1 Punkt. Von 15 bis 16 kostet es 2 Punkte. Ab 17 kostet es 3 Punkte! Überleg gut, wo du die Muskeln spielen lässt.

*   💪 **Stärke (FUE):** Deine reine physische Kraft. Beeinflusst den Nahkampfschaden und deine Tragkraft.
*   ❤️ **Konstitution (CON):** Deine Widerstandskraft. Um Schläge, Krankheiten und Gifte auszuhalten.
*   🐘 **Größe (TAM):** Deine Statur. Groß und schwer oder klein und flink.
*   🏃 **Geschicklichkeit (DES):** Beweglichkeit, Zielgenauigkeit und nicht über die eigenen Füße stolpern.
*   🧠 **Intelligenz (INT):** Lernen, Erinnern und Rätsel lösen.
*   🔮 **Macht (POD):** Deine Seele, dein Glück, Willenskraft und dein Magievorrat.
*   😎 **Charisma (CAR):** Führungsqualität, Attraktivität und die Fähigkeit, Leute zu täuschen (oder zu verführen).

### 2. Schnelle Mathematik (Abgeleitete Eigenschaften)
Die Engine berechnet diese Zahlen automatisch basierend auf deinen Attributen:

*   🩸 **Leben (PV):** `CON * 10`. Wenn es 0 erreicht... nun, du weißt schon. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Der Treibstoff für deine Zaubertricks. Ohne Mana keine Tricks. (Ein Magier ohne Mana ist nur ein Typ im Bademantel, der Cosplay macht).
*   ⚡ **Ausdauer (STA):** `((CON+FUE+DES)/3)*10 + POD`. Deine Energie, um zu kämpfen und dich zu bewegen, ohne dabei draufzugehen.
*   🧠 **Menschlichkeit (HUM):** `(CON+POD) * 5`. (Nur in Cyberpunk: Misst, wie viel Mensch noch in dir steckt, bevor dich die Kabel verrückt machen).
*   ⚔️ **Aktionspunkte (PA):** `(INT + DES) / 2`. Bestimmt deine Initiative. Wer zuerst zuschlägt, schlägt zweimal zu.

### 3. Deine Fähigkeiten
Starten mit einem Basiswert (z.B.: Schleichen = DES + INT) und verbessern sich durch Benutzung. Es ist ein Prozentwert (%).

### 4. Auflösung von Aktionen (Der Würfel)
Wenn du versuchst, etwas Riskantes zu tun (klettern, lügen, angreifen...), wird die KI einen Wurf verlangen. Das Spiel wirft einen unsichtbaren **W100**. **(Denk dran: Die Würfel hassen dich. Es ist persönlich).**

*   **Dein Ziel:** Eine Zahl würfeln, die **KLEINER ODER GLEICH** deinem Fähigkeitslevel ist.
    *   *Beispiel:* Du hast 45% in Klettern.
    *   Du würfelst eine 30: ✅ **Erfolg**. Du kletterst hoch wie ein Affe.
    *   Du würfelst eine 80: ❌ **Fehlschlag**. Du fällst auf die Nase.
    *   **Kritisch:** Kleiner oder gleich **1/5 deiner Fähigkeit** würfeln (oder eine 01). Episch! Du machst einen außergewöhnlichen Parkour mit Salto.
    *   **Patzer:** Eine **99 oder 100**. Die Würfel haben entschieden, dass heute nicht dein Tag ist. Dir rutscht auf halbem Weg die Hose runter und du fällst auf den Kopf.

---

## 💡 TIPPS, UM NICHT (SCHNELL) ZU STERBEN

*   **✍️ Sei beschreibend:** Schreib nicht nur "ich greife an". Schreib: *"Ich versuche, seiner Axt auszuweichen, indem ich über den Boden rolle, und ramme ihm meinen Dolch in den Knöchel"*. Die KI wird dich belohnen.
*   **🧪 Experimentiere:** Du bist nicht auf die Knöpfe beschränkt. Schreib verrückte Sachen! Die KI wird improvisieren.
*   **🎭 Rollenspiel:** Versetze dich in die Rolle. Lies die Beschreibungen und handle so, wie es dein Charakter tun würde, nicht wie du es im Schlafanzug tun würdest.

---

## ⚔️ DER KAMPF (Zu den Waffen!)

Wenn Worte versagen, ist es Zeit für Prügel. Der Kampf ist **taktisch** und funktioniert über **Ticks** (Zeit).

### 🕹️ Wie es funktioniert:
*   **Ticks:** Jede Aktion kostet Zeit. Schwere Waffen sind langsam (kosten viele Ticks). Dolche sind schnell.
*   **Deine Geschwindigkeit:** Hängt von deinen Aktionspunkten (PA) ab.

### Basis-Aktionen:
*   **🗡️ Angreifen:** Schlag mit dem zu, was du gezogen hast.
*   **🛡️ Blocken:** Du gehst in die Defensive. Reduziert Schaden, kostet aber Ausdauer.
*   **🏃 Fliehen:** Für Feiglinge (oder Weise, die leben wollen).
*   **🏳️ Aufgeben:** Wenn du siehst, dass du nicht gewinnst, kannst du um Gnade flehen.
*   **✨ Magie / Cyberware:** Feuer, Laserstrahlen, Hacks...

### 💬 Aktionen per Freitext (NEU!)
Du magst keine Knöpfe? Schreib, was du tun willst, als würdest du mit einem Spielleiter aus Fleisch und Blut sprechen!
*   **Beispiele:** *"Feuerball auf den Goblin werfen"*, *"Mein Runenschwert ziehen"*, *"Trank auf mich selbst benutzen"*.
*   **Bühnenregisseur:** Der Kampf erwacht nun zum Leben. Die KI generiert Umgebungsereignisse und Reaktionen, die die Erzählung bereichern: herabfallende Balken, zurückweichende Feinde, umfallende Fackeln. Das Schlachtfeld ist nicht mehr statisch!
*   **Wenn die KI es nicht versteht:** Wird sie dich bitten, es umzuformulieren. Dein Zug geht NICHT verloren!
*   **⚠️ Einschränkung:** Objekte zwischen Slots bewegen (aus dem Rucksack ausrüsten, Munition laden) erfolgt per **Drag & Drop** im Interface, nicht per Text.

### ⚠️ GOLDENE ÜBERLEBENSREGEL
**ZIEH DEINE WAFFE VOR DEM KAMPF!**
Die Waffe mitten im Kampf zu ziehen, verbraucht Zeit (Ticks). Wenn sie dich mit dem Schwert in der Scheide erwischen, werden sie dich nach Strich und Faden verprügeln, während du tollpatschig versuchst, es zu ziehen. ODER NOCH SCHLIMMER, WENN DU DEINE WAFFEN IM RUCKSACK HAST STATT IM AUSRÜSTUNGSSLOT (Entschuldigen Sie eine Sekunde, ich muss den Zweihänder aus dem Rucksack holen, ich weiß, ich hatte ihn hier irgendwo... irgendwo...) 🤦‍♂️
👉 Mach einen **Klick auf das Etikett der ausgerüsteten Waffe** (rechtes Panel), um sie zu ziehen. Es leuchtet grün auf.

Der Versuch, Waffen im Kampf zu bewegen, verbraucht Zeit (Ticks) und kann zu einem Überraschungsangriff führen, außerdem ist es sehr wahrscheinlich, dass du den Zug verlierst, wegen der Nervosität vor der Axt, die sich deiner Stirn nähert, daneben greifst oder sie dir auf den Boden fällt. (Vielleicht war es keine gute Idee, einen Charakter mit ADHS zu erstellen).

---

## ✨ MAGIE UND KYBERNETIK

Je nachdem, ob deine Welt "Mittelalter-Fantasy" oder "Cyberpunk" ist:

### 🧙‍♂️ Fantasy: Verzauberungen
Bist du ein Hexenmeister? Du kannst deine Ausrüstung verzaubern.
1.  **Lerne:** Du brauchst den Zauber in deinem Grimoire.
2.  **Wirke (Drag & Drop):** Ziehe den Zauber aus deiner Liste auf das Objekt in deinem Inventar.
3.  **Kosten:** Eine Verzauberung aktiv zu halten **kostet Mana pro Runde**.
4.  **Hinweis:** Wenn du mitten im Kampf auf dem Trockenen sitzt (kein Mana mehr), wird das Feuerschwert wieder zu einem Stück rostigen Eisen.

### 🦾 Cyberpunk: Implantate
Willst du Augen mit Zoom oder Gorilla-Arme?
1.  Such einen **Techno-Chirurgen** (Dienstleistungs-NPC).
2.  Bezahle die Credits (nichts ist umsonst in der Zukunft).
3.  **Menschlichkeitskosten:** Jedes Implantat nimmt dir ein Stück deiner Seele (**Menschlichkeit**).
    *   Wenn du dir zu viele einsetzt, bekommst du eine **Cyberpsychose** (ein mörderischer Toaster auf Beinen) und verlierst die Kontrolle über deinen Charakter.

---

## 🛒 LÄDEN UND DIENSTLEISTUNGEN (SIS)

Sprich mit NPCs, um zu handeln.
*   **KI schlägt vor, Du befiehlst:** Wenn du mit einem Händler oder Heiler sprichst, wird die KI ihre Dienste vorschlagen (reparieren, verkaufen, heilen), aber es erscheint ein Knopf **"Dienste anzeigen"**, damit du entscheiden kannst, wann du in den Transaktionsmodus wechselst.
*   **Feilschen:** Deine Fähigkeit **Handel** (basiert auf Charisma) bestimmt die Preise. Wenn du hässlich oder unsympathisch bist, werden sie dich abzocken.
*   **Verkaufen:** Mach einen **Rechtsklick** auf ein Objekt in deinem Inventar, um es an den Händler zu verkaufen, oder ziehe es auf ihn.

---

## 🎒 INVENTARVERWALTUNG (Tetris)

*   **Gewicht:** Du hast ein Tradelimit (Stärke + Größe). Wenn du zu viel Schrott trägst, bist du langsam und bekommst Abzüge (das Messie-Syndrom ist nicht dein Freund).
*   **Panels:**
    *   **Ausrüstung:** Was du am Leib trägst.
    *   **Gürtel:** Schneller Zugriff im Kampf (Tränke von hier zu nutzen kostet weniger Zeit).
    *   **Rucksack:** Der Boden des Sacks.
*   **Flüssige Nutzung:** Ziehe einen Trank oder Essen direkt auf **dein Gesicht** (das Porträt), um es sofort zu konsumieren. Du kannst auch das Kontextmenü nutzen (Rechtsklick -> Benutzen).

---

## 🛠️ FEINEINSTELLUNGEN

Im Menü **Einstellungen** kannst du an allem herumspielen:
*   **🌍 Sprache:** Die KI übersetzt dir das gesamte Spiel und die Antworten on-the-fly. Polyglott-Modus aktiviert.
*   **👁️ Erscheinungsbild:** Schriftgröße und Farben, um nicht blind zu werden. Neon-Ränder und weiche Schatten für die totale Immersion.
*   **🧠 KI-Einstellungen:** Wechsle das Modell, Temperatur usw. (Denk an das, was wir am Anfang des Handbuchs über das Flag `--advanced` gesehen haben, wenn du zu denen gehörst, die alles anfassen wollen).

---

## 🎭 SCHWIERIGKEIT UND HUMOR (Personalisiere dein Leiden)

Bevor du anfängst, denk daran, dass die KI nicht nur erzählt, sondern **die Welt anpasst** gemäß deinen Vorlieben. Diese Parameter werden bei der Erstellung der Welt gewählt und sind für diese Welt permanent:

*   **🎮 Schwierigkeit (Gemanagt durch KI):** Das ist kein einfacher Schadensmultiplikator. Das Spiel sagt der KI: "Hey, die Schwierigkeit ist so, handle entsprechend".
    *   **Einfach:** Du wirst nie sterben (oder es wird fast unmöglich sein), die Situationen sind einfacher, die Preise günstiger und die Feinde tollpatschiger. Die KI wird jede Szene so begründen, dass dein Weg ein Spaziergang ist.
    *   **Normal:** Die Standard-Balance.
    *   **Herausforderung:** Die KI wird unerbittlich sein, die Preise unerschwinglich und jeder Fehler kann der letzte sein.

*   **🃏 Humor-Ton:** Definiert, wie die KI mit dir spricht und welche Art von Ereignissen passieren. Auch wenn jedes Modell seine eigene Interpretation von "Humor" hat, wird die KI versuchen, sich an deine Wahl anzupassen... oder auch nicht:
    *   **Ernst:** Eine epische, dunkle und formelle Erzählung.
    *   **Sarkastisch:** Die KI lacht über deine Fehler, wirft dir ständige Sticheleien an den Kopf und nutzt einen ironischen Ton.
    *   **Wahnwitzig:** Mach dich auf das Absurde gefasst. Fliegende Kühe, surreale Situationen und totales Chaos, gemanagt durch die verdrehteste Logik der KI.

---

## 🚧 Hinweis: Early Access

RolemIAster befindet sich in **aktiver Entwicklung** und köchelt auf kleiner Flamme.
*   Du kannst Bugs finden (oder "unerwartete Features").
*   Ich füge jede Woche neue Dinge hinzu.
*   Dein Feedback ist Gold wert! Sag mir, was dir gefällt und was dir sehr gefällt. (Wenn dir etwas nicht gefällt, sag es mir auch, aber liebevoll).

Und jetzt geh, würfle Initiative und erschaffe deine Legende!

<!-- source_hash: f3494f05 -->