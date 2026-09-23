import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  FileText, 
  Download, 
  Eye, 
  Loader2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Sparkles
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CVPdfTemplate } from '../cv/CVPdfTemplate';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';

export function CV() {
  const { language, t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLanguage, setModalLanguage] = useState<'en' | 'bn'>('en');
  const [zoomScale, setZoomScale] = useState<number>(0.9);
  
  const cvRef = useRef<HTMLDivElement>(null);

  // Sync modal language with site language initially, defaulting to 'en' as user's original PDF is in English
  useEffect(() => {
    setModalLanguage(language);
  }, [language]);

  const handleDownloadPdf = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    
    try {
      const element = cvRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123,
        onclone: (clonedDoc) => {
          const wrapper = clonedDoc.getElementById('cv-pdf-wrapper');
          if (wrapper) {
            wrapper.style.position = 'fixed';
            wrapper.style.left = '0px';
            wrapper.style.top = '0px';
            wrapper.style.zIndex = '9999';
          }
        },
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      });

      // A4 page is exactly 210mm x 297mm
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save(modalLanguage === 'en' ? 'ASIF_HASAN_CV.pdf' : 'ASIF_HASAN_CV_bn.pdf');
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert(language === 'en' ? "Failed to generate PDF. Please try again." : "পিডিএফ তৈরি করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setIsGenerating(false);
    }
  };

  const isEn = language === 'en';

  return (
    <section id="cv" className="pt-10 pb-12 md:pt-16 md:pb-16 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-5 md:mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-accent/10 text-primary-accent text-xs font-semibold uppercase tracking-wider mb-2 border border-primary-accent/20">
              <FileText size={13} />
              <span>{t.nav.cv}</span>
            </div>
            
            <SectionHeading 
              title={t.resume.heading} 
              subtitle={t.resume.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Enhanced CV Presentation: Preview Mockup + Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Exact Mini CV Mockup (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div 
              onClick={() => {
                setModalLanguage(language);
                setIsModalOpen(true);
              }}
              className="group relative cursor-pointer w-full max-w-[270px] sm:max-w-[290px] aspect-[1/1.414] bg-white rounded-lg p-3.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.18)] border border-gray-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            >
              {/* Paper header */}
              <div className="flex items-start justify-between gap-1.5 pb-1.5 border-b border-gray-100">
                <div className="flex-1">
                  <h4 className="font-bold text-black text-[11px] tracking-tight uppercase leading-tight font-serif">ASIF HASAN</h4>
                  <div className="text-[6.8px] text-gray-800 space-y-0.5 mt-0.5 leading-snug">
                    <p><span className="font-bold">Email ID:</span> asifhasan.creative@gmail.com</p>
                    <p><span className="font-bold">Phone:</span> 01305645150 <span className="font-bold ml-1">Portfolio:</span> asifhasan.ai.studio</p>
                    <p><span className="font-bold">Holding No:</span> 99, Kajibari, Satarkul, Badda, Dhaka</p>
                  </div>
                </div>
                <div className="w-8 h-10 border border-gray-300 rounded-sm overflow-hidden bg-white shrink-0 p-0.5">
                  <img src="/hero.png" alt="Profile" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Miniature Body lines */}
              <div className="my-1 space-y-1 text-[6.5px] text-black leading-tight">
                <div>
                  <span className="font-bold uppercase block border-b border-black pb-0.5 mb-0.5 font-serif text-[7px]">
                    CAREER OBJECTIVE
                  </span>
                  <p className="line-clamp-2 text-gray-800 text-[6.2px] leading-snug">
                    I am looking to build my career as a Video Editor and Motion Graphics Designer. I want to use my skills in Premiere Pro, After Effects, Photoshop, and Illustrator to create clean, engaging, and professional visual content...
                  </p>
                </div>

                <div>
                  <span className="font-bold uppercase block border-b border-black pb-0.5 mb-0.5 font-serif text-[7px]">
                    EDUCATION
                  </span>
                  <p className="font-bold text-[6.2px]">Takmil / Dars-e-Nizami <span className="font-normal">— Jamia Arabia Imdadul Uloom (2026)</span></p>
                  <p className="font-bold text-[6.2px]">Hafez-e-Quran <span className="font-normal">— Completed (2018)</span></p>
                </div>

                <div>
                  <span className="font-bold uppercase block border-b border-black pb-0.5 mb-0.5 font-serif text-[7px]">
                    PROFESSIONAL TRAINING
                  </span>
                  <p className="font-bold text-[6.2px]">Small Business Management Course <span className="font-normal">— As-Sunnah SDI (3 Months, 2026)</span></p>
                </div>

                <div>
                  <span className="font-bold uppercase block border-b border-black pb-0.5 mb-0.5 font-serif text-[7px]">
                    SKILLS
                  </span>
                  <p className="line-clamp-1 text-gray-800 text-[6.2px] leading-snug">
                    <span className="font-bold">Hard Skills:</span> Premiere Pro, After Effects, Photoshop, Illustrator, Motion Graphics...
                  </p>
                </div>

                <div>
                  <span className="font-bold uppercase block border-b border-black pb-0.5 mb-0.5 font-serif text-[7px]">
                    REFERENCE
                  </span>
                  <div className="flex items-center justify-between text-[6px]">
                    <div>
                      <p className="font-bold">Borkotullah</p>
                      <p className="text-gray-700">As-Sunnah SDI</p>
                    </div>
                    <div>
                      <p className="font-bold">Mohammad Jabed Omar Jisan</p>
                      <p className="text-gray-700">As-Sunnah SDI</p>
                    </div>
                    <div className="w-4 h-4 border border-gray-300 p-0.5">
                      <img src="/portfolio-qr.png" alt="QR" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Paper footer */}
              <div className="pt-1 border-t border-gray-200 flex items-center justify-between text-[6.5px] text-gray-500 font-serif">
                <span>Official 1-Page PDF CV</span>
                <span>asifhasan.ai.studio</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-text/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 p-3 text-white text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Eye size={18} className="text-white" />
                </div>
                <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white text-black shadow-md font-sans">
                  {isEn ? 'Click to View Full CV' : 'সম্পূর্ণ সিভি দেখতে ক্লিক করুন'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Details, Verification & Actions (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-3.5"
          >
            <div className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.08)] transition-all duration-300 space-y-4">
              
              {/* Header inside card */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-text">
                    {t.resume.card.title}
                  </h3>
                  <p className="text-xs text-secondary-text mt-0.5">
                    {t.resume.card.subtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>{isEn ? 'Official 1-Page CV' : 'অফিসিয়াল ১-পৃষ্ঠার সিভি'}</span>
                </div>
              </div>

              {/* Highlights List with clean alignment matching the exact PDF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-primary-bg/50 border border-border/50">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary-accent flex items-center justify-center shrink-0">
                    <GraduationCap size={15} />
                  </div>
                  <div>
                    <span className="font-semibold text-primary-text block text-[11px]">{isEn ? 'Education' : 'শিক্ষাগত যোগ্যতা'}</span>
                    <span className="text-secondary-text text-[10px] leading-snug">Takmil / Dars-e-Nizami & Hafez-e-Quran</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-primary-bg/50 border border-border/50">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Briefcase size={15} />
                  </div>
                  <div>
                    <span className="font-semibold text-primary-text block text-[11px]">{isEn ? 'Professional Training' : 'প্রফেশনাল ট্রেনিং'}</span>
                    <span className="text-secondary-text text-[10px] leading-snug">Small Business Management (As-Sunnah SDI)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-primary-bg/50 border border-border/50">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Sparkles size={15} />
                  </div>
                  <div>
                    <span className="font-semibold text-primary-text block text-[11px]">{isEn ? 'Creative Toolkit' : 'ক্রিয়েটিভ টুলকিট'}</span>
                    <span className="text-secondary-text text-[10px] leading-snug">Premiere Pro, After Effects, Photoshop, Illustrator</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-primary-bg/50 border border-border/50">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <span className="font-semibold text-primary-text block text-[11px]">{isEn ? 'Verified References' : 'যাচাইকৃত রেফারেন্স'}</span>
                    <span className="text-secondary-text text-[10px] leading-snug">Borkotullah & Mohammad Jabed Omar Jisan</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setModalLanguage(language);
                    setIsModalOpen(true);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border-primary-accent text-primary-accent hover:bg-primary-accent/5 px-5 py-2.5 text-sm"
                >
                  <Eye size={16} />
                  <span>{isEn ? 'View Full CV' : 'ফুল সিভি দেখুন'}</span>
                </Button>

                <Button 
                  variant="primary" 
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm shadow-md"
                  aria-label={t.resume.actions.download}
                >
                  {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                  <span>
                    {isGenerating 
                      ? (isEn ? 'Generating...' : 'তৈরি হচ্ছে...') 
                      : (isEn ? 'Download PDF (A4)' : 'পিডিএফ ডাউনলোড (A4)')}
                  </span>
                </Button>
              </div>

              {/* Direct Note */}
              <p className="text-[10px] text-gray-500 font-medium">
                {t.resume.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden CV template used for generating the PDF */}
      <div 
        id="cv-pdf-wrapper" 
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          width: '794px',
          height: '1123px',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: -100
        }}
      >
        <CVPdfTemplate ref={cvRef} language={modalLanguage} />
      </div>

      {/* CV Modal for Fullscreen Viewing */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[94vh] bg-primary-bg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border/60"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-white-surface border-b border-border shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-primary-text font-serif">
                    {isEn ? 'Official Curriculum Vitae (A4)' : 'অফিসিয়াল জীবনবৃত্তান্ত (A4)'}
                  </h3>

                  {/* Language switch inside modal */}
                  <div className="flex items-center bg-primary-bg rounded-lg p-0.5 border border-border text-xs">
                    <button 
                      onClick={() => setModalLanguage('en')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors ${modalLanguage === 'en' ? 'bg-primary-accent text-white shadow-sm' : 'text-secondary-text hover:text-primary-text'}`}
                    >
                      English (Original)
                    </button>
                    <button 
                      onClick={() => setModalLanguage('bn')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors ${modalLanguage === 'bn' ? 'bg-primary-accent text-white shadow-sm' : 'text-secondary-text hover:text-primary-text'}`}
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
                    <span className="text-[11px] font-mono px-1 text-secondary-text w-11 text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button 
                      onClick={() => setZoomScale(prev => Math.min(1.3, prev + 0.1))}
                      className="p-1 hover:bg-border/60 rounded text-secondary-text hover:text-primary-text transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn size={16} />
                    </button>
                    <button 
                      onClick={() => setZoomScale(0.9)}
                      className="p-1 hover:bg-border/60 rounded text-secondary-text hover:text-primary-text transition-colors"
                      title="Reset Zoom"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                  {/* Download Button inside modal */}
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleDownloadPdf}
                    disabled={isGenerating}
                    className="flex items-center gap-1.5 text-xs sm:text-sm px-3 sm:px-4 py-1.5"
                  >
                    {isGenerating ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
                    <span>{isEn ? 'Download PDF' : 'ডাউনলোড'}</span>
                  </Button>

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 text-secondary-text hover:text-primary-text hover:bg-border/60 rounded-full transition-colors ml-1"
                    aria-label="Close modal"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Modal Body - Exact PDF Viewer */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 bg-neutral-900/10 flex justify-center items-start">
                <div 
                  className="transition-transform duration-200 origin-top shadow-2xl rounded-xs my-2 bg-white"
                  style={{
                    transform: `scale(${zoomScale})`,
                    marginBottom: `${(zoomScale - 1) * 320}px`
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
