"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { INTEGRATIONS } from "@/constants/integrations";
import { Logo } from "./logo";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/shadcn/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/accordion";

const FEATURES = [
  {
    title: "AI Agent",
    href: "/#features",
    description: "Builds your portfolio from your bio and content",
  },
  {
    title: "Mediakit",
    href: "/#mediakit",
    description: "Verified stats from IG, TikTok, YouTube & Facebook",
  },
  {
    title: "Link in bio",
    href: "/#features",
    description: "A branded link-in-bio page built into your site",
  },
  {
    title: "Custom Domains",
    href: "/#features",
    description: "Launch on your own domain — or a free .mediaweb.app link",
  },
  {
    title: "Free Hosting",
    href: "/#features",
    description: "Included on every plan — no servers, no setup",
  },
  {
    title: "One-Click Publish",
    href: "/#features",
    description: "Hit publish and you're live",
  },
  {
    title: "Theme Studio",
    href: "/#features",
    description: "Match your aesthetic in one click",
  },
];

const TOP_LEVEL_LINKS = [
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Docs", href: "https://docs.mediaweb.app" },
];

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-200 hover:text-white transition-colors relative z-60"
      >
        <Menu className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-sm p-0 bg-slate-950 border-l border-white/10 flex flex-col [&>button]:hidden"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/5 shrink-0">
          <SheetClose asChild>
            <Logo />
          </SheetClose>
          <SheetClose
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </SheetClose>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* Top-level links */}
          <nav className="flex flex-col">
            {TOP_LEVEL_LINKS.map((link) => (
              <SheetClose asChild key={link.title}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3 text-gray-200 hover:text-white text-base font-medium border-b border-white/5 transition-colors group"
                >
                  <span>{link.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* Accordion sections */}
          <Accordion type="multiple" className="w-full mt-2">
            <AccordionItem value="features" className="border-b border-white/5">
              <AccordionTrigger className="text-gray-200 hover:text-white text-base font-medium py-3 hover:no-underline">
                Features
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <ul className="flex flex-col gap-1 pl-1">
                  {FEATURES.map((feature) => (
                    <li key={feature.title}>
                      <SheetClose asChild>
                        <Link
                          href={feature.href}
                          className="flex flex-col py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors"
                        >
                          <span className="text-sm font-medium text-white">
                            {feature.title}
                          </span>
                          <span className="text-xs text-gray-500 mt-0.5">
                            {feature.description}
                          </span>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integrations" className="border-b border-white/5">
              <AccordionTrigger className="text-gray-200 hover:text-white text-base font-medium py-3 hover:no-underline">
                Integrations
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <ul className="grid grid-cols-2 gap-2 pt-1">
                  {INTEGRATIONS.map((integration) => {
                    const isComingSoon =
                      integration.title === "Snapchat" || integration.title === "X";
                    return (
                      <li key={integration.title}>
                        <SheetClose asChild>
                          <Link
                            href={integration.href}
                            className={cn(
                              "flex items-center gap-3 p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors",
                              isComingSoon && "opacity-50"
                            )}
                          >
                            <Image
                              src={integration.imageURL}
                              width={28}
                              height={28}
                              className="aspect-square h-7 w-7 rounded-md shrink-0"
                              alt={integration.title}
                            />
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-medium text-white truncate">
                                {integration.title}
                              </span>
                              <span className="text-[10px] text-gray-500 truncate">
                                {isComingSoon ? "Coming soon" : integration.description}
                              </span>
                            </div>
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer CTAs */}
        <div className="shrink-0 px-5 py-4 border-t border-white/5 flex flex-col gap-3">
          <SheetClose asChild>
            <Link
              href="https://dashboard.mediaweb.app/login"
              className="w-full flex items-center justify-center h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Log in
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 transition-all"
            >
              Sign up
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
