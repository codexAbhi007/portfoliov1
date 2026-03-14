"use client";

import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import HomeFooter from "@/components/home/HomeFooter";
import { motion } from "framer-motion";
import { fadeLeft } from "@/components/home/animations";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 items-center w-full">
      <Hero />

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full flex justify-center"
      >
        <FeaturedProject />
      </motion.div>

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full flex justify-center"
      >
        <BlogSection />
      </motion.div>

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full flex justify-center"
      >
        <ContactSection />
      </motion.div>

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full flex justify-center"
      >
        <HomeFooter />
      </motion.div>
    </div>
  );
}
