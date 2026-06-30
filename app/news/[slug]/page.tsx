import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const slugs = await reader.collections.news.list();
  return slugs.map((slug) => ({ slug }));
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader.collections.news.read(slug);

  if (!post) {
    notFound();
  }

  // Keystatic v0.5.x returns MDX content as a lazy async function
  // that resolves to the raw markdown string.
  const content = await (post.content as unknown as () => Promise<string>)();

  const imageUrl = post.image || "";

  return (
    <main className="relative z-[1]">
      <article className="max-w-3xl mx-auto px-[max(24px,5vw)] py-16">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium text-content-secondary hover:text-brand-light transition-colors mb-10"
        >
          <FaArrowLeft className="text-xs" />
          Back to News
        </Link>

        {/* Category eyebrow */}
        {post.category && (
          <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15] mb-4">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex items-center gap-2 text-sm text-content-muted mb-8">
          <FaCalendarAlt className="text-xs" />
          <span>{post.date}</span>
        </div>

        {/* Description / lead */}
        <p className="text-lg text-content-secondary leading-relaxed mb-10 border-l-2 border-brand-light/30 pl-5">
          {post.description}
        </p>

        {/* Hero image */}
        {imageUrl && (
          <div className="relative aspect-video w-full mb-12 rounded-[20px] overflow-hidden bg-surface-card border border-outline">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Content body — rendered by react-markdown with custom styling */}
        <div className="prose-content max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold tracking-[-0.01em] text-content-primary mt-10 mb-4">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-content-secondary text-base leading-[1.8] mb-5">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="italic text-content-secondary border-l-2 border-brand-light/40 pl-5 my-8 text-lg leading-relaxed">
                  {children}
                </blockquote>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-outline flex justify-between items-center flex-wrap gap-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-light hover:text-content-primary transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            All News
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-content-secondary hover:text-brand-light transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
