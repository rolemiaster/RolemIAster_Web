# 📢 Tin nhắn từ Nhà phát triển (Truy cập sớm)

Chào mừng bạn đến với RolemIAster. Trước khi bạn lao vào cuộc phiêu lưu lớn tiếp theo, tôi muốn xin bạn một phút để làm rõ một vài điều (hứa sẽ ngắn gọn, vì xúc xắc đang chờ bạn).

Trò chơi này đang trong giai đoạn **Truy cập sớm (Early Access)**.
Tôi là một nhà phát triển độc hành — vâng, chỉ có tôi, bàn phím và hàng lít cà phê — điều này có nghĩa là tôi làm hết sức mình, nhưng đôi khi không kịp xoay sở mọi thứ. Tôi xin lỗi trước nếu tôi mất thời gian để sửa một lỗi khó chịu, triển khai tính năng bạn mong muốn, hoặc phản hồi ngay lập tức trên Discord. Tôi đang cố gắng cân bằng, nhưng vẫn chưa mọc thêm xúc tu nào.

## ⚠️ Lưu ý quan trọng về phần cứng (Cục bộ vs Đám mây)
Có hai cách để chơi, và trải nghiệm của bạn phụ thuộc vào lựa chọn nào:

*   **Chế độ cục bộ (Miễn phí, Riêng tư):** Nếu bạn muốn chạy AI trên PC của mình, yêu cầu của cửa hàng (Tối thiểu 8GB VRAM) là quy tắc bất di bất dịch để bắt đầu thuận lợi. Ít hơn mức đó, AI sẽ chạy chậm hoặc làm treo máy của bạn. Đây là toán học thuần túy, không phải phép thuật, mặc dù giờ đây với Turbo Quant, điều này có thể thay đổi theo hướng tốt hơn.
*   **Chế độ đám mây (API Gemini, GPT, v.v. chỉ khi bạn khởi động bằng lệnh `--advanced`):** Mọi chuyện thay đổi ở đây! Nếu bạn cấu hình trò chơi để sử dụng các dịch vụ đám mây (như Google Gemini hoặc OpenAI), công việc nặng nhọc sẽ được thực hiện trên máy chủ của họ, không phải máy của bạn. Ở chế độ này, trò chơi chạy mượt mà trên hầu hết mọi thiết bị, vì card đồ họa của bạn sẽ được nghỉ ngơi.

## Quản lý kỳ vọng
Nếu bạn mong đợi một siêu phẩm AAA hoàn hảo, tôi e rằng bạn đã đến nhầm chỗ (ít nhất là vào lúc này). Trò chơi đang ở giai đoạn đầu, và thành thật mà nói, chỉ những người dũng cảm hiểu và ủng hộ các dự án thử nghiệm loại này mới có đủ kiên nhẫn để tận hưởng nó ngay bây giờ.

## Đảm bảo hài lòng
Nếu bạn cảm thấy trò chơi còn quá non trẻ đối với bạn hoặc phần cứng của bạn đang chịu đựng quá nhiều, sẽ không ai giận nếu bạn yêu cầu hoàn tiền. Ngược lại, tôi sẽ rất vui lòng chào đón bạn quay trở lại trong tương lai — và bạn sẽ trả 40 hoặc 60 USD khi trò chơi được trau chuốt và hoàn thành 😉—. Giá hiện tại là một ưu đãi cho việc bạn tin tưởng tôi ở giai đoạn này.

Nói vậy, lòng biết ơn của tôi là vô hạn đối với những người quyết định ở lại. Các báo cáo và đề xuất của bạn là động lực thực sự của dự án này. Nhờ có các bạn, trò chơi đã cải thiện đáng kể chỉ trong vài tuần.

**RolemIAster đang được xây dựng theo yêu cầu của bạn.**

*Cảm ơn sự kiên nhẫn, sự ủng hộ và chúc các nhà phê bình đứng về phía bạn!*


*********************************************************************************
# 📢 CHÚNG TÔI ĐÃ CẬP NHẬT LÊN QWEN 3.5 + TURBO QUANT! ĐỘNG CƠ MỚI, CÔNG NGHỆ MỚI, KỶ NGUYÊN MỚI 🚀
*********************************************************************************

🚧 KHU VỰC THI CÔNG: ĐÃ LOBOTOMIZE (VÀ NÓ HOẠT ĐỘNG) 🧠🔧
Tôi đang làm gì?
Tôi đang thay đổi động cơ của trò chơi, và đó không phải là chuyện đùa.
Cho đến nay, mỗi khi bạn chơi một lượt, hệ thống sẽ gửi cho AI một "khối" quy tắc gồm 15.000 đến 20.000 token. Về cơ bản, giống như việc buộc người quản lý phải đọc toàn bộ sách hướng dẫn trước mỗi câu nói. 📚🥵
Tôi đã triển khai hai công nghệ hoạt động song song:

1. 🧠 **TurboQuant — Bộ nhớ nén**
   - Tôi đã tích hợp một công nghệ của Google (được giới thiệu tại ICLR 2026) nén bộ nhớ của AI xuống gần một phần ba kích thước ban đầu.
   - Nếu bạn có card RTX dòng 3000, 4000 hoặc 5000, trò chơi sẽ tự động tận dụng nó.
   - ⚠️ **LƯU Ý QUAN TRỌNG VỀ GPU AMD:** MẶC DÙ CÓ DẤU HIỆU TURBO QUANT HOẠT ĐỘNG TRÊN THẺ AMD/INTEL (VULKAN), TRÊN THỰC TẾ NÓ GÂY RA NHIỀU LỖI VÀ DO ĐÓ HIỆN TẠI SẼ KHÔNG ĐƯỢC TRIỂN KHAI. CHÚNG TÔI HY VỌNG CỘNG ĐỒNG SẼ TỰ LÀM ĐIỀU TƯƠNG TỰ VÀ SỚM CÓ TIN TỨC MỚI.
   - **Kết quả:** AI nhớ được nhiều hơn trong khi tiêu thụ ít VRAM hơn. Đó là phép thuật kỹ thuật số thuần túy. ✨

2. 📖 **Ngữ cảnh khổng lồ (+200%)**
   - Tôi đã viết lại phép tính bộ nhớ hội thoại một cách tỉ mỉ: giờ đây trò chơi đọc thông số kỹ thuật của từng mô hình và tính toán chính xác lượng dữ liệu có thể lưu trữ trên GPU của bạn.
   - Mô hình 9B tăng từ khả năng nhớ ~36.000 từ lên hơn ~110.000 từ trên GPU có 16GB VRAM. 🚀
   - Ngoài ra, tôi đã tăng giới hạn phản hồi từ 4.096 lên 8.192 token: tường thuật dài hơn mà không bị ngắt quãng giữa câu.

Kết quả cuối cùng: Tốc độ vượt trội trong hầu hết các trường hợp, các ván chơi dài không bị mất mạch, và AI tập trung hơn nhiều (và tỉnh táo hơn). 🎯

Tuyên bố miễn trừ trách nhiệm (Disclaimer 🧐):
Nếu ngay cả những gã khổng lồ Thung lũng Silicon (Gemini, ChatGPT...) đôi khi cũng nhìn thấy những con voi màu hồng, thì mô hình cục bộ của tôi sẽ không hoàn hảo 100% mọi lúc. Nhưng giờ đây nó không còn là "thằng say xỉn trong đám cưới" nữa — giờ đây nó là một Người Quản lý Rol (RPG Master) có năng lực với trí nhớ của một con voi thật. 🐘

Cảm ơn sự kiên nhẫn của bạn trong khi tôi chỉnh sửa các chi tiết! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->