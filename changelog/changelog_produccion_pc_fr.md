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