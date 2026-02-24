****************************************************************************************************
24/02/2026 12:32 - AI Image Generation, Narrative Improvements, and Control - Beta_v058
****************************************************************************************************
- What's New (EN):
  **New: AI Image Generation Phase Two**
  - 🎨 **Your World in Images:** I have integrated an initial AI image generation system. As you play, the system attempts to generate portraits and landscapes to accompany your game's atmosphere.
  - 🖼️ **Dynamic Backgrounds:** Images are generated in the background without stopping your game. You will see them appear progressively in the background, on character cards, and in the Codex.
  - 🧹 **Image Management:** New panel to view and delete generated images that you don't like.
  
  **Character Generation Improvements:**
  - ⚙️ **More Robust Random Creation:** I have unified and improved the rules engine the AI uses to create characters from scratch, ensuring more logical inventories (5 to 10 coherent items) and more balanced character sheets.
  - 🧠 **Split Brain:** The AI now better understands when it should "invent" a character from scratch and when it should limit itself to extracting data from the biography you wrote yourself.
  - ⚡ **Customized Speed:** New section in Visual Settings. Choose between "Fast" (1 step), "Medium" (2 steps), or "High" (4 steps) to adjust generation time to your hardware's power.
  - 🛠️ **Technical Optimization:** The AI image model loads into **RAM (Memory)** and is processed via **CPU**, without occupying video memory (VRAM). This ensures it doesn't interfere with the game's main AI (LLM) performance. Requires about 5GB of additional RAM, staying within Steam's official minimum requirements.
  - 📤 **Share Your Adventures:** All generated images are saved automatically. You will find them in the folder: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Model Selector (Advanced):** If you start the game with the `--advanced` parameter, you can now choose which AI model to use for images from the Appearance panel. This allows enthusiasts to test different versions of Stable Diffusion optimized for OpenVINO (.xml/.bin files).
  
  **Narrative and AI Brain:**
  - 🧠 **End of Loops:** A new "Memory Doctrine" has been implemented in the AI. It now better distinguishes between "memories" (what already happened) and the "present" (what is happening). This helps reduce cases where the AI repeats itself or gets stuck.
  - 📜 **Historical Archives:** The system presents your memories to the AI as a "Closed Historical Archive," making it easier for it to use that information as a reference to advance the story.
  - ⚡ **Optimized Instructions:** The way the game requests narration in your language has been improved, freeing up model capacity to focus on creativity.
  - 👁️ **Narrative Focus:** The AI's perception has been rewritten. It now better understands which elements are "static background" and should not repeat them unnecessarily in every paragraph.
  - 🔀 **Clearer Decisions:** The AI now offers more defined paths. Its suggestions (buttons) are divided between investigating the surroundings (Delve) or changing course (Diverge).
  - 🫵 **Direct Address:** The base instruction has been adjusted to ensure the AI addresses you directly (using "You"), improving personal immersion.
  
  **Character Creation:**
  - 🖼️ **Character Portraits:** When generating a character with AI, the system attempts to create a portrait based on their age, profession, and description. Note that this is an initial version and fidelity (especially in age) may vary depending on the model used. (I'm still testing, but it's a good start)
  - 🎲 **Reliable Random Generation:** Fixed a bug where the "Generate with AI" button could fail on the first attempt, leaving fields empty. Now the smart correction system ensures the response is always valid.
  
  **Generated Image Management:**
  - 🖼️ **AI Image Gallery:** New panel in the File menu that shows all images the AI has generated during your games (portraits, backgrounds). You can filter by image type or by world.
  - 🗑️ **Selective Deletion:** Select one or more images and delete them if you're not convinced (maybe that one where the AI decided it was a good idea to park a bus in the castle stable). The system cleans both the file and its internal record.
  - 📂 **Direct Access:** Double-click on any thumbnail to open the folder where the file is located. If the folder is already open, the same window is reused.
  - 💾 **Remember Your Space:** The gallery window size is saved automatically between sessions.
  
  **Performance on Low Configurations (Important for GPUs with low VRAM):**
  - 🧠 **PSR - Hybrid Governance:** A new system that divides the AI's work into two phases: Planning (Chef) and Execution (Cooks). This allows local models with 8 GB of VRAM to function while avoiding crashes due to context overflow (+12K tokens), at the cost of higher latency; interaction with the AI changes from a single prompt to a series of prompts (the lower the VRAM, the more prompts will be generated and the longer the response time).
  - ⚡ **Smart Execution:** The system automatically decides whether to process everything at once (monolithic) or divide it into parts (iterative) based on your available VRAM. GPUs with less VRAM activate the "parts mode" only when necessary.
  - 📊 **Dynamic Optimization:** PSR reduces the token load during generation, allowing users with 4GB graphics cards to complete character creation and story generation that previously stalled.
  - 🔄 **Maintained Coherence:** Despite dividing the work, the system injects a "master intent" so the AI doesn't lose the thread of what it was doing.
  
  **AI Voices (incremental improvement):**
  Real-time voice generation in all languages (some languages are more limited than others; English offers the widest variety of voice types).
  - 🗣️ **Voiced Battle Cries:** When starting combat against hostile enemies, a contextual voice line is now triggered upon entry.
  - 🎭 **Dynamic Contextual Phrases:** The engine can generate short voice lines for specific events (services/combat) based on language, setting, and character profile.
  - 🧠 **Internal Voice Templates:** Technical voice templates have been separated from the narrative system to avoid interference with the story.
  - 🔊 **Greater Listening Clarity:** The intelligibility and prosody of the synthesis have been improved to prioritize clear diction.
  
  **⚠️ Compatibility Notice (Previous Games):**
  - 🔄 Due to the number of internal changes in the rules engine and the setting system, **previously saved games and worlds will still be playable (possibly)**, but they are very likely to show errors or unexpected behavior. **Creating a clean new world is recommended** to enjoy all improvements correctly.

****************************************************************************************************
17/02/2026 07:20 - AI Image Generation, Narrative Improvements, and Control - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (EN):
  **⚠️ EXPERIMENTAL BRANCH (STEAM BETA)**
  This version is currently available only on the Steam **Experimental Branch**. To activate it:
  1. Right-click on **RolemIAster** in your Steam Library.
  2. Select **Properties...**
  3. Go to the **Betas** tab.
  4. Under "Beta Participation", select **experimental** from the dropdown.
  
  **New: First Phase of AI Image Generation**
  - 🎨 **Your World in Images:** I have integrated an initial AI image generation system. As you play, the system attempts to generate portraits and landscapes that accompany your game's setting.
  - 🖼️ **Dynamic Backgrounds:** Images are generated in the background without pausing your gameplay. You will see them appear progressively in the background, on character cards, and in the Codex.
  - ⚡ **Tailored Speed:** New section in Visual Settings. Choose between "Fast" (1 step), "Medium" (2 steps), or "High" (4 steps) to adjust the generation time to your equipment's power.
  - 🛠️ **Technical Optimization:** The AI image model loads into **RAM (Memory)** and is processed via **CPU**, without occupying video memory (VRAM). This ensures it does not interfere with the performance of the main game AI (LLM). It requires about 5GB of additional RAM, staying within the official minimum Steam requirements.
  - 📤 **Share Your Adventures:** All generated images are saved automatically. You will find them in the folder: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrative and AI Brain:**
  - 🧠 **End of Loops:** A new "Memory Doctrine" has been implanted in the AI. It now distinguishes better between "memories" (what already happened) and the "present" (what is happening). This helps reduce cases where the AI repeated itself or got stuck.
  - 📜 **Historical Archives:** The system presents your memories to the AI as a "Closed Historical Archive," making it easier for it to use that information as a reference to advance the story.
  - ⚡ **Optimized Instructions:** The way the game requests narration in your language has been improved, freeing up model capacity to focus on creativity.
  - 👁️ **Narrative Focus:** AI perception has been rewritten. It now understands better which elements are "static background" and should not be repeated unnecessarily in every paragraph.
  - 🔀 **Clearer Decisions:** The AI now offers more defined escape routes. Its suggestions (buttons) are divided between investigating the environment (Deepen) or changing course (Diverge).
  - 🫵 **Direct Address:** The base instruction has been adjusted to ensure the AI addresses you as "You," improving personal immersion.
  
  **Character Creation:**
  - 🖼️ **Character Portraits:** When generating a character with AI, the system attempts to create a portrait based on their age, profession, and description. Keep in mind this is an initial version and fidelity (especially regarding age) may vary depending on the model used. (I am still running tests but the start is good)
  - 🎲 **Reliable Random Generation:** Fixed a bug where the "Generate with AI" button could fail on the first attempt, leaving fields empty. The smart correction system now ensures the response is always valid.

****************************************************************************************************
17/02/2026 07:04 - AI Image Generation, Narrative Improvements, and Control - Beta_v058
****************************************************************************************************
- What's New (EN):
  **⚠️ EXPERIMENTAL BRANCH (STEAM BETA)**
  This version is currently available only on the Steam **Experimental Branch**. To activate it:
  1. Right-click on **RolemIAster** in your Steam Library.
  2. Select **Properties...**
  3. Go to the **Betas** tab.
  4. Under "Beta Participation", select **experimental** from the dropdown.
  
  **New: First Phase of AI Image Generation**
  - 🎨 **Your World in Images:** I have integrated an initial AI image generation system. As you play, the system attempts to generate portraits and landscapes that accompany your game's setting.
  - 🖼️ **Dynamic Backgrounds:** Images are generated in the background without pausing your gameplay. You will see them appear progressively in the background, on character cards, and in the Codex.
  - ⚡ **Tailored Speed:** New section in Visual Settings. Choose between "Fast" (1 step), "Medium" (2 steps), or "High" (4 steps) to adjust the generation time to your equipment's power.
  - 🛠️ **Technical Optimization:** The AI image model loads into **RAM (Memory)** and is processed via **CPU**, without occupying video memory (VRAM). This ensures it does not interfere with the performance of the main game AI (LLM). It requires about 5GB of additional RAM, staying within the official minimum Steam requirements.
  - 📤 **Share Your Adventures:** All generated images are saved automatically. You will find them in the folder: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narrative and AI Brain:**
  - 🧠 **End of Loops:** A new "Memory Doctrine" has been implanted in the AI. It now distinguishes better between "memories" (what already happened) and the "present" (what is happening). This helps reduce cases where the AI repeated itself or got stuck.
  - 📜 **Historical Archives:** The system presents your memories to the AI as a "Closed Historical Archive," making it easier for it to use that information as a reference to advance the story.
  - ⚡ **Optimized Instructions:** The way the game requests narration in your language has been improved, freeing up model capacity to focus on creativity.
  - 👁️ **Narrative Focus:** AI perception has been rewritten. It now understands better which elements are "static background" and should not be repeated unnecessarily in every paragraph.
  - 🔀 **Clearer Decisions:** The AI now offers more defined escape routes. Its suggestions (buttons) are divided between investigating the environment (Deepen) or changing course (Diverge).
  - 🫵 **Direct Address:** The base instruction has been adjusted to ensure the AI addresses you as "You," improving personal immersion.
  
  **Character Creation:**
  - 🖼️ **Character Portraits:** When generating a character with AI, the system attempts to create a portrait based on their age, profession, and description. Keep in mind this is an initial version and fidelity (especially regarding age) may vary depending on the model used. (I am still running tests but the start is good)
  - 🎲 **Reliable Random Generation:** Fixed a bug where the "Generate with AI" button could fail on the first attempt, leaving fields empty. The smart correction system now ensures the response is always valid.

****************************************************************************************************
13/02/2026 21:47 - AI Configuration Optimization and i18n Enhancements - Beta_v055
****************************************************************************************************
- What's New (EN):
  - ⚙️ **Local Priority Control:** You can now manually adjust the priority of your graphics cards even if the system is in automatic mode.
  - 🧠 **AI Rotation Info:** Added information panels in the external provider settings to explain how automatic rotation works in case of an error or exceeded quota.
  - 🌍 **Expanded GPU Support:** The i18n info message now correctly reflects support for NVIDIA CUDA and Vulkan (AMD/Intel). Updated translations in all languages!
  - ⚙️ **Improved Connectivity:** Fixed connectors for Ollama and other OpenAI-compatible servers.
  - 🧠 **Polyglot and Robust AI:** Detection of obtained items in the story now works in 10 languages. Furthermore, I have reinforced the system so you are never left without an initial story, even if the AI has a technical hiccup.
  - 🔄 **Smart Rotation:** Fixed the rotation system so it doesn't give up on your local AI on the first attempt. The system will now give it a chance to correct itself before seeking external help.
  - 🧹 **Foundation Cleanup:** Removed old and confusing rules to make the AI's "brain" sharper and more accurate when handling your items.

****************************************************************************************************
01/02/2026 05:46 -  - Beta_v051
****************************************************************************************************
- What's New (EN):
   (English translation pending)

