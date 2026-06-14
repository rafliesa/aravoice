import type { EmbedProvider } from "@/components/editor/EmbedNode";

export type NormalizedEmbed = {
  provider: EmbedProvider;
  src: string;
};

const YOUTUBE_ID = /^[A-Za-z0-9_-]{6,}$/;
const VIMEO_ID = /^[0-9]+$/;
const SPOTIFY_ID = /^[A-Za-z0-9]+$/;
const SPOTIFY_TYPES = new Set(["album", "episode", "playlist", "show", "track"]);

export function normalizeEmbedUrl(rawValue: string): NormalizedEmbed | null {
  const value = rawValue.trim();
  if (!value) return null;

  let parsed: URL;
  try {
    parsed = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
  } catch {
    return null;
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;

  const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
  const segments = parsed.pathname.split("/").filter(Boolean);

  if (host === "youtu.be" && segments[0] && YOUTUBE_ID.test(segments[0])) {
    return youtubeEmbed(segments[0]);
  }
  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const id =
      parsed.searchParams.get("v") ??
      (["embed", "shorts", "live"].includes(segments[0]) ? segments[1] : null);
    if (id && YOUTUBE_ID.test(id)) return youtubeEmbed(id);
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const id = segments[0] === "video" ? segments[1] : segments[0];
    if (id && VIMEO_ID.test(id)) {
      return { provider: "vimeo", src: `https://player.vimeo.com/video/${id}` };
    }
  }

  if (host === "open.spotify.com") {
    const offset = segments[0] === "embed" ? 1 : 0;
    const type = segments[offset];
    const id = segments[offset + 1];
    if (SPOTIFY_TYPES.has(type) && id && SPOTIFY_ID.test(id)) {
      return {
        provider: "spotify",
        src: `https://open.spotify.com/embed/${type}/${id}`,
      };
    }
  }

  if (host === "soundcloud.com") {
    if (segments.length >= 2) {
      const source = new URL(parsed.toString());
      source.protocol = "https:";
      source.search = "";
      source.hash = "";
      return {
        provider: "soundcloud",
        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(source.toString())}`,
      };
    }
  }
  if (host === "w.soundcloud.com" && segments[0] === "player") {
    const source = parsed.searchParams.get("url");
    if (source) return normalizeEmbedUrl(source);
  }

  return null;
}

function youtubeEmbed(id: string): NormalizedEmbed {
  return {
    provider: "youtube",
    src: `https://www.youtube-nocookie.com/embed/${id}`,
  };
}
