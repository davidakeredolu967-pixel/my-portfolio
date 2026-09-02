/**
 * Multi-Layered Abstract 3D Architectural Workspace Engine
 * Deep Obsidian Espresso, Smoked Glass, Dark Chrome, and Antique Copper
 * Hardware-accelerated mathematical 3D projection responding to scroll & mouse depth
 */

(function () {
  'use strict';

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reducedMotionQuery.matches;

  reducedMotionQuery.addEventListener('change', (e) => {
    isReducedMotion = e.matches;
  });

  // Global cursor coordinates with smooth damping
  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  };

  // Scroll tracking for camera shift
  let scrollProgress = 0;
  function updateScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.targetX = 0;
    mouse.targetY = 0;
  });

  document.addEventListener('DOMContentLoaded', () => {
    initMultiLayerBackgroundCanvas();
    initHeroInteractiveCanvas();
  });

  /* --------------------------------------------------------------------------
     1. Multi-Layer Background 3D Spatial Canvas (Far + Mid Spatial Depth)
     -------------------------------------------------------------------------- */
  function initMultiLayerBackgroundCanvas() {
    const canvas = document.getElementById('bg-3d-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, cx, cy;
    
    // Layer 1: Far atmospheric space nodes
    let farNodes = [];
    const farCount = 28;

    // Layer 2: Mid architectural floating geometry frames
    let archStructures = [];
    const structureCount = 6;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      cx = width / 2;
      cy = height / 2;
    }

    function createLayers() {
      farNodes = [];
      for (let i = 0; i < farCount; i++) {
        farNodes.push({
          x: (Math.random() - 0.5) * 1400,
          y: (Math.random() - 0.5) * 1600,
          z: Math.random() * 800 - 400,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          vz: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.22 + 0.08
        });
      }

      archStructures = [];
      for (let s = 0; s < structureCount; s++) {
        const rad = 45 + Math.random() * 35;
        archStructures.push({
          x: (Math.random() - 0.5) * 1100,
          y: (Math.random() - 0.5) * 1400,
          z: Math.random() * 600 - 300,
          rx: Math.random() * Math.PI,
          ry: Math.random() * Math.PI,
          speedRx: (Math.random() * 0.002 + 0.001) * (s % 2 === 0 ? 1 : -1),
          speedRy: (Math.random() * 0.002 + 0.001),
          radius: rad,
          alpha: Math.random() * 0.18 + 0.08
        });
      }
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    createLayers();

    let rotY = 0;
    let rotX = 0;

    function renderBg() {
      if (!isReducedMotion) {
        mouse.x += (mouse.targetX - mouse.x) * 0.035;
        mouse.y += (mouse.targetY - mouse.y) * 0.035;

        rotY += 0.0005;
        rotX = mouse.y * 0.1;
      }

      ctx.clearRect(0, 0, width, height);

      const focalLength = 680;
      // Scroll shifts camera Y and angle subtly
      const cameraYShift = scrollProgress * 280;
      const cosY = Math.cos(rotY + mouse.x * 0.12);
      const sinY = Math.sin(rotY + mouse.x * 0.12);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 1. Render Far Layer Nodes & Connecting Lattice
      const projectedFar = [];
      for (let i = 0; i < farNodes.length; i++) {
        const node = farNodes[i];

        if (!isReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          if (node.x < -700) node.x = 700;
          if (node.x > 700) node.x = -700;
          if (node.y < -800) node.y = 800;
          if (node.y > 800) node.y = -800;
          if (node.z < -400) node.z = 400;
          if (node.z > 400) node.z = -400;
        }

        const yEff = node.y - cameraYShift * 0.3;
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y1 = yEff * cosX - z1 * sinX;
        const z2 = z1 * cosX + yEff * sinX + 650;

        if (z2 > 50) {
          const scale = focalLength / z2;
          const px = cx + x1 * scale;
          const py = cy + y1 * scale;
          const alpha = Math.max(0, Math.min(1, (1 - z2 / 1300) * node.baseAlpha));

          projectedFar.push({ px, py, scale, alpha });
        }
      }

      // Connecting copper lattice lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedFar.length; i++) {
        for (let j = i + 1; j < projectedFar.length; j++) {
          const p1 = projectedFar[i];
          const p2 = projectedFar[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * Math.min(p1.alpha, p2.alpha) * 0.3;
            ctx.strokeStyle = `rgba(184, 137, 90, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Far nodes
      for (let i = 0; i < projectedFar.length; i++) {
        const p = projectedFar[i];
        ctx.fillStyle = `rgba(242, 239, 232, ${p.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.scale * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Mid Layer Architectural Isometric Frames
      for (let s = 0; s < archStructures.length; s++) {
        const arch = archStructures[s];
        if (!isReducedMotion) {
          arch.rx += arch.speedRx;
          arch.ry += arch.speedRy;
        }

        const yEff = arch.y - cameraYShift * 0.6;
        const ax1 = arch.x * cosY - arch.z * sinY;
        const az1 = arch.z * cosY + arch.x * sinY;
        const ay1 = yEff * cosX - az1 * sinX;
        const az2 = az1 * cosX + yEff * sinX + 600;

        if (az2 > 50) {
          const scale = focalLength / az2;
          const apx = cx + ax1 * scale;
          const apy = cy + ay1 * scale;
          const rScaled = arch.radius * scale;

          const alpha = Math.max(0, Math.min(0.25, (1 - az2 / 1200) * arch.alpha));

          // Draw floating geometric faceted diamond
          ctx.strokeStyle = `rgba(184, 137, 90, ${alpha * 0.65})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(apx, apy - rScaled);
          ctx.lineTo(apx + rScaled * 0.8, apy);
          ctx.lineTo(apx, apy + rScaled);
          ctx.lineTo(apx - rScaled * 0.8, apy);
          ctx.closePath();
          ctx.stroke();

          // Subtle inner cross
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(apx - rScaled * 0.8, apy);
          ctx.lineTo(apx + rScaled * 0.8, apy);
          ctx.moveTo(apx, apy - rScaled);
          ctx.lineTo(apx, apy + rScaled);
          ctx.stroke();
        }
      }

      requestAnimationFrame(renderBg);
    }

    renderBg();
  }

  /* --------------------------------------------------------------------------
     2. Hero Interactive 3D Architectural Sculpture (Dark Chrome & Antique Bronze)
     -------------------------------------------------------------------------- */
  function initHeroInteractiveCanvas() {
    const canvas = document.getElementById('hero-interactive-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, cx, cy;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width || 420;
      height = rect.height || 420;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      cx = width / 2;
      cy = height / 2;
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Architectural geometric structure: Intersecting faceted prism + Suspended Rings
    const size = 100;
    const vertices = [
      // Outer faceted frame
      { x: -size, y: -size, z: -size },
      { x: size, y: -size, z: -size },
      { x: size, y: size, z: -size },
      { x: -size, y: size, z: -size },
      { x: -size, y: -size, z: size },
      { x: size, y: -size, z: size },
      { x: size, y: size, z: size },
      { x: -size, y: size, z: size },
      // Inner octahedron core
      { x: 0, y: -size * 1.35, z: 0 },
      { x: 0, y: size * 1.35, z: 0 },
      { x: -size * 1.35, y: 0, z: 0 },
      { x: size * 1.35, y: 0, z: 0 },
      { x: 0, y: 0, z: -size * 1.35 },
      { x: 0, y: 0, z: size * 1.35 }
    ];

    const edges = [
      // Outer frame
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      // Inner octahedron core
      [8, 0], [8, 1], [8, 4], [8, 5],
      [9, 2], [9, 3], [9, 6], [9, 7],
      [10, 0], [10, 3], [10, 4], [10, 7],
      [11, 1], [11, 2], [11, 5], [11, 6],
      [12, 0], [12, 1], [12, 2], [12, 3],
      [13, 4], [13, 5], [13, 6], [13, 7]
    ];

    // Suspended orbital bronze rings
    const ringCount = 28;
    const ring1 = [];
    const ring2 = [];
    const r1Radius = 148;
    const r2Radius = 168;

    for (let i = 0; i < ringCount; i++) {
      const a = (i / ringCount) * Math.PI * 2;
      ring1.push({ x: Math.cos(a) * r1Radius, y: Math.sin(a) * r1Radius * 0.35, z: Math.sin(a) * r1Radius * 0.9 });
      ring2.push({ x: Math.sin(a) * r2Radius * 0.9, y: Math.cos(a) * r2Radius * 0.35, z: Math.cos(a) * r2Radius });
    }

    let angleX = 0.32;
    let angleY = 0.42;
    let angleZ = 0.12;

    function renderHero() {
      if (!isReducedMotion) {
        angleY += 0.0035;
        angleZ += 0.0008;

        const targetRotX = mouse.y * 0.35 + 0.3;
        const targetRotY = angleY + mouse.x * 0.35;
        angleX += (targetRotX - angleX) * 0.045;
      }

      ctx.clearRect(0, 0, width, height);

      // Soft directional studio glow behind sculpture
      const radGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.48);
      radGrad.addColorStop(0, 'rgba(184, 137, 90, 0.06)');
      radGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      const focalLength = 480;
      const cosY = Math.cos(angleY + mouse.x * 0.3);
      const sinY = Math.sin(angleY + mouse.x * 0.3);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      function projectPoint(v) {
        let x = v.x * cosZ - v.y * sinZ;
        let y = v.y * cosZ + v.x * sinZ;
        let z = v.z;

        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        const y1 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX + 500;

        const scale = focalLength / z2;
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          pz: z2,
          scale
        };
      }

      // Project vertices
      const projVertices = vertices.map(projectPoint);

      // Render wireframe edges
      for (let i = 0; i < edges.length; i++) {
        const [idx1, idx2] = edges[i];
        const p1 = projVertices[idx1];
        const p2 = projVertices[idx2];

        const avgZ = (p1.pz + p2.pz) / 2;
        const depthAlpha = Math.max(0.12, Math.min(0.68, (1 - avgZ / 800) * 0.88));

        if (i < 12) {
          // Outer brushed silver frame
          ctx.strokeStyle = `rgba(242, 239, 232, ${depthAlpha * 0.75})`;
          ctx.lineWidth = 1.1;
        } else {
          // Inner core antique copper connectors
          ctx.strokeStyle = `rgba(184, 137, 90, ${depthAlpha * 0.45})`;
          ctx.lineWidth = 0.85;
        }

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }

      // Suspended Ring 1 (Bronze)
      const projRing1 = ring1.map(projectPoint);
      ctx.strokeStyle = 'rgba(184, 137, 90, 0.35)';
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      for (let i = 0; i < projRing1.length; i++) {
        const next = projRing1[(i + 1) % projRing1.length];
        if (i === 0) ctx.moveTo(projRing1[i].px, projRing1[i].py);
        ctx.lineTo(next.px, next.py);
      }
      ctx.stroke();

      // Suspended Ring 2 (Smoked Chrome)
      const projRing2 = ring2.map(projectPoint);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.65;
      ctx.beginPath();
      for (let i = 0; i < projRing2.length; i++) {
        const next = projRing2[(i + 1) % projRing2.length];
        if (i === 0) ctx.moveTo(projRing2[i].px, projRing2[i].py);
        ctx.lineTo(next.px, next.py);
      }
      ctx.stroke();

      // Vertex nodes
      for (let i = 0; i < projVertices.length; i++) {
        const p = projVertices[i];
        const nodeAlpha = Math.max(0.2, (1 - p.pz / 800));

        if (i >= 8) {
          // Inner copper vertex highlights
          ctx.fillStyle = `rgba(184, 137, 90, ${nodeAlpha * 0.95})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.scale * 3.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Outer brushed chrome vertices
          ctx.fillStyle = `rgba(242, 239, 232, ${nodeAlpha * 0.85})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.scale * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(renderHero);
    }

    renderHero();
  }
})();
