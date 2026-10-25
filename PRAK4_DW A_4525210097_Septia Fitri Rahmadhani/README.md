# Tugas 04 — Modifikasi Profil Mahasiswa dengan HTML dan CSS

## Deskripsi
Tugas ini membangun ulang halaman profil mahasiswa menggunakan dua file terpisah, yaitu `index.html` dan `style.css`. Halaman dibuat agar nyaman dilihat pada perangkat desktop maupun ponsel.

## Struktur Folder
```text
Tugas_04/
├── README.md
├── Dokumentasi/
│   └── Images/
│       ├── desktop.png
│       └── mobile.png
└── profil/
    ├── index.html
    └── style.css
```

## Perubahan yang Dilakukan
- Memisahkan kode HTML dan CSS menjadi dua file.
- Menggunakan Box Model melalui `margin`, `padding`, `border`, dan `box-sizing`.
- Menggunakan class reusable `.button` dan `.section-shell`.
- Menyusun tiga kartu proyek menggunakan Flexbox.
- Menambahkan efek hover pada tombol dan kartu.
- Menambahkan media query untuk layar dengan lebar maksimal 767 piksel.
- Mengubah susunan kartu proyek menjadi satu kolom pada layar mobile.

## Masalah dan Solusi

**Masalah 1:** Tampilan halaman kurang nyaman pada layar ponsel.

**Solusi:** Menggunakan media query untuk mengatur ulang navigasi, ukuran teks, jarak, dan susunan kartu proyek.

**Masalah 2:** Kode HTML dan CSS sulit dikelola jika dicampur dalam satu file.

**Solusi:** Memisahkan kode HTML ke `index.html` dan aturan tampilan ke `style.css`.

## Dokumentasi
Folder `Dokumentasi/Images` digunakan untuk menyimpan screenshot hasil website pada desktop dan mobile.

- `desktop.png`: tampilan website pada komputer atau laptop.
- `mobile.png`: tampilan website pada ukuran layar ponsel.

## Cara Menjalankan
1. Buka folder `profil` di Visual Studio Code.
2. Buka file `index.html` melalui browser.
3. Periksa tampilan website pada ukuran desktop dan mobile.

## Kesimpulan
Halaman profil dibuat menggunakan HTML dan CSS terpisah. Penggunaan Box Model, class reusable, Flexbox, dan media query membantu membuat tampilan website lebih rapi dan responsif.
