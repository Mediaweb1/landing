"use client";

import { useEffect, useLayoutEffect } from "react";

const useViewPort = (setViewport: any, ref: any) => {
  useLayoutEffect(() => {

    const updateViewport = () => {
      if (ref && ref.current) {
        if (
          typeof ref.current.offsetWidth !== null &&
          typeof ref.current.offsetHeight !== null
        ) {
          setViewport({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight,
          });
        }
      }
    };

    updateViewport();
    /* setTimeout(() => {
        updateViewport();
      }, 1000); */

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, [ref, ref.current]);
};

export default useViewPort;
