# Niyi (Akeredolu Kolade David Omoniyi) — Personal Portfolio & Brand

An editorial personal portfolio and proof-of-work website for **Niyi (Akeredolu Kolade David Omoniyi)** — Mathematical Science student at the Federal University of Technology, Akure (FUTA), Web Developer, AI-Assisted Builder, and Problem Solver.

Designed with inspiration from modern creative developer portfolios (such as Kreatify Labs), featuring generous whitespace, deep obsidian surfaces, liquid-glass pill navigation, and bold editorial storytelling.

---

## 🌟 Highlights & Features

- **Editorial Design System**: Deep obsidian surface (`#05070a`, `#080c14`), liquid-glass pill navigation (`backdrop-filter: blur(20px)`), electric lime accents (`#c6ff3a`), and fluid `clamp()` typography.
- **Impactful Hero**: Confident and uncluttered opening highlighting identity, core statement (*"I turn ideas into digital products."*), and direct pill action buttons.
- **Curated Projects Showcase**: Large, prominent visual project cards covering all 5 core projects:
  1. **Attendance Management System** (Web Application • Firebase • Prototype)
  2. **Recipe Platform** (Web Application • Firestore • Concept / Experimental)
  3. **Avanti Vogue** (E-Commerce • Shopify Store Concept)
  4. **Digital Design & Branding** (Visual Media • Canva • Campus Design Assets)
  5. **This Portfolio** (Personal Brand • Vanilla JS/CSS Architecture)
- **Dual Visual System**: Displays real screenshots directly when placed into `assets/images/projects/`, with automatic fallback to high-fidelity prototype mockups.
- **"Ideas → Built" 4-Stage Pipeline**: Minimal, interactive process breakdown (*IDEA → PROBLEM → BUILD → RESULT*).
- **"Building With AI" Engine**: Human-centered explanation of how AI accelerates prototyping and debugging while human reasoning leads architecture.
- **Problem Solving Showcase**: Real troubleshooting case studies (*Authentication state handling, Firestore document permissions, responsive grid overflow, and async search debouncing*).
- **Clean Grouped Skills**: Categorized technology pills (*Development*, *Tools & Platforms*, *Approach & Mindset*) without fake percentage bars.
- **Direct Contacts**: Clickable primary email (`akeredoludavid967@gmail.com`) with 1-click copy toast, and direct phone link (`09054168609` / `+2349054168609`).
- **Zero Heavy Dependencies**: Pure Vanilla HTML5, modern CSS3 (Custom Properties, Grid, Flexbox), and modular JavaScript.

---

## 📁 Directory Structure

```
my-portfolio/
├── index.html              # Main single-page application with complete SEO meta tags
├── assets/
│   ├── favicon.svg         # Clean N monogram SVG favicon
│   └── images/
│       └── projects/       # Real project screenshots directory (with README guide)
├── css/
│   ├── variables.css       # Design tokens, fluid clamp typography, radii, spacing, lime accent
│   ├── base.css            # Base styles, atmospheric canvas, typography hierarchy, reset
│   ├── components.css      # Liquid-glass pill header, pill buttons, large project frames, modal
│   ├── sections.css        # Editorial hero, project cards, 4-stage pipeline, AI stepper, contact
│   └── responsive.css      # Mobile navigation drawer & strict breakpoint matrix (320px–1920px)
├── js/
│   ├── data.js             # Central data source for projects, skills, journey, & contact details
│   ├── interactions.js     # Ideas → Built tabs, AI workflow stepper, Problem Solving, CV toast
│   ├── projects.js         # Large editorial project cards, skill pills, timeline, and modal
│   ├── contact.js          # Form handler, email copy to clipboard, and toast alerts
│   └── main.js             # Sticky pill header, mobile drawer, IntersectionObserver, ScrollSpy
└── README.md               # Documentation & setup guide
```

---

## 🚀 How to Run Locally

Open `index.html` directly in any web browser, or serve it locally:

```bash
python -m http.server 3000
```

---

© 2026 Akeredolu Kolade David Omoniyi. All rights reserved.
