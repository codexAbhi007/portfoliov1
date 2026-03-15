"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { container, fadeLeft } from "./animations";

export default function FeaturedProject() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full"
    >
      <motion.div variants={fadeLeft}>
        <Link
          href="/work/url-shortener"
          className="group block relative w-full rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-zinc-900/50 hover:border-emerald-500/50 transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-transparent to-rose-500/0 group-hover:from-emerald-900/40 group-hover:to-rose-900/40 transition-colors duration-500 z-0" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Custom URL Shortener Platform
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A full-stack URL shortener with authentication, analytics,
                and custom short codes built using modern backend architecture
                and scalable database design.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm pt-4">
                View project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-xl bg-black/10 dark:bg-zinc-800 border border-black/5 dark:border-white/5"></div>
          </div>
        </Link>
      </motion.div>
    </motion.section>
  );
}
