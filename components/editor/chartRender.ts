export type ChartType = "bar" | "line" | "pie";

export type ChartSeries = { label: string; values: number[] };

export type ChartData = {
  type: ChartType;
  title: string;
  labels: string[];
  series: ChartSeries[];
  source?: string;
};

const PALETTE = [
  "#F29100",
  "#082b4d",
  "#e05c2a",
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
];

const W = 560;
const H = 320;
const PAD = { top: 36, right: 16, bottom: 56, left: 52 };
const CW = W - PAD.left - PAD.right;
const CH = H - PAD.top - PAD.bottom;

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function allValues(series: ChartSeries[]) {
  return series.flatMap((s) => s.values);
}

function yAxis(min: number, max: number, ticks = 5): number[] {
  if (min === max) return [min];
  const step = (max - min) / ticks;
  return Array.from({ length: ticks + 1 }, (_, i) =>
    parseFloat((min + step * i).toFixed(2)),
  );
}

export function renderChartSvg(data: ChartData): string {
  const { type, title, labels, series, source } = data;

  const svgOpen = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}" font-family="system-ui,sans-serif">`;

  const titleEl = title
    ? `<text x="${W / 2}" y="22" text-anchor="middle" font-size="13" font-weight="600" fill="#1a1a1a">${esc(title)}</text>`
    : "";

  const sourceEl = source
    ? `<text x="${PAD.left}" y="${H - 4}" font-size="10" fill="#6b7280">Sumber: ${esc(source)}</text>`
    : "";

  let body = "";

  if (type === "pie") {
    body = renderPie(series, labels);
  } else if (type === "bar") {
    body = renderBar(labels, series);
  } else {
    body = renderLine(labels, series);
  }

  const legend =
    series.length > 1
      ? renderLegend(series.map((s, i) => ({ label: s.label, color: PALETTE[i % PALETTE.length] })))
      : "";

  return `${svgOpen}${titleEl}${body}${legend}${sourceEl}</svg>`;
}

// ─── Bar ─────────────────────────────────────────────────────────────────────

function renderBar(labels: string[], series: ChartSeries[]) {
  const values = allValues(series);
  const dataMin = Math.min(0, ...values);
  const dataMax = Math.max(...values);
  const ticks = yAxis(dataMin, dataMax);
  const yMin = ticks[0];
  const yMax = ticks[ticks.length - 1];
  const yRange = yMax - yMin || 1;

  const toY = (v: number) => PAD.top + CH - ((v - yMin) / yRange) * CH;

  const zeroY = toY(0);

  const groupCount = labels.length;
  const seriesCount = series.length;
  const groupW = CW / groupCount;
  const barW = Math.min(32, (groupW * 0.7) / seriesCount);
  const groupPad = (groupW - barW * seriesCount) / 2;

  const gridLines = ticks
    .map((t) => {
      const y = toY(t);
      return `<line x1="${PAD.left}" y1="${y}" x2="${PAD.left + CW}" y2="${y}" stroke="#e5e7eb" stroke-width="1"/>
<text x="${PAD.left - 6}" y="${y + 4}" text-anchor="end" font-size="10" fill="#6b7280">${t}</text>`;
    })
    .join("");

  const xLabels = labels
    .map((lbl, gi) => {
      const cx = PAD.left + gi * groupW + groupW / 2;
      return `<text x="${cx}" y="${PAD.top + CH + 16}" text-anchor="middle" font-size="10" fill="#374151">${esc(lbl)}</text>`;
    })
    .join("");

  const bars = series
    .map((s, si) =>
      s.values
        .map((v, gi) => {
          const x = PAD.left + gi * groupW + groupPad + si * barW;
          const y = v >= 0 ? toY(v) : zeroY;
          const h = Math.abs(toY(v) - zeroY);
          const color = PALETTE[si % PALETTE.length];
          return `<rect x="${x}" y="${y}" width="${barW - 1}" height="${Math.max(1, h)}" fill="${color}" rx="2"/>
<title>${esc(s.label)}: ${v}</title>`;
        })
        .join(""),
    )
    .join("");

  const axes = `<line x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${PAD.top + CH}" stroke="#9ca3af" stroke-width="1"/>
<line x1="${PAD.left}" y1="${PAD.top + CH}" x2="${PAD.left + CW}" y2="${PAD.top + CH}" stroke="#9ca3af" stroke-width="1"/>`;

  return `<g>${gridLines}${axes}${bars}${xLabels}</g>`;
}

// ─── Line ────────────────────────────────────────────────────────────────────

function renderLine(labels: string[], series: ChartSeries[]) {
  const values = allValues(series);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const ticks = yAxis(dataMin, dataMax);
  const yMin = ticks[0];
  const yMax = ticks[ticks.length - 1];
  const yRange = yMax - yMin || 1;

  const toY = (v: number) => PAD.top + CH - ((v - yMin) / yRange) * CH;
  const toX = (i: number) =>
    labels.length < 2 ? PAD.left + CW / 2 : PAD.left + (i / (labels.length - 1)) * CW;

  const gridLines = ticks
    .map((t) => {
      const y = toY(t);
      return `<line x1="${PAD.left}" y1="${y}" x2="${PAD.left + CW}" y2="${y}" stroke="#e5e7eb" stroke-width="1"/>
<text x="${PAD.left - 6}" y="${y + 4}" text-anchor="end" font-size="10" fill="#6b7280">${t}</text>`;
    })
    .join("");

  const xLabels = labels
    .map(
      (lbl, i) =>
        `<text x="${toX(i)}" y="${PAD.top + CH + 16}" text-anchor="middle" font-size="10" fill="#374151">${esc(lbl)}</text>`,
    )
    .join("");

  const lines = series
    .map((s, si) => {
      const color = PALETTE[si % PALETTE.length];
      const pts = s.values.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
      const dots = s.values
        .map(
          (v, i) =>
            `<circle cx="${toX(i)}" cy="${toY(v)}" r="3" fill="${color}"><title>${esc(s.label)}: ${v}</title></circle>`,
        )
        .join("");
      return `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>${dots}`;
    })
    .join("");

  const axes = `<line x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${PAD.top + CH}" stroke="#9ca3af" stroke-width="1"/>
<line x1="${PAD.left}" y1="${PAD.top + CH}" x2="${PAD.left + CW}" y2="${PAD.top + CH}" stroke="#9ca3af" stroke-width="1"/>`;

  return `<g>${gridLines}${axes}${lines}${xLabels}</g>`;
}

// ─── Pie ─────────────────────────────────────────────────────────────────────

function renderPie(series: ChartSeries[], labels: string[]) {
  const values = series[0]?.values ?? [];
  const total = values.reduce((a, b) => a + Math.abs(b), 0) || 1;

  const cx = W / 2;
  const cy = PAD.top + CH / 2 + 8;
  const r = Math.min(CW, CH) / 2 - 4;

  let angle = -Math.PI / 2;
  const slices = values.map((v, i) => {
    const sweep = (Math.abs(v) / total) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    const midAngle = angle - sweep / 2;
    const lx = cx + r * 0.65 * Math.cos(midAngle);
    const ly = cy + r * 0.65 * Math.sin(midAngle);
    const pct = ((Math.abs(v) / total) * 100).toFixed(1);
    const color = PALETTE[i % PALETTE.length];
    const label = labels[i] ?? `Item ${i + 1}`;
    return `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z" fill="${color}"><title>${esc(label)}: ${v} (${pct}%)</title></path>
${sweep > 0.3 ? `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">${pct}%</text>` : ""}`;
  });

  const pieLegend = labels
    .map(
      (lbl, i) =>
        `<rect x="${PAD.left}" y="${PAD.top + CH + 26 + i * 16}" width="10" height="10" fill="${PALETTE[i % PALETTE.length]}" rx="2"/>
<text x="${PAD.left + 14}" y="${PAD.top + CH + 35 + i * 16}" font-size="10" fill="#374151">${esc(lbl)}</text>`,
    )
    .join("");

  return `<g>${slices.join("")}${pieLegend}</g>`;
}

// ─── Legend ──────────────────────────────────────────────────────────────────

function renderLegend(items: { label: string; color: string }[]) {
  const y = H - 16;
  let x = PAD.left;
  return items
    .map((item) => {
      const el = `<rect x="${x}" y="${y - 8}" width="10" height="10" fill="${item.color}" rx="2"/>
<text x="${x + 13}" y="${y + 1}" font-size="10" fill="#374151">${esc(item.label)}</text>`;
      x += item.label.length * 6.5 + 28;
      return el;
    })
    .join("");
}
