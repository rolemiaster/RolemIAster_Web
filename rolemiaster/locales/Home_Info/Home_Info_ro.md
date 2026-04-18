# 📢 Mesaje de la Dezvoltator (Acces Timpuriu)

Bun venit la RolemIAster. Înainte de a te scufunda în următoarea ta mare aventură, vreau să-ți fur un minut pentru a clarifica câteva lucruri (promit să fiu scurt, că zarurile te așteaptă).

Acest joc este în faza de **Acces Timpuriu (Early Access)**.
Sunt un dezvoltator singuratic —da, doar eu, tastatura mea și litri de cafea—, ceea ce înseamnă că fac tot ce pot, dar uneori nu ajung la timp la tot. Îmi cer scuze dinainte dacă durează să repar un bug evaziv, să implementez acea funcție pe care o dorești atât de mult, sau să răspund imediat pe Discord. Fac jonglerii, dar încă nu am făcut tentacule suplimentare.

## ⚠️ Notificare Importantă despre Hardware (Local vs Cloud)
Există două moduri de a juca, iar experiența ta depinde de alegerea pe care o faci:

*   **Mod Local (Gratuit, Privat):** Dacă vrei să rulezi IA pe propriul tău PC, cerințele magazinului (Minim 8GB VRAM) sunt sacre pentru a începe cu dreptul. Mai puțin de atât și IA se va mișca lent sau îți va bloca computerul. Este pură matematică, nu magie, deși acum cu Turbo Quant, acest lucru se poate schimba în bine.
*   **Mod Cloud (API Gemini, GPT, etc. doar dacă începi cu comanda `--advanced`):** Aici se schimbă situația! Dacă configurezi jocul pentru a utiliza servicii cloud (cum ar fi Google Gemini sau OpenAI), munca grea se face pe serverele lor, nu pe al tău. În acest mod, jocul funcționează fluid pe practic orice computer, deoarece placa ta grafică se odihnește.

## Gestionarea Așteptărilor
Dacă ai venit așteptând o superproducție AAA impecabilă, mi-e teamă că ești în locul greșit (deocamdată). Jocul se află într-o etapă incipientă și, sincer, doar cei curajoși care înțeleg și susțin astfel de proiecte experimentale au răbdarea să se bucure de el chiar acum.

## Garanția Satisfacției
Dacă simți că jocul este prea crud pentru tine sau hardware-ul tău suferă prea mult, nimeni nu se va supăra dacă ceri o rambursare. Dimpotrivă, voi fi încântat să te primesc înapoi în viitor —și să plătești 40 sau 60 USD când jocul va fi finisat și completat 😉—. Prețul actual este un cadou pentru încrederea pe care mi-o acorzi în această etapă.

Acestea fiind spuse, recunoștința mea este infinită pentru cei care decid să rămână. Rapoartele și sugestiile voastre sunt motorul real al acestui proiect. Datorită vouă, jocul s-a îmbunătățit enorm în câteva săptămâni.

**RolemIAster se construiește pe măsură pentru voi.**

*Mulțumesc pentru răbdare, suport și fie criticii de partea voastră!*


*********************************************************************************
# 📢 ACTUALIZĂM LA QWEN 3.5 + TURBO QUANT! MOTOR NOU, TEHNOLOGIE NOUĂ, ERA NOUĂ 🚀
*********************************************************************************

🚧 ZONA DE LUCRU: LOBOTOMIE FINALIZATĂ (ȘI FUNCȚIONEAZĂ) 🧠🔧
La ce lucrez?
Schimb motorul jocului și nu este o treabă ușoară.
Până acum, de fiecare dată când jucai un tur, sistemul îi trimitea IA-ului un "bloc" de reguli de 15.000 până la 20.000 de tokeni. Practic, era ca și cum ai fi obligat maestrul să citească întregul manual înainte de fiecare frază. 📚🥵
Am implementat două tehnologii care lucrează împreună:

1. 🧠 **TurboQuant — Memoria comprimată**
   - Am integrat o tehnologie de la Google (prezentată la ICLR 2026) care comprimă memoria IA-ului la aproape o treime din dimensiunea sa originală.
   - Dacă ai o placă RTX din seriile 3000, 4000 sau 5000, jocul o va utiliza automat.
   - ⚠️ **NOTĂ IMPORTANTĂ PRIVIND GPU-urile AMD:** DEȘI EXISTĂ INDICAȚII CĂ TURBO QUANT FUNCȚIONEAZĂ PE PLĂCII AMD/INTEL (VULKAN), ÎN PRACTICĂ GENEREAZĂ MULTE ERORI ȘI, PRIN URMARE, DEocamDATĂ NU VA FI IMPLEMENTAT. SPERĂM CĂ COMUNITATEA VA FACE PROPRII LUCRĂRI ȘI VOM AVEA CURÂND NOI INFORMAȚII.
   - **Rezultat:** IA își amintește mai mult, consumând mai puțin VRAM. Este pură magie digitală. ✨

2. 📖 **Context masiv (+200%)**
   - Am rescris calculul memoriei conversaționale chirurgical: acum jocul citește specificațiile tehnice ale fiecărui model și calculează cu precizie cât încape pe GPU-ul tău.
   - Modelul de 9B trece de la a-și aminti ~36.000 de cuvinte la peste ~110.000 pe un GPU cu 16GB VRAM. 🚀
   - În plus, am crescut limita de răspuns de la 4.096 la 8.192 de tokeni: narațiuni mai lungi, fără întreruperi la jumătatea frazei.

Rezultatul final: O viteză superioară în majoritatea cazurilor, partide lungi care nu pierd firul, și o IA mult mai concentrată (și sobrie). 🎯

Notă de Realitate (Disclaimer 🧐):
Dacă până și giganții din Silicon Valley (Gemini, ChatGPT...) văd uneori elefanți roz, modelul meu local nu va fi perfect 100% din timp. Dar nu mai este "unchiul beat de la nuntă" — acum este un Maestru de Rol competent, cu memoria unui elefant adevărat. 🐘

Mulțumesc pentru răbdare în timp ce ajustam șuruburile! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->