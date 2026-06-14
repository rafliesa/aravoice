import { describe, expect, it } from "vitest";
import {
  detectMedia,
  validateMediaUpload,
} from "@/lib/server/uploads";

describe("detectMedia", () => {
  it.each([
    ["photo.jpg", "image/jpeg", [0xff, 0xd8, 0xff, 0xe0], "image"],
    ["photo.png", "image/png", [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], "image"],
    ["voice.mp3", "audio/mpeg", [...new TextEncoder().encode("ID3"), 0x04], "audio"],
    ["clip.mp4", "video/mp4", [0, 0, 0, 24, ...new TextEncoder().encode("ftyp")], "video"],
  ])("accepts %s", (filename, mimeType, signature, kind) => {
    expect(detectMedia(filename, mimeType, new Uint8Array(signature)).kind).toBe(
      kind,
    );
  });

  it("rejects mismatched signatures", () => {
    expect(() =>
      detectMedia("photo.png", "image/png", new TextEncoder().encode("plain text")),
    ).toThrow("file signature does not match its media type");
  });

  it("rejects unsupported extensions", () => {
    expect(() =>
      detectMedia("image.svg", "image/svg+xml", new TextEncoder().encode("<svg>")),
    ).toThrow("unsupported file extension or media type");
  });

  it("returns Blob constraints without reading the complete file", () => {
    const media = validateMediaUpload(
      "news/interview.mp4",
      "video/mp4",
      20 << 20,
    );

    expect(media).toMatchObject({
      kind: "video",
      mimeType: "video/mp4",
      limit: 200 << 20,
    });
  });

  it("rejects oversized Blob uploads", () => {
    expect(() =>
      validateMediaUpload(
        "news/interview.mp4",
        "video/mp4",
        (200 << 20) + 1,
      ),
    ).toThrow("video file exceeds the 200 MB limit");
  });
});
