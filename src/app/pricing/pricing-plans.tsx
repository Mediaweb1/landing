"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@mediaweb1/sdk/shadcn";
import { Check, Star, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LANDING_PAGE_PLANS } from "@mediaweb1/sdk/constants";

const Pricing = () => {
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="w-full relative px-6 py-20 md:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-6"
          >
            <Rocket className="w-3 h-3 mr-1" />
            Beta Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Special{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Early Adopter
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get started with our exclusive beta pricing. Lock in this rate
            forever as an early adopter.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center mb-16">
          {LANDING_PAGE_PLANS.map((plan) => (
            <PlanCard
              key={plan.type}
              plan={plan}
              interval={interval}
              isPopular={plan.popular}
              className="max-w-md"
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4">All plans include:</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>Custom domain support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>SSL certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>Analytics dashboard</span>
            </div>
          </div>
        </div>

        {/* AI Usage Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30 mb-4"
            >
              <Zap className="w-3 h-3 mr-1" />
              AI Pricing
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pay Only for AI You Use
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-2">
              Build an entire website for under $5 in AI costs
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              AI features are billed separately based on actual usage. Choose your model, track costs in real-time, and only pay for what you use.
            </p>
          </div>

          {/* Main Info Card */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xs mb-8 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: How It Works */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    How It Works
                  </h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>Use AI features as needed throughout your project</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>Costs automatically added to your monthly bill</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>Track usage in real-time from your dashboard</span>
                    </p>
                  </div>
                </div>

                {/* Right: Typical Costs */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary-400" />
                    Typical Costs
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-gray-300">Full website</span>
                      <span className="text-white font-semibold">Under $5</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-gray-300">Single page</span>
                      <span className="text-gray-200">$0.30 - $0.50</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-gray-300">Section generation</span>
                      <span className="text-gray-200">$0.10 - $0.20</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Content rewrite</span>
                      <span className="text-gray-200">$0.05 - $0.10</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Models Section */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">
              Choose Your AI Model
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {/* GPT-5-nano */}
              <Card className="bg-slate-800/30 border-slate-700/50 hover:border-green-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                      Most Affordable
                    </Badge>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2 text-center">GPT-5-nano</h5>
                  <p className="text-sm text-gray-400 text-center mb-4">
                    Ultra-fast & affordable for most tasks
                  </p>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Best for: Quick edits, simple content</span>
                  </div>
                </CardContent>
              </Card>

              {/* GPT-5-mini */}
              <Card className="bg-slate-800/30 border-primary-500/50 hover:border-primary-500 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge className="bg-primary-500/10 text-primary-400 border-primary-500/20">
                      Recommended
                    </Badge>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2 text-center">GPT-5-mini</h5>
                  <p className="text-sm text-gray-400 text-center mb-4">
                    Balanced performance & cost
                  </p>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Best for: Full pages, detailed content</span>
                  </div>
                </CardContent>
              </Card>

              {/* GPT-5.1 */}
              <Card className="bg-slate-800/30 border-slate-700/50 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      Most Advanced
                    </Badge>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2 text-center">GPT-5.1</h5>
                  <p className="text-sm text-gray-400 text-center mb-4">
                    Maximum quality for complex projects
                  </p>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Best for: Complex layouts, premium sites</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">
              Switch between models anytime—you're in control of cost vs. quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({
  plan,
  interval,
  isPopular,
  className,
}: {
  plan: any;
  interval: "monthly" | "yearly";
  isPopular: boolean;
  className?: string;
}) => {
  const price = interval === "monthly" ? plan.price_monthly : plan.price_yearly;

  return (
    <Card
      className={cn(
        "relative overflow-hidden",
        isPopular
          ? "bg-gradient-to-br from-primary-900/50 to-secondary-900/50 border-primary-500/50 md:scale-105"
          : "bg-slate-800/50 border-slate-700/50",
        "backdrop-blur-xs transition-all duration-300 hover:scale-105",
        className
      )}
    >
      {/* Background Glow */}
      {isPopular && (
        <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg -z-10"></div>
      )}

      <CardHeader className="text-center space-y-4 pt-8">
        <CardTitle
          className={cn(
            "text-2xl font-bold",
            isPopular ? "text-white" : "text-gray-100"
          )}
        >
          {plan.type}
        </CardTitle>

        <div className="space-y-3">
          {/* Price Display */}
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-2xl text-gray-400 line-through">
              $50
            </span>
            <span
              className={cn(
                "text-5xl font-bold",
                isPopular ? "text-white" : "text-gray-100"
              )}
            >
              {price}
            </span>
            <span
              className={cn(
                "text-sm",
                isPopular ? "text-gray-200" : "text-gray-400"
              )}
            >
              / month
            </span>
          </div>

          {/* AI Token Costs Notice */}
          <div className="text-center text-xs text-gray-400">
            + AI token costs (pay-as-you-go)
          </div>

          {/* Discount Badge */}
          <div className="flex items-center justify-center">
            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 font-semibold">
              80% OFF Forever
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Separator
          className={cn(isPopular ? "bg-primary-500/30" : "bg-slate-600/50")}
        />

        <div className="space-y-3">
          {plan.features.map((feature: any, featureIndex: number) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <Check
                className={cn(
                  "w-4 h-4 shrink-0",
                  isPopular ? "text-primary-400" : "text-green-400"
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  isPopular ? "text-gray-200" : "text-gray-300"
                )}
              >
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        <Link href="https://dashboard.mediaweb.app/register">
          <Button
            className={cn(
              "w-full",
              isPopular
                ? "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white"
                : "bg-slate-700 hover:bg-slate-600 text-white border-slate-600"
            )}
          >
            <Zap className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Pricing;
