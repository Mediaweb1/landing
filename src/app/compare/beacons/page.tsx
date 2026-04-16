import { Check, ShoppingBag, Sparkles, BarChart3, Globe, Layers, DollarSign } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { OtherComparisons } from "../_components/other-comparisons";

export const metadata: Metadata = {
  title: "Mediaweb vs Beacons — AI Portfolio + Mediakit for Creators",
  description:
    "Compare Mediaweb and Beacons. Both offer mediakits and link-in-bio — but Mediaweb gives you a full AI-built portfolio on your own domain.",
  alternates: { canonical: "/compare/beacons" },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb vs Beacons — AI Portfolio + Mediakit for Creators",
    description:
      "Compare Mediaweb and Beacons. Both offer mediakits and link-in-bio — but Mediaweb gives you a full AI-built portfolio on your own domain.",
    url: "https://mediaweb.app/compare/beacons",
    images: [
      {
        url: "https://mediaweb.app/og/compare-beacons.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb vs Beacons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb vs Beacons — AI Portfolio + Mediakit for Creators",
    description:
      "Compare Mediaweb and Beacons. Both offer mediakits and link-in-bio — but Mediaweb gives you a full AI-built portfolio on your own domain.",
    images: ["https://mediaweb.app/og/compare-beacons.png"],
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
            { "@type": "ListItem", position: 3, name: "Mediaweb vs Beacons", item: "https://mediaweb.app/compare/beacons" },
          ],
        },
        {
          "@type": "Article",
          headline: "Mediaweb vs Beacons — AI Portfolio + Mediakit for Creators",
          description: "Compare Mediaweb and Beacons. Both offer mediakits and link-in-bio — but Mediaweb gives you a full AI-built portfolio on your own domain.",
          author: { "@type": "Organization", name: "Mediaweb" },
          publisher: { "@type": "Organization", name: "Mediaweb" },
          datePublished: "2026-04-16",
          dateModified: "2026-04-16",
        },
      ],
    }),
  },
};

export default function BeaconsComparison() {
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
              Mediaweb vs{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Beacons
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Beacons helps you monetize. Mediaweb helps you land brand deals —
              with a real portfolio, mediakit, and link-in-bio, all on your own
              domain.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://dashboard.mediaweb.app/register"
                className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
              >
                Try Mediaweb Free
              </Link>
              <Link
                href="/pricing"
                className="inline-block rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-white px-8 py-3 text-lg font-semibold"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Portfolio-First */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  Portfolio-First, Not Monetization-First
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-purple-400 font-semibold">Beacons</span>{" "}
                  is built around monetization — tips, digital products, email
                  capture, and paid requests. It&apos;s a storefront for creators with
                  an existing audience.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb</span>{" "}
                  is built around getting you noticed. The portfolio IS the product —
                  a professional showcase that makes brands want to work with you.
                  Monetization follows when brands see a creator who takes their
                  presence seriously.
                </p>
              </div>
            </section>

            {/* AI-Built */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  AI-Built, Not Template-Picked
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Beacons gives you a template-based page builder. You pick a layout,
                  add blocks, and customize each section by hand.
                </p>
                <p className="text-lg">
                  Mediaweb&apos;s AI agent builds your portfolio from scratch. Tell it
                  who you are, drop in your content, and it creates a complete site —
                  portfolio, mediakit, and link-in-bio — styled to match your aesthetic.
                  No templates, no block-dragging, no design decisions.
                </p>
              </div>
            </section>

            {/* Mediakit Parity */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  We Match Their Mediakit
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Both Mediaweb and Beacons offer mediakits with verified social stats.
                  On paper, it&apos;s feature parity.
                </p>
                <p className="text-lg">
                  The difference: on Beacons, the mediakit is one tab in a monetization
                  suite. On Mediaweb, it&apos;s a first-class feature designed to impress
                  brands — integrated into your portfolio, auto-updated, and always
                  ready for a pitch.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Instagram verified stats",
                  "TikTok verified stats",
                  "YouTube verified stats",
                  "Facebook verified stats",
                  "Audience demographics",
                  "Engagement metrics",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-400 shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Your Domain */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  Your Domain, Your Brand
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Beacons puts you on{" "}
                  <span className="text-purple-400 font-mono">beacons.ai/yourname</span>{" "}
                  on the free tier. Custom domains are available on paid plans — but
                  your site still looks and feels like a Beacons page.
                </p>
                <p className="text-lg">
                  Mediaweb gives you a custom domain on every plan, plus a free{" "}
                  <span className="text-primary-400 font-mono">.mediaweb.app</span>{" "}
                  link. Your site looks like YOUR site — because it is. No
                  third-party branding, no platform watermarks.
                </p>
              </div>
            </section>

            {/* Full Portfolio */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  Full Portfolio vs Landing Page
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Beacons gives you a single-page link-in-bio with sections. It&apos;s
                  polished, but it&apos;s still one page.
                </p>
                <p className="text-lg">
                  Mediaweb gives you a multi-page portfolio site — dedicated project
                  pages, case studies, a link-in-bio page, and a mediakit. All
                  AI-generated, all on your own domain. When a brand wants to dig
                  deeper, there&apos;s depth to find.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Multi-page portfolio",
                  "AI portfolio builder",
                  "Verified mediakit",
                  "Link-in-bio page",
                  "Custom domain + free hosting",
                  "Theme studio",
                  "One-click publish",
                  "Social feed integration",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-400 shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  More Features, Lower Price
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-purple-400 font-semibold">
                    Beacons Creator Pro
                  </span>{" "}
                  costs $30/mo (billed monthly) and focuses on monetization tools —
                  tips, products, email marketing.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb</span> is
                  $20/mo (Early Bird) and gives you a full AI-built portfolio +
                  verified mediakit + branded link-in-bio + custom domain + free
                  hosting + AI agent. More features focused on landing brand deals,
                  at a lower price.
                </p>
                <p className="text-lg">
                  Start with a 14-day free trial — no charge until you decide.
                </p>
              </div>
            </section>
          </div>

          <OtherComparisons exclude="beacons" />

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              A portfolio brands take seriously
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Beacons helps you sell to your audience. Mediaweb helps you land
              brand deals. Different goals, different tools — try the one built
              for yours.
            </p>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              Start Building with Mediaweb
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
