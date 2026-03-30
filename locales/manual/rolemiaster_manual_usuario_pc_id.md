# 🐉 Selamat Datang di RolemIAster!

Ambil dadu Anda (atau mouse Anda) dan bersiaplah untuk mengalami petualangan di mana satu-satunya batasan adalah seberapa liar imajinasi Anda! **RolemIAster** adalah permainan peran tanpa akhir yang didukung oleh Kecerdasan Buatan yang memungkinkan Anda menjadi pahlawan (atau penjahat) dalam cerita Anda sendiri.

---

## ⚠️ PEMBERITAHUAN HUKUM (Bagian yang membosankan tapi perlu)

**BACA ATAU ANDA AKAN MENDERITA KEMARAHAN DADU:**

1.  **🤖 AI Lokal Terintegrasi:** RolemIAster memiliki otaknya sendiri. Ia berfungsi **tanpa internet** dan tanpa Anda perlu repot. Instal dan mainkan!
2.  **☁️ Cloud Opsional:** Jika Anda lebih suka mengeluarkan uang untuk AI eksternal (OpenAI, Gemini...), terserah Anda dengan kartu kredit Anda. Biaya adalah urusan Anda.
3.  **🎲 Kekacauan Generatif:** AI menciptakan cerita saat berjalan. Jika narator menjadi gila dan mengatakan sapi turun dari langit, jangan tatap kami. Pengembang tidak bertanggung jawab atas kegilaan yang dihasilkan oleh model.
4.  **🏗️ Akses Awal:** Ini sedang dalam pengerjaan. Jika Anda menemukan bug, itu bukan kesalahan, itu adalah "fitur" kejutan! (Kirimkan umpan balik kepada kami, tolong, itu sangat membantu kami).

---

## 🖥️ PERSYARATAN SISTEM DAN OTAK DIGITAL (AI)

RolemIAster berfungsi dengan **Kecerdasan Buatan Lokal**. Ini berarti PC Anda akan melakukan pekerjaan berat berpikir. Anda tidak memerlukan internet, tetapi Anda memerlukan kartu grafis yang bukan dari zaman dinosaurus. (Catatan: Jika ruangan Anda dingin, permainan ini berfungsi sebagai pemanas gratis).

### ⚙️ Konsep untuk pemula

**VRAM (Memori Video)** adalah bensin AI.
*   RolemIAster perlu "mengingat" **12.000 hingga 16.000 kata (token)** agar tidak kehilangan alur cerita.
*   Jika GPU Anda kehabisan memori, permainan akan berjalan lebih lambat daripada siput yang asma.

---

### 📊 KATALOG MODEL (Pilih racun Anda)

Kelola AI Anda di **Pengaturan → AI Lokal Terintegrasi → Kelola Model**.

#### 🏆 Keluarga Qwen 3.5 — Dilatih secara khusus untuk RolemIAster

Model-model ini telah dilatih dengan **Fine-Tuning Supervisi (SFT)** untuk menguasai aturan naratif permainan. Ini bukan model generik: mereka mengetahui kontrak JSON RolemIAster, NPC, inventaris, dan pertempuran dari memori.

| Model        | Ukuran | VRAM Minimal | Tingkat | Keputusan |
|--------------|--------|--------------|---------|-----------|
| **Qwen3.5-2B** | ~1.5GB | **3GB**      | B       | ⚡ **Si Cepat.** Paling cepat dari semuanya. Ideal untuk GPU dasar atau bermain tanpa GPU khusus. |
| **Qwen3.5-4B** | ~2.8GB | **4GB**      | A       | ✅ **SI SEIMBANG.** Kecepatan dan kualitas optimal. Model standar direkomendasikan untuk sebagian besar pemain. |
| **Qwen3.5-9B** | ~5.5GB | **8GB**      | S       | 🌟 **Si Narator.** Narasi kaya dan koherensi superior. Untuk yang memiliki RTX 3070 atau lebih baik. |

---

### 🎮 PANDUAN PEMILIHAN CEPAT

| Kartu Grafis Anda | VRAM | Model yang Direkomendasikan | Hasil             |
|-------------------|------|----------------------------|-------------------|
| GTX 1050/1060 / Tanpa GPU | 2-4GB | **Qwen3.5-2B**             | 🆗 Pas tapi bisa dimainkan |
| GTX 1070/1660 / RX 580 | 4-6GB | **Qwen3.5-4B**             | ✅ Pengalaman sangat baik |
| RTX 2060/3060 / RX 6600 | 6-8GB | **Qwen3.5-4B**             | 🚀 Cepat dan akurat |
| RTX 3070/4060Ti / RX 6700 | 8-12GB | **Qwen3.5-9B**             | 🌟 Pengalaman ideal |
| RTX 3090/4080/4090 | 16GB+ | **Qwen3.5-9B**             | 👑 Kualitas maksimal, respons ultra-cepat |

**💡 Tips Pro:** Selalu sisakan **2GB VRAM kosong** untuk sistem operasi, atau Windows akan mulai menangis dan menutup program.

---

### 🚨 TOLONG! PC SAYA LAMBAT! (Masalah VRAM)

Jika permainan membutuhkan waktu lebih lama untuk merespons daripada gebetan Anda di WhatsApp, kemungkinan besar Anda kehabisan VRAM.

**Gejala bahwa Anda terlalu berani:**
1.  **Model dialihkan ke RAM:** PC menggunakan memori normal alih-alih grafis. Hasil: SANGAT LAMBAT.
2.  **Overflow ringan (1-2GB):** Membutuhkan waktu 30-60 detik per respons.
3.  **Overflow sedang (3-5GB):** 2-5 menit. Anda bisa pergi minum kopi.
4.  **Overflow parah:** 10-30 menit. Tidak bisa dimainkan.

#### 🛡️ Protokol Darurat
Jika keadaan memburuk, ikuti langkah-langkah ini secara berurutan:

1.  **📉 Kurangi % VRAM:** Buka Pengaturan dan kurangi ke **85%**. Mulai ulang dan coba.
2.  **🧹 Bersihkan:** Tutup browser itu dengan 40 tab terbuka. Mereka memakan memori Anda.
3.  **🛑 Batas 70%:** Jangan pernah turun di bawah **70%** VRAM yang dialokasikan.
    *   *Mengapa?* Karena AI membutuhkan ruang untuk "berpikir" (cache KV). Jika Anda memberikannya kurang dari 70%, ia akan menjadi kosong dan memberikan kesalahan.
4.  **🔙 Mundur Taktis:** Jika tidak ada yang berhasil, turun ke model yang lebih kecil (dari 9B ke 4B, atau dari 4B ke 2B).

---

### ⚙️ PENGATURAN MODEL LANJUTAN ("Freek Maksimal")

> **MODE EKSPER:** Jika Anda seorang profesional dan ingin mengakses pengaturan model lanjutan (menambahkan model GGUF Anda sendiri yang diunduh dari HuggingFace, menyesuaikan layer, dll.), Anda harus memulai permainan dengan perintah: `--advanced`.

Bagi Anda yang suka memencet tombol di **Pengaturan → AI Lokal Terintegrasi**:

| Opsi             | Fungsi                                                                                              | Rekomendasi                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Lapisan GPU**  | Berapa banyak model yang dimuat ke grafis                                                              | **-1** (Artinya "SEMUANYA". Jangan disentuh kecuali Anda tahu apa yang Anda lakukan) |
| **Konteks Maksimum** | "Memori jangka pendek" AI                                                                            | **16384 - 32768** (Kurang dari ini dan AI akan amnesia)                         |
| **Suhu**         | Kreativitas vs Kegilaan                                                                             | **0.7 - 0.8** (Lebih tinggi = lebih gila; Lebih rendah = lebih robotik)         |
| **RAG Riwayat**  | Mengingat hal-hal dari lama                                                                         | **Ya** (Penting untuk kampanye panjang)                                         |
| **Cache Embeddings** | Mempercepat pencarian ingatan                                                                       | **Ya** (Membuatnya lebih cepat)                                                 |

---

### 🔧 PEMECAHAN MASALAH (Troubleshooting)

| Masalah          | Perbaikan                                                                                                               |
|------------------|-------------------------------------------------------------------------------------------------------------------------|
| **AI Lambat / Lag** | Verifikasi bahwa `GPU Layers` adalah -1. Tutup Chrome. Kurangi `Contexto Máximo`. |
| **Kesalahan Memori (OOM)** | Kurangi `Contexto Máximo` atau pilih model yang lebih kecil (3B).                                    |
| **AI Delusi / Berhalusinasi** | Kurangi `Temperatura` menjadi 0.6. Jika masih gila, mulai ulang aplikasi.                       |

---

### 🌐 PENYEDIA ALTERNATIF (Hanya untuk Ahli)

> **Catatan:** AI lokal yang disertakan dalam permainan sudah lebih dari cukup. Ini hanya untuk pengguna tingkat lanjut atau yang pemberani.

*   **Mesin Lokal Eksternal:**
    *   **Ollama / LM Studio:** Jika Anda sudah memiliki model favorit Anda sendiri, Anda dapat menggunakannya.
*   **API Cloud (Berbayar):**
    *   **OpenAI (GPT), Gemini, Claude, DeepSeek:** Memerlukan internet dan mengeluarkan uang.
    *   Konfigurasikan di: **Pengaturan → AI → Tambah Penyedia Baru**.

---

### 🌍 CARA BERMAIN? (Multiverse dan Anda)

Saat membuka permainan, Anda memiliki dua jalur:

1.  **🆕 Petualangan Baru**: Ciptakan legenda Anda dari awal. Permainan akan meminta Anda **Nama, Profesi, Deskripsi Fisik, Deskripsi Psikologis, dan Latar Belakang/Alasan** cerita Anda. Selain itu, Anda akan memilih **Tingkat Kesulitan** dan **Nada Humor** yang akan memandu kampanye.
2.  **💾 Lanjutkan Permainan**: RolemIAster **menyimpan secara real-time**. Tidak ada "memuat sebelum mati" atau kembali. Setiap keputusan, setiap kesalahan, dan setiap luka terukir dalam sejarah. Ini adalah **TANTANGAN**: apa yang Anda lakukan, sudah terjadi. Hiduplah dengan konsekuensinya... atau matilah bersamanya.

RolemIAster bukan sekadar permainan terpisah; ini adalah **Multiverse Persisten**.
*   **Dunia Tanpa Batas:** Ciptakan alam semesta Anda sendiri (**Fantasi Abad Pertengahan** atau **Cyberpunk**) dengan Lore-nya sendiri.
*   **Karakter Tanpa Batas:** Di dalam setiap dunia, Anda dapat memiliki semua pahlawan yang Anda inginkan.
*   **Garis Waktu Bersama:** Hati-hati! Apa yang dilakukan satu karakter memengaruhi dunia yang lain. AI sadar akan pahlawan Anda yang lain dan akan mengenali mereka sebagai penghuni dunia.
*   **AI dengan "Indra" (RAG Super):** Sistem RAG (Retrieval-Augmented Generation) bertindak sebagai "tukang gosip" AI, memberinya ingatan tentang dunia, siapa yang menemaninya, di mana dia berada, dan apa yang baru saja terjadi agar cerita menjadi 100% koheren.

### Antarmuka (Ruang kemudi Anda)

*   **Panel Kiri (ANDA):** Lembar Karakter Anda. Kehidupan, mana, kemampuan, dan betapa tampannya Anda (Karisma).
*   **Panel Tengah (CERITA):**
    *   **Atas:** Di mana narator menceritakan apa yang terjadi.
    *   **Bawah:** Tombol keputusan Anda dan kotak teks untuk menulis apa yang ingin Anda lakukan.
*   **Panel Kanan (BARANG ANDA):** Inventaris dan peralatan. Surga bagi Diogenes digital.

---

## 📜 ATURAN PERMAINAN (Ya, ada aturannya)

RolemIAster menggunakan sistem d100 (dadu seratus sisi) yang klasik dan kuat.

### 1. Atribut Anda (Apa yang mendefinisikan Anda)
AI menghasilkan atribut Anda berdasarkan konteks, profesi, dan deskripsi yang Anda masukkan. Setelah dihasilkan, Anda memiliki **10 POIN EKSTRA** untuk dibagikan sesuai keinginan Anda.
*   **Biaya Bertingkat:** Menaikkan atribut hingga 14 membutuhkan 1 poin. Dari 15 hingga 16 membutuhkan 2 poin. Mulai dari 17 membutuhkan 3 poin! Pikirkan baik-baik ke mana Anda menempatkan otot Anda.

*   💪 **Kekuatan (Kek):** Kekuatan fisik murni Anda. Mempengaruhi kerusakan jarak dekat dan kapasitas beban Anda.
*   ❤️ **Konstitusi (Kon):** Ketahanan Anda. Untuk menahan pukulan, penyakit, dan racun.
*   🐘 **Ukuran (Uk):** Lebar Anda. Besar dan berat, atau kecil dan licin.
*   🏃 **Kelincahan (Lin):** Ketangkasan, bidikan, dan tidak tersandung kaki Anda sendiri.
*   🧠 **Kecerdasan (Kec):** Belajar, mengingat, dan memecahkan teka-teki.
*   🔮 **Kekuatan (Pk):** Jiwa Anda, keberuntungan Anda, kekuatan kemauan, dan cadangan sihir Anda.
*   😎 **Karisma (Kar):** Kepemimpinan, daya tarik, dan kemampuan untuk menipu (atau merayu) orang.

### 2. Matematika Cepat (Karakteristik Turunan)
Mesin menghitung angka-angka ini secara otomatis berdasarkan atribut Anda:

*   🩸 **Kehidupan (KP):** `CON * 10`. Jika mencapai 0... yah, Anda tahu. M.
*   ✨ **Mana (MP):** `(POD * 10) + INT`. Bahan bakar untuk trik sihir Anda. Tanpa mana, tidak ada trik. (Seorang penyihir tanpa mana hanyalah pria berjubah yang sedang cosplay).
*   ⚡ **Stamina (ST):** `((CON+FUE+DES)/3)*10 + POD`. Energi Anda untuk bertarung dan bergerak tanpa mati saat mencoba.
*   🧠 **Kemanusiaan (Km):** `(CON+POD) * 5`. (Hanya di Cyberpunk: Mengukur berapa banyak kemanusiaan yang tersisa sebelum kabel membuat Anda gila).
*   ⚔️ **Poin Aksi (PA):** `(INT + DES) / 2`. Menentukan Inisiatif Anda. Siapa yang memukul lebih dulu, memukul dua kali.

### 3. Kemampuan Anda
Dimulai dengan nilai dasar (misalnya, Siluman = Lin + Kec) dan meningkat dengan menggunakannya. Ini adalah persentase (%).

### 4. Penyelesaian Tindakan (Dadu)
Ketika Anda mencoba melakukan sesuatu yang berisiko (memanjat, berbohong, menyerang...), AI akan meminta lemparan. Permainan melempar **d100** tak terlihat. **(Ingat: Dadu membenci Anda. Ini pribadi).**

*   **Tujuan Anda:** Mendapatkan angka **KURANG DARI ATAU SAMA DENGAN** tingkat kemampuan Anda.
    *   *Contoh:* Anda memiliki 45% dalam Memanjat.
    *   Anda mendapatkan 30: ✅ **Berhasil**. Anda naik seperti monyet.
    *   Anda mendapatkan 80: ❌ **Gagal**. Anda jatuh terjerembab.
    *   **Kritis:** Mendapatkan kurang dari atau sama dengan **1/5 dari kemampuan Anda** (atau 01). Epik! Anda melakukan parkour luar biasa dengan salto.
    *   **Kesalahan:** **99 atau 100**. Dadu telah memutuskan bahwa hari ini bukan hari Anda. Celana Anda melorot di tengah jalan dan Anda jatuh terjerembab.

---

## 💡 TIPS UNTUK TIDAK MATI (CEPAT)

*   **✍️ Jadilah Deskriptif:** Jangan hanya menulis "saya menyerang". Tulis: *"Saya mencoba menghindari kapaknya dengan berguling di tanah dan menusukkan belati saya ke pergelangan kakinya."* AI akan memberi Anda imbalan.
*   **🧪 Eksperimen:** Anda tidak terbatas pada tombol. Tulis hal-hal gila! AI akan berimprovisasi.
*   **🎭 Bermain Peran:** Masuki peran tersebut. Baca deskripsinya dan bertindaklah seperti karakter Anda, bukan seperti Anda dalam piyama.

---

## ⚔️ PERTEMPURAN (Persenjataan!)

Ketika kata-kata gagal, tibalah waktunya untuk adu jotos. Pertarungan **taktis** dan berjalan per **Tick** (waktu).

### 🕹️ Cara kerjanya:
*   **Tick:** Setiap tindakan membutuhkan waktu. Senjata berat lambat (menggunakan banyak tick). Belati cepat.
*   **Kecepatan Anda:** Tergantung pada Poin Aksi Anda (PA).

### Tindakan Dasar:
*   **🗡️ Menyerang:** Pukul dengan apa pun yang telah Anda siapkan.
*   **🛡️ Menangkis:** Anda bertahan. Mengurangi kerusakan tetapi menghabiskan Stamina.
*   **🏃 Kabur:** Untuk pengecut (atau orang bijak yang ingin hidup).
*   **🏳️ Menyerah:** Jika Anda melihat Anda tidak akan menang, Anda bisa memohon ampun.
*   **✨ Sihir / Cyberware:** Api, sinar laser, peretasan...

### 💬 Tindakan Teks Bebas (BARU!)
Tidak suka tombol? Tulis apa pun yang ingin Anda lakukan seolah-olah Anda berbicara dengan Master manusia sejati!
*   **Contoh:** *"Melemparkan bola api ke goblin"*, *"Menarik pedang rune saya"*, *"Menggunakan ramuan pada saya"*.
*   **Sutradara Adegan:** Pertarungan sekarang menjadi hidup. AI menghasilkan peristiwa lingkungan dan reaksi yang memperkaya narasi: balok yang jatuh, musuh yang mundur, obor yang jatuh. Medan perang tidak lagi statis!
*   **Jika AI tidak mengerti:** Ia akan meminta Anda untuk memformulasikan ulang. Giliran Anda TIDAK hilang!
*   **⚠️ Batasan:** Memindahkan item antar slot (melengkapi dari ransel, memuat amunisi) dilakukan dengan **Drag & Drop** di antarmuka, bukan melalui teks.

### ⚠️ ATURAN EMAS KESELAMATAN
**SIAPKAN SENJATA SEBELUM BERTARUNG!**
Menarik senjata di tengah pertarungan memakan waktu (Tick). Jika Anda tertangkap dengan pedang di sarungnya, Anda akan dipukuli habis-habisan saat mencoba mengeluarkannya dengan kikuk. ATAU LEBIH BURUK LAGI!, JIKA ANDA MEMBAWA SENJATA DI TAS ANDA BUKAN DI SLOT PERALATAN (Permisi sebentar, saya harus mengeluarkan pedang besar dari ransel, saya yakin saya punya di suatu tempat... entah di mana...) 🤦‍♂️
👉 **Klik pada label senjata yang dilengkapi** (panel kanan) untuk menyiapkannya. Ia akan menyala hijau.

Mencoba memindahkan senjata dalam pertarungan memakan waktu (Tick) dan dapat mengakibatkan serangan kejutan, selain itu sangat mungkin Anda kehilangan giliran, gagal karena gugup dari kapak yang mendekati alis Anda, atau senjata jatuh ke tanah. (Mungkin ide yang buruk untuk menciptakan karakter dengan ADHD)

---

## ✨ SIHIR DAN SIBERNETIKA

Tergantung pada apakah dunia Anda adalah "Fantasi Abad Pertengahan" atau "Cyberpunk":

### 🧙‍♂️ Fantasi: Mantra
Apakah Anda seorang penyihir? Anda dapat merapal mantra pada perlengkapan Anda.
1.  **Pelajari:** Anda memerlukan mantra dalam buku mantra Anda.
2.  **Rapal (Drag & Drop):** Seret mantra dari daftar Anda ke item di inventaris Anda.
3.  **Biaya:** Menjaga mantra aktif **menghabiskan Mana per giliran**.
4.  **Peringatan:** Jika Anda kehabisan mana di tengah pertarungan, pedang api akan kembali menjadi sepotong besi berkarat.

### 🦾 Cyberpunk: Implan
Ingin mata zoom atau lengan gorila?
1.  Cari **Tekno-Ahli Bedah** (NPC layanan).
2.  Bayar kreditnya (tidak ada yang gratis di masa depan).
3.  **Biaya Kemanusiaan:** Setiap implan mengambil sepotong jiwa Anda (**Kemanusiaan**).
    *   Jika Anda terlalu banyak memasang, Anda akan berubah menjadi **Cyberpsychosis** (pemanggang roti berkaki pembunuh) dan kehilangan kendali atas karakter Anda.

---

## 🛒 TOKO DAN LAYANAN (SIS)

Bicaralah dengan NPC untuk berdagang.
*   **AI Menyarankan, Anda Memutuskan:** Saat Anda berbicara dengan pedagang atau penyembuh, AI akan menyarankan layanan mereka (perbaikan, penjualan, penyembuhan), tetapi akan muncul tombol **"Lihat Layanan"** agar Anda memutuskan kapan memasuki mode transaksi.
*   **Tawar-menawar:** Kemampuan **Perdagangan** Anda (berdasarkan Karisma) menentukan harga. Jika Anda jelek atau tidak ramah, Anda akan ditipu.
*   **Menjual:** **Klik Kanan** pada item di inventaris Anda untuk menjualnya kepada penjaga toko atau seret ke arahnya.

---

## 🎒 MANAJEMEN INVENTARIS (Tetris)

*   **Berat:** Anda memiliki batas beban (Kekuatan + Ukuran). Jika Anda membawa terlalu banyak besi tua, Anda akan lambat dan terkena penalti (Digenos bukanlah teman Anda).
*   **Panel:**
    *   **Peralatan:** Apa yang Anda kenakan.
    *   **Sabuk:** Akses cepat dalam pertarungan (membutuhkan lebih sedikit waktu untuk menggunakan ramuan dari sini).
    *   **Ransel:** Bagian bawah tas.
*   **Penggunaan Lancar:** Seret ramuan atau makanan langsung ke **wajah Anda** (potret) untuk mengonsumsinya secara instan. Anda juga dapat menggunakan menu konteks (klik kanan -> Gunakan).

---

## 🛠️ PENGATURAN AKHIR

Di menu **Pengaturan** Anda dapat mengubah semuanya:
*   **🌍 Bahasa:** AI akan menerjemahkan seluruh permainan dan respons secara real-time. Mode poliglota diaktifkan.
*   **👁️ Penampilan:** Ukuran font dan warna, agar tidak menjadi buta. Tepi neon dan bayangan halus untuk imersi total.
*   **🧠 Pengaturan AI:** Ganti model, suhu, dll. (Ingat apa yang telah kita lihat di awal manual tentang flag `--advanced` jika Anda adalah orang yang ingin mengubah segalanya).

---

## 🎭 KESULITAN DAN HUMOR (Sesuaikan penderitaan Anda)

Sebelum memulai, ingatlah bahwa AI tidak hanya menceritakan, tetapi juga **menyesuaikan dunia** sesuai dengan preferensi Anda. Parameter ini dipilih saat membuat dunia dan bersifat permanen untuk dunia tersebut:

*   **🎮 Kesulitan (Dikelola oleh AI):** Ini bukan sekadar pengganda kerusakan. Permainan memberi tahu AI: "Hei, kesulitannya ini, bertindaklah sesuai."
    *   **Mudah:** Anda tidak akan pernah mati (atau hampir tidak mungkin), situasinya lebih sederhana, harga lebih murah, dan musuh lebih kikuk. AI akan menalar setiap adegan agar jalan Anda mulus.
    *   **Normal:** Keseimbangan standar.
    *   **Tantangan:** AI akan tanpa henti, harga mencekik, dan setiap kesalahan bisa menjadi yang terakhir.

*   **🃏 Nada Humor:** Menentukan bagaimana AI berbicara kepada Anda dan jenis peristiwa apa yang terjadi. Meskipun setiap model memiliki cara menafsirkan konsep "humor", AI akan mencoba beradaptasi dengan apa yang Anda pilih... atau tidak:
    *   **Serius:** Narasi epik, gelap, dan formal.
    *   **Sarkastik:** AI akan menertawakan kesalahan Anda, terus-menerus mencela Anda, dan menggunakan nada ironis.
    *   **Gila:** Bersiaplah untuk absurditas. Sapi terbang, situasi sureal, dan kekacauan total yang dikelola oleh logika AI yang paling bengkok.

---

## 🚧 Peringatan: Akses Awal

RolemIAster dalam **pengembangan aktif**, dimasak perlahan.
*   Anda mungkin menemukan bug (atau "fitur tak terduga").
*   Saya menambahkan hal-hal baru setiap minggu.
*   Umpan balik Anda berharga! Beri tahu saya apa yang Anda suka dan apa yang sangat Anda sukai. (Jika Anda tidak menyukai sesuatu, beri tahu saya juga, tetapi dengan lembut).

Sekarang pergi, lempar inisiatif dan ciptakan legenda Anda!

<!-- source_hash: 9af75cff -->