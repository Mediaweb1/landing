import { Check, Link2, Globe, BarChart3, Sparkles, Layers, DollarSign } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { OtherComparisons } from "../_components/other-comparisons";

export const metadata: Metadata = {
  title: "Mediaweb vs Linktree — Link-in-Bio + Portfolio for Creators",
  description:
    "Compare Mediaweb and Linktree. Mediaweb gives you a link-in-bio page AND a full portfolio + mediakit on your own domain.",
  alternates: { canonical: "/compare/linktree" },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb vs Linktree — Link-in-Bio + Portfolio for Creators",
    description:
      "Compare Mediaweb and Linktree. Mediaweb gives you a link-in-bio page AND a full portfolio + mediakit on your own domain.",
    url: "https://mediaweb.app/compare/linktree",
    images: [
      {
        url: "https://mediaweb.app/og/compare-linktree.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb vs Linktree",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb vs Linktree — Link-in-Bio + Portfolio for Creators",
    description:
      "Compare Mediaweb and Linktree. Mediaweb gives you a link-in-bio page AND a full portfolio + mediakit on your own domain.",
    images: ["https://mediaweb.app/og/compare-linktree.png"],
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
            { "@type": "ListItem", position: 3, name: "Mediaweb vs Linktree", item: "https://mediaweb.app/compare/linktree" },
          ],
        },
        {
          "@type": "Article",
          headline: "Mediaweb vs Linktree — Link-in-Bio + Portfolio for Creators",
          description: "Compare Mediaweb and Linktree. Mediaweb gives you a link-in-bio page AND a full portfolio + mediakit on your own domain.",
          author: { "@type": "Organization", name: "Mediaweb" },
          publisher: { "@type": "Organization", name: "Mediaweb" },
          datePublished: "2026-04-16",
          dateModified: "2026-04-16",
        },
      ],
    }),
  },
};

export default function LinktreeComparison() {
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
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Linktree
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Linktree gives you a list of links. Mediaweb gives you a
              portfolio, mediakit, and link-in-bio — on your own domain.
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
            {/* More Than a Link List */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Link2 className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  More Than a Link List
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-green-400 font-semibold">Linktree</span>{" "}
                  gives you a page of links. That&apos;s the entire product. Brands
                  click through, see a list, and move on.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb</span>{" "}
                  turns your link-in-bio into a branded page on YOUR domain, backed by
                  a full portfolio that shows your work, your stats, and your
                  professionalism. When a brand clicks your link, they don&apos;t see a
                  list — they see someone worth working with.
                </p>
              </div>
            </section>

            {/* Your Domain, Your Brand */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  Your Domain, Your Brand
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  With Linktree, you&apos;re always{" "}
                  <span className="text-green-400 font-mono">linktr.ee/yourname</span>{" "}
                  — their brand, not yours. Every visitor sees their logo, their
                  domain, their experience.
                </p>
                <p className="text-lg">
                  Mediaweb lets you publish on your own custom domain — or start free
                  with a{" "}
                  <span className="text-primary-400 font-mono">.mediaweb.app</span>{" "}
                  link. Own your URL. Look professional. No third-party branding between
                  you and the brands you want to work with.
                </p>
              </div>
            </section>

            {/* Built-in Mediakit */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  Built-in Mediakit
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-green-400 font-semibold">Linktree</span>{" "}
                  has no mediakit. When a brand asks for your stats, you&apos;re
                  screenshotting Instagram insights and pasting them into a Google Doc.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb</span>{" "}
                  pulls verified stats from Instagram, TikTok, YouTube &amp; Facebook —
                  auto-updated, always ready. Brands see your reach, engagement, and
                  audience demographics without you lifting a finger.
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

            {/* AI Builds It For You */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  AI Builds It For You
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Linktree gives you a drag-and-drop link editor with limited
                  customization. You pick a theme, add your links, and that&apos;s about
                  it.
                </p>
                <p className="text-lg">
                  Mediaweb&apos;s AI agent builds your entire portfolio, mediakit,
                  and link-in-bio page from scratch. Tell it who you are and what you
                  do — it creates a site that matches your aesthetic, no design skills
                  needed. Not a template. A site built for <em>you</em>.
                </p>
              </div>
            </section>

            {/* Full Portfolio, Not Just Links */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  Full Portfolio, Not Just Links
                </h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Linktree is a single page of links. Mediaweb is a complete portfolio
                website — with everything a creator needs to land brand deals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "AI portfolio builder",
                  "Verified mediakit",
                  "Link-in-bio page",
                  "Custom domain + free hosting",
                  "Theme studio",
                  "One-click publish",
                  "Social feed integration",
                  "Multiple pages",
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
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                  Similar Price, Way More Value
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-green-400 font-semibold">Linktree Pro</span>{" "}
                  costs $5/mo for a link page.{" "}
                  <span className="text-green-400 font-semibold">Linktree Premium</span>{" "}
                  is $19/mo and adds analytics and more customization — but it&apos;s
                  still just a link page.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb</span> is
                  $20/mo (Early Bird) and gives you a full AI-built portfolio +
                  verified mediakit + branded link-in-bio + custom domain + free
                  hosting. Way more for roughly the same price as Linktree Premium.
                </p>
                <p className="text-lg">
                  Plus a 14-day free trial — no charge until you&apos;re sure.
                </p>
              </div>
            </section>
          </div>

          <OtherComparisons exclude="linktree" />

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your link-in-bio deserves a real portfolio behind it
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Linktree is a list of links. Mediaweb is the portfolio that makes
              brands reply. Start building — free for 14 days.
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
