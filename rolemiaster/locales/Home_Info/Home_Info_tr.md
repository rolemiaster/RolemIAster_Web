# 📢 Geliştirici Mesajı (Erken Erişim)

RolemIAster'a hoş geldiniz. Bir sonraki büyük maceranıza dalmadan önce, birkaç şeyi açıklığa kavuşturmak için bir dakikanızı ayırmak istiyorum (kısa olacağıma söz veriyorum, zarlar sizi bekliyor).

Bu oyun **Erken Erişim (Early Access)** aşamasındadır.
Ben yalnız bir geliştiriciyim —evet, sadece ben, klavyem ve litrelerce kahve— bu da elimden gelen her şeyi yaptığım anlamına gelir, ancak bazen her şeye yetişemem. Sinsi bir hatayı düzeltmekte gecikirse, çok istediğiniz bir özelliği uygulamakta veya Discord'da hemen yanıt vermekte gecikirse şimdiden özür dilerim. Akrobatlık yapıyorum ama henüz ekstra dokunaçlarım çıkmadı.

## ⚠️ Donanım Hakkında Önemli Uyarı (Yerel vs Bulut)
Oynamanın iki yolu vardır ve deneyiminiz seçiminize bağlıdır:

*   **Yerel Mod (Ücretsiz, Özel):** Yapay zekayı kendi bilgisayarınızda çalıştırmak istiyorsanız, mağaza gereksinimleri (Minimum 8GB VRAM) iyi bir başlangıç ​​için kutsaldır. Bundan azı, yapay zekanın sürünmesine veya bilgisayarınızı kilitlemesine neden olur. Bu saf matematiktir, büyü değil, ancak şimdi Turbo Quant ile bu durum daha iyiye doğru değişebilir.
*   **Bulut Modu (Gemini, GPT API vb. yalnızca `--advanced` komutuyla başlarsanız):** Burası filmin değiştiği yer! Oyunu bulut hizmetleri (Google Gemini veya OpenAI gibi) kullanacak şekilde yapılandırırsanız, ağır işler sizin yerinize onların sunucularında yapılır. Bu modda oyun, grafik kartınız dinlendiği için neredeyse her bilgisayarda akıcı bir şekilde çalışır.

## Beklentileri Yönetme
Eğer kusursuz bir AAA yapımı bekliyorsanız, korkarım yanlış yerdesiniz (şimdilik). Oyun erken bir aşamada ve dürüst olmak gerekirse, yalnızca bu tür deneysel projeleri anlayan ve destekleyen cesurlar şu anda tadını çıkaracak sabra sahiptir.

## Memnuniyet Garantisi
Oyunun sizin için çok ham olduğunu veya donanımınızın çok zorlandığını hissediyorsanız, geri ödeme talep ederseniz kimse kızmaz. Aksine, gelecekte sizi tekrar görmekten memnuniyet duyarım — ve oyun cilalanıp bittiğinde 40 veya 60 ABD Doları ödersiniz 😉—. Mevcut fiyat, bu aşamada bana güvendiğiniz için bir hediyedir.

Bununla birlikte, kalanlara sonsuz teşekkürlerimi sunarım. Raporlarınız ve önerileriniz bu projenin gerçek motorudur. Sizler sayesinde oyun haftalar içinde inanılmaz derecede gelişti.

**RolemIAster sizin için özel olarak inşa ediliyor.**

*Sabrınız, desteğiniz ve eleştirmenlerin yanınızda olması için teşekkürler!*


*********************************************************************************
# 📢 QWEN 3.5 + TURBO QUANT'A GÜNCELLEDİK! YENİ MOTOR, YENİ TEKNOLOJİ, YENİ DÖNEM 🚀
*********************************************************************************

🚧 ŞANTİYE ALANI: LOBOTOMİ TAMAMLANDI (VE ÇALIŞIYOR) 🧠🔧
Nelerle uğraşıyorum?
Oyunun motorunu değiştiriyorum ve bu hiç de kolay değil.
Şimdiye kadar, her tur oynadığınızda, sistem yapay zekaya 15.000 ila 20.000 token arasında bir "yığın" kural gönderiyordu. Temel olarak, her cümleden önce tüm kılavuzu okuması için ustayı zorlamak gibiydi. 📚🥵
Birlikte çalışan iki teknoloji uyguladım:

1. 🧠 **TurboQuant — Sıkıştırılmış Bellek**
   - Google'ın (ICLR 2026'da sunulan) yapay zekanın belleğini orijinal boyutunun neredeyse üçte birine sıkıştıran bir teknolojisini entegre ettim.
   - RTX 3000, 4000 veya 5000 serisi bir kartınız varsa, oyun otomatik olarak bundan yararlanacaktır.
   - ⚠️ **AMD GPU HAKKINDA ÖNEMLİ NOT:** AMD/INTEL KARTLARDA (VULKAN) TURBO QUANT ÇALIŞMA BELİRTİLERİ OLSA DA, PRATİKTE ÇOK ARIZA VERİYOR VE BU NEDENLE ŞİMDİLİK UYGULANMAYACAK. TOPLULUĞUN KENDİ ÇABALARIYLA YAKINDA HABERLER BEKLİYORUZ.
   - **Sonuç:** Yapay zeka daha az VRAM harcayarak daha fazlasını hatırlıyor. Saf dijital sihir. ✨

2. 📖 **Devasa Bağlam (+%200)**
   - Konuşma belleği hesaplamasını cerrahi bir hassasiyetle yeniden yazdım: artık oyun, her modelin teknik özelliklerini okuyor ve GPU'nuza ne kadar sığabileceğini hassas bir şekilde hesaplıyor.
   - 9B model, 16GB VRAM'li bir GPU'da ~36.000 kelimeden fazla ~110.000 kelimeyi hatırlamaya başlıyor. 🚀
   - Ayrıca, yanıt limitini 4.096'dan 8.192 tokene çıkardım: cümle ortasında kesilmeden daha uzun anlatımlar.

Nihai sonuç: Çoğu durumda üstün hız, akışını kaybetmeyen uzun oyunlar ve çok daha odaklanmış (ve ayık) bir yapay zeka. 🎯

Gerçeklik Notu (Feragatname 🧐):
Silikon Vadisi devleri (Gemini, ChatGPT...) bile bazen pembe filler görüyorsa, yerel modelim %100 mükemmel olmayacak. Ama artık "düğündeki sarhoş adam" değil — şimdi gerçek bir fil hafızasına sahip yetkin bir Rol Ustası. 🐘

Vidalara ayarlama yaparken gösterdiğiniz sabır için teşekkürler! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->