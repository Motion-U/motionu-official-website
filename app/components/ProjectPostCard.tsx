import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  credit: string;
  tag: string;
}

export default function ProjectPostCard({
  title,
  description,
  image,
  link,
  credit,
  tag,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative overflow-hidden bg-surface-card border border-outline rounded-[20px] no-underline cursor-pointer transition-all duration-200 hover:border-outline-accent hover:-translate-y-1 hover:shadow-card group h-full"
    >
      {/* Thumbnail — fixed 16:10 aspect ratio for consistent gallery look */}
      <div className="w-full aspect-[16/10] bg-surface-elevated relative overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* ↗ arrow */}
      <div
        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm text-content-primary opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
        style={{ background: "rgba(14,165,233,0.2)", backdropFilter: "blur(8px)" }}
      >
        ↗
      </div>

      {/* Info */}
      <div className="p-5 pb-6">
        <span
          className="inline-block text-[0.6875rem] font-semibold tracking-[0.08em] uppercase text-brand-light px-2.5 py-1 rounded-full mb-2.5"
          style={{
            background: "var(--icon-blue)",
            border: "1px solid var(--border-accent)",
          }}
        >
          {tag}
        </span>
        <h3 className="font-display text-lg font-semibold text-content-primary mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-content-secondary leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-2.5 text-xs text-content-muted">
          Credit:{" "}
          <span className="text-content-secondary font-medium">{credit}</span>
        </div>
      </div>
    </a>
  );
}
