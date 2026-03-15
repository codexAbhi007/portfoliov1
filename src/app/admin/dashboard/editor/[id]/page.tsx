import { getBlogById } from "@/app/actions/blog";
import { getCategories } from "@/app/actions/category";
import EditorForm from "@/components/admin/EditorForm";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/back-button";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlogById(parseInt(resolvedParams.id));
  if (!blog) return notFound();

  const categories = await getCategories();

  return (
    <div className="container mx-auto py-10">
      <BackButton fallbackHref="/admin/dashboard" />
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <EditorForm initialData={blog} categories={categories} />
    </div>
  );
}
