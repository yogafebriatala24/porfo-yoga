import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogafebriatala.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default: "Yoga Febriatala | Personal Website",
    template: "%s - Yoga Febriatala",
  },

  description:
    "Hi, i'm Yoga Febriatala Fullstack Developer. I'm from Bogor Indonesia, i have experience more than 2 years",
  keywords: "Yoga Febriatala",

  authors: [
    {
      name: "Yoga Febriatala",
      url: "/",
    },
  ],
  icons: {
    icon: "/icon/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Yoga Febriatala | Personal Website",
    description:
      "Hi, i'm Yoga Febriatala Fullstack Developer. I'm from Bogor Indonesia, i have experience more than 2 years ",
    siteName: "Yoga Febriatala",
    images: [
      {
        url: "/apple-icon.png",
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
      <body className={`${poppins.className} bg-bg-image`}>{children}</body>
    </html>
  );
}
