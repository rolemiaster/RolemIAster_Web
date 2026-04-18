****************************************************************************************************
18/04/2026 04:06 - TurboQuant Integration — Extreme KV Cache Compression with - EXPERIMENTAL_v061
****************************************************************************************************
- What's New (EN):
  - **🗜️ New Memory Compression Engine (TurboQuant)**
    - 🧠 **AI Remembers More While Spending Less:** I've integrated advanced compression technology (TurboQuant, from a Google paper presented at ICLR 2026) that allows the AI to store its "working memory" using nearly a third of the space it did before. In practice: more room to remember your history, your decisions, and the game's context without your graphics card complaining.
    - ⚡ **GPU Friendly:** Works on NVIDIA RTX 3000, 4000, and 5000 series cards. If you have one of those, the game will automatically leverage it. If not, everything continues to run as before with the standard compression (which wasn't too shabby either).
    - 🔧 **Plumbing Work:** This update required recompiling the AI engine from scratch with specific patches for Windows. It's not something you'll notice directly, but it's the foundation upon which context improvements for future versions will be built. (Yes, I spent a good amount of time arguing with the NVIDIA compiler. No, I don't want to talk about it.)
  - **🧠 Massive Context Optimization (+200%)**
    - 📖 **AI Reads (and Remembers) Triple:** I've completely rewritten the calculation of how much "conversation memory" the AI can use. Previously, a conservative estimate left a lot of space unused. Now, the game directly reads the technical specifications of each model and accurately calculates how much context fits on your GPU. Result: the 9B model goes from remembering ~36,000 words to over ~110,000 on a 16GB VRAM GPU. Your long games will no longer lose track as easily, and crashes for those with low VRAM should be resolved.
    - 📝 **Longer Responses:** I've increased the AI response length limit from 4,096 to 8,192 tokens. This means more detailed descriptions, more elaborate dialogues, and narratives that don't cut off mid-sentence when things get interesting.
    - 🔄 **Works for All Models:** The improvement automatically applies to any compatible model (2B, 4B, 9B...). If you use an older or third-party model, everything continues to work exactly as before — the optimization only activates when it detects that the model supports it.

