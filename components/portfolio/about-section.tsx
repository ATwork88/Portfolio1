import {
  Cloud,
  LayoutTemplate,
  Monitor,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { about } from "@/content/about";

const highlighted = ["ZeroRetain AI"];

function renderBold(text: string) {
  const pattern = new RegExp(`(${highlighted.join("|")})`);
  return text.split(pattern).map((part, index) =>
    highlighted.includes(part) ? <strong key={index}>{part}</strong> : part,
  );
}

const categoryIcons: Record<string, ReactNode> = {
  Frontend: <Monitor size={18} />,
  "Backend & APIs": <Server size={18} />,
  Mobile: <Smartphone size={18} />,
  "CMS & Site Builders": <LayoutTemplate size={18} />,
  "AI & LLMs": <Sparkles size={18} />,
  "Infrastructure & Data": <Cloud size={18} />,
};

export function AboutSection() {
  return (
    <section id="about" className="section">
      <p className="section-eyebrow">About Me</p>
      <h2>{about.name}</h2>

      <p className="section-lead">{about.summary}</p>

      <div className="section-copy">
        {about.bio.map((paragraph) => (
          <p key={paragraph}>{renderBold(paragraph)}</p>
        ))}
      </div>

      <h3 className="skills-heading">Skills</h3>
      <div className="skill-grid">
        {about.skillGroups.map((group) => (
          <div key={group.label} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-icon">
                {categoryIcons[group.label]}
              </span>
              <p className="skill-card-title">{group.label}</p>
            </div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
