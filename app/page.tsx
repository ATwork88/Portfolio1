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
          <p className="hero-kicker">Hello, I&apos;m Teresa.</p>
          <h1>
            I build software that
            <br />
            solves real problems.
          </h1>
          <p className="hero-description">
            Software engineer focused on building reliable, thoughtful
            products across web applications, healthcare technology, and
            developer tools.
          </p>
        </header>

        <AboutSection />
        <ProjectsSection />
        <WorkHistorySection />

        <ChatSection />

        <footer className="site-footer">
          <p>© 2026 Teresa Lin</p>
        </footer>
      </main>
    </div>
  );
}
