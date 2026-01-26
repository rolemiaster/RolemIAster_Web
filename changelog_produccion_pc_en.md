****************************************************************************************************
26/01/2026 04:45 - SDIA Stabilization & Trade Fixes - Beta_v045
****************************************************************************************************
- What's New:
  We have reinforced game stability so it never hangs at start. Also, merchants returned from their holidays in limbo: they now appear correctly, have stock on shelves, and respect world setting (no magic potions in the future).

  Fixed a bug preventing AI parameter modification and AI model selection, which blocked users with limited VRAM from playing.
  **If you need to modify AI parameters, I strongly recommend trying first by lowering VRAM % to 85%, restart and test. If this is not enough, check that GPU VRAM is not being used by other non-game processes (restart PC if needed, close apps using VRAM). If after lowering VRAM amount even to 70% it still doesn't work, I do not recommend lowering further because the game won't manage prompts sent to AI. In that case, the only remaining option is to downgrade to a lower model, reset AI parameters to automatic, and restart.**

****************************************************************************************************
26/01/2026 04:00 - Core Stabilization & Services Diagnostics - Beta_v044
****************************************************************************************************
- What's New:
  Core Stabilization and Services Diagnostics. Critical fixes in character generation, UI (MainWindow), and semantic search optimization. Started deep diagnostics of service mode.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs & Stability - Beta_v043
****************************************************************************************************
- Description:
  Corrective patch focused on diagnostics and UI loop fix.

- Changes:
  Fixed visual bug in restart dialog
  New log system in %LOCALAPPDATA% for diagnostics
  Internal performance optimizations

****************************************************************************************************
24/01/2026 06:30 - Biography Backend Support - Beta_v042
****************************************************************************************************
- Description:
  Biography data exposure for UI and i18n adjustments.

