****************************************************************************************************
18/04/2026 04:06 - Tích hợp TurboQuant — Nén KV Cache Cực Đại với - EXPERIMENTAL_v061
****************************************************************************************************
- What's New (VI):
  - **🗜️ Công cụ nén bộ nhớ mới (TurboQuant)**
    - 🧠 **AI ghi nhớ nhiều hơn với chi phí thấp hơn:** Tôi đã tích hợp công nghệ nén tiên tiến (TurboQuant, từ một bài báo của Google được trình bày tại ICLR 2026) cho phép AI lưu trữ "bộ nhớ làm việc" của nó với dung lượng chỉ bằng một phần ba dung lượng trước đây. Thực tế: có nhiều không gian hơn để ghi nhớ lịch sử, quyết định và bối cảnh của ván chơi mà không khiến card đồ họa kêu ca.
    - ⚡ **Tương thích với GPU của bạn:** Hoạt động trên card NVIDIA RTX dòng 3000, 4000 và 5000. Nếu bạn có một trong số đó, trò chơi sẽ tự động tận dụng nó. Nếu không, mọi thứ vẫn hoạt động như trước với công nghệ nén tiêu chuẩn (vốn cũng không tệ).
    - 🔧 **Công việc sửa ống nước:** Bản cập nhật này yêu cầu biên dịch lại toàn bộ engine AI với các bản vá dành riêng cho Windows. Đây không phải là thứ bạn thấy trực tiếp, nhưng nó là nền tảng để xây dựng các cải tiến về ngữ cảnh cho các phiên bản sắp tới. (Vâng, tôi đã dành khá nhiều thời gian tranh cãi với trình biên dịch của NVIDIA. Không, tôi không muốn nói về điều đó.)
  - **🧠 Tối ưu hóa ngữ cảnh hàng loạt (+200%)**
    - 📖 **AI đọc (và nhớ) gấp ba lần:** Tôi đã viết lại hoàn toàn việc tính toán "bộ nhớ hội thoại" mà AI có thể sử dụng. Trước đây, một ước tính bảo thủ đã để lại nhiều không gian chưa được sử dụng. Bây giờ, trò chơi đọc trực tiếp thông số kỹ thuật của từng mô hình và tính toán chính xác lượng ngữ cảnh có thể chứa trong GPU của bạn. Kết quả: mô hình 9B tăng từ khả năng ghi nhớ ~36.000 từ lên hơn ~110.000 từ trên GPU với 16GB VRAM. Các ván chơi dài của bạn sẽ không còn mất mạch dễ dàng như trước và các hiện tượng treo máy đối với những người có VRAM thấp sẽ được khắc phục.
    - 📝 **Phản hồi dài hơn:** Tôi đã tăng giới hạn độ dài phản hồi của AI từ 4.096 lên 8.192 token. Điều này có nghĩa là các mô tả chi tiết hơn, các đoạn hội thoại công phu hơn và các câu chuyện không bị cắt ngang giữa chừng khi mọi thứ trở nên thú vị.
    - 🔄 **Hoạt động cho tất cả các mô hình:** Cải tiến này được áp dụng tự động cho bất kỳ mô hình nào được hỗ trợ (2B, 4B, 9B...). Nếu bạn sử dụng mô hình cũ hơn hoặc của bên thứ ba, mọi thứ vẫn hoạt động giống hệt như trước — quá trình tối ưu hóa chỉ được kích hoạt khi phát hiện mô hình hỗ trợ nó.

