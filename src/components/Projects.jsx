import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

/* --------------------------------------------------------------------------
   PROJECTS DATA CONFIGURATION
   Modular structure: easily add, remove, or modify project items.
   -------------------------------------------------------------------------- */
const projectsData = [
  {
    id: "cyber-ecommerce",
    title: "NeonStore E-Commerce",
    category: "React.js",
    description:
      "A futuristic cyber-themed shopping platform featuring dynamic cart management, Stripe checkout, and dark mode neon aesthetics.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "dev-portfolio",
    title: "Minimalist Dev Showcase",
    category: "Full Stack",
    description:
      "High-performance portfolio template with glassmorphism UI, smooth micro-interactions, and automated contact form delivery.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "ai-dashboard",
    title: "Nexus AI Analytics Platform",
    category: "React.js",
    description:
      "Interactive analytics dashboard displaying real-time data visual metrics, user tracking charts, and API status monitoring.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Chart.js", "CSS Modules", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "task-flow",
    title: "CloudSync Workflow App",
    category: "UI/UX Design",
    description:
      "A collaborative productivity workspace featuring drag-and-drop kanban boards, real-time sync, and fluid transitions.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "React", "CSS Grid", "LocalStorage"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "crypto-vault",
    title: "Aether Crypto Dashboard",
    category: "React.js",
    description:
      "A dynamic cryptocurrency tracker with interactive price charts, market depth analytics, and real-time wallet simulation.",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TradingView API", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "saas-landing",
    title: "Hyperion SaaS Platform",
    category: "Full Stack",
    description:
      "An enterprise cloud automation portal with role-based access, dark neon telemetry views, and automated billing integration.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "React.js", "Full Stack", "UI/UX Design"];

/**
 * Projects Section Component
 * Displays interactive portfolio gallery with category filter tabs and modal action overlays.
 */
export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects__header">
          <div className="projects__eyebrow">
            <span aria-hidden="true"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="projects__title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects__description">
            Explore a selected gallery of client deliverables, scalable web
            applications, and modern frontend architectures built with
            precision.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="projects__tabs" role="tablist">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`projects__tab ${activeTab === tab ? "active" : ""}`.trim()}
              onClick={() => setActiveTab(tab)}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid Container */}
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article
              className="projects__card card card--glass"
              key={project.id}
            >
              {/* Card Image Banner & Link Overlay */}
              <div className="projects__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                  loading="lazy"
                />
                <div className="projects__overlay">
                  <div className="projects__links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__action-btn"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__action-btn"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="projects__content">
                <span className="projects__category-tag">
                  {project.category}
                </span>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span className="projects__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects on GitHub Button */}
        <div className="projects__cta">
          <a
            href="https://github.com/rakibul-hasan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <span>Explore All 15+ Projects on GitHub</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Ambient Section Divider */}
      <div
        className="about__separator about__separator--bottom"
        aria-hidden="true"
      ></div>
    </section>
  );
}