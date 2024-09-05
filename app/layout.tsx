import "./global.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MobileNavbar, Navbar } from "./features/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import clsx from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marten Jaago",
    template: "%s | Marten Jaago",
  },
  description: "This is Marten Jaago's personal website.",
  openGraph: {
    title: "Marten Jaago's personal website",
    description: "This is Marten Jaago's personal website.",
    url: baseUrl,
    siteName: "Marten Jaago's personal website",
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
        "m-0 box-border bg-white text-black",
        montserrat.variable,
      )}
    >
      <body className="m-0">
        <main className="flex justify-center px-8 py-8">
          <div className="flex w-full min-w-[300px] max-w-[2048px] flex-col gap-8 sm:flex-row xl:justify-center xl:gap-12">
            <div className="hidden sm:block">
              <Navbar className="h-[calc(100vh-4rem)] max-h-[1080px] min-h-[600px]" />
            </div>
            <div className="block sm:hidden">
              <MobileNavbar />
            </div>
            <div className="flex w-full flex-1 flex-col">
              <div className="flex-1">{children}</div>
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
