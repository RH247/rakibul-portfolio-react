import React from "react";

/**
 * Reusable Badge Component
 * @param {React.ReactNode} children - Badge label content
 * @param {string} variant - Theme modifier ('success' | 'primary' | 'secondary')
 * @param {boolean} showDot - Whether to display glowing indicator dot
 * @param {string} className - Optional additional custom classes
 */
export default function Badge({
  children,
  variant = "success",
  showDot = true,
  className = "",
  ...props
}) {
  const variantClass = variant ? `badge--${variant}` : "";

  return (
    <div
      className={`badge ${variantClass} ${className}`.trim()}
      role="status"
      {...props}
    >
      {showDot && <span className="badge__dot" aria-hidden="true"></span>}
      {children}
    </div>
  );
}