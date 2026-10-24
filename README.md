# Kamen Rider Kabuto — Situs Penggemar

Website sederhana tentang Kamen Rider Kabuto dengan tema warna merah. Dibuat dengan HTML, CSS, dan JavaScript vanilla, tanpa framework dan tanpa proses build.

## Fitur

- **Hero interaktif**: tombol *Clock Up* mempercepat animasi garis kecepatan dan mengubah suasana halaman.
- **Tab bentuk**: Masked Form, Rider Form, dan Hyper Form.
- **Kartu rider**: klik kartu untuk melihat serangga dasar Zecter.
- **Fakta singkat** tentang serial.
- Responsif untuk layar ponsel, mendukung navigasi keyboard, dan menghormati pengaturan *reduced motion*.

## Struktur Folder

```
kabuto-site/
├── index.html   # struktur halaman
├── style.css    # tema merah dan tata letak
├── script.js    # Clock Up, tab, dan kartu rider
└── README.md
```

## Cara Menjalankan

1. Unduh atau salin folder `kabuto-site`.
2. Buka `index.html` di browser.

Atau jalankan server lokal:

```bash
cd kabuto-site
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Kustomisasi

- **Warna**: ubah variabel di `:root` pada `style.css` (`--red`, `--crimson`, `--ember`, dan lainnya).
- **Konten bentuk**: edit objek `forms` di `script.js`.
- **Daftar rider**: edit array `riders` di `script.js`.
- **Font**: memakai Anton dan Barlow dari Google Fonts. Tanpa internet, browser memakai font cadangan.

## Catatan

Ini proyek penggemar tidak resmi. Kamen Rider Kabuto adalah hak cipta Toei dan Ishimori Productions. Situs ini tidak memakai gambar atau materi resmi; semua visual dibuat dengan CSS.
