"use client";

import { HardDrive, Shield, Zap, Globe, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Card } from "@mediaweb1/sdk/shadcn";
import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

const FileStorage = () => {
  return (
    <section id="aws-storage" className="relative px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-400/40 backdrop-blur-xs p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium">AWS S3 Storage</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                    <span className="text-emerald-100 text-sm">Connected</span>
                  </div>
                </div>

                {/* File Storage Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-emerald-400/20 rounded-lg p-3 border border-emerald-300/40">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mb-2">
                        <HardDrive className="w-4 h-4 text-white" />
                      </div>
                      <div className="h-2 bg-emerald-300/40 rounded w-full mb-1"></div>
                      <div className="h-1 bg-emerald-300 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-200">99.99%</div>
                    <div className="text-xs text-emerald-100">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-teal-200">Global</div>
                    <div className="text-xs text-teal-100">CDN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-200">∞</div>
                    <div className="text-xs text-emerald-100">Scalable</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <HardDrive className="w-6 h-6 text-white" />
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                AWS S3 Storage
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Secure, Scalable File Hosting
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Your media files are securely stored and delivered globally through AWS S3 with CloudFront CDN, ensuring maximum speed, security, and reliability for your portfolio.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Enterprise-grade security with AWS S3</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Global CDN for blazing-fast delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Automatic optimization & caching</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-gray-300">Unlimited scalability</span>
              </div>
            </div>

            <Link href="https://dashboard.mediaweb.app/register">
              <Button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg"
              >
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

export default FileStorage;
