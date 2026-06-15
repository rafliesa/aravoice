import { describe, expect, it } from "vitest";
import { GET } from "@/app/design-system/sample-audio/route";
import { createDemoWave } from "@/lib/design-system/demo-audio";

function ascii(bytes: Uint8Array, start: number, end: number) {
  return String.fromCharCode(...bytes.slice(start, end));
}

describe("createDemoWave", () => {
  it("creates a valid mono PCM WAV payload", () => {
    const audio = createDemoWave();
    const view = new DataView(audio.buffer);

    expect(ascii(audio, 0, 4)).toBe("RIFF");
    expect(ascii(audio, 8, 12)).toBe("WAVE");
    expect(ascii(audio, 36, 40)).toBe("data");
    expect(view.getUint16(20, true)).toBe(1);
    expect(view.getUint16(22, true)).toBe(1);
    expect(view.getUint32(24, true)).toBe(8_000);
    expect(view.getUint32(40, true)).toBe(audio.byteLength - 44);
  });

  it("serves the demo with explicit media security headers", async () => {
    const response = GET();

    expect(response.headers.get("content-type")).toBe("audio/wav");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(Number(response.headers.get("content-length"))).toBeGreaterThan(44);
    expect((await response.arrayBuffer()).byteLength).toBeGreaterThan(44);
  });
});
