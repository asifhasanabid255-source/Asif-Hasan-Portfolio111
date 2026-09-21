import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { personalData } from '../../data/personal';
import { cvData } from '../../data/cv';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

export function AboutMe() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-start relative">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary-accent"></span>
              <span className="text-sm font-semibold tracking-widest text-primary-accent uppercase">
                {t.about.label}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight mb-10">
              {t.about.heading}
            </h2>
            
            {/* Abstract Visual Element */}
            <div className="relative mt-8 lg:mt-auto hidden sm:block w-48 h-48 opacity-80" aria-hidden="true">
              <div className="absolute top-0 left-0 w-32 h-32 border border-border rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-100/60 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-[1.5px] border-primary-accent/30 rounded-lg rotate-12"></div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-accent rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-secondary-text/30 rounded-sm rotate-45"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Introduction */}
            <p className="text-lg text-secondary-text leading-relaxed">
              {personalData.aboutText[language]}
            </p>

            {/* Quick Profile Card */}
            <div className="bg-white-surface/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-border/70 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 relative overflow-hidden">
               {/* Subtle background decoration inside card */}
               <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-accent/5 rounded-full border border-border/50" aria-hidden="true"></div>
               
               <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                 <div>
                   <h3 className="text-sm font-medium text-secondary-text mb-1">{t.about.profile.name}</h3>
                   <p className="font-semibold text-primary-text">{personalData.name[language]}</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-medium text-secondary-text mb-1">{t.about.profile.role}</h3>
                   <p className="font-semibold text-primary-text text-sm sm:text-base">{personalData.professionalTitle[language]}</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-medium text-secondary-text mb-1">{t.about.profile.location}</h3>
                   <p className="font-semibold text-primary-text">{personalData.location[language]}</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-medium text-secondary-text mb-1">{t.about.profile.email}</h3>
                   <a href={`mailto:${personalData.email}`} className="font-semibold text-primary-text hover:text-primary-accent transition-colors">
                     {personalData.email}
                   </a>
                 </div>
                 <div className="sm:col-span-2">
                   <h3 className="text-sm font-medium text-secondary-text mb-1">{t.about.profile.availability}</h3>
                   <p className="font-semibold text-primary-text inline-flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     {personalData.availability[language]}
                   </p>
                 </div>
               </div>
            </div>

            {/* CV Button */}
            <div>
              <a href="#cv" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-4 rounded-full">
                <Button icon={<Download size={18} />} tabIndex={-1}>
                  {t.action.downloadCV}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
