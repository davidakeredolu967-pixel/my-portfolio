/**
 * Projects Rendering & Editorial Showcase — Architectural Studio Edition
 * Large visual project blocks, real screenshot support, and spatial capabilities layout.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initCapabilities();
  initJourney();
  initCurrentlyBuilding();
  initModal();
});

/**
 * Smoked Chrome Minimal Mockup Frame (Fallback when real screenshot is pending)
 */
function getUiPreviewMockup(project) {
  if (project.previewType === 'dashboard') {
    return `
      <div class="ui-preview-window">
        <div class="ui-preview-topbar">
          <div class="ui-window-dots">
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
          </div>
          <span class="ui-preview-url">attendance-system (prototype)</span>
          <span class="badge badge-copper" style="font-size: 10px;">Prototype</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
            <div>
              <div style="font-size: 13px; font-weight: 600; color: #F2EFE8;">Attendance Management</div>
              <div style="font-size: 11px; color: var(--text-muted);">Session check-in stream</div>
            </div>
            <span class="badge badge-glass">Firebase</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: var(--accent-copper);">124</div>
              <div style="font-size: 10px; color: var(--text-muted);">Checked In</div>
            </div>
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: #F2EFE8;">98.4%</div>
              <div style="font-size: 10px; color: var(--text-muted);">On-Time Rate</div>
            </div>
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 10px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: #F2EFE8;">08:00 AM</div>
              <div style="font-size: 10px; color: var(--text-muted);">Session Open</div>
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px 12px; font-family: var(--font-mono); font-size: 11px; display: flex; flex-direction: column; gap: 4px;">
            <div style="color: var(--text-muted); font-size: 10px; text-transform: uppercase;">Recent Activity Stream</div>
            <div style="display: flex; justify-content: space-between; color: #F2EFE8;">
              <span>Student 01 — Computer Science</span>
              <span style="color: var(--accent-copper);">08:14 AM ✓</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: #F2EFE8;">
              <span>Student 02 — Mathematical Science</span>
              <span style="color: var(--accent-copper);">08:12 AM ✓</span>
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
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
          </div>
          <span class="ui-preview-url">recipe-platform (concept)</span>
          <span class="badge badge-copper" style="font-size: 10px;">Firestore</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="badge badge-glass">Breakfast</span>
            <span class="badge badge-glass">Quick Prep</span>
            <span class="badge badge-copper">Healthy</span>
          </div>
          <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 12px;">
            <div style="font-size: 14px; font-weight: 600; color: #F2EFE8; margin-bottom: 4px;">Mediterranean Skillet</div>
            <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.45;">Clean ingredient indexing, preparation timer calculation, and step-by-step instructions.</div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 11px;">
            <div style="background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: var(--accent-copper); font-weight: 600; margin-bottom: 2px;">Ingredients (6)</div>
              <div style="color: var(--text-muted); font-size: 10px;">• Eggs, tomatoes, olive oil</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
              <div style="color: #F2EFE8; font-weight: 600; margin-bottom: 2px;">Timing & Yield</div>
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
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
          </div>
          <span class="ui-preview-url">avantivogue (store concept)</span>
          <span class="badge badge-copper" style="font-size: 10px;">Shopify Concept</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div style="font-family: var(--font-heading); font-size: 14px; font-weight: 700; letter-spacing: 0.08em; color: #F2EFE8;">AVANTI VOGUE</div>
            <span class="badge badge-glass" style="font-size: 10px;">Concept</span>
          </div>
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 8px; align-items: center;">
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 10px;">
              <div style="font-size: 10px; color: var(--accent-copper); font-family: var(--font-mono); margin-bottom: 2px;">COLLECTION 01</div>
              <div style="font-size: 12px; font-weight: 600; color: #F2EFE8;">Lifestyle Apparel</div>
              <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Curated store catalog.</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 8px; font-family: var(--font-mono); font-size: 10px;">
              <div style="color: var(--text-muted); margin-bottom: 2px;">Store Flow</div>
              <div style="color: var(--accent-copper); font-weight: 600;">Product Showcase</div>
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
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
            <span class="ui-dot"></span>
          </div>
          <span class="ui-preview-url">niyi.dev (live build)</span>
          <span class="badge badge-copper" style="font-size: 10px;">Portfolio</span>
        </div>
        <div class="ui-preview-canvas">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <div style="font-size: 13px; font-weight: 700; color: #F2EFE8;">Studio Architecture</div>
            <span class="badge badge-glass">Vanilla JS / CSS</span>
          </div>
          <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 12px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;">
            Smoked architectural glass, antique copper accents, fluid clamp typography, and multi-layered 3D spatial depth.
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
          <span class="ui-dot"></span>
          <span class="ui-dot"></span>
          <span class="ui-dot"></span>
        </div>
        <span class="ui-preview-url">branding-gallery (concept)</span>
        <span class="badge badge-glass" style="font-size: 10px;">Visual Media</span>
      </div>
      <div class="ui-preview-canvas">
        <div style="font-size: 13px; font-weight: 600; color: #F2EFE8; margin-bottom: 6px;">Campus & Event Design Assets</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
          <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2" style="margin-bottom: 4px;"><path d="M2 20h20"></path><path d="M5 20V8l7 5 7-5v12"></path></svg>
            <div style="font-size: 10px; color: #F2EFE8; font-weight: 500;">Seminars</div>
          </div>
          <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2" style="margin-bottom: 4px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <div style="font-size: 10px; color: #F2EFE8; font-weight: 500;">Tech Talks</div>
          </div>
          <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2" style="margin-bottom: 4px;"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0 0-20"></path><circle cx="12" cy="8" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle></svg>
            <div style="font-size: 10px; color: #F2EFE8; font-weight: 500;">Social Graphics</div>
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.45; margin-top: 4px;">
          Clean typography, deliberate spatial hierarchy, and structured layout systems designed for clear visual communication.
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
 * 1. Render Large Case-Study Project Blocks
 */
function initProjects() {
  const mount = document.getElementById('projects-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;

  mount.innerHTML = `
    <div class="projects-editorial-list">
      ${projects.map((project, index) => `
        <div class="project-scroll-card-wrap" data-project-index="${index}">
          <article class="project-editorial-row" id="${project.id}">
            
            <!-- Visual Column -->
            <div class="project-visual-col">
              ${getProjectVisualMarkup(project)}
            </div>

            <!-- Info Column -->
            <div class="project-info-col">
              <div class="project-meta-header">
                <span class="project-index">${project.category}</span>
                <span class="badge badge-copper">
                  ● ${project.statusBadge}
                </span>
              </div>

              <h3 class="project-title">${project.title}</h3>
              <p class="project-desc">${project.shortDesc}</p>

              <div style="background: var(--bg-glass); border-left: 2px solid var(--accent-copper); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
                <div style="font-size: 11px; font-family: var(--font-heading); font-weight: 600; color: var(--accent-copper); text-transform: uppercase; letter-spacing: 0.08em;">Problem Addressed</div>
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
        </div>
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
 * 2. Render Spatial Capabilities Layout (Architectural Typography & Dividers)
 */
function initCapabilities() {
  const mount = document.getElementById('skills-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const { development, tools, approach } = window.PORTFOLIO_DATA.skills;

  const categories = [
    { 
      title: "Development", 
      desc: "Core frontend architecture, state management, and real-time backend integrations.",
      items: development 
    },
    { 
      title: "Tools & Platforms", 
      desc: "Production developer tooling, version control, store platforms, and asset creation.",
      items: tools 
    },
    { 
      title: "Approach & Mindset", 
      desc: "Disciplined problem solving, rapid prototyping, and AI-accelerated workflows.",
      items: approach 
    }
  ];

  mount.innerHTML = `
    <div class="capabilities-spatial-grid">
      ${categories.map(cat => `
        <div class="capability-column-block reveal-on-scroll">
          <div class="capability-col-header">
            <h3 class="capability-col-title">${cat.title}</h3>
          </div>
          <p class="capability-col-desc">${cat.desc}</p>
          
          <div class="capability-list-stack">
            ${cat.items.map(skill => `
              <div class="capability-row-item">
                <span class="capability-dot capability-dot-${skill.tag}"></span>
                <span class="capability-name">${skill.name}</span>
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
              <span class="badge badge-copper" style="font-size: 10px;">${item.period}</span>
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
 * 5. Smoked Glass Case Detail Modal
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
        <span class="project-index">${project.category}</span>
        <span class="badge badge-copper">
          ● ${project.statusBadge}
        </span>
      </div>

      <h2 style="font-size: var(--font-size-xl); color: #F2EFE8;">${project.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.65; font-size: var(--font-size-sm);">${project.shortDesc}</p>

      <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: var(--space-md);">
        <h4 style="font-size: var(--font-size-xs); font-family: var(--font-mono); color: var(--accent-copper); text-transform: uppercase; margin-bottom: 8px;">
          Key Features
        </h4>
        <ul class="project-features" style="margin: 0;">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-sm); margin-top: 4px;">
        <div style="background: var(--bg-glass); border-left: 2px solid #ef4444; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #ef4444; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Problem</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.problem}</p>
        </div>
        
        <div style="background: var(--bg-glass); border-left: 2px solid var(--accent-copper); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: var(--accent-copper); font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">The Approach</strong>
          <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: 4px; line-height: 1.55;">${project.details.solution}</p>
        </div>

        <div style="background: var(--bg-glass); border-left: 2px solid #86efac; padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
          <strong style="color: #86efac; font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">Learning & Takeaway</strong>
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
