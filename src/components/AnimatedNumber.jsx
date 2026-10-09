import React, { useState, useEffect, useRef } from "react";

/**
 * AnimatedNumber Component
 * Animates a numeric counter smoothly when scrolled into viewport.
 *
 * @param {number|string} target - The final number to reach
 * @param {string} suffix - Suffix string (e.g. '+', '%', 'y+')
 * @param {number} duration - Animation duration in milliseconds
 * @param {string} className - Optional additional classes
 */
export default function AnimatedNumber({
  target,
  suffix = "",
  duration = 1200,
  className = "",
}) {
  const numericTarget = parseInt(target, 10) || 0;
  const [count, setCount] = useState(1);
  const elementRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        // Cubic ease-out calculation for smooth deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(1 + (numericTarget - 1) * easedProgress);

        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          } else {
            cancelAnimationFrame(animationFrameId);
            setCount(1);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [numericTarget, duration]);

  return (
    <span
      ref={elementRef}
      className={`animated-number ${className}`.trim()}
    >
      {count}
      {suffix}
    </span>
  );
}