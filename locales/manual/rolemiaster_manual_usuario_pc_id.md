# 🐉 Selamat Datang di RolemIAster!

Ambil dadumu (atau mouse-mu) dan bersiaplah untuk menjalani petualangan di mana satu-satunya batasan adalah seberapa liarnya imajinasimu! **RolemIAster** adalah permainan role-playing tanpa batas bertenaga Kecerdasan Buatan yang memungkinkanmu menjadi pahlawan (atau penjahat) dalam ceritamu sendiri.

---

## ⚠️ PENAFIAN HUKUM (Bagian membosankan tapi perlu)

**BACA SAYA ATAU KAMU AKAN MERASAKAN KEMURKAAN DADU:**

1.  **🤖 AI Lokal Terintegrasi:** RolemIAster membawa otak digitalnya sendiri. Berfungsi **tanpa internet** dan tanpa kamu perlu menyentuh hal-hal aneh. Instal dan mainkan!
2.  **☁️ Cloud Opsional:** Jika kamu lebih suka menghabiskan uang untuk AI eksternal (OpenAI, Gemini...), terserah kamu dan kartu kreditmu. Biaya ditanggung sendiri.
3.  **🎲 Kekacauan Generatif:** AI mengarang cerita sambil jalan. Jika narator menjadi gila dan mengatakan ada hujan sapi, jangan melihat ke arah kami. Pengembang tidak bertanggung jawab atas kegilaan yang dihasilkan oleh model.
4.  **🏗️ Early Access:** Ini masih dalam pengerjaan. Jika kamu menemukan bug, itu bukan kesalahan, itu adalah "fitur" kejutan! (Tolong kirimkan kami feedback, itu sangat membantu).

---

## 🖥️ PERSYARATAN SISTEM DAN OTAK DIGITAL (AI)

RolemIAster bekerja dengan **Kecerdasan Buatan Lokal**. Itu berarti PC kamu yang akan melakukan kerja keras untuk berpikir. Kamu tidak butuh internet, tapi kamu butuh kartu grafis yang bukan dari zaman dinosaurus. (Catatan: Jika kamarmu dingin, game ini berfungsi sebagai pemanas gratis).

### ⚙️ Konsep untuk Pemula

**VRAM (Video Memory)** adalah bensinnya AI.
*   RolemIAster perlu "mengingat" **12.000 hingga 16.000 kata (token)** agar tidak kehilangan alur cerita.
*   Jika GPU kamu kehabisan memori, game akan berjalan lebih lambat daripada siput yang terkena asma.

---

### 📊 KATALOG MODEL (Pilih racunmu)

Kelola AI kamu di **Pengaturan → AI Lokal Terintegrasi → Kelola Model**.

#### 🏆 Keluarga Qwen 2.5 (La crème de la crème)

| Model | Ukuran | VRAM Minimal | Tier | Keputusan |
|--------|--------|-------------|------|-----------|
| **Qwen2.5-3B** | ~2.5GB | **8GB** | B | 👶 **Si Magang.** Lumayan, tapi jangan minta dia menulis seperti Shakespeare. Kadang suka bingung. |
| **Qwen2.5-7B** | ~5.5GB | **12GB** | A | ✅ **YANG TERPILIH.** Seimbang, pintar, dan cepat. Ini adalah model rekomendasi default. |
| **Qwen2.5-14B** | ~10GB | **16GB** | S | 🧐 **Sang Profesor.** Narasi yang kaya, mendalam, dan dialog yang sangat alami. |
| **Qwen2.5-32B** | ~22GB | **32GB** | S+ | 👑 **Level Dewa.** Kamu butuh pesawat luar angkasa (RTX 3090/4090) untuk menjalankan ini. |

---

### 🎮 PANDUAN PILIHAN CEPAT

| Grafis Kamu | VRAM | Model Rekomendasi | Hasil |
|------------|------|--------------------|-----------|
| GTX 1050/1060 | 4GB | Qwen2.5-3B | 🆗 Pas-pasan tapi bisa dimainkan (Konteks rendah) |
| GTX 1070/1660 | 6GB | Qwen2.5-3B | 🆗 Jalan lancar |
| RTX 2060/3060 | 8GB | Qwen2.5-3B | 🚀 Terbang (Ngebut) |
| RTX 3070/4060Ti | 12GB | **Qwen2.5-7B** | ✅ Pengalaman ideal |
| RTX 3090/4080 | 16-24GB | Qwen2.5-14B | 🌟 Mewah |
| RTX 4090 | 24GB | Qwen2.5-32B | 👑 Kualitas maksimal |

**💡 Pro Tip:** Selalu sisakan sekitar **2GB VRAM bebas** untuk sistem operasi, atau Windows akan mulai menangis dan menutup aplikasi.

---

### 🚨 TOLONG! PC SAYA LEMOT! (Masalah VRAM)

Jika game merespons lebih lama daripada gebetanmu di WhatsApp, kemungkinan besar kamu kehabisan VRAM.

**Gejala kamu sok pintar:**
1.  **Model tumpah ke RAM:** PC menggunakan memori biasa, bukan grafis. Hasil: SANGAT LAMBAT.
2.  **Luberan ringan (1-2GB):** Butuh 30-60 detik per respons.
3.  **Luberan sedang (3-5GB):** 2-5 menit. Kamu bisa pergi bikin kopi dulu.
4.  **Luberan parah:** 10-30 menit. Tidak bisa dimainkan.

#### 🛡️ Protokol Darurat
Jika keadaan memburuk, ikuti langkah-langkah ini secara berurutan:

1.  **📉 Turunkan % VRAM:** Pergi ke Pengaturan dan turunkan ke **85%**. Restart dan coba lagi.
2.  **🧹 Bersih-bersih:** Tutup browser dengan 40 tab terbuka itu. Mereka memakan memorimu.
3.  **🛑 Batas 70%:** Jangan pernah turun di bawah **70%** alokasi VRAM.
    *   *Kenapa?* Karena AI butuh ruang untuk "berpikir" (cache KV). Jika kamu beri kurang dari 70%, dia akan bengong dan error.
4.  **🔙 Mundur Teratur:** Jika tidak ada yang berhasil, turun ke model yang lebih kecil (ganti dari 7B ke 3B).

---

### ⚙️ KONFIGURASI MODEL LANJUTAN ("Oprak-aprek Maksimal")

> **MODE AHLI:** Jika kamu seorang pro dan ingin mengakses konfigurasi model tingkat lanjut (menambahkan model GGUF sendiri yang diunduh dari HuggingFace, menyentuh layer, dll.), kamu harus memulai game dengan perintah: `--advanced`.

Bagi mereka yang suka memencet tombol di **Pengaturan → AI Lokal Terintegrasi**:

| Opsi | Fungsi | Rekomendasi |
|--------|---------|---------------|
| **GPU Layers** | Berapa banyak model dimuat di kartu grafis | **-1** (Artinya "SEMUA". Jangan sentuh kecuali kamu tahu apa yang kamu lakukan) |
| **Konteks Maks** | "Memori jangka pendek" AI | **16384 - 32768** (Kurang dari ini dan AI akan amnesia) |
| **Temperatur** | Kreativitas vs Kegilaan | **0.7 - 0.8** (Makin tinggi = makin gila; Makin rendah = makin robot) |
| **RAG Riwayat** | Mengingat hal-hal dari waktu yang lama | **Ya** (Wajib untuk kampanye panjang) |
| **Cache Embeddings** | Mempercepat pencarian ingatan | **Ya** (Membuatnya berjalan lebih cepat) |

---

### 🔧 PEMECAHAN MASALAH (Troubleshooting)

| Masalah | Perbaikan |
|-------|---------|
| **AI Lambat / Lag** | Pastikan `GPU Layers` adalah -1. Tutup Chrome. Turunkan `Contexto Máximo`. |
| **Error Memori (OOM)** | Kurangi `Contexto Máximo` atau pilih model yang lebih kecil (3B). |
| **AI Mengigau / Halusinasi** | Turunkan `Temperatura` ke 0.6. Jika masih gila, restart aplikasi. |

---

### 🌐 PENYEDIA ALTERNATIF (Hanya Ahli)

> **Catatan:** AI lokal bawaan game sudah lebih dari cukup. Ini hanya untuk pengguna tingkat lanjut atau pemberani.

*   **Mesin Lokal Eksternal:**
    *   **Ollama / LM Studio:** Jika kamu sudah memiliki model oprekanmu sendiri, kamu bisa menggunakannya.
*   **API Cloud (Berbayar):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Membutuhkan internet dan mengeluarkan uang.
    *   Konfigurasikan di: **Pengaturan → AI → Tambah Penyedia Baru**.

---

### 🌍 CARA BERMAIN? (Multiverse dan Kamu)

Saat membuka game, kamu punya dua jalan:

1.  **🆕 Petualangan Baru**: Buat legendamu dari nol. Game akan meminta **Nama, Pekerjaan (Profesi), Deskripsi Fisik, Deskripsi Psikologis, dan Latar Belakang/Dalih** ceritamu. Selain itu, kamu akan memilih **Tingkat Kesulitan** dan **Nada Humor** yang akan memandu kampanye.
2.  **💾 Lanjutkan Permainan**: RolemIAster **menyimpan secara real-time**. Di sini tidak ada "load sebelum mati" atau jalan kembali. Setiap keputusan, setiap kegagalan, dan setiap luka terukir permanen dalam cerita. Ini adalah **TANTANGAN**: apa yang kamu lakukan, sudah terjadi. Hiduplah dengan konsekuensinya... atau mati karenanya.

RolemIAster bukan permainan yang terisolasi; ini adalah **Multiverse Persisten**.
*   **Dunia Tak Terbatas:** Buat semesta kamu sendiri (**Fantasi Abad Pertengahan** atau **Cyberpunk**) dengan Lore-nya sendiri.
*   **Karakter Tak Terbatas:** Di dalam setiap dunia, kamu bisa memiliki semua pahlawan yang kamu inginkan.
*   **Garis Waktu Bersama:** Awas! Apa yang dilakukan satu karakter memengaruhi dunia karakter lain. AI sadar akan pahlawanmu yang lain dan akan mengenali mereka sebagai penghuni dunia tersebut.
*   **AI dengan "Indra" (Super RAG):** Sistem RAG (Retrieval-Augmented Generation) bertindak sebagai "cepu" bagi AI, memberinya ingatan tentang dunia, siapa yang menemanimu, di mana kamu berada, dan apa yang baru saja terjadi agar cerita 100% koheren.

### Antarmuka (Kokpit Kendalimu)

*   **Panel Kiri (KAMU):** Lembar Karaktermu. HP, mana, skill, dan seberapa gantengnya kamu (Karisma).
*   **Panel Tengah (CERITA):**
    *   **Atas:** Tempat narator menceritakan apa yang terjadi.
    *   **Bawah:** Tombol keputusanmu dan kotak teks untuk menulis apa pun yang ingin kamu lakukan.
*   **Panel Kanan (BARANGMU):** Inventaris dan perlengkapan. Surga bagi penimbun digital.

---

## 📜 ATURAN PERMAINAN (Ya, ada aturannya)

RolemIAster menggunakan sistem d100 (dadu bersisi seratus) klasik dan kuat.

### 1. Atributmu (Yang mendefinisikanmu)
AI menghasilkan atributmu berdasarkan konteks, profesi, dan deskripsi yang kamu masukkan. Setelah dihasilkan, kamu punya **10 POIN EKSTRA** untuk dibagikan sesuai selera.
*   **Biaya Bertingkat:** Menaikkan atribut hingga 14 butuh 1 poin. Dari 15 ke 16 butuh 2 poin. Mulai dari 17 butuh 3 poin! Pikirkan baik-baik di mana kamu menaruh ototmu.

*   💪 **Kekuatan (FUE):** Tenaga fisik murnimu. Memengaruhi damage jarak dekat dan kapasitas angkutmu.
*   ❤️ **Konstitusi (CON):** Ketahananmu. Untuk menahan pukulan, penyakit, dan racun.
*   🐘 **Ukuran (TAM):** Dimensimu. Besar dan berat, atau kecil dan licin.
*   🏃 **Ketangkasan (DES):** Kelincahan, akurasi, dan tidak tersandung kakimu sendiri.
*   🧠 **Kecerdasan (INT):** Belajar, mengingat, dan memecahkan teka-teki.
*   🔮 **Kekuatan (POD):** Jiwamu, keberuntunganmu, tekad, dan cadangan sihirmu.
*   😎 **Karisma (CAR):** Kepemimpinan, daya tarik, dan kemampuan menipu (atau merayu) orang.

### 2. Matematika Cepat (Karakteristik Turunan)
Mesin menghitung angka-angka ini secara otomatis berdasarkan atributmu:

*   🩸 **Nyawa (PV):** `CON * 10`. Jika mencapai 0... yah, kamu tahu lah. F.
*   ✨ **Mana (PM):** `(POD * 10) + INT`. Bahan bakar untuk trik sulapmu. Tanpa mana, tidak ada trik. (Penyihir tanpa mana cuma orang pakai daster lagi cosplay).
*   ⚡ **Stamina (STA):** `((CON+FUE+DES)/3)*10 + POD`. Energimu untuk bertarung dan bergerak tanpa mati kecapekan.
*   🧠 **Humanitas (HUM):** `(CON+POD) * 5`. (Hanya di Cyberpunk: Mengukur berapa banyak sisi manusiamu yang tersisa sebelum kabel-kabel membuatmu gila).
*   ⚔️ **Poin Aksi (PA):** `(INT + DES) / 2`. Menentukan Inisiatifmu. Siapa cepat, dia dapat (pukul dua kali).

### 3. Skill Kamu
Dimulai dengan nilai dasar (cth: Sembunyi = DES + INT) dan meningkat saat digunakan. Ini adalah persentase (%).

### 4. Resolusi Aksi (Dadu)
Saat kamu mencoba melakukan sesuatu yang berisiko (memanjat, berbohong, menyerang...), AI akan meminta lemparan dadu. Game melempar **d100** tak terlihat. **(Ingat: Dadu membencimu. Ini masalah pribadi).**

*   **Target Kamu:** Mendapatkan angka **LEBIH KECIL ATAU SAMA DENGAN** level skill kamu.
    *   *Contoh:* Kamu punya 45% di Memanjat.
    *   Kamu dapat 30: ✅ **Sukses**. Kamu memanjat seperti monyet.
    *   Kamu dapat 80: ❌ **Gagal**. Kamu jatuh gedebuk.
    *   **Kritis:** Mendapatkan kurang atau sama dengan **1/5 dari skillmu** (atau 01). Epik! Kamu melakukan parkour luar biasa dengan salto.
    *   **Pifia (Gagal Total):** Angka **99 atau 100**. Dadu memutuskan hari ini bukan harimu. Celanamu melorot di tengah jalan dan kamu jatuh nyusruk.

---

## 💡 TIPS AGAR TIDAK MATI (CEPAT)

*   **✍️ Jadilah Deskriptif:** Jangan hanya tulis "saya serang". Tulis: *"Saya mencoba menghindari kapaknya dengan berguling di tanah dan menusukkan belati saya ke pergelangan kakinya"*. AI akan memberimu imbalan.
*   **🧪 Bereksperimenlah:** Kamu tidak terbatas pada tombol. Tulis hal-hal gila! AI akan berimprovisasi.
*   **🎭 Roleplay:** Masuklah ke dalam peran. Baca deskripsinya dan bertindaklah seperti karaktermu, bukan seperti kamu yang sedang pakai piyama.

---

## ⚔️ PERTEMPURAN (Angkat senjata!)

Ketika kata-kata gagal, saatnya baku hantam. Pertempuran bersifat **taktis** dan bekerja berdasarkan **Ticks** (waktu).

### 🕹️ Cara kerjanya:
*   **Ticks:** Setiap aksi membutuhkan waktu. Senjata berat itu lambat (menghabiskan banyak ticks). Belati itu cepat.
*   **Kecepatanmu:** Tergantung pada Poin Aksi (PA) kamu.

### Aksi Dasar:
*   **🗡️ Serang:** Hajar dengan apa pun yang sudah kamu hunus.
*   **🛡️ Blokir:** Kamu bersikap defensif. Mengurangi damage tapi menghabiskan Stamina.
*   **🏃 Lari:** Untuk pengecut (atau orang bijak yang ingin hidup).
*   **🏳️ Menyerah:** Jika kamu melihat kamu tidak bisa menang, kamu bisa memohon belas kasihan.
*   **✨ Sihir / Cyberware:** Api, sinar laser, peretasan...

### 💬 Aksi Teks Bebas (BARU!)
Tidak suka tombol? Tulis apa pun yang ingin kamu lakukan seolah-olah kamu berbicara dengan Game Master sungguhan!
*   **Contoh:** *"Lempar bola api ke goblin"*, *"Hunus pedang rune saya"*, *"Gunakan ramuan pada diri sendiri"*.
*   **Sutradara Adegan:** Pertempuran kini menjadi hidup. AI menghasilkan peristiwa lingkungan dan reaksi yang memperkaya narasi: balok jatuh, musuh mundur, obor jatuh. Medan perang tidak lagi statis!
*   **Jika AI tidak paham:** Dia akan memintamu menyusun ulang kalimat. Giliranmu TIDAK hilang!
*   **⚠️ Batasan:** Memindahkan objek antar slot (melengkapi dari tas, mengisi amunisi) dilakukan dengan **Drag & Drop** di antarmuka, bukan dengan teks.

### ⚠️ ATURAN EMAS UNTUK BERTAHAN HIDUP
**CABUT SENJATA SEBELUM BERTARUNG!**
Mencabut senjata di tengah pertempuran memakan waktu (Ticks). Jika kamu tertangkap basah dengan pedang masih di sarung, kamu akan dihajar habis-habisan sementara kamu mencoba mengeluarkannya dengan canggung. ATAU LEBIH BURUK LAGI!, JIKA KAMU MEMBAWA SENJATAMU DI TAS BUKAN DI SLOT PERLENGKAPANNYA (Maaf sebentar, saya harus mengeluarkan pedang besar dari tas, saya tahu tadi ada di sini... di suatu tempat...) 🤦‍♂️
👉 **Klik pada label senjata yang dilengkapi** (panel kanan) untuk menghunusnya. Label akan menyala hijau.

Mencoba memindahkan senjata saat bertarung memakan waktu (Ticks) dan bisa mengakibatkan serangan kejutan, ditambah lagi kemungkinan besar kamu akan kehilangan giliran, gagal karena gugup melihat kapak yang mendekat ke jidatmu, atau senjatamu jatuh ke tanah. (Mungkin membuat karakter dengan ADHD bukan ide bagus)

---

## ✨ SIHIR DAN SIBERNETIKA

Tergantung pada apakah duniamu adalah "Fantasi Abad Pertengahan" atau "Cyberpunk":

### 🧙‍♂️ Fantasi: Mantra (Enchantment)
Apakah kamu penyihir? Kamu bisa menyihir perlengkapanmu.
1.  **Pelajari:** Kamu butuh mantra di grimoire-mu.
2.  **Lemparkan (Drag & Drop):** Seret mantra dari daftarmu ke objek di inventarismu.
3.  **Biaya:** Mempertahankan mantra tetap aktif **menghabiskan Mana per giliran**.
4.  **Peringatan:** Jika kamu kehabisan mana di tengah pertarungan, pedang api itu kembali menjadi sepotong besi berkarat.

### 🦾 Cyberpunk: Implan
Mau mata dengan zoom atau lengan gorila?
1.  Cari **Tecnocirujano** (NPC layanan bedah).
2.  Bayar kredit (tidak ada yang gratis di masa depan).
3.  **Biaya Humanitas:** Setiap implan mengambil sepotong jiwamu (**Humanitas**).
    *   Jika kamu memasang terlalu banyak, kamu akan menjadi **Cyberpsicosis** (pemanggang roti berkaki yang membunuh) dan kehilangan kendali atas karaktermu.

---

## 🛒 TOKO DAN LAYANAN (SIS)

Bicaralah dengan NPC untuk berdagang.
*   **AI Menyarankan, Kamu Memutuskan:** Saat kamu berbicara dengan pedagang atau tabib, AI akan menyarankan layanan mereka (memperbaiki, menjual, menyembuhkan), tetapi tombol **"Lihat Layanan"** akan muncul agar kamu bisa memutuskan kapan masuk ke mode transaksi.
*   **Tawar-menawar:** Skill **Perdagangan** kamu (berdasarkan Karisma) menentukan harga. Jika kamu jelek atau antipati, kamu akan ditipu.
*   **Menjual:** **Klik Kanan** pada objek di inventarismu untuk menjualnya ke penjaga toko atau seret objek tersebut ke arahnya.

---

## 🎒 MANAJEMEN INVENTARIS (Tetris)

*   **Berat:** Kamu punya batas beban (Kekuatan + Ukuran). Jika kamu membawa terlalu banyak rongsokan, kamu akan melambat dan kena penalti (Menimbun barang bukan temanmu).
*   **Panel:**
    *   **Perlengkapan:** Apa yang kamu kenakan.
    *   **Sabuk:** Akses cepat dalam pertempuran (menghabiskan lebih sedikit waktu menggunakan ramuan dari sini).
    *   **Tas:** Bagian dasar karung.
*   **Penggunaan Lancar:** Seret ramuan atau makanan langsung ke **wajahmu** (potret karakter) untuk mengonsumsinya seketika. Kamu juga bisa menggunakan menu konteks (klik kanan -> Gunakan).

---

## 🛠️ PENGATURAN TERAKHIR

Di menu **Pengaturan** kamu bisa mengutak-atik semuanya:
*   **🌍 Bahasa:** AI akan menerjemahkan seluruh game dan jawaban secara langsung. Mode poliglot aktif.
*   **👁️ Tampilan:** Ukuran font dan warna, supaya matamu tidak buta. Tepian neon dan bayangan lembut untuk imersi total.
*   **🧠 Pengaturan AI:** Ubah model, temperatur, dll. (Ingat apa yang kita lihat di awal manual tentang flag `--advanced` jika kamu termasuk orang yang ingin menyentuh semuanya).

---

## 🎭 KESULITAN DAN HUMOR (Kustomisasi Penderitaanmu)

Sebelum memulai, ingatlah bahwa AI tidak hanya bercerita, tetapi juga **menyesuaikan dunia** sesuai preferensimu. Parameter ini dipilih saat membuat dunia dan bersifat permanen untuk dunia tersebut:

*   **🎮 Kesulitan (Dikelola oleh AI):** Ini bukan sekadar pengali damage sederhana. Game memberi tahu AI: "Hei, kesulitannya begini, bertindaklah yang sesuai".
    *   **Mudah:** Kamu tidak akan pernah mati (atau hampir mustahil), situasi lebih sederhana, harga lebih murah, dan musuh lebih bodoh. AI akan menalar setiap adegan agar jalanmu mulus.
    *   **Normal:** Keseimbangan standar.
    *   **Tantangan:** AI akan kejam, harga selangit, dan kesalahan apa pun bisa jadi yang terakhir.

*   **🃏 Nada Humor:** Menentukan bagaimana AI berbicara kepadamu dan jenis kejadian apa yang terjadi. Meskipun setiap model punya cara sendiri menginterpretasikan konsep "humor", AI akan mencoba beradaptasi dengan apa yang kamu pilih... atau tidak:
    *   **Serius:** Narasi yang epik, gelap, dan formal.
    *   **Sarkastik:** AI akan menertawakan kegagalanmu, terus-menerus menyindir, dan menggunakan nada ironis.
    *   **Delirium (Gila):** Bersiaplah untuk hal yang absurd. Sapi terbang, situasi surealis, dan kekacauan total yang dikelola oleh logika AI yang paling bengkok.

---

## 🚧 Peringatan: Early Access

RolemIAster sedang dalam **pengembangan aktif**, dimasak dengan api kecil.
*   Kamu mungkin menemukan bug (atau "fitur tak terduga").
*   Saya menambahkan hal-hal baru setiap minggu.
*   Feedback kamu sangat berharga! Beri tahu saya apa yang kamu suka dan apa yang sangat kamu suka. (Jika kamu tidak menyukai sesuatu, beri tahu saya juga, tapi dengan penuh kasih sayang).

Sekarang pergilah, lempar inisiatif, dan ciptakan legendamu!

<!-- source_hash: f3494f05 -->