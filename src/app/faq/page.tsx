"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mediaweb1/sdk/shadcn";

const faqs = [
  {
    question: "How does the AI assistant work?",
    answer:
      "Simply describe what you want in plain English. Our AI assistant understands your vision and builds pages, sections, or entire websites in seconds. You can ask it to create a portfolio page, add a contact form, or redesign a section—it handles the technical work while you focus on your content.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! You can connect your own custom domain (like yourname.com) or use our free .mediaweb.app subdomain. Custom domain setup is straightforward, and we'll guide you through the process.",
  },
  {
    question: "Do you have a free plan?",
    answer:
      "We don't offer a free plan, but we do have a 30-day money-back guarantee—so you can try Mediaweb risk-free. Plus, our early bird special gives you 80% off ($10/month instead of $50/month) until December 31, 2025. Lock in this price forever as an early adopter.",
  },
  {
    question: "Do I need coding skills to use Mediaweb?",
    answer:
      "Not at all. Mediaweb is built for creators, not developers. Use our AI assistant to build with simple descriptions, choose from 40+ designer templates, or customize with our visual editor. No code required.",
  },
  {
    question: "How does the MediaKit feature work?",
    answer:
      "Connect your social media accounts (Instagram, Facebook, YouTube, TikTok), and we automatically generate a professional MediaKit with your stats, demographics, and engagement metrics. It's perfect for pitching to brands and sponsors—all updated in real-time.",
  },
  {
    question: "Do I need to worry about hosting?",
    answer:
      "No. Hosting is completely automatic and included. Your portfolio is hosted on our reliable infrastructure with automatic image optimization, global CDN delivery, and 99.9% uptime. You just create—we handle everything else.",
  },
];

export default function FAQPage() {
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about Mediaweb
            </p>
          </div>

          {/* FAQ List */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-xs overflow-hidden transition-all duration-300 hover:border-primary-500/50"
              >
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">Still have questions?</p>
            <a
              href="https://dashboard.mediaweb.app/register"
              className="inline-block rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-primary-500/25"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
