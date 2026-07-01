"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import FooterNew from "./footer-new";
import AthenaChatbot from "./AthenaChatbot";

export default function ShellWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKeystatic = pathname.startsWith("/keystatic");

  if (isKeystatic) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="mesh-bg" />
      <Header />
      {children}
      <FooterNew />
      <AthenaChatbot />
    </>
  );
}
