import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <p className="section-copy">
        A mix of professional, academic, and personal work. Professional
        projects are described at a level appropriate for a public portfolio,
        without exposing confidential client or internal details.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                {project.href && (
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology} className="technology">
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
