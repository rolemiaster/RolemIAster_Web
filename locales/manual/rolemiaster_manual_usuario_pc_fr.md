# 🐉 Bienvenue dans RolemIAster !

Attrapez vos dés (ou votre souris) et préparez-vous à vivre des aventures où la seule limite est la perversité de votre imagination ! **RolemIAster** est un jeu de rôle infini propulsé par l'Intelligence Artificielle qui vous permet d'être le héros (ou le méchant) de vos propres histoires.

---

## ⚠️ AVERTISSEMENT LÉGAL (La partie ennuyeuse mais nécessaire)

**LISEZ-MOI OU VOUS SUBIREZ LA COLÈRE DES DÉS :**

1.  **🤖 IA Locale Intégrée :** RolemIAster apporte son propre cerveau numérique. Il fonctionne **sans internet** et sans que vous ayez à toucher quoi que ce soit de bizarre. Installez et jouez !
2.  **☁️ Cloud Optionnel :** Si vous préférez dépenser votre argent dans des IA externes (OpenAI, Gemini...), c'est votre affaire avec votre carte de crédit. Les coûts sont à votre charge.
3.  **🎲 Chaos Génératif :** L'IA invente l'histoire au fur et à mesure. Si le narrateur devient fou et dit qu'il pleut des vaches, ne nous regardez pas. Le développeur n'est pas responsable des folies que le modèle génère.
4.  **🏗️ Accès Anticipé :** Ceci est en chantier. Si vous trouvez un bug, ce n'est pas un défaut, c'est une "fonctionnalité" surprise ! (Envoyez-nous vos retours, s'il vous plaît, cela nous aide beaucoup).

---

## 🖥️ CONFIGURATIONS REQUISES ET CERVEAUX NUMÉRIQUES (IA)

RolemIAster fonctionne avec une **Intelligence Artificielle Locale**. Cela signifie que votre PC fera le gros travail de réflexion. Vous n'avez pas besoin d'internet, mais d'une carte graphique qui ne date pas de l'époque des dinosaures. (Note : S'il fait froid dans votre chambre, ce jeu fonctionne comme un chauffage gratuit).

### ⚙️ Concepts pour les non-initiés

La **VRAM (Mémoire Vidéo)** est l'essence de l'IA.
*   RolemIAster a besoin de "se souvenir" de **12 000 à 16 000 mots (tokens)** pour ne pas perdre le fil de l'histoire.
*   Si votre GPU manque de mémoire, le jeu sera plus lent qu'un escargot asthmatique.

---

### 📊 CATALOGUE DE MODÈLES (Choisissez votre poison)

Gérez vos IA dans **Configuration → IA Locale Intégrée → Gérer les Modèles**.

#### 🏆 Famille Qwen 3.5 — Entraînés spécifiquement pour RolemIAster

Ces modèles ont été entraînés avec le **Fine-Tuning Supervisé (SFT)** pour maîtriser les règles narratives du jeu. Ce ne sont pas des modèles génériques : ils connaissent le contrat JSON de RolemIAster, les PNJ, l'inventaire et le combat par cœur.

| Modèle      | Taille    | VRAM Minimum | Tier | Verdict                                                                                |
|-------------|-----------|--------------|------|----------------------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5 Go   | **3 Go**     | B    | ⚡ **Le Vélociste.** Le plus rapide de tous. Idéal pour les GPU basiques ou pour jouer sans GPU dédié. |
| **Qwen3.5-4B** | ~2.8 Go   | **4 Go**     | A    | ✅ **L'ÉQUILIBRÉ.** Vitesse et qualité optimales. Modèle standard recommandé pour la plupart des joueurs. |
| **Qwen3.5-9B** | ~5.5 Go   | **8 Go**     | S    | 🌟 **Le Narrateur.** Narration riche et cohérence supérieure. Pour ceux qui ont une RTX 3070 ou mieux. |

---

### 🎮 GUIDE DE CHOIX RAPIDE

| Votre Carte Graphique | VRAM   | Modèle Recommandé | Résultat                      |
|-----------------------|--------|-------------------|-------------------------------|
| GTX 1050/1060 / Sans GPU | 2-4 Go | **Qwen3.5-2B**    | 🆗 Juste suffisant mais jouable |
| GTX 1070/1660 / RX 580  | 4-6 Go | **Qwen3.5-4B**    | ✅ Très bonne expérience        |
| RTX 2060/3060 / RX 6600 | 6-8 Go | **Qwen3.5-4B**    | 🚀 Rapide et précis           |
| RTX 3070/4060Ti / RX 6700 | 8-12 Go | **Qwen3.5-9B**    | 🌟 L'expérience idéale        |
| RTX 3090/4080/4090    | 16 Go+ | **Qwen3.5-9B**    | 👑 Qualité maximale, réponses ultra-rapides |

**💡 Astuce Pro :** Laissez toujours environ **2 Go de VRAM libres** pour le système d'exploitation, sinon Windows commencera à pleurer et à fermer des choses.

---

### 🚨 AU SECOURS ! MON PC EST LENT ! (Problèmes de VRAM)

Si le jeu met plus de temps à répondre que votre crush sur WhatsApp, vous avez probablement manqué de VRAM.

**Symptômes que vous en avez trop demandé :**
1.  **Le modèle se déverse dans la RAM :** Le PC utilise la mémoire normale au lieu de la mémoire graphique. Résultat : LENTEUR EXTRÊME.
2.  **Dépassement léger (1-2 Go) :** 30-60 secondes par réponse.
3.  **Dépassement modéré (3-5 Go) :** 2-5 minutes. Vous pouvez aller prendre un café.
4.  **Dépassement sévère :** 10-30 minutes. Injouable.

#### 🛡️ Protocole d'Urgence
Si la situation s'aggrave, suivez ces étapes dans l'ordre :

1.  **📉 Réduisez le % de VRAM :** Allez dans Configuration et baissez-le à **85%**. Redémarrez et essayez.
2.  **🧹 Nettoyage :** Fermez ce navigateur avec 40 onglets ouverts. Ils mangent votre mémoire.
3.  **🛑 La Limite des 70% :** Ne descendez jamais en dessous de **70%** de VRAM allouée.
    *   *Pourquoi ?* Parce que l'IA a besoin d'espace pour "penser" (le cache KV). Si vous lui donnez moins de 70%, elle deviendra vide et donnera une erreur.
4.  **🔙 Retraite Tactique :** Si rien ne fonctionne, passez à un modèle plus petit (du 9B au 4B, ou du 4B au 2B).

---

### ⚙️ CONFIGURATION AVANCÉE DU MODÈLE ("Frikage Maximum")

> **MODE EXPERT :** Si vous êtes un pro et que vous souhaitez accéder à la configuration avancée des modèles (ajouter vos propres modèles GGUF téléchargés depuis HuggingFace, toucher aux couches, etc.), vous devez lancer le jeu avec la commande : `--advanced`.

Pour ceux qui aiment tripoter les boutons dans **Configuration → IA Locale Intégrée** :

| Option         | Fonction                                                              | Recommandation                                |
|----------------|-----------------------------------------------------------------------|-----------------------------------------------|
| **GPU Layers** | Quelle part du modèle est chargée sur la carte graphique             | **-1** (Signifie "TOUT". Ne pas toucher sauf si vous savez ce que vous faites) |
| **Contexte Maximum** | La "mémoire à court terme" de l'IA                                     | **16384 - 32768** (Moins que cela et l'IA aura de l'amnésie) |
| **Température**| Créativité vs Folie                                                   | **0.7 - 0.8** (Plus haut = plus fou ; Plus bas = plus robotique) |
| **RAG de l'Historique** | Se souvenir de choses lointaines                                    | **Oui** (Indispensable pour les campagnes longues) |
| **Mettre en Cache les Embeddings** | Accélère la recherche de souvenirs                                | **Oui** (Permet d'aller plus vite)             |

---

### 🔧 SOLUTION DE PROBLÈMES (Troubleshooting)

| Pépin        | Solution                                                              |
|--------------|-----------------------------------------------------------------------|
| **IA Lente / Lag** | Vérifiez que `GPU Layers` est bien -1. Fermez Chrome. Baissez le `Contexto Máximo`. |
| **Erreur de Mémoire (OOM)** | Réduisez le `Contexto Máximo` ou choisissez un modèle plus petit (3B). |
| **L'IA délire / Alucine** | Baissez la `Temperatura` à 0.6. Si elle est toujours folle, redémarrez l'application. |

---

### 🌐 FOURNISSEURS ALTERNATIFS (Experts uniquement)

> **Note :** L'IA locale fournie avec le jeu est suffisante. Ceci est uniquement pour les utilisateurs avancés ou courageux.

*   **Moteurs Locaux Externes :**
    *   **Ollama / LM Studio :** Si vous avez déjà vos propres modèles farfelus, vous pouvez les utiliser.
*   **API Cloud (Payantes) :**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek :** Nécessite internet et de dépenser de l'argent.
    *   Configurez-le dans : **Configuration → IA → Ajouter un Nouveau Fournisseur**.

---

### 🌍 COMMENT JOUER ? (Le Multivers et Vous)

En ouvrant le jeu, vous avez deux chemins :

1.  **🆕 Nouvelle Aventure :** Créez votre légende à partir de zéro. Le jeu vous demandera votre **Nom, Métier (Profession), Description Physique, Description Psychologique et le Contexte/Prétexte** de votre histoire. De plus, vous choisirez le **Niveau de Difficulté** et le **Ton d'Humour** qui guideront la campagne.
2.  **💾 Continuer une Partie :** RolemIAster **sauvegarde en temps réel**. Ici, pas de "charger avant de mourir" ni de retour en arrière. Chaque décision, chaque échec et chaque blessure sont gravés dans l'histoire. C'est un **DÉFI :** ce que vous faites est fait. Vivez avec les conséquences... ou mourrez avec elles.

RolemIAster n'est pas une partie isolée ; c'est un **Multivers Persistant**.
*   **Mondes Infinis :** Créez vos propres univers (**Fantasy Médiévale** ou **Cyberpunk**) avec leur propre Lore.
*   **Personnages Infinis :** Dans chaque monde, vous pouvez avoir tous les héros que vous voulez.
*   **Ligne Temporelle Partagée :** Attention ! Ce qu'un personnage fait affecte le monde des autres. L'IA est consciente de vos autres héros et les reconnaîtra comme des habitants du monde.
*   **IA avec des "Sens" (Super RAG) :** Le système RAG (Retrieval-Augmented Generation) agit comme le "mouchard" de l'IA, lui donnant des souvenirs sur le monde, qui vous accompagne, où vous êtes et ce qui vient de se passer pour que l'histoire soit 100% cohérente.

### L'Interface (Votre poste de pilotage)

*   **Panneau Gauche (VOUS) :** Votre Fiche de Personnage. Vie, mana, compétences et à quel point vous êtes beau (Charisme).
*   **Panneau Central (L'HISTOIRE) :**
    *   **En haut :** Où le narrateur raconte ce qui se passe.
    *   **En bas :** Vos boutons de décision et la boîte de texte pour écrire ce que vous voulez faire.
*   **Panneau Droit (VOS AFFAIRES) :** Inventaire et équipement. Le paradis du Diogène numérique.

---

## 📜 RÈGLES DU JEU (Oui, il y a des règles)

RolemIAster utilise un système d100 (dé à cent faces) classique et robuste.

### 1. Vos Attributs (Ce qui vous définit)
L'IA génère vos attributs en se basant sur le contexte, la profession et la description que vous avez saisis. Une fois générés, vous avez **10 POINTS SUPPLÉMENTAIRES** à répartir à votre guise.
*   **Coûts Échelonnés :** Augmenter un attribut jusqu'à 14 coûte 1 point. De 15 à 16 coûte 2 points. À partir de 17, cela coûte 3 points ! Réfléchissez bien où vous mettez le muscle.

*   💪 **Force (FOR) :** Votre puissance physique pure. Influence les dégâts de corps à corps et votre capacité de port.
*   ❤️ **Constitution (CON) :** Votre résistance. Pour supporter les coups, les maladies et les poisons.
*   🐘 **Taille (TAI) :** Votre envergure. Grand et lourd, ou petit et furtif.
*   🏃 **Dextérité (DEX) :** Agilité, précision et ne pas trébucher sur vos propres pieds.
*   🧠 **Intelligence (INT) :** Apprendre, se souvenir et résoudre des énigmes.
*   🔮 **Pouvoir (POU) :** Votre âme, votre chance, votre volonté et votre réserve magique.
*   😎 **Charisme (CHA) :** Leadership, attirance et capacité à tromper (ou séduire) les gens.

### 2. Mathématiques Rapides (Caractéristiques Dérivées)
Le moteur calcule ces chiffres automatiquement en fonction de vos attributs :

*   🩸 **Vie (PV) :** `CON * 10`. Si cela atteint 0... eh bien, vous savez. F.
*   ✨ **Mana (PM) :** `(POD * 10) + INT`. Le carburant de vos tours de magie. Sans mana, pas de tours. (Un mage sans mana n'est qu'un type en robe qui fait du cosplay).
*   ⚡ **Endurance (END) :** `((CON+FUE+DES)/3)*10 + POD`. Votre énergie pour combattre et bouger sans mourir en essayant.
*   🧠 **Humanité (HUM) :** `(CON+POD) * 5`. (Uniquement en Cyberpunk : Mesure ce qui vous reste d'humain avant que les câbles ne vous rendent fou).
*   ⚔️ **Points d'Action (PA) :** `(INT + DES) / 2`. Détermine votre Initiative. Qui frappe le premier, frappe deux fois.

### 3. Vos Compétences
Elles commencent avec une valeur de base (ex : Discrétion = DEX + INT) et s'améliorent en les utilisant. C'est un pourcentage (%).

### 4. Résolution d'Actions (Le Dé)
Lorsque vous tentez de faire quelque chose de risqué (escalader, mentir, attaquer...), l'IA vous demandera un jet de dés. Le jeu lance un **d100** invisible. **(Rappelez-vous : les dés vous détestent. C'est personnel).**

*   **Votre Objectif :** Obtenir un nombre **INFÉRIEUR OU ÉGAL** à votre niveau de compétence.
    *   *Exemple :* Vous avez 45% en Escalade.
    *   Vous obtenez un 30 : ✅ **Succès**. Vous montez comme un singe.
    *   Vous obtenez un 80 : ❌ **Échec**. Vous vous étalez de tout votre long.
    *   **Critique :** Obtenir moins ou égal à **1/5 de votre compétence** (ou un 01). Épique ! Vous faites un parkour extraordinaire avec salto arrière.
    *   **Gâchis :** Un **99 ou 100**. Les dés ont décidé que ce n'est pas votre jour. Vos pantalons tombent à mi-chemin et vous vous écrasez la tête la première.

---

## 💡 CONSEILS POUR NE PAS MOURIR (RAPIDEMENT)

*   **✍️ Soyez Descriptif :** N'écrivez pas juste "j'attaque". Écrivez : *"J'essaie d'esquiver sa hache en roulant sur le sol et je lui plante ma dague dans la cheville."* L'IA vous récompensera.
*   **🧪 Expérimentez :** Vous n'êtes pas limité aux boutons. Écrivez des folies ! L'IA improvisera.
*   **🎭 Jouez le rôle :** Immergez-vous dans votre personnage. Lisez les descriptions et agissez comme votre personnage le ferait, pas comme vous le feriez en pyjama.

---

## ⚔️ LE COMBAT (Aux armes !)

Quand les mots échouent, c'est l'heure des bastons. Le combat est **tactique** et fonctionne par **Ticks** (temps).

### 🕹️ Comment ça marche :
*   **Ticks :** Chaque action coûte du temps. Les armes lourdes sont lentes (elles consomment beaucoup de ticks). Les dagues sont rapides.
*   **Votre Vitesse :** Dépend de vos Points d'Action (PA).

### Actions de Base :
*   **🗡️ Attaquer :** Frappez avec ce que vous avez dégainé.
*   **🛡️ Bloquer :** Vous vous mettez sur la défensive. Réduit les dégâts mais consomme de l'Endurance.
*   **🏃 Fuir :** Pour les lâches (ou les sages qui veulent vivre).
*   **🏳️ Se rendre :** Si vous voyez que vous ne pouvez pas gagner, vous pouvez supplier pitié.
*   **✨ Magie / Cyberware :** Boules de feu, rayons lasers, hacks...

### 💬 Actions en Texte Libre (NOUVEAU !)
Vous n'aimez pas les boutons ? Écrivez ce que vous voulez faire comme si vous parliez à un Maître de jeu en chair et en os !
*   **Exemples :** *"Lancer une boule de feu sur le gobelin"*, *"Dégainer mon épée runique"*, *"Utiliser une potion sur moi"*.
*   **Metteur en Scène :** Le combat prend maintenant vie. L'IA génère des événements environnementaux et des réactions qui enrichissent la narration : des poutres qui tombent, des ennemis qui reculent, des torches qui s'éteignent. Le champ de bataille n'est plus statique !
*   **Si l'IA ne comprend pas :** Elle vous demandera de reformuler. Votre tour N'EST PAS perdu !
*   **⚠️ Limitation :** Déplacer des objets entre les emplacements (équiper depuis le sac, charger des munitions) se fait avec **Drag & Drop** dans l'interface, pas par texte.

### ⚠️ RÈGLE D'OR DE SURVIE
**DÉGAINEZ AVANT DE COMBATTRE !**
Tirer l'arme au milieu du combat consomme du temps (Ticks). Si vous êtes pris avec votre épée dans le fourreau, vous allez vous prendre des coups en essayant maladroitement de la sortir. OU PIRE !, SI VOUS AVEZ VOS ARMES DANS VOTRE SAC AU LIEU DE DANS LEUR EMPLACEMENT D'ÉQUIPEMENT (Excusez-moi une seconde, je dois sortir le grand sabre du sac, je suis sûr de l'avoir quelque part... quelque part...) 🤦‍♂️
👉 Cliquez sur l'étiquette de l'arme équipée (panneau droit) pour la dégainer. Elle s'allumera en vert.

Essayer de déplacer des armes en combat consomme du temps (Ticks) et peut entraîner une attaque surprise, de plus il est fort probable que vous perdiez votre tour, que vous échouiez à cause des nerfs de la hache qui approche de votre front ou que vous la laissiez tomber par terre. (Peut-être que ce n'était pas une bonne idée de créer un personnage avec un TDAH)

---

## ✨ MAGIE ET CYBERNÉTIQUE

Selon que votre monde soit de "Fantasy Médiévale" ou "Cyberpunk" :

### 🧙‍♂️ Fantasy : Enchantements
Vous êtes un sorcier ? Vous pouvez enchanter votre équipement.
1.  **Apprenez :** Vous avez besoin du sort dans votre grimoire.
2.  **Lancez (Drag & Drop) :** Faites glisser le sort de votre liste sur l'objet dans votre inventaire.
3.  **Coût :** Maintenir un enchantement actif **consomme du Mana par tour**.
4.  **Avertissement :** Si vous êtes à sec de mana au milieu d'un combat, l'épée de feu redevient un morceau de fer rouillé.

### 🦾 Cyberpunk : Implants
Vous voulez des yeux avec zoom ou des bras de gorille ?
1.  Cherchez un **Techno-chirurgien** (PNJ de service).
2.  Payez les crédits (rien n'est gratuit dans le futur).
3.  **Coût d'Humanité :** Chaque implant vous enlève un bout d'âme (**Humanité**).
    *   Si vous en mettez trop, vous deviendrez un **Cyberpsychopathe** (un grille-pain sur pattes tueur) et perdrez le contrôle de votre personnage.

---

## 🛒 BOUTIQUES ET SERVICES (SIS)

Parlez aux PNJ pour commercer.
*   **L'IA Suggère, Vous Décidez :** Lorsque vous parlez à un marchand ou à un guérisseur, l'IA vous suggérera leurs services (réparer, vendre, soigner), mais un bouton **"Voir les Services"** apparaîtra pour que vous décidiez quand entrer en mode transactionnel.
*   **Marchandage :** Votre compétence **Commerce** (basée sur le Charisme) détermine les prix. Si vous êtes laid ou antipathique, on vous arnaquera.
*   **Vendre :** Faites un **Clic Droit** sur un objet de votre inventaire pour le vendre au marchand ou faites-le glisser sur lui.

---

## 🎒 GESTION D'INVENTAIRE (Tetris)

*   **Poids :** Vous avez une limite de charge (Force + Taille). Si vous transportez trop de ferraille, vous irez lentement et serez pénalisé (le Diogène n'est pas votre ami).
*   **Panneaux :**
    *   **Équipement :** Ce que vous portez.
    *   **Ceinture :** Accès rapide en combat (cela coûte moins de temps d'utiliser des potions d'ici).
    *   **Sac à dos :** Le fond du sac.
*   **Utilisation Fluide :** Faites glisser une potion ou de la nourriture directement sur **votre visage** (le portrait) pour la consommer instantanément. Vous pouvez également utiliser le menu contextuel (clic droit -> Utiliser).

---

## 🛠️ RÉGLAGES FINAUX

Dans le menu **Configuration**, vous pouvez tout ajuster :
*   **🌍 Langue :** L'IA vous traduira tout le jeu et les réponses à la volée. Mode polyglotte activé.
*   **👁️ Apparence :** Taille de la police et couleurs, pour ne pas devenir aveugle. Bordures néon et ombres adoucies pour une immersion totale.
*   **🧠 Réglages IA :** Changez de modèle, température, etc. (Souvenez-vous de ce que nous avons vu au début du manuel concernant le flag `--advanced` si vous êtes du genre à vouloir tout toucher).

---

## 🎭 DIFFICULTÉ ET HUMOUR (Personnalisez votre souffrance)

Avant de commencer, rappelez-vous que l'IA ne se contente pas de raconter, elle **ajuste le monde** selon vos préférences. Ces paramètres sont choisis lors de la création du monde et sont permanents pour ce monde :

*   **🎮 Difficulté (Gérée par IA) :** Ce n'est pas un simple multiplicateur de dégâts. Le jeu dit à l'IA : "Hé, la difficulté est celle-ci, agis en conséquence".
    *   **Facile :** Vous ne mourrez jamais (ou ce sera presque impossible), les situations sont plus simples, les prix sont plus bas et les ennemis sont plus maladroits. L'IA raisonnera chaque scène pour que votre chemin soit un parterre de roses.
    *   **Normal :** L'équilibre standard.
    *   **Défi :** L'IA sera implacable, les prix prohibitifs et toute erreur peut être la dernière.

*   **🃏 Ton d'Humour :** Définit comment l'IA vous parle et quel type d'événements se produisent. Bien que chaque modèle ait sa façon d'interpréter le concept "humour", l'IA tentera de s'adapter à ce que vous choisissez... ou pas :
    *   **Sérieux :** Une narration épique, sombre et formelle.
    *   **Sarcasque :** L'IA se moquera de vos erreurs, vous lancera des piques constantes et adoptera un ton ironique.
    *   **Délirant :** Préparez-vous à l'absurde. Vaches volantes, situations surréalistes et chaos total géré par la logique la plus tordue de l'IA.

---

## 🚧 Avertissement : Accès Anticipé

RolemIAster est en **développement actif**, mijotant lentement.
*   Vous pouvez y trouver des bugs (ou "caractéristiques inattendues").
*   J'ajoute de nouvelles choses chaque semaine.
*   Vos retours valent de l'or ! Dites-moi ce que vous aimez et ce que vous aimez beaucoup. (Si vous n'aimez pas quelque chose, dites-le moi aussi, mais avec gentillesse).

Allez maintenant, lancez l'initiative et créez votre légende !

<!-- source_hash: 9af75cff -->