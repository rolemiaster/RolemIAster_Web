# 📢 Geliştirici Mesajı (Erken Erişim)

RolemIAster'a hoş geldiniz. Bir sonraki büyük maceranıza dalmadan önce, birkaç şeyi açıklığa kavuşturmak için bir dakikanızı rica ediyorum (kısa olacağım, zarlar sizi bekliyor).

Bu oyun **Erken Erişim (Early Access)** aşamasındadır.
Ben yalnız bir geliştiriciyim — evet, sadece ben, klavyem ve litrelerce kahve — bu da elimden gelenin en iyisini yapmaya çalıştığım anlamına gelir, ancak bazen her şeye yetişemem. Sinsi bir hatayı düzeltmek, çok istediğiniz bir özelliği uygulamak veya Discord'da hemen yanıt vermek için gecikmeler yaşarsam şimdiden özür dilerim. El çabukluğu yapıyorum ama henüz ekstra kollarım çıkmadı.

## ⚠️ Donanım Hakkında Önemli Uyarı (Yerel vs Bulut)
Burada oynamanın iki yolu var ve deneyiminiz hangisini seçeceğinize bağlıdır:

*   **Yerel Mod (Ücretsiz, Özel):** Yapay zekayı kendi bilgisayarınızda çalıştırmak istiyorsanız, mağaza gereksinimleri (Minimum 12 GB VRAM) kutsaldır. Bundan azı yapay zekanın sürünmesine veya bilgisayarınızın kilitlenmesine neden olur. Bu saf matematik, sihir değil.
*   **Bulut Modu (Gemini, GPT vb. API'leri yalnızca `--advanced` komutuyla başlatırsanız):** İşte burada işler değişiyor! Oyunu bulut hizmetlerini (Google Gemini veya OpenAI gibi) kullanacak şekilde yapılandırırsanız, ağır işler sizin bilgisayarınızda değil, onların sunucularında yapılır. Bu modda, ekran kartınız dinlendiği için oyun neredeyse her bilgisayarda akıcı çalışır.

## Beklentileri Yönetme
Eğer kusursuz bir AAA yapımı bekleyerek geldiyseniz, korkarım yanlış yerdesiniz (şimdilik). Oyun erken bir aşamada ve dürüst olmak gerekirse, sadece bu tür deneysel projeleri anlayan ve destekleyen cesurlar şu anda keyfini çıkaracak sabra sahiptir.

## Memnuniyet Garantisi
Oyunun sizin için çok ham olduğunu veya donanımınızın çok zorlandığını hissediyorsanız, geri ödeme istediğinizde kimse kızmayacaktır. Tam tersine, gelecekte sizi tekrar görmekten memnuniyet duyarım — ve oyun cilalanıp tamamlandığında 40 veya 60 USD öderseniz 😉. Mevcut fiyat, bu aşamada bana güvendiğiniz için bir hediyedir.

Bununla birlikte, kalmaya karar verenlere sonsuz minnettarım. Raporlarınız ve önerileriniz bu projenin gerçek motorudur. Sizin sayenizde oyun birkaç hafta içinde inanılmaz derecede gelişti.

**RolemIAster sizin için özel olarak inşa ediliyor.**

*Sabrınız, desteğiniz ve eleştirmenlerin yanınızda olması için teşekkürler!*


*********************************************************************************
#  QWEN 3.5 + TURBO QUANT'A GÜNCELLEDİK + YENİ MOTOR, YENİ TEKNOLOJİ, YENİ ÇAĞ 🚀
*********************************************************************************

🚧 ŞANTİYE ALANI: LOOTOMİ TAMAMLANDI (VE ÇALIŞIYOR) 🧠🔧
Nelerle meşgulüm?
Oyun motorunu değiştiriyorum ve bu hiç de kolay bir iş değil.
Şimdiye kadar, her tur oynadığınızda, sistem yapay zekaya 15.000 ila 20.000 tokenlik bir "yığın" kural gönderiyordu. Temel olarak, her cümleden önce oyun yöneticisini tüm kılavuzu okumaya zorlamak gibiydi. 📚🥵
Ekip halinde çalışan iki teknoloji uyguladım:

1. 🧠 **TurboQuant — Sıkıştırılmış Bellek**
   - Google'ın yapay zekanın belleğini orijinal boyutunun neredeyse üçte birine sıkıştıran bir teknolojisini (ICLR 2026'da sunuldu) entegre ettim.
   - RTX 3000, 4000 veya 5000 serisi bir ekran kartınız varsa, oyun otomatik olarak bundan yararlanacaktır.
   - ⚠️ **AMD GPU HAKKINDA ÖNEMLİ NOT:** AMD/INTEL KARTLARDA TURBOQUANT'IN ÇALIŞTIĞINA DAİR İŞARETLER OLSA DA (VULKAN), UYGULAMADA BİRÇOK HATAYA YOL AÇIYOR VE BU NEDENLE ŞİMDİLİK UYGULANMAYACAKTIR. TOPLULUĞUN KENDİSİNE UYGULAYIP YAKINDA YENİLİKLER BEKLEMEYİ UMUYORUZ.
   - **Sonuç:** Yapay zeka daha az VRAM harcayarak daha fazlasını hatırlıyor. Bu saf dijital sihir. ✨

2. 📖 **Devasa Bağlam (+%200)**
   - Sohbet belleği hesaplamasını cerrahi bir hassasiyetle yeniden yazdım: artık oyun her modelin teknik özelliklerini okuyor ve ekran kartınıza ne kadar sığacağını hassas bir şekilde hesaplıyor.
   - 9B modeli, 16 GB VRAM'li bir ekran kartında ~36.000 kelimeden fazla ~110.000 kelime hatırlamaya başlıyor. 🚀
   - Ayrıca, yanıt sınırını 4.096'dan 8.192 token'a çıkardım: cümle ortasında kesilmeden daha uzun anlatımlar.

Nihai sonuç: Çoğu durumda üstün hız, ipi kaybetmeyen uzun oyunlar ve çok daha odaklanmış (ve ayık) bir yapay zeka. 🎯

Gerçeklik Notu (Feragatname 🧐):
Silikon Vadisi devleri bile (Gemini, ChatGPT...) bazen pembe filler görüyorsa, yerel modelim her zaman %100 kusursuz olmayacaktır. Ama artık "düğündeki sarhoş adam" değil — artık gerçek fil hafızasına sahip yetkin bir Rol Ustası. 🐘

Somunları ayarlarken gösterdiğiniz sabır için teşekkürler! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->