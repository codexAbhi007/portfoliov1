"use client";

import { GitHubCalendar } from "react-github-calendar";
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
    <div className="w-full p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 mt-8">
      
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
        GitHub Contributions
      </h3>

      <div className="flex sm:justify-center overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <GitHubCalendar
          username={username}
          colorScheme={isDark ? "dark" : "light"}
          blockSize={10}
          blockMargin={3}
          fontSize={14}
          showWeekdayLabels={false}
          theme={{
            light: [
              "#e5e7eb", // empty
              "#0f766e", // emerald dark
              "#0d9488", // teal
              "#14b8a6", // turquoise
              "#2dd4bf", // bright turquoise
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
  );
}