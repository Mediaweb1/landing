import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useRef, useState } from "react";

const IconBox = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    currentAnimation: string;
    id: string;
    selector: string;
    className?: string;
  }
>(({ children, className, id, selector, currentAnimation }, ref) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        `relative w-12 h-12 sm:w-14 sm:h-14 md:h-[70px] md:w-[70px] bg-transparent rounded-lg flex items-center justify-center data-[state=active]:animate-fade-in data-[state=inactive]:animate-fade-out ` /* ${animation} */,
        className
      )}
      data-state={currentAnimation === selector ? "active" : "inactive"}
    >
      {isMounted && (
        <div
          className="w-full h-full rounded-lg flex items-center justify-center bg-transparent shadow-none"
          ref={ref}
          id={id}
        >
          {children}
        </div>
      )}
    </div>
  );
});

export default IconBox;

export const IconPlaceholder = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-2 border border-muted-foreground rounded-md">
      {children}
    </div>
  );
};

/*  const [isMounted, setIsMounted] = useState(currentAnimation === selector);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentAnimation === selector) {
      setIsMounted(true);
      setIsClosing(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else if (isMounted) {
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        setIsMounted(false);
        setIsClosing(false);
      }, 1000);
    }
  }, [currentAnimation]);

  const animation = isClosing ? "animate-fade-out" : "animate-fade-in";

  if (!isMounted && !isClosing) return null; */
