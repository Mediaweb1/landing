import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, TrendingUp, Users, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

const INTEGRATIONS = [
  {
    id: "facebook",
    heading: "Facebook",
    imageUrl: "/icons/original-logos/facebook.webp",
    tagline: "Turn Your Facebook Presence Into Brand Deals",
    description:
      "Connect your Facebook account and automatically showcase your reach, engagement, and audience insights in your MediaKit. No manual updates—just real-time data that helps you land partnerships.",
    available: true,
    benefits: [
      "Automatic follower count and growth tracking",
      "Real-time engagement metrics (likes, comments, shares)",
      "Audience location and interests",
      "Post performance analytics",
      "Professional MediaKit presentation",
    ],
    limitations: {
      title: "What's Not Available",
      description: "Due to Facebook's API restrictions, age and gender demographics are no longer available. However, you can manually add this information to your MediaKit—and since demographics rarely change, you won't need to update it often.",
    },
    howItWorks: [
      "Connect your Facebook account in one click",
      "We securely pull your public analytics",
      "Your MediaKit updates automatically",
      "Share with brands instantly",
    ],
    useCases: [
      {
        title: "Brand Pitches",
        description: "Show brands your exact reach and engagement rates with up-to-date data.",
      },
      {
        title: "Partnership Negotiations",
        description: "Back up your rates with real metrics that prove your value.",
      },
      {
        title: "Portfolio Building",
        description: "Display your Facebook success alongside your other social platforms.",
      },
    ],
  },
  {
    id: "instagram",
    heading: "Instagram",
    imageUrl: "/icons/original-logos/instagram.webp",
    tagline: "Showcase Your Instagram Influence Automatically",
    description:
      "Connect Instagram and let your MediaKit do the talking. Follower count, engagement rates, audience demographics—all updated in real-time so you can focus on creating content, not updating spreadsheets.",
    available: true,
    benefits: [
      "Automatic follower growth tracking",
      "Engagement rate calculations",
      "Audience demographics and insights",
      "Story and post performance metrics",
      "Reel analytics and reach data",
    ],
    howItWorks: [
      "Link your Instagram account securely",
      "We fetch your analytics automatically",
      "Your MediaKit stays current 24/7",
      "Send to brands with confidence",
    ],
    useCases: [
      {
        title: "Influencer Campaigns",
        description: "Prove your worth with real engagement data, not just follower counts.",
      },
      {
        title: "Sponsored Content",
        description: "Show brands exactly who your audience is and why they should work with you.",
      },
      {
        title: "Growth Tracking",
        description: "Monitor your progress and showcase your momentum to potential partners.",
      },
    ],
  },
  {
    id: "tiktok",
    heading: "TikTok",
    imageUrl: "/icons/original-logos/tiktok.webp",
    tagline: "Let Your TikTok Stats Speak for Themselves",
    description:
      "TikTok moves fast—your MediaKit should too. Connect your account and automatically display your video views, engagement rates, and audience insights. Perfect for creators who want to land brand deals without the admin work.",
    available: true,
    benefits: [
      "Real-time follower and view counts",
      "Video performance analytics",
      "Engagement metrics (likes, comments, shares)",
      "Audience location and interests",
      "Trending content insights",
    ],
    limitations: {
      title: "What's Not Available",
      description: "TikTok's API doesn't provide detailed demographic data like age and gender. But don't worry—you can manually add this information to your MediaKit. Since demographics don't change frequently, you'll rarely need to update it.",
    },
    howItWorks: [
      "Connect your TikTok account",
      "We pull your latest analytics",
      "Your MediaKit updates automatically",
      "Share with brands instantly",
    ],
    useCases: [
      {
        title: "Brand Collaborations",
        description: "Show brands your viral potential with real video performance data.",
      },
      {
        title: "Creator Partnerships",
        description: "Prove your engagement rates and audience quality with live metrics.",
      },
      {
        title: "Campaign Reporting",
        description: "Track and showcase the success of your sponsored content.",
      },
    ],
  },
  {
    id: "youtube",
    heading: "YouTube",
    imageUrl: "/icons/original-logos/youtube.webp",
    tagline: "Turn Your YouTube Channel Into a Brand Magnet",
    description:
      "Connect YouTube and automatically showcase your subscriber count, watch time, and audience demographics. Perfect for creators who want to attract sponsorships without manually updating their stats.",
    available: true,
    benefits: [
      "Subscriber count and growth tracking",
      "Watch time and view analytics",
      "Audience demographics and retention",
      "Video performance metrics",
      "Channel engagement insights",
    ],
    howItWorks: [
      "Link your YouTube channel",
      "We fetch your analytics securely",
      "Your MediaKit updates in real-time",
      "Send to sponsors with confidence",
    ],
    useCases: [
      {
        title: "Sponsorship Deals",
        description: "Show brands your exact reach and watch time to justify your rates.",
      },
      {
        title: "Media Kit Presentations",
        description: "Display professional analytics that make you look established and credible.",
      },
      {
        title: "Growth Showcase",
        description: "Highlight your channel's momentum to attract long-term partnerships.",
      },
    ],
  },
  /* {
    id: "snapchat",
    heading: "Snapchat",
    imageUrl: "/icons/original-logos/snapchat.webp",
    tagline: "Snapchat Integration Coming Soon",
    description:
      "We're working on bringing Snapchat analytics to your MediaKit. Soon you'll be able to automatically showcase your Snap views, Story engagement, and audience insights—all in real-time.",
    available: false,
    benefits: [
      "Automatic Snap and Story view tracking",
      "Engagement metrics and insights",
      "Audience demographics",
      "Real-time MediaKit updates",
      "Professional presentation for brands",
    ],
    howItWorks: [
      "Connect your Snapchat account (coming soon)",
      "We'll pull your analytics automatically",
      "Your MediaKit will update in real-time",
      "Share with brands instantly",
    ],
    useCases: [
      {
        title: "Brand Partnerships",
        description: "Show brands your Snapchat reach and engagement with live data.",
      },
      {
        title: "Influencer Campaigns",
        description: "Prove your value with real metrics, not estimates.",
      },
      {
        title: "Multi-Platform Presence",
        description: "Display all your social stats in one professional MediaKit.",
      },
    ],
  },
  {
    id: "x",
    heading: "X (formerly Twitter)",
    imageUrl: "/icons/original-logos/x.webp",
    tagline: "X Integration Coming Soon",
    description:
      "We're building X (Twitter) integration to automatically pull your follower count, engagement rates, and audience demographics into your MediaKit. Stay tuned!",
    available: false,
    benefits: [
      "Automatic follower and engagement tracking",
      "Tweet performance analytics",
      "Audience demographics and insights",
      "Real-time MediaKit updates",
      "Professional brand presentation",
    ],
    howItWorks: [
      "Connect your X account (coming soon)",
      "We'll fetch your analytics securely",
      "Your MediaKit will stay current automatically",
      "Share with brands confidently",
    ],
    useCases: [
      {
        title: "Thought Leadership",
        description: "Showcase your influence and engagement in your niche.",
      },
      {
        title: "Brand Collaborations",
        description: "Prove your reach with real follower and engagement data.",
      },
      {
        title: "Media Opportunities",
        description: "Display your social proof to attract media features and partnerships.",
      },
    ],
  }, */
];

export async function generateMetadata({ params }: { params: Promise<{ integrationId: string }> }): Promise<Metadata> {
  const { integrationId } = await params;
  const integration = INTEGRATIONS.find((i) => i.id === integrationId);
  
  if (!integration) {
    return {
      title: "Integration Not Found - Mediaweb",
    };
  }

  return {
    title: `${integration.heading} Integration - Mediaweb`,
    description: integration.description,
    alternates: {
      canonical: `/integrations/${integrationId}`,
    },
  };
}

const Integration = async ({ params }: { params: Promise<{ integrationId: string }> }) => {
  const { integrationId } = await params;
  const data = INTEGRATIONS.find((integration) => integration.id === integrationId);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Integration Not Found</h1>
            <p className="text-gray-400 mb-8">The requested integration does not exist.</p>
            <Link
              href="/"
              className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image
                src={data.imageUrl}
                width={80}
                height={80}
                className="aspect-square"
                alt={data.heading}
              />
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                {data.heading}
              </h1>
            </div>
            
            {!data.available && (
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-300 font-semibold">Coming Soon</span>
              </div>
            )}
            
            <h2 className="text-2xl lg:text-3xl text-primary-400 font-semibold mb-4">
              {data.tagline}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>

            {data.available && (
              <div className="mt-8">
                <Link
                  href="https://dashboard.mediaweb.app/register"
                  className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
                >
                  Get Started Now
                </Link>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-primary-400" />
              <h3 className="text-3xl font-bold text-white">What You Get</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-xs"
                >
                  <Check className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary-400" />
              <h3 className="text-3xl font-bold text-white">How It Works</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-xs text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Limitations Section (if applicable) */}
          {data.limitations && (
            <section className="mb-16">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 backdrop-blur-xs">
                <h3 className="text-2xl font-bold text-blue-300 mb-3">{data.limitations.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{data.limitations.description}</p>
              </div>
            </section>
          )}

          {/* Use Cases */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-primary-400" />
              <h3 className="text-3xl font-bold text-white">Perfect For</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {data.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-xs"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">{useCase.title}</h4>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {data.available ? "Ready to Automate Your MediaKit?" : "Want Early Access?"}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {data.available
                ? `Connect your ${data.heading} account and start showcasing your influence automatically.`
                : `We'll notify you as soon as ${data.heading} integration is available.`}
            </p>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              {data.available ? "Get Started Now" : "Join Waitlist"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
