CREATE TABLE "blog_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_id" integer,
	"category_id" integer
);
--> statement-breakpoint
CREATE TABLE "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"image" text,
	"read_time" integer,
	"views" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
