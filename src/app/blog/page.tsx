import { getCategories } from "@/app/actions/category";
import BlogListClient from "@/components/blog/BlogListClient";
import { db } from "@/lib/db";
import {
  blogs as blogsTable,
  blogCategories,
  categories as categoryTable,
} from "@/schema";
import { eq, desc } from "drizzle-orm";

async function fetchBlogsWithCategories() {
  const allBlogs = await db
    .select()
    .from(blogsTable)
    .orderBy(desc(blogsTable.createdAt));

  const results = await Promise.all(
    allBlogs.map(async (blog) => {
      const categoriesData = await db
        .select({
          id: categoryTable.id,
          name: categoryTable.name,
          slug: categoryTable.slug,
        })
        .from(blogCategories)
        .innerJoin(
          categoryTable,
          eq(blogCategories.categoryId, categoryTable.id),
        )
        .where(eq(blogCategories.blogId, blog.id));

      return { ...blog, categories: categoriesData };
    }),
  );

  return results;
}

export default async function BlogPage() {
  const blogs = await fetchBlogsWithCategories();
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-2 pb-16 space-y-16">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Expressing My Thoughts
        </h1>

        <p className="text-muted-foreground max-w-xl">
          I always wanted to share my knowledge and experiences with the world, and blogging is the perfect way to do that. Here, I write about programming, technology, and anything else that piques my interest. It&apos;s a space where I can connect with like-minded individuals and contribute to the tech community.
        </p>
      </div>

      <BlogListClient blogs={blogs} categories={categories} />

    </div>
  );
}