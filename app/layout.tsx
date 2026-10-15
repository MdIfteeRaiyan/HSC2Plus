import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { OfflineSupport } from "@/components/offline-support";

export const metadata: Metadata = {
  title: "HSC2Plus — Learn. Practice. Repeat.",
  description: "বাংলা মাধ্যমের HSC ব্যবসায় শিক্ষা ও মানবিক বিভাগের শিক্ষার্থীদের জন্য পাঠ, রিভিশন, অনুশীলন ও মডেল টেস্টের Public Beta।",
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "HSC2Plus", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ecdcbc",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>
        {children}
        <OfflineSupport />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
