import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// ADMIN USERS
export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  email: text("email").notNull().unique(),

  password: text("password").notNull(),
});

// BLOG POSTS
export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),

  title: text("title").notNull(),

  excerpt: text("excerpt").notNull(),

  content: text("content").notNull(),

  image: text("image"), // blog thumbnail

  readTime: integer("read_time"), // minutes

  views: integer("views").default(0),

  createdAt: timestamp("created_at").defaultNow(),
});

// CATEGORY TABLE
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  slug: text("slug").notNull(),
});

// BLOG CATEGORY RELATION
export const blogCategories = pgTable("blog_categories", {
  id: serial("id").primaryKey(),

  blogId: integer("blog_id"),

  categoryId: integer("category_id"),
});
