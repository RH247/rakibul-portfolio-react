import React from "react";
import { ArrowUp, ArrowRight, Sparkles } from "lucide-react";

/**
 * Footer Component
 * Pre-footer cyber CTA banner, brand identity, navigation directory, and back-to-top interaction.
 */
export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      {/* Top Ambient Glow Lines */}
      <div className="footer__glow-sphere" aria-hidden="true"></div>

      <div className="container">
        {/* Pre-Footer Action Banner (Cyber Card) */}
        <div className="footer__banner card card--glass">
          <div className="footer__banner-content">
            <div className="footer__banner-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>START A COLLABORATION</span>
            </div>
            <h3 className="footer__banner-title">
              Let's make something <span>legendary together.</span>
            </h3>
            <p className="footer__banner-sub">
              Available for high-impact frontend architecture, freelance inquiries, and full-time engineering.
            </p>
          </div>
          <a href="#contact" className="btn btn--primary footer__banner-btn">
            <span>Get In Touch</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="footer__main">
          {/* Brand & Mission */}
          <div className="footer__col footer__col--brand">
            <a href="#hero" className="footer__logo">
              Rakibul<span>.</span>
            </a>
            <p className="footer__bio">
              Frontend Engineer specializing in scalable web architectures, pixel-perfect
              interactive systems, and modern cyber UI design.
            </p>

            {/* Custom SVG Social Icons */}
            <div className="footer__socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub Profile"
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

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn Profile"
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter Profile"
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Specialization */}
          <div className="footer__col">
            <h4 className="footer__col-title">Specialization</h4>
            <ul className="footer__services-list">
              <li>Modern React Applications</li>
              <li>Pixel-Perfect UI/UX Design</li>
              <li>Responsive Cyber Interfaces</li>
              <li>Speed & Performance Optimization</li>
            </ul>
          </div>

          {/* Return to Top Button */}
          <div className="footer__col footer__col--action">
            <h4 className="footer__col-title">Back to Top</h4>
            <p className="footer__action-hint">Ready to review the template again?</p>
            <button
              onClick={scrollToTop}
              className="footer__top-btn"
              aria-label="Scroll back to top"
              type="button"
            >
              <ArrowUp size={20} aria-hidden="true" />
              <span>Return to Top</span>
            </button>
          </div>
        </div>

        {/* Separator Divider */}
        <div className="footer__divider" aria-hidden="true"></div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} <strong>Rakibul Hasan</strong>. Built for ThemeForest Standard.
          </p>

          <div className="footer__status">
            <span className="footer__status-dot" aria-hidden="true"></span>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}