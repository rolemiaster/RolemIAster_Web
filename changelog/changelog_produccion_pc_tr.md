****************************************************************************************************
02/03/2026 12:54 - Yapay Zeka Çekirdeğinde Kapsamlı Yeniden Yapılandırma - Beta_v060
****************************************************************************************************
- What's New (TR):
  - **🧠 Yapay Zeka Çekirdeği Yeniden Yapılandırması**
    - ⚡ **Daha Hızlı Yanıtlar:** Yapay zekanın daha önce işlediği şeyleri daha iyi hatırlamasını sağlamak için oyunun beynini yeniden yazdım. Pratik terimlerle: sıra geçişleri arasındaki yükleme ekranına bakma süresi azaldı. Motor artık her hamlenizde sıfırdan başlamak yerine önceki çalışmaları yeniden kullanıyor. (Evet, eskiden böyle yapıyordu. Hayır, bununla gurur duymuyorum.)
    - 🧹 **Daha Temiz Bellek:** Oyun geçmişi, yazıldığı andan itibaren teknik çöp olmadan saklanıyor, okunduğu zaman değil. Sonuç: yapay zekanın hikayenizi hatırlaması için daha fazla alanı var ve hiç görmesi gerekmeyen dahili verilerle boşa harcanan daha az token var.
    - 🎯 **Kurallar Yerli Yerinde:** Yapay zekanın yanıtlarını zenginleştirmek için başvurduğu ek kurallar, önbellek sistemine müdahale etmemeleri için yeniden düzenlendi. Etkisi sizden gizli, ancak motor her turda bunu takdir ediyor (biraz daha hız fena olmaz).
  
  - ** Qwen3 Serbest Bırakıldı: Tam Akıl Yürütme Etkinleştirildi**
    - 🚀 **Derin Düşünme:** Akıl yürütme yeteneğine sahip modeller (Qwen3, DeepSeek-R1...) artık potansiyellerini tam olarak ortaya çıkarıyor. Yapay zeka "körlemesine" gitmek yerine, her yanıttan önce dahili olarak akıl yürütüyor: karakter kartlarını planlıyor, hikayenizle anlatısal tutarlılığı değerlendiriyor ve yinelenen envanterler veya eksik özellikler gibi hatalardan kaçınıyor. Sonuç, dikkate değer ölçüde daha akıllı ve tutarlı bir yapay zeka.
    - 🧹 **Sizin İçin Şeffaf:** Tüm bu akıl yürütme perde arkasında gerçekleşiyor. Motor, yanıtı size göstermeden önce yapay zekanın "iç monologunu" otomatik olarak temizliyor. Siz sadece daha cilalı olan nihai sonucu görüyorsunuz.
  
  - **⚡ Daha Güvenilir Oyun Başlangıcı**
    - 🛡️ **İlk Tur Kilitlenmelerine Elveda:** Yeni bir oyuna başlarken yaşanan sonsuz beklemelerin bir nedenini ortadan kaldırdık. Eskiden, yapay zeka ticaret kurallarını bilmeden (çünkü ilk turda yok) bir tüccar karakteri oluşturursa, motor pes etmeden önce bunu 3 kez düzeltmeye çalışır, bu da faydasız bir dakikadan fazla beklemeye neden olurdu. Şimdi anında çözüyor.
    - 📖 **Yaratıcı Yapay Zekaya Karşı Dayanıklı Lore:** Yapay zeka heyecanlanıp dünya arka planını anlatısal metin yerine teknik formatta oluşturursa, motor bunu tespit eder ve temiz hikayeyi otomatik olarak çıkarır. Lore'unuz her zaman olması gerektiği gibi geliyor.
    - 🧹 **Kusursuz Arayüz:** Yapay zekaya "kodla konuşmamayı" öğrettim. Eskiden, karar düğmeleri veya oyun yöneticisi yorumları bazen tuhaf dahili değişkenler gösteriyordu (örneğin *Kaç (move to loc_cripta)*). Şimdi her şey temiz ve modelin sizinle seçtiğiniz mizah tonunu kullanarak iletişim kurması zorlandı (bu parametreyi dikkate alması, yapay zekanın ruh haline bağlıdır).
  
  - **🌍 Dil Düzeltmeleri**
    - 🗣️ **Yereller Dilinizde:** Yapay zeka tarafından oluşturulan konumlar artık oyunda yapılandırılan dile saygı duyuyor. İngilizce oynuyorsanız, artık "West Coast District" yerine İngilizce adı göreceksiniz. (Ups.)
    - 🔘 **Yerelleştirilmiş Düğmeler:** "Devam Et" acil durum düğmesi artık her zaman İspanyolca görünmek yerine sizin dilinizde konuşuyor.

****************************************************************************************************
27/02/2026 16:46 - Savaşta Yükleme Senkronizasyonu ve Tur Akışı - Beta_v059
****************************************************************************************************
- What's New (TR):
  - **Savaş ve Oyun Ritmi**
    - ⚔️ **Daha Akıcı Çatışmalar:** Eyleminiz kuyrukta beklerken artık boş tıklamalar yok, yüklemeler hayali düğmeler yerine gerçek kararlar döndürüyor.
    - 🧭 **Senkronize Sahne:** Ekranda gördükleriniz savaşın mevcut durumunu yansıtıyor ve sadece bulunduğunuz konumdaki düşmanlar beliriyor.
    - 🚫 **Daha Az Dahili Bürokrasi:** Oyunun idari tıkanıklıklar olmadan ilerlemesi için gereksiz kontrolleri ayıklıyoruz.
  
  - **Görsel Motor ve Gelişmiş Panel**
    - 🧹 **Temiz Seçici:** Teknik klasörler gizleniyor ve gürültüsüz model seçimi için filtreleme standartlaştırılıyor.
    - ️ **Stabil Arka Planlar:** Bir görsel yükleniyorsa, bir sonrakini ezmiyor; ayrıca, savaş yüklemesi sürpriz yeniden oluşturmaları önlüyor.
    - 🎛️ **Güçlendirilmiş Görsel Panel:** Render stratejisi, değişim gücü ve minimum adımlar artık bağlamsal yardımla gelişmiş arayüzden kontrol ediliyor.
  
  - **Karakter Oluşturma ve Portreler**
    - 🧍 **Cinsiyet Görünür:** Temel formda Erkek/Kadın seçiyorsunuz ve tüm akış (portreler, dahili veriler) bu seçime saygı duyuyor.
    - 👶➡️🧓 **Anlaşılır Yaş:** Yapay zekanın yaşam evresini daha iyi çizmesi için anlatısal dilimler kullanıyoruz.
    - 🧼 **Temizlenmiş Komutlar:** Görsel istekler göndermeden önce teknik gürültüyü temizliyoruz ve bu portrelerin kararlılığında kendini gösteriyor.
    -  **Güvenilir Kartlar:** Yapay zeka zorunlu özellikleri "unutamaz" veya başlangıç envanterini şişiremez.
  
  - **Anlatı, Kurallar ve RAG**
    - 🚀 **Daha Doğrudan PJ Varışı:** Başlangıç sahnesi katı JSON sözleşmeleri kullanıyor ve tuhaf bağlam karışımlarından kaçınıyor.
    -  **Odaklanmış RAG:** Yalnızca izin verilen kökler indeksleniyor ve komuta gönderilen kart, token tasarrufu için efektlerin özetlerini içeriyor.
  
  - **Yapay Zeka Yapılandırması ve PSR**
    - 🎛️ **Yeni PSR Kontrolü Aşama 1:** Cerrahi modu her zaman keşifte mi yoksa yalnızca komut zorladığında mı istediğinize karar verin.
    - 📏 **Ayarlanabilir Eşik (%95 varsayılan):** Donanımınıza göre otomatik PSR'yi tetiklemeden önce ne kadar marj tanıdığınızı ince ayarla.
    - 🧠 **Daha Hafif ve Döngüsüz Komutlar:** Durumları özetliyoruz ve yapay zeka, hikaye karmaşıklaştığında aşırı yüklenmemesi için araçlara sahip.

****************************************************************************************************
24/02/2026 12:32 - Yapay Zeka Görsel Oluşturma, Anlatı İyileştirmeleri ve Kontrol - Beta_v058
****************************************************************************************************
- What's New (TR):
  **🧠 Beynin Evrimi: Merhaba, Qwen 3**
  Oyunun motorunu, yeni nesil Qwen3 modellerinden en yüksek verimi almak için taşıdım. 2.5 serisinin eski modelleri RolemIAster'ın yolculuğunu başlattı, ancak artık eski ihtişamları geride bırakma zamanı geldi. Hikaye üretimindeki bu nicel sıçrama, daha sürükleyici bir anlatım, çok daha katı kurallar ve daha tutarlı karakterler anlamına geliyor. Ekran kartlarınızı hazırlayın, çünkü Oyun Yöneticisi az önce seviye atladı.

  **Yenilik: Yapay Zeka Görsel Oluşturma - İkinci Aşama**
  - 🎨 **Resimlerle Senin Dünyan:** Başlangıç düzeyinde bir Yapay Zeka görsel oluşturma sistemi entegre ettim. Oynadıkça sistem, oyununun atmosferine eşlik edecek portreler ve manzaralar oluşturmaya çalışır.
  - 🖼️ **Dinamik Arka Planlar:** Görseller, oyununu durdurmadan arka planda oluşturulur. Arka planda, karakter kartlarında ve Kodeks'te aşamalı olarak belirdiklerini göreceksin.
  - 🧹 **Görsel Yönetimi:** Hoşuna gitmeyen görselleri görüntülemek ve silmek için yeni panel.
  
  **Karakter Oluşturma İyileştirmeleri:**
  - ⚙️ **Daha Güçlü Rastgele Oluşturma:** YZ'nin sıfırdan karakter oluşturmak için kullandığı kural motorunu birleştirip geliştirdim; böylece daha mantıklı envanterler (5-10 tutarlı eşya) ve daha dengeli karakter kağıtları sağlandı.
  - 🧠 **Bölünmüş Beyin:** YZ artık ne zaman sıfırdan bir karakter "uydurması" gerektiğini ve ne zaman sadece senin yazdığın biyografiden veri çıkarması gerektiğini daha iyi anlıyor.
  - ⚡ **Sana Özel Hız:** Görsel Ayarlar'da yeni bölüm. Oluşturma süresini bilgisayarının gücüne göre ayarlamak için "Hızlı" (1 adım), "Orta" (2 adım) veya "Yüksek" (4 adım) arasından seçim yap.
  - 🛠️ **Teknik Optimizasyon:** Görsel YZ modeli **RAM (Bellek)** üzerinde yüklenir ve **CPU** aracılığıyla işlenir, video belleğini (VRAM) işgal etmez. Bu, oyunun ana YZ'sinin (LLM) performansını etkilememesini sağlar. Steam resmi minimum gereksinimleri dahilinde kalarak yaklaşık 5GB ek RAM gerektirir.
  - 📤 **Maceralarını Paylaş:** Oluşturulan tüm görseller otomatik olarak kaydedilir. Bunları şu klasörde bulabilirsin: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Model Seçici (Gelişmiş):** Oyunu `--advanced` parametresiyle başlatırsan, artık Görünüm panelinden görseller için hangi YZ modelinin kullanılacağını seçebilirsin. Bu, meraklıların OpenVINO (.xml/.bin dosyaları) için optimize edilmiş farklı Stable Diffusion sürümlerini denemesine olanak tanır.
  
  **Anlatı ve YZ Beyni:**
  - 🧠 **Döngülerin Sonu:** YZ'de yeni bir "Bellek Doktrini" uygulandı. Artık "anılar" (geçmişte olanlar) ile "şimdiki zaman" (şu an olanlar) arasındaki farkı daha iyi ayırt ediyor. Bu, YZ'nin kendini tekrar ettiği veya takılı kaldığı durumları azaltmaya yardımcı olur.
  - 📜 **Tarihi Arşivler:** Sistem, anılarını YZ'ye bir "Kapalı Tarihi Arşiv" olarak sunarak, hikayeyi ilerletmek için bu bilgileri referans olarak kullanmasını kolaylaştırır.
  - ⚡ **Optimize Edilmiş Talimatlar:** Oyunun senin dilinde anlatım talep etme şekli iyileştirildi, böylece modelin kapasitesi yaratıcılığa odaklanmak üzere serbest bırakıldı.
  - 👁️ **Anlatı Odağı:** YZ'nin algısı yeniden yazıldı. Artık hangi öğelerin "statik arka plan" olduğunu daha iyi anlıyor ve bunları her paragrafta gereksiz yere tekrarlamıyor.
  - 🔀 **Daha Net Kararlar:** YZ artık daha belirgin çıkış yolları sunuyor. Önerileri (butonlar), çevreyi araştırmak (Derinleş) veya rotayı değiştirmek (Sap) olarak ikiye ayrılıyor.
  - 🫵 **Doğrudan Hitap:** YZ'nin sana "Sen" diye hitap etmesini sağlamak için temel talimat düzenlendi ve kişisel daldırma (immersion) artırıldı.
  
  **Karakter Oluşturma:**
  - 🖼️ **Karakter Portreleri:** YZ ile karakter oluştururken sistem; yaşına, mesleğine ve açıklamasına dayalı bir portre oluşturmaya çalışır. Bunun ilk sürüm olduğunu ve doğruluğun (özellikle yaş konusunda) kullanılan modele göre değişebileceğini unutmayın. (Testlere devam ediyorum ama başlangıç iyi)
  - 🎲 **Güvenilir Rastgele Oluşturma:** "YZ ile Oluştur" butonunun ilk denemede hata verip alanları boş bırakmasına neden olan bir sorun giderildi. Artık akıllı düzeltme sistemi, yanıtın her zaman geçerli olmasını sağlar.
  
  **Oluşturulan Görsellerin Yönetimi:**
  - 🖼️ **YZ Görsel Galerisi:** Dosya menüsünde, oyunların sırasında YZ'nin oluşturduğu tüm görselleri (portreler, arka planlar) gösteren yeni panel. Görsel türüne veya dünyaya göre filtreleyebilirsin.
  - 🗑️ **Seçili Silme:** Bir veya daha fazla görsel seçip hoşuna gitmeyenleri sil (belki YZ'nin kalenin ahırına bir otobüs park etmenin iyi bir fikir olduğuna karar verdiği o görseli). Sistem hem dosyayı hem de dahili kaydını temizler.
  - 📂 **Doğrudan Erişim:** Dosyanın bulunduğu klasörü açmak için herhangi bir küçük resme çift tıkla. Klasör zaten açıksa aynı pencere tekrar kullanılır.
  - 💾 **Alanını Hatırla:** Galeri penceresinin boyutu oturumlar arasında otomatik olarak kaydedilir.
  
  **Düşük Donanımlarda Performans (Düşük VRAM'li GPU'lar için önemli):**
  - 🧠 **PSR - Hibrit Yönetim:** YZ'nin işini iki aşamaya bölen yeni sistem: Planlama (Şef) ve Yürütme (Aşçılar). Bu, 8 GB VRAM'e sahip yerel modellerin, yüksek gecikme pahasına aşırı bağlam (+12K token) nedeniyle çökmesini önleyerek çalışmasını sağlar; YZ ile etkileşim tek bir istemden (prompt) bir dizi isteme dönüşür (VRAM ne kadar düşükse o kadar fazla istem oluşturulur ve yanıt süresi o kadar uzar).
  - ⚡ **Akıllı Yürütme:** Sistem, mevcut VRAM'ine göre her şeyi tek seferde (monolitik) mi yoksa parçalara bölerek (yinelemeli) mi işleyeceğine otomatik olarak karar verir. Daha az VRAM'li GPU'lar, parçalı modu yalnızca gerektiğinde etkinleştirir.
  - 📊 **Dinamik Optimizasyon:** PSR, oluşturma sırasında token yükünü azaltarak 4GB ekran kartına sahip kullanıcıların daha önce engellenen karakter oluşturma ve hikaye oluşturma işlemlerini tamamlamasına olanak tanır.
  - 🔄 **Korunan Tutarlılık:** İşi bölmesine rağmen sistem, YZ'nin ne yaptığını unutmaması için bir "ana niyet" enjekte eder.
  
  **YZ Sesleri (kademeli iyileştirme):**
  Tüm dillerde gerçek zamanlı ses oluşturma (bazı diller diğerlerinden daha sınırlıdır, ses türü bakımından en çeşitlisi İngilizcedir)
  - 🗣️ **Sesli Savaş Çığlıkları:** Düşmanlarla savaşa başlarken artık bağlamsal bir sesli giriş cümlesi tetiklenir.
  - 🎭 **Bağlama Göre Dinamik Cümleler:** Motor; dile, ortama ve karakter profiline göre belirli olaylar (hizmetler/savaş) için kısa seslendirme satırları oluşturabilir.
  - 🧠 **Dahili Ses Şablonları:** Hikayeye müdahaleyi önlemek için teknik ses şablonları anlatı sisteminden ayrıldı.
  - 🔊 **Dinlemede Daha Fazla Netlik:** Anlaşılır diksiyona öncelik vermek için sentezin anlaşılırlığı ve prozodisi (vurgu/tonlama) iyileştirildi.
  
  **⚠️ Uyumluluk Uyarısı (Eski Kayıtlar):**
  - 🔄 Kural motorundaki ve atmosfer sistemindeki çok sayıda dahili değişiklik nedeniyle, **önceden kaydedilmiş oyunlar ve dünyalar muhtemelen hala oynanabilir olacaktır**, ancak hatalar veya beklenmedik davranışlar sergilemeleri çok olasıdır. **Tüm iyileştirmelerden düzgün şekilde yararlanmak için yeni ve temiz bir dünya oluşturmanız önerilir.**

****************************************************************************************************
17/02/2026 07:20 - YZ Görüntü Oluşturma, Anlatı İyileştirmeleri ve Kontrol - EXPERIMENTAL_v057
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

