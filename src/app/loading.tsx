export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-paper flex flex-col font-sans animate-pulse">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-50 w-full bg-ink/90 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-[18px] max-w-[1140px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-16 bg-white/10 rounded-sm" />
            <div className="h-5 w-24 bg-white/10 rounded" />
          </div>
          {/* Nav */}
          <div className="hidden md:flex gap-8">
            <div className="h-4 w-16 bg-white/10 rounded" />
            <div className="h-4 w-16 bg-white/10 rounded" />
            <div className="h-4 w-16 bg-white/10 rounded" />
            <div className="h-4 w-16 bg-white/10 rounded" />
          </div>
          {/* CTA */}
          <div className="h-8 w-28 bg-[#C1432A]/50 rounded-sm" />
        </div>
      </header>

      {/* Hero Skeleton */}
      <div className="bg-ink text-white pt-[110px] pb-[90px] w-full">
        <div className="max-w-[1140px] mx-auto px-8">
          {/* Tag */}
          <div className="h-6 w-56 bg-white/10 rounded-[20px] mb-7" />
          {/* Title */}
          <div className="h-14 w-3/4 bg-white/10 rounded-md mb-4" />
          <div className="h-14 w-1/2 bg-white/10 rounded-md mb-8" />
          {/* Subtext */}
          <div className="h-5 w-2/3 bg-white/10 rounded mb-2.5" />
          <div className="h-5 w-1/2 bg-white/10 rounded mb-9" />
          {/* CTAs */}
          <div className="flex gap-3.5 mb-14">
            <div className="h-11 w-32 bg-[#C1432A]/50 rounded-sm" />
            <div className="h-11 w-36 bg-white/10 rounded-sm" />
          </div>
          {/* Status strip */}
          <div className="border-t border-white/10 pt-6.5 flex gap-10">
            <div className="h-4 w-48 bg-white/10 rounded" />
            <div className="h-4 w-40 bg-white/10 rounded" />
            <div className="h-4 w-32 bg-white/10 rounded" />
          </div>
        </div>
      </div>

      {/* Benchmarks Section Skeleton */}
      <div className="py-24 bg-paper max-w-[1140px] mx-auto px-8 w-full">
        <div className="max-w-[640px] mb-14">
          <div className="h-4 w-32 bg-ink-2/10 rounded mb-3.5" />
          <div className="h-9 w-2/3 bg-ink-2/10 rounded mb-3.5" />
          <div className="h-5 w-full bg-ink-2/10 rounded" />
        </div>
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/80 border border-line-soft rounded-sm p-6 space-y-4">
              <div className="h-4 w-12 bg-ink-2/10 rounded" />
              <div className="h-6 w-3/4 bg-ink-2/10 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-ink-2/10 rounded" />
                <div className="h-4 w-5/6 bg-ink-2/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
