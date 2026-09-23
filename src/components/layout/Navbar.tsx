import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection, SectionId } from '../../context/SectionContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Button } from '../ui/Button';
import { personalData } from '../../data/personal';

export function Navbar() {
  const { language, t } = useLanguage();
  const { activeSection, setActiveSection } = useSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerNavItems: Array<{ label: string; href: string; id: SectionId }> = [
    { label: t.nav.portfolio, href: '#portfolio', id: 'portfolio' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.cv, href: '#cv', id: 'cv' },
  ];

  const dropdownNavItems: Array<{ label: string; href: string; id: SectionId }> = [
    { label: t.nav.portfolio, href: '#portfolio', id: 'portfolio' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.education, href: '#education', id: 'education' },
    { label: t.nav.certificates, href: '#certificates', id: 'certificates' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const allNavItems: Array<{ label: string; href: string; id: SectionId }> = [
    { label: t.nav.portfolio, href: '#portfolio', id: 'portfolio' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.education, href: '#education', id: 'education' },
    { label: t.nav.certificates, href: '#certificates', id: 'certificates' },
    { label: t.nav.cv, href: '#cv', id: 'cv' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white-surface/90 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-b border-border/70' 
          : 'bg-white-surface/75 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className="flex items-center gap-2.5 sm:gap-3 font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-primary-text hover:text-primary-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-sm"
            >
              <img src="/logo.jpg" alt="Logo" className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-full" />
              <span>{personalData.name.en}</span>
            </a>
          </div>

          {/* Desktop Horizontal Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {headerNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`whitespace-nowrap text-sm transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-full px-3 py-1.5 ${
                    isActive
                      ? 'bg-primary-accent text-white shadow-xs font-semibold'
                      : 'font-medium text-secondary-text hover:text-primary-text hover:bg-gray-100/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Section: Language Switcher, Theme Switcher, Contact Button & Menu Toggle */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
            
            <Button 
              variant={activeSection === 'contact' ? 'secondary' : 'primary'} 
              size="sm"
              onClick={() => setActiveSection('contact')}
            >
              {t.action.contactMe}
            </Button>
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-1.5 ml-1 rounded-md text-primary-text hover:bg-gray-100/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-accent transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Right: Menu Toggle Only (Clean header on mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary-text hover:bg-gray-100/80 focus:outline-none focus:ring-2 focus:ring-primary-accent transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>
      
      {/* Menu Overlay / Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white-surface border-b border-border shadow-xl max-h-[calc(100vh-64px)] lg:max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1 max-w-7xl mx-auto">
              
              {/* Mobile View: All Navigation Items + Language Switcher + Contact Button Inside */}
              <div className="lg:hidden space-y-1">
                {allNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-accent text-white font-semibold shadow-xs'
                          : 'text-primary-text hover:bg-gray-50 hover:text-primary-accent active:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                
                {/* Theme Switcher, Language Switcher and Contact Button inside Mobile Drawer */}
                <div className="pt-4 mt-3 border-t border-border/70 flex flex-col gap-3">
                  <div className="flex items-center justify-between px-3 py-1">
                    <span className="text-sm font-medium text-secondary-text">
                      {language === 'bn' ? 'থিম মোড' : 'Theme'}
                    </span>
                    <ThemeSwitcher compact />
                  </div>

                  <div className="flex items-center justify-between px-3 py-1">
                    <span className="text-sm font-medium text-secondary-text">
                      {language === 'bn' ? 'ভাষা পরিবর্তন' : 'Language'}
                    </span>
                    <LanguageSwitcher />
                  </div>
                  
                  <div className="px-3 pt-1">
                    <Button 
                      variant="primary" 
                      className="w-full justify-center py-3 text-sm font-semibold shadow-xs"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveSection('contact');
                      }}
                    >
                      {t.action.contactMe}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop View: Dropdown items when desktop menu button is toggled */}
              <div className="hidden lg:block space-y-1">
                {dropdownNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-accent/10 text-primary-accent font-semibold'
                          : 'text-primary-text hover:bg-gray-50 hover:text-primary-accent'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
