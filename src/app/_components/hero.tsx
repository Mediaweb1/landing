import { Zap, Rocket, Gift, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@mediaweb1/sdk/shadcn";

const Hero = () => {
  return (
    <section className="relative px-6 pt-20 lg:pt-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold mb-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 border-orange-500/30 backdrop-blur-xs">
          <Gift className="w-4 h-4 mr-2" />
          Early Bird Special: 80% Off Until Dec 31
        </div>
        
        {/* Main Heading */}
        <div className="text-4xl lg:text-6xl font-bold flex flex-col items-center mb-4">
          <h1 className="text-white leading-tight">Portfolio Websites</h1>
          <span className="bg-gradient-to-r from-primary-600 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
            Simplified.
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Create stunning portfolios in minutes with our AI assistant—or take
          full control yourself. Built for UGC creators, content creators, artists, and influencers.
        </p>

        {/* Social Proof */}
        <p className="text-base text-gray-400 mb-12">
          Join dozens of other early birds who've already launched their portfolios
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link
            href="https://dashboard.mediaweb.app/register"
            className="rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25 border-0 h-auto"
          >
            Get Started Now
          </Link>

          <Link
            href="https://editor.mediaweb.app/sandbox"
            className="border-gray-600 text-white hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-xs bg-transparent border rounded-md"
          >
            Try the sandbox
          </Link>
        </div>

        {/* Discount Details */}
        <div className="mb-16">
          <p className="text-orange-400 font-semibold text-base mb-1">
            🔥 $10/mo instead of $50/mo — Lock in forever before Dec 31
          </p>
          <p className="text-gray-500 text-sm">
            Limited early bird spots available
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>Dozens of early birds already building</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-orange-400" />
            <span>Offer ends December 31, 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-primary-400" />
            <span>Lock in $10/mo pricing forever</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
