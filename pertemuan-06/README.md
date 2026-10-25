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
## E. Operator PHP

### E.1 Operator Aritmetika dan Penugasan

Kode yang ditambahkan pada blok PHP di awal index.php:

```php
// Bagian 2: Operator
$batasSemester = 8;
$sisaSemester = $batasSemester - $semester;
```

Kode yang ditambahkan pada bagian Profil Singkat (di dalam `<article>`, setelah `<h3>Profil Singkat</h3>`):

```php
<p>Sisa semester hingga batas: <?php echo $sisaSemester; ?></p>
```

Alamat pengujian: http://localhost/pwd/2611500053-PWD-TI1J-26270/pertemuan-06/

Hasil pengujian:
- Halaman menampilkan "Sisa semester hingga batas: 6" (8 - 2 = 6).
- Tidak ada pesan galat PHP.
- Sempat muncul Parse error pada baris 15 karena tanda titik koma (;) pada deklarasi konstanta PROFIL_GITHUB hilang. Setelah titik koma ditambahkan, halaman tampil normal.
### E.3 Operator Logika dan Penerapan Hasil Pemeriksaan

Kode yang ditambahkan pada blok PHP di awal index.php:

```php
$statusSemester = ($semesterValid && $statusAktif) ? "Sesuai rentang" : "Perlu diperiksa";
```

Kode yang ditambahkan pada bagian Profil Singkat:

```php
<p>Pemeriksaan rentang semester: <?php echo $statusSemester; ?></p>
```

Hasil pengujian:
- $semester = 1 dan $statusAktif = true: tampil "Pemeriksaan rentang semester: Sesuai rentang".
- $semester = 9: tampil "Pemeriksaan rentang semester: Perlu diperiksa".
- Nilai $semester dikembalikan ke 1 setelah pengujian dan hasil kembali "Sesuai rentang".
## F. Struktur Percabangan PHP

### F.1 Percabangan if-elseif-else

Kode yang ditambahkan pada blok PHP di awal index.php:

```php
// Bagian 3: Percabangan if-elseif-else
if ($semester < 3) {
  $keteranganSemester = "Semester awal";
} elseif ($semester <= 6) {
  $keteranganSemester = "Semester menengah";
} else {
  $keteranganSemester = "Semester akhir";
}
```

Kode yang ditambahkan pada bagian Profil Singkat:

```php
<p>Semester: <?php echo $semester . " (" . $keteranganSemester . ")"; ?></p>
```

Hasil pengujian:
- $semester = 2: tampil "Semester: 2 (Semester awal)".
- $semester = 4: tampil "Semester: 4 (Semester menengah)".
- $semester = 7: tampil "Semester: 7 (Semester akhir)".
- Nilai $semester dikembalikan ke 1 setelah pengujian.
### F.2 Operator Ternary
Menentukan $namaProdi dari $programStudi dan status mahasiswa dari $statusAktif.
Hasil: tampil "Program Studi: Teknik Informatika (TI)" dan "Status mahasiswa: Aktif". Saat $statusAktif = false tampil "Tidak aktif". Nilai dikembalikan ke awal .
### F.3 switch-case-default
Menentukan $fokusProgramStudi dari $programStudi.
Hasil: TI tampil "Komputasi dan pengembangan perangkat lunak", SI tampil "Sistem informasi dan proses bisnis", MI tampil "Belum ditentukan". Nilai dikembalikan ke awal.
