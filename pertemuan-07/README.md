pada pertemuan 7 saya melakukan menyalin artefak p6 ke p7
menguji jalan pada p7, hasilnya sama seprti p6
## C.3 Menerima data dengan $_GET
Perubahan: menambahkan kode PHP di bagian atas `index.php`:
`isset($_GET['nama'])`, `$_GET['nama']`, dan `htmlspecialchars()`.

Pengujian:
1. `.../pertemuan-07/?nama=isma` -> muncul "Nama yang diterima: isma".
2. `.../pertemuan-07/?nama=Budi%20Anduk` -> muncul "Nama yang diterima: Budi Anduk".