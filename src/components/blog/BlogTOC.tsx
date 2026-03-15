"use client";

import { useEffect, useState } from "react";

export default function BlogTOC({ content }: { content: string }) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;

    const matches = Array.from(content.matchAll(headingRegex));

    const extracted = matches.map((match) => {
      const level = match[1].length;

      const text = match[2].trim();

      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      return { id, text, level };
    });

    setHeadings(extracted);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    extracted.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content]);

  if (!headings.length) return null;

  return (
    <div className="sticky top-24 text-sm">

      <h1 className="font-semibold mb-4">Table of Contents</h1>

      <nav className="flex flex-col gap-2 border-l border-border pl-4">

        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`transition-colors ${
              activeId === heading.id
                ? "text-emerald-500 font-medium"
                : "text-muted-foreground hover:text-foreground"
            } ${
              heading.level === 2
                ? "ml-3"
                : heading.level === 3
                ? "ml-6"
                : ""
            }`}
          >
            {heading.text}
          </a>
        ))}

      </nav>
    </div>
  );
}