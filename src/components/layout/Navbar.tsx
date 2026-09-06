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

  const navItems = [
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
    
    // Smooth scroll logic will be implemented here once sections exist
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white-surface/85 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-b border-border/70' 
          : 'bg-white-surface/60 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 font-bold text-xl md:text-2xl tracking-tight text-primary-text hover:text-primary-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-sm"
            >
              <img src="https://i.ibb.co.com/Qgrg2Vg/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
              {personalData.name.en}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 lg:space-x-8 ml-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-sm px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section: Language Switcher & Contact Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="block">
              <LanguageSwitcher />
            </div>
            
            <Button 
              variant="primary" 
              size="sm" 
              className="hidden md:inline-flex"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.action.contactMe}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-accent"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden absolute top-20 left-0 right-0 bg-white-surface border-b border-border shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 bg-white-surface max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-primary-text hover:bg-gray-50 hover:text-primary-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-6 px-3">
                <Button 
                  variant="primary" 
                  className="w-full justify-center md:hidden"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t.action.contactMe}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
