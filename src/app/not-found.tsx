import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 text-center px-6">
      <div className="space-y-4">
        <h1 className="text-7xl md:text-9xl font-bold text-zinc-900 dark:text-white tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
          Page not found
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or might have
          been moved.
        </p>
      </div>

      <Link
        href="/"
        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
    </div>
  );
}
