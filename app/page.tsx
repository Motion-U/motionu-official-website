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
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { activities } from "@/data/activities";
import { perks } from "@/data/perks";
import { collaborators } from "@/data/collaborators";

// Icon map for activities
const iconMap: Record<string, React.ReactNode> = {
  "Workshop & Talk": <FaBullhorn />,
  Projects: <FaProjectDiagram />,
  Bootcamp: <FaCampground />,
  Competition: <FaTrophy />,
  "Study Group": <FaBookReader />,
  Community: <FaPeopleGroup />,
};

// Projects (static — will merge with Contentful CMS later)
const projects = [
  {
    title: "Mallam Chat",
    description:
      "The easiest way to chat with Malaysian AI. Mallam is the ChatGPT for Malaysian where it can understand Bahasa Melayu and respond in Bahasa Melayu.",
    image: "/images/mallam.png",
    link: "https://beta.mallam.chat/",
    credit: "Quddus",
    tag: "AI Chat",
  },
  {
    title: "Simplified iMa'luum",
    description:
      "Tired of old-design iMa'luum? Try the new unofficial iMa'luum that looks much cooler and much more feature-rich!",
    image: "/images/imaalum.png",
    link: "https://imaluum.nrmnqdds.com/",
    credit: "Quddus",
    tag: "Web App",
  },
  {
    title: "ProReg",
    description:
      "ProReg is an application that can help IIUM students to schedule their courses timetable. Available both in web and mobile.",
    image: "/images/proreg.png",
    link: "https://proreg.vercel.app/",
    credit: "Forthify",
    tag: "Tool",
  },
  {
    title: "IIUM Schedule",
    description:
      "IIUM Schedule is an application that can help IIUM students to schedule their courses timetable seamlessly.",
    image: "/images/iiumschedule.png",
    link: "https://iiumschedule.vercel.app/",
    credit: "Fareez Ikmal",
    tag: "Tool",
  },
  {
    title: "Malaysia Prayer Time",
    description:
      "Malaysia Prayer Time is a mobile application that can help Muslims know their prayer schedule.",
    image: "/images/malaysiaprayertime.png",
    link: "https://waktusolat.app/en",
    credit: "Fareez Ikmal",
    tag: "Mobile",
  },
];

export default function HomePage() {
  return (
    <main className="relative z-[1]">
      {/* ── Hero ── */}
      <HeroText />

      {/* ── Activities ── */}
      <section
        id="activities"
        className="relative z-[1] py-[100px] px-[max(24px,8vw)]"
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
                iconColor={a.iconColor}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section
        id="projects"
        className="relative z-[1] pt-5 pb-[100px] px-[max(24px,8vw)]"
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
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} staggerIndex={i}>
              <ProjectPostCard {...p} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Membership Perks ── */}
      <section
        id="perks"
        className="relative z-[1] pt-5 pb-[100px] px-[max(24px,8vw)]"
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
