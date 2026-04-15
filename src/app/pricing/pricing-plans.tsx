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
import {
  Check,
  Zap,
  Rocket,
  Globe,
  Server,
  BarChart3,
  Bot,
  Brush,
  Sparkles,
  PiggyBank,
  Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LANDING_PAGE_PLANS } from "@mediaweb1/sdk/constants";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";

// TODO: confirm "retail" comparison figures — these are ballpark estimates of
// what creators typically pay stitching these tools together (Namecheap, Squarespace,
// Shorby/Beacons, etc.). Adjust to real numbers or remove per-item prices before shipping.
const INCLUDED = [
  { icon: Bot, label: "AI portfolio agent", retail: 20 },
  { icon: BarChart3, label: "Verified mediakit tool", retail: 25 },
  { icon: Link2, label: "Link-in-bio page", retail: 10 },
  { icon: Server, label: "Unlimited hosting", retail: 10 },
];

const RETAIL_TOTAL = INCLUDED.reduce((sum, item) => sum + item.retail, 0);

// TODO: replace with real FAQs you've seen from users — these are reasonable defaults
const PRICING_FAQS = [
  {
    q: "What happens after the 14-day free trial?",
    a: "Your trial converts to a paid Early Bird plan at $20/mo. You won't be charged until the trial ends, and you can cancel anytime before then with one click — no questions asked.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard in a single click. If you cancel during the trial you're charged nothing. If you cancel after, you keep access until the end of your billing period.",
  },
  {
    q: "Do I need a credit card to start the free trial?",
    a: "Yes — we ask for a card upfront to keep bots out and protect real creators from abuse. You won't be charged a cent during your 14-day trial, and if you cancel before it ends you pay nothing.",
  },
  {
    q: "Is the Early Bird price really locked in forever?",
    a: "Yes. Whatever Early Bird price you sign up at is the price you keep — no yearly increases, no hidden resets. It's only available to creators who sign up before May 1.",
  },
  {
    q: "How do AI credits work?",
    a: "Every plan comes with 3,000 AI credits per month — enough to build multiple pages and sections. We offer different AI models that consume credits at different rates, so you can choose between speed, quality, and cost. Any usage beyond your monthly credits is automatically billed at affordable rates, and you can track your usage in real-time from your dashboard.",
  },
];

const Pricing = () => {
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");
  const sectionRef = useScrollReveal();

  return (
    <section id="pricing" className="w-full relative px-6 py-20 md:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        ref={sectionRef}
        className="scroll-reveal relative z-10 max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-6 py-1 px-2"
          >
            <Rocket className="w-3 h-3 mr-1" />
            Early Bird Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Special{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Early Bird
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start with a 14-day free trial. Lock in early bird pricing for life
            — the price you see today is the price you keep.
          </p>
        </div>

        {/* Value stack + Plan card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">
          {/* Left: value stack */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-300 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Everything included
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
              One plan replaces a whole stack of tools
            </h3>
            <ul className="space-y-3 mb-8">
              {INCLUDED.map(({ icon: Icon, label, retail }) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary-300" />
                    </div>
                    <span className="text-gray-200 font-medium truncate">
                      {label}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 line-through shrink-0">
                    ~${retail}/mo
                  </span>
                </li>
              ))}
            </ul>

            {/* Savings callout */}
            <div className="relative overflow-hidden rounded-xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/25">
                  <PiggyBank className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-sm text-gray-400">Worth</span>
                    <span className="text-xl font-bold text-gray-400 line-through">
                      ${RETAIL_TOTAL}/mo
                    </span>
                    <span className="text-sm text-gray-400">elsewhere</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm text-gray-300">Your price</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                      $20/mo
                    </span>
                  </div>
                  <p className="text-sm text-primary-300 font-semibold mt-2">
                    Save ${RETAIL_TOTAL - 20}/mo — that's $
                    {(RETAIL_TOTAL - 20) * 12}/year
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: plan card */}
          <div className="order-1 lg:order-2 flex justify-center">
            {LANDING_PAGE_PLANS.map((plan) => (
              <PlanCard
                key={plan.type}
                plan={plan}
                interval={interval}
                isPopular={plan.popular}
              />
            ))}
          </div>
        </div>

        {/* FAQ strip */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-2">
            Questions, answered
          </h3>
          <p className="text-gray-400 text-center mb-8">
            Everything you need to know before signing up.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {PRICING_FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-white/10 bg-white/5 rounded-lg px-5 mb-3 border"
              >
                <AccordionTrigger className="text-white text-base font-medium hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        className,
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
            isPopular ? "text-white" : "text-gray-100",
          )}
        >
          {plan.type}
        </CardTitle>

        <div className="space-y-3">
          {/* Price Display */}
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-2xl text-gray-400 line-through">$50</span>
            <span
              className={cn(
                "text-5xl font-bold",
                isPopular ? "text-white" : "text-gray-100",
              )}
            >
              {price}
            </span>
            <span
              className={cn(
                "text-sm",
                isPopular ? "text-gray-200" : "text-gray-400",
              )}
            >
              / month
            </span>
          </div>

          {/* Discount Badge */}
          <div className="flex flex-col items-center gap-2">
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
                  isPopular ? "text-primary-400" : "text-green-400",
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  isPopular ? "text-gray-200" : "text-gray-300",
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
                : "bg-slate-700 hover:bg-slate-600 text-white border-slate-600",
            )}
          >
            <Zap className="w-4 h-4 mr-2" />
            Start Free Trial
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Pricing;
