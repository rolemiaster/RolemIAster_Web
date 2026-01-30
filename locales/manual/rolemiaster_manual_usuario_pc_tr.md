# 🐉 RoleMIAster'a Hoş Geldiniz!

Zarlarınızı (veya farenizi) kapın ve hayal gücünüzün ne kadar kıvrımlı olduğuyla sınırlanan maceralara atılmaya hazırlanın! **RoleMIAster**, kendi hikayelerinizin kahramanı (veya kötü adamı) olmanızı sağlayan, yapay zeka tarafından desteklenen sonsuz bir rol yapma oyunudur.

---

## ⚠️ YASAL UYARI (Sıkıcı ama Gerekli Bölüm)

**OKUYUN YOKSA ZARARIN GAZABINA UĞRAYACAKSINIZ:**

1.  **🤖 Dahili Yerel Yapay Zeka:** RoleMIAster kendi dijital beynini getiriyor. **İnternet olmadan** ve garip bir şeye dokunmanıza gerek kalmadan çalışır. Kurun ve oynayın!
2.  **☁️ İsteğe Bağlı Bulut:** Dış yapay zekalara (OpenAI, Gemini...) para harcamayı tercih ediyorsanız, kredi kartınızla baş başasınız. Maliyetler size aittir.
3.  **🎲 Üretken Kaos:** Yapay zeka hikayeyi anında uydurur. Anlatıcı çıldırıp inek yağdığını söylerse, bize bakmayın. Geliştirici, modelin ürettiği çılgınlıklardan sorumlu değildir.
4.  **🏗️ Erken Erişim:** Burası inşaat halinde. Bir hata bulursanız, bu bir arıza değil, sürpriz bir "özellik"! (Lütfen bize geri bildirim gönderin, çok yardımcı oluyor).

---

## 🖥️ SİSTEM GEREKSİNİMLERİ VE DİJİTAL BEYİNLER (Yapay Zeka)

RoleMIAster, **Yerel Yapay Zeka** ile çalışır. Bu, bilgisayarınızın düşünme işini yapacağı anlamına gelir. İnternete ihtiyacınız yok, ancak dinozorlardan kalma olmayan bir grafik kartına ihtiyacınız var. (Not: Odada hava soğuksa, bu oyun ücretsiz ısıtma görevi görür).

### ⚙️ Başlangıç Seviyesi İçin Kavramlar

**VRAM (Video Belleği)** yapay zekanın benzini gibidir.
*   RoleMIAster, hikayenin akışını kaybetmemek için **12.000 ila 16.000 kelimeyi (token)** "hatırlaması" gerekir.
*   GPU'nuzun belleği tükenirse, oyun astımı olan bir salyangozdan daha yavaş çalışacaktır.

---

### 📊 MODEL KATALOĞU (Zehri Seçin)

Yapay zekalarınızı **Ayarlar → Dahili Yerel Yapay Zeka → Modelleri Yönet** bölümünden yönetin.

#### 🏆 Qwen 2.5 Ailesi (En İyilerin En İyisi)

| Model       | Boyut   | Minimum VRAM | Kademe | Karar           |
|-------------|---------|--------------|--------|-----------------|
| **Qwen2.5-3B** | ~2.5GB  | **8GB**      | B      | 👶 **Stajyer.** İşe yarar ama ondan Shakespeare yazmasını beklemeyin. Bazen kafası karışır. |
| **Qwen2.5-7B** | ~5.5GB  | **12GB**     | A      | ✅ **SEÇİLMİŞ OLAN.** Dengeli, akıllı ve hızlı. Varsayılan olarak önerilen modeldir. |
| **Qwen2.5-14B**| ~10GB   | **16GB**     | S      | 🧐 **Profesör.** Zengin, derin anlatım ve çok doğal diyaloglar. |
| **Qwen2.5-32B**| ~22GB   | **32GB**     | S+     | 👑 **Tanrı Seviyesi.** Bunu çalıştırmak için bir uzay gemisine (RTX 3090/4090) ihtiyacınız var. |

---

### 🎮 HIZLI SEÇİM KILAVUZU

| Grafik Kartınız | VRAM   | Önerilen Model | Sonuç                      |
|-----------------|--------|----------------|----------------------------|
| GTX 1050/1060   | 4GB    | Qwen2.5-3B     | 🆗 Tam yetiyor ama oynanabilir (Düşük bağlam) |
| GTX 1070/1660   | 6GB    | Qwen2.5-3B     | 🆗 İyi gidiyor             |
| RTX 2060/3060   | 8GB    | Qwen2.5-3B     | 🚀 Uçuyor                  |
| RTX 3070/4060Ti | 12GB   | **Qwen2.5-7B** | ✅ İdeal deneyim            |
| RTX 3090/4080   | 16-24GB| Qwen2.5-14B    | 🌟 Lüks                    |
| RTX 4090        | 24GB   | Qwen2.5-32B    | 👑 Maksimum kalite           |

**💡 İpucu:** İşletim sistemi için her zaman **2GB VRAM boş bırakın**, yoksa Windows ağlamaya başlar ve uygulamaları kapatır.

---

### 🚨 İMDAT! BİLGİSAYARIM YAVAŞ! (VRAM Sorunları)

Oyun WhatsApp'taki alevinin yanıt vermesinden daha uzun sürüyorsa, muhtemelen VRAM'iniz bitmiştir.

**Fazla akıllı davrandığınıza dair belirtiler:**
1.  **Model RAM'e dökülüyor:** Bilgisayar, grafik yerine normal belleği kullanıyor. Sonuç: AŞIRI YAVAŞLIK.
2.  **Hafif taşma (1-2GB):** Yanıt başına 30-60 saniye sürer.
3.  **Orta düzey taşma (3-5GB):** 2-5 dakika. Bir kahve almaya gidebilirsiniz.
4.  **Şiddetli taşma:** 10-30 dakika. Oynanamaz.

#### 🛡️ Acil Durum Protokolü
İşler ters giderse, aşağıdaki adımları sırayla izleyin:

1.  **📉 VRAM yüzdesini düşürün:** Ayarlar'a gidin ve %**85**'e düşürün. Yeniden başlatın ve deneyin.
2.  **🧹 Temizlik:** 40 sekmesi açık olan tarayıcıyı kapatın. Belleğinizi yiyorlar.
3.  **🛑 %70 Sınırı:** Atanan VRAM'in hiçbir zaman %**70**'in altına düşmeyin.
    *   *Neden?* Çünkü yapay zekanın "düşünmesi" (KV önbelleği) için alana ihtiyacı var. Eğer %70'ten az verirseniz, boş kalır ve hata verir.
4.  **🔙 Taktik Geri Çekilme:** Hiçbir şey işe yaramazsa, daha küçük bir modele geçin (7B'den 3B'ye).

---

### ⚙️ MODEL GELİŞMİŞ AYARLAR

**Ayarlar → Dahili Yerel Yapay Zeka**'da düğmeleri kurcalamayı sevenler için:

| Seçenek         | İşlev                                  | Öneri                                  |
|-----------------|----------------------------------------|----------------------------------------|
| **GPU Katmanları** | Modelin ne kadarının grafik kartına yüklendiği | **-1** (Bu "TAMAMI" anlamına gelir. Ne yaptığınızı bilmiyorsanız dokunmayın) |
| **Maksimum Bağlam**| Yapay zekanın "kısa süreli hafızası"   | **16384 - 32768** (Bundan azı, yapay zekanın hafızasını kaybetmesine neden olur) |
| **Sıcaklık**    | Yaratıcılık vs Çılgınlık               | **0.7 - 0.8** (Yüksek = daha çılgın; Düşük = daha robotik) |
| **Geçmiş RAG**  | Uzun süredir unutulan şeyleri hatırlama| **Evet** (Uzun kampanyalar için gereklidir) |
| **Embeddings Önbelleğe Alma**| Anıların aranmasını hızlandırır         | **Evet** (Daha hızlı çalışmasını sağlar) |

---

### 🔧 SORUN GİDERME (Troubleshooting)

| Sorun       | Çözüm                                                                |
|-------------|----------------------------------------------------------------------|
| **Yapay Zeka Yavaş / Gecikme** | `GPU Katmanları`'nın -1 olduğundan emin olun. Chrome'u kapatın. `Maksimum Bağlam`'ı düşürün. |
| **Bellek Hatası (OOM)** | `Maksimum Bağlam`'ı azaltın veya daha küçük bir model (3B) seçin. |
| **Yapay Zeka Deliriyor / Halüsinasyon Görüyor** | `Sıcaklık`'ı 0.6'ya düşürün. Hala çılgınsa, uygulamayı yeniden başlatın. |

---

### 🌐 ALTERNATİF SAĞLAYICILAR (Sadece Uzmanlar İçin)

> **Not:** Oyuna dahil olan yerel yapay zeka yeterlidir. Bu sadece ileri düzey veya cesur kullanıcılar içindir.

*   **Harici Yerel Motorlar:**
    *   **Ollama / LM Studio:** Zaten kendi tuhaf modelleriniz varsa, bunları kullanabilirsiniz.
*   **Bulut API'leri (Ücretli):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** İnternet ve para harcamayı gerektirir.
    *   Şuradan yapılandırın: **Ayarlar → Yapay Zeka → Yeni Sağlayıcı Ekle**.

---

## 🎲 NASIL OYNANIR?

Oyunu açtığınızda iki seçeneğiniz var:

1.  **🆕 Yeni Macera**: Efsanenizi sıfırdan yaratın. Oyun sizi ırk, sınıf, dünya ve önerme seçimi konusunda yönlendirecektir. (Hayat size limon verirse... veya Güç'te 3 alırsanız, Ozan olun).
2.  **💾 Kayıtlı Oyunu Yükle**: O rezil ölümden hemen önce bıraktığınız yerden devam edin. (Ya da ejderhayla ilgili o "küçük hesap hatasını" düzeltmek için).

### Arayüz (Kokpitiniz)

*   **Sol Panel (SİZ):** Karakter Fişiniz. Can, mana, yetenekler ve ne kadar yakışıklı olduğunuz (Karizma).
*   **Orta Panel (HİKAYE):**
    *   **Yukarıda:** Anlatıcı ne olduğunu anlatır.
    *   **Aşağıda:** Karar düğmeleriniz ve ne yapmak istediğinizi yazacağınız metin kutusu.
*   **Sağ Panel (EŞYALARINIZ):** Envanter ve ekipman. Dijital Diogenes'in cenneti.

---

## 📜 OYUN KURALLARI (Evet, kurallar var)

RoleMIAster, klasik ve sağlam bir d100 (yüzlü zar) sistemi kullanır.

### 1. Nitelikleriniz (Sizi Tanımlayan Şey)
Masaüstü rol yapma oyunlarındaki gibi rastgele oluşturulur!

*   💪 **Güç (GÜÇ):** Sert vurmak ve taş kaldırmak için.
*   ❤️ **Dayanıklılık (DAY):** Darbelere, hastalıklara ve zehirlere dayanmak için.
*   🐘 **Boyut (BOY):** Büyük ve ağır, veya küçük ve çevik.
*   🏃 **Çeviklik (ÇVİK):** Çeviklik, hedef alma ve kendi ayaklarınıza takılmama.
*   🧠 **Zeka (ZKA):** Öğrenmek, hatırlamak ve bulmaca çözmek.
*   🔮 **Güç (GÜÇ):** Ruhunuz, şansınız, irade gücünüz ve sihriniz.
*   😎 **Karizma (KAR):** Liderlik, çekicilik ve insanları kandırma yeteneği.

### 2. Hızlı Matematik (Türetilmiş Özellikler)
*   **Can (PV):** `(DAY + BOY) / 2`. 0'a ulaşırsa... bilirsiniz işte. ÖLÜM.
*   **Mana (PM):** GÜÇ'ünüze eşittir. Mana yoksa, hile yok. (Manası olmayan bir büyücü sadece cüppe giyen ve cosplay yapan bir tiptir).
*   **Eylem Puanı (EP):** `(ZKA + ÇVİK) / 2`. Girişimi belirler. İlk vuran, iki kez vurur.

### 3. Yetenekleriniz
Temel bir değere sahip başlarlar (örneğin: Gizlilik = ÇVİK + ZKA) ve kullanıldıkça gelişirler. Bir yüzdedir (%).

### 4. Eylem Çözünürlüğü (Zar)
Riskli bir şey yapmaya çalıştığınızda (tırmanmak, yalan söylemek, saldırmak...), yapay zeka sizden bir zar atmanızı isteyecektir.
Oyun görünmez bir **d100** atar. **(Unutmayın: Zarlar size düşman. Kişisel bir şey).**

*   **Amacınız:** Yeteneğinizden **AZ VEYA EŞİT** bir sonuç elde etmek.
    *   *Örnek:* Tırmanma yeteneğiniz %45.
    *   30 atarsınız: ✅ **Başarılı**. Bir maymun gibi tırmanırsınız.
    *   80 atarsınız: ❌ **Başarısız**. Yere çarparsınız.
    *   01-05 atarsınız: ✨ **KRİTİK!** Epik bir parkur hareketi ve takla atarsınız.
    *   99-100 atarsınız: 💀 **FİYASKO!** Yolda pantolonunuz düşer ve suratınızın üstüne yığılırsınız.

---

## 💡 ÖLMEMEK İÇİN İPUÇLARI (HIZLI)

*   **✍️ Betimleyici Olun:** Sadece "saldır" yazmayın. Şöyle yazın: *"Yerden yuvarlanarak baltasından kaçmaya çalışıyorum ve bileğine hançerimi saplıyorum"*. Yapay zeka sizi ödüllendirecektir.
*   **🧪 Deneyin:** Düğmelerle sınırlı değilsiniz. Çılgın şeyler yazın! Yapay zeka doğaçlama yapacaktır.
*   **🎭 Rol Yapın:** Rolünüze girin. Açıklamaları okuyun ve siz pijamanızla yapacağınız gibi değil, karakterinizin yapacağı gibi davranın.

---

## ⚔️ SAVAŞ (Silahlara!)

Kelimeler yetersiz kaldığında, kavga zamanı gelir. Savaş **taktiktir** ve **Tikler** (zaman) üzerinden çalışır.

### 🕹️ Nasıl Çalışır:
*   **Tikler:** Her eylem zaman alır. Ağır silahlar yavaştır (çok tik harcar). Hançerler hızlıdır.
*   **Hızınız:** Eylem Puanlarınıza (EP) bağlıdır.

### Temel Eylemler:
*   **🗡️ Saldır:** Elinizde ne varsa onunla vurun.
*   **🛡️ Blok Yap:** Savunmaya geçersiniz. Hasarı azaltır ama dayanıklılık harcar.
*   **🏃 Kaç:** Korkakların (veya yaşamak isteyen akıllıların) işidir.
*   **🏳️ Teslim Ol:** Kazanmadığınızı görürseniz, merhamet dilenebilirsiniz.
*   **✨ Büyü / Siber Donanım:** Ateş, lazer ışınları, hackleme...

### ⚠️ HAYATTA KALMA ALTIN KURALI
**SAVAŞMADAN ÖNCE SİLAHLARINIZI ÇEKİN!**
Savaşın ortasında silah çekmek zaman (Tikler) alır. Kılıcınız kılıçlığında yakalanırsanız, onu beceriksizce çekmeye çalışırken kimlik kartınızın bile vurulacağı şeyler yaşarsınız. YA DA DAHA KÖTÜSÜ!, SİLAHLARINIZI EKİPMAN YUVASINDA (Bir saniye izin verin, kılıcımı sırt çantamdan çıkarmam lazım, sanırım buradaydı... bir yerde...) YERİNE SIRT ÇANTANIZDA TAŞIRSANIZ 🤦‍♂️
👉 Ekipmanlı silahın etiketine (sağ panel) tıklayarak çekin. Yeşil yanacaktır.

Savaş sırasında silahları hareket ettirmeye çalışmak zaman (Tikler) alır ve sürpriz bir saldırıya yol açabilir, ayrıca turunuzu kaybetmeniz, alnınıza yaklaşan baltanın sinirinden ıskalamanız veya yere düşürmeniz çok muhtemeldir. (Belki de TDAH'ı olan bir karakter yaratmak iyi bir fikir değildi)

---

## ✨ BÜYÜ VE SİBERNETİK

Dünyanızın "Orta Çağ Fantezi" mi yoksa "Cyberpunk" mı olduğuna bağlı olarak:

### 🧙‍♂️ Fantezi: Büyüler
Büyücü müsün? Ekipmanlarınızı büyüleyebilirsiniz.
1.  **Öğrenin:** Büyü kitabınızda büyüye ihtiyacınız var.
2.  **Fırlatın (Sürükle ve Bırak):** Büyüyü listenizden envanterinizdeki nesnenin üzerine sürükleyin.
3.  **Maliyet:** Bir büyüyü aktif tutmak **tur başına Mana harcar**.
4.  **Uyarı:** Savaşın ortasında mananız biterse, ateş kılıcı tekrar paslı bir demir parçasına dönüşür.

### 🦾 Cyberpunk: İmplantlar
Yakın gözlü veya goril kolları mı istiyorsun?
1.  Bir **Tekno Cerrah** (hizmet NPC'si) bulun.
2.  Kredileri ödeyin (gelecekte hiçbir şey bedava değildir).
3.  **İnsanlık Maliyeti:** Her implant ruhunuzdan bir parça koparır (**İnsanlık**).
    *   Çok fazla takarsanız, bir **Cyberpsikoza** (katil bacaklı bir tost makinesi) dönüşürsünüz ve karakterinizin kontrolünü kaybedersiniz.

---

## 🛒 MAĞAZALAR VE HİZMETLER

Alışveriş yapmak için NPC'lerle konuşun.
*   **Pazarlık:** **Ticaret** yeteneğiniz (Karizma'ya dayanır) fiyatları belirler. Çirkin veyaantipatikseniz, sizi dolandırırlar.
*   **Sat:** Bir envanter öğesine **Sağ Tıklayarak** satıcıya satın.

---

## 🎒 ENVANTER YÖNETİMİ (Tetris)

*   **Ağırlık:** Sınırlı bir yük kapasiteniz var (Güç + Boyut). Çok fazla hurda taşırsanız, yavaş ve cezalı gidersiniz (Diogenes arkadaşınız değildir).
*   **Paneller:**
    *   **Ekipman:** Giydikleriniz.
    *   **Kemer:** Savaşta hızlı erişim (buradan iksir kullanmak daha az zaman alır).
    *   **Sırt Çantası:** Çuvalın dibi.
*   **Hızlı Kullanım:** Bir iksiri veya yiyeceği doğrudan **yüzünüzün** (portrenin) üzerine sürükleyerek anında tüketin.

---

## 🛠️ SON AYARLAR

**Ayarlar** menüsünde her şeye dokunabilirsiniz:
*   **🌍 Dil:** Yapay zeka tüm oyunu ve anında yanıtları size çevirecektir.
*   **👁️ Görünüm:** Yazı tipi boyutu ve renkleri, kör olmamak için.
*   **🧠 Yapay Zeka Ayarları:** Model, sıcaklık vb. değiştirin.

---

## 🚧 Uyarı: Erken Erişim

RoleMIAster **aktif geliştirme aşamasındadır**, yavaş pişmektedir.
*   Hatalar (veya "beklenmedik özellikler") bulabilirsiniz.
*   Her hafta yeni şeyler ekliyorum.
*   Geri bildiriminiz altın değerinde! Neyi sevdiğinizi ve neyi çok sevdiğinizi söyleyin.

Şimdi gidin, girişimi atın ve efsanenizi yaratın!

<!-- source_hash: 2511f352 -->