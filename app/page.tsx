import HeroText from "./components/HeroText";
import ActivityCard from "./components/ActivityCard";
import MembershipPerkCard from "./components/MembershipPerkCard";
import CollaboratorLogo from "./components/CollaboratorLogo";
import ProjectPostCard from "./components/ProjectPostCard";
import CtaBanner from "./components/CtaBanner";
import ScrollReveal from "./components/ScrollReveal";
import {
  FaBullhorn,
  FaProjectDiagram,
  FaCampground,
  FaBookReader,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import activities from "@/data/activities.json";
import perks from "@/data/perks.json";
import collaborators from "@/data/collaborators.json";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

// Icon map for activities
const iconMap: Record<string, React.ReactNode> = {
  "Workshop & Talk": <FaBullhorn />,
  Projects: <FaProjectDiagram />,
  Bootcamp: <FaCampground />,
  Competition: <FaTrophy />,
  "Study Group": <FaBookReader />,
  Community: <FaPeopleGroup />,
};

type ProjectEntry = {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  credit: string;
  tag: string;
};

export default async function HomePage() {
  const projects = await fetchProjects();

  return (
    <main className="relative z-[1]">
      {/* ── Hero ── */}
      <HeroText />

      {/* ── Activities ── */}
      <section
        id="activities"
        className="relative z-[1] py-[60px] md:py-[100px] px-[max(24px,8vw)]"
      >
        <div className="section-header flex items-end justify-between flex-wrap gap-5 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
              What We Do
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15]">
              Core Activities
            </h2>
            <p className="mt-3 text-content-secondary text-base max-w-[480px]">
              Six ways to sharpen your craft and accelerate your growth.
            </p>
          </div>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {activities.map((a, i) => (
            <ScrollReveal key={a.title} staggerIndex={i}>
              <ActivityCard
                icon={iconMap[a.title] ?? null}
                title={a.title}
                description={a.description}
                iconColor={a.iconColor as "blue" | "cyan" | "emerald" | "rose" | "amber" | "indigo"}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section
        id="projects"
        className="relative z-[1] pt-5 pb-[60px] md:pb-[100px] px-[max(24px,8vw)]"
      >
        <div className="flex items-end justify-between flex-wrap gap-5 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
              Featured Projects
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15]">
              Real tools built by our members.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 5).map((p, i) => (
            <ScrollReveal key={p.title} staggerIndex={i}>
              <ProjectPostCard {...p} />
            </ScrollReveal>
          ))}

          {/* View All card */}
          <ScrollReveal staggerIndex={5}>
            <Link
              href="/projects"
              className="block relative overflow-hidden bg-surface-card border border-outline rounded-[20px] no-underline cursor-pointer transition-all duration-200 hover:border-outline-accent hover:-translate-y-1 hover:shadow-card h-full"
            >
              <div className="w-full aspect-[16/10] bg-surface-elevated relative overflow-hidden flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "var(--icon-blue)" }}
                >
                  <FaArrowRight className="text-brand-light" />
                </div>
              </div>
              <div className="p-5 pb-6 text-center">
                <h3 className="font-display text-lg font-semibold text-content-primary mb-1.5">
                  View All Projects
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Explore everything built by our community.
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Membership Perks ── */}
      <section
        id="perks"
        className="relative z-[1] pt-5 pb-[60px] md:pb-[100px] px-[max(24px,8vw)]"
      >
        <div className="flex items-end justify-between flex-wrap gap-5 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
              Why Join
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary leading-[1.15]">
              Membership Perks
            </h2>
            <p className="mt-3 text-content-secondary text-base max-w-[480px]">
              Elevate your academic and professional journey.
            </p>
          </div>
        </div>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {perks.map((p, i) => (
            <ScrollReveal key={p.number} staggerIndex={i}>
              <MembershipPerkCard
                number={p.number}
                title={p.title}
                description={p.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>

      {/* ── Collaborators ── */}
      <section
        id="collaborators"
        className="relative z-[1] py-10 pb-[60px] px-[max(24px,8vw)] text-center"
      >
        <h2 className="font-display text-3xl font-bold text-content-primary pb-8">
          Our Collaborators
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-9">
          {collaborators.map((c) => (
            <CollaboratorLogo key={c.name} {...c} />
          ))}
        </div>
      </section>
    </main>
  );
}

async function fetchProjects(): Promise<ProjectEntry[]> {
  try {
    const slugs = await reader.collections.projects.list();
    const entries = await Promise.all(
      slugs.map(async (slug) => {
        const entry = await reader.collections.projects.read(slug);
        return {
          slug,
          title: entry?.title ?? "",
          description: entry?.description ?? "",
          image: (entry?.image as string) ?? "",
          link: entry?.link ?? "",
          credit: entry?.credit ?? "",
          tag: entry?.tag ?? "Web App",
        };
      })
    );
    return entries;
  } catch {
    return [];
  }
}