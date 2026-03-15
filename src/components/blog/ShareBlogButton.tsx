"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ShareBlogButton() {
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!", {
        description: "You can now share this blog post with others.",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 rounded-full border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4" />
      Share
    </Button>
  );
}
