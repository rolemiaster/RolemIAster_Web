****************************************************************************************************
07/02/2026 20:26 - Savaş Semantik Yorumlama Sistemi - BETA_v054
****************************************************************************************************
🧪 ŞİMDİ KULLANILABİLİR:

⚠️ **ÖNEMLİ UYARI:** OYUN ESKİ VERİTABANINI...

****************************************************************************************************
06/02/2026 02:32 - Vulkan Desteği (AMD/Intel) ve Güçlü Hata Yönetimi - Beta_v053
****************************************************************************************************
- What's New (TR):
  - 🚀 **Hibrit Vulkan Motoru:** AMD ve Intel ekran kartları için resmi destek! Oyun artık, NVIDIA olmayan sistemlerde yapay zekayı hızlandırmak için otomatik (veya manuel) olarak devreye giren özel bir Vulkan motoru içeriyor.
  - ⚙️ **Tam Motor Kontrolü:** Hem Başlatıcıya hem de Ayarlara "Vulkan'ı Zorla" seçeneğini ekledik. CUDA ile sorun yaşıyorsanız veya (birçok yapılandırmada uçuşa geçen) Vulkan performansını test etmek istiyorsanız, kontrol sizde.
  - 🚦 **Sistem Durumu:** Artık durum panelinde kaputun altında hangi motorun kükrediğini (CUDA için 🟢 YEŞİL, Vulkan için 🔴 KIRMIZI) tam olarak görebilirsiniz.
  - 🛡️ **Yapay Zeka Uyarıları:** Yapay Zeka "yorulursa" (kotasını aşarsa) veya internet kesilirse, oyun sizi sessizce bekletmek yerine net ve yararlı bir pencere ile uyaracaktır.
  - 🔄 **Kilitlenme Önleyici Güvenlik:** Bir bağlantı hatası oluşursa, oyun artık konuşmayı "yarıda kesmeyecek". İlerleme kaybetmeden tekrar deneyebilmeniz için diyalog seçenekleriniz yeniden görünecektir.
  - ☁️ **Bulut Hafızası:** Ayarlar menüsü artık oturumlar arasında bulut sağlayıcı tercihlerinizi doğru bir şekilde hatırlıyor.

****************************************************************************************************
03/02/2026 20:23 - VRAM Bellek Optimizasyonu ve Yükleme Kararlılığı - Beta_v052
****************************************************************************************************
- What's New (TR):
  - 🧠 **Optimize Edilmiş Beyin:** Yapay Zekanın aynı anda "iki kez düşünmeye" çalışmasına neden olan, ekran kartı bellek kullanımını ikiye katlayarak aşırı yavaşlamaya veya çökmelere yol açan ciddi bir hatayı düzelttik. VRAM'iniz size teşekkür edecek!
  - 💾 **Güvenli Yükleme:** Maceranıza devam etmenin her zaman akıcı bir deneyim olmasını sağlamak için kayıtlı oyunları yüklerken genel kararlılık iyileştirildi.

****************************************************************************************************
02/02/2026 00:18 - Kritik Hotfix: Kararlılık, Çoklu GPU ve Yerelleştirme İyileştirmeleri - Beta_v051
****************************************************************************************************
- What's New (TR):
  - 🚑 **Kritik Düzeltme:** Başlatıcının temizleyemediği veritabanı bozulması nedeniyle, bazı nadir durumlarda oyunun başlatılmasını ("Tam Çökme") engelleyen bir sorun giderildi. Artık "Veritabanını Sil" seçeneği çok daha etkili.
  - ⚡ **Donanım İyileştirmesi:** "Otomatik Yapılandırma" modunun, özdeş olmayan GPU'lara sahip bazı yapılandırmalarda çoklu ekran kartlı sistemlerin gücünü yok saymasına neden olan bir hata düzeltildi.
  - 🛠️ **Yardımcı Araç:** Destek sürecini kolaylaştırmak amacıyla, önceki oturumun kaydını (log) kolayca açmak için Başlatıcıya yeni bir seçenek eklendi.
  - 🌍 **Yerelleştirme:** Başlatıcıda İngilizce (Yes/No) görünen çeşitli butonlar düzeltildi. Artık seçilen dile uyum sağlıyorlar.
  - 📖 **Arayüz:** Sürüm bilgisi metninin formatı daha okunaklı olacak şekilde iyileştirildi.
  
  - **Yakında:** Uygulama sürecindeki bir sonraki adım: Vulkan aracılığıyla AMD, NVIDIA ve Intel GPU uyumluluğu.

****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Kılavuz Düzeltmesi & Kararlılık - Beta_v050
****************************************************************************************************
- Yenilikler:
  **Multi-GPU Gücü ve Kritik Düzeltmeler!**
  
  * **🚀 Multi-GPU Desteği:** Büyük yapay zeka modellerini birden fazla grafik kartı arasında bölme özelliği eklendi. *Artık tüm donanım cephaneliğinizi kullanabilirsiniz; Sınırsız Güç!*
  * **🛡️ Kararlılık:** Beklenmedik kapanmaları önlemek için eksik olan tüm DLL kütüphaneleri eklendi. *Motoru zırhladım, artık başarısız olursa bu bir zar hatasından kaynaklanacaktır.*
  * **📖 Dinamik Web Kılavuzları:**
    * **Gerçek Seçici:** Dil menüsü artık dosyaları göstermeden önce gerçekten var olup olmadıklarını kontrol ediyor. *Hiçbir şey yapmayan hayalet seçenekler sona erdi; 5. seviye kehanet büyüsü.*
    * **Hata 403 Düzeltmesi:** Oyun içinde Değişiklik Günlüğü'nün görüntülenmesini engelleyen izin hatası giderildi. *Uygulamaya düzgünce yol istemeyi öğrettim ("Açıl Susam!").*
  * **🌍 Diller:** Metin ve çeviri revizyonu. *Çok Dilli mod etkinleştirildi.*

****************************************************************************************************
28/01/2026 22:49 - Kararlılık ve YZ İyileştirmeleri - Beta_v049
****************************************************************************************************
- Yenilikler:
  Önemli düzeltmeler ve yeni bir görsel araçla oyun deneyimini cilaladık:

  * **Temiz ve Güvenilir Envanter:** Sırt çantanızda "hayalet nesneler" veya garip isimli eşyalar bulmaya son. Topladığınız veya satın aldığınız her şeyin oyun dünyasında gerçekten var olduğundan emin olan bir anlatısal doğrulama sistemi uyguladık.
  * **Akıcı Diyaloglar:** Bazen "Unknown" olarak görünen veya yanıt vermeyen o sinir bozucu düğmeleri onardık. Artık NPC'lerle olan diyalog seçenekleri her zaman doğru metni gösterecek.
  * **Sağlam Karakter Oluşturma:** Kahramanınızı oluşturmak artık sağlam bir süreç. Biyografi ve istatistikleri birleştirirken bazen fişin eksik kalmasına veya istatistiklerin hatalı olmasına neden olan çakışmaları çözdük.
  * **Yeni YZ Durum Çubuğu:** Artık makinenin beyninin çalıştığını görebilirsiniz! Üst kısma gerçek zamanlı yanıt hızını ve bellek kullanımını gösteren bir çubuk ekledik. Böylece YZ'nin bir sonraki maceranızı "düşünüp düşünmediğini" her zaman bileceksiniz.

****************************************************************************************************
28/01/2026 03:50 - Kritik Derleme Düzeltmesi - Beta_v048
****************************************************************************************************
- Yenilikler:
  Yeni kurulumlarda oyunun başlatılmasını engelleyen kritik bir hata giderildi. Kararlılık ve farklı donanımlarla uyumluluk iyileştirildi.

****************************************************************************************************
26/01/2026 19:38 - Web Başlatıcı & RTX 50 Desteği - Beta_v047
****************************************************************************************************
- Yenilikler:

  > [!ÖNEMLİ]
  > **UYUMLULUK NEDENLERİYLE, ÖNCEKİ VERİTABANINI SİLMEK GEREKLİDİR AKSİ TAKDİRDE YZ YAPILANDIRMASINDA HATA VERMESİ ÇOK MUHTEMELDİR**
  > **(Çözüm: Başlatıcıdaki dişli simgesine ⚙️ tıklayın -> Veritabanını Sil)**

  *RTX 50 Serisi için Kritik Destek: Yeni NVIDIA grafik kartlarında (RTX 5070, 5080, 5090) karakter oluşturmaya çalışırken beklenmedik kapanmaya neden olan ciddi bir hata giderildi.
  (Elimde bir RTX 5000 serisi olmadığı için çözümün %100 olup olmadığını doğrudan test edemedim, ancak teoriye göre çözülmüş olması gerekir. Zafer çığlıklarınızı burada bekliyorum!)
  
  *YZ Motoru Güncellemesi: Oyunun yerel beynini en son donanım teknolojisiyle uyumlu olacak şekilde güncelledik, böylece donanımları ne kadar modern olursa olsun herkesin çevrimdışı deneyimin tadını çıkarabilmesini sağladık.
  
  *Yeni Başlatıcı: Resmi web sitesinden gerçek zamanlı güncellemeler ve haberler.


****************************************************************************************************
26/01/2026 06:49 - Web Dokümantasyon Entegrasyonu - Beta_v045
****************************************************************************************************
- Yenilikler:
  *Artık Kullanıcı Kılavuzu ve Değişiklik Günlüğü doğrudan resmi web sitemizden yükleniyor, böylece yama indirmeye gerek kalmadan her zaman en güncel bilgilere sahip olmanız garanti ediliyor. Akıllı çevrimdışı mod dahildir.

  *Başlangıçta takılmaması için oyunun kararlılığını güçlendirdik. Ayrıca, satıcılar araftaki tatillerinden döndüler: artık doğru şekilde görünüyorlar, raflarında malları var ve dünyanın atmosferine saygı duyuyorlar (gelecekte sihirli iksirler yok).

  *YZ parametrelerinin ve YZ model seçiminin değiştirilmesine izin vermeyen, sınırlı VRAM'e sahip bazı kullanıcıların oynayamamasına neden olan hata giderildi.
  **YZ parametrelerini değiştirme ihtiyacı durumunda, öncelikle VRAM %'sini %85'e düşürmeyi, yeniden başlatıp denemeyi şiddetle tavsiye ederim; eğer bu hala yeterli değilse, GPU VRAM'inin oyun dışındaki diğer işlemler tarafından kullanılmadığını kontrol etmenizi öneririm (gerekirse bilgisayarı yeniden başlatın, VRAM işgal edebilecek uygulamaları kapatın). Eğer VRAM miktarını %70'e kadar düşürdükten sonra bile çalışmıyorsa, daha fazla düşürmenizi önermem çünkü oyun YZ'ye gönderilen istemleri (prompts) yönetemeyecektir; bu nedenle VRAM taşmasını önlemeyi başarsanız bile, oyun bunu yapacak kaynağa sahip olmadığı için çalışamayacaktır, bu durumda kalan tek seçenek daha düşük bir modele geçmek, YZ parametrelerini tekrar otomatiğe getirmek ve yeniden başlatmaktır.

****************************************************************************************************
26/01/2026 04:00 - Çekirdek Kararlılığı ve Hizmetler Tanılaması - Beta_v044
****************************************************************************************************
- Yenilikler:
  Çekirdek Kararlılığı ve Hizmetler Tanılaması" "Karakter oluşturma, UI (MainWindow) ve anlamsal arama optimizasyonunda kritik düzeltmeler. Hizmet modunun derinlemesine tanılamasının başlatılması.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Günlükler ve Kararlılık - Beta_v043
****************************************************************************************************
- Açıklama:
  Tanılamaya ve UI döngüsü düzeltmesine odaklanan düzeltme yaması.

- Değişiklikler:
  Yeniden başlatma diyaloğundaki görsel hata giderildi
  Tanılama için %LOCALAPPDATA% içinde yeni günlük sistemi
  Dahili performans optimizasyonları

****************************************************************************************************
24/01/2026 06:30 - Arka Uç Biyografi Desteği - Beta_v042
****************************************************************************************************
- Açıklama:
  UI için biyografi verilerinin sunulması ve i18n ayarları.

<!-- source_hash: 5f218fc5 -->
