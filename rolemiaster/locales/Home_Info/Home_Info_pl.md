# 📢 Komunikat od Dewelopera (Wczesny Dostęp)

Witaj w RolemIAster. Zanim zanurzysz się w swoją następną wielką przygodę, chciałbym zająć Ci minutę, aby wyjaśnić kilka spraw (obiecuję być krótki, kości już na Ciebie czekają).

Ta gra jest w fazie **Wczesnego Dostępu (Early Access)**.
Jestem jednoosobowym deweloperem — tak, tylko ja, mój klawiatura i litry kawy — co oznacza, że robię wszystko, co w mojej mocy, ale czasem nie nadążam ze wszystkim. Z góry przepraszam, jeśli naprawa jakiegoś nieuchwytnego błędu, wdrożenie funkcji, której bardzo pragniesz, lub natychmiastowa odpowiedź na Discordzie zajmie mi trochę czasu. Robię żonglerkę, ale jeszcze nie wyrosły mi dodatkowe macki.

## ⚠️ Ważna Informacja o Sprzęcie (Lokalnie vs Chmura)
Są dwa sposoby gry, a Twoje wrażenia zależą od tego, który wybierzesz:

*   **Tryb Lokalny (Darmowy, Prywatny):** Jeśli chcesz uruchomić SI na swoim własnym komputerze, wymagania sklepowe (Minimum 8GB VRAM) są święte, aby zacząć od dobrych podstaw. Mniej niż to, a SI będzie działać ślamazarnie lub zablokuje Twój sprzęt. To czysta matematyka, nie magia, chociaż teraz z Turbo Quant, to może się zmienić na lepsze.
*   **Tryb Chmury (API Gemini, GPT, etc. tylko jeśli uruchomisz z komendą `--advanced`):** Tutaj akcja się zmienia! Jeśli skonfigurujesz grę do korzystania z usług chmurowych (takich jak Google Gemini lub OpenAI), ciężka praca wykonywana jest na ich serwerach, a nie na Twoim. W tym trybie gra działa płynnie praktycznie na każdym sprzęcie, ponieważ Twoja karta graficzna odpoczywa.

## Zarządzanie Oczekiwaniami
Jeśli przyszedłeś, oczekując dopracowanej superprodukcji AAA bez żadnych wad, obawiam się, że jesteś w złym miejscu (na razie). Gra jest na wczesnym etapie, i szczerze mówiąc, tylko odważni, którzy rozumieją i wspierają tego typu eksperymentalne projekty, mają cierpliwość, aby cieszyć się nią teraz.

## Gwarancja Satysfakcji
Jeśli czujesz, że gra jest dla Ciebie za bardzo "surowa" lub Twój sprzęt bardzo cierpi, nikt nie obrazi się, jeśli poprosisz o zwrot. Wręcz przeciwnie, z przyjemnością powitam Cię z powrotem w przyszłości — i tego, że zapłacisz 40 lub 60 USD, gdy gra będzie dopracowana i ukończona 😉—. Aktualna cena to prezent za zaufanie mi na tym etapie.

Mając to na uwadze, moja wdzięczność jest nieskończona dla tych, którzy zdecydują się zostać. Wasze raporty i sugestie są prawdziwym motorem tego projektu. Dzięki Wam gra poprawiła się brutalnie w ciągu kilku tygodni.

**RolemIAster jest tworzony na miarę dla Was.**

*Dziękuję za cierpliwość, wsparcie i niech krytycy będą po Waszej stronie!*


*********************************************************************************
# 📢 AKTUALIZUJEMY DO QWEN 3.5 + TURBO QUANT! NOWY SILNIK, NOWA TECHNOLOGIA, NOWA ERA 🚀
*********************************************************************************

🚧 STREFA BUDOWY: LOBOTOMIA ZAKOŃCZONA (I DZIAŁA) 🧠🔧
Nad czym pracuję?
Zmieniam silnik gry, i nie jest to łatwe zadanie.
Do tej pory, za każdym razem, gdy gracze wykonywali turę, system przekazywał SI "górę" zasad o wielkości 15 000 do 20 000 tokenów. W zasadzie było to jak zmuszanie mistrza gry do przeczytania całego podręcznika przed każdym zdaniem. 📚🥵
Wdrożyłem dwie technologie, które współpracują ze sobą:

1. 🧠 **TurboQuant — Skompresowana pamięć**
   - Zintegrowałem technologię Google (prezentowaną na ICLR 2026), która kompresuje pamięć SI do nieomal jednej trzeciej oryginalnego rozmiaru.
   - Jeśli masz kartę RTX z serii 3000, 4000 lub 5000, gra automatycznie ją wykorzysta.
   - ⚠️ **WAŻNA UWAGA DOTYCZĄCA KART AMD:** CHOCIAŻ ISTNIEJĄ PRZESŁANKI O DZIAŁANIU TURBO QUANT NA KARTACH AMD/INTEL (VULKAN), W PRAKTYCE POWODUJE TO WIELE BŁĘDÓW I DLATEGO NA RAZIE NIE BĘDZIE WDRAŻANA. MAMY NADZIEJĘ, ŻE SPOŁECZNOŚĆ ZROBI SWOJE I WKRÓTCE POJAWIĄ SIĘ NOWOŚCI.
   - **Wynik:** SI zapamiętuje więcej, zużywając mniej VRAM. To czysta cyfrowa magia. ✨

2. 📖 **Masowy kontekst (+200%)**
   - Przepisałem algorytm pamięci konwersacyjnej w sposób chirurgiczny: teraz gra odczytuje specyfikacje techniczne każdego modelu i precyzyjnie oblicza, ile zmieści się na Twoim GPU.
   - Model 9B przechodzi od zapamiętywania ~36 000 słów do ponad ~110 000 na GPU z 16 GB VRAM. 🚀
   - Dodatkowo, podniosłem limit odpowiedzi z 4096 do 8192 tokenów: dłuższe narracje bez cięć w połowie zdania.

Ostateczny wynik: Wyższa prędkość w większości przypadków, długie rozgrywki, które nie gubią wątku, i znacznie bardziej skoncentrowana (i trzeźwa) SI. 🎯

Nota Rzeczywistości (Zastrzeżenie 🧐):
Jeśli nawet giganci z Doliny Krzemowej (Gemini, ChatGPT...) czasami widzą różowe słonie, mój lokalny model nie będzie w 100% doskonały. Ale nie jest już "pijanym wujkiem na weselu" — teraz jest kompetentnym Mistrzem Gry z pamięcią prawdziwego słonia. 🐘

Dziękuję za cierpliwość, podczas gdy dopasowywałem te śrubki! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->