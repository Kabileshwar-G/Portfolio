import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Zap
} from 'lucide-react';
import { researchWorks } from '../data/research';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export const ResearchSection: React.FC = () => {
  const { playUiSound } = useTheme();

  return (
    <section id="research" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="mb-14 scroll-reveal">
          <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-current" />
            Publications & Papers
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
            Research
          </h2>
          <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
            Academic research paper formatted to IEEE standards on intelligent solar energy management combining LSTM time-series forecasting with Deep Q-Network (DQN) reinforcement learning.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="space-y-8">
          {researchWorks.map((work) => (
            <div
              key={work.id}
              className="p-6 sm:p-10 rounded-2xl glass-panel border theme-border-medium hover:theme-accent-border transition-all hud-bracket beam-card shadow-2xl scroll-reveal-scale"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {work.type}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full theme-card theme-accent border theme-border-subtle">
                    {work.field}
                  </span>
                </div>
                <div className="text-xs font-mono theme-text-muted">
                  Authors: <span className="theme-text-fg font-bold">{work.authors.join(' · ')}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold theme-text-fg mb-3 leading-tight">
                {work.title}
              </h3>

              {/* Institution */}
              <p className="text-xs sm:text-sm font-mono theme-accent mb-6">
                {work.institution}
              </p>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {work.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl theme-card border theme-border-subtle">
                    <div className="text-[10px] font-mono theme-text-subtle uppercase mb-1">
                      {m.label}
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold theme-accent">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Abstract */}
              <div className="p-5 rounded-xl theme-card border theme-border-subtle mb-6">
                <div className="text-xs font-mono theme-accent font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Abstract
                </div>
                <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                  {work.abstract}
                </p>
              </div>

              {/* Key Methodological Contributions */}
              <div className="mb-6">
                <div className="text-xs font-mono theme-text-subtle uppercase tracking-wider mb-3">
                  Core Contributions & Innovations
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {work.contributions.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl theme-card border theme-border-subtle text-xs sm:text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 theme-accent shrink-0 mt-0.5" />
                      <span className="theme-text-fg leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Index Terms / Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t theme-border-subtle mb-6">
                <span className="text-[11px] font-mono theme-text-subtle mr-2">Index Terms:</span>
                {work.keywords.map((kw, kIdx) => (
                  <span
                    key={kIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono theme-card border theme-border-subtle theme-text-muted"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="flex items-center gap-3">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound('click')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium theme-text-fg theme-card hover:theme-accent-border border theme-border-subtle transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository & Paper Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
