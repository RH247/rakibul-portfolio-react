import React, { useState } from "react";
import Contact from "../components/Contact";
import { contactPageData } from "../data/portfolioData";
import { Clock, Globe, ChevronDown } from "lucide-react";

/**
 * ContactPage Component
 * Strictly keeps 1 FAQ open at all times to maintain perfect parallel baseline balance.
 */
export default function ContactPage() {
  const { hubSection, availabilityMatrix, faqList } = contactPageData || {};

  // Default-e shobshomoy prothom item (index 0) active thakbe
  const [openIndex, setOpenIndex] = useState(0);

  // Strict 1-active handler: Click korle notun-ta open hobe ebong ager-ta deactive hobe
  const handleAccordionSelect = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="page-content contact-page-wrapper">
      {/* 1. Core Contact Component */}
      <Contact />

      {/* 2. Full-Width Single Gradient Divider */}
      <div className="contact-page__separator" aria-hidden="true"></div>

      {/* 3. Unique Split Hub Section */}
      <div className="container">
        <section className="contact-hub-section">
          {/* Header */}
          <div className="contact-hub__header">
            <span className="contact-hub__badge">{hubSection?.badge}</span>
            <h2 className="contact-hub__title">
              {hubSection?.title} <span>{hubSection?.titleHighlight}</span>
            </h2>
            <p className="contact-hub__desc">{hubSection?.description}</p>
          </div>

          {/* Asymmetric Split Layout */}
          <div className="contact-hub__layout">
            {/* Left Column: Live Cyber Status Terminal */}
            <div className="contact-terminal-card card card--glass">
              <div className="contact-terminal__status-pill">
                <span className="contact-terminal__pulse-dot" aria-hidden="true"></span>
                <span>{availabilityMatrix?.statusBadge}</span>
              </div>

              <p className="contact-terminal__capacity-text">
                {availabilityMatrix?.capacity}
              </p>

              <div className="contact-terminal__metrics">
                <div className="contact-terminal__metric-item">
                  <Globe size={18} className="contact-terminal__metric-icon" aria-hidden="true" />
                  <span>{availabilityMatrix?.timezone}</span>
                </div>
                <div className="contact-terminal__metric-item">
                  <Clock size={18} className="contact-terminal__metric-icon" aria-hidden="true" />
                  <span>{availabilityMatrix?.responseTime}</span>
                </div>
              </div>

              <div className="contact-terminal__channels">
                {availabilityMatrix?.channels?.map((channel) => (
                  <div className="contact-terminal__channel-item" key={channel.id}>
                    <span className="contact-terminal__channel-label">{channel.label}</span>
                    <span className="contact-terminal__channel-detail">{channel.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Always Active Interactive Accordion */}
            <div className="contact-accordion-group">
              {faqList?.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className={`contact-accordion-item ${isOpen ? "contact-accordion-item--active" : ""}`}
                  >
                    <button
                      type="button"
                      className="contact-accordion__trigger"
                      onClick={() => handleAccordionSelect(index)}
                      aria-expanded={isOpen}
                    >
                      <div className="contact-accordion__title-wrapper">
                        <span className="contact-accordion__number">{faq.number}</span>
                        <span className="contact-accordion__question">{faq.question}</span>
                      </div>
                      <ChevronDown size={18} className="contact-accordion__icon" aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div className="contact-accordion__content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* 4. Full-Width Baseline Separator */}
      <div
        className="contact-page__separator contact-page__separator--bottom"
        aria-hidden="true"
      ></div>
    </div>
  );
}