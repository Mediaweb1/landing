import { Check, Sparkles, Users, Globe, Palette, Zap, Rocket } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediaweb vs MediaKits.io – Portfolio Website + Media Kit",
  description: "Compare Mediaweb and MediaKits.io for media kits, portfolio websites, automation, and customization. Mediaweb gives you both in one platform.",
  alternates: {
    canonical: "/compare/mediakits-io",
  },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb vs MediaKits.io – Portfolio Website + Media Kit",
    description: "Compare Mediaweb and MediaKits.io for media kits, portfolio websites, automation, and customization. Mediaweb gives you both in one platform.",
    url: "https://mediaweb.app/compare/mediakits-io",
    images: [
      {
        url: "https://mediaweb.app/og/compare-mediakits-io.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb – AI portfolio + media kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb vs MediaKits.io – Portfolio Website + Media Kit",
    description: "Compare Mediaweb and MediaKits.io for media kits, portfolio websites, automation, and customization. Mediaweb gives you both in one platform.",
    images: ["https://mediaweb.app/og/compare-mediakits-io.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
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
              "name": "Compare",
              "item": "https://mediaweb.app/compare"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Mediaweb vs MediaKits.io",
              "item": "https://mediaweb.app/compare/mediakits-io"
            }
          ]
        },
        {
          "@type": "Article",
          "headline": "Mediaweb vs MediaKits.io – Portfolio Website + Media Kit",
          "description": "Compare Mediaweb and MediaKits.io for media kits, portfolio websites, automation, and customization. Mediaweb gives you both in one platform.",
          "author": {
            "@type": "Organization",
            "name": "Mediaweb"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mediaweb"
          },
          "datePublished": "2025-01-05",
          "dateModified": "2025-01-05"
        }
      ]
    }),
  },
};

export default function MediakitsIOComparison() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
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
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                MediaKits.io
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              MediaKits.io is great for mediakits. But what if you need a complete portfolio website too? 
              That's where Mediaweb shines—you get everything in one platform.
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
            {/* Different Purposes */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">MediaKit vs Complete Portfolio</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-pink-400 font-semibold">MediaKits.io</span> does one thing really well—creating professional mediakits. 
                  If all you need is a mediakit to pitch to brands, they're a solid choice.
                </p>
                <p className="text-lg">
                  But here's the thing: most creators need more than just a mediakit. You need a place to showcase your portfolio, 
                  display your work, tell your story, and give visitors a complete picture of who you are and what you do.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">Mediaweb gives you both.</span> A professional mediakit AND a complete portfolio website. 
                  You're not choosing between the two—you get everything in one platform.
                </p>
              </div>
            </section>

            {/* MediaKit Features */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">We Match Their MediaKit Features</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Everything MediaKits.io offers for mediakits, we offer too:
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Automated Social Stats</h3>
                      <p className="text-gray-300">
                        Connect Instagram, Facebook, YouTube, and TikTok. We automatically pull your stats, demographics, and engagement metrics. 
                        Stats sync automatically, just like MediaKits.io. (We even support Facebook, which they don't.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Professional Presentation</h3>
                      <p className="text-gray-300">
                        Clean, professional mediakit layouts that make you look good to brands. Rate cards, past projects, analytics—everything you need to pitch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">AI-Powered Insights</h3>
                      <p className="text-gray-300">
                        Deep analytics and creator insights to help you understand your audience and grow your brand.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                  So you're not sacrificing mediakit quality by choosing Mediaweb. You get the same professional mediakit features—plus everything else.
                </p>
              </div>
            </section>

            {/* What You Get Extra */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">But We Give You So Much More</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  This is where Mediaweb really stands out. Beyond the mediakit, you get:
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Full Portfolio Website</h3>
                      <p className="text-gray-300">
                        Showcase your work with beautiful galleries, project pages, about sections, contact forms—everything a complete portfolio needs. 
                        MediaKits.io doesn't offer this at all.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">AI Portfolio Builder</h3>
                      <p className="text-gray-300">
                        Tell our AI who you are. It builds your portfolio, mediakit and link-in-bio page in minutes — no design skills, no templates to pick from.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Link-in-bio, built in</h3>
                      <p className="text-gray-300">
                        A branded link-in-bio page lives on your own site — styled to match your portfolio, not a third-party tool with their logo on it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Custom Domain</h3>
                      <p className="text-gray-300">
                        Use your own domain (yourname.com) instead of being stuck with a subdomain. MediaKits.io only offers subdomains.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Automatic Image Optimization</h3>
                      <p className="text-gray-300">
                        Portfolio websites have tons of images. We compress every photo by up to 96% without losing quality. Your site loads instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Design & Customization */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">More Design Control</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  MediaKits.io has limited customization—you're mostly working within their mediakit templates.
                </p>
                <p className="text-lg">
                  Mediaweb gives you a <span className="text-primary-400 font-semibold">visual builder</span> where you can customize everything. 
                  Plus, our <span className="text-primary-400 font-semibold">Theme Studio</span> lets you change your entire website's look with one click. 
                  Professional color schemes, fonts, and layouts—all without code.
                </p>
                <p className="text-lg">
                  You have the freedom to make your portfolio truly yours, not just another template.
                </p>
              </div>
            </section>

            {/* Future Vision */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Growing Beyond MediaKits</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  MediaKits.io is a great product focused on one thing: mediakits. They do it well, and if that's all you need, they're a solid option.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">But Mediaweb is building something bigger.</span> We're creating a complete platform for creators. 
                  Our roadmap includes more social integrations, enhanced analytics, collaboration tools, and features that help you grow your entire creator business—not just your mediakit.
                </p>
                <p className="text-lg">
                  We're thinking about your whole online presence: portfolio, mediakit, blog, shop, booking system. Everything a modern creator needs in one place.
                </p>
                <p className="text-lg">
                  Choosing Mediaweb means choosing a platform that grows with you as your creator career evolves.
                </p>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Similar Price, Way More Value</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  MediaKits.io starts at <span className="text-pink-400 font-semibold">$9/month</span> for just a mediakit.
                </p>
                <p className="text-lg">
                  Mediaweb is <span className="line-through">$50/month</span> <span className="text-primary-400 font-semibold">$20/month</span> — Early Bird Discount (expires May 1).
                  For a similar price, you get a mediakit PLUS a full portfolio website, AI builder, custom themes, custom domain, and image optimization.
                </p>
                <p className="text-lg">
                  Plus, we offer a 30-day money-back guarantee. Try it risk-free.
                </p>
                <p className="text-lg">
                  Why pay for just a mediakit when you can have everything for the same price?
                </p>
              </div>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get More Than Just a MediaKit
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              MediaKits.io is great at what they do. But if you want a complete online presence—portfolio, mediakit, and room to grow—Mediaweb is your platform.
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
