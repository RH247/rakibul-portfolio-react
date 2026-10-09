import React from "react";
import Projects from "../components/Projects";
import { projectsPageData } from "../data/portfolioData";
import { Layers, Zap, ShieldCheck, GitMerge } from "lucide-react";

// Safe icon dictionary
const standardIcons = {
  Layers,
  Zap,
  ShieldCheck,
  GitMerge,
};

/**
 * ProjectsPage Component
 * Standalone portfolio gallery showcasing filterable client builds,
 * interactive project showcases, full-width sleek dividers, and production standards.
 */
export default function ProjectsPage() {
  const { architectureSection } = projectsPageData || {};

  return (
    <div className="page-content projects-page-wrapper">
      {/* 1. Core Projects Gallery (Untouched & 100% Intact) */}
      <Projects />

      {/* 2. Full-Width Sleek Gradient Divider (Outside container for true 100% width) */}
      <div className="projects-page__separator" aria-hidden="true"></div>

      {/* 3. Engineering Standards Section */}
      <div className="container">
        <section className="projects-standards-section">
          <div className="projects-standards__header">
            <span className="projects-standards__badge">
              {architectureSection?.badge}
            </span>
            <h2 className="projects-standards__title">
              {architectureSection?.title}{" "}
              <span>{architectureSection?.titleHighlight}</span>
            </h2>
            <p className="projects-standards__desc">
              {architectureSection?.description}
            </p>
          </div>

          <div className="projects-standards__grid">
            {architectureSection?.standards?.map((item) => {
              const IconComp = standardIcons[item.iconName] || Layers;
              return (
                <div
                  className="projects-standard__card card card--glass"
                  key={item.id}
                >
                  <div className="projects-standard__icon-box">
                    <IconComp size={22} aria-hidden="true" />
                  </div>
                  <div className="projects-standard__content">
                    <h3 className="projects-standard__heading">{item.title}</h3>
                    <p className="projects-standard__text">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 4. Full-Width Sleek Baseline Separator (Above Footer) */}
      <div
        className="projects-page__separator projects-page__separator--bottom"
        aria-hidden="true"
      ></div>
    </div>
  );
}