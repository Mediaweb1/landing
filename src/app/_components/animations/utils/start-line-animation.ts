export const startLineAnimation = (
  path: SVGPathElement,
  delay: number,
  duration: number
) => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = `${length} ${length}`;
  path.style.strokeDashoffset = `${length}`;

  setTimeout(() => {
    path.style.transition = `stroke-dashoffset ${duration}ms ease-in`;
    path.style.strokeDashoffset = "0";

    setTimeout(() => {
      path.style.transition = `stroke-dashoffset ${duration / 2}ms ease-in`;
      path.style.strokeDashoffset = `-${length}`;

      setTimeout(() => {
        path.style.transition = "none";
        path.style.strokeDashoffset = `${length}`;
      }, duration / 2);
    }, duration * 2);
  }, delay);
};

export const startLineFadeAnimation = (
  path: any,
  delay: number,
  duration: number
) => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.opacity = "0";

  setTimeout(() => {
    path.style.transition = `stroke-dashoffset ${duration}ms ease-out`;
    path.style.strokeDashoffset = "0";
    path.style.opacity = "1";

    setTimeout(() => {
      path.style.transition = "none";

      setTimeout(() => {
        path.style.transition = `opacity ${duration / 2}ms ease-out`;
        path.style.opacity = "0";

        setTimeout(() => {
          path.style.transition = "none";
          path.style.strokeDashoffset = length;
          path.style.opacity = "1";
        }, 1000);
      }, 500);
    }, duration * 2);
  }, delay);
};
