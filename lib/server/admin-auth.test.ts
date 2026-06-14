import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  ADMIN_SESSION_TTL_SECONDS,
  createAdminSession,
  isValidAdminSession,
  verifyAdminPassword,
} from "@/lib/server/admin-auth";

const PASSWORD = "correct-horse-battery-staple-2026";

describe("admin authentication", () => {
  beforeEach(() => {
    process.env.ADMIN_PASSWORD = PASSWORD;
  });

  afterEach(() => {
    delete process.env.ADMIN_PASSWORD;
  });

  it("compares the configured password", () => {
    expect(verifyAdminPassword(PASSWORD)).toBe(true);
    expect(verifyAdminPassword("incorrect-password")).toBe(false);
  });

  it("accepts an untampered session before it expires", () => {
    const now = Date.UTC(2026, 5, 14);
    const session = createAdminSession(now);

    expect(isValidAdminSession(session, now + 1_000)).toBe(true);
  });

  it("rejects expired and tampered sessions", () => {
    const now = Date.UTC(2026, 5, 14);
    const session = createAdminSession(now);
    const tampered = `${session.slice(0, -1)}x`;

    expect(
      isValidAdminSession(
        session,
        now + ADMIN_SESSION_TTL_SECONDS * 1_000,
      ),
    ).toBe(false);
    expect(isValidAdminSession(tampered, now + 1_000)).toBe(false);
  });
});
