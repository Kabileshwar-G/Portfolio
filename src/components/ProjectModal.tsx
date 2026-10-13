import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl theme-panel border theme-border-medium rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 theme-panel border-b theme-border-subtle">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium theme-accent-bg theme-accent border theme-accent-border">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold theme-text-fg">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono theme-accent mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg theme-text-muted hover:theme-text-fg hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm theme-text-muted">
          {/* Key Metrics from Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl theme-card border theme-border-subtle"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider theme-text-subtle">
                  {metric.label}
                </div>
                <div className="font-display text-xl font-bold theme-accent my-1">
                  {metric.value}
                </div>
                <div className="text-[11px] theme-text-muted leading-tight">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>

          {/* Key Contributions & Details directly from Resume */}
          <div>
            <h3 className="font-display font-bold text-base theme-text-fg flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 theme-accent" />
              Documented Implementation & Engineering Details
            </h3>
            <ul className="space-y-3">
              {project.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg theme-card border theme-border-subtle text-xs sm:text-sm leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full theme-accent mt-2 shrink-0 bg-current" />
                  <span className="theme-text-fg">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="font-display font-semibold text-xs font-mono uppercase tracking-wider theme-text-fg mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono theme-card theme-accent border theme-border-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between p-4 theme-panel border-t theme-border-subtle">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium theme-text-fg theme-card hover:theme-accent-border border theme-border-subtle transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#d4af37] dark:hover:bg-[#e6c253] font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
