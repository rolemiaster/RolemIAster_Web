# 🐉 RolemIAster'a Hoş Geldiniz!

Zarlarınızı (veya farenizi) kapın ve hayal gücünüzün ne kadar kıvrak olduğuna bağlı olarak tek sınırın olduğu maceralara atılmaya hazır olun! **RolemIAster**, kendi hikayelerinizin kahramanı (veya kötü adamı) olmanızı sağlayan, yapay zeka tarafından desteklenen sonsuz bir rol yapma oyunudur.

---

## ⚠️ YASAL UYARI (Sıkıcı ama gerekli kısım)

**OKU YA DA ZARLARIN GAZABINA UĞRA:**

1.  **🤖 Yerleşik Yerel Yapay Zeka:** RolemIAster kendi dijital beynini getiriyor. **İnternet olmadan** ve tuhaf bir şeye dokunmanıza gerek kalmadan çalışır. Kurun ve oynayın!
2.  **☁️ İsteğe Bağlı Bulut:** Dış yapay zekalara (OpenAI, Gemini...) para harcamayı tercih ederseniz, kredi kartınızla baş başasınız. Maliyetler size aittir.
3.  **🎲 Üretken Kaos:** Yapay zeka hikayeyi anında icat eder. Anlatıcı çıldırıp inek yağdığını söylerse, bize bakmayın. Geliştirici, modelin ürettiği çılgınlıklardan sorumlu değildir.
4.  **🏗️ Erken Erişim:** Bu yer inşaat halinde. Bir hata bulursanız, bu bir kusur değil, sürpriz bir "özellik"! (Lütfen bize geri bildirim gönderin, bize çok yardımcı olur).

---

## 🖥️ SİSTEM GEREKSİNİMLERİ VE DİJİTAL BEYİNLER (YAPAY ZEKA)

RolemIAster **Yerel Yapay Zeka** ile çalışır. Bu, PC'nizin düşünme işinin zorluğunu üstleneceği anlamına gelir. İnternete ihtiyacınız yok, ancak dinozor döneminden kalma olmayan bir ekran kartına ihtiyacınız var. (Not: Odanız soğuksa, bu oyun ücretsiz ısıtma görevi görür).

### ⚙️ Yeni Başlayanlar İçin Kavramlar

**VRAM (Video Belleği)** yapay zekanın benzini gibidir.
*   RolemIAster, hikayenin akışını kaybetmemek için **12.000 ila 16.000 kelimeyi (token)** "hatırlaması" gerekir.
*   GPU'nuzun belleği tükenirse, oyun astımlı bir salyangozdan daha yavaş gider.

---

### 📊 MODEL KATALOĞU (Zehri Seçin)

Yapay zekalarınızı **Ayarlar → Yerleşik Yerel Yapay Zeka → Modelleri Yönet** altından yönetin.

#### 🏆 Qwen 3.5 Ailesi — RolemIAster için özel olarak eğitildi

Bu modeller, oyunun anlatısal kurallarını ustalaşmaları için **Denetimli İnce Ayar (SFT)** ile eğitilmiştir. Bunlar genel modeller değildir: RolemIAster'ın JSON sözleşmesini, NPC'leri, envanteri ve savaşı ezbere bilirler.

| Model        | Boyut  | Minimum VRAM | Seviye | Karar        |
|--------------|--------|--------------|--------|--------------|
| **Qwen3.5-2B** | ~1.5GB | **3GB**      | B      | ⚡ **Hızcı.** Hepsinin en hızlısı. Temel GPU'lar veya özel GPU olmadan oynamak için idealdir. |
| **Qwen3.5-4B** | ~2.8GB | **4GB**      | A      | ✅ **DENGELİ.** Optimal hız ve kalite. Çoğu oyuncu için önerilen standart model. |
| **Qwen3.5-9B** | ~5.5GB | **8GB**      | S      | 🌟 **Anlatıcı.** Zengin anlatım ve üstün tutarlılık. RTX 3070 veya üstü olanlar için. |

---

### 🎮 HIZLI SEÇİM KILAVUZU

| Grafiğiniz | VRAM  | Önerilen Model | Sonuç               |
|-------------|-------|----------------|---------------------|
| GTX 1050/1060 / GPU Yok | 2-4GB | **Qwen3.5-2B** | 🆗 Zor ama oynanabilir |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B** | ✅ Çok iyi deneyim     |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B** | 🚀 Hızlı ve doğru      |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B** | 🌟 İdeal deneyim      |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B** | 👑 Maksimum kalite, ultra hızlı yanıtlar |

**💡 İpucu:** İşletim sistemi için her zaman yaklaşık **2 GB VRAM boş bırakın**, aksi takdirde Windows ağlamaya ve uygulamaları kapatmaya başlayacaktır.

---

### 🚨 İMDAT! BİLGİSAYARIM YAVAŞ! (VRAM Sorunları)

Oyunun yanıt vermesi WhatsApp'taki crush'ınızdan daha uzun sürüyorsa, muhtemelen VRAM'iniz tükenmiştir.

**Çok akıllı olduğunuzun belirtileri:**
1.  **Model RAM'e dökülüyor:** Bilgisayar grafik yerine normal belleği kullanıyor. Sonuç: AŞIRI YAVAŞLIK.
2.  **Hafif taşma (1-2GB):** Yanıt başına 30-60 saniye sürer.
3.  **Orta taşma (3-5GB):** 2-5 dakika. Kahve almaya gidebilirsiniz.
4.  **Ciddi taşma:** 10-30 dakika. Oynanamaz.

#### 🛡️ Acil Durum Protokolü
İşler ters giderse, şu adımları sırayla izleyin:

1.  **📉 VRAM yüzdesini düşürün:** Ayarlara gidin ve %**85**'e düşürün. Yeniden başlatın ve deneyin.
2.  **🧹 Temizlik:** 40 sekmesi açık olan tarayıcıyı kapatın. Belleğinizi yiyorlar.
3.  **🛑 %70 Limiti:** Asla atanan VRAM'in **%70**'inin altına düşmeyin.
    *   *Neden mi?* Yapay zekanın "düşünmesi" için alana ihtiyacı var (KV önbelleği). %70'ten az verirseniz, boş kalır ve hata verir.
4.  **🔙 Taktik Geri Çekilme:** Hiçbir işe yaramazsa, daha küçük bir modele geçin (9B'den 4B'ye veya 4B'den 2B'ye).

---

### ⚙️ GELİŞMİŞ MODEL AYARLARI ("Maksimum Çılgınlık")

> **UZMAN MODU:** Bir profesyonelseniz ve gelişmiş model ayarlarına (HuggingFace'den indirdiğiniz kendi GGUF modellerinizi ekleme, katmanlarla oynama vb.) erişmek istiyorsanız, oyunu şu komutla başlatmanız gerekir: `--advanced`.

Düğmelere dokunmayı sevenler için **Ayarlar → Yerleşik Yerel Yapay Zeka** altında:

| Seçenek         | İşlev                                       | Öneri                                    |
|-----------------|---------------------------------------------|------------------------------------------|
| **GPU Katmanları** | Modelin ne kadarının grafiklere yüklendiği | **-1** (Bu "HER ŞEY" anlamına gelir. Ne yaptığınızı bilmiyorsanız dokunmayın) |
| **Maksimum Bağlam** | Yapay zekanın "kısa süreli belleği"        | **16384 - 32768** (Bundan azı yapay zekanın hafıza kaybı yaşamasına neden olur) |
| **Sıcaklık**    | Yaratıcılık vs Çılgınlık                    | **0.7 - 0.8** (Daha yüksek = daha çılgın; Daha düşük = daha robotik) |
| **Geçmiş RAG'ı** | Uzun süredir unutulmuş şeyleri hatırlama  | **Evet** (Uzun kampanyalar için olmazsa olmaz) |
| **Embeddings Önbelleğe Alma** | Anıları daha hızlı arama olanağı sağlar | **Evet** (Daha hızlı çalışmasını sağlar) |

---

### 🔧 SORUN GİDERME (Troubleshooting)

| Sorun          | Çözüm                                                               |
|----------------|---------------------------------------------------------------------|
| **Yapay Zeka Yavaş / Gecikme** | `GPU Layers` değerinin -1 olduğunu doğrulayın. Chrome'u kapatın. `Contexto Máximo`'i düşürün. |
| **Bellek Hatası (OOM)** | `Contexto Máximo`'ü azaltın veya daha küçük bir model (3B) seçin. |
| **Yapay Zeka Deliriyor / Halüsinasyon Görüyor** | `Temperatura`'i 0.6'ya düşürün. Hâlâ çılgınsa, uygulamayı yeniden başlatın. |

---

### 🌐 ALTERNATİF SAĞLAYICILAR (Sadece Uzmanlar)

> **Not:** Oyunun yerleşik yerel yapay zekası fazlasıyla yeterlidir. Bu sadece gelişmiş veya cesur kullanıcılar içindir.

*   **Harici Yerel Motorlar:**
    *   **Ollama / LM Studio:** Zaten kendi çılgın modelleriniz varsa kullanabilirsiniz.
*   **Bulut API'leri (Ücretli):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** İnternet ve para gerektirir.
    *   Şuradan ayarlayın: **Ayarlar → Yapay Zeka → Yeni Sağlayıcı Ekle**.

---

### 🌍 NASIL OYNANIR? (Çoklu Evren ve Siz)

Oyunu açtığınızda iki yolunuz var:

1.  **🆕 Yeni Macera**: Efsanenizi sıfırdan yaratın. Oyun sizden **İsim, Meslek, Fiziksel Tanım, Psikolojik Tanım ve hikayenizin Arka Planı/Gerekçesi**ni isteyecektir. Ayrıca, kampanyaya rehberlik edecek **Zorluk Seviyesini** ve **Mizah Tonunu** seçeceksiniz.
2.  **💾 Oyuna Devam Et**: RolemIAster **gerçek zamanlı kaydeder**. Burada "ölmeden önce yükle" veya geri dönüş yok. Her karar, her hata ve her yara, hikayeye ateşle kazınır. Bu bir **MEYDAN OKUMADIR**: Ne yaparsanız, yapılmıştır. Sonuçlarıyla yaşayın... ya da onlarla ölün.

RolemIAster izole bir oyun değildir; **Kalıcı Bir Çoklu Evrendir**.
*   **Sonsuz Dünyalar:** Kendi evrenlerinizi (**Ortaçağ Fantastik** veya **Cyberpunk**) kendi Lore'ları ile yaratın.
*   **Sonsuz Karakterler:** Her dünyanın içinde istediğiniz kadar kahramana sahip olabilirsiniz.
*   **Paylaşılan Zaman Çizgisi:** Dikkat! Bir karakterin yaptıkları diğerlerinin dünyasını etkiler. Yapay zeka, diğer kahramanlarınızın farkındadır ve onları dünyanın sakinleri olarak tanıyacaktır.
*   **"Duyuları" Olan Yapay Zeka (Süper RAG):** RAG (Retrieval-Augmented Generation) sistemi, yapay zekanın "muhbir"i olarak görev yapar, ona dünya, kiminle birlikte olduğu, nerede olduğu ve hikayenin %100 tutarlı olması için az önce ne olduğu hakkında anıları verir.

### Arayüz (Komuta Merkeziniz)

*   **Sol Panel (SİZ):** Karakter Sayfanız. Can, mana, yetenekler ve ne kadar yakışıklı olduğunuz (Karizma).
*   **Orta Panel (HİKAYE):**
    *   **Yukarıda:** Anlatıcının ne olduğunu anlattığı yer.
    *   **Aşağıda:** Karar düğmeleriniz ve ne yapmak istediğinizi yazacağınız metin kutusu.
*   **Sağ Panel (EŞYALARINIZ):** Envanter ve ekipman. Dijital Cinayet Yiyicilerin cenneti.

---

## 📜 OYUN KURALLARI (Evet, kurallar var)

RolemIAster, klasik ve sağlam bir d100 (yüzlü zar) sistemi kullanır.

### 1. Nitelikleriniz (Sizi tanımlayan şeyler)
Yapay zeka, girdiğiniz bağlam, meslek ve tanıma göre niteliklerinizi oluşturur. Oluşturulduktan sonra, keyfinize göre dağıtmak için **10 EK PUANINIZ** olur.
*   **Aşamalı Maliyetler:** Bir niteliği 14'e kadar yükseltmek 1 puan sürer. 15 ila 16 arasında 2 puan sürer. 17'den itibaren 3 puan! Nereye kas koyacağınızı iyi düşünün.

*   💪 **Güç (GÜÇ):** Saf fiziksel gücünüz. Yakın dövüş hasarını ve taşıma kapasitenizi etkiler.
*   ❤️ **Dayanıklılık (DAY):** Direncİniz. Darbelere, hastalıklara ve zehirlere dayanmak için.
*   🐘 **Boyut (BOY):** Büyüklüğünüz. Büyük ve ağır veya küçük ve çevik.
*   🏃 **Çeviklik (ÇEV):** Çeviklik, nişan alma ve kendi ayaklarınıza takılmama.
*   🧠 **Zeka (ZEK):** Öğrenme, hatırlama ve bulmaca çözme.
*   🔮 **İrade (İR):** Ruhunuz, şansınız, irade gücünüz ve sihir rezerviniz.
*   😎 **Karizma (KAR):** Liderlik, çekicilik ve insanları kandırma (veya baştan çıkarma) yeteneği.

### 2. Hızlı Matematikler (Türetilmiş Özellikler)
Motor, bu rakamları niteliklerinize göre otomatik olarak hesaplar:

*   🩸 **Can (CAN):** `CON * 10`. 0'a ulaşırsa... bilirsiniz. F.
*   ✨ **Mana (MAN):** `(POD * 10) + INT`. Sihirli numaralarınız için yakıt. Mana olmadan numara olmaz. (Mana olmayan büyücü sadece cübbeli bir cosplayci).
*   ⚡ **Enerji (ENA):** `((CON+FUE+DES)/3)*10 + POD`. Savaşmak ve ölmeden hareket etmek için enerjiniz.
*   🧠 **İnsanlık (INS):** `(CON+POD) * 5`. (Sadece Cyberpunk'ta: Kabloların sizi deli etmesinden önce ne kadar insan kaldığınızı ölçer).
*   ⚔️ **Eylem Puanları (EP):** `(INT + DES) / 2`. Girişiminizi belirler. İlk vuran iki kez vurur.

### 3. Yetenekleriniz
Temel bir değerle başlarlar (örneğin, Gizlilik = ÇEV + ZEK) ve kullanılarak geliştirilirler. Bir yüzdedir (%).

### 4. Aksiyon Çözümü (Zar)
Riskli bir şey yapmaya çalıştığınızda (tırmanma, yalan söyleme, saldırma...), yapay zeka sizden bir zar atmanızı isteyecektir. Oyun, görünmez bir **d100** atar. **(Unutmayın: Zarlar sizden nefret ediyor. Kişisel bir durum.)**

*   **Hedefiniz:** Yetenek seviyenize **eşit veya daha düşük** bir sayı atmak.
    *   *Örnek:* Tırmanmada %45'iniz var.
    *   30 atarsanız: ✅ **Başarı**. Bir maymun gibi tırmanırsınız.
    *   80 atarsanız: ❌ **Başarısızlık**. Kendinizi bir yerlere çarparsınız.
    *   **Kritik:** Yeteneğinizin **1/5'ine veya daha azına** (veya 01'e) atmak. Destansı! Takla atarak olağanüstü bir parkur yaparsınız.
    *   **Hata:** **99 veya 100**. Zarlar bugün sizin gününüz olmadığını söyledi. Yolda pantolonunuz düşer ve yüzüstü yuvarlanırsınız.

---

## 💡 ÖLMEMEK İÇİN İPUÇLARI (HIZLI)

*   **✍️ Açıklayıcı Olun:** Sadece "saldır" yazmayın. Şunu yazın: *"Yerden yuvarlanarak baltasından sıyrılmaya çalışıyorum ve ayak bileğine hançerimi saplıyorum"*. Yapay zeka sizi ödüllendirecektir.
*   **🧪 Deneyin:** Butonlarla sınırlı değilsiniz. Çılgınca şeyler yazın! Yapay zeka doğaçlama yapacaktır.
*   **🎭 Rol yapın:** Karakterin içine girin. Tanımları okuyun ve pijamalı haliniz gibi değil, karakterinizin yapacağı gibi davranın.

---

## ⚔️ SAVAŞ (Silahları kuşanın!)

Sözler yetersiz kaldığında, kavga zamanı gelir. Savaş **taktiktir** ve **Tick'ler** (zaman) üzerinden çalışır.

### 🕹️ Nasıl çalışır:
*   **Tick'ler:** Her eylem zaman alır. Ağır silahlar yavaştır (çok tick harcarlar). Hançerler hızlıdır.
*   **Hızınız:** Eylem Puanlarınıza (EP) bağlıdır.

### Temel Eylemler:
*   **🗡️ Saldır:** Elinizde ne varsa onunla vurun.
*   **🛡️ Engelle:** Savunmaya geçersiniz. Hasarı azaltır ama Enerji harcar.
*   **🏃 Kaç:** Korkakların (veya yaşamak isteyen akıllıların) işi.
*   **🏳️ Teslim Ol:** Kaybettiğinizi görürseniz, merhamet dileyebilirsiniz.
*   **✨ Sihir / Siber Donanım:** Ateş, lazer ışınları, hackler...

### 💬 Serbest Metin Eylemleri (YENİ!)
Düğmeleri sevmiyor musunuz? Sanki gerçek bir Usta ile konuşuyormuş gibi ne yapmak istediğinizi yazın!
*   **Örnekler:** *"Gobline ateş topu at"*, *"Rünlü kılıcımı kınından çıkar"*, *"Kendime iksir kullan"*.
*   **Sahne Yönetmeni:** Savaş artık hayat buluyor. Yapay zeka, anlatıyı zenginleştiren çevresel olaylar ve tepkiler oluşturur: düşen kirişler, geri çekilen düşmanlar, sönen meşaleler. Savaş alanı artık statik değil!
*   **Yapay zeka anlamazsa:** Yeniden ifade etmenizi isteyecektir. Sıranız KAYBOLMAZ!
*   **⚠️ Sınırlama:** Eşyaları slotlar arasında taşımak (çantadan kuşanmak, mühimmat yüklemek) arayüzdeki **Sürükle ve Bırak** ile yapılır, metinle değil.

### ⚠️ HAYATTA KALMAK İÇİN ALTIN KURAL
**SAVAŞMADAN ÖNCE KININDAN ÇIKAR!**
Savaşın ortasında silahı kınından çıkarmak zaman (Tick) alır. Eğer kınında kılıçla yakalanırsan, beceriksizce çıkarmaya çalışırken dayak yersin. VEYA DAHA KÖTÜSÜ!, SİLAHLARINIZ ÇANTANIZDA OLMAK YERİNE KUŞANMA SLOTUNUZDA OLURSA (Bir saniye müsaade edin, devasa kılıcı çantadan çıkarmam lazım, sanırım buradaydı... bir yerde...) 🤦‍♂️
👉 Kuşanılmış silahın etiketine **tıklayın** (sağ panel) çekmek için. Yeşil yanacaktır.

Savaş sırasında silahları hareket ettirmeye çalışmak zaman (Tick) alır ve sürpriz bir saldırıya yol açabilir, ayrıca sıranızı kaybetme, alnınıza yaklaşan baltanın gerginliği nedeniyle ıskalama veya yere düşürme olasılığınız yüksektir. (Belki de TDAH'lı bir karakter yaratmak iyi bir fikir değildi)

---

## ✨ SİHİR VE SİBERNETİK

Dünyanızın "Ortaçağ Fantastik" veya "Cyberpunk" olmasına bağlı olarak:

### 🧙‍♂️ Fantastik: Tılsımlar
Büyücü müsünüz? Eşyalarınızı tılsımlayabilirsiniz.
1.  **Öğrenin:** Büyüyü kütüphanenizde bulundurmanız gerekir.
2.  **Fırlatın (Sürükle ve Bırak):** Büyüyü kendi listenizden envanterinizdeki nesnenin üzerine sürükleyin.
3.  **Maliyet:** Aktif bir tılsımı korumak **savaş başına Mana harcar**.
4.  **Uyarı:** Savaşın ortasında mana biterse, ateş kılıcı tekrar paslı bir demir parçasına dönüşür.

### 🦾 Cyberpunk: İmplantlar
Yakın gözlere veya goril kollarına mı sahip olmak istiyorsunuz?
1.  Bir **Tekno Cerrah** (hizmet veren NPC) bulun.
2.  Kredileri ödeyin (gelecekte hiçbir şey bedava değildir).
3.  **İnsanlık Maliyeti:** Her implant ruhunuzun bir parçasını alır (**İnsanlık**).
    *   Çok fazla takarsanız, **Cyberpsikoz** (katil bir tost makinesi) haline gelirsiniz ve karakterinizin kontrolünü kaybedersiniz.

---

## 🛒 MAĞAZALAR VE HİZMETLER (HİZ)

Ticaret yapmak için NPC'lerle konuşun.
*   **Yapay Zeka Önerir, Siz Emir Verirsiniz:** Bir tüccar veya şifacı ile konuştuğunuzda, yapay zeka hizmetlerini (tamir etme, satma, iyileştirme) önerecektir, ancak işlem moduna ne zaman gireceğinize sizin karar vermeniz için bir **"Hizmetleri Gör"** düğmesi görünecektir.
*   **Pazarlık:** **Ticaret** yeteneğiniz (Karizmaya dayanır) fiyatları belirler. Çirkin veya antipatikseniz, dolandırılırsınız.
*   **Satma:** Bir envanter nesnesini satıcıya satmak için **Sağ Tıklayın** veya üzerine sürükleyin.

---

## 🎒 ENVANTER YÖNETİMİ (Tetris)

*   **Ağırlık:** Bir taşıma limitiniz var (Güç + Boyut). Çok fazla hurda taşırsanız, yavaş ve cezalı gidersiniz (Cinayet Yiyici arkadaşınız değildir).
*   **Paneller:**
    *   **Ekipman:** Giydikleriniz.
    *   **Kuşak:** Savaşta hızlı erişim (buradan iksir kullanmak daha az zaman alır).
    *   **Sırt Çantası:** Çantanın dibi.
*   **Akıcı Kullanım:** Anında tüketmek için bir iksir veya yiyeceği doğrudan **yüzünüze** (portreye) sürükleyin. Bağlam menüsünü (sağ tıklama -> Kullan) de kullanabilirsiniz.

---

## 🛠️ SON AYARLAR

**Ayarlar** menüsünde her şeye dokunabilirsiniz:
*   **🌍 Dil:** Yapay zeka tüm oyunu ve yanıtları anında çevirecektir. Çok dilli mod etkin.
*   **👁️ Görünüm:** Yazı tipi boyutu ve renkleri, kör olmamak için. Tam dalma için neon kenarlar ve yumuşatılmış gölgeler.
*   **🧠 Yapay Zeka Ayarları:** Modeli, sıcaklığı vb. değiştirin (Her şeye dokunmak isteyenler için kılavuzun başındaki `--advanced` bayrağı hakkında gördüklerimizi unutmayın).

---

## 🎭 ZORLUK VE MİZAH (Acınızı kişiselleştirin)

Başlamadan önce, yapay zekanın sadece anlatıcı değil, aynı zamanda tercihlerinize göre **dünyayı ayarladığını** unutmayın. Bu parametreler dünya oluşturulurken seçilir ve o dünya için kalıcıdır:

*   **🎮 Zorluk (Yapay Zeka tarafından yönetilir):** Basit bir hasar çarpanı değildir. Oyun yapay zekaya şöyle der: "Hey, zorluk bu, buna göre hareket et."
    *   **Kolay:** Asla ölmezsiniz (veya neredeyse imkansızdır), durumlar daha basittir, fiyatlar daha ucuzdur ve düşmanlar daha sakardır. Yapay zeka, yolunuzun güllerle dolu olması için her sahneyi mantıklı hale getirecektir.
    *   **Normal:** Standart denge.
    *   **Meydan Okuma:** Yapay zeka acımasız olacak, fiyatlar yasaklayıcı olacak ve herhangi bir hata sonuncusu olabilir.

*   **🃏 Mizah Tonu:** Yapay zekanın size nasıl konuştuğunu ve ne tür olayların meydana geldiğini tanımlar. Her modelin "mizah" kavramını yorumlama şekli olsa da, yapay zeka seçtiğinize uyum sağlamaya çalışacaktır... ya da uyum sağlamayacaktır:
    *   **Ciddi:** Epik, karanlık ve resmi bir anlatım.
    *   **Alaycı:** Yapay zeka hatalarınızla dalga geçecek, size sürekli laf sokacak ve ironik bir ton kullanacaktır.
    *   **Çılgınca:** Absürtlüğe hazır olun. Uçan inekler, gerçeküstü durumlar ve yapay zekanın en çarpık mantığı tarafından yönetilen toplam kaos.

---

## 🚧 Uyarı: Erken Erişim

RolemIAster **aktif gelişimde**, yavaş ateş üzerinde pişiyor.
*   Hatalar (veya "beklenmedik özellikler") bulabilirsiniz.
*   Her hafta yeni şeyler ekliyorum.
*   Geri bildirimleriniz altın değerinde! Neyi sevdiğinizi ve neyi çok sevdiğinizi bana söyleyin. (Bir şeyi sevmezseniz, bana da söyleyin, ama nazikçe).

Şimdi gidin, giriş atın ve efsanenizi yaratın!

<!-- source_hash: 9af75cff -->