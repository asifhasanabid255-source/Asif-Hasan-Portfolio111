import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from '../ui/Button';

export function CV() {
  const { language, t } = useLanguage();
  
  // Use the existing CV data structure, defaulting to empty strings if undefined
  const cvData = personalData.cv || { en: '', bn: '' };
  
  // Determine if a CV is available for the currently selected language
  const currentCVUrl = cvData[language];
  const isAvailable = Boolean(currentCVUrl);

  return (
    <section id="cv" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-primary-accent"></span>
              <span className="text-sm font-semibold tracking-widest text-primary-accent uppercase">
                {t.resume.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.resume.heading} 
              subtitle={t.resume.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* CV Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-2xl bg-white-surface/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-border/70 shadow-sm hover:shadow-[0_25px_50px_-20px_rgba(30,58,138,0.12)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Subtle decorative background shape */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-border flex items-center justify-center text-primary-accent mb-6 shadow-sm">
              <FileText size={32} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary-text mb-3">
              {t.resume.card.title}
            </h3>
            
            <p className="text-secondary-text font-medium text-sm sm:text-base mb-6">
              {t.resume.card.subtitle}
            </p>

            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-50 border border-border/70 text-xs font-semibold text-secondary-text tracking-wide mb-10">
              {isAvailable ? 'CV Available' : t.resume.card.statusUnavailable}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button 
                variant="primary" 
                href={isAvailable ? currentCVUrl : undefined}
                download={isAvailable ? true : undefined}
                disabled={!isAvailable}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={t.resume.actions.download}
              >
                <Download size={18} />
                {t.resume.actions.download}
              </Button>
              
              <Button 
                variant="outline" 
                href={isAvailable ? currentCVUrl : undefined}
                target={isAvailable ? "_blank" : undefined}
                rel="noopener noreferrer"
                disabled={!isAvailable}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 ${!isAvailable ? 'opacity-50 cursor-not-allowed text-secondary-text border-border' : ''}`}
                aria-label={t.resume.actions.view}
              >
                <Eye size={18} />
                {t.resume.actions.view}
              </Button>
            </div>
            
          </motion.div>
        </div>

        {/* Optional Secondary Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-400">
            {t.resume.note}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
