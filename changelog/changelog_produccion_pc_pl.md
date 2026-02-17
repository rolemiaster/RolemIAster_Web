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

