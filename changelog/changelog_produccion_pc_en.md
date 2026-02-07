****************************************************************************************************
07/02/2026 20:26 - Combat Semantic Interpretation System - EXPERIMENTAL_v053
****************************************************************************************************
- What's New (EN):
  🧪 NOW AVAILABLE: EXPERIMENTAL VERSION (To access: Right-click on Steam ➡️ Properties ➡️ Betas)
  
  🛡️ To the brave souls who DARE to fight on the front lines: Adventure awaits, now more untamable than ever!
  
  📝 I await your War Reports (bugs and feedback) from the front. Give 'em hell! ⚔️
  
  - 🧠 **Free Text Combat:** You can now write your combat actions as if you were speaking to a tabletop character: "cast healing spell on myself", "draw my sword", "use healing potion". The AI understands your intent and translates it into game mechanics.
  - ⚔️ **Draw with Words:** You no longer need to click on the weapon slot. Simply type "draw sword" or "take out my axe" and the system interprets it automatically (HEADS UP! Doing this in combat may result in failure, fumbles, and losing a turn!... "You should come prepared to a fight!").
  - 📖 **Recognized Spells:** The AI now knows your entire spellbook. Say "cast fireball" and if you have that spell, it will cast it.
  - 🛡️ **No More Lost Turns:** If the game doesn't understand your action, it will ask you to rephrase it. Your turn is NOT lost.
  - 🎒 **Manual Inventory:** To move items between slots (equip from backpack, load ammo), use the drag-and-drop interface. This prevents confusion and saves AI resources.
  - 🎬 **AI Scene Director (IMPROVED):** Combat comes to life. The AI generates environmental events and reactions that enrich the narrative: torches falling, enemies retreating, beams collapsing. The battlefield is no longer static!
  - 🐛 **Critical NPC Fix:** Fixed a bug that prevented NPCs from making tactical decisions correctly, causing them to always "wait" instead of attacking or defending.
  - 🎵 **Audio Fix:** Combat music no longer stops when pressing predefined buttons (Attack, Block, etc.).

****************************************************************************************************
06/02/2026 02:32 - Vulkan Support (AMD/Intel) and Robust Error Handling - Beta_v053
****************************************************************************************************
- What's New (EN):
  - 🚀 **Vulkan Hybrid Engine:** Official support for AMD and Intel graphics cards! The game now includes a dedicated Vulkan engine that activates automatically (or manually) to accelerate AI on non-NVIDIA systems.
  - ⚙️ **Total Engine Control:** We've added the "Force Vulkan" option in both the Launcher and Settings. If you have issues with CUDA or want to test Vulkan's performance (which flies in many configurations), you're in control.
  - 🚦 **System Status:** You can now see exactly which engine is roaring under the hood (🟢 GREEN for CUDA, 🔴 RED for Vulkan) in the status panel.
  - 🛡️ **AI Status Monitor:** If the AI gets "tired" (exceeds its quota) or the internet cuts out, the game will notify you with a clear and useful window instead of leaving you waiting in silence.
  - 🔄 **Anti-Lock Safety:** If a connection error occurs, the game no longer "breaks" the conversation. Your dialogue options will reappear so you can retry without losing progress.
  - ☁️ **Cloud Memory:** The settings menu now correctly remembers your cloud provider preferences between sessions.

****************************************************************************************************
03/02/2026 20:23 - VRAM Optimization & Loading Stability - Beta_v052
****************************************************************************************************
- What's New (EN):
  - 🧠 **Optimized Brain:** We fixed a critical bug that made the AI try to "think twice" at the same time, doubling graphics card memory usage and causing extreme slowdowns or crashes. Your VRAM will thank you!
  - 💾 **Safe Loading:** Improved general stability when loading save games to ensure that resuming your adventure is always a smooth experience.

****************************************************************************************************
02/02/2026 00:18 - Critical Hotfix: Stability, Multi-GPU, and Localization Improvements - Beta_v051
****************************************************************************************************
- What's New (EN):
  - 🚑 **Critical Fix:** Fixed an issue preventing the game from starting in rare circumstances ("Total Failure") due to database corruption that the Launcher could not clean. The "Clear Database" option is now much more effective.
  - ⚡ **Hardware Improvement:** Fixed a bug where "Auto-Configuration" mode ignored the power of multi-GPU systems in certain setups with non-identical GPUs.
  - 🛠️ **Utility:** Added a new option in the Launcher to easily open the previous session log to facilitate support.
  - 🌍 **Localization:** Fixed several buttons appearing in English (Yes/No) in the launcher. They now respect the selected language.
  - 📖 **Interface:** Improved version information text formatting to make it more readable.
  
  - **Coming Soon:** Next item in implementation: AMD, NVIDIA, and Intel GPU compatibility via Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fix Manuals & Stability - Beta_v050
****************************************************************************************************
- What's New:
  **Multi-GPU Power and Critical Fixes!**
  
  * **🚀 Multi-GPU Support:** Implemented the capability to split large AI models across multiple graphics cards. *Now you can use your entire hardware arsenal; Unlimited Power!*
  * **🛡️ Stability:** Added all missing DLL libraries to prevent unexpected crashes. *I armored the engine; if it fails now, it will be due to a critical miss on the dice.*
  * **📖 Dynamic Web Manuals:**
    * **Real Selector:** The language menu now checks which files actually exist before displaying them. *No more ghost options that did nothing; level 5 divination magic.*
    * **Fix Error 403:** Fixed the permission error that prevented viewing the Changelog inside the game. *I taught the app how to ask for access correctly ("Open Sesame!").*
  * **🌍 Languages:** Text and translation review. *Polyglot Mode activated.*

****************************************************************************************************
28/01/2026 22:49 - Stabilization and AI Improvements - Beta_v049
****************************************************************************************************
- What's New:
  We have polished the game experience with important fixes and a new visual tool:

  * **Clean and Reliable Inventory:** No more finding "ghost objects" or items with strange names in your backpack. We have implemented a narrative validation system that ensures everything you pick up or buy actually exists in the game world.
  * **Fluid Dialogues:** We have repaired those annoying buttons that sometimes appeared as "Unknown" or did not respond. Now dialogue options with NPCs will always show the correct text.
  * **Robust Character Generation:** Creating your hero is now a solid process. We have fixed the conflicts that sometimes left the sheet incomplete or with erroneous statistics when combining biography and stats.
  * **New AI Status Bar:** Now you can see the machine's brain working! We have added a bar at the top that shows you the response speed and real-time memory usage. This way you will always know if the AI is "thinking" about your next adventure.

****************************************************************************************************
28/01/2026 03:50 - Critical Compilation Fix - Beta_v048
****************************************************************************************************
- What's New:
  Fixed a critical error that prevented starting the game on new installations. Improved stability and compatibility with different equipment.

****************************************************************************************************
26/01/2026 19:38 - Web Launcher & RTX 50 Support - Beta_v047
****************************************************************************************************
- What's New:

  > [!IMPORTANT]
  > **FOR COMPATIBILITY REASONS, IT IS NECESSARY TO DELETE THE PREVIOUS DB OR ELSE IT IS VERY LIKELY TO CAUSE ERRORS IN THE AI CONFIGURATION**
  > **(Solution: Click on the gear icon ⚙️ in the Launcher -> Delete Database)**

  *Critical Support for RTX 50 Series: Fixed a serious error that caused an unexpected crash when attempting to generate characters on the new NVIDIA graphics cards (RTX 5070, 5080, 5090).
  (Since I do not have a 5000 series RTX, I could not directly test if the solution is 100%, but the theory is that it should be solved. I await your chants of victory here!)
  
  *AI Engine Update: We have updated the game's local brain to be compatible with the latest hardware technology, ensuring that everyone can enjoy the offline experience, no matter how modern their equipment is.
  
  *New Launcher: Real-time updates and news from the official website.


****************************************************************************************************
26/01/2026 06:49 - Web Documentation Integration - Beta_v045
****************************************************************************************************
- What's New:
  *Now the User Manual and Changelog load directly from our official website, ensuring you always have the most up-to-date information without needing to download patches. Includes intelligent offline mode.

  *We have reinforced the game's stability so it never freezes upon startup. Also, the vendors have returned from their vacation in limbo: they now appear correctly, have merchandise on the shelves, and respect the world setting (no magic potions in the future).

  *Fixed the bug that did not allow modifying AI parameters and AI model selection, making it so some users with limited VRAM could not play.
  **In case of needing to modify AI parameters, I strongly recommend trying first by lowering the VRAM % to 85%, restarting, and testing; if this is still not sufficient, I recommend checking that the GPU VRAM is not being used by processes other than the game itself (restart PC if necessary, close applications that may occupy VRAM). If after lowering the VRAM amount even to 70% it still does not work, I do not recommend lowering it further because the game will not be able to manage the prompts sent to the AI; therefore, even if VRAM overflow is avoided, the game will not be able to function because it has nothing to work with. In that case, the only remaining option is to downgrade the model to a lower one, set the AI parameters back to automatic, and restart.

****************************************************************************************************
26/01/2026 04:00 - Core Stabilization and Services Diagnostics - Beta_v044
****************************************************************************************************
- What's New:
  Core Stabilization and Services Diagnostics. Critical fixes in character generation, UI (MainWindow), and semantic search optimization. Start of deep diagnostics for services mode.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs and Stability - Beta_v043
****************************************************************************************************
- Description:
  Corrective patch focused on diagnostics and UI loop correction.

- Changes:
  Fixed visual bug in restart dialog
  New log system in %LOCALAPPDATA% for diagnostics
  Internal performance optimizations

****************************************************************************************************
24/01/2026 06:30 - Backend Biography Support - Beta_v042
****************************************************************************************************
- Description:
  Exposure of biography data for UI and i18n adjustments.

<!-- source_hash: 5f218fc5 -->

<!-- source_hash: 0b6bf771 -->