"use client";

import { useState, useMemo } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { CalendarIcon, Eye, Clock } from "lucide-react";

export default function BlogListClient({
  blogs,
  categories,
}: {
  blogs: any[];
  categories: any[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");

  const filteredBlogs = useMemo(() => {
    let result = blogs;

    // Filter by search
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(s) ||
          b.excerpt.toLowerCase().includes(s),
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((b) =>
        b.categories?.some((c: any) => c.slug === activeCategory),
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "recent") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (sortBy === "views") {
        return (b.views || 0) - (a.views || 0);
      }
      return 0;
    });

    return result;
  }, [blogs, search, activeCategory, sortBy]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <div className="flex flex-col md:flex-row gap-4 items-end md:items-center">
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="flex flex-wrap h-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.slug}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="views">Most Views</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
        {filteredBlogs.map((blog, i) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.id}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          >
            <BentoGridItem
              title={blog.title}
              description={blog.excerpt}
              header={
                <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden bg-muted">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex items-center justify-center">
                      <span className="text-muted-foreground opacity-50 font-bold text-xl">
                        {blog.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              }
              className={`h-full border border-border cursor-pointer transition-all hover:shadow-lg`}
              icon={
                <div className="flex gap-4 text-xs text-muted-foreground mt-4">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime || 5} min read
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {blog.views || 0} views
                  </div>
                </div>
              }
            />
          </Link>
        ))}
      </BentoGrid>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-xl">No blogs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
