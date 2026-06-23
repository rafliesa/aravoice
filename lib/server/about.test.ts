import { describe, expect, it, vi } from "vitest";

// Mock prisma and process.env.DATABASE_URL before importing the server helper
process.env.DATABASE_URL = "postgresql://mock:mock@localhost:5432/mock";
vi.mock("@/lib/prisma", () => ({
  prisma: {},
}));

import {
  parseCreateEditorialMemberPayload,
  serializeEditorialMember,
} from "@/lib/server/about";
import type { EditorialMember as EditorialMemberRecord } from "@/generated/prisma/client";

describe("editorial team server helpers", () => {
  describe("parseCreateEditorialMemberPayload", () => {
    it("parses valid payload correctly", () => {
      const input = {
        name: "Ahmad",
        role: "Reporter",
        image: "https://example.com/pic.jpg",
        sort_order: 5,
      };

      const result = parseCreateEditorialMemberPayload(input);
      expect(result).toEqual({
        name: "Ahmad",
        role: "Reporter",
        image: "https://example.com/pic.jpg",
        sort_order: 5,
      });
    });

    it("parses payload with empty image successfully", () => {
      const input = {
        name: "Ahmad",
        role: "Reporter",
        sort_order: 0,
      };

      const result = parseCreateEditorialMemberPayload(input);
      expect(result).toEqual({
        name: "Ahmad",
        role: "Reporter",
        image: "",
        sort_order: 0,
      });
    });

    it("throws ApiError if required fields are missing", () => {
      expect(() =>
        parseCreateEditorialMemberPayload({
          role: "Reporter",
          sort_order: 0,
        })
      ).toThrow("name is required");

      expect(() =>
        parseCreateEditorialMemberPayload({
          name: "Ahmad",
          sort_order: 0,
        })
      ).toThrow("role is required");
    });

    it("throws ApiError if sort_order is not an integer", () => {
      expect(() =>
        parseCreateEditorialMemberPayload({
          name: "Ahmad",
          role: "Reporter",
          sort_order: "first",
        } as any)
      ).toThrow("sort_order must be an integer");
    });

    it("throws ApiError if unknown fields are provided", () => {
      expect(() =>
        parseCreateEditorialMemberPayload({
          name: "Ahmad",
          role: "Reporter",
          sort_order: 1,
          unknown_field: "test",
        })
      ).toThrow("unknown field: unknown_field");
    });
  });

  describe("serializeEditorialMember", () => {
    it("serializes db record to client object correctly", () => {
      const record: EditorialMemberRecord = {
        id: 42,
        name: "Budi",
        role: "Fotografer",
        image: "/uploads/budi.png",
        sortOrder: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = serializeEditorialMember(record);
      expect(result).toEqual({
        id: 42,
        name: "Budi",
        role: "Fotografer",
        image: "/uploads/budi.png",
        sort_order: 2,
      });
    });
  });
});
