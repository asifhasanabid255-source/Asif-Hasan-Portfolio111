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

        {/* Top Featured Video Showcase: NASHRUS SIRAH REGISTRATION (Always fixed at top) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 sm:mb-14"
        >
          <div className="bg-white-surface/90 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left: Embedded Video Player (7 cols on lg for 16:9 widescreen video) */}
              <div className="lg:col-span-7 flex justify-center w-full">
                <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-border/90 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/A3FxMVUsldA?rel=0&modestbranding=1"
                    title={language === 'bn' ? 'নশরুস সিরাহ রেজিস্ট্রেশন - অফিসিয়াল ভিডিও' : 'NASHRUS SIRAH REGISTRATION - Official Video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Right: Info, Hook & Action (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col items-start space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {language === 'bn' ? 'সর্বপ্রথম ভিডিও • অফিসিয়াল রিলিজ' : 'First Video • Official Release'}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-text leading-tight">
                  {language === 'bn' 
                    ? 'নশরুস সিরাহ রেজিস্ট্রেশন' 
                    : 'NASHRUS SIRAH REGISTRATION'}
                </h3>

                <p className="text-sm font-semibold text-primary-accent">
                  {language === 'bn' 
                    ? 'অফিসিয়াল প্রমোশনাল ও রেজিস্ট্রেশন ভিডিও' 
                    : 'Official Promotional & Registration Video'}
                </p>

                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {language === 'bn'
                    ? 'নশরুস সিরাহ-এর রেজিস্ট্রেশন সংক্রান্ত বিস্তারিত তথ্য ও গাইডলাইন সুন্দরভাবে তুলে ধরতে তৈরি প্রফেশনাল ভিডিও। মসৃণ এডিটিং, আকর্ষক টাইপোগ্রাফি ও তথ্যবহুল ভিজ্যুয়াল প্রেজেন্টেশন।'
                    : 'Official registration promotional video for Nashrus Sirah, featuring clean video editing, dynamic typography, and clear visual information flow.'}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    Adobe Premiere Pro
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    Motion Graphics
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-secondary-text">
                    Typography & Sound
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://youtu.be/A3FxMVUsldA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Play size={13} fill="currentColor" />
                    {language === 'bn' ? 'ইউটিউবে দেখুন' : 'Watch on YouTube'}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Section Sub-heading for other works */}
        <div id="portfolio-grid" className="flex flex-col items-center text-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary-text">
            {language === 'bn' ? 'লেটেস্ট প্রজেক্ট ও কাজসমূহ' : 'Latest Projects & Works'}
          </h3>
          <p className="text-xs sm:text-sm text-secondary-text mt-0.5">
            {activeFilter === 'All' 
              ? (language === 'bn' 
                  ? '২ লাইন ভিডিও (৬টি) ও ১ লাইন গ্রাফিক ডিজাইন (৩টি) • আরও ভিডিও দেখতে ক্যাটাগরিতে ক্লিক করুন' 
                  : '2 rows of video (6) & 1 row of graphic design (3) • Click category for all works')
              : (language === 'bn'
                  ? `নির্বাচিত ক্যাটাগরির সকল কাজ প্রদর্শিত হচ্ছে (${displayProjects.length}টি)`
                  : `Showing all projects in selected category (${displayProjects.length})`)}
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-accent flex items-center gap-1.5 ${
                activeFilter === filter.id
                  ? 'bg-primary-accent text-white shadow-xs'
                  : 'bg-white-surface/85 backdrop-blur-sm text-secondary-text border border-border/70 hover:text-primary-text hover:border-primary-accent/30'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              <span>{filter.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-secondary-text'
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
