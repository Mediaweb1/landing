import {
  Code,
  Palette,
  Settings,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@mediaweb1/sdk/shadcn";
import { Card } from "@mediaweb1/sdk/shadcn";

const Sandbox = () => {
  return (
    <section className="relative px-6 py-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Full Control in{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Your Hands
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              While our AI makes building effortless, you're never locked in.
              Access the full power of our visual builder, customize every
              detail, and take complete control whenever you need it.
            </p>
          </div>

          {/* Features Section - Above Image */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Powerful Tools at Your Fingertips
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              <Card className="p-6 group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl cursor-pointer">
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  Visual Editor
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  Drag, drop, and customize with precision
                </p>
              </Card>

              <Card className="p-6 group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl cursor-pointer">
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  Theme Studio
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  Brand colors, fonts, and styling
                </p>
              </Card>

              <Card className="p-6 group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl cursor-pointer">
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  Advanced Settings
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  SEO, analytics, and custom code
                </p>
              </Card>

              <Card className="p-6 group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-xs hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-2xl cursor-pointer">
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  Real-time Preview
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  See changes instantly across devices
                </p>
              </Card>
            </div>
          </div>

          {/* Image Section - Large Width with Hover Overlay */}
          <div className="flex justify-center">
            <div className="relative group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <img
                  src="/images/website-builder.webp"
                  alt="Website Builder Sandbox"
                  className="w-full transition-all duration-500 group-hover:blur-sm"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <ExternalLink className="w-12 h-12 mx-auto text-primary-400" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Try the Sandbox
                      </h3>
                      <p className="text-gray-200">
                        Experience the full builder yourself
                      </p>
                    </div>
                    <Link href="https://editor.mediaweb.app/sandbox">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-slate-900"
                      >
                        Open Sandbox
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary-500/30 rounded-full blur-md animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link href="https://dashboard.mediaweb.app/register">
              <Button className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-3 text-lg">
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

export default Sandbox;
