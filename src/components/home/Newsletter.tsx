"use client";

import { motion } from "framer-motion";
import { container, fadeLeft } from "./animations";

export default function Newsletter() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mt-8 mb-12"
    >
      <motion.div
        variants={fadeLeft}
        className="rounded-3xl border border-black/10 dark:border-white/10 bg-linear-to-br from-cyan-100 to-zinc-100 dark:from-cyan-950/30 dark:to-zinc-900/50 p-12 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Stay updated
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
          I occasionally share insights about development, AI, and the tools
          I am learning.
        </p>
      </motion.div>
    </motion.section>
  );
}
