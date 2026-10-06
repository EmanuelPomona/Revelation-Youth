import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
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

// Body and utility sans. A grotesque rather than a neutral UI face: it holds
// up under the wide letterspacing the Revelation Youth poster artwork uses for
// its labels, which is where the site's small-caps rhythm comes from.
const sans = Archivo({
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
      // globals.css sets `scroll-behavior: smooth`; Next needs it declared here
      // too, or router navigations animate the scroll reset instead of jumping.
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main" className="revy-skip-link">
            Skip to content
          </a>

          {/* Scroll reveals are driven by IntersectionObserver. Without JS the
              observer never fires, so show the content instead of leaving it
              stranded at opacity 0. */}
          <noscript>
            <style>{`.revy-reveal{opacity:1;transform:none}`}</style>
          </noscript>
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
