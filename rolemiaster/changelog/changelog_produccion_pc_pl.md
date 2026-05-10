****************************************************************************************************
10/05/2026 02:24 - Testy graczów: działania powiązane z rzeczywistymi mechanikami - Beta_v063
****************************************************************************************************
- What's New (PL):
  - **🧩 Działania z bardziej realistycznymi konsekwencjami**
    - Naprawiłem przypadki, w których opowieść informowała, że użyłeś umiejętności, przedmiotu, implantu lub zasobu, ale później karta nie zawsze odzwierciedlała to, co się stało.
    - Od teraz powinno być lepiej widoczne, kiedy działanie zużywa wytrzymałość, amunicję lub przedmioty jednorazowe, kiedy wpływa na wroga, a kiedy postać zyskuje postęp dzięki ostatnim czynnościom.
  - **🛒 Wiarygodniejszy handel i usługi**
    - Zakupy, instalacja implantów, używanie przedmiotów jednorazowych oraz kontakt z sprzedawcami powinny czuć się bardziej spójne.
    - Jeśli scena informuje o dostępnej usłudze, gra powinna lepiej reagować użytecznymi opcjami i mniej momentami typu "dobrze, a teraz gdzie klikam?".
  - **🌍 Fantasy i cyberpunk z wyraźniejszą tożsamością**
    - Zmniejszyłem dziwne mieszanki między ambientacjami. Światy średniowieczne powinny brzmieć bardziej jak światy średniowieczne, a światy cyberpunk powinny opierać się bardziej na technologii, implantach, usługach miejskich oraz sprzęcie charakterystycznym dla ich stylu.
    - Dotyczy to głównie sklepów, scen, zasobów oraz szczegółów otoczenia.
  - **🎲 Przyjemniejsze rozpoczęcie gry**
    - Ekran między tworzeniem postaci a rozpoczęciem historii nie powinien już wyświetlać ogromnych bloków informacji wewnętrznych.
    - Teraz wygląda jak ekran ładowania ról, zmienia się w zależności od ambientacji i może pokazywać krótkie wskazówki z podręcznika podczas przygotowywania pierwszej sceny.
    - Może również przygotować obraz powiązany z kontekstem bez dłuższego oczekiwania: jeśli zdąży na czas, pojawi się; jeśli nie, gra rozpocznie się tak samo.
  - **🛡️ Lepsze rozwiązanie porażki i nieprzytomności**
    - Naprawiłem to, co dzieje się przy osiągnięciu 0 PV w zależności od trudności.
    - W łatwej i normalnej trudności postać pada w nieprzytomność, a historia kontynuuje się z kontekstowym skokiem czasowym. W trudnej, jeśli odporność zostanie nieudana, gra wyświetla kontekstową śmierć oraz wyraźny ekran do potwierdzenia i powrotu do wyboru.
    - Zapobiega to sytuacji, w której opowieść kontynuuje się, jakby nic się nie stało, mimo że postać już leżała na ziemi. To, że porażka boli, jest w porządku; to, że gra ją ignoruje, już nie.
  - **🧩 Gry z większą pamięcią**
    - Przy ładowaniu gry lub przechodzeniu kilku tur, gra powinna lepiej kontynuować od tego, co ostatnio było widoczne na ekranie.
    - Powinna również lepiej pamiętać rzeczywiste intencje Twoich decyzji, redukując odpowiedzi, które wydają się cofać lub interpretować opcję zbyt ogólnie.
  - **✂️ Narracja łatwiejsza do czytania**
    - Dostosowałem odpowiedzi eksploracji, aby nie zamieniały się ponownie w ogromne ściany tekstu.
    - Narracja może nadal być bogata, ale powinna lepiej "oddychać" między akapitami i być bardziej przyjazna do czytania podczas długich partii.
  - **🧼 Mniej dziwnych resztek na ekranie**
    - Wyczyściłem przypadki, w których mogły pojawiać się etykiety, dziwne formaty, podwójne opcje lub teksty, które nie powinny trafiać do gracza.
    - Ogólnie interfejs powinien pokazywać więcej opowieści i mniej szwów.
  - **🔧 Większa stabilność w długich sesjach**
    - Przeglądałem przedłużone sesje gry z tworzeniem postaci, handlem, implantami, walką, przedmiotami jednorazowymi, amunicją, ładowaniem gry oraz ciągłością.
    - Cel tego bloku jest jasny: mniej przerw, mniej niespójności i większe poczucie, że to, co robisz w opowieści, ma wagę wewnątrz gry.

****************************************************************************************************
27/04/2026 18:22 - Wspólne światy, onboarding i walka - bardziej spójne - Beta_v062
****************************************************************************************************
- What's New (PL):
  **🌍 Znacznie sensowniejsze wspólne światy**
    - Poprawiono ciągłość sytuacji, gdy wielu bohaterów dzieli ten sam świat. Gra teraz lepiej wykorzystuje już istniejące lokacje i zostawia mniej miejsca na tworzenie „tej samej strefy, ale pod inną nazwą i z innym kapeluszem”.
    - Poprawiono również informacje o lokalizacji w selektorze i na karcie postaci, aby każdy bohater pokazywał swoje rzeczywiste położenie, a nie pożyczone od sąsiada.
  - **👥 Bardziej spójni NPC-e i mniej skłonni do podwójnego odradzania się**
    - Wzmocniono logikę, aby istniejący NPC pojawiał się ponownie jako ta sama postać, gdy jest to wymagane, zamiast odradzać się pod innym imieniem, z inną twarzą lub jako nowa karta wyłaniająca się z mgły.
    - Ponadto, wrogość wywołana przez jedną postać nie powinna już magicznie przenosić się na wszystkich innych. Jeśli Kaelen jest na ciebie zły, ma być zły na ciebie... a nie na cały gatunek ludzki.
  - **🎬 Wejścia do gry i eksploracja z mniejszą ilością dziwacznych teatrów**
    - Naprawiono kilka przypadków, w których narracja sugerowała, że ktoś stał przed tobą, ale system tego nie podtrzymywał. Teraz jest mniej widmowych sprzedawców, mniej ewaporujących rozmówców i mniej scen przypominających niskobudżetową sztukę eksperymentalną.
    - Zredukowano również przypadki, w których SI umieszczała prezenty, zapasy lub elementy narracyjne tam, gdzie nie powinny się pojawić, zwłaszcza podczas wejść do gry i pierwszych scen.
  - **⚔️ Walka i decyzje z mniejszą ilością potknięć**
    - Wzmocniono ciągłość między eksploracją a walką, aby rozpoczęcie potyczki lepiej zależało od faktycznie obecnych NPC-ów, a nie od narracyjnych mgieł.
    - Naprawiono również kilka zacięć, w których scena nadal trwała, ale interfejs prezentował słabe lub generyczne decyzje. Mniej „Kontynuuj” bez powodu, więcej opcji z realnym zamysłem.
  - **🧬 Tworzenie postaci i otoczenie - bardziej wiarygodne**
    - Losowe tworzenie postaci jest ponownie bardziej stabilne i lepiej respektuje format biograficzny oczekiwany przez grę.
    - Dostosowano kilka niespójności w otoczeniu i zasobach, aby cyberpunk, fantasy i ich pochodne nie mieszały się, jakby średniowieczna tawerna i nielegalna klinika postanowiły wynająć ten sam lokal.

****************************************************************************************************
23/04/2026 03:01 - Poprawki rozgrywki - Beta_v061
****************************************************************************************************
- What's New (PL):
  - **📖 Płynniejsza eksploracja**
    - Powstrzymałem tury eksploracji przed narzucaniem zasad z innych momentów gry. Zredukowało to nadmiernie długie odpowiedzi, dziwne powtórzenia oraz sceny, które sprawiały wrażenie, jakby ciągnęły się w nieskończoność mimo wyczerpania tematu.
    - Dopracowałem również ton narracji, aby zachowała swoją głębię, ale nie zamieniała każdej interakcji w pisanie powieści.
  - **🎯 Przyciski bardziej dopasowane do sytuacji**
    - Poprawiłem liczne przypadki, w których sztuczna inteligencja zmuszała interfejs do wyświetlania generycznych przycisków.
    - Teraz gra lepiej przetwarza te ścieżki i zamienia je w konkretne decyzje, więc powinno być mniej momentów w stylu „wszystko fajnie, ale w co do cholery mam kliknąć”.
  - **🦾 Cyberpunk znów brzmi i działa jak cyberpunk**
    - Naprawiłem błąd w miksie ustawień, który podczas tworzenia postaci w światach cyberpunkowych mógł wprowadzać elementy średniowieczne.
    - Naprawiłem również statystykę Człowieczeństwa, aby znów obliczała się i wyświetlała poprawnie, nawet w światach z własnymi nazwami. Jeśli postać posiada implanty, gra nie powinna już traktować jej tak, jakby jej największym problemem był brak many.
  - **💰 Bardziej niezawodny handel**
    - Sprawiłem, że kupiec opisany w narracji jest teraz poprawnie rozpoznawany przez system jako sprzedawca, co eliminuje absurdalne blokady podczas otwierania okna handlu.
    - Ponadto podczas sprzedaży przedmiotów u generycznego kupca ceny są znów poprawne, a nie jak z tych ofert, po których ma się ochotę schować miecz i odejść w milczeniu.
  - **🎬 Spójniejsze początki rozgrywki**
    - Zwiększyłem spójność scen początkowych, w których gra przedstawia postać znajdującą się fizycznie przed bohaterem, aby ograniczyć przypadki, w których narracja sugerowała wyraźną obecność, ale system nie wspierał tego odpowiednio pod spodem.

