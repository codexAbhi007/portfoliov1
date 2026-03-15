"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteBlog } from "@/app/actions/blog";
import { useRouter } from "next/navigation";

export default function DeleteBlogButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant="destructive"
      size="sm"
      disabled={isPending}
      onClick={() => {
        if (confirm("Are you sure you want to delete this blog?")) {
          startTransition(async () => {
            await deleteBlog(id);
            router.refresh();
          });
        }
      }}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
