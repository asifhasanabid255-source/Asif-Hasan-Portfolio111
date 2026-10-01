import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectCategory } from '../../types';
import { ExternalLink, Image as ImageIcon, Play, ArrowUpRight, Film, Sparkles, FolderKanban } from 'lucide-react';

export function Portfolio() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  // Categorize all video projects and graphic design projects
  const videoProjects = useMemo(() => {
    return projectsData.filter(
      p => p.category === 'Video Editing' || p.category === 'Motion Graphics' || p.platform === 'YouTube'
    );
  }, []);

  const graphicProjects = useMemo(() => {
    return projectsData.filter(
      p => p.category === 'Graphic Design' || p.platform === 'Behance'
    );
  }, []);

  const motionGraphicsProjects = useMemo(() => {
    return projectsData.filter(p => p.category === 'Motion Graphics');
  }, []);

  // Rules:
  // In the 'All' tab:
  // - Exactly 2 rows of video (6 videos: 3 per row)
  // - Exactly 1 row of graphic design (3 designs: 3 per row)
  // - Any extra video past 6 is hidden in 'All', but viewable in 'Video Editing'
  const MAX_ALL_VIDEOS = 6;
  const MAX_ALL_GRAPHICS = 3;

  const displayProjects = useMemo(() => {
    if (activeFilter === 'All') {
      const topVideos = videoProjects.slice(0, MAX_ALL_VIDEOS);
      const topGraphics = graphicProjects.slice(0, MAX_ALL_GRAPHICS);
      return [...topVideos, ...topGraphics];
    }
    if (activeFilter === 'Video Editing') {
      // Shows ALL video editing projects (including the ones hidden on the 'All' view)
      return videoProjects;
    }
    if (activeFilter === 'Graphic Design') {
      return graphicProjects;
    }
    if (activeFilter === 'Motion Graphics') {
      return motionGraphicsProjects;
    }
    return projectsData;
  }, [activeFilter, videoProjects, graphicProjects, motionGraphicsProjects]);

  const hiddenVideoCount = Math.max(0, videoProjects.length - MAX_ALL_VIDEOS);

  const filters: Array<{ id: 'All' | ProjectCategory; label: string; count: number }> = [
    { 
      id: 'All', 
      label: t.portfolio.filters.all, 
      count: Math.min(videoProjects.length, MAX_ALL_VIDEOS) + Math.min(graphicProjects.length, MAX_ALL_GRAPHICS) 
    },
    { 
      id: 'Video Editing', 
      label: t.portfolio.filters.videoEditing, 
      count: videoProjects.length 
    },
    { 
      id: 'Motion Graphics', 
      label: t.portfolio.filters.motionGraphics, 
      count: motionGraphicsProjects.length 
    },
    { 
      id: 'Graphic Design', 
      label: t.portfolio.filters.graphicDesign, 
      count: graphicProjects.length 
    },
  ];

  return (
    <section id="portfolio" className="pt-14 sm:pt-18 pb-14 md:pb-20 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden relative border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Latest Projects & Works */}
        <div id="portfolio-grid" className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-2.5 inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-primary-accent uppercase">
                {language === 'bn' ? 'পোর্টফোলিও ও গ্যালারি' : 'PORTFOLIO & GALLERY'}
              </span>
            </div>
            
            <SectionHeading 
              title={language === 'bn' ? 'লেটেস্ট প্রজেক্ট ও কাজসমূহ' : 'Latest Projects & Works'} 
              subtitle={
                activeFilter === 'All' 
                  ? (language === 'bn' 
                      ? 'ভিডিও এডিটিং, ৩ডি মোশন গ্রাফিক্স ও গ্রাফিক ডিজাইনের নির্বাচিত সকল কাজ' 
                      : 'Curated collection of video editing, 3D motion, and graphic design projects')
                  : (language === 'bn'
                      ? `নির্বাচিত ক্যাটাগরির সকল কাজ (${displayProjects.length}টি)`
                      : `Showing all projects in selected category (${displayProjects.length})`)
              }
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-accent flex items-center gap-1.5 ${
                activeFilter === filter.id
                  ? 'bg-primary-accent text-white shadow-md shadow-blue-900/25'
                  : 'bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm text-secondary-text border border-blue-100/90 dark:border-gray-800 hover:text-primary-accent hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              <span>{filter.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-50 dark:bg-gray-800 text-secondary-text'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => {
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
                  transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white/95 dark:bg-[#111520]/95 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-100/80 dark:border-blue-950/70 shadow-[0_4px_20px_-4px_rgba(30,58,138,0.08)] group hover:shadow-[0_20px_40px_-12px_rgba(30,58,138,0.22)] hover:border-blue-400/60 dark:hover:border-blue-600/50 transition-all duration-300 flex flex-col cursor-pointer block text-left"
                  aria-label={`${project.title[language]} (${project.platform})`}
                >
                  {/* Thumbnail Area */}
                  <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden border-b border-blue-100/50 dark:border-blue-950/50">
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
                    <div className="absolute top-2.5 left-2.5 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-primary-accent shadow-xs border border-blue-100/90 dark:border-blue-900/50">
                      {t.portfolio.filters[project.category === 'Video Editing' ? 'videoEditing' : project.category === 'Motion Graphics' ? 'motionGraphics' : 'graphicDesign']}
                    </div>

                    {/* Hover Play / Link Overlay indicator */}
                    <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

        {/* Notice & Button on 'All' View when older videos are archived / hidden */}
        {activeFilter === 'All' && hiddenVideoCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-4 sm:p-5 rounded-2xl bg-white-surface/90 border border-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 text-primary-accent flex items-center justify-center shrink-0">
                <Film size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-primary-text">
                  {language === 'bn'
                    ? `আরও ${hiddenVideoCount}টি পূর্বের ভিডিও প্রজেক্ট রয়েছে`
                    : `${hiddenVideoCount} more video projects available in archive`}
                </p>
                <p className="text-[11px] sm:text-xs text-secondary-text">
                  {language === 'bn'
                    ? 'হোমপেজে ২ লাইন ভিডিও ও ১ লাইন গ্রাফিক্স সাজানো হয়েছে। সম্পূর্ণ ভিডিও দেখতে ভিডিও এডিটিং সিলেক্ট করুন।'
                    : 'The homepage shows 2 rows of video & 1 row of graphics. Click below to view all videos.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveFilter('Video Editing');
                const elem = document.getElementById('portfolio-grid');
                if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <Play size={13} fill="currentColor" />
              <span>
                {language === 'bn' 
                  ? `সকল ভিডিও দেখুন (${videoProjects.length}টি)` 
                  : `View All ${videoProjects.length} Videos`}
              </span>
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {displayProjects.length === 0 && (
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
