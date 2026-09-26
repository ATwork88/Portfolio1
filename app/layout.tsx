import "./globals.css";

export const metadata = {
  title: "Teresa Lin — Software Engineer",
  description: "Personal portfolio of Teresa Lin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
