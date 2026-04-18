# 📢 Pesan dari Pengembang (Akses Awal)

Selamat datang di RolemIAster. Sebelum Anda menyelami petualangan besar Anda berikutnya, saya ingin meminta waktu sebentar untuk mengklarifikasi beberapa hal (saya janji akan singkat, dadu menunggu Anda).

Game ini dalam fase **Akses Awal (Early Access)**.
Saya adalah pengembang tunggal — ya, hanya saya, keyboard saya, dan bermi-liter kopi — yang berarti saya melakukan semua yang saya bisa, tetapi terkadang saya tidak bisa menyelesaikan semuanya tepat waktu. Saya mohon maaf sebelumnya jika saya lambat memperbaiki bug yang sulit ditemukan, mengimplementasikan fitur yang sangat Anda inginkan, atau segera merespons di Discord. Saya mencoba menyeimbangkan banyak hal, tetapi saya belum punya tentakel ekstra.

## ⚠️ Peringatan Penting tentang Perangkat Keras (Lokal vs Cloud)
Ada dua cara untuk bermain, dan pengalaman Anda bergantung pada pilihan Anda:

*   **Mode Lokal (Gratis, Pribadi):** Jika Anda ingin menjalankan AI di PC Anda sendiri, persyaratan toko (Minimum 12GB VRAM) adalah sakral. Kurang dari itu, AI akan berjalan lambat atau bahkan membuat perangkat Anda macet. Ini murni matematika, bukan sihir.
*   **Mode Cloud (API Gemini, GPT, dll. hanya jika Anda memulai dengan perintah `--advanced`):** Di sinilah ceritanya berubah! Jika Anda mengonfigurasi game untuk menggunakan layanan cloud (seperti Google Gemini atau OpenAI), pekerjaan berat dilakukan di server mereka, bukan di server Anda. Dalam mode ini, game berjalan lancar di hampir semua perangkat, karena kartu grafis Anda beristirahat.

## Pengelolaan Ekspektasi
Jika Anda datang berharap untuk mendapatkan produksi AAA yang mulus tanpa cela, saya khawatir Anda berada di tempat yang salah (untuk saat ini). Game ini berada di tahap awal, dan sejujurnya, hanya orang-orang pemberani yang memahami dan mendukung jenis proyek eksperimental ini yang memiliki kesabaran untuk menikmatinya saat ini.

## Jaminan Kepuasan
Jika Anda merasa game ini terlalu mentah untuk Anda atau perangkat keras Anda terlalu terbebani, tidak ada yang akan marah jika Anda meminta pengembalian dana. Sebaliknya, saya akan senang menyambut Anda kembali di masa depan — dan Anda membayar 40 atau 60 USD ketika game ini sudah halus dan selesai 😉—. Harga saat ini adalah hadiah bagi Anda yang percaya pada saya di tahap ini.

Dengan demikian, rasa terima kasih saya tak terhingga bagi mereka yang memutuskan untuk tetap tinggal. Laporan dan saran Anda adalah penggerak nyata dari proyek ini. Berkat Anda, game ini telah meningkat pesat dalam beberapa minggu.

**RolemIAster sedang dibangun khusus untuk Anda.**

*Terima kasih atas kesabaran, dukungan, dan semoga para kritikus berpihak pada Anda!*


*********************************************************************************
#  KAMI MEMPERBARUI KE QWEN 3.5 + TURBO QUANT! MESIN BARU, TEKNOLOGI BARU, ERA BARU 🚀
*********************************************************************************

🚧 ZONA PEMBANGUNAN: LOBOTOMI SELESAI (DAN BERHASIL) 🧠🔧
Apa yang sedang saya kerjakan?
Saya sedang mengubah mesin game, dan ini bukan tugas yang mudah.
Sampai sekarang, setiap kali Anda bermain satu giliran, sistem akan memberikan AI sebuah "buku tebal" aturan yang terdiri dari 15.000 hingga 20.000 token. Pada dasarnya, itu seperti memaksa seorang master untuk membaca seluruh manual sebelum setiap kalimat. 📚🥵
Saya telah mengimplementasikan dua teknologi yang bekerja bersama:

1.  🧠 **TurboQuant — Memori terkompresi**
    *   Saya mengintegrasikan teknologi dari Google (dipresentasikan di ICLR 2026) yang mengompresi memori AI hingga hampir sepertiga dari ukuran aslinya.
    *   Jika Anda memiliki RTX seri 3000, 4000, atau 5000, game akan memanfaatkannya secara otomatis.
    *   ⚠️ **CATATAN PENTING TENTANG GPU AMD:** MESKIPUN ADA INDIKASI TURBO QUANT BEKERJA PADA KARTU AMD/INTEL (VULKAN), SECARA PRAKTIS ITU MENYEBABKAN BANYAK KESALAHAN DAN OLEH KARENA ITU BELUM AKAN DIIMPLEMENTASIKAN UNTUK SAAT INI. KAMI BERHARAP KOMUNITAS AKAN MELAKUKAN HAL YANG SAMA DAN KAMI AKAN MEMILIKI BERITA SEGERA.
    *   **Hasil:** AI mengingat lebih banyak sambil menggunakan VRAM lebih sedikit. Ini adalah sihir digital murni. ✨

2.  📖 **Konteks masif (+200%)**
    *   Saya menulis ulang perhitungan memori percakapan secara bedah: sekarang game membaca spesifikasi teknis setiap model dan menghitung dengan tepat berapa banyak yang muat di GPU Anda.
    *   Model 9B beralih dari mengingat ~36.000 kata menjadi lebih dari ~110.000 pada GPU dengan 16GB VRAM. 🚀
    *   Selain itu, saya menaikkan batas respons dari 4.096 menjadi 8.192 token: narasi yang lebih panjang tanpa terputus di tengah kalimat.

Hasil akhir: Kecepatan yang lebih unggul dalam banyak kasus, sesi permainan panjang yang tidak kehilangan alur, dan AI yang jauh lebih fokus (dan lebih tenang). 🎯

Catatan Realitas (Penafian 🧐):
Jika raksasa dari Silicon Valley (Gemini, ChatGPT...) terkadang melihat gajah merah muda, model lokal saya tidak akan sempurna 100% setiap saat. Tapi itu tidak lagi "paman mabuk di pesta pernikahan" — sekarang dia adalah Master RPG yang kompeten dengan ingatan gajah sungguhan. 🐘

Terima kasih atas kesabaran Anda saat saya menyetel roda penggerak! 🛠️✨
*********************************************************************************

<!-- source_hash: b7968a3e -->