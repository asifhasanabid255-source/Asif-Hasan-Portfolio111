import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectCategory } from '../../types';
import { ExternalLink, Image as ImageIcon, Play, ArrowUpRight } from 'lucide-react';

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
    <section id="home" className="pt-4 sm:pt-8 md:pt-10 pb-12 md:pb-16 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden">
      <span id="portfolio" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Portfolio First */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-2.5 inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white-surface border border-border shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-primary-text uppercase">
                {language === 'bn' ? 'আসিফ হাসান • ভিডিও এডিটর ও ডিজাইনার' : 'ASIF HASAN • VIDEO EDITOR & DESIGNER'}
              </span>
            </div>
            
            <SectionHeading 
              title={language === 'bn' ? 'নির্বাচিত সেরা কাজসমূহ' : 'Featured Creative Works'} 
              subtitle={language === 'bn' ? 'ভিডিও এডিটিং, ৩ডি মোশন গ্রাফিক্স ও গ্রাফিক ডিজাইনের নির্বাচিত সেরা প্রজেক্ট' : 'Curated collection of high-impact video editing, 3D motion, and graphic design'}
              alignment="center"
            />
          </motion.div>
        </div>

        {/* Top Featured Video Showcase: "এই মানুষগুলো এখানে কেন দাঁড়িয়ে আছে" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 sm:mb-14"
        >
          <div className="bg-white-surface/90 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left: Embedded Short Video Player (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[270px] sm:max-w-[300px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-border/90 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/8AgmX8Mkhx0?rel=0&modestbranding=1"
                    title={language === 'bn' ? 'নাজমুল স্যার - এই মানুষগুলো এখানে কেন দাঁড়িয়ে আছে?' : 'Nazmul Sir - Why Are These People Standing Here?'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Right: Info, Hook & Action (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {language === 'bn' ? 'সর্বপ্রথম ভিডিও • ফিচার্ড রিলিজ' : 'First Video • Featured Release'}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-text leading-tight">
                  {language === 'bn' 
                    ? 'নাজমুল স্যার — এই মানুষগুলো এখানে কেন দাঁড়িয়ে আছে?' 
                    : 'Nazmul Sir — Dynamic Short Video'}
                </h3>

                <p className="text-sm font-semibold text-primary-accent">
                  {language === 'bn'
                    ? 'ডায়নামিক ভিডিও এডিটিং ও ভিজ্যুয়াল স্টোরিটেলিং'
                    : 'Dynamic Video Editing & Visual Storytelling'}
                </p>

                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {language === 'bn'
                    ? 'এই মানুষগুলো এখানে কেন দাঁড়িয়ে আছে নিয়ে তৈরি আকর্ষণীয় ও ডায়নামিক ভিডিও এডিটিং প্রজেক্ট। দ্রুতগতির কাটস, চমৎকার সাউন্ড এফেক্টস ও টেক্সট মোশনের সমন্বয়ে তৈরি।'
                    : 'A high-energy, engaging short video featuring dynamic pacing, modern cuts, sound design, and text animation.'}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    Adobe Premiere Pro
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    After Effects
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    Sound Design & Motion
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://youtube.com/shorts/8AgmX8Mkhx0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Play size={13} fill="currentColor" />
                    {language === 'bn' ? 'ইউটিউবে ওপেন করুন' : 'Watch on YouTube'}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Section Sub-heading for other works */}
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary-text">
            {language === 'bn' ? 'আমার অন্যান্য সর্বশেষ প্রজেক্টসমূহ' : 'Other Latest Projects & Works'}
          </h3>
          <p className="text-xs sm:text-sm text-secondary-text mt-0.5">
            {language === 'bn' ? 'ক্যাটাগরি অনুযায়ী ফিল্টার করে দেখুন' : 'Filter by category to explore more works'}
          </p>
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
            {filteredProjects.map((project, index) => {
              const hasUrl = Boolean(project.projectUrl);
              return (
                <motion.a
                  key={project.id}
                  href={hasUrl ? project.projectUrl : undefined}
                  target={hasUrl ? "_blank" : undefined}
                  rel={hasUrl ? "noopener noreferrer" : undefined}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white-surface/85 backdrop-blur-md rounded-2xl overflow-hidden border border-border/70 shadow-sm group hover:shadow-[0_20px_40px_-12px_rgba(30,58,138,0.18)] hover:border-primary-accent/50 transition-all duration-300 flex flex-col cursor-pointer block text-left"
                  aria-label={`${project.title[language]} (${project.platform})`}
                >
                  {/* Thumbnail Area */}
                  <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden border-b border-border/50">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title[language]} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/60">
                        <ImageIcon size={24} className="mb-1 opacity-50" />
                        <span className="text-xs font-medium opacity-70">Project Placeholder</span>
                      </div>
                    )}

                    {/* Category Tag overlay */}
                    <div className="absolute top-2.5 left-2.5 bg-white-surface/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-primary-text shadow-xs border border-border/50">
                      {t.portfolio.filters[project.category === 'Video Editing' ? 'videoEditing' : project.category === 'Motion Graphics' ? 'motionGraphics' : 'graphicDesign']}
                    </div>

                    {/* Hover Play / Link Overlay indicator */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary-accent text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        {project.category === 'Video Editing' || project.platform === 'YouTube' ? (
                          <Play size={20} fill="white" className="ml-0.5" />
                        ) : (
                          <ArrowUpRight size={22} strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-bold text-primary-text line-clamp-1 group-hover:text-primary-accent transition-colors">
                        {project.title[language]}
                      </h3>
                      <ArrowUpRight 
                        size={17} 
                        className="text-secondary-text/70 group-hover:text-primary-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" 
                      />
                    </div>

                    <p className="text-secondary-text text-xs mb-3.5 line-clamp-2 flex-grow leading-relaxed">
                      {project.description[language]}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2.5 border-t border-border/60 mt-auto">
                      <span className="text-[11px] font-medium text-secondary-text tracking-wider uppercase">
                        {t.portfolio.platform}: <span className="text-primary-text font-semibold">{project.platform}</span>
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-accent group-hover:text-accent-hover transition-colors">
                        <span>
                          {project.platform === 'YouTube' 
                            ? (language === 'bn' ? 'ইউটিউবে দেখুন' : 'Watch Video')
                            : (language === 'bn' ? 'বিহ্যান্সে দেখুন' : 'View on Behance')}
                        </span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
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
