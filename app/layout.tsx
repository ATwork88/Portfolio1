import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

export const metadata = {
  title: "Ajay Thakur — Full Stack AI Developer",
  description: "Personal portfolio of Ajay Thakur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="top" className="site-shell">
          <Sidebar />

          <main className="main-content">
            {children}

            <footer className="site-footer">
              <p>© 2026 Ajay Thakur</p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
