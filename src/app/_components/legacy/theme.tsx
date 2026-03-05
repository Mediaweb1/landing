"use client"

import { Brush, Palette, Type, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@mediaweb1/sdk/shadcn";
import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

const Theme = () => {
  const themes = [
    {
      name: "Vibrant Creator",
      colors: [
        "from-purple-500 to-pink-500",
        "from-pink-500 to-red-500",
        "from-red-500 to-orange-500",
      ],
      bg: "bg-pink-500/20",
      border: "border-pink-300/40",
      description: "Bold & energetic",
    },
    {
      name: "Ocean Breeze",
      colors: [
        "from-blue-600 to-cyan-500",
        "from-cyan-500 to-teal-500",
        "from-teal-500 to-emerald-500",
      ],
      bg: "bg-blue-500/20",
      border: "border-blue-300/40",
      description: "Cool & refreshing",
    },
    {
      name: "Midnight Pro",
      colors: [
        "from-slate-700 to-slate-800",
        "from-slate-600 to-slate-700",
        "from-slate-500 to-slate-600",
      ],
      bg: "bg-slate-500/20",
      border: "border-slate-300/40",
      description: "Dark & professional",
    },
    {
      name: "Sunset Warm",
      colors: [
        "from-orange-500 to-red-500",
        "from-yellow-500 to-orange-500",
        "from-red-500 to-pink-500",
      ],
      bg: "bg-orange-500/20",
      border: "border-orange-300/40",
      description: "Warm & inviting",
    },
    {
      name: "Forest Earth",
      colors: [
        "from-green-600 to-emerald-600",
        "from-emerald-600 to-teal-600",
        "from-teal-600 to-cyan-600",
      ],
      bg: "bg-green-500/20",
      border: "border-green-300/40",
      description: "Natural & grounded",
    },
    {
      name: "Minimal Grey",
      colors: [
        "from-gray-400 to-gray-500",
        "from-gray-500 to-gray-600",
        "from-gray-600 to-gray-700",
      ],
      bg: "bg-gray-500/20",
      border: "border-gray-300/40",
      description: "Clean & minimal",
    },
  ];

  return (
    <section id="theme-studio" className="relative px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Brush className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-pink-500/20 text-pink-300 border-pink-500/30"
              >
                Theme Studio
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Brand-Ready Styling in One Click
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Transform your portfolio instantly with professionally curated
              color palettes and typography presets. No design experience
              needed—just pick your style and go.
            </p>

            {/* Theme Options */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-pink-500/20 rounded-lg border border-pink-300/40">
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-medium">Vibrant Creator</h4>
                  <p className="text-pink-100 text-sm">
                    Bold colors for lifestyle brands
                  </p>
                </div>
              </div>

              <div className="bg-indigo-500/20 rounded-lg p-4 border border-indigo-300/40">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Professional Edge
                    </h4>
                    <p className="text-indigo-100 text-sm">
                      Clean, minimal for business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Preview */}
            <div className="bg-rose-500/20 rounded-lg p-4 border border-rose-300/40">
              <div className="flex items-center gap-3 mb-3">
                <Type className="w-5 h-5 text-rose-300" />
                <span className="text-white font-medium">
                  Typography Presets
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-white">Heading Font</div>
                <div className="text-base text-rose-100">
                  Body font for readability
                </div>
                <div className="text-sm text-rose-300 font-medium">
                  Accent text styling
                </div>
              </div>
            </div>

            <Link href="https://dashboard.mediaweb.app/register">
              <Button
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Visual - Theme Examples */}
          <div className="relative">
            <Card className="relative overflow-hidden bg-gradient-to-br from-rose-500/30 to-pink-500/30 border border-rose-400/40 backdrop-blur-xs p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium">Theme Gallery</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-rose-300 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-pink-300 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                {/* Theme Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {themes.map((theme, index) => (
                    <div
                      key={index}
                      className={`${theme.bg} rounded-lg p-3 border ${theme.border} hover:scale-105 transition-transform cursor-pointer`}
                    >
                      <div className="space-y-2">
                        <div className="flex gap-1 mb-2">
                          {theme.colors.map((color, colorIndex) => (
                            <div
                              key={colorIndex}
                              className={`w-4 h-4 bg-gradient-to-r ${color} rounded-full`}
                            ></div>
                          ))}
                        </div>
                        <div className="text-xs font-medium text-white">
                          {theme.name}
                        </div>
                        <div className="text-xs text-white/70">
                          {theme.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Style Controls */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-rose-400/20 rounded-lg p-3 text-center border border-rose-300/40">
                    <Palette className="w-6 h-6 text-rose-200 mx-auto mb-2" />
                    <span className="text-sm text-rose-100">Color Palette</span>
                  </div>
                  <div className="bg-pink-400/20 rounded-lg p-3 text-center border border-pink-300/40">
                    <Type className="w-6 h-6 text-pink-200 mx-auto mb-2" />
                    <span className="text-sm text-pink-100">Typography</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-rose-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
