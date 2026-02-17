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

