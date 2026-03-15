"use server";

import { db } from "@/lib/db";
import { categories } from "@/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createCategory(data: { name: string; slug: string }) {
  try {
    await db.insert(categories).values(data);
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to create category", error);
    return { success: false, error: "Failed to create category" };
  }
}

export async function getCategories() {
  try {
    const data = await db.select().from(categories);
    return data;
  } catch (error) {
    console.error("Failed to get categories", error);
    return [];
  }
}

export async function deleteCategory(id: number) {
  try {
    await db.delete(categories).where(eq(categories.id, id));
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete category", error);
    return { success: false };
  }
}
