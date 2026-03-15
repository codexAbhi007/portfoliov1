"use client";

import { useEffect, useState } from "react";

export default function BlogTOC({ content }: { content: string }) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Basic regex to find markdown headings # to ###
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));

    const extractedHeadings = matches.map((match) => {
      const level = match[1].length;
      // Strip markdown symbols from head for clean TOC text and id
      const text = match[2].replace(/([*_#`]|\[|\]\(.*?\))/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      return { id, text, level };
    });

    setHeadings(extractedHeadings);

    // Set up intersection observer for actual DOM elements
    const handleScroll = () => {
      const headingElements = extractedHeadings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];
      let currentActiveId = "";

      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActiveId = el.id;
        }
      }

      if (currentActiveId) setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 hidden lg:block max-h-[80vh] overflow-y-auto space-y-4 pr-6 shrink-0 w-[250px]">
      <h3 className="font-semibold text-lg">Table of Contents</h3>
      <nav className="flex flex-col space-y-2 text-sm text-muted-foreground w-full">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(heading.id);
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: "smooth" });
                history.pushState(null, "", "#" + heading.id);
              }
            }}
            className={`hover:text-primary transition-colors block w-full ${heading.level === 2 ? "ml-4" : heading.level === 3 ? "ml-8" : ""} ${activeId === heading.id ? "text-primary font-medium" : ""}`}
            title={heading.text}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
