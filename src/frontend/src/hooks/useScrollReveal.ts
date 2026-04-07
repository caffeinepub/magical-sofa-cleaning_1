import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseScrollRevealOptions {
  staggerSelector?: string;
  staggerDelay?: number;
  disabled?: boolean;
  threshold?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
) {
  const {
    staggerSelector,
    staggerDelay = 100,
    disabled = false,
    threshold = 0.1,
  } = options;

  const containerRef = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationsRef = useRef<Animation[]>([]);

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const container = containerRef.current;

    if (prefersReducedMotion) {
      container.style.opacity = "0";
    } else {
      container.style.opacity = "0";
      container.style.transform = "translateY(30px)";
    }

    if (staggerSelector) {
      const children = container.querySelectorAll(staggerSelector);
      for (const child of children) {
        const element = child as HTMLElement;
        if (prefersReducedMotion) {
          element.style.opacity = "0";
        } else {
          element.style.opacity = "0";
          element.style.transform = "translateY(30px)";
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            if (prefersReducedMotion) {
              const animation = target.animate(
                [{ opacity: 0 }, { opacity: 1 }],
                { duration: 200, easing: "ease-out", fill: "forwards" },
              );
              animationsRef.current.push(animation);
            } else {
              const animation = target.animate(
                [
                  { opacity: 0, transform: "translateY(30px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 800,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                  fill: "forwards",
                },
              );
              animationsRef.current.push(animation);
            }

            if (staggerSelector) {
              const children = target.querySelectorAll(staggerSelector);
              children.forEach((child, index) => {
                const element = child as HTMLElement;
                const delay = index * staggerDelay;

                if (prefersReducedMotion) {
                  setTimeout(() => {
                    const animation = element.animate(
                      [{ opacity: 0 }, { opacity: 1 }],
                      { duration: 200, easing: "ease-out", fill: "forwards" },
                    );
                    animationsRef.current.push(animation);
                  }, delay * 0.5);
                } else {
                  setTimeout(() => {
                    const animation = element.animate(
                      [
                        { opacity: 0, transform: "translateY(30px)" },
                        { opacity: 1, transform: "translateY(0)" },
                      ],
                      {
                        duration: 800,
                        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                        fill: "forwards",
                      },
                    );
                    animationsRef.current.push(animation);
                  }, delay);
                }
              });
            }

            observer.unobserve(target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(container);

    return () => {
      for (const animation of animationsRef.current) {
        if (animation?.cancel) {
          animation.cancel();
        }
      }
      animationsRef.current = [];
      observer.disconnect();
    };
  }, [
    disabled,
    staggerSelector,
    staggerDelay,
    threshold,
    prefersReducedMotion,
  ]);

  return containerRef;
}
