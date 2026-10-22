import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Radio, 
  Cloud, 
  Boxes, 
  Activity, 
  Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface RoleProfile {
  id: string;
  name: string;
  shortTag: string;
  codename: string;
  icon: React.ElementType;
  primaryColor: string;
  secondaryColor: string;
  visualMode: 'neural' | 'stream' | 'cluster' | 'vector';
  headline: string;
  description: string;
  metrics: { label: string; value: string; detail: string }[];
  flagshipSkills: { name: string; proficiency: number; roleInProd: string }[];
  architectureSnippet: string;
}

export const RoleCinematicStage: React.FC = () => {
  const { playUiSound } = useTheme();
  const [activeRoleId, setActiveRoleId] = useState<string>('ai-ml');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const roles: RoleProfile[] = [
    {
      id: 'ai-ml',
      name: 'AI & Deep Learning Systems',
      shortTag: 'ROLE 01 // NEURAL TENSOR',
      codename: 'DEEP_SYNAPSE_CORE',
      icon: Cpu,
      primaryColor: '#f59e0b',
      secondaryColor: '#ea580c',
      visualMode: 'neural',
      headline: 'Deep Reinforcement Learning & Neural Sequence Models',
      description: 'Architecting custom deep learning pipelines including Deep Q-Networks (DQN) for energy grid dispatch, LSTM temporal sequences, and Graph Neural Networks for anomaly detection.',
      metrics: [
        { label: 'DISPATCH GAIN', value: '81.55%', detail: 'IEEE Solar Grid Optimization' },
        { label: 'GNN PRECISION', value: '85%+', detail: 'Microservice Anomaly Tracing' },
        { label: 'INFERENCE', value: '< 18ms', detail: 'TensorRT / PyTorch C++ Engine' },
      ],
      flagshipSkills: [
        { name: 'PyTorch & TorchScript', proficiency: 94, roleInProd: 'Deep Q-Networks & GNN Architecture' },
        { name: 'LSTM & Recurrent Nets', proficiency: 92, roleInProd: 'Solar Irradiance Forecasting' },
        { name: 'Scikit-Learn & NumPy', proficiency: 96, roleInProd: 'Feature Pipelines & Dimensionality' },
        { name: 'Hugging Face & ONNX', proficiency: 88, roleInProd: 'Model Quantization & Inference' },
      ],
      architectureSnippet: `[Solar Irradiance Input] ──> [LSTM Time-Series] ──> [DQN Action Policy] ──> [81.55% Grid Efficiency]`,
    },
    {
      id: 'distributed',
      name: 'Distributed Systems & Event Streaming',
      shortTag: 'ROLE 02 // EVENT BUS',
      codename: 'KAFKA_STREAM_GRID',
      icon: Radio,
      primaryColor: '#38bdf8',
      secondaryColor: '#2563eb',
      visualMode: 'stream',
      headline: 'High-Throughput Real-Time Event Sourcing & Messaging',
      description: 'Designing fault-tolerant distributed pipelines using Apache Kafka, Redis graph caches, and Spring Boot microservices with idempotent consumer groups and zero message loss.',
      metrics: [
        { label: 'BUS LATENCY', value: '< 0.8ms', detail: 'In-Memory Kafka Cluster' },
        { label: 'PARTITIONS', value: '16 TOPICS', detail: 'Concurrent Worker Consumer Nodes' },
        { label: 'AVAILABILITY', value: '99.99%', detail: 'Redis Cluster Caching Layer' },
      ],
      flagshipSkills: [
        { name: 'Apache Kafka', proficiency: 93, roleInProd: 'Multi-Partition Topic Ingestion' },
        { name: 'Spring Boot 3 (Java 17)', proficiency: 90, roleInProd: 'Enterprise Reactive Microservices' },
        { name: 'Redis Cache & Graph', proficiency: 91, roleInProd: 'In-Memory Topology & Session State' },
        { name: 'FastAPI (Async Python)', proficiency: 92, roleInProd: 'High-Concurrency Ingestion Gateway' },
      ],
      architectureSnippet: `[Producer Gateway] ──> [Kafka Event Topic] ──> [Worker Pool] ──> [Redis Sub-ms Cache]`,
    },
    {
      id: 'cloud-k8s',
      name: 'Cloud Native & Orchestration',
      shortTag: 'ROLE 03 // POD TOPOLOGY',
      codename: 'CONTAINER_ORCHESTRA',
      icon: Cloud,
      primaryColor: '#10b981',
      secondaryColor: '#059669',
      visualMode: 'cluster',
      headline: 'Multi-Pod Container Deployment & Production Scalability',
      description: 'Containerizing complex full-stack services in Docker and orchestrating multi-pod topologies in Kubernetes with health checks, automated rolling restarts, and persistent storage.',
      metrics: [
        { label: 'POD REPLICAS', value: 'DYNAMIC', detail: 'Horizontal Auto-Scale Policy' },
        { label: 'DEPLOY DOWNTIME', value: '0 SEC', detail: 'Rolling Strategy Verification' },
        { label: 'CONTAINERS', value: 'DISTRIBUTED', detail: 'Multi-Stage Alpine Builds' },
      ],
      flagshipSkills: [
        { name: 'Kubernetes (K8s)', proficiency: 88, roleInProd: 'Multi-Pod Orchestration & Secrets' },
        { name: 'Docker & Compose', proficiency: 94, roleInProd: 'Layer-Cached Production Images' },
        { name: 'Linux & Bash Scripting', proficiency: 92, roleInProd: 'Telemetry Daemons & Health Automation' },
        { name: 'CI/CD Automation', proficiency: 87, roleInProd: 'Test, Build & Deploy Pipeline' },
      ],
      architectureSnippet: `[Ingress Router] ──> [K8s Service Mesh] ──> [Pod Replicas 1..N] ──> [Shared Storage Volume]`,
    },
    {
      id: 'agentic-rag',
      name: 'Agentic AI & Vector Knowledge Systems',
      shortTag: 'ROLE 04 // VECTOR SPACE',
      codename: 'CHROMA_RAG_VECTOR',
      icon: Boxes,
      primaryColor: '#c084fc',
      secondaryColor: '#9333ea',
      visualMode: 'vector',
      headline: 'Semantic Vector Embeddings & Agentic Verification Loops',
      description: 'Constructing Retrieval-Augmented Generation (RAG) engines capable of semantic chunking, multi-stage retrieval over 10,000+ technical documents, and autonomous tool calling.',
      metrics: [
        { label: 'PRECISION', value: '~95%', detail: 'Cosine Semantic Retrieval' },
        { label: 'CHUNKS INDEXED', value: '10,000+', detail: 'ChromaDB High-Dimensional Index' },
        { label: 'LOOP ACCURACY', value: '98.2%', detail: 'Autonomous Code Validation' },
      ],
      flagshipSkills: [
        { name: 'LangChain & LlamaIndex', proficiency: 91, roleInProd: 'Agent Tool Calling & Pipelines' },
        { name: 'ChromaDB & Vector Stores', proficiency: 92, roleInProd: 'High-Dimensional Vector Indexing' },
        { name: 'Prompt Engineering', proficiency: 95, roleInProd: 'Few-Shot Grounding & Safety Rules' },
        { name: 'Semantic Evaluators', proficiency: 89, roleInProd: 'Automated Truthfulness Benchmarks' },
      ],
      architectureSnippet: `[Doc Ingestion] ──> [Embedding Model] ──> [ChromaDB Vector Store] ──> [Context RAG Prompt]`,
    },
  ];

  const activeRole = roles.find((r) => r.id === activeRoleId) || roles[0];

  // Dynamic visual animation engine tailored per role
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Background subtle depth gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        width * 0.6
      );
      bgGrad.addColorStop(0, `${activeRole.primaryColor}18`);
      bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render mode specific visual
      if (activeRole.visualMode === 'neural') {
        // AI / Neural Network Tensor Graph Visual
        const layers = [4, 6, 7, 5, 2];
        const layerX = layers.map((_, i) => (width / (layers.length + 1)) * (i + 1));
        const nodePositions: { x: number; y: number }[][] = [];

        layers.forEach((count, lIdx) => {
          const lNodes: { x: number; y: number }[] = [];
          for (let n = 0; n < count; n++) {
            const ny = (height / (count + 1)) * (n + 1) + Math.sin(t + n + lIdx) * 6;
            lNodes.push({ x: layerX[lIdx], y: ny });
          }
          nodePositions.push(lNodes);
        });

        // Draw synapses
        for (let l = 0; l < nodePositions.length - 1; l++) {
          const curLayer = nodePositions[l];
          const nextLayer = nodePositions[l + 1];
          curLayer.forEach((n1, i) => {
            nextLayer.forEach((n2, j) => {
              const pulse = Math.sin(t * 2 + i * 0.5 + j * 0.7) * 0.5 + 0.5;
              ctx.strokeStyle = `${activeRole.primaryColor}${Math.floor(pulse * 40 + 10).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            });
          });
        }

        // Draw neuron nodes
        nodePositions.forEach((layer) => {
          layer.forEach((node) => {
            ctx.fillStyle = activeRole.primaryColor;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
            ctx.fill();
            // Glow
            ctx.strokeStyle = `${activeRole.primaryColor}60`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
            ctx.stroke();
          });
        });

      } else if (activeRole.visualMode === 'stream') {
        // Apache Kafka Real-Time Event Stream Lines
        const lanes = 5;
        for (let l = 0; l < lanes; l++) {
          const ly = (height / (lanes + 1)) * (l + 1);
          // Draw lane track
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(30, ly);
          ctx.lineTo(width - 30, ly);
          ctx.stroke();

          // Draw rapid moving event packets
          for (let p = 0; p < 4; p++) {
            const px = ((t * (120 + l * 40) + p * 140) % (width - 60)) + 30;
            const grad = ctx.createLinearGradient(px - 20, ly, px, ly);
            grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
            grad.addColorStop(1, activeRole.primaryColor);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(px - 20, ly);
            ctx.lineTo(px, ly);
            ctx.stroke();

            // Head node
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(px, ly, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }

      } else if (activeRole.visualMode === 'cluster') {
        // Kubernetes Cluster Node Grid
        const cols = 4;
        const rows = 3;
        const cellW = (width - 80) / cols;
        const cellH = (height - 60) / rows;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cx = 40 + c * cellW + cellW / 2;
            const cy = 30 + r * cellH + cellH / 2;
            const isHealthy = (c + r + Math.floor(t * 0.5)) % 5 !== 0;

            ctx.strokeStyle = isHealthy ? `${activeRole.primaryColor}40` : '#f43f5e50';
            ctx.strokeRect(cx - 24, cy - 18, 48, 36);

            ctx.fillStyle = isHealthy ? activeRole.primaryColor : '#f43f5e';
            ctx.fillRect(cx - 20, cy - 14, 8, 8);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '9px monospace';
            ctx.fillText(`pod-${c}${r}`, cx - 8, cy - 6);
          }
        }

      } else {
        // Agentic Vector Embedding Scatter Projection
        const points = 35;
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2 + t * 0.2;
          const dist = 50 + ((i * 19) % 110);
          const px = width / 2 + Math.cos(angle) * dist;
          const py = height / 2 + Math.sin(angle) * (dist * 0.6);

          ctx.fillStyle = i % 3 === 0 ? activeRole.primaryColor : activeRole.secondaryColor;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearest neighbors
          if (i > 0 && i % 4 === 0) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(width / 2, height / 2);
            ctx.stroke();
          }
        }

        // Center query point
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [activeRole.visualMode, activeRole.primaryColor, activeRole.secondaryColor]);

  return (
    <div className="relative w-full rounded-3xl glass-panel border theme-border-medium overflow-hidden p-6 sm:p-10 mb-16 select-none shadow-2xl">
      
      {/* Cinematic Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b theme-border-subtle pb-4 mb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono">
          <span 
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ background: activeRole.primaryColor }}
          />
          <span className="font-bold theme-text-fg uppercase tracking-wider">
            SCENE 02.B // SPECIALIZED ROLE TELEMETRY
          </span>
          <span className="opacity-30">|</span>
          <span className="theme-text-muted hidden sm:inline">{activeRole.shortTag}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono theme-text-subtle">
          <Activity className="w-3.5 h-3.5 theme-accent" />
          <span>ACTIVE ARCHITECTURE: {activeRole.codename}</span>
        </div>
      </div>

      {/* Role Navigation Strip (4 Cinematic Personas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {roles.map((r) => {
          const isSelected = r.id === activeRoleId;
          const Icon = r.icon;
          return (
            <button
              key={r.id}
              onClick={() => {
                playUiSound('click');
                setActiveRoleId(r.id);
              }}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'theme-card scale-102 shadow-2xl'
                  : 'glass-panel border-white/5 hover:border-white/20 hover:scale-[1.01]'
              }`}
              style={{
                borderColor: isSelected ? r.primaryColor : undefined,
                boxShadow: isSelected ? `0 10px 30px -5px ${r.primaryColor}30` : undefined,
              }}
            >
              {isSelected && (
                <div 
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: r.primaryColor }}
                />
              )}
              <div className="flex items-center justify-between mb-2">
                <Icon 
                  className="w-5 h-5" 
                  style={{ color: isSelected ? r.primaryColor : 'var(--text-muted)' }} 
                />
                <span className="text-[10px] font-mono theme-text-subtle">
                  {r.shortTag.split('//')[0]}
                </span>
              </div>
              <div className="font-display font-bold text-sm theme-text-fg truncate">
                {r.name}
              </div>
              <div className="text-[11px] font-mono theme-text-muted mt-1 truncate">
                {r.headline.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Role Cinematic Showcase Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Role Bio, Skills, and Metric Gauges */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded border"
              style={{
                borderColor: `${activeRole.primaryColor}60`,
                background: `${activeRole.primaryColor}15`,
                color: activeRole.primaryColor,
              }}
            >
              {activeRole.codename}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold theme-text-fg mb-3">
            {activeRole.headline}
          </h3>

          <p className="text-xs sm:text-sm theme-text-muted font-normal leading-relaxed mb-6">
            {activeRole.description}
          </p>

          {/* Architecture Pipeline Monoline */}
          <div className="p-3 rounded-xl theme-card border theme-border-subtle mb-6 font-mono text-[11px] theme-text-muted overflow-x-auto">
            <div className="text-[10px] text-amber-400 font-bold uppercase mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Pipeline Data Flow:
            </div>
            <code>{activeRole.architectureSnippet}</code>
          </div>

          {/* Flagship Skills with Animated Proficiency Meters */}
          <div className="space-y-3 mb-6">
            <div className="text-[11px] font-mono theme-text-subtle uppercase tracking-wider">
              Core Technical Weaponry:
            </div>
            {activeRole.flagshipSkills.map((sk) => (
              <div key={sk.name} className="p-2.5 rounded-xl glass-panel border theme-border-subtle">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="font-bold theme-text-fg">{sk.name}</span>
                  <span className="theme-text-muted text-[11px]">{sk.roleInProd}</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${sk.proficiency}%`,
                      background: `linear-gradient(to right, ${activeRole.primaryColor}, ${activeRole.secondaryColor})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3">
            {activeRole.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl theme-card border theme-border-subtle">
                <div className="text-[10px] font-mono theme-text-subtle uppercase">
                  {m.label}
                </div>
                <div 
                  className="font-display text-lg sm:text-xl font-bold my-0.5"
                  style={{ color: activeRole.primaryColor }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] font-mono theme-text-muted truncate">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Interactive Visual Canvas (Neural, Stream, Cluster, Vector) */}
        <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-2xl glass-panel border theme-border-medium overflow-hidden shadow-2xl flex flex-col justify-between p-4 hud-bracket">
          
          {/* Top Canvas Telemetry Overlay */}
          <div className="flex items-center justify-between z-10 text-[10px] font-mono theme-text-subtle border-b theme-border-subtle pb-2">
            <span>LIVE SIMULATION // {activeRole.visualMode.toUpperCase()}</span>
            <span className="text-emerald-400 font-semibold">• 60 FPS ENGINE</span>
          </div>

          {/* The Dynamic Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

          {/* Bottom Canvas Telemetry Overlay */}
          <div className="z-10 text-[10px] font-mono theme-text-subtle pt-2 border-t theme-border-subtle flex items-center justify-between">
            <span>SRM IST · R&amp;D PIPELINE</span>
            <span style={{ color: activeRole.primaryColor }}>VERIFIED IN PROD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
