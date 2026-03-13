"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 items-center w-full">
      {/* Hero */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center mt-12 mb-8 space-y-6"
      >
        <motion.div
          variants={fadeLeft}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-400 font-medium"
        >
          <span className="bg-cyan-500/20 px-2 py-0.5 rounded-full text-cyan-300 text-xs">
            Once UI
          </span>
          <span>Featured work</span>
        </motion.div>

        <motion.h1
          variants={fadeLeft}
          className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-tight"
        >
          Building bridges between design and code
        </motion.h1>

        <motion.p
          variants={fadeLeft}
          className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl"
        >
          I&apos;m Selene, a design engineer at{" "}
          <strong className="text-zinc-900 dark:text-white">ONCE UI</strong>,
          where I craft intuitive user experiences. After hours, I build my own
          projects.
        </motion.p>

        <motion.div variants={fadeLeft}>
          <Link
            href="/about"
            className="relative group inline-flex items-center justify-center rounded-full p-[0.1px] overflow-hidden"
          >
            {/* animated border */}
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,cyan,transparent)] animate-spin-slow"></span>

            {/* button */}
            <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900 text-white">
              <img
                src="https://github.com/codexAbhi007.png"
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />

              <span className="font-medium">About Me</span>
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Work */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full"
      >
        <motion.div variants={fadeLeft}>
          <Link
            href="/work/once-ui"
            className="group block relative w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-cyan-500/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-transparent to-rose-500/0 group-hover:from-cyan-900/40 group-hover:to-rose-900/40 transition-colors duration-500 z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  Building Once UI, a Customizable Design System
                </h2>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Development of a flexible and highly customizable design
                  system using Next.js for front-end and Figma for design
                  collaboration.
                </p>

                <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm pt-4">
                  Read case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="flex-1 w-full aspect-video rounded-xl bg-zinc-800 border border-white/5"></div>
            </div>
          </Link>
        </motion.div>
      </motion.section>

      {/* Blog */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex flex-col md:flex-row gap-12 border-t border-white/10 pt-16"
      >
        <motion.h2
          variants={fadeLeft}
          className="text-3xl font-bold text-zinc-900 dark:text-white w-full md:w-1/4"
        >
          Latest from the blog
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-8 flex-1">
          {[1, 2].map((_, idx) => (
            <motion.div variants={fadeLeft} key={idx}>
              <Link
                href={`/blog/${idx}`}
                className="group flex-1 space-y-4 relative"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  Blog post example
                </h3>

                <p className="text-sm text-zinc-700 dark:text-zinc-500">
                  Magic Portfolio
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Subscribe */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full mt-8 mb-12"
      >
        <motion.div
          variants={fadeLeft}
          className="rounded-3xl border border-white/10 bg-linear-to-br from-cyan-950/30 to-zinc-900/50 p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Subscribe to Selens Newsletter
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
            My weekly newsletter about creativity and engineering
          </p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-700 dark:text-zinc-500 pb-16"
      >
        <p>
          © 2026 / Selene Yu / Build your portfolio with{" "}
          <strong className="text-cyan-500">Once UI</strong>
        </p>
      </motion.footer>
    </div>
  );
}
