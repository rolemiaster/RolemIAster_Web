# 📢 Message du Développeur (Accès Anticipé)

Bienvenue sur RolemIAster. Avant de plonger dans votre prochaine grande aventure, je veux vous voler une minute pour éclaircir quelques points (promis, je serai bref, les dés vous attendent).

Ce jeu est en phase d'**Accès Anticipé (Early Access)**.
Je suis un développeur solitaire — oui, juste moi, mon clavier et des litres de café — ce qui signifie que je fais de mon mieux, mais parfois je n'y arrive pas à temps pour tout. Je m'excuse d'avance si je tarde à corriger un bug récalcitrant, à implémenter cette fonctionnalité que vous attendez avec impatience, ou à répondre immédiatement sur Discord. Je jongle, mais je n'ai pas encore développé de tentacules supplémentaires.

## ⚠️ Avis Important sur le Matériel (Local vs Cloud)
Il existe deux façons de jouer, et votre expérience dépendra de celle que vous choisirez :

*   **Mode Local (Gratuit, Privé) :** Si vous souhaitez exécuter l'IA sur votre propre PC, les exigences de la boutique (8 Go de VRAM minimum) sont sacrées pour bien démarrer. Moins que cela, et l'IA traînera ou bloquera votre machine. C'est de la pure mathématique, pas de la magie, bien qu'avec Turbo Quant, cela puisse changer pour le mieux.
*   **Mode Cloud (API Gemini, GPT, etc. uniquement si vous démarrez avec la commande `--advanced`) :** Ici, le film change ! Si vous configurez le jeu pour utiliser des services cloud (comme Google Gemini ou OpenAI), le gros du travail est effectué sur leurs serveurs, pas sur le vôtre. Dans ce mode, le jeu fonctionne de manière fluide sur pratiquement n'importe quel appareil, car votre carte graphique se repose.

## Gestion des Attentes
Si vous vous attendiez à une superproduction AAA sans défauts, j'ai bien peur que vous soyez au mauvais endroit (pour l'instant). Le jeu est dans une phase précoce, et honnêtement, seuls les plus courageux qui comprennent et soutiennent ce type de projets expérimentaux auront la patience d'en profiter dès maintenant.

## Garantie de Satisfaction
Si vous avez l'impression que le jeu est trop vert pour vous ou que votre matériel souffre trop, personne ne vous en voudra si vous demandez un remboursement. Au contraire, je serai ravi de vous accueillir de nouveau à l'avenir — et que vous payiez 40 ou 60 USD lorsque le jeu sera peaufiné et terminé 😉—. Le prix actuel est un cadeau pour votre confiance à ce stade.

Cela dit, ma gratitude est infinie pour ceux qui décident de rester. Vos rapports et suggestions sont le véritable moteur de ce projet. Grâce à vous, le jeu s'est considérablement amélioré en quelques semaines.

**RolemIAster se construit sur mesure pour vous.**

*Merci pour votre patience, votre soutien et que les critiques soient de votre côté !*


*********************************************************************************
# 📢 MISE À JOUR VERS QWEN 3.5 + TURBO QUANT ! NOUVEAU MOTEUR, NOUVELLE TECHNOLOGIE, NOUVELLE ÈRE 🚀
*********************************************************************************

🚧 ZONE DE TRAVAUX : LOBOTOMIE TERMINÉE (ET ELLE FONCTIONNE) 🧠🔧
Sur quoi je travaille ?
Je suis en train de changer le moteur du jeu, et ce n'est pas une mince affaire.
Jusqu'à présent, chaque fois que vous jouiez un tour, le système envoyait à l'IA un "gros pavé" de règles de 15 000 à 20 000 tokens. En gros, c'était comme obliger le maître de jeu à relire tout le manuel avant chaque phrase. 📚🥵
J'ai implémenté deux technologies qui travaillent en équipe :

1. 🧠 **TurboQuant — La mémoire compressée**
   - J'ai intégré une technologie de Google (présentée à l'ICLR 2026) qui compresse la mémoire de l'IA à près d'un tiers de sa taille d'origine.
   - Si vous avez une RTX des séries 3000, 4000 ou 5000, le jeu en profitera automatiquement.
   - ⚠️ **NOTE IMPORTANTE SUR LES GPU AMD :** BIEN QU'IL Y AIT DES INDICATIONS DE FONCTIONNEMENT DE TURBO QUANT SUR LES CARTES AMD/INTEL (VULKAN), EN PRATIQUE, CELA CAUSE BEAUCOUP D'ERREURS ET PAR CONSÉQUENT, POUR L'INSTANT, IL NE SERA PAS IMPLÉMENTÉ. NOUS ESPÉRONS QUE LA COMMUNAUTÉ FERA SON PROPRE TRAVAIL ET QUE NOUS AURONS DES NOUVELLES BIENTÔT.
   - **Résultat :** L'IA se souvient de plus en utilisant moins de VRAM. C'est de la pure magie numérique. ✨

2. 📖 **Contexte massif (+200%)**
   - J'ai réécrit le calcul de la mémoire conversationnelle de manière chirurgicale : le jeu lit désormais les spécifications techniques de chaque modèle et calcule avec précision ce qui rentre sur votre GPU.
   - Le modèle 9B passe de se souvenir d'environ 36 000 mots à plus de 110 000 mots sur un GPU avec 16 Go de VRAM. 🚀
   - De plus, j'ai augmenté la limite de réponse de 4 096 à 8 192 tokens : des narrations plus longues sans coupures en plein milieu d'une phrase.

Le résultat final : Une vitesse accrue dans la plupart des cas, des parties longues qui ne perdent pas le fil, et une IA beaucoup plus concentrée (et sobre). 🎯

Note de Réalité (Avis de non-responsabilité 🧐) :
Si même les géants de la Silicon Valley (Gemini, ChatGPT...) voient parfois des éléphants roses, mon modèle local ne sera pas parfait à 100 % du temps. Mais ce n'est plus le "type bourré à la fête" — c'est maintenant un Maître de Jeu compétent avec la mémoire d'un véritable éléphant. 🐘

Merci pour votre patience pendant que j'ajustais les rouages ! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->