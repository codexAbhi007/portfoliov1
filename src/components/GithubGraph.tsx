"use client";

import {GitHubCalendar} from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubGraph({ username }: { username: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="w-full p-6 rounded-3xl border border-zinc-200 dark:border-white/10 mt-8 bg-white/40 dark:bg-zinc-900/60 backdrop-blur">

      {/* Title */}
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
        GitHub Contributions
      </h3>

      {/* Calendar */}
      <div className="w-full flex justify-center overflow-hidden text-zinc-800 dark:text-zinc-300">

        <div className="w-full flex justify-center scale-[0.85] sm:scale-100 origin-top">

          <GitHubCalendar
            username={username}
            colorScheme={isDark ? "dark" : "light"}
            blockSize={10}
            blockMargin={3}
            fontSize={14}
            showWeekdayLabels={false}
            theme={{
              light: [
                "#e5e7eb",
                "#0f766e",
                "#0d9488",
                "#14b8a6",
                "#2dd4bf",
              ],
              dark: [
                "#18181b",
                "#0d9488",
                "#14b8a6",
                "#2dd4bf",
                "#5eead4",
              ],
            }}
          />

        </div>

      </div>
    </div>
  );
}