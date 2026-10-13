import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  label?: string;
  isFlagship?: boolean;
  pulsePhase: number;
}

interface Packet {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export const TelemetryMeshCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeMeta } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    let nodes: Node[] = [];
    let packets: Packet[] = [];
    const serviceLabels = [
      'Kafka:Broker-0',
      'Kafka:Broker-1',
      'Ingest:Spring',
      'Redis:Graph',
      'PyTorch:GNN',
      'FastAPI:Serve',
      'D3:Observability',
      'K8s:Ingress',
      'Chroma:VectorDB',
      'RAG:Orchestrator',
      'MARL:BedSim',
      'Agent:Triage'
    ];

    const initNodes = () => {
      nodes = [];
      const count = Math.min(serviceLabels.length, Math.floor(width / 65));
      for (let i = 0; i < count; i++) {
        const isFlagship = i < 4;
        nodes.push({
          x: Math.random() * (width - 120) + 60,
          y: Math.random() * (height - 120) + 60,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isFlagship ? 4.5 : 3,
          baseRadius: isFlagship ? 4.5 : 3,
          label: serviceLabels[i],
          isFlagship,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initNodes();

    const maybeSpawnPacket = () => {
      if (packets.length > 8 || nodes.length < 2) return;
      if (Math.random() < 0.04) {
        const sourceIndex = Math.floor(Math.random() * nodes.length);
        let targetIndex = Math.floor(Math.random() * nodes.length);
        if (targetIndex === sourceIndex) {
          targetIndex = (sourceIndex + 1) % nodes.length;
        }
        packets.push({
          sourceIndex,
          targetIndex,
          progress: 0,
          speed: 0.008 + Math.random() * 0.008
        });
      }
    };

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const isLight = !themeMeta.isDark;
    const accentColor = themeMeta.accentHex;
    const secondaryColor = themeMeta.secondaryHex;
    const nodeBaseColor = isLight ? '#475569' : '#94a3b8';
    const gridDotColor = isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.025)';
    const edgeBaseColor = isLight ? 'rgba(71, 85, 105,' : 'rgba(148, 163, 184,';

    const hexToRgb = (hex: string) => {
      const num = parseInt(hex.replace('#', ''), 16);
      return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
    };
    const accentRgb = hexToRgb(accentColor);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle grid dots
      ctx.fillStyle = gridDotColor;
      const step = 40;
      for (let x = step / 2; x < width; x += step) {
        for (let y = step / 2; y < height; y += step) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.025;

        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          node.x += (dx / dist) * 0.8;
          node.y += (dy / dist) * 0.8;
        }
      }

      // Draw edges
      const maxDist = 170;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            const isHighlight = nodes[i].isFlagship && nodes[j].isFlagship;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isHighlight
              ? `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${alpha * 1.6})`
              : `${edgeBaseColor} ${alpha})`;
            ctx.lineWidth = isHighlight ? 1.2 : 0.75;
            ctx.stroke();
          }
        }
      }

      // Packets
      maybeSpawnPacket();
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const src = nodes[pkt.sourceIndex];
        const tgt = nodes[pkt.targetIndex];
        if (!src || !tgt) {
          packets.splice(p, 1);
          continue;
        }

        const px = src.x + (tgt.x - src.x) * pkt.progress;
        const py = src.y + (tgt.y - src.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = secondaryColor;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(node.pulsePhase) * 1.5;
        const r = node.radius + (node.isFlagship ? pulse : 0);

        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 4, 0, Math.PI * 2);
        ctx.fillStyle = node.isFlagship
          ? `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.16)`
          : isLight
          ? 'rgba(0, 0, 0, 0.05)'
          : 'rgba(255, 255, 255, 0.04)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.isFlagship ? accentColor : nodeBaseColor;
        ctx.fill();

        if (node.label && width > 640) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = node.isFlagship
            ? accentColor
            : isLight
            ? 'rgba(71, 85, 105, 0.8)'
            : 'rgba(148, 163, 184, 0.6)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMeta]);

  return (
    <div className="absolute inset-0 pointer-events-auto overflow-hidden opacity-80">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
