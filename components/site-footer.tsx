import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-row">
        <span>
          {siteConfig.name} · {year}
        </span>
        <span>
          <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          {" · "}
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </span>
      </div>
    </footer>
  );
}
