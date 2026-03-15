"use client";

import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export function AboutEducation() {
  return (
    <section id="studies" className="scroll-mt-32 space-y-8">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center md:text-left">
        Education
      </h2>

      <div className="flex flex-col gap-6">
        {/* University */}
        <div className="group p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-900/60 backdrop-blur hover:border-emerald-400/40 transition">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-xl   flex items-center justify-center overflow-hidden">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HOiuSjrgp8Mxgcf9FhvqnNyR4fYu-fCN5A&s"
                alt="SNU Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  B.Tech in Computer Science
                </h3>

                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  2024 — Present
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Sister Nivedita University
              </p>

              <a
                href="https://snuniv.ac.in"
                target="_blank"
                className="inline-flex items-center gap-1 mt-2 text-sm text-emerald-500 hover:text-emerald-400"
              >
                Visit Website
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="group p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-900/60 backdrop-blur hover:border-emerald-400/40 transition">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-xl   flex items-center justify-center overflow-hidden">
              <Image
                src="https://yt3.googleusercontent.com/pXd3G7xcy0zrvMzaz-QV1MXCSnbgDAr0iaJi3KNnxTtDUDrUSyx7AiBRSkDAQNua6PMU_Jajng=s900-c-k-c0x00ffffff-no-rj"
                alt="Aditya Academy Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  High School Graduation
                </h3>

                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Till 2024
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Aditya Academy Senior Secondary
              </p>

              <a
                href="https://adityaacademyseniorsecondary.com/"
                target="_blank"
                className="inline-flex items-center gap-1 mt-2 text-sm text-emerald-500 hover:text-emerald-400"
              >
                Visit Website
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
