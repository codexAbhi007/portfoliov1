
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-2 pb-16 space-y-16 animate-in fade-in duration-500">

      {/* HERO */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-[420px]" />
        <Skeleton className="h-5 w-[520px]" />
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Skeleton className="h-10 w-[260px]" />

        <div className="flex gap-3">
          <Skeleton className="h-10 w-[180px]" />
          <Skeleton className="h-10 w-[180px]" />
        </div>
      </div>

      {/* FEATURED POST */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Skeleton className="w-full aspect-[16/10] rounded-2xl" />

        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">

            <Skeleton className="aspect-[16/10] rounded-xl w-full" />

            <Skeleton className="h-4 w-24" />

            <Skeleton className="h-6 w-4/5" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="flex gap-4 pt-1">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-14" />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

