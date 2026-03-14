"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { container, fadeLeft } from "./animations";

export default function BlogSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full flex flex-col md:flex-row gap-12 border-t border-black/10 dark:border-white/10 pt-16"
    >
      <motion.h2
        variants={fadeLeft}
        className="text-3xl font-bold text-zinc-900 dark:text-white w-full md:w-1/4"
      >
        Writing & Notes
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-8 flex-1">
        {[
          {
            title: "Building scalable Node.js APIs",
            desc: "Lessons learned while designing production backends."
          },
          {
            title: "My roadmap to mastering AI & ML",
            desc: "How I'm learning machine learning from scratch."
          }
        ].map((post, idx) => (
          <motion.div variants={fadeLeft} key={idx}>
            <Link
              href={`/blog/${idx}`}
              className="group flex-1 space-y-4 relative"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-500">
                {post.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
