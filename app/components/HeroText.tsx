import siteConfig from "@/data/site-config.json";

export default function HeroText() {
  return (
    <div className="relative z-[1] min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-[max(24px,8vw)] pt-16 md:pt-20 pb-[60px] md:pb-[100px]">
      {/* Eyebrow badge */}
      <div
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-brand-light px-4 py-1.5 rounded-full mb-8"
        style={{
          background: "var(--icon-blue)",
          border: "1px solid var(--border-accent)",
          animation: "fadeUp 0.6s ease both",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--brand-cyan)", boxShadow: "0 0 6px var(--brand-cyan)" }}
        />
        {siteConfig.tagline}
      </div>

      {/* H1 */}
      <h1
        className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[800px] text-content-primary"
        style={{ animation: "fadeUp 0.6s 0.1s ease both" }}
      >
        Empowering <span className="gradient-text">Innovators</span>
        <br /> Shaping Futures
      </h1>

      {/* Sub */}
      <p
        className="mt-5 text-[clamp(1rem,2vw,1.175rem)] text-content-secondary max-w-[560px] leading-relaxed"
        style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
      >
        {siteConfig.heroSubtitle}
      </p>

      {/* CTAs */}
      <div
        className="mt-8 md:mt-10 flex flex-wrap gap-3 justify-center w-full max-w-[400px] md:max-w-none"
        style={{ animation: "fadeUp 0.6s 0.3s ease both" }}
      >
        <a
          href={siteConfig.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-base font-semibold text-white px-7 py-3.5 rounded-sm no-underline transition-transform duration-200 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
            boxShadow: "0 8px 30px rgba(14,165,233,0.35)",
          }}
        >
          Join Club ✦
        </a>
        <a
          href="#activities"
          className="inline-flex items-center gap-2 font-display text-base font-semibold text-content-primary px-7 py-3.5 rounded-sm bg-transparent border border-outline no-underline transition-all duration-200 hover:border-outline-accent hover:-translate-y-px"
        >
          Explore Activities
        </a>
      </div>

      {/* Stats */}
      <div
        className="mt-[48px] md:mt-[72px] grid grid-cols-2 md:flex md:flex-wrap gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-6 justify-center"
        style={{ animation: "fadeUp 0.6s 0.4s ease both" }}
      >
        {siteConfig.heroStats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-x-12 gap-y-0">
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-content-primary leading-none">
                {stat.value}
                <span className="text-brand-light">{stat.suffix}</span>
              </div>
              <div className="mt-1 text-sm text-content-muted font-medium">
                {stat.label}
              </div>
            </div>
            {i < siteConfig.heroStats.length - 1 && (
              <div className="w-px h-10 bg-outline hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
