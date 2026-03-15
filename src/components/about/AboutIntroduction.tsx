import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export function AboutIntroduction() {
  return (
    <section id="introduction" className="scroll-mt-32 space-y-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center md:text-left">
          Abhirup Ghosh
        </h1>

        <h2 className="text-xl text-zinc-600 dark:text-zinc-400 text-center md:text-left">
          Full-Stack Developer • Problem Solver • Technical Content Writer
        </h2>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
        <Link
          href="https://github.com/codexAbhi007"
          target="_blank"
          className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-black transition group"
        >
          <FaGithub className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-[#0A66C2] transition group"
        >
          <FaLinkedin className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
        </Link>

        <Link
          href="https://x.com"
          target="_blank"
          className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-black transition group"
        >
          <FaXTwitter className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
        </Link>

        <Link
          href="https://threads.net"
          target="_blank"
          className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-black transition group"
        >
          <FaThreads className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
        </Link>

        <Link
          href="mailto:your@email.com"
          className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-red-500 transition group"
        >
          <SiGmail className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
        </Link>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed pt-4 text-center md:text-left max-w-2xl mx-auto">
        I&apos;m a Computer Science student passionate about building scalable
        software, solving complex problems, and exploring technologies like
        Artifical Intelligence, Machine Learning, Deep Learning. I have over 2
        years of experience in full stack web development, and I enjoy sharing
        my knowledge through technical writing. I&apos;m always eager to learn
        new technologies and take on challenging projects that allow me to grow
        as a developer.
      </p>
    </section>
  );
}
