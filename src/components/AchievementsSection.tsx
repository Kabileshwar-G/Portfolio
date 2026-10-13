import React from 'react';
import { Trophy, Users } from 'lucide-react';
import { achievements } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-t border-border-subtle bg-bg-darker/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-gold-400" />
            Competitive Honors & Execution
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-fg">
            Achievements & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted mt-1 max-w-xl">
            National hackathon podium finishes, technical quiz leadership, and operational execution directing large-scale university hackathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const isAward = item.type === 'Competition Award';
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-bg-panel border border-border-medium hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                      isAward
                        ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30'
                        : 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                    }`}>
                      {item.type}
                    </span>
                    <div className="p-2 rounded-lg bg-bg-card text-gold-400 border border-border-subtle">
                      {isAward ? <Trophy className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-fg mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-gold-300/90 mb-3">
                    Venue: {item.organizer}
                  </div>

                  <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/60 flex flex-wrap gap-1.5">
                  {item.skillsHighlighted.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-bg-card text-fg-muted border border-border-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
