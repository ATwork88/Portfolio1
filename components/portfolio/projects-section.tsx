import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <p className="section-copy">
        AI systems, SaaS platforms, and web applications built for clients and as
        self-funded products. Client work is described without confidential
        details.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {link.label} ↗
                  </a>
                ))}
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
