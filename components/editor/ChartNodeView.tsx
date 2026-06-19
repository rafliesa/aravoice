"use client";

import { NodeViewWrapper } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import { renderChartSvg, type ChartData } from "./chartRender";

export default function ChartNodeView({ node, selected }: NodeViewProps) {
  const data = node.attrs.chartData as ChartData | null;

  return (
    <NodeViewWrapper
      className={`chart-node my-6 rounded-lg border bg-white p-3 ${
        selected ? "outline outline-2 outline-offset-2 outline-[#F29100]" : "border-zinc-200"
      }`}
      data-drag-handle
    >
      {data ? (
        <div
          className="w-full overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: renderChartSvg(data) }}
        />
      ) : (
        <div className="flex h-32 items-center justify-center text-sm text-zinc-400">
          Grafik kosong — klik Edit untuk mengisi data.
        </div>
      )}
    </NodeViewWrapper>
  );
}
