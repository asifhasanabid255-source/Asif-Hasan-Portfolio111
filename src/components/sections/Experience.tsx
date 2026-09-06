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
    <section id="experience" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-primary-accent"></span>
              <span className="text-sm font-semibold tracking-widest text-primary-accent uppercase">
                {t.experience.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.experience.heading} 
              subtitle=""
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Structured Two-Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Experience & Practical Work */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white-surface/90 shadow-sm border border-border/60 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500">
                <Briefcase size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary-text">{language === 'en' ? 'Professional & Practical' : 'পেশাগত ও বাস্তব কাজ'}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-6 pl-8 space-y-12">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[37px] top-1 w-3 h-3 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="bg-white-surface/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-border/70 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 bg-gray-50 border border-border rounded-full text-xs font-semibold text-secondary-text tracking-wider mb-4">
                      {exp.duration[language]}
                    </span>
                    <h4 className="text-xl font-bold text-primary-text mb-1">{exp.role[language]}</h4>
                    <p className="text-primary-accent font-medium text-sm mb-4">{exp.company[language]}</p>
                    <p className="text-secondary-text leading-relaxed text-sm">
                      {exp.description[language]}
                    </p>

                    {/* Practical Categories */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h5 className="text-sm font-semibold text-primary-text mb-3">{t.experience.practicalTitle}:</h5>
                      <ul className="space-y-2">
                        {t.experience.practicalCategories.map((category, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-secondary-text">
                            <CheckCircle2 size={16} className="text-primary-accent shrink-0 mt-0.5" />
                            <span>{category}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Training */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white-surface shadow-sm border border-border/50 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500">
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary-text">{language === 'en' ? 'Training & Development' : 'প্রশিক্ষণ ও উন্নয়ন'}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-6 pl-8 space-y-12">
              {training.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[37px] top-1 w-3 h-3 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="bg-white-surface rounded-3xl p-6 sm:p-8 border border-border/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 bg-gray-50 border border-border rounded-full text-xs font-semibold text-secondary-text tracking-wider mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-primary-text mb-1">{item.title[language]}</h4>
                    <p className="text-primary-accent font-medium text-sm mb-6">{item.institution[language]}</p>

                    {item.areas && (
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-primary-text mb-3">{t.experience.trainingAreas}:</h5>
                        <div className="flex flex-wrap gap-2">
                          {item.areas[language].map((area, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 bg-gray-50 border border-border/70 rounded text-xs font-medium text-secondary-text">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.tools && (
                      <div className="pt-6 border-t border-border/50">
                        <h5 className="text-sm font-semibold text-primary-text mb-3">{t.experience.softwareTools}:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tools.map((tool, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-1 bg-primary-bg rounded text-xs text-secondary-text">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
