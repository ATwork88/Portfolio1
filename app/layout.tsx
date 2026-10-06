import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
