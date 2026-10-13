import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  z: number; // depth layer 0.5 to 2.2
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
  colorType: 'gold' | 'copper';
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

interface ConstellationNode {
  x: number;
  y: number;
  label?: string;
  radius: number;
  pulsePhase: number;
}

interface PhotonPacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  colorType: 'gold' | 'copper';
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const scrollRef = useRef<{ y: number; lastY: number; velocity: number }>({ y: 0, lastY: 0, velocity: 0 });
  const shockwavesRef = useRef<Shockwave[]>([]);
  const { themeMeta } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1200;
    const particleCount = isMobile ? 55 : isTablet ? 90 : 130;
    const connectionDistance = isMobile ? 95 : 140;
    const mouseRadius = isMobile ? 140 : 200;

    const particles: Particle[] = [];
    const constellationAnchors: ConstellationNode[] = [];
    const packets: PhotonPacket[] = [];

    // Parse hex colors for canvas rendering
    const hexToRgb = (hex: string) => {
      const clean = hex.replace('#', '');
      const num = parseInt(clean, 16);
      return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
    };

    const goldRgb = hexToRgb(themeMeta.accentHex);
    const copperRgb = hexToRgb(themeMeta.secondaryHex);

    // Initialize particles & constellation anchors
    const initScene = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1.6 + 0.6,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          radius: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.4 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
          colorType: Math.random() > 0.45 ? 'gold' : 'copper',
        });
      }

      // Constellation Anchor Points (mimicking astronomical asterisms across the night sky)
      constellationAnchors.length = 0;
      const anchorCoords = [
        { rx: 0.14, ry: 0.22, label: 'CYGNUS-α' },
        { rx: 0.22, ry: 0.28, label: 'CYGNUS-β' },
        { rx: 0.18, ry: 0.38, label: 'CYGNUS-γ' },
        { rx: 0.78, ry: 0.18, label: 'ORION-α' },
        { rx: 0.84, ry: 0.24, label: 'ORION-BELT-1' },
        { rx: 0.87, ry: 0.27, label: 'ORION-BELT-2' },
        { rx: 0.90, ry: 0.30, label: 'ORION-BELT-3' },
        { rx: 0.85, ry: 0.42, label: 'RIGEL' },
        { rx: 0.32, ry: 0.75, label: 'CASSIOPEIA-1' },
        { rx: 0.39, ry: 0.72, label: 'CASSIOPEIA-2' },
        { rx: 0.46, ry: 0.79, label: 'CASSIOPEIA-3' },
        { rx: 0.53, ry: 0.74, label: 'CASSIOPEIA-4' },
      ];

      for (const a of anchorCoords) {
        constellationAnchors.push({
          x: width * a.rx,
          y: height * a.ry,
          label: a.label,
          radius: 3.2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initScene();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: isMobile ? 180 : 320,
        alpha: 0.85,
      });
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - scrollRef.current.lastY;
      scrollRef.current.velocity = diff * 0.12;
      scrollRef.current.lastY = currentY;
      scrollRef.current.y = currentY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    initScene();

    // 3D Celestial Armillary Sphere / Polyhedron Geometry
    const octaVertices: Point3D[] = [
      { x: 0, y: -1.5, z: 0 },
      { x: 0, y: 1.5, z: 0 },
      { x: -1, y: 0, z: -1 },
      { x: 1, y: 0, z: -1 },
      { x: 1, y: 0, z: 1 },
      { x: -1, y: 0, z: 1 },
    ];
    const octaEdges: [number, number][] = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 3], [3, 4], [4, 5], [5, 2]
    ];

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;
    let tick = 0;

    const render = () => {
      tick += 0.016;

      // Scroll velocity dampening
      scrollRef.current.velocity *= 0.92;
      const scrollV = scrollRef.current.velocity;

      rotX += 0.004 + scrollV * 0.0008;
      rotY += 0.006 + scrollV * 0.0012;
      rotZ += 0.002;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // 1. Minimalist Digital Network & Celestial Coordinate Grid Lines
      const gridSize = isMobile ? 70 : 96;
      ctx.lineWidth = 0.6;

      // Vertical subtle lines (gold hue)
      ctx.strokeStyle = `rgba(${goldRgb.r}, ${goldRgb.g}, ${goldRgb.b}, 0.038)`;
      for (let x = gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal subtle lines (copper hue)
      ctx.strokeStyle = `rgba(${copperRgb.r}, ${copperRgb.g}, ${copperRgb.b}, 0.032)`;
      for (let y = gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Minimalist crosshairs (+) at grid intersections with soft pulse
      const crossSize = 3;
      const crossPulse = (Math.sin(tick * 0.8) + 1) * 0.5;
      const crossAlpha = 0.08 + crossPulse * 0.08;
      ctx.strokeStyle = `rgba(${goldRgb.r}, ${goldRgb.g}, ${goldRgb.b}, ${crossAlpha})`;
      ctx.lineWidth = 0.8;

      for (let x = gridSize * 2; x < width; x += gridSize * 3) {
        for (let y = gridSize * 2; y < height; y += gridSize * 3) {
          ctx.beginPath();
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
        }
      }

      // 2. 3D Celestial Wireframe Astrolabe in upper-right quadrant
      const renderWireframe = (
        vertices: Point3D[],
        edges: [number, number][],
        cx: number,
        cy: number,
        scale: number,
        ax: number,
        ay: number,
        az: number
      ) => {
        const sinX = Math.sin(ax), cosX = Math.cos(ax);
        const sinY = Math.sin(ay), cosY = Math.cos(ay);
        const sinZ = Math.sin(az), cosZ = Math.cos(az);
        const proj: { x: number; y: number }[] = [];

        for (const v of vertices) {
          let x1 = v.x * cosY + v.z * sinY;
          let y1 = v.y;
          let z1 = -v.x * sinY + v.z * cosY;

          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          const fov = 3.8;
          const pZ = z3 + fov;
          proj.push({
            x: cx + (x3 / pZ) * scale,
            y: cy + (y3 / pZ) * scale
          });
        }

        // Draw edges with alternating copper and gold light
        for (let e = 0; e < edges.length; e++) {
          const [i1, i2] = edges[e];
          const isGold = e % 2 === 0;
          const col = isGold ? goldRgb : copperRgb;
          ctx.beginPath();
          ctx.moveTo(proj[i1].x, proj[i1].y);
          ctx.lineTo(proj[i2].x, proj[i2].y);
          ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.2)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw celestial vertices
        for (let i = 0; i < proj.length; i++) {
          const col = i % 2 === 0 ? goldRgb : copperRgb;
          ctx.beginPath();
          ctx.arc(proj[i].x, proj[i].y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.45)`;
          ctx.fill();
        }
      };

      // Astrolabe geometry floating with scroll parallax
      const astrolabeY = (height * 0.32) + (scrollRef.current.y * 0.04) % height;
      renderWireframe(
        octaVertices,
        octaEdges,
        width * 0.86,
        astrolabeY,
        isMobile ? 110 : 170,
        rotX,
        rotY,
        rotZ
      );

      // 3. Render Expanding Celestial Shockwaves (on click)
      for (let s = shockwavesRef.current.length - 1; s >= 0; s--) {
        const sw = shockwavesRef.current[s];
        sw.radius += 5.2;
        sw.alpha *= 0.955;

        // Outer ring: Gold
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${goldRgb.r}, ${goldRgb.g}, ${goldRgb.b}, ${sw.alpha})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Inner ring: Copper
        if (sw.radius > 20) {
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius - 14, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${copperRgb.r}, ${copperRgb.g}, ${copperRgb.b}, ${sw.alpha * 0.6})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.02) {
          shockwavesRef.current.splice(s, 1);
        }
      }

      // 4. Render Fixed Constellation Asterism Links
      const asterismPairs: [number, number][] = [
        [0, 1], [1, 2], // Cygnus
        [3, 4], [4, 5], [5, 6], [6, 7], // Orion
        [8, 9], [9, 10], [10, 11] // Cassiopeia
      ];

      for (const [idx1, idx2] of asterismPairs) {
        const p1 = constellationAnchors[idx1];
        const p2 = constellationAnchors[idx2];
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${copperRgb.r}, ${copperRgb.g}, ${copperRgb.b}, 0.22)`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Draw Constellation Anchor Stars
      for (let i = 0; i < constellationAnchors.length; i++) {
        const ca = constellationAnchors[i];
        ca.pulsePhase += 0.022;
        const pulse = (Math.sin(ca.pulsePhase) + 1) * 0.5;

        // Golden star glow
        ctx.beginPath();
        ctx.arc(ca.x, ca.y, ca.radius + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${goldRgb.r}, ${goldRgb.g}, ${goldRgb.b}, ${0.55 + pulse * 0.35})`;
        ctx.fill();

        // Delicate star aura ring
        ctx.beginPath();
        ctx.arc(ca.x, ca.y, ca.radius + 6 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${goldRgb.r}, ${goldRgb.g}, ${goldRgb.b}, ${0.18 * (1 - pulse)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 5. Spawn & Render Data Network Photon Packets travelling across stars
      if (Math.random() < 0.035 && packets.length < 5 && constellationAnchors.length >= 2) {
        const from = Math.floor(Math.random() * constellationAnchors.length);
        let to = Math.floor(Math.random() * constellationAnchors.length);
        if (to === from) to = (from + 1) % constellationAnchors.length;
        packets.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.01 + Math.random() * 0.009,
          colorType: Math.random() > 0.5 ? 'gold' : 'copper',
        });
      }

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const src = constellationAnchors[pkt.fromIndex];
        const tgt = constellationAnchors[pkt.toIndex];
        if (src && tgt) {
          const px = src.x + (tgt.x - src.x) * pkt.progress;
          const py = src.y + (tgt.y - src.y) * pkt.progress;
          const col = pkt.colorType === 'gold' ? goldRgb : copperRgb;

          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.85)`;
          ctx.shadowColor = pkt.colorType === 'gold' ? themeMeta.accentHex : themeMeta.secondaryHex;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // 6. Dynamic Particle Constellations (Thin lines of gold & soft copper)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Motion with scroll parallax velocity
        p1.x += p1.vx;
        p1.y += p1.vy + (scrollV * 0.08 * p1.z);

        // Wrap viewport edges
        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        // Shockwave deflection
        for (const sw of shockwavesRef.current) {
          const dx = p1.x - sw.x;
          const dy = p1.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < sw.radius + 25 && dist > sw.radius - 25) {
            const push = (1 - Math.abs(dist - sw.radius) / 25) * 3.2;
            p1.x += (dx / Math.max(1, dist)) * push;
            p1.y += (dy / Math.max(1, dist)) * push;
          }
        }

        // Mouse interactive constellation tether
        if (mouse.active) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * 0.32;
            p1.x += (dx / dist) * force;
            p1.y += (dy / dist) * force;

            const lineAlpha = (1 - dist / mouseRadius) * 0.42;
            const col = p1.colorType === 'gold' ? goldRgb : copperRgb;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Particle-to-particle constellation filaments (Thin lines of gold / soft copper)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18;
            // Intersecting gold and soft copper filaments
            const isGoldLine = (i + j) % 2 === 0;
            const col = isGoldLine ? goldRgb : copperRgb;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw star particle dot with celestial twinkling
        const twinkle = Math.sin(tick * 1.8 + p1.pulsePhase) * 0.16;
        const finalAlpha = Math.max(0.12, Math.min(0.9, p1.baseAlpha + twinkle));
        const col = p1.colorType === 'gold' ? goldRgb : copperRgb;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius * (0.85 + p1.z * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${finalAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [themeMeta]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: themeMeta.isDark
          ? 'radial-gradient(ellipse at 50% 12%, #041029 0%, #020611 55%, #01030a 100%)'
          : 'radial-gradient(ellipse at 50% 12%, #ffffff 0%, #f4f7fb 55%, #e6edf7 100%)',
      }}
      aria-hidden="true"
    >
      {/* Subtle Soft Copper Nebula Orb */}
      <div
        className={`absolute -top-36 -right-24 w-[42rem] h-[42rem] rounded-full blur-[160px] transition-all duration-1000 animate-float-slow ${
          themeMeta.isDark ? 'opacity-20' : 'opacity-[0.07]'
        }`}
        style={{
          background: `radial-gradient(circle, ${themeMeta.secondaryHex} 0%, transparent 70%)`,
        }}
      />

      {/* Subtle Celestial Gold Star Cluster Orb */}
      <div
        className={`absolute top-1/3 -left-40 w-[46rem] h-[46rem] rounded-full blur-[170px] transition-all duration-1000 animate-float-slow ${
          themeMeta.isDark ? 'opacity-16' : 'opacity-[0.06]'
        }`}
        style={{
          background: `radial-gradient(circle, ${themeMeta.accentHex} 0%, transparent 70%)`,
          animationDelay: '-4s',
        }}
      />

      {/* Subtle Bottom Deep Midnight Azure / Light Sky Orb */}
      <div
        className={`absolute -bottom-40 right-1/3 w-[40rem] h-[40rem] rounded-full blur-[160px] transition-all duration-1000 animate-float-slow ${
          themeMeta.isDark ? 'opacity-18' : 'opacity-[0.06]'
        }`}
        style={{
          background: `radial-gradient(circle, ${themeMeta.accentHex} 0%, transparent 70%)`,
          animationDelay: '-6s',
        }}
      />

      {/* Ultra-subtle Constellation Matrix Grid Texture Layer */}
      <div
        className={`absolute inset-0 ${themeMeta.isDark ? 'opacity-[0.032]' : 'opacity-[0.045]'}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${themeMeta.accentHex} 1px, transparent 1px),
            linear-gradient(to bottom, ${themeMeta.secondaryHex} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Full-Screen Canvas covering the entire website */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
