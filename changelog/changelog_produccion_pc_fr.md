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

