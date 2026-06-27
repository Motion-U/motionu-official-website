import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  iconColor: "blue" | "cyan" | "emerald" | "rose" | "amber" | "indigo";
}

const iconBgMap: Record<Props["iconColor"], string> = {
  blue: "var(--icon-blue)",
  cyan: "var(--icon-cyan)",
  emerald: "var(--icon-emerald)",
  rose: "var(--icon-rose)",
  amber: "var(--icon-amber)",
  indigo: "var(--icon-indigo)",
};

export default function ActivityCard({
  icon,
  title,
  description,
  iconColor,
}: Props) {
  return (
    <div className="bg-surface-card border border-outline rounded-[14px] p-7 transition-all duration-200 hover:bg-surface-card-hover hover:border-outline-accent hover:-translate-y-1 hover:shadow-card">
      <div
        className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-[18px]"
        style={{ background: iconBgMap[iconColor], color: "var(--brand)" }}
      >
        {icon}
      </div>
      <h3 className="font-display text-[1.0625rem] font-semibold text-content-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-content-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
