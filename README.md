# Aravoice

Aravoice adalah aplikasi full-stack Next.js. Halaman web dan endpoint API
berjalan dalam proses yang sama, sedangkan akses PostgreSQL menggunakan Prisma.

## Deploy ke Vercel

Repository ini sudah memiliki konfigurasi Vercel di `vercel.json`. Build Vercel
akan otomatis membuat Prisma Client, menjalankan migration production, lalu
menjalankan build Next.js.

Sebelum deployment pertama:

1. Import repository ini melalui **Vercel → Add New → Project**.
2. Hubungkan database PostgreSQL melalui tab **Storage**. Prisma Postgres dari
   Vercel Marketplace direkomendasikan karena otomatis menyediakan
   `DATABASE_URL`.
3. Buat dan hubungkan **Vercel Blob** melalui tab **Storage**. Vercel otomatis
   menyediakan `BLOB_READ_WRITE_TOKEN`.
4. Tambahkan `ADMIN_PASSWORD` melalui **Settings → Environment Variables** dan
   tandai sebagai Sensitive. Gunakan password yang panjang dan unik.
5. Deploy atau redeploy project.

Environment production yang dibutuhkan:

| Variable | Kegunaan |
| --- | --- |
| `DATABASE_URL` | Koneksi PostgreSQL yang digunakan aplikasi dan migration |
| `ADMIN_PASSWORD` | Login `/admin` sekaligus kunci penandatanganan sesi |
| `BLOB_READ_WRITE_TOKEN` | Upload media persisten melalui Vercel Blob |

`vercel-build` menjalankan `prisma migrate deploy`, sehingga tabel `news`
langsung dibuat pada database baru. Gunakan database terpisah untuk Preview
Deployment jika preview tidak boleh menjalankan migration ke database
production.

## Requirements

- Node.js 20.19+, 22.12+, atau 24+
- pnpm 11.5.1
- PostgreSQL

## Setup

Install dependency dan buat environment lokal:

```bash
pnpm install
cp .env.example .env
```

Sesuaikan `DATABASE_URL` dan `ADMIN_PASSWORD` di `.env`. Password tersebut
digunakan untuk login ke `/admin`. Lalu siapkan database baru:

```bash
pnpm db:deploy
```

Jika tabel `news` sudah dibuat oleh migration backend Go sebelumnya, tandai
migration awal Prisma sebagai sudah diterapkan tanpa membuat ulang tabel:

```bash
pnpm db:baseline
```

Data contoh dapat dimasukkan dengan:

```bash
pnpm db:seed
```

Jalankan aplikasi:

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000). Halaman admin tersedia di
[http://localhost:3000/admin](http://localhost:3000/admin) dan dilindungi oleh
password dari `ADMIN_PASSWORD`.

## Struktur

```text
app/
  api/                  Next.js Route Handlers
  admin/                Halaman pengelolaan berita
components/             Komponen UI dan editor
lib/
  prisma.ts             Prisma Client singleton
  server/               Logika berita, sanitasi, dan upload
prisma/
  migrations/           Migration PostgreSQL
  schema.prisma         Model database
  seed.sql              Data contoh
```

## Commands

```bash
pnpm dev          # Generate Prisma Client dan jalankan Next.js
pnpm build        # Production build
pnpm lint         # ESLint
pnpm typecheck    # Generate Prisma Client dan periksa TypeScript
pnpm test         # Unit test
pnpm db:migrate   # Buat dan terapkan migration saat development
pnpm db:deploy    # Terapkan migration yang sudah ada
pnpm db:studio    # Buka Prisma Studio
```

Saat development tanpa `BLOB_READ_WRITE_TOKEN`, upload media disimpan di
direktori lokal `uploads/`. Di Vercel, editor memakai client upload langsung ke
Vercel Blob sehingga file tidak melewati batas payload Vercel Functions dan
tetap persisten antar-deployment.
