import { getBlogBySlug } from "@/app/actions/blog";
import { notFound } from "next/navigation";
import BlogTOC from "@/components/blog/BlogTOC";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import ScrollProgress from "@/components/blog/ScrollProgress";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Eye } from "lucide-react";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto py-12 px-4">
        {blog.image && (
          <div className="w-full max-w-5xl mx-auto h-[400px] relative mb-12 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              {new Date(blog.createdAt!).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.readTime || 5} min read
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {blog.views || 0} views
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {blog.categories?.map((cat: any) => (
              <Badge key={cat.id} variant="secondary">
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative">
          <BlogTOC content={blog.content} />

          <article className="flex-1 w-full max-w-4xl bg-card border shadow-sm rounded-2xl p-6 md:p-12 min-w-0">
            <MarkdownRenderer content={blog.content} />
          </article>
        </div>
      </div>
    </>
  );
}
