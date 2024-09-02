import "./global.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MobileNavbar, Navbar } from "./features/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./features/footer";
import { baseUrl } from "./sitemap";
import clsx from "clsx";
import { Card } from "./components/Card";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "m-0 box-border h-full bg-white text-black",
        montserrat.variable,
      )}
    >
      <body className="m-0 h-full">
        <main className="h-full">
          <div className="flex h-full flex-col gap-8 px-8 py-8 sm:flex-row xl:justify-center xl:gap-12 xl:px-12">
            <div className="hidden h-full sm:block">
              <Navbar />
            </div>
            <div className="block sm:hidden">
              <MobileNavbar />
            </div>
            <div className="flex h-full w-full max-w-[2048px] flex-1 flex-col sm:min-w-96">
              <div className="flex-1">{children}</div>
              <Footer />
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
