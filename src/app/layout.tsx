import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoga Febriatala",
  description:
    "The nature of a young man is freedom, freedom of ideas, creativity and work for the homeland",
  keywords: "Yoga Febriatala",

  authors: [
    {
      name: "Yoga Febriatala",
      url: "/",
    },
  ],
  icons: {
    icon: "/img/logo.png",
  },
  openGraph: {
    title: "Yoga Febriatala | Personal Website",
    description:
      "The nature of a young man is freedom, freedom of ideas, creativity and work for the homeland",
    siteName: "Yoga Febriatala",
    images: [
      {
        url: "/img/cover-share.png",
        width: 200,
        height: 200,
        alt: "yoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Febriatala | Personal Website",
    description:
      "The nature of a young man is freedom, freedom of ideas, creativity and work for the homeland",
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
      <Head>
        <link rel="canonical" href="https://yogafebriatala.com" />
        <meta
          property="og:image"
          content="https://yogafebriatala.com/img/cover-share.png"
        />
      </Head>
      <body className={`${poppins.className} bg-bg-image`}>{children}</body>
    </html>
  );
}
