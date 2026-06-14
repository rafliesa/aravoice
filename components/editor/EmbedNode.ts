import { Node, mergeAttributes } from "@tiptap/core";

export type EmbedProvider = "youtube" | "vimeo" | "spotify" | "soundcloud";

type EmbedConfig = {
  title: string;
  allow?: string;
  allowFullScreen?: boolean;
};

const EMBED_CONFIG: Record<EmbedProvider, EmbedConfig> = {
  youtube: {
    title: "YouTube video",
    allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen",
    allowFullScreen: true,
  },
  vimeo: {
    title: "Vimeo video",
    allow: "fullscreen; picture-in-picture",
    allowFullScreen: true,
  },
  spotify: {
    title: "Spotify player",
    allow: "encrypted-media",
  },
  soundcloud: {
    title: "SoundCloud player",
  },
};

const EmbedNode = Node.create({
  name: "embed",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      provider: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-provider"),
      },
      src: {
        default: null,
        parseHTML: (element) => element.getAttribute("src"),
      },
    };
  },

  parseHTML() {
    return [{ tag: "iframe[data-provider][src]" }];
  },

  renderHTML({ HTMLAttributes }) {
    const provider = HTMLAttributes.provider as EmbedProvider;
    const config = EMBED_CONFIG[provider] ?? EMBED_CONFIG.youtube;
    return [
      "iframe",
      mergeAttributes({
        src: HTMLAttributes.src,
        "data-provider": provider,
        title: config.title,
        loading: "lazy",
        referrerpolicy: "strict-origin-when-cross-origin",
        ...(config.allow ? { allow: config.allow } : {}),
        ...(config.allowFullScreen ? { allowfullscreen: "" } : {}),
      }),
    ];
  },
});

export default EmbedNode;
