"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 items-center w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-12 mb-8 space-y-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-400 font-medium">
          <span className="bg-cyan-500/20 px-2 py-0.5 rounded-full text-cyan-300 text-xs">
            Once UI
          </span>
          <span>Featured work</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-tight">
          Building bridges between design and code
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          I&apos;m Selene, a design engineer at{" "}
          <strong className="text-zinc-900 dark:text-white">ONCE UI</strong>,
          where I craft intuitive user experiences. After hours, I build my own
          projects.
        </p>

        <Link
          href="/about"
          className="group flex items-center gap-3 mt-4 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden relative border border-white/10">
            {/* Avatar placeholder */}
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-rose-500 opacity-50" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github.com/codexAbhi007.png"
              alt="GitHub Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-zinc-900 dark:text-white font-medium">
            About – Selene Yu
          </span>
        </Link>
      </section>

      {/* Featured Work Card */}
      <section className="w-full">
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
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-700 border-2 border-zinc-900 text-xs flex items-center justify-center">
                    S
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-600 border-2 border-zinc-900 text-xs flex items-center justify-center">
                    U
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Development of a flexible and highly customizable design system
                using Next.js for front-end and Figma for design collaboration.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm pt-4">
                Read case study{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-xl bg-zinc-800 border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/50 to-rose-900/50" />
              {/* Mock project image */}
              <div className="absolute inset-4 rounded-lg bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                <div className="h-6 border-b border-white/5 bg-zinc-900/50 flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-rose-500/80"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex flex-1 min-h-0 bg-zinc-950/80">
                  <div className="w-1/4 max-w-30 bg-zinc-900/30 border-r border-white/5 p-2 space-y-2 hidden md:block">
                    <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="flex-1 p-4 space-y-3">
                    <div className="h-3 w-1/3 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest from Blog */}
      <section className="w-full flex flex-col md:flex-row gap-12 border-t border-white/10 pt-16">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white w-full md:w-1/4">
          Latest from the blog
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 flex-1">
          {[
            {
              title: "Quick start with Magic Portfolio",
              date: "April 23, 2025",
            },
            {
              title: "Enable or disable pages for your portfolio",
              date: "April 22, 2025",
            },
          ].map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${idx}`}
              className="group flex-1 space-y-4 relative"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-500">
                <div className="w-5 h-5 rounded-full bg-zinc-800 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Selene Yu</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-500">
                Magic Portfolio
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="w-full mt-8 mb-12">
        <div className="rounded-3xl border border-white/10 bg-linear-to-br from-cyan-950/30 to-zinc-900/50 p-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Subscribe to Selens Newsletter
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
            My weekly newsletter about creativity and engineering
          </p>
          <form
            className="flex w-full max-w-md gap-3 bg-zinc-900/80 p-2 rounded-full border border-white/10"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent px-4 text-sm text-zinc-900 dark:text-white outline-none placeholder:text-zinc-700 dark:text-zinc-500 focus:ring-0"
              required
            />
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-700 dark:text-zinc-500 pb-16">
        <p>
          © 2026 / Selene Yu / Build your portfolio with{" "}
          <strong className="text-cyan-500">Once UI</strong>
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="hover:text-zinc-900 dark:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="hover:text-zinc-900 dark:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="hover:text-zinc-900 dark:text-white transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="hover:text-zinc-900 dark:text-white transition-colors"
          >
            Email
          </Link>
        </div>
      </footer>
    </div>
  );
}
