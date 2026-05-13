import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FrameHaus Studio | Premium Photography & Video",
    template: "%s | FrameHaus Studio",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "FrameHaus Studio | Premium Photography & Video",
    description: siteConfig.description,
    images: [
      {
        url: "/framehaus/hero-card.svg",
        width: 1200,
        height: 1500,
        alt: "FrameHaus Studio premium photography and video website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FrameHaus Studio | Premium Photography & Video",
    description: siteConfig.description,
    images: ["/framehaus/hero-card.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${sora.variable} min-h-screen bg-[#0D0D0D] text-[#F5F1EA] antialiased`}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
