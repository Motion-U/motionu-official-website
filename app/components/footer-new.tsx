import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterNew() {
  return (
    <footer className="relative z-[1] border-t border-outline px-[max(24px,8vw)] py-10 flex flex-col md:flex-row items-center justify-between flex-wrap gap-6">
      {/* Logo + Socials */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="font-display font-bold text-base text-content-secondary no-underline flex items-center gap-2"
        >
          Motion-U Club
        </Link>
        <div className="flex gap-3 text-lg">
          <a href="https://www.instagram.com/motionu.kict/" className="text-content-muted hover:text-content-secondary transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@motionu.kict" className="text-content-muted hover:text-content-secondary transition-colors">
            <FaTiktok />
          </a>
          <a href="https://twitter.com/MotionUkict" className="text-content-muted hover:text-content-secondary transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/motionukict/" className="text-content-muted hover:text-content-secondary transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 list-none">
        <li><Link href="/" className="text-sm text-content-muted no-underline hover:text-content-secondary transition-colors">Home</Link></li>
        <li><Link href="/about" className="text-sm text-content-muted no-underline hover:text-content-secondary transition-colors">About</Link></li>
        <li><Link href="/news" className="text-sm text-content-muted no-underline hover:text-content-secondary transition-colors">News</Link></li>
        <li><Link href="/contact" className="text-sm text-content-muted no-underline hover:text-content-secondary transition-colors">Contact</Link></li>
      </ul>

      <p className="text-sm text-content-muted">© 2025 Motion-U Club. Accelerating the Future.</p>
    </footer>
  );
}
