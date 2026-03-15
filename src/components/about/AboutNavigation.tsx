"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeLeft } from "@/components/home/animations";

export function AboutNavigation() {
  return (
    <aside className="hidden lg:flex w-48 flex-col gap-6 sticky top-32 h-fit">
      <motion.nav
        variants={fadeLeft}
        initial="hidden"
        animate="show"
        className="relative flex flex-col gap-4 text-sm font-medium"
      >
        <div className="absolute -left-3.5 top-0 bottom-0 w-px bg-white/10"></div>

        {[
          ["Introduction", "#introduction"],
          ["Projects", "#work-experience"],
          ["Education", "#studies"],
          ["Technical Skills", "#technical-skills"],
          ["Coding Stats", "#coding-stats"],
        ].map(([label, link], index) => (
          <Link
            key={index}
            href={link}
            className="group relative text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors pl-2"
          >
            <span className="absolute -left-4.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition" />
            {label}
          </Link>
        ))}
      </motion.nav>
    </aside>
  );
}
