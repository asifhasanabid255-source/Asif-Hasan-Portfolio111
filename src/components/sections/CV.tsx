import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { FileText, Download, Eye, Loader2, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { CVPdfTemplate } from '../cv/CVPdfTemplate';

export function CV() {
  const { language, t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLanguage, setModalLanguage] = useState<'en' | 'bn'>(language);
  const [zoomScale, setZoomScale] = useState<number>(0.9);
  const cvRef = useRef<HTMLDivElement>(null);

  // Sync modal language with site language initially
  useEffect(() => {
    setModalLanguage(language);
  }, [language]);

  const handleDownloadPdf = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    
    try {
      const element = cvRef.current;
      const opt = {
        margin:       [6, 0, 6, 0],
        filename:     `Asif_Hasan_CV_${modalLanguage}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // @ts-ignore
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = (html2pdfModule.default || html2pdfModule) as any;

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert(language === 'en' ? "Failed to generate PDF. Please try again." : "পিডিএফ তৈরি করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="cv" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 text-primary-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-accent/20">
              <FileText size={14} />
              <span>{t.nav.cv}</span>
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
              {language === 'en' ? 'Verified 1-Page Official CV' : 'যাচাইকৃত অফিসিয়াল ১-পৃষ্ঠার সিভি'}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button 
                variant="outline" 
                onClick={() => {
                  setModalLanguage(language);
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border-primary-accent text-primary-accent hover:bg-primary-accent/5"
              >
                <Eye size={18} />
                {language === 'en' ? 'View Full CV' : 'ফুল সিভি দেখুন'}
              </Button>

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
      <div className="fixed -left-[9999px] top-0 pointer-events-none z-[-100]">
        <CVPdfTemplate ref={cvRef} language={modalLanguage} />
      </div>

      {/* CV Modal for Viewing */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[94vh] bg-primary-bg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border/60"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-white-surface border-b border-border shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-primary-text">
                    {language === 'en' ? 'Curriculum Vitae' : 'জীবনবৃত্তান্ত (CV)'}
                  </h3>
                  {/* Language switch inside modal */}
                  <div className="flex items-center bg-primary-bg rounded-lg p-0.5 border border-border text-xs">
                    <button 
                      onClick={() => setModalLanguage('en')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${modalLanguage === 'en' ? 'bg-primary-accent text-white shadow-sm' : 'text-secondary-text hover:text-primary-text'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setModalLanguage('bn')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${modalLanguage === 'bn' ? 'bg-primary-accent text-white shadow-sm' : 'text-secondary-text hover:text-primary-text'}`}
                    >
                      বাংলা
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Zoom controls */}
                  <div className="hidden sm:flex items-center bg-primary-bg rounded-lg p-1 border border-border gap-1">
                    <button 
                      onClick={() => setZoomScale(prev => Math.max(0.6, prev - 0.1))}
                      className="p-1 hover:bg-border/60 rounded text-secondary-text hover:text-primary-text transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <span className="text-[11px] font-mono px-1 text-secondary-text w-10 text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button 
                      onClick={() => setZoomScale(prev => Math.min(1.2, prev + 0.1))}
                      className="p-1 hover:bg-border/60 rounded text-secondary-text hover:text-primary-text transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn size={16} />
                    </button>
                    <button 
                      onClick={() => setZoomScale(0.85)}
                      className="p-1 hover:bg-border/60 rounded text-secondary-text hover:text-primary-text transition-colors"
                      title="Reset Zoom"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleDownloadPdf}
                    disabled={isGenerating}
                    className="flex items-center gap-1.5 text-xs sm:text-sm px-3 sm:px-4 py-1.5"
                  >
                    {isGenerating ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
                    <span>{language === 'en' ? 'Download' : 'ডাউনলোড'}</span>
                  </Button>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 text-secondary-text hover:text-primary-text hover:bg-border/60 rounded-full transition-colors ml-1"
                    aria-label="Close modal"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Modal Body - CV Preview Container */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 bg-neutral-900/10 flex justify-center items-start">
                <div 
                  className="transition-transform duration-200 origin-top shadow-2xl rounded-sm my-2 bg-white"
                  style={{
                    transform: `scale(${zoomScale})`,
                    marginBottom: `${(zoomScale - 1) * 300}px`
                  }}
                >
                  <CVPdfTemplate language={modalLanguage} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
