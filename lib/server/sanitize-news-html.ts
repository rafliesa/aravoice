import sanitizeHtml from "sanitize-html";
import { normalizeEmbedUrl } from "@/components/editor/embed";

const UPLOAD_URL =
  /^\/api\/uploads\/[a-f0-9]{32}\.(jpe?g|png|webp|gif|mp3|wav|ogg|oga|m4a|mp4|webm|ogv)$/;
const CHART_DATA_RE = /^[A-Za-z0-9+/=_%.-]+$/;
const HEX_COLOR = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i;
const FONT_SIZE = /^(?:14|16|18|20|24|28|32|36|40)px$/;
const FONT_WEIGHT = /^(?:300|400|500|600|700|800)$/;
const TEXT_ALIGN = /^(?:left|center|right|justify)$/;
const WIDTH = /^(?:(?:[1-9]|[1-9][0-9]|100)%|(?:[5-9][0-9]|[1-9][0-9]{2}|1[01][0-9]{2}|1200)px)$/;
const FONT_FAMILY =
  /^(?:var\(--font-libre-caslon-text\)|var\(--font-plus-jakarta-sans\)|georgia, serif|arial, sans-serif|["']times new roman["'], serif|["']courier new["'], monospace)$/i;

const EMBED_CONFIG = {
  youtube: {
    title: "YouTube video",
    allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen",
    allowfullscreen: "",
  },
  vimeo: {
    title: "Vimeo video",
    allow: "fullscreen; picture-in-picture",
    allowfullscreen: "",
  },
  spotify: {
    title: "Spotify player",
    allow: "encrypted-media",
  },
  soundcloud: {
    title: "SoundCloud player",
  },
} as const;

function safeAbsoluteUrl(raw: string) {
  try {
    const url = new URL(raw);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function safeMediaUrl(raw = "") {
  return UPLOAD_URL.test(raw) || safeAbsoluteUrl(raw);
}

function safeLinkUrl(raw = "") {
  if (
    (raw.startsWith("/") && !raw.startsWith("//")) ||
    (raw.startsWith("#") && raw.length > 1) ||
    raw.startsWith("mailto:") ||
    raw.startsWith("tel:")
  ) {
    return true;
  }
  return safeAbsoluteUrl(raw);
}

function safeWidth(raw = "") {
  const value = raw.trim().toLowerCase();
  return WIDTH.test(value) ? value : "";
}

function widthFromStyle(raw = "") {
  const match = raw.match(/(?:^|;)\s*width\s*:\s*([^;]+)/i);
  return match ? safeWidth(match[1]) : "";
}

export function sanitizeNewsHtml(value: string) {
  return sanitizeHtml(value, {
    allowedTags: [
      "a",
      "audio",
      "div",
      "b",
      "blockquote",
      "br",
      "code",
      "em",
      "h2",
      "h3",
      "hr",
      "i",
      "iframe",
      "img",
      "li",
      "ol",
      "p",
      "pre",
      "s",
      "span",
      "strike",
      "strong",
      "u",
      "ul",
      "video",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      span: ["style"],
      p: ["style"],
      h2: ["style"],
      h3: ["style"],
      div: ["data-chart"],
      img: ["src", "alt", "title", "data-align", "data-width", "style"],
      audio: ["src", "controls", "preload"],
      video: ["src", "controls", "preload", "playsinline"],
      iframe: [
        "src",
        "data-provider",
        "title",
        "loading",
        "referrerpolicy",
        "allow",
        "allowfullscreen",
      ],
      ol: ["start"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
    allowedStyles: {
      span: {
        color: [HEX_COLOR],
        "font-family": [FONT_FAMILY],
        "font-size": [FONT_SIZE],
        "font-weight": [FONT_WEIGHT],
      },
      p: { "text-align": [TEXT_ALIGN] },
      h2: { "text-align": [TEXT_ALIGN] },
      h3: { "text-align": [TEXT_ALIGN] },
      img: { width: [WIDTH] },
    },
    transformTags: {
      a: (_tagName, attributes) => {
        if (!safeLinkUrl(attributes.href)) {
          return { tagName: "span", attribs: {} };
        }
        return {
          tagName: "a",
          attribs: {
            href: attributes.href,
            ...(attributes.target === "_blank"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}),
          },
        };
      },
      img: (_tagName, attributes) => {
        const align = ["left", "right", "center", "full"].includes(
          attributes["data-align"],
        )
          ? attributes["data-align"]
          : "full";
        const width =
          safeWidth(attributes["data-width"]) || widthFromStyle(attributes.style);
        return {
          tagName: "img",
          attribs: {
            src: attributes.src,
            ...(attributes.alt ? { alt: attributes.alt } : {}),
            ...(attributes.title ? { title: attributes.title } : {}),
            "data-align": align,
            ...(width ? { "data-width": width, style: `width: ${width}` } : {}),
          },
        };
      },
      audio: (_tagName, attributes) => ({
        tagName: "audio",
        attribs: {
          src: attributes.src,
          controls: "",
          preload: "metadata",
        },
      }),
      video: (_tagName, attributes) => ({
        tagName: "video",
        attribs: {
          src: attributes.src,
          controls: "",
          preload: "metadata",
          playsinline: "",
        },
      }),
      iframe: (_tagName, attributes) => {
        const embed = normalizeEmbedUrl(attributes.src ?? "");
        if (!embed) return { tagName: "span", attribs: {} };
        const config = EMBED_CONFIG[embed.provider];
        return {
          tagName: "iframe",
          attribs: {
            src: embed.src,
            "data-provider": embed.provider,
            title: config.title,
            loading: "lazy",
            referrerpolicy: "strict-origin-when-cross-origin",
            ...("allow" in config ? { allow: config.allow } : {}),
            ...("allowfullscreen" in config
              ? { allowfullscreen: config.allowfullscreen }
              : {}),
          },
        };
      },
      div: (_tagName, attributes) => {
        const raw = attributes["data-chart"] ?? "";
        if (!raw || !CHART_DATA_RE.test(raw)) {
          return { tagName: "span", attribs: {} };
        }
        try {
          JSON.parse(decodeURIComponent(raw));
        } catch {
          return { tagName: "span", attribs: {} };
        }
        return { tagName: "div", attribs: { "data-chart": raw } as Record<string, string> };
      },
      ol: (_tagName, attributes) => {
        const start = Number(attributes.start);
        const attribs: Record<string, string> = {};
        if (Number.isInteger(start) && start > 1) {
          attribs.start = String(start);
        }
        return {
          tagName: "ol",
          attribs,
        };
      },
    },
    exclusiveFilter(frame) {
      if (["img", "audio", "video"].includes(frame.tag)) {
        return !safeMediaUrl(frame.attribs.src);
      }
      return false;
    },
  }).trim();
}
