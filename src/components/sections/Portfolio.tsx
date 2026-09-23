import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectCategory } from '../../types';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';

export function Portfolio() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  const filters: Array<{ id: 'All' | ProjectCategory; label: string }> = [
    { id: 'All', label: t.portfolio.filters.all },
    { id: 'Video Editing', label: t.portfolio.filters.videoEditing },
    { id: 'Motion Graphics', label: t.portfolio.filters.motionGraphics },
    { id: 'Graphic Design', label: t.portfolio.filters.graphicDesign },
  ];

  const filteredProjects = [...projectsData].reverse().filter(
    project => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="pt-10 pb-12 md:pt-16 md:pb-16 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-2 inline-flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-primary-accent"></span>
              <span className="text-xs font-semibold tracking-widest text-primary-accent uppercase">
                {t.portfolio.label}
              </span>
              <span className="w-6 h-[1px] bg-primary-accent"></span>
            </div>
            
            <SectionHeading 
              title={t.portfolio.heading} 
              subtitle={t.portfolio.subtitle}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-accent ${
                activeFilter === filter.id
                  ? 'bg-primary-accent text-white shadow-xs'
                  : 'bg-white-surface/85 backdrop-blur-sm text-secondary-text border border-border/70 hover:text-primary-text hover:border-primary-accent/30'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white-surface/85 backdrop-blur-md rounded-2xl overflow-hidden border border-border/70 shadow-sm group hover:shadow-[0_16px_35px_-10px_rgba(30,58,138,0.1)] hover:border-primary-accent/40 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail Area */}
                <div className="aspect-video w-full bg-gray-100 relative overflow-hidden border-b border-border/50">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title[language]} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                      <ImageIcon size={24} className="mb-1 opacity-50" />
                      <span className="text-xs font-medium opacity-70">Project Placeholder</span>
                    </div>
                  )}
                  {/* Category Tag overlay */}
                  <div className="absolute top-2.5 left-2.5 bg-white-surface/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-primary-text shadow-xs border border-border/50">
                    {t.portfolio.filters[project.category === 'Video Editing' ? 'videoEditing' : project.category === 'Motion Graphics' ? 'motionGraphics' : 'graphicDesign']}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-primary-text mb-1 line-clamp-1 group-hover:text-primary-accent transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-secondary-text text-xs mb-3 line-clamp-2 flex-grow leading-relaxed">
                    {project.description[language]}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2.5 border-t border-border/60 mt-auto">
                    <span className="text-[11px] font-medium text-secondary-text tracking-wider uppercase">
                      {t.portfolio.platform}: <span className="text-primary-text font-semibold">{project.platform}</span>
                    </span>
                    
                    {project.projectUrl ? (
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:underline group/link"
                        aria-label={`${t.action.viewProject} - ${project.title[language]}`}
                      >
                        <span>{t.action.viewProject}</span>
                        <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span 
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gray-300 cursor-not-allowed"
                        aria-disabled="true"
                        title="URL will be added later"
                      >
                        {t.action.viewProject}
                        <ExternalLink size={12} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <p className="text-secondary-text text-sm">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
