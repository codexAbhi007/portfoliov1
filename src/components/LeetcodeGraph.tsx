"use client";

// Simple Leetcode stats representation
export function LeetcodeGraph({}: { username?: string }) {
  return (
    <div className="w-full overflow-hidden p-6 rounded-3xl bg-zinc-900/50 border border-white/10 mt-8">
      <h3 className="text-xl font-bold text-white mb-6">LeetCode Stats</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 shrink-0 p-4 border border-white/10 rounded-2xl bg-zinc-950/50 flex flex-col items-center justify-center relative">
          {/* Circle progress mock */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-4">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="transparent"
                stroke="#27272a"
                strokeWidth="8"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="transparent"
                stroke="#eab308"
                strokeWidth="8"
                strokeDasharray="351"
                strokeDashoffset="120"
              />
            </svg>
            <div className="absolute text-center">
              <div className="text-3xl font-bold text-white">450</div>
              <div className="text-xs text-zinc-500">Solved</div>
            </div>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-3 justify-center">
          <div className="p-3 border border-white/5 rounded-xl bg-zinc-900/30 flex items-center justify-between">
            <span className="text-emerald-400 font-medium">Easy</span>
            <span className="text-white font-bold">
              200{" "}
              <span className="text-zinc-500 text-sm font-normal">/ 800</span>
            </span>
          </div>
          <div className="p-3 border border-white/5 rounded-xl bg-zinc-900/30 flex items-center justify-between">
            <span className="text-amber-400 font-medium">Medium</span>
            <span className="text-white font-bold">
              200{" "}
              <span className="text-zinc-500 text-sm font-normal">/ 1600</span>
            </span>
          </div>
          <div className="p-3 border border-white/5 rounded-xl bg-zinc-900/30 flex items-center justify-between">
            <span className="text-rose-500 font-medium">Hard</span>
            <span className="text-white font-bold">
              50{" "}
              <span className="text-zinc-500 text-sm font-normal">/ 700</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
