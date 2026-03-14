"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,

  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/", name: "Home", icon: Home },
  { path: "/about", name: "About", icon: User },
  { path: "/work", name: "Work", icon: Briefcase },
  { path: "/blog", name: "Blog", icon: BookOpen },
];

export function Navbar() {
  const pathname = usePathname() || "/";
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 top-auto md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-max">
      <nav className="flex items-center justify-center gap-1 md:gap-2 p-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-lg shadow-cyan-900/5 max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {/* sliding active background */}
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-zinc-200/70 dark:bg-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              <Icon className="w-4 h-4 relative z-10" />

              {item.name !== "Home" && (
                <span className="relative z-10 hidden sm:inline">
                  {item.name}
                </span>
              )}

              {item.name === "Home" && <span className="sr-only">Home</span>}
            </Link>
          );
        })}

        <div className="w-px h-6 bg-zinc-300 dark:bg-white/10 mx-2" />

        <button
          onClick={toggleTheme}
          className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-full hover:cursor-pointer"
          aria-label="Toggle themes"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </button>
      </nav>
    </div>
  );
}
