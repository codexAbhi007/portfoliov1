"use client";

import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import BlogSection from "@/components/home/BlogSection";
import Newsletter from "@/components/home/Newsletter";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 items-center w-full">
      <Hero />
      <FeaturedProject />
      <BlogSection />
      <Newsletter />
      <HomeFooter />
    </div>
  );
}
