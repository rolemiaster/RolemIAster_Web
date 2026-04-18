# 📢 Tin nhắn từ nhà phát triển (Truy cập sớm)

Chào mừng bạn đến với RolemIAster. Trước khi bạn lao vào cuộc phiêu lưu lớn tiếp theo, tôi muốn dành một phút để làm rõ một vài điều (tôi hứa sẽ ngắn gọn, vì xúc xắc đang chờ bạn).

Trò chơi này đang trong giai đoạn **Truy cập sớm (Early Access)**.
Tôi là một nhà phát triển độc lập — vâng, chỉ có tôi, bàn phím của tôi và hàng lít cà phê — điều này có nghĩa là tôi làm mọi thứ có thể, nhưng đôi khi không thể hoàn thành kịp mọi thứ. Tôi xin lỗi trước nếu tôi mất thời gian để sửa một lỗi khó chịu, triển khai tính năng mà bạn mong muốn, hoặc phản hồi ngay lập tức trên Discord. Tôi đang phải xoay sở, nhưng vẫn chưa có thêm xúc tu nào.

## ⚠️ Cảnh báo quan trọng về phần cứng (Cục bộ vs Đám mây)
Có hai cách để chơi, và trải nghiệm của bạn phụ thuộc vào lựa chọn của bạn:

*   **Chế độ cục bộ (Miễn phí, Riêng tư):** Nếu bạn muốn chạy AI trên PC của riêng mình, yêu cầu của cửa hàng (Tối thiểu 12GB VRAM) là bắt buộc. Ít hơn mức đó và AI sẽ hoạt động chậm chạp hoặc làm treo máy của bạn. Đó là toán học thuần túy, không phải phép thuật.
*   **Chế độ đám mây (API Gemini, GPT, v.v. chỉ khi bạn khởi động bằng lệnh `--advanced`):** Mọi thứ thay đổi ở đây! Nếu bạn cấu hình trò chơi để sử dụng các dịch vụ đám mây (như Google Gemini hoặc OpenAI), công việc nặng nhọc sẽ được thực hiện trên máy chủ của họ, không phải của bạn. Ở chế độ này, trò chơi hoạt động mượt mà trên hầu hết mọi thiết bị, vì card đồ họa của bạn được nghỉ ngơi.

## Quản lý kỳ vọng
Nếu bạn đến đây mong đợi một sản phẩm AAA hoàn hảo không tì vết, tôi e rằng bạn đã đến nhầm chỗ (ít nhất là vào lúc này). Trò chơi đang ở giai đoạn đầu, và thành thật mà nói, chỉ những người dũng cảm hiểu và ủng hộ các dự án thử nghiệm như thế này mới có đủ kiên nhẫn để tận hưởng nó ngay bây giờ.

## Đảm bảo hài lòng
Nếu bạn cảm thấy trò chơi còn quá "xanh" đối với bạn hoặc phần cứng của bạn đang gặp khó khăn quá nhiều, sẽ không ai tức giận nếu bạn yêu cầu hoàn tiền. Ngược lại, tôi sẽ rất vui được chào đón bạn quay trở lại trong tương lai — và bạn sẽ trả 40 hoặc 60 USD khi trò chơi được hoàn thiện và sẵn sàng 😉. Giá hiện tại là một món quà vì đã tin tưởng tôi ở giai đoạn này.

Nói vậy, lòng biết ơn của tôi là vô hạn đối với những người quyết định ở lại. Báo cáo và đề xuất của bạn là động lực thực sự của dự án này. Nhờ có các bạn, trò chơi đã cải thiện vượt bậc trong vài tuần.

**RolemIAster đang được xây dựng dành riêng cho bạn.**

*Cảm ơn vì sự kiên nhẫn, sự ủng hộ và mong các nhà phê bình luôn đứng về phía bạn!*


*********************************************************************************
#  CHÚNG TÔI ĐÃ CẬP NHẬT LÊN QWEN 3.5 + TURBO QUANT! ĐỘNG CƠ MỚI, CÔNG NGHỆ MỚI, KỶ NGUYÊN MỚI 🚀
*********************************************************************************

🚧 KHU VỰC THI CÔNG: ĐÃ HOÀN THÀNH LOBOTOMY (VÀ NÓ HOẠT ĐỘNG) 🧠🔧
Tôi đang làm gì?
Tôi đang thay thế động cơ của trò chơi, và đây không phải là chuyện nhỏ.
Cho đến nay, mỗi khi bạn chơi một lượt, hệ thống sẽ gửi một "khối" quy tắc gồm 15.000 đến 20.000 token cho AI. Về cơ bản, giống như việc bắt buộc người dẫn chuyện phải đọc toàn bộ sách hướng dẫn trước mỗi câu. 📚🥵
Tôi đã triển khai hai công nghệ hoạt động cùng nhau:

1. 🧠 **TurboQuant — Bộ nhớ nén**
   - Tôi đã tích hợp công nghệ của Google (được giới thiệu tại ICLR 2026) nén bộ nhớ của AI xuống còn gần một phần ba kích thước ban đầu.
   - Nếu bạn có card RTX dòng 3000, 4000 hoặc 5000, trò chơi sẽ tự động tận dụng nó.
   - ⚠️ **LƯU Ý QUAN TRỌNG VỀ GPU AMD:** MẶC DÙ CÓ NHỮNG DẤU HIỆU CHO THẤY TURBO QUANT HOẠT ĐỘNG TRÊN CÁC THẺ AMD/INTEL (VULKAN), TRÊN THỰC TẾ NÓ GÂY RA NHIỀU LỖI VÀ DO ĐÓ HIỆN TẠI SẼ KHÔNG ĐƯỢC TRIỂN KHAI. CHÚNG TÔI HY VỌNG CỘNG ĐỒNG SẼ THỰC HIỆN ĐIỀU TƯƠNG TỰ VÀ CHÚNG TÔI SẼ CÓ TIN TỨC SỚM.
   - **Kết quả:** AI ghi nhớ nhiều hơn trong khi sử dụng ít VRAM hơn. Đó là phép thuật kỹ thuật số thuần túy. ✨

2. 📖 **Ngữ cảnh khổng lồ (+200%)**
   - Tôi đã viết lại phép tính bộ nhớ đàm thoại một cách cẩn thận: giờ đây trò chơi đọc các thông số kỹ thuật của từng mô hình và tính toán chính xác lượng thông tin có thể chứa trên GPU của bạn.
   - Mô hình 9B tăng khả năng ghi nhớ từ ~36.000 từ lên hơn ~110.000 từ trên GPU có 16GB VRAM. 🚀
   - Ngoài ra, tôi đã tăng giới hạn phản hồi từ 4.096 lên 8.192 token: những câu chuyện dài hơn mà không bị ngắt quãng giữa câu.

Kết quả cuối cùng: Tốc độ vượt trội trong hầu hết các trường hợp, các phiên chơi dài mà không bị mất mạch, và một AI tập trung hơn (và tỉnh táo hơn). 🎯

Ghi chú thực tế (Tuyên bố miễn trừ trách nhiệm 🧐):
Nếu ngay cả những gã khổng lồ ở Thung lũng Silicon (Gemini, ChatGPT...) đôi khi cũng nhìn thấy những con voi màu hồng, thì mô hình cục bộ của tôi cũng sẽ không hoàn hảo 100% mọi lúc. Nhưng nó không còn là "gã say xỉn ở đám cưới" nữa — giờ đây nó là một Master Rolechơi có năng lực với trí nhớ của một con voi thực thụ. 🐘

Cảm ơn sự kiên nhẫn của bạn trong khi tôi tinh chỉnh các chi tiết! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->