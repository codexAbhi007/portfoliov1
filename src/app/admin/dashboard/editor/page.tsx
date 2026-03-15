import { getCategories } from "@/app/actions/category";
import EditorForm from "@/components/admin/EditorForm";
import { BackButton } from "@/components/ui/back-button";

export default async function NewBlogPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto py-10">
      <BackButton fallbackHref="/admin/dashboard" />
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <EditorForm categories={categories} />
    </div>
  );
}
