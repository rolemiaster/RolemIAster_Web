****************************************************************************************************
10/05/2026 02:24 - Juegos de prueba largos: acciones conectadas a mecánicas reales - Beta_v063
****************************************************************************************************
- What's New (VI):
  - **🧩 Acciones con consecuencias más reales**
    - He corregido casos en los que la aventura contaba que habías usado una habilidad, un objeto, un implante o un recurso, pero luego la ficha no siempre reflejaba bien lo ocurrido.
    - A partir de ahora debería notarse mejor cuándo una acción consume aguante, munición o consumibles, cuándo afecta a un enemigo y cuándo el personaje gana progreso por lo que acaba de hacer.
  - **🛒 Comercio y servicios más fiables**
    - Comprar, instalar implantes, usar consumibles y tratar con vendedores debería sentirse más consistente.
    - Si la escena dice que hay un servicio disponible, el juego debería responder mejor con opciones útiles y menos momentos de "vale, ¿y ahora dónde pulso?".
  - **🌍 Fantasía y cyberpunk con identidad más clara**
    - He reducido mezclas raras entre ambientaciones. Los mundos medievales deberían hablar más como mundos medievales, y los mundos cyberpunk deberían apoyarse más en tecnología, implantes, servicios urbanos y equipo propio de su estilo.
    - Esto afecta sobre todo a tiendas, escenas, recursos y detalles del entorno.
  - **🎲 Inicio de partida más agradable**
    - La pantalla entre crear personaje y empezar la historia ya no debería enseñar bloques enormes de información interna.
    - Ahora tiene aspecto de pantalla de carga de rol, cambia según la ambientación y puede mostrar consejos breves del manual mientras prepara la primera escena.
    - También puede preparar una imagen relacionada con el contexto sin hacerte esperar más: si llega a tiempo, aparece; si no, la partida empieza igualmente.
  - **🛡️ Derrota e inconsciencia mejor resueltas**
    - He corregido qué ocurre al llegar a 0 PV según la dificultad.
    - En fácil y normal, el personaje cae inconsciente y la historia continúa con un salto temporal contextual. En difícil, si falla la resistencia, la partida muestra una muerte contextual y una pantalla clara para aceptar y volver a selección.
    - Esto evita que la aventura siga como si nada cuando el personaje ya estaba en el suelo. Que una derrota duela está bien; que el juego la ignore, no tanto.
  - **🧠 Partidas con más memoria**
    - Al cargar una partida o avanzar varios turnos, el juego debería continuar mejor desde lo último que viste en pantalla.
    - También debería recordar mejor la intención real de tus decisiones, reduciendo respuestas que parecen volver atrás o interpretar una opción de forma demasiado genérica.
  - **✂️ Narración más cómoda de leer**
    - He ajustado las respuestas de exploración para que no vuelvan a convertirse en paredes enormes de texto.
    - La narración puede seguir siendo rica, pero debería respirar mejor entre párrafos y ser más amable de leer durante partidas largas.
  - **🧼 Menos restos raros en pantalla**
    - He limpiado casos en los que podían aparecer etiquetas, formatos extraños, opciones duplicadas o textos que no deberían llegar al jugador.
    - En general, la interfaz debería mostrar más aventura y menos costuras.
  - **🔧 Más estabilidad en sesiones largas**
    - He revisado sesiones prolongadas jugando con creación de personaje, comercio, implantes, combate, consumibles, munición, carga de partida y continuidad.
    - El objetivo de este bloque es claro: menos interrupciones, menos incoherencias y más sensación de que lo que haces en la historia tiene peso dentro de la partida.

****************************************************************************************************
27/04/2026 18:22 - Thế giới chung, nhập cuộc và chiến đấu mạch lạc hơn - Beta_v062
****************************************************************************************************
- What's New (VI):
  - **🌍 Thế giới chung hợp lý hơn hẳn**
    - Tôi đã cải thiện tính liên tục khi nhiều nhân vật cùng chia sẻ một thế giới. Giờ đây, trò chơi tái sử dụng tốt hơn các địa điểm đã tồn tại và ít để lại khoảng trống để bịa ra “cùng một khu vực, nhưng với tên gọi khác và cái mũ khác”.
    - Tôi cũng đã sửa thông tin vị trí trong bộ chọn và hồ sơ, để mỗi nhân vật hiển thị vị trí thực tế của mình chứ không phải vị trí mượn của người hàng xóm.
  - **👥 NPC mạch lạc hơn và ít bị phân thân**
    - Tôi đã củng cố logic để một NPC hiện có sẽ xuất hiện trở lại chính nó khi đến lúc, thay vì tự tạo ra với một cái tên khác, khuôn mặt khác hoặc một thẻ mới xuất hiện từ hư không.
    - Ngoài ra, sự thù địch do một nhân vật gây ra sẽ không còn lây lan sang tất cả những người khác một cách thần kỳ nữa. Nếu Kaelen tức giận với bạn, ý tưởng là cô ấy tức giận với bạn... chứ không phải với toàn bộ loài người.
  - **🎬 Nhập cảnh và khám phá ít "kịch" kỳ quái hơn**
    - Tôi đã sửa nhiều trường hợp mà lời kể ám chỉ rằng có ai đó đang ở trước mặt bạn, nhưng hệ thống lại không hỗ trợ điều đó từ bên dưới. Giờ đây, có ít người bán hàng ma quái hơn, ít người đối thoại bốc hơi hơn và ít cảnh trông giống như một vở kịch thử nghiệm không có ngân sách.
    - Tôi cũng đã giảm thiểu các trường hợp AI chèn quà tặng, hàng tồn kho hoặc vật phẩm tường thuật vào những chỗ không phù hợp, đặc biệt là trong các cảnh đến và cảnh đầu tiên.
  - **⚔️ Chiến đấu và quyết định ít vấp ngã hơn**
    - Tôi đã củng cố tính liên tục giữa khám phá và chiến đấu để việc tham gia chiến đấu phụ thuộc tốt hơn vào các NPC thực sự có mặt chứ không phải dựa vào khói tường thuật.
    - Tôi cũng đã sửa nhiều điểm kẹt nơi cảnh vẫn diễn ra, nhưng giao diện lại đưa ra các quyết định tồi tệ hoặc chung chung. Ít lựa chọn "Tiếp tục" vì đã xong, nhiều lựa chọn có ý định thực sự hơn.
  - **🧬 Tạo nhân vật và bối cảnh đáng tin cậy hơn**
    - Tạo nhân vật ngẫu nhiên đã ổn định hơn và tôn trọng định dạng tiểu sử mà trò chơi mong đợi.
    - Tôi đã điều chỉnh nhiều sự không nhất quán về bối cảnh và tài nguyên để cyberpunk, giả tưởng và các thể loại phái sinh của chúng không bị trộn lẫn như thể một quán rượu thời trung cổ và một phòng phẫu thuật bí mật đã quyết định thuê cùng một địa điểm.

****************************************************************************************************
23/04/2026 03:01 - Sửa lỗi lối chơi - Beta_v061
****************************************************************************************************
- What's New (VI):
  - **📖 Cải thiện nhịp độ khám phá**
    - Tôi đã ngăn chặn các lượt khám phá bị ảnh hưởng bởi các quy tắc từ những thời điểm khác trong trò chơi. Điều này giúp giảm bớt các phản hồi dài dòng, sự lặp lại kỳ lạ và những phân cảnh vốn dĩ đã kết thúc nhưng vẫn cố kéo dài thêm.
    - Tôi cũng đã tinh chỉnh tông giọng để phần tường thuật vẫn giữ được độ sâu mà không cần phải viết thành một cuốn tiểu thuyết trong mỗi lần tương tác.
  - **🎯 Các nút bấm nhất quán hơn với ngữ cảnh**
    - Tôi đã sửa một số trường hợp AI khiến giao diện hiển thị các nút chung chung.
    - Giờ đây, trò chơi xử lý các lộ trình này tốt hơn và biến chúng thành các quyết định thực tế, vì vậy sẽ không còn những khoảnh khắc kiểu “mọi thứ trông rất tuyệt, nhưng mình phải nhấn vào đâu cơ chứ”.
  - **🦾 Cyberpunk đã hoạt động và mang âm hưởng đúng chất cyberpunk trở lại**
    - Tôi đã sửa lỗi trộn lẫn bối cảnh, vốn có thể làm xuất hiện các yếu tố thời trung cổ khi tạo nhân vật trong các thế giới cyberpunk.
    - Tôi cũng đã sửa lại chỉ số Nhân tính (Humanity) để nó tính toán và hiển thị chính xác như mong đợi, ngay cả trong các thế giới có tên riêng. Nếu một nhân vật có cấy ghép, trò chơi sẽ không còn coi họ như thể vấn đề lớn nhất của họ là hết mana nữa.
  - **💰 Giao dịch đáng tin cậy hơn**
    - Tôi đã đảm bảo các thương nhân được mô tả trong cốt truyện sẽ được hệ thống công nhận đúng là người bán hàng, tránh các lỗi treo khi mở giao diện buôn bán.
    - Ngoài ra, khi bán vật phẩm cho thương nhân thông thường, giá cả hiện đã chính xác thay vì những mức giá khiến bạn chỉ muốn cất kiếm và lặng lẽ rời đi.
  - **🎬 Khởi đầu trò chơi nhất quán hơn**
    - Tôi đã củng cố sự nhất quán của các phân cảnh đầu game khi trò chơi giới thiệu một ai đó xuất hiện trực tiếp trước mặt nhân vật, nhằm giảm thiểu các trường hợp tường thuật gợi ý rõ ràng về sự hiện diện của họ nhưng hệ thống bên dưới lại không hỗ trợ tốt.

