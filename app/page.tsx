import { Sidebar } from "@/components/layout/sidebar";
import { AboutSection } from "@/components/portfolio/about-section";
import { ChatSection } from "@/components/portfolio/chat-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { WorkHistorySection } from "@/components/portfolio/work-history-section";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Sidebar />

      <main className="main-content">
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
        <ProjectsSection />
        <WorkHistorySection />

        <ChatSection />

        <footer className="site-footer">
          <p>© 2026 Ajay Thakur</p>
        </footer>
      </main>
    </div>
  );
}
