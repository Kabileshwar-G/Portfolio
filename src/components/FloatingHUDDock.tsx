import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Cpu, 
  Layers, 
  Briefcase, 
  BookOpen, 
  Award, 
  Mail, 
  Search, 
  FileText, 
  Volume2, 
  VolumeX, 
  MoveHorizontal, 
  MoveVertical,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeSelector } from './ThemeSelector';

interface FloatingHUDDockProps {
  onOpenRecruiter: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const FloatingHUDDock: React.FC<FloatingHUDDockProps> = ({
  onOpenRecruiter,
  onOpenResume,
  onOpenCommandPalette,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { dockPosition, toggleDockPosition, soundEnabled, toggleSound, playUiSound } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', badge: '01', icon: Home },
    { id: 'about', label: 'About', badge: '02', icon: User },
    { id: 'skills', label: 'Skills', badge: '03', icon: Cpu },
    { id: 'projects', label: 'Projects', badge: '04', icon: Layers },
    { id: 'experience', label: 'Experience', badge: '05', icon: Briefcase },
    { id: 'research', label: 'Research', badge: '06', icon: BookOpen },
    { id: 'certifications', label: 'Certifications', badge: '07', icon: Award },
    { id: 'contact', label: 'Contact', badge: '08', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDocHeight > 0 ? (scrollY / totalDocHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'research', 'certifications', 'contact'];
      const scrollPos = scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    playUiSound('click');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileExpanded(false);
    }
  };

  return (
    <>
      {/* Top Glowing Laser Scroll Progress Line */}
      <div 
        className="scroll-progress-line pointer-events-none" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* ======================================================== */}
      {/* DESKTOP & TABLET FLOATING DOCK (Without Enclosing Box)   */}
      {/* Floating Standalone Buttons with Smooth Hover-to-Zoom   */}
      {/* ======================================================== */}
      <aside
        aria-label="Navigation Command Rail"
        className={`hidden md:flex fixed z-40 transition-all duration-500 ease-out pointer-events-none ${
          dockPosition === 'top'
            ? 'top-4 left-1/2 -translate-x-1/2 flex-row'
            : 'left-4 lg:left-6 top-1/2 -translate-y-1/2 flex-col'
        }`}
      >
        {/* Container has NO boundary box or background - each button floats freely */}
        <div
          className={`flex pointer-events-auto transition-all duration-300 ${
            dockPosition === 'top' 
              ? 'flex-row items-center gap-2.5' 
              : 'flex-col items-center gap-2.5'
          }`}
        >
          {/* Top Brand Core: Standalone Floating Badge with Zoom */}
          <button
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => playUiSound('hover')}
            className={`flex items-center justify-center p-2.5 rounded-2xl glass-panel border theme-border-medium backdrop-blur-xl shadow-xl transition-all duration-300 ease-out cursor-pointer hover:scale-125 hover:shadow-[0_0_24px_var(--accent-glow)] hover:theme-accent-border group ${
              dockPosition === 'top' ? 'px-3.5 h-10' : 'w-11 h-11'
            }`}
            title="Kabileshwar G — Portfolio Home"
          >
            <div className="flex items-center gap-1.5 font-mono font-bold text-xs theme-accent group-hover:scale-110 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full theme-accent animate-ping" />
              <span>KG</span>
              {dockPosition === 'top' && (
                <span className="text-[10px] theme-text-subtle ml-1 font-normal">
                  {Math.round(scrollProgress)}%
                </span>
              )}
            </div>
          </button>

          {/* Standalone Section Navigation Buttons with Hover-to-Zoom */}
          <nav className={`flex items-center gap-2 ${dockPosition === 'top' ? 'flex-row' : 'flex-col'}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => {
                      setHoveredItem(item.id);
                      playUiSound('hover');
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative flex items-center justify-center rounded-2xl glass-panel border backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer group hover:scale-130 hover:z-50 hover:shadow-[0_0_24px_var(--accent-glow)] hover:theme-accent-border ${
                      dockPosition === 'top' ? 'px-3.5 h-10 gap-2' : 'w-11 h-11'
                    } ${
                      isActive
                        ? 'theme-accent theme-accent-bg border theme-accent-border font-bold shadow-[0_0_16px_var(--accent-glow)] scale-110'
                        : 'theme-border-subtle theme-text-muted hover:theme-text-fg shadow-md'
                    }`}
                    title={item.label}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-120 ${
                      isActive ? 'theme-accent scale-110' : 'theme-text-muted group-hover:theme-accent'
                    }`} />
                    
                    {/* Active pulse dot on edge */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full theme-accent shadow-sm animate-pulse" />
                    )}

                    {/* Label for top deck mode */}
                    {dockPosition === 'top' && (
                      <span className="hidden lg:inline text-xs font-mono font-medium">
                        {item.label}
                      </span>
                    )}
                  </button>

                  {/* Smooth Animated Tooltip on Hover (Side Mode) */}
                  {dockPosition === 'side' && isHovered && (
                    <div className="absolute left-full ml-3.5 top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
                      <div className="px-3 py-1.5 rounded-xl glass-panel border theme-border-medium backdrop-blur-2xl shadow-2xl text-xs font-mono whitespace-nowrap flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full theme-accent animate-ping" />
                        <span className="font-bold theme-text-fg">{item.label}</span>
                        <span className="text-[10px] theme-accent opacity-80">#{item.badge}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Standalone Utility Tools (No Box) with Hover-to-Zoom */}
          <div className={`flex items-center gap-2 ${dockPosition === 'top' ? 'flex-row ml-1' : 'flex-col mt-1'}`}>
            {/* Quick Spotlight Search */}
            <button
              onClick={() => {
                playUiSound('open');
                onOpenCommandPalette();
              }}
              onMouseEnter={() => playUiSound('hover')}
              className="w-11 h-11 flex items-center justify-center rounded-2xl glass-panel border theme-border-subtle shadow-md backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer hover:scale-130 hover:theme-accent-border hover:shadow-[0_0_20px_var(--accent-glow)] group"
              title="Search Portfolio (Ctrl + K)"
              aria-label="Search portfolio"
            >
              <Search className="w-4 h-4 theme-text-muted group-hover:theme-accent transition-transform duration-300 group-hover:scale-120" />
            </button>

            {/* Themes Selector Dropdown */}
            <ThemeSelector />

            {/* Recruiter 30-Sec Summary */}
            <button
              onClick={() => {
                playUiSound('open');
                onOpenRecruiter();
              }}
              onMouseEnter={() => playUiSound('hover')}
              className="w-11 h-11 flex items-center justify-center rounded-2xl glass-panel border theme-border-subtle shadow-md backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer hover:scale-130 hover:theme-accent-border hover:shadow-[0_0_20px_var(--accent-glow)] group"
              title="30-Second Candidate Summary"
              aria-label="Candidate Summary"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:scale-120 transition-transform duration-300" />
            </button>

            {/* Resume PDF Action Button */}
            <button
              onClick={() => {
                playUiSound('open');
                onOpenResume();
              }}
              onMouseEnter={() => playUiSound('hover')}
              className={`flex items-center justify-center gap-1 rounded-2xl glass-panel border theme-accent-border theme-accent-bg font-mono font-semibold text-xs theme-accent shadow-md backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer hover:scale-130 hover:shadow-[0_0_24px_var(--accent-glow)] group ${
                dockPosition === 'top' ? 'px-3.5 h-10' : 'w-11 h-11'
              }`}
              title="View Resume PDF"
            >
              <FileText className="w-4 h-4 group-hover:scale-120 transition-transform duration-300" />
              {dockPosition === 'top' && <span>Resume</span>}
            </button>

            {/* Sound FX Toggle Button */}
            <button
              onClick={() => {
                toggleSound();
                playUiSound('click');
              }}
              onMouseEnter={() => playUiSound('hover')}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl glass-panel border backdrop-blur-xl shadow-md transition-all duration-300 ease-out cursor-pointer hover:scale-130 hover:theme-accent-border hover:shadow-[0_0_20px_var(--accent-glow)] group ${
                soundEnabled
                  ? 'theme-border-medium theme-accent'
                  : 'theme-border-subtle theme-text-subtle'
              }`}
              title={soundEnabled ? 'Disable UI Sound Effects' : 'Enable High-Tech UI Audio'}
              aria-label="Toggle UI Audio"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 theme-accent group-hover:scale-120 transition-transform duration-300" />
              ) : (
                <VolumeX className="w-4 h-4 theme-text-subtle group-hover:scale-120 transition-transform duration-300" />
              )}
            </button>

            {/* Dock Position Orientation Switcher */}
            <button
              onClick={() => {
                toggleDockPosition();
                playUiSound('click');
              }}
              onMouseEnter={() => playUiSound('hover')}
              className="w-11 h-11 flex items-center justify-center rounded-2xl glass-panel border theme-border-subtle shadow-md backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer hover:scale-130 hover:theme-accent-border hover:shadow-[0_0_20px_var(--accent-glow)] group"
              title={dockPosition === 'top' ? 'Move to Left Side' : 'Move to Top Header'}
              aria-label="Toggle Dock Position"
            >
              {dockPosition === 'top' ? (
                <MoveVertical className="w-4 h-4 theme-text-subtle group-hover:theme-accent transition-transform duration-300 group-hover:scale-120" />
              ) : (
                <MoveHorizontal className="w-4 h-4 theme-text-subtle group-hover:theme-accent transition-transform duration-300 group-hover:scale-120" />
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* ======================================================== */}
      {/* MOBILE FLOATING DOCK                                     */}
      {/* ======================================================== */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="flex items-center justify-between p-2 rounded-2xl glass-panel border theme-border-medium shadow-2xl backdrop-blur-2xl">
          {/* Brand & Section Indicator */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl theme-accent-bg border theme-accent-border font-mono font-bold text-xs theme-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full theme-accent animate-ping" />
            <span>KG</span>
          </button>

          {/* Quick Primary Jumps */}
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                activeSection === 'projects'
                  ? 'theme-accent theme-accent-bg font-bold'
                  : 'theme-text-muted hover:theme-text-fg'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                activeSection === 'skills'
                  ? 'theme-accent theme-accent-bg font-bold'
                  : 'theme-text-muted hover:theme-text-fg'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'theme-accent theme-accent-bg font-bold'
                  : 'theme-text-muted hover:theme-text-fg'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Quick Resume & Search Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                playUiSound('open');
                onOpenResume();
              }}
              className="px-3 py-1.5 rounded-xl font-mono text-xs font-bold theme-accent theme-accent-bg border theme-accent-border"
            >
              Resume
            </button>

            <button
              onClick={() => setMobileExpanded(!mobileExpanded)}
              className="p-2 text-xs theme-text-muted hover:theme-text-fg"
              aria-label="Toggle menu"
            >
              {mobileExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Expanded Drawer */}
        {mobileExpanded && (
          <div className="mt-2 p-3 rounded-2xl glass-panel border theme-border-medium backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'theme-accent theme-accent-bg font-bold border theme-accent-border'
                      : 'theme-text-muted hover:theme-text-fg hover:bg-white/[0.05]'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-3 pt-3 border-t theme-border-subtle flex items-center justify-between">
              <ThemeSelector />
              <button
                onClick={() => {
                  toggleSound();
                  playUiSound('click');
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono theme-text-muted hover:theme-text-fg"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 theme-accent" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>Sound: {soundEnabled ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
