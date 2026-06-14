import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { ApiError } from "@/lib/server/http";

export type MediaKind = "image" | "audio" | "video";

type MediaType = {
  kind: MediaKind;
  mimeType: string;
  extension: string;
  limit: number;
};

const MB = 1 << 20;
const STORED_FILENAME =
  /^[a-f0-9]{32}\.(jpe?g|png|webp|gif|mp3|wav|ogg|oga|m4a|mp4|webm|ogv)$/;

const MEDIA: Record<string, MediaType[]> = {
  ".jpg": [{ kind: "image", mimeType: "image/jpeg", extension: ".jpg", limit: 10 * MB }],
  ".jpeg": [{ kind: "image", mimeType: "image/jpeg", extension: ".jpg", limit: 10 * MB }],
  ".png": [{ kind: "image", mimeType: "image/png", extension: ".png", limit: 10 * MB }],
  ".webp": [{ kind: "image", mimeType: "image/webp", extension: ".webp", limit: 10 * MB }],
  ".gif": [{ kind: "image", mimeType: "image/gif", extension: ".gif", limit: 10 * MB }],
  ".mp3": [{ kind: "audio", mimeType: "audio/mpeg", extension: ".mp3", limit: 50 * MB }],
  ".wav": [{ kind: "audio", mimeType: "audio/wav", extension: ".wav", limit: 50 * MB }],
  ".m4a": [{ kind: "audio", mimeType: "audio/mp4", extension: ".m4a", limit: 50 * MB }],
  ".mp4": [{ kind: "video", mimeType: "video/mp4", extension: ".mp4", limit: 200 * MB }],
  ".webm": [{ kind: "video", mimeType: "video/webm", extension: ".webm", limit: 200 * MB }],
  ".oga": [
    { kind: "audio", mimeType: "audio/ogg", extension: ".oga", limit: 50 * MB },
  ],
  ".ogv": [
    { kind: "video", mimeType: "video/ogg", extension: ".ogv", limit: 200 * MB },
  ],
  ".ogg": [
    { kind: "audio", mimeType: "audio/ogg", extension: ".ogg", limit: 50 * MB },
    { kind: "video", mimeType: "video/ogg", extension: ".ogv", limit: 200 * MB },
  ],
};

function bytesStartWith(bytes: Uint8Array, expected: number[]) {
  return expected.every((value, index) => bytes[index] === value);
}

function textAt(bytes: Uint8Array, start: number, end: number) {
  return new TextDecoder().decode(bytes.slice(start, end));
}

function signatureMatches(media: MediaType, bytes: Uint8Array) {
  switch (media.mimeType) {
    case "image/jpeg":
      return bytesStartWith(bytes, [0xff, 0xd8, 0xff]);
    case "image/png":
      return bytesStartWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    case "image/webp":
      return textAt(bytes, 0, 4) === "RIFF" && textAt(bytes, 8, 12) === "WEBP";
    case "image/gif":
      return textAt(bytes, 0, 6) === "GIF87a" || textAt(bytes, 0, 6) === "GIF89a";
    case "audio/mpeg":
      return (
        textAt(bytes, 0, 3) === "ID3" ||
        (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)
      );
    case "audio/wav":
      return textAt(bytes, 0, 4) === "RIFF" && textAt(bytes, 8, 12) === "WAVE";
    case "audio/ogg":
    case "video/ogg":
      return textAt(bytes, 0, 4) === "OggS";
    case "audio/mp4":
    case "video/mp4":
      return textAt(bytes, 4, 8) === "ftyp";
    case "video/webm":
      return bytesStartWith(bytes, [0x1a, 0x45, 0xdf, 0xa3]);
    default:
      return false;
  }
}

export function detectMedia(
  filename: string,
  declaredMime: string,
  bytes: Uint8Array,
) {
  const extension = path.extname(filename).toLowerCase();
  const normalizedMime = declaredMime.toLowerCase().split(";", 1)[0].trim();
  const candidate = MEDIA[extension]?.find((item) => {
    if (item.mimeType === normalizedMime) return true;
    return (
      item.mimeType === "audio/mpeg" && normalizedMime === "audio/mp3"
    ) || (
      item.mimeType === "audio/wav" &&
      ["audio/wave", "audio/x-wav"].includes(normalizedMime)
    ) || (
      item.mimeType === "audio/mp4" && normalizedMime === "audio/x-m4a"
    ) || (
      ["audio/ogg", "video/ogg"].includes(item.mimeType) &&
      normalizedMime === "application/ogg"
    );
  });

  if (!candidate) {
    throw new ApiError("unsupported file extension or media type", 415);
  }
  if (!signatureMatches(candidate, bytes)) {
    throw new ApiError("file signature does not match its media type", 415);
  }
  return candidate;
}

export async function storeUpload(file: File) {
  if (file.size === 0) throw new ApiError("uploaded file is empty", 400);

  const head = new Uint8Array(await file.slice(0, 512).arrayBuffer());
  const media = detectMedia(file.name, file.type, head);
  if (file.size > media.limit) {
    throw new ApiError(
      `${media.kind} file exceeds the ${media.limit >> 20} MB limit`,
      413,
    );
  }

  const directory = path.join(process.cwd(), "uploads");
  await mkdir(directory, { recursive: true });
  const filename = `${randomBytes(16).toString("hex")}${media.extension}`;
  await writeFile(
    path.join(directory, filename),
    new Uint8Array(await file.arrayBuffer()),
    {
      flag: "wx",
      mode: 0o644,
    },
  );

  return {
    url: `/api/uploads/${filename}`,
    kind: media.kind,
    mime_type: media.mimeType,
    size: file.size,
  };
}

export async function loadUpload(filename: string) {
  if (!STORED_FILENAME.test(filename) || path.basename(filename) !== filename) {
    throw new ApiError("file not found", 404);
  }

  const extension = path.extname(filename).toLowerCase();
  const contentType =
    MEDIA[extension]?.[0]?.mimeType ??
    (extension === ".jpeg" ? "image/jpeg" : "application/octet-stream");

  try {
    return {
      data: await readFile(
        path.join(process.cwd(), "uploads", filename),
      ),
      contentType,
    };
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new ApiError("file not found", 404);
    }
    throw error;
  }
}
