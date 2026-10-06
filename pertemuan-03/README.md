# Pertemuan 3 - Formulir HTML dan CSS Dasar
## Baseline
- Menggunakan hasil P2 sebagai dasar pengembangan P3.
- Menyalin `index.html` dan `img/foto-profil.jpg` ke `pertemuan-03/`.
## Implementasi Formulir
- Elemen form yang digunakan: [form, div, label, input, button, a, h2]
- Tipe input yang digunakan: [text, email, date, check box, radio]
- Atribut validasi yang digunakan: [required, placeholder, minleght, maxleght, min, max]
## Pengujian GET dan POST
- Hasil pengujian GET: [data formulir muncul di URL/address bar, terlihat oleh pengguna]
- Contoh URL encoding yang ditemukan: [https://2611500053.github.io/2611500053-PWD-TI1J-26270/pertemuan-03/index.html?nama=isma%2Bfitri%2Bindriani&email=2611500053%40mahasiswa.atmaluhur.ac.id&semester=1&tanggal=2026-10-01&jenis_pesan=saran&minat=HTML&prodi=TI&pesan=bahasa%2520terimakasih]
- Hasil pengujian POST: [saat method diganti menjadi POST, data tidak tampil di URL. setelah klik submit muncul eror 405 karena github pages tidak mendukung POST tanpa backend]
## CSS Dasar
- Selector elemen: [body, h2, p, form, label, input, button]
- Selector class: [from-group, input-from]
- Selector ID: [#nama, #kontak, #email]
- Properti CSS dasar yang digunakan: [color, bacround-color, margin, border]
## Pengujian dan Perbaikan
- Galat yang ditemukan: [gambar tidak muncul karena path imgsalah/ CSS tidak ter-load]
- Penyebab galat: [penulisan folder `img/foto-profil.jpg` harus relatif, bukan absolute]
- Perbaikan yang dilakukan: [memperbaiki path img]
- Hasil pengujian ulang: [halaman profil mahasiswa dan formulir berhasil tampil di github tanpa galat]
## GitHub Pages
URL: [https://2611500053.github.io/2611500053-PWD-TI1J-26270/pertemuan-03/]