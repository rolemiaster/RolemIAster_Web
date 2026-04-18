# 📢 Developer Message (Early Access)

Welcome to RolemIAster. Before you dive into your next great adventure, I want to steal a minute to clarify a couple of things (I promise to be brief, the dice await you).

This game is in **Early Access** phase.
I'm a solo developer —yes, just me, my keyboard, and liters of coffee—, which means I do everything I can, but sometimes I can't get to everything on time. I apologize in advance if I'm slow to fix a slippery bug, implement that feature you really want, or respond immediately on Discord. I juggle, but I haven't grown extra tentacles yet.

## ⚠️ Important Hardware Notice (Local vs. Cloud)
There are two ways to play, and your experience depends on which you choose:

*   **Local Mode (Free, Private):** If you want to run the AI on your own PC, the store requirements (Minimum 8GB VRAM) are sacred to get off to a good start. Less than that and the AI will crawl or crash your system. It's pure math, not magic, although now with Turbo Quant, this may change for the better.
*   **Cloud Mode (Gemini, GPT API, etc. only if you start with the command `--advanced`):** Here the movie changes! If you configure the game to use cloud services (like Google Gemini or OpenAI), the heavy lifting is done on their servers, not yours. In this mode, the game runs smoothly on practically any computer, as your graphics card rests.

## Expectation Management
If you came expecting a seamless AAA blockbuster, I'm afraid you're in the wrong place (for now). The game is in its early stages, and honestly, only the brave who understand and support these kinds of experimental projects have the patience to enjoy it right now.

## Satisfaction Guarantee
If you feel the game is too green for you or your hardware suffers too much, no one will be angry if you ask for a refund. On the contrary, I'll be happy to welcome you back in the future — and for you to pay 40 or 60 USD when the game is polished and finished 😉—. The current price is a gift for trusting me at this stage.

That said, my gratitude is infinite for those who decide to stay. Your reports and suggestions are the real engine of this project. Thanks to you, the game has improved drastically in just a few weeks.

**RolemIAster is being built to measure for you.**

*Thank you for your patience, support, and may the critics be on your side!*


*********************************************************************************
# 📢 WE UPDATED TO QWEN 3.5 + TURBO QUANT! NEW ENGINE, NEW TECHNOLOGY, NEW ERA 🚀
*********************************************************************************

🚧 CONSTRUCTION ZONE: LOBOTOMY COMPLETED (AND IT WORKS) 🧠🔧
What am I up to?
I'm changing the game engine, and it's no small feat.
Until now, every time you played a turn, the system would throw the AI a "chunk" of rules of 15,000 to 20,000 tokens. Basically, it was like forcing the GM to read the entire manual before each sentence. 📚🥵
I've implemented two technologies that work as a team:

1. 🧠 **TurboQuant — Compressed Memory**
   - I integrated a Google technology (presented at ICLR 2026) that compresses the AI's memory to almost a third of its original size.
   - If you have an RTX 3000, 4000, or 5000 series card, the game will automatically take advantage of it.
   - ⚠️ **IMPORTANT NOTE ON AMD GPUS:** ALTHOUGH THERE ARE INDICATIONS OF TURBO QUANT FUNCTIONALITY ON AMD/INTEL CARDS (VULKAN), IN PRACTICE IT CAUSES MANY FAILURES AND THEREFORE WILL NOT BE IMPLEMENTED FOR NOW. WE HOPE THE COMMUNITY WILL DO THE SAME AND HAVE NEWS SOON.
   - **Result:** The AI remembers more while using less VRAM. It's pure digital magic. ✨

2. 📖 **Massive Context (+200%)**
   - I surgically rewrote the conversational memory calculation: the game now reads the technical specifications of each model and precisely calculates how much fits on your GPU.
   - The 9B model goes from remembering ~36,000 words to over ~110,000 on a GPU with 16GB VRAM. 🚀
   - Additionally, I increased the response limit from 4,096 to 8,192 tokens: longer narratives without mid-sentence cuts.

The final result: Superior speed in most cases, long games that don't lose the thread, and a much more focused (and sober) AI. 🎯

Reality Check (Disclaimer 🧐):
If even the giants of Silicon Valley (Gemini, ChatGPT...) sometimes see pink elephants, my local model won't be perfect 100% of the time. But it's no longer the "drunk uncle at the wedding" — now it's a competent RPG Master with the memory of a real elephant. 🐘

Thanks for your patience while I tightened the screws! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->