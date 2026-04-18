# 🐉 Chào mừng đến với RolemIAster!

Hãy cầm lấy xúc xắc của bạn (hoặc chuột) và sẵn sàng cho những cuộc phiêu lưu mà giới hạn duy nhất chính là sự kỳ quái của trí tưởng tượng! **RolemIAster** là một trò chơi nhập vai vô tận được cung cấp bởi Trí tuệ Nhân tạo, cho phép bạn trở thành anh hùng (hoặc kẻ phản diện) trong những câu chuyện của riêng mình.

---

## ⚠️ TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM (Phần nhàm chán nhưng cần thiết)

**ĐỌC HOẶC BẠN SẼ CHỊU CƠN THỊNH NỘ CỦA XÚC XẮC:**

1.  **🤖 AI Tích hợp Cục bộ:** RolemIAster mang bộ não kỹ thuật số của riêng nó. Nó hoạt động **không cần internet** và mà bạn không phải làm gì phức tạp. Chỉ cần cài đặt và chơi!
2.  **☁️ Tùy chọn Đám mây:** Nếu bạn muốn chi tiền cho các AI bên ngoài (OpenAI, Gemini...), đó là quyết định của bạn với thẻ tín dụng. Chi phí là do bạn chịu.
3.  **🎲 Sáng tạo Hỗn loạn:** AI sẽ tự tạo ra câu chuyện trong quá trình chơi. Nếu người dẫn chuyện trở nên điên rồ và nói rằng bò đang rơi xuống từ bầu trời, đừng nhìn chúng tôi. Nhà phát triển không chịu trách nhiệm về những điều điên rồ mà mô hình tạo ra.
4.  **🏗️ Truy cập Sớm:** Đây vẫn đang trong quá trình phát triển. Nếu bạn tìm thấy một lỗi, đó không phải là lỗi, đó là một "tính năng" bất ngờ! (Xin vui lòng gửi phản hồi cho chúng tôi, điều đó rất hữu ích).

---

## 🖥️ YÊU CẦU HỆ THỐNG VÀ BỘ NÃO KỸ THUẬT SỐ (AI)

RolemIAster hoạt động với **Trí tuệ Nhân tạo Cục bộ**. Điều này có nghĩa là PC của bạn sẽ làm công việc suy nghĩ nặng nhọc. Bạn không cần internet, nhưng cần một card đồ họa không phải từ thời khủng long. (Lưu ý: Nếu phòng bạn lạnh, trò chơi này có thể hoạt động như một máy sưởi miễn phí).

### ⚙️ Khái niệm cho người mới bắt đầu

**VRAM (Bộ nhớ Video)** là nhiên liệu của AI.
*   Nhờ **TurboQuant**, RolemIAster giờ đây có thể ghi nhớ **hơn 100.000 từ (tokens)** — gần gấp ba lần so với trước đây — mà không làm quá tải card đồ họa của bạn.
*   Nếu GPU của bạn hết bộ nhớ, trò chơi sẽ chạy chậm hơn một con ốc sên bị hen suyễn.

---

### 📊 DANH MỤC MÔ HÌNH (Chọn "liều thuốc" của bạn)

Quản lý AI của bạn tại **Cài đặt → AI Tích hợp Cục bộ → Quản lý Mô hình**.

#### 🏆 Gia đình Qwen 3.5 — Được huấn luyện đặc biệt cho RolemIAster

Các mô hình này đã được huấn luyện bằng **Fine-Tuning Giám sát (SFT)** để nắm vững các quy tắc kể chuyện của trò chơi. Đây không phải là các mô hình chung chung: chúng thuộc lòng hợp đồng JSON của RolemIAster, NPC, kho đồ và chiến đấu.

| Mô hình       | Kích thước | VRAM Tối thiểu | Hạng | Nhận xét                                                                   |
|---------------|------------|----------------|------|------------------------------------------------------------------------------|
| **Qwen3.5-2B** | ~1.5GB     | **3GB**        | B    | ⚡ **Kẻ Tốc Độ.** Nhanh nhất trong tất cả. Lý tưởng cho GPU cơ bản hoặc chơi không có GPU chuyên dụng. |
| **Qwen3.5-4B** | ~2.8GB     | **4GB**        | A    | ✅ **CÂN BẰNG.** Tốc độ và chất lượng tối ưu. Mô hình tiêu chuẩn được khuyến nghị cho hầu hết người chơi. |
| **Qwen3.5-9B** | ~5.5GB     | **8GB**        | S    | 🌟 **Người Kể Chuyện.** Cốt truyện phong phú và sự mạch lạc vượt trội. Dành cho những ai có RTX 3070 trở lên. |

---

### 🎮 HƯỚNG DẪN CHỌN NHANH

| Card đồ họa của bạn | VRAM | Mô hình được đề xuất | Kết quả                                |
|----------------------|------|--------------------|----------------------------------------|
| GTX 1050/1060 / Không có GPU | 4GB  | **Qwen3.5-2B**     | 🆗 Vừa đủ để chơi, rất vừa vặn...     |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**     | ✅ Trải nghiệm tốt                      |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**     | 🚀 Nhanh và chính xác                   |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**     | 🌟 Trải nghiệm lý tưởng                 |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**     | 👑 Chất lượng tối đa, phản hồi siêu nhanh |

**💡 Mẹo chuyên nghiệp:** Luôn để lại khoảng **2GB VRAM trống** cho hệ điều hành, nếu không Windows sẽ bắt đầu khóc và đóng các ứng dụng.

---

### 🚨 TRỢ GIÚP! PC CỦA TÔI CHẠY CHẬM! (Vấn đề VRAM)

Nếu trò chơi mất nhiều thời gian để phản hồi hơn crush của bạn trên WhatsApp, có lẽ bạn đã hết VRAM.

**Dấu hiệu bạn đã quá tham lam:**
1.  **Mô hình chuyển sang RAM:** PC sử dụng bộ nhớ thông thường thay vì đồ họa. Kết quả: CHẬM KINH KHỦNG.
2.  **Tràn nhẹ (1-2GB):** Mất 30-60 giây cho mỗi phản hồi.
3.  **Tràn vừa phải (3-5GB):** 2-5 phút. Bạn có thể đi pha cà phê.
4.  **Tràn nghiêm trọng:** 10-30 phút. Không thể chơi được.

#### 🛡️ Quy trình khẩn cấp
Nếu mọi thứ trở nên tồi tệ, hãy làm theo các bước này theo thứ tự:

1.  **📉 Giảm % VRAM:** Vào Cài đặt và giảm xuống **85%**. Khởi động lại và thử lại.
2.  **🧹 Dọn dẹp:** Đóng trình duyệt với 40 tab mở đó. Chúng đang chiếm hết bộ nhớ của bạn.
3.  **🛑 Giới hạn 70%:** Không bao giờ được giảm dưới **70%** VRAM được phân bổ.
    *   *Tại sao?* Bởi vì AI cần không gian để "suy nghĩ" (bộ nhớ đệm KV). Nếu bạn cấp ít hơn 70%, nó sẽ bị trống và báo lỗi.
4.  **🔙 Rút lui chiến thuật:** Nếu không có gì hiệu quả, hãy quay về mô hình nhỏ hơn (từ 9B xuống 4B, hoặc từ 4B xuống 2B).

---

### ⚙️ CẤU HÌNH NÂNG CAO MÔ HÌNH ("Tối đa hóa")

> **CHẾ ĐỘ CHUYÊN GIA:** Nếu bạn là người chơi chuyên nghiệp và muốn truy cập vào cấu hình mô hình nâng cao (thêm mô hình GGUF của riêng bạn tải xuống từ HuggingFace, điều chỉnh lớp, v.v.), bạn phải khởi động trò chơi bằng lệnh: `--advanced`.

Dành cho những ai thích tùy chỉnh trong **Cài đặt → AI Tích hợp Cục bộ**:

| Tùy chọn           | Chức năng                                             | Khuyến nghị                                    |
|--------------------|-------------------------------------------------------|-------------------------------------------------|
| **GPU Layers**     | Bao nhiêu phần của mô hình được tải vào card đồ họa  | **-1** (Có nghĩa là "TẤT CẢ". Đừng chạm vào trừ khi bạn biết mình đang làm gì) |
| **Ngữ cảnh Tối đa** | "Bộ nhớ ngắn hạn" của AI                               | **16384 - 32768** (Ít hơn thế này AI sẽ bị lãng quên) |
| **Nhiệt độ**       | Sáng tạo vs. Điên rồ                                  | **0.7 - 0.8** (Cao hơn = điên rồ hơn; Thấp hơn = robot hơn) |
| **RAG Lịch sử**    | Ghi nhớ những thứ từ lâu                               | **Có** (Thiết yếu cho các chiến dịch dài)        |
| **Bộ nhớ đệm Embeddings** | Tăng tốc tìm kiếm ký ức                               | **Có** (Giúp chạy nhanh hơn)                     |

---

### 🔧 KHẮC PHỤC SỰ CỐ (Troubleshooting)

| Vấn đề          | Giải pháp                                                                    |
|-----------------|------------------------------------------------------------------------------|
| **AI Chậm / Lag** | Kiểm tra xem `GPU Layers` có phải là -1 không. Đóng Chrome. Giảm `Contexto Máximo`. |
| **Lỗi Bộ nhớ (OOM)** | Giảm `Contexto Máximo` hoặc chọn mô hình nhỏ hơn (3B).                   |
| **AI Lảm nhảm / Ảo giác** | Giảm `Temperatura` xuống 0.6. Nếu vẫn điên rồ, hãy khởi động lại ứng dụng. |

---

### 🌐 NHÀ CUNG CẤP THAY THẾ (Chỉ dành cho Chuyên gia)

> **Lưu ý:** AI cục bộ đi kèm với trò chơi là đủ. Điều này chỉ dành cho người dùng nâng cao hoặc người thích mạo hiểm.

*   **Công cụ Cục bộ Bên ngoài:**
    *   **Ollama / LM Studio:** Nếu bạn đã có các mô hình yêu thích của riêng mình, bạn có thể sử dụng chúng.
*   **API Đám mây (Có phí):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Yêu cầu internet và trả tiền.
    *   Cấu hình tại: **Cài đặt → AI → Thêm Nhà cung cấp Mới**.

---

### 🌍 CÁCH CHƠI? (Đa vũ trụ và Bạn)

Khi mở trò chơi, bạn có hai lựa chọn:

1.  **🆕 Cuộc phiêu lưu mới**: Tạo huyền thoại của bạn từ đầu. Trò chơi sẽ yêu cầu bạn nhập **Tên, Nghề nghiệp, Mô tả Ngoại hình, Mô tả Tâm lý và Bối cảnh/Cớ** cho câu chuyện của bạn. Ngoài ra, bạn sẽ chọn **Mức độ Khó** và **Tông điệu Hài hước** để định hướng chiến dịch.
2.  **💾 Tiếp tục Chơi**: RolemIAster **lưu trữ thời gian thực**. Không có chuyện "tải lại trước khi chết" hay quay đầu. Mỗi quyết định, mỗi sai lầm và mỗi vết thương đều được ghi dấu ấn sâu đậm trong câu chuyện. Đây là một **THỬ THÁCH**: những gì bạn làm đã xong. Sống với hậu quả... hoặc chết cùng chúng.

RolemIAster không phải là một lần chơi riêng lẻ; đó là một **Đa vũ trụ Bền vững**.
*   **Thế giới Vô hạn:** Tạo vũ trụ của riêng bạn (**Fantasy Trung cổ** hoặc **Cyberpunk**) với Lore riêng của họ.
*   **Nhân vật Vô hạn:** Bên trong mỗi thế giới, bạn có thể có tất cả các anh hùng bạn muốn.
*   **Dòng thời gian Chia sẻ:** Hãy cẩn thận! Những gì một nhân vật làm ảnh hưởng đến thế giới của những người khác. AI nhận thức được các anh hùng khác của bạn và sẽ nhận ra họ như những cư dân trong thế giới.
*   **AI có "Giác quan" (Siêu RAG):** Hệ thống RAG (Retrieval-Augmented Generation) hoạt động như một "kẻ mách lẻo" cho AI, cung cấp cho nó ký ức về thế giới, ai đang đi cùng bạn, bạn đang ở đâu và điều gì vừa xảy ra để câu chuyện hoàn toàn mạch lạc.

### Giao diện (Bảng điều khiển của bạn)

*   **Bảng Trái (BẠN):** Thẻ Nhân vật của bạn. Máu, mana, kỹ năng và mức độ hấp dẫn của bạn (Sức hút).
*   **Bảng Giữa (CÂU CHUYỆN):**
    *   **Trên cùng:** Nơi người dẫn chuyện kể những gì đang xảy ra.
    *   **Dưới cùng:** Các nút quyết định của bạn và hộp văn bản để bạn viết những gì bạn muốn làm.
*   **Bảng Phải (ĐỒ CỦA BẠN):** Kho đồ và trang bị. Thiên đường của người tích trữ kỹ thuật số.

---

## 📜 QUY TẮC CHƠI (Vâng, có quy tắc)

RolemIAster sử dụng hệ thống d100 (xúc xắc một trăm mặt) cổ điển và mạnh mẽ.

### 1. Thuộc tính của Bạn (Những gì định nghĩa bạn)
AI tạo ra thuộc tính của bạn dựa trên ngữ cảnh, nghề nghiệp và mô tả bạn đã nhập. Một khi đã tạo xong, bạn có **10 ĐIỂM THÊM** để phân bổ theo ý muốn.
*   **Chi phí Tăng dần:** Tăng một thuộc tính lên 14 tốn 1 điểm. Từ 15 đến 16 tốn 2 điểm. Từ 17 trở lên tốn 3 điểm! Hãy suy nghĩ kỹ về việc phân bổ sức mạnh của bạn.

*   💪 **Sức mạnh (STR):** Sức mạnh thể chất thuần túy của bạn. Ảnh hưởng đến sát thương cận chiến và khả năng mang vác.
*   ❤️ **Thể chất (CON):** Sức bền của bạn. Để chịu đựng đòn tấn công, bệnh tật và độc tố.
*   🐘 **Kích thước (SIZ):** Tầm vóc của bạn. Lớn và nặng, hoặc nhỏ và lén lút.
*   🏃 **Khéo léo (DEX):** Sự nhanh nhẹn, độ chính xác và khả năng không vấp ngã.
*   🧠 **Trí tuệ (INT):** Học hỏi, ghi nhớ và giải câu đố.
*   🔮 **Sức mạnh tinh thần (POW):** Tâm hồn, vận may, ý chí và nguồn năng lượng ma thuật của bạn.
*   😎 **Sức hút (CHA):** Khả năng lãnh đạo, sức hấp dẫn và khả năng lừa dối (hoặc quyến rũ) mọi người.

### 2. Tính toán nhanh (Đặc điểm Phái sinh)
Cơ chế tự động tính toán các con số này dựa trên thuộc tính của bạn:

*   🩸 **Máu (HP):** `CON * 10`. Nếu bằng 0... bạn biết đấy. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Nhiên liệu cho các phép thuật của bạn. Không có mana, không có phép thuật. (Một pháp sư không có mana chỉ là một gã mặc áo choàng đang cosplay).
*   ⚡ **Sức bền (STA):** `((CON+FUE+DES)/3)*10 + POD`. Năng lượng của bạn để chiến đấu và di chuyển mà không gặp nguy hiểm.
*   🧠 **Nhân tính (HUM):** `(CON+POD) * 5`. (Chỉ trong Cyberpunk: Đo lường bạn còn bao nhiêu nhân tính trước khi dây cáp khiến bạn phát điên).
*   ⚔️ **Điểm hành động (AP):** `(INT + DES) / 2`. Xác định Sáng kiến của bạn. Ai ra đòn trước, ra đòn hai lần.

### 3. Kỹ năng của Bạn
Bắt đầu với giá trị cơ bản (ví dụ: Lén lút = DEX + INT) và cải thiện bằng cách sử dụng chúng. Đó là một tỷ lệ phần trăm (%).

### 4. Giải quyết Hành động (Xúc xắc)
Khi bạn cố gắng làm điều gì đó mạo hiểm (leo trèo, nói dối, tấn công...), AI sẽ yêu cầu bạn tung xúc xắc. Trò chơi tung một **d100** vô hình. **(Hãy nhớ: Xúc xắc ghét bạn. Đó là chuyện cá nhân).**

*   **Mục tiêu của bạn:** Lấy được một số **NHỎ HƠN HOẶC BẰNG** cấp độ kỹ năng của bạn.
    *   *Ví dụ:* Bạn có 45% kỹ năng Leo trèo.
    *   Bạn tung được 30: ✅ **Thành công**. Bạn leo như khỉ.
    *   Bạn tung được 80: ❌ **Thất bại**. Bạn bị ngã dập mông.
    *   **Chí mạng:** Tung được ít hơn hoặc bằng **1/5 kỹ năng của bạn** (hoặc 01). Tuyệt vời! Bạn thực hiện một pha parkour đặc biệt kèm theo một cú lộn nhào.
    *   **Sai lầm:** Tung được **99 hoặc 100**. Xúc xắc đã quyết định hôm nay không phải là ngày của bạn. Bạn tụt quần giữa chừng và ngã sấp mặt.

---

## 💡 LỜI KHUYÊN ĐỂ KHÔNG CHẾT (NHANH)

*   **✍️ Mô tả chi tiết:** Đừng chỉ viết "tấn công". Hãy viết: *"Tôi cố gắng né rìu của hắn bằng cách lăn trên mặt đất và đâm con dao găm vào mắt cá chân hắn."* AI sẽ thưởng cho bạn.
*   **🧪 Thử nghiệm:** Bạn không bị giới hạn bởi các nút. Hãy viết những điều điên rồ! AI sẽ ứng biến.
*   **🎭 Nhập vai:** Hãy hòa mình vào nhân vật. Đọc mô tả và hành động như nhân vật của bạn sẽ làm, không phải như bạn làm trong bộ đồ ngủ.

---

## ⚔️ CHIẾN ĐẤU (Vào trận!)

Khi lời nói không còn tác dụng, đến lúc phải đánh nhau. Chiến đấu là **chiến thuật** và hoạt động theo **Tick** (thời gian).

### 🕹️ Cách hoạt động:
*   **Tick:** Mỗi hành động tốn thời gian. Vũ khí nặng rất chậm (tiêu tốn nhiều tick). Dao găm rất nhanh.
*   **Tốc độ của bạn:** Phụ thuộc vào Điểm hành động (AP) của bạn.

### Hành động Cơ bản:
*   **🗡️ Tấn công:** Dùng bất cứ thứ gì bạn đã rút ra.
*   **🛡️ Phòng thủ:** Bạn ở tư thế phòng thủ. Giảm sát thương nhưng tốn Sức bền.
*   **🏃 Trốn thoát:** Dành cho kẻ hèn nhát (hoặc những người khôn ngoan muốn sống).
*   **🏳️ Đầu hàng:** Nếu thấy không thể thắng, bạn có thể cầu xin lòng thương xót.
*   **✨ Ma thuật / Cyberware:** Lửa, tia laser, hack...

### 💬 Hành động Văn bản Tự do (MỚI!)
Không thích các nút bấm? Hãy viết bất cứ điều gì bạn muốn làm như thể bạn đang nói chuyện với một Game Master bằng xương bằng thịt!
*   **Ví dụ:** *"Ném quả cầu lửa vào yêu tinh"*, *"Rút kiếm rune của tôi"*, *"Sử dụng thuốc hồi máu cho bản thân"*.
*   **Đạo diễn:** Trận chiến giờ đây trở nên sống động. AI tạo ra các sự kiện môi trường và phản ứng làm phong phú thêm câu chuyện: dầm sập xuống, kẻ địch lùi bước, đuốc rơi xuống. Chiến trường không còn tĩnh nữa!
*   **Nếu AI không hiểu:** Nó sẽ yêu cầu bạn diễn đạt lại. Lượt của bạn KHÔNG bị mất!
*   **⚠️ Hạn chế:** Di chuyển vật phẩm giữa các ô (trang bị từ túi, nạp đạn) được thực hiện bằng **Kéo và Thả** trên giao diện, không phải bằng văn bản.

### ⚠️ QUY TẮC VÀNG ĐỂ SỐNG SÓT
**RÚT KIẾM TRƯỚC KHI CHIẾN ĐẤU!**
Rút vũ khí giữa trận chiến tốn thời gian (Tick). Nếu bạn bị bắt quả tang với thanh kiếm trong vỏ, bạn sẽ bị đánh tơi tả trong khi cố gắng rút nó một cách vụng về. HOẶC TỆ HƠN!, NẾU BẠN ĐỂ VŨ KHÍ TRONG TÚI THAY VÌ TRONG Ô TRANG BỊ (Xin lỗi một chút, tôi phải lấy thanh kiếm lớn ra khỏi túi, tôi biết tôi để nó ở đâu đó... ở đâu đó...) 🤦‍♂️
👉 Nhấp vào nhãn vũ khí đã trang bị (bảng bên phải) để rút nó ra. Nó sẽ sáng màu xanh lá cây.

Cố gắng di chuyển vũ khí trong chiến đấu sẽ tốn thời gian (Tick) và có thể dẫn đến một cuộc tấn công bất ngờ, ngoài ra rất có thể bạn sẽ mất lượt, thất bại vì hồi hộp trước chiếc rìu đang lao vào giữa lông mày hoặc làm rơi nó xuống đất. (Có lẽ tạo nhân vật bị ADHD là một ý tưởng tồi)

---

## ✨ MA THUẬT VÀ CÔNG NGHỆ CAO

Tùy thuộc vào việc thế giới của bạn là "Fantasy Trung cổ" hay "Cyberpunk":

### 🧙‍♂️ Fantasy: Phép thuật
Bạn là một pháp sư? Bạn có thể phù phép cho trang bị của mình.
1.  **Học:** Bạn cần phép thuật trong sách phép thuật của mình.
2.  **Sử dụng (Kéo và Thả):** Kéo phép thuật từ danh sách của bạn lên vật phẩm trong kho đồ của bạn.
3.  **Chi phí:** Duy trì một phép thuật đang hoạt động **tiêu tốn Mana mỗi lượt**.
4.  **Lưu ý:** Nếu bạn hết mana giữa trận chiến, thanh kiếm lửa sẽ trở lại là một mẩu sắt gỉ sét.

### 🦾 Cyberpunk: Cấy ghép
Muốn có mắt với khả năng zoom hoặc cánh tay của khỉ?
1.  Tìm một **Bác sĩ phẫu thuật công nghệ** (NPC dịch vụ).
2.  Trả tín dụng (không có gì là miễn phí trong tương lai).
3.  **Chi phí Nhân tính:** Mỗi cấy ghép sẽ lấy đi một phần linh hồn của bạn (**Nhân tính**).
    *   Nếu bạn cấy ghép quá nhiều, bạn sẽ trở thành **Cyberpsychosis** (một chiếc máy nướng bánh mì biết đi gây chết người) và mất quyền kiểm soát nhân vật của mình.

---

## 🛒 CỬA HÀNG VÀ DỊCH VỤ (SIS)

Nói chuyện với NPC để giao dịch.
*   **AI gợi ý, Bạn quyết định:** Khi bạn nói chuyện với một thương gia hoặc người chữa bệnh, AI sẽ gợi ý dịch vụ của họ (sửa chữa, bán, chữa bệnh), nhưng sẽ có một nút **"Xem Dịch vụ"** để bạn quyết định khi nào nên vào chế độ giao dịch.
*   **Mặc cả:** Kỹ năng **Thương mại** của bạn (dựa trên Sức hút) sẽ quyết định giá cả. Nếu bạn xấu xí hoặc khó ưa, bạn sẽ bị lừa.
*   **Bán:** Nhấp chuột phải vào một vật phẩm trong kho đồ của bạn để bán cho người bán hàng hoặc kéo nó lên trên người họ.

---

## 🎒 QUẢN LÝ KHO ĐỒ (Tetris)

*   **Trọng lượng:** Bạn có giới hạn tải (Sức mạnh + Kích thước). Nếu bạn mang quá nhiều phế liệu, bạn sẽ chậm và bị phạt (Sự tích trữ không phải là bạn của bạn).
*   **Các bảng:**
    *   **Trang bị:** Những gì bạn đang mặc.
    *   **Thắt lưng:** Truy cập nhanh trong chiến đấu (tiêu tốn ít thời gian hơn để sử dụng thuốc từ đây).
    *   **Ba lô:** Đáy túi.
*   **Sử dụng linh hoạt:** Kéo một bình thuốc hoặc thức ăn trực tiếp lên **khuôn mặt của bạn** (chân dung) để tiêu thụ ngay lập tức. Bạn cũng có thể sử dụng menu ngữ cảnh (nhấp chuột phải -> Sử dụng).

---

## 🛠️ CÀI ĐẶT CUỐI CÙNG

Trong menu **Cài đặt**, bạn có thể tùy chỉnh mọi thứ:
*   **🌍 Ngôn ngữ:** AI sẽ dịch toàn bộ trò chơi và các phản hồi cho bạn ngay lập tức. Chế độ đa ngôn ngữ được kích hoạt.
*   **👁️ Giao diện:** Kích thước chữ và màu sắc, để bạn không bị mù. Viền neon và bóng đổ mềm mại để có trải nghiệm nhập vai tối đa.
*   **🧠 Cài đặt AI:** Thay đổi mô hình, nhiệt độ, v.v. (Hãy nhớ những gì chúng ta đã xem ở đầu hướng dẫn về cờ `--advanced` nếu bạn là người thích tùy chỉnh mọi thứ).

---

## 🎭 KHÓ KHĂN VÀ HÀI HƯỚC (Tùy chỉnh nỗi khổ của bạn)

Trước khi bắt đầu, hãy nhớ rằng AI không chỉ kể chuyện mà còn **điều chỉnh thế giới** theo sở thích của bạn. Các tham số này được chọn khi tạo thế giới và là vĩnh viễn cho thế giới đó:

*   **🎮 Khó khăn (Được quản lý bởi AI):** Đây không chỉ là một hệ số nhân sát thương. Trò chơi sẽ nói với AI: "Này, độ khó là thế này, hãy hành động cho phù hợp."
    *   **Dễ:** Bạn sẽ không bao giờ chết (hoặc gần như không thể), các tình huống đơn giản hơn, giá cả rẻ hơn và kẻ thù vụng về hơn. AI sẽ lý luận mọi cảnh để con đường của bạn trải đầy hoa hồng.
    *   **Bình thường:** Cân bằng tiêu chuẩn.
    *   **Thử thách:** AI sẽ không khoan nhượng, giá cả cắt cổ và mọi sai lầm có thể là cuối cùng.

*   **🃏 Tông điệu Hài hước:** Xác định cách AI nói chuyện với bạn và loại sự kiện nào xảy ra. Mặc dù mỗi mô hình có cách diễn giải khái niệm "hài hước" riêng, AI sẽ cố gắng thích ứng với những gì bạn chọn... hoặc không:
    *   **Nghiêm túc:** Một câu chuyện sử thi, đen tối và trang trọng.
    *   **Mỉa mai:** AI sẽ cười vào những sai lầm của bạn, liên tục châm chọc và sử dụng giọng điệu châm biếm.
    *   **Hoang tưởng:** Hãy chuẩn bị cho sự phi lý. Bò bay, tình huống siêu thực và sự hỗn loạn hoàn toàn được quản lý bởi logic kỳ quái nhất của AI.

---

## 🚧 Thông báo: Truy cập Sớm

RolemIAster đang trong **quá trình phát triển tích cực**, được nấu chín từ từ.
*   Bạn có thể gặp lỗi (hoặc "tính năng bất ngờ").
*   Tôi thêm những thứ mới mỗi tuần.
*   Phản hồi của bạn vô giá! Hãy cho tôi biết bạn thích gì và bạn thích gì rất nhiều. (Nếu bạn không thích điều gì đó, hãy cho tôi biết, nhưng bằng sự dịu dàng).

Bây giờ, hãy đi, tung sáng kiến và tạo dựng huyền thoại của bạn!

<!-- source_hash: 4b8ac77b -->