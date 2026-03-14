"use client";

import { motion } from "framer-motion";
import { fadeLeft } from "./animations";

export default function HomeFooter() {
  return (
    <motion.footer
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-700 dark:text-zinc-500 pb-16"
    >
      <p>
        © 2026 / Abhirup Ghosh
      </p>
    </motion.footer>
  );
}
