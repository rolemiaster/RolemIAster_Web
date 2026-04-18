# 🐉 Selamat Datang di RolemIAster!

Ambil dadumu (atau mouse-mu) dan bersiaplah untuk petualangan di mana satu-satunya batasan adalah seberapa liar imajinasimu! **RolemIAster** adalah permainan peran tak terbatas yang didukung oleh Kecerdasan Buatan yang memungkinkanmu menjadi pahlawan (atau penjahat) dalam ceritamu sendiri.

---

## ⚠️ PEMBERITAHUAN LEGAL (Bagian membosankan tapi penting)

**BACA INI ATAU KAMU AKAN MENGALAMI KEMARAHAN DADU:**

1.  **🤖 AI Lokal Terintegrasi:** RolemIAster membawa otaknya sendiri. Berfungsi **tanpa internet** dan tanpa perlu menyentuh hal aneh apa pun. Instal dan mainkan!
2.  **☁️ Awan Opsional:** Jika kamu lebih suka menghabiskan uang untuk AI eksternal (OpenAI, Gemini...), itu urusanmu dengan kartu kreditmu. Biayanya adalah tanggung jawabmu.
3.  **🎲 Kekacauan Generatif:** AI menciptakan cerita secara langsung. Jika narator menjadi gila dan mengatakan sapi hujan, jangan lihat kami. Pengembang tidak bertanggung jawab atas kegilaan yang dihasilkan oleh model.
4.  **🏗️ Akses Awal:** Ini masih dalam proses. Jika kamu menemukan bug, itu bukan kesalahan, itu adalah "fitur" kejutan! (Kirimkan umpan balik, tolong, itu sangat membantu kami).

---

## 🖥️ PERSYARATAN SISTEM DAN OTAK DIGITAL (AI)

RolemIAster berfungsi dengan **Kecerdasan Buatan Lokal**. Itu berarti PC-mu akan melakukan pekerjaan berat dalam berpikir. Kamu tidak memerlukan internet, tetapi kamu memerlukan kartu grafis yang bukan dari zaman dinosaurus. (Catatan: Jika kamarmu dingin, permainan ini berfungsi sebagai pemanas gratis).

### ⚙️ Konsep untuk Pemula

**VRAM (Memori Video)** adalah bensin AI.
*   Berkat **TurboQuant**, RolemIAster sekarang dapat mengingat **lebih dari 100.000 kata (token)** — hampir tiga kali lipat dari sebelumnya — tanpa merusak grafismu.
*   Jika GPU-mu kehabisan memori, permainan akan berjalan lebih lambat daripada siput asma.

---

### 📊 KATALOG MODEL (Pilih racunmu)

Kelola AI-mu di **Pengaturan → AI Lokal Terintegrasi → Kelola Model**.

#### 🏆 Keluarga Qwen 3.5 — Dilatih secara khusus untuk RolemIAster

Model-model ini telah dilatih dengan **Fine-Tuning Supervisado (SFT)** untuk menguasai aturan naratif permainan. Ini bukan model generik: mereka mengetahui kontrak JSON RolemIAster, NPC, inventaris, dan pertempuran dari memori.

| Model      | Ukuran   | VRAM Minimum | Tier | Putusan                                                                                   |
| :--------- | :------- | :----------- | :--- | :---------------------------------------------------------------------------------------- |
| **Qwen3.5-2B** | ~1.5GB   | **3GB**      | B    | ⚡ **Si Cepat.** Yang tercepat dari semuanya. Ideal untuk GPU dasar atau bermain tanpa GPU khusus. |
| **Qwen3.5-4B** | ~2.8GB   | **4GB**      | A    | ✅ **YANG SEIMBANG.** Kecepatan dan kualitas optimal. Model standar direkomendasikan untuk sebagian besar pemain. |
| **Qwen3.5-9B** | ~5.5GB   | **8GB**      | S    | 🌟 **Si Narator.** Narasi kaya dan koherensi superior. Untuk yang memiliki RTX 3070 atau lebih baik. |

---

### 🎮 PANDUAN PEMILIHAN CEPAT

| Kartu Grafismu | VRAM | Model yang Direkomendasikan | Hasil                                      |
| :------------- | :--- | :------------------------- | :----------------------------------------- |
| GTX 1050/1060 / Tanpa GPU | 4GB  | **Qwen3.5-2B**             | 🆗 Cukup tapi bisa dimainkan, sangat pas-pasan... |
| GTX 1070/1660 / RX 580 | 6GB  | **Qwen3.5-4B**             | ✅ Pengalaman yang baik                   |
| RTX 2060/3060 / RX 6600 | 8GB  | **Qwen3.5-4B**             | 🚀 Cepat dan akurat                       |
| RTX 3070/4060Ti / RX 6700 | 12GB | **Qwen3.5-9B**             | 🌟 Pengalaman ideal                      |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**             | 👑 Kualitas maksimal, respons super cepat |

**💡 Tips Pro:** Selalu sisakan **2GB VRAM bebas** untuk sistem operasi, atau Windows akan mulai merengek dan menutup program.

---

### 🚨 TOLONG! PC SAYA LAMBAT! (Masalah VRAM)

Jika permainan butuh waktu lebih lama untuk merespons daripada gebetanmu di WhatsApp, kemungkinan besar VRAM-mu habis.

**Gejala bahwa kamu terlalu berani:**
1.  **Model beralih ke RAM:** PC menggunakan memori biasa alih-alih memori grafis. Hasil: SANGAT LAMBAT.
2.  **Kelebihan sedikit (1-2GB):** Akan butuh 30-60 detik per respons.
3.  **Kelebihan sedang (3-5GB):** 2-5 menit. Kamu bisa pergi membuat kopi.
4.  **Kelebihan parah:** 10-30 menit. Tidak bisa dimainkan.

#### 🛡️ Protokol Darurat
Jika keadaan memburuk, ikuti langkah-langkah ini secara berurutan:

1.  **📉 Kurangi % VRAM:** Buka Pengaturan dan kurangi menjadi **85%**. Mulai ulang dan coba lagi.
2.  **🧹 Pembersihan:** Tutup browser itu dengan 40 tab terbuka. Mereka memakan memori-mu.
3.  **🛑 Batas 70%:** Jangan pernah turun di bawah **70%** alokasi VRAM.
    *   *Mengapa?* Karena AI membutuhkan ruang untuk "berpikir" (cache KV). Jika kamu memberinya kurang dari 70%, ia akan menjadi kosong dan memberikan kesalahan.
4.  **🔙 Mundur Taktis:** Jika tidak ada yang berhasil, turunkan ke model yang lebih kecil (dari 9B ke 4B, atau dari 4B ke 2B).

---

### ⚙️ PENGATURAN MODEL LANJUTAN ("Overclocking Maksimal")

> **MODE AHLI:** Jika kamu seorang pro dan ingin mengakses pengaturan model lanjutan (menambahkan model GGUF milikmu yang diunduh dari HuggingFace, mengubah lapisan, dll.), kamu harus memulai permainan dengan perintah: `--advanced`.

Bagi yang suka menyentuh tombol di **Pengaturan → AI Lokal Terintegrasi**:

| Opsi           | Fungsi                                          | Rekomendasi                                 |
| :------------- | :---------------------------------------------- | :------------------------------------------ |
| **Lapisan GPU** | Berapa banyak model yang dimuat ke grafis      | **-1** (Artinya "SEMUA". Jangan sentuh kecuali kamu tahu apa yang kamu lakukan) |
| **Konteks Maksimum** | "Memori jangka pendek" AI                    | **16384 - 32768** (Kurang dari ini AI akan amnesia) |
| **Suhu**       | Kreativitas vs Kegilaan                         | **0.7 - 0.8** (Lebih tinggi = lebih gila; Lebih rendah = lebih robotik) |
| **RAG Histori** | Mengingat hal-hal dari waktu yang lama         | **Ya** (Penting untuk kampanye panjang)    |
| **Cache Embeddings** | Mempercepat pencarian memori                 | **Ya** (Membuatnya lebih cepat)             |

---

### 🔧 PEMECAHAN MASALAH (Troubleshooting)

| Masalah        | Perbaikan                                                               |
| :------------- | :---------------------------------------------------------------------- |
| **AI Lambat / Lag** | Periksa apakah `GPU Layers` adalah -1. Tutup Chrome. Turunkan `Contexto Máximo`. |
| **Kesalahan Memori (OOM)** | Kurangi `Contexto Máximo` atau pilih model yang lebih kecil (3B). |
| **AI Mengigau / Berhalusinasi** | Turunkan `Temperatura` menjadi 0.6. Jika masih gila, mulai ulang aplikasi. |

---

### 🌐 PENYEDIA ALTERNATIF (Hanya untuk Ahli)

> **Catatan:** AI lokal yang disertakan dalam permainan sudah lebih dari cukup. Ini hanya untuk pengguna tingkat lanjut atau pemberani.

*   **Mesin Lokal Eksternal:**
    *   **Ollama / LM Studio:** Jika kamu sudah memiliki model kesukaanmu sendiri, kamu bisa menggunakannya.
*   **API Cloud (Berbayar):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Membutuhkan internet dan biaya.
    *   Atur di: **Pengaturan → AI → Tambah Penyedia Baru**.

---

### 🌍 CARA BERMAIN? (Multiverse dan Kamu)

Saat membuka permainan, kamu memiliki dua jalur:

1.  **🆕 Petualangan Baru**: Ciptakan legendamu dari nol. Permainan akan memintamu untuk **Nama, Profesi, Deskripsi Fisik, Deskripsi Psikologis, dan Latar Belakang/Alasan** ceritamu. Selain itu, kamu akan memilih **Tingkat Kesulitan** dan **Nada Humor** yang akan memandu kampanye.
2.  **💾 Lanjutkan Permainan**: RolemIAster **menyimpan secara real-time**. Di sini tidak ada "muat sebelum mati" atau kembali. Setiap keputusan, setiap kesalahan, dan setiap luka terukir dalam sejarah. Ini adalah **TANTANGAN**: apa yang kamu lakukan, sudah terjadi. Hidup dengan konsekuensinya... atau mati bersamanya.

RolemIAster bukanlah permainan yang terisolasi; ini adalah **Multiverse yang Persisten**.
*   **Dunia Tak Terbatas:** Ciptakan semestamu sendiri (**Fantasi Abad Pertengahan** atau **Cyberpunk**) dengan Lore-nya sendiri.
*   **Karakter Tak Terbatas:** Di dalam setiap dunia, kamu bisa memiliki pahlawan sebanyak yang kamu mau.
*   **Garis Waktu Bersama:** Hati-hati! Apa yang dilakukan satu karakter mempengaruhi dunia karakter lain. AI menyadari pahlawanmu yang lain dan akan mengenalinya sebagai penghuni dunia.
*   **AI dengan "Indra" (Super RAG):** Sistem RAG (Retrieval-Augmented Generation) bertindak sebagai "mata-mata" AI, memberinya ingatan tentang dunia, siapa yang menemanimu, di mana kamu berada, dan apa yang baru saja terjadi agar cerita 100% koheren.

### Antarmuka (Ruang kendali Anda)

*   **Panel Kiri (KAMU):** Lembar Karaktermu. Nyawa, mana, kemampuan, dan seberapa tampannya dirimu (Karisma).
*   **Panel Tengah (CERITA):**
    *   **Atas:** Di mana narator menceritakan apa yang terjadi.
    *   **Bawah:** Tombol keputusanmu dan kotak teks untuk menulis apa yang ingin kamu lakukan.
*   **Panel Kanan (BARANGMU):** Inventaris dan perlengkapan. Surga bagi si penimbun digital.

---

## 📜 ATURAN PERMAINAN (Ya, ada aturan)

RolemIAster menggunakan sistem d100 klasik dan kuat.

### 1. Atributmu (Apa yang mendefinisikanmu)
AI menghasilkan atributmu berdasarkan konteks, profesi, dan deskripsi yang kamu masukkan. Setelah dihasilkan, kamu memiliki **10 POIN EKSTRA** untuk dibagikan sesuka hatimu.
*   **Biaya Bertahap:** Menaikkan atribut hingga 14 membutuhkan 1 poin. Dari 15 hingga 16 membutuhkan 2 poin. Mulai dari 17 membutuhkan 3 poin! Pikirkan baik-baik di mana kamu menempatkan ototmu.

*   💪 **Kekuatan (Kek):** Kekuatan fisik murnimu. Mempengaruhi kerusakan jarak dekat dan kapasitas bebanmu.
*   ❤️ **Konstitusi (Kon):** Ketahananmu. Untuk menahan pukulan, penyakit, dan racun.
*   🐘 **Ukuran (Uk):** Rentang tubuhmu. Besar dan berat, atau kecil dan gesit.
*   🏃 **Kelincahan (Lin):** Ketangkasan, keahlian menembak, dan tidak tersandung kakimu sendiri.
*   🧠 **Kecerdasan (Kec):** Belajar, mengingat, dan memecahkan teka-teki.
*   🔮 **Kekuatan Batin (Kb):** Jiwamu, keberuntunganmu, kemauan keras, dan cadangan magismu.
*   😎 **Karisma (Kar):** Kepemimpinan, daya tarik, dan kemampuan menipu (atau merayu) orang.

### 2. Matematika Cepat (Karakteristik Turunan)
Mesin menghitung angka-angka ini secara otomatis berdasarkan atributmu:

*   🩸 **Nyawa (NY):** `CON * 10`. Jika mencapai 0... yah, kamu tahu. M.
*   ✨ **Mana (MN):** `(POD * 10) + INT`. Bahan bakar untuk trik sihirmu. Tanpa mana, tidak ada trik. (Seorang penyihir tanpa mana hanyalah seorang pria berjubah yang sedang cosplay).
*   ⚡ **Stamina (ST):** `((CON+FUE+DES)/3)*10 + POD`. Energimu untuk bertarung dan bergerak tanpa mati.
*   🧠 **Kemanusiaan (KM):** `(CON+POD) * 5`. (Hanya di Cyberpunk: Mengukur berapa banyak kemanusiaan yang tersisa sebelum kabel membuatmu gila).
*   ⚔️ **Poin Aksi (PA):** `(INT + DES) / 2`. Menentukan Inisiatifmu. Siapa yang menyerang lebih dulu, menyerang dua kali.

### 3. Kemampuanmu
Dimulai dengan nilai dasar (misalnya: Siluman = Lin + Kec) dan ditingkatkan dengan menggunakannya. Ini adalah persentase (%).

### 4. Penyelesaian Aksi (Dadu)
Ketika kamu mencoba melakukan sesuatu yang berisiko (memanjat, berbohong, menyerang...), AI akan memintamu melempar dadu. Permainan melempar **d100** tak terlihat. **(Ingat: Dadu membencimu. Ini pribadi).**

*   **Tujuanmu:** Mendapatkan angka **KURANG DARI ATAU SAMA DENGAN** tingkat kemampuanmu.
    *   *Contoh:* Kamu memiliki 45% dalam Memanjat.
    *   Kamu mendapat 30: ✅ **Berhasil**. Kamu memanjat seperti monyet.
    *   Kamu mendapat 80: ❌ **Gagal**. Kamu jatuh terbentur.
    *   **Kritis:** Mendapatkan kurang dari atau sama dengan **1/5 kemampuanmu** (atau 01). Epik! Kamu melakukan parkour luar biasa dengan salto.
    *   **Kesalahan:** **99 atau 100**. Dadu memutuskan hari ini bukan harimu. Celanamu melorot di tengah jalan dan kamu jatuh tersungkur.

---

## 💡 TIPS UNTUK TIDAK MATI (CEPAt)

*   **✍️ Jadilah Deskriptif:** Jangan hanya menulis "menyerang". Tulis: *"Saya mencoba menghindari kapaknya dengan berguling di tanah dan menusukkan belati saya ke pergelangan kakinya."* AI akan memberimu penghargaan.
*   **🧪 Bereksperimen:** Kamu tidak terbatas pada tombol. Tulis hal-hal gila! AI akan berimprovisasi.
*   **🎭 Bermain Peran:** Masuklah ke dalam peran. Baca deskripsi dan bertindaklah seperti karaktermu, bukan seperti dirimu dalam piyama.

---

## ⚔️ PERTEMPURAN (Ayo bertarung!)

Ketika kata-kata gagal, saatnya baku hantam. Pertarungan adalah **taktis** dan berjalan berdasarkan **Tick** (waktu).

### 🕹️ Cara kerjanya:
*   **Tick:** Setiap aksi membutuhkan waktu. Senjata berat lambat (mengonsumsi banyak tick). Belati cepat.
*   **Kecepatanmu:** Bergantung pada Poin Aksi (PA) Anda.

### Aksi Dasar:
*   **🗡️ Menyerang:** Pukul dengan apa pun yang sudah kamu keluarkan.
*   **🛡️ Memblokir:** Kamu bertahan. Mengurangi kerusakan tetapi menghabiskan Stamina.
*   **🏃 Melarikan diri:** Untuk pengecut (atau orang bijak yang ingin hidup).
*   **🏳️ Menyerah:** Jika kamu melihat kamu tidak akan menang, kamu bisa memohon belas kasihan.
*   **✨ Sihir / Cyberware:** Api, sinar laser, peretasan...

### 💬 Aksi Teks Bebas (BARU!)
Tidak suka tombol? Tulis apa pun yang ingin kamu lakukan seolah-olah kamu berbicara dengan Master secara langsung!
*   **Contoh:** *"Melemparkan bola api ke goblin"*, *"Mengeluarkan pedang rune saya"*, *"Menggunakan ramuan pada saya"*.
*   **Sutradara Adegan:** Pertempuran kini menjadi hidup. AI menghasilkan peristiwa lingkungan dan reaksi yang memperkaya narasi: balok yang jatuh, musuh yang mundur, obor yang jatuh. Medan perang tidak lagi statis!
*   **Jika AI tidak mengerti:** Ia akan memintamu untuk mengulanginya. Giliranmu TIDAK hilang!
*   **⚠️ Batasan:** Memindahkan item antar slot (memasang dari ransel, memuat amunisi) dilakukan dengan **Drag & Drop** di antarmuka, bukan melalui teks.

### ⚠️ ATURAN EMAS KESELAMATAN
**KELUARKAN SENJATAMU SEBELUM BERKELAHI!**
Mengeluarkan senjata di tengah pertempuran memakan waktu (Tick). Jika kamu tertangkap dengan pedang di sarungnya, kamu akan dihajar habis-habisan sambil mencoba mengeluarkannya dengan canggung. ATAU LEBIH BURUK!, JIKA KAMU MEMBAWA SENJATAMU DI RANSLEMU ALIH-ALIH DI SLOT PERALATANMU (Permisi sebentar, saya harus mengeluarkan pedang besar dari ransel, saya yakin saya memilikinya di suatu tempat... di suatu tempat...) 🤦‍♂️
👉 Klik pada label senjata yang terpasang (panel kanan) untuk mengeluarkannya. Akan menyala hijau.

Mencoba memindahkan senjata dalam pertempuran memakan waktu (Tick) dan dapat mengakibatkan serangan kejutan, selain itu sangat mungkin kamu akan kehilangan giliran, gagal karena gugup di depan kapak yang mendekati alis Anda, atau menjatuhkannya. (Mungkin ide yang buruk untuk menciptakan karakter dengan TDAH)

---

## ✨ SIHIR DAN SIBERNETIKA

Bergantung pada apakah duniamu adalah "Fantasi Abad Pertengahan" atau "Cyberpunk":

### 🧙‍♂️ Fantasi: Mantra
Apakah kamu seorang penyihir? Kamu bisa memantrakan peralatanmu.
1.  **Pelajari:** Kamu memerlukan mantra di buku mantra-mu.
2.  **Luncurkan (Seret & Lepas):** Seret mantra dari daftar ke item di inventaris-mu.
3.  **Biaya:** Menjaga mantra tetap aktif **mengonsumsi Mana per giliran**.
4.  **Peringatan:** Jika kamu kehabisan mana di tengah pertempuran, pedang api akan kembali menjadi besi berkarat.

### 🦾 Cyberpunk: Implan
Ingin mata dengan zoom atau lengan gorila?
1.  Cari **Tekno-Ahli Bedah** (NPC layanan).
2.  Bayar kreditnya (tidak ada yang gratis di masa depan).
3.  **Biaya Kemanusiaan:** Setiap implan mengambil sedikit jiwamu (**Kemanusiaan**).
    *   Jika kamu memasang terlalu banyak, kamu akan menjadi **Cyberpsikosis** (pemanggang roti berjalan pembunuh) dan kehilangan kendali atas karaktermu.

---

## 🛒 TOKO DAN LAYANAN (SIS)

Bicaralah dengan NPC untuk berdagang.
*   **AI Menyarankan, Kamu Memerintah:** Saat berbicara dengan pedagang atau penyembuh, AI akan menyarankan layanan mereka (memperbaiki, menjual, menyembuhkan), tetapi tombol **"Lihat Layanan"** akan muncul agar kamu dapat memutuskan kapan harus memasuki mode transaksi.
*   **Tawar-menawar:** Kemampuan **Perdagangan**mu (berdasarkan Karisma) menentukan harga. Jika kamu jelek atau tidak ramah, kamu akan ditipu.
*   **Menjual:** Klik Kanan pada item di inventaris-mu untuk menjualnya kepada pedagang atau seret ke atasnya.

---

## 🎒 MANAJEMEN INVENTARIS (Tetris)

*   **Berat:** Kamu memiliki batas beban (Kekuatan + Ukuran). Jika kamu membawa terlalu banyak barang rongsokan, kamu akan lambat dan terkena penalti (Diogenes bukanlah temanmu).
*   **Panel:**
    *   **Perlengkapan:** Apa yang kamu kenakan.
    *   **Sabuk:** Akses cepat dalam pertempuran (mengonsumsi lebih sedikit waktu untuk menggunakan ramuan dari sini).
    *   **Ransel:** Bagian bawah tas.
*   **Penggunaan Lancar:** Seret ramuan atau makanan langsung ke **wajahmu** (potret) untuk mengonsumsinya secara instan. Kamu juga dapat menggunakan menu konteks (klik kanan -> Gunakan).

---

## 🛠️ PENGATURAN AKHIR

Di menu **Pengaturan** kamu dapat menyesuaikan semuanya:
*   **🌍 Bahasa:** AI akan menerjemahkan semua permainan dan responsmu secara langsung. Mode poliglota aktif.
*   **👁️ Tampilan:** Ukuran font dan warna, agar matamu tidak buta. Tepi neon dan bayangan halus untuk imersi total.
*   **🧠 Pengaturan AI:** Ganti model, suhu, dll. (Ingat apa yang telah kita lihat di awal manual tentang flag `--advanced` jika kamu adalah tipe yang ingin menyentuh segalanya).

---

## 🎭 KESULITAN DAN HUMOR (Sesuaikan penderitaanmu)

Sebelum memulai, ingatlah bahwa AI tidak hanya bercerita, tetapi juga **menyesuaikan dunia** sesuai preferensimu. Parameter ini dipilih saat membuat dunia dan bersifat permanen untuk dunia tersebut:

*   **🎮 Kesulitan (Dikelola oleh AI):** Ini bukan sekadar pengganda kerusakan. Permainan memberi tahu AI: "Hei, tingkat kesulitannya sekian, bertindaklah sesuai."
    *   **Mudah:** Kamu tidak akan pernah mati (atau hampir mustahil), situasinya lebih sederhana, harganya lebih murah, dan musuh lebih kikuk. AI akan menalar setiap adegan agar jalanmu mulus seperti mawar.
    *   **Normal:** Keseimbangan standar.
    *   **Tantangan:** AI akan tanpa ampun, harga akan mencekik, dan setiap kesalahan bisa menjadi yang terakhir.

*   **🃏 Nada Humor:** Menentukan bagaimana AI berbicara kepadamu dan jenis peristiwa apa yang terjadi. Meskipun setiap model memiliki cara sendiri dalam menafsirkan konsep "humor", AI akan mencoba beradaptasi dengan pilihanmu... atau tidak:
    *   **Serius:** Narasi epik, gelap, dan formal.
    *   **Sarkastik:** AI akan menertawakan kesalahanmu, terus-menerus menyindir, dan menggunakan nada ironis.
    *   **Delirius:** Bersiaplah untuk hal yang absurd. Sapi terbang, situasi sureal, dan kekacauan total yang dikelola oleh logika AI yang paling bengkok.

---

## 🚧 Peringatan: Akses Awal

RolemIAster sedang dalam **pengembangan aktif**, dimasak perlahan.
*   Kamu mungkin menemukan bug (atau "fitur tak terduga").
*   Saya menambahkan hal-hal baru setiap minggu.
*   Umpan balikmu sangat berharga! Beri tahu saya apa yang kamu suka dan apa yang sangat kamu sukai. (Jika kamu tidak suka sesuatu, beri tahu saya juga, tetapi dengan sopan).

Sekarang pergilah, lempar inisiatif dan ciptakan legendamu!

<!-- source_hash: 9af75cff -->

<!-- source_hash: 4b8ac77b -->