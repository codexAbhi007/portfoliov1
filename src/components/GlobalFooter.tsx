"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function GlobalFooter() {
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!", {
        description: "You can now share this page with others.",
      });
    }
  };

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-700 dark:text-zinc-500 pb-20 md:pb-16 max-w-6xl mx-auto px-4 lg:px-0">
      <div className="flex items-center gap-2">
        <p>© {new Date().getFullYear()} / Abhirup Ghosh</p>
        <button
          onClick={handleShare}
          className="p-1.5 rounded-md border border-transparent hover:border-emerald-500/30 bg-transparent hover:bg-emerald-500/10 transition-all group active:scale-95 hover:cursor-pointer"
          aria-label="Share this page"
          title="Share this page"
        >
          <Share2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
        </button>
      </div>

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
