import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EpiRaider - FFXIV Practice Tool",
  description:
    "Practice FFXIV fight mechanics with penguins. A simple training tool for raiders.",
  keywords: [
    "FFXIV",
    "Final Fantasy XIV",
    "practice",
    "raid",
    "mechanics",
    "training",
  ],
  authors: [{ name: "EpiRaider" }],
  creator: "EpiRaider",
  openGraph: {
    title: "EpiRaider - FFXIV Practice Tool",
    description: "Practice FFXIV fight mechanics with penguins",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EpiRaider - FFXIV Practice Tool",
    description: "Practice FFXIV fight mechanics with penguins",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
