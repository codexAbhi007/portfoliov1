"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import { Eye, Calendar, BookOpen } from "lucide-react";

type Category = { id: number; name: string; slug: string };

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string | null;
  readTime: number | null;
  views: number | null;
  createdAt: Date | string | null;
  categories: Category[];
};

const formatDate = (date: string | Date | null) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogListClient({
  blogs,
  categories,
}: {
  blogs: Blog[];
  categories: Category[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(s) ||
          b.excerpt.toLowerCase().includes(s),
      );
    }

    if (activeCategory !== "all") {
      result = result.filter((b) =>
        b.categories?.some((c) => c.slug === activeCategory),
      );
    }

    result.sort((a, b) => {
      if (sortBy === "recent") {
        return (
          new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        );
      }

      if (sortBy === "views") {
        return (b.views || 0) - (a.views || 0);
      }

      return 0;
    });

    return result;
  }, [blogs, search, activeCategory, sortBy]);

  const featured = filteredBlogs[0];
  const rest = filteredBlogs.slice(1);

  return (
    <div className="space-y-12">
      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        <div className="flex gap-3">
          <Select value={activeCategory} onValueChange={setActiveCategory}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent position="popper">
              <SelectItem value="all">All Categories</SelectItem>

              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Most Recent" />
            </SelectTrigger>

            <SelectContent position="popper">
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="views">Most Views</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* FEATURED POST */}
      {featured && (
        <Link href={`/blog/${featured.slug}`}>
          <div className="grid md:grid-cols-2 gap-10 items-center group">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl relative aspect-16/10">
              <Image
                src={featured.image || "/placeholder.png"}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {featured.categories?.map((cat) => (
                  <span
                    key={cat.id}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-semibold leading-tight group-hover:text-primary transition-colors">
                {featured.title}
              </h2>

              {/* Excerpt */}
              <p className="text-muted-foreground">{featured.excerpt}</p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featured.createdAt)}
                </span>

                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {featured.readTime || 5} min read
                </span>

                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {featured.views || 0} views
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {rest.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`}>
            <article className="group space-y-3 transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="overflow-hidden rounded-xl relative">
                <Image
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={blog.image || "/placeholder.png"}
                  className="object-cover aspect-16/10 w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {blog.categories?.map((cat) => (
                  <span
                    key={cat.id}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground line-clamp-2">
                {blog.excerpt}
              </p>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(blog.createdAt)}
                </span>

                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {blog.readTime || 5} min
                </span>

                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {blog.views || 0}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
