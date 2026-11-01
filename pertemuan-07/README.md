pada pertemuan 7 saya melakukan menyalin artefak p6 ke p7
menguji jalan pada p7, hasilnya sama seprti p6
## C.3 Menerima data dengan $_GET
Perubahan: menambahkan kode PHP di bagian atas `index.php`:
`isset($_GET['nama'])`, `$_GET['nama']`, dan `htmlspecialchars()`.

Pengujian:
1. `.../pertemuan-07/?nama=isma` -> muncul "Nama yang diterima: isma".
2. `.../pertemuan-07/?nama=Budi%20Anduk` -> muncul "Nama yang diterima: Budi Anduk".
## C.4 Praktik Pengiriman Formulir Menggunakan GET

Perubahan:
- Menambahkan `contactForm.submit();` pada `script.js`, setelah
  `formFeedback.className = "form-feedback-success";`.
- `event.preventDefault()` tetap dipertahankan agar validasi
  JavaScript selesai dulu sebelum formulir dikirim.

Pengujian:
1. Mengisi semua kolom wajib dengan data valid, lalu klik Kirim.
   Hasil: halaman dimuat ulang, URL berisi parameter setelah tanda `?`
   dan dipisah tanda `&` (contoh: `?nama=...&email=...&semester=...`).
   "Nama yang diterima: ..." muncul.
2. Mengosongkan salah satu kolom wajib, lalu klik Kirim.
   Hasil: pesan validasi merah muncul dan formulir tidak terkirim.

Catatan: parameter lain ikut dikirim lewat GET, tetapi kode PHP saat
ini hanya membaca dan menampilkan parameter `nama`.
## E.1 Menyimpan Artefak Demonstrasi GET sebagai indexGet.php

Perubahan:
- Menyalin `index.php`, menempelkannya di direktori yang sama,
  lalu mengganti namanya menjadi `indexGet.php`.
- Pada `indexGet.php`, formulir tetap memakai `method="get"` dan
  `action` diubah menjadi `action="indexGet.php"`.
- Kode penerimaan parameter GET dari C.3 dipertahankan.
## E.2 Mengubah Formulir Utama dari GET menjadi POST

Perubahan:
- Pada `index.php`, tag formulir diubah dari
  `<form id="contactForm" action="index.php" method="get" novalidate>`
  menjadi
  `<form id="contactForm" action="index.php" method="post" novalidate>`.
- `indexGet.php` tidak diubah dan tetap memakai GET.
## E.3 Menerima Data Formulir Menggunakan $_POST

Perubahan:
- Pada bagian atas `index.php`, kode penerimaan data diubah dari
  `$_GET['nama']` menjadi `$_POST['nama']`.
- Komentar diubah menjadi `// P7: penggunaan POST`.
- Pada `script.js`, `contactForm.submit();` berada di dalam handler
  `submit`, setelah pesan sukses validasi.
  ## E.4 Mengakses Data dari Berbagai Jenis Input Formulir

Perubahan:
- Pada `index.php`, menambahkan pembacaan input lain setelah blok
  penerimaan `nama`:
  `$email`, `$semesterForm`, `$tanggal`, `$jenisPesan`, `$prodi`,
  `$pesan` memakai `$_POST['...'] ?? ''`, dan `$minat` memakai
  `$_POST['minat'] ?? []`.
- Pada `index.php`, atribut checkbox diubah dari `name="minat"`
  menjadi `name="minat[]"` agar PHP menerima beberapa pilihan
  sebagai larik.
- Pada `script.js`, selector `topikDipilih` diubah menjadi:
  `'input[name="minat"]:checked, input[name="minat[]"]:checked'`
  agar validasi bekerja pada formulir GET (`indexGet.php`) dan
  formulir POST (`index.php`).