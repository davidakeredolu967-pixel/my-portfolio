/**
 * Portfolio Data Source — Niyi (Akeredolu Kolade David Omoniyi)
 * Clean, structured, scalable data object.
 */

window.PORTFOLIO_DATA = {
  profile: {
    displayName: "Niyi",
    fullName: "Akeredolu Kolade David Omoniyi",
    role: "Web Developer • AI-Assisted Developer • Digital Builder • Problem Solver",
    location: "Nigeria",
    education: "Mathematical Science student at the Federal University of Technology, Akure (FUTA)",
    email: "akeredoludavid967@gmail.com",
    phone: "09054168609",
    phoneTel: "+2349054168609",
    github: "https://github.com/davidakeredolu967-pixel",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },

  skills: {
    development: [
      { name: "HTML5 & Semantic Markup", level: "Comfortable with", tag: "comfortable" },
      { name: "CSS3 / Flexbox & Grid", level: "Comfortable with", tag: "comfortable" },
      { name: "JavaScript (ES6+)", level: "Comfortable with", tag: "comfortable" },
      { name: "React Components", level: "Currently learning", tag: "learning" },
      { name: "Firebase Authentication", level: "Comfortable with", tag: "comfortable" },
      { name: "Cloud Firestore Database", level: "Comfortable with", tag: "comfortable" },
      { name: "Git & Version Control", level: "Comfortable with", tag: "comfortable" },
      { name: "GitHub Collaboration", level: "Comfortable with", tag: "comfortable" }
    ],
    aiWorkflow: [
      { name: "AI-Assisted Coding", level: "Comfortable with", tag: "comfortable" },
      { name: "Vibe Coding & Rapid Scaffolding", level: "Comfortable with", tag: "comfortable" },
      { name: "Context & Prompt Engineering", level: "Comfortable with", tag: "comfortable" },
      { name: "Debugging & Stack Trace Analysis", level: "Comfortable with", tag: "comfortable" },
      { name: "Rapid Prototyping", level: "Comfortable with", tag: "comfortable" },
      { name: "Code Understanding & Refactoring", level: "Comfortable with", tag: "comfortable" }
    ],
    digitalBusiness: [
      { name: "Shopify Store Architecture", level: "Exploring", tag: "exploring" },
      { name: "E-Commerce Strategy", level: "Exploring", tag: "exploring" },
      { name: "Product & Market Research", level: "Exploring", tag: "exploring" },
      { name: "Digital Dropshipping Concepts", level: "Exploring", tag: "exploring" }
    ],
    design: [
      { name: "Canva Design Suite", level: "Comfortable with", tag: "comfortable" },
      { name: "UI & Layout Hierarchy", level: "Comfortable with", tag: "comfortable" },
      { name: "Digital Brand Styling", level: "Comfortable with", tag: "comfortable" },
      { name: "Social Media Graphics", level: "Comfortable with", tag: "comfortable" }
    ]
  },

  projects: [
    {
      id: "project-attendance",
      number: "01",
      title: "Attendance Management System",
      category: "Web Application / Cloud System",
      status: "In Development",
      statusColor: "green",
      shortDesc: "A centralized attendance management platform designed to allow users to register, sign in, and sign out while giving administrators real-time tracking dashboards.",
      problemSolved: "Manual sign-in sheets in organizations and classrooms suffer from lost logs, proxy sign-ins, and tedious end-of-month administrative recalculations.",
      solutionApproach: "Engineered an authentication-first cloud architecture using Firebase Auth and Firestore with real-time timestamp recording and role-based admin authorization.",
      features: [
        "Secure user registration, authentication & session state",
        "Automated sign-in / sign-out timestamp recording",
        "Centralized administrator dashboard for real-time monitoring",
        "Role-based access controls and user activity logging",
        "Cloud Firestore dynamic data persistence"
      ],
      techStack: ["JavaScript", "React", "Firebase Auth", "Cloud Firestore", "CSS3"],
      previewType: "dashboard",
      details: {
        problem: "Paper logs and manual spreadsheets are prone to inaccuracies, buddy-punching, lost records, and tedious end-of-month calculations.",
        solution: "Engineered an automated cloud-backed check-in system with dynamic timestamp logging and instant admin overview.",
        takeaway: "Mastered persistent authentication states in asynchronous JavaScript, Firebase security rules, and real-time document listeners."
      }
    },
    {
      id: "project-recipe",
      number: "02",
      title: "Recipe Platform",
      category: "Web Application / Dynamic UI",
      status: "Built / Experimental",
      statusColor: "green",
      shortDesc: "A responsive culinary exploration platform built to organize, filter, and present diverse recipe collections through a clean, distraction-free interface.",
      problemSolved: "Many online cooking platforms are cluttered with overwhelming ads and slow script loads, making it difficult for users to read ingredients and steps on mobile.",
      solutionApproach: "Designed a lightweight frontend with fast asynchronous Firestore queries, structured ingredient breakdowns, and mobile-first CSS Grid layouts.",
      features: [
        "Dynamic recipe category filtering & instant search",
        "Clean, structured ingredient and step-by-step instructions",
        "Cloud Firestore dynamic content integration",
        "Mobile-optimized culinary view for cooking environments",
        "Fast client-side rendering with zero bloat"
      ],
      techStack: ["JavaScript (ES6+)", "Firebase", "Cloud Firestore", "CSS Grid", "HTML5"],
      previewType: "recipe",
      details: {
        problem: "Users need a fast, clutter-free way to explore and read recipes on both desktop and mobile while cooking.",
        solution: "Crafted a lightweight web app with fast data retrieval from Firestore and clean visual hierarchy.",
        takeaway: "Deepened practical skills in asynchronous JavaScript data handling, UI state reactivity, and mobile design patterns."
      }
    },
    {
      id: "project-avanti",
      number: "03",
      title: "Avanti Vogue — E-commerce Concept",
      category: "E-Commerce / Digital Store",
      status: "Concept / Exploration",
      statusColor: "amber",
      shortDesc: "An e-commerce store concept exploring online fashion retail aesthetics, Shopify store structure, curated lifestyle products, and modern digital brand positioning.",
      problemSolved: "Emerging e-commerce stores often fail to convert visitors due to generic theme setups, cluttered navigation, and weak visual brand identity.",
      solutionApproach: "Developed a comprehensive digital retail blueprint focusing on clear typography, product storytelling, friction-free customer journey, and Shopify layout principles.",
      features: [
        "Curated fashion retail storefront layout",
        "E-commerce product research and lifestyle niche selection",
        "Conversion-focused customer touchpoint planning",
        "Digital brand positioning & typography guidelines",
        "Shopify digital commerce structure exploration"
      ],
      techStack: ["Shopify Concept", "E-Commerce Architecture", "UI Design", "Brand Strategy", "Market Research"],
      previewType: "ecommerce",
      details: {
        problem: "Standing out in modern digital retail requires a balance between strong visual identity and smooth checkout UX.",
        solution: "Explored full brand direction, product catalog strategies, and visual storytelling for digital storefronts.",
        takeaway: "Gained insight into customer touchpoints, digital commerce funnels, and store branding principles."
      }
    },
    {
      id: "project-branding",
      number: "04",
      title: "Digital Design & Branding Showcase",
      category: "Design & Visual Communication",
      status: "Active Gallery",
      statusColor: "blue",
      shortDesc: "A curated collection of visual communications, event posters, department designs, and promotional assets created for campus initiatives and digital campaigns.",
      problemSolved: "University initiatives and digital announcements often struggle to capture audience attention due to inconsistent styling and poor visual hierarchy.",
      solutionApproach: "Produced high-contrast, eye-catching visual assets adhering to deliberate color theory, readable typography, and coherent visual branding.",
      features: [
        "Departmental and event promotional designs",
        "Social media graphics & visual identity concepts",
        "Typography hierarchy and brand style assets",
        "Digital flyers and communication media"
      ],
      techStack: ["Canva Pro", "Visual Identity", "Typography", "Digital Media", "UI Layout"],
      previewType: "design",
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
          desc: "To create a seamless, paperless check-in platform where student or team attendance is recorded accurately in real-time."
        },
        problem: {
          title: "The Problem",
          desc: "Paper logs and manual spreadsheets are prone to inaccuracies, buddy-punching, lost records, and tedious end-of-month recalculations."
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
      projectName: "Personal Portfolio & Brand",
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
      icon: "01",
      summary: "Framing the core objective and technical boundaries before writing prompts.",
      detail: "I begin by clearly defining what problem the software solves, what data models are required, and what the user experience should feel like. Clear human intent is the essential prerequisite for high-leverage AI collaboration."
    },
    {
      step: "02",
      title: "Targeted Prompting",
      icon: "02",
      summary: "Drafting precise prompts with explicit constraints and technical specifications.",
      detail: "Instead of generic requests, I provide exact constraints: data schemas, security rules, styling tokens, edge case handling, and preferred library patterns. This ensures generated code fits the existing architecture seamlessly."
    },
    {
      step: "03",
      title: "Build & Assembly",
      icon: "03",
      summary: "Assembling functional modules, combining AI-generated snippets with custom logic.",
      detail: "I inspect and evaluate every generated snippet, ensuring clean separation of concerns, semantic structure, and maintainable organization across components and scripts."
    },
    {
      step: "04",
      title: "Testing & Validation",
      icon: "04",
      summary: "Validating edge cases, responsive behavior, and accessibility across devices.",
      detail: "Code is run through rigorous checks: validating mobile breakpoints, checking form states, ensuring asynchronous promises handle failure gracefully, and auditing rendering speed."
    },
    {
      step: "05",
      title: "Debugging & Troubleshooting",
      icon: "05",
      summary: "Diagnosing console errors, state mismatches, and configuration glitches.",
      detail: "When bugs emerge, I use AI to analyze stack traces and explore alternative solutions, while manually verifying root causes in browser devtools and database rules."
    },
    {
      step: "06",
      title: "Refinement & Polish",
      icon: "06",
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
      title: "Currently: Advancing Skills & Building",
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
