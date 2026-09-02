# Akeredolu Kolade David Omoniyi (niyi) — Personal Portfolio

A modern, high-performance personal brand and proof-of-work portfolio website for **Akeredolu Kolade David Omoniyi (niyi)** — Mathematical Science student at the Federal University of Technology, Akure (FUTA), Web Developer, AI-Assisted Builder, and Problem Solver.

---

## 🌟 Highlights & Features

- **Aesthetic**: Deep dark modern tech UI (`#07090e`), subtle glowing ambient mesh background, glassmorphism cards, and refined micro-interactions.
- **Hero & Live Code Terminal**: Interactive visualizer reflecting builder mindset, education at FUTA, and live building status.
- **"Ideas → Built" Signature Module**: Interactive 4-step pipeline (*Idea → Problem → Build → Result*) breaking down project development.
- **"Building With AI" Engine**: 6-phase interactive workflow (*Idea → Prompt → Build → Test → Debug → Improve*) showcasing how AI accelerates engineering without replacing human logic.
- **Troubleshooting Showcase**: Real-world problem solving (*Authentication state persistence, Firestore security rules, responsive grid overflows, and async race conditions*).
- **Categorized Skills**: Honest, authentic proficiency tags (*Comfortable with*, *Currently learning*, *Exploring*).
- **Featured Projects**: Complete with deep-dive modal views.
- **My Journey Timeline**: Clear milestones from digital commerce exploration to fullstack web development and AI-assisted workflows.
- **Contact Hub**: Interactive contact form with mailto fallback and 1-click email copy button with toast notification.
- **Zero Heavy Dependencies**: Pure Vanilla HTML5, modern CSS3 (Custom Properties, Grid, Flexbox), and modular JavaScript.

---

## 📁 Directory Structure

```
my-portfolio/
├── index.html              # Main single-page application
├── css/
│   ├── variables.css       # Design tokens, color palettes, typography, radii
│   ├── base.css            # Base styles, ambient gradients, typography, reset
│   ├── components.css      # Reusable UI components (buttons, badges, modals, toasts)
│   ├── sections.css        # Section-specific styles
│   └── responsive.css      # Mobile navigation drawer and responsive breakpoints
├── js/
│   ├── data.js             # Central data source for projects, skills, journey, & builds
│   ├── interactions.js     # "Ideas → Built" tabs, AI workflow stepper, Troubleshooting
│   ├── projects.js         # Project cards, skill pills, timeline, and quick-view modal
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
4. **Update Contact Info**: Adjust `PORTFOLIO_DATA.profile.email` or social URLs in `js/data.js`.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using Python or Node:

### Using Python:
```bash
python -m http.server 3000
```

### Using Node / npx:
```bash
npx serve .
```

---

## 🌐 How to Deploy for Free

### Option 1: GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` / `root` and click **Save**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Vercel
1. Import your GitHub repository to [Vercel](https://vercel.com).
2. Click **Deploy**. Vercel will automatically host your static portfolio with global CDN caching.

### Option 3: Netlify
1. Drag and drop the portfolio folder onto [Netlify Drop](https://app.netlify.com/drop), or connect via GitHub.
2. Your portfolio will deploy instantly with HTTPS enabled.

---

© 2026 Akeredolu Kolade David Omoniyi. All rights reserved.
