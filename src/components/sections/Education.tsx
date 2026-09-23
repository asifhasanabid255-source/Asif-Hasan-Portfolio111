import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export function Education() {
  const { language, t } = useLanguage();
  const { education, certificates } = personalData;

  return (
    <section id="education" className="pt-4 pb-8 md:pt-6 md:pb-10 scroll-mt-20 bg-transparent overflow-hidden border-t border-border/40">
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
                {t.education.label}
              </span>
              <span className="w-6 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.education.heading} 
              subtitle=""
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Column 1: Education */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white-surface/90 shadow-xs border border-border/60 flex items-center justify-center text-primary-accent">
                <BookOpen size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-primary-text tracking-wide uppercase">{t.education.sections.education}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-4 pl-6 space-y-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -15, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative group"
                >
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 group-hover:bg-primary-accent transition-all duration-300"></span>
                  
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] hover:border-primary-accent/40 transition-all duration-300"
                  >
                    <h4 className="text-base font-bold text-primary-text mb-1 group-hover:text-primary-accent transition-colors">{edu.degree[language]}</h4>
                    
                    {edu.institution && (
                      <p className="text-primary-accent font-medium text-xs mb-2">{edu.institution[language]}</p>
                    )}
                    
                    {edu.description && (
                      <p className="text-secondary-text leading-relaxed text-xs mb-3">{edu.description[language]}</p>
                    )}

                    {(edu.year || edu.result) && (
                      <div className="mt-2.5 pt-2.5 border-t border-border/50 grid grid-cols-2 gap-2 text-xs">
                        {edu.year && (
                          <div>
                            <span className="text-[10px] text-secondary-text uppercase tracking-wider block">{t.education.fields.year}</span>
                            <span className="font-semibold text-primary-text">{edu.year}</span>
                          </div>
                        )}
                        {edu.result && (
                          <div>
                            <span className="text-[10px] text-secondary-text uppercase tracking-wider block">{t.education.fields.result}</span>
                            <span className="font-semibold text-primary-text">{edu.result[language]}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Certificates & Training */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white-surface shadow-xs border border-border/50 flex items-center justify-center text-primary-accent">
                <Award size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-primary-text tracking-wide uppercase">{t.education.sections.certificates}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-4 pl-6 space-y-4">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, x: 15, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative group"
                >
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 group-hover:bg-primary-accent transition-all duration-300"></span>
                  
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white-surface rounded-2xl p-4 sm:p-5 border border-border/50 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] hover:border-primary-accent/40 transition-all duration-300"
                  >
                    <h4 className="text-base font-bold text-primary-text mb-1 group-hover:text-primary-accent transition-colors">{cert.title[language]}</h4>
                    <p className="text-primary-accent font-medium text-xs mb-3">{cert.issuer[language]}</p>

                    {cert.areas && (
                      <div className="mb-3">
                        <h5 className="text-xs font-semibold text-primary-text mb-1.5">{t.experience.trainingAreas}:</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {cert.areas[language].map((area, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-secondary-text">
                              <CheckCircle2 size={13} className="text-primary-accent shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-2.5 pt-2.5 border-t border-border/50 grid grid-cols-2 gap-2 text-xs">
                      {cert.year && (
                        <div>
                          <span className="text-[10px] text-secondary-text uppercase tracking-wider block">{t.education.fields.year}</span>
                          <span className="font-semibold text-primary-text">{cert.year}</span>
                        </div>
                      )}
                      {cert.status && (
                        <div>
                          <span className="text-[10px] text-secondary-text uppercase tracking-wider block">{t.education.fields.status}</span>
                          <span className="font-semibold text-primary-text">{cert.status[language]}</span>
                        </div>
                      )}
                    </div>
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
