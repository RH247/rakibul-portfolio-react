import React, { useState, useEffect, useRef } from "react";
import About from "../components/About";
import { detailedAboutData, journeyRoadmapData } from "../data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  Rocket,
  Compass,
} from "lucide-react";

// Dynamic roadmap icon dictionary
const roadmapIcons = {
  Briefcase,
  Laptop,
  Rocket,
  Compass,
};

/**
 * AboutPage Component
 * Standalone about page featuring qualifications timeline, interactive journey roadmap, and engineering philosophy.
 */
export default function AboutPage() {
  const [isJourneyVisible, setIsJourneyVisible] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const journeyRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJourneyVisible(true);

          // Progressive milestone dot ignitions matching the 3.5s progress glide
          // Step 1: Immediate ignition at start
          setActiveStepIndex(0);

          // Step 2: Ignites at ~1.2s when progress reaches halfway
          const t1 = setTimeout(() => {
            setActiveStepIndex(1);
          }, 1200);

          // Step 3: Ignites at ~2.5s when progress reaches 3rd milestone
          const t2 = setTimeout(() => {
            setActiveStepIndex(2);
          }, 2500);

          timeoutsRef.current = [t1, t2];
        } else {
          // Reset to initial dim state when scrolled out of viewport
          setIsJourneyVisible(false);
          setActiveStepIndex(-1);
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
        }
      },
      { threshold: 0.25 }
    );

    const currentRef = journeyRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // Calculate percentage of line to fill based on completed steps
  const totalSteps = journeyRoadmapData?.steps?.length || 1;
  const completedStepsCount =
    journeyRoadmapData?.steps?.filter((s) => s.completed).length || 0;
  const progressPercentage =
    totalSteps > 1
      ? Math.min(100, ((completedStepsCount - 1) / (totalSteps - 1)) * 100)
      : 100;

  return (
    <div className="page-content about-page-wrapper">
      {/* Top Main About Component */}
      <About />

      <div className="container">
        {/* Horizontal Experience & Education Timelines */}
        <section className="timeline-section">
          <div className="timeline-header">
            <span className="section-title__badge">QUALIFICATIONS</span>
            <h2 className="section-title__heading">Education & Experience</h2>
            <p className="section-title__description">
              My academic background and hands-on experience in web development.
            </p>
          </div>

          <div className="timeline-grid">
            {/* Experience Column */}
            <div className="timeline-column">
              <h3 className="timeline-column__title">
                <Briefcase size={22} aria-hidden="true" />
                <span>Experience & Journey</span>
              </h3>
              <div className="timeline-list">
                {detailedAboutData.experienceTimeline.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-heading">{item.title}</h4>
                    <p className="timeline-place">{item.company}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="timeline-column">
              <h3 className="timeline-column__title">
                <GraduationCap size={22} aria-hidden="true" />
                <span>Education & Learning</span>
              </h3>
              <div className="timeline-list">
                {detailedAboutData.education.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-heading">{item.degree}</h4>
                    <p className="timeline-place">{item.institution}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            HORIZONTAL PROFESSIONAL JOURNEY ROADMAP
            ================================================================== */}
        <section className="journey-roadmap-section" ref={journeyRef}>
          <div className="journey-roadmap__header">
            <span className="journey-roadmap__badge">
              {journeyRoadmapData.badge}
            </span>
            <h2 className="journey-roadmap__title">
              {journeyRoadmapData.title}
            </h2>
          </div>

          <div className="journey-roadmap__wrapper">
            {/* Base Background Track Line */}
            <div className="journey-roadmap__track" aria-hidden="true">
              {/* Animated Neon Gradient Fill */}
              <div
                className="journey-roadmap__progress-fill"
                style={{
                  width: isJourneyVisible ? `${progressPercentage}%` : "0%",
                }}
              ></div>
            </div>

            {/* Milestone Steps */}
            <div className="journey-roadmap__steps">
              {journeyRoadmapData.steps.map((step, idx) => {
                const Icon = roadmapIcons[step.iconName] || Briefcase;
                // Active dot ignites sequentially as progress fill passes milestone
                const isStepActive = step.completed && idx <= activeStepIndex;

                return (
                  <div
                    className={`journey-roadmap__node ${
                      isStepActive ? "journey-roadmap__node--active" : ""
                    } ${
                      !step.completed ? "journey-roadmap__node--future" : ""
                    }`.trim()}
                    key={step.id}
                  >
                    {/* Glowing Marker Dot on the Track */}
                    <div className="journey-roadmap__dot-wrapper" aria-hidden="true">
                      <div className="journey-roadmap__dot"></div>
                    </div>

                    {/* Step Information Card */}
                    <div className="journey-roadmap__card">
                      <div className="journey-roadmap__icon-box">
                        <Icon size={20} />
                      </div>
                      <div className="journey-roadmap__content">
                        <span className="journey-roadmap__year">
                          {step.year}
                        </span>
                        <h4 className="journey-roadmap__step-title">
                          {step.title}
                        </h4>
                        <p className="journey-roadmap__subtitle">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Neon Gradient Divider */}
        <div className="timeline-divider" aria-hidden="true"></div>

        {/* Development Philosophy Card */}
        <div className="philosophy-card">
          <h3 className="philosophy-title">My Development Approach</h3>
          <p className="philosophy-text">{detailedAboutData.aboutJourney}</p>
        </div>
      </div>
    </div>
  );
}