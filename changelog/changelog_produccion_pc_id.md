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

