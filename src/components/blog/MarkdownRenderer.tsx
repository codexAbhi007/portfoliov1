"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";

/* -------------------------------- */
/* Extract text from ReactNode */
/* -------------------------------- */

function extractTextFromNode(node: React.ReactNode): string {
  if (!node) return "";

  if (typeof node === "string") return node;

  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");

  if (
    React.isValidElement(node) &&
    node.props &&
    typeof node.props === "object" &&
    "children" in node.props
  ) {
    return extractTextFromNode(
      (node.props as { children: React.ReactNode }).children,
    );
  }

  return "";
}

/* -------------------------------- */
/* Generate slug IDs for headings */
/* -------------------------------- */

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/* -------------------------------- */
/* Code Block with Copy Button */
/* -------------------------------- */

function CodeBlock({ children }: { children: React.ReactNode }) {
  const [isCopied, setIsCopied] = useState(false);
  const code = extractTextFromNode(children);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast.success("Code copied to clipboard");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={copy}
        className={`absolute right-3 top-3 opacity-0 group-hover:opacity-100 text-xs px-2 py-1 rounded-md transition ${isCopied ? "bg-emerald-500/10 text-emerald-500" : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/10"}`}
      >
        {isCopied ? <Check size={14} /> : <Copy size={14} />}
      </button>

      <pre className="overflow-x-auto rounded-lg bg-transparent!">
        <code>{children}</code>
      </pre>
    </div>
  );
}

/* -------------------------------- */
/* Markdown Components */
/* -------------------------------- */

const components = {
  /* H1 */

  h1: ({ children }: any) => {
    const text = extractTextFromNode(children);
    const id = generateId(text);

    return (
      <h1 id={id} className="scroll-mt-24 group flex items-center gap-2">
        {children}
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 text-muted-foreground"
        >
          #
        </a>
      </h1>
    );
  },

  /* H2 */

  h2: ({ children }: any) => {
    const text = extractTextFromNode(children);
    const id = generateId(text);

    return (
      <h2 id={id} className="scroll-mt-24 group flex items-center gap-2">
        {children}
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 text-muted-foreground"
        >
          #
        </a>
      </h2>
    );
  },

  /* H3 */

  h3: ({ children }: any) => {
    const text = extractTextFromNode(children);
    const id = generateId(text);

    return (
      <h3 id={id} className="scroll-mt-24 group flex items-center gap-2">
        {children}
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 text-muted-foreground"
        >
          #
        </a>
      </h3>
    );
  },

  /* Code blocks */

  code({ inline, children }: any) {
    if (inline) return <code>{children}</code>;

    return <CodeBlock>{children}</CodeBlock>;
  },
};

/* -------------------------------- */
/* Main Renderer */
/* -------------------------------- */

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
