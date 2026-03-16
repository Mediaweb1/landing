import { Gift, Check } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative px-6 pt-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold mb-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 border-orange-500/30 backdrop-blur-xs">
          <Gift className="w-4 h-4 mr-2" />
          Early Bird Special: 60% Off Until April 1
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold flex flex-col items-center mb-4">
          <span className="text-white leading-tight">Portfolio Websites</span>
          <span className="bg-gradient-to-r from-primary-600 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
          Your portfolio, mediakit, and social feed all in one place, built by AI. Perfect for UGC Creators, Content
          Creators, Freelancers and anyone who needs a portfolio website.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link
            href="https://dashboard.mediaweb.app/register"
            className="py-2 md:py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 text-lg font-semibold shadow-xl shadow-primary-500/25 border-0 h-auto"
          >
            Get Started Now
          </Link>
        </div>

        {/* Discount Details */}
        <div className="mb-16 hidden lg:block">
          <p className="text-orange-400 font-semibold text-base mb-1">
            🔥 <span className="line-through">$50/mo</span> → $20/mo — Early
            Bird Discount. Expires April 1
          </p>
          <p className="text-gray-500 text-sm">
            Limited early bird spots available
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>Dozens of early birds already building</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-orange-400" />
            <span>Offer ends April 1, 2026</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-primary-400" />
            <span>Lock in $20/mo Early Bird pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
