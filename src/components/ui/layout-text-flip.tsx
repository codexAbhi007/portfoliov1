"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  className,
  textClassName,
  wordContainerClassName,
}: {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  wordContainerClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div className={cn("flex gap-5 items-center", className)}>
        <motion.span
          layoutId="subtext"
          className={cn(
            "text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg text-cyan-600 dark:text-cyan-400",
            textClassName,
          )}
        >
          {text}
        </motion.span>

        <motion.span
          layout
          className={cn(
            "relative w-fit overflow-hidden rounded-md border border-transparent bg-zinc-100 px-4 py-2 font-sans text-2xl font-bold tracking-tight text-zinc-900 shadow-sm ring ring-black/10 md:text-4xl dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10",
            wordContainerClassName,
          )}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: -40, filter: "blur(10px)" }}
              animate={{
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={cn("inline-block whitespace-nowrap")}
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </motion.div>
    </>
  );
};
