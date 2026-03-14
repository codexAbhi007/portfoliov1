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
      <div className="p-6 border border-zinc-200 dark:border-white/10 rounded-2xl animate-pulse text-zinc-600 dark:text-zinc-400">
        Loading LeetCode stats...
      </div>
    );
  }

  return (
    <div className="relative p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-900/60 backdrop-blur">
      {/* Rank top right */}
      <div className="absolute top-6 right-6 text-right">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Global Rank</p>
        <p className="text-lg font-semibold text-zinc-900 dark:text-white">
          #{data.ranking}
        </p>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-10">
        LeetCode Stats
      </h3>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {/* Total Circle */}

        <div className="flex justify-center mb-10">
          <Circle
            label=""
            solved={data.totalSolved}
            total={data.totalQuestions}
            color="#00B8A3"
          />
        </div>

        {/* Difficulty Progress Bars */}
        <div className="space-y-6 w-full">
          <Progress
            label="Easy"
            solved={data.easy}
            total={data.totalEasy}
            color="#00B8A3"
          />

          <Progress
            label="Medium"
            solved={data.medium}
            total={data.totalMedium}
            color="#FFC01E"
          />

          <Progress
            label="Hard"
            solved={data.hard}
            total={data.totalHard}
            color="#FF375F"
          />
        </div>

      </div>
    </div>
  );
}

function Progress({
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

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-zinc-700 dark:text-zinc-300">{label}</span>

        <span className="text-zinc-600 dark:text-zinc-400">
          {solved} / {total}
        </span>
      </div>

      <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
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
          <circle
            cx="70"
            cy="70"
            r={radius}
            className="stroke-zinc-200 dark:stroke-zinc-800"
            strokeWidth="10"
            fill="transparent"
          />

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

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-zinc-900 dark:text-white">
            {solved}
          </p>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">/ {total}</p>
        </div>
      </div>

      <p className="text-sm font-semibold" style={{ color }}>
        {label}
      </p>
    </div>
  );
}
