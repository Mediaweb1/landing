import React, { useEffect, useRef } from "react";
import { startLineFadeAnimation } from "../utils/start-line-animation";

const GenerateCircle = ({
  diameter,
  strokeWidth = 2,
  delay = 1000,
  duration = 2000,
  currentAnimation,
  selector,
}: {
  diameter: number;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
  currentAnimation?: string;
  selector?: string;
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (currentAnimation === selector) {
      setTimeout(() => {
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength();
          pathRef.current.style.transition = "none";
          pathRef.current.style.strokeDasharray = `${length} ${length}`;
          pathRef.current.style.strokeDashoffset = `${length}`;
          pathRef.current.style.opacity = "1";

          startLineFadeAnimation(pathRef.current, delay, duration);
        }
      }, 0);
    }
  }, [delay, duration, currentAnimation, selector]);

  /* const radius = diameter / 2;
  const centerX = radius;
  const centerY = radius;

  const circlePath = `
    M ${centerX}, ${centerY - radius}
    A ${radius},${radius} 0 1,1 ${centerX - 0.01},${centerY - radius}
  `; */

  const padding = strokeWidth / 2;
  const radius = (diameter - strokeWidth) / 2; // Adjust radius for padding
  const centerX = radius + padding;
  const centerY = radius + padding;

  const circlePath = `
    M ${centerX}, ${centerY - radius}
    A ${radius},${radius} 0 1,1 ${centerX - 0.01},${centerY - radius}
  `;

  return (
    <svg
      className="absolute max-w-full"
      viewBox={`0 0 ${diameter} ${diameter}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        stroke="url(#circleGradient)"
        strokeWidth={strokeWidth}
        className="stroke-primary opacity-0"
        fill="none"
        d={circlePath}
      />
    </svg>
  );
};

export default GenerateCircle;