import {
  Palette,
  Layers,
  Zap,
  ArrowRight,
  User,
  Link as LinkIcon,
  FileText,
  Camera,
} from "lucide-react";
import Link from "next/link";

import { Card } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";
import { Button } from "@mediaweb1/sdk/shadcn";

const DesignerTemplates = () => {
  return (
    <section id="designer-templates" className="relative px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-600/30 to-pink-500/30 border border-purple-400/40 backdrop-blur-xs p-8">
              {/* Template Type Tabs */}
              <div className="flex gap-2 mb-6">
                <div className="bg-purple-500/40 px-3 py-1 rounded-full text-xs text-purple-100 border border-purple-300/40">
                  Page Types
                </div>
                <div className="bg-pink-500/20 px-3 py-1 rounded-full text-xs text-pink-200 border border-pink-300/40">
                  Niches
                </div>
              </div>

              {/* Page Types Grid */}
              <div className="space-y-4 mb-6">
                <h4 className="text-white font-medium text-sm">
                  Template Types
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-500/30 rounded-lg p-3 border border-purple-300/40 flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-400 rounded flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-purple-100 text-xs">
                      Contact Pages
                    </span>
                  </div>
                  <div className="bg-blue-500/30 rounded-lg p-3 border border-blue-300/40 flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                      <LinkIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-blue-100 text-xs">
                      Linktree Style
                    </span>
                  </div>
                  <div className="bg-pink-500/30 rounded-lg p-3 border border-pink-300/40 flex items-center gap-2">
                    <div className="w-6 h-6 bg-pink-400 rounded flex items-center justify-center">
                      <FileText className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-pink-100 text-xs">Media Kits</span>
                  </div>
                  <div className="bg-emerald-500/30 rounded-lg p-3 border border-emerald-300/40 flex items-center gap-2">
                    <div className="w-6 h-6 bg-emerald-400 rounded flex items-center justify-center">
                      <Camera className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-emerald-100 text-xs">Portfolios</span>
                  </div>
                </div>
              </div>

              {/* Niche Categories */}
              <div className="space-y-4">
                <h4 className="text-white font-medium text-sm">
                  Popular Niches
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 p-2 bg-purple-400/20 rounded border border-purple-300/40">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-100 text-xs">
                      Fashion & Beauty
                    </span>
                    <span className="text-purple-300 text-xs ml-auto">
                      15 templates
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-400/20 rounded border border-blue-300/40">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span className="text-blue-100 text-xs">Tech & Gaming</span>
                    <span className="text-blue-300 text-xs ml-auto">
                      8 templates
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-emerald-400/20 rounded border border-emerald-300/40">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    <span className="text-emerald-100 text-xs">
                      Lifestyle & Travel
                    </span>
                    <span className="text-emerald-300 text-xs ml-auto">
                      12 templates
                    </span>
                  </div>
                </div>
              </div>

              {/* Template Switcher */}
              <div className="flex items-center justify-center gap-2 p-4 bg-purple-500/20 rounded-lg border border-purple-300/40 mt-6">
                <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-100 text-sm">40+ Templates</span>
                <div className="w-2 h-2 bg-pink-300 rounded-full animate-ping ml-2"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30"
              >
                Designer Templates
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pixel-Perfect Templates for Every Creator
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Choose from 40+ professionally designed templates crafted
              specifically for content creators. Switch between layouts
              instantly to match your brand aesthetic or campaign needs.
            </p>

            {/* Updated Template Categories */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-300/40">
                <h4 className="text-white font-medium mb-2">Contact Pages</h4>
                <p className="text-purple-100 text-sm">
                  Professional contact layouts
                </p>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-4 border border-pink-300/40">
                <h4 className="text-white font-medium mb-2">Linktree Style</h4>
                <p className="text-pink-100 text-sm">Link-in-bio templates</p>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-300/40">
                <h4 className="text-white font-medium mb-2">Media Kits</h4>
                <p className="text-blue-100 text-sm">
                  Showcase your brand stats
                </p>
              </div>
              <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-300/40">
                <h4 className="text-white font-medium mb-2">Portfolio Pages</h4>
                <p className="text-emerald-100 text-sm">
                  Creative work displays
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-purple-300">
              <Zap className="w-5 h-5" />
              <span className="text-sm">
                Switch templates instantly with one click
              </span>
            </div>

            <Link href="https://dashboard.mediaweb.app/register">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerTemplates;
