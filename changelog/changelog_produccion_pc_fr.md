****************************************************************************************************
20/02/2026 23:18 - Génération d'images par IA, améliorations narratives et contrôle - EXPERIMENTAL_v058
****************************************************************************************************
- What's New (FR):
  **⚠️ BRANCHE EXPÉRIMENTALE (BÊTA STEAM)**
  Cette version n'est actuellement disponible que dans la **Branche Expérimentale** de Steam. Pour l'activer :
  1. Faites un clic droit sur **RolemIAster** dans votre bibliothèque Steam.
  2. Sélectionnez **Propriétés...**
  3. Allez dans l'onglet **Bêtas**.
  4. Dans « Participation à la bêta », sélectionnez **experimental** dans le menu déroulant.
  
  **Nouveauté : Première phase de génération d'images par IA**
  - 🎨 **Votre monde en images :** J'ai intégré un système initial de génération d'images par Intelligence Artificielle. Au fur et à mesure que vous jouez, le système tente de générer des portraits et des paysages pour accompagner l'ambiance de votre partie.
  - 🖼️ **Arrière-plans dynamiques :** Les images sont générées en arrière-plan sans interrompre votre partie. Vous les verrez apparaître progressivement en fond d'écran, sur les fiches de personnages et dans le Codex.
  - ⚡ **Vitesse sur mesure :** Nouvelle section dans la Configuration Visuelle. Choisissez entre « Rapide » (1 étape), « Moyenne » (2 étapes) ou « Élevée » (4 étapes) pour ajuster le temps de génération à la puissance de votre machine.
  - 🛠️ **Optimisation technique :** Le modèle d'IA pour les images se charge dans la **RAM (Mémoire)** et est traité via le **CPU**, sans occuper de mémoire vidéo (VRAM). Cela garantit qu'il n'interfère pas avec les performances de l'IA principale du jeu (LLM). Cela nécessite environ 5 Go de RAM supplémentaires, tout en restant dans les limites des configurations minimales officielles de Steam.
  - 📤 **Partagez vos aventures :** Toutes les images générées sont sauvegardées automatiquement. Vous les trouverez dans le dossier : `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Sélecteur de modèles (Avancé) :** Si vous lancez le jeu avec le paramètre `--advanced`, vous pouvez désormais choisir quel modèle d'IA utiliser pour les images depuis le panneau Apparence. Cela permet aux passionnés de tester différentes versions de Stable Diffusion optimisées pour OpenVINO (fichiers .xml/.bin).
  
  **Narration et Cerveau IA :**
  - 🧠 **Fin des boucles :** Une nouvelle « Doctrine de Mémoire » a été implantée dans l'IA. Elle distingue désormais mieux les « souvenirs » (ce qui s'est déjà passé) du « présent » (ce qui se passe actuellement). Cela permet de réduire les cas où l'IA se répétait ou restait bloquée.
  - 📜 **Archives historiques :** Le système présente vos souvenirs à l'IA comme une « Archive Historique Fermée », facilitant l'utilisation de ces informations comme référence pour faire avancer l'histoire.
  - ⚡ **Instructions optimisées :** La manière dont le jeu demande la narration dans votre langue a été améliorée, libérant ainsi la capacité du modèle pour se concentrer sur la créativité.
  - 👁️ **Focus narratif :** La perception de l'IA a été réécrite. Elle comprend mieux quels éléments sont un « décor statique » et ne devrait pas les répéter inutilement à chaque paragraphe.
  - 🔀 **Décisions plus claires :** L'IA offre désormais des voies plus définies. Ses suggestions (boutons) se divisent entre l'investigation de l'environnement (Approfondir) ou le changement de cap (Diverger).
  - 🫵 **Traitement direct :** L'instruction de base a été ajustée pour garantir que l'IA vous tutoie, améliorant ainsi l'immersion personnelle.
  
  **Création de personnage :**
  - 🖼️ **Portraits de personnage :** Lors de la génération d'un personnage avec l'IA, le système tente de créer un portrait basé sur son âge, sa profession et sa description. Notez qu'il s'agit d'une version initiale et que la fidélité (notamment concernant l'âge) peut varier selon le modèle utilisé. (Je continue les tests, mais le début est prometteur).
  - 🎲 **Génération aléatoire fiable :** Correction d'un bug où le bouton « Générer avec l'IA » pouvait échouer lors de la première tentative, laissant les champs vides. Le système de correction intelligente s'assure désormais que la réponse soit toujours valide.
  
  **Performance sur configurations modestes (Important pour les GPU à faible VRAM) :**
  - 🧠 **PSR - Gouvernance hybride :** Nouveau système qui divise le travail de l'IA en deux phases : Planification (Chef) et Exécution (Cuisiniers). Cela permet aux modèles locaux avec 8 Go de VRAM de fonctionner en évitant les plantages dus à un excès de contexte (+12K tokens), au prix d'une latence plus élevée. L'interaction avec l'IA passe d'un prompt unique à une série de prompts (moins il y a de VRAM, plus il y aura de prompts générés et plus le temps de réponse sera long).
  - ⚡ **Exécution intelligente :** Le système décide automatiquement de tout traiter en une seule fois (monolithique) ou de diviser en parties (itératif) selon votre VRAM disponible. Les GPU avec moins de VRAM n'activent le mode par parties que lorsque c'est nécessaire.
  - 📊 **Optimisation dynamique :** Le PSR réduit la charge de tokens pendant la génération, permettant aux utilisateurs avec des cartes graphiques de 4 Go de terminer la création de personnages et la génération d'histoire qui bloquaient auparavant.
  - 🔄 **Cohérence maintenue :** Malgré la division du travail, le système injecte une « intention maîtresse » pour que l'IA ne perde pas le fil de ce qu'elle faisait.

****************************************************************************************************
15/02/2026 02:57 - Saisie Directe, Correctifs de Stabilité et Détection d - Beta_v057
****************************************************************************************************
- What's New (FR):
  **Stabilité :**
  - 🛠️ **Adieu les Plantages de Configuration :** Correction de plusieurs bugs survenant sous certaines conditions qui empêchaient d'ouvrir ou de modifier la configuration de l'IA lors du changement de modèle ou de la réinitialisation des valeurs.
  - 🗃️ **Base de Données Silencieuse :** L'avertissement gênant "Base de Données Incompatible" au lancement du jeu n'apparaîtra plus si votre base de données est saine. Il ne s'affichera qu'en cas de changement structurel réel nécessitant une migration.
  
  **Expérience de Jeu :**
  - 🎯 **Contrôle de Précision de l'IA :** Vous pouvez désormais saisir manuellement les valeurs de Contexte, Tokens, Température ou Couches GPU directement dans un champ numérique à côté du curseur. Vous ne dépendez plus uniquement des "curseurs" ! Les deux commandes sont synchronisées : déplacez le curseur et le nombre se met à jour, ou écrivez le nombre et le curseur se déplace.
  - ⌨️ **Saisie Directe :** Plus besoin de cliquer dans la zone de texte pour écrire votre action ! Vous pouvez maintenant commencer à taper directement lorsque vous êtes sur l'écran de jeu. Si vous interagissez avec l'inventaire ou un autre panneau et que vous voulez ensuite écrire, commencez simplement à taper sans rien sélectionner. Le système redirige automatiquement vos frappes vers le champ d'action. Cela n'interfère pas avec les menus, les dialogues ni les raccourcis système.
  
  Quelques autres changements mineurs...

****************************************************************************************************
14/02/2026 21:48 - Synchronisation du contexte et contrôle de réponse IA - Beta_v056
****************************************************************************************************
- What's New (FR):
  **Systèmes et Performance :**
  - 🧠 **Contrôle total du contexte :** Vous pouvez désormais ajuster la mémoire de l'IA (`n_ctx`) et la longueur de ses réponses (`Max Tokens`) avec des curseurs beaucoup plus intuitifs.
  - ♾️ **Mode Illimité :** Glissez au minimum pour activer le mode "Illimité", permettant à des modèles puissants comme Gemini d'utiliser toute leur capacité sans restrictions.
  - ⚡ **Redémarrage des pilotes :** Nouvelle option dans le lanceur pour redémarrer les pilotes vidéo avant de jouer (optionnel, configurable depuis le launcher). L'écran clignotera au démarrage ; cela garantit que toute la VRAM est disponible en la purgeant des résidus.
  - 🛠️ **Configuration robuste :** Correction de bugs visuels et de problèmes techniques lors de la sauvegarde de la configuration de vos fournisseurs d'IA préférés.
  - 🚀 **Meilleure détection des erreurs :** Le jeu détecte désormais plus intelligemment lorsqu'une IA externe manque d'espace.
  
  **Mécaniques et Monde :**
  - 🎒 **Inventaire garanti :** Fini de commencer une aventure sans voir vos objets. Le système SDIA surveille désormais aussi la création du personnage pour s'assurer que votre équipement soit toujours là.
  - 📜 **Lore purifié :** Correction d'un bug qui injectait des fragments de "code" ou du texte étrange dans l'histoire de votre monde. Le Codex sera désormais plus pur et lisible.
  - ⚠️ **Guide de compatibilité :** Avertissements inclus dans la configuration pour vous aider à choisir des modèles compatibles (Instruct/Chat).
  - ⚙️ **Implants fiables :** Correction de la définition des emplacements et du chargement des règles lors de la création de personnages. Désormais, toutes vos cyber-améliorations utiliseront des emplacements officiels et s'équiperont automatiquement.
  - 🎓 **Limite d'apprenti :** Ajustement de l'équilibre initial des compétences. L'IA génère un paquet de points à répartir automatiquement dans les compétences les plus importantes selon le contexte de votre personnage. Vos héros commenceront désormais comme de vrais novices, progressant de manière plus logique.

****************************************************************************************************
14/02/2026 05:06 - Renforcement de l'intégrité, Conscience des personnages et Optimisation - Beta_v055
****************************************************************************************************
- What's New (FR):
  - 🧠 **Priorité de l'IA personnalisée :** Vous pouvez désormais glisser-déposer vos connecteurs d'IA pour décider lequel utiliser en premier. Si l'un échoue, le jeu tentera automatiquement avec le suivant dans votre liste de priorités.
  - ⚙️ **Contrôle du préchargement :** Ajout d'une option dans le lanceur pour décider si vous souhaitez précharger le modèle d'IA local ou le charger uniquement lorsque nécessaire (économie de ressources au démarrage).
  - 🛡️ **Suppression sûre et propre :** Lors de la suppression d'un monde, le système se charge désormais de nettoyer absolument toutes les données liées (personnages et histoire), gardant votre base de données impeccable.
  - 🚀 **Optimisation de la mémoire :** Le "cerveau" de l'IA ne se charge désormais qu'une seule fois et est partagé entre toutes les fonctionnalités, économisant beaucoup de mémoire vidéo (VRAM).
  - 🎨 **Interface intelligente :** Le panneau de sélection des mondes s'ajuste désormais parfaitement à l'écran et au texte, sans boutons coupés ni espaces mal utilisés.
  - 🔄 **Rotation intelligente améliorée :** J'ai corrigé le système de rotation pour qu'il n'abandonne pas votre IA locale du premier coup ; il lui donne maintenant une chance de se corriger avant de chercher une aide externe.
  - 🌍 **IA polyglotte et robuste :** La détection d'objets et la narration sont désormais plus précises dans 10 langues, avec une protection spéciale pour que vous ne manquiez jamais d'histoire.
  - 🛠️ **Persistance de l'IA garantie :** Correction de l'erreur qui faisait que Gemini "s'oubliait" ou se transformait en Ollama. Vos priorités d'utilisation de l'IA sont désormais sauvegardées de manière sûre et chirurgicale.
  - ⚡ **Gemini restauré :** Réparation de l'accès au modèle Gemini en récupérant ses clés et URL correctes.
  - 🎨 **Interface thématique corrigée :** Les boutons de décision récupèrent désormais instantanément la couleur de votre monde (ex. Or pour la fantaisie) lors du chargement de la partie.
  - 👥 **Conscience entre les personnages :** L'IA est désormais consciente de tous vos personnages ! Si vous avez plusieurs héros dans un même monde, l'IA les reconnaîtra comme habitants et pourra se souvenir de ce que chacun a fait individuellement.
  - 🧠 **Mémoire avec attribution :** Le système de souvenirs distingue désormais qui a effectué chaque action, évitant que l'IA ne confonde vos exploits passés avec ceux d'autres personnages.

****************************************************************************************************
13/02/2026 07:56 - Système d'Interprétation Sémantique de Combat - Beta_v054
****************************************************************************************************
- What's New (FR):
  🧪 MAINTENANT DISPONIBLE :
  
  ⚠️ **AVIS IMPORTANT :** LE JEU PEUT MIGRER L'ANCIENNE BASE DE DONNÉES VERS LA NOUVELLE STRUCTURE VIA LES OPTIONS DU LANCEUR. JE NE LE RECOMMANDE PAS : MÊME SI VOTRE ANCIENNE SAUVEGARDE FONCTIONNE, BEAUCOUP DE CHOSES SERONT CASSÉES. MA RECOMMANDATION EST DE SUPPRIMER TOUTES LES SAUVEGARDES PRÉCÉDENTES. IL N'EST PAS NÉCESSAIRE D'EFFACER TOUTE LA BASE DE DONNÉES SAUF EN CAS EXTRÊME.
  
  Changements :
  
  - 🌍 **Gestionnaire de Mondes et Personnages :** Vous avez maintenant une liberté totale. Créez vos propres Mondes avec leurs propres règles et ambiances, et à l'intérieur de chacun, créez autant de personnages que vous le souhaitez. **Note Importante :** Tous les personnages d'un même monde partagent la même ligne temporelle et les événements survenus, ce qui pose les bases du futur mode multijoueur.
  - 🧠 **Mémoire Contextuelle (Super RAG) :** L'IA a désormais des "sens". Lorsqu'elle recherche des informations dans le Lore ou sa mémoire, elle prend en compte où vous êtes, avec qui vous êtes, si vous êtes blessé et ce qui vient de se passer. Si vous êtes avec un Roi, elle se souviendra de choses sur les rois. Si vous êtes blessé, elle cherchera des règles sur la guérison. C'est beaucoup plus intuitif et cohérent !
  - 🌍 **Lore sur le Premier Personnage :** Vous écriviez une description épique de votre monde et l'IA l'ignorait pour votre premier personnage ? C'est réglé ! Désormais, la description manuelle du monde parvient directement à l'IA lors de la création initiale, avant même que le système de mémoire ne s'active.
  - ⚙️ **Système de Mondes Amélioré :** J'ai rendu le nom de votre monde indépendant des règles techniques. Vous pouvez désormais appeler votre monde comme vous le souhaitez sans que cela n'affecte le chargement des règles de Fantasy ou Cyberpunk.
  - 📝 **Clarté à la Création :** J'ai amélioré les instructions internes pour que l'IA comprenne mieux quand elle doit inventer un historique et quand elle doit se limiter à extraire vos statistiques.
  - 🧠 **Combat par Texte Libre :** Vous pouvez maintenant écrire vos actions en combat comme si vous parliez à un MJ sur table : "lancer un sort de soin sur moi", "dégainer mon épée", "utiliser une potion de soin". L'IA comprend votre intention et la traduit en mécanique de jeu.
  - 🎨 **Nouvelle Interface Épique !** J'ai entièrement remodelé le jeu. Menus style RPG, arrière-plans animés et une expérience visuelle totalement renouvelée. Style sombre semi-transparent, bordures néon et ombres adoucies pour une immersion totale.
  - 🎬 **IA Metteur en Scène (AMÉLIORÉ) :** Le combat prend vie. L'IA génère des événements environnementaux et des réactions qui enrichissent la narration : torches qui tombent, ennemis qui reculent, poutres qui s'effondrent. Le champ de bataille n'est plus statique !
  - ⚔️ **Dégainer avec des Mots :** Plus besoin de cliquer sur l'emplacement de l'arme. Écrivez simplement "dégainer épée" ou "sortir ma hache" et le système l'interprète automatiquement (ATTENTION ! Le faire en combat peut entraîner un échec, une maladresse et la perte du tour !... "On vient au combat préparé de la maison !").
  - 📖 **Sorts Reconnus :** L'IA connaît désormais votre grimoire complet. Dites "lancer boule de feu" et si vous avez ce sort, elle le lancera.
  - 🌍 **Narration dans votre Langue :** L'histoire respecte désormais strictement la langue sélectionnée, évitant les mélanges étranges entre les langues (espérons ne plus jamais avoir à voir de franglais ! J'ai tellement forcé l'IA que si elle génère à nouveau des textes dans une langue différente de celle sélectionnée, c'est qu'elle est vraiment maudite).
  - 🛡️ **Plus de Tours Perdus :** Si le jeu ne comprend pas votre action, il vous demandera de la reformuler. Votre tour n'est PAS perdu.
  - 🎒 **Inventaire Manuel :** Pour déplacer des objets entre les emplacements (équiper depuis le sac à dos, charger des munitions), utilisez l'interface de glisser-déposer. Cela évite les confusions et économise les ressources de l'IA.
  - 🧪 **Utilisation Fluide des Potions :** Vous pouvez maintenant faire glisser les potions et la nourriture directement sur votre portrait pour les utiliser. J'ai également ajouté l'option "Utiliser" au clic droit. Plus intuitif et rapide !
  - 🩸 **Correction des Dégâts :** Vous n'êtes plus immortel ! Nous avons corrigé un problème où la barre de vie ne descendait pas même si vous étiez frappé. Maintenant, vous souffrirez comme il se doit.
  - 👻 **Adieu les Objets Fantômes :** Vous trouviez un objet dans l'histoire mais il n'apparaissait jamais dans votre sac à dos ? Problème résolu ! Le système répare désormais automatiquement les objets que l'IA "oublie" de créer.
  - 🐛 **Correction Critique PNJ :** Correction d'un bug qui empêchait les PNJ de prendre des décisions tactiques correctement, les faisant toujours "attendre" au lieu d'attaquer ou de se défendre.
  - 🎒 **Correction de l'Inventaire Initial :** Les nouveaux personnages ne commencent plus nus. Ils reçoivent désormais leur équipement initial correctement.
  - 🎲 **Création de Personnage :** Correction d'un exploit où monter et descendre un attribut à certains seuils générait des points supplémentaires infinis. Fini l'astuce du Charisme !
  - 🖼️ **Portraits Corrigés :** Vous créiez un monde avec un nom propre et les portraits disparaissaient ? Corrigé ! Le système trouve désormais les bonnes images peu importe comment vous baptisez votre monde.
  - 💍 **Icônes Intelligentes :** Les objets (y compris les anneaux) affichent désormais des icônes plus précises et correctes dans l'interface.
  - 🧪 **Infobulles Améliorées :** Les potions, consommables et sorts affichent désormais correctement toutes leurs informations et effets au survol de la souris.
  - 🎵 **Améliorations Audio :** La musique de combat ne s'arrête plus lorsque vous appuyez sur les boutons prédéfinis.
  - [I18N] **Fix Implants :** Ajout des clés de traduction manquantes pour les emplacements d'implants (`slot_implant_*`) et les icônes correspondantes (`icon_implant_*`) dans `es.json`.
  - [FIX][AUDIO] **Audio Incohérent :** Effets sonores (SFX) d'équipement d'objets et de dégainement d'armes adaptés à l'ambiance. Le système détecte désormais la `setting_key` et utilise des sons futuristes/industriels dans Cyberpunk et des sons classiques dans Fantasy.
  - [FIX][I18N] **Nettoyage es.json :** Suppression de plus de 20 clés dupliquées dans `es.json` et correction des fautes de frappe dans les noms d'emplacements (ex. "Oíidos" -> "Oídos").
  - ⚙️ **Détection Intelligente de Modèles :** Le jeu lit désormais directement le "cerveau" des modèles que vous importez (GGUF). Il détecte le contexte maximum réel automatiquement. (Les modèles officiels optimisés ne sont pas touchés pour une stabilité maximale).
  - 📂 **Économie d'Espace :** Lors de l'ajout d'un modèle depuis votre ordinateur, le jeu le déplace désormais directement dans son dossier au lieu de le copier. Vos Gigaoctets vous remercieront !
  - ⚖️ **Justice dans les Attributs :** Correction d'un exploit qui permettait d'obtenir des points infinis en montant et descendant les attributs à la création.
  - 📖 **Guide d'Entraînement :** J'ai mis à jour le Manuel (README) avec tous les détails sur la façon dont vos personnages gagnent de l'expérience et augmentent leurs attributs.
  - 📜 **Codex des Mondes Épiques :** Fini le lore d'un "post-scriptum" ! Le générateur crée désormais des mondes avec une histoire profonde, décrivant leurs religions, lois, géographie et personnages célèbres dans un format de chronique détaillée.
  - 🧙 **Histoires Cohérentes :** Votre personnage ne naît plus dans le vide. Son historique s'intègre désormais intelligemment au lore du monde que vous venez de créer ou de choisir.
  - ⚡ **Interface Fluide :** L'autogénération d'histoires et de mondes se fait maintenant en arrière-plan. Fini les attentes avec l'écran figé !
  - 🚀 **Début d'Aventure Instantané :** J'ai éliminé les attentes ! Maintenant, après avoir créé votre personnage, vous sautez directement dans l'histoire. Le système utilise votre historique enrichi pour créer le début parfait sans que vous ayez à écrire un seul mot de plus.
  - 🎭 **Historiques avec Prétexte :** Vos personnages n'ont plus seulement un passé, mais aussi un motif urgent pour commencer l'aventure. Le nouveau système d'IA génère automatiquement l'étincelle initiale de l'histoire intégrée à votre biographie.
  - 🧹 **Interface Simplifiée :** J'ai retiré les boutons et écrans qui n'apportaient pas de valeur. Le bouton "Lancer l'Histoire" centralise désormais tout le pouvoir pour que vous commenciez à jouer le plus tôt possible.
  - [FIX][UI] **Duplication Visuelle dans la Sélection du Monde :** Correction d'un bug où le nom du monde apparaissait en double comme "Nom [Nom]". L'étiquette de type est maintenant masquée si elle est redondante.
  - [FEAT][UI] **Chargement Rapide (Clic Simple) :** Il est maintenant possible de charger un personnage ou d'initier la création d'un nouveau en un seul clic sur l'écran de sélection des mondes. L'extension des mondes est maintenue pour éviter les conflits.
  - 🧠 **IA plus Créative :** J'ai brisé la "boucle de répétition" de l'IA en injectant une variabilité technique dans chaque requête. Désormais, les personnages générés aléatoirement seront beaucoup plus uniques et originaux, ignorant les exemples du guide.
  
  🛡️ Aux braves qui OSERONT se battre en première ligne : L'aventure vous attend, maintenant plus indomptable que jamais !

****************************************************************************************************
06/02/2026 02:32 - Support Vulkan (AMD/Intel) et Gestion Robuste des Erreurs - Beta_v053
****************************************************************************************************
- What's New (FR):
  - 🚀 **Moteur Hybride Vulkan :** Prise en charge officielle des cartes graphiques AMD et Intel ! Le jeu inclut désormais un moteur Vulkan dédié qui s'active automatiquement (ou manuellement) pour accélérer l'IA sur le matériel non-NVIDIA.
  - ⚙️ **Contrôle Total du Moteur :** Nous avons ajouté l'option "Forcer Vulkan" dans le lanceur et les paramètres. Si vous rencontrez des problèmes avec CUDA ou si vous souhaitez tester les performances de Vulkan (qui sont fulgurantes sur de nombreuses configurations), vous êtes aux commandes.
  - 🚦 **État du Système :** Vous pouvez désormais voir exactement quel moteur rugit sous le capot (🟢 VERT pour CUDA, 🔴 ROUGE pour Vulkan) dans le panneau d'état.
  - 🛡️ **Statut de l'IA :** Si l'Intelligence Artificielle "s'épuise" (quota dépassé) ou si Internet est coupé, le jeu vous avertira avec une fenêtre claire et utile au lieu de vous laisser attendre en silence.
  - 🔄 **Sécurité Anti-Blocage :** En cas d'erreur de connexion, le jeu ne "casse" plus la conversation. Vos options de dialogue réapparaîtront pour que vous puissiez réessayer sans perdre votre progression.
  - ☁️ **Mémoire Cloud :** Le menu des paramètres mémorise désormais correctement vos préférences de fournisseurs cloud entre les sessions.

****************************************************************************************************
03/02/2026 20:23 - Optimisation de la mémoire VRAM et stabilité du chargement - Beta_v052
****************************************************************************************************
- What's New (FR):
  - 🧠 **Cerveau optimisé :** Nous avons corrigé un bug majeur qui poussait l'IA à essayer de « penser deux fois » en même temps, doublant ainsi l'utilisation de la mémoire de la carte graphique et provoquant des ralentissements extrêmes ou des blocages. Votre VRAM vous remerciera !
  - 💾 **Chargement sécurisé :** Amélioration de la stabilité générale lors du chargement des parties pour garantir que la reprise de votre aventure soit toujours une expérience fluide.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Critique : Stabilité, Multi-GPU et Améliorations de la Localisation - Beta_v051
****************************************************************************************************
- What's New (FR):
  - 🚑 **Correctif Critique :** Résolution d'un problème qui empêchait, dans de rares circonstances, le démarrage du jeu (« Échec Total ») en raison d'une corruption de la base de données que le lanceur ne pouvait pas nettoyer. L'option « Effacer la base de données » est désormais beaucoup plus efficace.
  - ⚡ **Amélioration Matérielle :** Correction d'un défaut qui faisait que le mode « Configuration Automatique » ignorait la puissance des systèmes multi-cartes graphiques dans certaines configurations avec des GPU non identiques.
  - 🛠️ **Utilitaire :** Ajout d'une nouvelle option dans le lanceur pour ouvrir facilement le journal (log) de la session précédente et faciliter le support.
  - 🌍 **Localisation :** Correction de plusieurs boutons qui s'affichaient en anglais (Yes/No) dans le lanceur. Ils respectent désormais la langue sélectionnée.
  - 📖 **Interface :** Amélioration du formatage du texte des informations de version pour une meilleure lisibilité.
  
  - **À venir :** Prochaine étape en cours d'implémentation : compatibilité avec les GPU AMD, NVIDIA et Intel via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Correction Manuels & Stabilité - Beta_v050
****************************************************************************************************
- Nouveautés :
  **Puissance Multi-GPU et Corrections Critiques !**
  
  * **🚀 Support Multi-GPU :** Implémentation de la capacité de diviser de grands modèles d'IA entre plusieurs cartes graphiques. *Vous pouvez maintenant utiliser tout votre arsenal matériel ; Pouvoir Illimité !*
  * **🛡️ Stabilité :** Ajout de toutes les bibliothèques DLL manquantes pour éviter les fermetures inattendues. *J'ai blindé le moteur, s'il échoue maintenant, ce sera la faute d'un échec critique aux dés.*
  * **📖 Manuels Web Dynamiques :**
    * **Sélecteur Réel :** Le menu des langues vérifie désormais quels fichiers existent réellement avant de les afficher. *Fini les options fantômes qui ne faisaient rien ; magie de divination niveau 5.*
    * **Fix Erreur 403 :** Résolution de l'erreur de permissions qui empêchait de voir le Changelog dans le jeu. *J'ai appris à l'application à demander le passage correctement ("Sésame, ouvre-toi !").*
  * **🌍 Langues :** Révision des textes et des traductions. *Mode Polyglotte activé.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisation et Améliorations de l'IA - Beta_v049
****************************************************************************************************
- Nouveautés :
  Nous avons peaufiné l'expérience de jeu avec des corrections importantes et un nouvel outil visuel :

  * **Inventaire Propre et Fiable :** Fini de trouver des "objets fantômes" ou des items aux noms étranges dans votre sac à dos. Nous avons implémenté un système de validation narrative qui garantit que tout ce que vous ramassez ou achetez existe réellement dans le monde du jeu.
  * **Dialogues Fluides :** Nous avons réparé ces boutons gênants qui apparaissaient parfois comme "Unknown" ou ne répondaient pas. Désormais, les options de dialogue avec les PNJ afficheront toujours le texte correct.
  * **Génération de Personnages Robuste :** Créer votre héros est maintenant un processus solide. Nous avons résolu les conflits qui laissaient parfois la fiche incomplète ou avec des statistiques erronées lors de la combinaison de la biographie et des stats.
  * **Nouvelle Barre d'État de l'IA :** Vous pouvez maintenant voir le cerveau de la machine fonctionner ! Nous avons ajouté une barre en haut qui vous montre la vitesse de réponse et l'utilisation de la mémoire en temps réel. Ainsi, vous saurez toujours si l'IA est en train de "penser" à votre prochaine aventure.

****************************************************************************************************
28/01/2026 03:50 - Correction Critique Compilation - Beta_v048
****************************************************************************************************
- Nouveautés :
  Résolution d'une erreur critique qui empêchait le lancement du jeu sur les nouvelles installations. Amélioration de la stabilité et de la compatibilité avec différents équipements.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & Support RTX 50 - Beta_v047
****************************************************************************************************
- Nouveautés :

  > [!IMPORTANT]
  > **POUR DES RAISONS DE COMPATIBILITÉ, IL EST NÉCESSAIRE DE SUPPRIMER LA DB PRÉCÉDENTE, SINON IL EST TRÈS PROBABLE QUE DES ERREURS SURVIENNENT DANS LA CONFIGURATION DE L'IA**
  > **(Solution : Cliquez sur l'icône d'engrenage ⚙️ du Launcher -> Effacer la Base de Données)**

  *Support Critique pour RTX Série 50 : Résolution d'une erreur grave qui provoquait une fermeture inattendue lors de la tentative de génération de personnages sur les nouvelles cartes graphiques NVIDIA (RTX 5070, 5080, 5090).
  (Comme je ne dispose pas d'une RTX de la série 5000, je n'ai pas pu tester directement si la solution est efficace à 100 %, mais en théorie, cela devrait être résolu. J'attends vos chants de victoire ici !)
  
  *Mise à jour du Moteur d'IA : Nous avons mis à jour le cerveau local du jeu pour qu'il soit compatible avec la dernière technologie matérielle, garantissant que tout le monde puisse profiter de l'expérience hors ligne, quelle que soit la modernité de son équipement.
  
  *Nouveau Launcher : Mises à jour et actualités en temps réel depuis le site officiel.


****************************************************************************************************
26/01/2026 06:49 - Intégration Web Documentation - Beta_v045
****************************************************************************************************
- Nouveautés :
  *Désormais, le Manuel de l'Utilisateur et le Journal des modifications se chargent directement depuis notre site officiel, garantissant que vous ayez toujours les informations les plus récentes sans avoir besoin de télécharger des correctifs. Inclut un mode hors ligne intelligent.

  *Nous avons renforcé la stabilité du jeu pour qu'il ne se fige jamais au démarrage. De plus, les vendeurs sont revenus de leurs vacances dans les limbes : ils apparaissent maintenant correctement, ont des marchandises sur les étagères et respectent l'ambiance du monde (pas de potions magiques dans le futur).

  *Le bug qui ne permettait pas de modifier les paramètres de l'IA et la sélection du modèle d'IA a été corrigé, ce qui empêchait certains utilisateurs avec une VRAM limitée de jouer.
  **En cas de nécessité de modifier les paramètres de l'IA, je recommande vivement d'essayer d'abord de baisser le % de VRAM à 85 %, de redémarrer et de tester. Si cela n'est toujours pas suffisant, je recommande de vérifier que la VRAM du GPU n'est pas utilisée par d'autres processus que ceux du jeu lui-même (redémarrage du PC si nécessaire, fermeture des applications pouvant occuper de la VRAM). Si après avoir baissé la quantité de VRAM même jusqu'à 70 %, cela ne fonctionne toujours pas, je ne recommande pas de continuer à baisser car le jeu ne pourra pas gérer les prompts envoyés à l'IA. Ainsi, même si l'on parvient à éviter le débordement de VRAM, le jeu ne pourra pas fonctionner car il n'a pas les ressources pour le faire. Dans ce cas, la seule option restante est de passer à un modèle inférieur, de remettre les paramètres de l'IA en automatique et de redémarrer.

****************************************************************************************************
26/01/2026 04:00 - Stabilisation Core et Diagnostic Services - Beta_v044
****************************************************************************************************
- Nouveautés :
  Stabilisation Core et Diagnostic Services" "Corrections critiques dans la génération de personnages, l'interface utilisateur (MainWindow) et optimisation de la recherche sémantique. Lancement du diagnostic approfondi du mode services.

****************************************************************************************************
25/01/2026 19:28 - Hotfix : Logs et Stabilité - Beta_v043
****************************************************************************************************
- Description :
  Patch correctif axé sur le diagnostic et la correction de la boucle d'interface utilisateur (UI).

- Changes :
  Correction du bug visuel de la boîte de dialogue de redémarrage
  Nouveau système de logs dans %LOCALAPPDATA% pour le diagnostic
  Optimisations des performances internes

****************************************************************************************************
24/01/2026 06:30 - Support Biographie Backend - Beta_v042
****************************************************************************************************
- Description :
  Exposition des données de biographie pour l'UI et ajustements de l'i18n.

<!-- source_hash: 5f218fc5 -->
