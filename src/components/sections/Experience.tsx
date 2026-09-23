import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const { language, t } = useLanguage();
  const { experience, training } = personalData;

  return (
    <section id="experience" className="pt-10 pb-12 md:pt-16 md:pb-16 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-5 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-2 inline-flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-primary-accent"></span>
              <span className="text-xs font-semibold tracking-widest text-primary-accent uppercase">
                {t.experience.label}
              </span>
              <span className="w-6 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.experience.heading} 
              subtitle=""
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Structured Two-Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Column 1: Experience & Practical Work */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white-surface/90 shadow-xs border border-border/60 flex items-center justify-center text-primary-accent">
                <Briefcase size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-primary-text">{language === 'en' ? 'Professional & Practical' : 'পেশাগত ও বাস্তব কাজ'}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-4 pl-6 space-y-4">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -15, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 group-hover:bg-primary-accent transition-all duration-300"></span>
                  
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] hover:border-primary-accent/40 transition-all duration-300"
                  >
                    <span className="inline-block px-2.5 py-0.5 bg-gray-50 border border-border rounded-full text-[11px] font-semibold text-secondary-text tracking-wider mb-2">
                      {exp.duration[language]}
                    </span>
                    <h4 className="text-base font-bold text-primary-text mb-0.5 group-hover:text-primary-accent transition-colors">{exp.role[language]}</h4>
                    <p className="text-primary-accent font-medium text-xs mb-2">{exp.company[language]}</p>
                    <p className="text-secondary-text leading-relaxed text-xs">
                      {exp.description[language]}
                    </p>

                    {/* Practical Categories */}
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <h5 className="text-xs font-semibold text-primary-text mb-2">{t.experience.practicalTitle}:</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {t.experience.practicalCategories.map((category, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-1.5 text-xs text-secondary-text"
                          >
                            <CheckCircle2 size={13} className="text-primary-accent shrink-0 mt-0.5" />
                            <span>{category}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Training */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white-surface shadow-xs border border-border/50 flex items-center justify-center text-primary-accent">
                <GraduationCap size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-primary-text">{language === 'en' ? 'Training & Development' : 'প্রশিক্ষণ ও উন্নয়ন'}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-4 pl-6 space-y-4">
              {training.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 15, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 group-hover:bg-primary-accent transition-all duration-300"></span>
                  
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white-surface rounded-2xl p-4 sm:p-5 border border-border/50 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] hover:border-primary-accent/40 transition-all duration-300"
                  >
                    <span className="inline-block px-2.5 py-0.5 bg-gray-50 border border-border rounded-full text-[11px] font-semibold text-secondary-text tracking-wider mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold text-primary-text mb-0.5 group-hover:text-primary-accent transition-colors">{item.title[language]}</h4>
                    <p className="text-primary-accent font-medium text-xs mb-3">{item.institution[language]}</p>

                    {item.areas && (
                      <div className="mb-3">
                        <h5 className="text-xs font-semibold text-primary-text mb-1.5">{t.experience.trainingAreas}:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {item.areas[language].map((area, idx) => (
                            <span key={idx} className="inline-flex items-center px-2.5 py-0.5 bg-gray-50 border border-border/70 rounded text-[11px] font-medium text-secondary-text">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.tools && (
                      <div className="pt-3 border-t border-border/50">
                        <h5 className="text-xs font-semibold text-primary-text mb-1.5">{t.experience.softwareTools}:</h5>
                        <div className="flex flex-wrap gap-1">
                          {item.tools.map((tool, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-0.5 bg-primary-bg rounded text-[11px] text-secondary-text">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
