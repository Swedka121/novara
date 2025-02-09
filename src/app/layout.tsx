import type { Metadata } from "next";
import "@/app/global.scss";
import "@/app/fonts.scss";

export const metadata: Metadata = {
  title: "Novara",
  description: "Created by Swedka121",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <img src="/images/logo-header.png" className="logo"></img>
            <nav className="nav"></nav>
          </div>
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
        <footer>
          <div className="container"></div>
        </footer>
      </body>
    </html>
  );
}
