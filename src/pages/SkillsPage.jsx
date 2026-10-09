import React from "react";
import Skills from "../components/Skills";
import { skillsPageData } from "../data/portfolioData";
import {
  GitBranch,
  Code,
  Palette,
  Zap,
  Send,
  Package,
  Cloud,
  Terminal,
  CheckCircle2,
} from "lucide-react";

// Safe icon dictionary mapping data keys with Lucide icons
const toolIcons = {
  GitBranch,
  Code,
  Figma: Palette, // Safe fallback icon for Figma design tools
  Palette,
  Zap,
  Send,
  Package,
  Cloud,
  Terminal,
};

/**
 * SkillsPage Component
 * Standalone skills route page showcasing technical capability cards,
 * tools ecosystem, engineering workflows, and neon baseline separators.
 */
export default function SkillsPage() {
  const { toolsSection, workflowSection } = skillsPageData || {};

  return (
    <div className="page-content skills-page-wrapper">
      {/* Core Skills Component */}
      <Skills />

      <div className="container">
        {/* Tools & Environment Section */}
        <section className="skills-tools-section">
          <div className="skills-tools__header">
            <span className="skills-tools__badge">{toolsSection?.badge}</span>
            <h2 className="skills-tools__title">
              {toolsSection?.title}{" "}
              <span>{toolsSection?.titleHighlight}</span>
            </h2>
            <p className="skills-tools__description">
              {toolsSection?.description}
            </p>
          </div>

          <div className="skills-tools__grid">
            {toolsSection?.tools?.map((tool, idx) => {
              const IconComp = toolIcons[tool.iconName] || Terminal;
              return (
                <div className="skills-tool__card card card--glass" key={idx}>
                  <div className="skills-tool__icon-box">
                    <IconComp size={22} aria-hidden="true" />
                  </div>
                  <div className="skills-tool__info">
                    <h4 className="skills-tool__name">{tool.name}</h4>
                    <span className="skills-tool__category">
                      {tool.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Neon Section Divider */}
        <div className="skills-page__divider" aria-hidden="true"></div>

        {/* Engineering Practices & Workflow Section */}
        <section className="skills-workflow-section">
          <div className="skills-tools__header">
            <span className="skills-tools__badge">
              {workflowSection?.badge}
            </span>
            <h2 className="skills-tools__title">
              {workflowSection?.title}{" "}
              <span>{workflowSection?.titleHighlight}</span>
            </h2>
          </div>

          <div className="skills-workflow__grid">
            {workflowSection?.practices?.map((item, idx) => (
              <div
                className="skills-workflow__card card card--glass"
                key={idx}
              >
                <div className="skills-workflow__check">
                  <CheckCircle2 size={20} aria-hidden="true" />
                </div>
                <div className="skills-workflow__content">
                  <h4 className="skills-workflow__heading">{item.title}</h4>
                  <p className="skills-workflow__desc">{item.desc}</p>
                </div>

                {/* Bottom Card Neon Line */}
                <div
                  className="about__separator about__separator--bottom"
                  aria-hidden="true"
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Baseline Glowing Separator */}
        <div
          className="skills-page__bottom-separator"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}