import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "@/styles/theme.css";
import "@/styles/site.css";

export const metadata: Metadata = {
  title: "Aashish Bharath | Data Science Portfolio",
  description:
    "Personal website of Aashish Bharath, showcasing projects, experience, and interests in data science and analytics."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={siteConfig.theme}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
