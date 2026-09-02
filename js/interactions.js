/**
 * Interactive Modules for Ideas -> Built, AI Workflow, Troubleshooting, and Hero Canvas
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initIdeasToBuilt();
  initAiWorkflow();
  initTroubleshooting();
});

/**
 * 0. Hero Interactive Canvas Tabs (Architecture / State / Terminal Output)
 */
function initHeroCanvas() {
  const mount = document.getElementById('hero-canvas-body');
  const tabs = document.querySelectorAll('.hero-tab-pill');
  if (!mount || !tabs.length) return;

  const views = {
    code: `
      <div class="canvas-line">
        <span class="canvas-ln">01</span>
        <span class="canvas-text"><span class="token-kw">const</span> <span class="token-fn">builder</span> = {</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">02</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">name</span>: <span class="token-str">"Akeredolu Kolade David Omoniyi"</span>,</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">03</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">alias</span>: <span class="token-str">"Niyi"</span>,</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">04</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">discipline</span>: <span class="token-str">"Mathematical Science @ FUTA"</span>,</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">05</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">focus</span>: [<span class="token-str">"Web Apps"</span>, <span class="token-str">"AI-Assisted Dev"</span>, <span class="token-str">"E-Commerce"</span>],</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">06</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">workflow</span>: <span class="token-str">"AI doesn't replace thinking. It accelerates it."</span>,</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">07</span>
        <span class="canvas-text">&nbsp;&nbsp;<span class="token-prop">status</span>: <span class="token-str">"Building & Troubleshooting Daily"</span></span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">08</span>
        <span class="canvas-text">};</span>
      </div>
      <div class="canvas-line" style="margin-top: 6px;">
        <span class="canvas-ln">09</span>
        <span class="canvas-text"><span class="token-fn">builder</span>.<span class="token-fn">turnIdeaIntoProduct</span>({ speed: <span class="token-str">"fast"</span>, quality: <span class="token-str">"high"</span> });</span>
      </div>
    `,
    telemetry: `
      <div class="canvas-line">
        <span class="canvas-ln">01</span>
        <span class="canvas-text"><span class="token-cmt">// System Telemetry & Workflow State</span></span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">02</span>
        <span class="canvas-text"><span class="token-kw">status</span>: <span style="color: #34d399;">● READY_FOR_BUILD</span></span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">03</span>
        <span class="canvas-text"><span class="token-prop">core_frameworks</span>: [<span class="token-str">"HTML5"</span>, <span class="token-str">"CSS3 (Vanilla Grid/Flex)"</span>, <span class="token-str">"ES6+ JS"</span>, <span class="token-str">"React"</span>]</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">04</span>
        <span class="canvas-text"><span class="token-prop">cloud_backend</span>: [<span class="token-str">"Firebase Auth"</span>, <span class="token-str">"Firestore NoSQL"</span>, <span class="token-str">"Cloud Functions"</span>]</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">05</span>
        <span class="canvas-text"><span class="token-prop">ai_pairing_engine</span>: [<span class="token-str">"Context Scaffolding"</span>, <span class="token-str">"Trace Debugging"</span>, <span class="token-str">"UI Prototyping"</span>]</span>
      </div>
      <div class="canvas-line">
        <span class="canvas-ln">06</span>
        <span class="canvas-text"><span class="token-prop">contact_endpoints</span>: <span class="token-str">"akeredoludavid967@gmail.com"</span> | <span class="token-str">"09054168609"</span></span>
      </div>
      <div class="canvas-line" style="margin-top: 6px;">
        <span class="canvas-ln">07</span>
        <span class="canvas-text"><span class="token-cmt">// 0 console errors • 100% responsive • accessible</span></span>
      </div>
    `
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const viewKey = tab.getAttribute('data-view');
      if (!views[viewKey]) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      mount.innerHTML = views[viewKey];
    });
  });
}

/**
 * 1. "Ideas → Built" Signature Interactive Module
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
              <span class="badge ${item.badge.includes('Development') ? 'badge-emerald' : item.badge.includes('Built') ? 'badge-cyan' : 'badge-amber'}" style="font-size: 10px;">
                ${item.badge}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- 4-Stage Visual Pipeline Header -->
        <div class="ideas-steps-flow">
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">Stage 01</span>
            <span class="ideas-flow-label">1. The Idea</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">Stage 02</span>
            <span class="ideas-flow-label">2. The Problem</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">Stage 03</span>
            <span class="ideas-flow-label">3. The Build</span>
          </div>
          <div class="ideas-flow-item active">
            <span class="ideas-flow-step">Stage 04</span>
            <span class="ideas-flow-label">4. The Result</span>
          </div>
        </div>

        <!-- 4-Grid Breakdown Cards -->
        <div class="ideas-4grid-content">
          <div class="ideas-stage-card stage-idea">
            <span class="stage-tag">💡 ${current.steps.idea.title}</span>
            <h4 class="stage-heading">What I Wanted to Create</h4>
            <p class="stage-text">${current.steps.idea.desc}</p>
          </div>

          <div class="ideas-stage-card stage-problem">
            <span class="stage-tag">⚠️ ${current.steps.problem.title}</span>
            <h4 class="stage-heading">The Real Challenge</h4>
            <p class="stage-text">${current.steps.problem.desc}</p>
          </div>

          <div class="ideas-stage-card stage-build">
            <span class="stage-tag">🛠️ ${current.steps.build.title}</span>
            <h4 class="stage-heading">Engineering Solution</h4>
            <p class="stage-text">${current.steps.build.desc}</p>
          </div>

          <div class="ideas-stage-card stage-result">
            <span class="stage-tag">🚀 ${current.steps.result.title}</span>
            <h4 class="stage-heading">Outcome & Takeaway</h4>
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
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-indigo-light); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">
              Core Engineering Mindset
            </div>
            <p class="ai-quote-text">
              "AI doesn't replace my thinking. It accelerates it."
            </p>
            <p class="ai-quote-detail">
              I leverage modern AI tools to accelerate rapid prototyping, debug edge cases, and test ideas—while keeping software architecture, data modeling, and code verification in my own hands.
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
              <span style="font-size: 11px; font-family: var(--font-mono); color: ${idx === activeIndex ? 'var(--accent-cyan)' : 'var(--text-muted)'};">
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
            <span class="badge badge-indigo">${item.category}</span>
            <span class="badge badge-emerald">✓ ${item.badge}</span>
          </div>
          <h4 class="troubleshoot-case-title">${item.title}</h4>
          <p class="troubleshoot-case-body">
            <strong style="color: var(--text-primary); font-size: 11px; text-transform: uppercase; font-family: var(--font-mono);">Hurdle:</strong> ${item.problem}
          </p>
          <div class="troubleshoot-case-resolution">
            <span>🛠️ Fix:</span>
            <span>${item.solution}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
