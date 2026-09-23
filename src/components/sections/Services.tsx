import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { Video, Layers, PenTool, ArrowRight } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: t.services.items.videoEditing.id,
      title: t.services.items.videoEditing.title,
      description: t.services.items.videoEditing.desc,
      icon: <Video size={24} strokeWidth={1.5} />,
      tools: ['Adobe Premiere Pro'],
    },
    {
      id: t.services.items.motionGraphics.id,
      title: t.services.items.motionGraphics.title,
      description: t.services.items.motionGraphics.desc,
      icon: <Layers size={24} strokeWidth={1.5} />,
      tools: ['Adobe After Effects'],
    },
    {
      id: t.services.items.graphicDesign.id,
      title: t.services.items.graphicDesign.title,
      description: t.services.items.graphicDesign.desc,
      icon: <PenTool size={24} strokeWidth={1.5} />,
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="pt-4 pb-8 md:pt-6 md:pb-10 scroll-mt-20 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
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
                {t.services.label}
              </span>
              <span className="w-6 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.services.heading} 
              subtitle={t.services.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.1)] hover:border-primary-accent/40 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card Header (Number & Icon) */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-bold text-gray-300 font-sans tracking-wider pointer-events-none select-none group-hover:text-primary-accent/30 transition-colors">
                  {service.id}
                </span>
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-secondary-text group-hover:text-primary-accent group-hover:bg-primary-accent/10 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-base sm:text-lg font-bold text-primary-text mb-1.5 group-hover:text-primary-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-secondary-text leading-relaxed text-xs sm:text-sm flex-grow mb-4">
                {service.description}
              </p>

              {/* Card Footer (Tools & Arrow) */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {service.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-white-surface/90 border border-border/60 text-xs font-medium text-secondary-text group-hover:border-primary-accent/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-border/60 flex items-center justify-end">
                   <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-50 border border-border/50 text-secondary-text group-hover:bg-primary-accent group-hover:text-white group-hover:border-primary-accent transition-all duration-300">
                     <ArrowRight size={13} className="transform group-hover:-rotate-45 transition-transform duration-300" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-secondary-text text-xs sm:text-sm mb-1">{t.services.cta.question}</p>
          <motion.a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-primary-text hover:text-primary-accent transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-md px-2 py-0.5"
          >
            <span>{t.services.cta.action}</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
