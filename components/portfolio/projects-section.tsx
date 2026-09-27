import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">Selected Work</p>
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
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
