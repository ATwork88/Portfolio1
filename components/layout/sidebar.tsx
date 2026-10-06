"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { about } from "@/content/about";

const navigation = [
  { label: "About Me", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Work History", href: "/work" },
  { label: "Ask Ajay", href: "/chat" },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ATwork88",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-thakur-7998bb360/",
  },
  {
    label: "Email",
    href: `mailto:${about.email}`,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <Link href="/" className="identity">
          <div className="identity-mark">AT</div>
          <div>
            <div className="identity-name">Ajay Thakur</div>
            <div className="identity-role">Full Stack AI Developer</div>
          </div>
        </Link>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav" aria-label="External links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noreferrer" })}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <MessageCircle size={15} />
          <span>AI-powered portfolio</span>
        </div>
      </div>
    </aside>
  );
}
