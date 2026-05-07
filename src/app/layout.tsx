import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FrameHaus Studio | Premium Photography & Video",
  description:
    "Premium bilingual website for a professional photography and video studio. Portfolio project developed by FronteraCode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${cormorant.variable} min-h-screen bg-[#0D0D0D] text-[#F5F1EA] antialiased`}
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
