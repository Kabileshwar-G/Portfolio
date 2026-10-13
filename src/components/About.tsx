import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  Cpu, 
  Workflow, 
  Server, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Full-Stack & Distributed Systems',
      desc: 'React, Node.js, Spring Boot, Apache Kafka, Docker, and Kubernetes (Minikube).'
    },
    {
      icon: Cpu,
      title: 'Applied AI/ML & Deep Learning',
      desc: 'PyTorch, Graph Neural Networks (GNNs), transformers, and predictive modeling.'
    },
    {
      icon: Workflow,
      title: 'LLM, RAG & Agentic Systems',
      desc: 'LangChain, ChromaDB, vector search, prompt engineering, and autonomous agents.'
    },
    {
      icon: Layers,
      title: 'Empirical Research & Publications',
      desc: 'Intelligent solar energy management using LSTM forecasting and Deep Q-Networks (DQN) to IEEE standards.'
    }
  ];

  return (
    <section id="about" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="mb-14 scroll-reveal">
          <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-current" />
            Background & Education
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Biography strictly from Resume Profile (7 cols) */}
          <div className="lg:col-span-7 space-y-6 theme-text-muted text-sm sm:text-base leading-relaxed scroll-reveal-left">
            {personalInfo.bioParagraphs.map((para, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed">
                {para}
              </p>
            ))}

            {/* Core Tracks directly cited on Resume */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-panel border theme-border-subtle hover:theme-accent-border transition-all hud-bracket hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg theme-accent-bg theme-accent">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-sm sm:text-base theme-text-fg">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Card strictly from Resume (5 cols) */}
          <div className="lg:col-span-5 scroll-reveal-right delay-200">
            <div className="rounded-2xl glass-panel border theme-border-medium p-6 sm:p-8 shadow-2xl relative overflow-hidden hud-bracket beam-card">
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl theme-accent-bg theme-accent border theme-accent-border">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Official Resume Record
                </span>
              </div>

              <div className="mb-5">
                <span className="text-xs font-mono theme-accent font-medium">
                  Undergraduate Degree
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold theme-text-fg mt-1">
                  {personalInfo.education.degree}
                </h3>
                <p className="text-sm theme-accent font-mono mt-1 font-semibold">
                  Specialization: {personalInfo.education.specialization}
                </p>
                <p className="text-xs sm:text-sm theme-text-muted mt-1.5">
                  {personalInfo.education.institution} · {personalInfo.education.location}
                </p>
                <p className="text-xs font-mono theme-text-subtle mt-1">
                  Expected Graduation: {personalInfo.education.graduation}
                </p>
              </div>

              {/* Verified CGPA Details directly from Resume */}
              <div className="p-4 rounded-xl theme-card border theme-border-subtle mb-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono theme-text-muted">Overall CGPA:</span>
                  <span className="font-mono text-base font-bold theme-text-fg">
                    {personalInfo.education.cgpaOverall}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t theme-border-subtle pt-2.5">
                  <span className="text-xs sm:text-sm font-mono theme-text-muted">Recent Semester CGPA:</span>
                  <span className="font-mono text-base font-bold theme-accent">
                    {personalInfo.education.cgpaRecentSemester}
                  </span>
                </div>
              </div>

              {/* Coursework directly from Resume */}
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono theme-text-fg mb-2.5">
                  <BookOpen className="w-4 h-4 theme-accent" />
                  <span className="font-semibold">Verified Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono theme-card theme-text-muted border theme-border-subtle hover:theme-accent hover:border-theme-accent transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
