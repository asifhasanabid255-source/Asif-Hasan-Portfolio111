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
    <section id="skills" className="py-24 bg-transparent overflow-hidden border-t border-border/40">
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
                {t.skills.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.skills.heading} 
              subtitle={t.skills.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white-surface/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-border/70 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] hover:border-primary-accent/40 transition-all duration-500 flex flex-col h-full relative group hover:-translate-y-1"
            >
              {/* Top Row: Icon & Number */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white-surface/90 flex items-center justify-center shadow-sm border border-border/60 group-hover:border-primary-accent/30 transition-colors group-hover:scale-110 duration-500">
                  {skill.icon}
                </div>
                <span className="text-4xl font-bold text-gray-200/80 pointer-events-none select-none font-sans">
                  {skill.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-text mb-3">
                  {skill.title}
                </h3>
                <p className="text-secondary-text leading-relaxed text-sm md:text-base">
                  {skill.description}
                </p>
              </div>

              {/* Tools List */}
              <div className="mt-8 pt-6 border-t border-border/70">
                <h4 className="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-3">
                  {/* Small contextual label, not explicitly requested to be localized, but best to keep simple */}
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white-surface/90 border border-border/60 text-xs font-medium text-secondary-text group-hover:border-primary-accent/30 group-hover:text-primary-accent transition-colors"
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
