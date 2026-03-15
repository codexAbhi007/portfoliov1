import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500">
      <Skeleton className="w-full max-w-5xl mx-auto h-[400px] mb-12 rounded-2xl" />

      <div className="max-w-5xl mx-auto mb-10 text-center space-y-6">
        <Skeleton className="h-14 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
        <div className="flex justify-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative">
        <div className="sticky top-24 hidden lg:block pr-6 shrink-0 w-[250px] space-y-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <article className="flex-1 w-full max-w-4xl bg-card border shadow-sm rounded-2xl p-6 md:p-12 min-w-0 space-y-6">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-64 w-full rounded-xl my-8" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </article>
      </div>
    </div>
  );
}
