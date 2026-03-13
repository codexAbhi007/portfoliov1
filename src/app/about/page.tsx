import Link from "next/link";
import { GithubGraph } from "@/components/GithubGraph";
import { LeetcodeGraph } from "@/components/LeetcodeGraph";
import LeetcodeStats from "@/components/LeetcodeStats";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col  lg:flex-row gap-12 relative animate-in fade-in slide-in-from-bottom-8 duration-700 pb-16">
      {/* Column 1: Page Navigation (Sticky) */}
      <aside className="hidden lg:flex w-48 flex-col gap-6 sticky top-32 h-fit">
        <nav className="relative flex flex-col gap-4 text-sm font-medium">
          {/* vertical line */}
          <div className="absolute -left-3.5 top-0 bottom-0 w-px bg-white/10"></div>

          {[
            ["Introduction", "#introduction"],
            ["Work Experience", "#work-experience"],
            ["Studies", "#studies"],
            ["Technical skills", "#technical-skills"],
            ["Coding Stats", "#coding-stats"],
          ].map(([label, link], index) => (
            <Link
              key={index}
              href={link}
              className="group relative text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors pl-2"
            >
              {/* cyan dot */}
              <span className="absolute -left-4.25 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition" />

              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Column 2: Avatar & Basic Info */}
      <aside className="w-full lg:w-48 flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-32 h-fit">
        {/* Avatar */}
        <div className="relative w-40 h-40 group">
          {/* gradient ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/40 via-teal-400/30 to-emerald-400/40 blur-md opacity-40 group-hover:opacity-60 transition group-hover:cursor-pointer" />

          {/* avatar container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
            <img
              src="https://github.com/codexAbhi007.png"
              alt="GitHub Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          {/* location */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Asia/India
          </div>

          {/* languages */}
          <div className="flex gap-2 text-xs font-medium">
            <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">
              English
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">
              Hindi
            </span>
          </div>
        </div>
      </aside>

      {/* Column 3: Main Content */}
      <main className="flex-1 min-w-0 w-full max-w-2xl mx-auto lg:mx-0 flex flex-col gap-16">
        {/* Introduction */}
        <section id="introduction" className="scroll-mt-32 space-y-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-sm font-medium hover:bg-cyan-900/40 transition-colors">
            📅 Schedule a call
            <span className="text-lg leading-none ml-1">›</span>
          </button>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
              Abhirup Ghosh
            </h1>
            <h2 className="text-2xl text-zinc-600 dark:text-zinc-400">
              Design Engineer
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["GitHub", "LinkedIn", "Threads", "Email"].map((social) => (
              <Link
                key={social}
                href="#"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm text-zinc-300"
              >
                {social}
              </Link>
            ))}
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed pt-4">
            Selene is a Jakarta-based design engineer with a passion for
            transforming complex challenges into simple, elegant design
            solutions. Her work spans digital interfaces, interactive
            experiences, and the convergence of design and technology.
          </p>
        </section>

        {/* Work Experience */}
        <section id="work-experience" className="scroll-mt-32 space-y-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Work Experience
          </h2>

          {/* Job 1 */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                FLY
              </h3>
              <span className="text-zinc-700 dark:text-zinc-500 text-sm">
                2022 - Present
              </span>
            </div>
            <p className="text-cyan-400">Senior Design Engineer</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <li>
                Redesigned the UI/UX for the FLY platform, resulting in a 20%
                increase in user engagement and 30% faster load times.
              </li>
              <li>
                Spearheaded the integration of AI tools into design workflows,
                enabling designers to iterate 50% faster.
              </li>
            </ul>
            <div className="mt-6 aspect-2/1 bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden">
              <div className="w-full h-full bg-linear-to-br from-cyan-900/20 to-rose-900/20" />
            </div>
          </div>

          {/* Job 2 */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Creativ3
              </h3>
              <span className="text-zinc-700 dark:text-zinc-500 text-sm">
                2018 - 2022
              </span>
            </div>
            <p className="text-cyan-400">Lead Designer</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <li>
                Developed a design system that unified the brand across multiple
                platforms, improving design consistency by 40%.
              </li>
              <li>
                Led a cross-functional team to launch a new product line,
                contributing to a 15% increase in overall company revenue.
              </li>
            </ul>
          </div>
        </section>

        {/* Studies */}
        <section id="studies" className="scroll-mt-32 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Studies
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                University of Jakarta
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Studied software engineering.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Build the Future
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Studied online marketing and personal branding.
              </p>
            </div>
          </div>
        </section>

        {/* Technical skills */}
        <section id="technical-skills" className="scroll-mt-32 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Technical skills
          </h2>

          {/* Skill 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Figma
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Able to prototype in Figma with Once UI with unnatural speed.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 38 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 28.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"
                    fill="#0acf83"
                  />
                  <path
                    d="M0 28.5a9.5 9.5 0 1 1 19 0v9.5H9.5A9.5 9.5 0 0 1 0 28.5z"
                    fill="#a259ff"
                  />
                  <path
                    d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"
                    fill="#f24e1e"
                  />
                  <path d="M0 19l9.5-9.5L19 19 9.5 28.5 0 19z" fill="#ff7262" />
                  <path
                    d="M19 47.5a9.5 9.5 0 1 1-19 0v-9.5h19v9.5z"
                    fill="#1abcfe"
                  />
                </svg>
                Figma
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="w-64 h-40 shrink-0 bg-zinc-900 rounded-2xl border border-white/10" />
              <div className="w-64 h-40 shrink-0 bg-zinc-900 rounded-2xl border border-white/10" />
            </div>
          </div>

          {/* Skill 2 */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Next.js
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Building next gen apps with Next.js + Once UI + Supabase.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
                Supabase
              </span>
            </div>
            <div className="w-full sm:w-2/3 h-48 mt-4 bg-zinc-900 rounded-2xl border border-white/10" />
          </div>
        </section>

        {/* Coding Stats - Custom addition as requested */}
        <section
          id="coding-stats"
          className="scroll-mt-32 space-y-6 pt-4 border-t border-white/5"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Coding Stats
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tracking my progress and active learning in software development.
          </p>
          <GithubGraph username="codexAbhi007" />{" "}
          {/* Providing a random realistic username to make it render */}
          {/* <LeetcodeGraph /> */}
          <LeetcodeStats />
        </section>
      </main>
    </div>
  );
}
