import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from "react-icons/fa";
import navLinks from "@/data/navigation.json";
import siteConfig from "@/data/site-config.json";

export default function FooterNew() {
  return (
    <footer className="relative z-[1] border-t border-outline px-[max(24px,8vw)] py-10 flex flex-col md:flex-row items-center justify-between flex-wrap gap-6">
      {/* Logo + Socials */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="font-display font-bold text-base text-content-secondary no-underline flex items-center gap-2"
        >
          {siteConfig.clubName}
        </Link>
        <div className="flex gap-3 text-lg">
          <a href={siteConfig.socials.instagram} className="text-content-muted hover:text-content-secondary transition-colors">
            <FaInstagram />
          </a>
          <a href={siteConfig.socials.tiktok} className="text-content-muted hover:text-content-secondary transition-colors">
            <FaTiktok />
          </a>
          <a href={siteConfig.socials.twitter} className="text-content-muted hover:text-content-secondary transition-colors">
            <FaTwitter />
          </a>
          <a href={siteConfig.socials.linkedin} className="text-content-muted hover:text-content-secondary transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-content-muted no-underline hover:text-content-secondary transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-content-muted">© 2026 Motion-U Club. Innovations In Motions.</p>
    </footer>
  );
}
