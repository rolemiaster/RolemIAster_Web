# 🐉 Bienvenue sur RolemIAster !

Attrapez vos dés (ou votre souris) et préparez-vous à vivre des aventures où la seule limite est la folie de votre imagination ! **RolemIAster** est un jeu de rôle infini propulsé par l'Intelligence Artificielle qui vous permet d'être le héros (ou le méchant) de vos propres histoires.

---

## ⚠️ AVERTISSEMENT LÉGAL (La partie ennuyeuse mais nécessaire)

**LISEZ-MOI OU VOUS SUBIREZ LA COLÈRE DES DÉS :**

1.  **🤖 IA Locale Intégrée :** RolemIAster apporte son propre cerveau numérique. Il fonctionne **sans internet** et sans que vous ayez à toucher à quoi que ce soit de bizarre. Installez et jouez !
2.  **☁️ Cloud Optionnel :** Si vous préférez dépenser votre argent en IA externes (OpenAI, Gemini...), c'est votre affaire. Les coûts sont à votre charge.
3.  **🎲 Chaos Génératif :** L'IA invente l'histoire au fur et à mesure. Si le narrateur devient fou et dit qu'il pleut des vaches, ne nous regardez pas. Le développeur n'est pas responsable des folies que le modèle génère.
4.  **🏗️ Accès Anticipé :** Ceci est en construction. Si vous trouvez un bug, ce n'est pas un défaut, c'est une "fonctionnalité" surprise ! (Envoyez-nous du feedback, s'il vous plaît, cela nous aide beaucoup).

---

## 🖥️ CONFIGURATIONS SYSTÈME ET CERVEAUX NUMÉRIQUES (IA)

RolemIAster fonctionne avec une **Intelligence Artificielle Locale**. Cela signifie que votre PC fera le travail difficile de réfléchir. Vous n'avez pas besoin d'internet, mais vous avez besoin d'une carte graphique qui n'est pas de l'époque des dinosaures. (Note : S'il fait froid dans votre chambre, ce jeu fonctionne comme un chauffage gratuit).

### ⚙️ Concepts pour les non-initiés

La **VRAM (Mémoire Vidéo)** est l'essence de l'IA.
*   RolemIAster a besoin de "se souvenir" de **12 000 à 16 000 mots (tokens)** pour ne pas perdre le fil de l'histoire.
*   Si votre GPU manque de mémoire, le jeu sera plus lent qu'un escargot asthmatique.

---

### 📊 CATALOGUE DE MODÈLES (Choisissez votre poison)

Gérez vos IA dans **Configuration → IA Locale Intégrée → Gérer les Modèles**.

#### 🏆 Famille Qwen 2.5 (La crème de la crème)

| Modèle          | Taille    | VRAM Minimale | Niveau | Verdict                                                                                                     |
|-----------------|-----------|---------------|--------|-------------------------------------------------------------------------------------------------------------|
| **Qwen2.5-3B**  | ~2.5 Go   | **8 Go**      | B      | 👶 **Le Stagiaire.** Il fait le boulot, mais ne lui demandez pas d'écrire Shakespeare. Il s'embrouille parfois. |
| **Qwen2.5-7B**  | ~5.5 Go   | **12 Go**     | A      | ✅ **L'ÉLU.** Équilibré, intelligent et rapide. C'est le modèle recommandé par défaut.                       |
| **Qwen2.5-14B** | ~10 Go    | **16 Go**     | S      | 🧐 **Le Professeur.** Narration riche, profonde et dialogues très naturels.                                  |
| **Qwen2.5-32B** | ~22 Go    | **32 Go**     | S+     | 👑 **Niveau Dieu.** Il faut un vaisseau spatial (RTX 3090/4090) pour le faire tourner.                      |

---

### 🎮 GUIDE DE CHOIX RAPIDE

| Votre Carte Graphique | VRAM     | Modèle Recommandé | Résultat                               |
|-----------------------|----------|-------------------|----------------------------------------|
| GTX 1050/1060         | 4 Go     | Qwen2.5-3B        | 🆗 Juste mais jouable (Contexte bas)   |
| GTX 1070/1660         | 6 Go     | Qwen2.5-3B        | 🆗 Ça tourne bien                      |
| RTX 2060/3060         | 8 Go     | Qwen2.5-3B        | 🚀 Ça décolle                           |
| RTX 3070/4060Ti       | 12 Go    | **Qwen2.5-7B**    | ✅ L'expérience idéale                  |
| RTX 3090/4080         | 16-24 Go | Qwen2.5-14B       | 🌟 Le grand luxe                        |
| RTX 4090              | 24 Go    | Qwen2.5-32B       | 👑 Qualité maximale                     |

**💡 Astuce Pro :** Laissez toujours environ **2 Go de VRAM libres** pour le système d'exploitation, sinon Windows commencera à pleurer et à fermer des choses.

---

### 🚨 AU SECOURS ! MON PC EST LENT ! (Problèmes de VRAM)

Si le jeu prend plus de temps à répondre que votre crush sur WhatsApp, vous avez probablement manqué de VRAM.

**Symptômes d'un excès d'ambition :**
1.  **Le modèle se déverse dans la RAM :** Le PC utilise la mémoire normale au lieu de la mémoire graphique. Résultat : EXTRÊME LENTEUR.
2.  **Dépassement léger (1-2 Go) :** Comptez 30-60 secondes par réponse.
3.  **Dépassement modéré (3-5 Go) :** 2-5 minutes. Vous pouvez aller prendre un café.
4.  **Dépassement sévère :** 10-30 minutes. Injouable.

#### 🛡️ Protocole d'Urgence
Si ça va mal, suivez ces étapes dans l'ordre :

1.  **📉 Baissez le % de VRAM :** Allez dans Configuration et baissez-le à **85%**. Redémarrez et essayez.
2.  **🧹 Nettoyage :** Fermez ce navigateur avec 40 onglets ouverts. Ils mangent votre mémoire.
3.  **🛑 La Limite de 70% :** Ne descendez jamais en dessous de **70%** de VRAM allouée.
    *   *Pourquoi ?* Parce que l'IA a besoin d'espace pour "réfléchir" (la mémoire cache KV). Si vous lui donnez moins de 70%, elle deviendra vide et donnera une erreur.
4.  **🔙 Retraite Tactique :** Si rien ne fonctionne, revenez à un modèle plus petit (passez du 7B au 3B).

---

### ⚙️ CONFIGURATION AVANCÉE DU MODÈLE

Pour ceux qui aiment tripoter les boutons dans **Configuration → IA Locale Intégrée** :

| Option            | Fonction                                                                                              | Recommandation                                                                                   |
|-------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **GPU Layers**    | Quelle partie du modèle est chargée sur la carte graphique                                            | **-1** (Signifie "TOUT". Ne touchez pas sauf si vous savez ce que vous faites)                    |
| **Contexte Max**  | La "mémoire à court terme" de l'IA                                                                    | **16384 - 32768** (Moins que cela et l'IA aura de l'amnésie)                                      |
| **Température**   | Créativité vs Folie                                                                                   | **0.7 - 0.8** (Plus haut = plus folle ; Plus bas = plus robotique)                                |
| **RAG Historique**| Se souvenir de choses d'il y a longtemps                                                              | **Oui** (Indispensable pour les campagnes longues)                                               |
| **Mise en Cache des Embeddings** | Accélère la recherche de souvenirs                                                    | **Oui** (Permet d'aller plus vite)                                                               |

---

### 🔧 SOLUTION DE PROBLÈMES (Troubleshooting)

| Problème        | Solution                                                                                           |
|-----------------|----------------------------------------------------------------------------------------------------|
| **IA Lente / Lag** | Vérifiez que `GPU Layers` est à -1. Fermez Chrome. Réduisez le `Contexte Max`.                      |
| **Erreur de Mémoire (OOM)** | Réduisez le `Contexte Max` ou choisissez un modèle plus petit (3B).                              |
| **L'IA délire / Alucine** | Baissez la `Température` à 0.6. Si elle continue à délirer, redémarrez l'application.             |

---

### 🌐 FOURNISSEURS ALTERNATIFS (Experts seulement)

> **Note :** L'IA locale fournie avec le jeu est amplement suffisante. Ceci est réservé aux utilisateurs avancés ou courageux.

*   **Moteurs Locaux Externes :**
    *   **Ollama / LM Studio :** Si vous avez déjà vos propres modèles otaku, vous pouvez les utiliser.
*   **APIs Cloud (Payantes) :**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek :** Nécessite internet et de dépenser de l'argent.
    *   Configurez-le dans : **Configuration → IA → Ajouter un Nouveau Fournisseur**.

---

## 🎲 COMMENT JOUER ?

En ouvrant le jeu, vous avez deux chemins :

1.  **🆕 Nouvelle Aventure :** Créez votre légende à partir de zéro. Le jeu vous guidera pour choisir la race, la classe, le monde et la prémisse. (Si la vie vous donne des citrons... ou un 3 en Force, devenez Barde).
2.  **💾 Charger Partie :** Continuez là où vous vous étiez arrêté avant cette mort humiliante. (Ou pour corriger cette "petite erreur de calcul" avec le dragon).

### L'Interface (Votre cockpit)

*   **Panneau Gauche (VOUS) :** Votre Fiche de Personnage. Vie, mana, compétences et à quel point vous êtes beau (Charisme).
*   **Panneau Central (L'HISTOIRE) :**
    *   **En haut :** Où le narrateur raconte ce qui se passe.
    *   **En bas :** Vos boutons de décision et la zone de texte pour écrire ce que vous voulez faire.
*   **Panneau Droit (VOS AFFAIRES) :** Inventaire et équipement. Le paradis du Diogène numérique.

---

## 📜 RÈGLES DU JEU (Oui, il y a des règles)

RolemIAster utilise un système d100 (dé à cent faces) classique et robuste.

### 1. Vos Attributs (Ce qui vous définit)
Ils sont générés aléatoirement, comme dans le jeu de rôle sur table de toute la vie !

*   💪 **Force (FOR) :** Pour frapper fort et soulever des pierres.
*   ❤️ **Constitution (CON) :** Pour encaisser les coups, les maladies et les poisons.
*   🐘 **Taille (TAI) :** Grand et lourd, ou petit et agile.
*   🏃 **Dextérité (DEX) :** Agilité, précision et ne pas trébucher sur vos propres pieds.
*   🧠 **Intelligence (INT) :** Apprendre, se souvenir et résoudre des énigmes.
*   🔮 **Pouvoir (POU) :** Votre âme, votre chance, votre volonté et votre magie.
*   😎 **Charisme (CHA) :** Leadership, attrait et capacité à tromper les gens.

### 2. Mathématiques Rapides (Caractéristiques dérivées)
*   **Vie (PV) :** `(CON + TAI) / 2`. Si elle arrive à 0... eh bien, vous savez. D.
*   **Mana (PM) :** Égal à votre POU. Sans mana, pas de tours de magie. (Un mage sans mana n'est qu'un type en robe faisant du cosplay).
*   **Points d'Action (PA) :** `(INT + DEX) / 2`. Détermine votre Initiative. Qui frappe le premier, frappe deux fois.

### 3. Vos Compétences
Elles commencent avec une valeur de base (ex: Discrétion = DEX + INT) et s'améliorent en les utilisant. C'est un pourcentage (%).

### 4. Résolution des Actions (Le Dé)
Lorsque vous tentez de faire quelque chose de risqué (escalader, mentir, attaquer...), l'IA vous demandera un jet de dés.
Le jeu lance un **d100** invisible. **(Rappelez-vous : Les dés vous détestent. C'est personnel).**

*   **Votre Objectif :** Obtenir **MOINS OU ÉGAL** à votre compétence.
    *   *Exemple :* Vous avez 45% en Escalade.
    *   Vous obtenez un 30 : ✅ **Succès**. Vous montez comme un singe.
    *   Vous obtenez un 80 : ❌ **Échec**. Vous vous étalez de tout votre long.
    *   Vous obtenez un 01-05 : ✨ **CRITIQUE !** Vous faites un parkour épique avec une roulade.
    *   Vous obtenez un 99-100 : 💀 **GAFFE !** Vos pantalons tombent à mi-chemin et vous vous écrasez la figure.

---

## 💡 CONSEILS POUR NE PAS MOURIR (RAPIDEMENT)

*   **✍️ Soyez Descriptif :** N'écrivez pas juste "j'attaque". Écrivez : *"J'essaie d'esquiver sa hache en roulant sur le sol et je lui plante ma dague dans la cheville."* L'IA vous récompensera.
*   **🧪 Expérimentez :** Vous n'êtes pas limité aux boutons. Écrivez des folies ! L'IA improvisera.
*   **🎭 Jouez le rôle :** Mettez-vous dans la peau de votre personnage. Lisez les descriptions et agissez comme votre personnage le ferait, pas comme vous le feriez en pyjama.

---

## ⚔️ LE COMBAT (Aux armes !)

Quand les mots échouent, vient l'heure des baffes. Le combat est **tactique** et fonctionne par **Ticks** (temps).

### 🕹️ Comment ça marche :
*   **Ticks :** Chaque action coûte du temps. Les armes lourdes sont lentes (dépensent beaucoup de ticks). Les dagues sont rapides.
*   **Votre Vitesse :** Dépend de vos Points d'Action (PA).

### Actions de Base :
*   **🗡️ Attaquer :** Frappez avec ce que vous avez dégainé.
*   **🛡️ Bloquer :** Vous vous mettez sur la défensive. Réduit les dégâts mais consomme de l'endurance.
*   **🏃 Fuir :** Pour les lâches (ou les sages qui veulent vivre).
*   **🏳️ Se rendre :** Si vous voyez que vous ne gagnez pas, vous pouvez supplier pitié.
*   **✨ Magie / Cyberware :** Feu, lasers, piratages...

### ⚠️ RÈGLE D'OR DE SURVIE
**¡ DÉGAINEZ AVANT DE VOUS BATTRE !**
Sortir son arme au milieu du combat consomme du temps (Ticks). Si vous êtes surpris avec l'épée au fourreau, on va vous frapper jusqu'à la carte d'identité pendant que vous essayez maladroitement de la sortir. OU PIRE ENCORE !, SI VOUS AVEZ VOS ARMES DANS VOTRE SAC AU LIEU DE VOTRE EMPLACEMENT D'ÉQUIPEMENT (Excusez-moi une seconde, je dois sortir la super épée de mon sac, je sais que je l'avais par ici... quelque part...) 🤦‍♂️
👉 Cliquez sur l'étiquette de l'arme équipée (panneau droit) pour la dégainer. Elle s'illuminera en vert.

Essayer de déplacer des armes en combat consomme du temps (Ticks) et peut entraîner une attaque surprise, en plus il est très probable que vous perdiez votre tour, que vous échouiez par nervosité face à la hache qui s'approche de votre sourcil ou que vous la laissiez tomber par terre. (Peut-être que ce n'était pas une bonne idée de créer un personnage atteint de TDAH)

---

## ✨ MAGIE ET CYBERNÉTIQUE

Selon que votre monde soit de "Fantasy médiévale" ou "Cyberpunk" :

### 🧙‍♂️ Fantaisie : Enchantements
Vous êtes un sorcier ? Vous pouvez enchanter votre équipement.
1.  **Apprendre :** Vous avez besoin du sort dans votre grimoire.
2.  **Lancer (Glisser-Déposer) :** Faites glisser le sort depuis votre liste sur l'objet de votre inventaire.
3.  **Coût :** Maintenir un enchantement actif **consomme du Mana par tour**.
4.  **Avertissement :** Si vous tombez à sec de mana en plein combat, l'épée de feu redevient un morceau de fer rouillé.

### 🦾 Cyberpunk : Implants
Vous voulez des yeux avec zoom ou des bras de gorille ?
1.  Cherchez un **Techno-Chirurgien** (PNJ de service).
2.  Payez les crédits (rien n'est gratuit dans le futur).
3.  **Coût d'Humanité :** Chaque implant vous coûte un morceau d'âme (**Humanité**).
    *   Si vous en mettez trop, vous vous transformerez en **Cyberpsychose** (une cafetière sur pattes tueuse) et perdrez le contrôle de votre personnage.

---

## 🛒 BOUTIQUES ET SERVICES

Parlez aux PNJ pour commercer.
*   **Négociation :** Votre compétence de **Commerce** (basée sur le Charisme) détermine les prix. Si vous êtes laid ou antipathique, on vous arnaquera.
*   **Vendre :** Faites un **Clic Droit** sur un objet de votre inventaire pour le vendre au commerçant.

---

## 🎒 GESTION D'INVENTAIRE (Tetris)

*   **Poids :** Vous avez une limite de charge (Force + Taille). Si vous transportez trop de ferraille, vous irez lentement et serez pénalisé (Diogène n'est pas votre ami).
*   **Panneaux :**
    *   **Équipement :** Ce que vous portez.
    *   **Ceinture :** Accès rapide en combat (utiliser des potions d'ici coûte moins de temps).
    *   **Sac à Dos :** Le fond du sac.
*   **Utilisation Rapide :** Faites glisser une potion ou de la nourriture directement sur **votre visage** (le portrait) pour la consommer instantanément.

---

## 🛠️ RÉGLAGES FINAUX

Dans le menu **Configuration**, vous pouvez tout ajuster :
*   **🌍 Langue :** L'IA vous traduira tout le jeu et les réponses à la volée.
*   **👁️ Apparence :** Taille des polices et couleurs, pour ne pas devenir aveugle.
*   **🧠 Réglages IA :** Changez de modèle, de température, etc.

---

## 🚧 Avis : Accès Anticipé

RolemIAster est en **développement actif**, mijotant lentement.
*   Vous pouvez trouver des bugs (ou "fonctionnalités inattendues").
*   J'ajoute de nouvelles choses chaque semaine.
*   Vos retours valent de l'or ! Dites-moi ce que vous aimez et ce que vous aimez beaucoup.

Maintenant, allez-y, lancez l'initiative et créez votre légende !

<!-- source_hash: 2511f352 -->