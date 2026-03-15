"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackButton({
  className,
  fallbackHref = "/",
  forceAction = false,
}: {
  className?: string;
  fallbackHref?: string;
  forceAction?: boolean;
}) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "mb-6 text-muted-foreground hover:text-foreground hover:cursor-pointer rounded-md transition-colors",
        className,
      )}
      onClick={() => {
        if (forceAction) {
          router.push(fallbackHref);
          return;
        }

        // Simple back navigation, though if accessed directly might prefer link
        if (window.history.length > 2) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back
    </Button>
  );
}
