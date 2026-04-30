# Fullstack Next.js (Simple)

## Preview cepat (lihat bentuk web dulu)

Kalau kamu pengen **langsung lihat tampilan web-nya**, buka file `demo.html`.

### Opsi 1 — langsung buka file
- Double click `demo.html` di file explorer.

### Opsi 2 — jalankan server lokal ringan
```bash
python3 -m http.server 5500
```
Lalu buka: `http://localhost:5500/demo.html`

## Jalankan versi Next.js fullstack

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

## Kalau muncul error `npm ERR! code E403`

Itu biasanya karena akses ke `registry.npmjs.org` diblokir oleh policy jaringan/server.

Coba opsi ini:

1. Pakai koneksi internet biasa (bukan jaringan yang memblokir npm registry).
2. Hapus konfigurasi proxy npm yang salah:
   ```bash
   npm config delete proxy
   npm config delete https-proxy
   ```
3. Set registry resmi npm:
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```
4. Coba install lagi:
   ```bash
   npm install
   ```

Aplikasi Next.js tetap punya fallback error handling di UI + API.
