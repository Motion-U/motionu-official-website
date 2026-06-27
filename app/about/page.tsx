import Image from "next/image";

const sections = [
  {
    title: "Background",
    content: (
      <p className="text-wrap mt-3 leading-8 text-justify text-content-secondary">
        Motion-U Club is a Special Interest Group (SIG) based in Kulliyyah of
        Information and Communication Technology (KICT) of International Islamic
        University Malaysia (IIUM). The Motion-U Club fosters a vibrant
        community where technology enthusiasts converge to innovate and embark
        on entrepreneurial journeys. Through workshops, talks, and hands-on
        projects, members explore the intersection of technology and
        entrepreneurship, equipped with skills and networks to shape the future
        of innovation and make meaningful impact.
      </p>
    ),
  },
  {
    title: "Mission",
    content: (
      <ol className="text-wrap mt-3 leading-8 text-justify text-content-secondary m-3 list-decimal">
        <li>
          To offer thorough technical education, ensuring members gain
          proficiency in key IT areas like web and mobile app development
          through hands-on projects and workshops.
        </li>
        <li>
          To cultivate business skills among members through tailored training,
          seminars, and mentorship, empowering them with strategic planning,
          financial management, and market analysis expertise.
        </li>
        <li>
          To foster a culture of innovation and collaboration, facilitating idea
          exchange, interdisciplinary projects, and networking events to
          encourage creative problem-solving and exploration of new
          technologies.
        </li>
        <li>
          To provide mentorship by industry experts and resources for
          fundraising, legal compliance, and team building, ensuring members
          receive guidance and support to overcome challenges and achieve their
          entrepreneurial goals.
        </li>
        <li>
          To promote ethical and sustainable practices, emphasizing social
          responsibility and environmental sustainability in members&apos;
          ventures, aiming to create positive social impact alongside financial
          success.
        </li>
      </ol>
    ),
  },
  {
    title: "Vision",
    content: (
      <p className="text-wrap mt-3 leading-8 text-justify text-content-secondary">
        Motion-U Club envisions a future where aspiring technopreneurs are
        equipped with a diverse range of IT skills, including web and mobile
        application development, among others, enabling them to create lucrative
        business opportunities. Complementing these technical competencies,
        Motion-U Club also instills robust business skills, fostering a holistic
        approach to entrepreneurship. Through mentorship and a supportive
        community, Motion-U Club aims to cultivate innovative leaders who
        seamlessly integrate technical expertise with strategic thinking, poised
        to revolutionize industries and drive impactful change in the dynamic
        landscape of technology-driven entrepreneurship.
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-[1]">
      <section className="py-16 px-[max(24px,8vw)] lg:px-64">
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="mx-5 rounded-[20px] border border-outline p-6 bg-surface-card"
              style={{
                boxShadow: "0 4px 24px rgba(14,165,233,0.06)",
              }}
            >
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold text-content-primary">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </div>
          ))}
        </div>
      </section>

      {/* Org chart */}
      <div className="text-center mt-8 pb-16 px-[max(24px,8vw)]">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-content-primary mb-5">
          Motion-U Club Members 2024/2025
        </h2>
        <div className="flex justify-center mt-5">
          <Image
            src="/images/org_chart.png"
            width={1200}
            height={1200}
            alt="Organization chart"
            className="rounded-[20px] border-4 border-outline-accent shadow-card"
          />
        </div>
      </div>
    </main>
  );
}
