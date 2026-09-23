import React from 'react';
import { motion, Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useSection } from '../../context/SectionContext';
import { personalData } from '../../data/personal';
import { Button } from '../ui/Button';
import { Download, Film, Sparkles, Send } from 'lucide-react';

const ProfileVisual = ({ language }: { language: 'en' | 'bn' }) => (
  <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[380px] mx-auto">
    {/* Floating Motion Badge 1 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -15 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20"
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white-surface/95 backdrop-blur-md border border-border/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] text-primary-text"
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
      initial={{ opacity: 0, scale: 0.8, x: 15 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20"
    >
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white-surface/95 backdrop-blur-md border border-border/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] text-primary-text"
      >
        <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
          <Sparkles size={15} />
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-primary-text whitespace-nowrap">
          {language === 'bn' ? 'মোশন ডিজাইনার' : 'Motion Designer'}
        </span>
      </motion.div>
    </motion.div>

    {/* Main Profile Photo Container */}
    <motion.div 
      animate={{ y: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="w-full aspect-square bg-white-surface/50 backdrop-blur-md rounded-[2.25rem] shadow-[0_20px_50px_-20px_rgba(30,58,138,0.25)] overflow-hidden flex items-center justify-center p-2.5 border border-white/60 dark:border-white/10 ring-1 ring-border/60"
    >
      <img 
        src="/hero.png" 
        alt={language === 'bn' ? 'আসিফ হাসান' : 'Asif Hasan'} 
        className="w-full h-full object-cover rounded-[1.85rem] bg-gray-100 dark:bg-gray-800"
      />
    </motion.div>
  </div>
);

export function AboutMe() {
  const { language, t } = useLanguage();
  const { setActiveSection } = useSection();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleScrollToCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection('cv');
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection('contact');
  };

  return (
    <section id="about" className="pt-12 pb-14 md:pt-18 md:pb-20 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Photo & Visual Badges (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <ProfileVisual language={language} />
          </motion.div>

          {/* Right Column: Identity, Bio & Info Card (7 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col justify-start relative"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-2 inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary-accent"></span>
              <span className="text-xs font-semibold tracking-widest text-primary-accent uppercase">
                {language === 'bn' ? 'আমার পরিচয়' : 'About Me'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-text leading-tight mb-2">
              {personalData.name[language]}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-sm font-semibold text-primary-accent mb-3">
              {personalData.professionalTitle[language]}
            </motion.p>
            
            {/* Intro text */}
            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-5">
              {personalData.aboutText[language]}
            </motion.p>

            {/* Quick Profile Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.25 } }}
              className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-border/70 shadow-sm mb-5 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 text-xs">
                <div>
                  <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.location}</h3>
                  <p className="font-semibold text-primary-text text-xs">{personalData.location[language]}</p>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.email}</h3>
                  <a href={`mailto:${personalData.email}`} className="font-semibold text-primary-text hover:text-primary-accent transition-colors text-xs">
                    {personalData.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{language === 'bn' ? 'শিক্ষা ও সনদ' : 'Education & Credentials'}</h3>
                  <p className="font-semibold text-primary-text text-xs">{language === 'bn' ? 'তাকমিল / দরসে নিজামী • হাফেজ-এ-কুরআন' : 'Takmil / Dars-e-Nizami • Hafez-e-Quran'}</p>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium text-secondary-text mb-0.5">{t.about.profile.availability}</h3>
                  <p className="font-semibold text-primary-text inline-flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {personalData.availability[language]}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.a 
                href="#cv" 
                onClick={handleScrollToCV}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-full"
              >
                <Button size="sm" icon={<Download size={14} />} tabIndex={-1}>
                  {t.action.downloadCV}
                </Button>
              </motion.a>

              <motion.a 
                href="#contact" 
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-full"
              >
                <Button variant="outline" size="sm" icon={<Send size={14} />} tabIndex={-1} className="bg-white-surface">
                  {t.action.contactMe}
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
