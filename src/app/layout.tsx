import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PostHogProvider } from "./post-hog";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = "https://mediaweb.app";

export const metadata: Metadata = {
  title: "Mediaweb - AI Portfolio Website Builder for Creators",
  description: "Create stunning portfolio websites in minutes with AI. Perfect for artists, creators, and influencers.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
