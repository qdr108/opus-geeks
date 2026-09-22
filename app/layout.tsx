import type { Metadata } from "next";
import ScrollMotion from "@/components/ScrollMotion";
import SiteIntro from "@/components/SiteIntro";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opus Geeks | Product Engineering Studio",
  description:
    "A premium redesign concept for Opus Geeks, focused on web apps, mobile apps, UI/UX, AI automation, and measurable product outcomes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteIntro />
        {children}
        <ScrollMotion />
      </body>
    </html>
  );
}
