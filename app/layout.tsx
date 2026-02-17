import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/DomeGallery.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattty Gallery",
  description: "Interactive 3D gallery showcasing tattoo art and designs",
  keywords: ["tattoo", "gallery", "3D", "art", "design", "tattty"],
  authors: [{ name: "Tattty" }],
  creator: "Tattty",
  publisher: "Tattty",
  metadataBase: new URL("https://globe-pic.tattty.com"),
  alternates: {
    canonical: "https://globe-pic.tattty.com",
  },
  openGraph: {
    title: "Tattty Gallery",
    description: "Interactive 3D gallery showcasing tattoo art and designs",
    url: "https://globe-pic.tattty.com",
    siteName: "Tattty Gallery",
    images: [
      {
        url: "https://globe-pic.tattty.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tattty Gallery - 3D Tattoo Art Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattty Gallery",
    description: "Interactive 3D gallery showcasing tattoo art and designs",
    images: ["https://globe-pic.tattty.com/twitter-image.jpg"],
    creator: "@tattty",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
