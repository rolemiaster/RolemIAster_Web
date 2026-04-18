# 📢 Developer Message (Early Access)

Welcome to RolemIAster. Before you dive into your next great adventure, I want to steal a minute to make a couple of things clear (I promise to be brief, the dice await you).

This game is in **Early Access** phase.
I am a solo developer—yes, just me, my keyboard, and liters of coffee—which means I do everything I can, but sometimes I can't get to everything in time. I apologize in advance if it takes me a while to fix a slippery bug, implement that feature you really want, or respond immediately on Discord. I juggle, but I haven't grown extra tentacles yet.

## ⚠️ Important Hardware Warning (Local vs. Cloud)
There are two ways to play, and your experience depends on which you choose:

*   **Local Mode (Free, Private):** If you want to run the AI on your own PC, the store's requirements (Minimum 12GB VRAM) are sacred. Less than that and the AI will crawl or crash your system. It's pure math, not magic.
*   **Cloud Mode (Gemini, GPT API, etc. only if you start with the command `--advanced`):** This is where things change! If you configure the game to use cloud services (like Google Gemini or OpenAI), the heavy lifting is done on their servers, not yours. In this mode, the game runs smoothly on practically any computer, as your graphics card rests.

## Expectation Management
If you came expecting a seamless AAA blockbuster, I'm afraid you're in the wrong place (for now). The game is in its early stages, and honestly, only the brave souls who understand and support these types of experimental projects have the patience to enjoy it right now.

## Satisfaction Guarantee
If you feel the game is too green for you or your hardware is struggling too much, no one will be upset if you ask for a refund. On the contrary, I'll be delighted to welcome you back in the future—and for you to pay $40 or $60 when the game is polished and finished 😉. The current price is a gift for trusting me at this stage.

That said, my gratitude is infinite for those who decide to stay. Your reports and suggestions are the real engine of this project. Thanks to you, the game has improved tremendously in a few weeks.

**RolemIAster is being built custom for you.**

*Thanks for your patience, support, and may the critics be on your side!*


*********************************************************************************
#  WE'VE UPDATED TO QWEN 3.5 + TURBO QUANT! NEW ENGINE, NEW TECHNOLOGY, NEW ERA 🚀
*********************************************************************************

🚧 CONSTRUCTION ZONE: LOBOTOMY COMPLETE (AND IT WORKS) 🧠🔧
What am I up to?
I'm changing the game engine, and it's no small feat.
Until now, every time you played a turn, the system would throw the AI a "chunk" of rules, 15,000 to 20,000 tokens. Basically, it was like forcing the GM to read the entire manual before each sentence. 📚🥵
I've implemented two technologies that work together:

1. 🧠 **TurboQuant — Compressed Memory**
   - I've integrated a Google technology (presented at ICLR 2026) that compresses the AI's memory to almost a third of its original size.
   - If you have an RTX 3000, 4000, or 5000 series card, the game will automatically leverage it.
   - ⚠️ **IMPORTANT NOTE ABOUT AMD GPUS:** ALTHOUGH THERE ARE SIGNS OF TURBO QUANT FUNCTIONALITY ON AMD/INTEL CARDS (VULKAN), IN PRACTICE IT CAUSES MANY FAILURES AND THEREFORE WILL NOT BE IMPLEMENTED FOR NOW. WE HOPE THE COMMUNITY WILL DO THE SAME AND WE WILL HAVE NEWS SOON.
   - **Result:** The AI remembers more while using less VRAM. It's pure digital magic. ✨

2. 📖 **Massive Context (+200%)**
   - I've rewritten the conversational memory calculation surgically: now the game reads the technical specifications of each model and accurately calculates how much fits on your GPU.
   - The 9B model goes from remembering ~36,000 words to over ~110,000 on a GPU with 16GB VRAM. 🚀
   - Additionally, I've increased the response limit from 4,096 to 8,192 tokens: longer narratives without cuts mid-sentence.

The final result: Superior speed in most cases, long games that don't lose the thread, and a much more focused (and sober) AI. 🎯

Reality Check (Disclaimer 🧐):
If even the Silicon Valley giants (Gemini, ChatGPT...) sometimes see pink elephants, my local model won't be perfect 100% of the time. But it's no longer the "drunk uncle at the wedding"—it's now a competent RPG Master with a real elephant's memory. 🐘

Thanks for your patience while I tightened the nuts and bolts! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->