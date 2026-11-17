## pada p7, saya melakukan:

1. menyalin artefak p7 ke p9, dengan alamat URL http://localhost/pwd/2611500053-PWD-TI1J-26270/pertemuan-09/ fitur yang sebelumnya masih berfungsi dengan baik
2. mencoba membuat variabel bertipe array lalu mengakses elemennya lewat indeks. Yang saya temukan saat pengujian, indeks array dimulai dari 0, bukan dari 1, jadi elemen pertama diakses dengan indeks 0.
3. Membuat `fungsi.php` berisi fungsi `bersihkan()` (untuk mencegah XSS) dan `tebal()`.
4. Mengimplementasikan fungsi tersebut di `index.php` dengan `include("fungsi.php")`.
5. Menyimpan data formulir ke dalam array asosiatif `$_SESSION["form_data"]` agar lebih terstruktur.
6. Menampilkan data menggunakan array `$labels` dan `foreach` agar kode lebih ringkas.
7. Menguji keamanan dengan mengirim script `<script>alert('hai');</script>` dan memastikan script tidak tereksekusi (aman dari XSS).