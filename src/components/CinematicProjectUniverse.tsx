import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Cpu, 
  Radio, 
  CheckCircle2, 
  Film,
  Zap,
  Activity,
  Maximize2
} from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export const CinematicProjectUniverse: React.FC<{ onOpenModal: (proj: Project) => void }> = ({ onOpenModal }) => {
  const { playUiSound } = useTheme();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex] || projects[0];

  const filmReels = [
    { id: 'solar', reelCode: 'REEL 01', timecode: '00:04:18', title: 'Solar Energy AI', tag: 'IEEE RESEARCH', color: '#f59e0b' },
    { id: 'hospital', reelCode: 'REEL 02', timecode: '01:12:09', title: 'Hospital Core', tag: 'FULL-STACK CLOUD', color: '#38bdf8' },
    { id: 'kafka', reelCode: 'REEL 03', timecode: '02:45:33', title: 'Kafka Event Engine', tag: 'DISTRIBUTED BUS', color: '#10b981' },
    { id: 'code-review', reelCode: 'REEL 04', timecode: '03:30:12', title: 'AI Code Reviewer', tag: 'LLM & AST PARSER', color: '#c084fc' },
  ];

  return (
    <div className="relative w-full rounded-3xl glass-panel border theme-border-medium overflow-hidden shadow-2xl p-6 sm:p-10 mb-12 select-none">
      
      {/* Cinematic Top Slate */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b theme-border-subtle pb-4 mb-6">
        <div className="flex items-center gap-2.5 text-xs font-mono">
          <Film className="w-4 h-4 theme-accent animate-pulse" />
          <span className="font-bold theme-text-fg uppercase tracking-wider">
            SCENE 04 // THE THEATRICAL PROJECT UNIVERSE
          </span>
          <span className="opacity-30">|</span>
          <span className="theme-text-muted hidden sm:inline">SCOPE [2.39:1 ANAMORPHIC]</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-full theme-accent-bg border theme-accent-border theme-accent font-semibold">
            {filmReels[activeProjectIndex].reelCode} · {filmReels[activeProjectIndex].timecode}
          </span>
          <span className="theme-text-subtle hidden md:inline">• 4 FLAGSHIP SYSTEMS</span>
        </div>
      </div>

      {/* Main Theatrical Project Projection Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        
        {/* Left: Interactive Animated Architecture Simulation Viewport */}
        <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] rounded-2xl glass-panel border theme-border-medium overflow-hidden shadow-2xl flex flex-col justify-between p-5 hud-bracket bg-black/60">
          
          {/* Viewport HUD Reticle & Aspect Markers */}
          <div className="flex items-center justify-between text-[10px] font-mono theme-text-subtle z-10 border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              SIMULATION ACTIVE // {activeProject.title.toUpperCase()}
            </span>
            <span>FPS: 60 · BITRATE: 4K PRORES</span>
          </div>

          {/* Dynamic Interactive Schematic per project */}
          <div className="relative flex-1 flex flex-col items-center justify-center py-6 my-2">
            
            {/* Ambient Background Aura */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle at center, ${filmReels[activeProjectIndex].color} 0%, transparent 70%)`
              }}
            />

            {/* Schematic 1: Solar Energy Prediction */}
            {activeProjectIndex === 0 && (
              <div className="w-full max-w-lg space-y-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                  <Zap className="w-3.5 h-3.5" />
                  <span>LSTM Weather Prediction + Deep Q-Network Optimization</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-black/50 border border-amber-500/30">
                    <div className="text-[10px] font-mono text-amber-400 uppercase">Irradiance Input</div>
                    <div className="text-lg font-mono font-bold text-white mt-1">942 W/m²</div>
                    <div className="text-[10px] font-mono text-zinc-400">LSTM Recurrent Net</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-amber-500/30">
                    <div className="text-[10px] font-mono text-amber-400 uppercase">RL Policy Action</div>
                    <div className="text-lg font-mono font-bold text-amber-400 mt-1">GRID_DISPATCH</div>
                    <div className="text-[10px] font-mono text-zinc-400">DQN State Q(s,a)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-amber-500/30">
                    <div className="text-[10px] font-mono text-amber-400 uppercase">Energy Gain</div>
                    <div className="text-lg font-mono font-bold text-emerald-400 mt-1">+81.55%</div>
                    <div className="text-[10px] font-mono text-zinc-400">vs Rule Baseline</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>IEEE Conference Research Paper Standard</span>
                  <span className="text-amber-400 font-semibold">• VERIFIED MATHEMATICAL PROOF</span>
                </div>
              </div>
            )}

            {/* Schematic 2: Modern Hospital Management System */}
            {activeProjectIndex === 1 && (
              <div className="w-full max-w-lg space-y-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Real-Time Clinical Telemetry &amp; Ward Resource Grid</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-black/50 border border-sky-500/30">
                    <div className="text-[10px] font-mono text-sky-400 uppercase">Bed Capacity</div>
                    <div className="text-lg font-mono font-bold text-white mt-1">94% OCCUPIED</div>
                    <div className="text-[10px] font-mono text-zinc-400">Real-Time Sync</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-sky-500/30">
                    <div className="text-[10px] font-mono text-sky-400 uppercase">Triage Queue</div>
                    <div className="text-lg font-mono font-bold text-sky-400 mt-1">12 PATIENTS</div>
                    <div className="text-[10px] font-mono text-zinc-400">AI Priority Sorter</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-sky-500/30">
                    <div className="text-[10px] font-mono text-sky-400 uppercase">API Latency</div>
                    <div className="text-lg font-mono font-bold text-emerald-400 mt-1">&lt; 45ms</div>
                    <div className="text-[10px] font-mono text-zinc-400">PostgreSQL + Prisma</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>HIPAA-Compliant Role-Based Access Control</span>
                  <span className="text-sky-400 font-semibold">• FULL-STACK REACT + NODE</span>
                </div>
              </div>
            )}

            {/* Schematic 3: Distributed Real-Time Notification Engine */}
            {activeProjectIndex === 2 && (
              <div className="w-full max-w-lg space-y-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <Radio className="w-3.5 h-3.5" />
                  <span>Apache Kafka Partition Bus + Redis Telemetry Graph</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">Kafka Topics</div>
                    <div className="text-lg font-mono font-bold text-white mt-1">16 PARTITIONS</div>
                    <div className="text-[10px] font-mono text-zinc-400">Parallel Streams</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">Delivery Latency</div>
                    <div className="text-lg font-mono font-bold text-emerald-400 mt-1">&lt; 0.8ms</div>
                    <div className="text-[10px] font-mono text-zinc-400">In-Memory Cache</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">Delivery Guarantee</div>
                    <div className="text-lg font-mono font-bold text-amber-400 mt-1">EXACTLY-ONCE</div>
                    <div className="text-[10px] font-mono text-zinc-400">Idempotent Consumer</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>Spring Boot 3 + Java 17 High-Concurrency Architecture</span>
                  <span className="text-emerald-400 font-semibold">• MULTI-WORKER PIPELINE</span>
                </div>
              </div>
            )}

            {/* Schematic 4: AI-Powered Code Reviewer */}
            {activeProjectIndex === 3 && (
              <div className="w-full max-w-lg space-y-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AST Grammar Parsing + LLM Static Analysis Engine</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-black/50 border border-purple-500/30">
                    <div className="text-[10px] font-mono text-purple-400 uppercase">Code Analysis</div>
                    <div className="text-lg font-mono font-bold text-white mt-1">AST TOKENS</div>
                    <div className="text-[10px] font-mono text-zinc-400">Syntax Tree Mapping</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-purple-500/30">
                    <div className="text-[10px] font-mono text-purple-400 uppercase">Security Check</div>
                    <div className="text-lg font-mono font-bold text-rose-400 mt-1">OWASP TOP 10</div>
                    <div className="text-[10px] font-mono text-zinc-400">Vulnerability Scan</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-purple-500/30">
                    <div className="text-[10px] font-mono text-purple-400 uppercase">Accuracy Rate</div>
                    <div className="text-lg font-mono font-bold text-emerald-400 mt-1">94.8%</div>
                    <div className="text-[10px] font-mono text-zinc-400">Ground Truth Test</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>FastAPI + Python + LangChain Contextual Pipeline</span>
                  <span className="text-purple-400 font-semibold">• AUTOMATED PR REVIEW</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono theme-text-subtle z-10 border-t border-white/10 pt-2">
            <span>SRM IST CSE (AI/ML) · KABILESWAR G</span>
            <button
              onClick={() => {
                playUiSound('open');
                onOpenModal(activeProject);
              }}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Maximize2 className="w-3 h-3" />
              <span>EXPAND CINEMATIC CASE STUDY</span>
            </button>
          </div>
        </div>

        {/* Right: Project Dossier, Highlights, Tech Stack & Action Links */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border"
              style={{
                borderColor: `${filmReels[activeProjectIndex].color}60`,
                background: `${filmReels[activeProjectIndex].color}15`,
                color: filmReels[activeProjectIndex].color,
              }}
            >
              {filmReels[activeProjectIndex].tag}
            </span>
            <span className="text-xs font-mono theme-text-subtle">
              {activeProject.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold theme-text-fg mb-3">
            {activeProject.title}
          </h3>

          <p className="text-xs sm:text-sm theme-text-muted font-normal leading-relaxed mb-5">
            {activeProject.tagline}
          </p>

          {/* Verified Achievements List */}
          <div className="space-y-2 mb-6">
            {activeProject.bullets.slice(0, 3).map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs theme-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed theme-text-fg">{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Rune Chips */}
          <div className="mb-6">
            <div className="text-[10px] font-mono theme-text-subtle uppercase mb-2">
              Engineering Weaponry:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono theme-card border theme-border-subtle theme-text-fg font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                playUiSound('open');
                onOpenModal(activeProject);
              }}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#e5a93b] dark:hover:bg-[#f5b945] transition-all font-mono shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>View Deep Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playUiSound('click')}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium theme-text-fg glass-panel border theme-border-medium hover:theme-accent-border transition-colors font-mono cursor-pointer flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Theatrical Film Reel Navigation Strip */}
      <div className="pt-4 border-t theme-border-subtle">
        <div className="text-[11px] font-mono theme-text-subtle uppercase mb-3 flex items-center justify-between">
          <span>SELECT SYSTEM FILM REEL:</span>
          <span>CLICK TO LOAD PROJECTION</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {filmReels.map((reel, idx) => {
            const isCurrent = idx === activeProjectIndex;
            return (
              <button
                key={reel.id}
                onClick={() => {
                  playUiSound('click');
                  setActiveProjectIndex(idx);
                }}
                className={`p-3 rounded-xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isCurrent
                    ? 'theme-card scale-102 shadow-xl'
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}
                style={{
                  borderColor: isCurrent ? reel.color : undefined,
                  boxShadow: isCurrent ? `0 8px 25px -4px ${reel.color}35` : undefined,
                }}
              >
                {isCurrent && (
                  <div 
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: reel.color }}
                  />
                )}
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="font-bold" style={{ color: isCurrent ? reel.color : 'var(--text-subtle)' }}>
                    {reel.reelCode}
                  </span>
                  <span className="theme-text-subtle">{reel.timecode}</span>
                </div>
                <div className="font-display font-bold text-xs sm:text-sm theme-text-fg truncate">
                  {reel.title}
                </div>
                <div className="text-[10px] font-mono theme-text-muted mt-0.5 truncate">
                  {reel.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
