import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Menu, 
  X 
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  onOpenRecruiter: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRecruiter,
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'research',
        'certifications',
        'contact'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'theme-bg-darker/95 backdrop-blur-md border-b theme-border-subtle shadow-panel py-3'
          : 'theme-bg-darker/80 backdrop-blur-sm py-4 border-b theme-border-subtle'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 rounded-lg theme-panel border theme-border-medium flex items-center justify-center group-hover:theme-accent-border transition-colors">
            <span className="font-mono theme-accent font-bold text-sm tracking-tighter">KG</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight theme-text-fg text-base sm:text-lg group-hover:theme-accent transition-colors">
                {personalInfo.name}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono theme-accent-bg theme-accent border theme-accent-border">
                SRM '27
              </span>
            </div>
            <p className="text-[11px] font-mono theme-text-muted hidden md:block">
              Full-Stack & AI/ML Researcher
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'theme-accent theme-accent-bg border theme-accent-border'
                    : 'theme-text-muted hover:theme-text-fg hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="flex items-center gap-2">
          {/* Theme Selector */}
          <ThemeSelector />

          {/* 30s Recruiter Quick Summary */}
          <button
            onClick={onOpenRecruiter}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono font-medium theme-accent theme-accent-bg border theme-accent-border hover:opacity-90 transition-all cursor-pointer shadow-sm"
            title="Open 30-Second Recruiter Summary"
          >
            <Sparkles className="w-3.5 h-3.5 theme-accent" />
            <span>Recruiter View</span>
          </button>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#d4af37] dark:hover:bg-[#e6c253] transition-colors font-mono cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Tablet & Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md theme-text-muted hover:theme-text-fg hover:bg-white/[0.05]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden theme-panel border-b theme-border-subtle px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-3 border-b theme-border-subtle">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-xs font-medium ${
                  activeSection === link.id
                    ? 'theme-accent theme-accent-bg'
                    : 'theme-text-muted hover:theme-text-fg'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-1 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiter();
              }}
              className="flex items-center justify-center gap-2 flex-1 py-2 rounded-md text-xs font-mono theme-accent theme-accent-bg border theme-accent-border"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>30-Sec Recruiter Summary</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
