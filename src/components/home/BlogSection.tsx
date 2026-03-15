"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { container, fadeLeft } from "./animations";
import { useEffect, useState } from "react";
import { getLatestBlogsForHome } from "@/app/actions/blog";
import { Calendar, Eye, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type BlogInfo = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string | null;
  readTime: number | null;
  views: number | null;
  createdAt: string | null;
};

const formatDate = (date: string | null) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogSection() {
  const [latestBlogs, setLatestBlogs] = useState<BlogInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogs = await getLatestBlogsForHome();
        setLatestBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full flex flex-col gap-12 border-t border-black/10 dark:border-white/10 pt-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
        <motion.h2
          variants={fadeLeft}
          className="text-3xl font-bold text-zinc-900 dark:text-white"
        >
          Explore my latest blogs on technology
        </motion.h2>

        <motion.div variants={fadeLeft}>
          <Button variant="ghost" className="group" asChild>
            <Link href="/blog">
              View all Blogs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 w-full">
        {loading ? (
          <div className="text-zinc-500 animate-pulse col-span-2">
            Loading latest blogs...
          </div>
        ) : latestBlogs.length > 0 ? (
          latestBlogs.map((post, idx) => (
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              key={post.id || idx}
              className="flex-1"
            >
              <Link href={`/blog/${post.slug}`}>
                <article className="group space-y-4 transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="overflow-hidden rounded-xl bg-muted relative aspect-16/10">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center aspect-16/10 w-full bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                        <span className="text-muted-foreground opacity-50 font-bold text-4xl">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.createdAt)}
                    </span>

                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {post.readTime || 5} min read
                    </span>

                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {post.views || 0}
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="text-zinc-500 col-span-2">No blogs found.</div>
        )}
      </div>
    </motion.section>
  );
}
