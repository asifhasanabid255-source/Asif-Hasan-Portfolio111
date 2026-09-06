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
    <section id="education" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
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
                {t.education.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.education.heading} 
              subtitle=""
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Education */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white-surface/90 shadow-sm border border-border/60 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500">
                <BookOpen size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary-text tracking-wide uppercase text-sm">{t.education.sections.education}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-6 pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-[37px] top-1 w-3 h-3 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="bg-white-surface/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-border/70 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-primary-text mb-2">{edu.degree[language]}</h4>
                    
                    {edu.institution && (
                      <p className="text-primary-accent font-medium text-sm mb-4">{edu.institution[language]}</p>
                    )}
                    
                    {edu.description && (
                      <p className="text-secondary-text leading-relaxed text-sm mb-4">{edu.description[language]}</p>
                    )}

                    {(edu.year || edu.result) && (
                      <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {edu.year && (
                          <div>
                            <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">{t.education.fields.year}</span>
                            <span className="font-semibold text-primary-text text-sm">{edu.year}</span>
                          </div>
                        )}
                        {edu.result && (
                          <div>
                            <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">{t.education.fields.result}</span>
                            <span className="font-semibold text-primary-text text-sm">{edu.result[language]}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Certificates & Training */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white-surface shadow-sm border border-border/50 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500">
                <Award size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary-text tracking-wide uppercase text-sm">{t.education.sections.certificates}</h3>
            </motion.div>

            <div className="relative border-l border-border/60 ml-6 pl-8 space-y-12">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-[37px] top-1 w-3 h-3 bg-white-surface border-2 border-primary-accent rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="bg-white-surface rounded-3xl p-6 sm:p-8 border border-border/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-primary-text mb-2">{cert.title[language]}</h4>
                    <p className="text-primary-accent font-medium text-sm mb-6">{cert.issuer[language]}</p>

                    {cert.areas && (
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-primary-text mb-3">{t.experience.trainingAreas}:</h5>
                        <ul className="space-y-2">
                          {cert.areas[language].map((area, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-secondary-text">
                              <CheckCircle2 size={16} className="text-primary-accent shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cert.year && (
                        <div>
                          <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">{t.education.fields.year}</span>
                          <span className="font-semibold text-primary-text text-sm">{cert.year}</span>
                        </div>
                      )}
                      {cert.status && (
                        <div>
                          <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">{t.education.fields.status}</span>
                          <span className="font-semibold text-primary-text text-sm">{cert.status[language]}</span>
                        </div>
                      )}
                    </div>
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
