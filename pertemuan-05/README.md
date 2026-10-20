## P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien
Deskripsi

Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM, event listener, interaksi
navigasi, dan validasi formulir sisi klien.
Fitur dan Pengembangan

- [javascript internal]:Menambahkan elemen `<script>` langsung di `index.html` yang menampilkan pesan lewat `console.log`.
- [memilih element Dom]: Menambahkan `id="navMenu"` pada `<ul>` di navigasi, dan memperbaiki href navigasi menjadi huruf kecil (`#home`, `#about`, `#contact`) agar sesuai dengan id section.
- [Memilih elemen dengan `querySelector()`]:Menguji pemilihan radio button jenis pesan memakai selector `input[name="jenis_pesan"]:checked`.
- Sempat muncul error `Cannot read properties of null` karena data yang diketik dipakai sebagai id di `getElementById()`. Diperbaiki dengan memakai id elemen yang benar (`nama`, `email`, `semester`) dan mengisi datanya langsung di kolom form.
- Mengubah konten teks dengan `textContent`: Menambahkan elemen `<p id="formFeedback"></p>` di dalam form kontak sebagai tempat pesan umpan balik, lalu menguji pengisian dan penghapusan teksnya lewat JavaScript.


Tambahkan entri setiap kali ada perkembangan penting pada proyek.
Pengujian

- [javascript internal]: Membuka `index.html` di browser, lalu membuka Console lewat F12. Hasil aktual: pesan "JavaScript berhasil dijalankan." tampil di Console (index.html:133). Tidak ada error.
- [`getElementById("navMenu")`]:  Mengetik `document.getElementById("navMenu");` di Console. Hasil awal `null` karena id belum ada di HTML. Setelah id `navMenu` ditambahkan dan halaman di-refresh, Console menampilkan elemen `<ul id="navMenu">`.
- [`querySelector('input[name="jenis_pesan":checked')`]:Sebelum memilih radio button, hasilnya `null`. Setelah memilih "Pertanyaan", hasilnya elemen `<input type="radio" id="pertanyaan" name="jenis_pesan" ...>`.
- Membaca nilai input dengan `.value`: Mengisi kolom Nama Lengkap, Email, dan Semester pada form kontak, lalu menjalankan `document.getElementById("nama").value;`, `document.getElementById("email").value;`, dan `document.getElementById("semester").value;` di Console. Hasil aktual: `'isma fitri indriani'`, `'2611500053@mahasiswa.atmaluhur.ac.id'`, dan `'1'`. Saat kolom masih kosong, hasilnya `''` (string kosong). Nilai semester muncul sebagai teks (`'1'`), bukan angka.
- `textContent` pada `formFeedback`: Menjalankan `document.getElementById("formFeedback").textContent = "Pesan pengujian DOM.";` di Console. Hasil aktual: teks "Pesan pengujian DOM." muncul di halaman pada elemen `formFeedback`. Setelah menjalankan `document.getElementById("formFeedback").textContent = "";`, teks hilang dari halaman.


Perbarui bagian ini setelah melakukan pengujian atau debugging yang relevan.
Riwayat Pengembangan
Catat perkembangan melalui commit Git yang bermakna.

- [Pesan commit]: "Tambah JavaScript internal dan update README"
- [Pesan commit]: "Tambah id navMenu dan uji getElementById di Console"
- [Pesan commit]: "Tambah id elemen dan uji getElementById serta querySelector"
- [pesan commit]: "Uji pembacaan nilai input form dengan getElementById dan value"
- [pesan commit]: "Tambah formFeedback dan uji textContent di Console"
