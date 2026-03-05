import { Card } from "@mediaweb1/sdk/shadcn";
import { Globe, Rocket, Brush, Bot, BarChart3, HardDrive } from "lucide-react";

const FeatureRundown = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Agent",
      description:
        "Describe your style, drop in your content, and let AI build your portfolio. No design or technical skills needed",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: BarChart3,
      title: "Mediakit",
      description:
        "Impress brands with verified stats from Instagram, TikTok, YouTube & Facebook.",
      gradient: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description:
        "Look professional with your own domain or start free with a .mediaweb.app link.",
      gradient: "from-tertiary-500 to-tertiary-600",
    },
    {
      icon: HardDrive,
      title: "Free Hosting",
      description:
        "Hosting is included with every plan. Just click publish and your site is live—no servers or setup required.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Rocket,
      title: "One-Click Publish",
      description:
        "Hit publish and you're live. No servers, no settings, no headaches.",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Brush,
      title: "Theme Studio",
      description:
        "Match your Instagram aesthetic in one click. Colors, fonts, the whole vibe.",
      gradient: "from-yellow-300 to-yellow-400",
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
            All features included natively. No plugins to manage, no hidden
            costs, no complexity.
          </p>
          {/*      <a
            href="#"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            Compare us
            <ExternalLink className="ml-1 w-4 h-4" />
          </a> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${index >= 4 ? "hidden md:block" : ""}`}
            >
              <Card className="w-full h-auto md:h-[280px] flex flex-row md:flex-col items-start md:justify-between group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs p-5 md:p-8 gap-4 md:gap-0 hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl">
                {/* Icon */}
                <div
                  className={`w-12 min-w-12 h-12 md:w-16 md:min-h-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl md:rounded-2xl flex items-center justify-center md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-6 w-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-1 md:contents">
                  <h3 className="text-base md:text-xl text-start font-semibold text-white mb-1 md:mb-3 group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-white transition-colors text-start">
                    {feature.description}
                  </p>
                </div>

                {/* Gradient accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureRundown;
