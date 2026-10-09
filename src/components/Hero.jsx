import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Download, CodeXml, Palette, Zap, GraduationCap, Send } from "lucide-react";
import Badge from "./Badge";
import AnimatedNumber from "./AnimatedNumber";
import {
  personalData,
  heroSlides,
  heroStats,
  socialLinks,
} from "../data/portfolioData";

// Icon mapping dictionary for dynamic slides from portfolioData
const iconMap = {
  CodeXml,
  Palette,
  Zap,
  GraduationCap,
};

/**
 * Hero Section Component
 * Ambient cyber hero banner with interactive service slider,
 * smart CTA routing, and marketplace-standard CV download engine.
 */
export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);

  // Auto-rotating service slide interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((currentIndex) => {
        const nextIndex = (currentIndex + 1) % heroSlides.length;
        setPrevious(currentIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  // Slide transition exit cleanup
  useEffect(() => {
    if (previous === null) return;
    const timeoutId = setTimeout(() => {
      setPrevious(null);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [previous]);

  // Market Standard "Hire Me" Handler: Smooth scroll if on Home, else navigate to /contact
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  // Market Standard CV Download Handler
  const handleCvClick = (e) => {
    if (!personalData?.cvLink || personalData.cvLink === "#") {
      e.preventDefault();
      // Safe fallback if CV file is not placed in public folder yet
      console.warn("CV file path is not configured in portfolioData.js");
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Ambient Aurora Glow Spheres */}
      <div className="hero__aurora" aria-hidden="true">
        <span className="hero__aurora-1"></span>
        <span className="hero__aurora-2"></span>
        <span className="hero__aurora-3"></span>
      </div>

      <div className="container">
        <div className="hero__grid">
          {/* Left Column: Intro Copy, Actions & Stats */}
          <div className="hero__left">
            <p className="hero__intro">{personalData.shortIntro}</p>
            <h1 className="hero__title">
              {personalData.firstName} <span>{personalData.lastName}</span>
            </h1>
            <h2 className="hero__subtitle">{personalData.role}</h2>
            <p className="hero__description">{personalData.bio}</p>

            {/* Marketplace Standard Action Buttons */}
            <div className="hero__buttons">
              <a
                href="#contact"
                onClick={handleHireMeClick}
                className="btn btn--primary"
                aria-label="Reach out and collaborate with Rakibul Hasan"
                title="Initiate Project Collaboration"
              >
                Hire Me <Send size={16} strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href={personalData?.cvLink || "#"}
                onClick={handleCvClick}
                className="btn btn--outline"
                target="_blank"
                rel="noopener noreferrer"
                download={
                  personalData?.cvLink && personalData.cvLink !== "#"
                    ? "Rakibul_Hasan_CV.pdf"
                    : undefined
                }
                aria-label="Download Rakibul Hasan's Curriculum Vitae"
                title="Download Professional CV"
              >
                Download CV <Download size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="hero__stats">
              {heroStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <strong>
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Visual Card, Socials & Slider */}
          <div className="hero__right">
            <div className="hero__photo">
              <div className="hero__photo-glow" aria-hidden="true"></div>
              <div className="hero__photo-ring" aria-hidden="true"></div>

              <div className="hero__photo-card">
                {personalData.availableForWork && (
                  <Badge className="hero__card-badge">Available for Work</Badge>
                )}
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="hero__image"
                  loading="eager"
                />
              </div>

              {/* Vertical Social Icon Floating Rail */}
              <div className="hero__social social social--vertical">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="social__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>

              {/* Interactive Sliding Service Highlight Card */}
              <div className="hero__info card card--glass">
                <div className="hero__slider">
                  {heroSlides.map((slide, i) => {
                    const IconComponent = iconMap[slide.iconName] || CodeXml;
                    const isCurrent = i === current;
                    const isPrevious = i === previous;

                    return (
                      <div
                        className={`hero__slide ${
                          isCurrent ? "active" : isPrevious ? "leave" : ""
                        }`.trim()}
                        key={slide.title}
                      >
                        <div className="hero__slide-header">
                          <div className="hero__slide-icon-circle">
                            <IconComponent size={19} />
                          </div>
                          <h4>{slide.title}</h4>
                        </div>
                        <p>{slide.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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