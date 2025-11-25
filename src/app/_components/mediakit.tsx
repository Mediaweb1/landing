"use client";

import { useEffect, useState } from "react";

import {
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Wifi,
  Signal,
  Battery,
  Download,
} from "lucide-react";

import AnimatedBlocks from "./animations/animated-blocks";
import AnimatedMediakitGrid from "./animations/animated-mediakit-grid";
import AnimatedConnectionProcess from "./animations/animated-connection-process";

import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

const MediaKit = () => {
  const [activeAnimations, setActiveAnimations] = useState({
    intro: false,
    mediakit: false,
    connections: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;

          if (entry.target.id === "info-collection-section") {
            setActiveAnimations((prev) => ({ ...prev, intro: isIntersecting }));
          } else if (entry.target.id === "mediakit-section-1") {
            setActiveAnimations((prev) => ({
              ...prev,
              mediakit: isIntersecting,
            }));
          } else if (entry.target.id === "connections-section") {
            setActiveAnimations((prev) => ({
              ...prev,
              connections: isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const connectionsSection = document.getElementById("connections-section");
    const mediakitSection = document.getElementById("mediakit-section-1");
    const infoSection = document.getElementById("info-collection-section");

    if (connectionsSection) observer.observe(connectionsSection);
    if (mediakitSection) observer.observe(mediakitSection);
    if (infoSection) observer.observe(infoSection);

    return () => {
      if (connectionsSection) observer.unobserve(connectionsSection);
      if (mediakitSection) observer.unobserve(mediakitSection);
      if (infoSection) observer.unobserve(infoSection);
    };
  }, []);

  return (
    <section id="mediakit" className="relative min-h-[300vh] overflow-hidden">
      {/* Global Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-secondary-400/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-20 w-56 h-56 bg-primary-300/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-32 bg-slate-800/80 backdrop-blur-xs border border-primary-500/30 rounded-lg p-3 animate-float">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-primary-400" />
            <span className="text-xs text-gray-300">Connected</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div
          className="absolute top-1/3 left-16 bg-slate-800/80 backdrop-blur-xs border border-secondary-500/30 rounded-lg p-3 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-2">
            <Signal className="w-4 h-4 text-secondary-400" />
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-secondary-400 rounded-full"></div>
              <div className="w-1 h-4 bg-secondary-400 rounded-full"></div>
              <div className="w-1 h-5 bg-secondary-400 rounded-full"></div>
              <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-2/3 right-24 bg-slate-800/80 backdrop-blur-xs border border-primary-500/30 rounded-lg p-3 animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary-400" />
            <span className="text-xs text-gray-300">+15.2%</span>
          </div>
        </div>

        <div
          className="absolute bottom-32 left-32 bg-slate-800/80 backdrop-blur-xs border border-secondary-500/30 rounded-lg p-3 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center gap-2">
            <Battery className="w-4 h-4 text-secondary-400" />
            <span className="text-xs text-gray-300">98%</span>
          </div>
        </div>

        <div
          className="absolute bottom-1/4 right-40 bg-slate-800/80 backdrop-blur-xs border border-primary-500/30 rounded-lg p-3 animate-float"
          style={{ animationDelay: "3.5s" }}
        >
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-primary-400" />
            <span className="text-xs text-gray-300">Syncing...</span>
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div
        id="info-collection-section"
        className="relative min-h-screen flex items-center p-6 lg:p-12"
      >
        <div className="inset-0 bg-gradient-to-r from-secondary-500/5 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30"
              >
                Mediakit
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Elevate Your Brand with a Professional MediaKit
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Elevate your brand's visibility and appeal with our comprehensive
              MediaKit. Designed to provide a professional and polished
              presentation of your brand's social media analytics, our MediaKit
              helps you make a compelling case for collaboration and
              sponsorship.
            </p>
            <Button className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-3 text-lg">
              Learn more
            </Button>
          </div>
          <div className="relative">
            <div className="relative h-[550px] bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-secondary-500/20 flex items-center justify-center">
              <AnimatedBlocks
                currentAnimation={activeAnimations.intro ? "intro" : ""}
              />

              <div className="absolute top-6 left-6 w-4 h-4 bg-secondary-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mediakit-section-1"
        className="relative min-h-screen flex items-center p-6 lg:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/5 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 border-primary-500/30"
              >
                Information we collect
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Craft the Perfect MediaKit
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Our MediaKit goes beyond basic information to offer a deep dive
              into your brand's unique value. It includes key performance
              metrics like follower count, engagement rates, and growth
              statistics as well as detailed demographic insights such as age
              distribution, gender breakdown, and geographic location of your
              audience, providing a clear picture of who engages with your
              content.
            </p>
            <div className="text-base">
              <span className="text-gray-400">See also </span>
              <span className="text-primary-400 hover:text-primary-300 cursor-pointer transition-colors">
                Information we collect
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[450px] md:h-[550px] bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-primary-500/20 flex items-center justify-center">
              {activeAnimations.mediakit && <AnimatedMediakitGrid />}

              <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-secondary-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-primary-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="connections-section"
        className="relative min-h-screen flex items-center p-6 lg:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-primary-500/20 text-primary-300 border-primary-500/30"
              >
                Connection process
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Social Media Connection Process
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Seamlessly connect all your social media accounts with our
              streamlined social media connection process.
            </p>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <span className="text-base">
                  Log in with your account with a given social media provider
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <span className="text-base">
                  Give Mediaweb the necessary permissions, so we can collect
                  your information
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-primary-500/20 flex items-center justify-center">
              {activeAnimations.connections && <AnimatedConnectionProcess />}

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
