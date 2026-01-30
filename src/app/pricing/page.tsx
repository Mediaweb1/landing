import PricingPlans from "./pricing-plans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediaweb Pricing – Plans for Creator Portfolios + Media Kit",
  description: "Mediaweb pricing plans for creator portfolios and media kits. Build stunning websites with AI assistance and automated social analytics.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb Pricing – Plans for Creator Portfolios + Media Kit",
    description: "Mediaweb pricing plans for creator portfolios and media kits. Build stunning websites with AI assistance and automated social analytics.",
    url: "https://mediaweb.app/pricing",
    images: [
      {
        url: "https://mediaweb.app/og/pricing.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb – AI portfolio + media kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb Pricing – Plans for Creator Portfolios + Media Kit",
    description: "Mediaweb pricing plans for creator portfolios and media kits. Build stunning websites with AI assistance and automated social analytics.",
    images: ["https://mediaweb.app/og/pricing.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "@id": "https://mediaweb.app/pricing#softwareapplication",
          "name": "Mediaweb",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": "https://mediaweb.app/",
          "offers": [
            {
              "@type": "Offer",
              "name": "Beta Plan",
              "price": "10",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-03-01",
              "description": "Beta plan - 3 websites, 10 pages per website, 3GB storage, 3 custom domains"
            }
          ],
          "publisher": {
            "@id": "https://mediaweb.app/#organization"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mediaweb.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Pricing",
              "item": "https://mediaweb.app/pricing"
            }
          ]
        }
      ]
    }),
  },
};

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <PricingPlans />
      </div>
    </div>
  );
};

export default PricingPage;
