# Niyi (Akeredolu Kolade David Omoniyi) — Personal Portfolio & Brand

A modern, high-performance personal brand and proof-of-work portfolio website for **Niyi (Akeredolu Kolade David Omoniyi)** — Mathematical Science student at the Federal University of Technology, Akure (FUTA), Web Developer, AI-Assisted Builder, and Problem Solver.

---

## 🌟 Highlights & Features

- **Design System**: Restrained modern tech palette (`#07090e`, `#0a0e17`), fluid `clamp()` typography, subtle architectural grid canvas, and refined micro-interactions.
- **Hero & Interactive Builder Canvas**: Asymmetrical two-column composition with live workspace code inspector and telemetry viewer.
- **Editorial Projects Showcase**: Alternating layout (UI preview left / content right, content left / UI preview right) with simulated high-fidelity UI mockup components (Dashboard, Recipe platform, E-Commerce, and Visual Media) and deep-dive case study modal.
- **"Ideas → Built" Signature Module**: Interactive 4-phase pipeline (*Idea → Problem → Build → Result*) breaking down project engineering.
- **"Building With AI" Engine**: 6-phase interactive workflow (*Idea → Prompt → Build → Test → Debug → Improve*) showcasing how AI accelerates engineering without replacing human logic.
- **Troubleshooting Showcase**: Real-world problem solving (*Authentication state persistence, Firestore security rules, responsive grid overflows, and async race conditions*).
- **Categorized Skills**: Honest, authentic proficiency tags (*Comfortable with*, *Currently learning*, *Exploring*).
- **Direct Contacts**: Clickable primary email (`akeredoludavid967@gmail.com`) + 1-click clipboard copy toast, and clickable phone (`09054168609` / `tel:+2349054168609`).
- **Zero Heavy Dependencies**: Pure Vanilla HTML5, modern CSS3 (Custom Properties, Grid, Flexbox), and modular JavaScript.

---

## 📁 Directory Structure

```
my-portfolio/
├── index.html              # Main single-page application with complete SEO meta tags
├── css/
│   ├── variables.css       # Design tokens, fluid clamp typography, radii, spacing
│   ├── base.css            # Base styles, architectural canvas, typography hierarchy, reset
│   ├── components.css      # Reusable UI components (buttons, badges, mock frames, modals, toasts)
│   ├── sections.css        # Alternating project layouts, two-column hero, redesigned sections
│   └── responsive.css      # Mobile navigation drawer & strict breakpoint matrix (320px–1920px)
├── js/
│   ├── data.js             # Central data source for projects, skills, journey, & contact details
│   ├── interactions.js     # Hero canvas tabs, "Ideas → Built" selector, AI stepper, Troubleshooting
│   ├── projects.js         # Alternating project cards, skill pills, timeline, and quick-view modal
│   ├── contact.js          # Form handler, email copy to clipboard, and toast alerts
│   └── main.js             # Header scroll, mobile drawer, IntersectionObserver, ScrollSpy
└── README.md               # Documentation & setup guide
```

---

## 🛠️ How to Customize

All data is separated into [`js/data.js`](js/data.js) for quick edits:

1. **Update Projects**: Open `js/data.js` and add/edit objects in `PORTFOLIO_DATA.projects`.
2. **Update Skills**: Edit `PORTFOLIO_DATA.skills` with your latest technologies and proficiency tags.
3. **Update Ideas → Built**: Add new case studies under `PORTFOLIO_DATA.ideasToBuilt`.
4. **Update Contact Info**: Adjust `PORTFOLIO_DATA.profile` with updated email or social URLs in `js/data.js`.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using Python or Node:

### Open Directly:
Double click `index.html` in your file explorer.

### Using Python:
```bash
python -m http.server 3000
```

---

## 🌐 How to Deploy for Free

### Option 1: GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` / `root` and click **Save**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Vercel / Netlify
Connect your GitHub repository or drag-and-drop the folder for instant global HTTPS deployment.

---

© 2026 Akeredolu Kolade David Omoniyi. All rights reserved.
