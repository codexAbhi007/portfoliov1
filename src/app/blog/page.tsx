import { getBlogs, getBlogById } from "@/app/actions/blog";
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

  // N+1 problem here but perfectly fine for a simple site,
  // or we can fetch all relations
  const results = await Promise.all(
    allBlogs.map(async (blog) => {
      const categoriesData = await db
        .select({
          id: categoryTable.id,
          name: categoryTable.name,
          slug: categoryTable.slug,
        })
        .from(blogCategories)
        .leftJoin(
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
    <div className="container mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">The Blog</h1>
        <p className="text-muted-foreground text-lg">
          Insights, tutorials, and updates about web development, engineering,
          and design.
        </p>
      </div>

      <BlogListClient blogs={blogs} categories={categories} />
    </div>
  );
}
