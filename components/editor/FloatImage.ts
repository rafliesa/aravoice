import Image from "@tiptap/extension-image";

export type ImageAlign = "left" | "right" | "center" | "full";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    floatImage: {
      /** Update alignment of the currently selected image. */
      setImageAlign: (align: ImageAlign) => ReturnType;
      /** Update the width (e.g. "40%") of the currently selected image. */
      setImageWidth: (width: string) => ReturnType;
    };
  }
}

/**
 * Image node that carries layout attributes so authors can float a picture
 * beside text (Word/Docs style). `data-align` drives float/full-width and
 * `data-width` sizes the floated image. The public article page reads the same
 * attributes via the shared `.article-prose` styles in globals.css.
 */
const FloatImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      align: {
        default: "full",
        parseHTML: (element) => element.getAttribute("data-align") || "full",
        renderHTML: (attributes) => ({ "data-align": attributes.align }),
      },
      width: {
        default: null,
        parseHTML: (element) =>
          element.getAttribute("data-width") || element.style.width || null,
        renderHTML: (attributes) =>
          attributes.width
            ? {
                "data-width": attributes.width,
                style: `width: ${attributes.width}`,
              }
            : {},
      },
    };
  },

  addCommands() {
    return {
      ...this.parent?.(),
      setImageAlign:
        (align: ImageAlign) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { align }),
      setImageWidth:
        (width: string) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { width }),
    };
  },
});

export default FloatImage;
