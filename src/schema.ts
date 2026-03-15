import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

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

  slug: text("slug").notNull().unique(),

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

  slug: text("slug").notNull().unique(),
});

// BLOG CATEGORY RELATION
export const blogCategories = pgTable(
  "blog_categories",
  {
    blogId: integer("blog_id")
      .notNull()
      .references(() => blogs.id, { onDelete: "cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (t) => [{ pk: primaryKey({ columns: [t.blogId, t.categoryId] }) }],
);
