"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const templates = [
  { src: "/images/fashion-creator.webp", label: "Fashion Creator" },
  { src: "/images/tech-creator.webp", label: "Tech Creator" },
  { src: "/images/travel-creator.webp", label: "Travel Creator" },
  { src: "/images/golf-creator-2.webp", label: "Golf Creator" },
  { src: "/images/interior-creator.webp", label: "Interior Creator" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % templates.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-600 shadow-2xl">
        {templates.map((t, i) => (
          <div
            key={t.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={t.src}
              alt={t.label}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority={i === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
              <p className="text-white font-semibold text-lg">{t.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {templates.map((t, i) => (
          <button
            key={t.src}
            onClick={() => setIndex(i)}
            aria-label={`Show ${t.label}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary-400" : "w-2 bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
