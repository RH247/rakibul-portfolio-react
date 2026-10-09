import React from "react";
import Projects from "../components/Projects";

/**
 * ProjectsPage Component
 * Standalone projects gallery route page wrapped inside standardized layout container.
 */
export default function ProjectsPage() {
  return (
    <div className="page-content projects-page-wrapper">
      <Projects />
    </div>
  );
}