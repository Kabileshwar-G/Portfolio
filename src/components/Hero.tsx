import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  Activity,
  Terminal,
  Cpu,
  Layers,
  Database,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenRecruiter }) => {
  const { playUiSound } = useTheme();
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const telemetryLogs = [
    { source: 'Solar Energy AI', msg: 'LSTM Forecasting + Deep Q-Network (DQN) Grid Optimization', tag: '81.55% GAIN' },
    { source: 'MicroGuard AI', msg: 'Streaming telemetry traces via Kafka -> Redis graph', tag: '85%+ GNN PRECISION' },
    { source: 'RAG Knowledge Engine', msg: 'Semantic search indexing 10,000+ text pages', tag: '~95% ACCURACY' },
    { source: 'K8s Multi-Pod Deploy', msg: 'Django + Hugging Face orchestrated in Minikube', tag: 'CONTAINERIZED' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [telemetryLogs.length]);

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden theme-bg">
      {/* Radial soft vignette for focal depth */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />

      {/* Full-width container utilizing wide screens */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Large Prominent Portrait with Dynamic Aura */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1 scroll-reveal-left">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none h-[500px] sm:h-[580px] md:h-[630px] lg:h-[670px] xl:h-[710px] flex items-end justify-center">
              
              {/* Layered Translucent Cyber-Portal Plate behind subject */}
              <div className="absolute inset-x-2 sm:inset-x-4 top-8 bottom-6 rounded-3xl glass-panel border theme-border-medium shadow-2xl backdrop-blur-xl overflow-hidden pointer-events-none hud-bracket beam-card">
                
                {/* Micro Constellation Grid Pattern inside portal plate */}
                <div 
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--accent-copper) 1px, transparent 1px)
                    `,
                    backgroundSize: '36px 36px',
                  }}
                />

                {/* Concentric Celestial Astrolabe Rings inside portal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-amber-500/25 animate-spin-slow" />
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-dashed border-sky-400/20 animate-spin-slow" 
                  style={{ animationDirection: 'reverse', animationDuration: '32s' }} 
                />

                {/* Subtle Scanning Hologram Bar */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-hologram-scan" />
              </div>

              {/* Dynamic Aura & Nebula Radial Glow directly behind subject */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] lg:w-[450px] h-[320px] sm:h-[400px] lg:h-[450px] rounded-full blur-[80px] pointer-events-none opacity-40"
                style={{
                  background: 'radial-gradient(circle, var(--accent-gold) 0%, var(--accent-copper) 45%, transparent 75%)',
                }}
              />

              {/* Secondary Celestial Starlight Rim Glow */}
              <div 
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] rounded-full blur-[60px] pointer-events-none opacity-30"
                style={{
                  background: 'radial-gradient(circle, #38bdf8 0%, var(--accent-gold) 50%, transparent 80%)',
                }}
              />

              {/* Pinned Minimalist Coordinate Reticle Crosshair */}
              <div className="absolute top-12 left-4 sm:left-8 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-panel border theme-border-subtle text-[10px] font-mono theme-text-muted backdrop-blur-md shadow-lg">
                <Compass className="w-3 h-3 theme-accent" />
                <span>10.82°N · 78.69°E (Trichy)</span>
              </div>

              {/* Pinned Status Badge Tag */}
              <div className="absolute top-12 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-panel border theme-border-subtle text-[10px] font-mono theme-text-fg backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-semibold">Active for Roles</span>
              </div>

              {/* Cutout Portrait Image of Kabileshwar G (Without White Background) */}
              <img
                src="/assets/portrait-cutout.png"
                alt="Kabileshwar G - Full-Stack Engineer & AI/ML Systems Specialist"
                className="relative z-10 w-auto h-full max-h-[95%] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter contrast-[1.03] brightness-[1.02] transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Organic Gradient Fade at Base to blend waist seamlessly into section floor */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent pointer-events-none z-20" />

              {/* Floating Architectural Badge at Base */}
              <div className="absolute bottom-4 z-30 max-w-[92%] px-4 py-2.5 rounded-xl glass-panel border theme-border-medium backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3 hud-bracket hover:theme-accent-border transition-colors">
                <div className="min-w-0">
                  <div className="font-display font-bold text-sm sm:text-base theme-text-fg truncate">
                    Kabileshwar G
                  </div>
                  <div className="text-[11px] font-mono theme-accent truncate">
                    Full-Stack & AI/ML Systems · SRM IST '27
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Headlines, Bio, CTAs, and Live Status Deck */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 order-2 lg:order-2 scroll-reveal-right">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border theme-border-medium mb-5 backdrop-blur-md shadow-sm hud-bracket">
              <span className="w-2 h-2 rounded-full theme-accent animate-ping" />
              <span className="text-xs font-mono theme-text-muted">
                SRM CSE (AI/ML) · Class of 2027 · Trichy
              </span>
              <span className="opacity-30">|</span>
              <span className="text-xs font-mono theme-accent flex items-center gap-1 font-semibold">
                <Activity className="w-3.5 h-3.5" /> Full-Stack & Applied AI/ML
              </span>
            </div>

            {/* Candidate Title */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight theme-text-fg leading-[1.04] mb-4">
              Kabileshwar G
            </h1>

            {/* Sub-headline in Simple English */}
            <div className="text-lg sm:text-2xl font-display font-medium theme-accent mb-4 leading-snug">
              {personalInfo.headline}
            </div>

            {/* Supporting Description strictly from Resume Profile */}
            <p className="text-sm sm:text-base lg:text-lg theme-text-muted font-normal leading-relaxed mb-7 max-w-2xl">
              {personalInfo.bioParagraphs[0]}
            </p>

            {/* CTAs & Interactive Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                onClick={() => playUiSound('click')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#e5a93b] dark:hover:bg-[#f5b945] transition-all font-mono shadow-lg hover:shadow-xl cursor-pointer group"
              >
                <span>View Projects ({personalInfo.quickStats[1].value})</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  playUiSound('open');
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium theme-text-fg glass-panel border theme-border-medium hover:theme-accent-border transition-all font-mono cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 theme-accent" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={() => {
                  playUiSound('open');
                  onOpenRecruiter();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium theme-accent theme-accent-bg border theme-accent-border hover:theme-accent-glow transition-all font-mono cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>30-Sec Summary</span>
              </button>
            </div>

            {/* Direct Social & Contact Channels from Resume */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 border-b theme-border-subtle text-xs sm:text-sm font-mono theme-text-muted mb-6">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>{personalInfo.contact.email}</span>
              </a>
              <span className="flex items-center gap-1.5 theme-text-subtle">
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.contact.phone}</span>
              </span>
            </div>

            {/* Live System Status & Key Metrics Deck */}
            <div className="rounded-2xl glass-panel border theme-border-medium shadow-2xl p-5 backdrop-blur-xl hud-bracket beam-card">
              {/* Header in Simple English */}
              <div className="flex items-center justify-between pb-3.5 border-b theme-border-subtle mb-3.5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 theme-accent" />
                  <span className="font-mono text-xs font-bold theme-text-fg uppercase tracking-wider">
                    Live System Status
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full theme-accent animate-pulse" />
                  <span className="text-[10px] font-mono theme-text-muted uppercase">SYS_ACTIVE</span>
                </div>
              </div>

              {/* Real-time Project Stream Log */}
              <div className="p-3 rounded-xl theme-card border theme-border-subtle mb-3.5 transition-all duration-300">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="theme-accent font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    {telemetryLogs[activeLogIndex].source}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full theme-accent-bg border theme-accent-border theme-accent">
                    {telemetryLogs[activeLogIndex].tag}
                  </span>
                </div>
                <p className="text-xs font-mono theme-text-muted leading-relaxed">
                  &gt; {telemetryLogs[activeLogIndex].msg}
                </p>
              </div>

              {/* High-Impact Stat Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div className="p-3 rounded-xl theme-card border theme-border-subtle">
                  <div className="text-[10px] font-mono theme-text-subtle uppercase flex items-center gap-1 mb-1">
                    <Database className="w-3 h-3 theme-accent" />
                    B.Tech CGPA
                  </div>
                  <div className="font-display text-2xl font-bold theme-accent">
                    8.02 <span className="text-xs theme-text-muted font-mono font-normal">/ 10</span>
                  </div>
                  <div className="text-[10px] font-mono theme-text-muted">Recent: 8.6 / 10 (SRM IST)</div>
                </div>

                <div className="p-3 rounded-xl theme-card border theme-border-subtle">
                  <div className="text-[10px] font-mono theme-text-subtle uppercase flex items-center gap-1 mb-1">
                    <Layers className="w-3 h-3 theme-accent" />
                    Research Paper
                  </div>
                  <div className="font-display text-2xl font-bold theme-text-fg">
                    IEEE <span className="text-xs theme-accent font-mono font-normal">Format</span>
                  </div>
                  <div className="text-[10px] font-mono theme-text-muted truncate">Solar RL & LSTM Forecasting</div>
                </div>
              </div>

              {/* Verified Core Pipeline */}
              <div className="pt-2.5 border-t theme-border-subtle">
                <div className="text-[10px] font-mono theme-text-subtle uppercase mb-1.5">
                  Verified Core Pipeline:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Kafka', 'Spring Boot', 'PyTorch GNN', 'FastAPI', 'Docker', 'Kubernetes', 'LangChain', 'ChromaDB'].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono theme-card border theme-border-subtle theme-text-muted hover:theme-accent hover:border-theme-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factual Metrics Bar Strictly from Resume */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 scroll-reveal delay-200">
          {personalInfo.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl glass-panel border theme-border-subtle hover:theme-accent-border transition-all backdrop-blur-sm hud-bracket beam-card hover:-translate-y-0.5"
            >
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold theme-text-fg mb-1 flex items-baseline gap-1">
                <span className="theme-accent">{stat.value}</span>
              </div>
              <div className="text-xs font-mono font-medium theme-text-fg uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs theme-text-muted leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
