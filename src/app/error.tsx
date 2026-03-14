"use client";

import { useEffect } from "react";
import { RotateCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 text-center px-6">
      <div className="space-y-4 flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 mb-2">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Something went wrong!
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          An unexpected error occurred. Don&apos;t worry, it&apos;s not you,
          it&apos;s me.
        </p>
      </div>

      <button
        onClick={() => reset()}
        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
      >
        <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
        Try again
      </button>
    </div>
  );
}
