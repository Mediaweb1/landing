"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Files,
  Play,
  Plus,
  RotateCw,
  Search,
  Share,
} from "lucide-react";

const VideoSection = ({ cdnUrl }: { cdnUrl: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => {
      setShowPlayButton(false);
    };

    video.addEventListener("playing", handlePlaying);

    // Try to autoplay — if it fails, show the play button
    video.play().catch(() => {
      setShowPlayButton(true);
    });

    return () => {
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
    setShowPlayButton(false);
  };

  return (
    <section id="video-section" className="relative px-6 py-6 lg:py-16">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="w-full flex flex-col border-2 border-border bg-muted p-1 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
          <div className="w-full bg-background rounded-[16px]">

            <div className="w-full rounded-t-2xl bg-primary-800/60 border border-primary-900 text-primary-foreground shadow-sm h-7 md:h-10 px-3 flex justify-between">
              <div className="w-1/4 h-full flex md:space-x-6 items-center">
                <div className="h-full hidden md:flex space-x-1.5 md:space-x-2 items-center">
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-[50%] bg-red-500" />
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-[50%] bg-yellow-500" />
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-[50%] bg-green-500" />
                </div>
                <div className="h-full flex space-x-1.5 md:space-x-2 items-center">
                  <ChevronLeft className="text-white w-[12px] h-[12px] md:w-5 md:h-5" />
                  <ChevronRight className="text-white  w-[12px] h-[12px] md:w-5 md:h-5" />
                </div>
              </div>

              <div className="h-full w-3/5 md:w-1/2 flex space-x-2 items-center transform -translate-x-6">
                <RotateCw className="text-white w-[12px] h-[12px] md:w-[18px] md:h-[18px]" />
                <div className="w-full h-6 bg-primary-senary rounded-md flex items-center justify-center space-x-2 pr-4">
                  <Search size={12} className="text-white" />
                  <p className="text-[9px] md:text-[11px] text-white">https://mediaweb.app</p>
                </div>
              </div>

              <div className="w-1/4 h-full flex space-x-2 items-center justify-end">
                <Share className="text-white  w-[12px] h-[12px] md:w-[18px] md:h-[18px]" />
                <Plus className="text-white  w-[12px] h-[12px] md:w-[22px] md:h-[22px]" />
                <Files className="text-white  w-[12px] h-[12px] md:w-[18px] md:h-[18px]" />
              </div>
            </div>

            <div className="relative">
              <video
                ref={videoRef}
                src={`${cdnUrl}/mediaweb/landing-page-video-2.mp4`}
                autoPlay
                muted
                loop
                playsInline
                poster={`${cdnUrl}/mediaweb/landing-page-video-2-cover.webp`}
                className="w-full h-auto rounded-b-2xl relative z-10 shadow-2xl shadow-white/10 drop-shadow-2xl"
                style={{
                  filter:
                    "drop-shadow(0 25px 50px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.15))",
                }}
              />

              {showPlayButton && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 rounded-b-2xl transition-opacity"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-slate-900 ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
