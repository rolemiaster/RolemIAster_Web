****************************************************************************************************
24/02/2026 12:32 - Generasi Gambar AI, Peningkatan Naratif, dan Kontrol - Beta_v058
****************************************************************************************************
- What's New (ID):
  **🧠 Evolusi Otak: Halo, Qwen 3**
  Saya memigrasikan mesin game agar bisa memaksimalkan generasi baru model Qwen3. Model lama seri 2.5 ikut mengawali perjalanan RolemIAster, tetapi kini saatnya meninggalkan kejayaan lama. Lompatan kuantitatif dalam generasi cerita ini menghasilkan prosa yang lebih imersif, aturan yang jauh lebih ketat, dan karakter yang lebih konsisten. Siapkan kartu grafis kalian, karena Sang Game Master baru saja naik level.

  **Baru: Fase kedua Generasi Gambar AI**
  - 🎨 **Duniamu dalam Gambar:** Saya telah mengintegrasikan sistem awal generasi gambar berbasis Kecerdasan Buatan. Saat Anda bermain, sistem akan mencoba menghasilkan potret dan pemandangan yang menyertai suasana permainan Anda.
  - 🖼️ **Latar Belakang Dinamis:** Gambar dihasilkan di latar belakang tanpa menghentikan permainan. Anda akan melihat gambar muncul secara bertahap di latar belakang, pada kartu karakter, dan di Codex.
  - 🧹 **Manajemen Gambar:** Panel baru untuk melihat dan menghapus gambar yang dihasilkan yang tidak Anda sukai.
  
  **Peningkatan dalam Generasi Karakter:**
  - ⚙️ **Pembuatan Acak yang Lebih Solid:** Saya telah menyatukan dan meningkatkan mesin aturan yang digunakan AI untuk membuat karakter dari nol, menjamin inventaris yang lebih logis (5 hingga 10 objek yang koheren) dan lembar karakter yang lebih seimbang.
  - 🧠 **Otak Terbagi:** AI kini lebih memahami kapan harus "menciptakan" karakter dari awal dan kapan harus membatasi diri untuk mengekstrak data dari biografi yang telah Anda tulis sendiri.
  - ⚡ **Kecepatan Sesuai Keinginanmu:** Bagian baru di Pengaturan Visual. Pilih antara "Cepat" (1 langkah), "Sedang" (2 langkah), atau "Tinggi" (4 langkah) untuk menyesuaikan waktu generasi dengan daya perangkat Anda.
  - 🛠️ **Optimalisasi Teknis:** Model AI untuk gambar dimuat ke dalam **RAM (Memory)** dan diproses melalui **CPU**, tanpa memakan memori video (VRAM). Ini menjamin tidak akan mengganggu performa AI utama game (LLM). Membutuhkan sekitar 5GB RAM tambahan, tetap berada dalam persyaratan minimum resmi Steam.
  - 📤 **Bagikan Petualanganmu:** Semua gambar yang dihasilkan disimpan secara otomatis. Anda dapat menemukannya di folder: `%APPDATA%/RolemIAster/custom_assets/images`
  - 🔬 **Pemilih Model (Lanjutan):** Jika Anda memulai game dengan parameter `--advanced`, kini Anda dapat memilih model AI mana yang akan digunakan untuk gambar dari panel Tampilan. Ini memungkinkan para antusias untuk mencoba berbagai versi Stable Diffusion yang dioptimalkan untuk OpenVINO (file .xml/.bin).

  **Narasi dan Otak AI:**
  - 🧠 **Akhir dari Perulangan:** "Doktrin Memori" baru telah diimplementasikan pada AI. Sekarang AI lebih baik dalam membedakan antara "kenangan" (apa yang sudah terjadi) dan "masa kini" (apa yang sedang terjadi). Ini membantu mengurangi kasus di mana AI mengulang-ulang atau macet.
  - 📜 **Arsip Historis:** Sistem menyajikan kenangan Anda kepada AI sebagai "Arsip Historis Tertutup", memudahkan AI untuk menggunakan informasi tersebut sebagai referensi untuk memajukan cerita.
  - ⚡ **Instruksi yang Dioptimalkan:** Cara game meminta narasi dalam bahasa Anda telah ditingkatkan, membebaskan kapasitas model untuk fokus pada kreativitas.
  - 👁️ **Fokus Naratif:** Persepsi AI telah ditulis ulang. Sekarang AI lebih memahami elemen mana yang merupakan "latar belakang statis" dan tidak perlu mengulanginya secara tidak perlu di setiap paragraf.
  - 🔀 **Keputusan yang Lebih Jelas:** AI kini menawarkan jalur keluar yang lebih jelas. Sarannya (tombol) dibagi antara menyelidiki lingkungan (Mendalami) atau mengubah arah (Menyimpang).
  - 🫵 **Sapaan Langsung:** Instruksi dasar telah disesuaikan untuk memastikan AI menyapa Anda dengan "Kamu", meningkatkan imersi pribadi.
  
  **Pembuatan Karakter:**
  - 🖼️ **Potret Karakter:** Saat menghasilkan karakter dengan AI, sistem mencoba membuat potret berdasarkan usia, profesi, dan deskripsinya. Harap dicatat bahwa ini adalah versi awal dan tingkat kemiripan (terutama pada usia) dapat bervariasi tergantung pada model yang digunakan. (Saya terus melakukan pengujian, tetapi awalnya sudah bagus)
  - 🎲 **Generasi Acak yang Andal:** Memperbaiki bug di mana tombol "Hasilkan dengan AI" bisa gagal pada percobaan pertama, membiarkan kolom kosong. Sekarang sistem koreksi cerdas memastikan respons selalu valid.
  
  **Manajemen Gambar yang Dihasilkan:**
  - 🖼️ **Galeri Gambar AI:** Panel baru di menu Arsip yang menampilkan semua gambar yang telah dihasilkan AI selama permainan Anda (potret, latar belakang). Anda dapat memfilter berdasarkan tipe gambar atau dunia.
  - 🗑️ **Penghapusan Selektif:** Pilih satu atau beberapa gambar dan hapus jika tidak memuaskan (mungkin yang di mana AI memutuskan bahwa memarkir bus di kandang kuda kastil adalah ide bagus). Sistem akan membersihkan file dan catatan internalnya.
  - 📂 **Akses Langsung:** Klik dua kali pada thumbnail mana pun untuk membuka folder tempat file tersebut berada. Jika folder sudah terbuka, jendela yang sama akan digunakan kembali.
  - 💾 **Mengingat Ukuran Jendela:** Ukuran jendela galeri disimpan secara otomatis antar sesi.
  
  **Performa pada Konfigurasi Rendah (Penting untuk GPU dengan VRAM kecil):**
  - 🧠 **PSR - Tata Kelola Hibrida:** Sistem baru yang membagi kerja AI menjadi dua fase: Perencanaan (Koki Utama) dan Eksekusi (Juru Masak). Ini memungkinkan model lokal dengan VRAM 8 GB berfungsi tanpa mengalami crash akibat konteks berlebih (+12K tokens), dengan konsekuensi latensi yang lebih tinggi; interaksi dengan AI berubah dari satu prompt tunggal menjadi serangkaian prompt (semakin kecil VRAM, semakin banyak jumlah prompt yang dihasilkan dan semakin lama waktu respons).
  - ⚡ **Eksekusi Cerdas:** Sistem secara otomatis memutuskan apakah akan memproses semuanya sekaligus (monolitik) atau membaginya menjadi beberapa bagian (iteratif) berdasarkan VRAM yang tersedia. GPU dengan VRAM lebih sedikit akan mengaktifkan mode bagian-per-bagian hanya saat diperlukan.
  - 📊 **Optimalisasi Dinamis:** PSR mengurangi beban token selama generasi, memungkinkan pengguna dengan kartu grafis 4GB untuk menyelesaikan pembuatan karakter dan generasi cerita yang sebelumnya terblokir.
  - 🔄 **Koherensi Tetap Terjaga:** Meskipun pekerjaan dibagi, sistem menyuntikkan "niat utama" agar AI tidak kehilangan alur dari apa yang sedang dilakukan.
  
  **Suara AI (peningkatan bertahap):**
  Generasi suara real-time dalam semua bahasa (beberapa bahasa lebih terbatas daripada yang lain, yang paling bervariasi dalam jenis suara adalah bahasa Inggris)
  - 🗣️ **Teriakan Pertempuran Bersuara:** Saat memulai pertempuran melawan musuh yang bermusuhan, kini frase suara kontekstual akan dipicu sebagai pembuka.
  - 🎭 **Frase Dinamis Berdasarkan Konteks:** Mesin dapat menghasilkan baris suara pendek untuk acara tertentu (layanan/pertempuran) berdasarkan bahasa, suasana, dan profil karakter.
  - 🧠 **Templat Suara Internal:** Templat teknis suara telah dipisahkan dari sistem naratif untuk menghindari gangguan dengan cerita.
  - 🔊 **Kejelasan Mendengar yang Lebih Baik:** Meningkatkan kejelasan dan prosodi sintesis untuk memprioritaskan diksi yang mudah dipahami.
  
  **⚠️ Peringatan Kompatibilitas (Permainan Sebelumnya):**
  - 🔄 Karena banyaknya perubahan internal pada mesin aturan dan sistem suasana, **permainan dan dunia yang disimpan sebelumnya mungkin masih bisa dimainkan**, tetapi kemungkinan besar akan mengalami kesalahan atau perilaku yang tidak terduga. **Disarankan untuk membuat dunia baru yang bersih** untuk menikmati semua peningkatan dengan benar.

****************************************************************************************************
17/02/2026 07:20 - Generasi Gambar AI, Peningkatan Narasi, dan Kontrol - EXPERIMENTAL_v057
****************************************************************************************************
- What's New (ID):
  **⚠️ CABANG EKSPERIMENTAL (BETA STEAM)**
  Versi ini saat ini hanya tersedia di **Cabang Eksperimental** Steam. Untuk mengaktifkannya:
  1. Klik kanan pada **RolemIAster** di Pustaka Steam Anda.
  2. Pilih **Properti...**
  3. Buka tab **Beta**.
  4. Di "Partisipasi Beta", pilih **experimental** dari menu dropdown.
  
  **Baru: Fase Pertama Generasi Gambar AI**
  - 🎨 **Duniamu dalam Gambar:** Saya telah mengintegrasikan sistem awal pembuatan gambar dengan Kecerdasan Buatan. Saat Anda bermain, sistem mencoba membuat potret dan lanskap yang sesuai dengan suasana permainan Anda.
  - 🖼️ **Latar Belakang Dinamis:** Gambar dibuat di latar belakang tanpa menghentikan permainan Anda. Anda akan melihatnya muncul secara bertahap di latar belakang, pada kartu karakter, dan di Codex.
  - ⚡ **Kecepatan Sesuai Keinginan:** Bagian baru di Pengaturan Visual. Pilih antara "Cepat" (1 langkah), "Sedang" (2 langkah), atau "Tinggi" (4 langkah) untuk menyesuaikan waktu pembuatan dengan kemampuan perangkat Anda.
  - 🛠️ **Optimalisasi Teknis:** Model AI untuk gambar dimuat di **RAM (Memori)** dan diproses melalui **CPU**, tanpa menggunakan memori video (VRAM). Ini menjamin tidak akan mengganggu kinerja AI utama game (LLM). Membutuhkan sekitar 5GB RAM tambahan, tetap berada dalam persyaratan minimum resmi Steam.
  - 📤 **Bagikan Petualanganmu:** Semua gambar yang dibuat disimpan secara otomatis. Anda akan menemukannya di folder: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narasi dan Otak AI:**
  - 🧠 **Akhir dari Loop:** "Doktrin Memori" baru telah diterapkan pada AI. Sekarang AI membedakan lebih baik antara "ingatan" (apa yang sudah terjadi) dan "masa kini" (apa yang sedang terjadi). Ini membantu mengurangi kasus di mana AI mengulang diri atau macet.
  - 📜 **Arsip Sejarah:** Sistem menyajikan ingatan Anda kepada AI sebagai "Arsip Sejarah Tertutup", memudahkannya menggunakan informasi tersebut sebagai referensi untuk memajukan cerita.
  - ⚡ **Instruksi yang Dioptimalkan:** Cara game meminta narasi dalam bahasa Anda telah ditingkatkan, membebaskan kapasitas model untuk fokus pada kreativitas.
  - 👁️ **Fokus Naratif:** Persepsi AI telah ditulis ulang. Sekarang AI lebih memahami elemen mana yang merupakan "latar belakang statis" dan tidak perlu mengulanginya secara tidak perlu di setiap paragraf.
  - 🔀 **Keputusan Lebih Jelas:** AI sekarang menawarkan jalan keluar yang lebih pasti. Sarannya (tombol) dibagi antara menyelidiki lingkungan (Memperdalam) atau mengubah arah (Menyimpang).
  - 🫵 **Sapaan Langsung:** Instruksi dasar telah disesuaikan untuk memastikan AI menyapa Anda secara langsung ("Tú"), meningkatkan imersi pribadi.
  
  **Pembuatan Karakter:**
  - 🖼️ **Potret Karakter:** Saat membuat karakter dengan AI, sistem mencoba membuat potret berdasarkan usia, profesi, dan deskripsinya. Harap dicatat bahwa ini adalah versi awal dan akurasinya (terutama pada usia) dapat bervariasi tergantung pada model yang digunakan. (saya masih melakukan pengujian tetapi permulaannya bagus)
  - 🎲 **Generasi Acak yang Andal:** Memperbaiki bug di mana tombol "Buat dengan AI" bisa gagal pada percobaan pertama, membiarkan bidang kosong. Sekarang sistem koreksi cerdas memastikan bahwa respons selalu valid.

****************************************************************************************************
17/02/2026 07:04 - Generasi Gambar AI, Peningkatan Narasi, dan Kontrol - Beta_v058
****************************************************************************************************
- What's New (ID):
  **⚠️ CABANG EKSPERIMENTAL (BETA STEAM)**
  Versi ini saat ini hanya tersedia di **Cabang Eksperimental** Steam. Untuk mengaktifkannya:
  1. Klik kanan pada **RolemIAster** di Pustaka Steam Anda.
  2. Pilih **Properti...**
  3. Buka tab **Beta**.
  4. Di "Partisipasi Beta", pilih **experimental** dari menu dropdown.
  
  **Baru: Fase Pertama Generasi Gambar AI**
  - 🎨 **Duniamu dalam Gambar:** Saya telah mengintegrasikan sistem awal pembuatan gambar dengan Kecerdasan Buatan. Saat Anda bermain, sistem mencoba membuat potret dan lanskap yang sesuai dengan suasana permainan Anda.
  - 🖼️ **Latar Belakang Dinamis:** Gambar dibuat di latar belakang tanpa menghentikan permainan Anda. Anda akan melihatnya muncul secara bertahap di latar belakang, pada kartu karakter, dan di Codex.
  - ⚡ **Kecepatan Sesuai Keinginan:** Bagian baru di Pengaturan Visual. Pilih antara "Cepat" (1 langkah), "Sedang" (2 langkah), atau "Tinggi" (4 langkah) untuk menyesuaikan waktu pembuatan dengan kemampuan perangkat Anda.
  - 🛠️ **Optimalisasi Teknis:** Model AI untuk gambar dimuat di **RAM (Memori)** dan diproses melalui **CPU**, tanpa menggunakan memori video (VRAM). Ini menjamin tidak akan mengganggu kinerja AI utama game (LLM). Membutuhkan sekitar 5GB RAM tambahan, tetap berada dalam persyaratan minimum resmi Steam.
  - 📤 **Bagikan Petualanganmu:** Semua gambar yang dibuat disimpan secara otomatis. Anda akan menemukannya di folder: `%APPDATA%/RolemIAster/custom_assets/images`
  
  **Narasi dan Otak AI:**
  - 🧠 **Akhir dari Loop:** "Doktrin Memori" baru telah diterapkan pada AI. Sekarang AI membedakan lebih baik antara "ingatan" (apa yang sudah terjadi) dan "masa kini" (apa yang sedang terjadi). Ini membantu mengurangi kasus di mana AI mengulang diri atau macet.
  - 📜 **Arsip Sejarah:** Sistem menyajikan ingatan Anda kepada AI sebagai "Arsip Sejarah Tertutup", memudahkannya menggunakan informasi tersebut sebagai referensi untuk memajukan cerita.
  - ⚡ **Instruksi yang Dioptimalkan:** Cara game meminta narasi dalam bahasa Anda telah ditingkatkan, membebaskan kapasitas model untuk fokus pada kreativitas.
  - 👁️ **Fokus Naratif:** Persepsi AI telah ditulis ulang. Sekarang AI lebih memahami elemen mana yang merupakan "latar belakang statis" dan tidak perlu mengulanginya secara tidak perlu di setiap paragraf.
  - 🔀 **Keputusan Lebih Jelas:** AI sekarang menawarkan jalan keluar yang lebih pasti. Sarannya (tombol) dibagi antara menyelidiki lingkungan (Memperdalam) atau mengubah arah (Menyimpang).
  - 🫵 **Sapaan Langsung:** Instruksi dasar telah disesuaikan untuk memastikan AI menyapa Anda secara langsung ("Tú"), meningkatkan imersi pribadi.
  
  **Pembuatan Karakter:**
  - 🖼️ **Potret Karakter:** Saat membuat karakter dengan AI, sistem mencoba membuat potret berdasarkan usia, profesi, dan deskripsinya. Harap dicatat bahwa ini adalah versi awal dan akurasinya (terutama pada usia) dapat bervariasi tergantung pada model yang digunakan. (saya masih melakukan pengujian tetapi permulaannya bagus)
  - 🎲 **Generasi Acak yang Andal:** Memperbaiki bug di mana tombol "Buat dengan AI" bisa gagal pada percobaan pertama, membiarkan bidang kosong. Sekarang sistem koreksi cerdas memastikan bahwa respons selalu valid.

****************************************************************************************************
13/02/2026 21:47 - Optimalisasi Konfigurasi AI dan Penguatan i18n - Beta_v055
****************************************************************************************************
- What's New (ID):
  - ⚙️ **Kontrol Prioritas Lokal:** Sekarang Anda dapat menyesuaikan prioritas kartu grafis Anda secara manual meskipun sistem dalam mode otomatis.
  - 🧠 **Informasi Rotasi AI:** Saya telah menambahkan panel informasi pada pengaturan penyedia eksternal untuk menjelaskan cara kerja rotasi otomatis jika terjadi kesalahan atau kuota terlampaui.
  - 🌍 **Dukungan GPU Diperluas:** Pesan informasi i18n sekarang mencerminkan dukungan untuk NVIDIA CUDA dan Vulkan (AMD/Intel) dengan benar. Terjemahan diperbarui dalam semua bahasa!
  - ⚙️ **Konektivitas Ditingkatkan:** Memperbaiki konektor untuk Ollama dan server lain yang kompatibel dengan OpenAI.
  - 🧠 **AI Poliglot dan Tangguh:** Deteksi objek yang diperoleh dalam cerita sekarang berfungsi dalam 10 bahasa. Selain itu, saya telah memperkuat sistem agar Anda tidak pernah kehabisan cerita awal, bahkan jika AI mengalami gangguan teknis.
  - 🔄 **Rotasi Cerdas:** Saya telah memperbaiki sistem rotasi agar tidak menyerah pada AI lokal Anda pada percobaan pertama. Sekarang sistem akan memberinya kesempatan untuk memperbaiki diri sebelum mencari bantuan eksternal.
  - 🧹 **Pembersihan Pondasi:** Saya telah menghapus aturan lama dan membingungkan agar "otak" AI lebih tajam dan akurat saat menangani objek Anda.

