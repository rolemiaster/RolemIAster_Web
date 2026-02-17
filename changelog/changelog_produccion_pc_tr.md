****************************************************************************************************
17/02/2026 07:04 - YZ Görüntü Oluşturma, Anlatı İyileştirmeleri ve Kontrol - Beta_v058
****************************************************************************************************
- What's New (TR):
  **⚠️ DENEYSEL DAL (STEAM BETA)**
  Bu sürüm şu anda sadece Steam'in **Deneysel Dalı**nda mevcuttur. Etkinleştirmek için:
  1. Steam Kütüphanenizdeki **RolemIAster** üzerine sağ tıklayın.
  2. **Özellikler...** seçeneğini seçin.
  3. **Betalar** sekmesine gidin.
  4. "Beta Katılımı" kısmındaki açılır menüden **experimental** seçeneğini seçin.
  
  **Yenilik: YZ Görüntü Oluşturmanın İlk Aşaması**
  - 🎨 **Görüntülerle Dünyanız:** Yapay Zeka ile bir başlangıç görüntü oluşturma sistemi entegre ettim. Siz oynadıkça sistem, oyununuzun atmosferine eşlik edecek portreler ve manzaralar oluşturmaya çalışır.
  - 🖼️ **Dinamik Arka Planlar:** Görüntüler oyununuzu durdurmadan arka planda oluşturulur. Arka planda, karakter kartlarında ve Kodeks'te aşamalı olarak belirdiklerini göreceksiniz.
  - ⚡ **Size Özel Hız:** Görsel Ayarlarda yeni bölüm. Oluşturma süresini donanımınızın gücüne göre ayarlamak için "Hızlı" (1 adım), "Orta" (2 adım) veya "Yüksek" (4 adım) arasından seçim yapın.
  - 🛠️ **Teknik Optimizasyon:** Görüntü YZ modeli **RAM (Bellek)** üzerine yüklenir ve video belleğini (VRAM) işgal etmeden **CPU** üzerinden işlenir. Bu, oyunun ana YZ'sinin (LLM) performansına müdahale etmemesini sağlar. Resmi Steam minimum gereksinimleri dahilinde kalarak yaklaşık 5GB ek RAM gerektirir.
  - 📤 **Maceralarınızı Paylaşın:** Oluşturulan tüm görüntüler otomatik olarak kaydedilir. Bunları şu klasörde bulabilirsiniz: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Anlatı ve YZ Beyni:**
  - 🧠 **Döngülerin Sonu:** YZ'ye yeni bir "Hafıza Doktrini" yerleştirildi. Artık "anılar" (geçmişte olanlar) ile "şimdiki zaman" (şu anda olanlar) arasını daha iyi ayırt ediyor. Bu, YZ'nin kendini tekrarladığı veya takılı kaldığı durumları azaltmaya yardımcı olur.
  - 📜 **Tarihi Arşivler:** Sistem, anılarınızı YZ'ye "Kapalı Tarihi Arşiv" olarak sunar, bu da hikayeyi ilerletmek için bu bilgiyi referans olarak kullanmasını kolaylaştırır.
  - ⚡ **Optimize Edilmiş Talimatlar:** Oyunun sizin dilinizde anlatı talep etme şekli iyileştirildi, böylece modelin kapasitesi yaratıcılığa odaklanmak için serbest bırakıldı.
  - 👁️ **Anlatı Odağı:** YZ'nin algısı yeniden yazıldı. Artık hangi öğelerin "statik arka plan" olduğunu ve bunları her paragrafta gereksiz yere tekrarlamaması gerektiğini daha iyi anlıyor.
  - 🔀 **Daha Net Kararlar:** YZ artık daha belirgin kaçış yolları sunuyor. Önerileri (butonlar), ortamı araştırmak (Derinleşmek) veya rotayı değiştirmek (Sapmak) arasında bölünmüştür.
  - 🫵 **Doğrudan Hitap:** YZ'nin size "Sen" diye hitap etmesini sağlamak için temel talimat ayarlandı, bu da kişisel sürükleyiciliği artırıyor.
  
  **Karakter Oluşturma:**
  - 🖼️ **Karakter Portreleri:** YZ ile bir karakter oluştururken sistem yaşına, mesleğine ve tanımına göre bir portre oluşturmaya çalışır. Bunun bir başlangıç sürümü olduğunu ve doğruluğun (özellikle yaş konusunda) kullanılan modele göre değişebileceğini unutmayın. (Testlere devam ediyorum ancak başlangıç iyi)
  - 🎲 **Güvenilir Rastgele Oluşturma:** "YZ ile Oluştur" butonunun ilk denemede başarısız olup alanları boş bırakabildiği bir hata düzeltildi. Artık akıllı düzeltme sistemi yanıtın her zaman geçerli olmasını sağlıyor.

****************************************************************************************************
13/02/2026 21:47 - YZ Yapılandırma Optimizasyonu ve i18n Güçlendirmesi - Beta_v055
****************************************************************************************************
- What's New (TR):
  - ⚙️ **Yerel Öncelik Kontrolü:** Sistem otomatik modda olsa bile artık grafik kartlarınızın önceliğini manuel olarak ayarlayabilirsiniz.
  - 🧠 **YZ Rotasyon Bilgisi:** Hata veya kota aşımı durumunda otomatik rotasyonun nasıl çalıştığını açıklamak için harici sağlayıcı ayarlarına bilgi panelleri ekledim.
  - 🌍 **Genişletilmiş GPU Desteği:** i18n bilgi mesajı artık NVIDIA CUDA ve Vulkan (AMD/Intel) desteğini doğru bir şekilde yansıtıyor. Tüm dillerde çeviriler güncellendi!
  - ⚙️ **Geliştirilmiş Bağlantı:** Ollama ve diğer OpenAI uyumlu sunucular için bağlayıcılar düzeltildi.
  - 🧠 **Çok Dilli ve Sağlam YZ:** Hikayede elde edilen nesnelerin tespiti artık 10 dilde çalışıyor. Ayrıca, YZ teknik bir aksaklık yaşasa bile asla başlangıç hikayesiz kalmamanız için sistemi korumaya aldım.
  - 🔄 **Akıllı Rotasyon:** Yerel YZ'nizden hemen vazgeçmemesi için rotasyon sistemini düzelttim. Artık sistem, dış yardım aramadan önce ona kendini düzeltmesi için bir fırsat verecek.
  - 🧹 **Temel Temizliği:** YZ'nin "beyninin" nesnelerinizi yönetirken daha keskin ve hassas olması için eski ve kafa karıştırıcı kuralları kaldırdım.

