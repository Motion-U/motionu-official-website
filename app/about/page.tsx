import Image from "next/image";
import aboutSections from "@/data/about.json";
import type { JSX } from "react";

interface ContentBlock {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
}

interface Section {
  title: string;
  content: ContentBlock[];
}

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "list" && block.items) {
    return (
      <ol key={idx} className="text-wrap mt-3 leading-7 md:leading-8 text-content-secondary pl-5 md:pl-6 list-decimal space-y-2">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }
  return (
      <p key={idx} className="text-wrap mt-3 leading-7 md:leading-8 text-content-secondary">
      {block.text}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="relative z-[1]">
      <section className="py-10 md:py-16 px-[max(24px,5vw)] md:px-[max(24px,8vw)] lg:px-40">
        <div className="flex flex-col gap-6 md:gap-8">
          {(aboutSections as Section[]).map((section) => (
            <div
              key={section.title}
              className="rounded-[20px] border border-outline p-5 md:p-6 bg-surface-card"
              style={{
                boxShadow: "0 4px 24px rgba(14,165,233,0.06)",
              }}
            >
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold text-content-primary">
                  {section.title}
                </h2>
              </div>
              {section.content.map((block, idx) => renderBlock(block, idx))}
            </div>
          ))}
        </div>
      </section>

      {/* Org chart */}
      <div className="text-center mt-8 pb-16 px-[max(24px,5vw)] md:px-[max(24px,8vw)]">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-content-primary mb-5">
          Motion-U Club Members 2025/2026
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
