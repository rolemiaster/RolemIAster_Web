****************************************************************************************************
02/03/2026 12:54 - Refonte Complète du Noyau d'IA - Beta_v060
****************************************************************************************************
- What's New (FR):
  - **🧠 Refonte du Noyau d'IA**
    - ⚡ **Réponses plus rapides :** J'ai réécrit le cerveau du jeu pour que l'IA se souvienne mieux de ce qu'elle a déjà traité. En termes pratiques : moins de temps passé à regarder l'écran de chargement entre chaque tour. Le moteur réutilise désormais le travail précédent au lieu de repartir de zéro à chaque action. (Oui, c'est ce qu'il faisait avant. Non, je n'en suis pas fier.)
    - 🧹 **Mémoire plus propre :** L'historique de la partie est désormais stocké sans déchets techniques dès l'écriture, et non à la lecture. Résultat : l'IA a plus d'espace pour se souvenir de votre histoire et moins de tokens perdus dans des données internes qu'elle n'a jamais eu besoin de voir.
    - 🎯 **Règles à leur place :** Les règles complémentaires que l'IA consulte pour enrichir ses réponses ont été déplacées afin de ne pas interférer avec le système de cache. L'effet est invisible pour vous, mais le moteur apprécie à chaque tour (un peu plus de vitesse ne fait jamais de mal).
  
  - ** Qwen3 libéré : raisonnement complet activé**
    - 🚀 **Réflexion approfondie :** Les modèles dotés de capacités de raisonnement (Qwen3, DeepSeek-R1...) voient désormais leur potentiel pleinement exploité. Au lieu d'agir "à l'aveugle", l'IA raisonne en interne avant chaque réponse : elle planifie les fiches de personnage, évalue la cohérence narrative avec votre histoire, et évite les erreurs comme les inventaires dupliqués ou les attributs incomplets. Le résultat est une IA notablement plus intelligente et cohérente.
    - 🧹 **Transparence pour vous :** Tout ce raisonnement se déroule en coulisses. Le moteur nettoie automatiquement le "monologue intérieur" de l'IA avant de vous afficher la réponse. Vous ne voyez que le résultat final, plus peaufiné.
  
  - **⚡ Démarrage de partie plus fiable**
    - 🛡️ **Adieu les blocages du premier tour :** Nous avons éliminé une cause d'attentes interminables au début d'une nouvelle partie. Auparavant, si l'IA générait un personnage marchand sans connaître les règles de commerce (car il ne les a pas au premier tour), le moteur tentait de corriger l'erreur 3 fois avant d'abandonner, provoquant plus d'une minute d'attente inutile. Désormais, le problème est résolu instantanément.
    - 📖 **Lore à l'épreuve de l'IA créative :** Si l'IA s'emballe et génère l'historique du monde au format technique au lieu d'un texte narratif, le moteur le détecte et extrait automatiquement l'histoire propre. Votre lore vous parvient toujours comme il se doit.
    - 🧹 **Interface impeccable :** J'ai appris à l'IA à ne pas "parler en code". Avant, les boutons de décision ou les commentaires du maître de jeu affichaient parfois des variables internes étranges (comme *Fuir (move to loc_cripta)*). Désormais, tout est propre et le modèle est contraint de communiquer avec vous en utilisant le ton d'humour que vous avez choisi (le respect de ce paramètre dépend de l'humeur de l'IA).
  
  - **🌍 Corrections linguistiques**
    - 🗣️ **Lieux dans votre langue :** Les lieux générés par l'IA respectent désormais la langue configurée dans le jeu. Si vous jouez en anglais, vous ne verrez plus "Distrito de la Costa Oeste" mais son nom en anglais. (Oups.)
    - 🔘 **Boutons localisés :** Le bouton d'urgence "Continuer" parle désormais votre langue au lieu d'apparaître toujours en castillan.

****************************************************************************************************
27/02/2026 16:46 - Synchronisation de la Charge en Combat et Flux de Tours - Beta_v059
****************************************************************************************************
- What's New (FR):
  - **Combat et Rythme de Jeu**
    - ⚔️ **Assauts plus fluides :** Fini les clics dans le vide lorsque votre action était en file d'attente, et la charge des parties renvoie de vraies décisions, pas des boutons fantômes.
    - 🧭 **Scène synchronisée :** Ce que vous voyez à l'écran reflète l'état actuel du combat et n'affiche que les ennemis présents dans votre position.
    - 🚫 **Moins de paperasse interne :** Nous avons purgé les vérifications inutiles pour que le jeu progresse sans blocages administratifs.
  
  - **Moteur Visuel et Panneau Avancé**
    - 🧹 **Sélecteur propre :** Les dossiers techniques sont masqués et le filtrage est normalisé pour choisir des modèles sans bruit.
    - ️ **Arrières-plans stables :** Si une image est en cours, elle n'écrase pas les suivantes ; de plus, le chargement en combat évite les régénérations surprises.
    - 🎛️ **Panneau d'image vitaminé :** La stratégie de rendu, la force du changement et les étapes minimales se contrôlent désormais depuis l'interface avancée avec aide contextuelle.
  
  - **Création de Personnage et Portraits**
    - 🧍 **Sexe visible :** Vous choisissez Masculin/Féminin dans le formulaire de base et tout le flux (portraits, données internes) respecte ce choix.
    - 👶➡️🧓 **Âge compréhensible :** Nous utilisons des tranches narratives pour que l'IA dessine mieux l'étape de vie.
    - 🧼 **Prompts hygiénisés :** Nous nettoyons le bruit technique avant d'envoyer les requêtes d'image, ce qui se reflète dans la stabilité des portraits.
    -  **Fiches fiables :** L'IA ne peut pas "oublier" d'attributs obligatoires ni gonfler l'inventaire initial.
  
  - **Narrative, Règles et RAG**
    - 🚀 **Arrivée de PJ plus directe :** La scène initiale utilise des contrats JSON stricts et évite les mélanges de contexte inhabituels.
    -  **RAG ciblé :** Seules les racines autorisées sont indexées, et la fiche envoyée au prompt contient des résumés d'effets pour économiser des tokens.
  
  - **Configuration IA et PSR**
    - 🎛️ **Nouveau contrôle PSR Phase 1 :** Décidez si vous voulez le mode chirurgical toujours en exploration ou seulement lorsque le prompt est intense.
    - 📏 **Seuil ajustable (95% par défaut) :** Affinez la marge que vous accordez avant de déclencher le PSR automatique en fonction de votre matériel.
    - 🧠 **Prompts plus légers et sans boucles :** Nous résumons les états et l'IA dispose d'outils pour ne pas se saturer lorsque l'histoire se complique.

****************************************************************************************************
24/02/2026 12:32 - Génération d'images par IA, améliorations narratives et contrôle - Beta_v058
****************************************************************************************************
- What's New (FR):
  **🧠 Évolution du Cerveau : Bonjour, Qwen 3**
  J'ai migré le moteur du jeu pour tirer le maximum de la nouvelle génération de modèles Qwen3. Les anciens modèles de la série 2.5 ont accompagné les débuts de RolemIAster, mais il est temps de laisser les vieilles gloires derrière nous. Ce saut quantitatif dans la génération d'histoires se traduit par une prose plus immersive, des règles bien plus strictes et des personnages plus cohérents. Préparez vos cartes graphiques, car le Maître du Jeu vient de gagner un niveau.

  **Nouveau : Deuxième phase de génération d'images par IA**
  - 🎨 **Votre monde en images :** J'ai intégré un système initial de génération d'images par Intelligence Artificielle. Pendant que vous jouez, le système tente de générer des portraits et des paysages pour accompagner l'ambiance de votre partie.
  - 🖼️ **Arrière-plans dynamiques :** Les images sont générées en arrière-plan sans interrompre votre partie. Vous les verrez apparaître progressivement en fond, sur les cartes de personnages et dans le Codex.
  - 🧹 **Gestion des images :** Nouveau panneau pour visualiser et supprimer les images générées qui ne vous plaisent pas.

  **Améliorations de la génération de personnages :**
  - ⚙️ **Création aléatoire plus robuste :** J'ai unifié et amélioré le moteur de règles que l'IA utilise pour créer des personnages à partir de zéro, garantissant des inventaires plus logiques (5 à 10 objets cohérents) et des fiches plus équilibrées.
  - 🧠 **Cerveau divisé :** L'IA comprend désormais mieux quand elle doit « inventer » un personnage de toutes pièces et quand elle doit se limiter à extraire les données de la biographie que vous avez vous-même écrite.
  - ⚡ **Vitesse sur mesure :** Nouvelle section dans les Paramètres Visuels. Choisissez entre « Rapide » (1 étape), « Moyenne » (2 étapes) ou « Élevée » (4 étapes) pour ajuster le temps de génération à la puissance de votre équipement.
  - 🛠️ **Optimisation technique :** Le modèle d'IA pour les images est chargé dans la **RAM (Mémoire)** et traité via le **CPU**, sans occuper de mémoire vidéo (VRAM). Cela garantit qu'il n'interfère pas avec les performances de l'IA principale du jeu (LLM). Nécessite environ 5 Go de RAM supplémentaires, tout en restant dans les configurations minimales officielles de Steam.
  - 📤 **Partagez vos aventures :** Toutes les images générées sont sauvegardées automatiquement. Vous les trouverez dans le dossier : `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Sélecteur de modèles (Avancé) :** Si vous lancez le jeu avec le paramètre `--advanced`, vous pouvez désormais choisir le modèle d'IA à utiliser pour les images depuis le panneau Apparence. Cela permet aux passionnés de tester différentes versions de Stable Diffusion optimisées pour OpenVINO (fichiers .xml/.bin).
  
  **Narrative et Cerveau IA :**
  - 🧠 **Fin des boucles :** Une nouvelle « Doctrine de mémoire » a été implantée dans l'IA. Elle distingue désormais mieux les « souvenirs » (ce qui s'est déjà passé) du « présent » (ce qui se passe actuellement). Cela aide à réduire les cas où l'IA se répétait ou restait bloquée.
  - 📜 **Archives historiques :** Le système présente vos souvenirs à l'IA comme une « Archive historique fermée », facilitant l'utilisation de ces informations comme référence pour faire avancer l'histoire.
  - ⚡ **Instructions optimisées :** La manière dont le jeu demande la narration dans votre langue a été améliorée, libérant ainsi de la capacité pour que le modèle se concentre sur la créativité.
  - 👁️ **Focus narratif :** La perception de l'IA a été réécrite. Elle comprend mieux quels éléments font partie de l'« arrière-plan statique » et ne devrait pas les répéter inutilement dans chaque paragraphe.
  - 🔀 **Décisions plus claires :** L'IA propose désormais des voies de sortie plus définies. Ses suggestions (boutons) sont divisées entre explorer l'environnement (Approfondir) ou changer de direction (Diverger).
  - 🫵 **Tutoiement :** L'instruction de base a été ajustée pour s'assurer que l'IA vous tutoie, améliorant ainsi l'immersion personnelle.
  
  **Création de personnage :**
  - 🖼️ **Portraits de personnage :** Lors de la génération d'un personnage avec l'IA, le système tente de créer un portrait basé sur son âge, sa profession et sa description. Veuillez noter qu'il s'agit d'une version initiale et que la fidélité (particulièrement pour l'âge) peut varier selon le modèle utilisé (je continue les tests, mais le début est prometteur).
  - 🎲 **Génération aléatoire fiable :** Correction d'un bug où le bouton « Générer avec l'IA » pouvait échouer à la première tentative, laissant les champs vides. Désormais, le système de correction intelligent s'assure que la réponse est toujours valide.
  
  **Gestion des images générées :**
  - 🖼️ **Galerie d'images IA :** Nouveau panneau dans le menu Fichier affichant toutes les images générées par l'IA pendant vos parties (portraits, fonds). Vous pouvez filtrer par type d'image ou par monde.
  - 🗑️ **Suppression sélective :** Sélectionnez une ou plusieurs images et supprimez-les si elles ne vous conviennent pas (peut-être celle où l'IA a décidé que c'était une bonne idée de garer un bus dans l'étable du château). Le système nettoie à la fois le fichier et son registre interne.
  - 📂 **Accès direct :** Double-cliquez sur n'importe quelle miniature pour ouvrir le dossier où se trouve le fichier. Si le dossier est déjà ouvert, la même fenêtre est réutilisée.
  - 💾 **Mémorisation de l'espace :** La taille de la fenêtre de la galerie est sauvegardée automatiquement entre les sessions.
  
  **Performances sur configurations modestes (Important pour les GPU avec peu de VRAM) :**
  - 🧠 **PSR - Gouvernance hybride :** Nouveau système qui divise le travail de l'IA en deux phases : Planification (Chef) et Exécution (Cuisiniers). Cela permet aux modèles locaux avec 8 Go de VRAM de fonctionner en évitant les crashs dus à un excès de contexte (+12K tokens), au prix d'une latence plus élevée. L'interaction avec l'IA passe d'un prompt unique à une série de prompts (plus la VRAM est faible, plus le nombre de prompts générés sera élevé et plus le temps de réponse sera long).
  - ⚡ **Exécution intelligente :** Le système décide automatiquement de tout traiter en une fois (monolithique) ou de diviser en parties (itératif) selon votre VRAM disponible. Les GPU avec moins de VRAM activent le mode par étapes uniquement lorsque cela est nécessaire.
  - 📊 **Optimisation dynamique :** PSR réduit la charge de tokens pendant la génération, permettant aux utilisateurs disposant de cartes graphiques de 4 Go de terminer la création de personnages et la génération d'histoire qui bloquaient auparavant.
  - 🔄 **Cohérence maintenue :** Malgré la division du travail, le système injecte une « intention maîtresse » pour que l'IA ne perde pas le fil de ce qu'elle faisait.
  
  **Voix IA (amélioration incrémentielle) :**
  Génération en temps réel de voix dans toutes les langues (certaines langues sont plus limitées que d'autres, l'anglais offrant la plus grande variété de types de voix).
  - 🗣️ **Cris de combat vocaux :** Lors du début d'un combat contre des ennemis hostiles, une phrase vocale contextuelle est désormais déclenchée en introduction.
  - 🎭 **Phrases dynamiques contextuelles :** Le moteur peut générer de courtes lignes vocales pour des événements spécifiques (services/combat) selon la langue, l'ambiance et le profil du personnage.
  - 🧠 **Modèles de voix internes :** Les modèles techniques de voix ont été séparés du système narratif pour éviter les interférences avec l'histoire.
  - 🔊 **Meilleure clarté d'écoute :** L'intelligibilité et la prosodie de la synthèse ont été améliorées pour privilégier une diction compréhensible.
  
  **⚠️ Avis de compatibilité (Anciennes parties) :**
  - 🔄 En raison du nombre de changements internes dans le moteur de règles et le système d'ambiance, les **parties et mondes sauvegardés précédemment resteront jouables (probablement)**, mais il est très probable qu'ils présentent des erreurs ou des comportements inattendus. **Il est recommandé de créer un nouveau monde propre** pour profiter correctement de toutes les améliorations.

****************************************************************************************************
17/02/2026 07:20 - Génération d'Images par IA, Améliorations Narratives et Contrôle - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (FR):
  **⚠️ BRANCHE EXPÉRIMENTALE (BÊTA STEAM)**
  Cette version est actuellement disponible uniquement sur la **Branche Expérimentale** de Steam. Pour l'activer :
  1. Faites un clic droit sur **RolemIAster** dans votre Bibliothèque Steam.
  2. Sélectionnez **Propriétés...**
  3. Allez dans l'onglet **Bêtas**.
  4. Dans « Participation à la bêta », sélectionnez **experimental** dans le menu déroulant.
  
  **Nouveauté : Première phase de Génération d'Images par IA**
  - 🎨 **Votre Monde en Images :** J'ai intégré un système initial de génération d'images par Intelligence Artificielle. Au fil de votre jeu, le système tente de générer des portraits et des paysages pour accompagner l'ambiance de votre partie.
  - 🖼️ **Arrière-plans Dynamiques :** Les images sont générées en arrière-plan sans interrompre votre partie. Vous les verrez apparaître progressivement en fond d'écran, sur les cartes de personnages et dans le Codex.
  - ⚡ **Vitesse sur Mesure :** Nouvelle section dans la Configuration Visuelle. Choisissez entre « Rapide » (1 étape), « Moyenne » (2 étapes) ou « Élevée » (4 étapes) pour adapter le temps de génération à la puissance de votre équipement.
  - 🛠️ **Optimisation Technique :** Le modèle d'IA pour les images se charge dans la **RAM (Mémoire)** et est traité via le **CPU**, sans occuper de mémoire vidéo (VRAM). Cela garantit qu'il n'interfère pas avec les performances de l'IA principale du jeu (LLM). Nécessite environ 5 Go de RAM supplémentaires, tout en restant dans les configurations minimales officielles de Steam.
  - 📤 **Partagez vos Aventures :** Toutes les images générées sont sauvegardées automatiquement. Vous les trouverez dans le dossier : `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrative et Cerveau IA :**
  - 🧠 **Fin des Boucles :** Une nouvelle « Doctrine de Mémoire » a été implantée dans l'IA. Elle distingue désormais mieux les « souvenirs » (ce qui s'est déjà passé) du « présent » (ce qui se passe actuellement). Cela aide à réduire les cas où l'IA se répétait ou restait bloquée.
  - 📜 **Archives Historiques :** Le système présente vos souvenirs à l'IA comme une « Archive Historique Fermée », facilitant l'utilisation de ces informations comme référence pour faire avancer l'histoire.
  - ⚡ **Instructions Optimisées :** La manière dont le jeu demande la narration dans votre langue a été améliorée, libérant de la capacité pour que le modèle se concentre sur la créativité.
  - 👁️ **Focus Narratif :** La perception de l'IA a été réécrite. Elle comprend mieux quels éléments constituent un « décor statique » et ne devrait pas les répéter inutilement à chaque paragraphe.
  - 🔀 **Décisions Plus Claires :** L'IA offre désormais des voies plus définies. Ses suggestions (boutons) se divisent entre l'investigation de l'environnement (Approfondir) ou le changement de cap (Diverger).
  - 🫵 **Traitement Direct :** L'instruction de base a été ajustée pour s'assurer que l'IA vous tutoie, améliorant ainsi l'immersion personnelle.
  
  **Création de Personnage :**
  - 🖼️ **Portraits de Personnage :** Lors de la génération d'un personnage avec l'IA, le système tente de créer un portrait basé sur son âge, sa profession et sa description. Veuillez noter qu'il s'agit d'une version initiale et que la fidélité (surtout concernant l'âge) peut varier selon le modèle utilisé. (je continue les tests mais le début est prometteur)
  - 🎲 **Génération Aléatoire Fiable :** Correction d'un bug où le bouton « Générer avec l'IA » pouvait échouer lors de la première tentative, laissant les champs vides. Le système de correction intelligente s'assure désormais que la réponse soit toujours valide.

****************************************************************************************************
17/02/2026 07:04 - Génération d'Images par IA, Améliorations Narratives et Contrôle - Beta_v058
****************************************************************************************************
- What's New (FR):
  **⚠️ BRANCHE EXPÉRIMENTALE (BÊTA STEAM)**
  Cette version est actuellement disponible uniquement sur la **Branche Expérimentale** de Steam. Pour l'activer :
  1. Faites un clic droit sur **RolemIAster** dans votre Bibliothèque Steam.
  2. Sélectionnez **Propriétés...**
  3. Allez dans l'onglet **Bêtas**.
  4. Dans « Participation à la bêta », sélectionnez **experimental** dans le menu déroulant.
  
  **Nouveauté : Première phase de Génération d'Images par IA**
  - 🎨 **Votre Monde en Images :** J'ai intégré un système initial de génération d'images par Intelligence Artificielle. Au fil de votre jeu, le système tente de générer des portraits et des paysages pour accompagner l'ambiance de votre partie.
  - 🖼️ **Arrière-plans Dynamiques :** Les images sont générées en arrière-plan sans interrompre votre partie. Vous les verrez apparaître progressivement en fond d'écran, sur les cartes de personnages et dans le Codex.
  - ⚡ **Vitesse sur Mesure :** Nouvelle section dans la Configuration Visuelle. Choisissez entre « Rapide » (1 étape), « Moyenne » (2 étapes) ou « Élevée » (4 étapes) pour adapter le temps de génération à la puissance de votre équipement.
  - 🛠️ **Optimisation Technique :** Le modèle d'IA pour les images se charge dans la **RAM (Mémoire)** et est traité via le **CPU**, sans occuper de mémoire vidéo (VRAM). Cela garantit qu'il n'interfère pas avec les performances de l'IA principale du jeu (LLM). Nécessite environ 5 Go de RAM supplémentaires, tout en restant dans les configurations minimales officielles de Steam.
  - 📤 **Partagez vos Aventures :** Toutes les images générées sont sauvegardées automatiquement. Vous les trouverez dans le dossier : `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrative et Cerveau IA :**
  - 🧠 **Fin des Boucles :** Une nouvelle « Doctrine de Mémoire » a été implantée dans l'IA. Elle distingue désormais mieux les « souvenirs » (ce qui s'est déjà passé) du « présent » (ce qui se passe actuellement). Cela aide à réduire les cas où l'IA se répétait ou restait bloquée.
  - 📜 **Archives Historiques :** Le système présente vos souvenirs à l'IA comme une « Archive Historique Fermée », facilitant l'utilisation de ces informations comme référence pour faire avancer l'histoire.
  - ⚡ **Instructions Optimisées :** La manière dont le jeu demande la narration dans votre langue a été améliorée, libérant de la capacité pour que le modèle se concentre sur la créativité.
  - 👁️ **Focus Narratif :** La perception de l'IA a été réécrite. Elle comprend mieux quels éléments constituent un « décor statique » et ne devrait pas les répéter inutilement à chaque paragraphe.
  - 🔀 **Décisions Plus Claires :** L'IA offre désormais des voies plus définies. Ses suggestions (boutons) se divisent entre l'investigation de l'environnement (Approfondir) ou le changement de cap (Diverger).
  - 🫵 **Traitement Direct :** L'instruction de base a été ajustée pour s'assurer que l'IA vous tutoie, améliorant ainsi l'immersion personnelle.
  
  **Création de Personnage :**
  - 🖼️ **Portraits de Personnage :** Lors de la génération d'un personnage avec l'IA, le système tente de créer un portrait basé sur son âge, sa profession et sa description. Veuillez noter qu'il s'agit d'une version initiale et que la fidélité (surtout concernant l'âge) peut varier selon le modèle utilisé. (je continue les tests mais le début est prometteur)
  - 🎲 **Génération Aléatoire Fiable :** Correction d'un bug où le bouton « Générer avec l'IA » pouvait échouer lors de la première tentative, laissant les champs vides. Le système de correction intelligente s'assure désormais que la réponse soit toujours valide.

****************************************************************************************************
13/02/2026 21:47 - Optimisation de la Configuration IA et Renforcement i18n - Beta_v055
****************************************************************************************************
- What's New (FR):
  - ⚙️ **Contrôle de Priorité Local :** Vous pouvez désormais ajuster manuellement la priorité de vos cartes graphiques même si le système est en mode automatique.
  - 🧠 **Infos sur la Rotation IA :** J'ai ajouté des panneaux d'information dans les paramètres des fournisseurs externes pour expliquer le fonctionnement de la rotation automatique en cas d'erreur ou de quota dépassé.
  - 🌍 **Support GPU Étendu :** Le message d'information i18n reflète maintenant correctement le support pour NVIDIA CUDA et Vulkan (AMD/Intel). Traductions mises à jour dans toutes les langues !
  - ⚙️ **Connectivité Améliorée :** Réparation des connecteurs pour Ollama et autres serveurs compatibles OpenAI.
  - 🧠 **IA Polyglotte et Robuste :** La détection des objets obtenus dans l'histoire fonctionne désormais en 10 langues. De plus, j'ai blindé le système pour que vous ne soyez jamais sans histoire initiale, même si l'IA rencontre un problème technique.
  - 🔄 **Rotation Intelligente :** J'ai corrigé le système de rotation pour qu'il n'abandonne pas votre IA locale au premier échec. Le système lui donnera désormais une chance de se corriger avant de chercher de l'aide externe.
  - 🧹 **Nettoyage des Fondations :** J'ai supprimé des règles anciennes et confuses pour que le « cerveau » de l'IA soit plus clair et précis lors de la gestion de vos objets.

