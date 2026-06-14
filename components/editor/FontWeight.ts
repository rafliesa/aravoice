import { Extension, getStyleProperty } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontWeight: {
      setFontWeight: (fontWeight: string) => ReturnType;
      unsetFontWeight: () => ReturnType;
    };
  }
}

declare module "@tiptap/extension-text-style" {
  interface TextStyleAttributes {
    fontWeight?: string | null;
  }
}

const FontWeight = Extension.create({
  name: "fontWeight",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontWeight: {
            default: null,
            parseHTML: (element) =>
              getStyleProperty(element, "font-weight") ?? element.style.fontWeight,
            renderHTML: (attributes) =>
              attributes.fontWeight
                ? { style: `font-weight: ${attributes.fontWeight}` }
                : {},
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontWeight:
        (fontWeight: string) =>
        ({ chain }) =>
          chain().setMark("textStyle", { fontWeight }).run(),
      unsetFontWeight:
        () =>
        ({ chain }) =>
          chain()
            .setMark("textStyle", { fontWeight: null })
            .removeEmptyTextStyle()
            .run(),
    };
  },
});

export default FontWeight;
