"use client";

import { AboutNavigation } from "@/components/about/AboutNavigation";
import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutEducation } from "@/components/about/AboutEducation";
import { AboutCodingStats } from "@/components/about/AboutCodingStats";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";
import { fadeLeft } from "@/components/home/animations";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-1 relative pb-16">
      <AboutNavigation />

      <AboutProfile />

      <main className="flex-1 min-w-0 w-full mx-auto lg:mx-0 flex flex-col gap-16">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutIntroduction />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutExperience />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutEducation />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <TechStack />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutCodingStats />
        </motion.div>
      </main>
    </div>
  );
}
