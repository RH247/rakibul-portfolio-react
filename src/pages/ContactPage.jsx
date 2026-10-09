import React from "react";
import Contact from "../components/Contact";

/**
 * ContactPage Component
 * Standalone contact route page wrapped inside standardized layout container.
 */
export default function ContactPage() {
  return (
    <div className="page-content contact-page-wrapper">
      <Contact />
    </div>
  );
}