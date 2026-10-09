import React, { useEffect, useState } from "react";

/**
 * Preloader Component
 * Fullscreen ambient cyber loading overlay with progress fill and smooth fade-out.
 */
export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let fadeTimer;
    let removeTimer;

    // Trigger smooth fade transition after 1.2s progress duration
    fadeTimer = setTimeout(() => {
      setFadeOut(true);
      // Remove completely from DOM after fade-out transition completes (500ms)
      removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1200);

    // Proper cleanup of both timers to prevent memory leaks
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`preloader ${fadeOut ? "preloader--fade" : ""}`.trim()}
      aria-hidden="true"
    >
      <div className="preloader__content">
        <div className="preloader__symbol">
          <span className="preloader__bracket">&lt;</span>
          <span className="preloader__logo">Rakibul</span>
          <span className="preloader__bracket">/&gt;</span>
        </div>
        <div className="preloader__progress-bar">
          <div className="preloader__progress-fill"></div>
        </div>
        <span className="preloader__status">LOADING EXPERIENCE</span>
      </div>
    </div>
  );
}