"use client";

import { useEffect, useRef } from "react";
import { startLineFadeAnimation } from "../utils/start-line-animation";

const GenerateBox = ({
  viewport,
  strokeWidth = 2,
  delay = 1000,
  duration = 2000,
  radius,

  currentAnimation,
  selector,
}: {
  viewport: any;
  strokeWidth: number;
  delay?: number;
  duration?: number;
  radius: number;

  currentAnimation?: string;
  selector?: string;
}) => {
  const pathRef = useRef<any>(null);

  useEffect(() => {
    // Only animate if the current animation is the selector
    if (currentAnimation === selector) {
      setTimeout(() => {
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength();
          pathRef.current.style.transition = "none";
          pathRef.current.style.strokeDasharray = `${length} ${length}`;
          pathRef.current.style.strokeDashoffset = `${length}`;
          pathRef.current.style.opacity = "1";

          // Start animation
          startLineFadeAnimation(pathRef.current, delay, duration);
        }
      }, 0);
    }
  }, [viewport, delay, duration, currentAnimation, selector]);

  /* useEffect(() => {
    if (currentAnimation === selector) {
      setTimeout(() => {
        startLineFadeAnimation(pathRef.current, delay, duration);
      }, 0);
    }
  }, [pathRef, duration]); */

  return (
    <svg
      className={`absolute max-w-full`}
      style={{ width: `${viewport.width}px`, height: `${viewport.height}px` }}
      viewBox={`0 0 ${viewport.width} ${viewport.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        stroke="url(#lineGradient)"
        strokeWidth={strokeWidth}
        className="stroke-primary opacity-0"
        fill="none"
        d={`
        M${radius},${strokeWidth / 2}
        L${viewport.width - radius - strokeWidth / 2}, ${strokeWidth / 2}
        Q${viewport.width - strokeWidth / 2}, ${strokeWidth / 2}, ${
          viewport.width - strokeWidth / 2
        } , ${radius}
        L${viewport.width - strokeWidth / 2}, ${viewport.height - radius}
        Q${viewport.width - strokeWidth / 2} ${
          viewport.height - strokeWidth / 2
        }, 
        ${viewport.width - radius}, ${viewport.height - strokeWidth / 2}

        L${radius},  ${viewport.height - strokeWidth / 2}
        Q${strokeWidth / 2}, ${viewport.height - strokeWidth / 2}, 
        ${strokeWidth / 2}, ${viewport.height - radius}
        L${strokeWidth / 2}, ${radius}

        Q${strokeWidth / 2} ${strokeWidth / 2}, 
        ${radius} ${strokeWidth / 2}

      `}
      />
    </svg>
  );
};

export default GenerateBox;

export const GenerateTwoLineBox = ({
  viewport,
  strokeWidth = 2,
  delay = 1000,
  duration = 2000,
  radius,
  className,
}: {
  viewport: any;
  strokeWidth: number;
  delay?: number;
  duration?: number;
  radius: number;
  className?: string
}) => {
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      startLineFadeAnimation(pathRef1.current, delay, duration);
      startLineFadeAnimation(pathRef2.current, delay, duration);
    }, 0);
  }, [pathRef1, pathRef2, duration]);

  return (
    <svg
      className={`absolute max-w-full ${className}`}
      style={{ width: `${viewport.width}px`, height: `${viewport.height}px` }}
      viewBox={`0 0 ${viewport.width} ${viewport.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {
        <path
          ref={pathRef1}
          stroke="url(#lineGradient1)"
          strokeWidth={strokeWidth}
          className="stroke-primary opacity-0"
          fill="none"
          d={`
        M${strokeWidth / 2},${viewport.height / 2}
        L${strokeWidth / 2}, ${radius}

        Q${strokeWidth / 2} ${strokeWidth / 2}, 
        ${radius} ${strokeWidth / 2}

        L${viewport.width - radius}, ${strokeWidth / 2}

        Q${viewport.width - strokeWidth / 2}, ${strokeWidth / 2}, 
        ${viewport.width - strokeWidth / 2}, ${radius}
        
        L${viewport.width - strokeWidth / 2}, ${viewport.height / 2}
      `}
        />
      }
      <path
        ref={pathRef2}
        stroke="url(#lineGradient2)"
        strokeWidth={strokeWidth}
        className="stroke-primary opacity-0"
        fill="none"
        d={`
        M${strokeWidth / 2},${viewport.height / 2}
        L${strokeWidth / 2}, ${viewport.height - radius}

        Q${strokeWidth / 2}, ${viewport.height - strokeWidth / 2}, 
        ${radius}, ${viewport.height - strokeWidth / 2}
        L${viewport.width - radius}, ${viewport.height - strokeWidth / 2}

        Q${viewport.width - strokeWidth / 2} ${
          viewport.height - strokeWidth / 2
        },
        ${viewport.width - strokeWidth / 2}, ${viewport.height - radius}
        L${viewport.width - strokeWidth / 2}, ${viewport.height / 2}

      `}
      />
    </svg>
  );
};

/* L${viewport.width - strokeWidth / 2}, ${viewport.height - radius}
        Q${viewport.width - strokeWidth / 2} ${
          viewport.height - strokeWidth / 2
        }, 
        ${viewport.width - radius}, ${viewport.height - strokeWidth / 2}

        L${radius},  ${viewport.height - strokeWidth / 2}
        Q${strokeWidth / 2}, ${viewport.height - strokeWidth / 2}, 
        ${strokeWidth / 2}, ${viewport.height - radius}
        

        
 */
