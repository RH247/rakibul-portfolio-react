import React, { useState, useEffect } from "react";
import { Download, CodeXml, Palette, Zap, GraduationCap } from "lucide-react";
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
 * Ambient cyber hero banner with interactive service card slider and profile visuals.
 */
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);

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

  useEffect(() => {
    if (previous === null) return;
    const timeoutId = setTimeout(() => {
      setPrevious(null);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [previous]);

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

            <div className="hero__buttons">
              <a href="#contact" className="btn btn--primary">
                Hire Me
              </a>
              <a
                href={personalData.cvLink}
                className="btn btn--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <Download size={18} strokeWidth={2} />
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