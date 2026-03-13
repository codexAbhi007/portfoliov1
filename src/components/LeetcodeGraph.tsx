"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function LeetcodeGraph({
  username = "codexAbhi007",
}: {
  username?: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "dark";
  const cardTheme = currentTheme === "dark" ? "dark" : "light";

  const imgUrl = `https://leetcard.jacoblin.cool/${username}?theme=${cardTheme}&font=Baloo%20Bhaijaan%202&ext=heatmap`;

  return (
    <div className="w-full overflow-hidden p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 mt-8">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
        LeetCode Stats
      </h3>

      <div className="w-full flex items-center justify-center min-h-[200px]">
        {!mounted ? (
          <div className="w-full max-w-[600px] h-[200px] animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imgUrl}
            alt={`${username}'s LeetCode Stats`}
            className="w-full max-w-[800px] h-auto rounded-xl object-contain"
          />
        )}
      </div>
    </div>
  );
}
