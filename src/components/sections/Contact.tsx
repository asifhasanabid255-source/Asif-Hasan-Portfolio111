import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  const { language, t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitted');
  };

  const isPlaceholder = (val: string | undefined | Record<string, string>) => {
    if (!val) return true;
    if (typeof val === 'string') {
      return val === '[Add later]' || val.includes('placeholder');
    }
    return val[language] === '[Add later]' || val[language] === '[পরে যোগ করা হবে]';
  };

  const renderContactItem = (icon: React.ReactNode, label: string, value: string | Record<string, string>, linkPattern?: (v: string) => string) => {
    const isPh = isPlaceholder(value);
    const displayValue = isPh ? t.contact.info.placeholder : (typeof value === 'string' ? value : value[language]);
    const href = (!isPh && linkPattern && typeof value === 'string') ? linkPattern(value) : undefined;

    const content = (
      <motion.div 
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
        className={`flex items-center gap-3 p-1.5 rounded-xl transition-colors hover:bg-white-surface/40 ${isPh ? 'opacity-70' : ''}`}
      >
        <div className="w-9 h-9 rounded-lg bg-white-surface border border-border flex items-center justify-center text-primary-accent shrink-0 shadow-xs">
          {icon}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary-text mb-0.5">{label}</h4>
          <span className="text-xs text-secondary-text">{displayValue}</span>
        </div>
      </motion.div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-xl">
          {content}
        </a>
      );
    }

    return <div className="block">{content}</div>;
  };

  return (
    <section id="contact" className="pt-4 pb-8 md:pt-6 md:pb-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-primary-accent"></span>
                <span className="text-xs font-semibold tracking-widest text-primary-accent uppercase">
                  {t.contact.label}
                </span>
              </div>
              
              <SectionHeading 
                title={t.contact.heading} 
                subtitle={t.contact.subtitle}
                alignment="left"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="space-y-2.5"
            >
              {renderContactItem(<Mail size={16} />, t.contact.info.email, personalData.email, (v) => `mailto:${v}`)}
              {renderContactItem(<Phone size={16} />, t.contact.info.whatsapp, personalData.whatsapp, (v) => `https://wa.me/${v.replace(/[^0-9]/g, '')}`)}
              {renderContactItem(<MapPin size={16} />, t.contact.info.location, personalData.location)}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="pt-3 border-t border-border/50"
            >
              <div className="flex gap-3">
                {!isPlaceholder(personalData.linkedin) && (
                  <motion.a 
                    href={personalData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-xs transition-all shadow-xs" 
                    aria-label={t.contact.info.linkedin}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </motion.a>
                )}
                {!isPlaceholder(personalData.youtube) && (
                  <motion.a 
                    href={personalData.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-xs transition-all shadow-xs" 
                    aria-label={t.contact.info.youtube}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-5 h-5 object-contain" />
                  </motion.a>
                )}
                {!isPlaceholder(personalData.behance) && (
                  <motion.a 
                    href={personalData.behance} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-xs transition-all overflow-hidden shadow-xs" 
                    aria-label={t.contact.info.behance}
                  >
                    <img src="https://i.ibb.co/3mjFwGbJ/images.jpg" alt="Behance" className="w-full h-full object-cover" />
                  </motion.a>
                )}
                {personalData.facebook && !isPlaceholder(personalData.facebook) && (
                  <motion.a 
                    href={personalData.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-xs transition-all shadow-xs" 
                    aria-label="Facebook"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5 object-contain" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-border/70 shadow-[0_16px_35px_-15px_rgba(30,58,138,0.08)]">
              {formStatus === 'submitted' ? (
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
                    <AlertCircle size={24} />
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm max-w-xs">
                    {t.contact.form.notConfigured}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4"
                    onClick={() => setFormStatus('idle')}
                  >
                    Go Back
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-medium text-primary-text">{t.contact.form.name} <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-3 py-2 bg-gray-50 border border-border rounded-lg text-primary-text text-xs focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-medium text-primary-text">{t.contact.form.email} <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-3 py-2 bg-gray-50 border border-border rounded-lg text-primary-text text-xs focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent transition-all"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-xs font-medium text-primary-text">{t.contact.form.subject} <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      className="w-full px-3 py-2 bg-gray-50 border border-border rounded-lg text-primary-text text-xs focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-medium text-primary-text">{t.contact.form.message} <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      required 
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-50 border border-border rounded-lg text-primary-text text-xs focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-1">
                    <Button type="submit" variant="primary" size="sm" className="w-full py-2.5 text-xs font-semibold shadow-xs">
                      {t.contact.form.send}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
