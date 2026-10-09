import React, { useState, useEffect, useRef } from "react";
import {
  Code2,
  Layers,
  Palette,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import { skillsSectionData } from "../data/portfolioData";

// Dynamic icon dictionary pairing icon strings with Lucide components
const iconMap = {
  Code2,
  Layers,
  Palette,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  Workflow,
};

/**
 * Animated Number Counter
 * Counts smoothly from 0 to target percentage when scrolled into viewport.
 */
function AnimatedCounter({ target, isVisible, duration = 2200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = target;
    const stepTime = 16; // Approx 60fps refresh step
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span className="skills__percent">{count}%</span>;
}

/**
 * Skills Section Component
 * Categorized technical proficiency cards with synchronized animated progress tracks.
 */
export default function Skills() {
  const { header, categories } = skillsSectionData || {};
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation triggers when scrolled out of viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="skills__header">
          <div className="skills__eyebrow">
            <span aria-hidden="true"></span>
            <span>{header?.badge || "TECHNICAL CAPABILITIES"}</span>
          </div>

          <h2 className="skills__title">
            {header?.title || "Skills &"}{" "}
            <span>{header?.titleHighlight || "Technologies"}</span>
          </h2>

          <p className="skills__description">
            {header?.description ||
              "I craft fast, scalable, and responsive web applications using clean code patterns, modern frameworks, and pixel-perfect design standards."}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills__grid">
          {categories?.map(({ id, category, iconName, skills, accent }) => {
            const IconComponent = iconMap[iconName] || Code2;

            return (
              <div className="skills__card card card--glass" key={id}>
                {/* Category Header */}
                <div className="skills__card-header">
                  <div
                    className="skills__icon-wrapper"
                    style={{
                      color: accent,
                      borderColor: `${accent}40`,
                      background: `${accent}15`,
                    }}
                  >
                    <IconComponent size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="skills__category-title">{category}</h3>
                </div>

                {/* Skills List with Repeat On-Scroll Progress Bars & Counter */}
                <ul className="skills__list">
                  {skills?.map(({ name, level, levelPercent }) => (
                    <li
                      className="skills__item skills__item--with-bar"
                      key={name}
                    >
                      <div className="skills__item-top">
                        <div className="skills__item-info">
                          <Sparkles size={14} className="skills__bullet-icon" />
                          <span className="skills__name">{name}</span>
                        </div>
                        <div className="skills__item-meta">
                          {/* Animated Percentage Counter */}
                          <AnimatedCounter
                            target={levelPercent}
                            isVisible={isVisible}
                            duration={2200}
                          />
                          <span
                            className={`skills__badge skills__badge--${level.toLowerCase()}`}
                          >
                            {level}
                          </span>
                        </div>
                      </div>

                      {/* Neon Progress Bar Track & Dynamic Fill */}
                      <div className="skills__progress-track">
                        <div
                          className="skills__progress-fill"
                          style={{
                            width: isVisible ? `${levelPercent}%` : "0%",
                            background: `linear-gradient(90deg, ${accent}80, ${accent})`,
                            boxShadow: isVisible
                              ? `0 0 10px ${accent}80`
                              : "none",
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section Separator Line */}
      <div
        className="about__separator about__separator--bottom"
        aria-hidden="true"
      ></div>
    </section>
  );
}