import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme, THEME_REGISTRY } from '../context/ThemeContext';
import type { ThemeMode } from '../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme, playUiSound, dockPosition } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const themeList = Object.values(THEME_REGISTRY);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen(!open);
          playUiSound('click');
        }}
        className="cyber-tech-notch flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer glass-panel border theme-border-subtle hover:theme-accent-border theme-text-fg shadow-sm group"
        title="Change Theme (6 Simple Modes)"
        aria-label="Change theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm group-hover:scale-125 transition-transform"
          style={{ backgroundColor: THEME_REGISTRY[theme].accentHex }}
        />
        <Palette className="w-3.5 h-3.5 theme-accent" />
        <span className="hidden lg:inline font-mono text-[11px]">
          {THEME_REGISTRY[theme].name}
        </span>
      </button>

      {open && (
        <div 
          className={`absolute z-50 w-64 rounded-2xl glass-panel border theme-border-medium shadow-2xl p-2 animate-in fade-in duration-150 backdrop-blur-2xl ${
            dockPosition === 'side'
              ? 'left-full ml-3.5 bottom-0 slide-in-from-left-2'
              : 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mt-2 slide-in-from-top-2'
          }`}
        >
          <div className="px-3 py-1.5 text-[10px] font-mono theme-text-subtle uppercase tracking-wider border-b theme-border-subtle mb-1 flex items-center justify-between">
            <span>Visual Themes</span>
            <span className="theme-accent font-semibold">6 Modes</span>
          </div>

          <div className="space-y-1">
            {themeList.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id as ThemeMode);
                    playUiSound('success');
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'theme-accent theme-accent-bg font-semibold border theme-accent-border'
                      : 'theme-text-muted hover:theme-text-fg hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: t.accentHex }}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black/60" />}
                    </div>
                    <div className="truncate">
                      <div className="font-semibold text-xs leading-none truncate">{t.name}</div>
                      <div className="text-[10px] theme-text-subtle font-mono truncate mt-0.5">{t.tagline}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 theme-accent shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
