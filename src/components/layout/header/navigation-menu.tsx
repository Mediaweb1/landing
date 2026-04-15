"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { INTEGRATIONS } from "@/constants/integrations";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/shadcn/navigation-menu";
import { JumpListItem } from "./jump-list-item";
import { IntegrationListItem } from "./integration-list-item";

const triggerClass =
  "text-gray-200 bg-transparent hover:bg-white/5 hover:text-white data-[state=open]:bg-white/5 data-[state=open]:text-white focus:bg-white/5 focus:text-white";

const linkClass =
  "text-gray-200 bg-transparent hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white";

const menuContentClass =
  "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl";

export function NavigationMenuComponent() {
  const handleJumpClick = (selector: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${selector}`;
    }
  };

  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass}>
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className={menuContentClass}>
            <ul className="grid gap-3 p-6 w-[520px] lg:w-[640px] lg:grid-cols-[1fr_1fr]">
              <li className="!flex row-span-5 col-span-2">
                <NavigationMenuLink asChild>
                  <button
                    className="group flex h-full w-full select-none flex-col justify-between rounded-xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 hover:from-primary-500/15 hover:to-secondary-500/15 hover:border-primary-500/40 p-6 no-underline outline-hidden transition-colors text-left"
                    onClick={() => handleJumpClick('ease-of-use')}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-3 shadow-lg shadow-primary-500/25">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-semibold text-white mb-1 block">
                        AI Website Builder
                      </span>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Tell our AI what you want. Watch it build your portfolio in seconds.
                      </p>
                    </div>
                  </button>
                </NavigationMenuLink>
              </li>
              <JumpListItem
                selector="mediakit"
                title="Mediakit"
                description="Verified stats from IG, TikTok, YouTube & Facebook"
                onClick={handleJumpClick}
                icon="chart"
                accent="secondary"
              />
              <JumpListItem
                selector="custom-domains"
                title="Custom Domains"
                description="Your brand, your domain — or a free .mediaweb.app link"
                onClick={handleJumpClick}
                icon="globe"
                accent="tertiary"
              />
              <JumpListItem
                selector="link-in-bio"
                title="Link in bio"
                description="A branded link-in-bio page built into your site"
                onClick={handleJumpClick}
                icon="link"
                accent="primary"
              />
              <JumpListItem
                selector="theme-studio"
                title="Theme Studio"
                description="One-click styling that matches your aesthetic"
                onClick={handleJumpClick}
                icon="palette"
                accent="secondary"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass}>
            Integrations
          </NavigationMenuTrigger>
          <NavigationMenuContent className={menuContentClass}>
            <ul className="grid w-[480px] gap-3 p-6 md:w-[520px] md:grid-cols-2">
              {INTEGRATIONS.map((integration, index) => (
                <IntegrationListItem
                  key={integration.title}
                  title={integration.title}
                  href={integration.href}
                  imageURL={integration.imageURL}
                  description={integration.description}
                  index={index}
                  isComingSoon={integration.title === 'Snapchat' || integration.title === 'X'}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/pricing"
            className={cn(navigationMenuTriggerStyle(), linkClass)}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/faq"
            className={cn(navigationMenuTriggerStyle(), linkClass)}
          >
            FAQ
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://docs.mediaweb.app"
            className={cn(navigationMenuTriggerStyle(), linkClass)}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
