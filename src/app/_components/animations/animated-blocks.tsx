"use client";

import { useRef, useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

import GenerateLine from "./lines/generate-line";
import IconBox from "./icon-box";
import useViewPort from "./utils/use-viewport";
import { useDualBlockAnimation } from "./utils/use-dual-block-animation";
import { cn } from "@/lib/utils";

const selector = "intro";

const pattern = [
  {
    startBox: 0,
    endBox: 1,
    delay: 0,
    delay2: 0,
  },
  {
    startBox: 1,
    endBox: 2,
    delay: 2000,
    delay2: 0,
  },
  {
    startBox: 2,
    endBox: 3,
    delay: 2000,
    delay2: 0,
  },
  {
    startBox: 3,
    endBox: 4,
    delay: 2000,
    delay2: 0,
  },
  {
    startBox: 4,
    endBox: 5,
    delay: 2000,
    delay2: 0,
  },
];

const initialLinesState: LineState[] = [
  { startBox: null, endBox: null, isActive: false },
  { startBox: null, endBox: null, isActive: false },
  { startBox: null, endBox: null, isActive: false },
  { startBox: null, endBox: null, isActive: false },
  { startBox: null, endBox: null, isActive: false },
  { startBox: null, endBox: null, isActive: false },
];

const LINE_DELAY = 500;
const LINE_DURATION = 750;

const BLOCK_ANIMATION = 350;
const BLOCK_DURATION = 4000;

interface LineState {
  startBox: HTMLDivElement | null;
  endBox: HTMLDivElement | null;
  isActive: boolean;
}

const AnimatedBlocks = ({ currentAnimation }: { currentAnimation: string }) => {
  const containerRef = useRef(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centralHubRef = useRef<HTMLDivElement>(null);

  const [viewport, setViewport] = useState({ width: 600, height: 500 });
  useViewPort(setViewport, containerRef);

  const [lines, setLines] = useState(initialLinesState);

  const activateLine = (startIndex: number, endIndex: number) => {
    setLines((prevLines) =>
      prevLines.map((line, index) =>
        index === startIndex
          ? {
              ...line,
              startBox: iconRefs.current[startIndex],
              endBox: centralHubRef.current,
              isActive: true,
            }
          : line
      )
    );
  };

  const deactivateLine = (startIndex: number) => {
    setLines((prevLines) =>
      prevLines.map((line, index) =>
        index === startIndex ? { ...line, isActive: false } : line
      )
    );
  };

  const resetLines = () => {
    setLines(initialLinesState);
  };

  useDualBlockAnimation(
    iconRefs,
    pattern,
    activateLine,
    deactivateLine,
    resetLines,
    LINE_DELAY,
    LINE_DURATION,
    BLOCK_DURATION,
    currentAnimation,
    selector
  );

  return (
    <div
      className={cn(
        "relative w-full max-w-full sm:max-w-[600px] max-h-[500px] h-full flex justify-center items-center",
        currentAnimation === selector ? "z-10" : "z-0"
      )}
      id="animation-container"
      ref={containerRef}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-400/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {currentAnimation === selector &&
        lines.map((line, index) => (
          <GenerateLine
            key={index}
            id={index}
            blockSize={
              typeof window !== "undefined"
                ? window.innerWidth < 475
                  ? 48
                  : window.innerWidth < 640
                  ? 56
                  : 70
                : 70
            }
            container={containerRef.current}
            startBox={line.startBox}
            endBox={line.endBox}
            radius={
              typeof window !== "undefined"
                ? window.innerWidth < 475
                  ? 12
                  : window.innerWidth < 640
                  ? 14
                  : 16
                : 16
            }
            isActive={line.isActive}
            viewport={viewport}
            lineDuration={750}
            lineDelay={500}
          />
        ))}

      <div
        ref={centralHubRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary-500/30 to-secondary-500/30 backdrop-blur-xs border border-primary-400/50 animate-spin-slow"></div>

          {/* Middle Ring */}
          <div className="absolute inset-2 rounded-full bg-linear-to-r from-secondary-500/40 to-primary-500/40 backdrop-blur-xs border border-secondary-400/50 animate-pulse"></div>

          {/* Inner Core */}
          <div className="absolute inset-4 rounded-full bg-linear-to-r from-primary-600 to-secondary-600 backdrop-blur-xs border border-white/20 flex items-center justify-center shadow-lg shadow-primary-500/25">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
          <div
            className="absolute -bottom-1 -right-1 w-2 h-2 bg-secondary-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-primary-300 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2">
        <IconBox
          currentAnimation={currentAnimation}
          id="facebook"
          selector={selector}
          ref={(el) => { iconRefs.current[0] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-blue-400/30 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Facebook className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-blue-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-blue-400/30">
                Facebook
              </span>
            </div>
          </div>
        </IconBox>
      </div>

      <div className="absolute bottom-[8%] left-[15%]">
        <IconBox
          currentAnimation={currentAnimation}
          id="instagram"
          selector={selector}
          ref={(el) => { iconRefs.current[1] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-pink-400/30 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-pink-500/20 via-purple-500/15 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-linear-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-pink-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-pink-400/30">
                Instagram
              </span>
            </div>
          </div>
        </IconBox>
      </div>

      <div className="absolute top-[30%] left-[5%]">
        <IconBox
          currentAnimation={currentAnimation}
          id="tiktok"
          selector={selector}
          ref={(el) => { iconRefs.current[2] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-red-400/30 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-red-500/20 via-pink-500/15 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-12 h-12 text-red-400 group-hover:text-red-300 transition-colors duration-300"
                >
                  <path d="M 32.78125 16 L 38.275391 16 C 38.266721 16 38.210919 16.525885 38.349609 17.339844 L 38.341797 17.339844 C 38.507788 18.320459 38.959422 19.720964 40.166016 21.101562 A 8.8574793 8.8575582 0 0 0 41.783203 22.476562 A 7.2842381 7.2843028 0 0 0 42.414062 22.84375 C 43.819312 23.544381 45.19123 23.756924 45.867188 23.683594 L 45.867188 29.140625 C 45.867188 29.140625 43.937775 29.059668 42.505859 28.679688 C 40.509978 28.145715 39.230469 27.326172 39.230469 27.326172 C 39.230469 27.326172 38.342051 26.739219 38.275391 26.699219 L 38.275391 37.972656 C 38.275391 38.599293 38.110585 40.16734 37.613281 41.474609 A 10.563379 10.563472 0 0 1 35.769531 44.537109 C 35.769531 44.537109 34.543209 46.057509 32.388672 47.078125 C 30.446121 47.998744 28.737199 47.977377 28.226562 47.998047 C 28.226563 47.998047 25.275743 48.116502 22.615234 46.308594 L 22.601562 46.294922 L 22.601562 46.308594 A 11.168009 11.168108 0 0 1 20.220703 44.0625 C 19.378754 42.988556 18.86184 41.71511 18.728516 41.341797 L 18.728516 41.328125 C 18.516528 40.694159 18.072012 39.16028 18.138672 37.679688 C 18.244666 35.071156 19.121529 33.464433 19.353516 33.064453 A 10.785366 10.785461 0 0 1 21.705078 30.162109 A 10.208733 10.208824 0 0 1 29.572266 27.861328 L 29.566406 33.457031 A 4.5930634 4.5931041 0 0 0 28.138672 33.230469 C 25.578158 33.230469 23.501953 35.319903 23.501953 37.898438 C 23.501953 40.476973 25.578158 42.564453 28.138672 42.564453 A 4.5863967 4.5864374 0 0 0 30.412109 41.964844 A 4.6663919 4.6664333 0 0 0 32.759766 38.259766 L 32.759766 38.248047 C 32.763066 38.232047 32.763672 38.216512 32.763672 38.201172 C 32.765672 38.163839 32.769531 38.132316 32.769531 38.097656 C 32.781531 37.819002 32.78125 37.535319 32.78125 37.25 L 32.78125 16 z"></path>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-red-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-red-400/30">
                TikTok
              </span>
            </div>
          </div>
        </IconBox>
      </div>

      {/* Snapchat - Right Center */}
      <div className="absolute top-[35%] right-[5%]">
        <IconBox
          currentAnimation={currentAnimation}
          id="snapchat"
          selector={selector}
          ref={(el) => { iconRefs.current[3] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-yellow-400/30 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-yellow-500/20 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-12 h-12 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                >
                  <path d="M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z"></path>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-yellow-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-yellow-400/30">
                Snapchat
              </span>
            </div>
          </div>
        </IconBox>
      </div>

      {/* YouTube - Bottom Right */}
      <div className="absolute bottom-[8%] right-[15%]">
        <IconBox
          currentAnimation={currentAnimation}
          id="youtube"
          selector={selector}
          ref={(el) => { iconRefs.current[4] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-red-400/30 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-red-500/20 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-300 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-red-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-red-400/30">
                YouTube
              </span>
            </div>
          </div>
        </IconBox>
      </div>

      {/* X (Twitter) - Top Right */}
      <div className="absolute top-[8%] right-[15%]">
        <IconBox
          currentAnimation={currentAnimation}
          id="x"
          selector={selector}
          ref={(el) => { iconRefs.current[5] = el; }}
        >
          <div className="relative group">
            <div className="relative w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xs border border-slate-400/30 shadow-lg shadow-slate-500/20 group-hover:shadow-slate-500/40 transition-all duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-linear-to-br from-slate-500/20 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-12 w-12 text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                >
                  <path d="M 16 17.537109 L 26.125 17.537109 L 33.117188 26.779297 L 41.201172 17.537109 L 46.109375 17.537109 L 35.388672 29.789062 L 48 46.462891 L 38.125 46.462891 L 30.390625 36.351562 L 21.541016 46.462891 L 16.632812 46.462891 L 28.097656 33.357422 L 16 17.537109 z M 21.730469 20.320312 L 39.480469 43.525391 L 42.199219 43.525391 L 24.648438 20.320312 L 21.730469 20.320312 z"></path>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-300 rounded-full animate-ping"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-slate-300 bg-slate-800/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-slate-400/30 whitespace-nowrap">
                X (Twitter)
              </span>
            </div>
          </div>
        </IconBox>
      </div>
    </div>
  );
};

export default AnimatedBlocks;
