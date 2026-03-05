"use client"

import { Globe, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@mediaweb1/sdk/shadcn";
import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

const CustomDomains = () => {
  return (
    <section id="custom-domains" className="relative px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Custom Domains
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Brand, Your Domain
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Launch your professional portfolio on your own custom domain or use our free .mediaweb.app subdomain. Build trust with brands and clients while maintaining complete control over your online presence.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-300">Free .mediaweb.app subdomain included</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-300">Custom domain support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-300">Global CDN for fast loading</span>
              </div>
            </div>

            <Link href="https://dashboard.mediaweb.app/register">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-blue-400/40 backdrop-blur-xs p-8">
              <div className="space-y-6">
                {/* Domain Examples */}
                <div className="space-y-4">
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-300/40">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                      <span className="text-white font-medium">yourname.com</span>
                      <Badge className="bg-blue-400/30 text-blue-100 text-xs">Custom</Badge>
                    </div>
                  </div>
                  <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-300/40">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
                      <span className="text-white">yourname.mediaweb.app</span>
                      <Badge className="bg-cyan-400/30 text-cyan-100 text-xs">Free</Badge>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-200">99.9%</div>
                    <div className="text-sm text-blue-100">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-200">&lt;100ms</div>
                    <div className="text-sm text-cyan-100">Load Time</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDomains;
