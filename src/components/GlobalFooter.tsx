"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export function GlobalFooter() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-700 dark:text-zinc-500 pb-20 md:pb-16 max-w-6xl mx-auto px-4 lg:px-0">
      <p>
        © {new Date().getFullYear()} / Abhirup Ghosh
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/codexAbhi007"
          target="_blank"
          className="p-2 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group"
        >
          <FaGithub className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition" />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="p-2 rounded-lg border border-transparent hover:border-[#0A66C2]/30 bg-transparent hover:bg-[#0A66C2]/10 transition group"
        >
          <FaLinkedin className="w-4 h-4 text-zinc-500 group-hover:text-[#0A66C2] transition" />
        </Link>

        <Link
          href="https://x.com"
          target="_blank"
          className="p-2 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group"
        >
          <FaXTwitter className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition" />
        </Link>

        <Link
          href="https://threads.net"
          target="_blank"
          className="p-2 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group"
        >
          <FaThreads className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition" />
        </Link>

        <Link
          href="mailto:hello@abhirup.dev"
          className="p-2 rounded-lg border border-transparent hover:border-red-500/30 bg-transparent hover:bg-red-500/10 transition group"
        >
          <SiGmail className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition" />
        </Link>
      </div>
    </footer>
  );
}