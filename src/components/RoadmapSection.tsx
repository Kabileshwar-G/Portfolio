import React from 'react';
import { explorationRoadmap } from '../data/achievements';

export const RoadmapSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-border-subtle bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-gold-400" />
            Continuous Technical Growth
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-fg">
            Currently Exploring & Engineering Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted mt-1 max-w-xl">
            Active exploration domains and research interests currently being prototyped. Clearly distinguished from established production proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {explorationRoadmap.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-bg-panel border border-border-subtle hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                  <span className="text-[10px] font-mono text-gold-400/80 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                    Active Learning
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-fg mb-1">
                  {item.domain}
                </h3>
                <div className="text-xs font-mono text-gold-300 mb-2">
                  Focus: {item.focus}
                </div>
                <p className="text-xs text-fg-muted leading-relaxed mb-4">
                  {item.objective}
                </p>
              </div>

              <div className="pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1">
                {item.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-bg-card text-fg-subtle border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
