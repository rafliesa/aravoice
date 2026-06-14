"use client";

import { useEffect, useState } from "react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import EmbedNode from "@/components/editor/EmbedNode";
import FloatImage, { type ImageAlign } from "@/components/editor/FloatImage";
import FontWeight from "@/components/editor/FontWeight";
import MediaDialog, {
  type InsertPayload,
} from "@/components/editor/MediaDialog";
import MediaNode from "@/components/editor/MediaNode";
import { ARTICLE_PROSE } from "@/components/editor/articleProse";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

const FONT_OPTIONS = [
  { label: "Font bawaan", value: "" },
  { label: "Libre Caslon", value: "var(--font-libre-caslon-text)" },
  { label: "Plus Jakarta Sans", value: "var(--font-plus-jakarta-sans)" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Times New Roman", value: '"Times New Roman", serif' },
  { label: "Courier New", value: '"Courier New", monospace' },
];

const FONT_SIZES = ["14", "16", "18", "20", "24", "28", "32", "36", "40"];
const FONT_WEIGHTS = ["300", "400", "500", "600", "700", "800"];
const TEXT_ALIGNMENTS = [
  { value: "left", label: "L", title: "Rata kiri" },
  { value: "center", label: "C", title: "Rata tengah" },
  { value: "right", label: "R", title: "Rata kanan" },
  { value: "justify", label: "J", title: "Rata kiri kanan" },
] as const;

const IMAGE_ALIGNMENTS: { value: ImageAlign; label: string; title: string }[] = [
  { value: "left", label: "Kiri", title: "Gambar kiri, teks membungkus di kanan" },
  { value: "center", label: "Tengah", title: "Gambar di tengah" },
  { value: "right", label: "Kanan", title: "Gambar kanan, teks membungkus di kiri" },
  { value: "full", label: "Penuh", title: "Lebar penuh" },
];

const IMAGE_WIDTHS = ["25%", "40%", "60%", "80%", "100%"];

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const [mediaDialogOpen, setMediaDialogOpen] = useState(false);
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: false,
      }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: placeholder ?? "Ceritakan kisahmu..." }),
      TextStyleKit.configure({ backgroundColor: false, lineHeight: false }),
      FontWeight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      FloatImage.configure({ inline: false }),
      MediaNode,
      EmbedNode,
    ],
    content: value,
    editorProps: {
      attributes: {
        class: `${ARTICLE_PROSE} min-h-[60vh] w-full outline-none`,
      },
    },
    onUpdate: ({ editor: currentEditor }) => onChange(currentEditor.getHTML()),
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  const state = useEditorState({
    editor,
    selector: ({ editor: currentEditor }) => {
      if (!currentEditor) return null;
      const textStyle = currentEditor.getAttributes("textStyle");
      const blockAttributes = currentEditor.isActive("heading")
        ? currentEditor.getAttributes("heading")
        : currentEditor.getAttributes("paragraph");
      return {
        bold: currentEditor.isActive("bold"),
        italic: currentEditor.isActive("italic"),
        underline: currentEditor.isActive("underline"),
        h2: currentEditor.isActive("heading", { level: 2 }),
        h3: currentEditor.isActive("heading", { level: 3 }),
        quote: currentEditor.isActive("blockquote"),
        bullet: currentEditor.isActive("bulletList"),
        ordered: currentEditor.isActive("orderedList"),
        link: currentEditor.isActive("link"),
        fontFamily: (textStyle.fontFamily as string | undefined) ?? "",
        fontSize: (textStyle.fontSize as string | undefined) ?? "",
        fontWeight: (textStyle.fontWeight as string | undefined) ?? "",
        color: (textStyle.color as string | undefined) ?? "",
        textAlign: (blockAttributes.textAlign as string | undefined) ?? "left",
        imageAlign: (currentEditor.getAttributes("image").align ?? null) as
          | ImageAlign
          | null,
        imageWidth: (currentEditor.getAttributes("image").width ?? "") as string,
      };
    },
  });

  if (!editor) return null;

  const addLink = () => {
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Masukkan URL tautan:", previous ?? "");
    if (url === null) return;
    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  };

  const insertMedia = (payload: InsertPayload) => {
    if (payload.type === "image") {
      editor
        .chain()
        .focus()
        .setImage({ src: payload.src, alt: "" })
        .updateAttributes("image", { align: "full" })
        .run();
      return;
    }
    if (payload.type === "media") {
      editor
        .chain()
        .focus()
        .insertContent({
          type: "media",
          attrs: { kind: payload.kind, src: payload.src },
        })
        .run();
      return;
    }
    editor
      .chain()
      .focus()
      .insertContent({
        type: "embed",
        attrs: { provider: payload.provider, src: payload.src },
      })
      .run();
  };

  const resetTypography = () => {
    editor
      .chain()
      .focus()
      .unsetFontFamily()
      .unsetFontSize()
      .unsetColor()
      .unsetFontWeight()
      .run();
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-1.5 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
        <ToolbarSelect
          title="Jenis font"
          ariaLabel="Jenis font"
          value={state?.fontFamily ?? ""}
          onChange={(selected) => {
            const chain = editor.chain().focus();
            if (selected) chain.setFontFamily(selected).run();
            else chain.unsetFontFamily().run();
          }}
          options={FONT_OPTIONS}
          className="w-36"
        />
        <ToolbarSelect
          title="Ukuran font"
          ariaLabel="Ukuran font"
          value={(state?.fontSize ?? "").replace("px", "")}
          onChange={(selected) => {
            const chain = editor.chain().focus();
            if (selected) chain.setFontSize(`${selected}px`).run();
            else chain.unsetFontSize().run();
          }}
          options={[
            { label: "Ukuran", value: "" },
            ...FONT_SIZES.map((size) => ({ label: `${size}px`, value: size })),
          ]}
          className="w-24"
        />
        <ToolbarSelect
          title="Ketebalan font"
          ariaLabel="Ketebalan font"
          value={state?.fontWeight ?? ""}
          onChange={(selected) => {
            const chain = editor.chain().focus();
            if (selected) chain.setFontWeight(selected).run();
            else chain.unsetFontWeight().run();
          }}
          options={[
            { label: "Weight", value: "" },
            ...FONT_WEIGHTS.map((weight) => ({ label: weight, value: weight })),
          ]}
          className="w-24"
        />
        <label
          title="Warna teks"
          className="relative flex h-8 w-9 cursor-pointer items-center justify-center rounded border border-zinc-200 hover:bg-zinc-100"
        >
          <span className="text-sm font-bold">A</span>
          <span
            className="absolute bottom-1 left-2 right-2 h-0.5"
            style={{ backgroundColor: state?.color || "#27272a" }}
          />
          <input
            type="color"
            aria-label="Warna teks"
            value={validHexColor(state?.color) ? state?.color : "#27272a"}
            onChange={(event) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
        <ToolBtn
          onClick={() => editor.chain().focus().unsetColor().run()}
          title="Hapus warna teks"
        >
          A×
        </ToolBtn>
        <ToolBtn onClick={resetTypography} title="Reset tipografi">
          Reset
        </ToolBtn>

        <Divider />
        <ToolBtn
          active={state?.bold}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Tebal"
        >
          <span className="font-bold">B</span>
        </ToolBtn>
        <ToolBtn
          active={state?.italic}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Miring"
        >
          <span className="italic">I</span>
        </ToolBtn>
        <ToolBtn
          active={state?.underline}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Garis bawah"
        >
          <span className="underline">U</span>
        </ToolBtn>

        <Divider />
        {TEXT_ALIGNMENTS.map((alignment) => (
          <ToolBtn
            key={alignment.value}
            active={state?.textAlign === alignment.value}
            onClick={() =>
              editor.chain().focus().setTextAlign(alignment.value).run()
            }
            title={alignment.title}
          >
            {alignment.label}
          </ToolBtn>
        ))}

        <Divider />
        <ToolBtn
          active={state?.h2}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Judul"
        >
          <span className="font-bold">H2</span>
        </ToolBtn>
        <ToolBtn
          active={state?.h3}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Subjudul"
        >
          <span className="font-bold">H3</span>
        </ToolBtn>
        <ToolBtn
          active={state?.quote}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Kutipan"
        >
          Quote
        </ToolBtn>
        <ToolBtn
          active={state?.bullet}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Daftar"
        >
          •
        </ToolBtn>
        <ToolBtn
          active={state?.ordered}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Daftar bernomor"
        >
          1.
        </ToolBtn>

        <Divider />
        <ToolBtn active={state?.link} onClick={addLink} title="Tautan">
          Link
        </ToolBtn>
        <ToolBtn onClick={() => setMediaDialogOpen(true)} title="Sisipkan media">
          Media
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Pembatas"
        >
          —
        </ToolBtn>
      </div>

      <BubbleMenu
        editor={editor}
        shouldShow={({ editor: currentEditor }) => currentEditor.isActive("image")}
        className="flex items-center gap-1 rounded-lg bg-zinc-900 p-1 text-white shadow-xl"
      >
        {IMAGE_ALIGNMENTS.map((alignment) => (
          <button
            key={alignment.value}
            type="button"
            title={alignment.title}
            onClick={() =>
              editor.chain().focus().setImageAlign(alignment.value).run()
            }
            className={`rounded px-2 py-1 text-xs transition-colors ${
              state?.imageAlign === alignment.value
                ? "text-orange-400"
                : "text-white hover:bg-white/15"
            }`}
          >
            {alignment.label}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-white/20" />
        <select
          aria-label="Lebar gambar"
          title="Lebar gambar"
          value={IMAGE_WIDTHS.includes(state?.imageWidth ?? "") ? state?.imageWidth : ""}
          onChange={(event) => {
            if (event.target.value) {
              editor.chain().focus().setImageWidth(event.target.value).run();
            }
          }}
          className="h-7 rounded bg-zinc-800 px-2 text-xs text-white outline-none"
        >
          <option value="">Lebar</option>
          {IMAGE_WIDTHS.map((width) => (
            <option key={width} value={width}>
              {width}
            </option>
          ))}
        </select>
      </BubbleMenu>

      <EditorContent editor={editor} />
      {mediaDialogOpen && (
        <MediaDialog
          open
          onClose={() => setMediaDialogOpen(false)}
          onInsert={insertMedia}
        />
      )}
    </div>
  );
}

function ToolBtn({
  children,
  onClick,
  title,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-pressed={active}
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded px-2 text-xs transition-colors ${
        active ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100"
      }`}
    >
      {children}
    </button>
  );
}

function ToolbarSelect({
  title,
  ariaLabel,
  value,
  onChange,
  options,
  className,
}: {
  title: string;
  ariaLabel: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  className: string;
}) {
  return (
    <select
      title={title}
      aria-label={ariaLabel}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${className} h-8 rounded border border-zinc-200 bg-white px-2 text-xs text-zinc-700 outline-none hover:bg-zinc-50 focus:border-[#F29100]`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function Divider() {
  return <span className="mx-0.5 h-5 w-px bg-zinc-200" />;
}

function validHexColor(value?: string) {
  return Boolean(value && /^#[0-9a-fA-F]{6}$/.test(value));
}
