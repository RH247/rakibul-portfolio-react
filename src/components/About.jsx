import React from "react";
import { CodeXml } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";
import { Link, useLocation } from "react-router-dom";
import { personalData, aboutData } from "../data/portfolioData";

/**
 * About Section Component
 * Displays profile overview, experience highlights, metrics and navigation link.
 */
export default function About() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left Column: Visual Profile Frame & Experience Pill */}
          <div className="about__left">
            <div className="about__image-wrapper">
              <div className="about__image-bg"></div>
              <img
  src={personalData.avatar}
  className="about__image"
  alt={personalData.name}
  width="350"
  height="380"
  loading="lazy"
/>
            </div>

            <div className="about__experience">
              <div className="about__experience-icon">
                <CodeXml size={18} />
              </div>
              <div>
                <strong>{aboutData.badgeText}</strong>
                <span>{aboutData.badgeSubtext}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Eyebrow, Title, Description, Stats & CTA */}
          <div className="about__right">
            <div className="about__eyebrow">
              <span aria-hidden="true"></span>
              <span>{aboutData.eyebrow}</span>
            </div>

            <h2 className="about__title">
              Passionate about Building Great
              <br />
              <span>Web Experiences</span>
            </h2>

            <p className="about__description">{aboutData.description}</p>

            <div className="about__stats">
              <div className="about__stat">
                <h3>
                  <AnimatedNumber target={2} suffix="+" />
                </h3>
                <span>Years Learning</span>
              </div>
              <div className="about__stat">
                <h3>
                  <AnimatedNumber target={15} suffix="+" />
                </h3>
                <span>Projects Completed</span>
              </div>
              <div className="about__stat">
                <h3>
                  <AnimatedNumber target={30} suffix="+" />
                </h3>
                <span>Technologies Explored</span>
              </div>
            </div>

            {/* Conditionally rendered on Home page only */}
            {!isAboutPage && (
              <Link to="/about" className="btn btn--primary">
                More About Me <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Baseline Glowing Section Separator */}
      <div
        className="about__separator about__separator--bottom"
        aria-hidden="true"
      ></div>
    </section>
  );
}