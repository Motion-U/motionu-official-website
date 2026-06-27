"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] flex items-center justify-between px-[max(24px,5vw)] border-b border-outline transition-all duration-200 ${
        scrolled ? "h-14" : "h-16"
      }`}
      style={{ background: "var(--bg-nav)", backdropFilter: "blur(20px) saturate(180%)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display font-bold text-lg text-content-primary no-underline flex items-center gap-2"
      >
        <Image src="/images/motionu.png" width={28} height={28} alt="Motion-U" />
        Motion-U
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1.5 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium text-content-secondary no-underline px-3.5 py-1.5 rounded-sm transition-colors duration-200 hover:text-content-primary hover:bg-surface-card"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right cluster */}
      <div className="flex items-center gap-2.5">
        <ThemeToggle />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyWcBSC_SNrjW5dA7J3dNYtZlb6NRC0YiXR3aN1LiVDfsbMw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 font-display text-sm font-semibold text-white px-5 py-2 rounded-sm no-underline transition-transform duration-200 hover:-translate-y-px"
          style={{ background: "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)" }}
        >
          Join Club ✦
        </a>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden bg-transparent border-none text-content-primary cursor-pointer text-xl p-1.5"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-1 px-[max(24px,5vw)] py-4 border-b border-outline"
          style={{ background: "var(--bg-nav)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-content-secondary no-underline px-3.5 py-2 rounded-sm transition-colors duration-200 hover:text-content-primary hover:bg-surface-card"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
