****************************************************************************************************
15/02/2026 02:57 - Direct Typing, Stability Fixes, and Detection - Beta_v057
****************************************************************************************************
- What's New (EN):
  **Stability:**
  - 🛠️ **Goodbye Config Crashes:** Fixed several crashes that occurred under certain conditions and prevented opening or modifying AI settings when changing models or resetting values.
  - 🗃️ **Silent Database:** The annoying "Incompatible Database" warning upon starting the game will no longer appear if your database is fine. It will only show when there is an actual structural change requiring migration.
  
  **Gameplay Experience:**
  - 🎯 **AI Precision Control:** You can now manually enter Context, Tokens, Temperature, or GPU Layer values directly into a numeric field next to the slider. You no longer rely solely on the sliders! Both controls are synchronized: move the slider and the number updates, or type the number and the slider moves.
  - ⌨️ **Direct Typing:** You no longer need to click on the text box to type your action! You can now start typing directly while on the game screen. If you interact with the inventory or another panel and then want to write, simply start typing without needing to select anything. The system automatically redirects your keystrokes to the action field. It does not interfere with menus, dialogues, or system shortcuts.
  
  Plus a few more minor changes...

****************************************************************************************************
14/02/2026 21:48 - Context Synchronization and AI Response Control - Beta_v056
****************************************************************************************************
- What's New (EN):
  **Systems and Performance:**
  - 🧠 **Total Context Control:** You can now adjust both the AI's memory (`n_ctx`) and its response length (`Max Tokens`) with much more intuitive sliders.
  - ♾️ **Unlimited Mode:** Slide to the minimum to activate "Unlimited" mode, allowing powerful models like Gemini to use their full capacity without restrictions.
  - ⚡ **Driver Restart:** New option in the launcher to restart video drivers before playing (optional, configurable from the launcher); the screen will now flicker upon startup, ensuring all VRAM is available by purging it of residue.
  - 🛠️ **Robust Configuration:** Fixed visual bugs and technical glitches when saving the configuration of your preferred AI providers.
  - 🚀 **Better Error Detection:** The game is now smarter at detecting when an external AI runs out of space.
  
  **Mechanics and World:**
  - 🎒 **Guaranteed Inventory:** No more starting an adventure and not seeing your items. The SDIA system now also monitors character creation to ensure your gear is always there.
  - 📜 **Purified Lore:** Fixed a bug that injected fragments of "code" or strange text into your world's history. Now the Codex will be purer and more readable.
  - ⚠️ **Compatibility Guide:** Included warnings in the settings to help you choose compatible models (Instruct/Chat).
  - ⚙️ **Reliable Implants:** Corrected slot definition and rule loading during character creation. Now all your cyber-enhancements will use official slots and auto-equip correctly.
  - 🎓 **Apprentice Limit:** Adjusted initial skill balance. The AI generates a package of points to automatically distribute into the most important skills based on your character's context. Your heroes will now start as true novices, progressing in a more logical way.

****************************************************************************************************
14/02/2026 05:06 - Integrity Reinforcement, Character Awareness, and Optimization - Beta_v055
****************************************************************************************************
- What's New (EN):
  - 🧠 **Custom AI Priority:** You can now drag and drop your AI connectors to decide which one to use first. If one fails, the game will automatically try the next one in your priority list.
  - ⚙️ **Preload Control:** Added an option in the launcher to decide whether to preload the local AI model or load it only when necessary (saving resources on startup).
  - 🛡️ **Safe and Clean Wipe:** When deleting a world, the system now takes care of cleaning absolutely all related data (characters and story), keeping your database spotless.
  - 🚀 **Memory Optimization:** The AI "brain" is now loaded only once and shared among all functions, saving a lot of video memory (VRAM).
  - 🎨 **Smart Interface:** The world selection panel now fits the screen and text perfectly, with no cut-off buttons or poorly used spaces.
  - 🔄 **Improved Smart Rotation:** I've fixed the rotation system so it doesn't give up on your local AI immediately; it now gives it a chance to correct itself before seeking external help.
  - 🌍 **Robust Polyglot AI:** Object detection and narrative are now more accurate in 10 languages, with special shielding so you never run out of story.
  - 🛠️ **Guaranteed AI Persistence:** Fixed the bug that caused Gemini to "forget" or transform into Ollama. Your AI usage priorities are now saved securely and surgically.
  - ⚡ **Gemini Restored:** Repaired access to the Gemini model by recovering its correct keys and URLs.
  - 🎨 **Themed Interface Fixed:** Decision buttons now instantly retrieve your world's color (e.g., Gold for fantasy) when loading the game.
  - 👥 **Cross-Character Awareness:** The AI is now aware of all your characters! If you have multiple heroes in the same world, the AI will recognize them as inhabitants and will be able to remember what each one did individually.
  - 🧠 **Attributed Memory:** The memory system now distinguishes who performed each action, preventing the AI from confusing your past feats with those of other characters.

****************************************************************************************************
13/02/2026 07:56 - Semantic Combat Interpretation System - Beta_v054
****************************************************************************************************
- What's New (EN):
  🧪 NOW AVAILABLE:
  
  ⚠️ **IMPORTANT NOTICE:** THE GAME CAN MIGRATE THE OLD DATABASE TO THE NEW STRUCTURE VIA LAUNCHER OPTIONS. I DO NOT RECOMMEND THIS; EVEN IF YOUR OLD SAVE WORKS, MANY THINGS WILL BE BROKEN. MY RECOMMENDATION IS TO DELETE ALL PREVIOUS SAVES. IT IS NOT NECESSARY TO DELETE THE ENTIRE DATABASE EXCEPT IN EXTREME CASES.
  
  Changes:
  
  - 🌍 **World and Character Manager:** Now you have total freedom. Create your own Worlds with their own rules and setting, and within each one, create as many characters as you want. **Important Note:** All characters in the same world share the same timeline and events, laying the groundwork for the future multiplayer mode.
  - 🧠 **Contextual Memory (Super RAG):** The AI now has "senses". When searching for information in Lore or its memory, it takes into account where you are, who you are with, if you are injured, and what just happened. If you are with a King, it will remember things about kings. If you are injured, it will look for healing rules. It's much more intuitive and coherent!
  - 🌍 **Lore in the First Character:** Were you writing an epic description of your world only for the AI to ignore it on your first character? Solved! Now the manual world description reaches the AI directly during initial creation, even before the memory system activates.
  - ⚙️ **Improved World System:** I have decoupled your world's name from technical rules. Now you can name your world whatever you want without affecting the loading of Fantasy or Cyberpunk rules.
  - 📝 **Clarity in Creation:** I've improved internal instructions so the AI better understands when to invent a backstory and when to strictly extract your statistics.
  - 🧠 **Free Text Combat:** Now you can write your combat actions as if talking to a tabletop GM: "cast healing spell on myself", "unsheathe my sword", "use healing potion". The AI understands your intent and translates it into game mechanics.
  - 🎨 **New Epic Interface!** I've completely remodeled the game. RPG-style menus, animated backgrounds, and a totally renewed visual experience. Semi-transparent dark style, neon borders, and softened shadows for total immersion.
  - 🎬 **AI Scene Director (IMPROVED):** Combat now comes to life. The AI generates environmental events and reactions that enrich the narrative: torches falling, enemies retreating, beams collapsing. The battlefield is no longer static!
  - ⚔️ **Unsheathe with Words:** You no longer need to click on the weapon slot. Simply type "unsheathe sword" or "draw my axe" and the system interprets it automatically (WATCH OUT! doing this in combat can result in failure, fumbles, and lost turns!... "You come to combat prepared!").
  - 📖 **Recognized Spells:** The AI now knows your full spellbook. Say "cast fireball" and if you have that spell, it will cast it.
  - 🌍 **Narrative in Your Language:** The story now strictly respects the selected language, avoiding weird mixtures between languages (I hope I never have to see Spanglish again! I've forced the AI so much that I'd say if it generates text in a language other than the selected one again, it's purely because it's truly cursed).
  - 🛡️ **No More Lost Turns:** If the game doesn't understand your action, it will ask you to rephrase it. Your turn is NOT lost.
  - 🎒 **Manual Inventory:** To move items between slots (equip from backpack, load ammo), use the drag-and-drop interface. This avoids confusion and saves AI resources.
  - 🧪 **Fluid Potion Use:** Now you can drag potions and food directly onto your portrait to use them. I've also added the "Use" option on right-click. More intuitive and faster!
  - 🩸 **Damage Fix:** You are no longer immortal! We fixed an issue where the health bar wouldn't go down even if you were hit. Now you will suffer properly.
  - 👻 **Goodbye Ghost Items:** Did you find an item in the story but it never appeared in your backpack? Problem solved! Now the system automatically repairs items that the AI "forgets" to create.
  - 🐛 **Critical NPC Fix:** Fixed a bug that prevented NPCs from making tactical decisions correctly, causing them to always "wait" instead of attacking or defending.
  - 🎒 **Initial Inventory Fix:** New characters no longer start naked. Now they receive their starting equipment correctly.
  - 🎲 **Character Creation:** Fixed an exploit where raising and lowering an attribute at certain thresholds generated infinite extra points. The Charisma trick is over!
  - 🖼️ **Portraits Fixed:** Did you create a custom-named world and the portraits disappeared? Fixed! Now the system finds the correct images regardless of what you christen your world.
  - 💍 **Smart Icons:** Items (including rings) now show more precise and correct icons in the interface.
  - 🧪 **Improved Tooltips:** Potions, consumables, and spells now correctly display all their information and effects when hovering the mouse over them.
  - 🎵 **Audio Improvements:** Combat music no longer stops when pressing predefined buttons.
  - [I18N] **Implant Fix:** Added missing translation keys for implant slots (`slot_implant_*`) and corresponding icons (`icon_implant_*`) in `es.json`.
  - [FIX][AUDIO] **Inconsistent Audio:** Adapted sound effects (SFX) for equipping items and unsheathing weapons to the setting. The system now detects the `setting_key` and uses futuristic/industrial sounds in Cyberpunk and classic sounds in Fantasy.
  - [FIX][I18N] **es.json Cleanup:** Removed over 20 duplicate keys in `es.json` and fixed typos in slot names (e.g., "Oíidos" -> "Oídos").
  - ⚙️ **Smart Model Detection:** Now the game directly reads the "brain" of the models you import (GGUF). It automatically detects the actual maximum context. (Optimized official models are left untouched for maximum stability).
  - 📂 **Space Saving:** When adding a model from your computer, the game now moves it directly to its folder instead of copying it. Your Gigabytes will thank you!
  - ⚖️ **Fairness in Attributes:** Fixed an exploit that allowed getting infinite points by raising and lowering attributes during creation.
  - 📖 **Training Guide:** I have updated the Manual (README) with all details on how your characters gain experience and raise their attributes.
  - 📜 **Epic World Codex:** No more "postscript" lore! The generator now creates worlds with deep history, describing their religions, laws, geography, and famous characters in a detailed chronicle format.
  - 🧙 **Coherent Stories:** Your character is no longer born in a void. Their backstory now intelligently integrates with the lore of the world you just created or chose.
  - ⚡ **Fluid Interface:** Story and world autogeneration is now performed in the background. No more waiting with a frozen screen!
  - 🚀 **Instant Adventure Start:** I've eliminated the wait times! Now, after creating your character, you jump straight into the story. The system uses your enriched backstory to create the perfect beginning without you having to write a single word.
  - 🎭 **Backstories with Pretext:** Your characters no longer just have a past, but also an urgent motive to start the adventure. The new AI system automatically generates the initial spark of the story integrated into your biography.
  - 🧹 **Simplified Interface:** I've removed buttons and screens that didn't add value. The "Start Story" button now centralizes all power so you can start playing as soon as possible.
  - [FIX][UI] **Visual Duplication in World Selection:** Fixed a bug where the world name appeared duplicated as "Name [Name]". The type tag is now hidden if redundant.
  - [FEAT][UI] **Quick Load (Simple Click):** You can now load a character or start creating a new one with a single click on the world selection screen. World expansion is maintained to avoid conflicts.
  - 🧠 **More Creative AI:** I've broken the AI's "repetition loop" by injecting technical variability into every request. Now randomly generated characters will be much more unique and original, ignoring the guide examples.
  
  🛡️ To the brave ones who DARE to fight on the front lines: Adventure awaits you, now more untamable than ever!

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
