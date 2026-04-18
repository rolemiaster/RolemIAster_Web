# 🐉 Willkommen bei RolemIAster!

Schnapp dir deine Würfel (oder deine Maus) und mach dich bereit für Abenteuer, bei denen deine Vorstellungskraft die einzige Grenze ist! **RolemIAster** ist ein KI-gesteuertes, endloses Rollenspiel, das dich zum Helden (oder Bösewicht) deiner eigenen Geschichten macht.

---

## ⚠️ Rechtlicher Hinweis (Der langweilige, aber notwendige Teil)

**LIES DIES ODER DU WIRST DEN ZORN DER WÜRFEL FÜRCHTEN:**

1.  **🤖 Integrierte lokale KI:** RolemIAster bringt sein eigenes digitales Gehirn mit. Es funktioniert **ohne Internet** und ohne dass du irgendetwas Kompliziertes tun musst. Installieren und spielen!
2.  **☁️ Optionale Cloud:** Wenn du lieber Geld für externe KIs (OpenAI, Gemini...) ausgeben möchtest, dann bitteschön mit deiner Kreditkarte. Die Kosten sind deine Sache.
3.  **🎲 Generativer Chaos:** Die KI erfindet die Geschichte unterwegs. Wenn der Erzähler verrückt wird und sagt, dass Kühe regnen, schau uns nicht an. Der Entwickler übernimmt keine Verantwortung für die verrückten Dinge, die das Modell generiert.
4.  **🏗️ Early Access:** Das hier ist noch im Bau. Wenn du einen Bug findest, ist es kein Fehler, es ist ein überraschendes "Feature"! (Schick uns bitte Feedback, das hilft uns sehr).

---

## 🖥️ SYSTEMVORAUSSETZUNGEN UND DIGITALE GEHIRNE (KI)

RolemIAster läuft mit **lokaler künstlicher Intelligenz**. Das bedeutet, dass dein PC die harte Arbeit des Denkens erledigt. Du brauchst kein Internet, aber eine Grafikkarte, die nicht aus der Dinosaurierzeit stammt. (Hinweis: Wenn es in deinem Zimmer kalt ist, funktioniert dieses Spiel als kostenlose Heizung).

### ⚙️ Konzepte für Anfänger

**VRAM (Videospeicher)** ist der Treibstoff der KI.
*   Dank **TurboQuant** kann RolemIAster jetzt **über 100.000 Wörter (Tokens)** speichern – fast dreimal so viel wie zuvor –, ohne deine Grafikkarte zum Absturz zu bringen.
*   Wenn deiner GPU der Speicher ausgeht, wird das Spiel langsamer als eine Schnecke mit Asthma.

---

### 📊 MODELLKATALOG (Wähle dein Gift)

Verwalte deine KIs unter **Einstellungen → Integrierte lokale KI → Modelle verwalten**.

#### 🏆 Qwen 3.5 Familie — Speziell für RolemIAster trainiert

Diese Modelle wurden mit **Supervised Fine-Tuning (SFT)** trainiert, um die narrativen Regeln des Spiels zu beherrschen. Es sind keine generischen Modelle: Sie kennen den JSON-Vertrag von RolemIAster, die NPCs, das Inventar und den Kampf auswendig.

| Modell      | Größe   | Minimaler VRAM | Tier | Urteil                                                                            |
| :---------- | :------ | :------------- | :--- | :-------------------------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1,5 GB | **3 GB**       | B    | ⚡ **Der Sprinter.** Der schnellste von allen. Ideal für Basis-GPUs oder zum Spielen ohne dedizierte GPU. |
| **Qwen3.5-4B** | ~2,8 GB | **4 GB**       | A    | ✅ **DER AUSGEGLICHENE.** Optimale Geschwindigkeit und Qualität. Standardmodell empfohlen für die meisten Spieler. |
| **Qwen3.5-9B** | ~5,5 GB | **8 GB**       | S    | 🌟 **Der Erzähler.** Reichhaltige Erzählung und überlegene Kohärenz. Für Besitzer einer RTX 3070 oder besser. |

---

### 🎮 SCHNELLE AUSWAHLHILFE

| Deine Grafikkarte           | VRAM  | Empfohlenes Modell | Ergebnis                                        |
| :-------------------------- | :---- | :----------------- | :---------------------------------------------- |
| GTX 1050/1060 / Keine GPU | 4 GB  | **Qwen3.5-2B**     | 🆗 Knapp, aber spielbar, sehr knapp...          |
| GTX 1070/1660 / RX 580      | 6 GB  | **Qwen3.5-4B**     | ✅ Gutes Erlebnis                               |
| RTX 2060/3060 / RX 6600     | 8 GB  | **Qwen3.5-4B**     | 🚀 Schnell und präzise                           |
| RTX 3070/4060Ti / RX 6700   | 12 GB | **Qwen3.5-9B**     | 🌟 Das ideale Erlebnis                          |
| RTX 3090/4080/4090          | 16 GB+ | **Qwen3.5-9B**     | 👑 Maximale Qualität, ultraschnelle Antworten |

**💡 Pro-Tipp:** Lasse immer etwa **2 GB VRAM frei** für das Betriebssystem, sonst fängt Windows an zu weinen und schließt Dinge.

---

### 🚨 HILFE! MEIN PC IST LANGSAM! (VRAM-Probleme)

Wenn das Spiel länger zum Antworten braucht als dein Schwarm auf WhatsApp, bist du wahrscheinlich ohne VRAM.

**Symptome dafür, dass du es übertrieben hast:**
1.  **Das Modell lagert in den RAM aus:** Der PC nutzt den normalen Speicher anstelle der Grafikkarte. Ergebnis: EXTREME LANGSAMKEIT.
2.  **Leichte Überlastung (1-2 GB):** Dauert 30-60 Sekunden pro Antwort.
3.  **Moderate Überlastung (3-5 GB):** 2-5 Minuten. Du kannst dir einen Kaffee holen gehen.
4.  **Schwere Überlastung:** 10-30 Minuten. Unspielbar.

#### 🛡️ Notfallprotokoll
Wenn die Dinge schiefgehen, befolge diese Schritte in der Reihenfolge:

1.  **📉 VRAM-Prozentsatz reduzieren:** Gehe zu Einstellungen und reduziere ihn auf **85%**. Starte neu und versuche es erneut.
2.  **🧹 Aufräumen:** Schließe diesen Browser mit 40 offenen Tabs. Sie fressen deinen Speicher.
3.  **🛑 Das 70%-Limit:** Gehe niemals unter **70%** des zugewiesenen VRAMs.
    *   *Warum?* Weil die KI Platz zum "Denken" braucht (die KV-Cache). Wenn du ihr weniger als 70% gibst, wird sie leer und gibt einen Fehler aus.
4.  **🔙 Taktischer Rückzug:** Wenn nichts funktioniert, steige auf ein kleineres Modell um (von 9B auf 4B oder von 4B auf 2B).

---

### ⚙️ ERWEITERTE MODELLKONFIGURATION ("Maximales Frickeln")

> **EXPERTENMODUS:** Wenn du ein Profi bist und Zugriff auf erweiterte Modelleinstellungen (Hinzufügen eigener GGUF-Modelle von HuggingFace heruntergeladen, Ebenen anpassen usw.) haben möchtest, musst du das Spiel mit dem Befehl starten: `--advanced`.

Für diejenigen, die gerne auf die Schaltflächen in **Einstellungen → Integrierte lokale KI** klicken:

| Option           | Funktion                                      | Empfehlung                                                                |
| :--------------- | :-------------------------------------------- | :------------------------------------------------------------------------ |
| **GPU Layers**   | Wie viel vom Modell in die Grafikkarte geladen wird | **-1** (Bedeutet "ALLES". Nicht anfassen, es sei denn, du weißt, was du tust) |
| **Maximaler Kontext** | Das "Kurzzeitgedächtnis" der KI                | **16384 - 32768** (Weniger als das und die KI hat Amnesie)                  |
| **Temperatur**   | Kreativität vs. Wahnsinn                      | **0.7 - 0.8** (Höher = verrückter; Niedriger = roboterhafter)              |
| **Verlauf-RAG**  | Erinnern von Dingen von weit her               | **Ja** (Unverzichtbar für lange Kampagnen)                                |
| **Embeddings cachen** | Beschleunigt die Erinnerungssuche           | **Ja** (Macht es schneller)                                               |

---

### 🔧 PROBLEMBEHEBUNG (Troubleshooting)

| Problem      | Lösung                                                              |
| :----------- | :------------------------------------------------------------------ |
| **Langsame KI / Lag** | Überprüfe, ob `GPU Layers` -1 ist. Schließe Chrome. Reduziere `Contexto Máximo`. |
| **Speicherfehler (OOM)** | Reduziere `Contexto Máximo` oder wähle ein kleineres Modell (3B). |
| **Die KI redet Unsinn / Halluziniert** | Reduziere `Temperatura` auf 0.6. Wenn sie immer noch verrückt ist, starte die Anwendung neu. |

---

### 🌐 ALTERNATIVE ANBIETER (Nur für Experten)

> **Hinweis:** Die im Spiel integrierte lokale KI ist mehr als ausreichend. Dies ist nur für fortgeschrittene oder mutige Benutzer.

*   **Externe lokale Engines:**
    *   **Ollama / LM Studio:** Wenn du bereits deine eigenen verrückten Modelle hast, kannst du sie verwenden.
*   **Cloud-APIs (Kostenpflichtig):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Benötigt Internet und Geld.
    *   Konfigurieren unter: **Einstellungen → KI → Neuen Anbieter hinzufügen**.

---

### 🌍 WIE SPIELT MAN? (Das Multiversum und Du)

Beim Öffnen des Spiels hast du zwei Wege:

1.  **🆕 Neues Abenteuer**: Erschaffe deine Legende von Grund auf neu. Das Spiel fragt dich nach **Name, Beruf, körperlicher Beschreibung, psychologischer Beschreibung und dem Hintergrund/Vorwand** deiner Geschichte. Außerdem wählst du das **Schwierigkeitsgrad** und den **Humorton**, die die Kampagne leiten.
2.  **💾 Spiel fortsetzen**: RolemIAster **speichert in Echtzeit**. Hier gibt es kein "vor dem Tod laden" oder Zurück. Jede Entscheidung, jeder Fehler und jede Verletzung wird tief in die Geschichte eingebrannt. Es ist eine **HERAUSFORDERUNG**: Was du tust, ist getan. Lebe mit den Konsequenzen... oder sterbe mit ihnen.

RolemIAster ist keine isolierte Partie; es ist ein **Persistentes Multiversum**.
*   **Unendliche Welten:** Erschaffe deine eigenen Universen (**Mittelalter-Fantasy** oder **Cyberpunk**) mit eigenem Lore.
*   **Unendliche Charaktere:** Innerhalb jeder Welt kannst du so viele Helden haben, wie du willst.
*   **Gemeinsame Zeitlinie:** Achtung! Was ein Charakter tut, beeinflusst die Welt der anderen. Die KI ist sich deiner anderen Helden bewusst und wird sie als Bewohner der Welt erkennen.
*   **KI mit "Sinnen" (Super RAG):** Das RAG-System (Retrieval-Augmented Generation) fungiert als "Informant" der KI und gibt ihr Erinnerungen über die Welt, wer bei dir ist, wo du bist und was gerade passiert ist, damit die Geschichte zu 100 % kohärent ist.

### Die Benutzeroberfläche (Deine Kommandozentrale)

*   **Linkes Panel (DU):** Dein Charakterblatt. Leben, Mana, Fähigkeiten und wie gutaussehend du bist (Charisma).
*   **Mittleres Panel (DIE GESCHICHTE):**
    *   **Oben:** Wo der Erzähler erzählt, was passiert.
    *   **Unten:** Deine Entscheidungsbuttons und das Textfeld, um zu schreiben, was du tun möchtest.
*   **Rechtes Panel (DEINE SACHEN):** Inventar und Ausrüstung. Das Paradies des digitalen Messie.

---

## 📜 SPIELREGELN (Ja, es gibt Regeln)

RolemIAster verwendet ein klassisches und robustes d100-System (hundertseitiger Würfel).

### 1. Deine Attribute (Was dich definiert)
Die KI generiert deine Attribute basierend auf dem Kontext, Beruf und der Beschreibung, die du eingegeben hast. Sobald sie generiert sind, hast du **10 EXTRA-PUNKTE**, die du nach Belieben verteilen kannst.
*   **Gestaffelte Kosten:** Ein Attribut bis 14 zu erhöhen kostet 1 Punkt. Von 15 bis 16 kostet es 2 Punkte. Ab 17 kostet es 3 Punkte! Überlege gut, wo du deine Muskeln einsetzt.

*   💪 **Stärke (STR):** Deine reine Körperkraft. Beeinflusst Nahkampfschaden und deine Tragfähigkeit.
*   ❤️ **Konstitution (KON):** Deine Ausdauer. Um Schläge, Krankheiten und Gifte zu überstehen.
*   🐘 **Größe (GRÖ):** Deine Statur. Groß und schwer, oder klein und flink.
*   🏃 **Geschicklichkeit (GES):** Agilität, Treffsicherheit und nicht über deine eigenen Füße stolpern.
*   🧠 **Intelligenz (INT):** Lernen, Erinnern und Rätsel lösen.
*   🔮 **Kraft (KRA):** Deine Seele, dein Glück, Willenskraft und deine magische Reserve.
*   😎 **Charisma (CHA):** Führung, Attraktivität und die Fähigkeit, Leute zu täuschen (oder zu verführen).

### 2. Schnelle Mathematik (Abgeleitete Eigenschaften)
Die Engine berechnet diese Werte automatisch basierend auf deinen Attributen:

*   🩸 **Leben (LP):** `CON * 10`. Wenn es 0 erreicht... naja, du weißt schon. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Der Treibstoff für deine Zaubertricks. Ohne Mana keine Tricks. (Ein Magier ohne Mana ist nur ein Typ im Bademantel, der Cosplay macht).
*   ⚡ **Ausdauer (AUS):** `((CON+FUE+DES)/3)*10 + POD`. Deine Energie zum Kämpfen und Bewegen, ohne dabei zu sterben.
*   🧠 **Menschlichkeit (MNS):** `(CON+POD) * 5`. (Nur in Cyberpunk: Misst, wie viel Mensch in dir übrig ist, bevor die Kabel dich wahnsinnig machen).
*   ⚔️ **Aktionspunkte (AP):** `(INT + DES) / 2`. Bestimmt deine Initiative. Wer zuerst zuschlägt, schlägt zweimal.

### 3. Deine Fähigkeiten
Sie beginnen mit einem Basiswert (z.B. Schleichen = GES + INT) und verbessern sich durch Gebrauch. Es ist ein Prozentsatz (%).

### 4. Auflösung von Aktionen (Der Würfel)
Wenn du etwas Riskantes versuchst (klettern, lügen, angreifen...), fordert dich die KI zu einem Wurf auf. Das Spiel würfelt einen unsichtbaren **d100**. (Denk daran: Die Würfel hassen dich. Das ist persönlich).

*   **Dein Ziel:** Eine Zahl **WENIGER ODER GLEICH** deinem Fähigkeitswert würfeln.
    *   *Beispiel:* Du hast 45% im Klettern.
    *   Du würfelst eine 30: ✅ **Erfolg**. Du kletterst wie ein Affe.
    *   Du würfelst eine 80: ❌ **Fehlversuch**. Du legst dich ordentlich auf die Nase.
    *   **Kritisch:** Weniger oder gleich **1/5 deiner Fähigkeit** würfeln (oder eine 01). Episch! Du machst außergewöhnliches Parkour mit einem Salto.
    *   **Patzer:** Eine **99 oder 100**. Die Würfel haben beschlossen, dass heute nicht dein Tag ist. Deine Hose rutscht auf halbem Weg herunter und du fällst mit dem Gesicht voran.

---

## 💡 TIPPS, UM NICHT (SCHNELL) ZU STERBEN

*   **✍️ Sei beschreibend:** Schreibe nicht nur "ich greife an". Schreibe: *"Ich versuche, seiner Axt auszuweichen, indem ich über den Boden rolle, und stoße ihm meinen Dolch ins Bein."* Die KI wird dich dafür belohnen.
*   **🧪 Experimentiere:** Du bist nicht auf die Buttons beschränkt. Schreibe verrückte Dinge! Die KI wird improvisieren.
*   **🎭 Rolle:** Schlüpfe in die Rolle. Lies die Beschreibungen und handle, wie dein Charakter es tun würde, nicht wie du es im Pyjama tun würdest.

---

## ⚔️ DER KAMPF (Ans Waffen!)

Wenn die Worte versagen, kommt die Zeit für Schläge. Der Kampf ist **taktisch** und funktioniert in **Ticks** (Zeit).

### 🕹️ Wie es funktioniert:
*   **Ticks:** Jede Aktion kostet Zeit. Schwere Waffen sind langsam (verbrauchen viele Ticks). Dolche sind schnell.
*   **Deine Geschwindigkeit:** Hängt von deinen Aktionspunkten (AP) ab.

### Grundaktionen:
*   **🗡️ Angreifen:** Hau drauf mit dem, was du gezogen hast.
*   **🛡️ Blocken:** Du gehst in die Defensive. Reduziert Schaden, verbraucht aber Ausdauer.
*   **🏃 Fliehen:** Von Feiglingen (oder von Weisen, die leben wollen).
*   **🏳️ Aufgeben:** Wenn du siehst, dass du nicht gewinnst, kannst du um Gnade flehen.
*   **✨ Magie / Cyberware:** Feuer, Laserstrahlen, Hacks...

### 💬 Aktionen per Freitext (NEU!)
Magst du die Buttons nicht? Schreibe, was du tun möchtest, als ob du mit einem menschlichen Spielleiter sprichst!
*   **Beispiele:** *"Feuerball auf den Goblin werfen"*, *"Mein Runenschwert ziehen"*, *"Trank auf mich anwenden"*.
*   **Regisseur:** Der Kampf wird jetzt lebendig. Die KI generiert Umgebungsereignisse und Reaktionen, die die Erzählung bereichern: herabfallende Balken, zurückweichende Feinde, umfallende Fackeln. Das Schlachtfeld ist nicht mehr statisch!
*   **Wenn die KI es nicht versteht:** Sie wird dich bitten, es umzuformulieren. Dein Zug geht dabei NICHT verloren!
*   **⚠️ Einschränkung:** Objekte zwischen Slots bewegen (Ausrüstung aus dem Rucksack, Munition nachladen) erfolgt per **Drag & Drop** in der Benutzeroberfläche, nicht per Text.

### ⚠️ GOLDENE ÜBERLEBENSREGEL
**ZIEHE VOR DEM KAMPF DEINE WAFFE!**
Das Ziehen einer Waffe mitten im Kampf kostet Zeit (Ticks). Wenn du mit dem Schwert in der Scheide erwischt wirst, bekommst du Schläge auf deinen Personalausweis, während du versuchst, es ungeschickt herauszuziehen. ODER SCHLIMMER NOCH!, WENN DU DEINE WAFFEN IM RUCKSACK ANSTATT IN IHREM AUSRÜSTUNGSSLOT HAST (Entschuldigen Sie einen Moment, ich muss das Großschwert aus dem Rucksack holen, ich glaube, ich hatte es irgendwo hier... irgendwo!) 🤦‍♂️
👉 Klicke auf das Etikett der ausgerüsteten Waffe (rechtes Panel), um sie zu ziehen. Sie wird grün leuchten.

Das Bewegen von Waffen im Kampf kostet Zeit (Ticks) und kann zu einem Überraschungsangriff führen, außerdem verlierst du wahrscheinlich deinen Zug, verfehlst aus Nervosität wegen der Axt, die sich deiner Stirn nähert, oder sie fällt dir zu Boden. (Vielleicht war es keine gute Idee, einen Charakter mit ADHS zu erstellen)

---

## ✨ MAGIE UND CYBERNETIK

Abhängig davon, ob deine Welt "Mittelalter-Fantasy" oder "Cyberpunk" ist:

### 🧙‍♂️ Fantasy: Verzauberungen
Bist du ein Magier? Du kannst deine Ausrüstung verzaubern.
1.  **Lernen:** Du brauchst den Zauber in deinem Grimoire.
2.  **Wirken (Drag & Drop):** Ziehe den Zauber aus deiner Liste auf den Gegenstand in deinem Inventar.
3.  **Kosten:** Das Aufrechterhalten einer aktiven Verzauberung **verbraucht Mana pro Runde**.
4.  **Hinweis:** Wenn dir mitten im Kampf das Mana ausgeht, ist das Feuerschwert wieder nur ein Stück verrostetes Eisen.

### 🦾 Cyberpunk: Implantate
Willst du Augen mit Zoom oder Gorilla-Arme?
1.  Suche einen **Techno-Chirurgen** (NPC-Service).
2.  Zahle die Credits (nichts ist umsonst in der Zukunft).
3.  **Kosten der Menschlichkeit:** Jedes Implantat kostet dich ein Stück deiner Seele (**Menschlichkeit**).
    *   Wenn du zu viele einsetzt, wirst du zu einem **Cyberpsychose** (einer mörderischen Toaster-auf-Beinen) und verlierst die Kontrolle über deinen Charakter.

---

## 🛒 GESCHÄFTE UND DIENSTLEISTUNGEN (SIS)

Sprich mit NPCs, um zu handeln.
*   **KI schlägt vor, du entscheidest:** Wenn du mit einem Händler oder Heiler sprichst, schlägt die KI seine Dienste vor (reparieren, verkaufen, heilen), aber es erscheint ein Button **"Dienste anzeigen"**, damit du entscheidest, wann du in den Transaktionsmodus wechselst.
*   **Feilschen:** Deine **Handelsfähigkeit** (basierend auf Charisma) bestimmt die Preise. Wenn du hässlich oder unhöflich bist, wirst du betrogen.
*   **Verkaufen:** Klicke mit der **rechten Maustaste** auf einen Gegenstand in deinem Inventar, um ihn dem Händler zu verkaufen, oder ziehe ihn auf ihn.

---

## 🎒 INVENTARVERWALTUNG (Tetris)

*   **Gewicht:** Du hast eine Ladekapazität (Stärke + Größe). Wenn du zu viel Schrott trägst, wirst du langsam und hast Nachteile (Messie ist nicht dein Freund).
*   **Panels:**
    *   **Ausrüstung:** Was du trägst.
    *   **Gürtel:** Schneller Zugriff im Kampf (weniger Zeitaufwand, um Tränke von hier zu benutzen).
    *   **Rucksack:** Der Boden des Sackes.
*   **Flüssige Nutzung:** Ziehe einen Trank oder Nahrung direkt auf **dein Gesicht** (das Porträt), um ihn sofort zu konsumieren. Du kannst auch das Kontextmenü verwenden (rechte Maustaste -> Verwenden).

---

## 🛠️ FINALE ANPASSUNGEN

Im **Einstellungen**-Menü kannst du alles ändern:
*   **🌍 Sprache:** Die KI übersetzt das gesamte Spiel und die Antworten im Handumdrehen für dich. Polglott-Modus aktiviert.
*   **👁️ Aussehen:** Schriftgröße und Farben, damit du nicht blind wirst. Neonränder und weiche Schatten für volle Immersion.
*   **🧠 KI-Einstellungen:** Wechsle das Modell, die Temperatur usw. (Erinnere dich, was wir am Anfang des Handbuchs über das Flag `--advanced` gesehen haben, wenn du zu denjenigen gehörst, die alles ändern wollen).

---

## 🎭 SCHWIERIGKEIT UND HUMOR (Passe dein Leiden an)

Bevor du beginnst, denke daran, dass die KI nicht nur erzählt, sondern **die Welt anpasst** an deine Vorlieben. Diese Parameter werden beim Erstellen der Welt gewählt und sind für diese Welt dauerhaft:

*   **🎮 Schwierigkeit (KI-gesteuert):** Es ist keine einfache Schadensmultiplikation. Das Spiel sagt der KI: "Hey, die Schwierigkeit ist diese, handle entsprechend."
    *   **Einfach:** Du wirst nie sterben (oder es wird fast unmöglich sein), die Situationen sind einfacher, die Preise sind günstiger und die Feinde sind tollpatschiger. Die KI wird jede Szene so gestalten, dass dein Weg von Rosen gesäumt ist.
    *   **Normal:** Der Standard-Ausgleich.
    *   **Herausforderung:** Die KI wird unerbittlich sein, die Preise prohibitiv und jeder Fehler kann der letzte sein.

*   **🃏 Humorton:** Definiert, wie die KI mit dir spricht und welche Art von Ereignissen stattfinden. Obwohl jedes Modell seine eigene Art hat, "Humor" zu interpretieren, versucht die KI, sich an das anzupassen, was du wählst... oder nicht:
    *   **Ernst:** Eine epische, dunkle und formelle Erzählung.
    *   **Sarkastisch:** Die KI wird über deine Fehler lachen, dich ständig anpöbeln und einen ironischen Ton anschlagen.
    *   **Irrsinnig:** Mach dich auf das Absurde gefasst. Fliegende Kühe, surreale Situationen und totales Chaos, das von der verdrehtesten Logik der KI gesteuert wird.

---

## 🚧 Hinweis: Early Access

RolemIAster befindet sich in **aktiver Entwicklung**, es wird langsam gekocht.
*   Du könntest Bugs (oder "unerwartete Features") finden.
*   Ich füge jede Woche neue Dinge hinzu.
*   Dein Feedback ist Gold wert! Sag mir, was dir gefällt und was dir sehr gefällt. (Wenn dir etwas nicht gefällt, sag es mir auch, aber mit Liebe).

Jetzt geh, würfle die Initiative und erschaffe deine Legende!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->