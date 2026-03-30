# 🐉 Witamy w RolemIAster!

Chwyć kości (lub myszkę) i przygotuj się na przygody, gdzie jedynym ograniczeniem jest pokrętność Twojej wyobraźni! **RolemIAster** to gra fabularna zasilana przez sztuczną inteligencję, która pozwala Ci stać się bohaterem (lub złoczyńcą) własnych historii.

---

## ⚠️ INFORMACJE PRAWNE (Nudna, ale potrzebna część)

**PRZECZYTAJ TO, ALBO CIERPIJ GNIEW KOŚCI:**

1.  **🤖 Wbudowana lokalna sztuczna inteligencja:** RolemIAster posiada swój własny cyfrowy mózg. Działa **bez internetu** i bez Twojej ingerencji. Zainstaluj i graj!
2.  **☁️ Opcjonalna chmura:** Jeśli wolisz wydawać pieniądze na zewnętrzne AI (OpenAI, Gemini...), to Twoja sprawa i karta kredytowa. Koszty ponosisz Ty.
3.  **🎲 Generacyjny chaos:** Sztuczna inteligencja wymyśla historię na bieżąco. Jeśli Mistrz Gry oszaleje i powie, że spadają krowy, nie patrz na nas. Twórca nie ponosi odpowiedzialności za szaleństwa generowane przez model.
4.  **🏗️ Wczesny dostęp:** To jest w budowie. Jeśli znajdziesz błąd, to nie błąd, to niespodzianka! (Prześlij nam opinię, proszę, bardzo nam pomaga).

---

## 🖥️ WYMAGANIA SYSTEMOWE I CYFROWE MÓZGI (SZTUCZNA INTELIGENCJA)

RolemIAster działa z **lokalną sztuczną inteligencją**. Oznacza to, że Twój komputer wykona ciężką pracę myślenia. Nie potrzebujesz internetu, ale potrzebujesz karty graficznej, która nie pochodzi z epoki dinozaurów. (Uwaga: Jeśli w Twoim pokoju jest zimno, ta gra działa jak darmowe ogrzewanie).

### ⚙️ Koncepcje dla początkujących

**VRAM (Pamięć karty graficznej)** to paliwo dla sztucznej inteligencji.
*   RolemIAster potrzebuje "pamiętać" od **12 000 do 16 000 słów (tokenów)**, aby nie stracić wątku historii.
*   Jeśli Twoja karta graficzna zabraknie pamięci, gra będzie działać wolniej niż ślimak z astmą.

---

### 📊 KATALOG MODELI (Wybierz swój truciznę)

Zarządzaj swoimi sztucznymi inteligencjami w **Ustawienia → Wbudowana lokalna sztuczna inteligencja → Zarządzaj modelami**.

#### 🏆 Rodzina Qwen 3.5 — Trenowana specjalnie dla RolemIAster

Te modele zostały przeszkolone przy użyciu **nadzorowanego dostrajania (SFT)**, aby opanować zasady narracyjne gry. Nie są to modele generyczne: znają kontrakt JSON RolemIAster, postaci niezależnych, ekwipunek i walkę na pamięć.

| Model        | Rozmiar | Minimalna VRAM | Poziom | Werdykt                                                                   |
| :----------- | :------ | :------------- | :----- | :------------------------------------------------------------------------ |
| **Qwen3.5-2B** | ~1.5GB  | **3GB**        | B      | ⚡ **Sprinter.** Najszybszy ze wszystkich. Idealny dla podstawowych GPU lub do gry bez dedykowanej karty graficznej. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**        | A      | ✅ **Zrównoważony.** Optymalna prędkość i jakość. Zalecany model standardowy dla większości graczy. |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**        | S      | 🌟 **Narrator.** Bogata narracja i wyższa spójność. Dla posiadaczy RTX 3070 lub lepszych. |

---

### 🎮 SZYBKI PRZEWODNIK WYBORU

| Twoja karta graficzna | VRAM    | Zalecany model | Wynik                     |
| :-------------------- | :------ | :------------- | :------------------------ |
| GTX 1050/1060 / Brak GPU | 2-4GB   | **Qwen3.5-2B** | 🆗 Ledwo, ale grywalne     |
| GTX 1070/1660 / RX 580  | 4-6GB   | **Qwen3.5-4B** | ✅ Bardzo dobre wrażenia    |
| RTX 2060/3060 / RX 6600 | 6-8GB   | **Qwen3.5-4B** | 🚀 Szybko i dokładnie      |
| RTX 3070/4060Ti / RX 6700 | 8-12GB  | **Qwen3.5-9B** | 🌟 Idealne wrażenia       |
| RTX 3090/4080/4090    | 16GB+   | **Qwen3.5-9B** | 👑 Maksymalna jakość, ultra-szybkie odpowiedzi |

**💡 Pro Tip:** Zawsze zostaw około **2 GB VRAM wolne** dla systemu operacyjnego, inaczej Windows zacznie płakać i zamykać programy.

---

### 🚨 POMOCY! Mój komputer działa wolno! (Problemy z VRAM)

Jeśli gra reaguje wolniej niż Twoje zauroczenie na WhatsAppie, prawdopodobnie zabrakło Ci VRAM-u.

**Objawy tego, że przesadziłeś:**
1.  **Model przechodzi do RAM:** Komputer używa zwykłej pamięci zamiast graficznej. Wynik: EKSTREMALNA POWOLNOŚĆ.
2.  **Lekkie przepełnienie (1-2GB):** Odpowiedź zajmie 30-60 sekund.
3.  **Umiarkowane przepełnienie (3-5GB):** 2-5 minut. Możesz iść po kawę.
4.  **Poważne przepełnienie:** 10-30 minut. Grywalność niemożliwa.

#### 🛡️ Protokół awaryjny
Jeśli sytuacja się pogarsza, wykonaj następujące kroki w tej kolejności:

1.  **📉 Zmniejsz użycie VRAM:** Przejdź do Ustawień i zmniejsz je do **85%**. Uruchom ponownie i spróbuj.
2.  **🧹 Czyszczenie:** Zamknij przeglądarkę z 40 otwartymi zakładkami. Pochłaniają Twoją pamięć.
3.  **🛑 Limit 70%:** Nigdy nie schodź poniżej **70%** przydzielonego VRAM.
    *   *Dlaczego?* Ponieważ sztuczna inteligencja potrzebuje miejsca do "myślenia" (pamięć podręczna KV). Jeśli dasz jej mniej niż 70%, będzie pusta i pojawi się błąd.
4.  **🔙 Taktyczne wycofanie:** Jeśli nic nie działa, przejdź na mniejszy model (z 9B na 4B lub z 4B na 2B).

---

### ⚙️ ZAAWANSOWANE USTAWIENIA MODELU ("Maksymalne Frikostwo")

> **TRYB EKSPERTOWY:** Jeśli jesteś pro i chcesz uzyskać dostęp do zaawansowanych ustawień modeli (dodawanie własnych modeli GGUF pobranych z HuggingFace, modyfikowanie warstw itp.), musisz uruchomić grę poleceniem: `--advanced`.

Dla tych, którzy lubią klikać przyciski w **Ustawienia → Wbudowana lokalna sztuczna inteligencja**:

| Opcja           | Funkcja                                       | Rekomendacja                                           |
| :-------------- | :-------------------------------------------- | :----------------------------------------------------- |
| **Warstwy GPU** | Ile modelu jest ładowane do karty graficznej | **-1** (Oznacza "WSZYSTKO". Nie dotykaj, chyba że wiesz, co robisz) |
| **Maksymalny kontekst** | "Krótkoterminowa pamięć" SI             | **16384 - 32768** (Mniej niż to, a SI będzie cierpieć na amnezję) |
| **Temperatura** | Kreatywność vs. Szaleństwo                    | **0.7 - 0.8** (Więcej = bardziej szalone; Mniej = bardziej robotyczne) |
| **RAG historii** | Zapamiętywanie rzeczy z dawnych czasów      | **Tak** (Niezbędne dla długich kampanii)                 |
| **Buforowanie embeddingów** | Przyspiesza wyszukiwanie wspomnień      | **Tak** (Sprawia, że działa szybciej)                   |

---

### 🔧 ROZWIĄZYWANIE PROBLEMÓW (Troubleshooting)

| Awaria          | Naprawa                                                                                                   |
| :-------------- | :-------------------------------------------------------------------------------------------------------- |
| **SI wolna / Lag** | Sprawdź, czy `GPU Layers` to -1. Zamknij Chrome. Zmniejsz `Contexto Máximo`.                     |
| **Błąd pamięci (OOM)** | Zmniejsz `Contexto Máximo` lub wybierz mniejszy model (3B).                                           |
| **SI bredzi / Halucynuje** | Zmniejsz `Temperatura` do 0.6. Jeśli nadal jest szalona, uruchom ponownie aplikację. |

---

### 🌐 ALTERNATYWNI DOSTAWCY (Tylko dla ekspertów)

> **Uwaga:** Lokalna SI wbudowana w grę jest wystarczająca. To tylko dla zaawansowanych użytkowników lub odważnych.

*   **Zewnętrzne lokalne silniki:**
    *   **Ollama / LM Studio:** Jeśli masz już swoje własne szalone modele, możesz ich użyć.
*   **API w chmurze (płatne):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Wymaga internetu i wydawania pieniędzy.
    *   Skonfiguruj w: **Ustawienia → SI → Dodaj nowego dostawcę**.

---

### 🌍 JAK GRAĆ? (Multiwersum i Ty)

Po uruchomieniu gry masz dwie ścieżki:

1.  **🆕 Nowa przygoda**: Stwórz swoją legendę od zera. Gra poprosi Cię o **Nazwę, Zawód, Opis Fizyczny, Opis Psychologiczny i Tło/Pretekst** Twojej historii. Dodatkowo wybierzesz **Poziom Trudności** i **Ton Humorystyczny**, które będą kierować kampanią.
2.  **💾 Kontynuuj grę**: RolemIAster **zapisuje w czasie rzeczywistym**. Tutaj nie ma "ładuj przed śmiercią" ani odwrotu. Każda decyzja, każdy błąd i każda rana zostają wyryte w historii. To **WYZWANIE**: co zrobisz, zrobione. Żyj z konsekwencjami... lub umrzyj z nimi.

RolemIAster to nie jest pojedyncza gra; to **Multiwersum Persistentne**.
*   **Nieskończone światy:** Twórz własne wszechświaty (**Średniowieczna Fantastyka** lub **Cyberpunk**) z własnym Lore.
*   **Nieskończone postacie:** W każdym świecie możesz mieć tylu bohaterów, ilu chcesz.
*   **Wspólna linia czasowa:** Uważaj! To, co robi jedna postać, wpływa na świat innych. Sztuczna inteligencja jest świadoma Twoich innych bohaterów i rozpozna ich jako mieszkańców świata.
*   **SI z "zmysłami" (Super RAG):** System RAG (Retrieval-Augmented Generation) działa jako "konfident" sztucznej inteligencji, dostarczając jej wspomnień o świecie, o tym, kto jej towarzyszy, gdzie się znajduje i co właśnie się wydarzyło, aby historia była w 100% spójna.

### Interfejs (Twoja kabina dowodzenia)

*   **Panel lewy (TY):** Twoja karta postaci. Życie, mana, umiejętności i jak jesteś przystojny (Charyzma).
*   **Panel środkowy (HISTORIA):**
    *   **Góra:** Gdzie Mistrz Gry opowiada, co się dzieje.
    *   **Dół:** Twoje przyciski decyzyjne i pole tekstowe, aby napisać, co chcesz zrobić.
*   **Panel prawy (TWOJE RZECZY):** Ekwipunek i wyposażenie. Raj dla cyfrowego Diogenesa.

---

## 📜 ZASADY GRY (Tak, są zasady)

RolemIAster używa klasycznego i solidnego systemu d100 (kości stustronnej).

### 1. Twoje Atrybuty (Co Cię definiuje)
Sztuczna inteligencja generuje Twoje atrybuty na podstawie kontekstu, zawodu i opisu, które podałeś. Po wygenerowaniu masz **10 DODATKOWYCH PUNKTÓW** do rozdzielenia według własnego uznania.
*   **Stopniowe koszty:** Zwiększenie atrybutu do 14 kosztuje 1 punkt. Od 15 do 16 kosztuje 2 punkty. Od 17 kosztuje 3 punkty! Dobrze przemyśl, gdzie włożysz mięśnie.

*   💪 **Siła (SIŁ):** Twoja czysta moc fizyczna. Wpływa na obrażenia w walce wręcz i Twoją zdolność do przenoszenia ciężarów.
*   ❤️ **Kondycja (KON):** Twoja wytrzymałość. Aby wytrzymać ciosy, choroby i trucizny.
*   🐘 **Wielkość (WIEL):** Twoje gabaryty. Duży i ciężki, czy mały i zwinny.
*   🏃 **Zręczność (ZRZ):** Zwinność, celność i niepotykanie się o własne nogi.
*   🧠 **Inteligencja (INT):** Uczenie się, zapamiętywanie i rozwiązywanie zagadek.
*   🔮 **Moc (MOC):** Twoja dusza, szczęście, siła woli i rezerwa magiczna.
*   😎 **Charyzma (CHA):** Przywództwo, atrakcyjność i zdolność oszukiwania (lub uwodzenia) ludzi.

### 2. Szybkie Matematyki (Cechy pochodne)
Silnik automatycznie oblicza te wartości na podstawie Twoich atrybutów:

*   🩸 **Punkty Życia (PŻ):** `CON * 10`. Jeśli spadną do 0... cóż, wiesz. F.
*   ✨ **Punkty Many (PM):** `(POD * 10) + INT`. Paliwo dla Twoich magicznych sztuczek. Bez many nie ma sztuczek. (Mag bez many to tylko facet w szacie robiący cosplay).
*   ⚡ **Wytrzymałość (WYTR):** `((CON+FUE+DES)/3)*10 + POD`. Twoja energia do walki i poruszania się bez umierania w trakcie.
*   🧠 **Ludzki wymiar (LUDZ):** `(CON+POD) * 5`. (Tylko w Cyberpunk: Mierzy, ile z człowieka pozostało, zanim kable Cię opanują).
*   ⚔️ **Punkty Akcji (PA):** `(INT + DES) / 2`. Określają Twoją Inicjatywę. Kto pierwszy uderza, ten uderza dwa razy.

### 3. Twoje Umiejętności
Zaczynają z wartością bazową (np. Skradanie się = ZRZ + INT) i poprawiają się poprzez ich używanie. To procent (%).

### 4. Rozwiązywanie Akcji (Kość)
Kiedy próbujesz zrobić coś ryzykownego (wspinać się, kłamać, atakować...), sztuczna inteligencja poprosi Cię o rzut. Gra rzuca niewidzialnym **d100**. **(Pamiętaj: Kości Cię nienawidzą. To osobiste).**

*   **Twój cel:** Uzyskać liczbę **MNIEJSZĄ LUB RÓWNĄ** swojemu poziomowi umiejętności.
    *   *Przykład:* Masz 45% w Wspinaniu.
    *   Rzucasz 30: ✅ **Sukces**. Wchodzisz jak małpa.
    *   Rzucasz 80: ❌ **Porażka**. Zaliczasz glebę.
    *   **Krytyk:** Rzucenie mniej lub równo **1/5 Twojej umiejętności** (lub 01). Epickie! Robisz niezwykły parkour z koziołkiem.
    *   **Porażka krytyczna:** **99 lub 100**. Kości zdecydowały, że to nie jest Twój dzień. Spadają Ci spodnie w połowie drogi i upadasz na twarz.

---

## 💡 WSKAZÓWKI, ABY NIE UMRZEĆ (SZYBKO)

*   **✍️ Bądź opisowy:** Nie pisz tylko "atakuję". Napisz: *"Próbuję uniknąć jego topora, tocząc się po ziemi i wbijam mu sztylet w kostkę"*. Sztuczna inteligencja Cię nagrodzi.
*   **🧪 Eksperymentuj:** Nie ograniczaj się do przycisków. Pisz szalone rzeczy! Sztuczna inteligencja improwizuje.
*   **🎭 Role play:** Wciel się w postać. Czytaj opisy i działaj tak, jak zrobiłaby to Twoja postać, a nie jak Ty w piżamie.

---

## ⚔️ WALKA (Do broni!)

Gdy słowa zawodzą, nadchodzi czas na bicie. Walka jest **taktyczna** i działa w **Tickach** (czasie).

### 🕹️ Jak działa:
*   **Ticki:** Każda akcja kosztuje czas. Ciężkie bronie są wolne (zużywają dużo ticków). Sztylety są szybkie.
*   **Twoja prędkość:** Zależy od Twoich Punktów Akcji (PA).

### Podstawowe akcje:
*   **🗡️ Atak:** Uderz tym, co masz wyciągnięte.
*   **🛡️ Blok:** Postaw się w obronie. Zmniejsza obrażenia, ale zużywa Wytrzymałość.
*   **🏃 Ucieczka:** Dla tchórzy (lub mędrców, którzy chcą żyć).
*   **🏳️ Poddanie się:** Jeśli widzisz, że nie wygrasz, możesz błagać o litość.
*   **✨ Magia / Cyberware:** Ogień, lasery, hacki...

### 💬 Akcje w trybie swobodnego tekstu (NOWOŚĆ!)
Nie lubisz przycisków? Napisz, co chcesz zrobić, jakbyś rozmawiał z Mistrzem Gry z krwi i kości!
*   **Przykłady:** *"Rzuć kulę ognia w goblina"*, *"Wyciągnij mój runiczny miecz"*, *"Użyj mikstury na sobie"*.
*   **Reżyser sceny:** Walka teraz ożywa. SI generuje wydarzenia środowiskowe i reakcje, które wzbogacają narrację: spadające belki, cofający się wrogowie, spadające pochodnie! Pole bitwy nie jest już statyczne!
*   **Jeśli SI nie zrozumie:** Poprosi o przeformułowanie. Twoja tura NIE przepada!
*   **⚠️ Ograniczenie:** Przenoszenie przedmiotów między slotami (wyposażanie z plecaka, ładowanie amunicji) odbywa się za pomocą **Przeciągnij i upuść** w interfejsie, nie tekstem.

### ⚠️ ZŁOTA ZASADA PRZETRWANIA
**WYCIĄGNIJ BROŃ PRZED WALKIEM!**
Wyciągnięcie broni w środku walki kosztuje czas (Ticki). Jeśli zostaniesz złapany z mieczem w pochwie, dostaniesz po głowie, próbując go niezgrabnie wyciągnąć. ALBO GORZEJ!, JEŚLI MASZ BROŃ W PLECAKU ZAMIAST W SZCZYCIE WYPOSAŻENIA (Przepraszam na chwilę, muszę wyjąć wielki miecz z plecaka, mam go gdzieś tutaj... w jakimś miejscu...) 🤦‍♂️
👉 Kliknij **etykietę wyciągniętej broni** (panel prawy), aby ją wyciągnąć. Zostanie podświetlona na zielono.

Próba przenoszenia broni podczas walki zużywa czas (Ticki) i może skutkować niespodziewanym atakiem, a także bardzo prawdopodobne jest, że stracisz turę, spudłujesz ze zdenerwowania zbliżającego się do czoła topora lub upuścisz ją na ziemię. (Może nie był to dobry pomysł, aby stworzyć postać z ADHD)

---

## ✨ MAGIA I CYBERNETYKA

W zależności od tego, czy Twój świat jest "Średniowieczną Fantastyką", czy "Cyberpunkiem":

### 🧙‍♂️ Fantastyka: Zaklęcia
Jesteś czarownikiem? Możesz zakląć swój sprzęt.
1.  **Naucz się:** Potrzebujesz zaklęcia w swoim grimuarze.
2.  **Rzuć (Przeciągnij i upuść):** Przeciągnij zaklęcie z listy na przedmiot w swoim ekwipunku.
3.  **Koszt:** Utrzymanie aktywnego zaklęcia **zużywa Manę na turę**.
4.  **Uwaga:** Jeśli zabraknie Ci many w środku walki, ognisty miecz znów stanie się zardzewiałym kawałkiem żelaza.

### 🦾 Cyberpunk: Implanty
Chcesz oczy z zoomem lub małpie ramiona?
1.  Znajdź **Cyber-chirurga** (NPC usługowy).
2.  Zapłać kredyty (nic nie jest za darmo w przyszłości).
3.  **Koszt Ludzkości:** Każdy implant odbiera Ci kawałek duszy (**Ludzkość**).
    *   Jeśli wsadzisz ich za dużo, staniesz się **Cyberpsycholem** (zabordnicza tostarka) i stracisz kontrolę nad swoją postacią.

---

## 🛒 SKLEPY I USŁUGI (SIS)

Porozmawiaj z postaciami niezależnymi, aby handlować.
*   **SI Sugeruje, Ty Decydujesz:** Kiedy rozmawiasz z kupcem lub uzdrowicielem, SI zasugeruje ich usługi (naprawa, sprzedaż, leczenie), ale pojawi się przycisk **"Zobacz usługi"**, abyś mógł zdecydować, kiedy wejść w tryb transakcyjny.
*   **Targowanie się:** Twoja umiejętność **Handlu** (oparta na Charyzmie) decyduje o cenach. Jeśli jesteś brzydki lub nieuprzejmy, zostaniesz oszukany.
*   **Sprzedaż:** Kliknij **prawym przyciskiem myszy** na przedmiot w swoim ekwipunku, aby sprzedać go handlarzowi lub przeciągnij go na niego.

---

## 🎒 ZARZĄDZANIE EKWIPUNKIEM (Tetris)

*   **Waga:** Masz limit obciążenia (Siła + Wielkość). Jeśli nosisz za dużo złomu, będziesz wolny i będziesz miał kary (Diogenes nie jest Twoim przyjacielem).
*   **Panele:**
    *   **Wyposażenie:** Co nosisz.
    *   **Pas:** Szybki dostęp w walce (zużywa mniej czasu używanie mikstur stąd).
    *   **Plecak:** Dno torby.
*   **Płynne użycie:** Przeciągnij miksturę lub jedzenie bezpośrednio na **swoją twarz** (portret), aby natychmiast je zużyć. Możesz też użyć menu kontekstowego (kliknij prawym przyciskiem myszy -> Użyj).

---

## 🛠️ FINALNE USTAWIANIA

W menu **Ustawienia** możesz wszystko dostosować:
*   **🌍 Język:** SI przetłumaczy dla Ciebie całą grę i odpowiedzi na bieżąco. Tryb poligloty aktywowany.
*   **👁️ Wygląd:** Rozmiar czcionki i kolory, aby nie oślepnąć. Neonowe obramowania i wygładzone cienie dla pełnego zanurzenia.
*   **🧠 Ustawienia SI:** Zmień model, temperaturę itp. (Pamiętaj o tym, co widzieliśmy na początku instrukcji dotyczącej flagi `--advanced`, jeśli jesteś tym, który chce wszystko dotykać).

---

## 🎭 TRUDNOŚĆ I HUMOR (Spersonalizuj swoje cierpienie)

Zanim zaczniesz, pamiętaj, że SI nie tylko narracja, ale także **dostosowuje świat** do Twoich preferencji. Te parametry wybiera się przy tworzeniu świata i są one stałe dla tego świata:

*   **🎮 Trudność (Zarządzana przez SI):** To nie jest prosty mnożnik obrażeń. Gra mówi SI: "Hej, trudność jest taka, zachowaj się odpowiednio".
    *   **Łatwy:** Nigdy nie umrzesz (lub będzie to prawie niemożliwe), sytuacje są prostsze, ceny są niższe, a wrogowie są bardziej niezdarni. SI przeanalizuje każdą scenę, aby Twoja ścieżka była usłana różami.
    *   **Normalny:** Standardowa równowaga.
    *   **Wyzwanie:** SI będzie bezlitosna, ceny zaporowe, a każdy błąd może być ostatnim.

*   **🃏 Ton humorystyczny:** Określa, jak SI do Ciebie mówi i jakie wydarzenia mają miejsce. Chociaż każdy model ma swój sposób interpretacji koncepcji "humoru", SI spróbuje dostosować się do tego, co wybierzesz... lub nie:
    *   **Poważny:** Epicka, mroczna i formalna narracja.
    *   **Sarkastyczny:** SI będzie śmiać się z Twoich błędów, ciągle rzucać docinkami i używać ironicznego tonu.
    *   **Deliryczny:** Przygotuj się na absurd. Latające krowy, surrealistyczne sytuacje i całkowity chaos zarządzany przez najbardziej pokręconą logikę SI.

---

## 🚧 Uwaga: Wczesny dostęp

RolemIAster jest w **aktywnym rozwoju**, gotowany na wolnym ogniu.
*   Możesz napotkać błędy (lub "nieoczekiwane funkcje").
*   Dodaję nowe rzeczy co tydzień.
*   Twoje opinie są na wagę złota! Powiedz mi, co Ci się podoba i co bardzo Ci się podoba. (Jeśli coś Ci się nie podoba, powiedz mi też, ale z sympatią).

Teraz idź, rzuć inicjatywę i stwórz swoją legendę!

<!-- source_hash: 9af75cff -->