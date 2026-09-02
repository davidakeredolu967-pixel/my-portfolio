/**
 * Projects Rendering & Editorial Alternating Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initSkills();
  initJourney();
  initLeadership();
  initCurrentlyBuilding();
  initModal();
});

/**
 * Generate simulated UI preview frames (No fake stock photos, real software mockup)
 */
function getUiPreviewMarkup(project) {
  if (project.previewType === 'dashboard') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot ui-dot-red"></span>
            <span class="ui-dot ui-dot-yellow"></span>
            <span class="ui-dot ui-dot-green"></span>
          </div>
          <span class="ui-preview-url">app.attendance-system.internal/admin</span>
          <span style="font-size: 10px; color: #10b981; font-family: var(--font-mono);">● Live Cloud</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div>
              <div style="font-size: 12px; font-weight: 600; color: #fff;">Attendance Dashboard</div>
              <div style="font-size: 10px; color: var(--text-muted);">Real-time check-in stream</div>
            </div>
            <span class="badge badge-emerald">Firebase Connected</span>
          </div>
          <div class="mock-stat-grid">
            <div class="mock-stat-box">
              <div class="mock-stat-val">124</div>
              <div class="mock-stat-label">Active Checked-In</div>
            </div>
            <div class="mock-stat-box">
              <div class="mock-stat-val">98.4%</div>
              <div class="mock-stat-label">On-Time Rate</div>
            </div>
            <div class="mock-stat-box">
              <div class="mock-stat-val">08:00 AM</div>
              <div class="mock-stat-label">Session Open</div>
            </div>
          </div>
          <div class="mock-table-view">
            <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px;">Recent Sign-In Stream</div>
            <div class="mock-table-row">
              <span style="color: #fff;">Alex K. — Computer Sci</span>
              <span style="color: #34d399;">08:14:22 AM ✓</span>
            </div>
            <div class="mock-table-row">
              <span style="color: #fff;">David O. — Math Sci</span>
              <span style="color: #34d399;">08:12:05 AM ✓</span>
            </div>
            <div class="mock-table-row">
              <span style="color: #fff;">Sarah M. — Physics</span>
              <span style="color: #34d399;">08:10:49 AM ✓</span>
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
          <span class="ui-preview-url">recipe-platform.web.app/explore</span>
          <span style="font-size: 10px; color: #00d2ff; font-family: var(--font-mono);">Firestore API</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; gap: 8px; margin-bottom: 4px;">
            <span class="badge badge-cyan" style="font-size: 10px;">Breakfast</span>
            <span class="badge badge-indigo" style="font-size: 10px;">Quick Prep</span>
            <span class="badge badge-emerald" style="font-size: 10px;">High Protein</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 10px;">
            <div style="font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 4px;">Classic Mediterranean Skillet</div>
            <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.4;">Clean ingredient indexing, preparation timer calculation, and step-by-step layout.</div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 10px;">
            <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 4px;">Ingredients (6)</div>
              <div style="color: var(--text-muted);">• 2 Free-range eggs</div>
              <div style="color: var(--text-muted);">• 150g Cherry tomatoes</div>
              <div style="color: var(--text-muted);">• Extra virgin olive oil</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: #34d399; font-weight: 600; margin-bottom: 4px;">Timing & Yield</div>
              <div style="color: var(--text-muted);">Prep: 10 mins</div>
              <div style="color: var(--text-muted);">Cook: 15 mins</div>
              <div style="color: var(--text-muted);">Servings: 2</div>
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
          <span class="ui-preview-url">avantivogue.store/concept</span>
          <span style="font-size: 10px; color: #f59e0b; font-family: var(--font-mono);">Shopify Architecture</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div style="font-family: var(--font-heading); font-size: 13px; font-weight: 700; letter-spacing: 0.08em; color: #fff;">AVANTI VOGUE</div>
            <span class="badge badge-amber" style="font-size: 10px;">Autumn Concept</span>
          </div>
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px; align-items: center;">
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 12px;">
              <div style="font-size: 10px; color: var(--accent-amber); font-family: var(--font-mono); margin-bottom: 2px;">COLLECTION 01</div>
              <div style="font-size: 12px; font-weight: 600; color: #fff;">Minimalist Outerwear</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Curated lifestyle products with streamlined checkout UX.</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 10px; font-family: var(--font-mono); font-size: 10px;">
              <div style="color: var(--text-muted); margin-bottom: 2px;">Checkout Funnel</div>
              <div style="color: #34d399; font-weight: 600;">1-Click Purchase Flow</div>
              <div style="color: var(--text-muted); margin-top: 4px;">Cart abandonment optimization</div>
            </div>
          </div>
          <div style="display: flex; gap: 6px; font-size: 10px; font-family: var(--font-mono); color: var(--text-muted);">
            <span>• Responsive Cart</span>
            <span>• Inventory Model</span>
            <span>• Brand Guide</span>
          </div>
        </div>
      </div>
    `;
  }

  // Design showcase
  return `
    <div class="ui-preview-window">
      <div class="ui-preview-topbar">
        <div class="ui-window-dots">
          <span class="ui-dot ui-dot-red"></span>
          <span class="ui-dot ui-dot-yellow"></span>
          <span class="ui-dot ui-dot-green"></span>
        </div>
        <span class="ui-preview-url">branding.niyi.dev/gallery</span>
        <span style="font-size: 10px; color: #38bdf8; font-family: var(--font-mono);">Visual Media</span>
      </div>
      <div class="ui-preview-canvas">
        <div style="font-size: 12px; font-weight: 600; color: #fff; margin-bottom: 6px;">Departmental & Campus Event Branding</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 18px; margin-bottom: 4px;">📐</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Academic Seminars</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 18px; margin-bottom: 4px;">⚡</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Tech Workshops</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center;">
            <div style="font-size: 18px; margin-bottom: 4px;">🎨</div>
            <div style="font-size: 10px; color: #fff; font-weight: 500;">Social Media Assets</div>
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.4; margin-top: 4px;">
          Clean typography, intentional color theory, and structured layout systems designed for clear visual communication.
        </div>
      </div>
    </div>
  `;
}

/**
 * 1. Render Alternating Editorial Projects
 */
function initProjects() {
  const mount = document.getElementById('projects-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;

  mount.innerHTML = `
    <div class="projects-editorial-list">
      ${projects.map((project, idx) => `
        <article class="project-editorial-row reveal-on-scroll" id="${project.id}">
          
          <!-- Visual Column -->
          <div class="project-visual-col">
            ${getUiPreviewMarkup(project)}
          </div>

          <!-- Info Column -->
          <div class="project-info-col">
            <div class="project-meta-header">
              <span class="project-index">CASE ${project.number} // ${project.category}</span>
              <span class="badge ${project.statusColor === 'green' ? 'badge-emerald' : project.statusColor === 'amber' ? 'badge-amber' : 'badge-cyan'}">
                ● ${project.status}
              </span>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.shortDesc}</p>

            <div style="background: rgba(255,255,255,0.02); border-left: 2px solid var(--accent-cyan); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
              <div style="font-size: 11px; font-family: var(--font-mono); color: var(--accent-cyan-light); text-transform: uppercase;">Core Problem Solved</div>
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
                <span>View Full Case Study</span>
                <span>↗</span>
              </button>
              <a href="#contact" class="btn btn-secondary btn-sm">
                <span>Discuss Build</span>
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
 * 2. Render Skills Categories
 */
function initSkills() {
  const mount = document.getElementById('skills-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const { development, aiWorkflow, digitalBusiness, design } = window.PORTFOLIO_DATA.skills;

  const categories = [
    { title: "Core Web Development", icon: "💻", items: development },
    { title: "AI & Development Workflow", icon: "⚡", items: aiWorkflow },
    { title: "Digital Business & E-Commerce", icon: "🛍️", items: digitalBusiness },
    { title: "Design & Visual Branding", icon: "🎨", items: design }
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
                <span style="font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); margin-left: 2px;">
                  [${skill.level}]
                </span>
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
              <span class="badge badge-cyan" style="font-size: 10px;">${item.period}</span>
            </div>
            <p class="journey-step-desc">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 4. Render Leadership & Collaboration Grid
 */
function initLeadership() {
  const mount = document.getElementById('leadership-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.leadership;

  mount.innerHTML = `
    <div class="what-i-do-grid">
      ${items.map(item => `
        <div class="service-card reveal-on-scroll">
          <div class="service-header">
            <span class="service-icon">🤝</span>
            <h4 class="service-title">${item.title}</h4>
          </div>
          <p class="service-desc">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 5. Render Currently Building Snapshot
 */
function initCurrentlyBuilding() {
  const mount = document.getElementById('currently-building-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.currentlyBuilding;

  mount.innerHTML = `
    <div class="what-i-do-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      ${items.map(item => `
        <div class="service-card reveal-on-scroll">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <h4 class="service-title">${item.title}</h4>
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
 * 6. Modal Drawer Handling
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
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="project-index">CASE ${project.number} // ${project.category}</span>
        <span class="badge ${project.statusColor === 'green' ? 'badge-emerald' : 'badge-amber'}">
          ● ${project.status}
        </span>
      </div>

      <h2 style="font-size: var(--font-size-xl); color: #fff;">${project.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.65; font-size: var(--font-size-sm);">${project.shortDesc}</p>

      <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: var(--space-md);">
        <h4 style="font-size: var(--font-size-xs); font-family: var(--font-mono); color: var(--accent-cyan-light); text-transform: uppercase; margin-bottom: 8px;">
          Key Implemented Features
        </h4>
        <ul class="project-features" style="margin: 0;">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-sm); margin-top: 4px;">
        <div style="background: rgba(244, 63, 94, 0.05); border-left: 2px solid #f43f5e; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #f43f5e; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Problem Identified</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.problem}</p>
        </div>
        
        <div style="background: rgba(99, 102, 241, 0.05); border-left: 2px solid #818cf8; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #818cf8; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Engineering Approach</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.solution}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.05); border-left: 2px solid #34d399; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #34d399; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">Practical Takeaway & Growth</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.takeaway}</p>
        </div>
      </div>

      <div style="margin-top: 4px; padding-top: var(--space-md); border-top: 1px solid var(--border-subtle);">
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 8px; font-family: var(--font-mono);">Technologies & Tools:</div>
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
