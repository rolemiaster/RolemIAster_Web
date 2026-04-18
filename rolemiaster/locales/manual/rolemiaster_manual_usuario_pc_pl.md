# 🐉 Witaj w RolemIAster!

Chwyć swoje kości (lub mysz) i przygotuj się na przeżywanie przygód, gdzie jedynym ograniczeniem jest pokręcenie Twojej wyobraźni! **RolemIAster** to niekończąca się gra fabularna napędzana sztuczną inteligencją, która pozwala Ci stać się bohaterem (lub złoczyńcą) własnych historii.

---

## ⚠️ OFICJALNE OGŁOSZENIE (Nudna, ale potrzebna część)

**PRZECZYTAJ TO, CZY TEGO CHCESZ, CZY NIE, ALBO POZNASZ GNIEW KOŚCI:**

1.  **🤖 Zintegrowana Lokalna SI:** RolemIAster ma własny cyfrowy mózg. Działa **bez internetu** i bez konieczności robienia czegoś dziwnego. Zainstaluj i graj!
2.  **☁️ Opcjonalna Chmura:** Jeśli wolisz wydawać pieniądze na zewnętrzne SI (OpenAI, Gemini...), to Twój wybór i Twoja karta kredytowa. Koszty leżą po Twojej stronie.
3.  **🎲 Generowany Chaos:** SI wymyśla historię na bieżąco. Jeśli Mistrz Gry zwariuje i powie, że pada krowami, nie patrz na nas. Deweloper nie ponosi odpowiedzialności za szaleństwa generowane przez model.
4.  **🏗️ Wczesny Dostęp:** To jeszcze w budowie. Jeśli znajdziesz błąd, to nie usterka, to niespodziewana "funkcja"! (Wyślij nam opinię, proszę, to nam bardzo pomaga).

---

## 🖥️ WYMAGANIA SYSTEMOWE I CYFROWE MÓZGI (SI)

RolemIAster działa z **Lokalną Sztuczną Inteligencją**. Oznacza to, że Twój PC wykona ciężką pracę myślenia. Nie potrzebujesz internetu, ale potrzebujesz karty graficznej, która nie pochodzi z epoki dinozaurów. (Uwaga: Jeśli w Twoim pokoju jest zimno, ta gra działa jako darmowe ogrzewanie).

### ⚙️ Koncepcje dla początkujących

**VRAM (Pamięć Wideo)** to paliwo dla SI.
*   Dzięki **TurboQuant**, RolemIAster może teraz zapamiętać **ponad 100 000 słów (tokenów)** — prawie trzy razy więcej niż wcześniej — bez przeciążania karty graficznej.
*   Jeśli Twoja karta graficzna zabraknie pamięci, gra będzie działać wolniej niż ślimak z astmą.

---

### 📊 KATALOG MODELI (Wybierz swój jad)

Zarządzaj swoimi SI w **Konfiguracja → Zintegrowana Lokalna SI → Zarządzaj Modelami**.

#### 🏆 Rodzina Qwen 3.5 — Trenowane specjalnie dla RolemIAster

Te modele zostały wytrenowane z użyciem **Nadzorowanego Dostrajania (SFT)**, aby opanować zasady narracji gry. Nie są to modele generyczne: znają kontrakt JSON RolemIAster, NPC-ów, ekwipunek i walkę na pamięć.

| Model | Rozmiar | Minimalny VRAM | Poziom | Werdykt |
|--------|---------|----------------|--------|---------|
| **Qwen3.5-2B** | ~1.5GB | **3GB** | B | ⚡ **Sprinter.** Najszybszy ze wszystkich. Idealny dla podstawowych kart graficznych lub do gry bez dedykowanej karty graficznej. |
| **Qwen3.5-4B** | ~2.8GB | **4GB** | A | ✅ **ZŁOTY ŚRODEK.** Optymalna prędkość i jakość. Zalecany standardowy model dla większości graczy. |
| **Qwen3.5-9B** | ~5.5GB | **8GB** | S | 🌟 **Mistrz Narracji.** Bogata narracja i wyższa spójność. Dla posiadaczy RTX 3070 lub lepszej karty. |

---

### 🎮 SZYBKI PRZEWODNIK WYBORU

| Twoja Karta Graficzna | VRAM | Zalecany Model | Wynik |
|------------|------|--------------------|-----------|
| GTX 1050/1060 / Bez GPU | 4GB | **Qwen3.5-2B** | 🆗 Ledwo, ale grywalne, bardzo ledwo... |
| GTX 1070/1660 / RX 580 | 6GB | **Qwen3.5-4B** | ✅ Dobre wrażenia |
| RTX 2060/3060 / RX 6600 | 8GB | **Qwen3.5-4B** | 🚀 Szybko i precyzyjnie |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B** | 🌟 Idealne wrażenia |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maksymalna jakość, błyskawiczne odpowiedzi |

**💡 Pro Tip:** Zawsze zostawiaj **około 2GB VRAM wolne** dla systemu operacyjnego, inaczej Windows zacznie płakać i zamykać rzeczy.

---

### 🚨 POMOCY! MÓJ KOMPUTER DZIAŁA WOLNO! (Problemy z VRAM)

Jeśli gra odpowiada wolniej niż Twój crush na WhatsApp, prawdopodobnie zabrakło Ci VRAM.

**Objawy tego, że przesadziłeś:**
1.  **Model przenosi się do RAM:** Komputer używa zwykłej pamięci zamiast karty graficznej. Wynik: EKSTREMALNIE WOLNE DZIAŁANIE.
2.  **Lekkie przepełnienie (1-2GB):** Odpowiedź będzie trwać 30-60 sekund.
3.  **Umiarkowane przepełnienie (3-5GB):** 2-5 minut. Możesz iść po kawę.
4.  **Poważne przepełnienie:** 10-30 minut. Niegrywalne.

#### 🛡️ Protokół Awaryjny
Jeśli sprawy idą źle, postępuj zgodnie z poniższymi krokami w kolejności:

1.  **📉 Zmniejsz % VRAM:** Przejdź do Ustawień i zmniejsz do **85%**. Uruchom ponownie i spróbuj.
2.  **🧹 Czyszczenie:** Zamknij tę przeglądarkę z 40 otwartymi zakładkami. Zjadają Twoją pamięć.
3.  **🛑 Limit 70%:** Nigdy nie schodź poniżej **70%** przydzielonego VRAM.
    *   *Dlaczego?* Ponieważ SI potrzebuje miejsca do "myślenia" (pamięć podręczna KV). Jeśli dasz jej mniej niż 70%, zamilknie i zgłosi błąd.
4.  **🔙 Taktyczne Wycofanie:** Jeśli nic nie działa, przejdź na mniejszy model (z 9B na 4B lub z 4B na 2B).

---

### ⚙️ ZAAWANSOWANA KONFIGURACJA MODELU ("Maksymalne Podkręcanie")

> **TRYB EKSPERTOWY:** Jeśli jesteś pro i chcesz uzyskać dostęp do zaawansowanej konfiguracji modeli (dodawanie własnych modeli GGUF pobranych z HuggingFace, manipulowanie warstwami itp.), musisz uruchomić grę z poleceniem: `--advanced`.

Dla tych, którzy lubią naciskać przyciski w **Konfiguracja → Zintegrowana Lokalna SI**:

| Opcja | Funkcja | Rekomendacja |
|--------|---------|---------------|
| **Warstwy GPU** | Ile modelu jest ładowane do karty graficznej | **-1** (Oznacza "WSZYSTKO". Nie dotykaj, chyba że wiesz, co robisz) |
| **Maksymalny Kontekst** | "Krótkoterminowa pamięć" SI | **16384 - 32768** (Mniej niż to, a SI będzie cierpieć na amnezję) |
| **Temperatura** | Kreatywność vs Szaleństwo | **0.7 - 0.8** (Wyżej = bardziej szalone; Niżej = bardziej robotyczne) |
| **RAG z Historii** | Zapamiętywanie rzeczy z dawnych czasów | **Tak** (Niezbędne dla długich kampanii) |
| **Cache Embeddings** | Przyspiesza wyszukiwanie wspomnień | **Tak** (Sprawia, że działa szybciej) |

---

### 🔧 ROZWIĄZYWANIE PROBLEMÓW (Troubleshooting)

| Problem | Rozwiązanie |
|-------|---------|
| **Wolna SI / Opóźnienia** | Sprawdź, czy `GPU Layers` to -1. Zamknij Chrome. Zmniejsz `Contexto Máximo`. |
| **Błąd Pamięci (OOM)** | Zmniejsz `Contexto Máximo` lub wybierz mniejszy model (3B). |
| **SI bredzi / Halucynuje** | Zmniejsz `Temperatura` do 0.6. Jeśli nadal szaleje, uruchom ponownie aplikację. |

---

### 🌐 ALTERNATYWNI DOSTAWCY (Tylko dla Ekspertów)

> **Uwaga:** Lokalna SI dostarczana z grą jest wystarczająca. To jest tylko dla zaawansowanych lub odważnych użytkowników.

*   **Zewnętrzne Silniki Lokalne:**
    *   **Ollama / LM Studio:** Jeśli masz już swoje własne, pokręcone modele, możesz ich użyć.
*   **API w Chmurze (Płatne):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Wymaga internetu i wydawania pieniędzy.
    *   Skonfiguruj w: **Konfiguracja → SI → Dodaj Nowego Dostawcę**.

---

### 🌍 JAK GRAĆ? (Multiświat i Ty)

Po otwarciu gry masz dwie ścieżki:

1.  **🆕 Nowa Przygoda**: Stwórz swoją legendę od zera. Gra poprosi Cię o **Imię, Zawód (Profesję), Opis Fizyczny, Opis Psychologiczny i Tło/Pretekst** Twojej historii. Dodatkowo wybierzesz **Poziom Trudności** i **Ton Humoru**, które będą kierować kampanią.
2.  **💾 Kontynuuj Grę**: RolemIAster **zapisuje w czasie rzeczywistym**. Tutaj nie ma "ładuj przed śmiercią" ani powrotu. Każda decyzja, każda wpadka i każda rana zostaje wypalona w historii. To **WYZWANIE**: co zrobisz, już zrobione. Żyj z konsekwencjami... albo umrzyj z nimi.

RolemIAster to nie pojedyncza gra; to **Trwały Multiświat**.
*   **Nieskończone Światy:** Twórz własne wszechświaty (**Średniowieczna Fantastyka** lub **Cyberpunk**) z własnym Lore.
*   **Nieskończone Postacie:** W każdym świecie możesz mieć tylu bohaterów, ilu chcesz.
*   **Wspólna Linia Czasowa:** Uwaga! To, co robi jedna postać, wpływa na świat innych. SI jest świadoma Twoich innych bohaterów i rozpozna ich jako mieszkańców świata.
*   **SI z "Zmysłami" (Super RAG):** System RAG (Retrieval-Augmented Generation) działa jak "uaszczyciel" SI, dostarczając jej wspomnień o świecie, kto jej towarzyszy, gdzie się znajduje i co się właśnie wydarzyło, aby historia była w 100% spójna.

### Interfejs (Twoja kabina dowodzenia)

*   **Panel Lewy (TY):** Twoja Karta Postaci. Życie, mana, umiejętności i jak bardzo jesteś przystojny (Charyzma).
*   **Panel Środkowy (HISTORIA):**
    *   **Góra:** Gdzie Mistrz Narracji opowiada, co się dzieje.
    *   **Dół:** Twoje przyciski decyzji i pole tekstowe, aby wpisać, co chcesz zrobić.
*   **Panel Prawy (TWOJE RZECZY):** Ekwipunek i wyposażenie. Raj dla cyfrowego zbieracza.

---

## 📜 ZASADY GRY (Tak, są zasady)

RolemIAster używa klasycznego i solidnego systemu d100 (kości stustronnej).

### 1. Twoje Atrybuty (To, co Cię definiuje)
SI generuje Twoje atrybuty na podstawie kontekstu, zawodu i opisu, które podałeś. Po ich wygenerowaniu masz **10 DODATKOWYCH PUNKTÓW**, które możesz rozdzielić według własnego uznania.
*   **Stopniowane Koszty:** Podniesienie atrybutu do 14 kosztuje 1 punkt. Od 15 do 16 kosztuje 2 punkty. Od 17 kosztuje 3 punkty! Dobrze się zastanów, gdzie wkładasz mięśnie.

*   💪 **Siła (SIŁ):** Twoja czysta moc fizyczna. Wpływa na obrażenia w walce wręcz i udźwig.
*   ❤️ **Kondycja (KON):** Twoja wytrzymałość. Aby wytrzymać ciosy, choroby i trucizny.
*   🐘 **Rozmiar (ROZ):** Twoja postawa. Duży i ciężki, czy mały i zwinny.
*   🏃 **Zręczność (ZRZ):** Zwinność, celność i unikanie potykania się o własne nogi.
*   🧠 **Inteligencja (INT):** Uczenie się, zapamiętywanie i rozwiązywanie zagadek.
*   🔮 **Moc (MOC):** Twoja dusza, szczęście, siła woli i zapas magii.
*   😎 **Charyzma (CHA):** Przywództwo, atrakcyjność i zdolność oszukiwania (lub uwodzenia) ludzi.

### 2. Szybka Matematyka (Cechy Pochodne)
Silnik automatycznie oblicza te wartości na podstawie Twoich atrybutów:

*   🩸 **Punkty Życia (PŻ):** `CON * 10`. Jeśli spadnie do 0... cóż, wiesz. F.
*   ✨ **Punkty Many (PM):** `(POD * 10) + INT`. Paliwo do Twoich magicznych sztuczek. Bez many, nie ma sztuczek. (Mag bez many to tylko facet w szacie robiący cosplay).
*   ⚡ **Wytrzymałość (WYTR):** `((CON+FUE+DES)/3)*10 + POD`. Twoja energia do walki i ruchu bez umierania w trakcie.
*   🧠 **Ludzkosc (LUD):** `(CON+POD) * 5`. (Tylko w Cyberpunk: Mierzy, ile pozostało Ci ludzkiego, zanim kable oszaleją).
*   ⚔️ **Punkty Akcji (PA):** `(INT + DES) / 2`. Określa Twoją Inicjatywę. Kto pierwszy uderza, uderza dwa razy.

### 3. Twoje Umiejętności
Zaczynają z podstawową wartością (np. Skradanie = ZRZ + INT) i poprawiają się poprzez ich używanie. Jest to procent (%).

### 4. Rozstrzyganie Akcji (Kość)
Kiedy próbujesz zrobić coś ryzykownego (wspinać się, kłamać, atakować...), SI poprosi Cię o rzut. Gra rzuca niewidzialną **kością d100**. **(Pamiętaj: Kości Cię nienawidzą. To osobiste).**

*   **Twój Cel:** Uzyskać liczbę **MNIEJSZĄ LUB RÓWNĄ** Twojemu poziomowi umiejętności.
    *   *Przykład:* Masz 45% w Wspinaczce.
    *   Wyrzucisz 30: ✅ **Sukces**. Wchodzisz jak małpa.
    *   Wyrzucisz 80: ❌ **Porażka**. Spadłeś jak worek ziemniaków.
    *   **Krytyk:** Wyrzucenie mniej lub równe **1/5 Twojej umiejętności** (lub 01). Epickie! Wykonujesz niezwykły parkour z koziołkiem.
    *   **Wpadka:** **99 lub 100**. Kości zdecydowały, że dziś nie jest Twój dzień. Spodnie zsunęły Ci się w połowie drogi i wpadłeś twarzą w ziemię.

---

## 💡 WSKAZÓWKI, ABY NIE UMRZEĆ (SZYBKO)

*   **✍️ Bądź Opisowy:** Nie pisz tylko "atakuję". Napisz: *"Próbuję uniknąć jego topora, tocząc się po ziemi i wbijam mu sztylet w kostkę"*. SI Cię nagrodzi.
*   **🧪 Eksperymentuj:** Nie ograniczaj się do przycisków. Pisz głupoty! SI zaimprowizuje.
*   **🎭 Roleplayuj:** Wczuj się w rolę. Czytaj opisy i działaj tak, jak zrobiłaby to Twoja postać, a nie Ty w piżamie.

---

## ⚔️ WALKA (Do broni!)

Kiedy słowa zawodzą, nadchodzi czas na bójkę. Walka jest **taktyczna** i działa w **Ticach** (czasie).

### 🕹️ Jak to działa:
*   **Tice:** Każda akcja kosztuje czas. Ciężkie bronie są wolne (zużywają dużo ticków). Sztylety są szybkie.
*   **Twoja Szybkość:** Zależy od Twoich Punktów Akcji (PA).

### Podstawowe Akcje:
*   **🗡️ Atakuj:** Uderz tym, co masz wyciągnięte.
*   **🛡️ Blokuj:** Wychodzisz do obrony. Zmniejsza obrażenia, ale zużywa Wytrzymałość.
*   **🏃 Uciekaj:** Z tchórzostwa (lub mądrości, by przeżyć).
*   **🏳️ Poddaj się:** Jeśli widzisz, że nie wygrasz, możesz błagać o litość.
*   **✨ Magia / Cyberware:** Ogień, lasery, hackowanie...

### 💬 Akcje Wolnym Tekstem (NOWOŚĆ!)
Nie lubisz przycisków? Napisz, co chcesz zrobić, tak jakbyś rozmawiał z Mistrzem Gry z krwi i kości!
*   **Przykłady:** *"Rzuć kulę ognia na goblina"*, *"Wyciągnij mój runiczny miecz"*, *"Użyj mikstury na sobie"*.
*   **Reżyser Sceny:** Walka ożywa. SI generuje wydarzenia środowiskowe i reakcje, które wzbogacają narrację: spadające belki, cofający się wrogowie, spadające pochodnie. Pole bitwy nie jest już statyczne!
*   **Jeśli SI nie zrozumie:** Poprosi o przeformułowanie. Twoja kolej NIE zostaje utracona!
*   **⚠️ Ograniczenie:** Przenoszenie przedmiotów między slotami (wyposażenie z plecaka, ładowanie amunicji) odbywa się za pomocą **Przeciągnij i Upuść** w interfejsie, a nie tekstem.

### ⚠️ ZŁOTA ZASADA PRZETRWANIA
**WYCIĄGNIJ BROŃ PRZED WALIKĄ!**
Wyciągnięcie broni w środku walki zajmuje czas (Tice). Jeśli zostaniesz złapany z mieczem w pochwie, dostaniesz aż po kartę tożsamości, gdy będziesz próbował go niezdarnie wyciągnąć. ALBO GORSZE JESCZE!, JEŚLI MASZ BROŃ W PLECAKU ZAMIAST W JEGO SLOCIE WYPOSAŻENIA (Przepraszam na sekundę, muszę wyjąć wielki miecz z plecaka, miałem go gdzieś tutaj... gdzieś...) 🤦‍♂️
👉 Kliknij **etykietę broni wyposażonej** (panel prawy), aby ją wyciągnąć. Podświetli się na zielono.

Próba przenoszenia broni podczas walki zużywa czas (Tice) i może skutkować atakiem z zaskoczenia, a także jest bardzo prawdopodobne, że stracisz turę, że przegapisz z nerwów siekiery zbliżającej się do Twojej brwi lub że wypadnie Ci z rąk. (Może nie było dobrym pomysłem stworzenie postaci z ADHD)

---

## ✨ MAGIA I CYBERNETYKA

W zależności od tego, czy Twój świat jest "Średniowieczną Fantastyką" czy "Cyberpunk":

### 🧙‍♂️ Fantastyka: Zaklęcia
Jesteś czarodziejem? Możesz zaczarować swój ekwipunek.
1.  **Naucz się:** Potrzebujesz zaklęcia w swoim grimuarze.
2.  **Rzuć (Przeciągnij i Upuść):** Przeciągnij zaklęcie z listy na przedmiot w swoim ekwipunku.
3.  **Koszt:** Utrzymanie aktywnego zaklęcia **zużywa Manę na turę**.
4.  **Uwaga:** Jeśli zabraknie Ci many w środku walki, ognisty miecz znów stanie się kawałkiem zardzewiałego żelaza.

### 🦾 Cyberpunk: Implanty
Chcesz oczu z zoomem lub małpich ramion?
1.  Znajdź **Cyber-Chirurga** (NPC usługowy).
2.  Zapłać kredyty (nic w przyszłości nie jest za darmo).
3.  **Koszt Ludzkości:** Każdy implant zabiera Ci kawałek duszy (**Ludzkosc**).
    *   Jeśli umieścisz ich za dużo, zamienisz się w **Cyber-Psychozę** (zabójczą tosterkę na nogach) i stracisz kontrolę nad swoją postacią.

---

## 🛒 SKLEPY I USŁUGI (SIS)

Rozmawiaj z NPC, aby handlować.
*   **SI Sugeruje, Ty Decydujesz:** Kiedy rozmawiasz z kupcem lub uzdrowicielem, SI zasugeruje jego usługi (naprawa, sprzedaż, leczenie), ale pojawi się przycisk **"Zobacz Usługi"**, abyś mógł zdecydować, kiedy wejść w tryb transakcyjny.
*   **Targowanie:** Twoja umiejętność **Handlu** (oparta na Charyzmie) decyduje o cenach. Jeśli jesteś brzydki lub nieuprzejmy, będą Cię oszukiwać.
*   **Sprzedawaj:** Kliknij **prawym przyciskiem myszy** na przedmiot w swoim ekwipunku, aby sprzedać go handlarzowi, lub przeciągnij go na niego.

---

## 🎒 ZARZĄDZANIE EKWIPUNKIEM (Tetris)

*   **Waga:** Masz limit udźwigu (Siła + Rozmiar). Jeśli nosisz za dużo złomu, będziesz wolny i będziesz otrzymywać kary (Diógenes nie jest Twoim przyjacielem).
*   **Panele:**
    *   **Wyposażenie:** To, co masz na sobie.
    *   **Pas:** Szybki dostęp w walce (zużywa mniej czasu na użycie mikstur stąd).
    *   **Plecak:** Dno torby.
*   **Płynne Użycie:** Przeciągnij miksturę lub jedzenie bezpośrednio na **swoją twarz** (portret), aby natychmiast je zużyć. Możesz również użyć menu kontekstowego (kliknij prawym przyciskiem myszy -> Użyj).

---

## 🛠️ OSTATECZNE USTALENIA

W menu **Ustawień** możesz wszystko zmienić:
*   **🌍 Język:** SI przetłumaczy Ci całą grę i odpowiedzi na bieżąco. Tryb poligloty włączony.
*   **👁️ Wygląd:** Rozmiar czcionki i kolory, aby nie oślepnąć. Neonowe obramowania i wygładzone cienie dla pełnego zanurzenia.
*   **🧠 Ustawienia SI:** Zmień model, temperaturę itp. (Pamiętaj, co widzieliśmy na początku podręcznika o fladze `--advanced`, jeśli należysz do tych, którzy chcą wszystkiego dotykać).

---

## 🎭 TRUDNOŚĆ I HUMOR (Dostosuj swoje cierpienie)

Zanim zaczniesz, pamiętaj, że SI nie tylko narracja, ale **dostosowuje świat** do Twoich preferencji. Te parametry wybiera się podczas tworzenia świata i są one trwałe dla danego świata:

*   **🎮 Trudność (Zarządzana przez SI):** To nie jest proste mnożnik obrażeń. Gra mówi SI: "Słuchaj, trudność jest taka, działaj odpowiednio".
    *   **Łatwy:** Nigdy nie umrzesz (lub będzie to prawie niemożliwe), sytuacje są prostsze, ceny są niższe, a wrogowie są bardziej niezdarni. SI będzie analizować każdą scenę, aby Twoja droga była usłana różami.
    *   **Normalny:** Standardowa równowaga.
    *   **Wyzwanie:** SI będzie bezlitosna, ceny zaporowe, a każdy błąd może być ostatnim.

*   **🃏 Ton Humoru:** Określa, jak SI do Ciebie mówi i jakie wydarzenia mają miejsce. Chociaż każdy model ma swój sposób interpretacji koncepcji "humoru", SI będzie próbować dostosować się do tego, co wybierzesz... lub nie:
    *   **Poważny:** Epicka, mroczna i formalna narracja.
    *   **Sarkastyczny:** SI będzie śmiać się z Twoich błędów, rzucać w Twoją stronę stałe docinki i używać ironicznego tonu.
    *   **Deliryczny:** Przygotuj się na absurd. Latające krowy, surrealistyczne sytuacje i całkowity chaos zarządzany przez najbardziej pokręconą logikę SI.

---

## 🚧 Uwaga: Wczesny Dostęp

RolemIAster jest w **aktywnym rozwoju**, gotowany na wolnym ogniu.
*   Możesz napotkać błędy (lub "nieoczekiwane funkcje").
*   Dodaję nowe rzeczy co tydzień.
*   Twoja opinia jest na wagę złota! Powiedz mi, co Ci się podoba, a co bardzo Ci się podoba. (Jeśli coś Ci się nie podoba, powiedz mi też, ale z miłością).

Teraz idź, rzuć inicjatywą i stwórz swoją legendę!

<!-- source_hash: 4b8ac77b -->