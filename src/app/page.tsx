import Hero from "./_components/hero";
import VideoSection from "./_components/video-section";
import Features from "./_components/features";
import MediaKit from "./_components/mediakit";
import PricingPlans from "./pricing/pricing-plans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediaweb – AI Portfolio Website Builder + Media Kit",
  description: "Your portfolio, mediakit, and social feed all in one place, built by AI. Perfect for UGC Creators, Content Creators, Freelancers and anyone who needs a portfolio website.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb – AI Portfolio Website Builder + Media Kit",
    description: "Your portfolio, mediakit, and social feed all in one place, built by AI. Perfect for UGC Creators, Content Creators, Freelancers and anyone who needs a portfolio website.",
    url: "https://mediaweb.app/",
    images: [
      {
        url: "https://mediaweb.app/og/home.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb – AI portfolio + media kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb – AI Portfolio Website Builder + Media Kit",
    description: "Your portfolio, mediakit, and social feed all in one place, built by AI. Perfect for UGC Creators, Content Creators, Freelancers and anyone who needs a portfolio website.",
    images: ["https://mediaweb.app/og/home.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://mediaweb.app/#organization",
          "name": "Mediaweb",
          "url": "https://mediaweb.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mediaweb.app/logo.svg",
            "width": 100,
            "height": 100
          },
          "sameAs": []
        },
        {
          "@type": "WebSite",
          "@id": "https://mediaweb.app/#website",
          "url": "https://mediaweb.app/",
          "name": "Mediaweb",
          "publisher": {
            "@id": "https://mediaweb.app/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mediaweb.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://mediaweb.app/#softwareapplication",
          "name": "Mediaweb",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": "https://mediaweb.app/",
        "offers": {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-03-01",
          "description": "Creator - Pro plan - 3 websites, 3 custom domains, free hosting, mediakit, custom themes"
        },
          "publisher": {
            "@id": "https://mediaweb.app/#organization"
          }
        }
      ]
    }),
  },
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10">
        <Hero />
        <VideoSection />
        <Features />
        <MediaKit cdnUrl={process.env.R2_PUBLIC_URL || ""} />
        <PricingPlans />
      </div>
    </div>
  );
};

export default Landing;
