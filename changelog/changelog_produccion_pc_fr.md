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
