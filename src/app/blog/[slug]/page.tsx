import { getBlogBySlug } from "@/app/actions/blog";
import { notFound } from "next/navigation";
import BlogTOC from "@/components/blog/BlogTOC";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import ScrollProgress from "@/components/blog/ScrollProgress";
import ViewCounter from "@/components/blog/ViewCounter";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { BackButton } from "@/components/ui/back-button";
import ShareBlogButton from "@/components/blog/ShareBlogButton";

function formatDate(date: string | Date | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) return notFound();

  return (
    <>
      <ScrollProgress />
      <ViewCounter slug={blog.slug} />

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
        <BackButton fallbackHref="/blog" forceAction />

        {/* HERO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {blog.image && (
            <div className="relative w-full h-105 rounded-2xl overflow-hidden mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {blog.title}
          </h1>

          {/* meta */}
          <div className="flex justify-center flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.createdAt)}
            </span>

            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.readTime || 5} min read
            </span>

            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {blog.views || 0} views
            </span>
          </div>

          {/* categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {blog.categories?.map((cat) => (
              <Badge key={cat.id} variant="secondary">
                {cat.name}
              </Badge>
            ))}
          </div>

          {/* share */}
          <div className="flex justify-center">
            <ShareBlogButton />
          </div>
        </div>

        {/* CONTENT + TOC */}
        <div className="grid grid-cols-12 gap-12">
          {/* TOC */}
          <aside className="hidden lg:block col-span-3">
            <BlogTOC content={blog.content} />
          </aside>

          {/* ARTICLE */}
          <article className="col-span-12 lg:col-span-9 max-w-3xl">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <MarkdownRenderer content={blog.content} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
