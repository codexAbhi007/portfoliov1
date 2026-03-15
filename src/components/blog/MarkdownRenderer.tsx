"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

// Extract raw string from ReactNode
function extractTextFromNode(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
  if (typeof node === "object" && node.props && node.props.children) {
    return extractTextFromNode(node.props.children);
  }
  return "";
}

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Custom components to assign IDs to h1, h2, h3 for TOC
const components = {
  h1: ({ node, ...props }: any) => {
    const text = extractTextFromNode(props.children);
    return <h1 id={generateId(text)} {...props} />;
  },
  h2: ({ node, ...props }: any) => {
    const text = extractTextFromNode(props.children);
    return <h2 id={generateId(text)} {...props} />;
  },
  h3: ({ node, ...props }: any) => {
    const text = extractTextFromNode(props.children);
    return <h3 id={generateId(text)} {...props} />;
  },
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
