import React from 'react';
import { motion, Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { personalData } from '../../data/personal';
import { Button } from '../ui/Button';
import { Download, Sparkles } from 'lucide-react';

export function AboutMe() {
  const { language, t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleScrollToCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#cv');
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-4 pb-8 md:pt-6 md:pb-10 scroll-mt-20 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="flex flex-col justify-start relative"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-2 inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary-accent"></span>
              <span className="text-xs font-semibold tracking-widest text-primary-accent uppercase">
                {t.about.label}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-text leading-tight mb-4">
              {t.about.heading}
            </motion.h2>
            
            {/* Intro text */}
            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-4">
              {personalData.aboutText[language]}
            </motion.p>

            {/* CV Button */}
            <motion.div variants={itemVariants}>
              <motion.a 
                href="#cv" 
                onClick={handleScrollToCV}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-full"
              >
                <Button size="sm" icon={<Download size={15} />} tabIndex={-1}>
                  {t.action.downloadCV}
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="flex flex-col justify-center"
          >
            {/* Quick Profile Card with internal staggered motion */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] transition-all duration-300 relative overflow-hidden"
            >
               {/* Background decoration inside card */}
               <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary-accent/5 rounded-full border border-border/40" aria-hidden="true"></div>
               
               <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs">
                 <motion.div variants={itemVariants}>
                   <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.name}</h3>
                   <p className="font-semibold text-primary-text text-sm">{personalData.name[language]}</p>
                 </motion.div>

                 <motion.div variants={itemVariants}>
                   <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.role}</h3>
                   <p className="font-semibold text-primary-text text-xs sm:text-sm">{personalData.professionalTitle[language]}</p>
                 </motion.div>

                 <motion.div variants={itemVariants}>
                   <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.location}</h3>
                   <p className="font-semibold text-primary-text">{personalData.location[language]}</p>
                 </motion.div>

                 <motion.div variants={itemVariants}>
                   <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.email}</h3>
                   <a href={`mailto:${personalData.email}`} className="font-semibold text-primary-text hover:text-primary-accent transition-colors">
                     {personalData.email}
                   </a>
                 </motion.div>

                 <motion.div variants={itemVariants} className="sm:col-span-2 pt-1 border-t border-border/50">
                   <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.availability}</h3>
                   <p className="font-semibold text-primary-text inline-flex items-center gap-1.5">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                     {personalData.availability[language]}
                   </p>
                 </motion.div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
