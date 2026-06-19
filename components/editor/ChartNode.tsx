import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import type { ChartData } from "./chartRender";
import ChartNodeView from "./ChartNodeView";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    chart: {
      insertChart: (data: ChartData) => ReturnType;
      updateChart: (data: ChartData) => ReturnType;
    };
  }
}

const ChartNode = Node.create({
  name: "chart",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      chartData: {
        default: null,
        parseHTML: (element) => {
          const raw = element.getAttribute("data-chart");
          if (!raw) return null;
          try {
            return JSON.parse(decodeURIComponent(raw)) as ChartData;
          } catch {
            return null;
          }
        },
        renderHTML: (attributes) => {
          if (!attributes.chartData) return {};
          return {
            "data-chart": encodeURIComponent(JSON.stringify(attributes.chartData)),
          };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: "div[data-chart]" }];
  },

  renderHTML({ HTMLAttributes }) {
    const { chartData, ...rest } = HTMLAttributes;
    return ["div", mergeAttributes(rest, { "data-chart": HTMLAttributes["data-chart"] ?? "" })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ChartNodeView);
  },

  addCommands() {
    return {
      insertChart:
        (data: ChartData) =>
        ({ commands }) =>
          commands.insertContent({
            type: this.name,
            attrs: { chartData: data },
          }),
      updateChart:
        (data: ChartData) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { chartData: data }),
    };
  },
});

export default ChartNode;
