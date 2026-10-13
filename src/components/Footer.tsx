import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { playUiSound } = useTheme();

  const scrollToTop = () => {
    playUiSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 pb-24 md:pb-12 border-t theme-border-subtle theme-bg text-xs font-mono theme-text-muted relative z-10">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm sm:text-base theme-text-fg tracking-tight">
              {personalInfo.name}
            </span>
            <span className="opacity-30">|</span>
            <span>SRM CSE (AI/ML) · Class of 2027</span>
          </div>
          <div className="text-[11px] theme-text-subtle mt-1">
            © {currentYear} Kabileshwar G. Verified strictly against official resume.
          </div>
        </div>

        {/* Links & Return to top */}
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playUiSound('click')}
            className="hover:theme-accent transition-colors"
          >
            GitHub
          </a>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playUiSound('click')}
            className="hover:theme-accent transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${personalInfo.contact.email}`}
            onClick={() => playUiSound('click')}
            className="hover:theme-accent transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel border theme-border-subtle hover:theme-accent-border theme-text-fg hover:theme-accent transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
