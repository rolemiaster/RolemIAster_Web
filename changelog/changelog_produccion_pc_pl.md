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