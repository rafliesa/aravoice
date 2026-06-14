import { Node, mergeAttributes } from "@tiptap/core";

export type MediaKind = "audio" | "video";

const MediaNode = Node.create({
  name: "media",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      kind: {
        default: "audio",
        parseHTML: (element) => element.tagName.toLowerCase(),
      },
      src: {
        default: null,
        parseHTML: (element) => element.getAttribute("src"),
      },
    };
  },

  parseHTML() {
    return [{ tag: "audio[src]" }, { tag: "video[src]" }];
  },

  renderHTML({ HTMLAttributes }) {
    const { kind: rawKind, ...mediaAttributes } = HTMLAttributes;
    const kind: MediaKind = rawKind === "video" ? "video" : "audio";
    const attributes = {
      ...mediaAttributes,
      controls: "",
      preload: "metadata",
      ...(kind === "video" ? { playsinline: "" } : {}),
    };
    return [kind, mergeAttributes(attributes)];
  },
});

export default MediaNode;
