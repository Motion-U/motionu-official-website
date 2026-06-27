import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from "react-icons/fa";
import siteConfig from "@/data/site-config.json";

export default function ContactPage() {
  return (
    <main className="relative z-[1]">
      <section className="flex flex-col flex-grow min-h-[70vh] md:min-h-screen px-[max(24px,5vw)] py-10 md:py-16">
        <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
          Get In Touch
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold text-content-primary mb-10">
          Contact us!
        </h1>

        <div className="w-full lg:w-1/2 space-y-0">
          <div className="flex justify-between items-center py-6">
            <p className="font-semibold text-content-primary">Address</p>
            <p className="text-right text-content-secondary max-w-[50%]">
              {siteConfig.address}
            </p>
          </div>
          <hr className="border-outline" />
          <div className="flex justify-between items-center py-6">
            <p className="font-semibold text-content-primary">Get in touch</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-right text-brand-light hover:text-brand-cyan transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <hr className="border-outline" />
          <div className="flex justify-between items-center py-6">
            <p className="font-semibold text-content-primary">Social media</p>
            <div className="flex gap-4 text-xl text-content-muted">
              <a
                href={siteConfig.socials.instagram}
                className="hover:text-brand-light transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                className="hover:text-brand-light transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href={siteConfig.socials.twitter}
                className="hover:text-brand-light transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                className="hover:text-brand-light transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <hr className="border-outline" />
        </div>
      </section>
    </main>
  );
}
