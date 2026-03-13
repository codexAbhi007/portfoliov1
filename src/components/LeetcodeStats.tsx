"use client";

import { useEffect, useState } from "react";

type Data = {
  ranking: number;
  easy: number;
  medium: number;
  hard: number;
  totalSolved: number;
  totalQuestions: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
};

export default function LeetcodeStats() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div className="p-6 border border-zinc-200 dark:border-white/10 rounded-2xl animate-pulse">
        Loading LeetCode stats...
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur">
      <h3 className="text-xl font-semibold mb-8">LeetCode Stats</h3>

      {/* circular stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <Circle
          label="Easy"
          solved={data.easy}
          total={data.totalEasy}
          color="#10b981"
        />

        <Circle
          label="Medium"
          solved={data.medium}
          total={data.totalMedium}
          color="#f59e0b"
        />

        <Circle
          label="Hard"
          solved={data.hard}
          total={data.totalHard}
          color="#ef4444"
        />
      </div>
      {/* total progress */}
      <div className="mt-10">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-zinc-600 dark:text-zinc-400">Total Solved</span>

          <span className="font-medium">
            {data.totalSolved} / {data.totalQuestions}
          </span>
        </div>

        <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-700"
            style={{
              width: `${(data.totalSolved / data.totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* rank */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-sm text-zinc-500">Global Rank</p>

        <p className="text-lg font-semibold">#{data.ranking}</p>
      </div>
    </div>
  );
}

function Circle({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  const percent = (solved / total) * 100;

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">

        <svg width="140" height="140">

          {/* background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            className="stroke-zinc-200 dark:stroke-zinc-800"
            strokeWidth="10"
            fill="transparent"
          />

          {/* progress */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />

        </svg>

        {/* center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <p className="text-lg font-bold text-zinc-900 dark:text-white">
            {solved}
          </p>

          <p className="text-xs text-zinc-500">
            / {total}
          </p>

        </div>
      </div>

      <p
        className="text-sm font-semibold"
        style={{ color }}
      >
        {label}
      </p>
    </div>
  );
}
