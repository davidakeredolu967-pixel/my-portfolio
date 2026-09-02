/**
 * Projects Rendering & Editorial Showcase
 * Features large visual project cards, real screenshot auto-detection, and case study drawer.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initSkills();
  initJourney();
  initCurrentlyBuilding();
  initModal();
});

/**
 * Editorial Mockup Fallback when real screenshot is pending
 */
function getUiPreviewMockup(project) {
  if (project.previewType === 'dashboard') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot ui-dot-red"></span>
            <span class="ui-dot ui-dot-yellow"></span>
            <span class="ui-dot ui-dot-green"></span>
          </div>
          <span class="ui-preview-url">attendance-system (prototype)</span>
          <span class="badge badge-lime" style="font-size: 10px;">Prototype</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
            <div>
              <div style="font-size: 13px; font-weight: 600; color: #fff;">Attendance Management</div>
              <div style="font-size: 11px; color: var(--text-muted);">Session check-in stream</div>
            </div>
            <span class="badge badge-lime">Firebase</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: var(--accent-lime);">124</div>
              <div style="font-size: 10px; color: var(--text-muted);">Checked In</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: #fff;">98.4%</div>
              <div style="font-size: 10px; color: var(--text-muted);">On-Time Rate</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: #fff;">08:00 AM</div>
              <div style="font-size: 10px; color: var(--text-muted);">Session Open</div>
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 12px; font-family: var(--font-mono); font-size: 11px; display: flex; flex-direction: column; gap: 4px;">
            <div style="color: var(--text-muted); font-size: 10px; text-transform: uppercase;">Recent Sign-In Stream</div>
            <div style="display: flex; justify-content: space-between; color: #fff;">
              <span>Student 01 — Computer Science</span>
              <span style="color: var(--accent-lime);">08:14 AM ✓</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: #fff;">
              <span>Student 02 — Mathematical Science</span>
              <span style="color: var(--accent-lime);">08:12 AM ✓</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (project.previewType === 'recipe') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot ui-dot-red"></span>
            <span class="ui-dot ui-dot-yellow"></span>
            <span class="ui-dot ui-dot-green"></span>
          </div>
          <span class="ui-preview-url">recipe-platform (concept)</span>
          <span class="badge badge-cyan" style="font-size: 10px;">Firestore</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="badge badge-cyan">Breakfast</span>
            <span class="badge badge-indigo">Quick Prep</span>
            <span class="badge badge-lime">Healthy</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 12px;">
            <div style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 4px;">Mediterranean Skillet</div>
            <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.45;">Clean ingredient indexing, preparation timer calculation, and step-by-step instructions.</div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 11px;">
            <div style="background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: var(--accent-cyan-light); font-weight: 600; margin-bottom: 2px;">Ingredients (6)</div>
              <div style="color: var(--text-muted); font-size: 10px;">• Eggs, tomatoes, olive oil</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: var(--accent-lime); font-weight: 600; margin-bottom: 2px;">Timing & Yield</div>
              <div style="color: var(--text-muted); font-size: 10px;">Prep: 10m • Cook: 15m</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (project.previewType === 'ecommerce') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot ui-dot-red"></span>
            <span class="ui-dot ui-dot-yellow"></span>
            <span class="ui-dot ui-dot-green"></span>
          </div>
          <span class="ui-preview-url">avantivogue (store concept)</span>
          <span class="badge badge-amber" style="font-size: 10px;">Shopify Concept</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div style="font-family: var(--font-heading); font-size: 14px; font-weight: 700; letter-spacing: 0.08em; color: #fff;">AVANTI VOGUE</div>
            <span class="badge badge-amber" style="font-size: 10px;">Concept</span>
          </div>
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 8px; align-items: center;">
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 10px;">
              <div style="font-size: 10px; color: var(--accent-amber); font-family: var(--font-mono); margin-bottom: 2px;">COLLECTION 01</div>
              <div style="font-size: 12px; font-weight: 600; color: #fff;">Lifestyle Apparel</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Curated store catalog.</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px; font-family: var(--font-mono); font-size: 10px;">
              <div style="color: var(--text-muted); margin-bottom: 2px;">Store Flow</div>
              <div style="color: var(--accent-lime); font-weight: 600;">Product Showcase</div>
              <div style="color: var(--text-muted); margin-top: 2px;">Clean checkout flow</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (project.previewType === 'portfolio') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot ui-dot-red"></span>
            <span class="ui-dot ui-dot-yellow"></span>
            <span class="ui-dot ui-dot-green"></span>
          </div>
          <span class="ui-preview-url">niyi.dev (live build)</span>
          <span class="badge badge-lime" style="font-size: 10px;">Portfolio</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div style="font-size: 13px; font-weight: 700; color: #fff;">Personal Brand Architecture</div>
            <span class="badge badge-lime">Vanilla JS / CSS</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 12px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;">
            High-contrast editorial typography, liquid-glass pill navigation, accessible mobile drawer, and zero heavy dependencies.
          </div>
          <div style="display: flex; gap: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);">
            <span>• 100% Responsive</span>
            <span>• 44px Touch Targets</span>
            <span>• Semantic HTML</span>
          </div>
        </div>
      </div>
    `;
  }

  // Design & Media showcase
  return `
    <div class="ui-preview-window">
      <div class="ui-preview-topbar">
        <div class="ui-window-dots">
          <span class="ui-dot ui-dot-red"></span>
          <span class="ui-dot ui-dot-yellow"></span>
          <span class="ui-dot ui-dot-green"></span>
        </div>
        <span class="ui-preview-url">branding-gallery (concept)</span>
        <span class="badge badge-indigo" style="font-size: 10px;">Visual Media</span>
      </div>
      <div class="ui-preview-canvas">
        <div style="font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 6px;">Campus & Event Design Assets</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 16px; margin-bottom: 2px;">📐</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Seminars</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 16px; margin-bottom: 2px;">⚡</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Tech Talks</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 16px; margin-bottom: 2px;">🎨</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Social Graphics</div>
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.45; margin-top: 4px;">
          Clean typography, deliberate color theory, and structured layout systems designed for clear visual communication.
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Project Visual: checks for real screenshot image with seamless fallback to mockup
 */
function getProjectVisualMarkup(project) {
  return `
    <div class="project-visual-frame">
      <img 
        src="${project.imageSrc}" 
        alt="${project.title} Preview" 
        loading="lazy" 
        class="project-real-img" 
        onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none';" 
        onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
      />
      <div class="project-mockup-fallback" style="display: flex; width: 100%;">
        ${getUiPreviewMockup(project)}
      </div>
    </div>
  `;
}

/**
 * 1. Render Large Editorial Projects
 */
function initProjects() {
  const mount = document.getElementById('projects-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;

  mount.innerHTML = `
    <div class="projects-editorial-list">
      ${projects.map((project) => `
        <article class="project-editorial-row reveal-on-scroll" id="${project.id}">
          
          <!-- Visual Column -->
          <div class="project-visual-col">
            ${getProjectVisualMarkup(project)}
          </div>

          <!-- Info Column -->
          <div class="project-info-col">
            <div class="project-meta-header">
              <span class="project-index">PROJECT ${project.number} // ${project.category}</span>
              <span class="badge ${project.statusColor === 'lime' ? 'badge-lime' : project.statusColor === 'cyan' ? 'badge-cyan' : project.statusColor === 'amber' ? 'badge-amber' : 'badge-indigo'}">
                ● ${project.statusBadge}
              </span>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.shortDesc}</p>

            <div style="background: rgba(255,255,255,0.02); border-left: 2px solid var(--accent-lime); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
              <div style="font-size: 11px; font-family: var(--font-mono); color: var(--accent-lime); text-transform: uppercase;">Problem Addressed</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${project.problemSolved}</div>
            </div>

            <ul class="project-features">
              ${project.features.slice(0, 3).map(feat => `<li>${feat}</li>`).join('')}
            </ul>

            <div class="project-tech-row">
              ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>

            <div class="project-actions-row">
              <button class="btn btn-primary btn-sm open-project-modal-btn" data-project-id="${project.id}">
                <span>View Case Details</span>
                <span>↗</span>
              </button>
              <a href="#contact" class="btn btn-secondary btn-sm">
                <span>Discuss This Project</span>
              </a>
            </div>
          </div>

        </article>
      `).join('')}
    </div>
  `;

  // Attach modal trigger listeners
  mount.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });
}

/**
 * 2. Render Skills Categories (Clean Grouped Pills)
 */
function initSkills() {
  const mount = document.getElementById('skills-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const { development, tools, approach } = window.PORTFOLIO_DATA.skills;

  const categories = [
    { title: "Development", icon: "💻", items: development },
    { title: "Tools & Platforms", icon: "🛠️", items: tools },
    { title: "Approach & Mindset", icon: "⚡", items: approach }
  ];

  mount.innerHTML = `
    <div class="skills-grouped-grid">
      ${categories.map(cat => `
        <div class="skills-group-card reveal-on-scroll">
          <div class="skills-group-header">
            <span style="font-size: 1.25rem;">${cat.icon}</span>
            <h3 class="skills-group-title">${cat.title}</h3>
          </div>
          <div class="skills-items-container">
            ${cat.items.map(skill => `
              <div class="skill-item-pill">
                <span class="skill-dot-status skill-dot-${skill.tag}"></span>
                <span>${skill.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 3. Render Journey Timeline
 */
function initJourney() {
  const mount = document.getElementById('journey-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const timeline = window.PORTFOLIO_DATA.journey;

  mount.innerHTML = `
    <div class="journey-flow-timeline">
      ${timeline.map(item => `
        <div class="journey-step-node reveal-on-scroll">
          <div class="journey-node-dot"></div>
          <div class="journey-step-card">
            <div class="journey-step-top">
              <span class="journey-step-title">${item.title}</span>
              <span class="badge badge-lime" style="font-size: 10px;">${item.period}</span>
            </div>
            <p class="journey-step-desc">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 4. Render Currently Building Snapshot
 */
function initCurrentlyBuilding() {
  const mount = document.getElementById('currently-building-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.currentlyBuilding;

  mount.innerHTML = `
    <div class="what-i-do-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      ${items.map(item => `
        <div class="service-card reveal-on-scroll">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; gap: 8px;">
            <h3 class="service-title">${item.title}</h3>
            <span class="status-pill">
              <span class="status-dot status-${item.statusType}"></span>
              <span>${item.status}</span>
            </span>
          </div>
          <p class="service-desc">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 5. Modal Drawer Handling
 */
let modalBackdrop, modalBody, modalCloseBtn;

function initModal() {
  modalBackdrop = document.getElementById('project-modal');
  modalBody = document.getElementById('modal-dynamic-content');
  modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  if (!modalBackdrop || !modalBody || !window.PORTFOLIO_DATA) return;

  const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: var(--space-md);">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
        <span class="project-index">PROJECT ${project.number} // ${project.category}</span>
        <span class="badge ${project.statusColor === 'lime' ? 'badge-lime' : project.statusColor === 'cyan' ? 'badge-cyan' : project.statusColor === 'amber' ? 'badge-amber' : 'badge-indigo'}">
          ● ${project.statusBadge}
        </span>
      </div>

      <h2 style="font-size: var(--font-size-xl); color: #fff;">${project.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.65; font-size: var(--font-size-sm);">${project.shortDesc}</p>

      <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: var(--space-md);">
        <h4 style="font-size: var(--font-size-xs); font-family: var(--font-mono); color: var(--accent-lime); text-transform: uppercase; margin-bottom: 8px;">
          Key Features
        </h4>
        <ul class="project-features" style="margin: 0;">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-sm); margin-top: 4px;">
        <div style="background: rgba(244, 63, 94, 0.05); border-left: 2px solid #f43f5e; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #f43f5e; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Problem</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.problem}</p>
        </div>
        
        <div style="background: rgba(198, 255, 58, 0.05); border-left: 2px solid var(--accent-lime); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: var(--accent-lime); font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Approach</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.solution}</p>
        </div>

        <div style="background: rgba(99, 102, 241, 0.05); border-left: 2px solid #818cf8; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #818cf8; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">Learning & Takeaway</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.takeaway}</p>
        </div>
      </div>

      <div style="margin-top: 4px; padding-top: var(--space-md); border-top: 1px solid var(--border-subtle);">
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 8px; font-family: var(--font-mono);">Technology Stack:</div>
        <div class="project-tech-row" style="margin: 0;">
          ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('is-active');
  document.body.style.overflow = '';
}
