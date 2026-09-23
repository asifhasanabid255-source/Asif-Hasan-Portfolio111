import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { Video, Layers, PenTool } from 'lucide-react';

export function SkillsAndTools() {
  const { t } = useLanguage();

  const skillsData = [
    {
      id: t.skills.categories.videoEditing.id,
      title: t.skills.categories.videoEditing.title,
      description: t.skills.categories.videoEditing.desc,
      icon: <Video size={28} className="text-primary-accent" />,
      tools: ['Adobe Premiere Pro'],
    },
    {
      id: t.skills.categories.motionGraphics.id,
      title: t.skills.categories.motionGraphics.title,
      description: t.skills.categories.motionGraphics.desc,
      icon: <Layers size={28} className="text-primary-accent" />,
      tools: ['Adobe After Effects'],
    },
    {
      id: t.skills.categories.graphicDesign.id,
      title: t.skills.categories.graphicDesign.title,
      description: t.skills.categories.graphicDesign.desc,
      icon: <PenTool size={28} className="text-primary-accent" />,
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
  ];

  return (
    <section id="skills" className="pt-4 pb-8 md:pt-6 md:pb-10 scroll-mt-20 bg-transparent overflow-hidden border-t border-border/40">
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
                {t.skills.label}
              </span>
              <span className="w-6 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.skills.heading} 
              subtitle={t.skills.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white-surface/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-border/70 shadow-sm hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.1)] hover:border-primary-accent/40 transition-all duration-300 flex flex-col h-full relative group cursor-default"
            >
              {/* Top Row: Icon & Number */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-white-surface/90 flex items-center justify-center shadow-xs border border-border/60 group-hover:border-primary-accent/30 group-hover:bg-primary-accent/5 transition-all">
                  {skill.icon}
                </div>
                <span className="text-2xl font-bold text-gray-200 pointer-events-none select-none font-sans group-hover:text-primary-accent/25 transition-colors">
                  {skill.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-primary-text mb-1.5 group-hover:text-primary-accent transition-colors">
                  {skill.title}
                </h3>
                <p className="text-secondary-text leading-relaxed text-xs sm:text-sm">
                  {skill.description}
                </p>
              </div>

              {/* Tools List */}
              <div className="mt-5 pt-3.5 border-t border-border/60">
                <h4 className="text-[11px] font-semibold text-secondary-text uppercase tracking-wider mb-2">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white-surface/90 border border-border/60 text-xs font-medium text-secondary-text group-hover:border-primary-accent/30 group-hover:text-primary-accent transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
