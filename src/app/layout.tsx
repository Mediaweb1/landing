import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PostHogProvider } from "./post-hog";
import { TikTokPixel } from "@mediaweb1/sdk/tiktok-pixel";
import { GoogleAdsPixel } from "@mediaweb1/sdk/google-ads";
import { STRUCTURED_DATA } from "@/constants/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = "https://mediaweb.app";

export const metadata: Metadata = {
  title: "Mediaweb – AI Portfolio Website Builder + Media Kit for Creators",
  description: "Mediaweb is an AI-powered portfolio website builder with automated media kit generation for UGC creators, content creators, influencers and anyone who needs an online portfolio website.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  other: {
    "application/ld+json": JSON.stringify(STRUCTURED_DATA),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={`${inter.variable} antialiased bg-slate-900`}>
        <PostHogProvider />
        <TikTokPixel />
        <GoogleAdsPixel />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
