const SAMPLE_RATE = 8_000;
const CHANNELS = 1;
const BITS_PER_SAMPLE = 16;
const DURATION_SECONDS = 1.5;

export function createDemoWave(): Uint8Array {
  const sampleCount = Math.floor(SAMPLE_RATE * DURATION_SECONDS);
  const bytesPerSample = BITS_PER_SAMPLE / 8;
  const dataSize = sampleCount * CHANNELS * bytesPerSample;
  const bytes = new Uint8Array(44 + dataSize);
  const view = new DataView(bytes.buffer);

  writeAscii(bytes, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeAscii(bytes, 8, "WAVE");
  writeAscii(bytes, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, CHANNELS, true);
  view.setUint32(24, SAMPLE_RATE, true);
  view.setUint32(28, SAMPLE_RATE * CHANNELS * bytesPerSample, true);
  view.setUint16(32, CHANNELS * bytesPerSample, true);
  view.setUint16(34, BITS_PER_SAMPLE, true);
  writeAscii(bytes, 36, "data");
  view.setUint32(40, dataSize, true);

  for (let index = 0; index < sampleCount; index += 1) {
    const time = index / SAMPLE_RATE;
    const fadeIn = Math.min(1, time / 0.08);
    const fadeOut = Math.min(1, (DURATION_SECONDS - time) / 0.12);
    const envelope = Math.max(0, Math.min(fadeIn, fadeOut));
    const signal =
      Math.sin(2 * Math.PI * 440 * time) * 0.18 +
      Math.sin(2 * Math.PI * 660 * time) * 0.07;
    const sample = Math.round(signal * envelope * 0x7fff);
    view.setInt16(44 + index * bytesPerSample, sample, true);
  }

  return bytes;
}

function writeAscii(target: Uint8Array, offset: number, value: string) {
  for (let index = 0; index < value.length; index += 1) {
    target[offset + index] = value.charCodeAt(index);
  }
}
