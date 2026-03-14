import { motion } from "framer-motion";
import { fadeLeft } from "./animations";

export function Badge() {
  return (
      <motion.div variants={fadeLeft}>
        <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-medium overflow-hidden">
          {/* Occasional Shine effect */}
          <motion.div 
            animate={{ x: ["-200%", "300%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 4 }}
            className="absolute inset-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-[-20deg]"
          />
          
          <span className="relative flex h-2 w-2 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 delay-700"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-800 dark:text-cyan-300 z-10">
            Looking for opportunities
          </span>
        </div>
      </motion.div>
  );
}
