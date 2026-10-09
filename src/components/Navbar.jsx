import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * Navbar Component
 * Floating glassmorphism navigation header with responsive mobile drawer.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    // Passive listener for high-performance scroll handling
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`.trim()}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            Rakibul<span>.</span>
          </Link>

          <ul className={`navbar__menu ${open ? "navbar__menu--open" : ""}`.trim()}>
            {links.map(({ path, label }) => (
              <li className="navbar__item" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "active" : ""}`.trim()
                  }
                  onClick={closeMenu}
                  end={path === "/"}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Mobile drawer CTA action button */}
            <li className="navbar__item navbar__item--mobile-cta">
              <Link to="/contact" className="btn btn--primary" onClick={closeMenu}>
                Let's Talk <span>→</span>
              </Link>
            </li>
          </ul>

          <Link to="/contact" className="btn btn--primary navbar__cta-desktop">
            Let's Talk <span>→</span>
          </Link>

          <button
            className={`navbar__toggle ${open ? "navbar__toggle--active" : ""}`.trim()}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}