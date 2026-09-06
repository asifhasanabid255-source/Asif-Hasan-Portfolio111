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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
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
                {t.services.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.services.heading} 
              subtitle={t.services.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white-surface/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-border/70 shadow-sm hover:shadow-[0_25px_50px_-20px_rgba(30,58,138,0.12)] hover:border-primary-accent/40 transition-all duration-500 flex flex-col h-full group hover:-translate-y-1"
            >
              {/* Card Header (Number & Icon) */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-300 font-sans tracking-wider pointer-events-none select-none">
                  {service.id}
                </span>
                <div className="text-secondary-text group-hover:text-primary-accent transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-primary-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary-text leading-relaxed text-sm md:text-base flex-grow mb-8">
                {service.description}
              </p>

              {/* Card Footer (Tools & Arrow) */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-white-surface/90 border border-border/60 text-xs font-medium text-secondary-text"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="pt-5 border-t border-border/60 flex items-center justify-end">
                   <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 border border-border/50 text-secondary-text group-hover:bg-primary-accent group-hover:text-white group-hover:border-primary-accent transition-all duration-300">
                     <ArrowRight size={14} className="transform group-hover:-rotate-45 transition-transform duration-300" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-secondary-text text-lg mb-2">{t.services.cta.question}</p>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-primary-text hover:text-primary-accent transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-4 rounded-md px-2 py-1"
          >
            {t.services.cta.action}
            <ArrowRight size={24} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
