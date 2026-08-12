import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoonyank — Software built to engineering standards",
  description:
    "Shoonyank Pvt Ltd designs and builds custom software, mobile apps, databases and cloud infrastructure — held to engineering benchmarks, not marketing ones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shoonyank — Software built to engineering standards",
    description:
      "Shoonyank Pvt Ltd designs and builds custom software, mobile apps, databases and cloud infrastructure — held to engineering benchmarks, not marketing ones.",
    url: "https://shoonyank.com",
    siteName: "Shoonyank",
    images: [
      {
        url: "/logoCropped.png",
        width: 1200,
        height: 630,
        alt: "Shoonyank",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoonyank — Software built to engineering standards",
    description:
      "Shoonyank Pvt Ltd designs and builds custom software, mobile apps, databases and cloud infrastructure — held to engineering benchmarks, not marketing ones.",
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
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
