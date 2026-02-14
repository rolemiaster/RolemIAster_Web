# 🐉 RolemIAster'a Hoş Geldiniz!

Zarlarını (veya fareni) kap ve tek sınırın hayal gücünün ne kadar çarpık olduğu maceraları yaşamaya hazırlan! **RolemIAster**, kendi hikayelerinin kahramanı (veya kötüsü) olmanı sağlayan, Yapay Zeka destekli sonsuz bir rol yapma oyunudur.

---

## ⚠️ YASAL UYARI (Sıkıcı ama gerekli kısım)

**BENİ OKU YOKSA ZARLARIN ÖFKESİNE UĞRARSIN:**

1.  **🤖 Entegre Yerel YZ:** RolemIAster kendi dijital beyniyle gelir. **İnternet olmadan** ve garip şeylere dokunmana gerek kalmadan çalışır. Yükle ve oyna!
2.  **☁️ İsteğe Bağlı Bulut:** Paranı harici YZ'lere (OpenAI, Gemini...) harcamayı tercih ediyorsan, kredi kartınla baş başasın. Masraflar sana ait.
3.  **🎲 Üretken Kaos:** YZ hikayeyi anında uydurur. Eğer anlatıcı delirir ve gökten inek yağdığını söylerse, bize bakma. Geliştirici, modelin ürettiği çılgınlıklardan sorumlu değildir.
4.  **🏗️ Erken Erişim (Early Access):** Burası hala inşaat halinde. Bir hata (bug) bulursan, o bir hata değil, sürpriz bir "özellik"tir (feature)! (Lütfen bize geri bildirim gönder, çok yardımcı oluyor).

---

## 🖥️ SİSTEM GEREKSİNİMLERİ VE DİJİTAL BEYİNLER (YZ)

RolemIAster **Yerel Yapay Zeka** ile çalışır. Bu, düşünme işini PC'nin yapacağı anlamına gelir. İnternete ihtiyacın yok, ancak dinozorlar çağından kalma olmayan bir ekran kartına ihtiyacın var. (Not: Odan soğuksa, bu oyun bedava ısıtma işlevi görür).

### ⚙️ Başlangıç Seviyesindekiler İçin Kavramlar

**VRAM (Video Belleği)** YZ'nin benzinidir.
*   RolemIAster'ın hikayenin ipin ucunu kaçırmaması için **12.000 ila 16.000 kelimeyi (token)** "hatırlaması" gerekir.
*   GPU'nun belleği biterse, oyun astımlı bir salyangozdan daha yavaş çalışır.

---

### 📊 MODEL KATALOĞU (Zehirini seç)

YZ'lerini **Ayarlar → Entegre Yerel YZ → Modelleri Yönet** bölümünden yönet.

#### 🏆 Qwen 2.5 Ailesi (Kaymağın da kaymağı)

| Model | Boyut | Min. VRAM | Kademe | Karar |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Stajyer.** İş görür ama ondan Shakespeare yazmasını bekleme. Bazen kafası karışır. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **SEÇİLMİŞ KİŞİ.** Dengeli, zeki ve hızlı. Varsayılan olarak önerilen modeldir. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Profesör.** Zengin, derin anlatım ve çok doğal diyaloglar. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Tanrı Seviyesi.** Bunu çalıştırmak için bir uzay gemisine (RTX 3090/4090) ihtiyacın var. |

---

### 🎮 HIZLI SEÇİM REHBERİ

| Ekran Kartın | VRAM | Önerilen Model | Sonuç |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Ucu ucuna ama oynanabilir (Düşük bağlam) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 İyi çalışır |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Uçar |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ İdeal deneyim |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Büyük lüks |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Maksimum kalite |

**💡 Profesyonel İpucu:** İşletim sistemi için her zaman **2GB VRAM boş bırak**, yoksa Windows ağlamaya ve bir şeyleri kapatmaya başlar.

---

### 🚨 İMDAT! BİLGİSAYARIM YAVAŞLADI! (VRAM Sorunları)

Oyun, hoşlandığın kişinin WhatsApp'ta cevap vermesinden daha geç yanıt veriyorsa, muhtemelen VRAM'in bitmiştir.

**Boyundan büyük işe kalkıştığının belirtileri:**
1.  **Model RAM'e taşıyor:** Bilgisayar ekran kartı yerine normal belleği kullanıyor. Sonuç: AŞIRI YAVAŞLIK.
2.  **Hafif taşma (1-2GB):** Cevap başına 30-60 saniye sürer.
3.  **Orta seviye taşma (3-5GB):** 2-5 dakika. Gidip bir kahve alabilirsin.
4.  **Şiddetli taşma:** 10-30 dakika. Oynanmaz.

#### 🛡️ Acil Durum Protokolü
İşler kötü giderse, şu adımları sırasıyla izle:

1.  **📉 VRAM %'sini düşür:** Ayarlara git ve **%85**'e düşür. Yeniden başlat ve dene.
2.  **🧹 Temizlik:** 40 sekmenin açık olduğu o tarayıcıyı kapat. Belleğini yiyorlar.
3.  **🛑 %70 Sınırı:** Atanan VRAM'de asla **%70**'in altına düşme.
    *   *Neden?* Çünkü YZ'nin "düşünmek" için alana (KV önbelleği) ihtiyacı var. %70'ten az verirsen, boş bakar ve hata verir.
4.  **🔙 Taktiksel Geri Çekilme:** Hiçbiri işe yaramazsa, daha küçük bir modele geç (7B'den 3B'ye düş).

---

### ⚙️ GELİŞMİŞ MODEL YAPILANDIRMASI ("Maksimum İneklik")

> **UZMAN MODU:** Eğer bir profesyonelsen ve gelişmiş model ayarlarına (HuggingFace'ten indirilen kendi GGUF modellerini eklemek, katmanlara dokunmak vb.) erişmek istiyorsan, oyunu şu komutla başlatmalısın: `--advanced`.

**Ayarlar → Entegre Yerel YZ** bölümünde düğmelere basmayı sevenler için:

| Seçenek | İşlev | Öneri |
|--------|---------|---------------|
| **GPU Layers** | Modelin ne kadarının ekran kartına yüklendiği | **-1** ("HEPSİ" demektir. Ne yaptığını bilmiyorsan dokunma) |
| **Maksimum Bağlam** | YZ'nin "kısa süreli hafızası" | **16384 - 32768** (Bundan az olursa YZ amnezi geçirir) |
| **Sıcaklık (Temperature)** | Yaratıcılık vs Çılgınlık | **0.7 - 0.8** (Daha yüksek = daha çılgın; Daha düşük = daha robotik) |
| **Geçmiş RAG** | Çok eski şeyleri hatırlamak | **Evet** (Uzun kampanyalar için şart) |
| **Gömüleri Önbelleğe Al** | Anı aramayı hızlandırır | **Evet** (Daha hızlı çalışmasını sağlar) |

---

### 🔧 SORUN GİDERME (Troubleshooting)

| Hata/Fiyasko | Çözüm |
|-------|---------|
| **Yavaş YZ / Gecikme** | `GPU Layers` değerinin -1 olduğunu doğrula. Chrome'u kapat. `Contexto Máximo` ayarını düşür. |
| **Bellek Hatası (OOM)** | `Contexto Máximo` ayarını düşür veya daha küçük bir model (3B) seç. |
| **YZ sayıklıyor / Halüsinasyon** | `Temperatura` ayarını 0.6'ya düşür. Hala çıldırıyorsa, uygulamayı yeniden başlat. |

---

### 🌐 ALTERNATİF SAĞLAYICILAR (Sadece Uzmanlar)

> **Not:** Oyunun getirdiği yerel YZ fazlasıyla yeterlidir. Bu sadece ileri düzey veya cesur kullanıcılar içindir.

*   **Harici Yerel Motorlar:**
    *   **Ollama / LM Studio:** Kendi inek modellerin varsa, onları kullanabilirsin.
*   **Bulut API'leri (Ücretli):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** İnternet ve para harcamayı gerektirir.
    *   Şuradan yapılandır: **Ayarlar → YZ → Yeni Sağlayıcı Ekle**.

---

### 🌍 NASIL OYNANIR? (Çoklu Evren ve Sen)

Oyunu açtığında iki yolun var:

1.  **🆕 Yeni Macera**: Efsaneni sıfırdan yarat. Oyun senden **İsim, Meslek, Fiziksel Tasvir, Psikolojik Tasvir ve hikayenin Arka Planını/Bahanesini** isteyecek. Ayrıca, kampanyaya yön verecek **Zorluk Seviyesi** ve **Mizah Tonu**'nu seçeceksin.
2.  **💾 Oyuna Devam Et**: RolemIAster **gerçek zamanlı kaydeder**. Burada "ölmeden önce yükle" veya geri dönüş yoktur. Her karar, her hata ve her yara hikayeye kazınır. Bu bir **MEYDAN OKUMA**: Yaptığın şey yapılmış demektir. Sonuçlarıyla yaşa... ya da onlarla öl.

RolemIAster izole bir oyun değil; **Kalıcı bir Çoklu Evrendir**.
*   **Sonsuz Dünyalar:** Kendi Lore'una sahip kendi evrenlerini (**Orta Çağ Fantezisi** veya **Cyberpunk**) yarat.
*   **Sonsuz Karakterler:** Her dünyanın içinde istediğin kadar kahramana sahip olabilirsin.
*   **Paylaşılan Zaman Çizelges:** Dikkat! Bir karakterin yaptığı şey diğerlerinin dünyasını etkiler. YZ diğer kahramanlarının farkındadır ve onları dünyada yaşayanlar olarak tanır.
*   **"Duyguları" Olan YZ (Süper RAG):** RAG (Retrieval-Augmented Generation) sistemi, YZ'nin "ispiyoncusu" gibi davranır; ona dünya, sana kimin eşlik ettiği, nerede olduğun ve az önce ne olduğu hakkında anılar vererek hikayenin %100 tutarlı olmasını sağlar.

### Arayüz (Kumanda kabinin)

*   **Sol Panel (SEN):** Karakter Kağıdın. Can, mana, yetenekler ve ne kadar yakışıklı olduğun (Karizma).
*   **Orta Panel (HİKAYE):**
    *   **Üst:** Anlatıcının olan biteni anlattığı yer.
    *   **Alt:** Karar düğmelerin ve ne yapmak istediğini yazman için metin kutusu.
*   **Sağ Panel (EŞYALARIN):** Envanter ve ekipman. Dijital istifçinin cenneti.

---

## 📜 OYUN KURALLARI (Evet, kurallar var)

RolemIAster klasik ve sağlam bir d100 (yüz yüzlü zar) sistemi kullanır.

### 1. Niteliklerin (Seni tanımlayan şeyler)
YZ; bağlam, meslek ve girdiğin açıklamaya dayanarak niteliklerini oluşturur. Bir kez oluşturulduğunda, keyfine göre dağıtmak için **10 EKSTRA PUANIN** olur.
*   **Kademeli Maliyetler:** Bir niteliği 14'e kadar yükseltmek 1 puana mal olur. 15'ten 16'ya 2 puan. 17 ve sonrası 3 puan! Kasları nereye koyacağını iyi düşün.

*   💪 **Güç (GÜÇ):** Saf fiziksel gücün. Yakın dövüş hasarını ve taşıma kapasiteni etkiler.
*   ❤️ **Dayanıklılık (DAY):** Direncin. Darbelere, hastalıklara ve zehirlere dayanmak için.
*   🐘 **Boyut (BOY):** Cüsseni belirler. Büyük ve ağır mı, yoksa küçük ve kaygan mı.
*   🏃 **Çeviklik (ÇEV):** Atiklik, nişan alma ve kendi ayaklarına takılmama.
*   🧠 **Zeka (ZEK):** Öğrenmek, hatırlamak ve bulmacaları çözmek.
*   🔮 **Kudret (KUD):** Ruhun, şansın, irade gücün ve büyü rezervin.
*   😎 **Karizma (KAR):** Liderlik, çekicilik ve insanları kandırma (veya baştan çıkarma) yeteneği.

### 2. Hızlı Matematik (Türetilmiş Özellikler)
Motor, niteliklerine dayanarak bu rakamları otomatik olarak hesaplar:

*   🩸 **Can Puanı (CP):** `CON * 10`. Eğer 0'a ulaşırsa... eh, biliyorsun. F.
*   ✨ **Mana Puanı (MP):** `(POD * 10) + INT`. Sihirbazlık numaraların için yakıt. Mana yoksa numara da yok. (Manasız bir büyücü, sadece bornoz giyip cosplay yapan bir tiptir).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Denerken ölmeden savaşmak ve hareket etmek için enerjin.
*   🧠 **İnsanlık (İNS):** `(CON+POD) * 5`. (Sadece Cyberpunk'ta: Kablolar seni delirtmeden önce ne kadar insan kaldığını ölçer).
*   ⚔️ **Eylem Puanı (EP):** `(INT + DES) / 2`. İnisiyatifini belirler. İlk vuran, iki kez vurur.

### 3. Yeteneklerin
Temel bir değerle başlar (örn: Gizlilik = ÇEV + ZEK) ve kullandıkça gelişir. Bir yüzdedir (%).

### 4. Eylem Çözümleme (Zar)
Riskli bir şey yapmaya çalıştığında (tırmanmak, yalan söylemek, saldırmak...), YZ senden bir zar atmanı isteyecek. Oyun görünmez bir **d100** atar. **(Unutma: Zarlar senden nefret ediyor. Bu kişisel bir mesele).**

*   **Hedefin:** Yetenek seviyene **EŞİT VEYA DAHA KÜÇÜK** bir sayı atmak.
    *   *Örnek:* Tırmanma yeteneğin %45.
    *   30 attın: ✅ **Başarılı**. Maymun gibi tırmanıyorsun.
    *   80 attın: ❌ **Başarısız**. Yere yapışıyorsun.
    *   **Kritik:** Yeteneğinin **1/5'ine eşit veya daha az** (veya 01) atmak. Epik! Taklalar atarak olağanüstü bir parkur yapıyorsun.
    *   **Fiyasko:** Bir **99 veya 100**. Zarlar bugün senin günün olmadığına karar verdi. Yolun yarısında pantolonun düşüyor ve yüzüstü kapaklanıyorsun.

---

## 💡 (ÇABUK) ÖLMEMEK İÇİN İPUÇLARI

*   **✍️ Betimleyici Ol:** Sadece "saldırıyorum" yazma. Şunu yaz: *"Baltasından yerde yuvarlanarak kaçmaya çalışıyorum ve hançerimi ayak bileğine saplıyorum"*. YZ seni ödüllendirecektir.
*   **🧪 Deney Yap:** Düğmelerle sınırlı değilsin. Çılgınca şeyler yaz! YZ doğaçlama yapacaktır.
*   **🎭 Rol Yap:** Role gir. Açıklamaları oku ve pijamalı halin gibi değil, karakterinin yapacağı gibi davran.

---

## ⚔️ SAVAŞ (Silah başına!)

Kelimeler tükendiğinde, dayak vakti gelir. Savaş **taktikseldir** ve **Tikler** (zaman) ile çalışır.

### 🕹️ Nasıl çalışır:
*   **Tikler:** Her eylem zaman harcar. Ağır silahlar yavaştır (çok tik harcar). Hançerler hızlıdır.
*   **Hızın:** Eylem Puanlarına (EP) bağlıdır.

### Temel Eylemler:
*   **🗡️ Saldır:** Elinde kınından çıkmış ne varsa onunla vur.
*   **🛡️ Blokla:** Savunmaya geçersin. Hasarı azaltır ama Stamina harcar.
*   **🏃 Kaç:** Korkaklar (veya yaşamak isteyen bilgeler) için.
*   **🏳️ Teslim Ol:** Kazanamayacağını görürsen merhamet dilenebilirsin.
*   **✨ Büyü / Cyberware:** Ateş, lazer ışınları, hacklemeler...

### 💬 Serbest Metin Eylemleri (YENİ!)
Düğmeleri sevmiyor musun? Kanlı canlı bir Game Master ile konuşuyormuşsun gibi ne yapmak istediğini yaz!
*   **Örnekler:** *"Gobline ateş topu at"*, *"Rünlü kılıcımı kınından çıkar"*, *"Üzerimde iksir kullan"*.
*   **Sahne Yönetmeni:** Savaş artık hayat buluyor. YZ, anlatımı zenginleştiren çevresel olaylar ve tepkiler üretir: düşen kirişler, geri çekilen düşmanlar, düşen meşaleler. Savaş alanı artık statik değil!
*   **YZ anlamazsa:** Senden yeniden ifade etmeni isteyecektir. Sıran KAYBOLMAZ!
*   **⚠️ Sınırlama:** Slotlar arası nesne taşımak (sırt çantasından kuşanmak, cephane yüklemek), metinle değil arayüzdeki **Sürükle ve Bırak (Drag & Drop)** ile yapılır.

### ⚠️ ALTIN HAYATTA KALMA KURALI
**SAVAŞMADAN ÖNCE SİLAHINI ÇEK!**
Savaşın ortasında silah çekmek zaman (Tik) harcar. Eğer kılıcın kınındayken yakalanırsan, sen sakarca onu çıkarmaya çalışırken nüfus cüzdanına kadar dayak yersin. VEYA DAHA KÖTÜSÜ, SİLAHLARIN EKİPMAN YUVASI YERİNE SIRT ÇANTANDA İSE (Bir saniye bekleyin, şu koca kılıcı sırt çantamdan çıkarmam lazım, buralarda bir yerde olduğunu biliyorum... bir yerlerde...) 🤦‍♂️
👉 Silahı kınından çıkarmak için (sağ paneldeki) **kuşanılmış silahın etiketine tıkla**. Yeşil yanacaktır.

Savaşta silahları taşımaya çalışmak zaman (Tik) tüketir ve sürpriz bir saldırıya uğramana, ayrıca sıranı kaybetmene, kaşlarının arasına yaklaşan baltanın verdiği gerginlikle hata yapmana veya silahı yere düşürmene neden olabilir. (Belki de DEHB'li bir karakter yaratmak iyi bir fikir değildi).

---

## ✨ BÜYÜ VE SİBERNETİK

Dünyanın "Orta Çağ Fantezisi" mi yoksa "Cyberpunk" mı olduğuna bağlı olarak:

### 🧙‍♂️ Fantezi: Efsunlar
Büyücü müsün? Ekipmanını efsunlayabilirsin.
1.  **Öğren:** Büyünün büyü kitabında (grimoire) olması gerekir.
2.  **Yap (Sürükle ve Bırak):** Büyüyü listenden envanterindeki nesnenin üzerine sürükle.
3.  **Maliyet:** Bir efsunu aktif tutmak **tur başına Mana harcar**.
4.  **Uyarı:** Savaşın ortasında manasız kalırsan, ateşten kılıç tekrar paslı bir demir parçasına dönüşür.

### 🦾 Cyberpunk: İmplantlar
Zoom özellikli gözler veya goril kolları mı istiyorsun?
1.  Bir **Tekno-cerrah** (Hizmet veren NPC) bul.
2.  Kredileri öde (gelecekte hiçbir şey bedava değildir).
3.  **İnsanlık Maliyeti:** Her implant ruhundan (**İnsanlık**) bir parça götürür.
    *   Çok fazla taktırırsan, **Siberpsikoza** (bacaklı katil bir tost makinesine) dönüşürsün ve karakterinin kontrolünü kaybedersin.

---

## 🛒 DÜKKANLAR VE HİZMETLER (SİS)

Ticaret yapmak için NPC'lerle konuş.
*   **YZ Önerir, Sen Yönetirsin:** Bir tüccar veya şifacıyla konuştuğunda, YZ hizmetlerini (tamir, satış, iyileştirme) önerecektir, ancak işlemsel moda ne zaman gireceğine karar vermen için bir **"Hizmetleri Gör"** düğmesi belirecektir.
*   **Pazarlık:** **Ticaret** yeteneğin (Karizmaya dayalı) fiyatları belirler. Çirkin veya antipatiksen, kazıklanırsın.
*   **Satış:** Envanterindeki bir nesneye **Sağ Tıklayarak** dükkan sahibine sat veya üzerine sürükle.

---

## 🎒 ENVANTER YÖNETİMİ (Tetris)

*   **Ağırlık:** Bir yük sınırın var (Güç + Boyut). Çok fazla hurda taşırsan, yavaşlarsın ve ceza alırsın (Diyojen senin arkadaşın değil).
*   **Paneller:**
    *   **Ekipman:** Üzerinde taşıdıkların.
    *   **Kemer:** Savaşta hızlı erişim (buradan iksir kullanmak daha az zaman harcar).
    *   **Sırt Çantası:** Çuvalın dibi.
*   **Akıcı Kullanım:** Bir iksiri veya yiyeceği anında tüketmek için doğrudan **yüzüne** (portreye) sürükle. Bağlam menüsünü de kullanabilirsin (sağ tık -> Kullan).

---

## 🛠️ SON AYARLAR

**Ayarlar** menüsünde her şeyi kurcalayabilirsin:
*   **🌍 Dil:** YZ tüm oyunu ve cevapları anında çevirir. Çok dilli mod devrede.
*   **👁️ Görünüm:** Kör olmaman için yazı boyutu ve renkler. Tam daldırma (immersion) için neon kenarlar ve yumuşatılmış gölgeler.
*   **🧠 YZ Ayarları:** Modeli, sıcaklığı vb. değiştir. (Her şeyi kurcalamak isteyen biriysen, kılavuzun başında `--advanced` bayrağı hakkında gördüklerimizi hatırla).

---

## 🎭 ZORLUK VE MİZAH (Istırabını Kişiselleştir)

Başlamadan önce, YZ'nin sadece anlatmadığını, dünyayı tercihlerinize göre **ayarladığını** unutma. Bu parametreler dünya yaratılırken seçilir ve o dünya için kalıcıdır:

*   **🎮 Zorluk (YZ tarafından yönetilir):** Bu basit bir hasar çarpanı değildir. Oyun YZ'ye şöyle der: "Hey, zorluk bu, ona göre davran".
    *   **Kolay:** Asla ölmezsin (veya neredeyse imkansızdır), durumlar daha basittir, fiyatlar daha ucuzdur ve düşmanlar daha sakardır. YZ, yolun güllerle dolu olsun diye her sahneyi mantık çerçevesinde kolaylaştırır.
    *   **Normal:** Standart denge.
    *   **Mücadele:** YZ acımasız olacaktır, fiyatlar el yakar ve herhangi bir hata son hatan olabilir.

*   **🃏 Mizah Tonu:** YZ'nin seninle nasıl konuştuğunu ve ne tür olayların gerçekleştiğini tanımlar. Her modelin "mizah" kavramını yorumlama şekli farklı olsa da, YZ seçtiğine uyum sağlamaya çalışacaktır... ya da sağlamayacaktır:
    *   **Ciddi:** Epik, karanlık ve resmi bir anlatı.
    *   **İğneleyici (Sarkastik):** YZ hatalarına güler, sürekli laf sokar ve ironik bir ton kullanır.
    *   **Çılgın:** Saçmalıklara hazır ol. Uçan inekler, sürrealist durumlar ve YZ'nin en çarpık mantığıyla yönetilen tam bir kaos.

---

## 🚧 Uyarı: Erken Erişim (Early Access)

RolemIAster **aktif geliştirme** aşamasındadır, kısık ateşte pişiyor.
*   Hatalar (veya "beklenmedik özellikler") bulabilirsin.
*   Her hafta yeni şeyler ekliyorum.
*   Geri bildirimin altın değerinde! Neyi sevdiğini ve neyi çok sevdiğini söyle. (Bir şeyi sevmediysen onu da söyle, ama nazikçe).

Şimdi git, inisiyatif at ve efsaneni yarat!

<!-- source_hash: f3494f05 -->