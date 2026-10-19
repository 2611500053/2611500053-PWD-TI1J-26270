## P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien
Deskripsi

Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM, event listener, interaksi
navigasi, dan validasi formulir sisi klien.
Fitur dan Pengembangan

- [javascript internal]:Menambahkan elemen `<script>` langsung di `index.html` yang menampilkan pesan lewat `console.log`.
- [memilih element Dom]: Menambahkan `id="navMenu"` pada `<ul>` di navigasi, dan memperbaiki href navigasi menjadi huruf kecil (`#home`, `#about`, `#contact`) agar sesuai dengan id section.
- [Memilih elemen dengan `querySelector()`]:Menguji pemilihan radio button jenis pesan memakai selector `input[name="jenis_pesan"]:checked`.

Tambahkan entri setiap kali ada perkembangan penting pada proyek.
Pengujian

- [javascript internal]: Membuka `index.html` di browser, lalu membuka Console lewat F12. Hasil aktual: pesan "JavaScript berhasil dijalankan." tampil di Console (index.html:133). Tidak ada error.
- [`getElementById("navMenu")`]:  Mengetik `document.getElementById("navMenu");` di Console. Hasil awal `null` karena id belum ada di HTML. Setelah id `navMenu` ditambahkan dan halaman di-refresh, Console menampilkan elemen `<ul id="navMenu">`.
- [`querySelector('input[name="jenis_pesan":checked')`]:Sebelum memilih radio button, hasilnya `null`. Setelah memilih "Pertanyaan", hasilnya elemen `<input type="radio" id="pertanyaan" name="jenis_pesan" ...>`.

Perbarui bagian ini setelah melakukan pengujian atau debugging yang relevan.
Riwayat Pengembangan
Catat perkembangan melalui commit Git yang bermakna.

- [Pesan commit]: "Tambah JavaScript internal dan update README"
- [Pesan commit]: "Tambah id navMenu dan uji getElementById di Console"
- [Pesan commit]: "Tambah id elemen dan uji getElementById serta querySelector"
