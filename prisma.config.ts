import "dotenv/config";
import { defineConfig, env } from "prisma/config";

const datasourceUrl =
  process.env.DIRECT_URL ??
  process.env.DATABASE_URL_UNPOOLED ??
  env("DATABASE_URL");

if (new URL(datasourceUrl).hostname.includes("-pooler.")) {
  throw new Error(
    "Prisma CLI requires a direct database connection. Set DIRECT_URL or DATABASE_URL_UNPOOLED to the Neon connection URL without '-pooler'.",
  );
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: datasourceUrl,
  },
});
