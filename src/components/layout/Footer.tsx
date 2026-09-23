import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection } from '../../context/SectionContext';
import { personalData } from '../../data/personal';
import { ArrowUp, Mail, Phone, Youtube } from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();
  const { scrollToSection } = useSection();

  const handleBackToTop = () => {
    scrollToSection('home');
  };

  const navLinks = [
    { label: t.nav.home, id: 'home' as const },
    { label: t.nav.about, id: 'about' as const },
    { label: t.nav.skills, id: 'skills' as const },
    { label: t.nav.portfolio, id: 'portfolio' as const },
    { label: t.nav.services, id: 'services' as const },
    { label: t.nav.experience, id: 'experience' as const },
    { label: t.nav.education, id: 'education' as const },
    { label: t.nav.cv, id: 'cv' as const },
    { label: t.nav.contact, id: 'contact' as const },
  ];

  return (
    <footer className="relative bg-white-surface border-t border-border/80 pt-12 pb-8 mt-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          
          {/* Brand & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="h-10 w-10 object-cover rounded-full border border-border" 
              />
              <span className="font-bold text-lg text-primary-text tracking-tight">
                {personalData.name[language]}
              </span>
            </div>
            <p className="text-xs text-secondary-text leading-relaxed max-w-sm">
              {personalData.professionalTitle[language]}
            </p>
            <p className="text-xs text-secondary-text/80">
              {personalData.location[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider mb-3">
              {language === 'bn' ? 'কুইক লিংকস' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-secondary-text hover:text-primary-accent transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top */}
          <div className="flex flex-col md:items-end justify-between space-y-4">
            <div>
              <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider mb-3 md:text-right">
                {language === 'bn' ? 'যোগাযোগ' : 'Connect'}
              </h4>
              <div className="flex items-center gap-2">
                {personalData.youtube && (
                  <a
                    href={personalData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-secondary-text hover:text-red-600 transition-colors"
                    title="YouTube"
                  >
                    <Youtube size={16} />
                  </a>
                )}
                {personalData.behance && (
                  <a
                    href={personalData.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-secondary-text hover:text-blue-600 transition-colors font-bold text-xs"
                    title="Behance"
                  >
                    Bē
                  </a>
                )}
                {personalData.facebook && (
                  <a
                    href={personalData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-secondary-text hover:text-blue-500 transition-colors font-bold text-xs"
                    title="Facebook"
                  >
                    f
                  </a>
                )}
                {personalData.whatsapp && (
                  <a
                    href={`https://wa.me/${personalData.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-secondary-text hover:text-emerald-600 transition-colors"
                    title="WhatsApp"
                  >
                    <Phone size={16} />
                  </a>
                )}
                {personalData.email && (
                  <a
                    href={`mailto:${personalData.email}`}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-secondary-text hover:text-primary-accent transition-colors"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white-surface text-xs font-medium text-secondary-text hover:text-primary-accent shadow-xs cursor-pointer"
            >
              <ArrowUp size={14} />
              <span>{language === 'bn' ? 'উপরে যান' : 'Back to top'}</span>
            </motion.button>
          </div>

        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-text/80 gap-2">
          <p>© {new Date().getFullYear()} {personalData.name.en}. All rights reserved.</p>
          <p>{personalData.professionalTitle.en}</p>
        </div>
      </div>
    </footer>
  );
}
