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

      <p className="section-copy">
        {about.education.degree}, {about.education.school}
        <br />
        <a href={`mailto:${about.email}`}>{about.email}</a>
      </p>

      <div className="skill-groups">
        {about.skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <p className="skill-group-label">{group.label}</p>
            <div className="skills">
              {group.skills.map((skill) => (
                <span key={skill} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
