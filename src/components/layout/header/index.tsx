"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { NavigationMenuComponent } from "./navigation-menu";
import { MobileSidebar } from "./mobile-sidebar";

export default function Header() {
  return (
    <nav className="absolute w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <MobileSidebar />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex relative z-60">
          <NavigationMenuComponent />
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://dashboard.mediaweb.app/register"
            className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white border-0 shadow-lg shadow-primary-500/25 px-6 py-2 rounded-md font-medium transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
