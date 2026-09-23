import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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
  scrollToSection: (section: SectionId) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSectionState] = useState<SectionId>('home');

  const scrollToSection = useCallback((section: SectionId) => {
    setActiveSectionState(section);

    const targetId = section === 'certificates' ? 'education' : section;
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      if (typeof window !== 'undefined' && window.history.pushState) {
        window.history.pushState(null, '', `#${section}`);
      }
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof window !== 'undefined' && window.history.pushState) {
        window.history.pushState(null, '', '#home');
      }
    }
  }, []);

  const setActiveSection = useCallback((section: SectionId) => {
    scrollToSection(section);
  }, [scrollToSection]);

  // Initial scroll to hash if present on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '').toLowerCase() as SectionId;
      const validSections: SectionId[] = [
        'home', 'about', 'skills', 'portfolio', 'services', 
        'experience', 'education', 'certificates', 'cv', 'contact'
      ];
      if (validSections.includes(hash)) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 150);
      }
    }
  }, [scrollToSection]);

  // ScrollSpy to update active section as user scrolls
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home', 'about', 'skills', 'portfolio', 'services', 
      'experience', 'education', 'cv', 'contact'
    ];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;

          // If at the very bottom of the page, activate the contact section
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            setActiveSectionState('contact');
            ticking = false;
            return;
          }

          // If at the very top, activate home
          if (window.scrollY < 120) {
            setActiveSectionState('home');
            ticking = false;
            return;
          }

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveSectionState(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
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
