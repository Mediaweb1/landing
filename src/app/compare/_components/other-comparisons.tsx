import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ALL_COMPARISONS = [
  {
    slug: "linktree",
    name: "Linktree",
    pitch: "Link-in-bio, but with a real portfolio behind it.",
    gradient: "from-green-400 to-teal-400",
    border: "hover:border-green-500/40",
  },
  {
    slug: "beacons",
    name: "Beacons",
    pitch: "More than monetization — a portfolio brands take seriously.",
    gradient: "from-purple-400 to-blue-400",
    border: "hover:border-purple-500/40",
  },
  {
    slug: "mediakits-io",
    name: "MediaKits.io",
    pitch: "Everything they do, plus a full portfolio.",
    gradient: "from-pink-400 to-purple-400",
    border: "hover:border-pink-500/40",
  },
  {
    slug: "lovable",
    name: "Lovable",
    pitch: "Built for creators, not developers.",
    gradient: "from-orange-400 to-pink-400",
    border: "hover:border-orange-500/40",
  },
];

export function OtherComparisons({ exclude }: { exclude: string }) {
  const items = ALL_COMPARISONS.filter((c) => c.slug !== exclude);

  return (
    <div className="mt-12 border-t border-slate-700/50 pt-10">
      <h3 className="text-lg font-semibold text-gray-400 mb-5">
        Other comparisons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className={`group bg-slate-800/50 border border-slate-700/50 ${c.border} rounded-lg backdrop-blur-xs p-6 transition-all hover:shadow-lg`}
          >
            <h4 className="text-xl font-bold text-white mb-1">
              vs{" "}
              <span
                className={`bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}
              >
                {c.name}
              </span>
            </h4>
            <p className="text-sm text-gray-400 mb-3">{c.pitch}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 group-hover:gap-2 transition-all">
              Read comparison
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
