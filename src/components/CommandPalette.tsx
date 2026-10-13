import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, FileText, ArrowRight, Layers, Briefcase, GraduationCap, Code2, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';
import { THEME_REGISTRY } from '../context/ThemeContext';
import type { ThemeMode } from '../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenRecruiter: () => void;
}

interface SearchItem {
  id: string;
  category: 'Project' | 'Skill' | 'Experience' | 'Education' | 'Action' | 'Theme';
  title: string;
  subtitle: string;
  action: () => void;
  icon: React.FC<{ className?: string }>;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenRecruiter,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTheme, playUiSound } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      playUiSound('open');
    }
  }, [isOpen]);

  // Build searchable items strictly from resume data
  const allItems: SearchItem[] = [
    // Actions
    {
      id: 'act-resume',
      category: 'Action',
      title: 'Open Verified Resume PDF',
      subtitle: 'Official 2-page print & download preview',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-recruiter',
      category: 'Action',
      title: 'Open 30-Second Recruiter Brief',
      subtitle: 'Candidate highlights & hiring manager FAQ',
      icon: Sparkles,
      action: () => {
        onClose();
        onOpenRecruiter();
      },
    },
    // Themes
    ...Object.values(THEME_REGISTRY).map((meta) => ({
      id: `theme-${meta.id}`,
      category: 'Theme' as const,
      title: `Switch Theme: ${meta.name}`,
      subtitle: meta.tagline,
      icon: Palette,
      action: () => {
        setTheme(meta.id as ThemeMode);
        playUiSound('success');
        onClose();
      },
    })),
    // Projects (All 7 from resume)
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Project' as const,
      title: p.title,
      subtitle: `${p.tagline} · ${p.technologies.slice(0, 3).join(', ')}`,
      icon: Layers,
      action: () => {
        onClose();
        const el = document.getElementById('projects');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    // Experience (Innovate & EduSkills)
    ...experiences.map((exp) => ({
      id: `exp-${exp.id}`,
      category: 'Experience' as const,
      title: `${exp.role} @ ${exp.organization}`,
      subtitle: `${exp.period} · ${exp.location}`,
      icon: Briefcase,
      action: () => {
        onClose();
        const el = document.getElementById('experience');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    // Education
    {
      id: 'edu-srm',
      category: 'Education',
      title: 'B.Tech CSE (AI/ML) — SRM IST, Trichy',
      subtitle: 'CGPA: 8.02 / 10 (Recent: 8.6 / 10) · Expected May 2027',
      icon: GraduationCap,
      action: () => {
        onClose();
        const el = document.getElementById('about');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    // Skills categories
    ...skillCategories.map((sc) => ({
      id: `skill-${sc.id}`,
      category: 'Skill' as const,
      title: sc.name,
      subtitle: sc.skills.map((s) => s.name).slice(0, 4).join(', '),
      icon: Code2,
      action: () => {
        onClose();
        const el = document.getElementById('skills');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 10);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
        playUiSound('hover');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
        playUiSound('hover');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl theme-panel border theme-border-medium rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b theme-border-subtle">
          <Search className="w-5 h-5 theme-accent shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, experience, themes (or press Esc)..."
            className="w-full bg-transparent theme-text-fg placeholder:text-neutral-500 font-mono text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded theme-text-muted hover:theme-text-fg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 ml-2 text-[10px] font-mono rounded theme-card border theme-border-subtle theme-text-subtle">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto max-h-[60vh] space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center theme-text-muted font-mono text-xs">
              No matching verified records found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'theme-accent-bg border theme-accent-border theme-text-fg'
                      : 'hover:bg-white/[0.04] border border-transparent theme-text-muted'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? 'theme-accent bg-black/20'
                          : 'theme-card theme-text-subtle border theme-border-subtle'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-semibold text-sm theme-text-fg truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded theme-card border theme-border-subtle theme-text-subtle">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs font-mono theme-text-subtle truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'theme-accent translate-x-0.5' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Quick Footer Instructions */}
        <div className="px-4 py-2.5 bg-black/30 border-t theme-border-subtle flex items-center justify-between text-[11px] font-mono theme-text-subtle">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="hidden sm:inline">Spotlight Telemetry Quick Jump</span>
        </div>
      </div>
    </div>
  );
};
