"use client";

import { useTransition, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createBlog, updateBlog } from "@/app/actions/blog";
import { UploadDropzone } from "@/utils/uploadthing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css"; // Ensure this works or needs to go in globals

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

type Category = { id: number; name: string; slug: string };
type BlogWithCategories = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string | null;
  readTime: number | null;
  categories: Category[];
};

export default function EditorForm({
  initialData,
  categories,
}: {
  initialData?: BlogWithCategories | null;
  categories: Category[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [readTime, setReadTime] = useState(initialData?.readTime || 5);

  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    initialData?.categories?.map((c) => c.id) || [],
  );

  useEffect(() => {
    if (!initialData && title) {
      setSlug(slugify(title));
    }
  }, [title, initialData]);

  const toggleCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((cId) => cId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleSave = () => {
    if (!title || !slug || !content || !excerpt) {
      alert("Please fill all required fields (Title, Slug, Excerpt, Content)");
      return;
    }

    startTransition(async () => {
      const payload = {
        title,
        slug,
        excerpt,
        content,
        image,
        readTime: Number(readTime),
        categoryIds: selectedCategories,
      };

      if (initialData) {
        const res = await updateBlog(initialData.id, payload);
        if (res.success) router.push("/admin/dashboard");
      } else {
        const res = await createBlog(payload);
        if (res.success) router.push("/admin/dashboard");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="editor">
            <Textarea
              className="min-h-[600px] font-mono"
              placeholder="Write your markdown here... Use $ for inline math, $$ for block math."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="preview">
            <Card>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-6 min-h-[600px]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeRaw, rehypeKatex]}
                >
                  {content}
                </ReactMarkdown>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Blog Title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Slug</label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="blog-post-slug"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Excerpt</label>
              <Textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Read Time (minutes)</label>
              <Input
                type="number"
                value={readTime || ""}
                onChange={(e) => setReadTime(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium mb-2 block">
                Cover Image
              </label>
              {image ? (
                <div className="relative">
                  <img
                    src={image}
                    alt="Cover"
                    className="w-full h-auto rounded-md object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setImage("")}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res?.[0]) setImage(res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium mb-2 block">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Badge
                    key={cat.id}
                    variant={
                      selectedCategories.includes(cat.id)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => toggleCategory(cat.id)}
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              className="w-full"
              onClick={handleSave}
              disabled={isPending}
            >
              {initialData ? "Update Blog Post" : "Publish Blog Post"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
