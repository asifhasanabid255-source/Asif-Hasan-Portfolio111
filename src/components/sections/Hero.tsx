import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection } from '../../context/SectionContext';
import { Button } from '../ui/Button';
import { Film, Sparkles, Play } from 'lucide-react';

const ProfileVisual = ({ language }: { language: 'en' | 'bn' }) => (
  <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
    {/* Floating Motion Badge 1 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20"
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white-surface/95 backdrop-blur-md border border-border/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_35px_-5px_rgba(30,58,138,0.18)] transition-all duration-300 text-primary-text"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/10 text-primary-accent flex items-center justify-center shrink-0 border border-blue-500/20">
          <Film size={15} />
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-primary-text whitespace-nowrap">
          {language === 'bn' ? 'ভিডিও এডিটর' : 'Video Editor'}
        </span>
      </motion.div>
    </motion.div>

    {/* Floating Motion Badge 2 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20"
    >
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white-surface/95 backdrop-blur-md border border-border/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_35px_-5px_rgba(16,185,129,0.18)] transition-all duration-300 text-primary-text"
      >
        <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
          <Sparkles size={15} />
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-primary-text whitespace-nowrap">
          {language === 'bn' ? 'মোশন গ্রাফিক্স ডিজাইনার' : 'Motion Graphics Designer'}
        </span>
      </motion.div>
    </motion.div>

    {/* Main Profile Photo Container */}
    <motion.div 
      animate={{ y: [-6, 6, -6] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="absolute inset-0 bg-white-surface/40 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(30,58,138,0.3)] overflow-hidden flex items-center justify-center p-2 border-[1px] border-white/60 ring-1 ring-white/20"
    >
      <img 
        src="/hero.png" 
        alt="Profile" 
        className="w-full h-full object-cover rounded-[2rem] bg-gray-100"
      />
    </motion.div>
  </div>
);

export function Hero() {
  const { t, language } = useLanguage();
  const { setActiveSection } = useSection();

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center pt-6 md:pt-4 pb-10 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-4 md:space-y-5 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white-surface border border-border shadow-xs mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-primary-text uppercase">
                  {t.hero.label}
                </span>
              </motion.div>
              
              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text leading-[1.15] tracking-tight mb-3"
              >
                <span className="block">{t.hero.heading.split(' ')[0]}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-blue-500">
                  {t.hero.heading.substring(t.hero.heading.indexOf(' ') + 1)}
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base text-secondary-text leading-relaxed max-w-lg"
              >
                {t.hero.description}
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-row gap-3 w-full sm:w-auto pt-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  href="#portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('portfolio');
                  }}
                  variant="primary" 
                  size="sm"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-xs"
                >
                  {t.hero.actions.primary}
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('contact');
                  }}
                  variant="outline" 
                  size="sm"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold bg-white-surface"
                >
                  {t.hero.actions.secondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="w-full relative z-0 mt-4 lg:mt-0"
          >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-accent/10 rounded-full blur-[60px] pointer-events-none"></div>
            
            <ProfileVisual language={language} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
