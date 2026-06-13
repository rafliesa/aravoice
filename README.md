# Aravoice Frontend

The frontend proxies `/api/*` to the Go backend.

Copy the example environment file when the backend is not running at the default `http://localhost:8080`:

```bash
cp .env.example .env.local
```

Start the backend and ensure its `news` migration has been applied, then run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Use [http://localhost:3000/admin](http://localhost:3000/admin) to create, list, publish, and delete news. Published news is loaded from the backend on the home page.

Seed the local database with the sample articles from the backend directory:

```bash
set -a
source .env
psql "$DATABASE_URL" -f seeds/news.sql
```
