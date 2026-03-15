"use client";

import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { createCategory, deleteCategory } from "@/app/actions/category";
import { useRouter } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function CategoryManager({
  initialCategories,
}: {
  initialCategories: any[];
}) {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleAdd = () => {
    if (!name.trim()) return;
    startTransition(async () => {
      await createCategory({ name, slug: slugify(name) });
      setName("");
      router.refresh();
    });
  };

  const handleDelete = (id: number) => {
    startTransition(async () => {
      await deleteCategory(id);
      router.refresh();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>Manage blog categories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="New category..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button disabled={isPending || !name} onClick={handleAdd}>
            Add
          </Button>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto w-full">
          {initialCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex justify-between items-center bg-muted/50 px-3 py-2 rounded-md"
            >
              <span className="text-sm font-medium">{cat.name}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDelete(cat.id)}
                disabled={isPending}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
          {initialCategories.length === 0 && (
            <p className="text-sm text-muted-foreground text-center">
              No categories created
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
