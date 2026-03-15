"use server";

import { db } from "@/lib/db";
import { blogs, blogCategories, categories } from "@/schema";
import { count, eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export type BlogData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string | null;
  readTime?: number | null;
  categoryIds: number[];
};

export async function createBlog(data: BlogData) {
  try {
    const { categoryIds, ...blogData } = data;
    const [newBlog] = await db
      .insert(blogs)
      .values(blogData)
      .returning({ id: blogs.id });

    if (categoryIds.length > 0) {
      const categoryRelations = categoryIds.map((categoryId) => ({
        blogId: newBlog.id,
        categoryId,
      }));
      await db.insert(blogCategories).values(categoryRelations);
    }

    revalidatePath("/admin/dashboard");
    revalidatePath("/blog");
    return { success: true, id: newBlog.id };
  } catch (error) {
    console.error("Failed to create blog", error);
    return { success: false, error: "Failed to create blog" };
  }
}

export async function getBlogs() {
  try {
    const allBlogs = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));
    return allBlogs;
  } catch (error) {
    console.error("Failed to fetch blogs", error);
    return [];
  }
}

export async function getBlogById(id: number) {
  try {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    if (!blog) return null;

    const categoriesData = await db
      .select({
        id: categories.id,
        name: categories.name,
      })
      .from(blogCategories)
      .leftJoin(categories, eq(blogCategories.categoryId, categories.id))
      .where(eq(blogCategories.blogId, id));

    return { ...blog, categories: categoriesData };
  } catch (error) {
    console.error("Failed to get blog", error);
    return null;
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));
    if (!blog) return null;

    const categoriesData = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(blogCategories)
      .leftJoin(categories, eq(blogCategories.categoryId, categories.id))
      .where(eq(blogCategories.blogId, blog.id));

    return { ...blog, categories: categoriesData };
  } catch (error) {
    console.error("Failed to get blog by slug", error);
    return null;
  }
}

export async function updateBlog(id: number, data: BlogData) {
  try {
    const { categoryIds, ...blogData } = data;
    await db.update(blogs).set(blogData).where(eq(blogs.id, id));

    // Update categories: delete old and insert new
    await db.delete(blogCategories).where(eq(blogCategories.blogId, id));

    if (categoryIds.length > 0) {
      const categoryRelations = categoryIds.map((categoryId) => ({
        blogId: id,
        categoryId,
      }));
      await db.insert(blogCategories).values(categoryRelations);
    }

    revalidatePath("/admin/dashboard");
    revalidatePath("/blog");
    if (data.slug) {
      revalidatePath(`/blog/${data.slug}`);
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to update blog", error);
    return { success: false, error: "Failed to update blog" };
  }
}

export async function deleteBlog(id: number) {
  try {
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/admin/dashboard");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete blog", error);
    return { success: false };
  }
}
