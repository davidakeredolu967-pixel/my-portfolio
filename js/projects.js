/**
 * Projects Rendering & Modal Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initSkills();
  initJourney();
  initLeadership();
  initCurrentlyBuilding();
  initModal();
});

function initProjects() {
  const mount = document.getElementById('projects-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;

  mount.innerHTML = `
    <div class="projects-grid">
      ${projects.map((project, idx) => `
        <article class="project-card reveal-on-scroll">
          <div class="project-card-header">
            <span class="project-num">PROJECT ${project.number}</span>
            <span class="badge ${project.statusColor === 'green' ? 'badge-emerald' : project.statusColor === 'amber' ? 'badge-amber' : 'badge-cyan'}">
              ● ${project.status}
            </span>
          </div>

          <div class="project-card-body">
            <span style="font-size: var(--text-xs); font-family: var(--font-code); color: var(--accent-cyan-light); text-transform: uppercase; letter-spacing: 0.05em;">
              ${project.category}
            </span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDesc}</p>

            <ul class="project-features-list">
              ${project.features.slice(0, 3).map(feat => `<li>${feat}</li>`).join('')}
            </ul>

            <div class="project-tech-stack">
              ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>

          <div class="project-card-footer">
            <button class="btn btn-secondary btn-sm open-project-modal-btn" data-project-id="${project.id}">
              <span>View Case Details</span>
              <span>↗</span>
            </button>
            <span style="font-size: var(--text-xs); color: var(--text-muted); font-family: var(--font-code);">
              ${project.status}
            </span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  // Attach modal triggers
  mount.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });
}

/**
 * Render Skills Categories with authentic tags
 */
function initSkills() {
  const mount = document.getElementById('skills-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const { development, aiWorkflow, digitalBusiness, design } = window.PORTFOLIO_DATA.skills;

  const categories = [
    { title: "Core Web Development", icon: "💻", items: development },
    { title: "AI & Modern Workflow", icon: "⚡", items: aiWorkflow },
    { title: "Digital Business & E-Commerce", icon: "🛍️", items: digitalBusiness },
    { title: "Design & Visual Branding", icon: "🎨", items: design }
  ];

  mount.innerHTML = `
    <div class="skills-categories-grid">
      ${categories.map(cat => `
        <div class="skill-category-card reveal-on-scroll">
          <div class="skill-cat-header">
            <span class="skill-cat-icon">${cat.icon}</span>
            <h3 class="skill-cat-title">${cat.title}</h3>
          </div>
          <div class="skills-pill-group">
            ${cat.items.map(skill => `
              <div class="skill-pill">
                <span class="skill-name">${skill.name}</span>
                <span class="proficiency-tag tag-${skill.tag}">${skill.level}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render Journey Timeline
 */
function initJourney() {
  const mount = document.getElementById('journey-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const timeline = window.PORTFOLIO_DATA.journey;

  mount.innerHTML = `
    <div class="journey-timeline">
      ${timeline.map(item => `
        <div class="journey-item reveal-on-scroll">
          <div class="journey-marker"></div>
          <div class="journey-card">
            <div class="journey-header">
              <span class="journey-title">${item.title}</span>
              <span class="badge badge-cyan" style="font-size: 10px;">${item.period}</span>
            </div>
            <p class="journey-desc">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render Leadership & Collaboration Grid
 */
function initLeadership() {
  const mount = document.getElementById('leadership-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.leadership;

  mount.innerHTML = `
    <div class="leadership-grid">
      ${items.map(item => `
        <div class="leadership-card reveal-on-scroll">
          <div class="leadership-icon">🤝</div>
          <h4 class="leadership-title">${item.title}</h4>
          <p class="leadership-desc">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render Currently Building Radar
 */
function initCurrentlyBuilding() {
  const mount = document.getElementById('currently-building-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.currentlyBuilding;

  mount.innerHTML = `
    <div class="currently-building-grid">
      ${items.map(item => `
        <div class="building-card reveal-on-scroll">
          <div class="building-status-header">
            <span class="status-pill">
              <span class="status-dot status-${item.statusType}"></span>
              <span>${item.status}</span>
            </span>
          </div>
          <h4 class="building-title">${item.title}</h4>
          <p class="building-desc">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Modal Handling
 */
let modalBackdrop, modalBody, modalCloseBtn;

function initModal() {
  modalBackdrop = document.getElementById('project-modal');
  modalBody = document.getElementById('modal-dynamic-content');
  modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
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
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="project-num">PROJECT ${project.number}</span>
        <span class="badge ${project.statusColor === 'green' ? 'badge-emerald' : 'badge-amber'}">
          ● ${project.status}
        </span>
      </div>

      <h2 style="font-size: var(--text-2xl);">${project.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.6;">${project.shortDesc}</p>

      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: var(--space-4);">
        <h4 style="font-size: var(--text-sm); color: var(--accent-cyan-light); margin-bottom: 8px;">Core Features</h4>
        <ul class="project-features-list" style="margin: 0;">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-3); margin-top: var(--space-2);">
        <div>
          <strong style="color: #38bdf8; font-size: var(--text-xs); text-transform: uppercase; font-family: var(--font-code);">Problem Context</strong>
          <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px;">${project.details.problem}</p>
        </div>
        <div>
          <strong style="color: #818cf8; font-size: var(--text-xs); text-transform: uppercase; font-family: var(--font-code);">Implementation Approach</strong>
          <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px;">${project.details.solution}</p>
        </div>
        <div>
          <strong style="color: #34d399; font-size: var(--text-xs); text-transform: uppercase; font-family: var(--font-code);">Key Learning / Takeaway</strong>
          <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px;">${project.details.takeaway}</p>
        </div>
      </div>

      <div style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: 8px; font-family: var(--font-code);">Tech Stack & Tools:</div>
        <div class="project-tech-stack" style="border: none; padding: 0;">
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
