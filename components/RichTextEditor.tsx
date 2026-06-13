"use client";

import { useEffect } from "react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import FloatImage, { type ImageAlign } from "@/components/editor/FloatImage";
import { ARTICLE_PROSE } from "@/components/editor/articleProse";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

const ALIGN_OPTIONS: { key: ImageAlign; label: string; title: string }[] = [
  { key: "left", label: "⬅ Teks kanan", title: "Gambar kiri, teks membungkus di kanan" },
  { key: "right", label: "Teks kiri ➡", title: "Gambar kanan, teks membungkus di kiri" },
  { key: "center", label: "Tengah", title: "Gambar di tengah" },
  { key: "full", label: "Penuh", title: "Lebar penuh" },
];

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: false,
      }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: placeholder ?? "Ceritakan kisahmu…" }),
      FloatImage.configure({ inline: false }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: `${ARTICLE_PROSE} min-h-[60vh] w-full max-w-2xl outline-none`,
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  // Keep the editor in sync when the parent resets the form (e.g. after save).
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  const state = useEditorState({
    editor,
    selector: ({ editor }) =>
      editor
        ? {
            bold: editor.isActive("bold"),
            italic: editor.isActive("italic"),
            h2: editor.isActive("heading", { level: 2 }),
            h3: editor.isActive("heading", { level: 3 }),
            quote: editor.isActive("blockquote"),
            bullet: editor.isActive("bulletList"),
            ordered: editor.isActive("orderedList"),
            link: editor.isActive("link"),
            imageAlign: (editor.getAttributes("image").align ?? null) as ImageAlign | null,
          }
        : null,
  });

  if (!editor) return null;

  const addLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Masukkan URL tautan:", prev ?? "");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const insertImage = () => {
    const url = window.prompt("Masukkan URL gambar:");
    if (!url) return;
    const align =
      (window.prompt(
        "Tata letak: ketik 'kiri', 'kanan', 'tengah', atau 'penuh'",
        "penuh",
      ) ?? "penuh").toLowerCase();
    const map: Record<string, ImageAlign> = {
      kiri: "left",
      kanan: "right",
      tengah: "center",
      penuh: "full",
    };
    editor
      .chain()
      .focus()
      .setImage({ src: url, alt: "" })
      .updateAttributes("image", { align: map[align] ?? "full" })
      .run();
  };

  const insertDivider = () => editor.chain().focus().setHorizontalRule().run();

  return (
    <div className="relative">
      {/* Persistent toolbar */}
      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-sm">
        <ToolBtn active={state?.bold} onClick={() => editor.chain().focus().toggleBold().run()} title="Tebal">
          <span className="font-bold">B</span>
        </ToolBtn>
        <ToolBtn active={state?.italic} onClick={() => editor.chain().focus().toggleItalic().run()} title="Miring">
          <span className="italic">i</span>
        </ToolBtn>
        <Divider />
        <ToolBtn active={state?.h2} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Judul">
          <span className="font-bold">H2</span>
        </ToolBtn>
        <ToolBtn active={state?.h3} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Subjudul">
          <span className="font-bold">H3</span>
        </ToolBtn>
        <ToolBtn active={state?.quote} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Kutipan">
          ❝
        </ToolBtn>
        <Divider />
        <ToolBtn active={state?.bullet} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Daftar">
          •
        </ToolBtn>
        <ToolBtn active={state?.ordered} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Daftar bernomor">
          1.
        </ToolBtn>
        <Divider />
        <ToolBtn active={state?.link} onClick={addLink} title="Tautan">
          🔗
        </ToolBtn>
        <ToolBtn active={false} onClick={insertImage} title="Sisipkan gambar">
          🖼
        </ToolBtn>
        <ToolBtn active={false} onClick={insertDivider} title="Pembatas">
          —
        </ToolBtn>
      </div>

      {/* Image bubble menu — appears when an image is selected */}
      <BubbleMenu
        editor={editor}
        shouldShow={({ editor }) => editor.isActive("image")}
        className="flex items-center gap-0.5 rounded-lg bg-zinc-900 p-1 text-white shadow-xl"
      >
        {ALIGN_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            title={opt.title}
            onClick={() => editor.chain().focus().setImageAlign(opt.key).run()}
            className={`rounded px-2 py-1 text-xs transition-colors ${
              state?.imageAlign === opt.key ? "text-orange-400" : "text-white hover:bg-white/15"
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-white/20" />
        <button
          type="button"
          title="Atur lebar gambar"
          onClick={() => {
            const w = window.prompt("Lebar gambar (mis. 40% atau 300px):");
            if (w) editor.chain().focus().setImageWidth(w).run();
          }}
          className="rounded px-2 py-1 text-xs text-white hover:bg-white/15"
        >
          Lebar
        </button>
      </BubbleMenu>

      <EditorContent editor={editor} />
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
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded px-2 text-sm transition-colors ${
        active ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-zinc-200" />;
}
