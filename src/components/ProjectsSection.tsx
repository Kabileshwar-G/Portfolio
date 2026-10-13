import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Star
} from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playUiSound } = useTheme();

  const filters = [
    { id: 'all', label: `All 4 Systems` },
    { id: 'Deep Learning & RL', label: 'Solar RL & Forecasting' },
    { id: 'Distributed Systems & AI/ML', label: 'Distributed & AI/ML' },
    { id: 'Generative AI & RAG', label: 'GenAI & RAG' },
    { id: 'Cloud & MLOps', label: 'Cloud & MLOps' },
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 scroll-reveal">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-current" />
              Featured Work
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
              Projects ({projects.length})
            </h2>
            <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
              Four flagship engineering and applied AI systems spanning deep reinforcement learning, distributed streaming microservices, graph neural networks, and enterprise RAG.
            </p>
          </div>

          <div className="text-xs font-mono theme-text-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full theme-accent animate-ping" />
            <span>Click any project card for deep case-study view</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth scroll-reveal delay-100">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id);
                playUiSound('click');
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'theme-accent theme-accent-bg border theme-accent-border font-semibold shadow-sm'
                  : 'glass-panel theme-text-muted hover:theme-text-fg border theme-border-subtle hover:theme-border-medium'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Responsive Projects Grid: 1 col on mobile, 2 cols on iPad/tablets, 3 cols on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hud-bracket beam-card hover:-translate-y-1 hover:shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
                project.isFlagship
                  ? 'theme-border-medium hover:theme-accent-border'
                  : 'theme-border-subtle hover:theme-border-medium'
              }`}
              onClick={() => {
                playUiSound('open');
                setSelectedProject(project);
              }}
            >
              {/* Flagship accent line */}
              {project.isFlagship && (
                <div className="h-1 w-full bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold)] to-transparent opacity-80" />
              )}

              <div className="p-6 sm:p-7">
                {/* Meta Header */}
                <div className="flex items-start justify-between gap-2 mb-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full theme-card theme-accent border theme-accent-border font-medium">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>

                  {project.isFlagship && (
                    <span className="flex items-center gap-1 text-[10px] font-mono theme-accent theme-accent-bg px-2 py-0.5 rounded-full border theme-accent-border shrink-0 font-semibold">
                      <Star className="w-3 h-3 fill-current" /> Flagship
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold theme-text-fg group-hover:theme-accent transition-colors flex items-center justify-between mb-1">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 theme-text-subtle group-hover:theme-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </h3>
                <p className="text-xs sm:text-sm font-mono theme-accent opacity-90 mb-4 font-medium">
                  {project.tagline}
                </p>

                {/* Bullets directly from Resume */}
                <div className="space-y-2 mb-5">
                  {project.bullets.map((bullet, bIdx) => (
                    <p key={bIdx} className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                      • {bullet}
                    </p>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl theme-card border theme-border-subtle mb-5">
                  {project.metrics.slice(0, 3).map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[10px] font-mono theme-text-subtle truncate">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold theme-accent">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono theme-card theme-text-muted border theme-border-subtle hover:theme-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div 
                className="px-6 sm:px-7 py-3.5 border-t theme-border-subtle theme-card flex items-center justify-between text-xs font-mono"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    playUiSound('open');
                    setSelectedProject(project);
                  }}
                  className="theme-accent font-semibold hover:underline cursor-pointer"
                >
                  View Details →
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound('click')}
                  className="flex items-center gap-1.5 theme-text-muted hover:theme-text-fg transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
