import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Terminal,
  Cpu,
  Layers,
  Database,
  Compass,
  CheckCircle2,
  ChevronRight,
  Radio,
  ExternalLink
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

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

  // Subtle mouse parallax calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-12 overflow-hidden theme-bg select-none"
    >
      {/* ==================================================================== */}
      {/* CINEMATIC ATMOSPHERE & EMBERS                                        */}
      {/* ==================================================================== */}
      {/* Deep radial vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-90" />
      
      {/* Warm ambient ember glow centered behind the scene */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, var(--accent-gold) 0%, var(--accent-copper) 45%, transparent 75%)',
          transform: `translate(calc(-50% + ${mousePos.x * -25}px), calc(-50% + ${mousePos.y * -15}px))`,
        }}
      />

      {/* ==================================================================== */}
      {/* TOP CINEMATIC HUD TELEMETRY BAR                                      */}
      {/* ==================================================================== */}
      <div className="relative z-30 max-w-[1650px] mx-auto px-4 sm:px-8 w-full mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border-b theme-border-subtle pb-3">
          <div className="flex items-center gap-2.5 theme-text-muted">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold uppercase">
              <Radio className="w-3 h-3 animate-pulse" />
              01 // SCENE: CINEMATIC OPENING
            </span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Compass className="w-3 h-3 theme-accent" />
              SRM IST · CHENNAI [12°49'44"N · 80°02'39"E]
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 tracking-widest text-[10px] theme-text-subtle font-bold">
              <span>•</span><span>•</span><span>•</span><span>•</span><span>•</span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full glass-panel border theme-border-subtle text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">PROD READY</span>
              <span className="opacity-30">·</span>
              <span className="theme-text-muted">B.TECH '27</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* THE CINEMATIC STAGE: PERSON IN FRONT OF GIANT WORDMARK               */}
      {/* ==================================================================== */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center max-w-[1650px] mx-auto px-4 sm:px-6 w-full py-2">
        
        {/* ------------------------------------------------------------------ */}
        {/* GIANT ARCHITECTURAL WORDMARK RUNNING BEHIND THE PERSON             */}
        {/* ------------------------------------------------------------------ */}
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -20}px, calc(-50% + ${mousePos.y * -12}px), 0)`,
          }}
        >
          <div className="w-full text-center">
            <div 
              className="cinematic-monument text-[14vw] sm:text-[16vw] lg:text-[17vw] font-black tracking-tight leading-none text-transparent opacity-35 dark:opacity-25"
              style={{
                WebkitTextStroke: '1.5px var(--accent-gold)',
                textShadow: '0 0 50px var(--accent-glow)',
              }}
            >
              KABILESHWAR
            </div>
            {/* Directional Chevron Telemetry */}
            <div className="flex items-center justify-between px-8 sm:px-16 text-xs sm:text-sm font-mono tracking-widest theme-text-subtle opacity-40 -mt-2 sm:-mt-4">
              <span>&lt;&lt;&lt; [SEC 01 // ARCHITECTURAL CORE]</span>
              <span className="hidden sm:inline">• FULL-STACK &amp; AI/ML •</span>
              <span>[SYSTEM ONLINE] &gt;&gt;&gt;</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FOREGROUND HERO COMPOSITION: CUTOUT + INTEGRATED PANELS             */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
          
          {/* ================================================================ */}
          {/* LEFT TELEMETRY COLUMN                                            */}
          {/* ================================================================ */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center p-5 sm:p-6 rounded-2xl glass-panel border theme-border-medium shadow-2xl backdrop-blur-xl hud-bracket">
            
            {/* Candidate Title & Headline */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-panel border theme-border-medium mb-3 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full theme-accent animate-ping" />
                <span className="text-xs font-mono theme-accent font-semibold tracking-wide uppercase">
                  Full-Stack &amp; Applied AI/ML
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-display tracking-tight theme-text-fg leading-none mb-3">
                Kabileshwar G
              </h1>
              <p className="text-xs sm:text-sm font-mono theme-accent font-medium leading-snug">
                {personalInfo.headline}
              </p>
            </div>

            {/* Factual Resume Synopsis */}
            <p className="text-xs sm:text-sm theme-text-muted font-normal leading-relaxed mb-6 max-w-lg">
              {personalInfo.bioParagraphs[0]}
            </p>

            {/* Cinematic Action Triggers */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <a
                href="#skills"
                onClick={() => playUiSound('click')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#e5a93b] dark:hover:bg-[#f5b945] transition-all font-mono shadow-lg hover:shadow-xl cursor-pointer group"
              >
                <span>3D Tech Universe</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  playUiSound('open');
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium theme-text-fg glass-panel border theme-border-medium hover:theme-accent-border transition-all font-mono cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 theme-accent" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={() => {
                  playUiSound('open');
                  onOpenRecruiter();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium theme-accent theme-accent-bg border theme-accent-border hover:theme-accent-glow transition-all font-mono cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Recruiter Brief</span>
              </button>
            </div>

            {/* Direct Connect Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono theme-text-muted">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                onClick={() => playUiSound('click')}
                className="flex items-center gap-1.5 hover:theme-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                <span>{personalInfo.contact.email}</span>
              </a>
            </div>
          </div>

          {/* ================================================================ */}
          {/* CENTER: CUTOUT OF KABILESWAR (IN FRONT OF WORDMARK)              */}
          {/* ================================================================ */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center items-end relative min-h-[420px] sm:min-h-[500px] lg:min-h-[580px]">
            
            {/* Ground Contact Shadow beneath feet */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[280px] sm:w-[340px] h-[36px] cinematic-contact-shadow pointer-events-none z-10" />

            {/* Concentric Astrolabe Ground Plane Rings */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] sm:w-[460px] h-[120px] border border-dashed border-amber-500/25 rounded-[100%] pointer-events-none transform -rotate-12 animate-spin-slow opacity-60" />
            <div 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[300px] sm:w-[360px] h-[90px] border border-dotted border-sky-400/20 rounded-[100%] pointer-events-none transform rotate-6 animate-spin-slow opacity-50"
              style={{ animationDirection: 'reverse', animationDuration: '34s' }}
            />

            {/* Silhouette Ambient Aura */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full blur-[70px] pointer-events-none opacity-45"
              style={{
                background: 'radial-gradient(circle, var(--accent-gold) 0%, var(--accent-copper) 45%, transparent 75%)',
              }}
            />

            {/* The Cutout Portrait Image with Dynamic Silhouette Rim Light */}
            <div 
              className="relative z-20 transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 6}px, 0)`,
              }}
            >
              <img
                src="/assets/portrait-cutout.png"
                alt="Kabileshwar G - Full-Stack Engineer & AI/ML Systems"
                className="w-auto h-[400px] sm:h-[480px] lg:h-[550px] object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] cinematic-rim-glow filter contrast-[1.04] brightness-[1.02]"
              />

              {/* Organic floor fade so waist/base blends seamlessly into the stage floor */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent pointer-events-none z-30" />
            </div>

            {/* Floating Telemetry Identification Chip */}
            <div className="absolute bottom-4 z-40 px-3.5 py-1.5 rounded-full glass-panel border theme-border-medium shadow-2xl backdrop-blur-xl flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold theme-text-fg">KABILESWAR G</span>
              <span className="opacity-30">|</span>
              <span className="theme-accent">SRM IST '27</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-1" />
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN: LIVE TELEMETRY DECK & ACADEMIC ACCREDITATIONS      */}
          {/* ================================================================ */}
          <div className="lg:col-span-4 order-3 lg:order-3 flex flex-col justify-center">
            
            {/* Live Telemetry Deck */}
            <div className="rounded-2xl glass-panel border theme-border-medium shadow-2xl p-4 sm:p-5 backdrop-blur-xl hud-bracket beam-card mb-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b theme-border-subtle mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 theme-accent" />
                  <span className="font-mono text-xs font-bold theme-text-fg uppercase tracking-wider">
                    Live System Telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full theme-accent animate-pulse" />
                  <span className="text-[10px] font-mono theme-accent font-semibold uppercase">SYS_ACTIVE</span>
                </div>
              </div>

              {/* Streaming Log Item */}
              <div className="p-3 rounded-xl theme-card border theme-border-subtle mb-3 transition-all duration-300">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="theme-accent font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    {telemetryLogs[activeLogIndex].source}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full theme-accent-bg border theme-accent-border theme-accent font-bold">
                    {telemetryLogs[activeLogIndex].tag}
                  </span>
                </div>
                <p className="text-xs font-mono theme-text-muted leading-relaxed">
                  &gt; {telemetryLogs[activeLogIndex].msg}
                </p>
              </div>

              {/* Core Credentials Stat Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="p-2.5 rounded-xl theme-card border theme-border-subtle">
                  <div className="text-[10px] font-mono theme-text-subtle uppercase flex items-center gap-1 mb-1">
                    <Database className="w-3 h-3 theme-accent" />
                    B.Tech CGPA
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold theme-accent">
                    8.02 <span className="text-xs theme-text-muted font-mono font-normal">/ 10</span>
                  </div>
                  <div className="text-[10px] font-mono theme-text-muted">SRM IST Chennai</div>
                </div>

                <div className="p-2.5 rounded-xl theme-card border theme-border-subtle">
                  <div className="text-[10px] font-mono theme-text-subtle uppercase flex items-center gap-1 mb-1">
                    <Layers className="w-3 h-3 theme-accent" />
                    Research Paper
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold theme-text-fg">
                    IEEE <span className="text-xs theme-accent font-mono font-normal">Format</span>
                  </div>
                  <div className="text-[10px] font-mono theme-text-muted truncate">Solar RL &amp; LSTM AI</div>
                </div>
              </div>

              {/* Verified Core Pipeline Pills */}
              <div className="pt-2 border-t theme-border-subtle">
                <div className="text-[10px] font-mono theme-text-subtle uppercase mb-1.5">
                  Verified Core Pipeline:
                </div>
                <div className="flex flex-wrap gap-1">
                  {['PyTorch', 'Apache Kafka', 'Spring Boot', 'FastAPI', 'Docker', 'Kubernetes', 'LangChain', 'PostgreSQL'].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono theme-card border theme-border-subtle theme-text-muted hover:theme-accent hover:border-theme-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="#projects"
                onClick={() => playUiSound('click')}
                className="p-2.5 rounded-xl glass-panel border theme-border-subtle hover:theme-accent-border transition-colors flex items-center justify-between group"
              >
                <span className="theme-text-fg font-medium">Flagship Projects</span>
                <ChevronRight className="w-3.5 h-3.5 theme-accent transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#research"
                onClick={() => playUiSound('click')}
                className="p-2.5 rounded-xl glass-panel border theme-border-subtle hover:theme-accent-border transition-colors flex items-center justify-between group"
              >
                <span className="theme-text-fg font-medium">IEEE Publication</span>
                <ChevronRight className="w-3.5 h-3.5 theme-accent transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* BOTTOM METRIC TELEMETRY RIBBON                                       */}
      {/* ==================================================================== */}
      <div className="relative z-30 max-w-[1650px] mx-auto px-4 sm:px-8 w-full mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {personalInfo.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl glass-panel border theme-border-subtle hover:theme-accent-border transition-all backdrop-blur-sm hud-bracket hover:-translate-y-0.5"
            >
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold theme-text-fg flex items-baseline gap-1">
                <span className="theme-accent">{stat.value}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-medium theme-text-fg uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] theme-text-muted truncate">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
