"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell-inner header-row">
        <Link href="/" className="site-brand" onClick={() => setIsOpen(false)}>
          <div className="header-avatar">
            <Image
              className="header-avatar-image"
              src="/images/headshot2.jpg"
              alt="Headshot of Aashish Bharath"
              fill
              sizes="44px"
              priority
            />
          </div>
          <div className="site-brand-text">
            <span className="brand-name">{siteConfig.name}</span>
            {siteConfig.role ? <span className="brand-role">{siteConfig.role}</span> : null}
          </div>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`site-nav${isOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`nav-link${isActivePath(pathname, item.href) ? " is-active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
