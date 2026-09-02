/**
 * ==========================================================================
 * Cinematic Motion Engine — Niyi Portfolio
 * Powered by GSAP 3 & ScrollTrigger with Safe Non-Destructive Animations
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Wait a moment for dynamic data to mount
  setTimeout(() => {
    initMotionEngine();
  }, 80);
});

function initMotionEngine() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // Check for GSAP availability
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Set default ease
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.85
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

  // 6. Process (Ideas -> Built) & AI Workflow Motion
  initProcessMotion();

  // 7. Troubleshooting Cases Motion
  initTroubleshootingMotion();

  // 8. Journey Timeline Motion
  initJourneyMotion();

  // 9. Currently Building Snapshot Motion
  initCurrentlyBuildingMotion();

  // 10. Contact Section Motion
  initContactMotion();

  // 11. 3D Hover Tilt Micro-Interactions
  initCardTiltMicroInteractions();

  // Refresh ScrollTrigger when images load
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
    heroTL.fromTo(matrixCards, 
      { scale: 0.85, opacity: 0, y: 25 },
      { scale: 1, opacity: 1, y: 0, stagger: 0.05, duration: 1.0, ease: 'power3.out', clearProps: 'transform,opacity' }, 
      0
    );
  }

  if (tagline) {
    heroTL.fromTo(tagline,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', clearProps: 'transform,opacity' },
      0.15
    );
  }

  if (title) {
    heroTL.fromTo(title,
      { y: 30, scale: 0.94, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.9, ease: 'power4.out', clearProps: 'transform,opacity' },
      0.25
    );
  }

  if (script) {
    heroTL.fromTo(script,
      { scale: 0.8, rotation: -10, opacity: 0 },
      { scale: 1, rotation: -4, opacity: 1, duration: 1.0, ease: 'back.out(1.4)' },
      0.45
    );
  }

  if (subtext) {
    heroTL.fromTo(subtext,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out', clearProps: 'transform,opacity' },
      0.6
    );
  }

  if (ctaGroup) {
    heroTL.fromTo(ctaGroup.children,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out', clearProps: 'transform,opacity' },
      0.75
    );
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
      y: -60,
      scale: 0.96,
      opacity: 0.3,
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
      y: -40,
      scale: 1.02,
      opacity: 0.4,
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
        start: 'top 92%',
        once: true
      }
    });

    if (meta) {
      tl.fromTo(meta, 
        { x: -25, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.65, ease: 'power3.out', clearProps: 'all' }
      );
    }

    if (title) {
      tl.fromTo(title, 
        { y: 24, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', clearProps: 'all' }, 
        '-=0.45'
      );
    }

    if (subtitle) {
      tl.fromTo(subtitle, 
        { y: 16, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out', clearProps: 'all' }, 
        '-=0.5'
      );
    }
  });
}

/**
 * 3. Selected Work (Centerpiece Cinematic Scroll-Scrubbed Showcase)
 * Unified single-tween scrub with zero collisions or filter repaints
 */
function initProjectsScrollScrubMotion() {
  const cards = gsap.utils.toArray('.project-scroll-card-wrap');
  if (!cards.length) return;

  const isMobile = window.innerWidth < 768;

  cards.forEach((cardWrap, i) => {
    const row = cardWrap.querySelector('.project-editorial-row');
    if (!row) return;

    // Scroll-scrub recession (for all except the last card)
    if (i < cards.length - 1) {
      const nextCard = cards[i + 1];

      gsap.to(row, {
        scrollTrigger: {
          trigger: nextCard,
          start: 'top 88%',
          end: 'top 22%',
          scrub: 0.6,
          fastScrollEnd: true,
          invalidateOnRefresh: true
        },
        scale: isMobile ? 0.94 : 0.88,
        y: isMobile ? -12 : -28,
        rotationX: isMobile ? 0 : 1.5,
        opacity: isMobile ? 0.92 : 0.82,
        ease: 'none',
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

  gsap.fromTo(columns,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true
      }
    }
  );
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
    gsap.fromTo(storyCard,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: storyCard,
          start: 'top 88%',
          once: true
        }
      }
    );
  }

  if (serviceCards.length) {
    gsap.fromTo(serviceCards,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: section.querySelector('.what-i-do-grid') || section,
          start: 'top 88%',
          once: true
        }
      }
    );
  }
}

/**
 * 6. Process (Ideas -> Built) & AI Workflow Motion
 */
function initProcessMotion() {
  const processSection = document.getElementById('process');
  if (processSection) {
    const module = processSection.querySelector('.ideas-built-module');
    if (module) {
      gsap.fromTo(module,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: processSection,
            start: 'top 88%',
            once: true
          }
        }
      );
    }
  }

  const aiSection = document.getElementById('ai-workflow');
  if (aiSection) {
    const credoCard = aiSection.querySelector('.ai-credo-card');
    const stepRows = aiSection.querySelectorAll('.ai-step-row');

    if (credoCard) {
      gsap.fromTo(credoCard,
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: aiSection,
            start: 'top 88%',
            once: true
          }
        }
      );
    }

    if (stepRows.length) {
      gsap.fromTo(stepRows,
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: aiSection,
            start: 'top 88%',
            once: true
          }
        }
      );
    }
  }
}

/**
 * 7. Troubleshooting Cases Motion
 */
function initTroubleshootingMotion() {
  const troubleshoot = document.getElementById('troubleshooting');
  if (!troubleshoot) return;

  const cases = troubleshoot.querySelectorAll('.troubleshoot-case-item');
  if (!cases.length) return;

  gsap.fromTo(cases,
    { y: 25, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.75,
      ease: 'power3.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: troubleshoot,
        start: 'top 88%',
        once: true
      }
    }
  );
}

/**
 * 8. Journey Timeline Motion (Guaranteed 100% Visibility)
 */
function initJourneyMotion() {
  const journeySection = document.getElementById('journey');
  if (!journeySection) return;

  const nodes = journeySection.querySelectorAll('.journey-step-node');
  if (!nodes.length) return;

  gsap.fromTo(nodes,
    { x: -20, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.75,
      ease: 'power3.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: journeySection,
        start: 'top 88%',
        once: true
      }
    }
  );
}

/**
 * 9. Currently Building Snapshot Motion
 */
function initCurrentlyBuildingMotion() {
  const section = document.getElementById('currently-building');
  if (!section) return;

  const cards = section.querySelectorAll('.service-card');
  if (!cards.length) return;

  gsap.fromTo(cards,
    { y: 25, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.75,
      ease: 'power3.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: section,
        start: 'top 88%',
        once: true
      }
    }
  );
}

/**
 * 10. Contact Section Motion
 */
function initContactMotion() {
  const contact = document.getElementById('contact');
  if (!contact) return;

  const directCard = contact.querySelector('.contact-direct-card');
  const formFrame = contact.querySelector('.contact-form-frame');

  if (directCard) {
    gsap.fromTo(directCard,
      { x: -25, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: contact,
          start: 'top 88%',
          once: true
        }
      }
    );
  }

  if (formFrame) {
    gsap.fromTo(formFrame,
      { x: 25, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: contact,
          start: 'top 88%',
          once: true
        }
      }
    );
  }
}

/**
 * 11. 3D Card Hover Tilt Micro-Interactions
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
