/**
 * Interactive Modules for Ideas -> Built, AI Workflow, and Troubleshooting
 */

document.addEventListener('DOMContentLoaded', () => {
  initIdeasToBuilt();
  initAiWorkflow();
  initTroubleshooting();
});

/**
 * 1. Ideas -> Built Interactive Selector
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
      <div class="ideas-built-container">
        <!-- Project Selector Buttons -->
        <div class="ideas-project-selector" role="tablist">
          ${cases.map((item, idx) => `
            <button 
              class="tab-btn ${idx === activeIndex ? 'is-active' : ''}" 
              data-index="${idx}"
              role="tab"
              aria-selected="${idx === activeIndex}"
            >
              <span>${item.projectName}</span>
              <span class="badge ${item.badge.includes('Development') ? 'badge-emerald' : item.badge.includes('Built') ? 'badge-cyan' : 'badge-amber'}" style="font-size: 10px; padding: 2px 6px;">
                ${item.badge}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- 4-Stage Visual Pipeline Header -->
        <div class="pipeline-steps-indicator">
          <div class="pipeline-step-item is-active">
            <span class="pipeline-step-num">STEP 01</span>
            <span class="pipeline-step-title">1. The Idea</span>
          </div>
          <div class="pipeline-step-item is-active">
            <span class="pipeline-step-num">STEP 02</span>
            <span class="pipeline-step-title">2. The Problem</span>
          </div>
          <div class="pipeline-step-item is-active">
            <span class="pipeline-step-num">STEP 03</span>
            <span class="pipeline-step-title">3. The Build</span>
          </div>
          <div class="pipeline-step-item is-active">
            <span class="pipeline-step-num">STEP 04</span>
            <span class="pipeline-step-title">4. The Result</span>
          </div>
        </div>

        <!-- Interactive 4-Grid Breakdown Cards -->
        <div class="ideas-case-content">
          <div class="case-card card-idea">
            <div class="case-card-header">
              <span class="case-card-label">💡 ${current.steps.idea.title}</span>
            </div>
            <h4 class="case-card-title">What I Wanted to Create</h4>
            <p class="case-card-desc">${current.steps.idea.desc}</p>
          </div>

          <div class="case-card card-problem">
            <div class="case-card-header">
              <span class="case-card-label">⚠️ ${current.steps.problem.title}</span>
            </div>
            <h4 class="case-card-title">The Real Challenge</h4>
            <p class="case-card-desc">${current.steps.problem.desc}</p>
          </div>

          <div class="case-card card-build">
            <div class="case-card-header">
              <span class="case-card-label">🛠️ ${current.steps.build.title}</span>
            </div>
            <h4 class="case-card-title">Engineering Solution</h4>
            <p class="case-card-desc">${current.steps.build.desc}</p>
          </div>

          <div class="case-card card-result">
            <div class="case-card-header">
              <span class="case-card-label">🚀 ${current.steps.result.title}</span>
            </div>
            <h4 class="case-card-title">Outcome & Takeaway</h4>
            <p class="case-card-desc">${current.steps.result.desc}</p>
          </div>
        </div>
      </div>
    `;

    // Attach click events
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
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
      <div class="ai-workflow-grid">
        <!-- Left: Philosophy & Interactive Detail -->
        <div class="ai-philosophy-card">
          <div class="ai-quote-box">
            <div style="font-family: var(--font-code); font-size: var(--text-xs); color: var(--accent-indigo-light); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">
              Core Philosophy
            </div>
            <p class="ai-quote-text">
              "AI doesn't replace my thinking. It accelerates it."
            </p>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 12px; line-height: 1.6;">
              I use AI as a high-powered pairing partner for rapid scaffolding, debugging unfamiliar edge cases, and testing assumptions—while keeping architectural decisions, logic verification, and clean design in my own hands.
            </p>
          </div>

          <!-- Active Step Spotlight Panel -->
          <div class="ai-step-detail-panel">
            <div class="ai-panel-title">
              <span>Phase ${current.step}: ${current.title}</span>
            </div>
            <p class="ai-panel-body">${current.detail}</p>
          </div>
        </div>

        <!-- Right: Interactive Step Clicker -->
        <div class="ai-workflow-stepper">
          ${steps.map((item, idx) => `
            <div class="ai-step-card ${idx === activeIndex ? 'is-active' : ''}" data-index="${idx}">
              <div class="ai-step-left">
                <span class="ai-step-index">${item.step}</span>
                <div>
                  <div class="ai-step-name">${item.title}</div>
                  <div style="font-size: var(--text-xs); color: var(--text-muted);">${item.summary}</div>
                </div>
              </div>
              <span style="color: ${idx === activeIndex ? 'var(--accent-cyan)' : 'var(--text-muted)'}; font-size: 14px;">
                ${idx === activeIndex ? '● Active' : '▹'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mount.querySelectorAll('.ai-step-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
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
 * 3. Troubleshooting Showcase ("When Things Break, I Figure Them Out")
 */
function initTroubleshooting() {
  const mount = document.getElementById('troubleshooting-mount');
  if (!mount || !window.PORTFOLIO_DATA) return;

  const items = window.PORTFOLIO_DATA.troubleshooting;
  if (!items) return;

  mount.innerHTML = `
    <div class="troubleshooting-grid">
      ${items.map(item => `
        <div class="troubleshoot-card">
          <div class="troubleshoot-header">
            <span class="badge badge-indigo">${item.category}</span>
            <span class="badge badge-emerald">✓ ${item.badge}</span>
          </div>
          <h4 class="troubleshoot-title">${item.title}</h4>
          <p class="troubleshoot-body" style="margin-top: 8px;">
            <strong style="color: var(--text-primary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.05em;">Issue:</strong> ${item.problem}
          </p>
          <div class="troubleshoot-fix">
            <span>🛠️ Resolution:</span> ${item.solution}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
