import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Button } from '../ui/Button';
import { personalData } from '../../data/personal';

export function Navbar() {
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerNavItems = [
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.cv, href: '#cv' },
  ];

  const dropdownNavItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.certificates, href: '#certificates' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const allNavItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.certificates, href: '#certificates' },
    { label: t.nav.cv, href: '#cv' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navOffset = window.innerWidth >= 1024 ? 76 : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white-surface/85 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-b border-border/70' 
          : 'bg-white-surface/60 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-primary-text hover:text-primary-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-sm"
            >
              <img src="/logo.jpg" alt="Logo" className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-full" />
              <span>{personalData.name.en}</span>
            </a>
          </div>

          {/* Desktop Horizontal Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {headerNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="whitespace-nowrap text-sm font-medium text-secondary-text hover:text-primary-text hover:text-primary-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-sm px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Section: Language Switcher, Contact Button & Menu Toggle */}
          <div className="hidden lg:flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.action.contactMe}
            </Button>
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-1.5 ml-2 rounded-md text-primary-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-accent"
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
                {allNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-primary-text hover:bg-gray-50 hover:text-primary-accent active:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Language Switcher and Contact Button inside Mobile Drawer */}
                <div className="pt-4 mt-3 border-t border-border/70 flex flex-col gap-3">
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
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          const navOffset = 64;
                          const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
                          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
                        }
                      }}
                    >
                      {t.action.contactMe}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop View: Dropdown items when desktop menu button is toggled */}
              <div className="hidden lg:block space-y-1">
                {dropdownNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-primary-text hover:bg-gray-50 hover:text-primary-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
