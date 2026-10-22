import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { experiences } from '../data/experience';
import { TimeMachineChrono } from './TimeMachineChrono';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="mb-14 scroll-reveal">
          <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-current" />
            Work History &amp; Chronology
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
            Experience &amp; Milestones
          </h2>
          <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
            Hands-on AI/ML engineering experience, distributed systems research, and academic leadership spanning 2023 to 2027.
          </p>
        </div>

        {/* Scene 03: The Time Machine Radial Astrolabe */}
        <div className="scroll-reveal delay-100">
          <TimeMachineChrono />
        </div>

        {/* Formal Roles Header */}
        <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-6">
          <span className="w-4 h-[1px] bg-current" />
          Industry Engagements
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl glass-panel border theme-border-medium hover:theme-accent-border transition-all shadow-xl hud-bracket beam-card flex flex-col justify-between scroll-reveal-scale"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold theme-text-fg">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full theme-accent-bg theme-accent border theme-accent-border font-semibold">
                        Internship
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-mono theme-accent font-semibold flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono theme-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 theme-accent" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 theme-text-subtle" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights directly from Resume */}
                <ul className="space-y-3 mt-4">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm theme-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed theme-text-fg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
