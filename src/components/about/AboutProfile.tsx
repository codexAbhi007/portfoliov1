"use client";

import { motion } from "framer-motion";
import { fadeLeft } from "@/components/home/animations";

export function AboutProfile() {
  return (
    <aside className="w-full lg:w-48 flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-32 h-fit">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center lg:items-start gap-6"
      >
        {/* Avatar */}
        <div className="relative w-40 h-40 group">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/40 via-teal-400/30 to-emerald-400/40 blur-md opacity-40 group-hover:opacity-60 transition" />

          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/p1.jpeg"
              alt="Abhirup Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Kolkata, India
        </div>

        {/* Languages */}
        <div className="flex gap-2 text-xs font-medium">
          <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 shadow-sm">
            English
          </span>

          <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 shadow-sm">
            Hindi
          </span>
        </div>
      </motion.div>
    </aside>
  );
}
