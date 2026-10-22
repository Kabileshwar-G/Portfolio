import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Calendar, 
  Sparkles, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ChronoNode {
  year: string;
  tag: string;
  title: string;
  organization: string;
  location: string;
  focus: string;
  metrics: string;
  highlights: string[];
  angleDeg: number;
}

export const TimeMachineChrono: React.FC = () => {
  const { playUiSound } = useTheme();
  const [activeYearIndex, setActiveYearIndex] = useState(2); // Default to 2025 (Flagship IEEE Solar AI)
  const [mouseAngle, setMouseAngle] = useState(0);
  const dialRef = useRef<HTMLDivElement>(null);

  const chronoNodes: ChronoNode[] = [
    {
      year: '2023',
      tag: 'ACADEMIC FOUNDATION',
      title: 'SRM IST Enrollment & Algorithmic Core',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, TN',
      focus: 'Data Structures, C++, Java & Statistical Foundations',
      metrics: 'CGPA 8.02 Academic Track',
      highlights: [
        'Admitted to B.Tech Computer Science Engineering with AI & Machine Learning specialization.',
        'Mastered core CS principles: algorithmic complexity, graph theory, OOP, and memory management.',
        'Built foundational computational pipelines and numerical simulation models.'
      ],
      angleDeg: -60,
    },
    {
      year: '2024',
      tag: 'DISTRIBUTED ARCHITECTURES',
      title: 'Distributed Systems & Event Streaming',
      organization: 'SRM Tech Labs & Applied Projects',
      location: 'Chennai, TN',
      focus: 'Apache Kafka, Spring Boot 3, Redis & Docker',
      metrics: 'Sub-millisecond Event Bus',
      highlights: [
        'Engineered high-throughput event streaming architectures using Apache Kafka and Redis graph caching.',
        'Developed containerized Spring Boot and FastAPI microservices with strict telemetry tracing.',
        'Authored distributed notification and telemetry engines handling concurrent simulated workloads.'
      ],
      angleDeg: -30,
    },
    {
      year: '2025',
      tag: 'FLAGSHIP RESEARCH & PUBLICATION',
      title: 'Intelligent Solar Energy Management System',
      organization: 'IEEE Conference Research Initiative',
      location: 'Chennai / International',
      focus: 'Deep Q-Networks (DQN) + LSTM Energy Forecasting',
      metrics: '81.55% Energy Dispatch Gain (IEEE Paper)',
      highlights: [
        'Authored original research on autonomous smart grid optimization under variable weather and tariff constraints.',
        'Formulated custom LSTM recurrent networks coupled with Reinforcement Learning (DQN) for real-time dispatch.',
        'Achieved 81.55% energy utilization improvement over conventional rule-based heuristic baselines.'
      ],
      angleDeg: 0,
    },
    {
      year: '2026',
      tag: 'PRODUCTION AI & AGENTS',
      title: 'Enterprise AI Systems & LLM Workflows',
      organization: 'Advanced Applied Systems',
      location: 'Chennai, TN',
      focus: 'LangChain, ChromaDB Vector Search, K8s & Scalable MLOps',
      metrics: '~95% Vector Retrieval Precision',
      highlights: [
        'Architected Retrieval-Augmented Generation (RAG) engines indexing tens of thousands of technical pages.',
        'Designed agentic workflows with automated verification loops and deterministic safety guardrails.',
        'Deployed multi-pod Kubernetes clusters with automated health probes and zero-downtime rollouts.'
      ],
      angleDeg: 30,
    },
    {
      year: '2027',
      tag: 'GRADUATION & LEADERSHIP',
      title: 'B.Tech Degree Completion & Production Engineering',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, TN',
      focus: 'Full-Stack Systems Leadership & Enterprise Engineering',
      metrics: 'Class of 2027 Graduate',
      highlights: [
        'Completion of B.Tech CSE (AI & ML) with comprehensive engineering portfolio.',
        'Prepared for high-impact software engineering and AI systems roles worldwide.',
        'Continuously deploying open-source high-throughput architectures and research.'
      ],
      angleDeg: 60,
    },
  ];

  const activeNode = chronoNodes[activeYearIndex];

  // Mouse move over dial to simulate laser pointer tracking
  const handleDialMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    setMouseAngle(angle);
  };

  return (
    <div className="relative w-full rounded-3xl glass-panel border theme-border-medium overflow-hidden p-6 sm:p-10 mb-16 select-none">
      
      {/* Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b theme-border-subtle pb-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span className="font-bold theme-text-fg uppercase tracking-wider">
            SCENE 03 // THE TIME MACHINE
          </span>
          <span className="opacity-30">|</span>
          <span className="theme-text-muted">INTERACTIVE RADIAL CAREER ASTROLABE (2023–2027)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono theme-text-subtle">
          <Compass className="w-3.5 h-3.5 theme-accent animate-spin-slow" />
          <span>CURSOR-DIRECTED CHRONO BEAM · {Math.round(mouseAngle)}°</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ============================================================== */}
        {/* LEFT / CENTER: THE RADIAL ASTROLABE CLOCK MECHANISM             */}
        {/* ============================================================== */}
        <div 
          ref={dialRef}
          onMouseMove={handleDialMouseMove}
          className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[400px]"
        >
          {/* Outer Astrolabe Rings */}
          <div className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] flex items-center justify-center">
            
            {/* Concentric Rotating Border Track */}
            <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/30 animate-spin-slow" />
            <div 
              className="absolute inset-4 rounded-full border border-dotted border-sky-400/25 animate-spin-slow" 
              style={{ animationDirection: 'reverse', animationDuration: '40s' }}
            />
            <div className="absolute inset-10 rounded-full border border-white/10" />

            {/* Glowing Laser Light Cone swept toward active node */}
            <div 
              className="absolute top-1/2 left-1/2 w-48 h-1 origin-left pointer-events-none transition-transform duration-500 ease-out z-10"
              style={{
                transform: `translateY(-50%) rotate(${activeNode.angleDeg - 90}deg)`,
                background: 'linear-gradient(to right, var(--accent-gold), transparent)',
                boxShadow: '0 0 20px var(--accent-gold)',
              }}
            />

            {/* Center Pivot Ornament Ball */}
            <div className="relative z-20 w-16 h-16 rounded-full glass-panel border theme-accent-border flex flex-col items-center justify-center shadow-xl backdrop-blur-md">
              <Compass className="w-5 h-5 theme-accent animate-pulse" />
              <span className="text-[9px] font-mono font-bold theme-text-fg mt-0.5">TIME</span>
            </div>

            {/* Year Selector Nodes positioned along the Arc */}
            {chronoNodes.map((node, idx) => {
              const isCurrent = idx === activeYearIndex;
              // Distribute along top half of circle
              const angleRad = ((node.angleDeg - 90) * Math.PI) / 180;
              const radius = 120; // px
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <button
                  key={node.year}
                  onClick={() => {
                    playUiSound('click');
                    setActiveYearIndex(idx);
                  }}
                  className={`absolute z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center font-mono font-bold text-xs transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'scale-125 theme-accent-bg border-2 border-amber-400 shadow-[0_0_25px_var(--accent-gold)] text-amber-400'
                      : 'glass-panel border theme-border-subtle hover:theme-accent-border theme-text-muted hover:theme-text-fg hover:scale-110'
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="leading-none">{node.year.slice(2)}</span>
                  <span className="text-[8px] opacity-60">'yr</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono theme-text-subtle mt-4 text-center">
            Click any node or era to swing the chrono beam
          </div>
        </div>

        {/* ============================================================== */}
        {/* RIGHT: ACTIVE ERA DETAIL DISPLAY                                */}
        {/* ============================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-6 sm:p-8 rounded-2xl theme-card border theme-border-medium shadow-2xl relative overflow-hidden hud-bracket beam-card">
            
            {/* Ambient Background Aura */}
            <div 
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20"
              style={{ background: 'var(--accent-gold)' }}
            />

            {/* Top Node Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b theme-border-subtle pb-3">
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl sm:text-4xl font-black theme-accent">
                  {activeNode.year}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md theme-accent-bg border theme-accent-border theme-accent font-semibold uppercase">
                  {activeNode.tag}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono theme-text-muted">
                <Calendar className="w-3.5 h-3.5 theme-accent" />
                <span>{activeNode.organization}</span>
              </div>
            </div>

            {/* Title & Core Focus */}
            <h3 className="font-display text-xl sm:text-2xl font-bold theme-text-fg mb-1">
              {activeNode.title}
            </h3>
            <div className="text-xs sm:text-sm font-mono theme-accent font-medium mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{activeNode.focus}</span>
            </div>

            {/* Highlights List strictly from Resume */}
            <ul className="space-y-2.5 mb-6">
              {activeNode.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm theme-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed theme-text-fg">{h}</span>
                </li>
              ))}
            </ul>

            {/* Metric Footer Badge */}
            <div className="flex items-center justify-between pt-3 border-t theme-border-subtle text-xs font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="theme-text-subtle uppercase">Verified Outcome:</span>
                <span className="font-bold theme-text-fg">{activeNode.metrics}</span>
              </div>

              <div className="flex items-center gap-1">
                {chronoNodes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      playUiSound('click');
                      setActiveYearIndex(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === activeYearIndex ? 'bg-amber-400 w-6' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
