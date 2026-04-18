# 🐉 Chào mừng bạn đến với RolemIAster!

Hãy cầm lấy xúc xắc của bạn (hoặc chuột) và sẵn sàng cho những cuộc phiêu lưu mà giới hạn duy nhất là trí tưởng tượng phong phú đến mức nào của bạn! **RolemIAster** là một trò chơi nhập vai vô tận được hỗ trợ bởi Trí tuệ Nhân tạo, cho phép bạn trở thành anh hùng (hoặc kẻ phản diện) trong những câu chuyện của riêng mình.

---

## ⚠️ THÔNG BÁO PHÁP LÝ (Phần nhàm chán nhưng cần thiết)

**ĐỌC HOẶC CHỊU CƠN THỊNH NỘ CỦA XÚC XẮC:**

1.  **🤖 AI Tích hợp tại Chỗ:** RolemIAster mang theo bộ não kỹ thuật số riêng. Nó hoạt động **ngoài mạng internet** và bạn không cần phải đụng vào bất cứ thứ gì phức tạp. Cài đặt và chơi!
2.  **☁️ Tùy chọn Đám mây:** Nếu bạn thích chi tiền cho AI bên ngoài (OpenAI, Gemini...), đó là lựa chọn của bạn với thẻ tín dụng. Mọi chi phí là do bạn chịu.
3.  **🎲 Sự Ngẫu nhiên Sáng tạo:** AI sẽ tự nghĩ ra câu chuyện khi bạn chơi. Nếu người dẫn chuyện bị điên và nói rằng bò đang rơi từ trời xuống, đừng nhìn chúng tôi. Nhà phát triển không chịu trách nhiệm cho những điều kỳ quặc mà mô hình tạo ra.
4.  **🏗️ Truy cập Sớm:** Sản phẩm này đang trong quá trình phát triển. Nếu bạn tìm thấy một lỗi, đó không phải là lỗi, đó là một "tính năng" bất ngờ! (Hãy gửi phản hồi cho chúng tôi, làm ơn, điều đó rất hữu ích).

---

## 🖥️ YÊU CẦU HỆ THỐNG VÀ BỘ NÃO KỸ THUẬT SỐ (AI)

RolemIAster hoạt động với **Trí tuệ Nhân tạo Tại Chỗ**. Điều đó có nghĩa là PC của bạn sẽ làm công việc suy nghĩ nặng nhọc. Bạn không cần internet, nhưng cần một card đồ họa không phải là đồ cổ đại. (Lưu ý: Nếu phòng bạn lạnh, trò chơi này hoạt động như một máy sưởi miễn phí).

### ⚙️ Khái niệm cho người mới bắt đầu

**VRAM (Bộ nhớ Video)** là nhiên liệu cho AI.
*   RolemIAster cần "ghi nhớ" **từ 12.000 đến 16.000 từ (tokens)** để không bị lạc đề câu chuyện.
*   Nếu GPU của bạn hết bộ nhớ, trò chơi sẽ chạy chậm hơn cả một con ốc sên bị hen suyễn.

---

### 📊 DANH MỤC MÔ HÌNH (Chọn "thuốc độc" của bạn)

Quản lý AI của bạn tại **Cài đặt → AI Tích hợp tại Chỗ → Quản lý Mô hình**.

#### 🏆 Gia đình Qwen 3.5 — Được huấn luyện đặc biệt cho RolemIAster

Các mô hình này đã được huấn luyện bằng **Fine-Tuning Giám sát (SFT)** để làm chủ các quy tắc tường thuật của trò chơi. Chúng không phải là mô hình chung chung: chúng ghi nhớ hợp đồng JSON của RolemIAster, NPC, kho đồ và chiến đấu trong đầu.

| Mô hình   | Kích thước | VRAM Tối thiểu | Hạng   | Phán quyết                                                                |
| :-------- | :---------- | :------------- | :----- | :------------------------------------------------------------------------ |
| **Qwen3.5-2B** | ~1.5GB      | **3GB**        | B      | ⚡ **Kẻ Tốc Độ.** Nhanh nhất trong số chúng. Lý tưởng cho GPU cơ bản hoặc chơi không cần GPU chuyên dụng. |
| **Qwen3.5-4B** | ~2.8GB      | **4GB**        | A      | ✅ **CÂN BẰNG TUYỆT ĐỐI.** Tốc độ và chất lượng tối ưu. Mô hình tiêu chuẩn được đề xuất cho hầu hết người chơi. |
| **Qwen3.5-9B** | ~5.5GB      | **8GB**        | S      | 🌟 **Người Kể Chuyện.** Tường thuật phong phú và độ nhất quán vượt trội. Dành cho những ai có RTX 3070 trở lên. |

---

### 🎮 HƯỚNG DẪN CHỌN NHANH

| Card đồ họa của bạn | VRAM | Mô hình được đề xuất | Kết quả               |
| :------------------ | :--- | :------------------- | :-------------------- |
| GTX 1050/1060 / Không có GPU | 2-4GB | **Qwen3.5-2B** | 🆗 Vừa đủ nhưng chơi được |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Trải nghiệm rất tốt   |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Nhanh và chính xác   |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 Trải nghiệm lý tưởng |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Chất lượng tối đa, phản hồi siêu nhanh |

**💡 Mẹo hay:** Luôn để trống **khoảng 2GB VRAM** cho hệ điều hành, nếu không Windows sẽ bắt đầu "khóc" và đóng các ứng dụng.

---

### 🚨 TRỢ GIÚP! PC CỦA TÔI CHẠY CHẬM! (Vấn đề VRAM)

Nếu trò chơi mất nhiều thời gian để phản hồi hơn cả người bạn thích nhắn tin trên WhatsApp, bạn có lẽ đã hết VRAM.

**Dấu hiệu bạn đã "quá tham lam":**
1.  **Mô hình chuyển sang RAM:** PC sử dụng bộ nhớ thông thường thay vì bộ nhớ đồ họa. Kết quả: CHẬM KINH KHỦNG.
2.  **Quá tải nhẹ (1-2GB):** Mất 30-60 giây cho mỗi phản hồi.
3.  **Quá tải vừa phải (3-5GB):** 2-5 phút. Bạn có thể đi pha cà phê.
4.  **Quá tải nghiêm trọng:** 10-30 phút. Không chơi được.

#### 🛡️ Quy trình Khẩn cấp
Nếu mọi thứ trở nên tồi tệ, hãy làm theo các bước sau theo thứ tự:

1.  **📉 Giảm % VRAM:** Vào Cài đặt và giảm xuống **85%**. Khởi động lại và thử lại.
2.  **🧹 Dọn dẹp:** Đóng cái trình duyệt có 40 tab đang mở đó đi. Chúng đang ăn hết bộ nhớ của bạn.
3.  **🛑 Giới hạn 70%:** Không bao giờ giảm xuống dưới **70%** VRAM được phân bổ.
    *   *Tại sao?* Vì AI cần không gian để "suy nghĩ" (bộ nhớ đệm KV). Nếu bạn cung cấp ít hơn 70%, nó sẽ trống rỗng và báo lỗi.
4.  **🔙 Rút lui chiến thuật:** Nếu không có gì hiệu quả, hãy chuyển xuống mô hình nhỏ hơn (từ 9B xuống 4B, hoặc từ 4B xuống 2B).

---

### ⚙️ CÀI ĐẶT MÔ HÌNH NÂNG CAO ("Frikeo Tối đa")

> **CHẾ ĐỘ CHUYÊN GIA:** Nếu bạn là người chơi chuyên nghiệp và muốn truy cập cài đặt mô hình nâng cao (thêm mô hình GGUF của riêng bạn đã tải xuống từ HuggingFace, điều chỉnh các lớp, v.v.), bạn cần khởi động trò chơi bằng lệnh: `--advanced`.

Đối với những người thích nghịch các nút bấm trong **Cài đặt → AI Tích hợp tại Chỗ**:

| Tùy chọn          | Chức năng                                                               | Đề xuất                                   |
| :---------------- | :---------------------------------------------------------------------- | :---------------------------------------- |
| **GPU Layers**    | Bao nhiêu phần của mô hình được tải vào card đồ họa                       | **-1** (Nghĩa là "TẤT CẢ". Đừng chạm vào trừ khi bạn biết mình đang làm gì) |
| **Context Tối đa** | "Bộ nhớ ngắn hạn" của AI                                                | **16384 - 32768** (Ít hơn mức này AI sẽ bị quên) |
| **Temperature**   | Sáng tạo vs Điên rồ                                                     | **0.7 - 0.8** (Cao hơn = điên hơn; Thấp hơn = robot hơn) |
| **RAG Lịch sử**   | Nhớ những thứ từ xa xưa                                                  | **Có** (Cần thiết cho các chiến dịch dài)   |
| **Cache Embeddings** | Tăng tốc tìm kiếm ký ức                                                  | **Có** (Giúp chạy nhanh hơn)               |

---

### 🔧 KHẮC PHỤC SỰ CỐ (Troubleshooting)

| Vấn đề          | Giải pháp                                                                         |
| :-------------- | :-------------------------------------------------------------------------------- |
| **AI Chậm / Lag** | Kiểm tra xem `GPU Layers` có phải là -1 không. Đóng Chrome. Giảm `Contexto Máximo`. |
| **Lỗi Bộ nhớ (OOM)** | Giảm `Contexto Máximo` hoặc chọn mô hình nhỏ hơn (3B).                     |
| **AI Mơ màng / Ảo giác** | Giảm `Temperatura` xuống 0.6. Nếu vẫn điên rồ, hãy khởi động lại ứng dụng. |

---

### 🌐 NHÀ CUNG CẤP THAY THẾ (Chỉ dành cho Chuyên gia)

> **Lưu ý:** AI tại chỗ mà trò chơi cung cấp đã đủ dùng. Cái này chỉ dành cho người dùng nâng cao hoặc dũng cảm.

*   **Các công cụ tại chỗ bên ngoài:**
    *   **Ollama / LM Studio:** Nếu bạn đã có mô hình yêu thích của riêng mình, bạn có thể sử dụng chúng.
*   **API trên Đám mây (Có phí):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Yêu cầu internet và chi tiền.
    *   Cấu hình tại: **Cài đặt → AI → Thêm Nhà cung cấp Mới**.

---

### 🌍 CÁCH CHƠI? (Đa vũ trụ và Bạn)

Khi mở trò chơi, bạn có hai lựa chọn:

1.  **🆕 Phiêu lưu Mới**: Tạo huyền thoại của riêng bạn từ đầu. Trò chơi sẽ yêu cầu **Tên, Nghề nghiệp, Mô tả Ngoại hình, Mô tả Tâm lý và Bối cảnh/Cốt truyện** của câu chuyện của bạn. Ngoài ra, bạn sẽ chọn **Mức độ Khó** và **Tông điệu Hài hước** sẽ định hướng chiến dịch.
2.  **💾 Tiếp tục Ván chơi**: RolemIAster **lưu thời gian thực**. Không có "tải lại trước khi chết" hay quay ngược thời gian. Mọi quyết định, mọi sai lầm và mọi vết thương đều được ghi dấu ấn trong câu chuyện. Đây là một **THỬ THÁCH**: những gì bạn làm, đã là như vậy. Hãy sống với hậu quả... hoặc chết vì chúng.

RolemIAster không phải là một ván chơi đơn lẻ; nó là một **Đa vũ trụ Bền vững**.
*   **Thế giới Vô hạn:** Tạo vũ trụ của riêng bạn (**Fantasy Trung Cổ** hoặc **Cyberpunk**) với Lịch sử riêng.
*   **Nhân vật Vô hạn:** Trong mỗi thế giới, bạn có thể có tất cả các anh hùng mình muốn.
*   **Dòng thời gian được Chia sẻ:** Hãy cẩn thận! Những gì một nhân vật làm sẽ ảnh hưởng đến thế giới của những người khác. AI nhận thức được các anh hùng khác của bạn và sẽ nhận ra họ là cư dân của thế giới.
*   **AI có "Giác quan" (Siêu RAG):** Hệ thống RAG (Retrieval-Augmented Generation) hoạt động như "kẻ mách lẻo" của AI, cung cấp cho nó ký ức về thế giới, ai đang đồng hành cùng bạn, bạn đang ở đâu và điều gì vừa xảy ra để câu chuyện trở nên nhất quán 100%.

### Giao diện (Buồng lái của bạn)

*   **Bảng bên trái (BẠN):** Thẻ Nhân vật của bạn. Máu, mana, kỹ năng và mức độ quyến rũ của bạn (Sức hút).
*   **Bảng trung tâm (CÂU CHUYỆN):**
    *   **Phía trên:** Nơi người dẫn chuyện kể những gì đang xảy ra.
    *   **Phía dưới:** Các nút quyết định của bạn và ô văn bản để viết những gì bạn muốn làm.
*   **Bảng bên phải (ĐỒ CỦA BẠN):** Kho đồ và trang bị. Thiên đường của những người mắc chứng sợ bỏ sót kỹ thuật số.

---

## 📜 LUẬT CHƠI (Vâng, có luật)

RolemIAster sử dụng hệ thống d100 (xúc xắc một trăm mặt) cổ điển và mạnh mẽ.

### 1. Các Chỉ số của bạn (Điều định nghĩa bạn)
AI tạo ra các chỉ số của bạn dựa trên bối cảnh, nghề nghiệp và mô tả bạn đã nhập. Sau khi tạo, bạn có **10 ĐIỂM THÊM** để phân bổ theo ý muốn.
*   **Chi phí tăng dần:** Tăng một chỉ số lên tới 14 tốn 1 điểm. Từ 15 đến 16 tốn 2 điểm. Từ 17 trở lên tốn 3 điểm! Hãy suy nghĩ kỹ nơi bạn đặt sức mạnh.

*   💪 **Sức mạnh (STR):** Sức mạnh thể chất thuần túy của bạn. Ảnh hưởng đến sát thương cận chiến và khả năng mang vác của bạn.
*   ❤️ **Thể chất (CON):** Khả năng chịu đựng của bạn. Để chống chịu các đòn đánh, bệnh tật và chất độc.
*   🐘 **Kích thước (SIZ):** Vóc dáng của bạn. To lớn và nặng nề, hoặc nhỏ bé và lanh lẹ.
*   🏃 **Khéo léo (DEX):** Sự nhanh nhẹn, độ chính xác và không vấp ngã.
*   🧠 **Trí tuệ (INT):** Học hỏi, ghi nhớ và giải câu đố.
*   🔮 **Sức mạnh Tinh thần (POW):** Linh hồn, vận may, ý chí và nguồn dự trữ ma thuật của bạn.
*   😎 **Sức hút (CHA):** Khả năng lãnh đạo, sức hấp dẫn và khả năng lừa dối (hoặc quyến rũ) mọi người.

### 2. Các Tính toán Nhanh (Các Đặc điểm Phái sinh)
Công cụ sẽ tự động tính toán các con số này dựa trên các chỉ số của bạn:

*   🩸 **Máu (HP):** `CON * 10`. Nếu nó về 0... bạn biết đấy. F.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Nhiên liệu cho các phép thuật của bạn. Không có mana, không có phép thuật. (Một pháp sư hết mana chỉ là một gã mặc áo choàng đang cosplay).
*   ⚡ **Thể lực (STA):** `((CON+FUE+DES)/3)*10 + POD`. Năng lượng của bạn để chiến đấu và di chuyển mà không chết.
*   🧠 **Nhân tính (HUM):** `(CON+POD) * 5`. (Chỉ trong Cyberpunk: Đo lường bạn còn bao nhiêu "người" trước khi dây cáp khiến bạn phát điên).
*   ⚔️ **Điểm Hành động (AP):** `(INT + DES) / 2`. Xác định Sáng kiến của bạn. Ai ra đòn trước, ra đòn hai lần.

### 3. Kỹ năng của bạn
Bắt đầu với giá trị cơ bản (ví dụ: Lén lút = DEX + INT) và cải thiện khi sử dụng. Đó là một tỷ lệ phần trăm (%).

### 4. Giải quyết Hành động (Xúc xắc)
Khi bạn cố gắng làm điều gì đó mạo hiểm (leo trèo, nói dối, tấn công...), AI sẽ yêu cầu bạn tung xúc xắc. Trò chơi tung một **d100** vô hình. **(Hãy nhớ: Xúc xắc ghét bạn. Đây là chuyện cá nhân).**

*   **Mục tiêu của bạn:** Đạt được một con số **NHỎ HƠN HOẶC BẰNG** cấp độ kỹ năng của bạn.
    *   *Ví dụ:* Bạn có 45% kỹ năng Leo trèo.
    *   Bạn tung được 30: ✅ **Thành công**. Bạn leo như khỉ.
    *   Bạn tung được 80: ❌ **Thất bại**. Bạn bị ngã đau.
    *   **Chí mạng:** Tung được ít hơn hoặc bằng **1/5 kỹ năng của bạn** (hoặc 01). Tuyệt vời! Bạn thực hiện một pha parkour phi thường với cú nhào lộn.
    *   **Sai lầm nghiêm trọng:** Tung được 99 hoặc 100. Xúc xắc đã quyết định hôm nay không phải là ngày của bạn. Bạn bị tuột quần giữa chừng và ngã sõng soài.

---

## 💡 LỜI KHUYÊN ĐỂ KHÔNG CHẾT (NHANH)

*   **✍️ Hãy Mô tả Chi tiết:** Đừng chỉ viết "tấn công". Hãy viết: *"Tôi cố gắng né lưỡi rìu của hắn bằng cách lăn trên sàn và đâm con dao găm vào mắt cá chân hắn."* AI sẽ thưởng cho bạn.
*   **🧪 Thử nghiệm:** Bạn không bị giới hạn bởi các nút bấm. Hãy viết những điều điên rồ! AI sẽ ứng biến.
*   **🎭 Nhập vai:** Hãy hòa mình vào nhân vật. Đọc mô tả và hành động như nhân vật của bạn sẽ làm, không phải như bạn sẽ làm khi mặc đồ ngủ.

---

## ⚔️ CHIẾN ĐẤU (Vào trận!)

Khi lời nói không còn tác dụng, đến lúc "đấm đá". Chiến đấu là **chiến thuật** và hoạt động theo **Tick** (thời gian).

### 🕹️ Cách hoạt động:
*   **Ticks:** Mỗi hành động đều tốn thời gian. Vũ khí hạng nặng chậm chạp (tiêu tốn nhiều tick). Dao găm nhanh chóng.
*   **Tốc độ của bạn:** Phụ thuộc vào Điểm Hành động (AP) của bạn.

### Hành động Cơ bản:
*   **🗡️ Tấn công:** Dùng bất cứ thứ gì bạn đã rút ra.
*   **🛡️ Phòng thủ:** Đặt mình vào thế phòng thủ. Giảm sát thương nhưng tốn Thể lực.
*   **🏃 Trốn thoát:** Dành cho kẻ hèn nhát (hoặc những người khôn ngoan muốn sống).
*   **🏳️ Đầu hàng:** Nếu bạn thấy mình không thắng, bạn có thể xin tha mạng.
*   **✨ Phép thuật / Cyberware:** Lửa, tia laser, hack...

### 💬 Hành động bằng Văn bản Tự do (MỚI!)
Không thích các nút bấm? Hãy viết bất cứ điều gì bạn muốn làm như thể bạn đang nói chuyện với một Người dẫn chuyện bằng xương bằng thịt!
*   **Ví dụ:** *"Phóng cầu lửa vào con goblin"*, *"Rút thanh kiếm rune của ta ra"*, *"Dùng thuốc cho bản thân"*.
*   **Đạo diễn Cảnh:** Trận chiến giờ đây trở nên sống động. AI tạo ra các sự kiện môi trường và phản ứng làm phong phú thêm tường thuật: xà nhà rơi xuống, kẻ thù lùi bước, đuốc rơi xuống. Chiến trường không còn tĩnh nữa!
*   **Nếu AI không hiểu:** Nó sẽ yêu cầu bạn diễn đạt lại. Lượt của bạn KHÔNG bị mất!
*   **⚠️ Giới hạn:** Di chuyển vật phẩm giữa các ô (trang bị từ ba lô, nạp đạn) được thực hiện bằng **Kéo & Thả** trên giao diện, không phải bằng văn bản.

### ⚠️ QUY TẮC VÀNG ĐỂ SỐNG SÓT
**RÚT VŨ KHÍ TRƯỚC KHI CHIẾN ĐẤU!**
Rút vũ khí giữa trận chiến tốn thời gian (Ticks). Nếu bạn bị bắt khi kiếm vẫn còn trong bao, bạn sẽ bị đánh cho đến khi không còn nhận ra mình trong khi cố gắng rút nó một cách vụng về. HOẶC TỆ HƠN!, NẾU BẠN ĐỂ VŨ KHÍ TRONG BA LÔ THAY VÌ TRONG KHUNG TRANG BỊ (Xin lỗi một chút, tôi phải lấy thanh đại đao ra khỏi ba lô, tôi biết tôi để nó đâu đó... ở đâu đó...) 🤦‍♂️
👉 **Nhấp vào nhãn vũ khí đã trang bị** (bảng bên phải) để rút nó ra. Nó sẽ sáng màu xanh lá cây.

Cố gắng di chuyển vũ khí trong chiến đấu tốn thời gian (Ticks) và có thể dẫn đến một đòn tấn công bất ngờ, hơn nữa rất có thể bạn sẽ mất lượt, thất bại vì hồi hộp trước lưỡi rìu đang tiến đến giữa lông mày hoặc có thể làm rơi nó xuống đất. (Có lẽ tạo một nhân vật bị ADHD không phải là ý hay)

---

## ✨ PHÉP THUẬT VÀ CÔNG NGHỆ CYBER

Tùy thuộc vào việc thế giới của bạn là "Fantasy Trung Cổ" hay "Cyberpunk":

### 🧙‍♂️ Fantasy: Phù phép
Bạn là một pháp sư? Bạn có thể phù phép trang bị của mình.
1.  **Học:** Bạn cần phép thuật trong sách phép của mình.
2.  **Sử dụng (Kéo & Thả):** Kéo phép thuật từ danh sách của bạn lên vật phẩm trong kho đồ.
3.  **Chi phí:** Duy trì một phép thuật đang hoạt động sẽ **tiêu tốn Mana mỗi lượt**.
4.  **Lưu ý:** Nếu bạn hết mana giữa trận chiến, thanh kiếm lửa sẽ trở lại là một mẩu sắt gỉ.

### 🦾 Cyberpunk: Cấy ghép
Bạn muốn mắt có zoom hoặc cánh tay khỉ?
1.  Tìm một **Bác sĩ phẫu thuật công nghệ** (NPC dịch vụ).
2.  Trả tiền tín dụng (không có gì là miễn phí trong tương lai).
3.  **Chi phí Nhân tính:** Mỗi cấy ghép sẽ lấy đi một phần linh hồn của bạn (**Nhân tính**).
    *   Nếu bạn cấy ghép quá nhiều, bạn sẽ trở thành một **Cyber-tâm thần** (một cái máy nướng bánh mì biết giết người) và mất quyền kiểm soát nhân vật của mình.

---

## 🛒 CỬA HÀNG VÀ DỊCH VỤ (SIS)

Nói chuyện với NPC để giao dịch.
*   **AI Đề xuất, Bạn Quyết định:** Khi bạn nói chuyện với một thương nhân hoặc người chữa bệnh, AI sẽ đề xuất dịch vụ của họ (sửa chữa, bán, chữa bệnh), nhưng sẽ có một nút **"Xem Dịch vụ"** để bạn quyết định khi nào vào chế độ giao dịch.
*   **Mặc cả:** Kỹ năng **Thương mại** của bạn (dựa trên Sức hút) sẽ quyết định giá cả. Nếu bạn xấu xí hoặc khó chịu, bạn sẽ bị lừa.
*   **Bán:** **Nhấp chuột phải** vào một vật phẩm trong kho đồ của bạn để bán cho người bán hàng hoặc kéo nó lên người họ.

---

## 🎒 QUẢN LÝ KHO ĐỒ (Tetris)

*   **Trọng lượng:** Bạn có giới hạn tải trọng (Sức mạnh + Kích thước). Nếu bạn mang quá nhiều đồ phế liệu, bạn sẽ chậm chạp và bị phạt (Chủ nghĩa "sợ bỏ lỡ" không phải là bạn của bạn).
*   **Bảng:**
    *   **Trang bị:** Những gì bạn đang mặc.
    *   **Thắt lưng:** Truy cập nhanh trong chiến đấu (tốn ít thời gian hơn để sử dụng thuốc từ đây).
    *   **Ba lô:** Đáy túi.
*   **Sử dụng Linh hoạt:** Kéo một lọ thuốc hoặc thức ăn trực tiếp lên **mặt bạn** (chân dung) để tiêu thụ ngay lập tức. Bạn cũng có thể sử dụng menu ngữ cảnh (nhấp chuột phải -> Sử dụng).

---

## 🛠️ CÀI ĐẶT CUỐI CÙNG

Trong menu **Cài đặt**, bạn có thể tùy chỉnh mọi thứ:
*   **🌍 Ngôn ngữ:** AI sẽ dịch toàn bộ trò chơi và các phản hồi theo thời gian thực cho bạn. Chế độ đa ngôn ngữ được kích hoạt.
*   **👁️ Ngoại hình:** Kích thước phông chữ và màu sắc, để bạn không bị mù. Viền neon và đổ bóng mượt mà để có trải nghiệm nhập vai tối đa.
*   **🧠 Cài đặt AI:** Thay đổi mô hình, nhiệt độ, v.v. (Hãy nhớ những gì chúng ta đã xem xét ở đầu hướng dẫn về cờ `--advanced` nếu bạn là người thích nghịch mọi thứ).

---

## 🎭 ĐỘ KHÓ VÀ HÀI HƯỚC (Tùy chỉnh nỗi đau của bạn)

Trước khi bắt đầu, hãy nhớ rằng AI không chỉ tường thuật, mà còn **điều chỉnh thế giới** theo sở thích của bạn. Các thông số này được chọn khi tạo thế giới và sẽ cố định cho thế giới đó:

*   **🎮 Độ khó (Do AI quản lý):** Đây không chỉ là một phép nhân sát thương. Trò chơi sẽ nói với AI: "Này, độ khó là thế này, hãy hành động cho phù hợp."
    *   **Dễ:** Bạn sẽ không bao giờ chết (hoặc gần như không thể), các tình huống đơn giản hơn, giá cả rẻ hơn và kẻ thù vụng về hơn. AI sẽ suy luận mỗi cảnh để con đường của bạn trải đầy hoa hồng.
    *   **Bình thường:** Cân bằng tiêu chuẩn.
    *   **Thử thách:** AI sẽ không khoan nhượng, giá cả cắt cổ và mọi sai lầm có thể là sai lầm cuối cùng.

*   **🃏 Tông điệu Hài hước:** Xác định cách AI nói chuyện với bạn và loại sự kiện nào xảy ra. Mặc dù mỗi mô hình có cách diễn giải khái niệm "hài hước" riêng, AI sẽ cố gắng thích ứng với những gì bạn chọn... hoặc không:
    *   **Nghiêm túc:** Một tường thuật hoành tráng, u tối và trang trọng.
    *   **Mỉa mai:** AI sẽ cười nhạo những sai lầm của bạn, liên tục châm chọc bạn và sử dụng giọng điệu châm biếm.
    *   **Điên rồ:** Hãy sẵn sàng cho sự phi lý. Bò bay, tình huống siêu thực và sự hỗn loạn hoàn toàn được quản lý bởi logic méo mó nhất của AI.

---

## 🚧 Thông báo: Truy cập Sớm

RolemIAster đang trong **quá trình phát triển tích cực**, đang được "nấu" từ từ.
*   Bạn có thể gặp lỗi (hoặc "tính năng bất ngờ").
*   Tôi thêm những thứ mới mỗi tuần.
*   Phản hồi của bạn vô giá! Hãy cho tôi biết bạn thích gì và bạn thực sự thích gì. (Nếu bạn không thích điều gì đó, hãy cho tôi biết, nhưng hãy nhẹ nhàng).

Giờ thì đi thôi, tung xúc xắc và tạo nên huyền thoại của bạn!

<!-- source_hash: 9af75cff -->