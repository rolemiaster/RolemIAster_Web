# 📢 Pesan dari Pengembang (Akses Awal)

Selamat datang di RolemIAster. Sebelum Anda terjun ke petualangan besar berikutnya, saya ingin mencuri waktu Anda semenit untuk mengklarifikasi beberapa hal (saya janji akan singkat, dadu menunggu Anda).

Game ini dalam tahap **Akses Awal (Early Access)**.
Saya adalah pengembang tunggal —ya, hanya saya, keyboard saya, dan berminggu-minggu kopi—, yang berarti saya melakukan semua yang saya bisa, tetapi terkadang saya tidak sempat menyelesaikan semuanya tepat waktu. Saya mohon maaf sebelumnya jika saya lambat memperbaiki bug yang sulit diatasi, mengimplementasikan fitur yang sangat Anda inginkan, atau merespons segera di Discord. Saya mencoba menyeimbangkan, tetapi saya belum memiliki tentakel ekstra.

## ⚠️ Peringatan Penting tentang Perangkat Keras (Lokal vs Cloud)
Ada dua cara untuk bermain, dan pengalaman Anda tergantung pada pilihan Anda:

*   **Mode Lokal (Gratis, Pribadi):** Jika Anda ingin menjalankan AI di PC Anda sendiri, persyaratan toko (VRAM Minimal 12GB) adalah mutlak. Kurang dari itu dan AI akan berjalan lambat atau merusak komputer Anda. Ini murni matematika, bukan sihir.
*   **Mode Cloud (API Gemini, GPT, dll. hanya jika Anda memulai dengan perintah `--advanced`):** Di sinilah semuanya berubah! Jika Anda mengatur game untuk menggunakan layanan cloud (seperti Google Gemini atau OpenAI), pekerjaan berat dilakukan di server mereka, bukan di server Anda. Dalam mode ini, game berjalan lancar di hampir semua komputer, karena kartu grafis Anda beristirahat.

## Pengelolaan Ekspektasi
Jika Anda datang mengharapkan produksi AAA tanpa cela, saya khawatir Anda berada di tempat yang salah (untuk saat ini). Game ini masih dalam tahap awal, dan sejujurnya, hanya mereka yang berani yang memahami dan mendukung proyek eksperimental semacam ini yang memiliki kesabaran untuk menikmatinya saat ini.

## Jaminan Kepuasan
Jika Anda merasa game ini terlalu mentah untuk Anda atau perangkat keras Anda terlalu terbebani, tidak ada yang akan marah jika Anda meminta pengembalian dana. Sebaliknya, saya akan senang menyambut Anda kembali di masa mendatang —dan agar Anda membayar 40 atau 60 USD ketika game sudah matang dan selesai 😉—. Harga saat ini adalah hadiah karena telah mempercayai saya pada tahap ini.

Dengan demikian, rasa terima kasih saya tak terhingga bagi Anda yang memilih untuk tetap tinggal. Laporan dan saran Anda adalah mesin penggerak sebenarnya dari proyek ini. Berkat Anda, game ini telah meningkat pesat dalam beberapa minggu.

**RolemIAster sedang dibangun khusus untuk Anda.**

*Terima kasih atas kesabaran, dukungan, dan semoga kritik berpihak pada Anda!*


*********************************************************************************
🚧 AREA KONSTRUKSI: SAYA "MELOBOTOMI" AI (DEMI KEBAIKAN) 🧠🔧
Apa yang sedang saya kerjakan?
Saya sedang mengubah mesin game, dan ini bukan tugas yang mudah.
Hingga saat ini, setiap kali Anda memainkan satu giliran, sistem memberikan "dokumen" aturan sebesar 15.000 hingga 20.000 token kepada AI. Pada dasarnya, ini seperti memaksa master untuk membaca seluruh panduan sebelum setiap kalimat. 📚🥵

Masalahnya:
Dengan begitu banyak data sekaligus, AI terkadang " mabuk " karena konteks. Ia menjadi bingung, menciptakan bahasa, menghancurkan objek, atau bahkan berhalusinasi (yang terkenal sebagai delusi). Ini adalah padanan digital dari "layar biru mati" tetapi naratif.

Solusinya: Diet ketat! 🥗
Saya sedang melatih ulang model secara pribadi (Fine-Tuning sendiri) agar ia menghafal aturan.

Rencananya: Agar AI sudah tahu cara bermain tanpa harus membaca manual setiap kali.

Tujuannya: Mengurangi penggunaan dari 20k menjadi hanya 5k token per giliran.

Hasilnya: Kecepatan yang jauh lebih unggul dan AI yang jauh lebih fokus (dan sadar). 🚀

Catatan Realitas (Penafian 🧐):
Ini adalah pekerjaan rekayasa tiga kali lipat: melatih, menguji, dan memperkuat. Dan mari kita jujur: jika raksasa Silicon Valley (Gemini, ChatGPT...) terkadang melihat gajah merah muda, model lokal saya tidak akan sempurna 100% setiap saat. Tetapi tujuannya adalah agar ia berubah dari "pria mabuk di pesta" menjadi Master Role yang kompeten.

Terima kasih atas kesabaran Anda saat saya menyesuaikan mur dan bautnya! 🛠️✨
*********************************************************************************

<!-- source_hash: 5c341f4e -->