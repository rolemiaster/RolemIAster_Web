****************************************************************************************************
18/04/2026 04:06 - TurboQuant Entegrasyonu — KV Önbelleğinin Aşırı Sıkıştırılması - EXPERIMENTAL_v061
****************************************************************************************************
- What's New (TR):
  - **🗜️ Yeni Hafıza Sıkıştırma Motoru (TurboQuant)**
    - 🧠 **Yapay Zeka Daha Az Kaynakla Daha Fazla Hatırlıyor:** Yapay zekanın "çalışma belleğini" öncekine göre yaklaşık üçte biri kadar yer kaplamasını sağlayan gelişmiş bir sıkıştırma teknolojisi (Google'ın ICLR 2026'da sunduğu bir bildiriden TurboQuant) entegre ettim. Pratik anlamda: Grafik kartının şikayet etmesine gerek kalmadan hikayenizi, kararlarınızı ve oyunun bağlamını hatırlamak için daha fazla alan.
    - ⚡ **GPU'nuzla Uyumlu:** 3000, 4000 ve 5000 serisi NVIDIA RTX kartlarda çalışır. Bunlardan birine sahipseniz, oyun otomatik olarak bundan faydalanacaktır. Yoksa, her şey standart sıkıştırmayla eskisi gibi çalışmaya devam eder (ki bu da hiç fena değildi).
    - 🔧 **Tesisat İşleri:** Bu güncelleme, yapay zeka motorunun sıfırdan özel Windows yamalarıyla yeniden derlenmesini gerektirdi. Doğrudan fark edilen bir şey değil ama gelecek sürümlerdeki bağlam geliştirmelerinin temelini oluşturacak. (Evet, NVIDIA derleyicisiyle uzun süre tartıştım. Hayır, bu konu hakkında konuşmak istemiyorum.)
  - **🧠 Dev Bağlam Optimizasyonu (+%200)**
    - 📖 **Yapay Zeka Üç Katını Okuyor (ve Hatırlıyor):** Yapay zekanın ne kadar "konuşma belleği" kullanabileceğine dair hesaplamayı tamamen yeniden yazdım. Eskiden muhafazakar bir tahmin, bolca boş alan bırakıyordu. Şimdi oyun, her modelin teknik özelliklerini doğrudan okuyor ve GPU'nuza ne kadar bağlamın sığacağını hassas bir şekilde hesaplıyor. Sonuç: 16GB VRAM'li bir GPU'da 9B'lik model, yaklaşık ~36.000 kelimeden ~110.000 kelimeye kadar hatırlayabilir hale geliyor. Uzun oyunlarınız artık ipin ucunu bu kadar kolay kaybetmiyor ve düşük VRAM'li sistemlerde yaşanan takılmalar çözülmeli.
    - 📝 **Daha Uzun Yanıtlar:** Yapay zekanın yanıt uzunluğu sınırını 4.096'dan 8.192 token'a çıkardım. Bu, daha ayrıntılı açıklamalar, daha karmaşık diyaloglar ve işler ilginçleştiğinde cümlenin ortasında kesilmeyen anlatılar anlamına gelir.
    - 🔄 **Tüm Modeller İçin Çalışır:** Geliştirme, uyumlu herhangi bir modele (2B, 4B, 9B...) otomatik olarak uygulanır. Daha eski veya üçüncü taraf bir model kullanıyorsanız, her şey eskisi gibi çalışmaya devam eder — optimizasyon yalnızca modelin desteklediğini algıladığında etkinleşir.

