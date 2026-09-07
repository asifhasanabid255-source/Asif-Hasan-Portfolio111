import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { FileText, Download, Eye, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { CVPdfTemplate } from '../cv/CVPdfTemplate';
// @ts-ignore
import html2pdf from 'html2pdf.js';

export function CV() {
  const { language, t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    
    try {
      const element = cvRef.current;
      const opt = {
        margin:       0,
        filename:     `Asif_Hasan_CV_${language}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      setIsGenerating(false);
    }
  };

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
            
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-semibold tracking-wide mb-10">
              {language === 'en' ? 'CV Available for Download' : 'সিভি ডাউনলোডের জন্য প্রস্তুত'}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button 
                variant="primary" 
                onClick={handleDownloadPdf}
                disabled={isGenerating}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
                aria-label={t.resume.actions.download}
              >
                {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                {isGenerating ? (language === 'en' ? 'Generating...' : 'তৈরি হচ্ছে...') : t.resume.actions.download}
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

      {/* Hidden CV template used for generating the PDF */}
      <div className="absolute -left-[9999px] top-0 -z-50 opacity-0 pointer-events-none overflow-hidden h-0 w-0">
        <CVPdfTemplate ref={cvRef} language={language} />
      </div>
    </section>
  );
}
