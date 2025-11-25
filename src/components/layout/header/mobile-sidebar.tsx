"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { INTEGRATIONS } from "@/constants/integrations";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/shadcn/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/accordion";

const SOLUTIONS = [
  {
    title: "AI Website Builder",
    href: "/#ease-of-use",
    description: "Create stunning websites with AI",
  },
  {
    title: "Mediakit",
    href: "/#mediakit",
    description: "Professional analytics and brand tools",
  },
  {
    title: "Custom Domains",
    href: "/#custom-domains",
    description: "Your brand, your domain",
  },
  {
    title: "Designer Templates",
    href: "/#designer-templates",
    description: "40+ pixel-perfect layouts",
  },
  {
    title: "Theme Studio",
    href: "/#theme-studio",
    description: "One-click styling presets",
  },
];

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="w-12 h-12 p-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 flex items-center justify-center relative z-60">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent side="right" className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="h-16 flex justify-end items-center">
          <SheetClose className="h-10 w-10 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-full text-white cursor-pointer flex items-center justify-center font-bold">
            ✕
          </SheetClose>
        </div>
        
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="solutions" className="border-slate-700">
            <AccordionTrigger className="text-white hover:text-primary-400 text-lg font-semibold">
              Solutions
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-4">
                {SOLUTIONS.map((solution) => (
                  <li key={solution.title}>
                    <SheetClose asChild>
                      <Link
                        href={solution.href}
                        className="flex flex-col py-3 px-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="font-medium text-white">{solution.title}</span>
                        <span className="text-sm text-gray-400">{solution.description}</span>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="integrations" className="border-slate-700">
            <AccordionTrigger className="text-white hover:text-primary-400 text-lg font-semibold">
              Integrations
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-3 p-4 grid-cols-2">
                {INTEGRATIONS.map((integration) => (
                  <li key={integration.title} className="!flex">
                    <SheetClose asChild>
                      <Link
                        href={integration.href}
                        className={cn(
                          "flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-slate-800/50 transition-colors w-full",
                          (integration.title === 'Snapchat' || integration.title === 'X') && 'opacity-50'
                        )}
                      >
                        <Image
                          src={integration.imageURL}
                          width={40}
                          height={40}
                          className="aspect-square h-10 w-10 rounded-lg"
                          alt={integration.title}
                        />
                        <div className="flex flex-col items-center text-center">
                          <span className="font-medium text-white text-sm">{integration.title}</span>
                          <span className="text-xs text-gray-400 line-clamp-1">
                            {integration.title === 'Snapchat' || integration.title === 'X' 
                              ? 'Coming Soon' 
                              : integration.description}
                          </span>
                        </div>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="space-y-2 mt-4">
          <SheetClose asChild>
            <Link 
              href="/pricing" 
              className="flex items-center h-14 px-4 text-white hover:text-primary-400 text-lg font-semibold hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Pricing
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link 
              href="https://blog.mediaweb.app" 
              className="flex items-center h-14 px-4 text-white hover:text-primary-400 text-lg font-semibold hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Blog
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link 
              href="https://docs.mediaweb.app" 
              className="flex items-center h-14 px-4 text-white hover:text-primary-400 text-lg font-semibold hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Docs
            </Link>
          </SheetClose>
        </div>
        
        <div className="mt-8 px-4">
          <SheetClose asChild>
            <Link
              href="https://dashboard.mediaweb.app/register"
              className="w-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white border-0 shadow-lg shadow-primary-500/25 px-6 py-3 rounded-md font-medium transition-all duration-200"
            >
              Get Started
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
