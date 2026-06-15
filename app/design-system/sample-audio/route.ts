import { createDemoWave } from "@/lib/design-system/demo-audio";

export const dynamic = "force-static";

export function GET() {
  const audio = createDemoWave();
  const payload = audio.buffer.slice(
    audio.byteOffset,
    audio.byteOffset + audio.byteLength,
  ) as ArrayBuffer;

  return new Response(payload, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Length": String(audio.byteLength),
      "Content-Type": "audio/wav",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
