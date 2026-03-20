"use client";

import { Image, Zap, Gauge, Smartphone, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Card } from "@mediaweb1/sdk/shadcn";
import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

const FileStorage = () => {
  return (
    <section id="image-optimization" className="relative px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-400/40 backdrop-blur-xs p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium">Image Optimization</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                    <span className="text-emerald-100 text-sm">Active</span>
                  </div>
                </div>

                {/* Image Optimization Visual */}
                <div className="space-y-4">
                  {/* Before */}
                  <div className="bg-red-400/20 rounded-lg p-4 border border-red-300/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-100 text-sm font-medium">Before</span>
                      <span className="text-red-200 text-xs">5.2 MB</span>
                    </div>
                    <div className="w-full h-2 bg-red-300/40 rounded-full">
                      <div className="h-full bg-red-400 rounded-full w-full"></div>
                    </div>
                    <div className="text-red-100 text-xs mt-2">Slow loading...</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-emerald-300 rotate-90" />
                  </div>

                  {/* After */}
                  <div className="bg-emerald-400/20 rounded-lg p-4 border border-emerald-300/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-100 text-sm font-medium">After</span>
                      <span className="text-emerald-200 text-xs">180 KB</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-300/40 rounded-full">
                      <div className="h-full bg-emerald-400 rounded-full w-1/4"></div>
                    </div>
                    <div className="text-emerald-100 text-xs mt-2">Lightning fast! ⚡</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-200">96%</div>
                    <div className="text-xs text-emerald-100">Smaller</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-teal-200">10x</div>
                    <div className="text-xs text-teal-100">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-200">Auto</div>
                    <div className="text-xs text-emerald-100">Magic</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-white" />
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                Automatic Image Optimization
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Photos Load Super Fast
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Portfolio websites often have tons of media—photos, videos, graphics. This makes most portfolios painfully slow to load.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              We solve this automatically. Every image gets compressed by up to 96% without losing quality, making your portfolio load much faster
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">10x faster loading</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Up to 96% smaller files</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Perfect on all devices</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Powered by Vercel Blob Storage</span>
              </div>
            </div>

            <Link href="https://dashboard.mediaweb.app/register">
              <Button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg"
              >
                Try Free for 14 Days
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
