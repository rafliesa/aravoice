# Aravoice

Aravoice adalah aplikasi full-stack Next.js. Halaman web dan endpoint API
berjalan dalam proses yang sama, sedangkan akses PostgreSQL menggunakan Prisma.

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

Upload media disimpan di direktori `uploads/`. Deployment production perlu
menyediakan persistent storage untuk direktori ini.
