interface Props {
  number: string;
  title: string;
  description: string;
}

export default function MembershipPerkCard({
  number,
  title,
  description,
}: Props) {
  return (
    <div className="bg-surface-card border border-outline rounded-[14px] p-6 transition-all duration-200 hover:bg-surface-card-hover hover:border-outline-accent hover:-translate-y-0.5 hover:shadow-card">
      <div className="font-display text-xs font-bold tracking-[0.1em] text-brand-light opacity-70 mb-3.5">
        {number}
      </div>
      <h3 className="font-display text-[0.9375rem] font-semibold text-content-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-content-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
