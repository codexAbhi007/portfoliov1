"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { container, fadeLeft } from "./animations";

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center mt-12 mb-8 space-y-6"
    >
      {/* Status badge */}
      <motion.div
        variants={fadeLeft}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-sm text-cyan-500 dark:text-cyan-400 font-medium"
      >
        <span className="bg-cyan-500/20 px-2 py-0.5 rounded-full text-cyan-600 dark:text-cyan-300 text-xs">
          Portfolio
        </span>
        <span>Open to Work</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeLeft}
        className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-tight"
      >
        Building software that connects ideas and technology
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeLeft}
        className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl"
      >
        I am <strong className="text-zinc-900 dark:text-white">Abhirup Ghosh</strong>,  
        a Computer Science student focused on building scalable web applications,
        exploring AI/ML, and constantly learning new technologies.
      </motion.p>

      {/* About button */}
      <motion.div variants={fadeLeft}>
        <Link href="/about">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-medium px-5 py-2"
          >
            About Me
          </HoverBorderGradient>
        </Link>
      </motion.div>
    </motion.section>
  );
}
