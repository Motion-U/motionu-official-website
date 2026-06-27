export default function NewsPage() {
  return (
    <main className="relative z-[1] py-16 px-[max(24px,8vw)]">
      <div className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
          Updates
        </span>
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary">
          News
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 gap-y-10 lg:mx-60">
        <p className="text-content-muted col-span-2 text-center py-10">
          No news available at the moment.
        </p>
      </div>
    </main>
  );
}
