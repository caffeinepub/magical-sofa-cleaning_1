import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseScrollRevealOptions {
  /**
   * Target selector for child elements to stagger (optional)
   * If provided, will apply stagger animation to matching children
   */
  staggerSelector?: string;
  /**
   * Delay between staggered items in milliseconds
   * @default 100
   */
  staggerDelay?: number;
  /**
   * Whether to disable the animation (useful for conditional logic)
   * @default false
   */
  disabled?: boolean;
  /**
   * Threshold for intersection observer (0-1)
   * @default 0.1
   */
  threshold?: number;
}

/**
 * Custom hook that applies enhanced scroll-triggered reveal animations using Intersection Observer
 * with Web Animations API for better performance. Respects prefers-reduced-motion and provides
 * one-time reveal behavior with proper cleanup to prevent memory leaks.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
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

    // Set initial state
    if (prefersReducedMotion) {
      // Reduced motion: just hidden
      container.style.opacity = '0';
    } else {
      // Full motion: hidden and translated
      container.style.opacity = '0';
      container.style.transform = 'translateY(30px)';
    }

    // Handle staggered children initial state
    if (staggerSelector) {
      const children = container.querySelectorAll(staggerSelector);
      children.forEach((child) => {
        const element = child as HTMLElement;
        if (prefersReducedMotion) {
          element.style.opacity = '0';
        } else {
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
        }
      });
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Animate the container using Web Animations API
            if (prefersReducedMotion) {
              // Minimal fade-in for reduced motion
              const animation = target.animate(
                [
                  { opacity: 0 },
                  { opacity: 1 }
                ],
                {
                  duration: 200,
                  easing: 'ease-out',
                  fill: 'forwards'
                }
              );
              animationsRef.current.push(animation);
            } else {
              // Full reveal animation
              const animation = target.animate(
                [
                  { opacity: 0, transform: 'translateY(30px)' },
                  { opacity: 1, transform: 'translateY(0)' }
                ],
                {
                  duration: 800,
                  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  fill: 'forwards'
                }
              );
              animationsRef.current.push(animation);
            }

            // Animate staggered children
            if (staggerSelector) {
              const children = target.querySelectorAll(staggerSelector);
              children.forEach((child, index) => {
                const element = child as HTMLElement;
                const delay = index * staggerDelay;

                if (prefersReducedMotion) {
                  // Minimal staggered fade for reduced motion
                  setTimeout(() => {
                    const animation = element.animate(
                      [
                        { opacity: 0 },
                        { opacity: 1 }
                      ],
                      {
                        duration: 200,
                        easing: 'ease-out',
                        fill: 'forwards'
                      }
                    );
                    animationsRef.current.push(animation);
                  }, delay * 0.5);
                } else {
                  // Full staggered reveal
                  setTimeout(() => {
                    const animation = element.animate(
                      [
                        { opacity: 0, transform: 'translateY(30px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                      ],
                      {
                        duration: 800,
                        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        fill: 'forwards'
                      }
                    );
                    animationsRef.current.push(animation);
                  }, delay);
                }
              });
            }

            // Unobserve after revealing (one-time animation)
            observer.unobserve(target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(container);

    // Cleanup: cancel all animations and disconnect observer
    return () => {
      animationsRef.current.forEach((animation) => {
        if (animation && animation.cancel) {
          animation.cancel();
        }
      });
      animationsRef.current = [];
      observer.disconnect();
    };
  }, [disabled, staggerSelector, staggerDelay, threshold, prefersReducedMotion]);

  return containerRef;
}
