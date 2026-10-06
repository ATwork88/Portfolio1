import { saas } from "@/content/saas";

export function SaasSection() {
  return (
    <section id="saas" className="section">
      <p className="section-eyebrow">My SaaS</p>
      <h2>{saas.name}</h2>

      <div className="saas-meta">
        <span className="saas-status">{saas.status}</span>
        <span className="project-category">{saas.category}</span>
      </div>

      <p className="section-lead">{saas.tagline}</p>

      <div className="section-copy">
        <p>{saas.summary}</p>
        <p className="saas-promise">&ldquo;{saas.promise}&rdquo;</p>
      </div>

      <h3 className="saas-heading">The problem</h3>
      <p className="section-copy">{saas.problem.intro}</p>
      <ul className="saas-list">
        {saas.problem.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="technology-list">
        {saas.problem.industries.map((industry) => (
          <span key={industry} className="technology">
            {industry}
          </span>
        ))}
      </div>

      <h3 className="saas-heading">How it works</h3>
      <ol className="saas-steps">
        {saas.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h3 className="saas-heading">Zero-retention guarantees</h3>
      <div className="technology-list">
        {saas.guarantees.map((guarantee) => (
          <span key={guarantee} className="technology">
            {guarantee}
          </span>
        ))}
      </div>
      <p className="section-copy">{saas.retained}</p>

      <h3 className="saas-heading">Product suite</h3>
      <div className="project-list">
        {saas.suite.map((product) => (
          <article key={product.title} className="project-card">
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            <p className="saas-example">&ldquo;{product.example}&rdquo;</p>
          </article>
        ))}
      </div>

      <h3 className="saas-heading">Planned stack</h3>
      <div className="technology-list">
        {saas.stack.map((item) => (
          <span key={item} className="technology">
            {item}
          </span>
        ))}
      </div>

      <h3 className="saas-heading">Roadmap</h3>
      <ol className="saas-steps">
        {saas.roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
