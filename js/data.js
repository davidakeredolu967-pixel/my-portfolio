/**
 * Portfolio Data Source — Niyi (Akeredolu Kolade David Omoniyi)
 * Audited, authentic, and defensible data without exaggerated claims.
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
    linkedin: "", // Optional: add URL when available
    twitter: "",  // Optional: add URL when available
    cvAvailable: false, // Set to true when assets/cv.pdf is added
    cvPath: "assets/cv.pdf"
  },

  skills: {
    development: [
      { name: "HTML", level: "Comfortable with", tag: "comfortable" },
      { name: "CSS", level: "Comfortable with", tag: "comfortable" },
      { name: "JavaScript", level: "Comfortable with", tag: "comfortable" },
      { name: "React", level: "Currently learning", tag: "learning" },
      { name: "Firebase", level: "Comfortable with", tag: "comfortable" },
      { name: "Firestore", level: "Comfortable with", tag: "comfortable" },
      { name: "Git", level: "Comfortable with", tag: "comfortable" },
      { name: "GitHub", level: "Comfortable with", tag: "comfortable" }
    ],
    aiWorkflow: [
      { name: "AI-assisted coding", level: "Comfortable with", tag: "comfortable" },
      { name: "Vibe coding", level: "Comfortable with", tag: "comfortable" },
      { name: "Prompt engineering", level: "Comfortable with", tag: "comfortable" },
      { name: "Debugging with AI", level: "Comfortable with", tag: "comfortable" },
      { name: "Rapid prototyping", level: "Comfortable with", tag: "comfortable" },
      { name: "Problem solving", level: "Comfortable with", tag: "comfortable" }
    ],
    digitalBusiness: [
      { name: "Shopify", level: "Exploring", tag: "exploring" },
      { name: "E-commerce", level: "Exploring", tag: "exploring" },
      { name: "Product research", level: "Exploring", tag: "exploring" },
      { name: "Dropshipping", level: "Exploring", tag: "exploring" }
    ],
    design: [
      { name: "Canva", level: "Comfortable with", tag: "comfortable" },
      { name: "UI design", level: "Comfortable with", tag: "comfortable" },
      { name: "Digital branding", level: "Comfortable with", tag: "comfortable" },
      { name: "Social media graphics", level: "Comfortable with", tag: "comfortable" }
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
      shortDesc: "A web platform designed to let users register, sign in, and sign out while giving administrators a centralized dashboard for tracking attendance records.",
      problemSolved: "Paper attendance sheets are prone to lost records, inaccurate timestamps, and tedious manual tallying.",
      solutionApproach: "Building a web-based sign-in system utilizing Firebase Authentication and Cloud Firestore for record storage and an admin overview.",
      features: [
        "User registration and sign-in authentication",
        "Sign-in and sign-out timestamp recording",
        "Centralized administrator monitoring view",
        "User attendance activity tracking",
        "Firebase & Firestore cloud integration"
      ],
      techStack: ["JavaScript", "React", "Firebase", "Firestore", "CSS"],
      imageSrc: "assets/images/projects/attendance.png",
      previewType: "dashboard",
      details: {
        problem: "Manual attendance records lead to lost data, inaccurate timestamps, and administrative delays.",
        solution: "Building a cloud-backed check-in system with dynamic timestamp logging and an administrator overview.",
        takeaway: "Practicing Firebase authentication flow, Firestore document reads/writes, and building reactive UI states."
      }
    },
    {
      id: "project-recipe",
      number: "02",
      title: "Recipe Platform",
      category: "Web Application",
      status: "Built / Experimental",
      statusColor: "green",
      shortDesc: "A responsive recipe platform designed to organize and present culinary recipes through a clean, accessible interface.",
      problemSolved: "Many online cooking pages are overloaded with intrusive ads and slow scripts, making them difficult to read while cooking.",
      solutionApproach: "Built a responsive frontend that retrieves structured recipes from Firestore, with clear ingredient lists and step-by-step instructions.",
      features: [
        "Recipe category browsing and instant search",
        "Clean ingredient indexing and preparation steps",
        "Firebase Firestore dynamic content integration",
        "Mobile-friendly interface for kitchen use",
        "Fast client-side rendering"
      ],
      techStack: ["JavaScript", "Firebase", "Firestore", "HTML", "CSS"],
      imageSrc: "assets/images/projects/recipe.png",
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
      statusColor: "amber",
      shortDesc: "An e-commerce concept exploring online fashion retail, Shopify store structure, product curation, and digital store branding.",
      problemSolved: "New online storefronts often struggle with weak visual identity and confusing navigation that hurts customer engagement.",
      solutionApproach: "Explored full store concept layouts, lifestyle product research, customer journey planning, and brand positioning.",
      features: [
        "Online fashion boutique store concept",
        "Product selection and lifestyle niche research",
        "Customer journey and checkout flow planning",
        "Store visual branding and typography guidelines",
        "Shopify e-commerce platform exploration"
      ],
      techStack: ["Shopify", "E-commerce", "Product research", "UI design", "Digital branding"],
      imageSrc: "assets/images/projects/avanti.png",
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
      statusColor: "blue",
      shortDesc: "A collection of digital designs, promotional materials, department event flyers, and social media graphics I have worked on.",
      problemSolved: "Departmental and student event announcements often lack consistent visual appeal to effectively engage their audience.",
      solutionApproach: "Designed clear, eye-catching visual assets focusing on readable typography, color balance, and coherent branding.",
      features: [
        "Departmental and university event promotional flyers",
        "Social media graphics & visual identity materials",
        "Brand style and typography experiments",
        "Digital communication and banner assets"
      ],
      techStack: ["Canva", "UI design", "Digital branding", "Social media graphics"],
      imageSrc: "assets/images/projects/branding.png",
      previewType: "design",
      details: {
        problem: "Campus events and digital announcements often suffer from dull or inconsistent visual communication.",
        solution: "Designed visual assets that clearly deliver key messages and engage audiences.",
        takeaway: "Developed a stronger eye for color harmony, spatial hierarchy, typography selection, and brand consistency."
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
          desc: "To create a simple, paperless check-in and check-out tool where attendance records can be monitored digitally."
        },
        problem: {
          title: "The Problem",
          desc: "Paper logs and manual sheets are easily misplaced, prone to proxy entries, and require tedious manual calculation."
        },
        build: {
          title: "The Build",
          desc: "Built user authentication using Firebase Auth and linked records to Cloud Firestore for real-time timestamp logging."
        },
        result: {
          title: "The Result",
          desc: "A functional working prototype with instant status updates and an administrator view that simplifies attendance tracking."
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
          desc: "To build an accessible recipe directory where browsing and reading cooking instructions is straightforward and fast."
        },
        problem: {
          title: "The Problem",
          desc: "Many recipe websites are crowded with popups and heavy scripts that make reading ingredients on a mobile phone frustrating."
        },
        build: {
          title: "The Build",
          desc: "Structured clean Firestore collections for categories and ingredients. Built dynamic JS rendering and responsive CSS layouts."
        },
        result: {
          title: "The Result",
          desc: "A clean, responsive web application that loads quickly and lets users easily filter recipes by category."
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
          desc: "To formulate a modern online boutique concept exploring lifestyle fashion e-commerce."
        },
        problem: {
          title: "The Problem",
          desc: "New online stores often fail due to mismatched visual branding, weak product presentation, and confusing layouts."
        },
        build: {
          title: "The Build",
          desc: "Researched trending products, configured Shopify store layout ideas, selected typography, and created visual brand assets."
        },
        result: {
          title: "The Result",
          desc: "A comprehensive e-commerce concept demonstrating brand consistency, product presentation, and store organization."
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
          desc: "To build an authentic personal portfolio that honestly reflects my skills, projects, problem-solving mindset, and AI-assisted workflow."
        },
        problem: {
          title: "The Problem",
          desc: "Generic student CV templates look alike and fail to show genuine technical curiosity or how I actually build and solve problems."
        },
        build: {
          title: "The Build",
          desc: "Created a modular, accessible website using semantic HTML, vanilla CSS, and clean JavaScript data architecture."
        },
        result: {
          title: "The Result",
          desc: "A fast, fully responsive portfolio that serves as a central hub for all my projects, experiments, and contact info."
        }
      }
    }
  ],

  aiWorkflow: [
    {
      step: "01",
      title: "Idea & Architecture",
      icon: "01",
      summary: "Defining the core problem and structure before writing prompts.",
      detail: "I start by clearly defining the goal, what data is needed, and how the interface should work. Clear human thinking is the essential starting point for effective AI assistance."
    },
    {
      step: "02",
      title: "Targeted Prompting",
      icon: "02",
      summary: "Drafting specific prompts with clear constraints and specifications.",
      detail: "Instead of vague questions, I provide exact requirements: data formats, component structure, edge cases, and design tokens to get useful, relevant code snippets."
    },
    {
      step: "03",
      title: "Build & Assembly",
      icon: "03",
      summary: "Assembling functional code, combining generated snippets with custom logic.",
      detail: "I inspect and understand every piece of code, ensuring clean organization, proper naming, and maintainable structure across files."
    },
    {
      step: "04",
      title: "Testing & Validation",
      icon: "04",
      summary: "Checking responsiveness, edge cases, and accessibility across screen sizes.",
      detail: "I test on different screen sizes (mobile, tablet, desktop), check form validations, verify button interactions, and ensure there are no layout breaks."
    },
    {
      step: "05",
      title: "Debugging & Troubleshooting",
      icon: "05",
      summary: "Diagnosing console errors, layout bugs, and configuration issues.",
      detail: "When errors occur, I use AI to help understand stack traces and explore alternative solutions, while manually checking browser developer tools to verify the fix."
    },
    {
      step: "06",
      title: "Refinement & Polish",
      icon: "06",
      summary: "Improving usability, micro-interactions, and visual cleanliness.",
      detail: "Tuning typography, spacing, transitions, and code comments to make sure the project feels cohesive, fast, and user-friendly."
    }
  ],

  troubleshooting: [
    {
      title: "Authentication State Handling",
      category: "Firebase / Auth",
      badge: "Resolved",
      problem: "User session state took a moment to load on page refresh, causing brief visual glitch on protected views.",
      solution: "Used Firebase onAuthStateChanged listener with a simple loading state to wait until credentials initialize before rendering the page."
    },
    {
      title: "Firestore Document Permissions",
      category: "Database / Rules",
      badge: "Resolved",
      problem: "Database write operations failed due to improperly structured collection path checks in Firestore security rules.",
      solution: "Reviewed Firestore documentation and used AI to clarify rule syntax, ensuring authenticated user IDs matched document ownership."
    },
    {
      title: "Responsive Grid Overflow on Small Screens",
      category: "CSS / Layout",
      badge: "Resolved",
      problem: "Card grids caused unwanted horizontal scrollbars on mobile screens narrower than 380px.",
      solution: "Replaced rigid minmax values with auto-fit, clamp() typography, and box-sizing guards to eliminate overflow."
    },
    {
      title: "Asynchronous Search Query Ordering",
      category: "JavaScript / Logic",
      badge: "Resolved",
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
      desc: "Started integrating modern AI tools into my daily workflow for rapid prototyping, debugging, brainstorming, and accelerating my learning."
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

  leadership: [
    {
      title: "Student Coordination",
      desc: "Active participation in coordinating academic study discussions and collaborative group tasks among university peers at FUTA."
    },
    {
      title: "Academic Communication",
      desc: "Helping facilitate clear communication for course updates, collaborative problem sets, and departmental announcements."
    },
    {
      title: "Event & Seminar Organization",
      desc: "Participating in organizing student-led tech discussions, department seminars, and academic study sessions."
    },
    {
      title: "Group Project Coordination",
      desc: "Helping coordinate project task breakdowns and milestone tracking in collaborative coursework assignments."
    },
    {
      title: "Peer Problem Solving",
      desc: "Assisting fellow students with debugging basic code issues, navigating software tools, and understanding mathematical concepts."
    },
    {
      title: "Self-Directed Learning",
      desc: "Balancing university coursework in Mathematical Science with consistent self-directed software development and practical project building."
    }
  ],

  currentlyBuilding: [
    {
      title: "Personal Portfolio Website",
      status: "In Development",
      statusType: "green",
      desc: "Building and refining this clean, interactive portfolio website using modern semantic HTML, CSS, and modular JavaScript."
    },
    {
      title: "Attendance Management System",
      status: "In Development",
      statusType: "green",
      desc: "Developing the Firebase-backed attendance tracking web app with check-in/out timestamps and admin dashboard view."
    },
    {
      title: "Future Digital Tools",
      status: "Exploring",
      statusType: "amber",
      desc: "Exploring ideas for useful student productivity tools, campus utilities, and e-commerce concepts."
    }
  ]
};
