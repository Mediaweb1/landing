"use client";

import { cn } from "@/lib/utils";
import { INTEGRATIONS } from "@/constants/integrations";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/shadcn/navigation-menu";
import { JumpListItem } from "./jump-list-item";
import { IntegrationListItem } from "./integration-list-item";

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
          <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-primary-500/20 data-[state=open]:text-white focus:bg-primary-500/20 focus:text-white active:bg-primary-500/30">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-600/50 shadow-2xl">
            <ul className="grid gap-4 p-8 w-[520px] lg:w-[640px] lg:grid-cols-[1fr_1fr]">
              <li className="!flex row-span-5 col-span-2">
                <NavigationMenuLink asChild>
                  <button
                    className="group flex h-full w-full select-none flex-col justify-between rounded-2xl border bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-primary-500/30 backdrop-blur-xs p-8 no-underline outline-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary-400/50 hover:from-primary-500/30 hover:to-secondary-500/30 text-left relative overflow-hidden"
                    onClick={() => handleJumpClick('ease-of-use')}
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <span className="mb-3 text-xl font-bold text-white group-hover:text-primary-200 transition-colors">
                        AI Website Builder
                      </span>
                      <p className="text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        Tell our AI what you want. Watch it build. Create stunning websites with artificial intelligence in seconds.
                      </p>
                    </div>
                    
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-secondary-400 rounded-full animate-ping opacity-50"></div>
                  </button>
                </NavigationMenuLink>
              </li>
              <JumpListItem
                selector="mediakit"
                title="Mediakit"
                description="Professional analytics and brand collaboration tools"
                onClick={handleJumpClick}
                gradient="from-secondary-500/20 to-purple-500/20"
                borderColor="border-secondary-500/30"
                iconColor="from-secondary-500 to-purple-500"
                icon="chart"
              />
              <JumpListItem
                selector="custom-domains"
                title="Custom Domains"
                description="Your brand, your domain with global CDN"
                onClick={handleJumpClick}
                gradient="from-blue-500/20 to-cyan-500/20"
                borderColor="border-blue-500/30"
                iconColor="from-blue-500 to-cyan-500"
                icon="globe"
              />
              <JumpListItem
                selector="designer-templates"
                title="Designer Templates"
                description="40+ pixel-perfect layouts for every creator"
                onClick={handleJumpClick}
                gradient="from-purple-500/20 to-pink-500/20"
                borderColor="border-purple-500/30"
                iconColor="from-purple-500 to-pink-500"
                icon="template"
              />
              <JumpListItem
                selector="theme-studio"
                title="Theme Studio"
                description="One-click styling with professional presets"
                onClick={handleJumpClick}
                gradient="from-pink-500/20 to-rose-500/20"
                borderColor="border-pink-500/30"
                iconColor="from-pink-500 to-rose-500"
                icon="palette"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-orange-500/20 data-[state=open]:text-white focus:bg-orange-500/20 focus:text-white active:bg-orange-500/30">
            Integrations
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-600/50 shadow-2xl">
            <ul className="grid w-[480px] gap-4 p-8 pt-12 md:w-[520px] md:grid-cols-2">
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
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-transparent hover:bg-white/10 hover:text-white"
            )}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://blog.mediaweb.app"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-transparent hover:bg-white/10 hover:text-white"
            )}
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://docs.mediaweb.app"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-transparent hover:bg-white/10 hover:text-white"
            )}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
