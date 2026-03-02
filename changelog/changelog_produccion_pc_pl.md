****************************************************************************************************
02/03/2026 12:54 - Kompleksowa przebudowa rdzenia SI - Beta_v060
****************************************************************************************************
- What's New (PL):
  - **🧠 Kompleksowa przebudowa rdzenia SI**
    - ⚡ **Szybsze odpowiedzi:** Przepisałem "mózg" gry, aby SI lepiej pamiętała to, co już przetworzyła. W praktyce oznacza to mniej czasu spędzonego na ekranie ładowania między turami. Silnik teraz ponownie wykorzystuje poprzednie obliczenia, zamiast zaczynać od zera przy każdym ruchu. (Tak, wcześniej tak robił. Nie, nie jestem z tego dumny.)
    - 🧹 **Czysta pamięć:** Historia gry jest teraz zapisywana bez technicznych "śmieci" od momentu jej utworzenia, a nie dopiero w momencie odczytu. Efekt: SI ma więcej miejsca na zapamiętanie Twojej historii i mniej "tokenów" marnowanych na wewnętrzne dane, których nigdy nie potrzebowała widzieć.
    - 🎯 **Reguły na swoim miejscu:** Dodatkowe reguły, z których SI korzysta, aby wzbogacić swoje odpowiedzi, zostały przeniesione, aby nie zakłócały systemu buforowania. Efekt jest dla Ciebie niewidoczny, ale silnik docenia go w każdej turze (nieco więcej prędkości zawsze się przyda).
  
  - ** Qwen3 odblokowany: pełne rozumowanie aktywowane**
    - 🚀 **Głębokie myślenie:** Modele z możliwością rozumowania (Qwen3, DeepSeek-R1...) mają teraz w pełni odblokowany potencjał. Zamiast działać "na ślepo", SI rozumuje wewnętrznie przed każdą odpowiedzią: planuje karty postaci, ocenia spójność narracyjną z Twoją historią i unika błędów, takich jak zduplikowane ekwipunki czy niekompletne atrybuty. Rezultat: znacznie inteligentniejsza i spójniejsza SI.
    - 🧹 **Dla Ciebie przejrzyste:** Całe to rozumowanie odbywa się "za kulisami". Silnik automatycznie czyści "wewnętrzny monolog" SI przed pokazaniem Ci odpowiedzi. Ty widzisz tylko dopracowany efekt końcowy.
  
  - **⚡ Niezawodniejsze rozpoczynanie gry**
    - 🛡️ **Koniec z zawieszaniem się w pierwszej turze:** Wyeliminowaliśmy przyczynę wiecznego czekania na początku nowej gry. Wcześniej, jeśli SI wygenerowała postać kupca, nie znając zasad handlu (ponieważ nie miała ich w pierwszej turze), silnik próbował to naprawić 3 razy, zanim się poddał, powodując ponad minutę niepotrzebnego czekania. Teraz rozwiązuje to natychmiast.
    - 📖 **Lore odporne na kreatywną SI:** Jeśli SI się "rozpędzi" i wygeneruje tło świata w formacie technicznym zamiast narracyjnego tekstu, silnik to wykryje i automatycznie wyodrębni czystą historię. Twoje lore zawsze dociera w odpowiedniej formie.
    - 🧹 **Nieskazitelny interfejs:** Nauczyłem SI, aby nie "mówiła kodem". Wcześniej przyciski decyzyjne lub komentarze Mistrza Gry czasami wyświetlały dziwne zmienne wewnętrzne (jak *Ucieknij (move to loc_cripta)*). Teraz wszystko jest czyste, a model został zmuszony do komunikowania się z Tobą w wybranym przez Ciebie tonie humoru (respektowanie tego parametru zależy od nastroju SI).
  
  - **🌍 Poprawki językowe**
    - 🗣️ **Miejsca w Twoim języku:** Lokalizacje generowane przez SI teraz respektują język ustawiony w grze. Jeśli grasz po angielsku, nie zobaczysz już "Dzielnica Zachodniego Wybrzeża", ale angielską nazwę. (Ups.)
    - 🔘 **Zlokalizowane przyciski:** Przycisk awaryjny "Kontynuuj" teraz mówi Twoim językiem, zamiast pojawiać się zawsze po hiszpańsku.

****************************************************************************************************
27/02/2026 16:46 - Synchronizacja ładowania w walce i przepływ turowy - Beta_v059
****************************************************************************************************
- What's New (PL):
  - **Walka i tempo gry**
    - ⚔️ **Płynniejsze ataki:** koniec z pustymi wciśnięciami klawiszy, gdy akcja była w kolejce, a ładowanie gry zwraca rzeczywiste decyzje, a nie widmowe przyciski.
    - 🧭 **Zsynchronizowana scena:** to, co widzisz na ekranie, odzwierciedla aktualny stan walki, a wrogowie pojawiają się tylko w twojej lokalizacji.
    - 🚫 **Mniej wewnętrznych formalności:** oczyściliśmy zbędne kontrole, aby gra postępowała bez biurokratycznych zacięć.
  
  - **Silnik wizualny i zaawansowany panel**
    - 🧹 **Czysty selektor:** ukrywamy foldery techniczne i normalizujemy filtrowanie, aby wybierać modele bez szumu.
    - ️ **Stabilne tła:** jeśli obraz jest w trakcie ładowania, nie przeszkadza kolejnym; ponadto ładowanie w walce zapobiega niespodziewanym regeneracjom.
    - 🎛️ **Wzmocniony panel obrazu:** strategia renderowania, siła zmiany i minimalne kroki są teraz kontrolowane z zaawansowanego interfejsu z pomocą kontekstową.
  
  - **Tworzenie postaci i portrety**
    - 🧍 **Płeć widoczna:** wybierasz mężczyznę/kobietę w podstawowym formularzu, a cały przepływ (portrety, dane wewnętrzne) szanuje ten wybór.
    - 👶➡️🧓 **Zrozumiały wiek:** używamy przedziałów narracyjnych, aby SI lepiej rysowała etap życia.
    - 🧼 **Wyczyczone prompty:** usuwamy szum techniczny przed wysłaniem żądań obrazu, co przekłada się na stabilność portretów.
    -  **Niezawodne karty postaci:** SI nie może „zapomnieć” o obowiązkowych atrybutach ani zawyżyć początkowego ekwipunku.
  
  - **Narracja, zasady i RAG**
    - 🚀 **Bardziej bezpośrednie przybycie postaci:** scena początkowa wykorzystuje ścisłe kontrakty JSON i unika dziwnych mieszanek kontekstu.
    -  **Skoncentrowane RAG:** indeksujemy tylko dozwolone korzenie, a wysłana do promptu karta postaci zawiera podsumowania efektów, aby oszczędzić tokeny.
  
  - **Konfiguracja SI i PSR**
    - 🎛️ **Nowa kontrola PSR Faza 1:** zdecyduj, czy chcesz tryb chirurgiczny zawsze podczas eksploracji, czy tylko wtedy, gdy prompt jest wymagający.
    - 📏 **Regulowany próg (domyślnie 95%):** dostosuj margines przed uruchomieniem automatycznego PSR w zależności od twojego sprzętu.
    - 🧠 **Lżejsze prompty i bez pętli:** podsumowujemy stany, a SI ma narzędzia, aby nie przeciążać się, gdy historia staje się skomplikowana.

****************************************************************************************************
24/02/2026 12:32 - Generowanie obrazów przez AI, ulepszenia narracji i kontrola - Beta_v058
****************************************************************************************************
- What's New (PL):
  **🧠 Ewolucja Mózgu: Cześć, Qwen 3**
  Zmigrowałem silnik gry, aby wycisnąć maksimum z nowej generacji modeli Qwen3. Stare modele z serii 2.5 towarzyszyły początkom podróży RolemIAster, ale nadszedł czas, by pożegnać dawne chwały. Ten skok ilościowy w generowaniu historii przekłada się na bardziej immersyjną prozę, dużo surowsze zasady i spójniejsze postacie. Przygotujcie swoje karty graficzne, bo Mistrz Gry właśnie awansował na wyższy poziom.

  **Nowość: Druga faza Generowania Obrazów przez AI**
  - 🎨 **Twój świat w obrazach:** Zintegrowałem początkowy system generowania obrazów przez Sztuczną Inteligencję. Podczas gry system stara się generować portrety i krajobrazy, które towarzyszą atmosferze Twojej rozgrywki.
  - 🖼️ **Dynamiczne tła:** Obrazy są generowane w tle, nie przerywając rozgrywki. Zobaczysz, jak pojawiają się stopniowo w tle, na kartach postaci oraz w Kodeksie.
  - 🧹 **Zarządzanie obrazami:** Nowy panel do przeglądania i usuwania wygenerowanych obrazów, które Ci się nie podobają.
  
  **Ulepszenia w generowaniu postaci:**
  - ⚙️ **Solidniejsze losowe tworzenie:** Ujednoliciłem i ulepszyłem silnik reguł, których AI używa do tworzenia postaci od zera, gwarantując bardziej logiczne ekwipunki (od 5 do 10 spójnych przedmiotów) i bardziej zrównoważone karty postaci.
  - 🧠 **Rozdzielony mózg:** AI lepiej rozumie teraz, kiedy powinna „wymyślić” postać od zera, a kiedy powinna ograniczyć się do wyciągania danych z biografii, którą sam napisałeś.
  - ⚡ **Prędkość dopasowana do Ciebie:** Nowa sekcja w Ustawieniach Wizualnych. Wybierz między „Szybką” (1 krok), „Średnią” (2 kroki) lub „Wysoką” (4 kroki), aby dostosować czas generowania do mocy swojego sprzętu.
  - 🛠️ **Optymalizacja techniczna:** Model AI do obrazów jest ładowany do pamięci **RAM (Memory)** i przetwarzany przez **CPU**, nie zajmując pamięci wideo (VRAM). Gwarantuje to, że nie zakłóca on wydajności głównej AI gry (LLM). Wymaga około 5 GB dodatkowej pamięci RAM, mieszcząc się w oficjalnych minimalnych wymaganiach Steam.
  - 📤 **Udostępniaj swoje przygody:** Wszystkie wygenerowane obrazy są zapisywane automatycznie. Znajdziesz je w folderze: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Wybór modeli (zaawansowane):** Jeśli uruchomisz grę z parametrem `--advanced`, możesz teraz wybrać model AI dla obrazów w panelu Wyglądu. Pozwala to entuzjastom na testowanie różnych wersji Stable Diffusion zoptymalizowanych pod OpenVINO (pliki .xml/.bin).
  
  **Narracja i mózg AI:**
  - 🧠 **Koniec pętli:** W AI wdrożono nową „Doktrynę Pamięci”. Teraz lepiej odróżnia ona „wspomnienia” (to, co już się wydarzyło) od „teraźniejszości” (tego, co się dzieje). Pomaga to ograniczyć przypadki, w których AI powtarzała się lub zacinała.
  - 📜 **Archiwa historyczne:** System prezentuje Twoje wspomnienia AI jako „Zamknięte Archiwum Historyczne”, ułatwiając jej wykorzystanie tych informacji jako punktu odniesienia do rozwijania historii.
  - ⚡ **Zoptymalizowane instrukcje:** Poprawiono sposób, w jaki gra prosi o narrację w Twoim języku, zwalniając moce modelu, aby mógł skoncentrować się na kreatywności.
  - 👁️ **Skupienie narracyjne:** Przepisano percepcję AI. Teraz lepiej rozumie, które elementy stanowią „statyczne tło” i nie powinna ich niepotrzebnie powtarzać w każdym akapicie.
  - 🔀 **Wyraźniejsze decyzje:** AI oferuje teraz lepiej zdefiniowane ścieżki wyjścia. Jej sugestie (przyciski) dzielą się na badanie otoczenia (Pogłębienie) lub zmianę kursu (Rozwidlenie).
  - 🫵 **Bezpośredni zwrot:** Dostosowano podstawową instrukcję, aby zapewnić, że AI zwraca się do Ciebie per „Ty”, co poprawia osobistą imersję.
  
  **Tworzenie postaci:**
  - 🖼️ **Portrety postaci:** Podczas generowania postaci przez AI system stara się stworzyć portret na podstawie jej wieku, profesji i opisu. Pamiętaj, że jest to wersja początkowa i wierność odwzorowania (szczególnie w kwestii wieku) może się różnić w zależności od użytego modelu. (Nadal prowadzę testy, ale początki są obiecujące).
  - 🎲 **Niezawodne generowanie losowe:** Naprawiono błąd, w którym przycisk „Generuj z AI” mógł zawieść przy pierwszej próbie, pozostawiając puste pola. Teraz system inteligentnej korekty dba o to, by odpowiedź była zawsze poprawna.
  
  **Zarządzanie wygenerowanymi obrazami:**
  - 🖼️ **Galeria obrazów AI:** Nowy panel w menu Plik, który wyświetla wszystkie obrazy wygenerowane przez AI podczas Twoich sesji (portrety, tła). Możesz filtrować według typu obrazu lub świata.
  - 🗑️ **Selektywne usuwanie:** Wybierz jeden lub więcej obrazów i usuń je, jeśli Ci nie odpowiadają (może ten, w którym AI uznała za dobry pomysł zaparkowanie autobusu w zamkowej stajni). System czyści zarówno plik, jak i jego wewnętrzny wpis.
  - 📂 **Bezpośredni dostęp:** Kliknij dwukrotnie miniaturę, aby otworzyć folder, w którym znajduje się plik. Jeśli masz już otwarty folder, zostanie użyte to samo okno.
  - 💾 **Zapamiętywanie rozmiaru:** Rozmiar okna galerii jest automatycznie zapisywany między sesjami.
  
  **Wydajność przy niskich ustawieniach (Ważne dla kart z małą ilością VRAM):**
  - 🧠 **PSR - Hybrydowe Zarządzanie:** Nowy system dzielący pracę AI na dwie fazy: Planowanie (Szef kuchni) i Wykonanie (Kucharze). Pozwala to lokalnym modelom z 8 GB VRAM działać, unikając awarii z powodu nadmiaru kontekstu (+12 tys. tokenów), kosztem większych opóźnień; interakcja z AI zmienia się z pojedynczego zapytania w serię zapytań (im mniej VRAM, tym więcej zapytań i dłuższy czas odpowiedzi).
  - ⚡ **Inteligentne wykonywanie:** System automatycznie decyduje, czy przetwarzać wszystko naraz (monolitycznie), czy dzielić na części (iteracyjnie) w zależności od dostępnej pamięci VRAM. Karty z mniejszą ilością VRAM aktywują tryb częściowy tylko wtedy, gdy jest to konieczne.
  - 📊 **Dynamiczna optymalizacja:** PSR redukuje obciążenie tokenami podczas generowania, umożliwiając użytkownikom kart 4 GB ukończenie tworzenia postaci i generowania historii, co wcześniej powodowało blokady.
  - 🔄 **Zachowana spójność:** Mimo podziału pracy system wstrzykuje „główną intencję”, aby AI nie straciła wątku tego, co robiła.
  
  **Głosy AI (stopniowe ulepszenia):**
  Generowanie głosów w czasie rzeczywistym we wszystkich językach (niektóre języki są bardziej ograniczone niż inne, najbardziej zróżnicowany pod względem typów głosów jest angielski).
  - 🗣️ **Okrzyki bojowe z głosem:** Rozpoczynając walkę z wrogimi przeciwnikami, odtwarzana jest teraz kontekstowa kwestia głosowa.
  - 🎭 **Dynamiczne frazy kontekstowe:** Silnik może generować krótkie kwestie głosowe dla konkretnych zdarzeń (usługi/walka) w zależności od języka, klimatu i profilu postaci.
  - 🧠 **Wewnętrzne szablony głosów:** Oddzielono techniczne szablony głosów od systemu narracyjnego, aby uniknąć zakłóceń w historii.
  - 🔊 **Większa klarowność odsłuchu:** Poprawiono zrozumiałość i prozodię syntezy, aby priorytetowo traktować wyraźną dykcję.
  
  **⚠️ Uwaga dotycząca kompatybilności (Poprzednie zapisy):**
  - 🔄 Ze względu na liczbę wewnętrznych zmian w silniku reguł i systemie klimatu, **poprzednio zapisane gry i światy (prawdopodobnie) nadal będą grywalne**, ale istnieje duże prawdopodobieństwo, że wystąpią błędy lub nieoczekiwane zachowania. **Zaleca się stworzenie nowego, czystego świata**, aby w pełni i poprawnie cieszyć się wszystkimi ulepszeniami.

****************************************************************************************************
17/02/2026 07:20 - Generowanie Obrazów AI, Ulepszenia Narracji i Kontrola - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (PL):
  **⚠️ GAŁĄŹ EKSPERYMENTALNA (STEAM BETA)**
  Ta wersja jest obecnie dostępna tylko w **Gałęzi Eksperymentalnej** na Steam. Aby ją aktywować:
  1. Kliknij prawym przyciskiem myszy na **RolemIAster** w swojej Bibliotece Steam.
  2. Wybierz **Właściwości...**
  3. Przejdź do zakładki **Beta**.
  4. W sekcji "Udział w wersji beta" wybierz **experimental** z listy rozwijanej.
  
  **Nowość: Pierwsza faza generowania obrazów AI**
  - 🎨 **Twój świat w obrazach:** Zintegrowałem wstępny system generowania obrazów przez Sztuczną Inteligencję. Podczas gry system próbuje generować portrety i krajobrazy pasujące do klimatu twojej rozgrywki.
  - 🖼️ **Dynamiczne tła:** Obrazy są generowane w tle, nie zatrzymując gry. Zobaczysz, jak pojawiają się stopniowo w tle, na kartach postaci oraz w Kodeksie.
  - ⚡ **Szybkość dopasowana do Ciebie:** Nowa sekcja w Ustawieniach Wizualnych. Wybierz między "Szybka" (1 krok), "Średnia" (2 kroki) lub "Wysoka" (4 kroki), aby dostosować czas generowania do mocy twojego sprzętu.
  - 🛠️ **Optymalizacja techniczna:** Model AI do obrazów ładuje się do pamięci **RAM (Memory)** i jest przetwarzany przez **procesor (CPU)**, nie zajmując pamięci wideo (VRAM). Gwarantuje to, że nie zakłóci wydajności głównej SI gry (LLM). Wymaga około 5GB dodatkowej pamięci RAM, mieszcząc się w oficjalnych minimalnych wymaganiach Steam.
  - 📤 **Dziel się przygodami:** Wszystkie wygenerowane obrazy są zapisywane automatycznie. Znajdziesz je w folderze: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narracja i Mózg SI:**
  - 🧠 **Koniec pętli:** Zaimplementowano nową "Doktrynę Pamięci" w SI. Teraz lepiej odróżnia "wspomnienia" (to, co już się wydarzyło) od "teraźniejszości" (tego, co się dzieje). Pomaga to ograniczyć przypadki, w których SI powtarzała się lub zacinała.
  - 📜 **Archiwa historyczne:** System przedstawia twoje wspomnienia SI jako "Zamknięte Archiwum Historyczne", ułatwiając jej wykorzystanie tych informacji jako odniesienia do rozwijania historii.
  - ⚡ **Zoptymalizowane instrukcje:** Ulepszono sposób, w jaki gra żąda narracji w twoim języku, zwalniając zasoby modelu, aby mógł skupić się na kreatywności.
  - 👁️ **Fokus narracyjny:** Przepisano percepcję SI. Teraz lepiej rozumie, które elementy są "statycznym tłem" i nie powinna ich niepotrzebnie powtarzać w każdym akapicie.
  - 🔀 **Jaśniejsze decyzje:** SI oferuje teraz bardziej zdefiniowane ścieżki wyjścia. Jej sugestie (przyciski) dzielą się na badanie otoczenia (Pogłębianie) lub zmianę kursu (Rozwidlenie).
  - 🫵 **Bezpośrednie zwracanie się:** Dostosowano podstawową instrukcję, aby zapewnić, że SI zwraca się do ciebie per "Ty", poprawiając osobistą immersję.
  
  **Tworzenie Postaci:**
  - 🖼️ **Portrety postaci:** Podczas generowania postaci za pomocą SI system próbuje stworzyć portret na podstawie wieku, zawodu i opisu. Pamiętaj, że jest to wczesna wersja i wierność (szczególnie wieku) może się różnić w zależności od użytego modelu. (nadal przeprowadzam testy, ale początek jest obiecujący)
  - 🎲 **Niezawodne generowanie losowe:** Naprawiono błąd, przez który przycisk "Generuj za pomocą SI" mógł nie zadziałać za pierwszym razem, pozostawiając puste pola. Teraz system inteligentnej korekty upewnia się, że odpowiedź jest zawsze poprawna.

****************************************************************************************************
17/02/2026 07:04 - Generowanie Obrazów AI, Ulepszenia Narracji i Kontrola - Beta_v058
****************************************************************************************************
- What's New (PL):
  **⚠️ GAŁĄŹ EKSPERYMENTALNA (STEAM BETA)**
  Ta wersja jest obecnie dostępna tylko w **Gałęzi Eksperymentalnej** na Steam. Aby ją aktywować:
  1. Kliknij prawym przyciskiem myszy na **RolemIAster** w swojej Bibliotece Steam.
  2. Wybierz **Właściwości...**
  3. Przejdź do zakładki **Beta**.
  4. W sekcji "Udział w wersji beta" wybierz **experimental** z listy rozwijanej.
  
  **Nowość: Pierwsza faza generowania obrazów AI**
  - 🎨 **Twój świat w obrazach:** Zintegrowałem wstępny system generowania obrazów przez Sztuczną Inteligencję. Podczas gry system próbuje generować portrety i krajobrazy pasujące do klimatu twojej rozgrywki.
  - 🖼️ **Dynamiczne tła:** Obrazy są generowane w tle, nie zatrzymując gry. Zobaczysz, jak pojawiają się stopniowo w tle, na kartach postaci oraz w Kodeksie.
  - ⚡ **Szybkość dopasowana do Ciebie:** Nowa sekcja w Ustawieniach Wizualnych. Wybierz między "Szybka" (1 krok), "Średnia" (2 kroki) lub "Wysoka" (4 kroki), aby dostosować czas generowania do mocy twojego sprzętu.
  - 🛠️ **Optymalizacja techniczna:** Model AI do obrazów ładuje się do pamięci **RAM (Memory)** i jest przetwarzany przez **procesor (CPU)**, nie zajmując pamięci wideo (VRAM). Gwarantuje to, że nie zakłóci wydajności głównej SI gry (LLM). Wymaga około 5GB dodatkowej pamięci RAM, mieszcząc się w oficjalnych minimalnych wymaganiach Steam.
  - 📤 **Dziel się przygodami:** Wszystkie wygenerowane obrazy są zapisywane automatycznie. Znajdziesz je w folderze: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narracja i Mózg SI:**
  - 🧠 **Koniec pętli:** Zaimplementowano nową "Doktrynę Pamięci" w SI. Teraz lepiej odróżnia "wspomnienia" (to, co już się wydarzyło) od "teraźniejszości" (tego, co się dzieje). Pomaga to ograniczyć przypadki, w których SI powtarzała się lub zacinała.
  - 📜 **Archiwa historyczne:** System przedstawia twoje wspomnienia SI jako "Zamknięte Archiwum Historyczne", ułatwiając jej wykorzystanie tych informacji jako odniesienia do rozwijania historii.
  - ⚡ **Zoptymalizowane instrukcje:** Ulepszono sposób, w jaki gra żąda narracji w twoim języku, zwalniając zasoby modelu, aby mógł skupić się na kreatywności.
  - 👁️ **Fokus narracyjny:** Przepisano percepcję SI. Teraz lepiej rozumie, które elementy są "statycznym tłem" i nie powinna ich niepotrzebnie powtarzać w każdym akapicie.
  - 🔀 **Jaśniejsze decyzje:** SI oferuje teraz bardziej zdefiniowane ścieżki wyjścia. Jej sugestie (przyciski) dzielą się na badanie otoczenia (Pogłębianie) lub zmianę kursu (Rozwidlenie).
  - 🫵 **Bezpośrednie zwracanie się:** Dostosowano podstawową instrukcję, aby zapewnić, że SI zwraca się do ciebie per "Ty", poprawiając osobistą immersję.
  
  **Tworzenie Postaci:**
  - 🖼️ **Portrety postaci:** Podczas generowania postaci za pomocą SI system próbuje stworzyć portret na podstawie wieku, zawodu i opisu. Pamiętaj, że jest to wczesna wersja i wierność (szczególnie wieku) może się różnić w zależności od użytego modelu. (nadal przeprowadzam testy, ale początek jest obiecujący)
  - 🎲 **Niezawodne generowanie losowe:** Naprawiono błąd, przez który przycisk "Generuj za pomocą SI" mógł nie zadziałać za pierwszym razem, pozostawiając puste pola. Teraz system inteligentnej korekty upewnia się, że odpowiedź jest zawsze poprawna.

****************************************************************************************************
13/02/2026 21:47 - Optymalizacja konfiguracji AI i ulepszenia i18n - Beta_v055
****************************************************************************************************
- What's New (PL):
  - ⚙️ **Kontrola priorytetu lokalnego:** Teraz możesz ręcznie dostosować priorytet swoich kart graficznych, nawet jeśli system jest w trybie automatycznym.
  - 🧠 **Informacje o rotacji AI:** Dodałem panele informacyjne w ustawieniach zewnętrznych dostawców, aby wyjaśnić, jak działa automatyczna rotacja w przypadku błędu lub przekroczenia limitu.
  - 🌍 **Rozszerzone wsparcie GPU:** Komunikat informacyjny i18n odzwierciedla teraz poprawnie wsparcie dla NVIDIA CUDA i Vulkan (AMD/Intel). Zaktualizowane tłumaczenia we wszystkich językach!
  - ⚙️ **Ulepszona łączność:** Naprawiono konektory dla Ollama i innych serwerów kompatybilnych z OpenAI.
  - 🧠 **Wielojęzyczna i stabilna AI:** Wykrywanie obiektów zdobytych w historii działa teraz w 10 językach. Ponadto zabezpieczyłem system, abyś nigdy nie został bez historii początkowej, nawet jeśli AI napotka problem techniczny.
  - 🔄 **Inteligentna rotacja:** Naprawiłem system rotacji, aby nie rezygnował z lokalnego AI przy pierwszej próbie. Teraz system da mu szansę na poprawę przed szukaniem pomocy zewnętrznej.
  - 🧹 **Sprzątanie fundamentów:** Usunąłem stare i mylące zasady, aby "mózg" AI był bystrzejszy i bardziej precyzyjny w obsłudze twoich przedmiotów.

