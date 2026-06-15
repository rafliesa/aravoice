import "dotenv/config";
import { defineConfig, env } from "prisma/config";

function getDatasourceUrl() {
  const directUrl =
    process.env.DIRECT_URL || process.env.DATABASE_URL_UNPOOLED;
  if (directUrl) {
    return directUrl;
  }

  const databaseUrl = env("DATABASE_URL");
  const url = new URL(databaseUrl);

  if (url.hostname.endsWith(".neon.tech")) {
    url.hostname = url.hostname.replace("-pooler.", ".");
  }

  return url.toString();
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: getDatasourceUrl(),
  },
});
