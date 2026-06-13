"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

type Bubble = { top: number; left: number };
type Plus = { top: number };
type Active = { bold: boolean; italic: boolean; block: string };

const EDITOR_CLASS =
  "relative min-h-[60vh] w-full max-w-2xl font-serif text-lg leading-9 text-zinc-800 outline-none " +
  "[&:empty]:before:text-zinc-400 [&:empty]:before:content-[attr(data-placeholder)] " +
  "[&_h2]:mt-8 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight " +
  "[&_h3]:mt-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-snug " +
  "[&_p]:mt-5 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-800 [&_blockquote]:pl-5 [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:text-zinc-600 " +
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-7 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_li]:mt-2 " +
  "[&_a]:text-orange-600 [&_a]:underline [&_img]:my-6 [&_img]:w-full [&_img]:rounded-lg " +
  "[&_hr]:my-10 [&_hr]:border-t-2 [&_hr]:border-zinc-200";

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [bubble, setBubble] = useState<Bubble | null>(null);
  const [plus, setPlus] = useState<Plus | null>(null);
  const [plusOpen, setPlusOpen] = useState(false);
  const [active, setActive] = useState<Active>({ bold: false, italic: false, block: "" });

  // Initialize once; uncontrolled afterwards so the caret never jumps.
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sync = useCallback(() => {
    if (ref.current) onChange(ref.current.innerHTML);
  }, [onChange]);

  const blockTagOf = (node: Node | null): { el: HTMLElement | null; tag: string } => {
    const editor = ref.current;
    if (!editor || !node) return { el: null, tag: "" };
    let el = node.nodeType === 3 ? node.parentElement : (node as HTMLElement);
    while (el && el !== editor && el.parentElement !== editor) el = el.parentElement;
    if (!el || el === editor) return { el: null, tag: "" };
    return { el, tag: el.tagName };
  };

  const refresh = useCallback(() => {
    const editor = ref.current;
    const wrap = wrapRef.current;
    const sel = window.getSelection();
    if (!editor || !wrap || !sel || sel.rangeCount === 0) {
      setBubble(null);
      setPlus(null);
      return;
    }
    const range = sel.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) {
      setBubble(null);
      setPlus(null);
      return;
    }
    const wrapRect = wrap.getBoundingClientRect();

    // Bubble toolbar on a non-empty selection.
    if (!sel.isCollapsed) {
      const rect = range.getBoundingClientRect();
      setBubble({
        top: rect.top - wrapRect.top,
        left: rect.left - wrapRect.left + rect.width / 2,
      });
      const { tag } = blockTagOf(sel.anchorNode);
      setActive({
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        block: tag,
      });
      setPlus(null);
      return;
    }

    setBubble(null);

    // Plus menu on an empty current line.
    const { el } = blockTagOf(sel.anchorNode);
    const isEmpty = el ? !el.textContent?.trim() : !editor.textContent?.trim();
    if (isEmpty) {
      const rect = (el ?? editor).getBoundingClientRect();
      setPlus({ top: rect.top - wrapRect.top });
    } else {
      setPlus(null);
      setPlusOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("selectionchange", refresh);
    return () => document.removeEventListener("selectionchange", refresh);
  }, [refresh]);

  const exec = useCallback(
    (command: string, arg?: string) => {
      ref.current?.focus();
      document.execCommand(command, false, arg);
      sync();
      refresh();
    },
    [sync, refresh]
  );

  const toggleBlock = useCallback(
    (tag: string) => {
      const current = active.block === tag;
      exec("formatBlock", current ? "P" : tag);
    },
    [active.block, exec]
  );

  const addLink = useCallback(() => {
    const url = window.prompt("Masukkan URL tautan:");
    if (url) exec("createLink", url);
  }, [exec]);

  const insertImage = useCallback(() => {
    const url = window.prompt("Masukkan URL gambar:");
    if (url) exec("insertHTML", `<img src="${url}" alt="" />`);
    setPlusOpen(false);
  }, [exec]);

  const insertDivider = useCallback(() => {
    exec("insertHTML", "<hr/><p><br/></p>");
    setPlusOpen(false);
  }, [exec]);

  return (
    <div ref={wrapRef} className="relative">
      {/* Bubble toolbar (Medium-style) */}
      {bubble && (
        <div
          className="absolute z-20 flex -translate-x-1/2 -translate-y-[calc(100%+10px)] items-center gap-0.5 rounded-lg bg-zinc-900 px-1 py-1 text-white shadow-xl"
          style={{ top: bubble.top, left: bubble.left }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <BubbleBtn active={active.bold} onClick={() => exec("bold")} title="Bold">
            <span className="font-bold">B</span>
          </BubbleBtn>
          <BubbleBtn active={active.italic} onClick={() => exec("italic")} title="Italic">
            <span className="italic">i</span>
          </BubbleBtn>
          <span className="mx-1 h-5 w-px bg-white/20" />
          <BubbleBtn active={active.block === "H2"} onClick={() => toggleBlock("H2")} title="Judul">
            <span className="font-bold">H</span>
          </BubbleBtn>
          <BubbleBtn active={active.block === "H3"} onClick={() => toggleBlock("H3")} title="Subjudul">
            <span className="text-xs font-bold">h</span>
          </BubbleBtn>
          <BubbleBtn
            active={active.block === "BLOCKQUOTE"}
            onClick={() => toggleBlock("BLOCKQUOTE")}
            title="Kutipan"
          >
            ❝
          </BubbleBtn>
          <BubbleBtn active={false} onClick={addLink} title="Tautan">
            🔗
          </BubbleBtn>
        </div>
      )}

      {/* Plus menu on empty line */}
      {plus && (
        <div
          className="absolute -left-12 z-10"
          style={{ top: plus.top - 4 }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <button
            type="button"
            onClick={() => setPlusOpen((o) => !o)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-transform hover:text-zinc-800 ${
              plusOpen ? "rotate-45" : ""
            }`}
            title="Sisipkan"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          {plusOpen && (
            <div className="absolute left-10 top-0 flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg">
              <button
                type="button"
                onClick={insertImage}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100"
                title="Gambar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </button>
              <button
                type="button"
                onClick={insertDivider}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100"
                title="Pembatas"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={() => {
          sync();
          refresh();
        }}
        onFocus={refresh}
        onKeyUp={refresh}
        onMouseUp={refresh}
        data-placeholder={placeholder}
        className={EDITOR_CLASS}
      />
    </div>
  );
}

function BubbleBtn({
  children,
  onClick,
  title,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  active: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded px-2 text-sm transition-colors ${
        active ? "text-orange-400" : "text-white hover:bg-white/15"
      }`}
    >
      {children}
    </button>
  );
}
