# 🐉 Witaj w RolemIAster!

Chwyć za kości (lub myszkę) i przygotuj się na przygody, gdzie jedynym ograniczeniem jest to, jak bardzo pokręcona jest twoja wyobraźnia! **RolemIAster** to nieskończona gra RPG napędzana sztuczną inteligencją, która pozwala ci być bohaterem (lub złoczyńcą) twoich własnych historii.

---

## ⚠️ NOTA PRAWNA (Ta nudna, ale konieczna część)

**PRZECZYTAJ MNIE, ALBO DOŚWIADCZYSZ GNIEWU KOŚCI:**

1.  **🤖 Zintegrowana lokalna SI:** RolemIAster posiada własny cyfrowy mózg. Działa **bez internetu** i bez konieczności dotykania dziwnych ustawień. Instalujesz i grasz!
2.  **☁️ Opcjonalna Chmura:** Jeśli wolisz wydawać kasę na zewnętrzne SI (OpenAI, Gemini...), twoja sprawa i twoja karta kredytowa. Koszty leżą po twojej stronie.
3.  **🎲 Generatywny Chaos:** SI wymyśla historię na bieżąco. Jeśli narrator oszaleje i powie, że z nieba spadają krowy, nie patrz na nas. Deweloper nie ponosi odpowiedzialności za szaleństwa generowane przez model.
4.  **🏗️ Early Access:** To jest plac budowy. Jeśli znajdziesz błąd (bug), to nie błąd, to niespodziewana "funkcja" (feature)! (Prosimy o feedback, bardzo nam pomaga).

---

## 🖥️ WYMAGANIA SYSTEMOWE I CYFROWE MÓZGI (SI)

RolemIAster działa na **Lokalnej Sztucznej Inteligencji**. Oznacza to, że twój PC odwali brudną robotę związaną z myśleniem. Nie potrzebujesz internetu, ale potrzebujesz karty graficznej, która nie pochodzi z epoki dinozaurów. (Uwaga: Jeśli w twoim pokoju jest zimno, ta gra działa jako darmowe ogrzewanie).

### ⚙️ Pojęcia dla niewtajemniczonych

**VRAM (Pamięć wideo)** to paliwo dla SI.
*   RolemIAster musi "pamiętać" od **12 000 do 16 000 słów (tokenów)**, aby nie stracić wątku historii.
*   Jeśli twojemu GPU braknie pamięci, gra będzie działać wolniej niż ślimak z astmą.

---

### 📊 KATALOG MODELI (Wybierz swoją truciznę)

Zarządzaj swoimi SI w **Konfiguracja → Zintegrowana lokalna SI → Zarządzaj Modelami**.

#### 🏆 Rodzina Qwen 2.5 (La crème de la crème)

| Model | Rozmiar | Min. VRAM | Poziom | Werdykt |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Stażysta.** Daje radę, ale nie proś go o pisanie Szekspira. Czasem się gubi. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **WYBRANIEC.** Zrównoważony, bystry i szybki. To domyślnie zalecany model. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Profesor.** Bogata narracja, głębia i bardzo naturalne dialogi. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Poziom Boski.** Potrzebujesz statku kosmicznego (RTX 3090/4090), żeby to ruszyć. |

---

### 🎮 SZYBKI PRZEWODNIK WYBORU

| Twoja Grafika | VRAM | Zalecany Model | Wynik |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Na styk, ale grywalne (Niski kontekst) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Działa dobrze |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Śmiga |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Idealne doświadczenie |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Luksus |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maksymalna jakość |

**💡 Pro Tip:** Zawsze zostaw około **2GB wolnej pamięci VRAM** dla systemu operacyjnego, inaczej Windows zacznie płakać i zamykać programy.

---

### 🚨 RATUNKU! MÓJ PC ZWALNIA! (Problemy z VRAM)

Jeśli gra odpowiada dłużej niż twój crush na WhatsAppie, prawdopodobnie skończył ci się VRAM.

**Objawy bycia zbyt pewnym siebie:**
1.  **Model zrzuca do RAMu:** PC używa zwykłej pamięci zamiast graficznej. Wynik: EKSTREMALNE SPOWOLNIENIE.
2.  **Lekkie przepełnienie (1-2GB):** Odpowiedź zajmie 30-60 sekund.
3.  **Umiarkowane przepełnienie (3-5GB):** 2-5 minut. Możesz iść po kawę.
4.  **Poważne przepełnienie:** 10-30 minut. Nie da się grać.

#### 🛡️ Protokół Awaryjny
Jeśli sprawy przybiorą zły obrót, wykonaj te kroki w podanej kolejności:

1.  **📉 Zmniejsz % VRAM:** Wejdź w Konfigurację i obniż do **85%**. Zrestartuj i spróbuj.
2.  **🧹 Sprzątanie:** Zamknij tę przeglądarkę z 40 otwartymi kartami. Zjadają twoją pamięć.
3.  **🛑 Limit 70%:** Nigdy nie schodź poniżej **70%** przydzielonego VRAM.
    *   *Dlaczego?* Ponieważ SI potrzebuje miejsca, żeby "myśleć" (cache KV). Jeśli dasz mniej niż 70%, zawiesi się i wyrzuci błąd.
4.  **🔙 Odwrót taktyczny:** Jeśli nic nie działa, zejdź do mniejszego modelu (przejdź z 7B na 3B).

---

### ⚙️ ZAAWANSOWANA KONFIGURACJA MODELU ("Maksymalny Geek")

> **TRYB EKSPERTA:** Jeśli jesteś pro i chcesz uzyskać dostęp do zaawansowanej konfiguracji modeli (dodawanie własnych modeli GGUF pobranych z HuggingFace, grzebanie w warstwach itp.), musisz uruchomić grę z komendą: `--advanced`.

Dla tych, którzy lubią klikać przyciski w **Konfiguracja → Zintegrowana lokalna SI**:

| Opcja | Funkcja | Zalecenie |
|--------|---------|---------------|
| **GPU Layers** | Ile modelu ładuje się do grafiki | **-1** (Oznacza "WSZYSTKO". Nie ruszaj, chyba że wiesz, co robisz) |
| **Kontekst Maksymalny** | "Pamięć krótkotrwała" SI | **16384 - 32768** (Mniej niż to i SI dostanie amnezji) |
| **Temperatura** | Kreatywność vs Szaleństwo | **0.7 - 0.8** (Wyższa = bardziej szalona; Niższa = bardziej robotyczna) |
| **RAG Historii** | Pamiętanie rzeczy sprzed dawna | **Tak** (Niezbędne dla długich kampanii) |
| **Buforowanie Embeddingów** | Przyspiesza szukanie wspomnień | **Tak** (Sprawia, że działa szybciej) |

---

### 🔧 ROZWIĄZYWANIE PROBLEMÓW (Troubleshooting)

| Wtopa | Naprawa |
|-------|---------|
| **SI Powolna / Lag** | Sprawdź, czy `GPU Layers` wynosi -1. Zamknij Chrome. Zmniejsz `Contexto Máximo`. |
| **Błąd Pamięci (OOM)** | Zmniejsz `Contexto Máximo` lub wybierz mniejszy model (3B). |
| **SI bredzi / Halucynuje** | Zmniejsz `Temperatura` do 0.6. Jeśli dalej szaleje, zrestartuj aplikację. |

---

### 🌐 ALTERNATYWNI DOSTAWCY (Tylko Eksperci)

> **Uwaga:** Lokalna SI, którą posiada gra, w zupełności wystarczy. To opcja tylko dla zaawansowanych lub odważnych użytkowników.

*   **Zewnętrzne Silniki Lokalne:**
    *   **Ollama / LM Studio:** Jeśli masz już swoje własne, geekowskie modele, możesz ich użyć.
*   **API w Chmurze (Płatne):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Wymaga internetu i sypnięcia groszem.
    *   Skonfiguruj w: **Konfiguracja → SI → Dodaj Nowego Dostawcę**.

---

### 🌍 JAK GRAĆ? (Multiwersum i Ty)

Otwierając grę, masz dwie ścieżki:

1.  **🆕 Nowa Przygoda**: Stwórz swoją legendę od zera. Gra poprosi cię o **Imię, Profesję, Opis Fizyczny, Opis Psychologiczny oraz Tło/Pretekst** twojej historii. Dodatkowo wybierzesz **Poziom Trudności** i **Ton Humoru**, które będą kierować kampanią.
2.  **💾 Kontynuuj Grę**: RolemIAster **zapisuje w czasie rzeczywistym**. Tutaj nie ma "wczytywania przed śmiercią" ani odwrotu. Każda decyzja, każda wtopa i każda rana są wypalone w historii. To jest **WYZWANIE**: co zrobisz, pozostanie zrobione. Żyj z konsekwencjami... albo zgiń przez nie.

RolemIAster nie jest pojedynczą rozgrywką; to **Trwałe Multiwersum**.
*   **Nieskończone Światy:** Twórz własne uniwersa (**Fantasy Średniowieczne** lub **Cyberpunk**) z własnym Lore.
*   **Nieskończeni Postaci:** W każdym świecie możesz mieć tylu bohaterów, ilu zechcesz.
*   **Wspólna Linia Czasowa:** Uwaga! To, co robi jedna postać, wpływa na świat innych. SI jest świadoma twoich pozostałych bohaterów i rozpozna ich jako mieszkańców świata.
*   **SI ze "Zmysłami" (Super RAG):** System RAG (Retrieval-Augmented Generation) działa jak "podpowiadacz" dla SI, dostarczając jej wspomnienia o świecie, o tym kto ci towarzyszy, gdzie jesteś i co się właśnie wydarzyło, aby historia była w 100% spójna.

### Interfejs (Twój kokpit)

*   **Lewy Panel (TY):** Karta Postaci. Życie, mana, umiejętności i to, jak przystojny jesteś (Charyzma).
*   **Środkowy Panel (HISTORIA):**
    *   **Góra:** Gdzie narrator opowiada, co się dzieje.
    *   **Dół:** Twoje przyciski decyzji i pole tekstowe do wpisywania tego, co chcesz zrobić.
*   **Prawy Panel (TWOJE RZECZY):** Ekwipunek i sprzęt. Raj dla cyfrowego Diogenesa.

---

## 📜 ZASADY GRY (Tak, są zasady)

RolemIAster używa klasycznego i solidnego systemu k100 (kość stuścienna).

### 1. Twoje Atrybuty (To, co cię definiuje)
SI generuje twoje atrybuty na podstawie kontekstu, profesji i opisu, które wprowadziłeś. Po wygenerowaniu masz **10 PUNKTÓW EKSTRA** do rozdania według własnego uznania.
*   **Koszt Stopniowany:** Podniesienie atrybutu do 14 kosztuje 1 punkt. Od 15 do 16 kosztuje 2 punkty. Powyżej 17 kosztuje 3 punkty! Dobrze przemyśl, gdzie pakujesz mięśnie.

*   💪 **Siła (FUE):** Twoja czysta moc fizyczna. Wpływa na obrażenia w walce wręcz i udźwig.
*   ❤️ **Kondycja (CON):** Twoja wytrzymałość. Aby znosić ciosy, choroby i trucizny.
*   🐘 **Rozmiar (TAM):** Twoja postura. Duży i ciężki, czy mały i zwinny.
*   🏃 **Zręczność (DES):** Zwinność, celność i niepotykanie się o własne nogi.
*   🧠 **Inteligencja (INT):** Uczenie się, pamięć i rozwiązywanie zagadek.
*   🔮 **Moc (POD):** Twoja dusza, szczęście, siła woli i rezerwa magiczna.
*   😎 **Charyzma (CAR):** Przywództwo, atrakcyjność i zdolność oszukiwania (lub uwodzenia) ludzi.

### 2. Szybka Matematyka (Cechy Pochodne)
Silnik oblicza te liczby automatycznie na podstawie twoich atrybutów:

*   🩸 **Życie (PV):** `CON * 10`. Jeśli spadnie do 0... cóż, wiesz. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Paliwo dla twoich magicznych sztuczek. Bez many nie ma trików. (Mag bez many to tylko gość w szlafroku robiący cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Twoja energia do walki i poruszania się bez wyzionięcia ducha.
*   🧠 **Człowieczeństwo (HUM):** `(CON+POD) * 5`. (Tylko w Cyberpunku: Mierzy, ile zostało w tobie człowieka, zanim kable doprowadzą cię do szaleństwa).
*   ⚔️ **Punkty Akcji (PA):** `(INT + DES) / 2`. Określa twoją Inicjatywę. Kto uderza pierwszy, uderza dwa razy.

### 3. Twoje Umiejętności
Zaczynają z wartością bazową (np.: Skradanie = DES + INT) i ulepszają się przez używanie. To wartość procentowa (%).

### 4. Rozstrzyganie Akcji (Kość)
Kiedy próbujesz zrobić coś ryzykownego (wspinaczka, kłamstwo, atak...), SI poprosi o rzut. Gra rzuca niewidzialną kością **k100**. **(Pamiętaj: Kości cię nienawidzą. To sprawa osobista).**

*   **Twój Cel:** Wyrzucić liczbę **MNIEJSZĄ LUB RÓWNĄ** twojemu poziomowi umiejętności.
    *   *Przykład:* Masz 45% we Wspinaczce.
    *   Wyrzucasz 30: ✅ **Sukces**. Wspinasz się jak małpa.
    *   Wyrzucasz 80: ❌ **Porażka**. Spadasz z hukiem.
    *   **Krytyk:** Wyrzucenie mniej lub równo **1/5 twojej umiejętności** (lub 01). Epicko! Robisz niezwykły parkour z saltem.
    *   **Pech (Fumble):** **99 lub 100**. Kości zdecydowały, że to nie twój dzień. Spadają ci spodnie w połowie drogi i padasz na twarz.

---

## 💡 PORADY JAK NIE UMRZEĆ (SZYBKO)

*   **✍️ Bądź Opisowy:** Nie pisz tylko "atakuję". Napisz: *"Próbuję uniknąć jego topora turlając się po ziemi i wbijam sztylet w jego kostkę"*. SI cię nagrodzi.
*   **🧪 Eksperymentuj:** Nie jesteś ograniczony do przycisków. Pisz szalone rzeczy! SI zaimprowizuje.
*   **🎭 Odgrywaj:** Wczuj się w rolę. Czytaj opisy i zachowuj się tak, jak zrobiłaby to twoja postać, a nie jak ty w piżamie.

---

## ⚔️ WALKA (Do broni!)

Gdy słowa zawodzą, nadchodzi czas na rękoczyny. Walka jest **taktyczna** i działa w oparciu o **Tiki** (czas).

### 🕹️ Jak to działa:
*   **Tiki:** Każda akcja kosztuje czas. Ciężkie bronie są wolne (zużywają dużo tików). Sztylety są szybkie.
*   **Twoja Prędkość:** Zależy od twoich Punktów Akcji (PA).

### Akcje Podstawowe:
*   **🗡️ Atakuj:** Uderz tym, co masz w ręce.
*   **🛡️ Blokuj:** Przechodzisz do defensywy. Zmniejsza obrażenia, ale zużywa Staminę.
*   **🏃 Uciekaj:** Dla tchórzy (lub mędrców, którzy chcą żyć).
*   **🏳️ Poddaj się:** Jeśli widzisz, że nie wygrasz, możesz błagać o litość.
*   **✨ Magia / Cyberware:** Ogień, lasery, hackowanie...

### 💬 Akcje Wolnym Tekstem (NOWOŚĆ!)
Nie lubisz przycisków? Pisz, co chcesz zrobić, jakbyś rozmawiał z Mistrzem Gry z krwi i kości!
*   **Przykłady:** *"Rzucam kulę ognia w goblina"*, *"Wyciągam mój runiczny miecz"*, *"Używam mikstury na sobie"*.
*   **Reżyser Sceny:** Walka teraz ożywa. SI generuje zdarzenia środowiskowe i reakcje, które wzbogacają narrację: spadające belki, cofający się wrogowie, upadające pochodnie. Pole bitwy nie jest już statyczne!
*   **Jeśli SI nie zrozumie:** Poprosi cię o sformułowanie inaczej. Twoja tura NIE przepada!
*   **⚠️ Ograniczenie:** Przenoszenie przedmiotów między slotami (zakładanie z plecaka, ładowanie amunicji) wykonuje się metodą **Drag & Drop** w interfejsie, a nie tekstem.

### ⚠️ ZŁOTA ZASADA PRZETRWANIA
**DOBĄDŹ BRONI PRZED WALKĄ!**
Wyciągnięcie broni w trakcie walki zużywa czas (Tiki). Jeśli złapią cię z mieczem w pochwie, spiorą cię na kwaśne jabłko, podczas gdy ty będziesz niezdarnie próbował go wyciągnąć. ALBO CO GORSZA!, JEŚLI MASZ BROŃ W PLECAKU ZAMIAST W SLOCIE EKWIPUNKU (Wybacz na chwilkę, muszę wyciągnąć dwuręczny miecz z plecaka, wiem, że gdzieś tu był... w którejś kieszeni...) 🤦‍♂️
👉 Kliknij **etykietę założonej broni** (prawy panel), aby ją dobyć. Podświetli się na zielono.

Próba przenoszenia broni w walce zużywa czas (Tiki) i może skutkować atakiem z zaskoczenia, a ponadto jest bardzo prawdopodobne, że stracisz turę, chybisz przez nerwy związane ze zbliżającym się do twojego czoła toporem lub upuścisz broń na ziemię. (Może stworzenie postaci z ADHD nie było dobrym pomysłem).

---

## ✨ MAGIA I CYBERNETYKA

W zależności od tego, czy twój świat to "Fantasy Średniowieczne" czy "Cyberpunk":

### 🧙‍♂️ Fantasy: Zaklinanie
Jesteś czarodziejem? Możesz zakląć swój ekwipunek.
1.  **Naucz się:** Potrzebujesz zaklęcia w swoim grymuarze.
2.  **Rzuć (Drag & Drop):** Przeciągnij zaklęcie ze swojej listy na przedmiot w ekwipunku.
3.  **Koszt:** Utrzymanie aktywnego zaklęcia **zużywa Manę co turę**.
4.  **Uwaga:** Jeśli wyschniesz z many w środku walki, ognisty miecz z powrotem stanie się kawałkiem zardzewiałego żelastwa.

### 🦾 Cyberpunk: Wszczepy
Chcesz oczy z zoomem albo ramiona goryla?
1.  Znajdź **Technochirurga** (NPC usługowy).
2.  Zapłać kredyty (nic nie ma za darmo w przyszłości).
3.  **Koszt Człowieczeństwa:** Każdy wszczep zabiera ci kawałek duszy (**Człowieczeństwo**).
    *   Jeśli zainstalujesz zbyt wiele, popadniesz w **Cyberpsychozę** (staniesz się morderczym tosterem na nogach) i stracisz kontrolę nad postacią.

---

## 🛒 SKLEPY I USŁUGI (SIS)

Rozmawiaj z NPC, aby handlować.
*   **SI Sugeruje, Ty Rządzisz:** Kiedy rozmawiasz z kupcem lub uzdrowicielem, SI zasugeruje ich usługi (naprawa, sprzedaż, leczenie), ale pojawi się przycisk **"Zobacz Usługi"**, abyś ty zdecydował, kiedy wejść w tryb transakcyjny.
*   **Targowanie:** Twoja umiejętność **Handlu** (oparta na Charyzmie) decyduje o cenach. Jeśli jesteś brzydki lub antypatyczny, zrobią cię w balona.
*   **Sprzedaż:** Kliknij **Prawym Przyciskiem** na przedmiot w ekwipunku, aby sprzedać go sprzedawcy, lub przeciągnij go na niego.

---

## 🎒 ZARZĄDZANIE EKWIPUNKIEM (Tetris)

*   **Waga:** Masz limit udźwigu (Siła + Rozmiar). Jeśli nosisz zbyt dużo śmieci, będziesz powolny i otrzymasz kary (Diogenes nie jest twoim przyjacielem).
*   **Panele:**
    *   **Ekwipunek:** To, co masz na sobie.
    *   **Pas:** Szybki dostęp w walce (użycie mikstur stąd zużywa mniej czasu).
    *   **Plecak:** Dno worka.
*   **Płynne Użycie:** Przeciągnij miksturę lub jedzenie bezpośrednio na **swoją twarz** (portret), aby natychmiast skonsumować. Możesz też użyć menu kontekstowego (prawy przycisk -> Użyj).

---

## 🛠️ USTAWIENIA KOŃCOWE

W menu **Konfiguracja** możesz zmienić wszystko:
*   **🌍 Język:** SI przetłumaczy ci całą grę i odpowiedzi w locie. Tryb poligloty włączony.
*   **👁️ Wygląd:** Rozmiar czcionki i kolory, żeby nie oślepnąć. Neonowe krawędzie i wygładzone cienie dla pełnej immersji.
*   **🧠 Ustawienia SI:** Zmień model, temperaturę itp. (Pamiętaj o tym, co widzieliśmy na początku instrukcji o fladze `--advanced`, jeśli należysz do tych, którzy chcą grzebać we wszystkim).

---

## 🎭 TRUDNOŚĆ I HUMOR (Spersonalizuj swoje cierpienie)

Zanim zaczniesz, pamiętaj, że SI nie tylko opowiada, ale **dostosowuje świat** do twoich preferencji. Te parametry wybiera się przy tworzeniu świata i są stałe dla danego świata:

*   **🎮 Trudność (Zarządzana przez SI):** To nie jest prosty mnożnik obrażeń. Gra mówi SI: "Hej, trudność jest taka, działaj odpowiednio".
    *   **Łatwy:** Nigdy nie zginiesz (lub będzie to prawie niemożliwe), sytuacje są prostsze, ceny niższe, a wrogowie bardziej niezdarni. SI uzasadni każdą scenę tak, by twoja droga była usłana różami.
    *   **Normalny:** Standardowa równowaga.
    *   **Wyzwanie:** SI będzie bezlitosna, ceny zaporowe, a każdy błąd może być tym ostatnim.

*   **🃏 Ton Humoru:** Określa, jak SI do ciebie mówi i jakie zdarzenia mają miejsce. Chociaż każdy model ma swój sposób interpretacji pojęcia "humor", SI spróbuje dostosować się do tego, co wybierzesz... albo i nie:
    *   **Poważny:** Epicka, mroczna i formalna narracja.
    *   **Sarkastyczny:** SI będzie śmiać się z twoich porażek, rzucać ciągłe docinki i używać ironicznego tonu.
    *   **Deliryczny (Szalony):** Przygotuj się na absurd. Latające krowy, surrealistyczne sytuacje i totalny chaos zarządzany przez najbardziej pokręconą logikę SI.

---

## 🚧 Uwaga: Wczesny Dostęp (Early Access)

RolemIAster jest w **aktywnym rozwoju**, pichcony na wolnym ogniu.
*   Możesz znaleźć błędy (lub "nieoczekiwane funkcje").
*   Dodaję nowe rzeczy co tydzień.
*   Twój feedback jest na wagę złota! Powiedz mi, co ci się podoba, a co ci się podoba bardzo. (Jeśli coś ci się nie podoba, też powiedz, ale z czułością).

A teraz idź, rzuć na inicjatywę i stwórz swoją legendę!

<!-- source_hash: f3494f05 -->