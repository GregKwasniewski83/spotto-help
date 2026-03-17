/**
 * Skeleton Components
 * Loading placeholders for various UI elements
 */

/**
 * Base Skeleton Component
 */
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  );
}

/**
 * Article Loading Skeleton
 */
export function ArticleSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Breadcrumbs skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Title skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-3/4" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-28" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />

        <div className="py-4">
          <Skeleton className="h-48 w-full" />
        </div>

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

/**
 * Article Card Skeleton (for lists)
 */
export function ArticleCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  );
}

/**
 * Search Results Skeleton
 */
export function SearchResultsSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      <div className="p-2 space-y-1">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="px-3 py-3 space-y-2 animate-pulse">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Screen Page Skeleton
 */
export function ScreenPageSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="flex items-center gap-6">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* Article cards */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

/**
 * Sidebar Skeleton (for mobile loading)
 */
export function SidebarSkeleton() {
  return (
    <div className="space-y-2 p-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-3 animate-pulse">
          <Skeleton className="w-5 h-5" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
  );
}
