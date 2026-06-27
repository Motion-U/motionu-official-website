import ProjectPostCard from "@/app/components/ProjectPostCard";
import ScrollReveal from "@/app/components/ScrollReveal";
import projects from "@/data/projects.json";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="relative z-[1]">
      <section className="pt-16 pb-[100px] px-[max(24px,8vw)]">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
              Our Work
            </span>
            <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15]">
              All Projects
            </h1>
            <p className="mt-3 text-content-secondary text-base max-w-[480px]">
              Every tool and platform built by the Motion-U community.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-content-secondary hover:text-brand-light transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} staggerIndex={i}>
              <ProjectPostCard {...p} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
