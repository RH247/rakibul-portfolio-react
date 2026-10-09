import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

/* --------------------------------------------------------------------------
   CONTACT INFO METADATA
   Easily configurable channels for direct client engagement.
   -------------------------------------------------------------------------- */
const contactChannels = [
  {
    id: "email",
    icon: Mail,
    label: "Email Me",
    value: "contact@rakibulhasan.dev",
    href: "mailto:contact@rakibulhasan.dev",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+880 1XXXXXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com",
  },
];

/**
 * Contact Section Component
 * Displays direct communication channels and interactive glassmorphic contact form.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  // Clean up active timer on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend form submission simulation ready for EmailJS or Backend integration
    setIsSubmitted(true);

    timerRef.current = setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="contact__header">
          <div className="contact__eyebrow">
            <span aria-hidden="true"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact__title">
            Let's Build <span>Together</span>
          </h2>

          <p className="contact__description">
            Have an upcoming project, freelance inquiry, or just want to discuss
            modern frontend architecture? Feel free to send a message.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact__grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-text">
              I am currently available for selected freelance projects, frontend
              consulting, and full-time engineering roles.
            </p>

            <div className="contact__channels">
              {contactChannels.map(({ id, icon: Icon, label, value, href }) => (
                <a
                  key={id}
                  href={href}
                  target={id === "location" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="contact__channel-card card card--glass"
                >
                  <div className="contact__channel-icon">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="contact__channel-label">{label}</span>
                    <strong className="contact__channel-value">{value}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <div className="contact__form-wrapper card card--glass">
            {isSubmitted ? (
              <div className="contact__success-state">
                <CheckCircle2 size={54} className="contact__success-icon" />
                <h4 className="contact__success-title">
                  Message Sent Successfully!
                </h4>
                <p className="contact__success-desc">
                  Thank you for reaching out. I will get back to you within 24
                  business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group-row">
                  <div className="contact__input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact__input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="e.g. john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact__input-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me more about your requirements or idea..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact__submit-btn"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
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