import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediaweb vs Competitors — Compare Portfolio Builders for Creators",
  description:
    "See how Mediaweb compares to Linktree, Beacons, MediaKits.io, and Lovable. AI-built portfolio, mediakit, and link-in-bio — all in one platform.",
  alternates: { canonical: "/compare" },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb vs Competitors — Compare Portfolio Builders for Creators",
    description:
      "See how Mediaweb compares to Linktree, Beacons, MediaKits.io, and Lovable.",
    url: "https://mediaweb.app/compare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb vs Competitors — Compare Portfolio Builders for Creators",
    description:
      "See how Mediaweb compares to Linktree, Beacons, MediaKits.io, and Lovable.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mediaweb.app/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://mediaweb.app/compare" },
          ],
        },
        {
          "@type": "CollectionPage",
          name: "Mediaweb vs Competitors",
          description: "Compare Mediaweb to Linktree, Beacons, MediaKits.io, and Lovable for creator portfolios and media kits.",
          url: "https://mediaweb.app/compare",
          publisher: { "@type": "Organization", name: "Mediaweb" },
        },
      ],
    }),
  },
};

const comparisons = [
  {
    slug: "linktree",
    name: "Linktree",
    pitch: "Link-in-bio, but with a real portfolio behind it.",
    gradient: "from-green-400 to-teal-400",
    border: "hover:border-green-500/40",
  },
  {
    slug: "beacons",
    name: "Beacons",
    pitch:
      "More than monetization — a portfolio brands take seriously.",
    gradient: "from-purple-400 to-blue-400",
    border: "hover:border-purple-500/40",
  },
  {
    slug: "mediakits-io",
    name: "MediaKits.io",
    pitch: "Everything they do, plus a full portfolio.",
    gradient: "from-pink-400 to-purple-400",
    border: "hover:border-pink-500/40",
  },
  {
    slug: "lovable",
    name: "Lovable",
    pitch: "Built for creators, not developers.",
    gradient: "from-orange-400 to-pink-400",
    border: "hover:border-orange-500/40",
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              How Mediaweb{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Compares
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how Mediaweb stacks up against the tools creators use
              today — and why more are switching.
            </p>
          </div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className={`group bg-slate-800/50 border border-slate-700/50 ${c.border} rounded-lg backdrop-blur-xs p-8 transition-all hover:shadow-lg`}
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  vs{" "}
                  <span
                    className={`bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}
                  >
                    {c.name}
                  </span>
                </h2>
                <p className="text-gray-400 mb-4">{c.pitch}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 group-hover:gap-2 transition-all">
                  Read comparison
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to try it yourself?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Portfolio, mediakit, and link-in-bio — built by AI in minutes.
              Start your 14-day free trial.
            </p>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
