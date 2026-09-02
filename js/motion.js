/**
 * ==========================================================================
 * Cinematic Motion Engine — Niyi Portfolio
 * Powered by GSAP 3 & ScrollTrigger with Safe Vanilla Fallbacks
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure DOM and dynamic mounts are ready
  setTimeout(() => {
    initMotionEngine();
  }, 60);
});

function initMotionEngine() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Reveal all static elements immediately
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // Check for GSAP availability
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    initVanillaMotionFallback();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Set default ease
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.9
  });

  // 1. Hero Entrance & Scroll Parallax
  initHeroMotion();

  // 2. Section Headers Cinematic Reveals
  initSectionHeadersMotion();

  // 3. Selected Work (Centerpiece Scroll-Scrubbed Showcase)
  initProjectsScrollScrubMotion();

  // 4. Capabilities Spatial Grid Motion
  initCapabilitiesMotion();

  // 5. About Section & Service Cards Motion
  initAboutMotion();

  // 6. Process (Ideas -> Built) & Journey Timeline
  initProcessAndJourneyMotion();

  // 7. Contact Section Motion
  initContactMotion();

  // 8. 3D Hover Tilt Micro-Interactions
  initCardTiltMicroInteractions();

  // Refresh ScrollTrigger when images finish loading
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}

/**
 * 1. Hero Section Motion & Parallax Scrub
 */
function initHeroMotion() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const matrixCards = hero.querySelectorAll('.floating-matrix-card');
  const tagline = hero.querySelector('.hero-intro-tagline');
  const title = hero.querySelector('.hero-giant-title');
  const script = hero.querySelector('.hero-script-layered');
  const subtext = hero.querySelector('.hero-subtext-sample');
  const ctaGroup = hero.querySelector('.hero-cta-group');

  // Entrance Timeline on Load
  const heroTL = gsap.timeline({ delay: 0.1 });

  if (matrixCards.length) {
    heroTL.from(matrixCards, {
      scale: 0.88,
      opacity: 0,
      y: 30,
      stagger: 0.06,
      duration: 1.1,
      ease: 'power3.out'
    }, 0);
  }

  if (tagline) {
    heroTL.from(tagline, {
      y: -18,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out'
    }, 0.15);
  }

  if (title) {
    heroTL.from(title, {
      y: 35,
      scale: 0.94,
      opacity: 0,
      duration: 1.0,
      ease: 'power4.out'
    }, 0.25);
  }

  if (script) {
    heroTL.from(script, {
      scale: 0.8,
      rotation: -10,
      opacity: 0,
      duration: 1.1,
      ease: 'back.out(1.5)'
    }, 0.45);
  }

  if (subtext) {
    heroTL.from(subtext, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.6);
  }

  if (ctaGroup) {
    heroTL.from(ctaGroup.children, {
      y: 16,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power2.out'
    }, 0.75);
  }

  // Scroll Parallax Scrub on Hero
  const heroContent = hero.querySelector('.hero-content-wrapper');
  const matrix = hero.querySelector('.hero-floating-matrix');

  if (heroContent) {
    gsap.to(heroContent, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.4
      },
      y: -75,
      scale: 0.95,
      opacity: 0.25,
      ease: 'none'
    });
  }

  if (matrix) {
    gsap.to(matrix, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
      y: -45,
      scale: 1.03,
      opacity: 0.35,
      ease: 'none'
    });
  }
}

/**
 * 2. Section Headers Cinematic Reveals
 */
function initSectionHeadersMotion() {
  const headers = document.querySelectorAll('.section-header');

  headers.forEach(header => {
    const meta = header.querySelector('.section-meta-tag');
    const title = header.querySelector('.section-title');
    const subtitle = header.querySelector('.section-subtitle');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      }
    });

    if (meta) {
      tl.from(meta, {
        x: -25,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });
    }

    if (title) {
      tl.from(title, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.45');
    }

    if (subtitle) {
      tl.from(subtitle, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.5');
    }
  });
}

/**
 * 3. Selected Work (Centerpiece Cinematic Scroll-Scrubbed Showcase)
 * Scales down previous project smoothly into space as next project ascends
 */
function initProjectsScrollScrubMotion() {
  const cards = gsap.utils.toArray('.project-scroll-card-wrap');
  if (!cards.length) return;

  const isMobile = window.innerWidth < 768;

  cards.forEach((cardWrap, i) => {
    const row = cardWrap.querySelector('.project-editorial-row');
    if (!row) return;

    // Entrance animation for each card as it arrives
    gsap.from(row, {
      scrollTrigger: {
        trigger: cardWrap,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0.4,
      scale: 0.96,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Scroll-scrub recession (all except the last card)
    if (i < cards.length - 1) {
      const nextCard = cards[i + 1];

      gsap.to(row, {
        scrollTrigger: {
          trigger: nextCard,
          start: 'top 85%',
          end: 'top 18%',
          scrub: 0.5
        },
        scale: isMobile ? 0.94 : 0.88,
        y: isMobile ? -14 : -32,
        rotationX: isMobile ? 0 : 2,
        filter: isMobile ? 'brightness(0.85)' : 'brightness(0.65)',
        opacity: isMobile ? 0.9 : 0.78,
        ease: 'power1.inOut',
        transformPerspective: 1000,
        transformOrigin: 'center top'
      });
    }
  });
}

/**
 * 4. Capabilities Spatial Grid Motion
 */
function initCapabilitiesMotion() {
  const section = document.getElementById('skills');
  if (!section) return;

  const columns = section.querySelectorAll('.capability-column-block');
  if (!columns.length) return;

  gsap.from(columns, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 35,
    opacity: 0,
    stagger: 0.14,
    duration: 0.85,
    ease: 'power3.out'
  });

  // Animate individual list items inside columns
  columns.forEach(col => {
    const items = col.querySelectorAll('.capability-row-item');
    if (items.length) {
      gsap.from(items, {
        scrollTrigger: {
          trigger: col,
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        },
        x: -12,
        opacity: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  });
}

/**
 * 5. About Section & Service Cards Motion
 */
function initAboutMotion() {
  const section = document.getElementById('about');
  if (!section) return;

  const storyCard = section.querySelector('.about-story-card');
  const serviceCards = section.querySelectorAll('.service-card');

  if (storyCard) {
    gsap.from(storyCard, {
      scrollTrigger: {
        trigger: storyCard,
        start: 'top 82%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    });
  }

  if (serviceCards.length) {
    gsap.from(serviceCards, {
      scrollTrigger: {
        trigger: section.querySelector('.what-i-do-grid') || section,
        start: 'top 82%',
        toggleActions: 'play none none reverse'
      },
      y: 28,
      opacity: 0,
      stagger: 0.08,
      duration: 0.75,
      ease: 'power3.out'
    });
  }
}

/**
 * 6. Process (Ideas -> Built) & Journey Timeline Motion
 */
function initProcessAndJourneyMotion() {
  // Process Section
  const processSection = document.getElementById('process');
  if (processSection) {
    const module = processSection.querySelector('.ideas-built-module');
    if (module) {
      gsap.from(module, {
        scrollTrigger: {
          trigger: processSection,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 35,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  }

  // AI Workflow
  const aiSection = document.getElementById('ai-workflow');
  if (aiSection) {
    const credoCard = aiSection.querySelector('.ai-credo-card');
    const stepRows = aiSection.querySelectorAll('.ai-step-row');

    if (credoCard) {
      gsap.from(credoCard, {
        scrollTrigger: {
          trigger: aiSection,
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        },
        x: -25,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      });
    }

    if (stepRows.length) {
      gsap.from(stepRows, {
        scrollTrigger: {
          trigger: aiSection,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: 25,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power2.out'
      });
    }
  }

  // Troubleshooting Section
  const troubleshoot = document.getElementById('troubleshooting');
  if (troubleshoot) {
    const cases = troubleshoot.querySelectorAll('.troubleshoot-case-item');
    if (cases.length) {
      gsap.from(cases, {
        scrollTrigger: {
          trigger: troubleshoot,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out'
      });
    }
  }

  // Journey Timeline
  const journeySection = document.getElementById('journey');
  if (journeySection) {
    const nodes = journeySection.querySelectorAll('.journey-step-node');
    if (nodes.length) {
      gsap.from(nodes, {
        scrollTrigger: {
          trigger: journeySection,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: -20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: 'power3.out'
      });
    }
  }
}

/**
 * 7. Contact Section Motion
 */
function initContactMotion() {
  const contact = document.getElementById('contact');
  if (!contact) return;

  const directCard = contact.querySelector('.contact-direct-card');
  const formFrame = contact.querySelector('.contact-form-frame');

  if (directCard) {
    gsap.from(directCard, {
      scrollTrigger: {
        trigger: contact,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    });
  }

  if (formFrame) {
    gsap.from(formFrame, {
      scrollTrigger: {
        trigger: contact,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: 30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    });
  }
}

/**
 * 8. 3D Card Hover Tilt Micro-Interactions
 */
function initCardTiltMicroInteractions() {
  const tiltCards = document.querySelectorAll('.project-visual-frame, .service-card');
  if (!tiltCards.length) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Safe Vanilla Fallback (if GSAP CDN is unreachable)
 */
function initVanillaMotionFallback() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}
