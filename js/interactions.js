/**
 * Interactive Modules for Ideas -> Built, AI Workflow, Troubleshooting, and CV Download
 * Deep Obsidian Espresso & Antique Copper Architectural Studio Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initIdeasToBuilt();
  initAiWorkflow();
  initTroubleshooting();
  initCvButton();
});

/**
 * 1. "Ideas → Built" Signature Interactive Module (4-Stage Horizontal/Vertical Pipeline)
 */
function initIdeasToBuilt() {
  const container = document.getElementById('ideas-built-mount');
  if (!container || !window.PORTFOLIO_DATA) return;

  const cases = window.PORTFOLIO_DATA.ideasToBuilt;
  if (!cases || cases.length === 0) return;

  let activeIndex = 0;

  function render() {
    const current = cases[activeIndex];
    
    container.innerHTML = `
      <div class="ideas-built-module">
        <!-- Project Selector Tabs -->
        <div class="ideas-project-tabs" role="tablist">
          ${cases.map((item, idx) => `
            <button 
              class="tab-btn ${idx === activeIndex ? 'is-active' : ''}" 
              data-index="${idx}"
              role="tab"
              aria-selected="${idx === activeIndex}"
            >
              <span>${item.projectName}</span>
              <span class="badge badge-glass" style="font-size: 10px;">
                ${item.badge}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- 4-Stage Horizontal Pipeline Header -->
        <div class="ideas-steps-flow">
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">01</span>
            <span class="ideas-flow-label">IDEA</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">02</span>
            <span class="ideas-flow-label">PROBLEM</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">03</span>
            <span class="ideas-flow-label">BUILD</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">04</span>
            <span class="ideas-flow-label">RESULT</span>
          </div>
        </div>

        <!-- 4-Grid Breakdown Cards -->
        <div class="ideas-4grid-content">
          <div class="ideas-stage-card stage-idea">
            <span class="stage-tag">01 // ${current.steps.idea.title}</span>
            <h4 class="stage-heading">What I Wanted to Create</h4>
            <p class="stage-text">${current.steps.idea.desc}</p>
          </div>

          <div class="ideas-stage-card stage-problem">
            <span class="stage-tag">02 // ${current.steps.problem.title}</span>
            <h4 class="stage-heading">The Real Challenge</h4>
            <p class="stage-text">${current.steps.problem.desc}</p>
          </div>

          <div class="ideas-stage-card stage-build">
            <span class="stage-tag">03 // ${current.steps.build.title}</span>
            <h4 class="stage-heading">How I Approached It</h4>
            <p class="stage-text">${current.steps.build.desc}</p>
          </div>

          <div class="ideas-stage-card stage-result">
            <span class="stage-tag">04 // ${current.steps.result.title}</span>
            <h4 class="stage-heading">Outcome & Learning</h4>
            <p class="stage-text">${current.steps.result.desc}</p>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (idx !== activeIndex) {
          activeIndex = idx;
          render();
        }
      });
    });
  }

  render();
}

/**
 * 2. "Building With AI" Interactive Stepper
 */
function initAiWorkflow() {
  const mount = document.getElementById('ai-workflow-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const steps = window.PORTFOLIO_DATA.aiWorkflow;
  if (!steps || steps.length === 0) return;

  let activeIndex = 0;

  function render() {
    const current = steps[activeIndex];

    mount.innerHTML = `
      <div class="ai-section-grid">
        <!-- Left: Credo & Focus Spotlight -->
        <div class="ai-credo-card">
          <div class="ai-quote-box">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-copper); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.14em;">
              DEVELOPMENT PHILOSOPHY
            </div>
            <p class="ai-quote-text">
              "AI doesn't replace my thinking. It accelerates it."
            </p>
            <p class="ai-quote-detail">
              I use modern AI tools to explore ideas, understand problems, accelerate prototyping, debug, iterate, and learn faster—while keeping architectural decisions, logic, and code quality strictly in my own hands.
            </p>
          </div>

          <!-- Active Step Panel -->
          <div class="ai-focus-detail-panel">
            <div class="ai-focus-title">
              <span>Phase ${current.step}: ${current.title}</span>
            </div>
            <p class="ai-focus-text">${current.detail}</p>
          </div>
        </div>

        <!-- Right: Interactive Workflow Stepper -->
        <div class="ai-stepper-list">
          ${steps.map((item, idx) => `
            <div class="ai-step-row ${idx === activeIndex ? 'is-active' : ''}" data-index="${idx}">
              <div class="ai-step-left">
                <span class="ai-step-num">${item.step}</span>
                <div>
                  <div class="ai-step-name">${item.title}</div>
                  <div class="ai-step-summary">${item.summary}</div>
                </div>
              </div>
              <span style="font-size: 11px; font-family: var(--font-mono); color: ${idx === activeIndex ? 'var(--accent-copper)' : 'var(--text-muted)'};">
                ${idx === activeIndex ? '● ACTIVE' : '▹'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mount.querySelectorAll('.ai-step-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.getAttribute('data-index'), 10);
        if (idx !== activeIndex) {
          activeIndex = idx;
          render();
        }
      });
    });
  }

  render();
}

/**
 * 3. Troubleshooting Showcase
 */
function initTroubleshooting() {
  const mount = document.getElementById('troubleshooting-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.troubleshooting;
  if (!items) return;

  mount.innerHTML = `
    <div class="troubleshoot-cards-grid">
      ${items.map(item => `
        <div class="troubleshoot-case-item reveal-on-scroll">
          <div class="troubleshoot-case-header">
            <span class="badge badge-glass">${item.category}</span>
            <span class="badge badge-copper">✓ Resolved</span>
          </div>
          <h4 class="troubleshoot-case-title">${item.title}</h4>
          <p class="troubleshoot-case-body">
            <strong style="color: var(--text-primary); font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">Hurdle:</strong> ${item.problem}
          </p>
          <div class="troubleshoot-case-resolution">
            <span>Fix:</span>
            <span>${item.solution}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * 4. CV Download Button Handler
 */
function initCvButton() {
  const cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn || !window.PORTFOLIO_DATA) return;

  const cvAvailable = window.PORTFOLIO_DATA.profile.cvAvailable;
  const cvPath = window.PORTFOLIO_DATA.profile.cvPath;

  cvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cvAvailable) {
      window.open(cvPath, '_blank');
    } else {
      if (typeof window.showToast === 'function') {
        window.showToast('CV will be available for download soon. Feel free to reach out via email!', 'info');
      }
    }
  });
}
