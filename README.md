# Portofolio Abdul

Halaman portofolio sederhana — HTML, CSS, dan JS polos, tanpa framework atau
proses build. Dibuat untuk latihan alur GitHub → Vercel → Supabase.

## Struktur file

```
index.html   halaman utama
style.css    semua styling
script.js    logika form kontak (opsional, terhubung ke Supabase)
README.md    file ini
```

## Cara pakai / edit

Isi konten di `index.html`:
- Ganti tulisan di bagian "Tentang".
- Ganti kedua "Nama proyek..." dengan proyek asli dan link repo-nya.
- Ganti email dan link GitHub/LinkedIn di bagian kontak.

Ganti warna atau tampilan lewat variabel di bagian atas `style.css`
(`--bg`, `--ink`, `--gold`, dst).

## Deploy ke GitHub + Vercel

1. Buat repository baru di GitHub, upload ketiga file di atas.
2. Buka [vercel.com](https://vercel.com), masuk pakai akun GitHub.
3. Klik **Add New → Project**, pilih repo ini, klik **Deploy**.
   Tidak perlu setting build apa pun karena ini situs statis.
4. Vercel akan memberi URL publik, misalnya `nama-repo.vercel.app`.

Setiap kali file di GitHub diperbarui (push/commit baru), Vercel otomatis
build ulang dan mempublikasikan versi terbaru.

## Menghubungkan form kontak ke Supabase (opsional)

1. Buat project baru di [supabase.com](https://supabase.com).
2. Di **Table Editor**, buat tabel bernama `messages` dengan kolom:
   `name` (text), `email` (text), `message` (text).
3. Di **Settings → API**, salin **Project URL** dan **anon public key**.
4. Tempel keduanya ke bagian atas `script.js`:
   ```js
   const SUPABASE_URL = "https://xxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOi...";
   ```
5. Commit & push perubahan itu — Vercel akan otomatis deploy ulang.

Setelah ini aktif, setiap pesan yang dikirim lewat form kontak akan
tersimpan ke tabel `messages` di Supabase.
