# 🐉 Welcome to RolemIAster!

Grab your dice (or your mouse) and get ready to live adventures where the only limit is how twisted your imagination is! **RolemIAster** is an infinite role-playing game powered by Artificial Intelligence that lets you be the hero (or the villain) of your own stories.

---

## ⚠️ LEGAL NOTICE (The boring but necessary part)

**READ ME OR SUFFER THE WRATH OF THE DICE:**

1.  **🤖 Built-in Local AI:** RolemIAster brings its own digital brain. It works **without internet** and without you having to touch anything weird. Install and play!
2.  **☁️ Optional Cloud:** If you prefer to spend money on external AIs (OpenAI, Gemini...), that's your business with your credit card. Costs are on you.
3.  **🎲 Generative Chaos:** The AI invents the story on the fly. If the narrator goes crazy and says it's raining cows, don't look at us. The developer is not responsible for the madness the model generates.
4.  **🏗️ Early Access:** This is under construction. If you find a bug, it's not a flaw, it's a surprise "feature"! (Send us feedback, please, it helps us a lot).

---

## 🖥️ SYSTEM REQUIREMENTS AND DIGITAL BRAINS (AI)

RolemIAster runs with **Local Artificial Intelligence**. This means your PC will do the hard work of thinking. You don't need internet, but you do need a graphics card that isn't from the dinosaur era. (Note: If your room is cold, this game works as free heating).

### ⚙️ Concepts for the Uninitiated

**VRAM (Video RAM)** is the AI's fuel.
*   Thanks to **TurboQuant**, RolemIAster can now remember **over 100,000 words (tokens)** — almost triple what it used to — without crashing your graphics card.
*   If your GPU runs out of memory, the game will be slower than a snail with asthma.

---

### 📊 MODEL CATALOG (Choose your poison)

Manage your AIs in **Settings → Built-in Local AI → Manage Models**.

#### 🏆 Qwen 3.5 Family — Specifically trained for RolemIAster

These models have been trained with **Supervised Fine-Tuning (SFT)** to master the game's narrative rules. They are not generic models: they know RolemIAster's JSON contract, NPCs, inventory, and combat by heart.

| Model      | Size    | Minimum VRAM | Tier | Verdict                                                                               |
|------------|---------|--------------|------|---------------------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB  | **3GB**      | B    | ⚡ **The Speedster.** The fastest of them all. Ideal for basic GPUs or playing without a dedicated GPU. |
| **Qwen3.5-4B** | ~2.8GB  | **4GB**      | A    | ✅ **THE BALANCED ONE.** Optimal speed and quality. Recommended standard model for most players.   |
| **Qwen3.5-9B** | ~5.5GB  | **8GB**      | S    | 🌟 **The Narrator.** Rich narrative and superior coherence. For those with an RTX 3070 or better.    |

---

### 🎮 QUICK CHOICE GUIDE

| Your Graphics Card | VRAM | Recommended Model | Result                                      |
|--------------------|------|-------------------|---------------------------------------------|
| GTX 1050/1060 / No GPU | 4GB  | **Qwen3.5-2B**    | 🆗 Just enough but playable, very just enough... |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**    | ✅ Good experience                            |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**    | 🚀 Fast and precise                           |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**    | 🌟 The ideal experience                       |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**    | 👑 Maximum quality, ultra-fast responses      |

**💡 Pro Tip:** Always leave about **2GB of VRAM free** for the operating system, or Windows will start crying and closing things.

---

### 🚨 HELP! MY PC IS SLOW! (VRAM Issues)

If the game takes longer to respond than your crush on WhatsApp, you've probably run out of VRAM.

**Symptoms that you've been too ambitious:**
1.  **The model spills over to RAM:** The PC uses normal memory instead of graphics memory. Result: EXTREME SLOWNESS.
2.  **Minor overflow (1-2GB):** It will take 30-60 seconds per response.
3.  **Moderate overflow (3-5GB):** 2-5 minutes. You can go get coffee.
4.  **Severe overflow:** 10-30 minutes. Unplayable.

#### 🛡️ Emergency Protocol
If things go wrong, follow these steps in order:

1.  **📉 Lower VRAM %:** Go to Settings and lower it to **85%**. Restart and try again.
2.  **🧹 Clean Up:** Close that browser with 40 tabs open. They're eating your memory.
3.  **🛑 The 70% Limit:** Never go below **70%** of assigned VRAM.
    *   *Why?* Because the AI needs space to "think" (the KV cache). If you give it less than 70%, it will go blank and error out.
4.  **🔙 Tactical Retreat:** If nothing works, downgrade to a smaller model (go from 9B to 4B, or from 4B to 2B).

---

### ⚙️ ADVANCED MODEL CONFIGURATION ("Maximum Freakout")

> **EXPERT MODE:** If you're a pro and want to access advanced model configuration (add your own GGUF models downloaded from HuggingFace, tweak layers, etc.), you must start the game with the command: `--advanced`.

For those who like to fiddle with buttons in **Settings → Built-in Local AI**:

| Option             | Function                                           | Recommendation                                             |
|--------------------|----------------------------------------------------|------------------------------------------------------------|
| **GPU Layers**     | How much of the model is loaded onto the graphics card | **-1** (Means "ALL". Don't touch unless you know what you're doing) |
| **Max Context**    | The AI's "short-term memory"                       | **16384 - 32768** (Less than this and the AI will have amnesia)     |
| **Temperature**    | Creativity vs. Madness                             | **0.7 - 0.8** (Higher = crazier; Lower = more robotic)     |
| **History RAG**    | Remembering things from long ago                   | **Yes** (Essential for long campaigns)                      |
| **Cache Embeddings** | Speeds up memory retrieval                         | **Yes** (Makes it go faster)                               |

---

### 🔧 TROUBLESHOOTING

| Glitch        | Fix                                                                    |
|---------------|------------------------------------------------------------------------|
| **Slow AI / Lag** | Verify that `GPU Layers` is -1. Close Chrome. Lower `Contexto Máximo`. |
| **Memory Error (OOM)** | Reduce `Contexto Máximo` or choose a smaller model (3B).           |
| **AI Delirious / Hallucinating** | Lower `Temperatura` to 0.6. If still crazy, restart the application. |

---

### 🌐 ALTERNATIVE PROVIDERS (Experts Only)

> **Note:** The game's built-in local AI is more than enough. This is only for advanced or brave users.

*   **External Local Engines:**
    *   **Ollama / LM Studio:** If you already have your own geeky models, you can use them.
*   **Cloud APIs (Paid):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Requires internet and spending money.
    *   Configure it in: **Settings → AI → Add New Provider**.

---

### 🌍 HOW TO PLAY? (The Multiverse and You)

When you open the game, you have two paths:

1.  **🆕 New Adventure**: Create your legend from scratch. The game will ask for **Name, Class (Profession), Physical Description, Psychological Description, and the Background/Premise** of your story. Additionally, you'll choose the **Difficulty Level** and **Tone of Humor** that will guide the campaign.
2.  **💾 Continue Game**: RolemIAster **saves in real-time**. There's no "load before dying" or going back. Every decision, every blunder, and every wound is burned into the story. It's a **CHALLENGE**: what you do, is done. Live with the consequences... or die with them.

RolemIAster is not an isolated game; it's a **Persistent Multiverse**.
*   **Infinite Worlds:** Create your own universes (**Medieval Fantasy** or **Cyberpunk**) with their own Lore.
*   **Infinite Characters:** Within each world, you can have as many heroes as you want.
*   **Shared Timeline:** Watch out! What one character does affects the world of others. The AI is aware of your other heroes and will recognize them as inhabitants of the world.
*   **AI with "Senses" (Super RAG):** The RAG (Retrieval-Augmented Generation) system acts as the AI's "informant," giving it memories about the world, who is with you, where you are, and what just happened to make the story 100% coherent.

### The Interface (Your command center)

*   **Left Panel (YOU):** Your Character Sheet. Health, mana, skills, and how good-looking you are (Charisma).
*   **Center Panel (THE STORY):**
    *   **Top:** Where the narrator tells what's happening.
    *   **Bottom:** Your decision buttons and the text box to write what you want to do.
*   **Right Panel (YOUR STUFF):** Inventory and equipment. The paradise of the digital hoarder.

---

## 📜 GAME RULES (Yes, there are rules)

RolemIAster uses a classic and robust d100 (one hundred-sided die) system.

### 1. Your Attributes (What defines you)
The AI generates your attributes based on the context, profession, and description you've entered. Once generated, you have **10 EXTRA POINTS** to distribute as you see fit.
*   **Staggered Costs:** Increasing an attribute up to 14 costs 1 point. From 15 to 16 costs 2 points. From 17 onwards it costs 3 points! Think carefully about where you put the muscle.

*   💪 **Strength (STR):** Your raw physical power. Influences melee damage and your carrying capacity.
*   ❤️ **Constitution (CON):** Your resilience. To withstand hits, illnesses, and poisons.
*   🐘 **Size (SIZ):** Your stature. Big and heavy, or small and elusive.
*   🏃 **Dexterity (DEX):** Agility, accuracy, and not tripping over your own feet.
*   🧠 **Intelligence (INT):** Learning, remembering, and solving puzzles.
*   🔮 **Power (POW):** Your soul, your luck, willpower, and your magical reserves.
*   😎 **Charisma (CHA):** Leadership, attractiveness, and the ability to deceive (or seduce) people.

### 2. Quick Math (Derived Characteristics)
The engine calculates these figures automatically based on your attributes:

*   🩸 **Hit Points (HP):** `CON * 10`. If it reaches 0... well, you know. F.
*   ✨ **Mana Points (MP):** `(POD * 10) + INT`. The fuel for your magic tricks. No mana, no tricks. (A wizard without mana is just a guy in a robe cosplaying).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Your energy for combat and moving without dying in the process.
*   🧠 **Humanity (HUM):** `(CON+POD) * 5`. (Cyberpunk only: Measures how much of a human you have left before the wires drive you mad).
*   ⚔️ **Action Points (AP):** `(INT + DES) / 2`. Determines your Initiative. He who strikes first, strikes twice.

### 3. Your Skills
They start with a base value (e.g., Stealth = DEX + INT) and improve with use. It's a percentage (%).

### 4. Action Resolution (The Die)
When you try to do something risky (climb, lie, attack...), the AI will ask for a roll. The game rolls an invisible **d100**. **(Remember: The dice hate you. It's personal).**

*   **Your Goal:** Roll a number **LESS THAN OR EQUAL TO** your skill level.
    *   *Example:* You have 45% in Climbing.
    *   You roll a 30: ✅ **Success**. You climb like a monkey.
    *   You roll an 80: ❌ **Failure**. You take a nasty fall.
    *   **Critical:** Rolling less than or equal to **1/5 of your skill** (or a 01). Epic! You perform extraordinary parkour with a flip.
    *   **Fumble:** A **99 or 100**. The dice have decided today is not your day. Your pants fall down halfway up and you face-plant.

---

## 💡 TIPS FOR NOT DYING (QUICKLY)

*   **✍️ Be Descriptive:** Don't just write "attack." Write: *"I try to dodge his axe by rolling on the ground and stab him in the ankle with my dagger."* The AI will reward you.
*   **🧪 Experiment:** You're not limited to buttons. Write crazy things! The AI will improvise.
*   **🎭 Roleplay:** Get into character. Read the descriptions and act as your character would, not as you would in pajamas.

---

## ⚔️ COMBAT (To arms!)

When words fail, it's time for a brawl. Combat is **tactical** and works in **Ticks** (time).

### 🕹️ How it works:
*   **Ticks:** Each action costs time. Heavy weapons are slow (they consume many ticks). Daggers are fast.
*   **Your Speed:** Depends on your Action Points (AP).

### Basic Actions:
*   **🗡️ Attack:** Hit with whatever you have drawn.
*   **🛡️ Block:** You go on the defensive. Reduces damage but consumes Stamina.
*   **🏃 Flee:** For cowards (or wise people who want to live).
*   **🏳️ Surrender:** If you see you're not winning, you can beg for mercy.
*   **✨ Magic / Cyberware:** Fire, laser beams, hacks...

### 💬 Free Text Actions (NEW!)
Don't like buttons? Write what you want to do as if you were talking to a real Master!
*   **Examples:** *"Cast a fireball at the goblin"*, *"Draw my runic sword"*, *"Use potion on myself"*.
*   **Scene Director:** Combat now comes alive. The AI generates environmental events and reactions that enrich the narrative: falling beams, retreating enemies, falling torches! The battlefield is no longer static!
*   **If the AI doesn't understand:** It will ask you to rephrase. Your turn is NOT lost!
*   **⚠️ Limitation:** Moving items between slots (equipping from backpack, loading ammo) is done via **Drag & Drop** in the interface, not by text.

### ⚠️ GOLDEN RULE OF SURVIVAL
**DRAW YOUR WEAPON BEFORE FIGHTING!**
Drawing your weapon mid-combat consumes time (Ticks). If you're caught with your sword in its sheath, you'll get beaten senseless while you clumsily try to draw it. OR WORSE!, IF YOU HAVE YOUR WEAPONS IN YOUR BACKPACK INSTEAD OF THEIR EQUIPPED SLOT (Excuse me a second, I need to take the greatsword out of my backpack, I'm sure I had it around here... somewhere...) 🤦‍♂️
👉 **Click on the equipped weapon's label** (right panel) to draw it. It will light up green.

Trying to move weapons in combat consumes time (Ticks) and can result in a surprise attack, besides it's very likely you'll lose your turn, miss due to the nerves of the axe approaching your forehead, or drop it on the ground. (Maybe it wasn't a good idea to create a character with ADHD)

---

## ✨ MAGIC AND CYBERNETICS

Depending on whether your world is "Medieval Fantasy" or "Cyberpunk":

### 🧙‍♂️ Fantasy: Enchantments
Are you a sorcerer? You can enchant your equipment.
1.  **Learn:** You need the spell in your grimoire.
2.  **Cast (Drag & Drop):** Drag the spell from your list onto the item in your inventory.
3.  **Cost:** Maintaining an active enchantment **drains Mana per turn**.
4.  **Warning:** If you run out of mana mid-combat, your fire sword becomes a rusty piece of iron again.

### 🦾 Cyberpunk: Implants
Want zoom eyes or gorilla arms?
1.  Find a **Ripperdoc** (NPC service).
2.  Pay the credits (nothing is free in the future).
3.  **Humanity Cost:** Each implant takes a piece of your soul (**Humanity**).
    *   If you get too many, you'll turn into a **Cyberpsycho** (a killer toaster on legs) and lose control of your character.

---

## 🛒 SHOPS AND SERVICES (SIS)

Talk to NPCs to trade.
*   **AI Suggests, You Decide:** When you talk to a merchant or healer, the AI will suggest their services (repair, sell, heal), but a **"View Services"** button will appear so you can decide when to enter transactional mode.
*   **Haggling:** Your **Commerce** skill (based on Charisma) determines prices. If you're ugly or unpleasant, they'll rip you off.
*   **Selling:** **Right-click** on an item in your inventory to sell it to the shopkeeper or drag it onto them.

---

## 🎒 INVENTORY MANAGEMENT (Tetris)

*   **Weight:** You have a carrying limit (Strength + Size). If you carry too much junk, you'll be slow and penalized (Hoarding is not your friend).
*   **Panels:**
    *   **Equipment:** What you're wearing.
    *   **Belt:** Quick access in combat (costs less time to use potions from here).
    *   **Backpack:** The bottom of the bag.
*   **Fluid Use:** Drag a potion or food directly onto **your face** (the portrait) to consume it instantly. You can also use the context menu (right-click -> Use).

---

## 🛠️ FINAL ADJUSTMENTS

In the **Settings** menu, you can tweak everything:
*   **🌍 Language:** The AI will translate the entire game and responses on the fly. Polyglot mode activated.
*   **👁️ Appearance:** Font size and colors, so you don't go blind. Neon borders and smoothed shadows for total immersion.
*   **🧠 AI Settings:** Change model, temperature, etc. (Remember what we discussed at the beginning of the manual about the flag `--advanced` if you're someone who wants to tweak everything).

---

## 🎭 DIFFICULTY AND HUMOR (Customize your suffering)

Before starting, remember that the AI not only narrates but also **adjusts the world** according to your preferences. These parameters are chosen when creating the world and are permanent for that world:

*   **🎮 Difficulty (AI Managed):** It's not a simple damage multiplier. The game tells the AI: "Hey, the difficulty is this, act accordingly."
    *   **Easy:** You'll never die (or it will be almost impossible), situations are simpler, prices are cheaper, and enemies are more clumsy. The AI will reason each scene to make your path a bed of roses.
    *   **Normal:** The standard balance.
    *   **Challenge:** The AI will be relentless, prices prohibitive, and any mistake could be your last.

*   **🃏 Humor Tone:** Defines how the AI speaks to you and what kind of events occur. Although each model has its own way of interpreting the concept of "humor," the AI will try to adapt to what you choose... or not:
    *   **Serious:** An epic, dark, and formal narrative.
    *   **Sarcastic:** The AI will laugh at your failures, throw constant jabs, and use an ironic tone.
    *   **Delirious:** Prepare for the absurd. Flying cows, surreal situations, and total chaos managed by the AI's most twisted logic.

---

## 🚧 Notice: Early Access

RolemIAster is in **active development**, simmering slowly.
*   You may encounter bugs (or "unexpected features").
*   I add new things every week.
*   Your feedback is golden! Tell me what you like and what you really like. (If you don't like something, tell me too, but kindly).

Now go, roll initiative, and create your legend!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->