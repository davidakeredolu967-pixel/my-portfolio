/**
 * Portfolio Data Source - Akeredolu Kolade David Omoniyi (niyi)
 * Easy to update, extend, and maintain without editing HTML templates.
 */

window.PORTFOLIO_DATA = {
  profile: {
    fullName: "Akeredolu Kolade David Omoniyi",
    displayName: "niyi",
    role: "Web Developer • AI-Assisted Developer • Digital Builder • Problem Solver",
    location: "Nigeria",
    education: "Mathematical Science student at the Federal University of Technology, Akure (FUTA)",
    email: "akeredoludavid18@gmail.com", // user can easily change or use placeholder
    github: "https://github.com/davidakeredolu967-pixel",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },

  skills: {
    development: [
      { name: "HTML5 / Semantic HTML", level: "Comfortable with", tag: "comfortable" },
      { name: "CSS3 / Modern Layouts", level: "Comfortable with", tag: "comfortable" },
      { name: "JavaScript (ES6+)", level: "Comfortable with", tag: "comfortable" },
      { name: "React", level: "Currently learning", tag: "learning" },
      { name: "Firebase Auth & SDK", level: "Comfortable with", tag: "comfortable" },
      { name: "Firestore Database", level: "Comfortable with", tag: "comfortable" },
      { name: "Git Version Control", level: "Comfortable with", tag: "comfortable" },
      { name: "GitHub Collaboration", level: "Comfortable with", tag: "comfortable" }
    ],
    aiWorkflow: [
      { name: "AI-Assisted Coding", level: "Comfortable with", tag: "comfortable" },
      { name: "Vibe Coding & Iteration", level: "Comfortable with", tag: "comfortable" },
      { name: "Prompt Engineering", level: "Comfortable with", tag: "comfortable" },
      { name: "Debugging with AI", level: "Comfortable with", tag: "comfortable" },
      { name: "Rapid Prototyping", level: "Comfortable with", tag: "comfortable" },
      { name: "Context & Code Reasoning", level: "Comfortable with", tag: "comfortable" }
    ],
    digitalBusiness: [
      { name: "Shopify Store Setup", level: "Exploring", tag: "exploring" },
      { name: "E-commerce Architecture", level: "Exploring", tag: "exploring" },
      { name: "Product Research", level: "Exploring", tag: "exploring" },
      { name: "Dropshipping Concepts", level: "Exploring", tag: "exploring" }
    ],
    design: [
      { name: "Canva Pro", level: "Comfortable with", tag: "comfortable" },
      { name: "UI & Layout Design", level: "Comfortable with", tag: "comfortable" },
      { name: "Digital Branding", level: "Comfortable with", tag: "comfortable" },
      { name: "Social Media Graphics", level: "Comfortable with", tag: "comfortable" }
    ]
  },

  projects: [
    {
      id: "project-attendance",
      number: "01",
      title: "Attendance Management System",
      category: "Web Application",
      status: "In Development",
      statusColor: "green",
      shortDesc: "A professional attendance management platform designed to allow users to register, sign in, and sign out while giving administrators a centralized dashboard for real-time tracking.",
      features: [
        "User authentication & session persistence",
        "Sign-in / sign-out timestamp recording",
        "Centralized administrator monitoring dashboard",
        "Role-based access & user activity management",
        "Secure cloud integration with Firebase Firestore"
      ],
      techStack: ["JavaScript", "React", "Firebase Auth", "Firestore", "CSS3"],
      details: {
        problem: "Manual attendance records lead to lost data, inaccurate timestamps, and administrative delays.",
        solution: "Engineered an automated cloud-backed check-in system with dynamic timestamp logging and instant admin overview.",
        takeaway: "Deepened practical skills in managing Firebase authentication state, Firestore rules, and complex user flows."
      }
    },
    {
      id: "project-recipe",
      number: "02",
      title: "Recipe Platform",
      category: "Web Application",
      status: "Built / Experimental",
      statusColor: "green",
      shortDesc: "A responsive culinary platform built to organize, filter, and present diverse recipe collections through a clean, accessible, and mobile-friendly interface.",
      features: [
        "Dynamic categorization & recipe search",
        "Structured ingredient and step breakdown",
        "Firebase Firestore dynamic content integration",
        "Responsive, mobile-optimized culinary UI",
        "Fast client-side rendering"
      ],
      techStack: ["JavaScript", "Firebase", "Firestore", "CSS Grid", "HTML5"],
      details: {
        problem: "Users need a fast, clutter-free way to explore and read recipes on both desktop and mobile while cooking.",
        solution: "Crafted a lightweight web app with fast data retrieval from Firestore and clean visual hierarchy.",
        takeaway: "Mastered asynchronous JavaScript data fetching, UI reactivity, and clean relational data structures."
      }
    },
    {
      id: "project-avanti",
      number: "03",
      title: "Avanti Vogue — E-commerce Concept",
      category: "E-Commerce",
      status: "Concept / Exploration",
      statusColor: "amber",
      shortDesc: "An e-commerce concept exploring modern online retail aesthetics, Shopify store architecture, curated product selection, and digital brand positioning.",
      features: [
        "Modern fashion retail storefront concept",
        "Product curation and niche research",
        "Conversion-focused layout & branding",
        "Online retail customer journey planning",
        "Shopify digital commerce exploration"
      ],
      techStack: ["Shopify Concept", "E-Commerce", "Branding", "UI Design", "Market Research"],
      details: {
        problem: "Standing out in modern digital retail requires a balance between strong visual identity and smooth checkout UX.",
        solution: "Explored full brand direction, product catalog strategies, and visual storytelling for digital storefronts.",
        takeaway: "Gained insight into customer touchpoints, digital commerce funnels, and store branding principles."
      }
    },
    {
      id: "project-branding",
      number: "04",
      title: "Digital Design & Branding Portfolio",
      category: "Design & Media",
      status: "Active Gallery",
      statusColor: "blue",
      shortDesc: "A curated collection of visual designs, university department promotional materials, event posters, and social media branding concepts.",
      features: [
        "Event and department promotional flyers",
        "Social media graphics & visual identity",
        "Brand style guide concepts & typography",
        "Digital banners and visual communication assets"
      ],
      techStack: ["Canva", "UI Design", "Typography", "Visual Branding", "Digital Media"],
      details: {
        problem: "Campus events and digital campaigns often suffer from dull or inconsistent visual communication.",
        solution: "Designed high-contrast, eye-catching visual assets that clearly deliver key messages and engage audiences.",
        takeaway: "Honed intuition for color balance, spatial hierarchy, typography selection, and brand consistency."
      }
    }
  ],

  ideasToBuilt: [
    {
      id: "attendance-case",
      projectName: "Attendance Management System",
      badge: "In Development",
      steps: {
        idea: {
          title: "The Idea",
          desc: "To create a seamless, paperless check-in and check-out platform where student or team attendance is recorded accurately in real-time."
        },
        problem: {
          title: "The Problem",
          desc: "Paper logs and manual spreadsheets are prone to inaccuracies, buddy-punching, lost records, and tedious end-of-month calculations."
        },
        build: {
          title: "The Build",
          desc: "Designed an authentication-first architecture using Firebase Auth and Firestore. Built reactive dashboard components and timestamped event listeners."
        },
        result: {
          title: "The Result",
          desc: "A working prototype with instantaneous status updates, secure access control, and an administrator panel that saves hours of manual work."
        }
      }
    },
    {
      id: "recipe-case",
      projectName: "Recipe Platform",
      badge: "Built / Experimental",
      steps: {
        idea: {
          title: "The Idea",
          desc: "To build a modern culinary hub where discovering recipes is fast, categorized, and distraction-free on any screen size."
        },
        problem: {
          title: "The Problem",
          desc: "Many online recipe websites are overloaded with popups and bloated layout scripts, frustrating users who just want clear ingredients and instructions."
        },
        build: {
          title: "The Build",
          desc: "Structured clean Firestore collections for categories and ingredients. Built dynamic JS rendering functions and CSS Grid layouts for effortless readability."
        },
        result: {
          title: "The Result",
          desc: "A lightning-fast, responsive web application that displays recipes crisply and allows rapid filtering by meal type."
        }
      }
    },
    {
      id: "avanti-case",
      projectName: "Avanti Vogue — E-commerce",
      badge: "Concept / Exploration",
      steps: {
        idea: {
          title: "The Idea",
          desc: "To formulate an upscale yet accessible digital fashion boutique brand from scratch."
        },
        problem: {
          title: "The Problem",
          desc: "New e-commerce brands often fail due to mismatched visual identity, weak value proposition, and confusing product layouts."
        },
        build: {
          title: "The Build",
          desc: "Researched trending lifestyle products, configured Shopify layout flows, established typography rules, and designed brand assets."
        },
        result: {
          title: "The Result",
          desc: "A comprehensive e-commerce blueprint demonstrating strong visual branding, conversion strategy, and store structure."
        }
      }
    },
    {
      id: "portfolio-case",
      projectName: "Personal Brand & Portfolio",
      badge: "In Development",
      steps: {
        idea: {
          title: "The Idea",
          desc: "To build a bespoke proof-of-work portfolio that communicates ambition, mathematical thinking, problem-solving, and AI-accelerated workflows."
        },
        problem: {
          title: "The Problem",
          desc: "Generic student CV websites look identical and fail to demonstrate real problem-solving capabilities or technical curiosity."
        },
        build: {
          title: "The Build",
          desc: "Created a modular design system from scratch using vanilla CSS, semantic HTML5, accessible interactions, and clean JavaScript data architecture."
        },
        result: {
          title: "The Result",
          desc: "A distinct, lightning-fast portfolio that acts as an evolving digital command center for all current and future projects."
        }
      }
    }
  ],

  aiWorkflow: [
    {
      step: "01",
      title: "Idea & Architecture",
      icon: "lightbulb",
      summary: "Framing the core objective and technical boundaries before writing a single prompt.",
      detail: "I begin by clearly defining what problem the software solves, what data models are required, and what the user experience should feel like. Clear human intent is the essential prerequisite for high-leverage AI collaboration."
    },
    {
      step: "02",
      title: "Targeted Prompting",
      icon: "terminal",
      summary: "Drafting precise, context-rich prompts with explicit constraints and technical specifications.",
      detail: "Instead of generic requests, I provide exact constraints: data schemas, security rules, styling tokens, edge case handling, and preferred library patterns. This ensures generated code fits the existing architecture seamlessly."
    },
    {
      step: "03",
      title: "Build & Assembly",
      icon: "cpu",
      summary: "Assembling functional modules, combining AI-generated snippets with custom logic.",
      detail: "I inspect and evaluate every generated snippet, ensuring clean separation of concerns, semantic structure, and maintainable organization across components and scripts."
    },
    {
      step: "04",
      title: "Testing & Validation",
      icon: "check-circle",
      summary: "Validating edge cases, responsive behavior, and accessibility.",
      detail: "Code is run through rigorous tests: checking mobile breakpoints, validating form states, ensuring asynchronous promises handle failure gracefully, and auditing rendering speed."
    },
    {
      step: "05",
      title: "Debugging & Troubleshooting",
      icon: "bug",
      summary: "Diagnosing console errors, state mismatches, and configuration glitches.",
      detail: "When bugs emerge, I use AI to analyze stack traces and explore alternative solutions, while manually verifying root causes in browser devtools and database rules."
    },
    {
      step: "06",
      title: "Refinement & Polish",
      icon: "sparkles",
      summary: "Elevating performance, micro-interactions, and visual elegance.",
      detail: "Final tuning of transition easings, reduced motion support, clean comments, and performance optimization to turn a prototype into a refined, reliable digital product."
    }
  ],

  troubleshooting: [
    {
      title: "Authentication State Persistence",
      category: "Firebase / Auth",
      badge: "Resolved",
      problem: "User session unexpectedly dropped on page refresh when accessing protected admin views.",
      solution: "Implemented onAuthStateChanged listener with dedicated local loading state, preventing premature redirects before credentials initialize."
    },
    {
      title: "Firestore Security & Permission Rules",
      category: "Database / Security",
      badge: "Resolved",
      problem: "Write operations failed silently due to overly restrictive or misconfigured Firestore document paths.",
      solution: "Tested rules against Firebase Emulator, structured explicit request.auth checks, and validated user role claims."
    },
    {
      title: "Responsive Grid Overflow on Mobile",
      category: "CSS / Layout",
      badge: "Resolved",
      problem: "Card grids causing unwanted horizontal scrolling and squeezed text on small mobile screens (< 380px).",
      solution: "Replaced fixed minmax values with auto-fit and clamp() typography, adding defensive min-width constraints."
    },
    {
      title: "Asynchronous Data Fetch Race Conditions",
      category: "JavaScript / Logic",
      badge: "Resolved",
      problem: "Fast user filtering caused stale recipe search results to overwrite newer queries.",
      solution: "Implemented debounce handling and request cancellation tokens to ensure only the latest query resolves."
    }
  ],

  journey: [
    {
      period: "Milestone 01",
      title: "Exploring Digital Business & E-Commerce",
      desc: "Began researching e-commerce models, Shopify store setup, digital marketing funnels, and online retail branding. Sparked a passion for digital products."
    },
    {
      period: "Milestone 02",
      title: "Learning Web Development",
      desc: "Dove into core frontend technologies (HTML5, CSS3, JavaScript). Started building custom landing pages and understanding how the web works under the hood."
    },
    {
      period: "Milestone 03",
      title: "Building With Firebase & Backend Services",
      desc: "Expanded into dynamic web applications: authentication flows, NoSQL databases (Firestore), security rules, and real-time data persistence."
    },
    {
      period: "Milestone 04",
      title: "AI-Assisted Development & Vibe Coding",
      desc: "Integrated modern AI tools into the daily workflow for rapid prototyping, deep debugging, architecture exploration, and accelerating project iteration speed."
    },
    {
      period: "Milestone 05",
      title: "Building Structured Digital Products",
      desc: "Shifted focus toward end-to-end products: designing solutions from initial problem statements to functional prototypes (Attendance System, Recipe Hub, Portfolio)."
    },
    {
      period: "Present Day",
      title: "Now: Advancing Skills & Seeking Building Opportunities",
      desc: "Currently a Mathematical Science student at FUTA, continuously sharpening fullstack & product skills, troubleshooting real website problems, and building useful tools."
    }
  ],

  leadership: [
    {
      title: "Student Coordination",
      desc: "Active engagement in organizing academic study circles and coordinating group tasks among peers at FUTA."
    },
    {
      title: "Academic & Team Communication",
      desc: "Facilitating clear communication channels for course updates, collaborative problem sets, and departmental announcements."
    },
    {
      title: "Event & Project Organization",
      desc: "Participating in organizing student-led tech discussions, department seminars, and collaborative academic initiatives."
    },
    {
      title: "Group Project Coordination",
      desc: "Guiding project task breakdowns, milestone tracking, and shared resource management in team assignments."
    },
    {
      title: "Peer Problem Solving",
      desc: "Assisting fellow students in debugging basic coding issues, navigating software tools, and understanding mathematical concepts."
    },
    {
      title: "Continuous Self-Direction",
      desc: "Balancing university coursework in Mathematical Science with independent, daily software development and digital building."
    }
  ],

  currentlyBuilding: [
    {
      title: "Personal Portfolio & Brand Hub",
      status: "In Development",
      statusType: "green",
      desc: "Engineering this modern, interactive portfolio with modular vanilla architecture, custom design tokens, and interactive showcase tools."
    },
    {
      title: "Attendance Management System",
      status: "In Development",
      statusType: "green",
      desc: "Developing the real-time Firebase-powered check-in/out engine, admin monitoring panel, and reporting dashboard."
    },
    {
      title: "Future Digital Tools & SaaS Concepts",
      status: "Exploring",
      statusType: "amber",
      desc: "Researching micro-tools for campus utility, productivity workflows, and specialized e-commerce utilities."
    }
  ]
};
