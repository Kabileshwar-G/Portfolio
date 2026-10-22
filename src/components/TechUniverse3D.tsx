import React, { useState, useRef } from 'react';
import { 
  Cpu, 
  Layers, 
  Server, 
  Zap, 
  Boxes, 
  Cloud, 
  Database, 
  Radio, 
  Sparkles 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TechMonolith {
  id: string;
  name: string;
  category: string;
  role: string;
  metric: string;
  color: string;
  glowColor: string;
  icon: React.ElementType;
}

export const TechUniverse3D: React.FC<{ onSelectTech?: (name: string) => void }> = ({ onSelectTech }) => {
  const { playUiSound } = useTheme();
  const [activeTechId, setActiveTechId] = useState<string>('pytorch');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const monoliths: TechMonolith[] = [
    {
      id: 'pytorch',
      name: 'PyTorch / GNN',
      category: 'AI / Deep Learning',
      role: 'Reinforcement Learning & Graph Neural Networks',
      metric: '81.55% Energy Dispatch',
      color: 'from-amber-500/20 to-orange-600/30',
      glowColor: '#f59e0b',
      icon: Cpu,
    },
    {
      id: 'kafka',
      name: 'Apache Kafka',
      category: 'Distributed Systems',
      role: 'High-Throughput Real-Time Event Bus',
      metric: 'Sub-millisecond Latency',
      color: 'from-sky-500/20 to-blue-600/30',
      glowColor: '#38bdf8',
      icon: Radio,
    },
    {
      id: 'springboot',
      name: 'Spring Boot 3',
      category: 'Enterprise Backend',
      role: 'Java 17+ Reactive Microservices',
      metric: 'Enterprise Architecture',
      color: 'from-emerald-500/20 to-teal-600/30',
      glowColor: '#10b981',
      icon: Server,
    },
    {
      id: 'fastapi',
      name: 'FastAPI / Python',
      category: 'AI Microservices',
      role: 'Async Model Inference & Vector APIs',
      metric: 'Async High Throughput',
      color: 'from-teal-500/20 to-cyan-600/30',
      glowColor: '#14b8a6',
      icon: Zap,
    },
    {
      id: 'react',
      name: 'React 19 / TS',
      category: 'Frontend Engineering',
      role: 'Stateful UI, WebGL & Real-Time Dashboards',
      metric: 'Interactive UX',
      color: 'from-cyan-500/20 to-blue-500/30',
      glowColor: '#06b6d4',
      icon: Layers,
    },
    {
      id: 'k8s',
      name: 'Docker & K8s',
      category: 'Cloud & Orchestration',
      role: 'Multi-Pod Container Deployment & Scale',
      metric: 'Zero-Downtime Deploy',
      color: 'from-indigo-500/20 to-purple-600/30',
      glowColor: '#6366f1',
      icon: Cloud,
    },
    {
      id: 'langchain',
      name: 'LangChain & RAG',
      category: 'Agentic AI / LLMs',
      role: 'ChromaDB Vector Retrieval & Agents',
      metric: '~95% Retrieval Accuracy',
      color: 'from-purple-500/20 to-pink-600/30',
      glowColor: '#a855f7',
      icon: Boxes,
    },
    {
      id: 'postgres',
      name: 'PostgreSQL & Redis',
      category: 'Data Infrastructure',
      role: 'ACID Relational Storage & Fast Graph Cache',
      metric: 'In-Memory Telemetry',
      color: 'from-rose-500/20 to-amber-600/30',
      glowColor: '#f43f5e',
      icon: Database,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const activeTech = monoliths.find((m) => m.id === activeTechId) || monoliths[0];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl glass-panel border theme-border-medium overflow-hidden py-10 px-4 sm:px-8 mb-16 select-none"
    >
      {/* HUD Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b theme-border-subtle pb-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-bold theme-text-fg uppercase tracking-wider">
            SCENE 02 // THE 3D TECH UNIVERSE
          </span>
          <span className="opacity-30">|</span>
          <span className="theme-text-muted hidden sm:inline">PERSPECTIVE ORBITING MONOLITHS</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono theme-text-subtle">
          <span>MOUSE PARALLAX ACTIVE</span>
          <span className="theme-accent">• 8 CORE ENGINES</span>
        </div>
      </div>

      {/* 3D Perspective Chamber */}
      <div 
        className="relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between items-center perspective-1000"
        style={{ perspectiveOrigin: '50% 40%' }}
      >
        {/* Glossy Reflective Floor Plane */}
        <div className="absolute inset-x-0 bottom-0 h-44 cinematic-floor-reflection pointer-events-none z-0" />
        <div className="absolute inset-x-4 bottom-0 h-40 cinematic-floor-grid pointer-events-none opacity-40 z-0" />

        {/* Ambient Nebula Light Ribbon */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-[100px] pointer-events-none opacity-25 transition-transform duration-500 ease-out"
          style={{
            background: activeTech.glowColor,
            transform: `translate(calc(-50% + ${mouseOffset.x * -30}px), calc(-50% + ${mouseOffset.y * -20}px))`,
          }}
        />

        {/* Central Monolith Inspection Plate */}
        <div 
          className="relative z-20 text-center max-w-md mx-auto mb-6 transition-transform duration-300 ease-out preserve-3d"
          style={{
            transform: `rotateY(${mouseOffset.x * 12}deg) rotateX(${mouseOffset.y * -10}deg)`,
          }}
        >
          <div 
            className="inline-flex items-center justify-center p-3.5 rounded-2xl mb-3 shadow-2xl transition-all duration-300"
            style={{
              background: `radial-gradient(circle, ${activeTech.glowColor}25 0%, transparent 80%)`,
              border: `1px solid ${activeTech.glowColor}60`,
            }}
          >
            <activeTech.icon className="w-8 h-8" style={{ color: activeTech.glowColor }} />
          </div>
          
          <div className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: activeTech.glowColor }}>
            {activeTech.category}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold theme-text-fg mb-1">
            {activeTech.name}
          </h3>
          <p className="text-xs sm:text-sm theme-text-muted font-mono leading-relaxed mb-2">
            {activeTech.role}
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold theme-card border theme-border-medium">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="theme-text-fg">{activeTech.metric}</span>
          </div>
        </div>

        {/* Orbiting Monolith Grid in Perspective */}
        <div 
          className="relative z-10 w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 transition-transform duration-300 ease-out preserve-3d"
          style={{
            transform: `rotateX(${10 + mouseOffset.y * 6}deg) rotateY(${mouseOffset.x * 6}deg)`,
          }}
        >
          {monoliths.map((mono) => {
            const isSelected = mono.id === activeTechId;
            const IconComponent = mono.icon;
            return (
              <button
                key={mono.id}
                onClick={() => {
                  playUiSound('click');
                  setActiveTechId(mono.id);
                  if (onSelectTech) onSelectTech(mono.name);
                }}
                onMouseEnter={() => {
                  playUiSound('hover');
                  setActiveTechId(mono.id);
                }}
                className={`group relative p-3 sm:p-3.5 rounded-xl text-left transition-all duration-300 backdrop-blur-md cursor-pointer border ${
                  isSelected
                    ? 'theme-card scale-105 shadow-xl -translate-y-2'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:-translate-y-1'
                }`}
                style={{
                  borderColor: isSelected ? mono.glowColor : undefined,
                  boxShadow: isSelected ? `0 10px 30px -5px ${mono.glowColor}40` : undefined,
                }}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div 
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full"
                    style={{ background: mono.glowColor }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <IconComponent 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: isSelected ? mono.glowColor : 'var(--text-muted)' }}
                  />
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: isSelected ? mono.glowColor : 'transparent' }}
                  />
                </div>

                <div className="font-display font-bold text-xs sm:text-sm theme-text-fg truncate mb-0.5">
                  {mono.name}
                </div>
                <div className="text-[10px] font-mono theme-text-subtle truncate">
                  {mono.category.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
