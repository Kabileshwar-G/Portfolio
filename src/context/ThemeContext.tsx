import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light' | 'navy' | 'synthwave' | 'emerald' | 'crimson';

export interface ThemeMeta {
  id: ThemeMode;
  name: string;
  tagline: string;
  accentHex: string;
  bgHex: string;
  secondaryHex: string;
  isDark: boolean;
}

export const THEME_REGISTRY: Record<ThemeMode, ThemeMeta> = {
  dark: {
    id: 'dark',
    name: 'Midnight Blue',
    tagline: 'Deep midnight blue with gold & copper accents',
    accentHex: '#e5a93b',
    bgHex: '#020611',
    secondaryHex: '#d97757',
    isDark: true
  },
  navy: {
    id: 'navy',
    name: 'Cyber Navy',
    tagline: 'Dark navy with electric cyan & gold',
    accentHex: '#00f0ff',
    bgHex: '#010514',
    secondaryHex: '#f59e0b',
    isDark: true
  },
  synthwave: {
    id: 'synthwave',
    name: 'Neon Purple',
    tagline: 'Deep violet with vibrant pink & copper',
    accentHex: '#f43f5e',
    bgHex: '#070212',
    secondaryHex: '#fb923c',
    isDark: true
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Green',
    tagline: 'Dark pine with emerald & gold',
    accentHex: '#10b981',
    bgHex: '#010905',
    secondaryHex: '#facc15',
    isDark: true
  },
  crimson: {
    id: 'crimson',
    name: 'Crimson Red',
    tagline: 'Dark charcoal with crimson & warm orange',
    accentHex: '#ef4444',
    bgHex: '#080205',
    secondaryHex: '#ea580c',
    isDark: true
  },
  light: {
    id: 'light',
    name: 'Clean Light',
    tagline: 'Bright slate with warm bronze accents',
    accentHex: '#b45309',
    bgHex: '#f4f7fb',
    secondaryHex: '#c2410c',
    isDark: false
  }
};

interface ThemeContextType {
  theme: ThemeMode;
  themeMeta: ThemeMeta;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
  dockPosition: 'top' | 'side';
  setDockPosition: (pos: 'top' | 'side') => void;
  toggleDockPosition: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  playUiSound: (type?: 'click' | 'hover' | 'open' | 'success') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('kg-portfolio-theme') as ThemeMode;
    return saved && Object.keys(THEME_REGISTRY).includes(saved) ? saved : 'dark';
  });

  const [dockPosition, setDockPositionState] = useState<'top' | 'side'>(() => {
    const saved = localStorage.getItem('kg-dock-position') as 'top' | 'side';
    return saved === 'side' ? 'side' : 'top';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    return localStorage.getItem('kg-sound-enabled') === 'true';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('kg-portfolio-theme', newTheme);
  };

  const setDockPosition = (pos: 'top' | 'side') => {
    setDockPositionState(pos);
    localStorage.setItem('kg-dock-position', pos);
  };

  const toggleDockPosition = () => {
    setDockPosition(dockPosition === 'top' ? 'side' : 'top');
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    localStorage.setItem('kg-sound-enabled', enabled ? 'true' : 'false');
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const cycleTheme = () => {
    const keys = Object.keys(THEME_REGISTRY) as ThemeMode[];
    const currentIndex = keys.indexOf(theme);
    const nextTheme = keys[(currentIndex + 1) % keys.length];
    setTheme(nextTheme);
  };

  // High-tech sound effects synthesized cleanly using Web Audio API (zero audio files needed)
  const playUiSound = (type: 'click' | 'hover' | 'open' | 'success' = 'click') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'hover') {
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(680, now + 0.04);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'click') {
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'open') {
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(950, now + 0.08);
        gain.gain.setValueAtTime(0.035, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.06);
        osc.frequency.setValueAtTime(783.99, now + 0.12);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch {
      // Audio context silenced or blocked by user gesture policy
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeClasses = ['theme-dark', 'theme-light', 'theme-navy', 'theme-synthwave', 'theme-emerald', 'theme-crimson', 'dark'];
    root.classList.remove(...themeClasses);
    root.setAttribute('data-theme', theme);

    root.classList.add(`theme-${theme}`);
    if (THEME_REGISTRY[theme].isDark) {
      root.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      themeMeta: THEME_REGISTRY[theme],
      setTheme,
      cycleTheme,
      dockPosition,
      setDockPosition,
      toggleDockPosition,
      soundEnabled,
      setSoundEnabled,
      toggleSound,
      playUiSound
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
