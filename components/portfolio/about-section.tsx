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

      <div className="skills">
        {about.skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
