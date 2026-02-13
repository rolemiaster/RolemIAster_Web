****************************************************************************************************
07/02/2026 20:26 - Hệ thống giải thích ngữ nghĩa chiến đấu - BETA_v054
****************************************************************************************************
🧪 HIỆN ĐÃ CÓ SẴN:

⚠️ **THÔNG BÁO QUAN TRỌNG:** TRÒ CHƠI CÓ THỂ DI TRÚ CƠ SỞ DỮ LIỆU CŨ...

****************************************************************************************************
06/02/2026 02:32 - Hỗ trợ Vulkan (AMD/Intel) và Xử lý Lỗi Mạnh mẽ - Beta_v053
****************************************************************************************************
- What's New (VI):
  - 🚀 **Engine Vulkan Lai:** Hỗ trợ chính thức cho card đồ họa AMD và Intel! Giờ đây, trò chơi tích hợp một engine Vulkan chuyên dụng, tự động kích hoạt (hoặc thủ công) để tăng tốc AI trên các thiết bị không sử dụng NVIDIA.
  - ⚙️ **Kiểm soát Hoàn toàn Engine:** Chúng tôi đã thêm tùy chọn "Buộc dùng Vulkan" vào cả Trình khởi chạy và Cài đặt. Nếu bạn gặp sự cố với CUDA hoặc muốn thử nghiệm hiệu suất Vulkan (thứ chạy cực nhanh trên nhiều cấu hình), quyền kiểm soát thuộc về bạn.
  - 🚦 **Trạng thái Hệ thống:** Giờ đây bạn có thể thấy chính xác engine nào đang hoạt động (🟢 XANH cho CUDA, 🔴 ĐỎ cho Vulkan) trong bảng trạng thái.
  - 🛡️ **Tín hiệu AI:** Nếu Trí tuệ Nhân tạo bị "đuối" (vượt quá hạn mức) hoặc mất kết nối internet, trò chơi sẽ cảnh báo bạn bằng một cửa sổ rõ ràng và hữu ích thay vì để bạn chờ đợi trong im lặng.
  - 🔄 **Bảo vệ Chống Treo:** Nếu xảy ra lỗi kết nối, trò chơi sẽ không còn làm "vỡ" cuộc trò chuyện. Các lựa chọn đối thoại của bạn sẽ xuất hiện lại để bạn có thể thử lại mà không bị mất tiến trình.
  - ☁️ **Bộ nhớ Đám mây:** Menu cài đặt giờ đây ghi nhớ chính xác các tùy chọn nhà cung cấp đám mây của bạn giữa các phiên chơi.

****************************************************************************************************
03/02/2026 20:23 - Tối ưu hóa Bộ nhớ VRAM và Độ ổn định Tải game - Beta_v052
****************************************************************************************************
- What's New (VI):
  - 🧠 **Bộ não Tối ưu:** Chúng tôi đã khắc phục một lỗi nghiêm trọng khiến AI cố gắng "suy nghĩ hai lần" cùng một lúc, làm nhân đôi lượng bộ nhớ card đồ họa sử dụng và gây ra tình trạng chậm cực độ hoặc treo máy. VRAM của bạn sẽ cảm ơn điều này!
  - 💾 **Tải An toàn:** Cải thiện độ ổn định chung khi tải các bản lưu game để đảm bảo việc tiếp tục cuộc phiêu lưu của bạn luôn là một trải nghiệm mượt mà.

****************************************************************************************************
02/02/2026 00:18 - Hotfix Quan trọng: Ổn định, Đa GPU và Cải thiện Bản địa hóa - Beta_v051
****************************************************************************************************
- What's New (VI):
  - 🚑 **Sửa lỗi Quan trọng:** Đã khắc phục sự cố ngăn chặn việc khởi động trò chơi trong một số trường hợp hiếm gặp ("Hỏng Hoàn toàn") do hỏng cơ sở dữ liệu mà Launcher không thể dọn dẹp. Giờ đây, tùy chọn "Xóa Cơ sở Dữ liệu" đã hiệu quả hơn nhiều.
  - ⚡ **Cải thiện Phần cứng:** Đã sửa lỗi khiến chế độ "Cấu hình Tự động" bỏ qua sức mạnh của các hệ thống dùng nhiều card đồ họa trong một số cấu hình có các GPU không đồng nhất.
  - 🛠️ **Tiện ích:** Đã thêm một tùy chọn mới trong Launcher để dễ dàng mở nhật ký (log) của phiên trước đó nhằm hỗ trợ việc giải quyết sự cố.
  - 🌍 **Bản địa hóa:** Đã sửa một số nút hiển thị bằng tiếng Anh (Yes/No) trong trình khởi chạy. Hiện tại chúng đã hiển thị đúng theo ngôn ngữ được chọn.
  - 📖 **Giao diện:** Đã cải thiện định dạng văn bản thông tin phiên bản để dễ đọc hơn.
  
  - **Sắp ra mắt:** Đang trong quá trình triển khai: khả năng tương thích với GPU AMD, NVIDIA và Intel thông qua Vulkan.

****************************************************************************************************
30/01/2026 02:09 - Đa GPU, Sửa lỗi Hướng dẫn & Ổn định - Beta_v050
****************************************************************************************************
- Tính năng mới:
  **Sức mạnh Đa GPU và Các bản sửa lỗi nghiêm trọng!**
  
  * **🚀 Hỗ trợ Đa GPU:** Đã triển khai khả năng chia nhỏ các mô hình AI lớn giữa nhiều card đồ họa. *Giờ đây bạn có thể sử dụng toàn bộ kho vũ khí phần cứng của mình; Sức mạnh Vô hạn!*
  * **🛡️ Ổn định:** Đã thêm tất cả các thư viện DLL còn thiếu để tránh việc đóng ứng dụng đột ngột. *Tôi đã bọc giáp cho engine, nếu nó bị lỗi bây giờ thì đó là do tung xúc xắc thất bại thôi.*
  * **📖 Sách hướng dẫn Web Động:**
    * **Trình chọn Thực:** Menu ngôn ngữ giờ đây xác minh xem tệp nào thực sự tồn tại trước khi hiển thị chúng. *Không còn các tùy chọn ma không làm gì cả; phép thuật tiên tri cấp 5.*
    * **Sửa lỗi 403:** Đã khắc phục lỗi quyền hạn ngăn cản việc xem Nhật ký thay đổi (Changelog) trong trò chơi. *Tôi đã dạy ứng dụng cách xin phép đúng cách ("Vừng ơi mở ra!").*
  * **🌍 Ngôn ngữ:** Rà soát văn bản và bản dịch. *Chế độ Đa ngôn ngữ đã kích hoạt.*

****************************************************************************************************
28/01/2026 22:49 - Ổn định hóa và Cải tiến AI - Beta_v049
****************************************************************************************************
- Tính năng mới:
  Chúng tôi đã trau chuốt trải nghiệm trò chơi với các sửa lỗi quan trọng và một công cụ trực quan mới:

  * **Kho đồ Sạch sẽ và Đáng tin cậy:** Không còn tình trạng tìm thấy "vật phẩm ma" hoặc vật phẩm có tên lạ trong ba lô của bạn. Chúng tôi đã triển khai hệ thống xác thực cốt truyện để đảm bảo mọi thứ bạn nhặt hoặc mua thực sự tồn tại trong thế giới trò chơi.
  * **Hội thoại Mượt mà:** Chúng tôi đã sửa những nút khó chịu đôi khi hiển thị là "Unknown" hoặc không phản hồi. Giờ đây, các tùy chọn đối thoại với NPC sẽ luôn hiển thị văn bản chính xác.
  * **Tạo Nhân vật Mạnh mẽ:** Tạo anh hùng của bạn giờ là một quy trình vững chắc. Chúng tôi đã giải quyết các xung đột đôi khi khiến bảng nhân vật không hoàn chỉnh hoặc có chỉ số sai khi kết hợp tiểu sử và chỉ số (stats).
  * **Thanh Trạng thái AI Mới:** Bây giờ bạn có thể thấy bộ não của máy đang hoạt động! Chúng tôi đã thêm một thanh ở phía trên hiển thị tốc độ phản hồi và mức sử dụng bộ nhớ theo thời gian thực. Như vậy bạn sẽ luôn biết liệu AI có đang "suy nghĩ" về cuộc phiêu lưu tiếp theo của bạn hay không.

****************************************************************************************************
28/01/2026 03:50 - Sửa lỗi Biên dịch Nghiêm trọng - Beta_v048
****************************************************************************************************
- Tính năng mới:
  Đã khắc phục một lỗi nghiêm trọng ngăn cản việc khởi động trò chơi trên các cài đặt mới. Cải thiện độ ổn định và khả năng tương thích với các thiết bị khác nhau.

****************************************************************************************************
26/01/2026 19:38 - Trình khởi chạy Web & Hỗ trợ RTX 50 - Beta_v047
****************************************************************************************************
- Tính năng mới:

  > [!QUAN TRỌNG]
  > **VÌ LÝ DO TƯƠNG THÍCH, CẦN PHẢI XÓA CƠ SỞ DỮ LIỆU CŨ NẾU KHÔNG RẤT CÓ THỂ SẼ GẶP LỖI TRONG CẤU HÌNH AI**
  > **(Giải pháp: Nhấp vào biểu tượng bánh răng ⚙️ trên Trình khởi chạy -> Xóa Cơ sở dữ liệu)**

  *Hỗ trợ Quan trọng cho RTX Series 50: Đã khắc phục lỗi nghiêm trọng gây ra việc đóng ứng dụng đột ngột khi cố gắng tạo nhân vật trên các card đồ họa NVIDIA mới (RTX 5070, 5080, 5090).
  (Vì tôi không có card RTX dòng 5000 nên tôi chưa thể trực tiếp kiểm thử xem giải pháp có hiệu quả 100% hay không, nhưng về lý thuyết thì lẽ ra đã được giải quyết. Tôi mong chờ những bài ca chiến thắng của các bạn tại đây!)
  
  *Cập nhật Engine AI: Chúng tôi đã cập nhật bộ não cục bộ của trò chơi để tương thích với công nghệ phần cứng mới nhất, đảm bảo mọi người đều có thể tận hưởng trải nghiệm ngoại tuyến, bất kể thiết bị của họ hiện đại đến mức nào.
  
  *Trình khởi chạy Mới: Cập nhật và tin tức theo thời gian thực từ trang web chính thức.


****************************************************************************************************
26/01/2026 06:49 - Tích hợp Tài liệu Web - Beta_v045
****************************************************************************************************
- Tính năng mới:
  *Giờ đây Sách hướng dẫn người dùng và Nhật ký thay đổi được tải trực tiếp từ trang web chính thức của chúng tôi, đảm bảo bạn luôn có thông tin cập nhật nhất mà không cần tải xuống các bản vá. Bao gồm chế độ ngoại tuyến thông minh.

  *Chúng tôi đã củng cố độ ổn định của trò chơi để nó không bao giờ bị treo khi khởi động. Ngoài ra, những người bán hàng đã trở lại sau kỳ nghỉ ở cõi hư vô: giờ đây họ xuất hiện chính xác, có hàng hóa trên kệ và tôn trọng bối cảnh của thế giới (không có thuốc phép thuật trong tương lai).

  *Đã sửa lỗi không cho phép sửa đổi các tham số AI và việc chọn mô hình AI, khiến một số người dùng có VRAM hạn chế không thể chơi được.
  **Trong trường hợp cần sửa đổi các tham số AI, tôi thực sự khuyên bạn nên thử giảm % VRAM xuống 85% trước, khởi động lại và thử; nếu vẫn chưa đủ, tôi khuyên bạn nên kiểm tra xem VRAM của GPU có đang bị sử dụng bởi các quy trình khác không phải của trò chơi hay không (khởi động lại PC nếu cần, đóng các ứng dụng có thể chiếm VRAM). Nếu sau khi giảm lượng VRAM thậm chí xuống còn 70% mà vẫn không hoạt động, tôi không khuyên bạn tiếp tục giảm vì trò chơi sẽ không thể quản lý các prompt (lời nhắc) được gửi đến AI, do đó, mặc dù có thể tránh được tràn VRAM, trò chơi sẽ không thể hoạt động vì không có gì để thực hiện điều đó; trong trường hợp đó, lựa chọn duy nhất còn lại là hạ cấp xuống mô hình thấp hơn, đặt lại các tham số AI về tự động và khởi động lại.

****************************************************************************************************
26/01/2026 04:00 - Ổn định Core và Chẩn đoán Dịch vụ - Beta_v044
****************************************************************************************************
- Tính năng mới:
  Ổn định Core và Chẩn đoán Dịch vụ" "Các sửa lỗi nghiêm trọng trong việc tạo nhân vật, UI (MainWindow) và tối ưu hóa tìm kiếm ngữ nghĩa. Bắt đầu chẩn đoán sâu chế độ dịch vụ.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs và Ổn định - Beta_v043
****************************************************************************************************
- Mô tả:
  Bản vá sửa lỗi tập trung vào chẩn đoán và sửa lỗi vòng lặp UI.

- Thay đổi:
  Đã sửa lỗi hiển thị của hộp thoại khởi động lại
  Hệ thống log mới trong %LOCALAPPDATA% để chẩn đoán
  Tối ưu hóa hiệu suất nội bộ

****************************************************************************************************
24/01/2026 06:30 - Hỗ trợ Backend Tiểu sử - Beta_v042
****************************************************************************************************
- Mô tả:
  Hiển thị dữ liệu tiểu sử cho UI và các điều chỉnh i18n.

<!-- source_hash: 5f218fc5 -->
