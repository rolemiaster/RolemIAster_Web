# 📢 Komunikat od Dewelopera (Wczesny Dostęp)

Witaj w RolemIAster. Zanim zanurzysz się w swoją kolejną wielką przygodę, pozwól, że ukradnę Ci minutę, aby wyjaśnić kilka rzeczy (obiecuję, że będę krótki, kości czekają).

Gra znajduje się w fazie **Wczesnego Dostępu (Early Access)**.
Jestem samodzielnym deweloperem — tak, tylko ja, mój klawiatura i litry kawy — co oznacza, że robię wszystko, co mogę, ale czasami nie nadążam ze wszystkim. Z góry przepraszam, jeśli naprawa jakiegoś nieuchwytnego błędu, implementacja tej funkcji, której tak pragniesz, lub natychmiastowa odpowiedź na Discordzie zajmie mi trochę czasu. Balansuję, ale wciąż nie wyhodowałem dodatkowych macek.

## ⚠️ Ważne Uwagi dotyczące Sprzętu (Lokalnie vs. Chmura)
Są dwa sposoby gry, a Twoje doświadczenie zależy od tego, który wybierzesz:

*   **Tryb Lokalny (Darmowy, Prywatny):** Jeśli chcesz uruchomić AI na swoim własnym komputerze, wymagania systemowe (minimum 12 GB VRAM) są święte. Mniej niż to, a AI będzie działać powoli lub zawieszać Twój sprzęt. To czysta matematyka, nie magia.
*   **Tryb Chmura (API Gemini, GPT, itp. tylko jeśli uruchomisz z komendą `--advanced`):** Tutaj sytuacja się zmienia! Jeśli skonfigurujesz grę do korzystania z usług chmurowych (takich jak Google Gemini czy OpenAI), ciężka praca odbywa się na ich serwerach, a nie na Twoim. W tym trybie gra działa płynnie na praktycznie każdym komputerze, ponieważ Twoja karta graficzna odpoczywa.

## Zarządzanie Oczekiwaniami
Jeśli przybyłeś, oczekując dopracowanej superprodukcji AAA, obawiam się, że jesteś w złym miejscu (na razie). Gra jest we wczesnej fazie rozwoju i szczerze mówiąc, tylko odważni, którzy rozumieją i wspierają tego typu eksperymentalne projekty, mają teraz cierpliwość, by się nią cieszyć.

## Gwarancja Satysfakcji
Jeśli czujesz, że gra jest dla Ciebie zbyt niedopracowana lub Twój sprzęt cierpi z tego powodu, nikt się nie obrazi, jeśli poprosisz o zwrot. Wręcz przeciwnie, z przyjemnością powitam Cię z powrotem w przyszłości — i będę wdzięczny za zapłacenie 40 lub 60 USD, gdy gra będzie dopracowana i ukończona 😉. Obecna cena to prezent za zaufanie mi na tym etapie.

Mimo to, moja wdzięczność dla tych, którzy zdecydują się zostać, jest nieskończona. Wasze raporty i sugestie są prawdziwym motorem tego projektu. Dzięki Wam gra poprawiła się drastycznie w ciągu kilku tygodni.

**RolemIAster jest tworzone specjalnie dla Was.**

*Dziękuję za cierpliwość, wsparcie i niech krytycy będą po Waszej stronie!*


*********************************************************************************
#  AKTUALIZUJEMY DO QWEN 3.5 + TURBO QUANT! NOWY SILNIK, NOWA TECHNOLOGIA, NOWA ERA 🚀
*********************************************************************************

🚧 STREFA BUDOWY: LOBOTOMIA ZAKOŃCZONA (I DZIAŁA) 🧠🔧
Nad czym pracuję?
Zmieniam silnik gry i nie jest to łatwe zadanie.
Do tej pory za każdym razem, gdy gracz wykonywał turę, system wysyłał do AI "kawał" zasad o wielkości od 15 000 do 20 000 tokenów. Zasadniczo było to jak zmuszanie mistrza gry do przeczytania całego podręcznika przed każdym zdaniem. 📚🥵
Wdrożyłem dwie technologie, które współpracują ze sobą:

1. 🧠 **TurboQuant — Skompresowana pamięć**
   - Zintegrowałem technologię firmy Google (prezentowaną na ICLR 2026), która kompresuje pamięć AI do nieomal jednej trzeciej jej pierwotnego rozmiaru.
   - Jeśli posiadasz kartę RTX z serii 3000, 4000 lub 5000, gra automatycznie z niej skorzysta.
   - ⚠️ **WAŻNA UWAGA DOTYCZĄCA KART GRAFICZNYCH AMD:** CHOCIAŻ ISTNIEJĄ WSKAZANIA NA DZIAŁANIE TURBO QUANT NA KARTACH AMD/INTEL (VULKAN), W PRAKTYCE POWODUJE TO WIELE BŁĘDÓW I DLATEGO NA RAZIE NIE BĘDZIE IMPLEMENTOWANE. LICZYMY NA TO, ŻE SPOŁECZNOŚĆ ZAJMIE SIĘ TYM I WKRÓTCE POJAWIĄ SIĘ NOWOŚCI.
   - **Wynik:** AI zapamiętuje więcej, zużywając mniej VRAM. To czysta cyfrowa magia. ✨

2. 📖 **Masowy kontekst (+200%)**
   - Przepisałem obliczanie pamięci konwersacyjnej w sposób chirurgiczny: teraz gra odczytuje specyfikacje techniczne każdego modelu i dokładnie oblicza, ile zmieści się na Twojej karcie GPU.
   - Model 9B przechodzi z zapamiętywania ~36 000 słów do ponad ~110 000 na karcie GPU z 16 GB VRAM. 🚀
   - Ponadto, zwiększyłem limit odpowiedzi z 4 096 do 8 192 tokenów: dłuższe narracje bez cięć w połowie zdania.

Końcowy rezultat: w większości przypadków wyższa prędkość, długie partie, które nie tracą wątku, i znacznie bardziej skoncentrowane (i trzeźwe) AI. 🎯

Nota od Rzeczywistości (Zastrzeżenie 🧐):
Jeśli nawet giganci z Doliny Krzemowej (Gemini, ChatGPT...) czasami widzą różowe słonie, mój lokalny model nie będzie w 100% doskonały przez cały czas. Ale nie jest już "pijanym wujkiem na weselu" — teraz jest kompetentnym Mistrzem Gry z pamięcią prawdziwego słonia. 🐘

Dziękuję za cierpliwość, podczas gdy dokręcałem śruby! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->