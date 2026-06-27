import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  keyId: string;
  title: string;
  date: string;
  desc: string;
  image: string;
}

export default function BlogPostCard({
  keyId,
  title,
  date,
  desc,
  image,
}: Props) {
  const imageUrl = `https:${image}`;
  return (
    <a href={`/news/${keyId}`} className="hover:opacity-95">
      <div className="bg-surface-card border border-outline rounded-[20px] overflow-hidden transition-all duration-200 hover:border-outline-accent hover:-translate-y-1 hover:shadow-card">
        <Image
          src={imageUrl}
          height={1100}
          width={1500}
          className="w-full"
          alt={title}
        />
        <div className="p-5 pb-6">
          <h2 className="font-display text-xl font-semibold text-content-primary mb-1.5">
            {title}
          </h2>
          <p className="text-sm text-content-secondary leading-relaxed">
            {desc}
          </p>
          <div className="flex justify-between items-center pt-4">
            <div className="text-sm text-content-muted">{date}</div>
            <div className="flex items-center gap-1 text-sm text-brand-light font-medium">
              <span>More</span>
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
