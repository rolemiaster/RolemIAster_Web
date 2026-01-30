# 🐉 Selamat Datang di RoleMIAster!

Ambil dadu Anda (atau mouse Anda) dan bersiaplah untuk menjalani petualangan di mana satu-satunya batasan adalah seberapa liar imajinasi Anda! **RoleMIAster** adalah permainan peran tanpa akhir yang didukung oleh Kecerdasan Buatan yang memungkinkan Anda menjadi pahlawan (atau penjahat) dari kisah Anda sendiri.

---

## ⚠️ PEMBERITAHUAN HUKUM (Bagian yang membosankan tapi perlu)

**BACA ATAU ANDA AKAN MENDERITA KEMARAHAN DADU:**

1.  **🤖 AI Lokal Terintegrasi:** RoleMIAster membawa otak digitalnya sendiri. Berfungsi **tanpa internet** dan tanpa Anda harus menyentuh apa pun yang aneh. Instal dan mainkan!
2.  **☁️ Awan Opsional:** Jika Anda lebih suka menghabiskan uang untuk AI eksternal (OpenAI, Gemini...), terserah Anda dengan kartu kredit Anda. Biayanya adalah urusan Anda.
3.  **🎲 Kekacauan Generatif:** AI menciptakan cerita saat itu juga. Jika narator menjadi gila dan mengatakan sapi turun dari langit, jangan salahkan kami. Pengembang tidak bertanggung jawab atas kegilaan yang dihasilkan model.
4.  **🏗️ Akses Awal:** Ini sedang dalam pengerjaan. Jika Anda menemukan bug, itu bukan kegagalan, itu "fitur" kejutan! (Kirimkan umpan balik kepada kami, tolong, itu sangat membantu kami).

---

## 🖥️ PERSYARATAN SISTEM DAN OTAK DIGITAL (AI)

RoleMIAster berfungsi dengan **Kecerdasan Buatan Lokal**. Itu berarti PC Anda akan melakukan pekerjaan berat dalam berpikir. Anda tidak memerlukan internet, tetapi Anda memerlukan kartu grafis yang bukan dari zaman dinosaurus. (Catatan: Jika kamar Anda dingin, permainan ini berfungsi sebagai pemanas gratis).

### ⚙️ Konsep untuk Pemula

**VRAM (Memori Video)** adalah bensin AI.
*   RoleMIAster perlu "mengingat" **12.000 hingga 16.000 kata (token)** agar tidak kehilangan alur cerita.
*   Jika GPU Anda kehabisan memori, permainan akan berjalan lebih lambat daripada siput yang asma.

---

### 📊 KATALOG MODEL (Pilih racun Anda)

Kelola AI Anda di **Pengaturan → AI Lokal Terintegrasi → Kelola Model**.

#### 🏆 Keluarga Qwen 2.5 (Yang terbaik dari yang terbaik)

| Model      | Ukuran  | VRAM Minimal | Tingkat | Putusan                                                               |
|------------|---------|--------------|---------|-----------------------------------------------------------------------|
| **Qwen2.5-3B** | ~2.5GB  | **8GB**      | B       | 👶 **Magang.** Cukup, tetapi jangan minta dia menulis Shakespeare. Kadang-kadang bingung. |
| **Qwen2.5-7B** | ~5.5GB  | **12GB**     | A       | ✅ **YANG TERPILIH.** Seimbang, cerdas, dan cepat. Ini adalah model yang direkomendasikan secara default. |
| **Qwen2.5-14B**| ~10GB   | **16GB**     | S       | 🧐 **Profesor.** Narasi yang kaya, mendalam, dan dialog yang sangat alami. |
| **Qwen2.5-32B**| ~22GB   | **32GB**     | S+      | 👑 **Tingkat Dewa.** Anda memerlukan pesawat ruang angkasa (RTX 3090/4090) untuk menjalankannya. |

---

### 🎮 PANDUAN PEMILIHAN CEPAT

| Kartu Grafis Anda | VRAM  | Model yang Direkomendasikan | Hasil                                    |
|-------------------|-------|---------------------------|------------------------------------------|
| GTX 1050/1060     | 4GB   | Qwen2.5-3B                | 🆗 Cukup tetapi dapat dimainkan (Konteks rendah) |
| GTX 1070/1660     | 6GB   | Qwen2.5-3B                | 🆗 Berjalan dengan baik                    |
| RTX 2060/3060     | 8GB   | Qwen2.5-3B                | 🚀 Terbang                              |
| RTX 3070/4060Ti   | 12GB  | **Qwen2.5-7B**            | ✅ Pengalaman ideal                       |
| RTX 3090/4080     | 16-24GB| Qwen2.5-14B               | 🌟 Mewah                                   |
| RTX 4090          | 24GB  | Qwen2.5-32B               | 👑 Kualitas maksimum                      |

**💡 Tips Pro:** Selalu sisakan sekitar **2GB VRAM kosong** untuk sistem operasi, atau Windows akan mulai menangis dan menutup segalanya.

---

### 🚨 TOLONG! PC SAYA LAMBAT! (Masalah VRAM)

Jika permainan membutuhkan waktu lebih lama untuk merespons daripada gebetan Anda di WhatsApp, kemungkinan besar Anda kehabisan VRAM.

**Gejala bahwa Anda terlalu ambisius:**
1.  **Model dialihkan ke RAM:** PC menggunakan memori normal alih-alih kartu grafis. Hasil: SANGAT LAMBAT.
2.  **Luapan ringan (1-2GB):** Akan memakan waktu 30-60 detik per respons.
3.  **Luapan sedang (3-5GB):** 2-5 menit. Anda bisa pergi minum kopi.
4.  **Luapan parah:** 10-30 menit. Tidak dapat dimainkan.

#### 🛡️ Protokol Darurat
Jika keadaan memburuk, ikuti langkah-langkah ini secara berurutan:

1.  **📉 Kurangi % VRAM:** Buka Pengaturan dan turunkan ke **85%**. Mulai ulang dan coba.
2.  **🧹 Pembersihan:** Tutup peramban itu dengan 40 tab terbuka. Mereka memakan memori Anda.
3.  **🛑 Batas 70%:** Jangan pernah turun di bawah **70%** VRAM yang dialokasikan.
    *   *Mengapa?* Karena AI membutuhkan ruang untuk "berpikir" (cache KV). Jika Anda memberinya kurang dari 70%, ia akan menjadi kosong dan memberikan kesalahan.
4.  **🔙 Mundur Taktis:** Jika tidak ada yang berhasil, turunkan ke model yang lebih kecil (dari 7B ke 3B).

---

### ⚙️ PENGATURAN MODEL LANJUTAN

Bagi mereka yang suka menekan tombol di **Pengaturan → AI Lokal Terintegrasi**:

| Opsi            | Fungsi                                          | Rekomendasi                                              |
|-----------------|-------------------------------------------------|----------------------------------------------------------|
| **GPU Layers**  | Berapa banyak model yang dimuat ke grafis         | **-1** (Berarti "SEMUA". Jangan menyentuhnya kecuali Anda tahu apa yang Anda lakukan) |
| **Konteks Maks**| "Memori jangka pendek" AI                        | **16384 - 32768** (Kurang dari ini dan AI akan amnesia)       |
| **Suhu**        | Kreativitas vs Kegilaan                         | **0.7 - 0.8** (Lebih tinggi = lebih gila; Lebih rendah = lebih robotik) |
| **RAG Riwayat** | Mengingat hal-hal dari waktu lama               | **Ya** (Penting untuk kampanye panjang)                      |
| **Cache Embeddings** | Mempercepat pencarian ingatan            | **Ya** (Membuatnya lebih cepat)                         |

---

### 🔧 PEMECAHAN MASALAH (Troubleshooting)

| Masalah         | Perbaikan                                                                |
|-----------------|--------------------------------------------------------------------------|
| **AI Lambat / Lag** | Periksa apakah `GPU Layers` adalah -1. Tutup Chrome. Turunkan `Konteks Maks`. |
| **Kesalahan Memori (OOM)** | Kurangi `Konteks Maks` atau pilih model yang lebih kecil (3B).              |
| **AI Mengacau / Berhalusinasi** | Turunkan `Suhu` ke 0.6. Jika masih gila, mulai ulang aplikasi.            |

---

### 🌐 PENYEDIA ALTERNATIF (Hanya untuk Ahli)

> **Catatan:** AI lokal yang disertakan dengan permainan sudah lebih dari cukup. Ini hanya untuk pengguna tingkat lanjut atau pemberani.

*   **Mesin Lokal Eksternal:**
    *   **Ollama / LM Studio:** Jika Anda sudah memiliki model keren Anda sendiri, Anda dapat menggunakannya.
*   **API Awan (Berbayar):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Membutuhkan internet dan mengeluarkan uang.
    *   Konfigurasikan di: **Pengaturan → AI → Tambah Penyedia Baru**.

---

## 🎲 CARA BERMAIN?

Saat membuka permainan, Anda memiliki dua pilihan:

1.  **🆕 Petualangan Baru**: Ciptakan legenda Anda dari awal. Permainan akan memandu Anda untuk memilih ras, kelas, dunia, dan premis. (Jika hidup memberi Anda lemon... atau 3 dalam Kekuatan, jadilah Bard).
2.  **💾 Muat Permainan**: Lanjutkan tepat di mana Anda tinggalkan sebelum kematian yang memalukan itu. (Atau untuk memperbaiki "kesalahan perhitungan kecil" itu dengan naga).

### Antarmuka (Kokpit Anda)

*   **Panel Kiri (ANDA):** Lembar Karakter Anda. Kehidupan, mana, keterampilan, dan betapa tampannya Anda (Karisma).
*   **Panel Tengah (CERITA):**
    *   **Atas:** Di mana narator menceritakan apa yang terjadi.
    *   **Bawah:** Tombol keputusan Anda dan kotak teks untuk menulis apa yang ingin Anda lakukan.
*   **Panel Kanan (BARANG ANDA):** Inventaris dan perlengkapan. Surga bagi Diogenes digital.

---

## 📜 ATURAN PERMAINAN (Ya, ada aturan)

RoleMIAster menggunakan sistem d100 (dadu seratus sisi) klasik dan kuat.

### 1. Atribut Anda (Yang Mendefinisikan Anda)
Dihasilkan secara acak, seperti pada permainan meja tradisional!

*   💪 **Kekuatan (KUK):** Untuk memukul keras dan mengangkat batu.
*   ❤️ **Konstitusi (KON):** Untuk menahan pukulan, penyakit, dan racun.
*   🐘 **Ukuran (UK):** Besar dan berat, atau kecil dan gesit.
*   🏃 **Ketangkasan (TNG):** Kelincahan, keahlian menembak, dan tidak tersandung kaki sendiri.
*   🧠 **Kecerdasan (KEC):** Belajar, mengingat, dan memecahkan teka-teki.
*   🔮 **Kekuatan (KKU):** Jiwa, keberuntungan, kekuatan kemauan, dan sihir Anda.
*   😎 **Karisma (KAR):** Kepemimpinan, daya tarik, dan kemampuan untuk menipu orang.

### 2. Matematika Cepat (Karakteristik Turunan)
*   **Kehidupan (PV):** `(KON + UK) / 2`. Jika mencapai 0... yah, Anda tahu. M.
*   **Mana (PM):** Sama dengan KKU Anda. Tanpa mana, tidak ada trik. (Seorang penyihir tanpa mana hanyalah seorang pria berjubah yang sedang cosplay).
*   **Poin Aksi (PA):** `(KEC + TNG) / 2`. Menentukan Inisiatif Anda. Siapa yang menyerang lebih dulu, menyerang dua kali.

### 3. Keterampilan Anda
Dimulai dengan nilai dasar (misalnya: Stealth = TNG + KEC) dan meningkat dengan menggunakannya. Itu dalam persentase (%).

### 4. Resolusi Aksi (Dadu)
Ketika Anda mencoba melakukan sesuatu yang berisiko (memanjat, berbohong, menyerang...), AI akan meminta Anda untuk melempar dadu.
Permainan melempar **d100** yang tak terlihat. **(Ingat: Dadu membencimu. Ini pribadi).**

*   **Tujuan Anda:** Dapatkan **KURANG DARI ATAU SAMA DENGAN** keterampilan Anda.
    *   *Contoh:* Anda memiliki 45% dalam Memanjat.
    *   Anda melempar 30: ✅ **Berhasil**. Anda memanjat seperti monyet.
    *   Anda melempar 80: ❌ **Gagal**. Anda jatuh terpelanting.
    *   Anda melempar 01-05: ✨ **KRITIS!** Anda melakukan parkour epik dengan jungkir balik.
    *   Anda melempar 99-100: 💀 **PIFIA!** Celana Anda melorot di tengah jalan dan Anda jatuh tertelungkup.

---

## 💡 TIPS AGAR TIDAK MATI (CEPAT)

*   **✍️ Jadilah Deskriptif:** Jangan hanya menulis "menyerang". Tulis: *"Saya mencoba menghindari kapaknya dengan berguling di tanah dan menusukkan belati saya ke pergelangan kakinya"*. AI akan memberi Anda hadiah.
*   **🧪 Bereksperimenlah:** Anda tidak terbatas pada tombol. Tulis hal-hal gila! AI akan berimprovisasi.
*   **🎭 Bermain Peran:** Masuklah ke dalam peran. Baca deskripsinya dan bertindaklah seperti karakter Anda, bukan seperti Anda dalam piyama.

---

## ⚔️ PERTEMPURAN (Mari bertarung!)

Ketika kata-kata tidak lagi cukup, inilah saatnya untuk baku hantam. Pertempuran bersifat **taktis** dan berfungsi berdasarkan **Tik** (waktu).

### 🕹️ Cara kerjanya:
*   **Tik:** Setiap aksi memakan waktu. Senjata berat lambat (menghabiskan banyak tik). Belati cepat.
*   **Kecepatan Anda:** Bergantung pada Poin Aksi Anda (PA).

### Aksi Dasar:
*   **🗡️ Menyerang:** Serang dengan apa pun yang Anda pegang.
*   **🛡️ Menangkis:** Anda bertahan. Mengurangi kerusakan tetapi menghabiskan Stamina.
*   **🏃 Kabur:** Tindakan pengecut (atau orang bijak yang ingin hidup).
*   **🏳️ Menyerah:** Jika Anda melihat Anda tidak akan menang, Anda bisa memohon belas kasihan.
*   **✨ Sihir / Cyberware:** Api, sinar laser, peretasan...

### ⚠️ ATURAN EMAS KESELAMATAN
**TARIK SENJATAMU SEBELUM BERTARUNG!**
Menarik senjata di tengah pertempuran memakan waktu (Tik). Jika Anda tertangkap dengan pedang di sarungnya, Anda akan dipukuli habis-habisan saat mencoba mengeluarkannya dengan canggung. ATAU LEBIH BURUK LAGI!, JIKA ANDA MEMBAWA SENJATA ANDA DI TAS BUKAN DI SLOT PERALATAN (Permisi sebentar, saya perlu mengeluarkan pedang besar dari tas, saya pikir saya memilikinya di suatu tempat... di suatu tempat...) 🤦‍♂️
👉 Klik pada label senjata yang dilengkapi (panel kanan) untuk menariknya. Itu akan menyala hijau.

Mencoba memindahkan senjata dalam pertempuran memakan waktu (Tik) dan dapat mengakibatkan serangan kejutan, selain itu sangat mungkin Anda akan kehilangan giliran, gagal karena gugup menghadapi kapak yang mendekat ke alis Anda, atau menjatuhkannya ke tanah. (Mungkin bukan ide yang bagus untuk membuat karakter dengan ADHD)

---

## ✨ SIHIR DAN CIBERNETIK

Tergantung pada apakah dunia Anda adalah "Fantasi Abad Pertengahan" atau "Cyberpunk":

### 🧙‍♂️ Fantasi: Mantra
Apakah Anda seorang penyihir? Anda dapat merapal mantra pada peralatan Anda.
1.  **Pelajari:** Anda memerlukan mantra di buku mantra Anda.
2.  **Rapal (Seret & Lepas):** Seret mantra dari daftar Anda ke item di inventaris Anda.
3.  **Biaya:** Menjaga mantra aktif **menguras Mana per giliran**.
4.  **Peringatan:** Jika Anda kehabisan mana di tengah pertempuran, pedang api Anda kembali menjadi sepotong besi berkarat.

### 🦾 Cyberpunk: Implan
Ingin mata dengan zoom atau lengan gorila?
1.  Cari **Teknosirurgi** (NPC layanan).
2.  Bayar kreditnya (tidak ada yang gratis di masa depan).
3.  **Biaya Kemanusiaan:** Setiap implan menghilangkan sebagian dari jiwa Anda (**Kemanusiaan**).
    *   Jika Anda memasang terlalu banyak, Anda akan berubah menjadi **Cyberpsychosis** (pemanggang roti berkaki yang mematikan) dan kehilangan kendali atas karakter Anda.

---

## 🛒 TOKO DAN LAYANAN

Bicaralah dengan NPC untuk berdagang.
*   **Tawar-menawar:** Keterampilan **Perdagangan** Anda (berdasarkan Karisma) menentukan harga. Jika Anda jelek atau tidak ramah, Anda akan ditipu.
*   **Menjual:** Klik Kanan pada item di inventaris Anda untuk menjualnya ke pedagang.

---

## 🎒 MANAJEMEN INVENTARIS (Tetris)

*   **Berat:** Anda memiliki batas muatan (Kekuatan + Ukuran). Jika Anda membawa terlalu banyak barang rongsokan, Anda akan berjalan lambat dan dikenakan penalti (Diogenes bukan teman Anda).
*   **Panel:**
    *   **Perlengkapan:** Apa yang Anda kenakan.
    *   **Sabuk:** Akses cepat dalam pertempuran (memakan lebih sedikit waktu untuk menggunakan ramuan dari sini).
    *   **Ransel:** Bagian bawah tas.
*   **Penggunaan Cepat:** Seret ramuan atau makanan langsung ke **wajah Anda** (potret) untuk mengonsumsinya secara instan.

---

## 🛠️ PENGATURAN AKHIR

Di menu **Pengaturan**, Anda dapat mengubah semuanya:
*   **🌍 Bahasa:** AI akan menerjemahkan seluruh permainan dan respons secara real-time.
*   **👁️ Tampilan:** Ukuran font dan warna, agar tidak menjadi buta.
*   **🧠 Pengaturan AI:** Ubah model, suhu, dll.

---

## 🚧 Pemberitahuan: Akses Awal

RoleMIAster sedang dalam **pengembangan aktif**, dimasak perlahan.
*   Anda mungkin menemukan bug (atau "fitur tak terduga").
*   Saya menambahkan hal-hal baru setiap minggu.
*   Umpan balik Anda sangat berharga! Beri tahu saya apa yang Anda sukai dan apa yang sangat Anda sukai.

Sekarang pergi, lempar inisiatif, dan ciptakan legenda Anda!

<!-- source_hash: 2511f352 -->