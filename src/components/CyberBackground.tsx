import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface CinemaEmber {
  x: number;
  y: number;
  z: number; // 0.2 (far) to 2.0 (near)
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  pulseSpeed: number;
}

interface AnamorphicStreak {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
  targetAlpha: number;
}

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
  });
  const { themeMeta } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const emberCount = isMobile ? 40 : 80;

    // Parse hex colors for cinematic grading
    const hexToRgb = (hex: string) => {
      const clean = hex.replace('#', '');
      const num = parseInt(clean, 16);
      return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
    };

    const accentRgb = hexToRgb(themeMeta.accentHex);
    const secondaryRgb = hexToRgb(themeMeta.secondaryHex);

    // Initialize floating embers / atmosphere motes
    const embers: CinemaEmber[] = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.2 - Math.random() * 0.45, // Slow upward drift like film embers
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
      });
    }

    // Initialize subtle anamorphic horizontal light streaks
    const streaks: AnamorphicStreak[] = [];
    const streakCount = isMobile ? 3 : 6;
    for (let i = 0; i < streakCount; i++) {
      streaks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 300 + 150,
        speed: (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
        alpha: 0,
        targetAlpha: Math.random() * 0.15 + 0.05,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    // Main cinematic render loop
    const render = () => {
      time += 0.01;

      // Smooth camera light tracking
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Cinematic Volumetric Spotlight following camera/cursor
      const lightRadius = isMobile ? 300 : 520;
      const spotGrad = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        lightRadius
      );
      spotGrad.addColorStop(
        0,
        `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.09)`
      );
      spotGrad.addColorStop(
        0.4,
        `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.035)`
      );
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Center stage breathing ambient glow
      const centerGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.45,
        0,
        width / 2,
        height * 0.45,
        width * 0.6
      );
      const breath = Math.sin(time * 0.8) * 0.02 + 0.04;
      centerGrad.addColorStop(
        0,
        `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${breath})`
      );
      centerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Render subtle horizontal anamorphic film streaks
      for (let s of streaks) {
        s.x += s.speed;
        if (s.x > width + s.length) s.x = -s.length;
        if (s.x < -s.length) s.x = width + s.length;

        s.alpha += (s.targetAlpha - s.alpha) * 0.02;

        const streakGrad = ctx.createLinearGradient(
          s.x - s.length / 2,
          s.y,
          s.x + s.length / 2,
          s.y
        );
        streakGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        streakGrad.addColorStop(
          0.5,
          `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${s.alpha * 0.8})`
        );
        streakGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x - s.length / 2, s.y);
        ctx.lineTo(s.x + s.length / 2, s.y);
        ctx.stroke();
      }

      // 4. Render 3D Depth Floating Cinematic Embers (Zero cursor lines!)
      for (let p of embers) {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        p.phase += p.pulseSpeed;

        // Wrap around boundaries smoothly
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        const pulse = Math.sin(p.phase) * 0.3 + 0.7;
        const currentAlpha = p.baseAlpha * pulse * Math.min(p.z, 1.2);
        const radius = p.size * p.z;

        // Draw soft glowing particle
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          radius * 2.5
        );
        grad.addColorStop(
          0,
          `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${currentAlpha})`
        );
        grad.addColorStop(
          0.5,
          `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, ${currentAlpha * 0.4})`
        );
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [themeMeta.accentHex, themeMeta.secondaryHex]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Cinematic Horizontal Anamorphic Aspect Bars (Top & Bottom Letterbox lines) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent opacity-60" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent opacity-60" />
    </div>
  );
};
