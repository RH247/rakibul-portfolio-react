import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Core Global Components */
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* Page Routes */
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

/**
 * Root Application Component
 * Manages client-side routing, global navigation layout, and preloader lifecycle.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Cyber Preloader animation */}
      <Preloader />

      {/* Floating navigation header */}
      <Navbar />

      {/* Main route view switcher */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Main footer banner and bottom bar */}
      <Footer />
    </BrowserRouter>
  );
}