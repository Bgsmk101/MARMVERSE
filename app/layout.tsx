import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "MARMVERSE — вселенная мармелада",
    template: "%s — MARMVERSE",
  },
  description: "Яркий мармелад для молодёжной аудитории: пять вкусов, три формата упаковки и целая вселенная, которую можно съесть.",
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#main">Перейти к содержанию</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
