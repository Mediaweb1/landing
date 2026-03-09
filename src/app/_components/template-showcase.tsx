"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const templates = [
  { src: "/images/fashion-creator.webp", label: "Fashion Creator" },
  { src: "/images/golf-creator-2.webp", label: "Golf Creator" },
  { src: "/images/interior-creator.webp", label: "Interior Creator" },
  { src: "/images/tech-creator.webp", label: "Tech Creator" },
  { src: "/images/travel-creator.webp", label: "Travel Creator" },
];

const TemplateShowcase = () => {
  const headerRef = useScrollReveal();
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const tabletScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [tabletIndex, setTabletIndex] = useState(0);

  const useScrollTracker = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>, cardWidthFraction: number, setIndex: (i: number) => void) => {
      const container = ref.current;
      if (!container) return;

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth * cardWidthFraction;
        const index = Math.round(scrollLeft / cardWidth);
        setIndex(Math.min(index, templates.length - 1));
      };

      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    },
    []
  );

  useEffect(() => {
    return useScrollTracker(mobileScrollRef, 0.75, setMobileIndex);
  }, [useScrollTracker]);

  useEffect(() => {
    return useScrollTracker(tabletScrollRef, 0.5, setTabletIndex);
  }, [useScrollTracker]);

  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-10 md:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              every creator
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No matter your niche — fashion, sports, tech, travel — your portfolio is designed to match. Here's what creators are building with Mediaweb.
          </p>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {templates.map((template, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[75vw] first:ml-[12.5vw] last:mr-[12.5vw]"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-600 shadow-2xl group">
                  <Image
                    src={template.src}
                    alt={template.label}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="75vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
                    <p className="text-white font-semibold text-lg">
                      {template.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {templates.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === mobileIndex
                    ? "w-6 bg-primary-400"
                    : "w-2 bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet: Two-card carousel */}
        <div className="hidden md:block lg:hidden">
          <div
            ref={tabletScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {templates.map((template, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[calc(50%-8px)] first:ml-0"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-600 shadow-2xl group">
                  <Image
                    src={template.src}
                    alt={template.label}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
                    <p className="text-white font-semibold text-lg">
                      {template.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {templates.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === tabletIndex
                    ? "w-6 bg-primary-400"
                    : "w-2 bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-600 shadow-lg group hover:border-primary-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <Image
                src={template.src}
                alt={template.label}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="20vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-base">
                  {template.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
