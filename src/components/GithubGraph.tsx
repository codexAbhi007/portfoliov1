"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GithubGraph({ username }: { username: string }) {
  return (
    <div className="w-full overflow-hidden p-6 rounded-3xl bg-zinc-900/50 border border-white/10 mt-8">
      <h3 className="text-xl font-bold text-white mb-6">
        GitHub Contributions
      </h3>
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          theme={{
            dark: ["#18181b", "#0e7490", "#06b6d4", "#22d3ee", "#67e8f9"],
          }}
        />
      </div>
    </div>
  );
}
