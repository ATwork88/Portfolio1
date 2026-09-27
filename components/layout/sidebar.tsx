import {
  FileText,
  MessageCircle,
} from "lucide-react";

const navigation = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work History", href: "#work" },
  { label: "Ask Claude", href: "#chat" },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/teresalin",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    label: "Resume",
    href: "#",
    icon: FileText,
  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a href="#top" className="identity">
          <div className="identity-mark">TL</div>
          <div>
            <div className="identity-name">Teresa Lin</div>
            <div className="identity-role">Software Engineer</div>
          </div>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav" aria-label="External links">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {Icon && <Icon size={16} strokeWidth={1.8} />}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <MessageCircle size={15} />
          <span>AI-powered portfolio</span>
        </div>
      </div>
    </aside>
  );
}
