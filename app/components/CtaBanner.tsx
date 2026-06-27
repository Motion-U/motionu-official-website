import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function CtaBanner() {
  return (
    <div
      className="relative z-[1] mx-[max(24px,8vw)] mb-[100px] mt-0 rounded-[20px] overflow-hidden border border-outline-accent p-[72px_max(32px,6vw)] flex flex-col items-center text-center gap-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(99,102,241,0.06) 100%)",
      }}
    >
      <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] max-w-[640px] text-content-primary">
        Ready to <span className="gradient-text">accelerate</span> your future?
      </h2>
      <p className="text-content-secondary text-base max-w-[480px]">
        Join hundreds of builders shipping real products, learning together, and
        levelling up their careers.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href={siteConfig.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-base font-semibold text-white px-8 py-3.5 rounded-sm no-underline transition-transform duration-200 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
            boxShadow: "0 8px 30px rgba(14,165,233,0.35)",
          }}
        >
          Join the Club ✦
        </a>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 font-display text-base font-semibold text-content-primary px-8 py-3.5 rounded-sm bg-transparent border border-outline no-underline transition-all duration-200 hover:border-outline-accent hover:-translate-y-px"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
