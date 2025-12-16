"use client";

import {
  Check,
  Sparkles,
  Users,
  Palette,
  Zap,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function LovableComparison() {
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
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Lovable
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Lovable is excellent for building software products. But if you're
              a creator who needs a portfolio and mediakit—not a SaaS
              app—Mediaweb is built specifically for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://dashboard.mediaweb.app/register"
                className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
              >
                Get started
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
            {/* Different Audiences */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Built for Different Audiences
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">
                    Lovable
                  </span>{" "}
                  is designed for developers and startups building software
                  products. It's a powerful tool if you're creating a SaaS
                  application, web app, or need to export code for further
                  development.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">
                    Mediaweb
                  </span>
                  , on the other hand, is built specifically for creators,
                  influencers, and artists. We focus on portfolios, mediakits,
                  and showcasing your work—not building complex software
                  applications.
                </p>
                <p className="text-lg">
                  If you're a photographer, designer, content creator, or
                  influencer looking to attract brands and showcase your work,
                  Mediaweb speaks your language. No coding knowledge required.
                </p>
              </div>
            </section>

            {/* Creator Features */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Creator-Specific Features
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  This is where Mediaweb really shines. We've built features
                  that creators actually need:
                </p>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Automated MediaKit
                      </h3>
                      <p className="text-gray-300">
                        Connect your Instagram, Facebook, YouTube, and TikTok
                        accounts. We automatically pull your stats,
                        demographics, and engagement metrics into a professional
                        mediakit that updates in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Image Optimization
                      </h3>
                      <p className="text-gray-300">
                        Portfolio websites have tons of images. We automatically
                        compress every photo by up to 96% without losing
                        quality. Your portfolio loads instantly, even with
                        hundreds of high-res images.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        40+ Creator Templates
                      </h3>
                      <p className="text-gray-300">
                        Templates designed specifically for photographers,
                        designers, models, musicians, and content creators. Not
                        generic web app templates—actual portfolio layouts.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                  <span className="text-orange-400 font-semibold">
                    Lovable doesn't have any of these features.
                  </span>{" "}
                  It's not built for creators—it's built for developers.
                </p>
              </div>
            </section>

            {/* AI Approach */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Different AI, Different Goals
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Both platforms use AI, but for completely different purposes.
                </p>
                <p className="text-lg">
                  <span className="text-orange-400 font-semibold">
                    Lovable's AI
                  </span>{" "}
                  helps you build web applications. You chat with it to create
                  forms, databases, authentication systems, and complex app
                  logic. It's optimized for software development.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">
                    Mediaweb's AI
                  </span>{" "}
                  helps you build beautiful portfolios. Tell it "create a
                  photography portfolio with a dark theme" or "add a contact
                  section with my social links" and it builds exactly what you
                  need. It understands creator language, not developer jargon.
                </p>
              </div>
            </section>

            {/* Design & Customization */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Design Made Simple
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Lovable gives you code-level control, which is great if you're
                  a developer. But if you're a creator who just wants their
                  portfolio to look amazing? That's where Mediaweb excels.
                </p>
                <p className="text-lg">
                  We have a{" "}
                  <span className="text-primary-400 font-semibold">
                    visual builder
                  </span>{" "}
                  where you can tweak everything yourself—no code required.
                  Drag, drop, and customize to your heart's content. Plus, our{" "}
                  <span className="text-primary-400 font-semibold">
                    Theme Studio
                  </span>{" "}
                  lets you change your entire website's look with one click.
                  Choose from professional color schemes, fonts, and layouts.
                </p>
                <p className="text-lg">
                  Every template is designed to showcase visual work
                  beautifully. Large images, clean layouts, and mobile-perfect
                  designs that make your work shine.
                </p>
              </div>
            </section>

            {/* Code vs No-Code */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Everything Just Works
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  With Lovable, you export your code and then you're on your
                  own. You need to set up hosting, configure services, manage
                  deployments, handle SSL certificates, set up CDNs, optimize
                  images manually—it's a lot of work.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">
                    Mediaweb handles all of this automatically.
                  </span>{" "}
                  The moment you create your portfolio, it's live. Hosting?
                  Done. Image optimization? Automatic. CDN? Built-in. SSL?
                  Included. Backups? We've got you covered.
                </p>
                <p className="text-lg">
                  You don't need to be technical. You don't need to configure
                  anything. You just create your portfolio and share it with the
                  world. That's the ease of use creators need.
                </p>
              </div>
            </section>

            {/* Future Vision */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Different Roadmaps, Different Futures
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Lovable is an excellent product—they're pushing the boundaries
                  of AI-powered software development. Their focus is on seamless
                  database integration, server logic, and helping developers
                  build complex applications faster.
                </p>
                <p className="text-lg">
                  <span className="text-primary-400 font-semibold">
                    Mediaweb's roadmap is entirely different.
                  </span>{" "}
                  We're laser-focused on creators. We're constantly improving
                  features and integrations that matter to you—more social
                  platforms, better analytics, enhanced mediakit capabilities,
                  and tools that help you grow your brand and attract
                  partnerships.
                </p>
                <p className="text-lg">
                  While Lovable builds for developers, we're building an entire
                  ecosystem for creators. Think scheduling tools, collaboration
                  features, brand discovery, and integrations with the platforms
                  you actually use every day.
                </p>
                <p className="text-lg">
                  Choosing Mediaweb means choosing a platform that evolves with
                  your needs as a creator—not a developer tool that happens to
                  let you build websites.
                </p>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs p-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">
                  Better Value for Creators
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Lovable starts at{" "}
                  <span className="text-orange-400 font-semibold">
                    $20/month
                  </span>{" "}
                  for their paid plan.
                </p>
                <p className="text-lg">
                  Mediaweb is{" "}
                  <span className="text-primary-400 font-semibold">
                    $10/month
                  </span>{" "}
                  with our early bird discount (normally $50/month). And you get
                  way more creator-specific features: MediaKit, social
                  integrations, image optimization, and 40+ templates.
                </p>
                <p className="text-lg">
                  Plus, we offer a 30-day money-back guarantee. Try it
                  risk-free.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose the Right Tool for Your Goals
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lovable is amazing for building software. But if you're a creator
              who needs a stunning portfolio, automated mediakit, and social
              integrations—Mediaweb is your platform.
            </p>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              Start Your Creator Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
