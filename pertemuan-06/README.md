# Pertemuan 6 - PHP Dasar

## B. Persiapan
- Lokasi proyek: C:\laragon\www\pwd\2611500053-PWD-TI1J-26270\pertemuan-06
- Layanan Laragon: Apache berjalan (tulis MySQL juga kalau memang ikut jalan)
- Alamat akses: http://localhost/pwd/2611500053-PWD-TI1J-26270/pertemuan-06/
- Hasil: halaman tampil sama seperti P5, file utama sudah index.php
## C.1 Cara Kerja PHP pada Halaman Web

Alamat proyek: http://localhost/pwd/2611500053-PWD-TI1J-26270/pertemuan-06/

Pemeriksaan kondisi awal:
- Laragon dan Apache berjalan.
- Halaman dapat diakses melalui localhost sebelum kode PHP baru ditambahkan.
- Tampilan sama seperti P5.

Catatan: tahap ini hanya pemeriksaan kondisi awal, belum pengujian keluaran PHP.

## C.2 Tag PHP, Ekstensi Berkas .php, dan Penyisipan PHP dalam HTML

Kode yang diuji (diletakkan setelah `<body>`, sebelum `<header>
Hasil pengujian:
- Teks "PHP berhasil dijalankan." tampil di bagian atas halaman, di atas judul "Profil Mahasiswa".
- Pada View Page Source (Ctrl+U), yang terlihat hanya teks hasilnya, bukan kode `<?php ... ?>`. Artinya PHP diproses oleh Apache sebelum dikirim ke peramban.
- Tidak ada pesan galat PHP.
## C.3 Komentar, echo, print
- echo: teks "Keluaran menggunakan echo." tampil di halaman
- print: teks "Keluaran menggunakan print." tampil di halaman
- Komentar (// dan /* */) tidak tampil di halaman
- Keduanya menghasilkan keluaran yang sama pada tes ini
## C.4 Perbedaan Keluaran HTML Statis dan Keluaran Dinamis PHP

Kode yang diuji (sementara, sebelum `<header>`):

```php
<p>Konten HTML statis.</p>
<?php
echo "<p>Konten yang dihasilkan oleh PHP.</p>";
?>
```

Hasil pengujian:
- Peramban menampilkan dua paragraf: "Konten HTML statis." dan "Konten yang dihasilkan oleh PHP."
- Tampilannya sama di layar, tetapi asalnya berbeda: yang pertama ditulis langsung di HTML, yang kedua dihasilkan oleh perintah echo di PHP.
- Pada View Page Source, keduanya muncul sebagai tag `<p>` biasa dan tidak ada kode PHP mentah.
## D. Variabel, Konstanta, dan Tipe Data PHP

### D.1 Variabel
Blok PHP ditambahkan di awal index.php (sebelum doctype) berisi variabel
$nim, $namaMahasiswa, $programStudi, $tahunAkademik, $semester, $ipk,
$statusAktif, dan $catatanTambahan.
Hasil: halaman tetap tampil tanpa galat PHP.
### D.2 Konstanta
Ditambahkan const NAMA_MATA_KULIAH dan PROFIL_GITHUB pada blok PHP yang sama.
Hasil: halaman tetap tampil tanpa galat PHP.
### D.4 Variabel dan Konstanta pada Halaman
- Paragraf "Halo, saya ..." kini memakai echo untuk variabel dan print untuk konstanta.
- Link GitHub memakai <?= PROFIL_GITHUB ?>.
Hasil: nama, mata kuliah, dan tahun akademik tampil sesuai nilai variabel;
link GitHub mengarah ke profil sesuai konstanta.
