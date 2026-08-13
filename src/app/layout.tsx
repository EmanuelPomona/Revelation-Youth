import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/data/siteInfo";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteBackground from "@/components/layout/SiteBackground";
import ThemeProvider from "@/components/layout/ThemeProvider";

// Editorial display serif (fallback for Peranory/Amoresa until licensed).
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Clean, readable body sans.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} | ${siteInfo.churchName}`,
    template: `%s | ${siteInfo.name}`,
  },
  description:
    "Revelation Youth is the youth ministry of International Miracle Makers Church, helping people encounter God, grow in faith, and connect through music, events, devotions, and community.",
  applicationName: siteInfo.name,
  openGraph: {
    title: `${siteInfo.name} | ${siteInfo.churchName}`,
    description:
      "The youth ministry of International Miracle Makers Church — music, events, devotions, and community.",
    siteName: siteInfo.name,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main" className="revy-skip-link">
            Skip to content
          </a>
          <SiteBackground />
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
