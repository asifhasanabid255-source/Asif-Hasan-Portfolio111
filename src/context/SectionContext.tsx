import React, { createContext, useContext, useState, useEffect } from 'react';

export type SectionId = 
  | 'home'
  | 'about'
  | 'skills'
  | 'portfolio'
  | 'services'
  | 'experience'
  | 'education'
  | 'certificates'
  | 'cv'
  | 'contact';

interface SectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const getInitialSection = (): SectionId => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validSections: SectionId[] = [
        'home', 'about', 'skills', 'portfolio', 'services', 
        'experience', 'education', 'certificates', 'cv', 'contact'
      ];
      if (validSections.includes(hash as SectionId)) {
        return hash as SectionId;
      }
    }
    return 'home';
  };

  const [activeSection, setActiveSectionState] = useState<SectionId>(getInitialSection);

  const setActiveSection = (section: SectionId) => {
    setActiveSectionState(section);
    if (typeof window !== 'undefined') {
      const targetHash = `#${section}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validSections: SectionId[] = [
        'home', 'about', 'skills', 'portfolio', 'services', 
        'experience', 'education', 'certificates', 'cv', 'contact'
      ];
      if (validSections.includes(hash as SectionId)) {
        setActiveSectionState(hash as SectionId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
}
