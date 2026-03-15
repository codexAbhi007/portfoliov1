"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { container, fadeLeft } from "./animations";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center mt-12 mb-8 space-y-6"
    >
      {/* Status badge */}
      <motion.div variants={fadeLeft}>
        <div className="group relative shadow-sm inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm font-medium overflow-hidden">
          {/* Occasional Shine effect */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
              repeatDelay: 5,
            }}
            className="absolute inset-y-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent skew-x-[-20deg]"
          />

          <span className="relative flex h-2 w-2 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-800 dark:text-emerald-300 z-10">
            Looking for opportunities
          </span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        variants={fadeLeft}
        className="w-full max-w-4xl text-center leading-tight min-h-[5rem] sm:min-h-[6rem] flex flex-col justify-center items-center"
      >
        <LayoutTextFlip
          text="16 Bits of a"
          words={["Developer", "Problem Solver", "Creator", "Student","Content Writer"]}
          className="justify-center flex-wrap"
          textClassName="text-emerald-600 dark:text-emerald-400"
          wordContainerClassName="bg-white/80 dark:bg-zinc-800 text-zinc-900 dark:text-white ring-zinc-200 dark:ring-zinc-700/50 backdrop-blur"
        />
      </motion.div>

      {/* Description */}
      <motion.div 
        variants={fadeLeft}
        className="w-full max-w-2xl px-4"
      >
        <p className="text-zinc-600 dark:text-zinc-400 font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-center leading-relaxed">
          I am <span className="font-bold text-zinc-900 dark:text-white">Abhirup Ghosh,</span> a Computer Science student focused on building scalable web applications, exploring AI/ML, and constantly learning new technologies.
        </p>
      </motion.div>

      {/* About button */}
      <motion.div variants={fadeLeft}>
        <Link href="/about">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black
             dark:text-white flex items-center space-x-2 hover:cursor-pointer"
          >
            About Me
          </HoverBorderGradient>
        </Link>
      </motion.div>
    </motion.section>
  );
}
