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
      <ul className="also-list">
        {alsoBuilt.map((item) => (
          <li key={item.title}>
            <p className="also-title">{item.title}</p>
            {item.description && (
              <p className="also-description">{item.description}</p>
            )}
            {item.sites && (
              <ul className="also-sites">
                {item.sites.map((site) => (
                  <li key={site.name}>
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noreferrer"
                      className="also-site-link"
                    >
                      {site.name} ↗
                    </a>
                    {site.note && (
                      <span className="also-site-note"> ({site.note})</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {item.stack && (
              <p className="also-stack">Stack: {item.stack.join(", ")}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
