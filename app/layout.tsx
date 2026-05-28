import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocialQueue — Schedule posts across all platforms",
  description: "Plan and schedule posts for Instagram, TikTok, Twitter, LinkedIn with optimal timing suggestions and cross-platform content adaptation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b092c85c-7742-41e6-b08f-18d266510341"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
