# 🐉 RolemIAster'a Hoş Geldiniz!

Zarlarınızı (veya farenizi) kapın ve hayal gücünüzün ne kadar çarpık olabileceğiyle sınırlı maceralara atılmaya hazır olun! **RolemIAster**, kendi hikayelerinizin kahramanı (veya kötü adamı) olmanıza olanak tanıyan, Yapay Zeka destekli sonsuz bir rol yapma oyunudur.

---

## ⚠️ YASAL UYARI (Sıkıcı ama Gerekli Kısım)

**OKUYUN YOKSA ZARARIN GAZABINA UĞRAYACAKSINIZ:**

1.  **🤖 Entegre Yerel Yapay Zeka:** RolemIAster kendi dijital beynini getiriyor. **İnternet olmadan** ve garip bir şeye dokunmanıza gerek kalmadan çalışır. Yükleyin ve oynayın!
2.  **☁️ İsteğe Bağlı Bulut:** Harcayacağınız paraları harici Yapay Zekalara (OpenAI, Gemini...) harcamayı tercih ederseniz, kredi kartınızla baş başasınız. Maliyetler size ait.
3.  **🎲 Üretici Kaos:** Yapay Zeka hikayeyi anında uyduruyor. Anlatıcı çıldırıp inek yağmur yağdığını söylerse, bize bakmayın. Geliştirici, modelin ürettiği çılgınlıklardan sorumlu değildir.
4.  **🏗️ Erken Erişim:** Burası inşaat halinde. Bir hata bulursanız, bu bir kusur değil, sürpriz bir "özellik"! (Lütfen geri bildirim gönderin, bize çok yardımcı oluyor).

---

## 🖥️ SİSTEM GEREKSİNİMLERİ VE DİJİTAL BEYİNLER (YAPAY ZEKA)

RolemIAster **Yerel Yapay Zeka** ile çalışır. Bu, PC'nizin düşünme işini yapacağı anlamına gelir. İnternete ihtiyacınız yok, ancak dinozor döneminden kalma olmayan bir ekran kartına ihtiyacınız var. (Not: Odada soğuksa, bu oyun ücretsiz ısıtma görevi görür).

### ⚙️ Yeni Başlayanlar İçin Kavramlar

**VRAM (Video Belleği)**, Yapay Zekanın benzininin depolandığı yerdir.
*   **TurboQuant** sayesinde RolemIAster, grafik kartınızı çökertmeden artık **100.000 kelimeden (token) fazla** - neredeyse üç katı - hatırlayabiliyor.
*   GPU'nuz belleği tükendiğinde, oyun astımı olan bir salyangozdan daha yavaş gidecektir.

---

### 📊 MODEL KATALOGU (Zehri Seçin)

Yapay Zekalarınızı **Ayarlar → Entegre Yerel Yapay Zeka → Modelleri Yönet** bölümünde yönetin.

#### 🏆 Qwen 3.5 Ailesi — RolemIAster İçin Özel Olarak Eğitildi

Bu modeller, oyunun anlatım kurallarını ustalaşmaları için **Denetimli İnce Ayar (SFT)** ile eğitilmiştir. Bunlar genel modeller değildir: RolemIAster'ın JSON sözleşmesini, NPC'leri, envanteri ve savaşı ezbere bilirler.

| Model       | Boyut    | Minimum VRAM | Seviye | Karar        |
| :---------- | :------- | :----------- | :----- | :----------- |
| **Qwen3.5-2B** | ~1.5GB   | **3GB**      | B      | ⚡ **Hızlı Koşucu.** Hepsinin en hızlısı. Temel GPU'lar veya GPU olmadan oynamak için idealdir. |
| **Qwen3.5-4B** | ~2.8GB   | **4GB**      | A      | ✅ **DENGELLİ OLAN.** Optimal hız ve kalite. Çoğu oyuncu için önerilen standart model. |
| **Qwen3.5-9B** | ~5.5GB   | **8GB**      | S      | 🌟 **Anlatıcı.** Zengin anlatım ve üstün tutarlılık. RTX 3070 veya daha iyisine sahip olanlar için. |

---

### 🎮 HIZLI SEÇİM REHBERİ

| Grafiğiniz  | VRAM  | Önerilen Model  | Sonuç                            |
| :---------- | :---- | :-------------- | :------------------------------- |
| GTX 1050/1060 / GPU Yok | 4GB   | **Qwen3.5-2B**  | 🆗 Zar zor ama oynanabilir, çok zar zor... |
| GTX 1070/1660 / RX 580 | 6GB   | **Qwen3.5-4B**  | ✅ İyi deneyim                   |
| RTX 2060/3060 / RX 6600 | 8GB   | **Qwen3.5-4B**  | 🚀 Hızlı ve doğru                  |
| RTX 3070/4060Ti / RX 6700 | 12GB  | **Qwen3.5-9B**  | 🌟 İdeal deneyim                 |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**  | 👑 Maksimum kalite, ultra hızlı yanıtlar |

**💡 Profesyonel İpucu:** İşletim sistemi için her zaman **2GB VRAM boş bırakın**, yoksa Windows ağlamaya ve bir şeyler kapatmaya başlar.

---

### 🚨 İMDAT! BİLGİSAYARIM YAVAŞ ÇALIŞIYOR! (VRAM Sorunları)

Oyunun yanıt vermesi WhatsApp'taki crush'ınızdan daha uzun sürüyorsa, muhtemelen VRAM'iniz tükenmiştir.

**Fazla akıllı davrandığınızın belirtileri:**
1.  **Model RAM'e dökülüyor:** PC, ekran kartı yerine normal belleği kullanıyor. Sonuç: EKSTREM YAVAŞLIK.
2.  **Hafif taşma (1-2GB):** Yanıt başına 30-60 saniye sürer.
3.  **Orta derecede taşma (3-5GB):** 2-5 dakika. Kahve almaya gidebilirsiniz.
4.  **Şiddetli taşma:** 10-30 dakika. Oynanamaz.

#### 🛡️ Acil Durum Protokolü
İşler ters giderse, bu adımları sırayla izleyin:

1.  **📉 VRAM yüzdesini düşürün:** Ayarlar'a gidin ve **%85**'e düşürün. Yeniden başlatın ve deneyin.
2.  **🧹 Temizlik:** 40 sekmeli o tarayıcıyı kapatın. Belleğinizi yiyorlar.
3.  **🛑 %70 Limiti:** Asla atanan VRAM'in **%70**'inin altına inmeyin.
    *   *Neden mi?* Yapay zekanın "düşünmesi" için alana ihtiyacı var (KV önbelleği). %70'ten az verirseniz, boş kalır ve hata verir.
4.  **🔙 Taktik Geri Çekilme:** Hiçbir şey işe yaramazsa, daha küçük bir modele geçin (9B'dan 4B'ye veya 4B'den 2B'ye).

---

### ⚙️ GELİŞMİŞ MODEL AYARLARI ("Maksimum Frikik")

> **UZMAN MODU:** Eğer bir profesyonelseniz ve gelişmiş model ayarlarını (HuggingFace'den indirdiğiniz kendi GGUF modellerinizi eklemek, katmanlarla oynamak vb.) açmak istiyorsanız, oyunu şu komutla başlatmanız gerekir: `--advanced`.

**Ayarlar → Entegre Yerel Yapay Zeka** bölümünde düğmelerle oynamayı sevenler için:

| Seçenek           | Fonksiyon                                          | Öneri                                                               |
| :---------------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| **GPU Katmanları** | Modelin ne kadarının ekran kartına yüklendiği      | **-1** (Bu "TAMAMI" anlamına gelir. Ne yaptığınızı bilmediğiniz sürece dokunmayın) |
| **Maksimum Bağlam** | Yapay zekanın "kısa süreli hafızası"               | **16384 - 32768** (Bundan azı yapay zekanın hafızasını kaybetmesine neden olur) |
| **Sıcaklık**      | Yaratıcılık vs Çılgınlık                           | **0.7 - 0.8** (Daha yüksek = daha çılgın; Daha düşük = daha robotik) |
| **Geçmiş RAG'ı**  | Uzun zamandır unutulan şeyleri hatırlama           | **Evet** (Uzun kampanyalar için şart)                                |
| **Gömülmeleri Önbelleğe Alma** | Anıların aranmasını hızlandırır              | **Evet** (Daha hızlı çalışmasını sağlar)                             |

---

### 🔧 SORUN GİDERME (Troubleshooting)

| Hata              | Çözüm                                                                   |
| :---------------- | :---------------------------------------------------------------------- |
| **YAPAY ZEKA Yavaş / Gecikme** | `GPU Layers`'nin -1 olduğunu doğrulayın. Chrome'u kapatın. `Contexto Máximo`'yi düşürün. |
| **Bellek Hatası (OOM)** | `Contexto Máximo`'ü azaltın veya daha küçük bir model seçin (3B).          |
| **Yapay Zeka Deliriyor / Halüsinasyon Görüyor** | `Temperatura`'ü 0.6'ya düşürün. Hala çılgınsa, uygulamayı yeniden başlatın. |

---

### 🌐 ALTERNATİF SAĞLAYICILAR (Sadece Uzmanlar)

> **Not:** Oyunun kendi yerel yapay zekası fazlasıyla yeterli. Bu sadece ileri düzey veya cesur kullanıcılar içindir.

*   **Harici Yerel Motorlar:**
    *   **Ollama / LM Studio:** Zaten kendi çılgın modelleriniz varsa, bunları kullanabilirsiniz.
*   **Bulut API'leri (Ücretli):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** İnternet ve para gerektirir.
    *   Şuradan yapılandırın: **Ayarlar → Yapay Zeka → Yeni Sağlayıcı Ekle**.

---

### 🌍 NASIL OYNANIR? (Multiverse ve Siz)

Oyunu açtığınızda iki yolunuz var:

1.  **🆕 Yeni Macera**: Efsanenizi sıfırdan yaratın. Oyun sizden **Ad, Meslek, Fiziksel Tanım, Psikolojik Tanım ve hikayenizin Arka Planı/Bahanesi**ni isteyecektir. Ayrıca, kampanyayı yönlendirecek **Zorluk Seviyesi** ve **Mizah Tonu**nu seçeceksiniz.
2.  **💾 Oyuna Devam Et**: RolemIAster **gerçek zamanlı olarak kaydedilir**. Burada "ölmeden önce yükleme" veya geri dönüş yok. Her karar, her hata ve her yara, hikayeye ateşle kazınır. Bu bir **MEYDAN OKUMA**: ne yaparsanız, yapılmıştır. Sonuçlarıyla yaşayın... ya da onlarla ölün.

RolemIAster izole bir oyun değildir; **Kalıcı bir Multivers'tur**.
*   **Sonsuz Dünyalar:** Kendi evrenlerinizi (**Ortaçağ Fantastik** veya **Cyberpunk**) kendi Lore'u ile yaratın.
*   **Sonsuz Karakterler:** Her dünyanın içinde istediğiniz kadar kahraman bulundurabilirsiniz.
*   **Paylaşılan Zaman Çizgisi:** Dikkat! Bir karakterin eylemleri diğerlerinin dünyasını etkiler. Yapay Zeka, diğer kahramanlarınızın farkındadır ve onları dünyanın sakinleri olarak tanıyacaktır.
*   **"Duyuları" Olan Yapay Zeka (Süper RAG):** RAG (Retrieval-Augmented Generation) sistemi, yapay zeka için bir "ihbarcı" görevi görerek, hikayenin %100 tutarlı olması için dünya hakkındaki anıları, kiminle birlikte olduğunuzu, nerede olduğunuzu ve az önce ne olduğunu ona verir.

### Arayüz (Komuta merkeziniz)

*   **Sol Panel (SİZ):** Karakter Kağıdınız. Can, mana, yetenekler ve ne kadar yakışıklı olduğunuz (Karizma).
*   **Orta Panel (HİKAYE):**
    *   **Yukarıda:** Anlatıcının ne olduğunu söylediği yer.
    *   **Aşağıda:** Karar düğmeleriniz ve ne yapmak istediğinizi yazacağınız metin kutusu.
*   **Sağ Panel (EŞYALARINIZ):** Envanter ve ekipman. Dijital Diyojen'in cenneti.

---

## 📜 OYUN KURALLARI (Evet, kurallar var)

RolemIAster, klasik ve sağlam bir d100 (yüzlü zar) sistemi kullanır.

### 1. Nitelikleriniz (Sizi tanımlayanlar)
Yapay Zeka, girdiğiniz bağlama, mesleğe ve tanıma göre niteliklerinizi oluşturur. Oluşturulduktan sonra, istediğiniz gibi dağıtmak için **10 EK PUANINIZ** olur.
*   **Kademeli Maliyetler:** Bir niteliği 14'e kadar yükseltmek 1 puan, 15 ila 16'ya kadar yükseltmek 2 puan mal olur. 17'den sonrası 3 puan! Kasları nereye koyacağınıza iyi karar verin.

*   💪 **Güç (GÜÇ):** Saf fiziksel gücünüz. Yakın dövüş hasarını ve taşıma kapasitenizi etkiler.
*   ❤️ **Dayanıklılık (DAY):** Direncini. Darbelere, hastalıklara ve zehirlere dayanmak için.
*   🐘 **Boyut (BOY):** Vücut yapınız. Büyük ve ağır, veya küçük ve sinsi.
*   🏃 **Çeviklik (ÇVİK):** Çeviklik, nişan alma ve kendi ayaklarınıza takılmama.
*   🧠 **Zeka (ZKA):** Öğrenme, hatırlama ve bulmaca çözme.
*   🔮 **İrade (İRD):** Ruhunuz, şansınız, irade gücünüz ve sihirli rezerviniz.
*   😎 **Karizma (KRZM):** Liderlik, çekicilik ve insanları kandırma (veya baştan çıkarma) yeteneği.

### 2. Hızlı Matematikler (Türetilmiş Özellikler)
Motor bu rakamları niteliklerinize göre otomatik olarak hesaplar:

*   🩸 **Can (PV):** `CON * 10`. 0'a ulaşırsa... bilirsiniz işte. Öldünüz.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Sihirli hileleriniz için yakıt. Manasız, hile yok. (Manasız bir büyücü sadece cüppe giymiş bir cosplayer'dır).
*   ⚡ **Dayanıklılık (STA):** `((CON+FUE+DES)/3)*10 + POD`. Savaşmak ve çabalamadan hareket etmek için enerjiniz.
*   🧠 **İnsanlık (INS):** `(CON+POD) * 5`. (Sadece Cyberpunk'ta: Kablolar sizi deli etmeden önce ne kadar insan kaldığınızı ölçer).
*   ⚔️ **Eylem Puanları (EP):** `(INT + DES) / 2`. İnisiyatifinizi belirler. İlk vuran iki kez vurur.

### 3. Yetenekleriniz
Temel bir değerle başlarlar (örn: Gizlilik = ÇVİK + ZKA) ve kullanıldıkça gelişirler. Bu bir yüzdedir (%).

### 4. Eylem Çözümü (Zar)
Riskli bir şey yapmaya çalıştığınızda (tırmanmak, yalan söylemek, saldırmak...), yapay zeka bir zar atışı isteyecektir. Oyun görünmez bir **d100** atar. **(Unutmayın: Zarlar sizden nefret ediyor. Bu kişisel.)**

*   **Hedefiniz:** Yetenek seviyenizden **KÜÇÜK VEYA EŞİT** bir sayı atmak.
    *   *Örnek:* Tırmanma %45'iniz var.
    *   30 atarsanız: ✅ **Başarılı**. Bir maymun gibi tırmanırsınız.
    *   80 atarsanız: ❌ **Başarısız**. Yere yuvarlanırsınız.
    *   **Kritik:** Yeteneğinizin **1/5'ine eşit veya daha az** (veya 01) atmak. Epik! Harika bir parkur hareketi yaparsınız.
    *   **Fiyasko:** **99 veya 100**. Zarlar bugün sizin gününüz olmadığına karar verdi. Yolda pantolonunuz düşer ve yüzüstü yuvarlanırsınız.

---

## 💡 ÖLMEK İÇİN DEĞİL (VE HIZLI) İPUÇLARI

*   **✍️ Betimleyici Olun:** Sadece "saldır" yazmayın. Şunu yazın: *"Yerden yuvarlanarak baltasından kaçmaya çalışıyorum ve bileğine hançerimi saplıyorum."* Yapay zeka sizi ödüllendirecektir.
*   **🧪 Deneyin:** Düğmelerle sınırlı değilsiniz. Çılgınca şeyler yazın! Yapay zeka doğaçlama yapacaktır.
*   **🎭 Rol Yapın:** Role girin. Açıklamaları okuyun ve karakterinizin yapacağı gibi davranın, pijamalı sizin gibi değil.

---

## ⚔️ SAVAŞ (Silahlanın!)

Kelimeler yetersiz kaldığında, dövüş zamanı gelir. Savaş **taktiktir** ve **Tic** (zaman) üzerinden işler.

### 🕹️ Nasıl çalışır:
*   **Tic'ler:** Her eylem zaman alır. Ağır silahlar yavaştır (çok sayıda tic harcarlar). Hançerler hızlıdır.
*   **Hızınız:** Eylem Puanlarınıza (EP) bağlıdır.

### Temel Eylemler:
*   **🗡️ Saldır:** Elinizdekiyle vurun.
*   **🛡️ Bloklama:** Savunmaya geçersiniz. Hasarı azaltır ama Dayanıklılık harcar.
*   **🏃 Kaçış:** Korkakların (veya yaşamak isteyen akıllıların) işi.
*   **🏳️ Teslim Olma:** Kaybetmek üzere olduğunuzu görürseniz, merhamet dilenebilirsiniz.
*   **✨ Sihir / Siber Donanım:** Ateş, lazer ışınları, hack'ler...

### 💬 Serbest Metin Eylemleri (YENİ!)
Düğmeleri sevmiyor musunuz? Sanki gerçek bir Oyun Ustasıyla konuşuyormuş gibi ne yapmak istediğinizi yazın!
*   **Örnekler:** *"Gobline ateş topu at"*, *"Kılıcımı kınımdan çıkar"*, *"Kendime iksir kullan"*.
*   **Sahne Yönetmeni:** Savaş şimdi hayat buluyor. Yapay zeka, anlatıyı zenginleştiren çevresel olaylar ve tepkiler üretiyor: düşen kirişler, geri çekilen düşmanlar, düşen meşaleler. Savaş alanı artık statik değil!
*   **Yapay zeka anlamazsa:** Yeniden ifade etmenizi isteyecektir. Sıranız KAYBOLMAZ!
*   **⚠️ Sınırlama:** Slotlar arasında eşya taşımak (sırt çantasından ekipman takmak, mühimmat yüklemek) arayüzdeki **Sürükle ve Bırak** ile yapılır, metinle değil.

### ⚠️ HAYATTA KALMA ALTIN KURALI
**SAVAŞMADAN ÖNCE KILICINI ÇIKAR!**
Savaşın ortasında silahını çekmek zaman (Tic) alır. Kılıcın kınındayken yakalanırsan, sakarca çıkarmaya çalışırken kimliğini alana kadar dayak yiyeceksin. VEYA DAHA KÖTÜSÜ!, SİLAHINIZI SAVAŞ SLOTU YERİNE ÇANTANIZDA TAŞIYORSANIZ (Bir saniye müsaade, kocakılıcı çantadan çıkarmam lazım, sanırım buradaydı... bir yerde...) 🤦‍♂️
👉 Donatılmış silahın etiketine tıklayın (sağ panel) onu çekmek için. Yeşil yanacaktır.

Savaşta silahları hareket ettirmeye çalışmak zaman (Tic) alır ve sürpriz bir saldırıya neden olabilir, ayrıca sıranızı kaybetmeniz, size yaklaşan baltadan dolayı sinirden ıskalamanız veya yere düşürmeniz çok olasıdır. (Belki de TDAH'lı bir karakter yaratmak iyi bir fikir değildi)

---

## ✨ SİHİR VE SİBERNETİK

Dünyanız "Ortaçağ Fantastik" veya "Cyberpunk" olup olmadığına bağlı olarak:

### 🧙‍♂️ Fantastik: Büyüler
Büyücü müsünüz? Eşyalarınızı büyüleyebilirsiniz.
1.  **Öğrenin:** Büyüyü kitabınızda bulundurmanız gerekir.
2.  **Atın (Sürükle ve Bırak):** Büyüyü listenizden envanterinizdeki nesnenin üzerine sürükleyin.
3.  **Maliyet:** Bir büyüyü aktif tutmak **tur başına Mana harcar**.
4.  **Uyarı:** Savaşın ortasında mananız biterse, ateş kılıcı tekrar paslı bir demir parçası olur.

### 🦾 Cyberpunk: İmplantlar
Yakın gözlere veya goril kollarına mı sahip olmak istiyorsunuz?
1.  Bir **Teknosurgeon** (servis NPC'si) bulun.
2.  Kredileri ödeyin (gelecekte hiçbir şey bedava değildir).
3.  **İnsanlık Maliyeti:** Her implant ruhunuzdan bir parça alır (**İnsanlık**).
    *   Çok fazla implant takarsanız, bir **Cyberpsykopat** (katil bir tost makinesi) olursunuz ve karakterinizin kontrolünü kaybedersiniz.

---

## 🛒 MAĞAZALAR VE HİZMETLER (SHS)

Alışveriş yapmak için NPC'lerle konuşun.
*   **Yapay Zeka Önerir, Siz Yönlendirirsiniz:** Bir tüccar veya şifacıyla konuştuğunuzda, yapay zeka hizmetlerini (tamir, satış, şifa) önerecektir, ancak işlem moduna ne zaman gireceğinize sizin karar vermeniz için bir **"Hizmetleri Gör"** düğmesi görünecektir.
*   **Pazarlık:** **Pazarlık** yeteneğiniz (Karizmaya dayanır) fiyatları belirler. Çirkin veyaantipatikseniz, dolandırılırsınız.
*   **Satış:** Bir envanterdeki nesneyi satıcıya satmak için **Sağ Tıklayın** veya üzerine sürükleyin.

---

## 🎒 ENVANTER YÖNETİMİ (Tetris)

*   **Ağırlık:** Bir taşıma sınırınız var (Güç + Boyut). Çok fazla hurda taşırsanız, yavaş ve cezalı gidersiniz (Diyojen arkadaşınız değildir).
*   **Paneller:**
    *   **Ekipman:** Giydiğiniz şeyler.
    *   **Kemer:** Savaşta hızlı erişim (buradan iksir kullanmak daha az zaman alır).
    *   **Sırt Çantası:** Çuvalın dibi.
*   **Akıcı Kullanım:** Bir iksir veya yiyeceği doğrudan **yüzünüze** (portreye) sürükleyerek anında tüketin. Bağlam menüsünü (sağ tıklama -> Kullan) de kullanabilirsiniz.

---

## 🛠️ SON AYARLAR

**Ayarlar** menüsünde her şeyi ayarlayabilirsiniz:
*   **🌍 Dil:** Yapay zeka, tüm oyunu ve yanıtları anında çevirecektir. Çok dilli mod aktif.
*   **👁️ Görünüm:** Yazı tipi boyutu ve renkler, kör olmamak için. Tam bir dalış için neon kenarlıklar ve yumuşatılmış gölgeler.
*   **🧠 Yapay Zeka Ayarları:** Model, sıcaklık vb. değiştirin (Manuel başına `--advanced` bayrağı hakkında gördüklerimizi hatırlayın, eğer her şeye dokunmak isteyenlerdenseniz).

---

## 🎭 ZORLUK VE MİZAH (Acınızı Kişiselleştirin)

Başlamadan önce unutmayın, yapay zeka sadece anlatmakla kalmaz, aynı zamanda tercihlerinize göre **dünyayı ayarlar**. Bu parametreler dünya oluşturulurken seçilir ve o dünya için kalıcıdır:

*   **🎮 Zorluk (Yapay Zeka tarafından yönetilir):** Basit bir hasar çarpı değil. Oyun yapay zekaya şunu söyler: "Hey, zorluk bu, buna göre hareket et."
    *   **Kolay:** Asla ölmeyeceksiniz (veya neredeyse imkansız olacak), durumlar daha basit, fiyatlar daha ucuz ve düşmanlar daha beceriksiz olacak. Yapay zeka, yolunuzun güllük gülistanlık olması için her sahneyi mantıklı hale getirecektir.
    *   **Normal:** Standart denge.
    *   **Meydan Okuma:** Yapay zeka acımasız olacak, fiyatlar aşırı pahalı olacak ve her hata sonunuz olabilir.

*   **🃏 Mizah Tonu:** Yapay zekanın size nasıl konuştuğunu ve ne tür olaylar yaşandığını tanımlar. Her modelin "mizah" kavramını yorumlama şekli olsa da, yapay zeka seçtiğinize uyum sağlamaya çalışacaktır... ya da uyum sağlamayacaktır:
    *   **Ciddi:** Destansı, karanlık ve resmi bir anlatım.
    *   **İğneleyici:** Yapay zeka hatalarınızla dalga geçecek, sürekli laf sokacak ve ironik bir ton kullanacaktır.
    *   **Çılgınca:** Absürdlüğe hazır olun. Uçan inekler, gerçeküstü durumlar ve yapay zekanın en çarpık mantığı tarafından yönetilen toplam kaos.

---

## 🚧 Uyarı: Erken Erişim

RolemIAster **aktif geliştirme aşamasındadır**, yavaş ateşte pişmektedir.
*   Hatalar (veya "beklenmedik özellikler") bulabilirsiniz.
*   Her hafta yeni şeyler ekliyorum.
*   Geri bildiriminiz altın değerinde! Neleri sevdiğinizi ve neleri çok sevdiğinizi bana söyleyin. (Bir şeyi sevmediyseniz, bana nazikçe söyleyin.)

Şimdi gidin, inisiyatif atın ve efsanenizi yaratın!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->