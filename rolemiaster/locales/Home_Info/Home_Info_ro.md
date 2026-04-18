# 📢 Mesaje de la Dezvoltator (Acces Anticipat)

Bun venit la RolemIAster. Înainte să te arunci în următoarea ta mare aventură, vreau să-ți fur un minut pentru a clarifica câteva lucruri (promit să fiu scurt, zarurile te așteaptă).

Acest joc este în fază de **Acces Anticipat (Early Access)**.
Sunt un dezvoltator singuratic — da, doar eu, tastatura mea și litri de cafea — ceea ce înseamnă că fac tot ce pot, dar uneori nu ajung la timp la tot. Mă scuz în avans dacă durează să repar un bug evaziv, să implementez acea funcție pe care o dorești atât de mult, sau să răspund imediat pe Discord. Fac jonglerii, dar încă nu mi-au crescut tentacule suplimentare.

## ⚠️ Notificare Importantă despre Hardware (Local vs Cloud)
Există două moduri de a juca, iar experiența ta depinde de alegerea pe care o faci:

*   **Mod Local (Gratuit, Privat):** Dacă vrei să rulezi AI-ul pe propriul tău PC, cerințele magazinului (minim 12GB VRAM) sunt sacrosante. Mai puțin de atât și AI-ul se va târî sau îți va bloca computerul. Este pură matematică, nu magie.
*   **Mod Cloud (API Gemini, GPT, etc. doar dacă pornești cu comanda `--advanced`):** Aici se schimbă filmul! Dacă configurezi jocul să folosească servicii cloud (cum ar fi Google Gemini sau OpenAI), munca grea se face pe serverele lor, nu pe al tău. În acest mod, jocul rulează fluid pe practic orice computer, deoarece placa ta grafică se odihnește.

## Gestionarea Așteptărilor
Dacă ai venit așteptând o producție AAA fără cusur, mă tem că ai ajuns în locul greșit (deocamdată). Jocul se află într-o etapă timpurie și, sincer, doar cei curajoși care înțeleg și susțin acest tip de proiecte experimentale au răbdarea necesară pentru a se bucura de el acum.

## Garanția Satisfacției
Dacă simți că jocul este prea "verde" pentru tine sau hardware-ul tău suferă prea mult, nimeni nu se va supăra dacă ceri o rambursare. Dimpotrivă, voi fi încântat să te primesc înapoi în viitor — și să plătești 40 sau 60 USD când jocul va fi lustruit și finalizat 😉. Prețul actual este un cadou pentru că ai avut încredere în mine în această etapă.

Acestea fiind spuse, mulțumirile mele sunt infinite pentru cei care decid să rămână. Rapoartele și sugestiile voastre sunt motorul real al acestui proiect. Datorită vouă, jocul s-a îmbunătățit brutal în câteva săptămâni.

**RolemIAster este construit pe măsură pentru voi.**

*Mulțumim pentru răbdare, sprijin și fie ca criticii să fie de partea voastră!*

*********************************************************************************
#  ACTUALIZARE LA QWEN 3.5 + TURBO QUANT! MOTOR NOU, TEHNOLOGIE NOUĂ, ERA NOUĂ 🚀
*********************************************************************************

🚧 ZONĂ DE LUCRĂRI: LOBOTOMIE FINALIZATĂ (ȘI FUNCȚIONEAZĂ) 🧠🔧
La ce lucrez?
Schimb motorul jocului și nu este un lucru ușor.
Până acum, de fiecare dată când jucai o tură, sistemul îi arunca AI-ului un "bloc" de reguli de 15.000 până la 20.000 de tokeni. Practic, era ca și cum ai obliga maestrul să citească manualul întreg înainte de fiecare frază. 📚🥵
Am implementat două tehnologii care lucrează în echipă:

1. 🧠 **TurboQuant — Memoria comprimată**
   - Am integrat o tehnologie de la Google (prezentată la ICLR 2026) care comprimă memoria AI-ului la aproape o treime din dimensiunea originală.
   - Dacă ai o placă RTX din seriile 3000, 4000 sau 5000, jocul o va folosi automat.
   - ⚠️ **NOTĂ IMPORTANTĂ PRIVIND GPU-urile AMD:** DEȘI EXISTĂ INDICAȚII DE FUNCȚIONARE A TURBOQUANT PE PLĂCILE AMD/INTEL (VULKAN), ÎN PRACTICĂ GENEREAZĂ MULTE ERORI ȘI, PRIN URMARE, DEocamDATĂ NU VA FI IMPLEMENTAT. SPERĂM CĂ COMUNITATEA VA FACE PROPRIUL LUCRU ȘI VOM AVEA ÎN CURÂND ȘTIRI.
   - **Rezultat:** AI-ul își amintește mai mult, consumând mai puțin VRAM. Este pură magie digitală. ✨

2. 📖 **Context masiv (+200%)**
   - Am rescris calculul memoriei conversaționale în mod chirurgical: acum jocul citește specificațiile tehnice ale fiecărui model și calculează cu precizie cât încape pe GPU-ul tău.
   - Modelul de 9B trece de la a-și aminti ~36.000 de cuvinte la peste ~110.000 pe un GPU cu 16GB VRAM. 🚀
   - În plus, am mărit limita de răspuns de la 4.096 la 8.192 de tokeni: narațiuni mai lungi, fără întreruperi la jumătatea frazei.

Rezultatul final: O viteză superioară în majoritatea cazurilor, sesiuni de joc lungi care nu pierd firul poveștii, și un AI mult mai concentrat (și sobru). 🎯

Notă de Realitate (Disclaimer 🧐):
Dacă și giganții din Silicon Valley (Gemini, ChatGPT...) văd uneori elefănți roz, modelul meu local nu va fi perfect 100% din timp. Dar nu mai este "tipul beat de la nuntă" — acum este un Maestru de Rol competent, cu memoria unui elefant real. 🐘

Mulțumim pentru răbdare în timp ce ajustam șuruburile! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->