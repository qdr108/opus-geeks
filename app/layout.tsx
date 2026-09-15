import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
