import { about } from "@/content/about";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <p className="section-eyebrow">About Me</p>
      <h2>{about.name}</h2>

      <p className="section-lead">{about.summary}</p>

      <div className="section-copy">
        {about.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="skills-heading">Skills</h3>
      <div className="skill-grid">
        {about.skillGroups.map((group) => (
          <div key={group.label} className="skill-card">
            <p className="skill-card-title">{group.label}</p>
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
