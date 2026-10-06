import { AboutSection } from "@/components/portfolio/about-section";

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <p className="hero-kicker">Hello, I&apos;m Ajay.</p>
        <h1>
          I build AI products
          <br />
          that ship.
        </h1>
        <p className="hero-description">
          Full stack AI developer building AI-powered products, scalable SaaS
          platforms, and high-performance web applications, end to end.
        </p>
      </header>

      <AboutSection />
    </div>
  );
}
