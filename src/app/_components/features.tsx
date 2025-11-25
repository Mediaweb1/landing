import { Card } from "@mediaweb1/sdk/shadcn";
import {
  Globe,
  Palette,
  Brush,
  Bot,
  BarChart3,
  HardDrive,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const FeatureRundown = () => {
  const features = [
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Launch on your own domain or use our free .mediaweb.app subdomain.",
      gradient: "from-blue-500 to-blue-600",
      jumpTo: "custom-domains",
    },
    {
      icon: Palette,
      title: "Designer Templates",
      description:
        "40+ pixel-perfect layouts for creators, quickly switchable.",
      gradient: "from-purple-500 to-purple-600",
      jumpTo: "designer-templates",
    },
    {
      icon: Brush,
      title: "Theme Studio",
      description:
        "One-click palettes & typography presets, fully brand-ready.",
      gradient: "from-pink-500 to-pink-600",
      jumpTo: "theme-studio",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Describe your vision; we assemble pages in seconds.",
      gradient: "from-primary-500 to-primary-600",
      jumpTo: "ease-of-use",
    },
    {
      icon: BarChart3,
      title: "Mediakit Built-in",
      description:
        "Monetize faster with auto-generated stats & brand deals deck.",
      gradient: "from-secondary-500 to-secondary-600",
      jumpTo: "mediakit",
    },
    {
      icon: HardDrive,
      title: "AWS S3 Storage",
      description: "Secure, scalable file hosting with global CDN speed.",
      gradient: "from-green-500 to-green-600",
      jumpTo: "aws-storage",
    },
  ];

  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              built-in
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            All features included natively. No plugins to manage, no hidden costs, no complexity.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            Compare us
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {features.map((feature, index) => (
            <a
              href={`#${feature.jumpTo}`}
              key={index}
              className="h-auto p-0 bg-transparent hover:bg-transparent"
            >
              <Card className="w-full h-[240px] md:h-[280px] flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs p-4 md:p-8 hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl cursor-pointer">
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Icon */}
                <div
                  className={`w-10 min-h-10 h-10 md:w-16 md:min-h-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-lg md:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-6 w-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
                </div>
                <h3 className="text-sm md:text-xl text-start font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors text-wrap text-start">
                  {feature.description}
                </p>

                <div className="mt-auto flex items-start">
                  <p className="text-start inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium bg-transparent border-0 p-0 h-auto hover:bg-transparent">
                    learn more
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureRundown;
