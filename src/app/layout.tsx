import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shoonyank Labs",
    template: "%s | Shoonyank Labs",
  },
  description:
    "We design and build software that automates workflows, improves decision-making, and removes repetitive work from your business.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      default: "Shoonyank Labs",
      template: "%s | Shoonyank Labs",
    },
    description:
      "We design and build software that automates workflows, improves decision-making, and removes repetitive work from your business.",
    url: "https://shoonyanklabs.com",
    siteName: "Shoonyank Labs",
    images: [
      {
        url: "/logoCropped.png",
        width: 1200,
        height: 630,
        alt: "Shoonyank Labs",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Shoonyank Labs",
      template: "%s | Shoonyank Labs",
    },
    description:
      "We design and build software that automates workflows, improves decision-making, and removes repetitive work from your business.",
    images: ["/logoCropped.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
