import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative h-8 w-full bg-gradient-to-r from-transparent via-primary-500/15 to-transparent">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <Link
        href="/pricing"
        className="relative h-full flex items-center justify-center gap-2 text-[13px] font-medium text-gray-300 hover:text-white transition-colors px-4 group"
      >
        <span aria-hidden className="text-primary-300">✦</span>
        <span className="hidden sm:inline">
          <span className="font-semibold text-white">14-day free trial</span>
          <span className="text-gray-500 mx-2">—</span>
          Plans starting at $20/mo. No charge until your trial ends.
        </span>
        <span className="sm:hidden">
          <span className="font-semibold text-white">14-day free trial</span>
          <span className="text-gray-500 mx-1.5">—</span>
          Plans from $20/mo
        </span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
