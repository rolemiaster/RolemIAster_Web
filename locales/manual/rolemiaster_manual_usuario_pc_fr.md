# 🐉 Bienvenue dans RolemIAster !

Attrapez vos dés (ou votre souris) et préparez-vous à vivre des aventures où la seule limite est votre imagination tordue ! **RolemIAster** est un jeu de rôle infini propulsé par l'Intelligence Artificielle qui vous permet d'être le héros (ou le méchant) de vos propres histoires.

---

## ⚠️ MENTIONS LÉGALES (La partie ennuyeuse mais nécessaire)

**LISEZ-MOI OU SUBISSEZ LA COLÈRE DES DÉS :**

1.  **🤖 IA Locale Intégrée :** RolemIAster apporte son propre cerveau numérique. Il fonctionne **sans internet** et sans que vous ayez à toucher à des trucs bizarres. Installez et jouez !
2.  **☁️ Nuage Optionnel :** Si vous préférez dépenser vos sous dans des IA externes (OpenAI, Gemini...), c'est votre problème avec votre carte de crédit. Les coûts sont à votre charge.
3.  **🎲 Chaos Génératif :** L'IA invente l'histoire à la volée. Si le narrateur devient fou et dit qu'il pleut des vaches, ne nous regardez pas. Le développeur n'est pas responsable des folies générées par le modèle.
4.  **🏗️ Accès Anticipé :** C'est en chantier. Si vous trouvez un bug, ce n'est pas une erreur, c'est une "fonctionnalité" surprise ! (Envoyez-nous vos retours, s'il vous plaît, ça nous aide beaucoup).

---

## 🖥️ CONFIGURATION REQUISE ET CERVEAUX NUMÉRIQUES (IA)

RolemIAster fonctionne avec une **Intelligence Artificielle Locale**. Cela signifie que votre PC fera le gros du travail de réflexion. Vous n'avez pas besoin d'internet, mais d'une carte graphique qui ne date pas de l'époque des dinosaures. (Note : S'il fait froid dans votre chambre, ce jeu sert de chauffage gratuit).

### ⚙️ Concepts pour les non-initiés

La **VRAM (Mémoire Vidéo)** est le carburant de l'IA.
*   RolemIAster a besoin de "se souvenir" de **12 000 à 16 000 mots (tokens)** pour ne pas perdre le fil de l'histoire.
*   Si votre GPU manque de mémoire, le jeu sera plus lent qu'un escargot asthmatique.

---

### 📊 CATALOGUE DES MODÈLES (Choisissez votre poison)

Gérez vos IA dans **Paramètres → IA Locale Intégrée → Gérer les Modèles**.

#### 🏆 Famille Qwen 2.5 (La crème de la crème)

| Modèle | Taille | VRAM Min. | Tier | Verdict |
|--------|--------|-----------|------|---------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Le Stagiaire.** Fait le travail, mais ne lui demandez pas d'écrire du Shakespeare. Il s'embrouille parfois. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **L'ÉLU.** Équilibré, malin et rapide. C'est le modèle recommandé par défaut. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Le Professeur.** Narration riche, profonde et dialogues très naturels. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Niveau Dieu.** Vous avez besoin d'un vaisseau spatial (RTX 3090/4090) pour faire tourner ça. |

---

### 🎮 GUIDE DE CHOIX RAPIDE

| Votre Carte Graphique | VRAM | Modèle Recommandé | Résultat |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Juste mais jouable (Contexte bas) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Ça tourne bien |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Ça vole |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ L'expérience idéale |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Le grand luxe |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Qualité maximale |

**💡 Pro Tip :** Laissez toujours environ **2 Go de VRAM libres** pour le système d'exploitation, sinon Windows commencera à pleurer et à fermer des choses.

---

### 🚨 AU SECOURS ! MON PC RAME ! (Problèmes de VRAM)

Si le jeu met plus de temps à répondre que votre crush sur WhatsApp, vous n'avez probablement plus de VRAM.

**Symptômes que vous avez été trop gourmand :**
1.  **Le modèle bascule sur la RAM :** Le PC utilise la mémoire normale au lieu de la mémoire graphique. Résultat : LENTEUR EXTRÊME.
2.  **Débordement léger (1-2 Go) :** Prendra 30-60 secondes par réponse.
3.  **Débordement modéré (3-5 Go) :** 2-5 minutes. Vous pouvez aller chercher un café.
4.  **Débordement sévère :** 10-30 minutes. Injouable.

#### 🛡️ Protocole d'Urgence
Si ça tourne mal, suivez ces étapes dans l'ordre :

1.  **📉 Baissez le % de VRAM :** Allez dans les Paramètres et baissez-le à **85%**. Redémarrez et essayez.
2.  **🧹 Nettoyage :** Fermez ce navigateur avec 40 onglets ouverts. Ils mangent votre mémoire.
3.  **🛑 La Limite des 70% :** Ne descendez jamais en dessous de **70%** de VRAM allouée.
    *   *Pourquoi ?* Parce que l'IA a besoin d'espace pour "penser" (le cache KV). Si vous lui donnez moins de 70%, elle restera figée et donnera une erreur.
4.  **🔙 Retraite Tactique :** Si rien ne fonctionne, passez à un modèle plus petit (passez du 7B au 3B).

---

### ⚙️ CONFIGURATION AVANCÉE DU MODÈLE ("Geekerie Maximale")

> **MODE EXPERT :** Si vous êtes un pro et que vous voulez accéder à la configuration des modèles avancés (ajouter vos propres modèles GGUF téléchargés depuis HuggingFace, toucher aux layers, etc.), vous devez lancer le jeu avec la commande : `--advanced`.

Pour ceux qui aiment toucher aux boutons dans **Paramètres → IA Locale Intégrée** :

| Option | Fonction | Recommandation |
|--------|---------|---------------|
| **GPU Layers** | Quelle partie du modèle est chargée dans la carte graphique | **-1** (Signifie "TOUT". Ne touchez pas sauf si vous savez ce que vous faites) |
| **Contexte Max** | La "mémoire à court terme" de l'IA | **16384 - 32768** (Moins que ça et l'IA sera amnésique) |
| **Température** | Créativité vs Folie | **0.7 - 0.8** (Plus haut = plus folle ; Plus bas = plus robotique) |
| **RAG d'Historique** | Se souvenir de choses d'il y a longtemps | **Oui** (Indispensable pour les campagnes longues) |
| **Mettre en cache les Embeddings** | Accélère la recherche de souvenirs | **Oui** (Rend le tout plus rapide) |

---

### 🔧 DÉPANNAGE (Troubleshooting)

| Pépin | Solution |
|-------|---------|
| **IA Lente / Lag** | Vérifiez que `GPU Layers` soit à -1. Fermez Chrome. Baissez le `Contexto Máximo`. |
| **Erreur de Mémoire (OOM)** | Réduisez le `Contexto Máximo` ou choisissez un modèle plus petit (3B). |
| **L'IA délire / Hallucine** | Baissez la `Temperatura` à 0.6. Si elle reste folle, redémarrez l'application. |

---

### 🌐 FOURNISSEURS ALTERNATIFS (Experts Uniquement)

> **Note :** L'IA locale fournie avec le jeu est amplement suffisante. Ceci est réservé aux utilisateurs avancés ou courageux.

*   **Moteurs Locaux Externes :**
    *   **Ollama / LM Studio :** Si vous avez déjà vos propres modèles de geek, vous pouvez les utiliser.
*   **APIs dans le Nuage (Payantes) :**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek :** Nécessite internet et de sortir de l'argent.
    *   Configurez-le dans : **Paramètres → IA → Ajouter Nouveau Fournisseur**.

---

### 🌍 COMMENT JOUER ? (Le Multivers et Vous)

En ouvrant le jeu, vous avez deux chemins :

1.  **🆕 Nouvelle Aventure :** Créez votre légende depuis zéro. Le jeu vous demandera **Nom, Métier (Profession), Description Physique, Description Psychologique et le Background/Prétexte** de votre histoire. De plus, vous choisirez le **Niveau de Difficulté** et le **Ton de l'Humour** qui guideront la campagne.
2.  **💾 Continuer Partie :** RolemIAster **sauvegarde en temps réel**. Ici, pas de "charger avant de mourir" ni de retour en arrière. Chaque décision, chaque échec critique et chaque blessure est gravé dans l'histoire. C'est un **DÉFI** : ce qui est fait est fait. Vivez avec les conséquences... ou mourez avec elles.

RolemIAster n'est pas une partie isolée ; c'est un **Multivers Persistant**.
*   **Mondes Infinis :** Créez vos propres univers (**Fantasy Médiévale** ou **Cyberpunk**) avec leur propre Lore.
*   **Personnages Infinis :** Dans chaque monde, vous pouvez avoir autant de héros que vous le souhaitez.
*   **Ligne Temporelle Partagée :** Attention ! Ce que fait un personnage affecte le monde des autres. L'IA est consciente de vos autres héros et les reconnaîtra comme des habitants du monde.
*   **IA avec "Sens" (Super RAG) :** Le système RAG (Retrieval-Augmented Generation) agit comme le "rapporteur" de l'IA, lui donnant des souvenirs sur le monde, qui vous accompagne, où vous êtes et ce qui vient de se passer pour que l'histoire soit 100% cohérente.

### L'Interface (Votre poste de commande)

*   **Panneau Gauche (VOUS) :** Votre Fiche de Personnage. Vie, mana, compétences et à quel point vous êtes beau (Charisme).
*   **Panneau Central (L'HISTOIRE) :**
    *   **Haut :** Où le narrateur raconte ce qui se passe.
    *   **Bas :** Vos boutons de décision et la zone de texte pour écrire ce que vous voulez faire.
*   **Panneau Droit (VOS AFFAIRES) :** Inventaire et équipement. Le paradis du Diogène numérique.

---

## 📜 RÈGLES DU JEU (Oui, il y a des règles)

RolemIAster utilise un système d100 (dé à cent faces) classique et robuste.

### 1. Vos Attributs (Ce qui vous définit)
L'IA génère vos attributs en se basant sur le contexte, la profession et la description que vous avez introduits. Une fois générés, vous avez **10 POINTS SUPPLÉMENTAIRES** à répartir à votre guise.
*   **Coûts Échelonnés :** Monter un attribut jusqu'à 14 coûte 1 point. De 15 à 16 coûte 2 points. À partir de 17, ça coûte 3 points ! Réfléchissez bien où vous mettez le muscle.

*   💪 **Force (FUE/FOR) :** Votre puissance physique pure. Influence les dégâts au corps-à-corps et votre capacité de charge.
*   ❤️ **Constitution (CON) :** Votre résistance. Pour encaisser les coups, les maladies et les poisons.
*   🐘 **Taille (TAM) :** Votre envergure. Grand et lourd, ou petit et insaisissable.
*   🏃 **Dextérité (DES/DEX) :** Agilité, précision et ne pas trébucher sur ses propres pieds.
*   🧠 **Intelligence (INT) :** Apprendre, se souvenir et résoudre des énigmes.
*   🔮 **Pouvoir (POD/POU) :** Votre âme, votre chance, votre force de volonté et votre réserve magique.
*   😎 **Charisme (CAR/CHA) :** Leadership, attrait et capacité à tromper (ou séduire) les gens.

### 2. Maths Rapides (Caractéristiques Dérivées)
Le moteur calcule ces chiffres automatiquement en se basant sur vos attributs :

*   🩸 **Vie (PV) :** `CON * 10`. Si ça arrive à 0... eh bien, vous savez. F.
*   ✨ **Mana (PM) :** `(POD * 10) + INT`. Le carburant pour vos tours de magie. Sans mana, pas de tours. (Un mage sans mana est juste un type en peignoir qui fait du cosplay).
*   ⚡ **Stamina (STA) :** `((CON+FUE+DES)/3)*10 + POD`. Votre énergie pour combattre et bouger sans mourir d'épuisement.
*   🧠 **Humanité (HUM) :** `(CON+POD) * 5`. (Seulement en Cyberpunk : Mesure ce qu'il reste d'humain en vous avant que les câbles ne vous rendent fou).
*   ⚔️ **Points d'Action (PA) :** `(INT + DES) / 2`. Détermine votre Initiative. Qui frappe le premier, frappe deux fois.

### 3. Vos Compétences
Elles commencent avec une valeur de base (ex: Discrétion = DES + INT) et s'améliorent en les utilisant. C'est un pourcentage (%).

### 4. Résolution d'Actions (Le Dé)
Quand vous essayez de faire quelque chose de risqué (escalader, mentir, attaquer...), l'IA vous demandera un jet. Le jeu lance un **d100** invisible. **(Rappel : Les dés vous détestent. C'est personnel).**

*   **Votre Objectif :** Obtenir un nombre **INFÉRIEUR OU ÉGAL** à votre niveau de compétence.
    *   *Exemple :* Vous avez 45% en Escalade.
    *   Vous faites un 30 : ✅ **Succès**. Vous grimpez comme un singe.
    *   Vous faites un 80 : ❌ **Échec**. Vous vous ramassez.
    *   **Critique :** Faire moins ou égal à **1/5 de votre compétence** (ou un 01). Épique ! Vous faites un parkour extraordinaire avec salto.
    *   **Échec Critique (Pifia) :** Un **99 ou 100**. Les dés ont décidé qu'aujourd'hui n'est pas votre jour. Votre pantalon tombe à mi-chemin et vous tombez la tête la première.

---

## 💡 CONSEILS POUR NE PAS MOURIR (VITE)

*   **✍️ Soyez Descriptif :** N'écrivez pas juste "j'attaque". Écrivez : *"J'essaie d'esquiver sa hache en roulant au sol et je lui plante ma dague dans la cheville"*. L'IA vous récompensera.
*   **🧪 Expérimentez :** Vous n'êtes pas limité aux boutons. Écrivez des folies ! L'IA improvisera.
*   **🎭 Jouez le rôle :** Mettez-vous dans la peau du personnage. Lisez les descriptions et agissez comme le ferait votre personnage, pas comme vous le feriez en pyjama.

---

## ⚔️ LE COMBAT (Aux armes !)

Quand les mots échouent, l'heure de la bagarre arrive. Le combat est **tactique** et fonctionne par **Ticks** (temps).

### 🕹️ Comment ça marche :
*   **Ticks :** Chaque action coûte du temps. Les armes lourdes sont lentes (dépensent beaucoup de ticks). Les dagues sont rapides.
*   **Votre Vitesse :** Dépend de vos Points d'Action (PA).

### Actions de Base :
*   **🗡️ Attaquer :** Frappez avec ce que vous avez dégainé.
*   **🛡️ Bloquer :** Vous vous mettez sur la défensive. Réduit les dégâts mais dépense de la Stamina.
*   **🏃 Fuir :** Pour les lâches (ou les sages qui veulent vivre).
*   **🏳️ Se Rendre :** Si vous voyez que vous ne gagnez pas, vous pouvez implorer pitié.
*   **✨ Magie / Cyberware :** Feu, rayons laser, piratages...

### 💬 Actions par Texte Libre (NOUVEAU !)
Vous n'aimez pas les boutons ? Écrivez ce que vous voulez faire comme si vous parliez à un Maître du Jeu en chair et en os !
*   **Exemples :** *"Lancer boule de feu sur le gobelin"*, *"Dégainer mon épée runique"*, *"Utiliser potion sur moi"*.
*   **Directeur de Scène :** Le combat prend maintenant vie. L'IA génère des événements environnementaux et des réactions qui enrichissent la narration : poutres qui tombent, ennemis qui reculent, torches qui chutent. Le champ de bataille n'est plus statique !
*   **Si l'IA ne comprend pas :** Elle vous demandera de reformuler. Votre tour N'EST PAS perdu !
*   **⚠️ Limitation :** Déplacer des objets entre les emplacements (équiper depuis le sac à dos, charger des munitions) se fait avec le **Glisser-Déposer** dans l'interface, pas par texte.

### ⚠️ RÈGLE D'OR DE SURVIE
**DÉGAINEZ AVANT DE COMBATTRE !**
Sortir l'arme au milieu du combat consomme du temps (Ticks). Si on vous surprend avec l'épée dans le fourreau, on va vous frapper jusqu'à votre carte d'identité pendant que vous essayez maladroitement de la sortir. OU PIRE ENCORE !, SI VOUS AVEZ VOS ARMES DANS LE SAC À DOS AU LIEU DE LEUR EMPLACEMENT D'ÉQUIPEMENT (Excusez-moi une seconde, je dois sortir la claymore du sac à dos, je sais que je l'avais par ici... quelque part...) 🤦‍♂️
👉 Faites un **Clic sur l'étiquette de l'arme équipée** (panneau droit) pour la dégainer. Elle s'allumera en vert.

Essayer de déplacer des armes en combat consomme du temps (Ticks) et peut résulter en une attaque surprise, de plus il est très probable que vous perdiez votre tour, que vous échouiez à cause des nerfs de la hache qui s'approche de votre front ou qu'elle tombe au sol. (Ce n'était peut-être pas une bonne idée de créer un personnage avec un TDAH).

---

## ✨ MAGIE ET CYBERNÉTIQUE

Selon si votre monde est de "Fantasy Médiévale" ou "Cyberpunk" :

### 🧙‍♂️ Fantasy : Enchantements
Vous êtes sorcier ? Vous pouvez enchanter votre équipement.
1.  **Apprenez :** Vous avez besoin du sort dans votre grimoire.
2.  **Lancez (Glisser-Déposer) :** Faites glisser le sort depuis votre liste sur l'objet dans votre inventaire.
3.  **Coût :** Maintenir un enchantement actif **dépense du Mana par tour**.
4.  **Avis :** Si vous vous retrouvez à sec de mana en plein combat, l'épée de feu redevient un morceau de ferraille rouillé.

### 🦾 Cyberpunk : Implants
Vous voulez des yeux avec zoom ou des bras de gorille ?
1.  Cherchez un **Technochirurgien** (PNJ de service).
2.  Payez les crédits (rien n'est gratuit dans le futur).
3.  **Coût d'Humanité :** Chaque implant vous enlève un morceau d'âme (**Humanité**).
    *   Si vous en mettez trop, vous sombrerez dans la **Cyberpsychose** (un grille-pain tueur sur pattes) et vous perdrez le contrôle de votre personnage.

---

## 🛒 BOUTIQUES ET SERVICES (SIS)

Parlez aux PNJ pour commercer.
*   **L'IA Suggère, Vous Ordonnez :** Quand vous parlez à un marchand ou un soigneur, l'IA vous suggérera ses services (réparer, vendre, soigner), mais un bouton **"Voir Services"** apparaîtra pour que vous décidiez quand entrer en mode transactionnel.
*   **Marchandage :** Votre compétence de **Commerce** (basée sur le Charisme) décide des prix. Si vous êtes moche ou antipathique, vous vous ferez arnaquer.
*   **Vendre :** Faites un **Clic Droit** sur un objet de votre inventaire pour le vendre au marchand ou faites-le glisser sur lui.

---

## 🎒 GESTION D'INVENTAIRE (Tetris)

*   **Poids :** Vous avez une limite de charge (Force + Taille). Si vous transportez trop de bric-à-brac, vous serez lent et pénalisé (Diogène n'est pas votre ami).
*   **Panneaux :**
    *   **Équipement :** Ce que vous portez.
    *   **Ceinture :** Accès rapide en combat (dépense moins de temps d'utiliser des potions d'ici).
    *   **Sac à dos :** Le fond du sac.
*   **Utilisation Fluide :** Faites glisser une potion ou de la nourriture directement sur **votre visage** (le portrait) pour la consommer instantanément. Vous pouvez aussi utiliser le menu contextuel (clic droit -> Utiliser).

---

## 🛠️ RÉGLAGES FINAUX

Dans le menu de **Paramètres**, vous pouvez tout toucher :
*   **🌍 Langue :** L'IA vous traduira tout le jeu et les réponses à la volée. Mode polyglotte activé.
*   **👁️ Apparence :** Taille de police et couleurs, pour ne pas devenir aveugle. Bordures néon et ombres adoucies pour une immersion totale.
*   **🧠 Réglages IA :** Changez de modèle, température, etc. (Rappelez-vous de ce que nous avons vu au début du manuel sur le flag `--advanced` si vous êtes de ceux qui veulent tout toucher).

---

## 🎭 DIFFICULTÉ ET HUMOUR (Personnalisez votre souffrance)

Avant de commencer, rappelez-vous que l'IA ne fait pas que narrer, elle **ajuste le monde** selon vos préférences. Ces paramètres sont choisis à la création du monde et sont permanents pour ce monde :

*   **🎮 Difficulté (Gérée par IA) :** Ce n'est pas un simple multiplicateur de dégâts. Le jeu dit à l'IA : "Hé, la difficulté est celle-ci, agis en conséquence".
    *   **Facile :** Vous ne mourrez jamais (ou ce sera presque impossible), les situations sont plus simples, les prix sont moins chers et les ennemis sont plus maladroits. L'IA raisonnera chaque scène pour que votre chemin soit pavé de roses.
    *   **Normal :** L'équilibre standard.
    *   **Défi :** L'IA sera implacable, les prix prohibitifs et toute erreur peut être la dernière.

*   **🃏 Ton de l'Humour :** Définit comment l'IA vous parle et quel type d'événements se produisent. Bien que chaque modèle ait sa propre façon d'interpréter le concept "humour", l'IA essaiera de s'adapter à ce que vous choisissez... ou pas :
    *   **Sérieux :** Une narration épique, sombre et formelle.
    *   **Sarcastique :** L'IA rira de vos échecs, vous lancera des piques constantes et utilisera un ton ironique.
    *   **Délirant :** Préparez-vous à l'absurde. Vaches volantes, situations surréalistes et chaos total géré par la logique la plus tordue de l'IA.

---

## 🚧 Avis : Accès Anticipé

RolemIAster est en **développement actif**, mijotant à feu doux.
*   Vous pouvez trouver des bugs (ou des "fonctionnalités inattendues").
*   J'ajoute de nouvelles choses chaque semaine.
*   Vos retours valent de l'or ! Dites-moi ce que vous aimez et ce que vous aimez beaucoup. (Si vous n'aimez pas quelque chose, dites-le moi aussi, mais avec tendresse).

Maintenant, allez-y, lancez l'initiative et créez votre légende !

<!-- source_hash: f3494f05 -->