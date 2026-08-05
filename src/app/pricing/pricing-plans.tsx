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
  Switch,
} from "@mediaweb1/sdk/shadcn";
import { Check, Zap, Sparkles } from "lucide-react";
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

// TODO: replace with real FAQs you've seen from users — these are reasonable defaults
const PRICING_FAQS = [
  {
    q: "What happens after the 14-day free trial?",
    a: "Your trial converts to a paid subscription at your plan's regular price. You won't be charged until the trial ends, and you can cancel anytime before then with one click — no questions asked.",
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
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade between plans at any time from your dashboard billing settings.",
  },
  {
    q: "How do AI credits work?",
    a: "AI credits let you use our AI assistant to build pages and sections. We offer different AI models that consume credits at different rates, so you can choose between speed, quality, and cost. Usage is billed at affordable rates, and you can track it in real-time from your dashboard.",
  },
];

const Pricing = () => {
  const sectionRef = useScrollReveal();
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

      <div
        ref={sectionRef}
        className="scroll-reveal relative z-10 max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-6 py-1 px-2"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Plans that{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              grow with you
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start with a 14-day free trial on any plan. No charge until the
            trial ends, cancel anytime.
          </p>
        </div>

        {/* Interval toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span
            className={cn(
              "text-sm font-medium",
              interval === "monthly" ? "text-white" : "text-gray-400",
            )}
          >
            Monthly
          </span>
          <Switch
            checked={interval === "yearly"}
            onCheckedChange={(checked) =>
              setInterval(checked ? "yearly" : "monthly")
            }
          />
          <span
            className={cn(
              "text-sm font-medium flex items-center gap-2",
              interval === "yearly" ? "text-white" : "text-gray-400",
            )}
          >
            Yearly
            <Badge
              variant="secondary"
              className="bg-primary-500/20 text-primary-300 border-primary-500/30"
            >
              Save up to 30%
            </Badge>
          </span>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {LANDING_PAGE_PLANS.map((plan) => (
            <PlanCard
              key={plan.type}
              plan={plan}
              isPopular={plan.popular}
              interval={interval}
            />
          ))}
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
  isPopular,
  interval,
  className,
}: {
  plan: any;
  isPopular: boolean;
  interval: "monthly" | "yearly";
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

        <div className="flex items-baseline justify-center gap-2">
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
        {interval === "yearly" && (
          <p
            className={cn(
              "text-xs",
              isPopular ? "text-gray-300" : "text-gray-500",
            )}
          >
            billed annually
          </p>
        )}
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

        <Link
          href={`https://dashboard.mediaweb.app/register?plan=${encodeURIComponent(plan.type)}&interval=${interval}`}
        >
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
