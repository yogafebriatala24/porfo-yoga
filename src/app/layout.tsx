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
  description: "Personal Website",
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
    title: "Yoga Febriatala",
    description: "Personal Website | Yoga Febriatala",
    siteName: "Yoga Febriatala",
    images: "/img/cover-share.png",
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
