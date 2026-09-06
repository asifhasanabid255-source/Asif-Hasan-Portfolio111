import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { Mail, Phone, MapPin, Linkedin, Youtube, AlertCircle } from 'lucide-react';
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
      <div className={`flex items-start gap-4 ${isPh ? 'opacity-70' : ''}`}>
        <div className="w-10 h-10 rounded-xl bg-white-surface border border-border flex items-center justify-center text-primary-accent shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-text mb-1">{label}</h4>
          <span className="text-sm text-secondary-text">{displayValue}</span>
        </div>
      </div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
          {content}
        </a>
      );
    }

    return <div className="block">{content}</div>;
  };

  return (
    <section id="contact" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary-accent"></span>
                <span className="text-sm font-semibold tracking-widest text-primary-accent uppercase">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {renderContactItem(<Mail size={18} />, t.contact.info.email, personalData.email, (v) => `mailto:${v}`)}
              {renderContactItem(<Phone size={18} />, t.contact.info.whatsapp, personalData.whatsapp, (v) => `https://wa.me/${v.replace(/[^0-9]/g, '')}`)}
              {renderContactItem(<MapPin size={18} />, t.contact.info.location, personalData.location)}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-8 border-t border-border/50"
            >
              <div className="flex gap-4">
                {!isPlaceholder(personalData.linkedin) && (
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-md transition-all hover:-translate-y-1 shadow-sm" aria-label={t.contact.info.linkedin}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </a>
                )}
                {!isPlaceholder(personalData.youtube) && (
                  <a href={personalData.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-md transition-all hover:-translate-y-1 shadow-sm" aria-label={t.contact.info.youtube}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-7 h-7 object-contain" />
                  </a>
                )}
                {!isPlaceholder(personalData.behance) && (
                  <a href={personalData.behance} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden shadow-sm" aria-label={t.contact.info.behance}>
                    <img src="https://i.ibb.co/3mjFwGbJ/images.jpg" alt="Behance" className="w-full h-full object-cover" />
                  </a>
                )}
                {personalData.facebook && !isPlaceholder(personalData.facebook) && (
                  <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white-surface/90 border border-border/70 flex items-center justify-center hover:shadow-md transition-all hover:-translate-y-1 shadow-sm" aria-label="Facebook">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 object-contain" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white-surface/85 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-border/70 shadow-[0_25px_50px_-20px_rgba(30,58,138,0.1)]">
              {formStatus === 'submitted' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                    <AlertCircle size={32} />
                  </div>
                  <p className="text-secondary-text text-sm sm:text-base max-w-sm">
                    {t.contact.form.notConfigured}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setFormStatus('idle')}
                  >
                    Go Back
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-primary-text">{t.contact.form.name} <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/20 focus:border-primary-accent transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-primary-text">{t.contact.form.email} <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/20 focus:border-primary-accent transition-all"
                      placeholder="hello@example.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-primary-text">{t.contact.form.subject} <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/20 focus:border-primary-accent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-primary-text">{t.contact.form.message} <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      required 
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/20 focus:border-primary-accent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-sm font-semibold">
                    {t.contact.form.send}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
