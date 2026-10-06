"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Briefcase,
  FolderKanban,
  Mail,
  MessageCircle,
  PanelLeftClose,
  PanelLeftOpen,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import { about } from "@/content/about";

const STORAGE_KEY = "sidebar-collapsed";

const iconProps = { size: 18, "aria-hidden": true, className: "nav-icon" };

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      className="nav-icon"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      className="nav-icon"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navigation: { label: string; href: string; icon: ReactNode }[] = [
  { label: "About Me", href: "/", icon: <User {...iconProps} /> },
  { label: "Projects", href: "/projects", icon: <FolderKanban {...iconProps} /> },
  { label: "Work History", href: "/work", icon: <Briefcase {...iconProps} /> },
  { label: "Ask Ajay", href: "/chat", icon: <MessageCircle {...iconProps} /> },
];

const links: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "GitHub",
    href: "https://github.com/ATwork88",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-thakur-7998bb360/",
    icon: <LinkedinIcon />,
  },
  {
    label: "Email",
    href: `mailto:${about.email}`,
    icon: <Mail {...iconProps} />,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.sidebar = collapsed
      ? "collapsed"
      : "expanded";
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
    } catch {}
  }, [collapsed]);

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-top">
          <Link href="/" className="identity" title="Ajay Thakur">
            <div className="identity-mark">AT</div>
            <div className="identity-text">
              <div className="identity-name">Ajay Thakur</div>
              <div className="identity-role">Full Stack AI Developer</div>
            </div>
          </Link>

          <button
            type="button"
            className="sidebar-toggle"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav" aria-label="External links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.href.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noreferrer" })}
            >
              {link.icon}
              <span className="nav-label">{link.label}</span>
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
