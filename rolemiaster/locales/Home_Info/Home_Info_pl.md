# 📢 Wiadomość od Twórcy (Wczesny Dostęp)

Witamy w RolemIAster. Zanim zanurzysz się w swoją kolejną wspaniałą przygodę, chcę zająć Ci minutę, aby wyjaśnić kilka rzeczy (obiecuję być krótki, kości już czekają).

Ta gra jest w fazie **Wczesnego Dostępu (Early Access)**.
Jestem samotnym deweloperem – tak, tylko ja, mój klawiatura i litry kawy – co oznacza, że robię wszystko, co mogę, ale czasami nie nadążam ze wszystkim. Z góry przepraszam, jeśli zajmie mi trochę czasu naprawienie jakiegoś podstępnego błędu, zaimplementowanie funkcji, której tak pragniesz, lub natychmiastowa odpowiedź na Discordzie. Robię co w mojej mocy, ale nadal nie mam dodatkowych macek.

## ⚠️ Ważne uwagi dotyczące sprzętu (Lokalny vs. Chmura)
Istnieją dwa sposoby gry, a Twoje doświadczenie zależy od wybranego:

*   **Tryb Lokalny (Darmowy, Prywatny):** Jeśli chcesz uruchomić AI na własnym komputerze, wymagania sprzętowe (minimum 12 GB VRAM) są święte. Mniej niż tego, a AI będzie się wlec lub zawieszać Twój sprzęt. To czysta matematyka, a nie magia.
*   **Tryb Chmurowy (API Gemini, GPT, itp. tylko jeśli uruchomisz z komendą `--advanced`):** Tutaj sytuacja się zmienia! Jeśli skonfigurujesz grę do korzystania z usług w chmurze (takich jak Google Gemini lub OpenAI), ciężka praca jest wykonywana na ich serwerach, a nie na Twoim. W tym trybie gra działa płynnie na praktycznie każdym sprzęcie, ponieważ Twoja karta graficzna odpoczywa.

## Zarządzanie oczekiwaniami
Jeśli oczekiwałeś dopracowanej superprodukcji AAA, obawiam się, że jesteś w złym miejscu (na razie). Gra jest na wczesnym etapie, i szczerze mówiąc, tylko odważni, którzy rozumieją i wspierają tego typu eksperymentalne projekty, mają cierpliwość, aby cieszyć się nią teraz.

## Gwarancja satysfakcji
Jeśli czujesz, że gra jest dla Ciebie za bardzo "surowa" lub Twój sprzęt cierpi zbyt mocno, nikt się nie obrazi, jeśli poprosisz o zwrot. Wręcz przeciwnie, będę zachwycony, mogąc Cię powitać ponownie w przyszłości – i że zapłacisz 40 lub 60 USD, gdy gra będzie dopracowana i ukończona 😉. Obecna cena to prezent za zaufanie mi na tym etapie.

Mając to na uwadze, moja wdzięczność jest nieskończona dla tych, którzy zdecydują się zostać. Wasze raporty i sugestie są prawdziwym motorem napędowym tego projektu. Dzięki Wam gra poprawiła się brutalnie w ciągu kilku tygodni.

**RolemIAster jest budowany na miarę dla Was.**

*Dziękuję za cierpliwość, wsparcie i niech krytycy będą po Waszej stronie!*


*********************************************************************************
🚧 STREFA ROBÓT: "LOBOTOMIUJĘ" AI (DLA JEJ DOBRA) 🧠🔧
Nad czym pracuję?
Zmieniam silnik gry i to nie jest drobnostka.
Do tej pory, za każdym razem, gdy grasz turę, system wysyła do AI "tomisko" zasad o objętości 15 000 do 20 000 tokenów. W zasadzie jest to jak zmuszanie Mistrza Gry do przeczytania całego podręcznika przed każdym zdaniem. 📚🥵

Problem:
Z tak dużą ilością danych na raz, AI czasami "upija się" kontekstem. Mylą się jej rzeczy, wymyśla języki, niszczy przedmioty lub po prostu ma halucynacje (słynne delirium). To cyfrowy odpowiednik "niebieskiego ekranu śmierci", ale narracyjny.

Rozwiązanie: Ścisła dieta! 🥗
Przeuczam model osobiście (domowe Fine-Tuning), aby nauczył się zasad na pamięć.

Plan: Sprawić, aby AI wiedziała, jak grać, bez konieczności czytania podręcznika za każdym razem.

Cel: Zmniejszenie zużycia z 20 000 do zaledwie 5 000 tokenów na turę.

Wynik: Brutalnie wyższa prędkość i znacznie bardziej skoncentrowane (i trzeźwe) AI. 🚀

Uwaga dotycząca rzeczywistości (Wyłączenie odpowiedzialności 🧐):
To jest praca inżynieryjna wymagająca potrójnego salta: trenowanie, testowanie i zabezpieczanie. I bądźmy szczerzy: jeśli nawet giganci z Doliny Krzemowej (Gemini, ChatGPT...) czasami widzą różowe słonie, mój lokalny model nie będzie w 100% doskonały przez cały czas. Ale celem jest, aby przeszedł od bycia "pijanym wujkiem na weselu" do kompetentnego Mistrza Gry Fabularnej.

Dziękuję za cierpliwość podczas dokręcania śrubek! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->