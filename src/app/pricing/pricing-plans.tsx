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
import { Check, Zap, Rocket } from "lucide-react";
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
            Early Bird Pricing
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

        {/* AI Credits Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="secondary"
              className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30 mb-4"
            >
              <Zap className="w-3 h-3 mr-1" />
              AI Credits
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              3,000 AI Credits Included Monthly
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Every plan comes with 3,000 AI credits per month — enough to build multiple pages and sections. We offer different AI models that consume credits at different rates, so you can choose between speed, quality, and cost.
            </p>
            <p className="text-sm text-gray-400">
              Any usage beyond your monthly credits is automatically billed at affordable rates. You can track your credit usage in real-time from your dashboard.
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
        "relative overflow-hidden w-96",
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

          {/* Discount Badge */}
          <div className="flex items-center justify-center">
            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 font-semibold px-2 py-1">
              60% OFF Forever
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
