import { GithubGraph } from "@/components/GithubGraph";
import LeetcodeStats from "@/components/LeetcodeStats";

export function AboutCodingStats() {
  return (
    <section id="coding-stats" className="scroll-mt-32 space-y-6">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
        Coding Stats
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400">
        Tracking my progress and learning journey through coding platforms.
      </p>

      <GithubGraph username="codexAbhi007" />

      <LeetcodeStats />
    </section>
  );
}
