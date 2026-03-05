import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mediaweb1/sdk/shadcn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediaweb FAQ – Portfolio Builder + Media Kit",
  description: "Mediaweb FAQ: Answers to common questions about portfolio websites, media kits, AI features, pricing, and getting started with Mediaweb.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    siteName: "Mediaweb",
    type: "website",
    title: "Mediaweb FAQ – Portfolio Builder + Media Kit",
    description: "Mediaweb FAQ: Answers to common questions about portfolio websites, media kits, AI features, pricing, and getting started with Mediaweb.",
    url: "https://mediaweb.app/faq",
    images: [
      {
        url: "https://mediaweb.app/og/faq.png",
        width: 1200,
        height: 630,
        alt: "Mediaweb – AI portfolio + media kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaweb FAQ – Portfolio Builder + Media Kit",
    description: "Mediaweb FAQ: Answers to common questions about portfolio websites, media kits, AI features, pricing, and getting started with Mediaweb.",
    images: ["https://mediaweb.app/og/faq.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does the AI assistant work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply describe what you want in plain English. Our AI assistant understands your vision and builds pages, sections, or entire websites in seconds. You can ask it to create a portfolio page, add a contact form, or redesign a section—it handles the technical work while you focus on your content."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my own domain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can connect your own custom domain (like yourname.com) or use our free .mediaweb.app subdomain. Custom domain setup is straightforward, and we'll guide you through the process."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have a free plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don't offer a free plan, but we do have a 30-day money-back guarantee—so you can try Mediaweb risk-free. Plus, our Early Bird Discount gives you $20/month instead of $50/month. Expires April 1, 2026. Lock in this price forever as an early adopter."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need coding skills to use Mediaweb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at all. Mediaweb is built for creators, not developers. Use our AI assistant to build with simple descriptions, choose from 40+ designer templates, or customize with our visual editor. No code required."
          }
        },
        {
          "@type": "Question",
          "name": "How does the MediaKit feature work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Connect your social media accounts (Instagram, Facebook, YouTube, TikTok), and we automatically generate a professional MediaKit with your stats, demographics, and engagement metrics. It's perfect for pitching to brands and sponsors—stats sync daily to stay current."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to worry about hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Hosting is completely automatic and included. Your portfolio is hosted on our reliable infrastructure with automatic image optimization, global CDN delivery, and 99.9% uptime. You just create—we handle everything else."
          }
        }
      ]
    }),
  },
};

const faqs = [
  {
    question: "How does the AI assistant work?",
    answer:
      "Simply describe what you want in plain English. Our AI assistant understands your vision and builds pages, sections, or entire websites in seconds. You can ask it to create a portfolio page, add a contact form, or redesign a section—it handles the technical work while you focus on your content.",
    featured: true,
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! You can connect your own custom domain (like yourname.com) or use our free .mediaweb.app subdomain. Custom domain setup is straightforward, and we'll guide you through the process.",
    featured: false,
  },
  {
    question: "Do you have a free plan?",
    answer:
      "We don't offer a free plan, but we do have a 30-day money-back guarantee—so you can try Mediaweb risk-free. Plus, our Early Bird Discount gives you $20/month instead of $50/month. Expires April 1, 2026. Lock in this price forever as an early adopter.",
    featured: true,
  },
  {
    question: "Do I need coding skills to use Mediaweb?",
    answer:
      "Not at all. Mediaweb is built for creators, not developers. Use our AI assistant to build with simple descriptions, choose from 40+ designer templates, or customize with our visual editor. No code required.",
    featured: true,
  },
  {
    question: "How does the MediaKit feature work?",
    answer:
      "Connect your social media accounts (Instagram, Facebook, YouTube, TikTok), and we automatically generate a professional MediaKit with your stats, demographics, and engagement metrics. It's perfect for pitching to brands and sponsors—stats sync daily to stay current.",
    featured: true,
  },
  {
    question: "Do I need to worry about hosting?",
    answer:
      "No. Hosting is completely automatic and included. Your portfolio is hosted on our reliable infrastructure with automatic image optimization, global CDN delivery, and 99.9% uptime. You just create—we handle everything else.",
    featured: false,
  },
  {
    question: "Can I switch templates after I've started building?",
    answer:
      "Yes! You can switch to any of our 40+ templates at any time. However, when you switch templates, you'll start fresh from that new template. Your previous content won't automatically transfer, so we recommend choosing a template you like early on or being prepared to rebuild when switching.",
    featured: false,
  },
  {
    question: "How long does it take to build a portfolio with Mediaweb?",
    answer:
      "Most creators have a professional portfolio live in under an hour. With our AI assistant and templates, you can have something beautiful in minutes. Then customize at your own pace.",
    featured: false,
  },
  {
    question: "What social media platforms do you integrate with?",
    answer:
      "Currently Instagram, Facebook, YouTube, and TikTok. We're constantly adding more platforms based on creator feedback.",
    featured: false,
  },
  {
    question: "Can I sell products or services through my Mediaweb portfolio?",
    answer:
      "Not currently, but if this is something you really need, let us know! We build features based on what our creators actually want and use. While it's not on our immediate roadmap, strong demand from our community could change that. For now, you can link to external payment platforms.",
    featured: false,
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime from your dashboard. No long-term contracts. Plus, we offer a 30-day money-back guarantee if you're not satisfied.",
    featured: false,
  },
  {
    question: "Will my portfolio work on mobile devices?",
    answer:
      "Absolutely. Our AI is trained to make designs responsive and fit perfectly on all devices. You can also implement responsive styling using the visual builder, and all our templates are built to be fully responsive. Your portfolio looks perfect on mobile, tablet, and desktop.",
    featured: true,
  },
  {
    question: "Can I have multiple portfolios or websites?",
    answer:
      "Yes! On our early bird plan with the 60% discount, you can have up to 3 websites. Perfect if you want separate portfolios for different types of work or brands.",
    featured: false,
  },
  {
    question: "What happens to my images and content if I cancel?",
    answer:
      "You can download your images before canceling. We recommend backing up your content regularly. After cancellation, your site and data are retained for 30 days before permanent deletion.",
    featured: false,
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
