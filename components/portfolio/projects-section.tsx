"use client";

import { useState } from "react";
import {
  alsoBuilt,
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/content/projects";

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectFilter | "All">("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(active));

  const countFor = (filter: ProjectFilter) =>
    projects.filter((project) => project.filters.includes(filter)).length;

  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <p className="section-copy">
        AI systems, integrations, and full stack products built for clients.
        Client work is described without confidential details.
      </p>

      <div className="filter-bar" role="group" aria-label="Filter projects">
        <button
          type="button"
          className={`filter-chip${active === "All" ? " active" : ""}`}
          aria-pressed={active === "All"}
          onClick={() => setActive("All")}
        >
          All <span>{projects.length}</span>
        </button>
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-chip${active === filter ? " active" : ""}`}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter} <span>{countFor(filter)}</span>
          </button>
        ))}
      </div>

      <div className="project-list">
        {visible.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-meta">
              <span className="project-category">{project.industry}</span>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {project.link.label} ↗
                </a>
              )}
            </div>

            <h3>{project.title}</h3>
            <p className="project-role">{project.role}</p>

            <p className="project-label">What I built</p>
            <p className="project-built">{project.built}</p>

            <div className="project-result">
              <p className="project-label">Result</p>
              <p>{project.result}</p>
            </div>

            <p className="project-label">Tech stack</p>
            <div className="technology-list">
              {project.stack.map((item) => (
                <span key={item} className="technology">
                  {item}
                </span>
              ))}
            </div>

            <details className="project-skills">
              <summary>Skills</summary>
              <div className="technology-list">
                {project.skills.map((item) => (
                  <span key={item} className="technology">
                    {item}
                  </span>
                ))}
              </div>
            </details>

            <div className="project-tags">
              {project.filters.map((filter) => (
                <span key={filter} className="project-tag">
                  {filter}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="also-heading">Also built</h3>
      <p className="also-intro">Smaller builds, integrations and client sites.</p>

      <div className="also-grid">
        {alsoBuilt.map((item) => (
          <article
            key={item.title}
            className={`also-card${item.sites ? " wide" : ""}`}
          >
            <h4>{item.title}</h4>
            {item.description && <p>{item.description}</p>}

            {item.stack && (
              <div className="technology-list">
                {item.stack.map((tech) => (
                  <span key={tech} className="technology">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {item.sites && (
              <div className="also-sites">
                {item.sites.map((site) => (
                  <a
                    key={site.name}
                    href={site.href}
                    target="_blank"
                    rel="noreferrer"
                    className="site-pill"
                  >
                    <span className="site-pill-name">{site.name} ↗</span>
                    {site.note && (
                      <span className="site-pill-note">{site.note}</span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
