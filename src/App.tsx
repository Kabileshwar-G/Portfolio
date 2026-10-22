import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CyberBackground } from './components/CyberBackground';
import { CinematicFilmGrain } from './components/CinematicFilmGrain';
import { FloatingHUDDock } from './components/FloatingHUDDock';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResearchSection } from './components/ResearchSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export const AppContent: React.FC = () => {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Initialize scroll animation observer & progress tracking
  useScrollAnimation();

  // Global keyboard shortcut: Ctrl+K / Cmd+K to launch spotlight search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen theme-bg theme-text-fg selection:bg-amber-500/20 selection:text-amber-500 relative">
      {/* Ambient Interactive Cyber Background (Constellation particles & plasma orbs) */}
      <CyberBackground />

      {/* Cinematic 35mm Film Grain Overlay */}
      <CinematicFilmGrain />

      {/* Futuristic Floating HUD Command Dock (Top Center / Side Dock) */}
      <FloatingHUDDock
        onOpenRecruiter={() => setRecruiterModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections strictly reflecting Resume */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenRecruiter={() => setRecruiterModalOpen(true)}
        />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
        onOpenResume={() => {
          setRecruiterModalOpen(false);
          setResumeModalOpen(true);
        }}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Command Palette Spotlight Search */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenRecruiter={() => setRecruiterModalOpen(true)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
