/**
 * Central Portfolio Data Store — Niyi (Akeredolu Kolade David Omoniyi)
 * Authentic, Defensible, and Grounded in Real Builder Experience
 */

window.PORTFOLIO_DATA = {
  profile: {
    displayName: "Niyi",
    fullName: "Akeredolu Kolade David Omoniyi",
    headline: "I turn ideas into digital products.",
    role: "Web Developer • AI-Assisted Developer • Digital Builder • Problem Solver",
    location: "Nigeria",
    education: "Mathematical Science student at the Federal University of Technology, Akure (FUTA)",
    bioShort: "Mathematical Science student at FUTA with a strong focus on building responsive web applications, experimenting with digital products, and troubleshooting website issues.",
    email: "akeredoludavid967@gmail.com",
    phone: "+2349054168609",
    phoneDisplay: "09054168609",
    github: "https://github.com/davidakeredolu967-pixel",
    cvAvailable: false,
    cvPath: "assets/cv.pdf"
  },

  skills: {
    development: [
      { name: "HTML", tag: "comfortable" },
      { name: "CSS", tag: "comfortable" },
      { name: "JavaScript", tag: "comfortable" },
      { name: "React", tag: "learning" },
      { name: "Firebase", tag: "comfortable" },
      { name: "Firestore", tag: "comfortable" },
      { name: "Git", tag: "comfortable" }
    ],
    tools: [
      { name: "GitHub", tag: "comfortable" },
      { name: "Canva", tag: "comfortable" },
      { name: "Shopify", tag: "exploring" },
      { name: "VS Code", tag: "comfortable" }
    ],
    approach: [
      { name: "Responsive Design", tag: "comfortable" },
      { name: "Problem Solving", tag: "comfortable" },
      { name: "AI-Assisted Development", tag: "comfortable" },
      { name: "Rapid Prototyping", tag: "comfortable" },
      { name: "UI Design", tag: "comfortable" }
    ]
  },

  projects: [
    {
      id: "project-attendance",
      number: "01",
      title: "Attendance Management System",
      category: "Web Application",
      status: "In Development",
      statusBadge: "Prototype",
      statusColor: "lime",
      shortDesc: "A web platform designed to let users register, sign in, and record check-ins with an administrative overview for tracking session records.",
      problemSolved: "Paper attendance sheets are prone to lost records, inaccurate timestamps, and tedious manual tallying.",
      features: [
        "User registration and sign-in authentication",
        "Sign-in and sign-out timestamp recording",
        "Centralized administrator monitoring overview",
        "Firebase & Firestore cloud data integration"
      ],
      techStack: ["JavaScript", "React", "Firebase", "Firestore", "CSS"],
      imageSrc: "assets/images/projects/attendance-system.jpg",
      previewType: "dashboard",
      details: {
        problem: "Manual attendance records lead to lost data, inaccurate timestamps, and administrative delays.",
        solution: "Building a cloud-backed check-in system with dynamic timestamp logging and an administrator overview.",
        takeaway: "Practicing Firebase authentication state handling, Firestore document reads/writes, and building reactive UI states."
      }
    },
    {
      id: "project-recipe",
      number: "02",
      title: "Recipe Platform",
      category: "Web Application",
      status: "Built / Experimental",
      statusBadge: "Concept",
      statusColor: "cyan",
      shortDesc: "A responsive culinary platform designed to organize and present cooking recipes through a clean, fast, clutter-free interface.",
      problemSolved: "Many recipe websites are crowded with intrusive ads and slow scripts that make reading ingredients on mobile phones difficult.",
      features: [
        "Recipe category browsing and instant search",
        "Clean ingredient indexing and preparation timing",
        "Firebase Firestore dynamic content integration",
        "Mobile-friendly interface for kitchen use"
      ],
      techStack: ["JavaScript", "Firebase", "Firestore", "HTML", "CSS"],
      imageSrc: "assets/images/projects/recipe-platform.jpg",
      previewType: "recipe",
      details: {
        problem: "Users need a fast, clutter-free way to explore and read recipes on both desktop and mobile while cooking.",
        solution: "Crafted a lightweight web app with clean data retrieval from Firestore and straightforward visual hierarchy.",
        takeaway: "Deepened practical skills in asynchronous JavaScript, Firestore queries, and mobile-friendly layouts."
      }
    },
    {
      id: "project-avanti",
      number: "03",
      title: "Avanti Vogue — E-commerce Concept",
      category: "E-Commerce",
      status: "Concept / Exploration",
      statusBadge: "Store Concept",
      statusColor: "amber",
      shortDesc: "An e-commerce concept exploring lifestyle fashion retail, Shopify store structure, product curation, and digital brand guidelines.",
      problemSolved: "New online storefronts often struggle with weak visual identity and confusing navigation that hurts customer engagement.",
      features: [
        "Online fashion boutique store concept layout",
        "Product selection and lifestyle niche research",
        "Customer journey and checkout flow planning",
        "Store visual branding and typography guidelines"
      ],
      techStack: ["Shopify", "E-commerce", "Product research", "UI design", "Canva"],
      imageSrc: "assets/images/projects/avanti-vogue.jpg",
      previewType: "ecommerce",
      details: {
        problem: "Standing out in modern digital retail requires a balance between strong visual identity and smooth navigation.",
        solution: "Explored brand direction, product catalog strategies, and visual storytelling for digital storefronts.",
        takeaway: "Gained practical insight into customer touchpoints, e-commerce structure, and store branding principles."
      }
    },
    {
      id: "project-branding",
      number: "04",
      title: "Digital Design & Branding",
      category: "Design & Media",
      status: "Active Gallery",
      statusBadge: "Visual Media",
      statusColor: "indigo",
      shortDesc: "A collection of digital designs, promotional materials, department event flyers, and social media graphics created for campus events.",
      problemSolved: "Departmental and student event announcements often lack consistent visual appeal to effectively engage their audience.",
      features: [
        "Departmental and university event promotional flyers",
        "Social media graphics & visual identity materials",
        "Brand style and typography experiments",
        "Digital communication and banner assets"
      ],
      techStack: ["Canva", "UI design", "Digital branding", "Social media graphics"],
      imageSrc: "assets/images/projects/branding.jpg",
      previewType: "design",
      details: {
        problem: "Campus events and digital announcements often suffer from dull or inconsistent visual communication.",
        solution: "Designed visual assets that clearly deliver key messages and engage audiences.",
        takeaway: "Developed a stronger eye for color harmony, spatial hierarchy, typography selection, and brand consistency."
      }
    },
    {
      id: "project-portfolio",
      number: "05",
      title: "Personal Portfolio & Brand",
      category: "Personal Brand & Web Platform",
      status: "Production Ready",
      statusBadge: "Live Build",
      statusColor: "lime",
      shortDesc: "This personal portfolio website, designed with an editorial studio aesthetic, generous whitespace, and pure semantic HTML/CSS/JS architecture.",
      problemSolved: "Generic templates fail to communicate authentic problem-solving capability, technical discipline, or modern builder workflow.",
      features: [
        "Minimal floating liquid-glass pill navigation",
        "Responsive single-page architecture across 320px to 1920px",
        "Interactive 4-stage process and problem-solving showcases",
        "Zero external framework dependencies (Vanilla JS/CSS)"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      imageSrc: "assets/images/projects/portfolio.jpg",
      previewType: "portfolio",
      details: {
        problem: "Need a high-polish, authentic proof-of-work website that is defensible in an interview and shows real capability.",
        solution: "Built a custom, responsive, accessible portfolio with editorial typography and modular JavaScript.",
        takeaway: "Mastered fluid clamp typography, CSS custom properties architecture, and accessible interactive modules."
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
          desc: "Create a simple, paperless check-in tool where attendance records can be monitored digitally."
        },
        problem: {
          title: "The Problem",
          desc: "Paper logs and manual sheets are easily misplaced, prone to errors, and require tedious manual calculation."
        },
        build: {
          title: "The Build",
          desc: "Built user authentication using Firebase Auth and linked records to Cloud Firestore for timestamp logging."
        },
        result: {
          title: "The Result",
          desc: "A functional working prototype with instant status updates and an administrator overview."
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
          desc: "Build an accessible recipe directory where browsing and reading cooking instructions is straightforward and fast."
        },
        problem: {
          title: "The Problem",
          desc: "Many recipe websites are crowded with intrusive popups and heavy scripts that make reading ingredients on mobile frustrating."
        },
        build: {
          title: "The Build",
          desc: "Structured clean Firestore collections for categories and ingredients. Built dynamic JS rendering and responsive layouts."
        },
        result: {
          title: "The Result",
          desc: "A clean, responsive web application that loads quickly and lets users filter recipes by category."
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
          desc: "Formulate a modern online boutique concept exploring lifestyle fashion e-commerce."
        },
        problem: {
          title: "The Problem",
          desc: "New online stores often fail due to mismatched visual branding, weak product presentation, and confusing layouts."
        },
        build: {
          title: "The Build",
          desc: "Researched trending products, configured Shopify store layout ideas, selected typography, and created brand assets."
        },
        result: {
          title: "The Result",
          desc: "A comprehensive e-commerce concept demonstrating brand consistency and store structure."
        }
      }
    },
    {
      id: "portfolio-case",
      projectName: "Personal Portfolio & Brand",
      badge: "Production Ready",
      steps: {
        idea: {
          title: "The Idea",
          desc: "Build an authentic personal portfolio that honestly reflects my skills, projects, and problem-solving mindset."
        },
        problem: {
          title: "The Problem",
          desc: "Generic templates look alike and fail to show genuine technical curiosity or how I actually build and solve problems."
        },
        build: {
          title: "The Build",
          desc: "Created a modular, accessible website using semantic HTML, vanilla CSS, and clean JavaScript data architecture."
        },
        result: {
          title: "The Result",
          desc: "A fast, fully responsive portfolio that serves as a central hub for all my projects and contact info."
        }
      }
    }
  ],

  aiWorkflow: [
    {
      step: "01",
      title: "Idea & Requirements",
      summary: "Defining the core problem and data structure before writing prompts.",
      detail: "I start by clearly defining the goal, what data is needed, and how the interface should work. Clear human thinking is the essential starting point for effective AI assistance."
    },
    {
      step: "02",
      title: "Targeted Prompting",
      summary: "Drafting specific prompts with clear constraints and specifications.",
      detail: "Instead of vague questions, I provide exact requirements: data formats, component structure, edge cases, and design tokens to get useful, relevant code snippets."
    },
    {
      step: "03",
      title: "Build & Assembly",
      summary: "Assembling functional code, combining generated snippets with custom logic.",
      detail: "I inspect and understand every piece of code, ensuring clean organization, proper naming, and maintainable structure across files."
    },
    {
      step: "04",
      title: "Testing & Validation",
      summary: "Checking responsiveness, edge cases, and accessibility across screen sizes.",
      detail: "I test on different screen sizes (mobile, tablet, desktop), check form validations, verify button interactions, and ensure there are no layout breaks."
    },
    {
      step: "05",
      title: "Debugging & Troubleshooting",
      summary: "Diagnosing console errors, layout bugs, and configuration issues.",
      detail: "When errors occur, I use AI to help understand stack traces and explore alternative solutions, while manually checking browser developer tools to verify the fix."
    },
    {
      step: "06",
      title: "Refinement & Polish",
      summary: "Improving usability, micro-interactions, and visual cleanliness.",
      detail: "Tuning typography, spacing, transitions, and code comments to make sure the project feels cohesive, fast, and user-friendly."
    }
  ],

  troubleshooting: [
    {
      title: "Authentication State Handling",
      category: "Firebase / Auth",
      problem: "User session state took a moment to load on page refresh, causing brief visual glitch on protected views.",
      solution: "Used Firebase onAuthStateChanged listener with a simple loading state to wait until credentials initialize before rendering the page."
    },
    {
      title: "Firestore Document Permissions",
      category: "Database / Rules",
      problem: "Database write operations failed due to improperly structured collection path checks in Firestore security rules.",
      solution: "Reviewed Firestore documentation and used AI to clarify rule syntax, ensuring authenticated user IDs matched document ownership."
    },
    {
      title: "Responsive Grid Overflow on Small Screens",
      category: "CSS / Layout",
      problem: "Card grids caused unwanted horizontal scrollbars on mobile screens narrower than 380px.",
      solution: "Replaced rigid minmax values with auto-fit, clamp() typography, and box-sizing guards to eliminate overflow."
    },
    {
      title: "Asynchronous Search Query Ordering",
      category: "JavaScript / Logic",
      problem: "Rapid typing in recipe search inputs caused delayed search results to arrive out of order.",
      solution: "Added input debouncing in JavaScript to limit query frequency and ensure only the latest search input is processed."
    }
  ],

  journey: [
    {
      period: "Milestone 01",
      title: "Exploring Digital Business & E-Commerce",
      desc: "Started exploring e-commerce, Shopify store setups, product research, and online retail ideas. Sparked my passion for digital products."
    },
    {
      period: "Milestone 02",
      title: "Learning Web Development",
      desc: "Started building websites with HTML, CSS, and JavaScript. Focused on understanding fundamental web structure, responsive design, and DOM manipulation."
    },
    {
      period: "Milestone 03",
      title: "Building With Firebase & Databases",
      desc: "Expanded into dynamic web apps: working with Firebase Authentication, Firestore databases, and handling real-time data."
    },
    {
      period: "Milestone 04",
      title: "Incorporating AI-Assisted Development",
      desc: "Started integrating modern AI tools into my daily workflow for rapid prototyping, debugging, brainstorming, and accelerating learning."
    },
    {
      period: "Milestone 05",
      title: "Building Digital Products",
      desc: "Began turning project ideas into structured prototypes and tools (Attendance System, Recipe Platform, Portfolio)."
    },
    {
      period: "Now",
      title: "Currently: Building & Improving",
      desc: "Mathematical Science student at FUTA, continuously improving my web development skills, building projects, and looking for opportunities to create useful digital products."
    }
  ],

  currentlyBuilding: [
    {
      title: "Attendance Management System",
      status: "In Development",
      statusType: "green",
      desc: "Developing the Firebase-backed attendance tracking web app with check-in/out timestamps and admin overview."
    },
    {
      title: "Personal Portfolio & Brand",
      status: "Refining",
      statusType: "green",
      desc: "Refining this editorial-style portfolio website built with modern HTML, CSS, and vanilla JavaScript."
    },
    {
      title: "Future Digital Utilities",
      status: "Exploring",
      statusType: "amber",
      desc: "Exploring ideas for useful student productivity tools, campus utilities, and e-commerce concepts."
    }
  ]
};
