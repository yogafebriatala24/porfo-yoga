import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogafebriatala.com"),
  alternates: {
    canonical: "https://yogafebriatala.com",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default: "Yoga Febriatala | Personal Website",
    template: "%s - Yoga Febriatala",
  },

  description: "Hi everyone, I'm Yoga Febriatala, a Full Stack Developer.",
  keywords: "Yoga Febriatala",

  authors: [
    {
      name: "Yoga Febriatala",
      url: "https://yogafebriatala.com",
    },
  ],
  icons: {
    icon: "/icon/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Yoga Febriatala | Personal Website",
    description: "Hi everyone, I'm Yoga Febriatala, a Full Stack Developer.",
    url: "https://yogafebriatala.com",
    siteName: "Yoga Febriatala",
    images: [
      {
        url: "/logo.png",
        alt: "yoga",
      },
    ],
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Febriatala | Personal Website",
    description: "Hi everyone, I'm Yoga Febriatala, a Full Stack Developer.",
    creator: "Yoga Febriatala",

    images: [
      {
        url: "/img/cover-share.png",
        width: 1200,
        height: 630,
        alt: "profile-yoga",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bg-image`}>{children}</body>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}
