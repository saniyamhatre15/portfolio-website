import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/config/profile";
export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.intro,
  openGraph: { title: `${profile.name} | ${profile.title}`, description: profile.intro, type: "website", images: [profile.portrait] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08040D" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
