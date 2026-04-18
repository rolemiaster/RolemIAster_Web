# 📢 Pesan dari Pengembang (Akses Awal)

Selamat datang di RolemIAster. Sebelum Anda menyelami petualangan besar Anda berikutnya, saya ingin mencuri waktu satu menit untuk memperjelas beberapa hal (saya janji akan singkat, dadu sudah menunggu).

Game ini dalam tahap **Akses Awal (Early Access)**.
Saya adalah pengembang tunggal —ya, hanya saya, keyboard saya, dan berliter-liter kopi—, yang berarti saya melakukan semua yang saya bisa, tetapi terkadang tidak semua bisa saya selesaikan tepat waktu. Saya minta maaf sebelumnya jika saya membutuhkan waktu lama untuk memperbaiki bug yang sulit ditangkap, menerapkan fitur yang sangat Anda inginkan, atau merespons segera di Discord. Saya berusaha menyeimbangkan semuanya, tetapi saya belum memiliki tentakel tambahan.

## ⚠️ Peringatan Penting tentang Perangkat Keras (Lokal vs Cloud)
Ada dua cara untuk bermain, dan pengalaman Anda tergantung pada pilihan Anda:

*   **Mode Lokal (Gratis, Pribadi):** Jika Anda ingin menjalankan AI di PC Anda sendiri, persyaratan toko (Minimal 8GB VRAM) adalah sakral untuk memulai dengan baik. Kurang dari itu, AI akan berjalan lambat atau bahkan mengunci komputer Anda. Ini murni matematika, bukan sihir, meskipun sekarang dengan Turbo Quant, ini bisa berubah menjadi lebih baik.
*   **Mode Cloud (API Gemini, GPT, dll. hanya jika Anda memulai dengan perintah `--advanced`):** Di sini ceritanya berubah! Jika Anda mengkonfigurasi game untuk menggunakan layanan cloud (seperti Google Gemini atau OpenAI), pekerjaan berat dilakukan di server mereka, bukan di server Anda. Dalam mode ini, game berjalan lancar di hampir semua perangkat, karena kartu grafis Anda beristirahat.

## Manajemen Ekspektasi
Jika Anda datang mengharapkan produksi AAA yang mulus, saya khawatir Anda berada di tempat yang salah (untuk saat ini). Game ini masih dalam tahap awal, dan sejujurnya, hanya orang-orang pemberani yang memahami dan mendukung proyek eksperimental semacam ini yang memiliki kesabaran untuk menikmatinya saat ini.

## Jaminan Kepuasan
Jika Anda merasa game ini masih terlalu mentah untuk Anda atau perangkat keras Anda terlalu terbebani, tidak ada yang akan marah jika Anda meminta pengembalian dana. Sebaliknya, saya akan senang menyambut Anda kembali di masa depan —dan Anda membayar 40 atau 60 USD ketika game sudah dipoles dan selesai 😉—. Harga saat ini adalah hadiah bagi Anda yang telah mempercayai saya pada tahap ini.

Dengan itu, rasa terima kasih saya tak terbatas kepada Anda yang memutuskan untuk tetap bertahan. Laporan dan saran Anda adalah mesin penggerak nyata proyek ini. Berkat Anda, game ini telah meningkat pesat dalam beberapa minggu.

**RolemIAster sedang dibangun khusus untuk Anda.**

*Terima kasih atas kesabaran, dukungan, dan semoga para kritikus berpihak pada Anda!*


*********************************************************************************
# 📢 KAMI MEMPERBARUI KE QWEN 3.5 + TURBO QUANT! MESIN BARU, TEKNOLOGI BARU, ERA BARU 🚀
*********************************************************************************

🚧 ZONA PEMBANGUNAN: LOBOTOMI SELESAI (DAN BERHASIL) 🧠🔧
Apa yang sedang saya kerjakan?
Saya sedang mengganti mesin game, dan itu bukan pekerjaan mudah.
Hingga kini, setiap kali Anda memainkan satu giliran, sistem akan memberikan AI "bongkahan" aturan dengan 15.000 hingga 20.000 token. Pada dasarnya, ini seperti memaksa master untuk membaca seluruh buku panduan sebelum setiap kalimat. 📚🥵
Saya telah mengimplementasikan dua teknologi yang bekerja sama:

1. 🧠 **TurboQuant — Memori terkompresi**
   - Saya mengintegrasikan teknologi dari Google (dipresentasikan di ICLR 2026) yang mengompresi memori AI hingga hampir sepertiga dari ukuran aslinya.
   - Jika Anda memiliki RTX seri 3000, 4000, atau 5000, game akan memanfaatkannya secara otomatis.
   - ⚠️ **CATATAN PENTING TENTANG GPU AMD:** MESKIPUN ADA INDIKASI TURBO QUANT BERFUNGSI DI KARTU AMD/INTEL (VULKAN), DALAM PRAKTIKNYA TERJADI BANYAK KESALAHAN DAN OLEH KARENA ITU UNTUK SAAT INI BELUM AKAN DIIMPLEMENTASIKAN. KAMI BERHARAP KOMUNITAS DAPAT MELAKUKAN HAL YANG SAMA DAN KITA SEGERA MENDAPATKAN BERITA.
   - **Hasil:** AI mengingat lebih banyak dengan VRAM yang lebih sedikit. Ini murni sihir digital. ✨

2. 📖 **Konteks masif (+200%)**
   - Saya menulis ulang perhitungan memori percakapan secara bedah: sekarang game membaca spesifikasi teknis setiap model dan menghitung dengan tepat berapa banyak yang muat di GPU Anda.
   - Model 9B beralih dari mengingat ~36.000 kata menjadi lebih dari ~110.000 pada GPU dengan 16GB VRAM. 🚀
   - Selain itu, saya menaikkan batas respons dari 4.096 menjadi 8.192 token: narasi yang lebih panjang tanpa terputus di tengah kalimat.

Hasil akhir: Kecepatan yang lebih tinggi dalam banyak kasus, permainan panjang yang tidak kehilangan alur, dan AI yang jauh lebih fokus (dan sadar). 🎯

Catatan Realitas (Penafian 🧐):
Jika raksasa dari Silicon Valley (Gemini, ChatGPT...) terkadang melihat gajah merah muda, model lokal saya tidak akan sempurna 100% setiap saat. Tetapi sekarang bukan lagi "paman mabuk di pesta pernikahan" — sekarang dia adalah Master RPG yang kompeten dengan ingatan gajah sungguhan. 🐘

Terima kasih atas kesabaran Anda saat saya menyesuaikan baut dan mur! 🛠️✨
*********************************************************************************

<!-- source_hash: 1f0f19c3 -->