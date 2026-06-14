import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const env = { ...process.env };
if (process.platform === "linux" && process.env.NIX_PROFILES) {
  env.PRISMA_CLI_BINARY_TARGETS ??= "debian-openssl-3.0.x";

  const pnpmStore = path.join(process.cwd(), "node_modules", ".pnpm");
  if (existsSync(pnpmStore)) {
    const enginesPackage = readdirSync(pnpmStore).find((entry) =>
      entry.startsWith("@prisma+engines@"),
    );
    if (enginesPackage) {
      const schemaEngine = path.join(
        pnpmStore,
        enginesPackage,
        "node_modules",
        "@prisma",
        "engines",
        "schema-engine-debian-openssl-3.0.x",
      );
      if (existsSync(schemaEngine)) {
        env.PRISMA_SCHEMA_ENGINE_BINARY ??= schemaEngine;
      }
    }
  }
}

const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const result = spawnSync(
  command,
  ["exec", "prisma", ...process.argv.slice(2)],
  { env, stdio: "inherit" },
);

process.exit(result.status ?? 1);
