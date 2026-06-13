/**
 * Shared prose class applied to both the Tiptap editor surface and the public
 * article page, so an article renders identically in the admin and on /[slug].
 * The float / responsive rules for `img[data-align]` live in globals.css under
 * the `.article-prose` selector.
 */
export const ARTICLE_PROSE =
  "article-prose font-serif text-lg leading-9 text-zinc-800 " +
  "[&_h2]:mt-8 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight " +
  "[&_h3]:mt-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-snug " +
  "[&_p]:mt-5 " +
  "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-800 [&_blockquote]:pl-5 [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:text-zinc-600 " +
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-7 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_li]:mt-2 " +
  "[&_a]:text-orange-600 [&_a]:underline " +
  "[&_hr]:my-10 [&_hr]:border-t-2 [&_hr]:border-zinc-200";
