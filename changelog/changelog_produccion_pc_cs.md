****************************************************************************************************
07/02/2026 20:26 - Sistema de Interpretación Semántica de Combate - BETA_v054
****************************************************************************************************
🧪 YA DISPONIBLE:

⚠️ **AVISO IMPORTANTE:** EL JUEGO PUEDE MIGRAR LA ANTIGUA BASE DE DATOS PARA LA NUEVA ESTRUCTURA MEDIANTE OPCIONES DEL LAUNCHER. NO RECOMIENDO ESTO, AUNQUE FUNCIONE TU ANTIGUA PARTIDA, MUCHAS COSAS ESTARÁN ROTAS. MI RECOMENDACIÓN ES ELIMINAR TODAS LAS PARTIDAS ANTERIORES GUARDADAS. NO ES NECESARIO BORRAR LA BASE DE DATOS AL COMPLETO SALVO CASO EXTREMO.

Cambios:

- 🌍 **Gestor de Mundos y Personajes:** Ahora tienes total libertad. Crea tus propios Mundos con sus propias reglas y ambientación, y dentro de cada uno, crea tantos personajes como quieras. **Nota Importante:** Todos los personajes de un mismo mundo comparten la misma línea temporal y los eventos sucedidos, lo que sienta las bases para el futuro modo multijugador.
- 🧠 **Memoria Contextual (Súper RAG):** La IA ahora tiene "sentidos". Al buscar información en el Lore o en su memoria, tiene en cuenta dónde estás, con quién estás, si estás herido y qué acaba de pasar. ¡Es mucho más intuitivo y coherente!
- 🌍 **Lore en el Primer Personaje:** ¿Escribías una descripción épica de tu mundo y la IA la ignoraba en tu primer personaje? ¡Solucionado! Ahora la descripción manual del mundo llega directamente a la IA durante la creación inicial.
- ⚙️ **Sistema de Mundos Mejorado:** He independizado el nombre de tu mundo de las reglas técnicas.
- 📝 **Claridad en Creación:** He mejorado las instrucciones internas para que la IA entienda mejor cuándo debe inventar un trasfondo.
- 🧠 **Combate por Texto Libre:** Escribe acciones como "lanzar hechizo de curación" o "desenfundar espada". La IA entiende tu intención.
- 🎨 **¡Nueva Interfaz Épica!** Remodelación completa estilo RPG con menús animados y bordes neón.
- 🎬 **IA Director de Escena (MEJORADO):** El combate ahora cobra vida con eventos ambientales.
- ⚔️ **Desenfundar con Palabras:** Escribe "desenfundar espada" en lugar de hacer clic. ¡Cuidado en combate!
- 📖 **Hechizos Reconocidos:** La IA conoce tu libro de hechizos completo.
- 🌍 **Narrativa en tu Idioma:** Respeta estrictamente el idioma seleccionado, evitando mezclas.
- 🛡️ **No Más Turnos Perdidos:** Si el juego no entiende, te pedirá aclaraciones. Tu turno NO se pierde.
- 🎒 **Inventario Manual:** Interfaz de arrastrar y soltar para mover objetos.
- 🧪 **Uso de Pociones Fluido:** Arrastra sobre retrato o usa el menú de clic derecho.
- 🩸 **Corrección de Daño:** Barra de vida corregida. Ya no eres inmortal.
- 👻 **Adiós a los Items Fantasma:** Reparación automática de objetos que la IA olvida crear.
- 🐛 **Corrección Crítica NPC:** Decisiones tácticas de NPCs corregidas.
- 🎒 **Corrección Inventario Inicial:** Personajes ya no empiezan desnudos.
- 🎲 **Creación de Personaje:** Exploit de puntos infinitos corregido.
- 🖼️ **Retratos Arreglados:** El sistema encuentra imágenes correctas independientemente del nombre del mundo.
- 💍 **Iconos Inteligentes:** Objetos y anillos con iconos precisos.
- 🧪 **Tooltips Mejorados:** Información completa al pasar el ratón.
- 🎵 **Mejoras de Audio:** Música no se detiene al pulsar botones.

****************************************************************************************************
06/02/2026 02:32 - Podpora Vulkanu (AMD/Intel) a robustní zpracování chyb - Beta_v053
****************************************************************************************************
- What's New (CS):
  - 🚀 **Hybridní engine Vulkan:** Oficiální podpora pro grafické karty AMD a Intel! Hra nyní obsahuje dedikovaný engine Vulkan, který se aktivuje automaticky (nebo ručně) pro zrychlení AI na sestavách bez NVIDIA.
  - ⚙️ **Úplná kontrola nad enginem:** Přidali jsme možnost "Vynutit Vulkan" jak do spouštěče, tak do nastavení. Pokud máte problémy s CUDA nebo chcete vyzkoušet výkon Vulkanu (který na mnoha konfiguracích letí), máte to ve svých rukou.
  - 🚦 **Stav systému:** Nyní v panelu stavu přesně uvidíte, jaký engine řve pod kapotou (🟢 ZELENÁ pro CUDA, 🔴 ČERVENÁ pro Vulkan).
  - 🛡️ **Semafor AI:** Pokud se umělá inteligence "unaví" (překročí svou kvótu) nebo vypadne internet, hra vás upozorní jasným a užitečným oknem, místo aby vás nechala čekat v tichosti.
  - 🔄 **Ochrana proti zásekům:** Pokud dojde k chybě připojení, hra už "nerozbije" konverzaci. Vaše možnosti dialogu se znovu objeví, takže to můžete zkusit znovu bez ztráty postupu.
  - ☁️ **Cloudová paměť:** Nabídka nastavení si nyní mezi relacemi správně pamatuje vaše preference poskytovatelů cloudu.

****************************************************************************************************
03/02/2026 20:23 - Optimalizace paměti VRAM a stabilita načítání - Beta_v052
****************************************************************************************************
- What's New (CS):
  - 🧠 **Optimalizovaný mozek:** Opravili jsme závažnou chybu, kvůli které se UI snažila „myslet dvakrát“ najednou, což zdvojnásobovalo využití paměti grafické karty a způsobovalo extrémní zpomalení nebo pády hry. Vaše VRAM vám poděkuje!
  - 💾 **Bezpečné načítání:** Vylepšili jsme celkovou stabilitu při načítání uložených her, abychom zajistili, že návrat do vašeho dobrodružství bude vždy plynulý.

****************************************************************************************************
02/02/2026 00:18 - Kritická oprava: Stabilita, Multi-GPU a vylepšení lokalizace - Beta_v051
****************************************************************************************************
- What's New (CS):
  - 🚑 **Kritická oprava:** Vyřešen problém, který za určitých vzácných okolností bránil spuštění hry („Celkové selhání“) kvůli poškození databáze, které spouštěč nedokázal vyčistit. Nyní je možnost „Vymazat databázi“ mnohem účinnější.
  - ⚡ **Vylepšení hardwaru:** Opravena chyba, kvůli které režim „Automatická konfigurace“ v některých sestavách s neidentickými GPU ignoroval výkon systémů s více grafickými kartami.
  - 🛠️ **Nástroje:** Do spouštěče byla přidána nová možnost pro snadné otevření záznamu (logu) předchozí relace pro usnadnění podpory.
  - 🌍 **Lokalizace:** Opraveno několik tlačítek, která se ve spouštěči zobrazovala v angličtině (Yes/No). Nyní respektují vybraný jazyk.
  - 📖 **Rozhraní:** Vylepšen formát textu informací o verzi pro lepší čitelnost.
  
  - **Již brzy:** Další bod v procesu implementace: kompatibilita s GPU AMD, NVIDIA a Intel prostřednictvím rozhraní Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Oprava manuálů a stabilita - Beta_v050
****************************************************************************************************
- Novinky:
  **Výkon Multi-GPU a kritické opravy!**
  
  * **🚀 Podpora Multi-GPU:** Implementována možnost rozdělit velké modely AI mezi více grafických karet. *Nyní můžete využít celý svůj hardwarový arzenál; Neomezená moc!*
  * **🛡️ Stabilita:** Přidány všechny chybějící knihovny DLL, aby se zabránilo neočekávaným pádům. *Obrnil jsem engine; pokud teď selže, bude to vina kritického neúspěchu při hodu kostkou.*
  * **📖 Dynamické webové manuály:**
    * **Skutečný výběr:** Nabídka jazyků nyní před zobrazením ověřuje, které soubory skutečně existují. *Konec fantomových možností, které nic nedělaly; věštecká magie 5. úrovně.*
    * **Oprava chyby 403:** Vyřešena chyba oprávnění, která bránila zobrazení seznamu změn přímo ve hře. *Naučil jsem aplikaci správně požádat o průchod („Sezame, otevři se!“).*
  * **🌍 Jazyky:** Revize textů a překladů. *Režim polyglota aktivován.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizace a vylepšení AI - Beta_v049
****************************************************************************************************
- Novinky:
  Vyladili jsme herní zážitek důležitými opravami a novým vizuálním nástrojem:

  * **Čistý a spolehlivý inventář:** Už žádné nalézání „fantomových předmětů“ nebo věcí s podivnými názvy v batohu. Implementovali jsme systém narativního ověřování, který zajišťuje, že vše, co seberete nebo koupíte, v herním světě skutečně existuje.
  * **Plynulé dialogy:** Opravili jsme ta otravná tlačítka, která se někdy zobrazovala jako „Unknown“ nebo nereagovala. Nyní budou možnosti dialogu s NPC vždy zobrazovat správný text.
  * **Robustní tvorba postav:** Vytvoření vašeho hrdiny je nyní solidní proces. Vyřešili jsme konflikty, které někdy při kombinování biografie a statistik zanechávaly kartu postavy neúplnou nebo s chybnými statistikami.
  * **Nová stavová lišta AI:** Nyní můžete vidět mozek stroje v chodu! Do horní části jsme přidali lištu, která v reálném čase zobrazuje rychlost odezvy a využití paměti. Vždy tak budete vědět, zda AI „přemýšlí“ o vašem dalším dobrodružství.

****************************************************************************************************
28/01/2026 03:50 - Kritická oprava kompilace - Beta_v048
****************************************************************************************************
- Novinky:
  Vyřešena kritická chyba, která bránila spuštění hry u nových instalací. Vylepšena stabilita a kompatibilita s různými sestavami.

****************************************************************************************************
26/01/2026 19:38 - Webový Launcher & Podpora RTX 50 - Beta_v047
****************************************************************************************************
- Novinky:

  > [!DŮLEŽITÉ]
  > **Z DŮVODŮ KOMPATIBILITY JE NUTNÉ ODSTRANIT PŘEDCHOZÍ DATABÁZI, JINAK JE VELMI PRAVDĚPODOBNÉ, ŽE DOJDE K CHYBÁM V KONFIGURACI AI**
  > **(Řešení: Klikněte na ikonu ozubeného kola ⚙️ v Launcheru -> Smazat databázi)**

  *Kritická podpora pro RTX řady 50: Vyřešena závažná chyba, která způsobovala neočekávané ukončení při pokusu o generování postav na nových grafických kartách NVIDIA (RTX 5070, 5080, 5090).
  (Jelikož nemám k dispozici RTX řady 5000, nemohl jsem přímo ověřit, zda je řešení 100%, ale teoreticky by to mělo být vyřešeno. Čekám zde na vaše vítězné chorály!)
  
  *Aktualizace AI enginu: Aktualizovali jsme lokální mozek hry, aby byl kompatibilní s nejnovějším hardwarem, čímž zajišťujeme, že si offline zážitek mohou užít všichni, bez ohledu na to, jak moderní je jejich vybavení.
  
  *Nový Launcher: Aktualizace a novinky v reálném čase z oficiálního webu.


****************************************************************************************************
26/01/2026 06:49 - Webová integrace dokumentace - Beta_v045
****************************************************************************************************
- Novinky:
  *Uživatelská příručka a seznam změn se nyní načítají přímo z našeho oficiálního webu, což zaručuje, že budete mít vždy nejaktuálnější informace bez nutnosti stahovat opravy. Zahrnuje inteligentní offline režim.

  *Posílili jsme stabilitu hry, aby při spuštění nikdy nezamrzla. Navíc se obchodníci vrátili z dovolené v limbu: nyní se objevují správně, mají zboží v regálech a respektují zasazení světa (žádné kouzelné lektvary v budoucnosti).*

  *Byla opravena chyba, která neumožňovala měnit parametry AI a výběr modelu AI, kvůli čemuž někteří uživatelé s omezenou VRAM nemohli hrát.
  **V případě nutnosti úpravy parametrů AI důrazně doporučuji nejprve zkusit snížit % VRAM na 85 %, restartovat a vyzkoušet. Pokud to stále nestačí, doporučuji zkontrolovat, zda VRAM GPU není využívána jinými procesy mimo hru (v případě potřeby restartujte PC, zavřete aplikace, které mohou zabírat VRAM). Pokud ani po snížení množství VRAM až na 70 % hra nefunguje, nedoporučuji dále snižovat, protože hra nebude schopna zpracovat prompty odesílané do AI. I když se tedy podaří zabránit přetečení VRAM, hra nebude fungovat, protože nebude mít s čím pracovat. V takovém případě je jedinou zbývající možností přejít na nižší model, vrátit parametry AI na automatické nastavení a restartovat.

****************************************************************************************************
26/01/2026 04:00 - Stabilizace jádra a diagnostika služeb - Beta_v044
****************************************************************************************************
- Novinky:
  Stabilizace jádra a diagnostika služeb. Kritické opravy při generování postav, UI (MainWindow) a optimalizace sémantického vyhledávání. Zahájení hloubkové diagnostiky režimu služeb.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logy a stabilita - Beta_v043
****************************************************************************************************
- Popis:
  Opravný patch zaměřený na diagnostiku a opravu smyčky v uživatelském rozhraní.

- Změny:
  Opravena vizuální chyba dialogu restartu
  Nový systém logování v %LOCALAPPDATA% pro diagnostiku
  Optimalizace interního výkonu

****************************************************************************************************
24/01/2026 06:30 - Podpora backendu biografie - Beta_v042
****************************************************************************************************
- Popis:
  Zpřístupnění dat biografie pro UI a úpravy i18n.

<!-- source_hash: 5f218fc5 -->
