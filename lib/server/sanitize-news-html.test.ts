import { describe, expect, it } from "vitest";
import { sanitizeNewsHtml } from "@/lib/server/sanitize-news-html";

describe("sanitizeNewsHtml", () => {
  it("preserves editor formatting and removes unsafe attributes", () => {
    const output = sanitizeNewsHtml(
      [
        '<h2 style="text-align: center">Judul</h2>',
        '<p onclick="bad()" style="text-align: justify">',
        '<span style="font-family: var(--font-libre-caslon-text); font-size: 24px; color: #AABBCC; font-weight: 700">Teks</span>',
        "</p>",
        '<img src="/api/uploads/0123456789abcdef0123456789abcdef.png" data-align="left" data-width="45%" onerror="bad()">',
        '<audio src="/api/uploads/0123456789abcdef0123456789abcdef.mp3" autoplay></audio>',
      ].join(""),
    );

    expect(output).toContain('<h2 style="text-align:center">Judul</h2>');
    expect(output).toContain("font-family:var(--font-libre-caslon-text)");
    expect(output).toContain("font-size:24px");
    expect(output).toContain('data-align="left"');
    expect(output).toContain('data-width="45%"');
    expect(output).toMatch(/<audio[^>]*\scontrols(?:\s|>)/);
    expect(output).toContain('preload="metadata"');
    expect(output).not.toContain("onclick");
    expect(output).not.toContain("onerror");
    expect(output).not.toContain("autoplay");
  });

  it("drops scripts, invalid media, and unsafe links", () => {
    const output = sanitizeNewsHtml(
      [
        "<script>alert(1)</script>",
        '<a href="javascript:alert(1)"><b>bad link</b></a>',
        '<img src="data:image/svg+xml;base64,AAAA">',
        '<iframe src="https://evil.example/embed/1"></iframe>',
      ].join(""),
    );

    expect(output).toContain("<b>bad link</b>");
    expect(output).not.toMatch(/script|javascript:|data:image|iframe/i);
  });

  it("normalizes supported embeds", () => {
    const output = sanitizeNewsHtml(
      '<iframe src="https://www.youtube.com/embed/abcDEF123_0" allow="*"></iframe>',
    );

    expect(output).toContain(
      'src="https://www.youtube-nocookie.com/embed/abcDEF123_0"',
    );
    expect(output).toContain('data-provider="youtube"');
    expect(output).toContain('loading="lazy"');
    expect(output).not.toContain('allow="*"');
  });
});
