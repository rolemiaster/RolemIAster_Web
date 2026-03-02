****************************************************************************************************
02/03/2026 12:54 - Đại tu cốt lõi AI - Beta_v060
****************************************************************************************************
- What's New (VI):
  - **🧠 Đại tu Cốt lõi AI**
    - ⚡ **Phản hồi nhanh hơn:** Tôi đã viết lại bộ não của trò chơi để AI ghi nhớ tốt hơn những gì đã xử lý. Nói một cách thực tế: ít thời gian chờ màn hình tải hơn giữa các lượt. Bộ máy giờ tái sử dụng công việc trước đó thay vì bắt đầu lại từ đầu mỗi khi bạn hành động. (Vâng, trước đây nó đã làm vậy. Không, tôi không tự hào về điều đó.)
    - 🧹 **Bộ nhớ sạch hơn:** Lịch sử trò chơi giờ được lưu trữ không có rác kỹ thuật ngay từ thời điểm nó được ghi, chứ không phải khi nó được đọc. Kết quả: AI có nhiều không gian hơn để ghi nhớ lịch sử của bạn và ít token bị lãng phí vào dữ liệu nội bộ mà nó chưa bao giờ cần xem.
    - 🎯 **Quy tắc đúng chỗ:** Các quy tắc bổ sung mà AI tham khảo để làm phong phú thêm phản hồi của nó đã được di chuyển để không can thiệp vào hệ thống bộ nhớ đệm. Hiệu ứng này là vô hình đối với bạn, nhưng bộ máy sẽ cảm ơn bạn trong mỗi lượt (thêm một chút tốc độ cũng không hại gì).
  
  - ** Qwen3 được giải phóng: kích hoạt suy luận toàn diện**
    - 🚀 **Suy nghĩ sâu sắc:** Các mô hình có khả năng suy luận (Qwen3, DeepSeek-R1...) giờ đây đã được mở khóa hoàn toàn tiềm năng. Thay vì đi "mù quáng", AI suy luận nội bộ trước mỗi phản hồi: lên kế hoạch cho các thẻ nhân vật, đánh giá sự mạch lạc của cốt truyện với câu chuyện của bạn, và tránh các lỗi như trùng lặp kho hoặc thuộc tính không đầy đủ. Kết quả là một AI thông minh và nhất quán hơn đáng kể.
    - 🧹 **Minh bạch với bạn:** Tất cả quá trình suy luận đó diễn ra hậu trường. Bộ máy tự động làm sạch "độc thoại nội tâm" của AI trước khi hiển thị phản hồi cho bạn. Bạn chỉ thấy kết quả cuối cùng, được trau chuốt hơn.
  
  - **⚡ Khởi động trò chơi đáng tin cậy hơn**
    - 🛡️ **Tạm biệt tình trạng treo lượt đầu:** Chúng tôi đã loại bỏ một nguyên nhân gây ra thời gian chờ đợi vĩnh viễn khi bắt đầu một trò chơi mới. Trước đây, nếu AI tạo ra một nhân vật thương nhân mà không biết quy tắc giao dịch (vì nó không có chúng ở lượt đầu), bộ máy sẽ cố gắng sửa nó 3 lần trước khi bỏ cuộc, gây ra hơn một phút chờ đợi vô ích. Giờ đây, nó giải quyết ngay lập tức.
    - 📖 **Lore chống lại AI sáng tạo:** Nếu AI quá hứng thú và tạo ra bối cảnh thế giới ở định dạng kỹ thuật thay vì văn bản tường thuật, bộ máy sẽ phát hiện và tự động trích xuất câu chuyện sạch sẽ. Lore của bạn luôn được truyền tải đúng cách.
    - 🧹 **Giao diện hoàn hảo:** Tôi đã dạy AI không "nói chuyện bằng mã". Trước đây, đôi khi các nút quyết định hoặc bình luận của người dẫn chuyện hiển thị các biến nội bộ kỳ lạ (như *Bỏ chạy (move to loc_crypta)*). Giờ đây, mọi thứ đều sạch sẽ và mô hình đã bị buộc phải giao tiếp với bạn bằng giọng điệu hài hước mà bạn đã chọn (việc tôn trọng tham số này phụ thuộc vào tâm trạng của AI).
  
  - **🌍 Sửa lỗi ngôn ngữ**
    - 🗣️ **Địa điểm bằng ngôn ngữ của bạn:** Các địa điểm do AI tạo ra giờ đây sẽ tôn trọng ngôn ngữ đã được cài đặt trong trò chơi. Nếu bạn chơi bằng tiếng Anh, bạn sẽ không còn thấy "Distrito de la Costa Oeste" mà sẽ là tên tiếng Anh. (Ối.)
    - 🔘 **Nút đã được bản địa hóa:** Nút khẩn cấp "Tiếp tục" giờ đây sẽ nói ngôn ngữ của bạn thay vì luôn hiển thị bằng tiếng Tây Ban Nha.

****************************************************************************************************
27/02/2026 16:46 - Đồng bộ hóa Tải trận đấu và Luồng lượt đi - Beta_v059
****************************************************************************************************
- What's New (VI):
  - **Trận đấu và nhịp độ trò chơi**
    - ⚔️ **Các cuộc tấn công mượt mà hơn:** không còn các lần nhấn chờ vô ích khi hành động của bạn đang được xếp hàng và việc tải các trận đấu trả về các quyết định thực tế, không phải các nút ảo.
    - 🧭 **Cảnh được đồng bộ hóa:** những gì bạn thấy trên màn hình phản ánh trạng thái hiện tại của trận đấu và chỉ hiển thị những kẻ thù có mặt tại vị trí của bạn.
    - 🚫 **Ít thủ tục nội bộ hơn:** chúng tôi đã loại bỏ các kiểm tra vô dụng để trò chơi tiến triển mà không bị tắc nghẽn hành chính.
  
  - **Công cụ hình ảnh và bảng điều khiển nâng cao**
    - 🧹 **Bộ chọn gọn gàng:** các thư mục kỹ thuật bị ẩn và bộ lọc được chuẩn hóa để chọn mô hình mà không bị nhiễu.
    - ️ **Nền ổn định:** nếu một hình ảnh đang chạy thì nó sẽ không ghi đè lên các hình ảnh tiếp theo; hơn nữa, việc tải trong trận đấu tránh việc tái tạo bất ngờ.
    - 🎛️ **Bảng điều khiển hình ảnh được tăng cường:** chiến lược hiển thị, cường độ thay đổi và các bước tối thiểu giờ đây có thể được điều khiển từ giao diện nâng cao với trợ giúp ngữ cảnh.
  
  - **Tạo nhân vật và chân dung**
    - 🧍 **Giới tính hiển thị:** bạn chọn Nam/Nữ trong biểu mẫu cơ bản và toàn bộ luồng (chân dung, dữ liệu nội bộ) sẽ tôn trọng lựa chọn đó.
    - 👶➡️🧓 **Tuổi tác dễ hiểu:** chúng tôi sử dụng các giai đoạn câu chuyện để AI vẽ tốt hơn giai đoạn sống.
    - 🧼 **Lời nhắc được làm sạch:** chúng tôi đã loại bỏ nhiễu kỹ thuật trước khi gửi yêu cầu hình ảnh và điều đó thể hiện ở sự ổn định của chân dung.
    -  **Bảng dữ liệu đáng tin cậy:** AI không thể "quên" các thuộc tính bắt buộc hoặc thổi phồng kho đồ ban đầu.
  
  - **Tường thuật, quy tắc và RAG**
    - 🚀 **Nhân vật đến trực tiếp hơn:** cảnh mở đầu sử dụng các hợp đồng JSON nghiêm ngặt và tránh trộn lẫn ngữ cảnh kỳ lạ.
    -  **RAG tập trung:** chỉ các gốc được cho phép mới được lập chỉ mục và bảng dữ liệu được gửi đến lời nhắc chứa tóm tắt hiệu ứng để tiết kiệm token.
  
  - **Cấu hình AI và PSR**
    - 🎛️ **Kiểm soát PSR mới Giai đoạn 1:** quyết định xem bạn muốn chế độ phẫu thuật luôn ở chế độ khám phá hay chỉ khi lời nhắc gây áp lực.
    - 📏 **Ngưỡng có thể điều chỉnh (mặc định 95%):** tinh chỉnh mức độ cho phép trước khi kích hoạt PSR tự động dựa trên phần cứng của bạn.
    - 🧠 **Lời nhắc nhẹ hơn và không bị lặp lại:** chúng tôi tóm tắt các trạng thái và AI có các công cụ để không bị quá tải khi câu chuyện trở nên phức tạp.

****************************************************************************************************
24/02/2026 12:32 - Tạo Ảnh Bằng AI, Cải Thiện Dẫn Chuyện và Kiểm Soát - Beta_v058
****************************************************************************************************
- What's New (VI):
  **🧠 Tiến Hóa Bộ Não: Xin chào, Qwen 3**
  Tôi đã chuyển đổi bộ máy của trò chơi để tận dụng tối đa thế hệ mô hình Qwen3 mới. Các mô hình cũ thuộc dòng 2.5 đã đồng hành cùng RolemIAster khi bắt đầu hành trình, nhưng đã đến lúc rời xa những vinh quang cũ. Bước nhảy định lượng này trong việc tạo truyện mang lại văn phong nhập vai hơn, các quy tắc chặt chẽ hơn nhiều và nhân vật nhất quán hơn. Hãy chuẩn bị GPU của bạn, vì Quản Trò vừa lên cấp.

  **Mới: Giai đoạn 2 của Tính năng Tạo Ảnh Bằng AI**
  - 🎨 **Thế giới của bạn qua hình ảnh:** Tôi đã tích hợp hệ thống tạo ảnh ban đầu bằng Trí tuệ Nhân tạo. Khi bạn chơi, hệ thống sẽ cố gắng tạo ra các chân dung và phong cảnh phù hợp với bối cảnh ván game của bạn.
  - 🖼️ **Hình nền động:** Hình ảnh được tạo trong nền mà không làm gián đoạn trò chơi. Bạn sẽ thấy chúng dần xuất hiện ở phông nền, trên thẻ nhân vật và trong Códice.
  - 🧹 **Quản lý hình ảnh:** Bảng điều khiển mới để xem và xóa các hình ảnh đã tạo mà bạn không thích.
  
  **Cải thiện Tạo Nhân vật:**
  - ⚙️ **Tạo ngẫu nhiên ổn định hơn:** Tôi đã thống nhất và cải thiện bộ quy tắc mà AI sử dụng để tạo nhân vật từ con số không, đảm bảo kho đồ hợp lý hơn (5 đến 10 vật phẩm gắn kết) và chỉ số cân bằng hơn.
  - 🧠 **Bộ não phân tách:** AI giờ đây hiểu rõ hơn khi nào cần "sáng tạo" một nhân vật mới hoàn toàn và khi nào chỉ cần trích xuất dữ liệu từ tiểu sử do chính bạn viết.
  - ⚡ **Tốc độ theo ý muốn:** Mục mới trong Cài đặt Hình ảnh. Chọn giữa "Nhanh" (1 bước), "Trung bình" (2 bước) hoặc "Cao" (4 bước) để điều chỉnh thời gian tạo ảnh phù hợp với cấu hình máy tính của bạn.
  - 🛠️ **Tối ưu hóa kỹ thuật:** Mô hình AI tạo ảnh được nạp vào **RAM (Bộ nhớ)** và xử lý qua **CPU**, không chiếm dụng bộ nhớ đồ họa (VRAM). Điều này đảm bảo không ảnh hưởng đến hiệu suất của AI chính trong game (LLM). Yêu cầu thêm khoảng 5GB RAM, vẫn nằm trong cấu hình tối thiểu chính thức trên Steam.
  - 📤 **Chia sẻ cuộc phiêu lưu:** Tất cả hình ảnh đã tạo được lưu tự động. Bạn có thể tìm thấy chúng tại thư mục: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Trình chọn mô hình (Nâng cao):** Nếu bạn khởi động trò chơi với tham số `--advanced`, giờ đây bạn có thể chọn mô hình AI nào sẽ được sử dụng để tạo ảnh từ bảng Giao diện. Điều này cho phép những người đam mê thử nghiệm các phiên bản Stable Diffusion khác nhau được tối ưu hóa cho OpenVINO (tệp .xml/.bin).
  
  **Dẫn chuyện và Bộ não AI:**
  - 🧠 **Chấm dứt vòng lặp:** Một "Học thuyết Trí nhớ" mới đã được triển khai cho AI. Giờ đây nó phân biệt tốt hơn giữa "ký ức" (những gì đã xảy ra) và "hiện tại" (những gì đang diễn ra). Điều này giúp giảm thiểu các trường hợp AI bị lặp lại hoặc bị kẹt.
  - 📜 **Tài liệu lịch sử:** Hệ thống trình bày ký ức của bạn cho AI dưới dạng một "Tài liệu Lịch sử Đóng", giúp AI dễ dàng sử dụng thông tin đó làm tài liệu tham khảo để phát triển câu chuyện.
  - ⚡ **Chỉ dẫn tối ưu:** Cải thiện cách trò chơi yêu cầu AI dẫn chuyện bằng ngôn ngữ của bạn, giải phóng năng lực của mô hình để tập trung vào sự sáng tạo.
  - 👁️ **Tiêu điểm dẫn chuyện:** Viết lại cách nhận thức của AI. Giờ đây nó hiểu rõ hơn yếu tố nào là "nền tĩnh" và không nên lặp lại chúng một cách không cần thiết trong mỗi đoạn văn.
  - 🔀 **Quyết định rõ ràng hơn:** AI hiện cung cấp các hướng đi rõ rệt hơn. Các gợi ý của nó (nút bấm) được chia thành tìm hiểu môi trường (Tìm hiểu sâu) hoặc đổi hướng hành động (Chuyển hướng).
  - 🫵 **Xưng hô trực tiếp:** Điều chỉnh chỉ dẫn cơ bản để đảm bảo AI xưng hô với bạn là "Bạn", tăng cường sự nhập vai cá nhân.
  
  **Tạo Nhân vật:**
  - 🖼️ **Chân dung nhân vật:** Khi tạo nhân vật bằng AI, hệ thống sẽ cố gắng tạo chân dung dựa trên tuổi tác, nghề nghiệp và mô tả. Lưu ý rằng đây là phiên bản thử nghiệm và độ chính xác (đặc biệt là tuổi tác) có thể thay đổi tùy theo mô hình được sử dụng. (Tôi vẫn đang tiếp tục thử nghiệm nhưng khởi đầu rất khả quan)
  - 🎲 **Tạo ngẫu nhiên đáng tin cậy:** Khắc phục lỗi nút "Tạo bằng AI" có thể thất bại trong lần thử đầu tiên khiến các trường thông tin bị trống. Giờ đây hệ thống sửa lỗi thông minh sẽ đảm bảo câu trả lời luôn hợp lệ.
  
  **Quản lý hình ảnh đã tạo:**
  - 🖼️ **Thư viện ảnh AI:** Bảng mới trong menu Hồ sơ hiển thị tất cả hình ảnh mà AI đã tạo trong các ván game của bạn (chân dung, phông nền). Bạn có thể lọc theo loại ảnh hoặc theo thế giới.
  - 🗑️ **Xóa có chọn lọc:** Chọn một hoặc nhiều ảnh và xóa chúng nếu bạn không ưng ý (ví dụ như tấm ảnh mà AI quyết định đỗ một chiếc xe buýt trong chuồng ngựa lâu đài). Hệ thống sẽ xóa cả tệp tin lẫn bản ghi nội bộ.
  - 📂 **Truy cập nhanh:** Nhấp đúp vào bất kỳ ảnh thu nhỏ nào để mở thư mục chứa tệp tin đó. Nếu bạn đã mở thư mục rồi, nó sẽ sử dụng lại cùng một cửa sổ.
  - 💾 **Ghi nhớ không gian:** Kích thước cửa sổ thư viện được lưu tự động giữa các phiên làm việc.
  
  **Hiệu suất trên cấu hình thấp (Quan trọng cho GPU ít VRAM):**
  - 🧠 **PSR - Quản trị lai:** Hệ thống mới chia công việc của AI thành hai giai đoạn: Lập kế hoạch (Đầu bếp) và Thực thi (Phụ bếp). Điều này cho phép các mô hình cục bộ với 8GB VRAM hoạt động mà không bị sập do quá tải ngữ cảnh (+12K token), bù lại độ trễ sẽ cao hơn; việc tương tác với AI chuyển từ một câu lệnh (prompt) duy nhất sang một chuỗi các câu lệnh (VRAM càng thấp thì số lượng câu lệnh càng nhiều và thời gian phản hồi càng lâu).
  - ⚡ **Thực thi thông minh:** Hệ thống tự động quyết định xử lý tất cả cùng lúc (nguyên khối) hoặc chia thành từng phần (lặp lại) tùy thuộc vào VRAM khả dụng của bạn. GPU có ít VRAM sẽ chỉ kích hoạt chế độ chia nhỏ khi cần thiết.
  - 📊 **Tối ưu hóa động:** PSR giảm tải lượng token trong quá trình tạo, cho phép người dùng có card đồ họa 4GB có thể hoàn tất việc tạo nhân vật và dẫn chuyện vốn trước đây thường bị chặn.
  - 🔄 **Duy trì sự mạch lạc:** Mặc dù chia nhỏ công việc, hệ thống vẫn nạp một "ý định chủ đạo" để AI không bị mất dấu những gì nó đang thực hiện.
  
  **Giọng nói AI (cải tiến dần):**
  Tạo giọng nói thời gian thực cho tất cả các ngôn ngữ (một số ngôn ngữ hạn chế hơn những ngôn ngữ khác, đa dạng nhất là tiếng Anh)
  - 🗣️ **Tiếng hét chiến đấu:** Khi bắt đầu chiến đấu với kẻ thù, một câu thoại bằng giọng nói theo ngữ cảnh sẽ được kích hoạt.
  - 🎭 **Câu thoại động theo ngữ cảnh:** Công cụ có thể tạo các dòng thoại ngắn cho các sự kiện cụ thể (dịch vụ/chiến đấu) tùy theo ngôn ngữ, bối cảnh và hồ sơ nhân vật.
  - 🧠 **Mẫu giọng nói nội bộ:** Tách biệt các mẫu kỹ thuật của giọng nói khỏi hệ thống dẫn chuyện để tránh gây nhiễu cho câu chuyện.
  - 🔊 **Rõ ràng hơn khi nghe:** Cải thiện khả năng hiểu và ngữ điệu của quá trình tổng hợp để ưu tiên phát âm dễ hiểu.
  
  **⚠️ Thông báo tương thích (Các bản lưu cũ):**
  - 🔄 Do số lượng lớn các thay đổi nội bộ trong bộ quy tắc và hệ thống bối cảnh, các **ván game và thế giới đã lưu trước đó (có thể) vẫn chơi được**, nhưng rất có khả năng sẽ phát sinh lỗi hoặc hành vi không mong muốn. **Khuyến khích tạo một thế giới mới hoàn toàn** để tận hưởng tất cả các cải tiến một cách chính xác nhất.

****************************************************************************************************
17/02/2026 07:20 - Tạo hình ảnh bằng AI, Cải thiện Cốt truyện và Kiểm soát - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (VI):
  **⚠️ NHÁNH THỬ NGHIỆM (BETA TRÊN STEAM)**
  Phiên bản này hiện chỉ có sẵn trên **Nhánh Thử nghiệm** của Steam. Để kích hoạt:
  1. Nhấp chuột phải vào **RolemIAster** trong Thư viện Steam của bạn.
  2. Chọn **Thuộc tính...** (Properties)
  3. Đi đến tab **Betas**.
  4. Tại mục "Tham gia beta", chọn **experimental** trong menu thả xuống.
  
  **Tính năng mới: Giai đoạn đầu của Tạo hình ảnh bằng AI**
  - 🎨 **Thế giới của bạn qua Hình ảnh:** Tôi đã tích hợp một hệ thống tạo hình ảnh ban đầu bằng Trí tuệ Nhân tạo. Khi bạn chơi, hệ thống sẽ cố gắng tạo ra các bức chân dung và phong cảnh phù hợp với bối cảnh ván chơi của bạn.
  - 🖼️ **Hình nền Động:** Hình ảnh được tạo trong nền mà không làm gián đoạn trò chơi. Bạn sẽ thấy chúng dần xuất hiện ở hình nền, trên thẻ nhân vật và trong Codex.
  - ⚡ **Tốc độ Tùy chỉnh:** Mục mới trong Cấu hình Hình ảnh. Chọn giữa "Nhanh" (1 bước), "Trung bình" (2 bước) hoặc "Cao" (4 bước) để điều chỉnh thời gian tạo hình phù hợp với sức mạnh máy tính của bạn.
  - 🛠️ **Tối ưu hóa Kỹ thuật:** Mô hình AI cho hình ảnh được tải vào **RAM (Bộ nhớ)** và xử lý qua **CPU**, không chiếm bộ nhớ video (VRAM). Điều này đảm bảo không ảnh hưởng đến hiệu suất của AI chính trong game (LLM). Yêu cầu thêm khoảng 5GB RAM, vẫn nằm trong yêu cầu tối thiểu chính thức của Steam.
  - 📤 **Chia sẻ Cuộc phiêu lưu:** Tất cả hình ảnh được tạo sẽ tự động được lưu lại. Bạn sẽ tìm thấy chúng trong thư mục: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Cốt truyện và Bộ não AI:**
  - 🧠 **Chấm dứt Vòng lặp:** Một "Học thuyết Ký ức" mới đã được cấy vào AI. Giờ đây nó phân biệt tốt hơn giữa "ký ức" (những gì đã xảy ra) và "hiện tại" (những gì đang xảy ra). Điều này giúp giảm thiểu các trường hợp AI lặp lại hoặc bị kẹt.
  - 📜 **Hồ sơ Lịch sử:** Hệ thống trình bày ký ức của bạn cho AI dưới dạng một "Hồ sơ Lịch sử Đã đóng", giúp AI dễ dàng sử dụng thông tin đó làm tài liệu tham khảo để phát triển câu chuyện.
  - ⚡ **Chỉ dẫn Tối ưu hóa:** Cách trò chơi yêu cầu kể chuyện bằng ngôn ngữ của bạn đã được cải thiện, giải phóng khả năng của mô hình để tập trung vào sự sáng tạo.
  - 👁️ **Trọng tâm Cốt truyện:** Nhận thức của AI đã được viết lại. Giờ đây nó hiểu rõ hơn yếu tố nào là "nền tĩnh" và không nên lặp lại chúng một cách không cần thiết trong mỗi đoạn văn.
  - 🔀 **Quyết định Rõ ràng hơn:** AI hiện cung cấp các lối thoát xác định hơn. Các gợi ý (nút bấm) được chia thành tìm hiểu môi trường (Đi sâu) hoặc thay đổi hướng đi (Phân nhánh).
  - 🫵 **Xưng hô Trực tiếp:** Chỉ dẫn cơ bản đã được điều chỉnh để đảm bảo AI xưng hô với bạn là "Bạn", cải thiện tính nhập tâm cá nhân.
  
  **Tạo Nhân vật:**
  - 🖼️ **Chân dung Nhân vật:** Khi tạo nhân vật bằng AI, hệ thống sẽ cố gắng tạo chân dung dựa trên độ tuổi, nghề nghiệp và mô tả. Lưu ý rằng đây là phiên bản ban đầu và độ trung thực (đặc biệt là về độ tuổi) có thể thay đổi tùy theo mô hình được sử dụng. (tôi vẫn đang tiếp tục thử nghiệm nhưng khởi đầu khá tốt)
  - 🎲 **Tạo Ngẫu nhiên Đáng tin cậy:** Đã sửa lỗi nút "Tạo bằng AI" có thể bị lỗi trong lần thử đầu tiên, để trống các trường. Giờ đây, hệ thống sửa lỗi thông minh đảm bảo phản hồi luôn hợp lệ.

****************************************************************************************************
17/02/2026 07:04 - Tạo hình ảnh bằng AI, Cải thiện Cốt truyện và Kiểm soát - Beta_v058
****************************************************************************************************
- What's New (VI):
  **⚠️ NHÁNH THỬ NGHIỆM (BETA TRÊN STEAM)**
  Phiên bản này hiện chỉ có sẵn trên **Nhánh Thử nghiệm** của Steam. Để kích hoạt:
  1. Nhấp chuột phải vào **RolemIAster** trong Thư viện Steam của bạn.
  2. Chọn **Thuộc tính...** (Properties)
  3. Đi đến tab **Betas**.
  4. Tại mục "Tham gia beta", chọn **experimental** trong menu thả xuống.
  
  **Tính năng mới: Giai đoạn đầu của Tạo hình ảnh bằng AI**
  - 🎨 **Thế giới của bạn qua Hình ảnh:** Tôi đã tích hợp một hệ thống tạo hình ảnh ban đầu bằng Trí tuệ Nhân tạo. Khi bạn chơi, hệ thống sẽ cố gắng tạo ra các bức chân dung và phong cảnh phù hợp với bối cảnh ván chơi của bạn.
  - 🖼️ **Hình nền Động:** Hình ảnh được tạo trong nền mà không làm gián đoạn trò chơi. Bạn sẽ thấy chúng dần xuất hiện ở hình nền, trên thẻ nhân vật và trong Codex.
  - ⚡ **Tốc độ Tùy chỉnh:** Mục mới trong Cấu hình Hình ảnh. Chọn giữa "Nhanh" (1 bước), "Trung bình" (2 bước) hoặc "Cao" (4 bước) để điều chỉnh thời gian tạo hình phù hợp với sức mạnh máy tính của bạn.
  - 🛠️ **Tối ưu hóa Kỹ thuật:** Mô hình AI cho hình ảnh được tải vào **RAM (Bộ nhớ)** và xử lý qua **CPU**, không chiếm bộ nhớ video (VRAM). Điều này đảm bảo không ảnh hưởng đến hiệu suất của AI chính trong game (LLM). Yêu cầu thêm khoảng 5GB RAM, vẫn nằm trong yêu cầu tối thiểu chính thức của Steam.
  - 📤 **Chia sẻ Cuộc phiêu lưu:** Tất cả hình ảnh được tạo sẽ tự động được lưu lại. Bạn sẽ tìm thấy chúng trong thư mục: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Cốt truyện và Bộ não AI:**
  - 🧠 **Chấm dứt Vòng lặp:** Một "Học thuyết Ký ức" mới đã được cấy vào AI. Giờ đây nó phân biệt tốt hơn giữa "ký ức" (những gì đã xảy ra) và "hiện tại" (những gì đang xảy ra). Điều này giúp giảm thiểu các trường hợp AI lặp lại hoặc bị kẹt.
  - 📜 **Hồ sơ Lịch sử:** Hệ thống trình bày ký ức của bạn cho AI dưới dạng một "Hồ sơ Lịch sử Đã đóng", giúp AI dễ dàng sử dụng thông tin đó làm tài liệu tham khảo để phát triển câu chuyện.
  - ⚡ **Chỉ dẫn Tối ưu hóa:** Cách trò chơi yêu cầu kể chuyện bằng ngôn ngữ của bạn đã được cải thiện, giải phóng khả năng của mô hình để tập trung vào sự sáng tạo.
  - 👁️ **Trọng tâm Cốt truyện:** Nhận thức của AI đã được viết lại. Giờ đây nó hiểu rõ hơn yếu tố nào là "nền tĩnh" và không nên lặp lại chúng một cách không cần thiết trong mỗi đoạn văn.
  - 🔀 **Quyết định Rõ ràng hơn:** AI hiện cung cấp các lối thoát xác định hơn. Các gợi ý (nút bấm) được chia thành tìm hiểu môi trường (Đi sâu) hoặc thay đổi hướng đi (Phân nhánh).
  - 🫵 **Xưng hô Trực tiếp:** Chỉ dẫn cơ bản đã được điều chỉnh để đảm bảo AI xưng hô với bạn là "Bạn", cải thiện tính nhập tâm cá nhân.
  
  **Tạo Nhân vật:**
  - 🖼️ **Chân dung Nhân vật:** Khi tạo nhân vật bằng AI, hệ thống sẽ cố gắng tạo chân dung dựa trên độ tuổi, nghề nghiệp và mô tả. Lưu ý rằng đây là phiên bản ban đầu và độ trung thực (đặc biệt là về độ tuổi) có thể thay đổi tùy theo mô hình được sử dụng. (tôi vẫn đang tiếp tục thử nghiệm nhưng khởi đầu khá tốt)
  - 🎲 **Tạo Ngẫu nhiên Đáng tin cậy:** Đã sửa lỗi nút "Tạo bằng AI" có thể bị lỗi trong lần thử đầu tiên, để trống các trường. Giờ đây, hệ thống sửa lỗi thông minh đảm bảo phản hồi luôn hợp lệ.

****************************************************************************************************
13/02/2026 21:47 - Tối ưu hóa Cấu hình AI và Tăng cường i18n - Beta_v055
****************************************************************************************************
- What's New (VI):
  - ⚙️ **Kiểm soát Ưu tiên Cục bộ:** Giờ đây bạn có thể điều chỉnh thủ công độ ưu tiên của các card đồ họa ngay cả khi hệ thống đang ở chế độ tự động.
  - 🧠 **Thông tin Xoay vòng AI:** Tôi đã thêm các bảng thông tin trong cài đặt nhà cung cấp bên ngoài để giải thích cách xoay vòng tự động hoạt động khi gặp lỗi hoặc vượt quá hạn mức.
  - 🌍 **Mở rộng Hỗ trợ GPU:** Thông báo thông tin i18n giờ đây phản ánh chính xác hỗ trợ cho NVIDIA CUDA và Vulkan (AMD/Intel). Đã cập nhật bản dịch cho tất cả các ngôn ngữ!
  - ⚙️ **Cải thiện Kết nối:** Đã sửa lỗi kết nối cho Ollama và các máy chủ tương thích OpenAI khác.
  - 🧠 **AI Đa ngôn ngữ và Mạnh mẽ:** Việc phát hiện vật phẩm nhận được trong câu chuyện hiện hoạt động trên 10 ngôn ngữ. Ngoài ra, tôi đã gia cố hệ thống để bạn không bao giờ thiếu câu chuyện khởi đầu, ngay cả khi AI gặp trục trặc kỹ thuật.
  - 🔄 **Xoay vòng Thông minh:** Tôi đã sửa hệ thống xoay vòng để nó không từ bỏ AI cục bộ của bạn ngay lần thử đầu tiên. Hệ thống giờ sẽ cho phép nó tự sửa lỗi trước khi tìm kiếm sự trợ giúp bên ngoài.
  - 🧹 **Dọn dẹp Nền tảng:** Tôi đã loại bỏ các quy tắc cũ và gây nhầm lẫn để "bộ não" của AI sắc bén và chính xác hơn khi xử lý vật phẩm của bạn.

