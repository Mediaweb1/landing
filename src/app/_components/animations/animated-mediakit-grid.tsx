"use client";

import { useEffect, useState } from "react";
import { BarChart3, Users, PieChart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

import BarChart from "@/components/diagrams/bar-chart";
import PieChartComponent from "@/components/diagrams/pie-chart";
import HorizontalBarChart from "@/components/diagrams/horizontal-bar-chart";

import {
  METRICS,
  GENDER_DISTRIBUTION,
  COUNTRY_DISTRIBUTION,
  AGE_DISTRIBUTION,
} from "@/DUMMY_DATA";

const AnimatedMediakitGrid = () => {
  return (
    <div
      className={cn(
        "w-full h-full max-h-[450px] md:max-h-[550px] p-4",
        "animate-opacity-in opacity-0 duration-1000 delay-300"
      )}
    >
      <div className="grid grid-cols-2 gap-3 h-full w-full">
        {/* Metrics - Top Left */}
        <div className="h-[200px] md:h-[250px] w-full relative group">
          <div className="p-4 md:p-6 h-full bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-primary-400/30 rounded-xl shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary-500/20 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="relative flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-primary-400" />
              </div>
              <span className="text-xs font-medium text-primary-300">
                Metrics
              </span>
            </div>

            {/* Metrics Content */}
            <div className="relative h-[calc(100%-2.5rem)] space-y-3">
              <div className="grid grid-cols-2 gap-1 md:gap-3 h-full">
                <div className="space-y-1">
                  <div className="text-[10px] md:text-xs text-gray-400">Followers</div>
                  <div className="text-xs md:text-lg font-semibold text-white">
                    {METRICS.followers.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-xs text-green-400">+2.56%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] md:text-xs text-gray-400">Impressions</div>
                  <div className="text-xs md:text-lg font-semibold text-white">
                    {METRICS.impressions.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-xs text-green-400">+11.43%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] md:text-xs text-gray-400">Avg Views</div>
                  <div className="text-xs md:text-lg font-semibold text-white">
                    {METRICS.averageViews.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-xs text-green-400">+3.89%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] md:text-xs text-gray-400">Engagement</div>
                  <div className="text-xs md:text-lg font-semibold text-white">
                    {(METRICS.engagementRate * 100).toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-xs text-green-400">+0.05%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gender Distribution - Top Right */}
        <div className="h-[200px] md:h-[250px] w-full relative group">
          <div className="p-4 md:p-6 h-full bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-secondary-400/30 rounded-xl shadow-lg shadow-secondary-500/20 group-hover:shadow-secondary-500/40 transition-all duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-secondary-500/20 to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="relative flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-secondary-400" />
              </div>
              <span className="text-xs font-medium text-secondary-300">
                Gender
              </span>
            </div>

            {/* Gender Chart Content - Much Larger Donut Chart */}
            <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
              <div className="scale-[0.5] origin-top-left w-[200%] h-[200%]">
                <PieChartComponent
                  data={GENDER_DISTRIBUTION}
                  radius={100}
                  colorScheme="secondary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Age Distribution - Bottom Left */}
        <div className="h-[200px] md:h-[250px] w-full relative group">
          <div className="p-4 md:p-6 h-full bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-primary-400/30 rounded-xl shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary-500/20 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="relative flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <PieChart className="w-4 h-4 text-primary-400" />
              </div>
              <span className="text-xs font-medium text-primary-300">Age</span>
            </div>

            {/* Age Chart Content */}
            <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
              <div className="scale-[0.6] origin-top-left w-[167%] h-[167%]">
                <BarChart
                  data={AGE_DISTRIBUTION}
                  viewport={{ width: 300, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Country Distribution - Bottom Right */}
        <div className="h-[200px] md:h-[250px] w-full relative group">
          <div className="p-4 md:p-6 h-full bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-secondary-400/30 rounded-xl shadow-lg shadow-secondary-500/20 group-hover:shadow-secondary-500/40 transition-all duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-secondary-500/20 to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="relative flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-secondary-400" />
              </div>
              <span className="text-xs font-medium text-secondary-300">
                Country
              </span>
            </div>

            {/* Country Chart Content */}
            <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
              <div className="scale-[0.5] origin-top-left w-[200%] h-[200%]">
                <HorizontalBarChart
                  data={COUNTRY_DISTRIBUTION}
                  title=""
                  colorScheme="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-secondary-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 -left-3 w-2 h-2 bg-primary-300 rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 -right-3 w-2 h-2 bg-secondary-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default AnimatedMediakitGrid;
