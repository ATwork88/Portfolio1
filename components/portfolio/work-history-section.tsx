import { about } from "@/content/about";
import { experience } from "@/content/experience";

export function WorkHistorySection() {
  return (
    <section id="work" className="section">
      <p className="section-eyebrow">Experience</p>
      <h2>Work History</h2>

      <div className="experience-list">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="experience-item"
          >
            <div className="experience-period">{job.period}</div>

            <div>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <p>{job.description}</p>

              <div className="technology-list">
                {job.technologies.map((technology) => (
                  <span key={technology} className="technology">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="education-heading">Education</h2>

      <div className="experience-list">
        <article className="experience-item">
          <div className="experience-period">Education</div>

          <div>
            <h3>{about.education.field}</h3>
            <p className="company">{about.education.school}</p>
            <p>{about.education.level}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
