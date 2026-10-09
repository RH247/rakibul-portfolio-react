# ⚡ CyberFolio — React & Vite Creative Portfolio Template

<div align="center">

  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![CSS3](https://img.shields.io/badge/Pure_CSS3-Modular-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  ![Marketplace](https://img.shields.io/badge/Standard-ThemeForest_Ready-81B441?style=for-the-badge&logo=envato&logoColor=white)

  <p align="center">
    <strong>A high-performance, dark cyber-aesthetic portfolio template engineered with modern React, Vite, and modular glassmorphic CSS architecture.</strong>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-customization-guide">Customization Guide</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-author--credits">Credits</a>
  </p>

</div>

---

## 📖 Overview

**CyberFolio** is a cutting-edge personal portfolio and resume template designed for frontend engineers, UI/UX developers, and digital creators. Built from scratch without heavy UI frameworks like Tailwind or Bootstrap, it delivers unmatched performance, a pixel-perfect dark cyber aesthetic, glowing neon accents, and zero Cumulative Layout Shift (CLS).

Every component, route, and CSS module is crafted adhering to international marketplace benchmarks (ThemeForest standard), ensuring clean code separation, robust accessibility, and straightforward content customization.

---

## 🌟 Key Features

- **⚡ Blazing Fast Build & Runtime:** Powered by Vite with sub-millisecond Hot Module Replacement (HMR) and optimized production bundles.
- **🎨 Elite Cyber Glassmorphism:** Custom-crafted glass cards, ambient radial glow spheres, animated timeline markers, and neon gradient dividers.
- **📱 100% Fluid & Responsive:** Calibrated across mobile, tablet, laptop, and ultra-wide desktop viewports.
- **🧭 Multi-Route Architecture:** Seamless page switching between Home, About, Skills, Projects, and Contact via React Router DOM with automatic scroll restoration.
- **🧩 100% Zero CSS Bloat:** Pure, native CSS utilizing modern CSS Custom Properties (variables), CSS Grid, and Flexbox with no runtime overhead.
- **♿ Accessibility & SEO Compliant:** Semantic HTML5 tags (`<main>`, `<article>`, `<header>`, `<footer>`), valid ARIA roles, explicit image dimension ratios, and accessible color contrasts.
- **⚙️ Single Source of Truth:** Centralized portfolio data directory (`portfolioData.js`) allows you to modify skills, projects, and personal bios in minutes without touching JSX markup.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18+](https://react.dev/)** | Declarative Component-Driven UI |
| **[Vite](https://vitejs.dev/)** | Next-Generation Frontend Tooling & Bundler |
| **[React Router DOM v6](https://reactrouter.com/)** | Client-Side Declarative Routing |
| **[Lucide React](https://lucide.dev/)** | Clean, Lightweight Iconography |
| **Modular CSS3** | Component & Section-Level Style Scoping |

---

## 📂 Project Structure

```text
rakibul-portfolio-react/
├── public/                       # Static public assets (favicons, manifest)
├── src/
│   ├── components/               # Modular UI & section components
│   │   ├── About.jsx             # About summary section & bio cards
│   │   ├── AnimatedNumber.jsx    # Smooth statistic counter animation
│   │   ├── Badge.jsx             # Cyber status pill badges
│   │   ├── Contact.jsx           # Interactive contact form & methods
│   │   ├── Footer.jsx            # Pre-footer CTA banner & site links
│   │   ├── Hero.jsx              # Cyber hero section with floating tags
│   │   ├── Navbar.jsx            # Glassmorphic floating navigation bar
│   │   ├── Preloader.jsx         # Initial cyber boot loader
│   │   ├── Projects.jsx          # Filterable project portfolio gallery
│   │   ├── ScrollToTop.jsx       # Route-change scroll restoration
│   │   └── Skills.jsx            # Technical skill cards & progress bars
│   ├── data/
│   │   └── portfolioData.js      # Centralized data model for all content
│   ├── pages/                    # Dedicated route views
│   │   ├── AboutPage.jsx         # Extended about & qualification timeline
│   │   ├── ContactPage.jsx       # Dedicated contact route
│   │   ├── Home.jsx              # Landing page compiling core sections
│   │   ├── ProjectsPage.jsx      # Standalone projects directory
│   │   └── SkillsPage.jsx        # Standalone skills, tools & workflows
│   ├── styles/                   # Structured CSS architecture
│   │   ├── base/                 # Reset, variables, typography, layout
│   │   ├── components/           # Navbar, buttons, badges, glass cards
│   │   ├── pages/                # Specific page override stylesheets
│   │   ├── sections/             # Section styles (Hero, About, Footer, etc.)
│   │   └── main.css              # Central stylesheet import hub
│   ├── App.jsx                   # Root router provider & layout shell
│   └── main.jsx                  # React DOM mount point
├── index.html                    # Root HTML document shell
├── package.json                  # Dependencies, metadata, and npm scripts
└── vite.config.js                # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (**v18.0.0 or higher** recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RH247/rakibul-portfolio-react.git
   cd rakibul-portfolio-react
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` in your browser.

4. **Create an optimized production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization Guide

### 1. Updating Personal Content
All personal information, social handles, statistics, project galleries, and technical proficiencies are centralized in:
```text
src/data/portfolioData.js
```
Simply edit the objects inside this file to update the entire website automatically.

### 2. Changing Cyber Accent Colors & Theme
All global theme tokens (colors, gradients, border radius, blur intensities) are managed inside:
```text
src/styles/base/variables.css
```
Example modification:
```css
:root {
  --accent-cyan: #38bdf8;     /* Primary neon focus color */
  --accent-purple: #9333ea;   /* Ambient secondary gradient */
  --bg-primary: #030712;      /* Deep cyber background */
}
```

---

## 🌐 Browser Compatibility

Tested and optimized across all evergreen web browsers:

| Chrome | Firefox | Edge | Safari | Opera |
| :---: | :---: | :---: | :---: | :---: |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

---

## 👤 Author

**Rakibul Hasan**
- **GitHub:** [@RH247](https://github.com/RH247)
- **Role:** Frontend Engineer & Cyber UI Architect

---

## 📄 License

This project is licensed under the **MIT License** — you are free to customize and use it for your personal or commercial portfolio presentations.
`