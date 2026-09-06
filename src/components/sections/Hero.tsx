import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

const ProfileVisual = () => (
  <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
    <div className="absolute inset-0 bg-white-surface/90 backdrop-blur-sm rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(30,58,138,0.2)] overflow-hidden flex items-center justify-center p-2 border border-border/60">
      {/* 
        This is where your image will be displayed.
        To use your own photo:
        1. Upload your photo (e.g., 'my-photo.jpg') to the 'public' folder using the file explorer on the left.
        2. Change the src below from '/profile.svg' to '/my-photo.jpg'.
      */}
      <img 
        src="https://i.postimg.cc/cJ2CkzjV/abid.png" 
        alt="Profile" 
        className="w-full h-full object-cover rounded-[2rem] bg-gray-100"
      />
    </div>
    
    {/* Floating elements to add depth */}
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-white-surface/90 backdrop-blur-md border border-border/60 rounded-2xl shadow-md flex items-center justify-center z-10"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-border/40 border-t-primary-accent animate-spin" style={{ animationDuration: '3s' }}></div>
    </motion.div>
    
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 bg-primary-accent rounded-2xl shadow-lg flex items-center justify-center text-white z-10"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </motion.div>
  </div>
);

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center pt-10 pb-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white-surface border border-border shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-accent"></span>
                <span className="text-xs font-bold tracking-widest text-primary-text uppercase">
                  {t.hero.label}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-text leading-[1.15] tracking-tight mb-6">
                {t.hero.heading}
              </h1>
              
              <p className="text-lg sm:text-xl text-secondary-text leading-relaxed max-w-lg">
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              <Button href="#portfolio" variant="primary" className="w-full sm:w-auto text-sm sm:text-base py-3.5 px-8 flex justify-center">
                {t.hero.actions.primary}
              </Button>
              
              <Button href="#contact" variant="outline" className="w-full sm:w-auto text-sm sm:text-base py-3.5 px-8 flex justify-center bg-white-surface">
                {t.hero.actions.secondary}
              </Button>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full relative z-0 mt-8 lg:mt-0"
          >
            {/* Very subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <ProfileVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
