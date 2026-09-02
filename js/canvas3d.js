/**
 * Abstract 3D Digital Workspace Canvas Engine — Studio Edition
 * Dark Chrome, Smoked Glass, and Warm Silver Architectural Sculpture
 * Hardware-accelerated mathematical 3D projection
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

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.targetX = 0;
    mouse.targetY = 0;
  });

  document.addEventListener('DOMContentLoaded', () => {
    initBackgroundCanvas();
    initHeroInteractiveCanvas();
  });

  /* --------------------------------------------------------------------------
     1. Ambient Background 3D Field (Subtle smoked particles & faint lattice)
     -------------------------------------------------------------------------- */
  function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-3d-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, cx, cy;
    let nodes = [];
    const nodeCount = 32;

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

    function createNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: (Math.random() - 0.5) * 1200,
          y: (Math.random() - 0.5) * 1000,
          z: Math.random() * 800 - 400,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          vz: (Math.random() - 0.5) * 0.18,
          size: Math.random() * 1.8 + 0.8,
          baseAlpha: Math.random() * 0.25 + 0.08
        });
      }
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    createNodes();

    let rotY = 0;
    let rotX = 0;

    function render() {
      if (!isReducedMotion) {
        mouse.x += (mouse.targetX - mouse.x) * 0.035;
        mouse.y += (mouse.targetY - mouse.y) * 0.035;

        rotY += 0.0006;
        rotX = mouse.y * 0.12;
      }

      ctx.clearRect(0, 0, width, height);

      const focalLength = 650;
      const cosY = Math.cos(rotY + mouse.x * 0.15);
      const sinY = Math.sin(rotY + mouse.x * 0.15);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!isReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          if (node.x < -600) node.x = 600;
          if (node.x > 600) node.x = -600;
          if (node.y < -500) node.y = 500;
          if (node.y > 500) node.y = -500;
          if (node.z < -400) node.z = 400;
          if (node.z > 400) node.z = -400;
        }

        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y1 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX + 600;

        if (z2 > 50) {
          const scale = focalLength / z2;
          const px = cx + x1 * scale;
          const py = cy + y1 * scale;
          const alpha = Math.max(0, Math.min(1, (1 - z2 / 1200) * node.baseAlpha));

          projected.push({ px, py, scale, alpha });
        }
      }

      // Faint champagne connecting lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(200, 184, 154, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Smoked silver particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = `rgba(241, 240, 236, ${p.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.scale * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    render();
  }

  /* --------------------------------------------------------------------------
     2. Hero Interactive 3D Digital Sculpture (Dark Chrome & Smoked Glass)
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

    // Architectural geometric structure: Intersecting faceted prism
    const size = 105;
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
      // Inner core facets
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

    // Subtle orbital accent satellites
    const orbits = [];
    for (let i = 0; i < 12; i++) {
      orbits.push({
        radius: 145 + Math.random() * 45,
        angle: (i / 12) * Math.PI * 2,
        speed: (Math.random() * 0.006 + 0.003) * (i % 2 === 0 ? 1 : -1),
        yOffset: (Math.random() - 0.5) * 70,
        size: Math.random() * 2.2 + 1.2
      });
    }

    let angleX = 0.35;
    let angleY = 0.45;
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

      // Soft ambient studio glow behind sculpture
      const radGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.45);
      radGrad.addColorStop(0, 'rgba(200, 184, 154, 0.05)');
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

      // Transform 3D coordinates
      const projVertices = vertices.map(v => {
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
      });

      // Render wireframe edges
      for (let i = 0; i < edges.length; i++) {
        const [idx1, idx2] = edges[i];
        const p1 = projVertices[idx1];
        const p2 = projVertices[idx2];

        const avgZ = (p1.pz + p2.pz) / 2;
        const depthAlpha = Math.max(0.1, Math.min(0.65, (1 - avgZ / 800) * 0.85));

        if (i < 12) {
          // Outer brushed silver frame
          ctx.strokeStyle = `rgba(241, 240, 236, ${depthAlpha * 0.7})`;
          ctx.lineWidth = 1.1;
        } else {
          // Inner core subtle champagne connectors
          ctx.strokeStyle = `rgba(200, 184, 154, ${depthAlpha * 0.4})`;
          ctx.lineWidth = 0.8;
        }

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }

      // Vertex nodes
      for (let i = 0; i < projVertices.length; i++) {
        const p = projVertices[i];
        const nodeAlpha = Math.max(0.2, (1 - p.pz / 800));

        if (i >= 8) {
          // Inner champagne vertex highlights
          ctx.fillStyle = `rgba(200, 184, 154, ${nodeAlpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.scale * 3.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Outer brushed chrome vertices
          ctx.fillStyle = `rgba(241, 240, 236, ${nodeAlpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.scale * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Satellites
      for (let i = 0; i < orbits.length; i++) {
        const orb = orbits[i];
        if (!isReducedMotion) {
          orb.angle += orb.speed;
        }

        const ox = Math.cos(orb.angle) * orb.radius;
        const oz = Math.sin(orb.angle) * orb.radius;
        const oy = orb.yOffset;

        const ox1 = ox * cosY - oz * sinY;
        const oz1 = oz * cosY + ox * sinY;
        const oy1 = oy * cosX - oz1 * sinX;
        const oz2 = oz1 * cosX + oy * sinX + 500;

        if (oz2 > 50) {
          const scale = focalLength / oz2;
          const px = cx + ox1 * scale;
          const py = cy + oy1 * scale;
          const alpha = (1 - oz2 / 800) * 0.55;

          ctx.fillStyle = `rgba(200, 184, 154, ${Math.max(0, alpha)})`;
          ctx.beginPath();
          ctx.arc(px, py, orb.size * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(renderHero);
    }

    renderHero();
  }
})();
