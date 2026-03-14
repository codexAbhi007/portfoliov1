"use client";

import StackIcon from "tech-stack-icons";
import { techStack } from "@/data/techstack";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Tech = {
  name: string;
  icon: string;
};

function Badge({ tech }: { tech: Tech }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div
      className="
      flex items-center gap-2
      px-3 py-1.5
      rounded-lg
      border border-black/10 dark:border-white/10
      bg-black/5 dark:bg-white/5
      text-sm
      text-zinc-700 dark:text-zinc-300
      hover:bg-black/10 dark:hover:bg-white/10
      transition
    "
    >
      <div className="w-4 h-4 flex items-center justify-center">
        {mounted && (
          <StackIcon
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name={tech.icon as any}
            variant={resolvedTheme === "dark" ? "dark" : "light"}
          />
        )}
      </div>

      {tech.name}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="w-full space-y-8 scroll-mt-32" id="technical-skills">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Tech Stack
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400">
          Technologies I work with
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 w-full">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="
              rounded-2xl
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-zinc-900/40
              backdrop-blur
              p-6
              space-y-4
              mx-auto
            "
          >
            {/* Category Title */}
            <h3 className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
              {category}
            </h3>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {(items as Tech[]).map((tech) => (
                <Badge key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
