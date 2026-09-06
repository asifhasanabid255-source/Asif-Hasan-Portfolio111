import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectCategory } from '../../types';
import { Button } from '../ui/Button';
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

  const filteredProjects = projectsData.filter(
    project => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 bg-transparent overflow-hidden min-h-screen border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-primary-accent"></span>
              <span className="text-sm font-semibold tracking-widest text-primary-accent uppercase">
                {t.portfolio.label}
              </span>
              <span className="w-8 h-[1px] bg-primary-accent"></span>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 ${
                activeFilter === filter.id
                  ? 'bg-primary-accent text-white shadow-md'
                  : 'bg-white-surface/85 backdrop-blur-sm text-secondary-text border border-border/70 hover:text-primary-text hover:border-primary-accent/30'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white-surface/85 backdrop-blur-md rounded-3xl overflow-hidden border border-border/70 shadow-sm group hover:shadow-[0_25px_50px_-20px_rgba(30,58,138,0.12)] hover:border-primary-accent/40 transition-all duration-500 flex flex-col hover:-translate-y-1"
              >
                {/* Thumbnail Area */}
                <div className="aspect-video w-full bg-gray-100 relative overflow-hidden border-b border-border/50">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title[language]} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                      <ImageIcon size={32} className="mb-2 opacity-50" />
                      <span className="text-sm font-medium opacity-70">Project Placeholder</span>
                    </div>
                  )}
                  {/* Category Tag overlay */}
                  <div className="absolute top-4 left-4 bg-white-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-text shadow-sm border border-border/50">
                    {t.portfolio.filters[project.category === 'Video Editing' ? 'videoEditing' : project.category === 'Motion Graphics' ? 'motionGraphics' : 'graphicDesign']}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary-text mb-2 line-clamp-2">
                    {project.title[language]}
                  </h3>
                  <p className="text-secondary-text text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {project.description[language]}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="text-xs font-semibold text-secondary-text tracking-wider uppercase">
                      {t.portfolio.platform}: <span className="text-primary-text">{project.platform}</span>
                    </span>
                    
                    {project.projectUrl ? (
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:underline"
                        aria-label={`${t.action.viewProject} - ${project.title[language]}`}
                      >
                        {t.action.viewProject}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span 
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 cursor-not-allowed"
                        aria-disabled="true"
                        title="URL will be added later"
                      >
                        {t.action.viewProject}
                        <ExternalLink size={14} />
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
            className="text-center py-20"
          >
            <p className="text-secondary-text text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
