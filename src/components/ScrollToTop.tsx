"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full bg-zinc-900/50 dark:bg-zinc-100/10 text-white dark:text-zinc-100 backdrop-blur-md border border-white/10 dark:border-white/20 shadow-xl hover:bg-zinc-800/60 dark:hover:bg-zinc-100/20 transition-all focus:outline-none flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-zinc-100 dark:text-zinc-100" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
