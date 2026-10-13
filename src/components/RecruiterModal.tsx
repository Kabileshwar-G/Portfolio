import React, { useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { projects } from '../data/projects';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl theme-panel border theme-border-medium rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 theme-panel border-b theme-border-subtle">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium theme-accent-bg theme-accent border theme-accent-border mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resume-Verified Recruiter Summary</span>
            </div>
            <h2 className="font-display text-2xl font-bold theme-text-fg">
              Recruiter Brief: Kabileshwar G
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg theme-text-muted hover:theme-text-fg hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Close recruiter brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content answering key questions based strictly on resume */}
        <div className="p-6 space-y-5 text-xs sm:text-sm theme-text-muted">
          {/* Profile Overview */}
          <div className="p-4 rounded-xl theme-card border theme-border-subtle">
            <h3 className="font-mono theme-accent uppercase tracking-wider text-xs font-semibold mb-1">
              1. Candidate Profile
            </h3>
            <p className="theme-text-fg leading-relaxed">
              <strong>Kabileshwar G</strong> — B.Tech Computer Science & Engineering (Specialization: AI/ML) at <strong>SRM Institute of Science and Technology</strong>, Trichy (Expected May 2027). Current CGPA: <strong>8.02 / 10</strong> (Recent semester: <strong>8.6 / 10</strong>).
            </p>
          </div>

          {/* Core Tracks & Technologies from Resume */}
          <div className="p-4 rounded-xl theme-card border theme-border-subtle">
            <h3 className="font-mono theme-accent uppercase tracking-wider text-xs font-semibold mb-1">
              2. Core Technical Tracks & Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
              <div>
                <span className="theme-text-subtle block">Full-Stack & Distributed:</span>
                <span className="theme-text-fg">React, Node.js, Spring Boot, Kafka, Redis, Docker, Kubernetes</span>
              </div>
              <div>
                <span className="theme-text-subtle block">Applied AI/ML & Research:</span>
                <span className="theme-text-fg">PyTorch, GNNs, RAG (ChromaDB, LangChain), Multi-Agent RL</span>
              </div>
            </div>
          </div>

          {/* 7 Projects from Resume */}
          <div className="p-4 rounded-xl theme-card border theme-border-subtle">
            <h3 className="font-mono theme-accent uppercase tracking-wider text-xs font-semibold mb-2">
              3. Seven Independent Projects
            </h3>
            <div className="space-y-1.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-2 rounded theme-panel border theme-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div>
                    <span className="font-display font-bold theme-text-fg">{proj.title}</span>
                    <span className="text-[11px] font-mono theme-text-subtle block sm:inline sm:ml-2">
                      — {proj.tagline}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono theme-accent">
                    {proj.metrics[0]?.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Research from Resume */}
          <div className="p-4 rounded-xl theme-card border theme-border-subtle">
            <h3 className="font-mono theme-accent uppercase tracking-wider text-xs font-semibold mb-2">
              4. Documented Internships & Research
            </h3>
            <ul className="space-y-1.5 text-xs theme-text-muted font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="theme-text-fg">AI & Machine Learning Intern @ Innovate (+15% accuracy on 10k+ simulated records)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="theme-text-fg">AI-ML Intern @ EduSkills (3 models end-to-end, ~85% accuracy, 25% faster training)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="theme-text-fg">Research Preprint: Autonomous Medical Resource Allocation via Multi-Agent RL (IEEE standard)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 p-4 theme-panel border-t theme-border-subtle">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#d4af37] dark:hover:bg-[#e6c253] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Resume PDF</span>
          </button>

          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="text-xs font-mono theme-accent hover:underline flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email: {personalInfo.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
