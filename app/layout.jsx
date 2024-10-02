import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FooterNew from "./components/footer-new";
import "./globals.css";
import Alert from "./components/Alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <Analytics>
      <html lang="en">
        <body
          className={`${inter.className} overflow-x-hidden relative max-w-[100vw]`}
        >
          <Alert />
          <Header />
          {children}
          {/* <Footer /> */}
          <FooterNew />
        </body>
      </html>
    </Analytics>
  );
}
