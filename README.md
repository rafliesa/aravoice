# Aravoice

Aravoice adalah aplikasi full-stack Next.js. Halaman web dan endpoint API
berjalan dalam proses yang sama, sedangkan akses PostgreSQL menggunakan Prisma.

## CI/CD dan deploy ke Vercel

Workflow `.github/workflows/ci-cd.yml` menjalankan lint, typecheck, test, dan
production build untuk setiap pull request. Push ke `main` menjalankan checks
yang sama lalu melakukan production deployment ke Vercel. Deployment juga bisa
dijalankan manual dari tab **Actions**.

Sebelum deployment pertama:

1. Import repository ini melalui **Vercel → Add New → Project**.
2. Hubungkan database PostgreSQL melalui tab **Storage**. Prisma Postgres dari
   Vercel Marketplace direkomendasikan karena otomatis menyediakan
   `DATABASE_URL`.
3. Buat dan hubungkan **Vercel Blob** melalui tab **Storage**. Vercel otomatis
   menyediakan `BLOB_READ_WRITE_TOKEN`.
4. Tambahkan `ADMIN_PASSWORD` melalui **Settings → Environment Variables** dan
   tandai sebagai Sensitive. Gunakan password yang panjang dan unik.
5. Buat Vercel access token melalui **Account Settings → Tokens**.
6. Jalankan `vercel link` secara lokal dan ambil `orgId` serta `projectId` dari
   `.vercel/project.json`.
7. Tambahkan repository secrets berikut melalui
   **GitHub → Settings → Secrets and variables → Actions**:

| GitHub secret | Isi |
| --- | --- |
| `VERCEL_TOKEN` | Access token dari Vercel |
| `VERCEL_ORG_ID` | Nilai `orgId` dari `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Nilai `projectId` dari `.vercel/project.json` |

Setelah ketiga secret tersedia, push ke `main` atau jalankan workflow secara
manual. Workflow menggunakan `vercel pull`, `vercel build`, dan
`vercel deploy --prebuilt --prod`, sehingga tidak bergantung pada trigger Git
integration Vercel.

Environment production yang dibutuhkan:

| Variable | Kegunaan |
| --- | --- |
| `DATABASE_URL` | Koneksi PostgreSQL pooled yang digunakan aplikasi |
| `DATABASE_URL_UNPOOLED` atau `DIRECT_URL` | Koneksi langsung yang digunakan Prisma migration |
| `ADMIN_PASSWORD` | Login `/admin` sekaligus kunci penandatanganan sesi |
| `BLOB_READ_WRITE_TOKEN` | Upload media persisten melalui Vercel Blob |

Jika tersedia, Prisma CLI memprioritaskan `DIRECT_URL` atau
`DATABASE_URL_UNPOOLED`. Jika Vercel hanya menyediakan `DATABASE_URL` pooled
dari Neon, konfigurasi otomatis menghapus `-pooler` dari hostname untuk
menggunakan endpoint direct saat migration. Prisma CLI memerlukan koneksi
langsung karena migration menggunakan advisory lock yang tidak didukung oleh
PgBouncer transaction mode.

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

Sesuaikan `DATABASE_URL`, `DIRECT_URL`, dan `ADMIN_PASSWORD` di `.env`.
`DIRECT_URL` dapat sama dengan `DATABASE_URL` untuk PostgreSQL lokal tanpa
pooler. Password admin digunakan untuk login ke `/admin`. Lalu siapkan database
baru:

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
