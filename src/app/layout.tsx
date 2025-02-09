import type { Metadata } from "next";
import "@/styles/global.scss";
import "@/styles/fonts.scss";
import useStore from "@/store/_index";
import { initData, mainStore } from "@/store/main";
import { MobxContext } from "@/context/mobxContext";
import Providers from "./providers";
import HeaderNav from "@/components/headerNav";

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
        <Providers>
          <header>
            <div className="container">
              <img src="/images/logo-header.png" className="logo"></img>
              <HeaderNav />
            </div>
          </header>
          <main>
            <div className="container">{children}</div>
          </main>
          <footer>
            <div className="container"></div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
