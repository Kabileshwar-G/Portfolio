import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { certifications } from '../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="mb-14 scroll-reveal">
          <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-current" />
            Certifications & Training
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
            Certifications
          </h2>
          <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
            Technical certifications and specialized workshops in artificial intelligence, cloud architectures, and machine learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 rounded-2xl glass-panel border theme-border-medium hover:theme-accent-border transition-all flex flex-col justify-between hud-bracket beam-card shadow-lg hover:-translate-y-1 scroll-reveal-scale"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg theme-accent-bg theme-accent">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full theme-accent-bg theme-accent border theme-accent-border font-semibold">
                      Verified Credential
                    </span>
                  </div>
                  <span className="text-xs font-mono theme-text-subtle flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl theme-text-fg mb-2">
                  {cert.name}
                </h3>
                <div className="text-xs sm:text-sm font-mono theme-accent font-semibold">
                  Issuing Organization: {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
