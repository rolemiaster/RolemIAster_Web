****************************************************************************************************
14/02/2026 05:06 - Wzmocnienie integralności, Świadomość postaci i Optymalizacja - Beta_v056
****************************************************************************************************
- What's New (PL):
  - 🧠 **Priorytet SI według uznania:** Teraz możesz przeciągać i upuszczać złącza SI, aby zdecydować, którego użyć w pierwszej kolejności. Jeśli jedno zawiedzie, gra automatycznie spróbuje użyć następnego z listy priorytetów.
  - ⚙️ **Kontrola wstępnego ładowania:** Dodano opcję w launcherze, pozwalającą zdecydować, czy chcesz wstępnie załadować lokalny model SI, czy ładować go tylko wtedy, gdy jest potrzebny (oszczędność zasobów przy uruchamianiu).
  - 🛡️ **Bezpieczne i czyste usuwanie:** Podczas usuwania świata system dba teraz o wyczyszczenie absolutnie wszystkich powiązanych danych (postaci i historii), utrzymując twoją bazę danych w nienagannym stanie.
  - 🚀 **Optymalizacja pamięci:** "Mózg" SI jest teraz ładowany tylko raz i współdzielony przez wszystkie funkcje, co pozwala zaoszczędzić dużo pamięci graficznej (VRAM).
  - 🎨 **Inteligentny interfejs:** Panel wyboru świata dopasowuje się teraz idealnie do ekranu i tekstu, bez przyciętych przycisków czy źle wykorzystanej przestrzeni.
  - 🔄 **Ulepszona inteligentna rotacja:** Naprawiono system rotacji, aby nie rezygnował z lokalnej SI przy pierwszej próbie; teraz daje jej szansę na poprawę przed szukaniem pomocy zewnętrznej.
  - 🌍 **Poliglota i solidna SI:** Wykrywanie obiektów i narracja są teraz bardziej precyzyjne w 10 językach, ze specjalnym zabezpieczeniem, dzięki któremu nigdy nie zabraknie ci historii.
  - 🛠️ **Gwarantowana trwałość SI:** Naprawiono błąd, który powodował, że Gemini "zapominał" lub zmieniał się w Ollama. Twoje priorytety korzystania z SI są teraz zapisywane w bezpieczny i precyzyjny sposób.
  - ⚡ **Przywrócono Gemini:** Naprawiono dostęp do modelu Gemini, przywracając poprawne klucze i adres URL.
  - 🎨 **Poprawiony interfejs tematyczny:** Przyciski decyzyjne teraz natychmiast przywracają kolor twojego świata (np. złoty dla fantasy) podczas wczytywania gry.
  - 👥 **Świadomość między postaciami:** SI jest teraz świadoma wszystkich twoich postaci! Jeśli masz kilku bohaterów w jednym świecie, SI rozpozna ich jako mieszkańców i będzie pamiętać, co każdy z nich zrobił indywidualnie.
  - 🧠 **Pamięć z atrybucją:** System wspomnień rozróżnia teraz, kto wykonał daną czynność, zapobiegając myleniu przez SI twoich przeszłych czynów z czynami innych postaci.

****************************************************************************************************
13/02/2026 07:56 - System Semantycznej Interpretacji Walki - Beta_v054
****************************************************************************************************
- What's New (PL):
  🧪 JUŻ DOSTĘPNE:
  
  ⚠️ **WAŻNA UWAGA:** GRA MOŻE ZMIGROWAĆ STARĄ BAZĘ DANYCH DO NOWEJ STRUKTURY POPRZEZ OPCJE LAUNCHERA. NIE ZALEÇAM TEGO, NAWET JEŚLI STARY ZAPIS ZADZIAŁA, WIELE RZECZY BĘDZIE POPSUTYCH. MOIM ZALECENIEM JEST USUNIĘCIE WSZYSTKICH POPRZEDNICH ZAPISÓW GRY. NIE JEST KONIECZNE USUWANIE CAŁEJ BAZY DANYCH, CHYBA ŻE W SKRAJNYCH PRZYPADKACH.
  
  Zmiany:
  
  - 🌍 **Menedżer Światów i Postaci:** Masz teraz pełną swobodę. Twórz własne Światy z ich własnymi zasadami i scenerią, a wewnątrz każdego z nich twórz tyle postaci, ile chcesz. **Ważna uwaga:** Wszystkie postacie w tym samym świecie dzielą tę samą linię czasową i wydarzenia, co stanowi fundament pod przyszły tryb wieloosobowy.
  - 🧠 **Pamięć Kontekstowa (Super RAG):** AI ma teraz „zmysły”. Szukając informacji w Lore lub w swojej pamięci, bierze pod uwagę, gdzie jesteś, z kim jesteś, czy jesteś ranny i co się właśnie wydarzyło. Jeśli jesteś z Królem, zapamięta rzeczy o królach. Jeśli jesteś ranny, poszuka zasad leczenia. Jest to o wiele bardziej intuicyjne i spójne!
  - 🌍 **Lore przy Pierwszej Postaci:** Pisałeś epicki opis swojego świata, a AI ignorowało go przy twojej pierwszej postaci? Naprawione! Teraz ręczny opis świata trafia bezpośrednio do AI podczas początkowego tworzenia, jeszcze zanim aktywuje się system pamięci.
  - ⚙️ **Ulepszony System Światów:** Uniezależniłem nazwę twojego świata od reguł technicznych. Teraz możesz nazwać swój świat jak chcesz, bez wpływu na ładowanie zasad Fantasy lub Cyberpunk.
  - 📝 **Przejrzystość w Tworzeniu:** Ulepszyłem wewnętrzne instrukcje, aby AI lepiej rozumiało, kiedy powinno wymyślić tło fabularne, a kiedy ograniczyć się do pobrania twoich statystyk.
  - 🧠 **Walka w Wolnym Tekście:** Teraz możesz pisać swoje akcje w walce tak, jakbyś rozmawiał z postacią w grze stołowej: „rzucam zaklęcie leczenia na siebie”, „wyciągam miecz”, „używam mikstury leczenia”. AI rozumie twoją intencję i tłumaczy ją na mechanikę gry.
  - 🎨 **Nowy Epicki Interfejs!** Całkowicie przebudowałem grę. Menu w stylu RPG, animowane tła i zupełnie odświeżone wrażenia wizualne. Ciemny styl półprzezroczysty, neonowe krawędzie i wygładzone cienie dla pełnej immersji.
  - 🎬 **AI Reżyser Sceny (ULEPSZONY):** Walka teraz ożywa. AI generuje wydarzenia środowiskowe i reakcje, które wzbogacają narrację: spadające pochodnie, cofający się wrogowie, zawalające się belki. Pole bitwy nie jest już statyczne!
  - ⚔️ **Wyciąganie Broni Słowami:** Nie musisz już klikać w slot broni. Po prostu napisz „wyciągam miecz” lub „wyciągam topór”, a system zinterpretuje to automatycznie (UWAGA!, robienie tego w walce może skończyć się porażką, krytyczną pomyłką i utratą tury!... „Do walki przychodzi się przygotowanym z domu!”).
  - 📖 **Rozpoznawane Zaklęcia:** AI zna teraz całą twoją księgę zaklęć. Powiedz „rzucam kulę ognia”, a jeśli masz to zaklęcie, rzuci je.
  - 🌍 **Narracja w Twoim Języku:** Historia teraz ściśle przestrzega wybranego języka, unikając dziwnych mieszanek (mam nadzieję, że nigdy więcej nie zobaczę spanglish!, tak bardzo wymusiłem to na AI, że jeśli znów wygeneruje tekst w innym języku niż wybrany, to znaczy, że naprawdę jest przeklęte).
  - 🛡️ **Koniec z Utraconymi Turami:** Jeśli gra nie zrozumie twojej akcji, poprosi cię o jej sformułowanie na nowo. Twoja tura NIE przepada.
  - 🎒 **Ręczny Ekwipunek:** Aby przenosić przedmioty między slotami (wyposażyć z plecaka, załadować amunicję), użyj interfejsu przeciągnij i upuść. Unika to pomyłek i oszczędza zasoby AI.
  - 🧪 **Płynne Używanie Mikstur:** Teraz możesz przeciągać mikstury i jedzenie bezpośrednio na swój portret, aby ich użyć. Dodałem też opcję „Użyj” po kliknięciu prawym przyciskiem myszy. Bardziej intuicyjnie i szybciej!
  - 🩸 **Poprawka Obrażeń:** Nie jesteś już nieśmiertelny! Naprawiliśmy problem, w którym pasek życia nie spadał, mimo otrzymywania ciosów. Teraz będziesz cierpieć, jak należy.
  - 👻 **Pożegnanie z Przedmiotami Widmo:** Znajdowałeś przedmiot w historii, ale nigdy nie pojawiał się w plecaku? Problem rozwiązany! Teraz system automatycznie naprawia przedmioty, które AI „zapomniało” stworzyć.
  - 🐛 **Krytyczna Poprawka NPC:** Naprawiono błąd, który uniemożliwiał NPC poprawne podejmowanie decyzji taktycznych, powodując, że zawsze „czekali” zamiast atakować lub się bronić.
  - 🎒 **Poprawka Ekwipunku Początkowego:** Nowe postacie nie zaczynają już nago. Teraz otrzymują swój ekwipunek początkowy poprawnie.
  - 🎲 **Tworzenie Postaci:** Naprawiono exploit, w którym podnoszenie i obniżanie atrybutu w pewnych progach generowało nieskończone punkty dodatkowe. Koniec ze sztuczką z Charyzmą!
  - 🖼️ **Naprawione Portrety:** Tworzyłeś świat z własną nazwą i portrety znikały? Naprawione! Teraz system znajduje odpowiednie obrazy niezależnie od tego, jak nazwiesz swój świat.
  - 💍 **Inteligentne Ikony:** Przedmioty (w tym pierścienie) teraz wyświetlają dokładniejsze i poprawniejsze ikony w interfejsie.
  - 🧪 **Ulepszone Dymki Informacyjne:** Mikstury, przedmioty konsumpcyjne i zaklęcia teraz poprawnie wyświetlają wszystkie informacje i efekty po najechaniu myszką.
  - 🎵 **Ulepszenia Dźwięku:** Muzyka bojowa nie zatrzymuje się już po naciśnięciu predefiniowanych przycisków.
  - [I18N] **Poprawka Implantów:** Dodano brakujące klucze tłumaczeń dla slotów implantów (`slot_implant_*`) i odpowiednich ikon (`icon_implant_*`) w `es.json`.
  - [FIX][AUDIO] **Niespójny Dźwięk:** Dostosowano efekty dźwiękowe (SFX) wyposażania przedmiotów i wyciągania broni do scenerii. Teraz system wykrywa `setting_key` i używa futurystycznych/przemysłowych dźwięków w Cyberpunk oraz klasycznych dźwięków w Fantasy.
  - [FIX][I18N] **Czyszczenie es.json:** Usunięto ponad 20 zduplikowanych kluczy w `es.json` i poprawiono literówki w nazwach slotów (np. „Oíidos” -> „Oídos”).
  - ⚙️ **Inteligentne Wykrywanie Modeli:** Teraz gra czyta bezpośrednio „mózg” importowanych modeli (GGUF). Automatycznie wykrywa rzeczywisty maksymalny kontekst. (Oficjalne zoptymalizowane modele nie są ruszane dla maksymalnej stabilności).
  - 📂 **Oszczędność Miejsca:** Dodając model z komputera, gra teraz przenosi go bezpośrednio do swojego folderu zamiast go kopiować. Twoje gigabajty ci podziękują!
  - ⚖️ **Sprawiedliwość w Atrybutach:** Naprawiono exploit, który pozwalał na zdobywanie nieskończonych punktów poprzez podnoszenie i obniżanie atrybutów przy tworzeniu.
  - 📖 **Przewodnik Treningowy:** Zaktualizowałem Podręcznik (README) o wszystkie szczegóły dotyczące tego, jak postacie zdobywają doświadczenie i podnoszą swoje atrybuty.
  - 📜 **Kodeks Epickich Światów:** Koniec z lore w stylu „postscriptum”! Teraz generator tworzy światy z głęboką historią, opisując ich religie, prawa, geografię i sławne postacie w formacie szczegółowej kroniki.
  - 🧙 **Spójne Historie:** Twoja postać nie rodzi się już w próżni. Jej tło fabularne teraz inteligentnie integruje się z lore świata, który właśnie stworzyłeś lub wybrałeś.
  - ⚡ **Płynny Interfejs:** Automatyczne generowanie historii i światów odbywa się teraz w tle. Koniec z czekaniem przy zamrożonym ekranie!
  - 🚀 **Natychmiastowy Start Przygody:** Wyeliminowałem czekanie! Teraz po stworzeniu postaci od razu wskakujesz do historii. System wykorzystuje twoje wzbogacone tło fabularne, aby stworzyć idealny początek, bez konieczności pisania przez ciebie ani jednego słowa więcej.
  - 🎭 **Tło Fabularne z Pretekstem:** Twoje postacie mają już nie tylko przeszłość, ale także pilny powód, by rozpocząć przygodę. Nowy system AI automatycznie generuje iskrę początkową historii zintegrowaną z twoją biografią.
  - 🧹 **Uproszczony Interfejs:** Usunąłem przyciski i ekrany, które nie wnosiły wartości. Przycisk „Rozpocznij Historię” centralizuje teraz całą moc, abyś mógł zacząć grać jak najszybciej.
  - [FIX][UI] **Duplikacja Wizualna przy Wyborze Świata:** Naprawiono błąd, w którym nazwa świata pojawiała się podwójnie jako „Nazwa [Nazwa]”. Teraz etykieta typu jest ukrywana, jeśli jest zbędna.
  - [FEAT][UI] **Szybkie Ładowanie (Pojedyncze Kliknięcie):** Teraz można załadować postać lub rozpocząć tworzenie nowej jednym kliknięciem na ekranie wyboru światów. Zachowano rozwijanie światów, aby uniknąć konfliktów.
  - 🧠 **Bardziej Kreatywne AI:** Przełamałem „pętlę powtórzeń” AI, wstrzykując zmienność techniczną do każdego zapytania. Teraz losowo generowane postacie będą o wiele bardziej unikalne i oryginalne, ignorując przykłady z przewodnika.
  
  🛡️ Do odważnych, którzy ODWAŻĄ SIĘ walczyć na pierwszej linii frontu: Przygoda czeka, teraz bardziej nieposkromiona niż kiedykolwiek!

****************************************************************************************************
06/02/2026 02:32 - Wsparcie dla Vulkan (AMD/Intel) i niezawodna obsługa błędów - Beta_v053
****************************************************************************************************
- What's New (PL):
  - 🚀 **Hybrydowy Silnik Vulkan:** Oficjalne wsparcie dla kart graficznych AMD i Intel! Teraz gra zawiera dedykowany silnik Vulkan, który aktywuje się automatycznie (lub ręcznie), aby przyspieszyć AI na sprzęcie innym niż NVIDIA.
  - ⚙️ **Pełna kontrola nad silnikiem:** Dodaliśmy opcję "Wymuś Vulkan" zarówno w programie uruchamiającym, jak i w Ustawieniach. Jeśli masz problemy z CUDA lub chcesz sprawdzić wydajność Vulkan (który w wielu konfiguracjach śmiga aż miło), teraz masz pełną kontrolę.
  - 🚦 **Stan systemu:** Teraz w panelu stanu możesz dokładnie zobaczyć, jaki silnik pracuje pod maską (🟢 ZIELONY dla CUDA, 🔴 CZERWONY dla Vulkan).
  - 🛡️ **Status AI:** Jeśli Sztuczna Inteligencja się "zmęczy" (przekroczy limit) lub utracisz połączenie z internetem, gra powiadomi Cię o tym czytelnym i przydatnym oknem, zamiast pozostawiać Cię w niepewności.
  - 🔄 **Zabezpieczenie przed blokadą:** W przypadku błędu połączenia gra nie "zepsuje" już rozmowy. Twoje opcje dialogowe pojawią się ponownie, abyś mógł spróbować jeszcze raz bez utraty postępów.
  - ☁️ **Pamięć chmury:** Menu ustawień zapamiętuje teraz poprawnie Twoje preferencje dotyczące dostawców w chmurze pomiędzy sesjami.

****************************************************************************************************
03/02/2026 20:23 - Optymalizacja pamięci VRAM i stabilność wczytywania - Beta_v052
****************************************************************************************************
- What's New (PL):
  - 🧠 **Zoptymalizowany mózg:** Naprawiliśmy poważny błąd, przez który SI próbowała „myśleć dwa razy” jednocześnie, podwajając zużycie pamięci karty graficznej i powodując ekstremalne spowolnienia lub awarie. Twoja pamięć VRAM Ci podziękuje!
  - 💾 **Bezpieczne wczytywanie:** Poprawiliśmy ogólną stabilność wczytywania zapisów, aby powrót do przygody był zawsze płynnym doświadczeniem.

****************************************************************************************************
02/02/2026 00:18 - Krytyczny Hotfix: Stabilność, Multi-GPU i Usprawnienia Lokalizacji - Beta_v051
****************************************************************************************************
- What's New (PL):
  - 🚑 **Krytyczna poprawka:** Naprawiono problem, który w rzadkich okolicznościach uniemożliwiał uruchomienie gry („Całkowita awaria”) z powodu uszkodzenia bazy danych, którego Launcher nie mógł naprawić. Opcja „Wyczyść bazę danych” jest teraz znacznie skuteczniejsza.
  - ⚡ **Usprawnienie sprzętowe:** Naprawiono błąd, przez który tryb „Automatycznej konfiguracji” ignorował wydajność systemów z wieloma kartami graficznymi w niektórych konfiguracjach z nieidentycznymi procesorami GPU.
  - 🛠️ **Narzędzie:** Dodano nową opcję w Launcherze, umożliwiającą łatwe otwarcie dziennika (logu) z poprzedniej sesji, co ułatwia uzyskanie pomocy technicznej.
  - 🌍 **Lokalizacja:** Poprawiono kilka przycisków w launcherze, które wyświetlały się po angielsku (Yes/No). Teraz uwzględniają one wybrany język.
  - 📖 **Interfejs:** Ulepszono formatowanie tekstu z informacjami o wersji, aby był bardziej czytelny.
  
  - **Wkrótce:** Kolejny punkt w trakcie realizacji: obsługa GPU AMD, NVIDIA i Intel poprzez Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Poprawki instrukcji i Stabilność - Beta_v050
****************************************************************************************************
- Nowości:
  **Moc Multi-GPU i krytyczne poprawki!**
  
  * **🚀 Wsparcie Multi-GPU:** Zaimplementowano możliwość podziału dużych modeli AI między wieloma kartami graficznymi. *Teraz możesz wykorzystać cały swój arsenał sprzętowy; Nielimitowana moc!*
  * **🛡️ Stabilność:** Dodano wszystkie brakujące biblioteki DLL, aby zapobiec nieoczekiwanym zamknięciom. *Opancerzyłem silnik, jeśli teraz zawiedzie, będzie to wina krytycznej porażki w rzucie kośćmi.*
  * **📖 Dynamiczne instrukcje internetowe:**
    * **Prawdziwy selektor:** Menu języków sprawdza teraz, które pliki rzeczywiście istnieją, zanim je wyświetli. *Koniec z widmowymi opcjami, które nic nie robiły; magia dywinacji 5. poziomu.*
    * **Naprawa błędu 403:** Naprawiono błąd uprawnień, który uniemożliwiał przeglądanie dziennika zmian wewnątrz gry. *Nauczyłem aplikację prawidłowo prosić o przejście ("Sezamie, otwórz się!").*
  * **🌍 Języki:** Przegląd tekstów i tłumaczeń. *Tryb poligloty aktywowany.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizacja i ulepszenia AI - Beta_v049
****************************************************************************************************
- Nowości:
  Dopracowaliśmy wrażenia z gry dzięki ważnym poprawkom i nowemu narzędziu wizualnemu:

  * **Czysty i niezawodny ekwipunek:** Koniec ze znajdowaniem "widmowych przedmiotów" lub rzeczy o dziwnych nazwach w plecaku. Wdrożyliśmy system weryfikacji narracyjnej, który zapewnia, że wszystko, co zbierzesz lub kupisz, rzeczywiście istnieje w świecie gry.
  * **Płynne dialogi:** Naprawiliśmy te irytujące przyciski, które czasami pojawiały się jako "Unknown" lub nie reagowały. Teraz opcje dialogowe z NPC zawsze będą wyświetlać poprawny tekst.
  * **Solidne generowanie postaci:** Tworzenie bohatera to teraz solidny proces. Rozwiązaliśmy konflikty, które czasami pozostawiały kartę postaci niekompletną lub z błędnymi statystykami podczas łączenia biografii i statystyk.
  * **Nowy pasek stanu AI:** Teraz możesz zobaczyć mózg maszyny w działaniu! Dodaliśmy pasek na górze, który pokazuje szybkość odpowiedzi i użycie pamięci w czasie rzeczywistym. Dzięki temu zawsze będziesz wiedzieć, czy AI "myśli" nad twoją kolejną przygodą.

****************************************************************************************************
28/01/2026 03:50 - Krytyczna poprawka kompilacji - Beta_v048
****************************************************************************************************
- Nowości:
  Naprawiono błąd krytyczny, który uniemożliwiał uruchomienie gry na nowych instalacjach. Poprawiono stabilność i kompatybilność z różnym sprzętem.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web i wsparcie dla RTX 50 - Beta_v047
****************************************************************************************************
- Nowości:

  > [!WAŻNE]
  > **ZE WZGLĘDÓW KOMPATYBILNOŚCI KONIECZNE JEST USUNIĘCIE POPRZEDNIEJ BAZY DANYCH, W PRZECIWNYM RAZIE ISTNIEJE DUŻE PRAWDOPODOBIEŃSTWO WYSTĄPIENIA BŁĘDÓW W KONFIGURACJI AI**
  > **(Rozwiązanie: Kliknij ikonę koła zębatego ⚙️ w Launcherze -> Usuń bazę danych)**

  *Krytyczne wsparcie dla RTX serii 50: Naprawiono poważny błąd powodujący nieoczekiwane zamknięcie podczas próby generowania postaci na nowych kartach graficznych NVIDIA (RTX 5070, 5080, 5090).
  (Ponieważ nie posiadam RTX z serii 5000, nie mogłem bezpośrednio sprawdzić, czy rozwiązanie działa w 100%, ale teoretycznie powinno być naprawione. Oczekuję na wasze okrzyki zwycięstwa tutaj!)
  
  *Aktualizacja silnika AI: Zaktualizowaliśmy lokalny mózg gry, aby był kompatybilny z najnowszą technologią sprzętową, zapewniając każdemu możliwość korzystania z gry w trybie offline, niezależnie od tego, jak nowoczesny jest jego sprzęt.
  
  *Nowy Launcher: Aktualizacje i wiadomości w czasie rzeczywistym z oficjalnej strony internetowej.


****************************************************************************************************
26/01/2026 06:49 - Integracja dokumentacji internetowej - Beta_v045
****************************************************************************************************
- Nowości:
  *Teraz Instrukcja obsługi i Dziennik zmian ładują się bezpośrednio z naszej oficjalnej strony internetowej, co gwarantuje, że zawsze masz najbardziej aktualne informacje bez konieczności pobierania łatek. Zawiera inteligentny tryb offline.

  *Wzmocniliśmy stabilność gry, aby nigdy nie zawieszała się przy uruchamianiu. Ponadto sprzedawcy wrócili z wakacji w limbo: teraz pojawiają się poprawnie, mają towar na półkach i szanują realia świata (żadnych magicznych mikstur w przyszłości).

  *Naprawiono błąd, który uniemożliwiał modyfikację parametrów AI i wybór modelu AI, co sprawiało, że niektórzy użytkownicy z ograniczoną pamięcią VRAM nie mogli grać.
  **W przypadku konieczności zmiany parametrów AI, zdecydowanie zalecam najpierw spróbować obniżyć % VRAM do 85%, zrestartować i przetestować; jeśli to nadal nie wystarczy, zalecam sprawdzenie, czy VRAM GPU nie jest używana przez inne procesy niż sama gra (restart komputera w razie potrzeby, zamknięcie aplikacji, które mogą zajmować VRAM). jeśli po obniżeniu ilości VRAM nawet do 70% nadal nie działa, nie zalecam dalszego obniżania, ponieważ gra nie będzie w stanie obsłużyć promptów wysyłanych do AI; w takim przypadku, nawet jeśli uda się uniknąć przepełnienia VRAM, gra nie będzie działać z braku zasobów. Wtedy jedyną opcją pozostaje zmiana modelu na niższy, przywrócenie automatycznych parametrów AI i restart.

****************************************************************************************************
26/01/2026 04:00 - Stabilizacja rdzenia i diagnostyka usług - Beta_v044
****************************************************************************************************
- Nowości:
  Stabilizacja rdzenia i diagnostyka usług" "Krytyczne poprawki w generowaniu postaci, interfejsie użytkownika (MainWindow) i optymalizacji wyszukiwania semantycznego. Rozpoczęcie dogłębnej diagnostyki trybu usług.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logi i Stabilność - Beta_v043
****************************************************************************************************
- Description:
  Poprawka naprawcza skupiona na diagnostyce i naprawie pętli interfejsu użytkownika.

- Changes:
  Naprawiono błąd wizualny okna dialogowego restartu
  Nowy system logów w %LOCALAPPDATA% do diagnostyki
  Optymalizacje wydajności wewnętrznej

****************************************************************************************************
24/01/2026 06:30 - Wsparcie biografii backend - Beta_v042
****************************************************************************************************
- Description:
  Ekspozycja danych biograficznych dla UI i dostosowanie i18n.

<!-- source_hash: 5f218fc5 -->
