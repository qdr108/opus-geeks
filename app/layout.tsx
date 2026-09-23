import type { Metadata } from "next";
import ScrollMotion from "@/components/ScrollMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://opusgeeks.com"),
  title: {
    default: "Opus Geeks | Digital Product Engineering Studio",
    template: "%s | Opus Geeks"
  },
  description:
    "Opus Geeks designs and engineers dependable web platforms, mobile products, and digital experiences for ambitious teams.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Opus Geeks",
    title: "Opus Geeks | Digital Product Engineering Studio",
    description: "Strategy, design, and engineering for dependable digital products.",
    images: [{ url: "/images/opus-hero-command-center.png", width: 2048, height: 1138, alt: "Opus Geeks digital product engineering workspace" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Opus Geeks | Digital Product Engineering Studio",
    description: "Strategy, design, and engineering for dependable digital products.",
    images: ["/images/opus-hero-command-center.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollMotion />
      </body>
    </html>
  );
}
