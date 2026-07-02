import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "aQuaFoil",
  description:
    "aQuaFoil is Queen's University's sustainable high-performance engineering design team, building a foiling Moth for the SuMoth Challenge 2027.",
  keywords: [
    "aQuaFoil",
    "foiling Moth",
    "SuMoth Challenge",
    "Queen's University",
    "sustainable engineering",
    "composites",
    "hydrofoil",
    "sailing",
  ],
  openGraph: {
    title: "aQuaFoil",
    description:
      "Queen's University engineering design team building a sustainable high-performance foiling Moth for the SuMoth Challenge 2027.",
    type: "website",
    locale: "en_CA",
    siteName: "aQuaFoil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Global noise grain overlay */}
        <div className="noise-overlay" aria-hidden="true">
          <svg>
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
          </svg>
        </div>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
