import "./global.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "./features/nav";
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

const inter = Montserrat({ subsets: ["latin"], variable: "--font-inter" });

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
        inter.variable,
      )}
    >
      <body className="m-0 h-full">
        <main className="flex h-full gap-8 px-8 py-8 xl:justify-center xl:gap-12 xl:px-12">
          <div className="h-full">
            <Navbar />
          </div>
          <div className="flex h-full w-full min-w-96 max-w-[2048px] flex-1 flex-col">
            <Card className="flex-1 px-8 py-4">{children}</Card>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
