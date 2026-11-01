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
  ## F.2 Memeriksa Keberadaan dan Kelengkapan Data
- Menambahkan `$pesanKesalahan` dan pemeriksaan data kosong (nama, email,
  semester, tanggal, jenis pesan, program studi, pesan, minat) di dalam
  `if ($_SERVER['REQUEST_METHOD'] === 'POST')`.
- `trim()` menghapus spasi, `empty($minat)` memeriksa topik yang belum dipilih.
## F.3 Memvalidasi Format dan Tipe Data
- Menambahkan pemeriksaan semester (`FILTER_VALIDATE_INT`, rentang 1-14)
  dan email (`FILTER_VALIDATE_EMAIL`) pada blok POST yang sama.
- Pemeriksaan format hanya dijalankan jika data tidak kosong.
## F.4 Memvalidasi Nilai Pilihan Formulir
- Menambahkan pemeriksaan `in_array()` untuk jenis pesan (pertanyaan/saran),
  program studi (SI/TI), dan topik minat (HTML/CSS), serta `is_array()`
  dan `foreach` untuk `$minat`.
  ## F.5 Normalisasi dan Sanitasi Data Masukan
- Mengganti pembacaan data dengan `trim((string) ($_POST['...'] ?? ''))`
  dan menempatkannya sebelum blok validasi F.2-F.4.
  ## F.6 Mengamankan Keluaran HTML
Perubahan:
- Menghapus blok `echo` nama lama di bagian atas `index.php`.
- Tahap 1: menampilkan `$pesanKesalahan` di bawah judul "Kontak" dengan
  `htmlspecialchars()`, hanya jika tidak kosong (kelas `form-feedback-error`).
- Tahap 2: menampilkan "Data yang Diterima Peladen" setelah `</form>`
  saat permintaan POST. Semua nilai teks memakai `htmlspecialchars()`,
  minat memakai `foreach`, dan pesan memakai `nl2br()`.

Penjelasan:
- `htmlspecialchars()` mengubah karakter khusus HTML menjadi entitas
  sehingga ditampilkan sebagai teks, bukan markup.
- Pengamanan keluaran berbeda dari validasi dan normalisasi; data yang
  valid tetap diamankan saat ditampilkan.

Pengujian tahap 1 (JavaScript dimatikan sementara):
1. Mengirim formulir kosong.
   Hasil: muncul pesan "Nama lengkap wajib diisi. Email wajib diisi.
   Semester wajib diisi. Tanggal kunjungan wajib diisi. Jenis pesan wajib
   dipilih. Program studi wajib dipilih. Pesan wajib diisi. Minat wajib
   dipilih minimal satu. Jenis pesan tidak valid. Program studi tidak valid."
2. Mengisi email dengan `bukan-email`.
   Hasil: muncul pesan "Format email tidak valid."
3. Mengirim formulir tanpa memilih minat.
   Hasil: muncul pesan "Minat wajib dipilih minimal satu."

Pengujian tahap 2:
1. Mengirim formulir dengan data valid.
   Hasil: bagian "Data yang Diterima Peladen" tampil di bawah formulir
   berisi nama, email, semester, tanggal kunjungan, jenis pesan, program
   studi, daftar minat, dan pesan.
2. Mengisi kolom pesan dengan `<b>Mahasiswa</b>`.
   Hasil: teks tampil apa adanya sebagai `<b>Mahasiswa</b>` dan tidak
   ditafsirkan sebagai tag HTML tebal.