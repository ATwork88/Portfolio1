import { MessageCircle } from "lucide-react";

const navigation = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work History", href: "#work" },
  { label: "Ask Ajay", href: "#chat" },
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
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a href="#top" className="identity">
          <div className="identity-mark">AT</div>
          <div>
            <div className="identity-name">Ajay Thakur</div>
            <div className="identity-role">Full Stack AI Developer</div>
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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
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
