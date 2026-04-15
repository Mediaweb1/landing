import { Sparkles, ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const bullets = [
  {
    lead: "AI-built.",
    rest: "From your bio and content — in minutes, no design skills needed.",
  },
  {
    lead: "Mediakit included.",
    rest: "Verified stats from Instagram, TikTok, YouTube & Facebook.",
  },
  {
    lead: "Link in bio, built in.",
    rest: "A branded link-in-bio page lives on your site — styled your way, to fit your brand",
  },
];

const featurePills = [
  "AI Agent",
  "Mediakit",
  "Custom Domains",
  "Free Hosting",
  "One-Click Publish",
  "Theme Studio",
  "Verified Stats",
  "Custom Themes",
];

type Testimonial = {
  quote: string;
  name: string;
  niche: string;
  handle?: string;
};

// TODO: fill with real early-creator quotes; confirm attribution level
// (first name only vs. handle) with each creator before shipping.
const testimonials: Testimonial[] = [
  {
    quote:
      "Landed my first paid brand deal within a week of publishing my Mediaweb portfolio.",
    name: "Korse",
    niche: "Fashion Creator",
  },
  {
    quote:
      "Built my whole portfolio in under 20 minutes. The AI just got my vibe instantly.",
    name: "Christopher",
    niche: "Fitness Creator",
  },
  {
    quote:
      "Brands actually reply now. The mediakit makes me look like a pro overnight.",
    name: "Trine",
    niche: "UGC Creator",
  },
];

const collage = [
  {
    src: "/images/fashion-creator.webp",
    label: "Fashion Creator",
    className: "col-start-1 row-start-1 translate-y-0 rotate-[-2deg] z-20",
  },
  {
    src: "/images/tech-creator.webp",
    label: "Tech Creator",
    className: "col-start-2 row-start-1 translate-y-4 rotate-[2deg] z-10",
  },
  {
    src: "/images/travel-creator.webp",
    label: "Travel Creator",
    className: "col-start-1 row-start-2 -translate-y-2 rotate-[1deg] z-10",
  },
  {
    src: "/images/golf-creator-2.webp",
    label: "Golf Creator",
    className: "col-start-2 row-start-2 translate-y-2 -rotate-[3deg] z-20",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-2rem)] flex flex-col justify-center px-6 pt-24 pb-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 text-left mx-auto lg:mx-0 w-full">
            {/* Proof badge */}
            {/* TODO: confirm exact conversion-lift number with real data before shipping */}
            <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold mb-4 bg-gradient-to-r from-tertiary-500/15 to-secondary-500/15 text-tertiary-200 border-tertiary-500/30 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 mr-2" />
              {"2.7"}x more brand replies on Mediaweb
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-[1.1] flex flex-col">
              <span className="text-white">Land more </span>
              <span className="text-secondary-400">
                brand deals
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl">
              Brands decide in 5 seconds whether to reply. Make your portfolio
              the reason they say yes.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-7 max-w-xl">
              {bullets.map((b) => (
                <li key={b.lead} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-300" />
                  </span>
                  <span className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">{b.lead}</span>{" "}
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="https://dashboard.mediaweb.app/register"
                className="inline-flex items-center gap-2 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 font-semibold shadow-xl shadow-primary-500/25"
              >
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-gray-400 text-sm leading-tight">
                Try for free.
                <br />
                Cancel anytime.
              </p>
            </div>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              {featurePills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-xs hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — staggered template collage */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-5 w-full lg:max-w-lg mx-auto">
              {collage.map((item) => (
                <div
                  key={item.label}
                  className={`relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-600 shadow-2xl group transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${item.className}`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 pt-10">
                    <p className="text-white font-semibold text-sm md:text-base">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial proof bar */}
        {/* TODO: replace with real early-creator quotes; confirm attribution level with each creator before shipping */}
        <div className="mt-10 lg:mt-12 pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl flex space-between">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-200 text-base text-center leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-gray-500 text-sm mt-3">
                  — {t.name}, {t.niche}
                  {t.handle && (
                    <span className="text-gray-600"> · {t.handle}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
