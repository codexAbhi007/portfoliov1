"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Briefcase, BookOpen, Image, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", name: "Home", icon: Home },
  { path: "/about", name: "About", icon: User },
  { path: "/work", name: "Work", icon: Briefcase },
  { path: "/blog", name: "Blog", icon: BookOpen },
  { path: "/gallery", name: "Gallery", icon: Image },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md shadow-lg shadow-cyan-900/5">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                isActive ? "text-white" : "text-zinc-400 hover:text-white",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <item.icon className="w-4 h-4 relative z-10" />
              {item.name !== "Home" && (
                <span className="relative z-10 hidden sm:inline">
                  {item.name}
                </span>
              )}
              {item.name === "Home" && <span className="sr-only">Home</span>}
            </Link>
          );
        })}
        <div className="w-px h-6 bg-white/10 mx-2" />
        <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full relative">
          <Sun className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
