import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "SocLite.ai · Your lightweight AI SOC";
const description =
  "SocLite.ai turns noisy security alerts into clear next steps. AI-powered triage, plain-English incident summaries, and threat prioritization for teams without a security team.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://soclite.ai"),
  keywords: [
    "AI SOC",
    "security operations",
    "alert triage",
    "incident response",
    "SMB security",
    "threat prioritization",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "SocLite.ai",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#04060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
