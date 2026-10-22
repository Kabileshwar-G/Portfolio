import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { useTheme } from '../context/ThemeContext';
import { TechUniverse3D } from './TechUniverse3D';
import { RoleCinematicStage } from './RoleCinematicStage';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { playUiSound } = useTheme();

  const filterTabs = [
    { id: 'all', label: 'All 15 Categories' },
    { id: 'languages', label: 'Languages' },
    { id: 'core-cs', label: 'Core CS' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend-apis', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases' },
    { id: 'math-stats', label: 'Math & Stats' },
    { id: 'data-processing', label: 'Data & EDA' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'deep-learning', label: 'Deep Learning' },
    { id: 'nlp-time-series', label: 'NLP & Time Series' },
    { id: 'llm-rag-agentic', label: 'LLM, RAG & Agents' },
    { id: 'multimodal-safety', label: 'Multimodal & Safety' },
    { id: 'streaming-distributed', label: 'Streaming & Distributed' },
    { id: 'mlops-devops-cloud', label: 'MLOps, DevOps & Cloud' },
    { id: 'tools-environments', label: 'Tools & Environments' },
  ];

  const filteredCategories = useMemo(() => {
    let list = skillCategories;

    if (selectedCategory !== 'all') {
      list = list.filter((cat) => cat.id === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list
        .map((cat) => {
          const matchingSkills = cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              (s.detail && s.detail.toLowerCase().includes(q))
          );
          if (
            cat.name.toLowerCase().includes(q) ||
            cat.description.toLowerCase().includes(q) ||
            matchingSkills.length > 0
          ) {
            return {
              ...cat,
              skills: matchingSkills.length > 0 ? matchingSkills : cat.skills
            };
          }
          return null;
        })
        .filter(Boolean) as SkillCategory[];
    }

    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 scroll-reveal">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-current" />
              Core Competencies
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
              Technical Skills
            </h2>
            <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
              Technical skills across 15 categories covering full-stack software development, distributed architectures, and AI/ML systems.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 theme-text-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Kafka, PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 glass-panel border theme-border-subtle rounded-xl text-xs font-mono theme-text-fg placeholder:theme-text-subtle focus:outline-none focus:theme-accent-border transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono theme-text-subtle hover:theme-text-fg"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Scene 02: 3D Perspective Tech Universe */}
        <div className="scroll-reveal delay-100">
          <TechUniverse3D onSelectTech={(name) => setSearchQuery(name.split('/')[0].trim())} />
        </div>

        {/* Scene 02.B: Role-Based Cinematic Staging & Visual Simulations */}
        <div className="scroll-reveal delay-150">
          <RoleCinematicStage />
        </div>

        {/* Master Catalog Header */}
        <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-4">
          <span className="w-4 h-[1px] bg-current" />
          Master Technical Inventory &amp; Categorical Index
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth scroll-reveal delay-100">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedCategory(tab.id);
                playUiSound('click');
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'theme-accent theme-accent-bg border theme-accent-border font-semibold shadow-sm'
                  : 'glass-panel theme-text-muted hover:theme-text-fg border theme-border-subtle hover:theme-border-medium'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid (up to 4 cols on extra wide monitors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl glass-panel border theme-border-subtle hover:theme-accent-border transition-all p-5 sm:p-6 flex flex-col justify-between hud-bracket hover:-translate-y-1 shadow-lg animate-in fade-in zoom-in-95 duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-base sm:text-lg theme-text-fg">
                    {category.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full theme-card theme-text-muted border theme-border-subtle">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs theme-text-muted mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => {
                    const isHighlighted = skill.highlight;
                    return (
                      <div
                        key={sIdx}
                        className={`group relative px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                          isHighlighted
                            ? 'theme-accent-bg theme-accent border theme-accent-border hover:opacity-90 font-medium shadow-sm'
                            : 'theme-card theme-text-muted hover:theme-text-fg border theme-border-subtle'
                        }`}
                        title={skill.detail}
                      >
                        <span className="flex items-center gap-1.5">
                          {skill.name}
                          {isHighlighted && (
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {category.skills.some((s) => s.detail) && (
                <div className="mt-4 pt-3 border-t theme-border-subtle text-[11px] theme-text-subtle font-mono">
                  <span className="theme-accent font-semibold">Scope:</span>{' '}
                  {category.skills.find((s) => s.highlight)?.detail || category.skills[0]?.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 rounded-2xl glass-panel border theme-border-subtle">
            <p className="text-sm theme-text-muted font-mono">
              No verified skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                playUiSound('click');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-mono theme-accent theme-accent-bg border theme-accent-border cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
