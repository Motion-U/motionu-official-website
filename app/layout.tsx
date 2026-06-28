import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "./components/ThemeProvider";
import "./design-tokens.css";
import Header from "./components/Header";
import FooterNew from "./components/footer-new";
import AthenaChatbot from "./components/AthenaChatbot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Motion-U Club Official Website",
  description: "This is Motion-U Club Official Website",
  keywords: [
    "technopreneurship",
    "technopreneurship club",
    "entrepreneurship",
    "entrepreneurship club",
    "motionu",
    "motionu club",
    "sig motionu",
    "motionu iium",
    "motionu kict",
    "motionu kict iium",
    "motion-u",
    "motion-u club",
    "sig motion-u",
    "motion-u iium",
    "motion-u kict",
    "motion-u kict iium",
  ],
  metadataBase: new URL("https://www.motionu.club/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-surface-base text-content-primary overflow-x-hidden relative max-w-[100vw]">
        <ThemeProvider>
          <Analytics />
          <div className="mesh-bg" />
          <Header />
          {children}
          <FooterNew />
          <AthenaChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
