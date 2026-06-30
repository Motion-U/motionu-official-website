import BlogPostCard from "@/app/components/BlogPostCard";
import ScrollReveal from "@/app/components/ScrollReveal";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

type NewsEntry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: "Event" | "Product" | "Announcement";
  image: string | null;
};

export default async function NewsPage() {
  const slugs = await reader.collections.news.list();
  const posts: NewsEntry[] = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.news.read(slug);
      return {
        slug,
        title: entry?.title ?? "",
        date: entry?.date ?? "",
        description: entry?.description ?? "",
        category: (entry?.category ?? "Event") as NewsEntry["category"],
        image: entry?.image ?? null,
      };
    })
  );

  // Sort by date descending
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="relative z-[1]">
      <section className="pt-16 pb-[100px] px-[max(24px,8vw)]">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
              Updates
            </span>
            <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15]">
              News
            </h1>
            <p className="mt-3 text-content-secondary text-base max-w-[480px]">
              The latest from Motion-U — events, product launches, workshop
              recaps, and club announcements.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-content-secondary hover:text-brand-light transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} staggerIndex={i}>
                <BlogPostCard
                  keyId={post.slug}
                  title={post.title}
                  date={post.date}
                  desc={post.description || ""}
                  image={post.image || ""}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <p className="text-content-muted text-center py-10 col-span-full">
            No news available at the moment.
          </p>
        )}
      </section>
    </main>
  );
}
