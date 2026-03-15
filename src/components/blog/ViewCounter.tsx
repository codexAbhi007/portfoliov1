"use client";

import { useEffect, useRef } from "react";
import { incrementBlogViews } from "@/app/actions/blog";

export default function ViewCounter({ slug }: { slug: string }) {
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      incrementBlogViews(slug);
      hasIncremented.current = true;
    }
  }, [slug]);

  return null;
}
