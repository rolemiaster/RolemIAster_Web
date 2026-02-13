****************************************************************************************************
07/02/2026 20:26 - Système d'Interprétation Sémantique de Combat - BETA_v054
****************************************************************************************************
🧪 MAINTENANT DISPONIBLE :

⚠️ **AVIS IMPORTANT :** LE JEU PEUT MIGRER L'ANCIENNE BASE DE DONNÉES VERS LA NOUVELLE STRUCTURE VIA LES OPTIONS DU LANCEUR. JE NE RECOMMANDE PAS CELA ; MÊME SI VOTRE ANCIENNE PARTIE FONCTIONNE, BEAUCOUP DE CHOSES SERONT CASSÉES. MA RECOMMANDATION EST DE SUPPRIMER TOUTES LES PARTIES PRÉCÉDENTES. IL N'EST PAS NÉCESSAIRE DE SUPPRIMER TOUTE LA BASE DE DONNÉES, SAUF CAS EXTRÊME.

Changements :

- 🌍 **Gestionnaire de Mondes et Personnages :** Maintenant vous avez une liberté totale. Créez vos propres Mondes avec leurs propres règles et ambiance. Tous les personnages d'un même monde partagent la même chronologie, posant les bases du futur mode multijoueur.
- 🧠 **Mémoire Contextuelle (Super RAG) :** L'IA a désormais des 'sens'. Elle prend en compte où vous êtes, avec qui, et ce qui vient de se passer. Plus intuitif et cohérent !
- 🌍 **Lore sur le Premier Personnage :** Corrigé ! Maintenant la description manuelle du monde atteint l'IA directement dès la création initiale.
- ⚙️ **Système de Mondes Amélioré :** Nom du monde indépendant des règles techniques (Fantaie/Cyberpunk).
- 📝 **Clarté en Création :** Amélioration des instructions pour l'invention de background.
- 🧠 **Combat par Texte Libre :** Écrivez des actions comme 'lancer sort de soin' ou 'dégainer épée'. L'IA comprend l'intention.
- 🎨 **Nouvelle Interface Épique !** Entièrement remodelée avec menus RPG, fonds animés et immersion néon.
- 🎬 **IA Directeur de Scène (AMÉLIORÉ) :** Le combat s'anime avec des événements environnementaux et des réactions.
- ⚔️ **Dégainer avec des Mots :** Tapez 'dégainer épée' au lieu de cliquer. Attention ! En combat, cela peut entraîner un échec ou la perte du tour.
- 📖 **Sorts Reconnus :** L'IA connaît tout votre grimoire.
- 🌍 **Narrative dans votre langue :** Respecte strictement la langue sélectionnée, évitant le 'spanglish'.
- 🛡️ **Plus de Tours Perdus :** Si le jeu ne comprend pas, il demande des précisions. Tour NON perdu.
- 🎒 **Inventaire Manuel :** Interface glisser-déposer pour déplacer les objets.
- 🧪 **Utilisation de Potions Fluide :** Glisser sur portrait ou clic droit 'Utiliser'.
- 🩸 **Correction de Dégâts :** La vie descend correctement. Vous n'êtes plus immortel.
- 👻 **Adieu aux Items Fantômes :** Répare automatiquement les objets que l'IA oublie de créer.
- 🐛 **Correction Critique PNJ :** Décisions tactiques des PNJ corrigées.
- 🎒 **Correction Inventaire Initial :** Les personnages ne commencent plus nus.
- 🎲 **Création de Personnage :** Exploit de points infinis corrigé.
- 🖼️ **Portraits Fixés :** Système trouve les bonnes images quel que soit le nom du monde.
- 💍 **Icônes Intelligentes :** Objets et anneaux avec icônes précises.
- 🧪 **Tooltips Améliorés :** Informations complètes au survol.
- 🎵 **Améliorations Audio :** Musique ne s'arrête plus en appuyant sur les boutons.
- [I18N] **Fix Implants :** Traductions ajoutées pour slots et icônes.
- [FIX][AUDIO] **Audio Inconsistant :** Sons adaptés au setting.
- [FIX][I18N] **Nettoyage es.json :** Clés doublons supprimées.
- ⚙️ **Détection de Modèles Intelligente :** Lit les modèles GGUF directement. Gestionnaire de contexte auto.
- 📂 **Économie d'Espace :** Déplace les modèles au lieu de copier.
- ⚖️ **Justice des Attributs :** Exploit de points infinis corrigé.
- 📖 **Guide d'Entraînement :** README mis à jour avec système d'expérience.
- 📜 **Codex des Mondes Épiques :** Génération d'histoire profonde (religions, lois, géographie).
- 🧙 **Histoires Cohérentes :** Background intégré au lore du monde.
- ⚡ **Interface Fluide :** Génération en arrière-plan (pas de gel).
- 🚀 **Départ d'Aventure Instantané :** Départ direct après création.
- 🎭 **Backgrounds avec Prétexte :** Raison urgente de commencer l'aventure.
- 🧹 **Interface Simplifiée :** Bouton 'Démarrer l'histoire' centralisé.
- [FIX][UI] **Doublage Visuel :** Bug de nom de monde corrigé.
- [FEAT][UI] **Chargement Rapide :** Simple clic pour charger/créer.
- 🧠 **IA plus Créative :** Variabilité technique pour casser les boucles.

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
