import React, { useEffect, useRef } from "react";
import { startLineAnimation } from "../utils/start-line-animation";

const generatePath = (
  startBox: any,
  endBox: any,
  container: any,
  radius: number,
  blockSize: any
) => {
  const startBoxRect = startBox.getBoundingClientRect();
  const endBoxRect = endBox.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const startX =
    startBoxRect.left + startBoxRect.width / 2 - containerRect.left;
  const startY = startBoxRect.top + startBoxRect.height / 2 - containerRect.top;
  const endX = endBoxRect.left + endBoxRect.width / 2 - containerRect.left;
  const endY = endBoxRect.top + endBoxRect.height / 2 - containerRect.top;

  let path = "";

  if (startY === endY) {
    path += `M ${startX + blockSize / 2}, ${startY}`;
    path += `L ${endX - blockSize / 2}, ${endY}`;
  } else if (startX === endX) {
    if (startY > endY) {
      path += `M ${startX}, ${startY - blockSize / 2}`;
      path += `L ${endX}, ${endY + blockSize / 2}`;
    } else {
      path += `M ${startX}, ${startY + blockSize / 2}`;
      path += `L ${endX}, ${endY - blockSize / 2}`;
    }
  } else if (Math.abs(endX - startX) < Math.abs(endY - startY)) {
    if (startY > endY) {
      if (startX > endX) {
        console.log("1");
        path += `M ${startX - blockSize / 2}, ${startY}`;
        path += `L ${endX + radius},${startY} `;
        path += `Q ${endX},${startY} ${endX},${startY - radius} `;
        path += `L ${endX}, ${endY + blockSize / 2}`;
      } else {
        console.log("2");
        path += `M ${startX + blockSize / 2}, ${startY}`;
        path += `L ${endX - radius},${startY} `;
        path += `Q ${endX},${startY} ${endX},${startY - radius} `;
        path += `L ${endX}, ${endY + blockSize / 2}`;
      }
    } else {
      console.log("3 / 4");
      path += `M ${startX - blockSize / 2},${startY} `;
      path += `L ${endX + radius},${startY} `;
      path += `Q ${endX},${startY} ${endX},${startY + radius} `;
      path += `L ${endX}, ${endY - blockSize / 2}`;
    }
  } else {
    if (startY > endY) {
      if (startX > endX) {
        console.log("5");
        path += `M ${startX},${startY - blockSize / 2} `;
        path += `L ${startX},${endY + radius} `;
        path += `Q ${startX}, ${endY}, ${startX - radius} ${endY}`;
        path += `L ${endX + endBoxRect.width / 2}, ${endY}`;
      } else {
        console.log("6");
        path += `M ${startX},${startY - blockSize / 2} `;
        path += `L ${startX},${endY + radius} `;
        path += `Q ${startX}, ${endY}, ${startX + radius} ${endY}`;
        path += `L ${endX - endBoxRect.width / 2}, ${endY}`;
      }
    } else {
      if (startX > endX) {
        console.log("7");
        path += `M ${startX},${startY + blockSize / 2} `;
        path += `L ${startX},${endY - radius} `;
        path += `Q ${startX}, ${endY}, ${startX - radius} ${endY}`;
        path += `L ${endX + endBoxRect.width / 2}, ${endY}`;
      } else {
        console.log("8");
        path += `M ${startX},${startY + blockSize / 2} `;
        path += `L ${startX},${endY - radius} `;
        path += `Q ${startX}, ${endY}, ${startX + radius} ${endY}`;
        path += `L ${endX - endBoxRect.width / 2}, ${endY}`;
      }
    }
  }
  return path;
};

const GenerateLine = ({
  container,
  startBox,
  endBox,
  id,
  isActive,
  radius,
  blockSize,
  lineDelay,
  lineDuration,
}: any) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (startBox && endBox && container) {
      let path = "";

      path += generatePath(startBox, endBox, container, radius, blockSize);

      if (pathRef.current) {
        pathRef.current.setAttribute("d", path);
      }
    }
  }, [startBox, endBox, container, radius]);

  useEffect(() => {
    if (isActive && pathRef.current) {
      startLineAnimation(pathRef.current, lineDelay, lineDuration);
    }
  }, [isActive, lineDelay, lineDuration]);

  return (
    <svg className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none">
      <path
        ref={pathRef}
        stroke="url(#line1)"
        strokeWidth="2"
        fill="none"
        className="stroke-primary"
      />
    </svg>
  );
};

export default GenerateLine;
