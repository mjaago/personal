import "./global.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "./features/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./features/footer";
import { baseUrl } from "./sitemap";
import clsx from "clsx";

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
        <main className="flex h-full gap-4 px-4 py-4">
          <Navbar />
          <div className="flex-1 py-4">
            <div>{children}</div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
