import { useEffect, useLayoutEffect, useRef } from "react";

const calculateColor = (id: string) => {
  switch (id) {
    case "facebook":
      return {
        background: "#1877F2",
        border: "#1877F2",
        stroke: "#1877F2",
        fill: "#ffffff",
      };
    case "instagram":
      return {
        background:
          "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
        border: "hsl(var(--background))",
        stroke: "#ffffff",
        fill: "#ffffff !important",
      };
    case "youtube":
      return {
        background: "#FF0000",
        border: "#FF0000",
        stroke: "#ffffff",
        fill: "#ffffff",
        fill2: "#FF0000",
      };
    case "snapchat":
      return {
        background: "fffc00",
        border: "hsl(var(--background))",
        stroke: "#000000",
        fill: "#ffffff",
      };

    case "tiktok":
      return {
        background: "#000000",
        border: "#000000",
        stroke: "#ffffff",
        fill: "#ffffff",
      };
    default:
      return {
        background: "#000000",
        border: "#000000",
        stroke: "#ffffff",
        fill: "#ffffff",
      };
  }
};

export const setActiveStyles = (block: any) => {
  if (!block || !block.style || !block.id) return;
  
  try {
    // Apply the same hover-like effects for active state
    block.style.transform = "scale(1.1)";
    block.style.transition = "all 500ms ease-in-out";
    
    // Find the glassmorphism container (the div with the gradient background)
    const groupDiv = block.querySelector('.group');
    if (groupDiv) {
      const glassContainer = groupDiv.querySelector('div[class*="w-[72px]"]');
      if (glassContainer) {
        // Apply enhanced shadow based on platform
        if (block.id === 'facebook') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.1)';
        } else if (block.id === 'instagram') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(236, 72, 153, 0.4), 0 10px 10px -5px rgba(236, 72, 153, 0.1)';
        } else if (block.id === 'tiktok') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(239, 68, 68, 0.4), 0 10px 10px -5px rgba(239, 68, 68, 0.1)';
        } else if (block.id === 'snapchat') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.4), 0 10px 10px -5px rgba(251, 191, 36, 0.1)';
        } else if (block.id === 'youtube') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(239, 68, 68, 0.4), 0 10px 10px -5px rgba(239, 68, 68, 0.1)';
        } else if (block.id === 'x') {
          glassContainer.style.boxShadow = '0 20px 25px -5px rgba(148, 163, 184, 0.4), 0 10px 10px -5px rgba(148, 163, 184, 0.1)';
        }
        
        // Apply the gradient overlay effect
        const gradientOverlay = glassContainer.querySelector('div[class*="absolute inset-0 rounded-2xl bg-gradient"]');
        if (gradientOverlay) {
          gradientOverlay.style.opacity = '1';
          gradientOverlay.style.transition = 'opacity 500ms ease-in-out';
        }
        
        // Apply icon color changes
        const iconContainer = glassContainer.querySelector('div[class*="absolute inset-0 flex items-center justify-center"]');
        if (iconContainer) {
          const icon = iconContainer.querySelector('svg, [class*="lucide"]');
          if (icon) {
            if (block.id === 'facebook') {
              icon.style.color = 'rgb(147, 197, 253)'; // blue-300
            } else if (block.id === 'instagram') {
              icon.style.color = 'rgb(244, 114, 182)'; // pink-300
            } else if (block.id === 'tiktok') {
              icon.style.color = 'rgb(252, 165, 165)'; // red-300
            } else if (block.id === 'snapchat') {
              icon.style.color = 'rgb(253, 224, 71)'; // yellow-300
            } else if (block.id === 'youtube') {
              icon.style.color = 'rgb(252, 165, 165)'; // red-300
            } else if (block.id === 'x') {
              icon.style.color = 'rgb(203, 213, 225)'; // slate-300
            }
            icon.style.transition = 'color 300ms ease-in-out';
          }
        }
      }
      
      // Show the label
      const label = groupDiv.querySelector('div[class*="absolute -bottom-8"]');
      if (label) {
        label.style.opacity = '1';
        label.style.transition = 'opacity 300ms ease-in-out';
      }
    }
  } catch (error) {
    console.warn('Error in setActiveStyles:', error);
  }
};

export const setInactiveStyles = (block: any) => {
  if (!block || !block.style || !block.id) return;
  
  try {
    block.style.transform = "scale(1)";
    block.style.transition = "all 500ms ease-out";

    // Find the glassmorphism container and reset styles
    const groupDiv = block.querySelector('.group');
    if (groupDiv) {
      const glassContainer = groupDiv.querySelector('div[class*="w-[72px]"]');
      if (glassContainer) {
        // Reset shadow to original
        if (block.id === 'facebook') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -2px rgba(59, 130, 246, 0.05)';
        } else if (block.id === 'instagram') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(236, 72, 153, 0.2), 0 4px 6px -2px rgba(236, 72, 153, 0.05)';
        } else if (block.id === 'tiktok') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(239, 68, 68, 0.2), 0 4px 6px -2px rgba(239, 68, 68, 0.05)';
        } else if (block.id === 'snapchat') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(251, 191, 36, 0.2), 0 4px 6px -2px rgba(251, 191, 36, 0.05)';
        } else if (block.id === 'youtube') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(239, 68, 68, 0.2), 0 4px 6px -2px rgba(239, 68, 68, 0.05)';
        } else if (block.id === 'x') {
          glassContainer.style.boxShadow = '0 10px 15px -3px rgba(148, 163, 184, 0.2), 0 4px 6px -2px rgba(148, 163, 184, 0.05)';
        }
        
        // Hide the gradient overlay
        const gradientOverlay = glassContainer.querySelector('div[class*="absolute inset-0 rounded-2xl bg-gradient"]');
        if (gradientOverlay) {
          gradientOverlay.style.opacity = '0';
          gradientOverlay.style.transition = 'opacity 500ms ease-in-out';
        }
        
        // Reset icon colors
        const iconContainer = glassContainer.querySelector('div[class*="absolute inset-0 flex items-center justify-center"]');
        if (iconContainer) {
          const icon = iconContainer.querySelector('svg, [class*="lucide"]');
          if (icon) {
            if (block.id === 'facebook') {
              icon.style.color = 'rgb(96, 165, 250)'; // blue-400
            } else if (block.id === 'instagram') {
              icon.style.color = 'rgb(244, 114, 182)'; // pink-400
            } else if (block.id === 'tiktok') {
              icon.style.color = 'rgb(248, 113, 113)'; // red-400
            } else if (block.id === 'snapchat') {
              icon.style.color = 'rgb(251, 191, 36)'; // yellow-400
            } else if (block.id === 'youtube') {
              icon.style.color = 'rgb(248, 113, 113)'; // red-400
            } else if (block.id === 'x') {
              icon.style.color = 'rgb(148, 163, 184)'; // slate-400
            }
            icon.style.transition = 'color 300ms ease-in-out';
          }
        }
      }
      
      // Hide the label
      const label = groupDiv.querySelector('div[class*="absolute -bottom-8"]');
      if (label) {
        label.style.opacity = '0';
        label.style.transition = 'opacity 300ms ease-in-out';
      }
    }
  } catch (error) {
    console.warn('Error in setInactiveStyles:', error);
  }
};

const INITIAL_DELAY = 2000;

export const useDualBlockAnimation = (
  refs: any,
  pattern: any,
  activateLine: any,
  deactivateLine: any,
  resetLines: any,
  lineDelay: number,
  lineDuration: number,
  blockDuration: number,
  currentAnimation: string,
  selector: string
) => {
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);

  useLayoutEffect(() => {
    if (currentAnimation !== selector) return;

    const animateBlocks = (index: number) => {
      if (index >= pattern.length) {
        index = 0;
      }
      const currentBlock = refs.current[pattern[index].startBox];
      const nextBlock = refs.current[pattern[index].endBox];

      if (currentBlock && nextBlock) {
        setActiveStyles(currentBlock);

        const timeout1 = setTimeout(() => {
          activateLine(pattern[index].startBox, pattern[index].endBox);

          if (pattern[index].endBox2) {
            activateLine(pattern[index].startBox, pattern[index].endBox2);

            const timeout2 = setTimeout(() => {
              setActiveStyles(refs.current[pattern[index].endBox]);
              setActiveStyles(refs.current[pattern[index].endBox2]);

              const timeout3 = setTimeout(() => {
                setInactiveStyles(refs.current[pattern[index].endBox]);
                setInactiveStyles(refs.current[pattern[index].endBox2]);
              }, 1500);

              animationTimeouts.current.push(timeout3);
            }, 1500);

            animationTimeouts.current.push(timeout2);
          }
        }, pattern[index].delay);

        animationTimeouts.current.push(timeout1);

        const timeout4 = setTimeout(() => {
          setInactiveStyles(currentBlock);
          deactivateLine(pattern[index].startBox);
        }, blockDuration - (1500 - pattern[index].delay));

        animationTimeouts.current.push(timeout4);

        const timeout5 = setTimeout(() => {
          animateBlocks(index + 1);
        }, lineDelay + lineDuration + pattern[index].delay + pattern[index].delay2);

        animationTimeouts.current.push(timeout5);
      }
    };

    const initialTimeout = setTimeout(() => {
      animateBlocks(0);
    }, INITIAL_DELAY);

    animationTimeouts.current.push(initialTimeout);

    return () => {
      animationTimeouts.current.forEach(clearTimeout);
      animationTimeouts.current = [];
      refs.current.forEach(setInactiveStyles);
      resetLines();
    };
  }, [currentAnimation, selector]);
};
